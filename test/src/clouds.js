/* MEOW (test copy) — clouds (Settings → Graphics → Clouds).
   · Simple: one flat, drifting layer of soft clouds high up (cheap: one noise lookup per pixel).
   · Realistic: a thick 3D cloud layer. For every pixel of sky the shader steps through the layer
     (ray marching), adds up how much cloud it passes, and for each step looks toward the sun to see
     how much light gets through. That gives puffy tops, bright sunny edges and dark grey bellies.
     It costs much more graphics power, so it is meant for Best / Extreme.
   The clouds follow the sky's sun, colours and time of day, and thicken when it rains. */
import * as THREE from 'three';

export function createClouds(scene, U) {
  const CU = {
    uMode: { value: 0 }, uCover: { value: 0.45 }, uDark: { value: 0 }, uCam: { value: new THREE.Vector3() }, uWind: { value: new THREE.Vector2() }
  };
  const mat = new THREE.ShaderMaterial({
    uniforms: Object.assign(CU, { uTime: U.uTime, uSunDir: U.uSunDir, uSunColor: U.uSunColor, uTop: U.uTop, uHorizon: U.uHorizon }),
    transparent: true, depthWrite: false, depthTest: true, side: THREE.BackSide, fog: false,
    defines: { REAL: 0 },
    vertexShader: /* glsl */`
      varying vec3 vDir;
      void main() { vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }`,
    fragmentShader: /* glsl */`
      uniform float uTime, uCover, uDark;
      uniform vec3 uSunDir, uSunColor, uTop, uHorizon, uCam;
      uniform vec2 uWind;
      varying vec3 vDir;
      float h3(vec3 p) { p = fract(p * 0.3183099 + vec3(0.71, 0.113, 0.419)); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
      float n3(vec3 x) {
        vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(mix(h3(i), h3(i + vec3(1,0,0)), f.x), mix(h3(i + vec3(0,1,0)), h3(i + vec3(1,1,0)), f.x), f.y),
                   mix(mix(h3(i + vec3(0,0,1)), h3(i + vec3(1,0,1)), f.x), mix(h3(i + vec3(0,1,1)), h3(i + vec3(1,1,1)), f.x), f.y), f.z);
      }
      float fbm2(vec2 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++) { s += a * n3(vec3(p, 0.5)); p = p * 2.03 + 11.7; a *= 0.5; } return s; }
      float fbm3(vec3 p, int oct) { float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++) { if (i >= oct) break; s += a * n3(p); p = p * 2.07 + vec3(5.1, 1.3, 7.7); a *= 0.5; } return s; }
      // clouds sit between these heights (world units); the camera lives near y = 0..30
      const float BASE = 230.0, TOP = 420.0;
      float density(vec3 p, int oct) {
        vec3 q = p * 0.0042 + vec3(uWind.x, 0.0, uWind.y);
        float shape = fbm3(q, oct);
        float hgt = clamp((p.y - BASE) / (TOP - BASE), 0.0, 1.0);
        float profile = smoothstep(0.0, 0.18, hgt) * smoothstep(1.0, 0.45, hgt);   // flat bottoms, rounded tops
        float d = (shape - (1.0 - uCover) * 0.78 - 0.08) * profile;
        return max(0.0, d) * 2.4;
      }
      void main() {
        vec3 d = normalize(vDir);
        if (d.y < 0.015) discard;
        vec3 sun = normalize(uSunDir);
        float sunUp = smoothstep(-0.12, 0.25, sun.y);
        vec3 lightCol = mix(vec3(0.16, 0.18, 0.24), uSunColor * 1.15 + vec3(0.25), sunUp) * (1.0 - uDark * 0.55);
        vec3 ambient = mix(uHorizon, uTop, 0.6) * (0.85 - uDark * 0.4);
        float far = smoothstep(0.015, 0.12, d.y);   // fade into the haze near the horizon
      #if REAL == 0
        // one flat layer: where the view ray meets the plane at y = 300
        float t = (300.0 - uCam.y) / d.y;
        vec2 p = (uCam.xz + d.xz * t) * 0.0016 + uWind;
        float c = fbm2(p);
        float a = smoothstep(1.0 - uCover - 0.05, 1.0 - uCover + 0.32, c);
        float lit = clamp(0.55 + (fbm2(p + sun.xz * 0.05) - c) * -3.0, 0.25, 1.0);
        vec3 col = mix(ambient * 0.9, lightCol, lit * (0.55 + 0.45 * sunUp));
        float forward = pow(max(dot(d, sun), 0.0), 8.0) * sunUp;
        col += uSunColor * forward * 0.35 * (1.0 - a);
        gl_FragColor = vec4(col, a * far * 0.92);
      #else
        // march through the cloud layer
        float t0 = (BASE - uCam.y) / d.y, t1 = (TOP - uCam.y) / d.y;
        t1 = min(t1, t0 + 2600.0);
        const int STEPS = 44;
        float dt = (t1 - t0) / float(STEPS);
        float jitter = h3(vec3(gl_FragCoord.xy, uTime));
        float T = 1.0; vec3 acc = vec3(0.0);
        float cosA = dot(d, sun);
        float phase = 0.55 * (1.0 + 3.0 * pow(max(cosA, 0.0), 6.0)) / 2.2 + 0.35;   // brighter looking toward the sun (silver lining)
        for (int i = 0; i < STEPS; i++) {
          vec3 p = uCam + d * (t0 + (float(i) + jitter) * dt);
          float den = density(p, 4);
          if (den > 0.002) {
            // light reaching this point: a few steps toward the sun
            float sh = 0.0;
            for (int j = 1; j <= 4; j++) sh += density(p + sun * float(j) * 26.0, 3);
            float beer = exp(-sh * 0.55), powder = 1.0 - exp(-den * 2.0);
            vec3 lum = lightCol * beer * powder * phase * 2.2 + ambient * (0.45 + 0.35 * smoothstep(BASE, TOP, p.y));
            float aStep = 1.0 - exp(-den * dt * 0.018);
            acc += T * aStep * lum;
            T *= 1.0 - aStep;
            if (T < 0.03) break;
          }
        }
        gl_FragColor = vec4(acc / max(1.0 - T, 1e-3), (1.0 - T) * far);
      #endif
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(1300, 48, 24), mat);
  mesh.frustumCulled = false; mesh.renderOrder = -1; mesh.visible = false;
  scene.add(mesh);
  let mode = 0;
  return {
    mesh,
    // 0 off · 1 simple · 2 realistic
    setMode(m) {
      m = Math.max(0, Math.min(2, m | 0)); if (m === mode && mesh.visible === (m > 0)) return;
      mode = m; mesh.visible = m > 0;
      const real = m === 2 ? 1 : 0; if (mat.defines.REAL !== real) { mat.defines.REAL = real; mat.needsUpdate = true; }
    },
    get mode() { return mode; },
    // cover 0..1 (how cloudy), dark 0..1 (storm darkness)
    update(camPos, dt, cover, dark) {
      mesh.position.copy(camPos); CU.uCam.value.copy(camPos);
      CU.uWind.value.x += dt * 0.0035; CU.uWind.value.y += dt * 0.0012;
      CU.uCover.value += (cover - CU.uCover.value) * Math.min(1, dt * 0.5);
      CU.uDark.value += (dark - CU.uDark.value) * Math.min(1, dt * 0.5);
    }
  };
}
