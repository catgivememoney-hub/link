/* MEOW — the log cabin by the lake: a real little house you can walk into.
   Built in metres (then scaled by S to world units). Its front (+z) faces the lake.

   Outside: notched log walls on a stone footing, shingled roof with a stone chimney,
   a porch with its own roof, bench, lantern, shutters, rain barrel, firewood and a
   chopping block, a dock with lanterns and a rowboat.
   Inside: plank floor, braided and rag rugs, fireplace with a fire, a bed with turned
   posts and a patchwork quilt, a domed chest, a table with turned legs and Windsor
   chairs (hurricane lamp, mug, book, a bowl of grey fruit), a rocking chair by the
   fire, a kitchen counter (basin and pump, bread, plate rack, drying herbs), shelf
   with jars and books, beams, folded curtains, a coat and boots by the door.

   The walls and furniture are solid; floors (inside, porch, dock) can be walked on;
   the door swings open and shut (click it). */
import * as THREE from 'three';
import { Parts, M, n3, coverMaterial, kind, rbox, lathe } from './kit.js';
import { createMood } from './mood.js';
import { createStudy, STUDY, STAIR, rampY, studyBlocked, studyFloors } from './study.js';

export const CABIN = { x: 112, z: -119, y: 4.5, yaw: -Math.PI / 2, S: 4.5 };

export function createCabin({ scene, shared, U, camera }) {
  const S = CABIN.S;
  const W = 6.4, D = 5.0, LR = 0.17, STEP = 0.3145, ROWS = 8;
  const TOP = 2.62, GH = 1.9;                     // wall plate height, gable height
  const DX0 = -1.95, DX1 = -0.75, DH = 2.05;      // door opening
  const dz0 = D / 2 + 2.6, dockLen = 11;          // dock start (local z) and length
  const FIRE = { x: 1.7, z: -2.0 };

  const ext = new Parts(), inn = new Parts(), glowP = new Parts(), glassP = new Parts();
  const n = (x, y, z) => n3(x, y, z);

  /* ---------- colours ---------- */
  const wood = (base, k = 1) => kind('wood', (v) => { const c = base * (0.88 + n(v.x * 3, v.y * 9, v.z * 3) * 0.24) * k; const w = n(v.x * 0.7, v.y * 2, v.z * 0.7); return [c * (1.02 + w * 0.06), c * (0.79 + w * 0.03), c * (0.56 - w * 0.04)]; });
  const logCol = (axis) => kind('log', (v, nn) => {
    const end = axis === 'x' ? Math.abs(nn.x) > 0.9 : Math.abs(nn.z) > 0.9;
    if (end) { const r = axis === 'x' ? Math.hypot(v.y % 1, v.z) : Math.hypot(v.y % 1, v.x); const c = 0.68 + Math.sin(r * 90) * 0.04; return [c * 1.02, c * 0.86, c * 0.66]; }
    const c = 0.5 + n(v.x * 2.5, v.y * 8, v.z * 2.5) * 0.2 + Math.sin((axis === 'x' ? v.x : v.z) * 23) * 0.015;
    // each log a slightly different shade: honey, amber, a greyer weathered one now and then
    const t = n(Math.floor(v.y / 0.31) * 3.7, axis === 'x' ? 1 : 2, 0.5);
    return t < 0.25 ? [c * 0.95, c * 0.82, c * 0.68] : t > 0.75 ? [c * 1.08, c * 0.8, c * 0.52] : [c, c * 0.79, c * 0.58];
  });
  const stone = kind('stone', (v) => { const c = 0.45 + n(v.x * 5, v.y * 5, v.z * 5) * 0.25; const w = n(v.x * 2, v.y * 2, v.z * 2); return [c * (0.96 + w * 0.08), c * 0.95, c * (0.9 + (1 - w) * 0.08)]; });
  const flat = (r, g, b, k) => (k ? kind(k, () => [r, g, b]) : () => [r, g, b]);
  const metal = (r, g, b) => kind('metal', () => [r, g, b]);
  const cloth = (fn) => kind('fabric', fn);
  const box3 = (w, h, d) => new THREE.BoxGeometry(w, h, d);
  const TAU = Math.PI * 2;
  const outward = (axis, fixed) => (v) => ((axis === 'z' ? (v.z - fixed) * Math.sign(fixed) : (v.x - fixed) * Math.sign(fixed)) > 0 ? 1 : 0);

  /* ---------- log walls with openings ---------- */
  const OPEN = {
    front: [[DX0, DX1, 0, DH], [0.75, 1.95, 0.95, 1.95]],
    back: [], left: [],
    right: [[-0.3, 0.9, 0.95, 1.95]]
  };
  const cut = (a, b, y, holes) => {
    let segs = [[a, b]];
    holes.forEach(([h0, h1, y0, y1]) => {
      if (!(y0 < y + LR - 0.02 && y1 > y - LR + 0.02)) return;
      const next = [];
      segs.forEach(([s0, s1]) => { if (h1 <= s0 || h0 >= s1) next.push([s0, s1]); else { if (h0 > s0) next.push([s0, h0]); if (h1 < s1) next.push([h1, s1]); } });
      segs = next;
    });
    return segs;
  };
  for (let r = 0; r < ROWS; r++) {
    const yF = LR + r * STEP, yS = LR + STEP / 2 + r * STEP;
    [['front', D / 2], ['back', -D / 2]].forEach(([wall, z]) => {
      cut(-W / 2 - 0.3, W / 2 + 0.3, yF, OPEN[wall]).forEach(([a, b]) => {
        ext.add(new THREE.CylinderGeometry(LR, LR * 0.97, b - a, 16, 1), { m: M((a + b) / 2, yF, z, 0, 0, Math.PI / 2), color: logCol('x'), tip: outward('z', z) });
      });
    });
    if (yS + LR < TOP + 0.12) [['left', -W / 2], ['right', W / 2]].forEach(([wall, x]) => {
      cut(-D / 2 - 0.3, D / 2 + 0.3, yS, OPEN[wall]).forEach(([a, b]) => {
        ext.add(new THREE.CylinderGeometry(LR, LR * 0.97, b - a, 16, 1), { m: M(x, yS, (a + b) / 2, Math.PI / 2, 0, 0), color: logCol('z'), tip: outward('x', x) });
      });
    });
  }
  // stone footing all round (with a wooden sill at the door)
  for (let i = 0; i < 4; i++) {
    const along = i < 2 ? W : D, fixed = i < 2 ? (i ? -D / 2 : D / 2) : (i === 2 ? -W / 2 : W / 2);
    for (let t = -along / 2 - 0.2; t < along / 2 + 0.2; t += 0.42) {
      if (i === 0 && t > DX0 - 0.2 && t < DX1) continue;
      const w = 0.38 + n(t, i, 0) * 0.08, h = 0.16 + n(t, i, 3) * 0.08;
      const m = i < 2 ? M(t + 0.2, -0.02 + h / 2 - 0.06, fixed, 0, (n(t, i, 5) - 0.5) * 0.2, 0, w, h, 0.42) : M(fixed, -0.02 + h / 2 - 0.06, t + 0.2, 0, (n(t, i, 5) - 0.5) * 0.2, 0, 0.42, h, w);
      ext.add(new THREE.BoxGeometry(1, 1, 1), { m, color: stone, tip: () => 1 });
    }
  }
  ext.add(new THREE.BoxGeometry(DX1 - DX0 + 0.1, 0.08, 0.42), { m: M((DX0 + DX1) / 2, 0.06, D / 2), color: wood(0.5), tip: () => 0 });

  /* ---------- gables (outside and inside faces), roof, chimney ---------- */
  [-1, 1].forEach((s) => {
    const z = s * D / 2;
    const A = [-W / 2 - 0.05, TOP, z], B = [W / 2 + 0.05, TOP, z], C = [0, TOP + GH, z];
    const boards = kind('wood', (v) => { const c = 0.48 + n(v.x * 9, 0, s) * 0.1; const seam = Math.abs(((v.x + 10) % 0.24) - 0.12) < 0.012 ? 0.75 : 1; return [c * seam, c * 0.8 * seam, c * 0.6 * seam]; });
    ext.tris(s > 0 ? [A, B, C] : [B, A, C], boards, () => 0);
    inn.tris(s > 0 ? [B, A, C] : [A, B, C], (v) => { const c = boards(v); return [c[0] * 0.85, c[1] * 0.85, c[2] * 0.85]; });
  });
  const run = W / 2 + 0.6, rise = GH + 0.45, ang = Math.atan2(rise, run), slope = Math.hypot(run, rise);
  [-1, 1].forEach((s) => {
    // roof deck
    ext.add(new THREE.BoxGeometry(slope, 0.1, D + 1.3, 3, 1, 6), { m: M(s * run / 2, TOP + GH - rise / 2 + 0.02, 0, 0, 0, -s * ang), color: wood(0.36), tip: (v, nn) => (nn.y > 0 ? 1 : 0) });
    // overlapping rows of shingles
    const rows = 9;
    for (let i = 0; i < rows; i++) {
      const t0 = i / rows, len = slope / rows + 0.12;
      const cx = s * (run * (t0 + 0.5 / rows)), cy = TOP + GH - rise * (t0 + 0.5 / rows) + 0.1;
      ext.add(new THREE.BoxGeometry(len, 0.045, D + 1.3, 1, 1, 10), {
        m: M(cx, cy, 0, 0, 0, -s * (ang + 0.05)),
        color: kind('shingle', (v) => { const k = Math.floor((v.z + 5) * 3.3); const c = 0.3 + n(k, i, s) * 0.12 + (i % 2) * 0.02; return [c * 1.02, c * 0.9, c * 0.8]; }),
        tip: () => 1
      });
    }
    // fascia board along the eave
    ext.add(new THREE.BoxGeometry(0.05, 0.22, D + 1.35), { m: M(s * (run + 0.02), TOP + GH - rise - 0.02, 0), color: wood(0.45), tip: () => 0 });
    // barge boards along the gable edges
    [-1, 1].forEach((f) => ext.add(new THREE.BoxGeometry(slope + 0.1, 0.22, 0.05), { m: M(s * run / 2, TOP + GH - rise / 2 + 0.02, f * (D / 2 + 0.66), 0, 0, -s * ang), color: wood(0.45), tip: () => 0 }));
  });
  ext.add(new THREE.BoxGeometry(0.34, 0.16, D + 1.4), { m: M(0, TOP + GH + 0.12, 0, 0, 0, Math.PI / 4), color: wood(0.32), tip: () => 1 });   // ridge cap
  // chimney stack (stone) rising from the fireplace through the roof, with a cap
  for (let i = 0; i < 8; i++) {
    ext.add(new THREE.BoxGeometry(0.86 + (i % 2) * 0.04, 0.3, 0.86 + ((i + 1) % 2) * 0.04), { m: M(FIRE.x, TOP + 0.15 + i * 0.3, FIRE.z, 0, (n(i, 1, 1) - 0.5) * 0.08, 0), color: stone, tip: () => 1 });
  }
  ext.add(new THREE.BoxGeometry(1.05, 0.08, 1.05), { m: M(FIRE.x, TOP + 0.15 + 8 * 0.3 - 0.06, FIRE.z), color: stone, tip: () => 1 });
  const smokeFrom = new THREE.Vector3(FIRE.x, TOP + 0.2 + 8 * 0.3, FIRE.z);

  /* ---------- windows: frame, cross bars, sill, shutters, glass, curtains ---------- */
  // a curtain hanging in soft folds, gathered where it's tied back
  const curtainGeo = (() => {
    const g = new THREE.PlaneGeometry(0.32, 1.15, 16, 12), P = g.attributes.position;
    for (let i = 0; i < P.count; i++) {
      const x = P.getX(i), y = P.getY(i), tie = Math.exp(-((y + 0.12) ** 2) * 18);
      P.setXYZ(i, x * (1 - tie * 0.45) + tie * 0.05, y, Math.sin((x + 0.16) * 58) * (0.02 + tie * 0.015) + 0.02);
    }
    g.computeVertexNormals(); return g;
  })();
  const windowAt = (cx, cy, wall) => {
    // wall: 'front' (z = D/2) or 'right' (x = W/2); w x h = 1.2 x 1.0
    const rot = wall === 'front' ? 0 : Math.PI / 2;
    const place = (lx, ly, lz) => (wall === 'front' ? [cx + lx, cy + ly, D / 2 + lz] : [W / 2 + lz, cy + ly, cx - lx]);
    const box = (P, sx, sy, sz, lx, ly, lz, color, tip = 0) => { const [x, y, z] = place(lx, ly, lz); P.add(new THREE.BoxGeometry(sx, sy, sz), { m: M(x, y, z, 0, rot, 0), color, tip: () => tip }); };
    const frame = wood(0.55);
    box(ext, 1.32, 0.09, 0.4, 0, 0.53, 0, frame); box(ext, 1.32, 0.09, 0.4, 0, -0.53, 0, frame);
    box(ext, 0.09, 1.1, 0.4, -0.62, 0, 0, frame); box(ext, 0.09, 1.1, 0.4, 0.62, 0, 0, frame);
    box(ext, 0.05, 1.0, 0.06, 0, 0, 0, frame); box(ext, 1.2, 0.05, 0.06, 0, 0, 0, frame);   // cross bars
    box(ext, 1.45, 0.06, 0.3, 0, -0.6, 0.2, frame, 1);                                       // outside sill
    [-1, 1].forEach((s) => box(ext, 0.55, 1.05, 0.04, s * 0.98, 0, 0.27, (v) => { const c = 0.42 + n(v.x * 9, v.y * 2, v.z * 9) * 0.1; const slat = Math.abs(((v.y + 5) % 0.14) - 0.07) < 0.012 ? 0.75 : 1; return [c * 0.9 * slat, c * 0.95 * slat, c * 0.92 * slat]; }));   // shutters
    const [gx, gy, gz] = place(0, 0, 0);
    glassP.add(new THREE.PlaneGeometry(1.2, 1.0), { m: M(gx, gy, gz, 0, rot, 0), color: flat(1, 1, 1) });
    glassP.add(new THREE.PlaneGeometry(1.2, 1.0), { m: M(gx, gy, gz, 0, rot + Math.PI, 0), color: flat(1, 1, 1) });
    // curtains inside, tied back
    [-1, 1].forEach((s) => {
      const [x, y, z] = place(s * 0.78, 0.02, -0.24);
      const col = cloth((v) => { const c = 0.8 + n(v.x * 30, v.y * 4, v.z * 30) * 0.06; return [c, c * 0.95, c * 0.85]; });
      [false, true].forEach((flip) => inn.add(curtainGeo, { m: M(x, y, z, 0, rot + Math.PI, 0), color: col, flip }));
    });
    box(inn, 1.9, 0.03, 0.03, 0, 0.62, -0.24, flat(0.3, 0.25, 0.2));
  };
  windowAt(1.35, 1.45, 'front');
  windowAt(0.3, 1.45, 'right');
  // door frame
  [[DX0 - 0.05, 0.08], [DX1 + 0.05, 0.08]].forEach(([x, w]) => ext.add(new THREE.BoxGeometry(w, DH, 0.42), { m: M(x, DH / 2, D / 2), color: wood(0.55), tip: () => 0 }));
  ext.add(new THREE.BoxGeometry(DX1 - DX0 + 0.3, 0.12, 0.44), { m: M((DX0 + DX1) / 2, DH + 0.05, D / 2), color: wood(0.55), tip: () => 1 });

  /* ---------- porch: deck, step, roof on posts, bench, lantern ---------- */
  for (let i = 0; i < 11; i++) {
    const x = -3.25 + i * 0.6 + 0.3;
    ext.add(new THREE.BoxGeometry(0.57, 0.08, 2.2), { m: M(x, 0.16, D / 2 + 1.25, 0, (n(i, 2, 2) - 0.5) * 0.01, 0), color: wood(0.52 + (i % 3) * 0.04), tip: () => 1 });
  }
  ext.add(new THREE.BoxGeometry(6.65, 0.14, 0.08), { m: M(0.05, 0.1, D / 2 + 2.36), color: wood(0.45), tip: () => 0 });
  // skirt boards close the gap under the porch down into the ground (no floating deck)
  for (let x = -3.28; x < 3.38; x += 0.12) ext.add(new THREE.BoxGeometry(0.1, 1.3, 0.03), { m: M(x + 0.05, -0.55, D / 2 + 2.38), color: wood(0.36 + ((x * 37) % 3) * 0.01), tip: () => 0 });
  [-3.3, 3.4].forEach((x) => { for (let z = D / 2 + 0.2; z < D / 2 + 2.38; z += 0.12) ext.add(new THREE.BoxGeometry(0.03, 1.3, 0.1), { m: M(x, -0.55, z + 0.05), color: wood(0.36), tip: () => 0 }); });
  ext.add(new THREE.BoxGeometry(1.4, 0.07, 0.3), { m: M((DX0 + DX1) / 2, 0.05, D / 2 + 2.55), color: wood(0.5), tip: () => 1 });
  const PR0 = -3.4, PR1 = 0.6;
  ext.add(new THREE.BoxGeometry(PR1 - PR0, 0.08, 2.55, 4, 1, 4), { m: M((PR0 + PR1) / 2, 2.32, D / 2 + 1.3, -0.12, 0, 0), color: (v, nn) => { const c = (nn.y < 0 ? 0.62 : 0.32) + n(v.x * 3, 0, v.z * 9) * 0.1; return nn.y < 0 ? [c, c * 0.8, c * 0.6] : [c, c * 0.93, c * 0.88]; }, tip: (v, nn) => (nn.y > 0 ? 1 : 0) });
  [PR0 + 0.25, PR1 - 0.25].forEach((x) => {
    ext.add(new THREE.BoxGeometry(0.14, 2.2, 0.14), { m: M(x, 1.1, D / 2 + 2.2), color: wood(0.5), tip: () => 0 });
    ext.add(new THREE.BoxGeometry(0.08, 0.7, 0.08), { m: M(x, 1.95, D / 2 + 1.95, 0.75, 0, 0), color: wood(0.5), tip: () => 0 });   // brace
  });
  ext.add(new THREE.BoxGeometry(PR1 - PR0, 0.14, 0.14), { m: M((PR0 + PR1) / 2, 2.12, D / 2 + 2.2), color: wood(0.45), tip: () => 1 });
  // bench under the window
  ext.add(new THREE.BoxGeometry(1.4, 0.06, 0.4), { m: M(1.45, 0.47, D / 2 + 0.48), color: wood(0.55), tip: () => 1 });
  [[0.85], [2.05]].forEach(([x]) => ext.add(new THREE.BoxGeometry(0.06, 0.3, 0.36), { m: M(x, 0.32, D / 2 + 0.48), color: wood(0.45), tip: () => 0 }));
  // wall lantern beside the door
  ext.add(new THREE.BoxGeometry(0.04, 0.04, 0.3), { m: M(-0.5, 2.0, D / 2 + 0.3), color: metal(0.15, 0.15, 0.15), tip: () => 0 });
  ext.add(new THREE.BoxGeometry(0.2, 0.04, 0.2), { m: M(-0.5, 1.98, D / 2 + 0.42), color: metal(0.15, 0.15, 0.15), tip: () => 1 });
  glowP.add(new THREE.BoxGeometry(0.15, 0.22, 0.15), { m: M(-0.5, 1.84, D / 2 + 0.42), color: flat(1, 1, 1) });

  /* ---------- around the house ---------- */
  // rain barrel
  ext.add(new THREE.CylinderGeometry(0.32, 0.29, 0.85, 14), { m: M(W / 2 + 0.55, 0.42, D / 2 - 0.45), color: (v) => { const c = 0.45 + Math.sin(Math.atan2(v.z, v.x) * 14) * 0.03; return [c, c * 0.8, c * 0.6]; }, tip: (v, nn) => (nn.y > 0.5 ? 1 : 0) });
  [0.12, 0.72].forEach((y) => ext.add(new THREE.CylinderGeometry(0.33, 0.33, 0.04, 14, 1, true), { m: M(W / 2 + 0.55, y, D / 2 - 0.45), color: metal(0.2, 0.2, 0.21), tip: () => 0 }));
  // stacked firewood along the left wall, end grain showing
  for (let r = 0; r < 4; r++) for (let i = 0; i < 9 - r; i++) {
    const z = -1.6 + i * 0.19 + r * 0.09, y = 0.11 + r * 0.18;
    ext.add(new THREE.CylinderGeometry(0.09 + n(i, r, 1) * 0.03, 0.1, 0.7, 7), { m: M(-W / 2 - 0.58, y, z, 0, 0, Math.PI / 2), color: (v, nn) => (Math.abs(nn.x) > 0.9 ? [0.74, 0.6, 0.42] : wood(0.45)(v)), tip: () => 1 });
  }
  // chopping block with an axe
  ext.add(new THREE.CylinderGeometry(0.3, 0.34, 0.5, 10), { m: M(-W / 2 - 1.4, 0.25, 1.4), color: (v, nn) => (nn.y > 0.5 ? [0.7, 0.58, 0.42] : wood(0.45)(v)), tip: (v, nn) => (nn.y > 0.5 ? 1 : 0) });
  ext.add(new THREE.CylinderGeometry(0.025, 0.03, 0.75, 6), { m: M(-W / 2 - 1.3, 0.75, 1.4, 0, 0, -0.55), color: wood(0.62), tip: () => 0 });
  ext.add(new THREE.BoxGeometry(0.2, 0.12, 0.03), { m: M(-W / 2 - 1.48, 0.52, 1.4, 0, 0, -0.55), color: metal(0.35, 0.36, 0.38), tip: () => 0 });

  /* ---------- dock, posts, lanterns ---------- */
  for (let i = 0; i < dockLen / 0.5; i++) {
    ext.add(new THREE.BoxGeometry(1.8, 0.08, 0.44), { m: M(-1.3 + (((i * 7) % 5) - 2) * 0.01, 0.2 - i * 0.012, dz0 + i * 0.5, 0, (((i * 3) % 5) - 2) * 0.012, 0), color: wood(0.5 + ((i * 11) % 9) / 60), tip: () => 1 });
  }
  for (let i = 0; i <= dockLen / 2.2; i++) [-1, 1].forEach((s) => {
    ext.add(new THREE.CylinderGeometry(0.09, 0.09, 2.6, 6), { m: M(-1.3 + s * 0.85, -1.1 - i * 0.03, dz0 + i * 2.2), color: wood(0.36), tip: () => 0 });
  });
  [-1, 1].forEach((s) => {
    ext.add(new THREE.CylinderGeometry(0.06, 0.06, 1.3, 6), { m: M(-1.3 + s * 0.85, 0.85, dz0 + dockLen - 0.4), color: wood(0.36), tip: () => 0 });
    glowP.add(new THREE.BoxGeometry(0.16, 0.2, 0.16), { m: M(-1.3 + s * 0.85, 1.6, dz0 + dockLen - 0.4), color: flat(1, 1, 1) });
  });

  /* ---------- more details outside ---------- */
  // chinking: pale mortar between the logs (cut round the door and windows)
  for (let r = 0; r < ROWS - 1; r++) {
    const y = LR + r * STEP + STEP / 2;
    [['front', D / 2], ['back', -D / 2]].forEach(([wall, z]) => cut(-W / 2 + 0.05, W / 2 - 0.05, y, OPEN[wall]).forEach(([a, b]) => {
      ext.add(new THREE.BoxGeometry(b - a, 0.035, 0.02), { m: M((a + b) / 2, y, z + Math.sign(z) * (LR - 0.03)), color: (v) => { const c = 0.72 + n(v.x * 9, v.y * 30, 0) * 0.12; return [c, c * 0.95, c * 0.86]; }, tip: () => 1 });
    }));
    [['left', -W / 2], ['right', W / 2]].forEach(([wall, x]) => cut(-D / 2 + 0.05, D / 2 - 0.05, y + STEP / 2, OPEN[wall]).forEach(([a, b]) => {
      ext.add(new THREE.BoxGeometry(0.02, 0.035, b - a), { m: M(x + Math.sign(x) * (LR - 0.03), y + STEP / 2, (a + b) / 2), color: (v) => { const c = 0.72 + n(0, v.y * 30, v.z * 9) * 0.12; return [c, c * 0.95, c * 0.86]; }, tip: () => 1 });
    }));
  }
  // gutters along both eaves and a downpipe into the rain barrel
  [-1, 1].forEach((s) => ext.add(new THREE.CylinderGeometry(0.06, 0.06, D + 1.3, 8, 1, true, 0, Math.PI), { m: M(s * (run + 0.06), TOP + GH - rise - 0.14, 0, Math.PI / 2, 0, s > 0 ? Math.PI : 0), color: metal(0.4, 0.4, 0.42), tip: () => 0 }));
  ext.add(new THREE.CylinderGeometry(0.035, 0.035, TOP + GH - rise - 0.2, 8), { m: M(W / 2 + 0.6, (TOP + GH - rise) / 2 + 0.4, D / 2 - 0.45 - 0.05), color: metal(0.4, 0.4, 0.42), tip: () => 0 });
  // a weathervane with a little cat on the roof ridge
  ext.add(new THREE.CylinderGeometry(0.015, 0.02, 0.7, 6), { m: M(0, TOP + GH + 0.5, -1.4), color: metal(0.18, 0.18, 0.19), tip: () => 0 });
  ext.add(new THREE.BoxGeometry(0.02, 0.02, 0.5), { m: M(0, TOP + GH + 0.62, -1.4), color: metal(0.18, 0.18, 0.19), tip: () => 0 });
  ext.add(new THREE.ConeGeometry(0.05, 0.1, 4), { m: M(0, TOP + GH + 0.62, -1.15, Math.PI / 2, 0, 0), color: metal(0.18, 0.18, 0.19), tip: () => 0 });
  {
    const cat = (geo, x, y, z, sx = 1, sy = 1, sz = 1, rz = 0) => ext.add(geo, { m: M(0, TOP + GH + 0.88 + y, -1.4 + z, 0, Math.PI / 2, rz, sx, sy, sz), color: metal(0.16, 0.16, 0.17), tip: () => 0 });
    cat(new THREE.BoxGeometry(0.28, 0.13, 0.02), 0, 0, 0);
    cat(new THREE.BoxGeometry(0.11, 0.1, 0.02), 0, 0.11, -0.13);
    [-1, 1].forEach((k) => cat(new THREE.ConeGeometry(0.03, 0.06, 3), 0, 0.19, -0.13 + k * 0.035));
    cat(new THREE.BoxGeometry(0.03, 0.2, 0.02), 0, 0.12, 0.16, 1, 1, 1, 0.4);
  }
  // window boxes with little flowers
  const flowerBox = (lx, lz, ry) => {
    const m = new THREE.Matrix4().compose(new THREE.Vector3(lx, 0.82, lz), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), ry), new THREE.Vector3(1, 1, 1));
    ext.add(new THREE.BoxGeometry(1.3, 0.2, 0.24), { m: m.clone().multiply(M(0, 0, 0.12)), color: wood(0.45), tip: () => 0 });
    ext.add(new THREE.BoxGeometry(1.24, 0.02, 0.2), { m: m.clone().multiply(M(0, 0.09, 0.12)), color: () => [0.25, 0.18, 0.12], tip: () => 1 });
    const cols = [[0.75, 0.3, 0.3], [0.85, 0.7, 0.35], [0.75, 0.62, 0.8], [0.9, 0.88, 0.85]];
    for (let i = 0; i < 9; i++) {
      const x = -0.55 + i * 0.14, h = 0.1 + n(i, lx, 1) * 0.1;
      ext.add(new THREE.CylinderGeometry(0.006, 0.006, h, 4), { m: m.clone().multiply(M(x, 0.1 + h / 2, 0.12 + (i % 2 - 0.5) * 0.08)), color: () => [0.3, 0.42, 0.24], tip: () => 0 });
      ext.add(new THREE.SphereGeometry(0.03, 6, 5), { m: m.clone().multiply(M(x, 0.1 + h, 0.12 + (i % 2 - 0.5) * 0.08)), color: () => cols[i % 4], tip: () => 0 });
    }
  };
  flowerBox(1.35, D / 2 + 0.2, 0);
  flowerBox(W / 2 + 0.2, -0.3, Math.PI / 2);
  // doormat, a broom by the door, two crates and a lantern post at the end of the porch
  ext.add(new THREE.BoxGeometry(1.0, 0.015, 0.6), { m: M((DX0 + DX1) / 2, 0.205, D / 2 + 0.55), color: cloth((v) => (Math.floor((v.x + 9) * 12) % 2 ? [0.42, 0.33, 0.22] : [0.5, 0.4, 0.27])), tip: () => 1 });
  ext.add(new THREE.CylinderGeometry(0.015, 0.015, 1.2, 6), { m: M(DX0 - 0.3, 0.8, D / 2 + 0.25, 0.08, 0, 0.12), color: wood(0.6), tip: () => 0 });
  ext.add(new THREE.ConeGeometry(0.12, 0.3, 8), { m: M(DX0 - 0.24, 0.32, D / 2 + 0.24), color: () => [0.68, 0.58, 0.36], tip: () => 0 });
  [[-2.9, 0.0], [-2.75, 0.32]].forEach(([x, y], i) => {
    ext.add(new THREE.BoxGeometry(0.48, 0.32, 0.4), { m: M(x, 0.36 + y, D / 2 + 1.9, 0, i * 0.3, 0), color: (v) => { const c = 0.55 + (Math.abs(((v.y + 9) * 9) % 1 - 0.5) < 0.1 ? -0.1 : 0) + n(v.x * 9, v.y, v.z * 9) * 0.08; return [c, c * 0.84, c * 0.62]; }, tip: (v, nn) => (nn.y > 0.5 ? 1 : 0) });
  });
  ext.add(new THREE.CylinderGeometry(0.05, 0.06, 1.7, 8), { m: M(PR1 + 0.6, 0.85, D / 2 + 2.9), color: wood(0.4), tip: () => 0 });
  ext.add(new THREE.BoxGeometry(0.2, 0.05, 0.2), { m: M(PR1 + 0.6, 1.72, D / 2 + 2.9), color: metal(0.15, 0.15, 0.15), tip: () => 1 });
  glowP.add(new THREE.BoxGeometry(0.15, 0.2, 0.15), { m: M(PR1 + 0.6, 1.84, D / 2 + 2.9), color: () => [1, 1, 1] });
  ext.add(new THREE.ConeGeometry(0.15, 0.12, 4), { m: M(PR1 + 0.6, 2.0, D / 2 + 2.9, 0, Math.PI / 4, 0), color: metal(0.15, 0.15, 0.15), tip: () => 1 });
  // stepping stones from the porch step toward the trees
  for (let i = 0; i < 6; i++) {
    const x = (DX0 + DX1) / 2 - 1.6 - i * 0.65 + Math.sin(i * 1.7) * 0.2, z = D / 2 + 2.9 + i * 0.35;
    ext.add(new THREE.CylinderGeometry(0.28 + n(i, 3, 3) * 0.1, 0.3, 0.06, 9), { m: M(x, 0.0, z, 0, i, 0, 1, 1, 0.8), color: stone, tip: () => 1 });
  }

  /* ---------- inside ---------- */
  const IX = W / 2 - LR, IZ = D / 2 - LR;
  // plank floor
  for (let x = -IX, i = 0; x < IX - 0.01; x += 0.2, i++) {
    const plank = kind('wood', (v) => { const c = (0.5 + (i % 4) * 0.025) * (0.92 + n(v.x * 4, 0, v.z * 1.2) * 0.16) * (Math.abs(((v.z + 9 + i * 0.37) % 1.6) - 0.8) < 0.01 ? 0.7 : 1); return [c, c * 0.8, c * 0.6]; });
    const mid = x + 0.1;
    // planks over the cellar stairs are cut short, leaving the opening
    const spans = mid > STAIR.x0 && mid < STAIR.x1 ? [[-IZ - 0.05, STAIR.bottom], [STAIR.top, IZ + 0.05]] : [[-IZ - 0.05, IZ + 0.05]];
    spans.forEach(([a, b]) => { if (b - a > 0.02) inn.add(new THREE.BoxGeometry(0.195, 0.06, b - a), { m: M(mid, 0.09, (a + b) / 2), color: plank }); });
  }
  // a railing round the opening (open at the top end, where you step down)
  for (let z = STAIR.bottom; z <= 1.5; z += 0.55) inn.add(new THREE.BoxGeometry(0.05, 0.9, 0.05), { m: M(STAIR.x0 - 0.02, 0.57, z), color: wood(0.5) });
  inn.add(new THREE.BoxGeometry(0.07, 0.06, 1.5 - STAIR.bottom + 0.05), { m: M(STAIR.x0 - 0.02, 1.04, (STAIR.bottom + 1.5) / 2), color: wood(0.55) });
  inn.add(new THREE.BoxGeometry(STAIR.x1 - STAIR.x0 + 0.05, 0.06, 0.07), { m: M((STAIR.x0 + STAIR.x1) / 2, 1.04, STAIR.bottom - 0.02), color: wood(0.55) });
  [STAIR.x0 + 0.5, STAIR.x1 - 0.03].forEach((x) => inn.add(new THREE.BoxGeometry(0.05, 0.9, 0.05), { m: M(x, 0.57, STAIR.bottom - 0.02), color: wood(0.5) }));
  // a little sign on the post: the study is down here
  inn.add(new THREE.BoxGeometry(0.03, 0.16, 0.36), { m: M(STAIR.x0 - 0.05, 0.86, 1.5), color: wood(0.62) });
  /* more life inside: wall clock, pots by the fire, kettle, candles and books on the mantel, a rug by the bed */
  inn.add(new THREE.CylinderGeometry(0.17, 0.17, 0.04, 24), { m: M(-0.4, 1.8, IZ - 0.03, Math.PI / 2, 0, 0), color: wood(0.45) });
  inn.add(new THREE.CylinderGeometry(0.14, 0.14, 0.01, 24), { m: M(-0.4, 1.8, IZ - 0.055, Math.PI / 2, 0, 0), color: kind('paper', () => [0.9, 0.87, 0.8]) });
  inn.add(new THREE.BoxGeometry(0.008, 0.1, 0.006), { m: M(-0.4, 1.83, IZ - 0.065, 0, 0, 0.5), color: () => [0.1, 0.1, 0.1] });
  inn.add(new THREE.BoxGeometry(0.008, 0.12, 0.006), { m: M(-0.4, 1.84, IZ - 0.066, 0, 0, -1.9), color: () => [0.1, 0.1, 0.1] });
  inn.add(new THREE.CylinderGeometry(0.015, 0.015, 1.5, 6), { m: M(FIRE.x, 1.62, -IZ + 0.62, 0, 0, Math.PI / 2), color: metal(0.2, 0.2, 0.2) });
  [-0.5, -0.1, 0.35].forEach((dx, i) => {
    inn.add(new THREE.CylinderGeometry(0.1 - i * 0.015, 0.08 - i * 0.012, 0.13, 12), { m: M(FIRE.x + dx, 1.42, -IZ + 0.64), color: metal(0.62, 0.36, 0.22) });
    inn.add(new THREE.CylinderGeometry(0.008, 0.008, 0.14, 4), { m: M(FIRE.x + dx, 1.55, -IZ + 0.64), color: metal(0.2, 0.2, 0.2) });
  });
  inn.add(new THREE.SphereGeometry(0.12, 12, 8), { m: M(FIRE.x - 0.7, 0.31, -IZ + 0.75, 0, 0, 0, 1, 0.8, 1), color: metal(0.2, 0.2, 0.22) });
  inn.add(new THREE.CylinderGeometry(0.015, 0.03, 0.12, 6), { m: M(FIRE.x - 0.58, 0.36, -IZ + 0.75, 0, 0, -0.9), color: metal(0.2, 0.2, 0.22) });
  [[-0.6, 0.14], [-0.5, 0.2], [0.55, 0.1]].forEach(([dx, h]) => inn.add(new THREE.CylinderGeometry(0.025, 0.025, h, 8), { m: M(FIRE.x + dx, 1.52 + h / 2, -IZ + 0.4), color: () => [0.9, 0.86, 0.76] }));
  [[0.1, [0.4, 0.2, 0.18]], [0.16, [0.24, 0.3, 0.36]], [0.21, [0.5, 0.45, 0.32]]].forEach(([dx, c]) => inn.add(new THREE.BoxGeometry(0.05, 0.22, 0.16), { m: M(FIRE.x + dx, 1.63, -IZ + 0.4), color: () => c }));
  // beams: two tie beams, a ridge beam and rafters under the roof
  [-1.1, 1.1].forEach((z) => inn.add(new THREE.BoxGeometry(W - 0.2, 0.2, 0.2), { m: M(0, TOP - 0.02, z), color: wood(0.42) }));
  inn.add(new THREE.BoxGeometry(0.2, 0.22, D + 0.2), { m: M(0, TOP + GH - 0.2, 0), color: wood(0.42) });
  [-1, 1].forEach((s) => [-1.8, 0, 1.8].forEach((z) => inn.add(new THREE.BoxGeometry(slope - 0.6, 0.14, 0.1), { m: M(s * (run - 0.3) / 2, TOP + GH - (rise) * 0.47 - 0.1, z, 0, 0, -s * ang), color: wood(0.4) })));
  // fireplace: stone hearth, sides, back, wooden mantel, chimney breast
  const F = FIRE;
  inn.add(new THREE.BoxGeometry(1.95, 0.12, 1.0), { m: M(F.x, 0.17, -IZ + 0.5), color: stone });
  [-1, 1].forEach((s) => inn.add(new THREE.BoxGeometry(0.36, 1.25, 0.7), { m: M(F.x + s * 0.76, 0.85, -IZ + 0.35), color: stone }));
  inn.add(new THREE.BoxGeometry(1.2, 1.25, 0.2), { m: M(F.x, 0.85, -IZ + 0.1), color: (v) => { const c = stone(v); return [c[0] * 0.45, c[1] * 0.42, c[2] * 0.4]; } });   // sooty back
  inn.add(new THREE.BoxGeometry(2.0, 0.16, 0.42), { m: M(F.x, 1.44, -IZ + 0.4), color: wood(0.42) });
  for (let i = 0; i < 4; i++) inn.add(new THREE.BoxGeometry(1.3 - i * 0.04, 0.3, 0.55), { m: M(F.x, 1.67 + i * 0.3, -IZ + 0.27), color: stone });
  // the fire: logs, glowing embers, flames (flames are animated)
  [[-0.2, 0.3], [0.15, -0.25], [0.0, 0.05]].forEach(([dx, r]) => inn.add(new THREE.CylinderGeometry(0.07, 0.08, 0.7, 7), { m: M(F.x + dx * 0.4, 0.3, -IZ + 0.42, 0, r, Math.PI / 2), color: (v, nn) => (Math.abs(nn.x) > 0.8 ? [0.2, 0.15, 0.1] : [0.18, 0.13, 0.1]) }));
  glowP.add(new THREE.BoxGeometry(0.9, 0.05, 0.45), { m: M(F.x, 0.25, -IZ + 0.42), color: flat(1, 0.62, 0.3) });
  // firewood basket
  inn.add(new THREE.CylinderGeometry(0.28, 0.24, 0.32, 10, 1, true), { m: M(F.x - 1.25, 0.28, -IZ + 0.35), color: wood(0.5) });
  for (let i = 0; i < 5; i++) inn.add(new THREE.CylinderGeometry(0.05, 0.05, 0.55, 6), { m: M(F.x - 1.25 + (i - 2) * 0.08, 0.42 + (i % 2) * 0.04, -IZ + 0.35, 0.2 * (i - 2), 0, Math.PI / 2 + 0.1), color: wood(0.5) });
  /* ---------- painted surfaces: rugs and the quilt (crisp patterns on canvas) ---------- */
  const pics = [];
  let pseed = 11; const prnd = () => { pseed = (pseed * 16807) % 2147483647; return pseed / 2147483647; };
  const canvasPiece = (CW, CH, draw, geo, m, alpha = false) => {
    const cv = document.createElement('canvas'); cv.width = CW; cv.height = CH; draw(cv.getContext('2d'), CW, CH);
    const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
    const mesh = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ map: t, color: 0xbdb3a8, alphaTest: alpha ? 0.5 : 0 }));
    mesh.applyMatrix4(m); mesh.receiveShadow = true; pics.push(mesh); return mesh;
  };
  const wool = (g, CW, CH, k = 0.05) => { for (let i = 0; i < CW * CH * k; i++) { g.fillStyle = prnd() < 0.5 ? 'rgba(0,0,0,0.12)' : 'rgba(255,245,225,0.09)'; g.fillRect(prnd() * CW, prnd() * CH, 1.5, 1.5); } };
  // braided oval rug: rings of plaited cloth
  const braided = (cols) => (g, CW, CH) => {
    g.clearRect(0, 0, CW, CH);
    const N = 16, st = (CH / 2 - 2) / N;
    for (let k = 0; k < N; k++) {
      const rx = CW / 2 - 2 - k * st, ry = CH / 2 - 2 - k * st;
      g.fillStyle = cols[(k * 5 + (k % 3)) % cols.length];
      g.beginPath(); g.ellipse(CW / 2, CH / 2, Math.max(rx, 1), Math.max(ry, 1), 0, 0, TAU); g.fill();
      // the plait: little slanted strokes all round the ring
      g.strokeStyle = 'rgba(0,0,0,0.22)'; g.lineWidth = 1.2;
      const per = Math.PI * (rx + ry), cnt = Math.floor(per / 7);
      for (let i = 0; i < cnt; i++) {
        const a = (i / cnt) * TAU, x = CW / 2 + Math.cos(a) * (rx - st / 2), y = CH / 2 + Math.sin(a) * (ry - st / 2), d = (k % 2 ? 1 : -1) * st * 0.35;
        g.beginPath(); g.moveTo(x - Math.sin(a) * d - Math.cos(a) * st * 0.4, y + Math.cos(a) * d - Math.sin(a) * st * 0.4); g.lineTo(x + Math.sin(a) * d + Math.cos(a) * st * 0.4, y - Math.cos(a) * d + Math.sin(a) * st * 0.4); g.stroke();
      }
    }
    g.globalCompositeOperation = 'source-atop'; wool(g, CW, CH, 0.03); g.globalCompositeOperation = 'source-over';
  };
  // rag rug: woven stripes with fringe at the ends
  const ragRug = (g, CW, CH) => {
    g.clearRect(0, 0, CW, CH);
    const fr = 14, cols = ['#7d3b2e', '#c7b48c', '#3e5363', '#a5622f', '#e0d4b6', '#5b6b4b'];
    for (let y = 2; y < CH - 2; y += 4) { g.fillStyle = '#ddd2b8'; g.fillRect(0, y, fr + 1, 2); g.fillRect(CW - fr - 1, y, fr + 1, 2); }
    for (let x = fr, i = 0; x < CW - fr; i++) { const w = 6 + Math.floor(prnd() * 14); g.fillStyle = cols[i % cols.length]; g.fillRect(x, 0, Math.min(w, CW - fr - x), CH); x += w; }
    for (let y = 0; y < CH; y += 3) { g.fillStyle = 'rgba(0,0,0,0.1)'; g.fillRect(fr, y, CW - 2 * fr, 1); }
    wool(g, CW, CH, 0.04);
  };
  // patchwork quilt with stitching
  const quilt = (g, CW, CH) => {
    const cols = ['#8b2f2a', '#c9b98e', '#3f566a', '#6d7f52', '#b36a35', '#e6dcc4', '#5a3d52', '#a44b3e'];
    const nx = 10, ny = 7, w = CW / nx, h = CH / ny;
    for (let i = 0; i < nx; i++) for (let j = 0; j < ny; j++) {
      g.fillStyle = cols[Math.floor(prnd() * cols.length)]; g.fillRect(i * w, j * h, w, h);
      if (prnd() < 0.5) { g.fillStyle = cols[Math.floor(prnd() * cols.length)]; g.beginPath(); g.moveTo(i * w, j * h); g.lineTo(i * w + w, j * h + h); g.lineTo(i * w, j * h + h); g.fill(); }
      if (prnd() < 0.3) { g.fillStyle = 'rgba(255,255,255,0.18)'; for (let k = 0; k < 6; k++) g.fillRect(i * w + prnd() * w, j * h + prnd() * h, 3, 3); }
    }
    g.strokeStyle = 'rgba(250,240,220,0.55)'; g.setLineDash([4, 4]); g.lineWidth = 1.2;
    for (let i = 0; i <= nx; i++) { g.beginPath(); g.moveTo(i * w + 3, 0); g.lineTo(i * w + 3, CH); g.stroke(); }
    for (let j = 0; j <= ny; j++) { g.beginPath(); g.moveTo(0, j * h + 3); g.lineTo(CW, j * h + 3); g.stroke(); }
    g.setLineDash([]); wool(g, CW, CH, 0.02);
  };
  const flatOn = (x, y, z, ry = 0) => new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, ry, 0, 'YXZ')), new THREE.Vector3(1, 1, 1));
  canvasPiece(768, 512, braided(['#7a3a2c', '#b78d5c', '#4a5a66', '#d8c8a4', '#8a5a3a', '#5d6a4c', '#9e4632']), new THREE.PlaneGeometry(2.4, 1.6), flatOn(0.55, 0.124, 0.5), true);
  canvasPiece(512, 320, ragRug, new THREE.PlaneGeometry(1.0, 0.62), flatOn(-1.95, 0.124, -0.85), true);
  canvasPiece(512, 256, ragRug, new THREE.PlaneGeometry(0.9, 0.45), flatOn((DX0 + DX1) / 2, 0.124, IZ - 0.45), true);

  // bed in the back-left corner: turned posts, spindle headboard, soft mattress, patchwork quilt
  const B0 = -IX + 0.02, B1 = B0 + 1.95, BZ0 = -IZ + 0.02, BZ1 = BZ0 + 1.0;
  const bx = (B0 + B1) / 2, bz = (BZ0 + BZ1) / 2;
  const post = (h) => lathe([[0.045, 0], [0.045, 0.1], [0.032, 0.13], [0.03, h * 0.4], [0.048, h * 0.47], [0.032, h * 0.55], [0.028, h - 0.12], [0.042, h - 0.08], [0.02, h - 0.05], [0.032, h - 0.02], [0.0, h]], 10);
  [[B0 + 0.05, BZ0 + 0.05, 1.05], [B0 + 0.05, BZ1 - 0.05, 1.05], [B1 - 0.05, BZ0 + 0.05, 0.72], [B1 - 0.05, BZ1 - 0.05, 0.72]].forEach(([x, z, h]) => inn.add(post(h), { m: M(x, 0.12, z), color: wood(0.45) }));
  [[B0 + 0.05, 0.95, 0.3], [B1 - 0.05, 0.68, 0.18]].forEach(([x, top, hh]) => {
    inn.add(rbox(0.06, 0.08, BZ1 - BZ0 - 0.1, 0.02, 1), { m: M(x, top, bz), color: wood(0.5) });
    inn.add(rbox(0.05, 0.06, BZ1 - BZ0 - 0.1, 0.015, 1), { m: M(x, top - hh, bz), color: wood(0.5) });
    for (let z = BZ0 + 0.16; z < BZ1 - 0.1; z += 0.11) inn.add(new THREE.CylinderGeometry(0.012, 0.012, hh, 6), { m: M(x, top - hh / 2, z), color: wood(0.48) });
  });
  [BZ0 + 0.05, BZ1 - 0.05].forEach((z) => inn.add(rbox(B1 - B0 - 0.1, 0.14, 0.05, 0.015, 1), { m: M(bx, 0.36, z), color: wood(0.45) }));
  inn.add(box3(B1 - B0 - 0.1, 0.04, BZ1 - BZ0 - 0.1), { m: M(bx, 0.33, bz), color: wood(0.4) });
  inn.add(rbox(B1 - B0 - 0.12, 0.17, BZ1 - BZ0 - 0.08, 0.06, 2), { m: M(bx, 0.48, bz), color: flat(0.88, 0.86, 0.8, 'fabric') });
  canvasPiece(512, 360, quilt, rbox(1.4, 0.035, BZ1 - BZ0 + 0.06, 0.015, 1), M(B1 - 0.75, 0.585, bz + 0.02));
  canvasPiece(512, 120, quilt, rbox(1.4, 0.26, 0.025, 0.01, 1), M(B1 - 0.75, 0.46, BZ1 + 0.03));
  inn.add(rbox(0.4, 0.06, BZ1 - BZ0 - 0.06, 0.025, 2), { m: M(B1 - 0.24, 0.62, bz), color: cloth((v) => (Math.sin(v.z * 60) > 0.5 ? [0.32, 0.2, 0.18] : [0.5, 0.24, 0.2])) });
  [[bz - 0.22, 0.1], [bz + 0.2, -0.12]].forEach(([z, r]) => inn.add(rbox(0.34, 0.12, 0.42, 0.06, 2), { m: M(B0 + 0.3, 0.63, z, 0, r, 0.25), color: flat(0.93, 0.91, 0.87, 'fabric') }));
  // chest at the foot of the bed: domed lid, iron bands and handles
  {
    const cx = B1 + 0.45, cz = BZ0 + 0.25;
    inn.add(rbox(0.7, 0.36, 0.42, 0.02, 1), { m: M(cx, 0.31, cz), color: wood(0.5) });
    inn.add(new THREE.CylinderGeometry(0.21, 0.21, 0.7, 16, 1, false, -Math.PI / 2, Math.PI), { m: M(cx, 0.49, cz, 0, 0, Math.PI / 2, 1, 1, 0.45), color: wood(0.52) });
    [-0.24, 0, 0.24].forEach((dx) => inn.add(new THREE.CylinderGeometry(0.215, 0.215, 0.035, 16, 1, true, -Math.PI / 2, Math.PI), { m: M(cx + dx, 0.49, cz, 0, 0, Math.PI / 2, 1, 1, 0.46), color: metal(0.2, 0.2, 0.21) }));
    [-0.24, 0, 0.24].forEach((dx) => inn.add(box3(0.035, 0.36, 0.43), { m: M(cx + dx, 0.31, cz), color: metal(0.2, 0.2, 0.21) }));
    inn.add(rbox(0.1, 0.12, 0.02, 0.01, 1), { m: M(cx, 0.44, cz + 0.22), color: metal(0.55, 0.45, 0.25) });
    [-1, 1].forEach((s) => inn.add(new THREE.TorusGeometry(0.04, 0.008, 4, 10, Math.PI), { m: M(cx + s * 0.36, 0.38, cz, 0, Math.PI / 2, Math.PI), color: metal(0.2, 0.2, 0.21) }));
  }
  // table with turned legs, two Windsor chairs, a hurricane lamp, mug, book and a bowl of grey fruit
  const T = { x: 0.9, z: 0.6 };
  inn.add(rbox(1.3, 0.055, 0.85, 0.02, 2), { m: M(T.x, 0.885, T.z), color: wood(0.55) });
  inn.add(rbox(1.12, 0.09, 0.68, 0.01, 1), { m: M(T.x, 0.81, T.z), color: wood(0.46) });
  const tleg = lathe([[0.03, 0], [0.036, 0.04], [0.026, 0.12], [0.04, 0.3], [0.03, 0.48], [0.036, 0.56], [0.034, 0.64], [0.034, 0.7]], 8);
  [[-0.56, -0.34], [0.56, -0.34], [-0.56, 0.34], [0.56, 0.34]].forEach(([dx, dz]) => inn.add(tleg, { m: M(T.x + dx, 0.12, T.z + dz), color: wood(0.45) }));
  const cleg = lathe([[0.016, 0], [0.02, 0.05], [0.015, 0.16], [0.022, 0.28], [0.018, 0.4], [0.02, 0.44]], 6);
  [-1, 1].forEach((s) => {
    // chair frame: its back is at local -z, away from the table
    const CF = new THREE.Matrix4().compose(new THREE.Vector3(T.x, 0.12, T.z + s * 0.68), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), s < 0 ? 0 : Math.PI), new THREE.Vector3(1, 1, 1));
    const a = (geo, mx, color) => inn.add(geo, { m: CF.clone().multiply(mx), color });
    a(rbox(0.44, 0.045, 0.42, 0.02, 2), M(0, 0.46, 0), wood(0.52));
    [[-0.17, -0.15], [0.17, -0.15], [-0.17, 0.15], [0.17, 0.15]].forEach(([dx, dz]) => a(cleg, M(dx * 1.08, 0, dz * 1.08, dz * 0.4, 0, -dx * 0.4), wood(0.45)));
    a(new THREE.CylinderGeometry(0.01, 0.01, 0.36, 6), M(0, 0.16, 0, 0, 0, Math.PI / 2), wood(0.45));   // stretcher
    // spindle back under a bent top rail
    for (let i = -2; i <= 2; i++) { const x = i * 0.075, z = 0.31 - Math.sqrt(0.25 - x * x); a(new THREE.CylinderGeometry(0.009, 0.011, 0.5, 6), M(x, 0.73, z - 0.01, -0.08, 0, 0), wood(0.5)); }
    a(new THREE.TorusGeometry(0.5, 0.022, 6, 16, 0.9), M(0, 0.98, 0.31 - 0.02, -Math.PI / 2, 0, Math.PI / 2 - 0.45), wood(0.52));
  });
  // hurricane lamp: brass base, glass chimney with the flame inside
  inn.add(lathe([[0.0, 0], [0.07, 0], [0.075, 0.02], [0.05, 0.05], [0.055, 0.09], [0.03, 0.1]], 12), { m: M(T.x + 0.35, 0.91, T.z - 0.15), color: metal(0.6, 0.47, 0.25) });
  glassP.add(lathe([[0.03, 0], [0.06, 0.06], [0.065, 0.12], [0.035, 0.22], [0.03, 0.28]], 12), { m: M(T.x + 0.35, 1.01, T.z - 0.15), color: flat(1, 1, 1) });
  glowP.add(new THREE.SphereGeometry(0.018, 8, 6), { m: M(T.x + 0.35, 1.07, T.z - 0.15, 0, 0, 0, 1, 2, 1), color: flat(1, 1, 1) });
  inn.add(lathe([[0.04, 0], [0.045, 0.01], [0.042, 0.1], [0.046, 0.105]], 12), { m: M(T.x - 0.3, 0.91, T.z + 0.2), color: flat(0.75, 0.73, 0.7, 'paper') });
  inn.add(new THREE.TorusGeometry(0.025, 0.007, 5, 10), { m: M(T.x - 0.25, 0.965, T.z + 0.2, 0, 0, Math.PI / 2), color: flat(0.75, 0.73, 0.7, 'paper') });
  inn.add(rbox(0.22, 0.04, 0.3, 0.008, 1), { m: M(T.x - 0.25, 0.93, T.z - 0.2, 0, 0.3, 0), color: flat(0.3, 0.36, 0.42, 'leather') });
  inn.add(lathe([[0.0, 0], [0.08, 0], [0.14, 0.04], [0.165, 0.075], [0.155, 0.08]], 16), { m: M(T.x + 0.05, 0.91, T.z + 0.15), color: wood(0.5) });
  [[0, 0], [0.07, 0.05], [-0.06, 0.05], [0.0, -0.07]].forEach(([dx, dz], i) => inn.add(new THREE.SphereGeometry(0.055, 10, 7), { m: M(T.x + 0.05 + dx, 0.99 + (i === 3 ? 0.04 : 0), T.z + 0.15 + dz), color: flat(0.66, 0.66, 0.65) }));
  // a rocking chair by the fire
  {
    const R = new THREE.Matrix4().compose(new THREE.Vector3(0.05, 0.12, -1.0), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 2.12), new THREE.Vector3(1, 1, 1));
    const a = (geo, mx, color) => inn.add(geo, { m: R.clone().multiply(mx), color });
    [-1, 1].forEach((s) => {
      const pts = []; for (let z = -0.36; z <= 0.361; z += 0.06) pts.push(new THREE.Vector3(s * 0.22, 0.03 + 0.75 - Math.sqrt(0.5625 - z * z), z));
      a(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 16, 0.02, 5), M(), wood(0.42));   // rockers
      a(new THREE.CylinderGeometry(0.018, 0.02, 0.4, 6), M(s * 0.22, 0.2, 0.18), wood(0.45));
      a(new THREE.CylinderGeometry(0.018, 0.02, 0.95, 6), M(s * 0.22, 0.5, -0.2, -0.18, 0, 0), wood(0.45));
      a(rbox(0.05, 0.03, 0.5, 0.012, 1), M(s * 0.25, 0.62, 0.0), wood(0.52));
    });
    a(rbox(0.48, 0.045, 0.44, 0.02, 2), M(0, 0.4, 0.0), wood(0.5));
    a(rbox(0.42, 0.05, 0.4, 0.025, 2), M(0, 0.44, 0.01), cloth(() => [0.5, 0.24, 0.2]));
    for (let i = 0; i < 4; i++) a(rbox(0.4, 0.07, 0.015, 0.006, 1), M(0, 0.58 + i * 0.12, -0.25 - i * 0.02, -0.18, 0, 0), wood(0.5));
    a(rbox(0.36, 0.34, 0.03, 0.015, 1), M(0.03, 0.82, -0.3, -0.18, 0, 0.05), cloth((v) => (Math.sin(v.y * 90) > 0 ? [0.66, 0.6, 0.48] : [0.58, 0.52, 0.4])));   // a knitted throw over the back
    a(rbox(0.38, 0.05, 0.08, 0.02, 1), M(0.03, 1.0, -0.33, 0, 0, 0.05), cloth(() => [0.62, 0.56, 0.44]));
  }
  // kitchen counter on the left wall: cupboards, butcher-block top, enamel basin and pump,
  // bread on a board, plates on a rack, herbs drying above
  {
    const K = new THREE.Matrix4().compose(new THREE.Vector3(-IX, 0.12, -0.45), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2), new THREE.Vector3(1, 1, 1));
    const a = (geo, mx, color, parts = inn) => parts.add(geo, { m: K.clone().multiply(mx), color });
    a(rbox(1.5, 0.74, 0.52, 0.012, 1), M(0, 0.45, 0.27), wood(0.46));
    a(box3(1.46, 0.08, 0.46), M(0, 0.04, 0.24), wood(0.3));
    [-0.49, 0, 0.49].forEach((x, i) => {
      a(rbox(0.45, 0.6, 0.03, 0.008, 1), M(x, 0.46, 0.54), wood(0.52));
      a(rbox(0.31, 0.44, 0.02, 0.015, 1), M(x, 0.46, 0.56), wood(0.44));
      a(new THREE.SphereGeometry(0.016, 8, 6), M(x + (i === 1 ? 0 : (x < 0 ? 0.17 : -0.17)), 0.62, 0.575), metal(0.2, 0.2, 0.21));
    });
    a(rbox(1.56, 0.06, 0.6, 0.015, 2), M(0, 0.85, 0.3), kind('wood', (v) => { const c = 0.58 + (Math.abs((v.x * 12.5) % 1) < 0.06 ? -0.08 : 0) + n(v.x * 9, v.y, v.z * 3) * 0.08; return [c * 1.04, c * 0.8, c * 0.56]; }));
    a(lathe([[0.0, -0.13], [0.12, -0.12], [0.19, -0.06], [0.21, 0.0], [0.225, 0.01]], 18), M(-0.35, 0.99, 0.3), flat(0.9, 0.9, 0.86, 'metal'));
    a(new THREE.TorusGeometry(0.222, 0.01, 5, 24), M(-0.35, 1.0, 0.3, Math.PI / 2, 0, 0), flat(0.15, 0.2, 0.36, 'metal'));
    a(new THREE.CylinderGeometry(0.045, 0.05, 0.42, 10), M(-0.35, 1.08, 0.06), metal(0.16, 0.16, 0.17));
    a(new THREE.CylinderGeometry(0.02, 0.025, 0.2, 8), M(-0.35, 1.22, 0.16, Math.PI / 2 - 0.3, 0, 0), metal(0.16, 0.16, 0.17));
    a(new THREE.CylinderGeometry(0.012, 0.012, 0.42, 6), M(-0.35, 1.38, 0.0, 0.9, 0, 0), metal(0.16, 0.16, 0.17));
    a(rbox(0.42, 0.03, 0.28, 0.01, 1), M(0.35, 0.895, 0.32, 0, 0.15, 0), wood(0.62));
    a(rbox(0.28, 0.12, 0.14, 0.06, 2), M(0.33, 0.97, 0.32, 0, 0.1, 0), kind('plain', (v) => (v.y > 0.99 ? [0.62, 0.38, 0.18] : [0.75, 0.55, 0.3])));
    a(rbox(0.2, 0.01, 0.03, 0.004, 1), M(0.55, 0.915, 0.42, 0, -0.3, 0), metal(0.7, 0.7, 0.72));
    // plate rack
    a(rbox(0.9, 0.03, 0.16, 0.008, 1), M(0.1, 1.52, 0.08), wood(0.48));
    a(rbox(0.9, 0.025, 0.02, 0.006, 1), M(0.1, 1.6, 0.15), wood(0.48));
    [-0.22, 0.02, 0.26].forEach((x, i) => a(new THREE.CylinderGeometry(0.12, 0.12, 0.015, 20), M(x, 1.66, 0.06, Math.PI / 2 - 0.15, 0, 0), i === 1 ? flat(0.82, 0.84, 0.86, 'metal') : flat(0.86, 0.84, 0.78, 'plaster')));
    [0.42, 0.52].forEach((x) => a(lathe([[0.0, 0], [0.035, 0], [0.04, 0.09], [0.042, 0.095]], 10), M(x, 1.535, 0.08), flat(0.3, 0.4, 0.5, 'plaster')));
    // herbs drying from a pole above
    a(new THREE.CylinderGeometry(0.015, 0.015, 1.4, 6), M(0, 2.05, 0.25, 0, 0, Math.PI / 2), wood(0.4));
    [-0.55, -0.3, -0.05, 0.2, 0.45].forEach((x, i) => {
      a(new THREE.CylinderGeometry(0.002, 0.002, 0.14, 3), M(x, 1.97, 0.25), flat(0.5, 0.45, 0.35));
      a(new THREE.ConeGeometry(0.06 + (i % 2) * 0.02, 0.26, 7), M(x, 1.78, 0.25, Math.PI, i, 0), i % 3 === 0 ? flat(0.42, 0.46, 0.28, 'fabric') : i % 3 === 1 ? flat(0.55, 0.5, 0.32, 'fabric') : flat(0.5, 0.36, 0.42, 'fabric'));
    });
  }
  // shelf on the left wall with jars and books
  [1.35, 1.75].forEach((y) => {
    inn.add(new THREE.BoxGeometry(0.26, 0.04, 1.3), { m: M(-IX + 0.14, y, 0.9), color: wood(0.5) });
    inn.add(new THREE.BoxGeometry(0.04, 0.16, 0.04), { m: M(-IX + 0.04, y - 0.1, 0.35), color: wood(0.4) });
    inn.add(new THREE.BoxGeometry(0.04, 0.16, 0.04), { m: M(-IX + 0.04, y - 0.1, 1.45), color: wood(0.4) });
  });
  [[0.4, 0.08, 0.16, [0.62, 0.66, 0.66]], [0.6, 0.06, 0.12, [0.6, 0.58, 0.5]], [0.78, 0.07, 0.2, [0.55, 0.6, 0.62]]].forEach(([z, r, h, c]) => {
    inn.add(new THREE.CylinderGeometry(r, r, h, 10), { m: M(-IX + 0.14, 1.37 + h / 2, z), color: flat(...c) });
    inn.add(new THREE.CylinderGeometry(r * 0.8, r * 0.8, 0.03, 10), { m: M(-IX + 0.14, 1.38 + h, z), color: flat(0.45, 0.35, 0.25) });
  });
  [[1.0, 0.24, [0.45, 0.22, 0.2]], [1.06, 0.2, [0.25, 0.32, 0.36]], [1.12, 0.26, [0.4, 0.38, 0.28]], [1.18, 0.22, [0.6, 0.55, 0.45]], [1.26, 0.19, [0.3, 0.3, 0.32]]].forEach(([z, h, c], i) => {
    inn.add(new THREE.BoxGeometry(0.18, h, 0.05), { m: M(-IX + 0.14, 1.77 + h / 2, z, i === 4 ? 0.25 : 0, 0, 0), color: flat(...c) });
  });
  // coat on a peg and boots by the door
  inn.add(new THREE.CylinderGeometry(0.015, 0.015, 0.12, 5), { m: M(-2.6, 1.7, IZ - 0.06, Math.PI / 2, 0, 0), color: wood(0.4) });
  inn.add(new THREE.BoxGeometry(0.42, 0.85, 0.12), { m: M(-2.6, 1.25, IZ - 0.1), color: cloth((v) => { const c = 0.32 + n(v.x * 9, v.y * 9, 0) * 0.04; return [c * 0.85, c, c * 0.9]; }) });
  [-2.7, -2.48].forEach((x) => {
    inn.add(new THREE.BoxGeometry(0.11, 0.26, 0.13), { m: M(x, 0.25, IZ - 0.2), color: flat(0.2, 0.16, 0.13) });
    inn.add(new THREE.BoxGeometry(0.11, 0.07, 0.26), { m: M(x, 0.155, IZ - 0.26), color: flat(0.2, 0.16, 0.13) });
  });
  // a small framed picture beside the fireplace
  inn.add(new THREE.BoxGeometry(0.5, 0.38, 0.03), { m: M(-0.25, 1.6, -IZ + 0.02), color: wood(0.4) });
  inn.add(new THREE.PlaneGeometry(0.4, 0.28), { m: M(-0.25, 1.6, -IZ + 0.04), color: (v) => (v.y > 1.6 ? [0.7, 0.72, 0.74] : [0.4, 0.45, 0.4]) });

  /* ---------- the door (its own mesh, turning on its hinge) ---------- */
  const doorP = new Parts();
  const DW = DX1 - DX0 - 0.04;
  for (let i = 0; i < 5; i++) doorP.add(new THREE.BoxGeometry(DW / 5 - 0.008, DH - 0.04, 0.06), { m: M(0.02 + DW / 10 + i * DW / 5, (DH - 0.04) / 2, 0), color: wood(0.5 + (i % 2) * 0.04), tip: () => 0 });
  [0.35, DH - 0.4].forEach((y) => doorP.add(new THREE.BoxGeometry(DW - 0.1, 0.12, 0.04), { m: M(0.02 + DW / 2, y, -0.05), color: wood(0.46), tip: () => 0 }));
  doorP.add(new THREE.BoxGeometry(0.1, Math.hypot(DW - 0.2, DH - 0.95), 0.04), { m: M(0.02 + DW / 2, DH / 2 - 0.02, -0.05, 0, 0, Math.atan2(DW - 0.2, DH - 0.95)), color: wood(0.46), tip: () => 0 });
  [0.06, -0.08].forEach((z) => doorP.add(new THREE.CylinderGeometry(0.02, 0.02, 0.14, 6), { m: M(DW - 0.1, 1.0, z), color: metal(0.18, 0.18, 0.19), tip: () => 0 }));
  [0.3, DH - 0.3].forEach((y) => doorP.add(new THREE.BoxGeometry(0.4, 0.05, 0.075), { m: M(0.22, y, 0), color: metal(0.18, 0.18, 0.19), tip: () => 0 }));   // hinges

  /* ---------- boat ---------- */
  const boatP = new Parts();
  boatP.add(new THREE.SphereGeometry(1, 14, 6, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), { m: M(0, 0, 0, 0, 0, 0, 1.25, 0.42, 0.5), color: (p) => (p.y > -0.05 ? [0.55, 0.4, 0.28] : [0.4, 0.3, 0.22]), tip: () => 1 });
  boatP.add(new THREE.BoxGeometry(0.16, 0.05, 0.9), { m: M(0.1, -0.08, 0), color: flat(0.5, 0.4, 0.3), tip: () => 1 });
  boatP.add(new THREE.BoxGeometry(0.16, 0.05, 0.75), { m: M(-0.6, -0.08, 0), color: flat(0.5, 0.4, 0.3), tip: () => 1 });
  boatP.add(new THREE.CylinderGeometry(0.025, 0.025, 2.2, 5), { m: M(0.2, 0.0, 0.1, 0, 0.3, 1.45), color: flat(0.55, 0.45, 0.32), tip: () => 0 });

  /* ---------- materials and meshes ---------- */
  const ONE = { value: 1 };
  const extMat = coverMaterial({ ...shared, uFrost: { value: 0 } }, ONE, { color: 0xd2c3b0, snowMask: true, snowBias: 0.12, grain: 0.022, rich: true });
  const intMat = coverMaterial({ ...shared, uSnowCover: { value: 0 }, uMoss: { value: 0 }, uFrost: { value: 0 } }, ONE, { color: 0xe2d4c0, grain: 0.018, rich: true, indoor: true });
  const boatMat = coverMaterial({ ...shared, uFrost: { value: 0 } }, ONE, { color: 0xd2c3b0, snowMask: true, side: THREE.DoubleSide, rich: true, grain: 0.02 });
  const glowMat = new THREE.MeshBasicMaterial({ color: 0x141414 });
  const glassMat = new THREE.MeshBasicMaterial({ color: 0xa9b7c0, transparent: true, opacity: 0.16, depthWrite: false });

  const group = new THREE.Group();
  group.position.set(CABIN.x, CABIN.y, CABIN.z);
  group.rotation.y = CABIN.yaw;
  group.scale.setScalar(S);
  const extMesh = new THREE.Mesh(ext.geometry(), extMat); extMesh.castShadow = true; extMesh.receiveShadow = true;
  const intMesh = new THREE.Mesh(inn.geometry(), intMat); intMesh.receiveShadow = true; intMesh.castShadow = true;
  const glowMesh = new THREE.Mesh(glowP.geometry(), glowMat);
  const glassMesh = new THREE.Mesh(glassP.geometry(), glassMat); glassMesh.renderOrder = 2;
  const door = new THREE.Mesh(doorP.geometry(), extMat); door.castShadow = true;
  const hinge = new THREE.Group(); hinge.position.set(DX0 + 0.02, 0.1, D / 2); hinge.add(door);
  const boat = new THREE.Mesh(boatP.geometry(), boatMat); boat.castShadow = true;
  boat.position.set(0.9, 0, dz0 + dockLen - 2.5); boat.rotation.y = 0.12;
  // flames: soft additive tongues that flicker
  const flameMat = new THREE.MeshBasicMaterial({ color: 0xffa040, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false });
  const flames = [[-0.18, 0.28], [0.12, 0.34], [0.0, 0.42], [0.25, 0.22]].map(([dx, h]) => {
    const f = new THREE.Mesh(new THREE.ConeGeometry(0.09, 1, 7, 1, true).translate(0, 0.5, 0), flameMat);
    f.position.set(FIRE.x + dx, 0.3, -IZ + 0.42); f.userData.h = h; group.add(f); return f;
  });
  group.add(extMesh, intMesh, glowMesh, glassMesh, hinge, boat);
  pics.forEach((m) => group.add(m));
  scene.add(group);
  group.updateMatrixWorld(true);
  // the study under the house
  const study = createStudy({ group, mats: { inn: intMat, glow: glowMat }, camera, U });
  const fireLight = new THREE.PointLight(0xffa058, 0, 46, 1.4);
  fireLight.position.copy(new THREE.Vector3(FIRE.x, 0.9, -IZ + 1.1)).applyAxisAngle(new THREE.Vector3(0, 1, 0), CABIN.yaw).multiplyScalar(S).add(group.position);
  scene.add(fireLight);
  // the fire throws flickering shadows of the furniture across the room (only the house is drawn into them)
  fireLight.castShadow = true; fireLight.shadow.autoUpdate = false; fireLight.shadow.mapSize.set(512, 512);
  fireLight.shadow.camera.near = 0.5; fireLight.shadow.camera.far = 46; fireLight.shadow.bias = -0.003; fireLight.shadow.normalBias = 0.2;
  fireLight.shadow.camera.layers.set(5);  fireLight.shadow.needsUpdate = true;   // draw once now, so the map exists from the first frame
  [extMesh, intMesh, door].forEach((m) => m.layers.enable(5));

  // light through the windows, dust in the air, halos round flames and lamps
  const mood = (() => {
    const SG = study.glowSpots, TAUc = Math.PI * 2;
    const halos = [
      { p: [FIRE.x, 0.45, -IZ + 0.45], size: 1.7, color: [1, 0.5, 0.2], flicker: 1 },
      { p: [0.9 + 0.35, 1.07, 0.6 - 0.15], size: 0.5, color: [1, 0.7, 0.4], flicker: 1 }
    ];
    for (let i = 0; i < 8; i++) { const a = (i / 8) * TAUc; halos.push({ p: [SG.CH.x + Math.cos(a) * 0.82, SG.CH.y + 0.2, SG.CH.z + Math.sin(a) * 0.82], size: 0.32, color: [1, 0.72, 0.4], flicker: 1 }); }
    for (let i = 0; i < 6; i++) { const a = (i / 6) * TAUc + 0.3; halos.push({ p: [SG.CH.x + Math.cos(a) * 0.42, SG.CH.y + 0.6, SG.CH.z + Math.sin(a) * 0.42], size: 0.3, color: [1, 0.72, 0.4], flicker: 1 }); }
    halos.push({ p: [-3.2, SG.F + 1.52, -0.9], size: 0.9, color: [1, 0.78, 0.5] }, { p: [0.6, SG.F + 1.06, -7.98], size: 0.5, color: [0.9, 0.95, 0.7] });
    [-1, 1].forEach((s2) => halos.push({ p: [-1.8 + s2 * 1.5, SG.F + 2.37, SG.Z1 - 0.19], size: 0.6, color: [1, 0.75, 0.45] }));
    [-5.35, -3.0, -0.9, 0.9, 3.0, 5.35].forEach((x) => halos.push({ p: [x, SG.SLAB - 0.02, -8.55], size: 0.36, color: [1, 0.88, 0.7] }));
    [-6.0, -3.4, -0.8, 1.6].forEach((z) => [-5.45, 2.7, 5.0].forEach((x) => halos.push({ p: [x, SG.SLAB - 0.02, z], size: 0.36, color: [1, 0.88, 0.7] })));
    const fy = (y0, y1) => [y0, y1];
    return createMood({
      group, U,
      beams: [
        { rect: [[-0.95, SG.F + 2.62, SG.Z0 + 0.04], [0.95, SG.F + 2.62, SG.Z0 + 0.04], [0.95, SG.F + 0.55, SG.Z0 + 0.04], [-0.95, SG.F + 0.55, SG.Z0 + 0.04]], dir: [0.1, -0.5, 1], len: 6.5, k: 1.2 },
        { rect: [[0.75, 1.95, D / 2 - 0.2], [1.95, 1.95, D / 2 - 0.2], [1.95, 0.95, D / 2 - 0.2], [0.75, 0.95, D / 2 - 0.2]], dir: [-0.25, -0.55, -1], len: 3.2, k: 1 },
        { rect: [[W / 2 - 0.2, 1.95, -0.3], [W / 2 - 0.2, 1.95, 0.9], [W / 2 - 0.2, 0.95, 0.9], [W / 2 - 0.2, 0.95, -0.3]], dir: [-1, -0.5, 0.15], len: 3.0, k: 0.8 }
      ],
      halos,
      dust: [{ box: [-4.6, 1.4, SG.F + 0.3, SG.C - 0.5, -9.2, 2.2], n: 520 }, { box: [-2.9, 2.9, 0.3, 2.5, -2.2, 2.2], n: 170 }]
    });
  })();
  const fireBase = fireLight.position.clone();

  // chimney smoke
  const smoke = (() => {
    const N = 90, g = new THREE.BufferGeometry();
    const pos = new Float32Array(N * 3), seed = new Float32Array(N);
    for (let i = 0; i < N; i++) seed[i] = i / N;
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false,
      uniforms: { uTime: U.uTime, uOpacity: { value: 0 }, uColor: { value: new THREE.Color(0xc9c9c9) }, uSize: { value: 70 } },
      vertexShader: /* glsl */`
        uniform float uTime, uSize; attribute float aSeed; varying float vA;
        void main() {
          float t = fract(uTime * 0.045 + aSeed);
          vec3 p = vec3(sin(aSeed * 91.0) * (0.6 + t * 5.0) + t * t * 30.0 + sin(uTime * 0.3 + aSeed * 20.0) * 3.0 * t, t * 55.0, cos(aSeed * 47.0) * (0.6 + t * 5.0) + t * 8.0);
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = uSize * (0.35 + t * 2.2) * (60.0 / -mv.z);
          vA = smoothstep(0.0, 0.12, t) * (1.0 - t) * (1.0 - t) * 0.22;
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: /* glsl */`
        uniform float uOpacity; uniform vec3 uColor; varying float vA;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          float a = smoothstep(0.5, 0.0, d);
          gl_FragColor = vec4(uColor, a * a * uOpacity * vA);
          #include <colorspace_fragment>
        }`
    });
    const pts = new THREE.Points(g, mat); pts.frustumCulled = false;
    pts.position.copy(group.localToWorld(smokeFrom.clone()));
    scene.add(pts);
    return pts;
  })();

  /* ---------- solid parts and floors (worked out in the house's own metres) ---------- */
  const toLocal = (wx, wz) => {
    const dx = (wx - CABIN.x) / S, dz = (wz - CABIN.z) / S, c = Math.cos(CABIN.yaw), s = Math.sin(CABIN.yaw);
    return [dx * c - dz * s, dx * s + dz * c];
  };
  const toWorld = (lx, lz) => { const c = Math.cos(CABIN.yaw), s = Math.sin(CABIN.yaw); return [CABIN.x + (lx * c + lz * s) * S, CABIN.z + (-lx * s + lz * c) * S]; };
  const RECTS = [
    // walls
    [-W / 2 - 0.3, W / 2 + 0.3, -D / 2 - LR, -D / 2 + LR],
    [-W / 2 - LR, -W / 2 + LR, -D / 2 - 0.3, D / 2 + 0.3],
    [W / 2 - LR, W / 2 + LR, -D / 2 - 0.3, D / 2 + 0.3],
    [-W / 2 - 0.3, DX0, D / 2 - LR, D / 2 + LR],
    [DX1, W / 2 + 0.3, D / 2 - LR, D / 2 + LR],
    // inside
    [B0, B1, BZ0, BZ1], [B1 + 0.08, B1 + 0.82, BZ0, BZ0 + 0.5],
    [T.x - 0.65, T.x + 0.65, T.z - 0.43, T.z + 0.43], [T.x - 0.25, T.x + 0.25, T.z - 0.95, T.z - 0.45], [T.x - 0.25, T.x + 0.25, T.z + 0.45, T.z + 0.95],
    [F.x - 1.0, F.x + 1.0, -IZ - 0.1, -IZ + 1.0], [F.x - 1.55, F.x - 0.95, -IZ, -IZ + 0.65],
    [-IX, -IX + 0.3, 0.25, 1.55],
    [-IX, -IX + 0.62, -1.22, 0.32], [-0.3, 0.4, -1.4, -0.65],          // kitchen counter, rocking chair
    // outside
    [0.8, 2.15, D / 2 + 0.26, D / 2 + 0.7],
    [-W / 2 - 0.95, -W / 2 - 0.2, -1.75, 0.0],
    [W / 2 + 0.2, W / 2 + 0.9, D / 2 - 0.8, D / 2 - 0.1],
    [-W / 2 - 1.75, -W / 2 - 1.05, 1.05, 1.75],
    [PR0 + 0.15, PR0 + 0.35, D / 2 + 2.1, D / 2 + 2.3], [PR1 - 0.35, PR1 - 0.15, D / 2 + 2.1, D / 2 + 2.3]
  ];
  RECTS.push(
    [STAIR.x0 - 0.07, STAIR.x0 + 0.02, STAIR.bottom - 0.05, 1.5],         // railing round the cellar opening
    [STAIR.x0, STAIR.x1, STAIR.bottom - 0.09, STAIR.bottom],
    [-3.2, -2.5, D / 2 + 1.65, D / 2 + 2.15],                              // crates
    [PR1 + 0.5, PR1 + 0.7, D / 2 + 2.8, D / 2 + 3.0]                       // lantern post
  );
  const DOOR_CLOSED = [DX0, DX1, D / 2 - 0.1, D / 2 + 0.1];
  const DOOR_OPEN = [DX0 - 0.06, DX0 + 0.08, D / 2 - DW - 0.05, D / 2];
  const inRect = (lx, lz, [x0, x1, z0, z1], p) => lx > x0 - p && lx < x1 + p && lz > z0 - p && lz < z1 + p;
  const door$ = { open: false, a: 0, from: 0, t0: -1e9 };

  // hint shown near the door
  const doorWorld = toWorld((DX0 + DX1) / 2, D / 2);

  // which floor you're on decides what's solid: the cabin, the stairs, or the library
  // (fm = height of your feet in the cabin's metres)
  const toM = (feetY) => (feetY - CABIN.y) / S;
  const levelOf = (fm) => (fm > -0.7 ? 'ground' : fm < -3.2 ? 'study' : 'stairs');
  const inStair = (lx, lz) => lx > STAIR.x0 && lx < STAIR.x1 && lz > STAIR.bottom && lz < STAIR.top;
  const inStudy = (lx, lz) => lx > STUDY.x0 && lx < STUDY.x1 && lz > STUDY.z0 && lz < STUDY.z1;
  const inHouse = (lx, lz) => lx > -W / 2 + LR - 0.05 && lx < W / 2 - LR + 0.05 && lz > -D / 2 + LR && lz < D / 2 + LR + 0.05;
  // world-space boxes: no ground drawn inside the house, no lake inside the library
  const box = (x0, x1, z0, z1) => { const pts = [toWorld(x0, z0), toWorld(x1, z0), toWorld(x0, z1), toWorld(x1, z1)]; return [Math.min(...pts.map((p) => p[0])), Math.max(...pts.map((p) => p[0])), Math.min(...pts.map((p) => p[1])), Math.max(...pts.map((p) => p[1]))]; };

  return {
    group, study,
    holeBox: box(-W / 2 + LR, W / 2 - LR, -D / 2 + LR, D / 2 - LR),
    studyBox: box(STUDY.x0 - 0.3, STUDY.x1 + 0.3, STUDY.z0 - 0.3, STUDY.z1 + 0.3),
    // is (wx, wz) inside something solid for someone whose feet are at feetY? (pad: extra room, world units)
    blocked(wx, wz, pad, feetY) {
      const [lx, lz] = toLocal(wx, wz);
      if (Math.abs(lx) > STUDY.x1 + 3 || lz < STUDY.z0 - 3 || lz > D / 2 + 4) return false;
      const p = 0.17 + pad / S, fm = toM(feetY), lv = levelOf(fm);
      if (lv === 'stairs') return lx < STAIR.x0 + p || lx > STAIR.x1 - p || lz > STAIR.top + 0.05;
      if (lv === 'study') return studyBlocked(lx, lz, p, fm);
      if (Math.abs(lx) > W / 2 + 3 || lz < -D / 2 - 3) return false;
      for (const r of RECTS) if (inRect(lx, lz, r, p)) return true;
      if (door$.a < 0.5 ? inRect(lx, lz, DOOR_CLOSED, p) : inRect(lx, lz, DOOR_OPEN, p * 0.6)) return true;
      return false;
    },
    // are you indoors? (no rain or mist in here)
    inside(wx, wz, feetY) { const [lx, lz] = toLocal(wx, wz); return (Math.abs(lx) < W / 2 && Math.abs(lz) < D / 2) || (inStudy(lx, lz) && toM(feetY) < -1); },
    // every built floor under (wx, wz), in world units: [{ y, under }]; under = this replaces the ground
    floors(wx, wz, out) {
      const [lx, lz] = toLocal(wx, wz);
      const y = (m) => CABIN.y + m * S;
      if (inStair(lx, lz)) out.push({ y: y(rampY(lz)), under: true });
      else if (inHouse(lx, lz)) out.push({ y: y(0.12), under: true });
      for (const h of studyFloors(lx, lz)) out.push({ y: y(h), under: true });
      if (lx > -3.3 && lx < 3.4 && lz >= D / 2 + LR + 0.05 && lz < D / 2 + 2.4) out.push({ y: y(0.2), under: false });                         // porch
      if (lx > -2.25 && lx < -0.35 && lz > dz0 - 0.3 && lz < dz0 + dockLen) out.push({ y: y(0.24 - (lz - dz0) * 0.024), under: false });   // dock
      return out;
    },
    door: {
      mesh: door,
      near(wx, wz) { return Math.hypot(wx - doorWorld[0], wz - doorWorld[1]) < 13; },
      get open() { return door$.open; },
      // the door won't shut on you
      canToggle(wx, wz) { if (!door$.open) return true; const [lx, lz] = toLocal(wx, wz); return !inRect(lx, lz, [DX0 - 0.1, DX1 + 0.1, D / 2 - DW - 0.1, D / 2 + 0.25], 0.17); },
      toggle(now) { door$.open = !door$.open; door$.from = door$.a; door$.t0 = now; return door$.open; }
    },
    // feetY: where the walker's feet are (undefined at the home view)
    update(s, time, now, waterY, feetY) {
      const show = s.pCabin, on = show > 0.01;
      if (on) { if (!(this.syncT > now - 1500)) { this.syncT = now; study.sync(); } study.update(time, now); }
      study.lampLight.intensity = on ? 120 * (0.96 + 0.04 * Math.sin(time * 3.1)) : 0;
      // update the indoor shadows only while you're in that room (they're costly)
      if (on && feetY !== undefined) {
        const [clx, clz] = toLocal(camera.position.x, camera.position.z), fm = toM(feetY);
        if (fm > -0.7 && Math.abs(clx) < W / 2 + 1 && Math.abs(clz) < D / 2 + 1 && (this.shF = (this.shF || 0) + 1) % 3 === 0) fireLight.shadow.needsUpdate = true;
        if (fm < -3.0 && inStudy(clx, clz) && !(this.shL > now - 2500)) { this.shL = now; study.shadowLight.shadow.needsUpdate = true; }
      }
      mood.update({ on, day: Math.max(0, Math.min(1, s.light || 0.6)) * (1 - Math.min(1, s.pGlow) * 0.85), beamColor: s.lightC });
      group.visible = on; smoke.visible = on && show > 0.5;
      group.scale.setScalar(S * Math.max(0.001, show));
      // door swings with a little ease, overshoot on opening, a soft bump on closing
      const k = Math.min(1, (now - door$.t0) / 900);
      const e = door$.open ? 1 - Math.pow(1 - k, 3) * Math.cos(k * 3.2) : 1 - Math.pow(1 - k, 4);
      door$.a = door$.from + ((door$.open ? 1 : 0) - door$.from) * e;
      hinge.rotation.y = door$.a * 1.72;
      // fire, lanterns and the warm light inside
      const g = Math.min(1, s.pGlow);
      const flick = 0.86 + 0.08 * Math.sin(time * 9.1 + Math.sin(time * 2.7) * 2) + 0.06 * Math.sin(time * 23.3);
      glowMat.color.setRGB(0.07, 0.07, 0.075).lerp(new THREE.Color(1.3, 0.8, 0.42), g * flick);
      flames.forEach((f, i) => { const h = f.userData.h * (0.75 + 0.35 * Math.sin(time * (7 + i * 1.7) + i * 2) * Math.sin(time * (3.1 + i))); f.scale.set(1, Math.max(0.05, h * g), 1); f.visible = g > 0.05; });
      flameMat.opacity = 0.75 * g;
      fireLight.intensity = g * show * 220 * flick;
      fireLight.position.set(fireBase.x + Math.sin(time * 5.3) * 0.15, fireBase.y + Math.sin(time * 7.1) * 0.1, fireBase.z);
      smoke.material.uniforms.uColor.value.copy(s.fog).multiplyScalar(1.1).addScalar(0.05);
      smoke.material.uniforms.uOpacity.value = Math.min(show, 0.35 + g * 0.5);
      // the boat rocks on the water
      boat.position.y = (waterY + 0.9 + Math.sin(time * 0.9) * 0.15 - CABIN.y) / S;
      boat.rotation.z = Math.sin(time * 0.7) * 0.03;
    }
  };
}
