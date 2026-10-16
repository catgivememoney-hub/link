/* MEOW — the study under the cabin.
   A big cellar library you reach by the stairs inside the cabin.

   Every link in links.js is a book. Each shelf row holds one tag (a long tag
   gets more rows); a small brass plate on the row shows the tag.
     · aim at a book and click: it floats out, opens, and shows the cover of the
       website inside; click the open book to go there, click anywhere else to
       put it back
     · click a tag plate: all books of that tag fly off the shelves and circle
       around you in the air; pick any of them; click the plate again (or Esc)
       to send them home

   Everything here is built in the cabin's own metres (the cabin group scales it). */
import * as THREE from 'three';
import { Parts, M, n3 } from './kit.js';

// the room, in the cabin's metres
export const STUDY = { x0: -6.5, x1: 6.5, z0: -9.5, z1: 2.4, floor: -3.5, ceil: -0.3 };
// the stairs come down along the right side of the cabin
export const STAIR = { x0: 1.95, x1: 3.0, top: 2.2, bottom: -1.3 };
export const rampY = (z) => { const t = (STAIR.top - Math.min(STAIR.top, Math.max(STAIR.bottom, z))) / (STAIR.top - STAIR.bottom); return 0.12 + (STUDY.floor - 0.12) * t; };

const CASE_W = 2.0, CASE_H = 2.75, CASE_D = 0.42, ROW_H = 0.5, ROW_Y0 = 0.14, ROWS = 5, ROW_PREF = [2, 3, 1, 4, 0];
const LEATHER = ['#6e2d2a', '#2f4a3a', '#2a3550', '#5a3d26', '#7a5a2a', '#4a4a4e', '#3d2e44', '#5e5040', '#283c3c', '#704030'];

export function createStudy({ group, mats, camera, U }) {
  const { inn, glow } = mats;   // materials from the cabin: wood/stone inside, warm glow
  const F = STUDY.floor, C = STUDY.ceil, H = C - F;
  const P = new Parts(), G = new Parts();
  const n = (x, y, z) => n3(x, y, z);
  const wood = (base) => (v) => { const c = base * (0.86 + n(v.x * 3, v.y * 9, v.z * 3) * 0.28); return [c, c * 0.78, c * 0.58]; };
  const dark = wood(0.34), mid = wood(0.46), light = wood(0.6);
  const flat = (r, g, b) => () => [r, g, b];
  const stone = (v) => { const c = 0.42 + n(v.x * 4, v.y * 4, v.z * 4) * 0.22; return [c, c * 0.97, c * 0.93]; };

  /* ---------- the room ---------- */
  const W = STUDY.x1 - STUDY.x0, D = STUDY.z1 - STUDY.z0, cx = (STUDY.x0 + STUDY.x1) / 2, cz = (STUDY.z0 + STUDY.z1) / 2;
  // floor: wide dark planks in a running pattern
  for (let x = STUDY.x0, i = 0; x < STUDY.x1 - 0.01; x += 0.22, i++) {
    const off = (i % 3) * 0.9;
    for (let z = STUDY.z0 - off, j = 0; z < STUDY.z1; z += 2.7, j++) {
      const a = Math.max(z, STUDY.z0), b = Math.min(z + 2.7, STUDY.z1);
      if (b - a < 0.05) continue;
      P.add(new THREE.BoxGeometry(0.215, 0.05, b - a - 0.006), { m: M(x + 0.11, F - 0.025, (a + b) / 2), color: (v) => { const c = (0.36 + ((i * 7 + j * 3) % 5) * 0.018) * (0.88 + n(v.x * 3, 0, v.z * 0.8) * 0.24); return [c, c * 0.76, c * 0.55]; } });
    }
  }
  // ceiling: plaster with dark beams (a hole for the stairs)
  const hole = (x, z) => x > STAIR.x0 - 0.05 && x < STAIR.x1 + 0.05 && z > STAIR.bottom - 0.05 && z < STAIR.top + 0.2;
  for (let x = STUDY.x0; x < STUDY.x1 - 0.01; x += 0.5) for (let z = STUDY.z0; z < STUDY.z1 - 0.01; z += 0.5) {
    if (hole(x + 0.25, z + 0.25)) continue;
    P.add(new THREE.PlaneGeometry(0.5, 0.5), { m: M(x + 0.25, C, z + 0.25, Math.PI / 2, 0, 0), color: (v) => { const c = 0.62 + n(v.x * 2, 0, v.z * 2) * 0.08; return [c, c * 0.96, c * 0.9]; } });
  }
  for (let z = STUDY.z0 + 1.2; z < STUDY.z1; z += 1.8) {
    const segs = z > STAIR.bottom - 0.1 && z < STAIR.top + 0.2 ? [[STUDY.x0, STAIR.x0 - 0.05], [STAIR.x1 + 0.05, STUDY.x1]] : [[STUDY.x0, STUDY.x1]];
    segs.forEach(([a, b]) => P.add(new THREE.BoxGeometry(b - a, 0.22, 0.2), { m: M((a + b) / 2, C - 0.11, z), color: dark }));
  }
  // walls: stone up to the dado rail, dark wood panels above
  const wallSegs = [
    ['z', STUDY.z0, STUDY.x0, STUDY.x1, 1], ['z', STUDY.z1, STUDY.x0, STUDY.x1, -1],
    ['x', STUDY.x0, STUDY.z0, STUDY.z1, 1], ['x', STUDY.x1, STUDY.z0, STUDY.z1, -1]
  ];
  wallSegs.forEach(([axis, fixed, a, b, face]) => {
    for (let t = a; t < b - 0.01; t += 0.6) {
      const w = Math.min(0.6, b - t), mid2 = t + w / 2;
      const put = (y0, y1, color, inset = 0) => {
        const g = new THREE.PlaneGeometry(w, y1 - y0);
        const m = axis === 'z' ? M(mid2, (y0 + y1) / 2, fixed + face * inset, 0, face > 0 ? 0 : Math.PI, 0) : M(fixed + face * inset, (y0 + y1) / 2, mid2, 0, face > 0 ? Math.PI / 2 : -Math.PI / 2, 0);
        P.add(g, { m, color });
      };
      put(F, F + 1.0, stone);
      put(F + 1.0, C, (v) => { const c = 0.33 + n(v.x * 2, v.y * 6, v.z * 2) * 0.08 + (Math.abs(((v.x + v.z) * 1.67 + 50) % 1 - 0.5) < 0.02 ? -0.06 : 0); return [c, c * 0.78, c * 0.58]; });
    }
    // dado rail and skirting
    const len = b - a, m0 = (a + b) / 2;
    [[F + 1.0, 0.06, 0.05], [F + 0.06, 0.12, 0.03]].forEach(([y, h, d]) => {
      P.add(new THREE.BoxGeometry(axis === 'z' ? len : d, h, axis === 'z' ? d : len), { m: axis === 'z' ? M(m0, y, fixed + face * d / 2) : M(fixed + face * d / 2, y, m0), color: mid });
    });
  });

  /* ---------- the stairs (from the cabin floor down to here) ---------- */
  const STEPS = 12, run = (STAIR.top - STAIR.bottom) / STEPS;
  for (let i = 0; i < STEPS; i++) {
    const z1 = STAIR.top - i * run, z0 = z1 - run, y = rampY(z1 - run * 0.5);
    P.add(new THREE.BoxGeometry(STAIR.x1 - STAIR.x0 - 0.04, 0.05, run + 0.03), { m: M((STAIR.x0 + STAIR.x1) / 2, y - 0.025, (z0 + z1) / 2), color: light });
    P.add(new THREE.BoxGeometry(STAIR.x1 - STAIR.x0 - 0.04, Math.abs(rampY(z1) - rampY(z0)), 0.03), { m: M((STAIR.x0 + STAIR.x1) / 2, (rampY(z1) + y) / 2, z1 - 0.01), color: dark });
  }
  const sl = Math.hypot(STAIR.top - STAIR.bottom, 0.12 - F), sa = Math.atan2(0.12 - F, STAIR.top - STAIR.bottom);
  [STAIR.x0, STAIR.x1].forEach((x) => {
    P.add(new THREE.BoxGeometry(0.05, 0.28, sl), { m: M(x, (0.12 + F) / 2 - 0.1, (STAIR.top + STAIR.bottom) / 2, sa, 0, 0), color: mid });                 // stringers
    P.add(new THREE.BoxGeometry(0.06, 0.06, sl), { m: M(x, (0.12 + F) / 2 + 0.85, (STAIR.top + STAIR.bottom) / 2, sa, 0, 0), color: light });          // hand rails
    for (let i = 1; i < STEPS; i += 2) { const z = STAIR.top - i * run; P.add(new THREE.BoxGeometry(0.035, 0.85, 0.035), { m: M(x, rampY(z) + 0.42, z), color: mid }); }
  });
  // under the stairs: closed in with panels (a little storage door)
  P.add(new THREE.BoxGeometry(0.03, 2.6, 3.0), { m: M(STAIR.x0 - 0.02, F + 1.0, 0.9), color: dark });
  P.add(new THREE.BoxGeometry(0.6, 1.4, 0.03), { m: M(STAIR.x0 - 0.04, F + 0.72, 0.5, 0, Math.PI / 2, 0), color: mid });

  /* ---------- bookcases ---------- */
  // slots: where cases stand and which way they face (into the room)
  const cases = [];
  for (let i = 0; i < 6; i++) cases.push({ x: STUDY.x0 + 0.5 + CASE_W / 2 + i * (CASE_W + 0.0), z: STUDY.z0 + CASE_D / 2, ry: 0 });
  for (let i = 0; i < 4; i++) cases.push({ x: STUDY.x0 + CASE_D / 2, z: STUDY.z0 + 1.0 + CASE_W / 2 + i * CASE_W, ry: Math.PI / 2 });
  for (let i = 0; i < 4; i++) cases.push({ x: STUDY.x1 - CASE_D / 2, z: STUDY.z0 + 1.0 + CASE_W / 2 + i * CASE_W, ry: -Math.PI / 2 });
  // order of filling: back wall from the middle outward, then left, then right
  const order = [2, 3, 1, 4, 0, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const caseM = (c) => new THREE.Matrix4().compose(new THREE.Vector3(c.x, F, c.z), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), c.ry), new THREE.Vector3(1, 1, 1));
  const local = (c, x, y, z) => new THREE.Vector3(x, y, z).applyMatrix4(caseM(c));
  cases.forEach((c) => {
    const m = caseM(c);
    const add = (geo, mx, color) => P.add(geo, { m: m.clone().multiply(mx), color });
    add(new THREE.BoxGeometry(CASE_W, CASE_H, 0.03), M(0, CASE_H / 2, -CASE_D / 2 + 0.015), dark);                                       // back
    [-1, 1].forEach((s) => add(new THREE.BoxGeometry(0.05, CASE_H, CASE_D), M(s * (CASE_W / 2 - 0.025), CASE_H / 2, 0), mid));          // sides
    for (let r = 0; r <= ROWS; r++) add(new THREE.BoxGeometry(CASE_W - 0.08, 0.035, CASE_D - 0.03), M(0, ROW_Y0 + r * ROW_H - 0.0175, 0.01), mid);
    add(new THREE.BoxGeometry(CASE_W + 0.08, 0.12, CASE_D + 0.06), M(0, CASE_H + 0.02, 0.02), dark);                                    // crown
    add(new THREE.BoxGeometry(CASE_W, ROW_Y0, CASE_D + 0.02), M(0, ROW_Y0 / 2, 0.01), dark);                                            // plinth
    for (let r = 0; r < ROWS; r++) add(new THREE.BoxGeometry(CASE_W - 0.08, 0.04, 0.02), M(0, ROW_Y0 + r * ROW_H + 0.005, CASE_D / 2 - 0.005), light);   // lip
  });
  // a rolling ladder on a brass rail along the back wall
  P.add(new THREE.CylinderGeometry(0.015, 0.015, 12, 6), { m: M(0, F + 2.55, STUDY.z0 + CASE_D + 0.04, 0, 0, Math.PI / 2), color: flat(0.62, 0.5, 0.28) });
  {
    const lx = 4.6, lean = 0.22;
    [-0.22, 0.22].forEach((dx) => P.add(new THREE.BoxGeometry(0.05, 2.75, 0.06), { m: M(lx + dx, F + 1.36, STUDY.z0 + CASE_D + 0.42, -lean, 0, 0), color: light }));
    for (let i = 0; i < 8; i++) { const y = 0.25 + i * 0.32; P.add(new THREE.CylinderGeometry(0.018, 0.018, 0.44, 6), { m: M(lx, F + y, STUDY.z0 + CASE_D + 0.42 + (1.36 - y) * Math.tan(lean) * 0.98, 0, 0, Math.PI / 2), color: light }); }
  }

  /* ---------- furniture ---------- */
  // big rug
  P.add(new THREE.BoxGeometry(5.2, 0.012, 3.8), { m: M(-0.4, F + 0.006, -4.6), color: (v) => {
    const dx = Math.abs(v.x + 0.4), dz = Math.abs(v.z + 4.6);
    if (dx > 2.45 || dz > 1.75) return [0.3, 0.16, 0.13];
    if (dx > 2.25 || dz > 1.55) return [0.62, 0.5, 0.3];
    const k = Math.sin(dx * 6) * Math.sin(dz * 6);
    return k > 0.4 ? [0.55, 0.2, 0.17] : k < -0.4 ? [0.2, 0.25, 0.3] : [0.42, 0.18, 0.15];
  } });
  // desk with drawers, a green reading lamp, an open notebook and a pen
  const Dk = { x: -0.4, z: -2.6 };
  P.add(new THREE.BoxGeometry(1.9, 0.07, 0.95), { m: M(Dk.x, F + 0.78, Dk.z), color: light });
  [-1, 1].forEach((s) => {
    P.add(new THREE.BoxGeometry(0.5, 0.74, 0.88), { m: M(Dk.x + s * 0.68, F + 0.37, Dk.z), color: mid });
    for (let d = 0; d < 3; d++) {
      P.add(new THREE.BoxGeometry(0.44, 0.2, 0.02), { m: M(Dk.x + s * 0.68, F + 0.15 + d * 0.23, Dk.z - 0.45), color: light });
      P.add(new THREE.BoxGeometry(0.08, 0.02, 0.03), { m: M(Dk.x + s * 0.68, F + 0.17 + d * 0.23, Dk.z - 0.47), color: flat(0.62, 0.5, 0.28) });
    }
  });
  P.add(new THREE.BoxGeometry(0.5, 0.012, 0.36), { m: M(Dk.x - 0.15, F + 0.82, Dk.z - 0.05, 0, 0.15, 0), color: flat(0.9, 0.87, 0.78) });
  P.add(new THREE.CylinderGeometry(0.006, 0.006, 0.16, 5), { m: M(Dk.x + 0.15, F + 0.825, Dk.z, 0, 0.6, Math.PI / 2), color: flat(0.12, 0.12, 0.13) });
  P.add(new THREE.CylinderGeometry(0.07, 0.09, 0.03, 12), { m: M(Dk.x + 0.62, F + 0.83, Dk.z + 0.2), color: flat(0.62, 0.5, 0.28) });
  P.add(new THREE.CylinderGeometry(0.01, 0.01, 0.34, 6), { m: M(Dk.x + 0.62, F + 1.0, Dk.z + 0.2), color: flat(0.62, 0.5, 0.28) });
  P.add(new THREE.CylinderGeometry(0.06, 0.14, 0.12, 14, 1, true), { m: M(Dk.x + 0.62, F + 1.18, Dk.z + 0.12, 0.5, 0, 0), color: flat(0.18, 0.36, 0.26) });
  G.add(new THREE.SphereGeometry(0.035, 8, 6), { m: M(Dk.x + 0.62, F + 1.14, Dk.z + 0.1), color: flat(1, 1, 1) });
  // desk chair
  P.add(new THREE.BoxGeometry(0.5, 0.06, 0.48), { m: M(Dk.x, F + 0.48, Dk.z + 0.75), color: flat(0.32, 0.16, 0.12) });
  P.add(new THREE.BoxGeometry(0.5, 0.6, 0.06), { m: M(Dk.x, F + 0.82, Dk.z + 1.0), color: flat(0.32, 0.16, 0.12) });
  [[-0.2, 0.55], [0.2, 0.55], [-0.2, 0.95], [0.2, 0.95]].forEach(([dx, dz]) => P.add(new THREE.BoxGeometry(0.04, 0.46, 0.04), { m: M(Dk.x + dx, F + 0.23, Dk.z + dz), color: dark }));
  // two leather armchairs and a small round table by a standing lamp
  const armchair = (x, z, ry) => {
    const m = new THREE.Matrix4().compose(new THREE.Vector3(x, F, z), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), ry), new THREE.Vector3(1, 1, 1));
    const leather = (v) => { const c = 0.34 + n(v.x * 12, v.y * 12, v.z * 12) * 0.06; return [c, c * 0.52, c * 0.38]; };
    const a = (geo, mx) => P.add(geo, { m: m.clone().multiply(mx), color: leather });
    a(new THREE.BoxGeometry(0.85, 0.42, 0.8), M(0, 0.25, 0));
    a(new THREE.BoxGeometry(0.85, 0.65, 0.2), M(0, 0.72, -0.32, -0.12, 0, 0));
    [-1, 1].forEach((s) => a(new THREE.BoxGeometry(0.16, 0.3, 0.8), M(s * 0.42, 0.58, 0)));
    a(new THREE.BoxGeometry(0.62, 0.1, 0.6), M(0, 0.5, 0.06));
  };
  armchair(-3.6, -5.2, 0.55);
  armchair(-1.0, -6.4, -0.35);
  P.add(new THREE.CylinderGeometry(0.32, 0.32, 0.04, 20), { m: M(-2.4, F + 0.58, -6.0), color: light });
  P.add(new THREE.CylinderGeometry(0.04, 0.05, 0.56, 8), { m: M(-2.4, F + 0.29, -6.0), color: dark });
  P.add(new THREE.CylinderGeometry(0.2, 0.22, 0.03, 16), { m: M(-2.4, F + 0.015, -6.0), color: dark });
  P.add(new THREE.CylinderGeometry(0.04, 0.035, 0.1, 10), { m: M(-2.3, F + 0.65, -5.95), color: flat(0.8, 0.78, 0.74) });   // tea cup
  // standing lamp
  P.add(new THREE.CylinderGeometry(0.15, 0.17, 0.03, 14), { m: M(-4.6, F + 0.015, -6.4), color: dark });
  P.add(new THREE.CylinderGeometry(0.015, 0.015, 1.6, 6), { m: M(-4.6, F + 0.8, -6.4), color: flat(0.62, 0.5, 0.28) });
  P.add(new THREE.CylinderGeometry(0.16, 0.24, 0.26, 16, 1, true), { m: M(-4.6, F + 1.68, -6.4), color: flat(0.85, 0.78, 0.62) });
  G.add(new THREE.SphereGeometry(0.06, 8, 6), { m: M(-4.6, F + 1.62, -6.4), color: flat(1, 1, 1) });
  // a globe on a stand
  P.add(new THREE.SphereGeometry(0.28, 20, 14), { m: M(1.2, F + 1.05, -4.0, 0.4, 0, 0.2), color: (v) => { const land = n(v.x * 9 + 3, v.y * 9, v.z * 9) > 0.55; return land ? [0.62, 0.55, 0.38] : [0.3, 0.42, 0.46]; } });
  P.add(new THREE.TorusGeometry(0.31, 0.012, 6, 32), { m: M(1.2, F + 1.05, -4.0, 0, Math.PI / 2, 0.2), color: flat(0.62, 0.5, 0.28) });
  P.add(new THREE.CylinderGeometry(0.03, 0.06, 0.75, 8), { m: M(1.2, F + 0.38, -4.0), color: dark });
  [0, 2.1, 4.2].forEach((a) => P.add(new THREE.BoxGeometry(0.04, 0.03, 0.4), { m: M(1.2 + Math.sin(a) * 0.17, F + 0.03, -4.0 + Math.cos(a) * 0.17, 0, a, 0), color: dark }));
  // a tall clock
  P.add(new THREE.BoxGeometry(0.55, 2.1, 0.35), { m: M(-5.8, F + 1.05, 1.9), color: dark });
  P.add(new THREE.CylinderGeometry(0.2, 0.2, 0.02, 24), { m: M(-5.8, F + 1.7, 1.72, Math.PI / 2, 0, 0), color: flat(0.88, 0.84, 0.74) });
  P.add(new THREE.BoxGeometry(0.01, 0.13, 0.01), { m: M(-5.8, F + 1.74, 1.71, 0, 0, 0.6), color: flat(0.1, 0.1, 0.1) });
  P.add(new THREE.BoxGeometry(0.01, 0.17, 0.01), { m: M(-5.8, F + 1.76, 1.71, 0, 0, -0.2), color: flat(0.1, 0.1, 0.1) });
  // pendant lights over the room
  [[-2.5, -4.5], [1.5, -6.5], [-0.4, -2.6]].forEach(([x, z]) => {
    P.add(new THREE.CylinderGeometry(0.006, 0.006, 0.9, 4), { m: M(x, C - 0.45, z), color: flat(0.1, 0.1, 0.1) });
    P.add(new THREE.ConeGeometry(0.22, 0.2, 16, 1, true), { m: M(x, C - 0.95, z), color: flat(0.3, 0.32, 0.28) });
    G.add(new THREE.SphereGeometry(0.07, 10, 8), { m: M(x, C - 1.03, z), color: flat(1, 1, 1) });
  });
  // candles on the desk side
  [[Dk.x - 0.75, Dk.z + 0.3], [Dk.x - 0.62, Dk.z + 0.32]].forEach(([x, z], i) => {
    P.add(new THREE.CylinderGeometry(0.025, 0.025, 0.12 + i * 0.05, 8), { m: M(x, F + 0.81 + (0.12 + i * 0.05) / 2, z), color: flat(0.88, 0.84, 0.74) });
    G.add(new THREE.SphereGeometry(0.014, 6, 4), { m: M(x, F + 0.83 + 0.12 + i * 0.05, z, 0, 0, 0, 1, 1.8, 1), color: flat(1, 1, 1) });
  });

  /* ---------- meshes (built once; books come later, from links.js) ---------- */
  const roomMesh = new THREE.Mesh(P.geometry(), inn); roomMesh.receiveShadow = true;
  const glowMesh = new THREE.Mesh(G.geometry(), glow);
  group.add(roomMesh, glowMesh);
  const lampLight = new THREE.PointLight(0xffb070, 0, 40, 1.3);
  lampLight.position.set(-1.0, C - 1.1, -4.5); group.add(lampLight);

  /* ---------- books ---------- */
  const bookGeo = (() => {
    const B = new Parts();
    const cover = (v) => { const c = 0.9 + n(v.x * 40, v.y * 40, v.z * 40) * 0.2; return [c, c, c]; };
    [-1, 1].forEach((s) => B.add(new THREE.BoxGeometry(0.1, 1.0, 1.0), { m: M(s * 0.45, 0, 0), color: cover, tip: () => 1 }));   // boards
    B.add(new THREE.BoxGeometry(1.0, 1.0, 0.08), { m: M(0, 0, 0.47), color: cover, tip: () => 1 });                                 // spine
    B.add(new THREE.BoxGeometry(0.82, 0.94, 0.94), { m: M(0, 0, -0.04), color: (v) => { const c = 0.86 + Math.sin(v.x * 140) * 0.04; return [c, c * 0.96, c * 0.86]; }, tip: () => 0 });   // pages
    [0.3, -0.3, 0.36, -0.36].forEach((y) => B.add(new THREE.BoxGeometry(1.01, 0.025, 0.02), { m: M(0, y, 0.515), color: flat(0.78, 0.62, 0.3), tip: () => 0 }));   // gold bands
    B.add(new THREE.BoxGeometry(0.7, 0.16, 0.01), { m: M(0, 0.1, 0.516), color: flat(0.12, 0.1, 0.08), tip: () => 0 });                                          // title label
    return B.geometry();
  })();
  const bookMat = new THREE.MeshLambertMaterial({ vertexColors: true });
  bookMat.onBeforeCompile = (sh) => {
    // the per-book colour only tints the leather, never the pages or the gold
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute float aTip;')
      .replace('#include <color_vertex>', `vColor = vec4(1.0);
        #ifdef USE_COLOR
          vColor.rgb *= color;
        #endif
        #ifdef USE_INSTANCING_COLOR
          vColor.rgb *= mix(vec3(1.0), instanceColor.rgb, aTip);
        #endif`);
  };

  let books = null, labels = [], links = [], sig = '';
  const tmpM = new THREE.Matrix4(), tmpQ = new THREE.Quaternion(), tmpV = new THREE.Vector3(), tmpS = new THREE.Vector3();
  const B = [];   // per book: { link, tag, home:{p,q,s}, cur:{p,q}, state, from, t0, ringI }
  const hashS = (s) => { let h = 2166136261; for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619); return ((h >>> 0) % 10000) / 10000; };
  const t$ = (k, f) => (window.MEOW_I18N ? window.MEOW_I18N.t(k) : f);

  const labelTex = (text) => {
    const c = document.createElement('canvas'); c.width = 256; c.height = 64;
    const g = c.getContext('2d');
    const grd = g.createLinearGradient(0, 0, 0, 64); grd.addColorStop(0, '#d9b968'); grd.addColorStop(1, '#8c6a2c');
    g.fillStyle = grd; g.fillRect(0, 0, 256, 64);
    g.strokeStyle = 'rgba(60,40,10,.8)'; g.lineWidth = 4; g.strokeRect(4, 4, 248, 56);
    g.fillStyle = '#2a1c08'; g.font = '600 30px "Josefin Sans", system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    let s = text; while (g.measureText(s).width > 228 && s.length > 2) s = s.slice(0, -2) + '…';
    g.fillText(s, 128, 34);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
    return t;
  };
  // ornaments on rows nobody uses yet
  const orn = new Parts();
  const ornament = (c, r, seed) => {
    const k = Math.floor(seed * 5), y = ROW_Y0 + r * ROW_H;
    const at = (x, yy, z) => local(c, x, yy, z);
    const put = (geo, x, yy, color, sx = 1, sy = 1, sz = 1) => { const p = at(x, yy, 0.02); orn.add(geo, { m: new THREE.Matrix4().compose(p, new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), c.ry), new THREE.Vector3(sx, sy, sz)), color }); };
    const off = (seed * 1.3 % 1 - 0.5) * 1.0;
    if (k === 0) { put(new THREE.CylinderGeometry(0.06, 0.09, 0.26, 12), off, y + 0.13, flat(0.55, 0.6, 0.58)); put(new THREE.SphereGeometry(0.07, 10, 8), off + 0.3, y + 0.07, flat(0.7, 0.55, 0.35)); }
    else if (k === 1) { put(new THREE.BoxGeometry(0.3, 0.16, 0.22), off, y + 0.08, wood(0.5)); put(new THREE.BoxGeometry(0.3, 0.02, 0.22), off, y + 0.165, flat(0.62, 0.5, 0.28)); }
    else if (k === 2) { // a little cat statue
      put(new THREE.SphereGeometry(0.06, 10, 8), off, y + 0.07, flat(0.25, 0.24, 0.24), 1, 1.2, 0.9);
      put(new THREE.SphereGeometry(0.04, 10, 8), off, y + 0.17, flat(0.25, 0.24, 0.24));
      [-1, 1].forEach((s) => put(new THREE.ConeGeometry(0.015, 0.035, 4), off + s * 0.022, y + 0.215, flat(0.25, 0.24, 0.24)));
    } else if (k === 3) { put(new THREE.CylinderGeometry(0.05, 0.05, 0.02, 12), off, y + 0.01, flat(0.62, 0.5, 0.28)); put(new THREE.CylinderGeometry(0.02, 0.02, 0.14, 8), off, y + 0.09, flat(0.88, 0.84, 0.74)); }
    else { put(new THREE.BoxGeometry(0.02, 0.24, 0.18), off, y + 0.12, wood(0.4)); put(new THREE.PlaneGeometry(0.14, 0.18), off + 0.012, y + 0.12, flat(0.75, 0.72, 0.62)); }
  };
  let ornMesh = null;

  const build = () => {
    if (books) { group.remove(books); books.dispose(); }
    labels.forEach((l) => { group.remove(l); l.material.map.dispose(); l.material.dispose(); });
    if (ornMesh) { group.remove(ornMesh); ornMesh.geometry.dispose(); }
    labels = []; B.length = 0;
    // tag → rows of up to CAP books
    const CAP = 30, tags = [], byTag = new Map();
    links.forEach((l) => { const t = (l.tag || '').trim(); if (!byTag.has(t)) { byTag.set(t, []); tags.push(t); } byTag.get(t).push(l); });
    const rows = [];
    tags.forEach((t) => { const L = byTag.get(t); for (let i = 0; i < L.length; i += CAP) rows.push({ tag: t, list: L.slice(i, i + CAP), first: i === 0 }); });
    const slots = [];
    order.forEach((ci) => ROW_PREF.forEach((r) => slots.push([cases[ci], r])));
    const used = new Set();
    rows.forEach((row, i) => {
      const slot = slots[i]; if (!slot) return;
      const [c, r] = slot; used.add(c.x + ',' + c.z + ',' + r);
      const y = ROW_Y0 + r * ROW_H;
      // books stand side by side, a little uneven, like a real shelf
      const dims = row.list.map((l) => { const h = hashS(l.url); return { t: 0.035 + h * 0.04, h: 0.24 + hashS(l.url + 'h') * 0.11, d: 0.17 + hashS(l.title || 'x') * 0.05 }; });
      const total = dims.reduce((s, d) => s + d.t + 0.004, 0), avail = CASE_W - 0.16;
      const k = total > avail ? avail / total : 1;
      let x = -CASE_W / 2 + 0.08;
      row.list.forEach((l, j) => {
        const d = dims[j], tt = d.t * k;
        const p = local(c, x + tt / 2, y + d.h / 2 + 0.002, -CASE_D / 2 + 0.03 + d.d / 2);
        const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), c.ry);
        B.push({ link: l, tag: row.tag, home: { p, q, s: new THREE.Vector3(tt, d.h, d.d) }, cur: { p: p.clone(), q: q.clone() }, state: 'shelf', from: null, t0: 0, color: LEATHER[Math.floor(hashS(l.url + 'c') * LEATHER.length)] });
        x += tt + 0.004;
      });
      if (row.first) {
        const mat = new THREE.MeshBasicMaterial({ map: labelTex('#' + (row.tag || t$('untagged', 'no tag'))), toneMapped: false });
        const lab = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 0.085), mat);
        lab.position.copy(local(c, 0, y + 0.006, CASE_D / 2 + 0.006)); lab.quaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), c.ry);
        lab.position.y -= 0.035;
        lab.userData.tag = row.tag;
        group.add(lab); labels.push(lab);
      }
    });
    // ornaments on a few of the empty rows
    orn.p.length = orn.n.length = orn.c.length = orn.t.length = 0;
    slots.forEach(([c, r], i) => { if (used.has(c.x + ',' + c.z + ',' + r)) return; const s = hashS('o' + i); if (s < 0.55) ornament(c, r, s / 0.55); });
    ornMesh = new THREE.Mesh(orn.geometry(), inn); group.add(ornMesh);
    books = new THREE.InstancedMesh(bookGeo, bookMat, Math.max(1, B.length));
    books.count = B.length; books.frustumCulled = false;
    B.forEach((b, i) => { tmpM.compose(b.home.p, b.home.q, b.home.s); books.setMatrixAt(i, tmpM); books.setColorAt(i, new THREE.Color(b.color)); });
    if (books.instanceColor) books.instanceColor.needsUpdate = true;
    group.add(books);
  };

  /* ---------- interaction: open a book, books circling around you ---------- */
  const st = { mode: 'idle', open: -1, openT0: 0, closing: false, ring: null, ringT0: 0, hover: null };
  const tip = document.createElement('div'); tip.className = 'book-tip'; document.body.appendChild(tip);
  const page = document.createElement('div'); page.className = 'book-page';
  page.innerHTML = '<div class="bp-left"><small class="bp-tag"></small><strong class="bp-title"></strong><span class="bp-host"></span><em class="bp-go"></em></div><div class="bp-right"><img alt=""><span class="bp-wait"></span></div>';
  document.body.appendChild(page);
  const pImg = page.querySelector('img'), pWait = page.querySelector('.bp-wait');
  const host = (u) => { try { return new URL(u).hostname.replace(/^www\./, ''); } catch { return u; } };
  const shot = (u, n) => 'https://s.wordpress.com/mshots/v1/' + encodeURIComponent(u) + '?w=800&h=600' + (n ? '&r=' + n : '');
  let shotTimer = 0;
  const loadShot = (u) => {
    clearTimeout(shotTimer); pImg.classList.remove('ready'); pWait.textContent = t$('loadingPreview', '…');
    let tries = 0;
    const go = () => {
      pImg.onload = () => { pImg.classList.add('ready'); pWait.textContent = ''; if (pImg.naturalWidth < 600 && tries < 3) { tries++; shotTimer = setTimeout(go, 2500); } };
      pImg.onerror = () => { pWait.textContent = t$('noPreview', 'No preview'); };
      pImg.src = shot(u, tries);
    };
    go();
  };

  // the open book: two covers on a spine, pages inside; it floats in front of you
  const open = (() => {
    const g = new THREE.Group();
    const leather = new THREE.MeshLambertMaterial({ color: 0x6e2d2a });
    const paper = new THREE.MeshBasicMaterial({ color: 0xefe6d0 });   // pages stay bright and readable
    const left = new THREE.Group(), right = new THREE.Group();
    const coverG = new THREE.BoxGeometry(1, 1.32, 0.03).translate(-0.5, 0, 0);
    const coverR = new THREE.BoxGeometry(1, 1.32, 0.03).translate(0.5, 0, 0);
    const pageL = new THREE.BoxGeometry(0.96, 1.26, 0.06).translate(-0.49, 0, 0.045);
    const pageR = new THREE.BoxGeometry(0.96, 1.26, 0.06).translate(0.49, 0, 0.045);
    left.add(new THREE.Mesh(coverG, leather), new THREE.Mesh(pageL, paper));
    right.add(new THREE.Mesh(coverR, leather), new THREE.Mesh(pageR, paper));
    g.add(left, right); g.visible = false;
    group.parent.add(g);   // lives in the world, not in the cabin group
    return { g, left, right, leather };
  })();
  const OPEN_SIZE = 0.16;   // world units per open-book unit (book is ~1.3 tall → ~2.1 units)

  const bookWorld = (i, outP, outQ) => {
    const b = B[i];
    outP.copy(b.cur.p).applyMatrix4(group.matrixWorld);
    group.getWorldQuaternion(outQ).multiply(b.cur.q);
  };
  const camFront = (dist, outP, outQ, up = 0) => {
    outP.set(0, up, -dist).applyQuaternion(camera.quaternion).add(camera.position);
    outQ.copy(camera.quaternion);
  };

  const ease = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
  const openBook = (i, now) => {
    if (st.open >= 0) closeBook(now);
    st.open = i; st.openT0 = now; st.closing = false;
    const b = B[i];
    b.state = 'out';
    open.leather.color.set(b.color);
    page.querySelector('.bp-tag').textContent = '#' + (b.tag || t$('untagged', 'no tag'));
    page.querySelector('.bp-title').textContent = b.link.title;
    page.querySelector('.bp-host').textContent = host(b.link.url);
    page.querySelector('.bp-go').textContent = t$('bookGo', 'Click the book to visit ↗');
    loadShot(b.link.url);
    if (window.MEOW_SOUND && window.MEOW_SOUND.page) window.MEOW_SOUND.page(true);
    const p = new THREE.Vector3(), q = new THREE.Quaternion(); bookWorld(i, p, q);
    st.openFrom = { p, q };
  };
  const closeBook = (now) => {
    if (st.open < 0 || st.closing) return;
    st.closing = true; st.openT0 = now;
    page.classList.remove('show');
    if (window.MEOW_SOUND && window.MEOW_SOUND.page) window.MEOW_SOUND.page(false);
  };

  // ring: a tag's books circle around you
  const startRing = (tag, now) => {
    if (st.ring === tag) { endRing(now); return; }
    if (st.ring !== null) endRing(now);
    st.ring = tag; st.ringT0 = now;
    let k = 0;
    B.forEach((b, i) => { if (b.tag === tag) { b.ringI = k++; if (b.state !== 'out') { b.state = 'toRing'; b.fromSc = b.sc || 1; b.from = { p: b.cur.p.clone(), q: b.cur.q.clone() }; b.t0 = now + b.ringI * 45; } } });
    st.ringN = k;
    if (window.MEOW_SOUND && window.MEOW_SOUND.whoosh) window.MEOW_SOUND.whoosh();
  };
  const endRing = (now) => {
    if (st.ring === null) return;
    B.forEach((b) => { if (b.tag === st.ring && (b.state === 'ring' || b.state === 'toRing')) { b.state = 'toShelf'; b.fromSc = b.sc || 1; b.from = { p: b.cur.p.clone(), q: b.cur.q.clone() }; b.t0 = now + (b.ringI || 0) * 30; } });
    st.ring = null;
  };

  const invQ = new THREE.Quaternion(), wq = new THREE.Quaternion(), wp = new THREE.Vector3(), lp = new THREE.Vector3();
  const ringPose = (b, time, outP, outQ) => {
    // world pose around the camera → cabin-local pose
    const N = Math.max(1, st.ringN), R = Math.max(15, N * 1.3);
    const a = (b.ringI / N) * Math.PI * 2 + time * 0.12;
    wp.set(camera.position.x + Math.cos(a) * R, camera.position.y - 0.4 + Math.sin(time * 1.3 + b.ringI) * 0.25, camera.position.z + Math.sin(a) * R);
    // face the player, showing the front cover, a gentle tilt
    const look = Math.atan2(camera.position.x - wp.x, camera.position.z - wp.z);
    wq.setFromEuler(new THREE.Euler(0, look - Math.PI / 2, Math.sin(time * 0.9 + b.ringI) * 0.08));
    lp.copy(wp); group.worldToLocal(lp); outP.copy(lp);
    group.getWorldQuaternion(invQ).invert(); outQ.copy(invQ).multiply(wq);
    return outP;
  };

  const ringScale = 2.2;   // books grow a little when they fly to you, so they're easy to see
  const update = (time, now) => {
    if (!books) return;
    let changed = false;
    const ringPoseP = new THREE.Vector3(), ringPoseQ = new THREE.Quaternion();
    B.forEach((b, i) => {
      if (b.state === 'shelf') return;
      let sc = 1;
      if (b.state === 'out') { tmpS.set(0, 0, 0); tmpM.compose(b.cur.p, b.cur.q, tmpS); books.setMatrixAt(i, tmpM); changed = true; return; }
      if (b.state === 'ring') { ringPose(b, time, b.cur.p, b.cur.q); sc = ringScale; }
      else {
        const k = Math.max(0, Math.min(1, (now - b.t0) / 900));
        const e = ease(k);
        const toP = b.state === 'toRing' ? ringPose(b, time, ringPoseP, ringPoseQ) : b.home.p;
        const toQ = b.state === 'toRing' ? ringPoseQ : b.home.q;
        b.cur.p.copy(b.from.p).lerp(toP, e);
        b.cur.p.y += Math.sin(Math.PI * e) * 0.4 * (b.state === 'toRing' ? 1 : 0.6);
        b.cur.q.copy(b.from.q).slerp(toQ, e);
        const fromSc = b.fromSc || 1;
        sc = fromSc + ((b.state === 'toRing' ? ringScale : 1) - fromSc) * e;
        if (k >= 1) { if (b.state === 'toRing') b.state = 'ring'; else { b.state = 'shelf'; b.cur.p.copy(b.home.p); b.cur.q.copy(b.home.q); sc = 1; } }
      }
      tmpS.copy(b.home.s).multiplyScalar(sc);
      tmpM.compose(b.cur.p, b.cur.q, tmpS); books.setMatrixAt(i, tmpM); changed = true;
      b.sc = sc;
    });
    if (changed) { books.instanceMatrix.needsUpdate = true; books.boundingSphere = null; }

    // the open book: fly from where it was, open its covers, float in front of you
    if (st.open >= 0) {
      const b = B[st.open];
      const k = Math.min(1, (now - st.openT0) / (st.closing ? 700 : 1100));
      const tp = new THREE.Vector3(), tq = new THREE.Quaternion(); camFront(4.2, tp, tq, -0.15);
      let e, openA;
      if (!st.closing) { e = ease(Math.min(1, k / 0.6)); openA = ease(Math.max(0, (k - 0.45) / 0.55)); }
      else { e = 1 - ease(Math.max(0, (k - 0.35) / 0.65)); openA = 1 - ease(Math.min(1, k / 0.45)); }
      const from = st.openFrom;
      // the shelf position may have moved (ring) — follow the book's current place
      open.g.position.copy(from.p).lerp(tp, e);
      open.g.quaternion.copy(from.q).slerp(tq, e);
      // closed: the covers stack like a book seen from the side; open: they spread flat
      const bs = (b.sc || 1) * S_WORLD;
      const small = new THREE.Vector3(b.home.s.z * bs, b.home.s.y * bs / 1.32, b.home.s.z * bs);
      const big = new THREE.Vector3(1.6, 1.6, 1.6);
      open.g.scale.copy(small).lerp(big, e);
      // a closed book shows its cover facing you, then the left cover swings open
      open.left.rotation.y = Math.PI * (1 - openA) * 0.999;
      open.right.rotation.y = 0;
      open.g.visible = true;
      if (!st.closing && k >= 1) {
        // place the website page over the open pages
        project(open.g, page);
        page.classList.add('show');
      } else if (!st.closing) page.classList.remove('show');
      if (st.closing && k >= 1) {
        open.g.visible = false;
        b.state = st.ring === b.tag ? 'toRing' : 'toShelf';
        b.from = { p: new THREE.Vector3(), q: new THREE.Quaternion() };
        // start back from in front of you (in cabin space)
        b.from.p.copy(open.g.position); group.worldToLocal(b.from.p);
        group.getWorldQuaternion(invQ).invert(); b.from.q.copy(invQ).multiply(open.g.quaternion);
        b.t0 = now; b.fromSc = 1;
        st.open = -1; st.closing = false;
      }
    }
  };
  const S_WORLD = 4.5;
  const corner = new THREE.Vector3();
  const project = (g, el) => {
    // screen rectangle of the two open pages
    let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
    [[-0.97, 0.63], [0.97, 0.63], [-0.97, -0.63], [0.97, -0.63]].forEach(([x, y]) => {
      corner.set(x, y, 0.08).applyMatrix4(g.matrixWorld).project(camera);
      const sx = (corner.x * 0.5 + 0.5) * innerWidth, sy = (-corner.y * 0.5 + 0.5) * innerHeight;
      x0 = Math.min(x0, sx); x1 = Math.max(x1, sx); y0 = Math.min(y0, sy); y1 = Math.max(y1, sy);
    });
    el.style.left = x0 + 'px'; el.style.top = y0 + 'px'; el.style.width = (x1 - x0) + 'px'; el.style.height = (y1 - y0) + 'px';
  };

  // what the ray (from the centre dot) is pointing at
  const pick = (ray) => {
    if (!books) return null;
    if (st.open >= 0 && open.g.visible) {
      const h = ray.intersectObject(open.g, true)[0];
      if (h) return { type: 'open' };
    }
    const hb = ray.intersectObject(books, false)[0];
    const hl = labels.length ? ray.intersectObjects(labels, false)[0] : null;
    if (hl && (!hb || hl.distance < hb.distance) && hl.distance < 40) return { type: 'label', tag: hl.object.userData.tag };
    if (hb && hb.distance < 45 && B[hb.instanceId] && B[hb.instanceId].state !== 'out') return { type: 'book', i: hb.instanceId };
    return null;
  };

  return {
    // keep the books in step with links.js (they arrive after the page loads)
    sync() {
      const L = window.MEOW_LINKS_DATA || [];
      const s = L.map((l) => l.url + '|' + l.tag + '|' + l.title).join('\n');
      if (s === sig) return;
      sig = s; links = L.slice(); st.open = -1; st.ring = null; open.g.visible = false; page.classList.remove('show');
      build();
    },
    update,
    get busy() { return st.open >= 0 || st.ring !== null; },
    // hover: show a small label under the dot
    hover(ray, active) {
      const h = active ? pick(ray) : null;
      const key = h ? h.type + (h.i ?? h.tag ?? '') : '';
      if (key === st.hoverKey) return !!h;
      st.hoverKey = key;
      if (!h || h.type === 'open') { tip.classList.remove('show'); return !!h; }
      if (h.type === 'book') { const b = B[h.i]; tip.innerHTML = ''; const s1 = document.createElement('strong'); s1.textContent = b.link.title; const s2 = document.createElement('small'); s2.textContent = '#' + (b.tag || t$('untagged', 'no tag')) + ' · ' + host(b.link.url); tip.append(s1, s2); }
      else { const nB = B.filter((b) => b.tag === h.tag).length; tip.innerHTML = ''; const s1 = document.createElement('strong'); s1.textContent = '#' + (h.tag || t$('untagged', 'no tag')) + '  ·  ' + nB; const s2 = document.createElement('small'); s2.textContent = st.ring === h.tag ? t$('tagBack', 'Click: put them back') : t$('tagRing', 'Click: books fly around you'); tip.append(s1, s2); }
      tip.classList.add('show');
      return true;
    },
    // a click: returns true if the study used it
    click(ray, now) {
      const h = pick(ray);
      if (st.open >= 0 && !st.closing) {
        if (h && h.type === 'open') { const b = B[st.open]; window.open(b.link.url, '_blank', 'noopener'); return true; }
        closeBook(now);
        if (!h || h.type === 'open') return true;
      }
      if (!h) { if (st.ring !== null) { endRing(now); return true; } return false; }
      if (h.type === 'label') { startRing(h.tag, now); return true; }
      if (h.type === 'book') { openBook(h.i, now); return true; }
      return false;
    },
    // Esc: close what's open first; true if something was closed
    back(now) {
      if (st.open >= 0 && !st.closing) { closeBook(now); return true; }
      if (st.ring !== null) { endRing(now); return true; }
      return false;
    },
    // for testing
    _open(i) { openBook(i, performance.now()); }, _ring(tag) { startRing(tag, performance.now()); }, get _n() { return B.length; },
    reset(now) { if (st.open >= 0) closeBook(now); if (st.ring !== null) endRing(now); tip.classList.remove('show'); st.hoverKey = ''; },
    lampLight
  };
}
