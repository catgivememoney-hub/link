/* MEOW — atmosphere indoors: soft shafts of window light with dust drifting in them,
   glowing halos around flames and lamps. Everything is in the cabin's metres and
   lives in the cabin group (so it scales and hides with the house).

   beams:  [{ rect: [[x,y,z] × 4 corners], dir: [x,y,z], len, k }]
   halos:  [{ p: [x,y,z], size, color, flicker }]
   dust:   [{ box: [x0,x1,y0,y1,z0,z1], n }] */
import * as THREE from 'three';

export function createMood({ group, U, beams, halos, dust }) {
  const S = 4.5;
  const BU = { uTime: U.uTime, uBeam: { value: 0 }, uBeamC: { value: new THREE.Color(1.0, 0.9, 0.72) }, uHalo: { value: 1 }, uDust: { value: 0 } };

  /* ---------- light shafts: a soft box of light from the window into the room ---------- */
  const beamGeo = (rect, dir, len, spread = 1.18) => {
    const d = new THREE.Vector3(...dir).normalize().multiplyScalar(len);
    const a = rect.map((p) => new THREE.Vector3(...p));
    const c = a.reduce((s, p) => s.add(p), new THREE.Vector3()).multiplyScalar(0.25);
    const b = a.map((p) => p.clone().sub(c).multiplyScalar(spread).add(c).add(d));
    const pos = [], uv = [];
    for (let i = 0; i < 4; i++) {
      const j = (i + 1) % 4;
      const q = [[a[i], 0, 0], [a[j], 1, 0], [b[j], 1, 1], [a[i], 0, 0], [b[j], 1, 1], [b[i], 0, 1]];
      q.forEach(([p, u, v]) => { pos.push(p.x, p.y, p.z); uv.push(i + u, v); });
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.computeVertexNormals();
    return g;
  };
  const beamMat = (k) => new THREE.ShaderMaterial({
    uniforms: { ...BU, uK: { value: k } }, transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending,
    vertexShader: /* glsl */`
      varying vec2 vUv; varying vec3 vN; varying vec3 vV; varying vec3 vP;
      void main() {
        vUv = uv; vP = position;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */`
      uniform float uTime, uBeam, uK; uniform vec3 uBeamC;
      varying vec2 vUv; varying vec3 vN; varying vec3 vV; varying vec3 vP;
      void main() {
        // soft where you look along the side, fading out with length, gentle moving streaks
        float side = pow(abs(dot(vN, vV)), 1.4);
        float along = smoothstep(0.0, 0.08, vUv.y) * pow(1.0 - vUv.y, 1.6);
        float streak = 0.75 + 0.25 * sin(fract(vUv.x) * 23.0 + vP.y * 3.0 + uTime * 0.35) * sin(fract(vUv.x) * 9.0 - uTime * 0.21);
        float a = side * along * streak * uBeam * uK;
        gl_FragColor = vec4(uBeamC * a, 1.0);
      }`
  });
  beams.forEach((b) => { const m = new THREE.Mesh(beamGeo(b.rect, b.dir, b.len, b.spread), beamMat(b.k || 1)); m.renderOrder = 3; m.frustumCulled = false; group.add(m); });

  /* ---------- halos round flames and bulbs ---------- */
  const haloPts = (() => {
    const g = new THREE.BufferGeometry(), N = halos.length;
    const pos = new Float32Array(N * 3), col = new Float32Array(N * 3), size = new Float32Array(N), fl = new Float32Array(N);
    halos.forEach((h, i) => { pos.set(h.p, i * 3); col.set(h.color || [1, 0.75, 0.45], i * 3); size[i] = h.size; fl[i] = h.flicker || 0; });
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aCol', new THREE.BufferAttribute(col, 3));
    g.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
    g.setAttribute('aFl', new THREE.BufferAttribute(fl, 1));
    const m = new THREE.Points(g, new THREE.ShaderMaterial({
      uniforms: BU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      vertexShader: /* glsl */`
        uniform float uTime, uHalo; attribute vec3 aCol; attribute float aSize, aFl; varying vec3 vC; varying float vA;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          float f = 1.0 + aFl * (0.18 * sin(uTime * 9.0 + position.x * 31.0) + 0.1 * sin(uTime * 23.0 + position.z * 17.0));
          gl_PointSize = aSize * ${S.toFixed(1)} * f * projectionMatrix[1][1] * 420.0 / -mv.z;
          vC = aCol; vA = uHalo * f;
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: /* glsl */`
        varying vec3 vC; varying float vA;
        void main() {
          float d = length(gl_PointCoord - 0.5) * 2.0;
          float a = exp(-d * d * 5.0) * 0.55 + exp(-d * d * 40.0) * 0.45;
          gl_FragColor = vec4(vC * a * vA * smoothstep(1.0, 0.85, d), 1.0);
        }`
    }));
    m.frustumCulled = false; m.renderOrder = 4; group.add(m); return m;
  })();

  /* ---------- dust drifting in the air ---------- */
  const dustPts = (() => {
    const pos = [], seed = [];
    dust.forEach(({ box: [x0, x1, y0, y1, z0, z1], n }) => { for (let i = 0; i < n; i++) { pos.push(x0 + Math.random() * (x1 - x0), y0 + Math.random() * (y1 - y0), z0 + Math.random() * (z1 - z0)); seed.push(Math.random()); } });
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('aSeed', new THREE.Float32BufferAttribute(seed, 1));
    const m = new THREE.Points(g, new THREE.ShaderMaterial({
      uniforms: BU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      vertexShader: /* glsl */`
        uniform float uTime, uDust; attribute float aSeed; varying float vA;
        void main() {
          vec3 p = position;
          float t = uTime * (0.05 + aSeed * 0.05) + aSeed * 40.0;
          p += vec3(sin(t * 1.3) * 0.25, sin(t * 0.7 + aSeed * 9.0) * 0.18 - fract(t * 0.02) * 0.1, cos(t * 1.1) * 0.25);
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = (1.5 + aSeed * 2.5) * clamp(25.0 / -mv.z, 0.6, 2.5);
          vA = uDust * (0.35 + 0.65 * pow(0.5 + 0.5 * sin(uTime * (0.6 + aSeed) + aSeed * 50.0), 3.0));
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: /* glsl */`
        varying float vA;
        void main() { float d = length(gl_PointCoord - 0.5) * 2.0; gl_FragColor = vec4(vec3(1.0, 0.88, 0.7) * smoothstep(1.0, 0.0, d) * vA * 0.5, 1.0); }`
    }));
    m.frustumCulled = false; m.renderOrder = 4; group.add(m); return m;
  })();

  return {
    // day: how much daylight comes through the windows (0 at night); beamColor follows the sky
    update({ day, beamColor, on }) {
      BU.uBeam.value = on ? 0.05 + day * 0.32 : 0;
      if (beamColor) BU.uBeamC.value.copy(beamColor);
      BU.uHalo.value = on ? 1 : 0;
      BU.uDust.value = on ? 0.5 + day * 0.5 : 0;
      haloPts.visible = dustPts.visible = on;
    }
  };
}
