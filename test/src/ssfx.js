/* MEOW (test copy) — screen-space lighting, run between drawing the world and the film lens.
   Works only from the picture and its depth buffer (so it never fights the custom shaders):
     · ambient occlusion      — dark creases where things meet (corners, under furniture, grass roots)
     · contact shadows        — a short ray marched toward the sun from every pixel: tiny shadows where
                                things touch the ground, so nothing looks like it floats
     · bounce light (SSGI)    — light from nearby lit surfaces spills onto their neighbours
     · reflections (SSR)      — rays reflected off the lake / ice surface and traced through the picture
     · light shafts           — sun rays streaming past trees and through windows
   Graphics levels switch these on (see GFX_LEVELS in main.js). */
import * as THREE from 'three';

const quadVS = 'varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }';
const COMMON = /* glsl */`
  uniform sampler2D tColor, tDepth; uniform vec2 uRes;
  uniform mat4 uProj, uInvProj, uView, uInvView;
  uniform float uTime;
  varying vec2 vUv;
  float hash(vec2 p) { return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }
  vec3 viewPos(vec2 uv, float d) { vec4 v = uInvProj * vec4(uv * 2.0 - 1.0, d * 2.0 - 1.0, 1.0); return v.xyz / v.w; }
  vec3 viewAt(vec2 uv) { return viewPos(uv, texture2D(tDepth, uv).x); }
  vec2 toUV(vec3 p) { vec4 c = uProj * vec4(p, 1.0); return c.xy / c.w * 0.5 + 0.5; }
  // the surface normal, rebuilt from the depth of the neighbouring pixels (the smaller step on each side)
  vec3 normalAt(vec2 uv, vec3 p) {
    vec2 px = 1.0 / uRes;
    vec3 r = viewAt(uv + vec2(px.x, 0.0)) - p, l = p - viewAt(uv - vec2(px.x, 0.0));
    vec3 u = viewAt(uv + vec2(0.0, px.y)) - p, d = p - viewAt(uv - vec2(0.0, px.y));
    vec3 dx = abs(r.z) < abs(l.z) ? r : l, dy = abs(u.z) < abs(d.z) ? u : d;
    vec3 n = normalize(cross(dx, dy));
    return n.z < 0.0 ? -n : n;
  }
  float lum(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }`;

// pass 1: per pixel occlusion, contact shadow and bounce light (at a fraction of the screen size)
const passA = /* glsl */`${COMMON}
  uniform float uAO, uAOSamples, uContact, uGI, uSunAmt; uniform vec3 uSunView;
  void main() {
    float d = texture2D(tDepth, vUv).x;
    if (d >= 0.99999) { gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); return; }
    vec3 P = viewPos(vUv, d), N = normalAt(vUv, P);
    float rot = hash(gl_FragCoord.xy + fract(uTime * 0.0) * 0.0) * 6.2831853;
    float pxPerUnit = uProj[1][1] * 0.5 * uRes.y / max(0.5, -P.z);
    float occ = 1.0, cs = 1.0; vec3 gi = vec3(0.0);
    // ambient occlusion (Alchemy-style), radius ~3 world units
    if (uAO > 0.0) {
      const float R = 3.0; float sum = 0.0; int n = int(uAOSamples);
      for (int i = 0; i < 16; i++) {
        if (i >= n) break;
        float fi = float(i), rr = sqrt((fi + 0.5) / float(n)), a = fi * 2.39996 + rot;
        vec2 o = vec2(cos(a), sin(a)) * rr * R * pxPerUnit / uRes;
        vec3 S = viewAt(vUv + o), v = S - P;
        float vv = dot(v, v);
        if (vv < R * R * 4.0) sum += max(0.0, dot(v, N) - 0.02 * -P.z) / (vv + 0.05);
      }
      occ = clamp(1.0 - 2.2 * sum / float(n), 0.0, 1.0);
      occ = mix(1.0, pow(occ, 1.4), uAO);
    }
    // contact shadow: march a short ray toward the sun and see if something in the picture blocks it
    if (uContact > 0.0 && uSunAmt > 0.01 && dot(N, uSunView) > 0.05) {
      const int STEPS = 14; const float MAXD = 5.5;
      float j = hash(gl_FragCoord.yx + 3.7);
      for (int i = 1; i <= STEPS; i++) {
        float t = (float(i) - j) / float(STEPS);
        vec3 Q = P + N * 0.04 * -P.z * 0.01 + uSunView * t * MAXD;
        vec2 q = toUV(Q);
        if (q.x < 0.0 || q.y < 0.0 || q.x > 1.0 || q.y > 1.0) break;
        float sz = viewAt(q).z, gap = sz - Q.z;
        if (gap > 0.06 + 0.002 * -P.z && gap < 2.5) { cs = 1.0 - uContact * uSunAmt * (1.0 - t * 0.6); break; }
      }
    }
    // bounce light: lit neighbours within ~10 units add their light, weighted by how they face us
    if (uGI > 0.0) {
      const float R = 10.0; float w = 0.0;
      for (int i = 0; i < 10; i++) {
        float fi = float(i), rr = sqrt((fi + 0.5) / 10.0), a = fi * 2.39996 + rot * 1.7;
        vec2 uvs = vUv + vec2(cos(a), sin(a)) * rr * R * pxPerUnit / uRes;
        if (uvs.x < 0.0 || uvs.y < 0.0 || uvs.x > 1.0 || uvs.y > 1.0) continue;
        vec3 S = viewAt(uvs), v = S - P; float dist = length(v);
        if (dist < 0.05 || dist > R * 2.0) continue;
        float k = max(0.0, dot(N, v / dist)) / (1.0 + dist * dist * 0.03);
        gi += min(texture2D(tColor, uvs).rgb, vec3(4.0)) * k; w += 1.0;
      }
      gi = gi / 10.0 * uGI;
    }
    gl_FragColor = vec4(gi, occ * cs);
  }`;

// pass 2: soften pass 1 (depth-aware) and put everything together, plus reflections and light shafts
const passB = /* glsl */`${COMMON}
  uniform sampler2D tFX; uniform vec2 uFXRes;
  uniform float uOn, uSSR, uWaterY, uIce, uRays, uSunVis; uniform vec2 uSunUV; uniform vec3 uSunCol;
  void main() {
    vec3 col = texture2D(tColor, vUv).rgb;
    float d = texture2D(tDepth, vUv).x;
    vec3 P = viewPos(vUv, d);
    if (uOn > 0.0 && d < 0.99999) {
      // depth-aware 3×3 blur of the lighting terms (removes the sampling noise, keeps edges)
      vec4 acc = vec4(0.0); float ws = 0.0; vec2 px = 1.0 / uFXRes;
      for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
        vec2 o = vec2(float(x), float(y)) * px * 1.5;
        float dz = abs(viewAt(vUv + o).z - P.z);
        float w = 1.0 / (1.0 + dz * dz * 4.0);
        acc += texture2D(tFX, vUv + o) * w; ws += w;
      }
      acc /= ws;
      vec3 alb = clamp(col / (lum(col) + 0.25), 0.0, 1.6);
      col = col * acc.a + acc.rgb * alb * 0.6;
    }
    // reflections on the lake / ice: the flat surface at water height, facing up
    if (uSSR > 0.0 && d < 0.99999) {
      vec3 W = (uInvView * vec4(P, 1.0)).xyz;
      // the lake / ice surface: found by its height alone (rebuilt normals flicker at grazing angles)
      if (abs(W.y - uWaterY) < 0.12 + 0.003 * -P.z && W.y > uWaterY - 2.0) {
        vec3 up = normalize((uView * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
        vec3 V = normalize(P), R = reflect(V, up);
        float t = 0.0, stepL = 1.5 + -P.z * 0.02; vec2 hit = vec2(-1.0);
        for (int i = 0; i < 40; i++) {
          t += stepL; stepL *= 1.07;
          vec3 Q = P + R * t; if (Q.z > -0.1) break;
          vec2 q = toUV(Q); if (q.x < 0.0 || q.y < 0.0 || q.x > 1.0 || q.y > 1.0) break;
          float sd = texture2D(tDepth, q).x; if (sd >= 0.99999) continue;
          float sz = viewPos(q, sd).z;
          if (sz > Q.z && sz - Q.z < stepL * 1.6 + 0.5) {
            // refine
            float a = t - stepL, b = t;
            for (int k = 0; k < 5; k++) { float m = 0.5 * (a + b); vec3 M = P + R * m; vec2 mq = toUV(M); if (viewAt(mq).z > M.z) b = m; else a = m; }
            hit = toUV(P + R * b); break;
          }
        }
        if (hit.x >= 0.0) {
          float cosv = clamp(dot(-V, up), 0.0, 1.0), F = 0.02 + 0.98 * pow(1.0 - cosv, 5.0);
          vec2 e = smoothstep(0.0, 0.2, hit) * smoothstep(1.0, 0.8, hit);   // fade softly toward the edges (no popping)
          float k = clamp(F * 2.6 + 0.18, 0.0, 1.0) * e.x * e.y * mix(0.8, 0.35, uIce) * uSSR * smoothstep(1.0, 0.85, hit.y);
          col = mix(col, texture2D(tColor, hit).rgb, k);
        }
      }
    }
    // light shafts: march toward the sun on screen, gathering bright sky between the objects
    if (uRays > 0.0 && uSunVis > 0.0) {
      vec2 dir = uSunUV - vUv; float L = length(dir);
      float j = hash(gl_FragCoord.xy + 9.1), ill = 0.0, decay = 1.0;
      vec2 st = dir / 32.0;
      for (int i = 0; i < 32; i++) {
        vec2 q = vUv + st * (float(i) + j);
        if (q.x < 0.0 || q.y < 0.0 || q.x > 1.0 || q.y > 1.0) break;
        float sky = step(0.99999, texture2D(tDepth, q).x);
        ill += sky * smoothstep(0.6, 2.5, lum(texture2D(tColor, q).rgb)) * decay; decay *= 0.965;
      }
      col += uSunCol * ill / 32.0 * uRays * uSunVis * smoothstep(1.25, 0.0, L) * 1.6;
    }
    gl_FragColor = vec4(col, 1.0);
  }`;

export function createSSFX() {
  const mk = (frag, extra) => new THREE.ShaderMaterial({
    uniforms: Object.assign({
      tColor: { value: null }, tDepth: { value: null }, uRes: { value: new THREE.Vector2() },
      uProj: { value: new THREE.Matrix4() }, uInvProj: { value: new THREE.Matrix4() }, uView: { value: new THREE.Matrix4() }, uInvView: { value: new THREE.Matrix4() }, uTime: { value: 0 }
    }, extra), vertexShader: quadVS, fragmentShader: frag, depthTest: false, depthWrite: false
  });
  const A = mk(passA, { uAO: { value: 0 }, uAOSamples: { value: 8 }, uContact: { value: 0 }, uGI: { value: 0 }, uSunAmt: { value: 0 }, uSunView: { value: new THREE.Vector3(0, 1, 0) } });
  const B = mk(passB, { tFX: { value: null }, uFXRes: { value: new THREE.Vector2() }, uOn: { value: 0 }, uSSR: { value: 0 }, uWaterY: { value: 0 }, uIce: { value: 0 },
    uRays: { value: 0 }, uSunVis: { value: 0 }, uSunUV: { value: new THREE.Vector2() }, uSunCol: { value: new THREE.Color() } });
  const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), A); quad.frustumCulled = false;
  const scene = new THREE.Scene(); scene.add(quad);
  const cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const fxRT = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType });
  const outRT = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType });
  const S = { ao: 0, aoSamples: 8, contact: 0, gi: 0, ssr: 0, rays: 0, scale: 0.5, w: 4, h: 4 };
  const v = new THREE.Vector3();
  const api = {
    get enabled() { return S.ao > 0 || S.contact > 0 || S.gi > 0 || S.ssr > 0 || S.rays > 0; },
    // set from the graphics level
    configure(o) { Object.assign(S, o); api.resize(S.w, S.h); },
    resize(w, h) {
      S.w = w; S.h = h;
      outRT.setSize(w, h);
      fxRT.setSize(Math.max(4, Math.round(w * S.scale)), Math.max(4, Math.round(h * S.scale)));
    },
    // rough graphics memory of these buffers (bytes)
    bytes() { return api.enabled ? (S.w * S.h * 8 + fxRT.width * fxRT.height * 8) : 0; },
    /* frame: { sunDir (world, toward the sun), sunAmt 0..1, sunColor, sunVisible 0..1, waterY, ice } */
    render(renderer, srcRT, camera, time, frame) {
      const all = [A.uniforms, B.uniforms];
      camera.updateMatrixWorld();
      for (const u of all) {
        u.tColor.value = srcRT.texture; u.tDepth.value = srcRT.depthTexture; u.uTime.value = time;
        u.uProj.value.copy(camera.projectionMatrix); u.uInvProj.value.copy(camera.projectionMatrixInverse);
        u.uView.value.copy(camera.matrixWorldInverse); u.uInvView.value.copy(camera.matrixWorld);
      }
      const ua = A.uniforms, ub = B.uniforms;
      ua.uRes.value.set(fxRT.width, fxRT.height);
      ua.uAO.value = S.ao; ua.uAOSamples.value = S.aoSamples; ua.uContact.value = S.contact; ua.uGI.value = S.gi;
      ua.uSunAmt.value = frame.sunAmt;
      ua.uSunView.value.copy(frame.sunDir).transformDirection(camera.matrixWorldInverse);
      ub.uRes.value.set(S.w, S.h); ub.tFX.value = fxRT.texture; ub.uFXRes.value.set(fxRT.width, fxRT.height);
      ub.uOn.value = (S.ao > 0 || S.contact > 0 || S.gi > 0) ? 1 : 0;
      ub.uSSR.value = S.ssr; ub.uWaterY.value = frame.waterY; ub.uIce.value = frame.ice;
      ub.uRays.value = S.rays; ub.uSunCol.value.copy(frame.sunColor);
      // where the sun is on screen (no shafts when it's behind you)
      v.copy(frame.sunDisc || frame.sunDir).multiplyScalar(2000).add(camera.position).project(camera);
      const inFront = v.z < 1;
      ub.uSunUV.value.set(v.x * 0.5 + 0.5, v.y * 0.5 + 0.5);
      ub.uSunVis.value = inFront ? frame.sunVisible * Math.max(0, 1 - Math.max(Math.abs(v.x), Math.abs(v.y)) / 2.2) : 0;
      if (ub.uOn.value) { quad.material = A; renderer.setRenderTarget(fxRT); renderer.render(scene, cam); }
      quad.material = B; renderer.setRenderTarget(outRT); renderer.render(scene, cam);
      renderer.setRenderTarget(null);
      return outRT.texture;
    }
  };
  return api;
}
