/* MEOW — the film lens (post-processing).
   The scene is drawn into a texture, then this pass adds a camera feel:
     · outdoors: shallow depth of field by screen height (horizon sharp, top/bottom soft)
     · indoors: real focus on whatever the centre dot is on (from the depth buffer)
     · colour fringing at the edges, vignette, grain and a faint projector flicker
     · uSat: how much colour the picture keeps (0 = black & white) */
import * as THREE from 'three';

export function createLens(U) {
  const rt = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, depthBuffer: true });
  rt.depthTexture = new THREE.DepthTexture(4, 4);
  const LU = {
    tScene: { value: rt.texture }, tDepth: { value: rt.depthTexture }, uRes: { value: new THREE.Vector2(4, 4) }, uTime: U.uTime,
    uBlur: { value: 3 }, uBand: { value: 0.22 }, uFocusY: { value: 0.47 }, uPull: { value: 0 },
    uAberr: { value: 0.006 }, uSat: { value: 0 }, uGrain: { value: 0.022 }, uVig: { value: 0.32 }, uFlicker: { value: 0.01 },
    uNear: { value: 0.5 }, uFar: { value: 3000 }, uIndoor: { value: 0 }, uBlurIn: { value: 4.5 }, uSharp: { value: 0 }
  };
  const scene = new THREE.Scene();
  const cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({
    uniforms: LU, depthTest: false, depthWrite: false,
    vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
    fragmentShader: /* glsl */`
      uniform sampler2D tScene, tDepth; uniform vec2 uRes;
      uniform float uTime, uBlur, uBand, uFocusY, uPull, uAberr, uSat, uGrain, uVig, uFlicker, uNear, uFar, uIndoor, uBlurIn, uSharp;
      varying vec2 vUv;
      float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
      float lin(float d) { float z = d * 2.0 - 1.0; return 2.0 * uNear * uFar / (uFar + uNear - z * (uFar - uNear)); }
      void main() {
        vec2 uv = vUv, c = uv - 0.5;
        float r = length(c * vec2(uRes.x / uRes.y, 1.0));
        float amt = smoothstep(uBand, uBand + 0.34, abs(uv.y - uFocusY)) * uBlur + smoothstep(0.5, 1.0, r) * uBlur * 0.55 + uPull;
        if (uIndoor > 0.01) {
          float zf = 1e5;
          for (int i = 0; i < 5; i++) { float a = float(i) * 1.2566; zf = min(zf, lin(texture2D(tDepth, vec2(0.5) + (i == 0 ? vec2(0.0) : vec2(cos(a), sin(a)) * 0.015)).x)); }
          float z = lin(texture2D(tDepth, uv).x);
          float coc = clamp(abs(z - zf) / max(z, 1.0) * 1.6, 0.0, 1.0) * uBlurIn + smoothstep(0.55, 1.0, r) * uBlurIn * 0.35;
          amt = mix(amt, coc + uPull, uIndoor);
        }
        // 16-tap disc blur on a golden-angle spiral = soft round bokeh
        vec3 col = vec3(0.0);
        float wsum = 0.0;
        vec2 px = 1.0 / uRes;
        for (int i = 0; i < 16; i++) {
          float fi = float(i), rr = sqrt((fi + 0.5) / 16.0), a = fi * 2.39996323;
          vec3 smp = texture2D(tScene, uv + vec2(cos(a), sin(a)) * rr * amt * px).rgb;
          // a broken (NaN / infinite) pixel must never smear into a dark blot
          if (smp.r >= 0.0 && smp.g >= 0.0 && smp.b >= 0.0) { col += min(smp, vec3(64.0)); wsum += 1.0; }
        }
        col /= max(wsum, 1.0);
        // sharpness (Settings): an unsharp mask on what's in focus
        if (uSharp > 0.0) {
          vec3 c0 = texture2D(tScene, uv).rgb;
          vec3 nb = texture2D(tScene, uv + vec2(px.x, 0.0)).rgb + texture2D(tScene, uv - vec2(px.x, 0.0)).rgb + texture2D(tScene, uv + vec2(0.0, px.y)).rgb + texture2D(tScene, uv - vec2(0.0, px.y)).rgb;
          vec3 sh = clamp(c0 + (c0 * 4.0 - nb) * uSharp * 0.35, 0.0, 64.0);
          col = mix(col, sh, 1.0 - smoothstep(0.6, 2.5, amt));
        }
        vec2 ca = c * uAberr * (0.4 + r);
        col.r = mix(col.r, texture2D(tScene, uv + ca).r, 0.55);
        col.b = mix(col.b, texture2D(tScene, uv - ca).b, 0.55);
        col = mix(vec3(dot(col, vec3(0.2126, 0.7152, 0.0722))), col, uSat);
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        gl_FragColor.rgb += (hash(uv * uRes + fract(uTime * 7.31) * 113.0) - 0.5) * uGrain;
        gl_FragColor.rgb *= 1.0 - uVig * smoothstep(0.32, 1.05, r);
        gl_FragColor.rgb *= 1.0 + uFlicker * sin(uTime * 37.0) * sin(uTime * 11.0);
      }`
  })));
  return {
    LU,
    resize(w, h) { rt.setSize(w, h); LU.uRes.value.set(w, h); if (this.fx) this.fx.resize(w, h); },
    fx: null,   // screen-space lighting (ssfx.js), run between the world and the lens when switched on
    get bytes() { return rt.width * rt.height * 12; },
    render(renderer, world, camera, time = 0, frame = null) {
      LU.uNear.value = camera.near; LU.uFar.value = camera.far;
      renderer.setRenderTarget(rt);
      renderer.render(world, camera);
      renderer.setRenderTarget(null);
      LU.tScene.value = this.fx && frame && this.fx.enabled ? this.fx.render(renderer, rt, camera, time, frame) : rt.texture;
      renderer.render(scene, cam);
    }
  };
}
