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
// A real-looking fire is built from many soft flame puffs (particles) that rise from the logs, stretch,
// shrink and cool from white-yellow to orange to deep red as they climb, all blended so overlaps glow
// brighter; a few low noisy flame sheets fill the gaps, a hot bed of embers glows at the bottom,
// sparks fly up, and a thin heat-darkened smoke drifts off the tips.
export function createFlame(w, h) {
  const g = new THREE.Group();
  const U = { uTime: { value: 0 }, uOn: { value: 1 }, uScale: { value: 1 } };
  // 1) flame puffs
  const N = 110, pos = new Float32Array(N * 3), life = new Float32Array(N), seedA = new Float32Array(N);
  const P = Array.from({ length: N }, (_, i) => ({ t: i / N, x: 0, z: 0, sp: 0, s: 0 }));
  const reset = (q) => { const a = Math.random() * 6.283, r = Math.pow(Math.random(), 0.7) * w * 0.38; q.x = Math.cos(a) * r; q.z = Math.sin(a) * r * 0.7; q.sp = 0.55 + Math.random() * 0.6; q.s = Math.random(); };
  P.forEach(reset);
  for (let i = 0; i < N; i++) seedA[i] = Math.random();
  const pg = new THREE.BufferGeometry();
  pg.setAttribute('position', new THREE.BufferAttribute(pos, 3)); pg.setAttribute('aLife', new THREE.BufferAttribute(life, 1)); pg.setAttribute('aSeed', new THREE.BufferAttribute(seedA, 1));
  const pm = new THREE.ShaderMaterial({
    uniforms: Object.assign({ uSize: { value: w * 0.62 } }, U), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
    vertexShader: /* glsl */`
      attribute float aLife; attribute float aSeed; uniform float uSize; varying float vLife; varying float vSeed;
      void main() { vLife = aLife; vSeed = aSeed; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv;
        float grow = sin(3.14159 * pow(aLife, 0.6));   // puffs swell then shrink away
        gl_PointSize = uSize * (0.55 + 0.75 * grow) * (1.0 - aLife * 0.45) * 520.0 / -mv.z; }`,
    fragmentShader: NOISE + /* glsl */`
      uniform float uTime, uOn; varying float vLife; varying float vSeed;
      void main() {
        vec2 c = gl_PointCoord * 2.0 - 1.0; c.y = -c.y;
        c.x *= 1.0 + vLife * 0.9;                       // thinner as it climbs (a tongue)
        float n = fbm(c * 2.2 + vec2(vSeed * 17.0, -uTime * 2.6 - vSeed * 5.0));
        float d = length(c * vec2(1.0, 0.75)) + (n - 0.5) * 0.9;
        float a = smoothstep(1.0, 0.15, d);
        if (a < 0.01) discard;
        float heat = clamp(1.25 - vLife * 1.5 - d * 0.55, 0.0, 1.0);
        vec3 col = mix(vec3(0.45, 0.04, 0.0), vec3(1.0, 0.33, 0.03), smoothstep(0.0, 0.35, heat));
        col = mix(col, vec3(1.0, 0.72, 0.25), smoothstep(0.35, 0.7, heat));
        col = mix(col, vec3(1.0, 0.95, 0.8), smoothstep(0.75, 1.0, heat));
        float fade = smoothstep(0.0, 0.08, vLife) * (1.0 - smoothstep(0.6, 1.0, vLife));
        gl_FragColor = vec4(col * a * fade * 0.55 * uOn, 1.0);
      }`
  });
  const puffs = new THREE.Points(pg, pm); puffs.frustumCulled = false; puffs.renderOrder = 4; g.add(puffs);
  // 2) a few low, wide noisy flame sheets (fill between the puffs, from every side)
  const sheet = new THREE.ShaderMaterial({
    uniforms: U, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false,
    vertexShader: 'varying vec2 vUv; uniform float uTime; void main(){ vUv = uv; vec3 p = position; p.x += sin(uTime * 4.0 + uv.y * 5.0) * 0.05 * uv.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }',
    fragmentShader: NOISE + /* glsl */`
      varying vec2 vUv; uniform float uTime, uOn;
      void main() {
        float x = (vUv.x - 0.5) * 2.0;
        float n = fbm(vec2(vUv.x * 5.0, vUv.y * 3.0 - uTime * 2.4)) + fbm(vec2(vUv.x * 11.0 + 3.0, vUv.y * 6.0 - uTime * 4.0)) * 0.5;
        float edge = 1.0 - abs(x);
        float f = smoothstep(0.35, 1.0, n * edge * 1.4 - vUv.y * 0.9) * smoothstep(0.0, 0.1, vUv.y);
        vec3 col = mix(vec3(0.9, 0.22, 0.02), vec3(1.0, 0.75, 0.3), smoothstep(0.2, 0.8, f));
        gl_FragColor = vec4(col * f * 0.8 * uOn, 1.0);
      }`
  });
  for (let i = 0; i < 4; i++) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.95, h * 0.55, 1, 6).translate(0, h * 0.275, 0), sheet);
    m.rotation.y = (i / 4) * Math.PI; m.renderOrder = 3; g.add(m);
  }
  // 3) the glowing bed of coals
  const coal = new THREE.Mesh(new THREE.CircleGeometry(w * 0.45, 24).rotateX(-Math.PI / 2).scale(1, 1, 0.7), new THREE.ShaderMaterial({
    uniforms: U, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: NOISE + 'varying vec2 vUv; uniform float uTime, uOn; void main(){ float r = length(vUv - 0.5) * 2.0; float n = fbm(vUv * 9.0 + uTime * 0.25); float k = smoothstep(1.0, 0.2, r) * (0.45 + 0.8 * n * n); gl_FragColor = vec4(vec3(1.0, 0.32, 0.05) * k * uOn, 1.0); }'
  }));
  coal.position.y = h * 0.02; g.add(coal);
  // 4) sparks
  const S = 36, spos = new Float32Array(S * 3), sp = Array.from({ length: S }, () => ({ t: Math.random(), x: 0, z: 0, vx: 0, vz: 0, s: 1 }));
  const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(spos, 3));
  const sm = new THREE.PointsMaterial({ color: 0xffb050, size: Math.max(0.04, w * 0.025), transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false, fog: false });
  const sparks = new THREE.Points(sg, sm); sparks.frustumCulled = false; g.add(sparks);
  const sparkReset = (e) => { e.t = 0; e.x = (Math.random() - 0.5) * w * 0.5; e.z = (Math.random() - 0.5) * w * 0.35; e.vx = (Math.random() - 0.5) * w * 0.4; e.vz = (Math.random() - 0.5) * w * 0.3; e.s = 0.5 + Math.random(); };
  sp.forEach(sparkReset); sp.forEach((e) => { e.t = Math.random(); });
  return {
    group: g,
    update(dt, time, on) {
      U.uTime.value = time; U.uOn.value = on; sm.opacity = 0.95 * on;
      for (let i = 0; i < N; i++) {
        const q = P[i]; q.t += dt * q.sp * 0.95; if (q.t >= 1) { q.t -= 1; reset(q); }
        const k = q.t, pull = 1 - k * 0.75;   // puffs drift in toward the middle as they rise (a cone of flame)
        pos[i * 3] = q.x * pull + Math.sin(time * 3.1 + q.s * 9) * w * 0.05 * k;
        pos[i * 3 + 1] = Math.pow(k, 0.85) * h * (0.8 + q.s * 0.5);
        pos[i * 3 + 2] = q.z * pull + Math.cos(time * 2.7 + q.s * 7) * w * 0.04 * k;
        life[i] = k;
      }
      pg.attributes.position.needsUpdate = true; pg.attributes.aLife.needsUpdate = true;
      for (let i = 0; i < S; i++) {
        const e = sp[i]; e.t += dt * 0.5 * e.s; if (e.t > 1) sparkReset(e);
        spos[i * 3] = e.x + e.vx * e.t + Math.sin(time * 5 + i) * 0.04; spos[i * 3 + 1] = h * 0.2 + e.t * h * 2.4 * e.s; spos[i * 3 + 2] = e.z + e.vz * e.t;
      }
      sg.attributes.position.needsUpdate = true;
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
