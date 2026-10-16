/* MEOW — the landscape outside the library window.
   A real little piece of forest built behind the window: rolling ground, pines (the
   same trees as the forest, so they change with the seasons and get snow), grass,
   rocks, and far hills with a tree line under the scene's own sky. It lives in the
   cabin's metres, underground, so nothing of it shows anywhere else. */
import * as THREE from 'three';
import { Parts, M, coverMaterial, mulberry, n3 } from './kit.js';
import { STUDY, WINDOW, VIEW } from './study.js';

export function createWindowView({ group, U, trees, shared }) {
  const R = mulberry(7177), rr = (a, b) => a + R() * (b - a);
  const F = STUDY.floor;
  const ONE = { value: 1 };
  const depth = VIEW.z1 - VIEW.z0;

  // the ground rises gently away from the window, with soft bumps (never above the window head)
  const gy = (x, z) => {
    const back = Math.min(1, Math.max(0, (VIEW.z1 - z) / depth));
    return F + 0.12 + back * back * 1.5 + (n3(x * 0.55, 1.3, z * 0.55) - 0.5) * 0.45 * (0.3 + back) + Math.min(1.2, Math.abs(x) * 0.08) * back;
  };

  /* ---------- ground ---------- */
  const groundGeo = (() => {
    const g = new THREE.PlaneGeometry(VIEW.x1 - VIEW.x0, depth + 0.4, 70, 40).rotateX(-Math.PI / 2);
    g.translate((VIEW.x0 + VIEW.x1) / 2, 0, (VIEW.z0 + VIEW.z1) / 2 + 0.2);
    const P = g.attributes.position;
    for (let i = 0; i < P.count; i++) P.setY(i, gy(P.getX(i), P.getZ(i)));
    g.computeVertexNormals();
    return new Parts().add(g, {
      color: (v) => { const k = 0.82 + n3(v.x * 2.2, 0, v.z * 2.2) * 0.25 + n3(v.x * 9, 3, v.z * 9) * 0.08; return [k * 0.95, k, k * 0.88]; },
      tip: () => 1
    }).geometry();
  })();
  const groundMat = coverMaterial({ ...shared, uFrost: { value: 0 } }, ONE, { color: 0xffffff, snowBias: -0.2 });
  const ground = new THREE.Mesh(groundGeo, groundMat);
  ground.receiveShadow = true;
  group.add(ground);

  /* ---------- pines: the forest's own trees ---------- */
  const spots = [];
  for (let i = 0, tries = 0; i < 18 && tries < 400; tries++) {
    const x = rr(VIEW.x0 + 0.8, VIEW.x1 - 0.8), z = rr(VIEW.z0 + 0.8, VIEW.z1 - 2.2);
    const near = (VIEW.z1 - z) < 4.5;
    if (near && Math.abs(x) < 2.2) continue;                         // keep the view open in front of the window
    if (spots.some((p) => Math.hypot(p.x - x, p.z - z) < 1.6)) continue;
    const base = gy(x, z) - 0.15;
    const kMax = (VIEW.y1 - 0.25 - base) / (3.75 * 1.8);              // never through the sky
    const k = Math.min(kMax, rr(0.42, 0.78));
    if (k < 0.25) continue;
    spots.push({ x, z, base, k }); i++;
  }
  const pines = new THREE.InstancedMesh(trees.geo, trees.mat, spots.length);
  {
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), Y = new THREE.Vector3(0, 1, 0);
    spots.forEach((p, i) => {
      pines.setMatrixAt(i, m.compose(new THREE.Vector3(p.x, p.base, p.z), q.setFromAxisAngle(Y, R() * 6.28), new THREE.Vector3(p.k * rr(0.8, 0.95), p.k * rr(1.6, 1.9), p.k * rr(0.8, 0.95))));
      const sh = rr(0.85, 1.1); pines.setColorAt(i, new THREE.Color(sh, sh * rr(0.97, 1.03), sh * rr(0.94, 1.0)));
    });
  }
  group.add(pines);

  /* ---------- grass tufts, ferns and a few rocks ---------- */
  const tuftGeo = (() => {
    const pts = [];
    for (let b = 0; b < 9; b++) {
      const a = (b / 9) * Math.PI * 2 + R() * 0.7, h = rr(0.18, 0.42), lean = rr(0.1, 0.4), r0 = R() * 0.08, w = 0.016;
      const bx = Math.cos(a) * r0, bz = Math.sin(a) * r0, dx = Math.cos(a) * lean, dz = Math.sin(a) * lean, px = -Math.sin(a) * w, pz = Math.cos(a) * w;
      const mid = [bx + dx * h * 0.35, h * 0.55, bz + dz * h * 0.35], tip = [bx + dx * h, h * 0.92, bz + dz * h];
      pts.push([bx - px, 0, bz - pz], [bx + px, 0, bz + pz], [mid[0] + px * 0.6, mid[1], mid[2] + pz * 0.6]);
      pts.push([bx - px, 0, bz - pz], [mid[0] + px * 0.6, mid[1], mid[2] + pz * 0.6], [mid[0] - px * 0.6, mid[1], mid[2] - pz * 0.6]);
      pts.push([mid[0] - px * 0.6, mid[1], mid[2] - pz * 0.6], [mid[0] + px * 0.6, mid[1], mid[2] + pz * 0.6], tip);
    }
    return new Parts().tris(pts, (v) => { const k = v.y / 0.42; return [0.48 * (0.55 + 0.6 * k), 0.6 * (0.55 + 0.6 * k), 0.3 * (0.55 + 0.6 * k)]; }, (v) => Math.pow(v.y / 0.42, 1.5), new THREE.Vector3(0, 1, 0)).geometry();
  })();
  const plantMat = coverMaterial(shared, ONE, { sway: 0.4, side: THREE.DoubleSide, color: 0xffffff, snowBias: -1, softBack: true });
  const tufts = [];
  for (let i = 0; i < 160; i++) {
    const x = rr(VIEW.x0 + 0.3, VIEW.x1 - 0.3), z = rr(VIEW.z0 + 0.3, VIEW.z1 - 0.1);
    if (n3(x * 0.8, 7, z * 0.8) < 0.38) continue;
    tufts.push([x, gy(x, z) - 0.02, z, rr(0.7, 1.5)]);
  }
  const grass = new THREE.InstancedMesh(tuftGeo, plantMat, tufts.length);
  {
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), Y = new THREE.Vector3(0, 1, 0);
    tufts.forEach(([x, y, z, k], i) => grass.setMatrixAt(i, m.compose(new THREE.Vector3(x, y, z), q.setFromAxisAngle(Y, R() * 6.28), new THREE.Vector3(k, k * rr(0.8, 1.3), k))));
  }
  group.add(grass);
  const rocks = new Parts();
  for (let i = 0; i < 6; i++) {
    const g = new THREE.IcosahedronGeometry(1, 1), P = g.attributes.position, v = new THREE.Vector3(), seed = i * 3.1;
    for (let j = 0; j < P.count; j++) { v.fromBufferAttribute(P, j); v.multiplyScalar(1 + (n3(v.x * 1.6 + seed, v.y * 1.6, v.z * 1.6) - 0.5) * 0.5); v.y = Math.max(-0.3, v.y) * 0.7; P.setXYZ(j, v.x, v.y, v.z); }
    const x = rr(VIEW.x0 + 1, VIEW.x1 - 1), z = rr(VIEW.z0 + 1, VIEW.z1 - 1.5), s = rr(0.18, 0.45);
    rocks.add(g, { m: M(x, gy(x, z) + s * 0.05, z, 0, R() * 6, 0, s * 1.2, s, s), flat: true, color: (p) => { const c = 0.5 + n3(p.x * 4 + seed, p.y * 4, p.z * 4) * 0.25; return [c, c * 0.99, c * 0.95]; } });
  }
  group.add(new THREE.Mesh(rocks.geometry(), coverMaterial({ ...shared, uFrost: { value: 0 } }, ONE, { color: 0x8d8f90, snowBias: 0.05 })));

  /* ---------- the far distance: hills, a tree line, the scene's sky ---------- */
  const VU = { uHill: { value: new THREE.Color() }, uHaze: { value: new THREE.Color() } };
  const skyMat = new THREE.ShaderMaterial({
    uniforms: { ...U, ...VU }, fog: false,
    vertexShader: /* glsl */`
      varying vec3 vW;
      void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: /* glsl */`
      uniform float uTime, uSunSize, uStars, uAurora;
      uniform vec3 uTop, uHorizon, uBottom, uSunColor, uSunDir, uAur1, uAur2, uHill, uHaze;
      varying vec3 vW;
      float hh(float x) { return fract(sin(x * 127.1) * 43758.5453); }
      float n1(float x) { float i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f); return mix(hh(i), hh(i + 1.0), f); }
      float hash3(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
      void main() {
        vec3 d = normalize(vW - cameraPosition);
        float h = d.y;
        vec3 col = h > 0.0 ? mix(uHorizon, uTop, pow(clamp(h, 0.0, 1.0), 0.55)) : mix(uHorizon, uBottom, clamp(-h / 0.25, 0.0, 1.0));
        float sd = dot(d, normalize(uSunDir));
        col += uSunColor * (smoothstep(1.0 - uSunSize, 1.0 - uSunSize * 0.6, sd) + pow(max(sd, 0.0), 90.0) * 0.55 + pow(max(sd, 0.0), 10.0) * 0.12) * step(0.00001, uSunSize);
        float star = step(0.9972, hash3(floor(d * 420.0))) * smoothstep(0.02, 0.2, h);
        col += vec3(star) * uStars;
        float az = atan(d.x, -d.z);
        if (uAurora > 0.001) col += mix(uAur1, uAur2, smoothstep(0.12, 0.35, h)) * smoothstep(0.1, 0.16, h) * exp(-max(h - 0.16, 0.0) * 7.0) * (0.6 + 0.4 * sin(az * 40.0 + uTime * 0.3)) * uAurora * 0.9;
        // three ranges of hills, the near one with a ragged line of pines on top
        for (int i = 0; i < 3; i++) {
          float fi = float(i);
          float ridge = 0.035 + fi * -0.012 + 0.07 * (n1(az * (2.0 + fi * 1.7) + fi * 9.0) * 0.7 + n1(az * (7.0 + fi * 3.0) + fi * 3.0) * 0.3) * (1.0 - fi * 0.25);
          if (i == 2) {
            float tri = 1.0 - abs(fract(az * 55.0) * 2.0 - 1.0);
            ridge += 0.03 * tri * step(0.35, n1(az * 16.0)) * (0.6 + 0.4 * n1(az * 90.0));
          }
          float haze = (2.0 - fi) / 2.0 * 0.75;
          vec3 hill = mix(uHill * (0.75 + 0.1 * fi), uHaze, haze);
          col = mix(col, hill, smoothstep(0.004, -0.004, h - ridge));
        }
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`
  });
  const W = VIEW.x1 - VIEW.x0, Hh = VIEW.y1 - VIEW.y0, cx = (VIEW.x0 + VIEW.x1) / 2, cy = (VIEW.y0 + VIEW.y1) / 2, cz = (VIEW.z0 + VIEW.z1) / 2;
  [
    [new THREE.PlaneGeometry(W, Hh), M(cx, cy, VIEW.z0)],                                     // far
    [new THREE.PlaneGeometry(depth, Hh), M(VIEW.x0, cy, cz, 0, Math.PI / 2, 0)],              // left
    [new THREE.PlaneGeometry(depth, Hh), M(VIEW.x1, cy, cz, 0, -Math.PI / 2, 0)],             // right
    [new THREE.PlaneGeometry(W, depth), M(cx, VIEW.y1, cz, Math.PI / 2, 0, 0)]                // sky above
  ].forEach(([g, m]) => { const mesh = new THREE.Mesh(g, skyMat); mesh.applyMatrix4(m); group.add(mesh); });
  void WINDOW;

  const tmp = new THREE.Color();
  return {
    // s = current scene values, fog = the scene's haze colour
    update(s) {
      // the ground and grass take the land's colour of the scene (green in summer, straw in autumn…)
      tmp.copy(s.low).multiplyScalar(1.45);
      groundMat.color.copy(tmp);
      plantMat.color.copy(s.low).multiplyScalar(1.7);
      VU.uHill.value.copy(s.snowLine < 60 ? s.snowC : s.low).multiplyScalar(0.85);
      VU.uHaze.value.copy(s.fog);
      pines.visible = s.trees > 0.01;
    }
  };
}
