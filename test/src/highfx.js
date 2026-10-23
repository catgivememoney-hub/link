/* MEOW (test copy) — extra effects for the higher graphics levels (Best / Extreme, and Custom if you pick them).
   · Fire: layers of flame drawn by a shader (rising noise shaped into tongues, coloured from deep red at the
     edges to yellow-white at the core), plus glowing embers that drift up and wink out.
   · Rain: many more, longer, lit streaks, and little splash rings where drops hit the ground or the lake. */
import * as THREE from 'three';

const NOISE = /* glsl */`
  float h2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float n2(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y); }
  float fbm(vec2 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++) { s += a * n2(p); p = p * 2.03 + 7.1; a *= 0.5; } return s; }`;

/* ---------- fire ---------- */
// w, h: size of the fire (world units). Returns a group to place at the base centre of the fire.
export function createFlame(w, h) {
  const g = new THREE.Group();
  const U = { uTime: { value: 0 }, uOn: { value: 1 } };
  const mat = new THREE.ShaderMaterial({
    uniforms: U, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false,
    vertexShader: 'varying vec2 vUv; uniform float uTime; void main(){ vUv = uv; vec3 p = position; p.x += sin(uTime * 3.0 + uv.y * 4.0) * 0.06 * uv.y * uv.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }',
    fragmentShader: NOISE + /* glsl */`
      varying vec2 vUv; uniform float uTime, uOn;
      void main() {
        vec2 uv = vUv;
        float x = (uv.x - 0.5) * 2.0;
        // noise rising through the flame; tongues pinch in as they climb
        float n = fbm(vec2(uv.x * 3.2, uv.y * 2.4 - uTime * 1.9)) * 0.75 + fbm(vec2(uv.x * 7.0 + 3.0, uv.y * 5.0 - uTime * 3.4)) * 0.35;
        float width = mix(0.95, 0.12, pow(uv.y, 0.8));
        float shape = smoothstep(width, width * 0.25, abs(x) + (1.0 - n) * 0.35);
        float f = shape * smoothstep(1.0, 0.25, uv.y + (n - 0.5) * 0.45) * smoothstep(0.0, 0.06, uv.y);
        float hot = clamp(f * 1.6 - uv.y * 0.6, 0.0, 1.0);
        vec3 col = mix(vec3(0.55, 0.06, 0.0), vec3(1.0, 0.42, 0.05), smoothstep(0.05, 0.45, hot));
        col = mix(col, vec3(1.0, 0.86, 0.45), smoothstep(0.45, 0.85, hot));
        col = mix(col, vec3(1.0, 0.98, 0.9), smoothstep(0.85, 1.0, hot));
        gl_FragColor = vec4(col * f * 1.6 * uOn, f * uOn);
      }`
  });
  // three crossed sheets so it looks full from any side
  for (let i = 0; i < 3; i++) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h, 1, 8).translate(0, h / 2, 0), mat);
    m.rotation.y = (i / 3) * Math.PI; m.renderOrder = 3; g.add(m);
  }
  // embers
  const N = 40, pos = new Float32Array(N * 3), seed = Array.from({ length: N }, () => ({ t: Math.random(), x: (Math.random() - 0.5) * w * 0.6, z: (Math.random() - 0.5) * w * 0.4, s: 0.6 + Math.random() * 0.8 }));
  const eg = new THREE.BufferGeometry(); eg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const em = new THREE.PointsMaterial({ color: 0xffa040, size: Math.max(0.05, w * 0.03), transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, fog: false });
  const embers = new THREE.Points(eg, em); embers.frustumCulled = false; g.add(embers);
  return {
    group: g,
    update(dt, time, on) {
      U.uTime.value = time; U.uOn.value = on;
      em.opacity = 0.9 * on;
      for (let i = 0; i < N; i++) {
        const e = seed[i]; e.t += dt * 0.35 * e.s; if (e.t > 1) { e.t -= 1; e.x = (Math.random() - 0.5) * w * 0.6; e.z = (Math.random() - 0.5) * w * 0.4; }
        pos[i * 3] = e.x + Math.sin(time * 2 + i) * 0.1 * e.t; pos[i * 3 + 1] = e.t * h * 2.2; pos[i * 3 + 2] = e.z + Math.cos(time * 1.7 + i) * 0.1 * e.t;
      }
      eg.attributes.position.needsUpdate = true;
    }
  };
}

/* ---------- heavy rain: streaks + splashes ---------- */
// heightAt(x, z): ground height; waterY(): the lake surface
export function createRainFX(scene, heightAt) {
  const N = 9000;
  const geo = new THREE.BufferGeometry();
  const p = new Float32Array(N * 6), end = new Float32Array(N * 2), rnd = new Float32Array(N * 2);
  for (let i = 0; i < N; i++) { const x = (Math.random() - 0.5) * 120, y = Math.random() * 60, z = (Math.random() - 0.5) * 120, r = Math.random(); p.set([x, y, z, x, y, z], i * 6); end[i * 2 + 1] = 1; rnd[i * 2] = rnd[i * 2 + 1] = r; }
  geo.setAttribute('position', new THREE.BufferAttribute(p, 3)); geo.setAttribute('aEnd', new THREE.BufferAttribute(end, 1)); geo.setAttribute('aR', new THREE.BufferAttribute(rnd, 1));
  const U = { uTime: { value: 0 }, uOp: { value: 0 }, uLight: { value: new THREE.Color(0xdfe6ea) } };
  const mat = new THREE.ShaderMaterial({
    uniforms: U, transparent: true, depthWrite: false,
    vertexShader: /* glsl */`
      uniform float uTime; attribute float aEnd; attribute float aR; varying float vEnd; varying float vR;
      void main() {
        vec3 p = position;
        float speed = 44.0 + aR * 16.0;
        p.y = mod(p.y - uTime * speed, 60.0) - 6.0;
        p.y -= aEnd * (2.6 + aR * 1.6); p.x += aEnd * 0.5;
        vEnd = aEnd; vR = aR;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }`,
    fragmentShader: /* glsl */`
      uniform float uOp; uniform vec3 uLight; varying float vEnd; varying float vR;
      void main() { gl_FragColor = vec4(uLight * (0.85 + 0.3 * vR), uOp * (0.22 + 0.2 * vR) * (1.0 - vEnd * 0.8)); }`
  });
  const streaks = new THREE.LineSegments(geo, mat); streaks.frustumCulled = false; streaks.visible = false; scene.add(streaks);
  // splashes: little expanding rings on the ground / water near you
  const S = 260, sg = new THREE.BufferGeometry(), sp = new Float32Array(S * 3), sa = new Float32Array(S);
  sg.setAttribute('position', new THREE.BufferAttribute(sp, 3)); sg.setAttribute('aAge', new THREE.BufferAttribute(sa, 1));
  const smat = new THREE.ShaderMaterial({
    uniforms: { uOp: U.uOp }, transparent: true, depthWrite: false,
    vertexShader: 'attribute float aAge; varying float vAge; void main(){ vAge = aAge; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = (6.0 + aAge * 26.0) * 30.0 / -mv.z; }',
    fragmentShader: 'uniform float uOp; varying float vAge; void main(){ vec2 c = gl_PointCoord * 2.0 - 1.0; c.y *= 2.6; float r = length(c); float ring = smoothstep(0.75, 0.9, r) * smoothstep(1.0, 0.9, r); if (ring < 0.01) discard; gl_FragColor = vec4(vec3(0.9, 0.94, 0.96), ring * (1.0 - vAge) * uOp * 0.9); }'
  });
  const splashes = new THREE.Points(sg, smat); splashes.frustumCulled = false; splashes.visible = false; scene.add(splashes);
  const life = Array.from({ length: S }, () => ({ t: Math.random(), x: 0, y: -1e5, z: 0 }));
  let on = false;
  return {
    setEnabled(v) { on = !!v; if (!on) { streaks.visible = false; splashes.visible = false; } },
    update(dt, time, cam, amount, waterY, indoor) {
      const a = on && !indoor ? amount : 0;
      U.uTime.value = time; U.uOp.value = a;
      streaks.visible = splashes.visible = a > 0.01;
      if (a <= 0.01) return;
      streaks.position.set(cam.x, cam.y - 14, cam.z);
      for (let i = 0; i < S; i++) {
        const s = life[i]; s.t += dt * (2.2 + (i % 5) * 0.3);
        if (s.t >= 1) {
          s.t = 0;
          const ang = Math.random() * Math.PI * 2, d = 2 + Math.pow(Math.random(), 0.6) * 34;
          s.x = cam.x + Math.cos(ang) * d; s.z = cam.z + Math.sin(ang) * d;
          s.y = Math.max(heightAt(s.x, s.z), waterY) + 0.05;
        }
        sp[i * 3] = s.x; sp[i * 3 + 1] = s.y; sp[i * 3 + 2] = s.z; sa[i] = s.t;
      }
      sg.attributes.position.needsUpdate = true; sg.attributes.aAge.needsUpdate = true;
    }
  };
}
