/* MEOW — the library under the cabin.
   A two-storey home library you reach by the stairs inside the cabin: you come
   down onto a wooden gallery (with turned-baluster railings) and a spiral stair
   takes you down to the main floor, with a tall window, a desk, Persian rugs,
   a leather sofa and an iron chandelier.

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
import { Parts, M, n3, kind, rbox, lathe } from './kit.js';

// the room, in the cabin's metres: main floor, gallery floor, ceiling (= the cabin floor)
export const STUDY = { x0: -6.5, x1: 6.5, z0: -9.5, z1: 2.4, floor: -6.6, mezz: -3.4, ceil: -0.3 };
// the gallery runs along the back, the left side and a wide right side; its inner edges:
export const GAL = { back: -7.6, left: -4.8, right: 1.6, slab: 0.3 };
// the cabin's stairs come down along the right side onto the gallery
export const STAIR = { x0: 1.95, x1: 3.0, top: 2.2, bottom: -1.3 };
export const rampY = (z) => { const t = (STAIR.top - Math.min(STAIR.top, Math.max(STAIR.bottom, z))) / (STAIR.top - STAIR.bottom); return 0.12 + (STUDY.mezz - 0.12) * t; };
// the spiral stair from the gallery down to the main floor (1¼ turns, top facing +x)
export const SPIRAL = { x: 0.55, z: -0.4, r: 1.05, turns: 1.25 };
const LAND = { x0: 0.55, x1: GAL.right, z0: -1.45, z1: -0.4 };   // little landing at the top
// the tall window behind the desk, and the little landscape you see through it (view.js)
export const WINDOW = { x0: -0.95, x1: 0.95, y0: STUDY.floor + 0.55, y1: STUDY.floor + 2.62, depth: 0.42 };
export const VIEW = { x0: -10, x1: 10, z0: STUDY.z0 - 11, z1: STUDY.z0 - WINDOW.depth, y0: STUDY.floor - 0.6, y1: -0.55 };
const RISE = STUDY.mezz - STUDY.floor, TAU = Math.PI * 2;
const spiralAR = (lx, lz) => { const a = Math.atan2(lz - SPIRAL.z, lx - SPIRAL.x); return [((a % TAU) + TAU) % TAU, Math.hypot(lx - SPIRAL.x, lz - SPIRAL.z)]; };
const helix = (a) => { const out = []; for (let k = 0; k < 2; k++) { const u = (a + TAU * k) / (TAU * SPIRAL.turns); if (u <= 1) out.push(STUDY.mezz - u * RISE); } return out; };
const inR = (x, z, [x0, x1, z0, z1], p = 0) => x > x0 + p && x < x1 - p && z > z0 + p && z < z1 - p;
const S_ = STUDY;
// where the gallery floor is
const MEZZ_FLOOR = [[S_.x0, S_.x1, S_.z0, GAL.back], [S_.x0, GAL.left, S_.z0, S_.z1], [GAL.right, S_.x1, S_.z0, S_.z1], [LAND.x0, LAND.x1, LAND.z0, LAND.z1]];
// where you can walk up there (inside the railings, in front of the bookcases)
const CD = 0.45;
const MEZZ_WALK = [[S_.x0 + CD, S_.x1 - CD, S_.z0 + CD, GAL.back], [S_.x0 + CD, GAL.left, S_.z0 + CD, S_.z1], [GAL.right, S_.x1 - CD, S_.z0 + CD, S_.z1], [LAND.x0, GAL.right + 0.4, LAND.z0, 0.1]];
const POSTS = [[GAL.left, GAL.back], [GAL.right, GAL.back], [GAL.left, -2.6], [GAL.right, -4.4]];
const MAIN_OBS = [
  [-0.97, 0.97, -8.47, -7.53], [-0.32, 0.32, -9.25, -8.5],                      // desk, chair
  [-2.95, -0.65, -1.9, -0.9], [-2.45, -1.15, -3.12, -2.38], [-4.5, -3.5, -3.4, -2.4],   // sofa, coffee table, club chair
  [-3.4, -3.0, -1.1, -0.7], [4.15, 4.65, 1.35, 1.85], [-6.5, -5.7, 1.4, 2.4],   // floor lamp, globe, clock
  ...POSTS.map(([x, z]) => [x - 0.14, x + 0.14, z - 0.14, z + 0.14])
];
const MEZZ_OBS = [[3.15, 4.05, -5.05, -4.15], [3.15, 4.05, -3.35, -2.45], [3.35, 4.05, -4.1, -3.4], [5.25, 5.95, -9.1, -8.3]];

const CASE_D = 0.42;
const LEATHER = ['#6e2d2a', '#2f4a3a', '#2a3550', '#5a3d26', '#7a5a2a', '#4a4a4e', '#3d2e44', '#5e5040', '#283c3c', '#704030'];

/* ---------- walking: what's solid and what you stand on ---------- */
// fm = height of your feet (cabin metres); p = how much room you need around you
export function studyBlocked(lx, lz, p, fm) {
  if (!inR(lx, lz, [S_.x0, S_.x1, S_.z0, S_.z1], p)) return true;
  const [a, r] = spiralAR(lx, lz);
  // on the spiral stair: the centre pole and the outer rail hold you in, except at both ends
  if (r < SPIRAL.r + 0.1) {
    const h = helix(a).find((y) => Math.abs(y - fm) < 0.9);
    const onLand = inR(lx, lz, [LAND.x0, LAND.x1, LAND.z0, LAND.z1]) && fm > S_.mezz - 0.25;
    if (h !== undefined && !onLand) {
      if (r < 0.1 + p * 0.6) return true;
      if (r < SPIRAL.r - 0.12) return false;
      const u = (S_.mezz - h) / RISE;
      if (u < 0.1) return !MEZZ_WALK.some((q) => inR(lx, lz, q, p));
      if (u > 0.9) return mainBlocked(lx, lz, p, true, a, r);
      return true;
    }
  }
  if (fm > S_.mezz - 0.35) {
    if (!MEZZ_WALK.some((q) => inR(lx, lz, q, p))) return true;
    // the cabin stairs: you can only walk onto them from their low end
    if (lx > STAIR.x0 - p && lx < STAIR.x1 + p && lz > STAIR.bottom - p && lz < STAIR.top + 0.3) {
      if (rampY(lz) > fm + 0.5) return true;
      if (lz > STAIR.bottom + 0.25 && (lx < STAIR.x0 + p || lx > STAIR.x1 - p)) return true;   // the sides are closed
    }
    return MEZZ_OBS.some((q) => inR(lx, lz, q, -p));
  }
  return mainBlocked(lx, lz, p, false, a, r);
}
function mainBlocked(lx, lz, p, skipSpiral, a, r) {
  if (!inR(lx, lz, [S_.x0 + 0.52, S_.x1 - 0.52, S_.z0 + 0.52, S_.z1 - 0.05], p)) return true;
  if (MAIN_OBS.some((q) => inR(lx, lz, q, -p))) return true;
  if (r < 0.1 + p) return true;   // the spiral's pole
  // under the spiral only the low side is open (where the treads are high above you)
  if (!skipSpiral && r < SPIRAL.r + 0.1 && !(a > Math.PI / 2 - 0.1 && a < Math.PI + 0.3)) return true;
  return false;
}
// every floor height (cabin metres) under this spot
export function studyFloors(lx, lz) {
  const out = [];
  if (!inR(lx, lz, [S_.x0, S_.x1, S_.z0, S_.z1])) return out;
  out.push(S_.floor);
  if (MEZZ_FLOOR.some((q) => inR(lx, lz, q, -0.05))) out.push(S_.mezz);
  const [a, r] = spiralAR(lx, lz);
  if (r < SPIRAL.r + 0.08 && r > 0.04) out.push(...helix(a));
  return out;
}

export function createStudy({ group, mats, camera, U }) {
  const { inn } = mats;   // the cabin's inside material: wood, stone, plaster, cloth …
  const F = S_.floor, MZ = S_.mezz, C = S_.ceil, X0 = S_.x0, X1 = S_.x1, Z0 = S_.z0, Z1 = S_.z1;
  const SLAB = MZ - GAL.slab;   // underside of the gallery
  const P = new Parts(), G = new Parts();
  const n = (x, y, z) => n3(x, y, z);
  const wood = (base, warm = 0) => kind('wood', (v) => { const c = base * (0.86 + n(v.x * 3, v.y * 9, v.z * 3) * 0.28); const w = n(v.x * 0.6, v.y * 2, v.z * 0.6); return [c * (1.04 + w * 0.08 + warm), c * (0.7 + w * 0.04), c * (0.47 - w * 0.05 - warm * 0.5)]; });
  const dark = wood(0.25), mid = wood(0.35), light = wood(0.47), cherry = wood(0.38, 0.12);
  const flat = (r, g, b, k) => (k ? kind(k, () => [r, g, b]) : () => [r, g, b]);
  const stone = kind('stone', (v) => { const c = 0.42 + n(v.x * 4, v.y * 4, v.z * 4) * 0.22; return [c, c * 0.96, c * 0.9]; });
  const plaster = kind('plaster', (v) => { const c = 0.7 + n(v.x * 2, v.y * 2, v.z * 2) * 0.07; return [c, c * 0.95, c * 0.86]; });
  const iron = flat(0.07, 0.07, 0.075, 'metal'), brass = flat(0.68, 0.53, 0.28, 'metal');
  const leather = kind('leather', (v) => { const c = 0.15 + n(v.x * 9, v.y * 9, v.z * 9) * 0.03; return [c * 1.15, c * 0.6, c * 0.4]; });
  const glowW = flat(1.0, 0.86, 0.62);
  const Yax = new THREE.Vector3(0, 1, 0);
  const at = (x, y, z, ry = 0) => new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromAxisAngle(Yax, ry), new THREE.Vector3(1, 1, 1));
  const put = (frame, geo, mx, color, parts = P) => parts.add(geo, { m: frame.clone().multiply(mx), color });
  const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);

  /* ---------- floors ---------- */
  // wide planks in a running pattern, a few shades apart
  const planks = ([a0, a1, b0, b1], y, base) => {
    for (let x = a0, i = 0; x < a1 - 0.01; x += 0.18, i++) {
      const w = Math.min(0.18, a1 - x), off = ((i * 7) % 5) * 0.55;
      for (let z = b0 - off, j = 0; z < b1; z += 2.4, j++) {
        const s0 = Math.max(z, b0), s1 = Math.min(z + 2.4, b1); if (s1 - s0 < 0.05) continue;
        const tone = base * (0.9 + ((i * 7 + j * 3) % 5) * 0.035);
        P.add(box(w - 0.004, 0.04, s1 - s0 - 0.004), { m: M(x + w / 2, y - 0.02, (s0 + s1) / 2), color: kind('wood', (v) => { const c = tone * (0.88 + n(v.x * 3, 0, v.z * 0.8) * 0.24); return [c * 1.08, c * 0.72, c * 0.47]; }) });
      }
    }
  };
  planks([X0, X1, Z0, Z1], F, 0.3);

  /* ---------- the gallery: floor, thick edge with mouldings, plaster underneath ---------- */
  const galRects = [[X0, X1, Z0, GAL.back], [X0, GAL.left, GAL.back, Z1], [GAL.right, X1, GAL.back, Z1], [LAND.x0, LAND.x1, LAND.z0, LAND.z1]];
  galRects.forEach(([x0, x1, z0, z1]) => {
    planks([x0, x1, z0, z1], MZ, 0.36);
    P.add(box(x1 - x0, MZ - 0.04 - SLAB - 0.01, z1 - z0), { m: M((x0 + x1) / 2, (MZ - 0.04 + SLAB + 0.01) / 2, (z0 + z1) / 2), color: dark });
    P.add(new THREE.PlaneGeometry(x1 - x0, z1 - z0), { m: M((x0 + x1) / 2, SLAB + 0.005, (z0 + z1) / 2, Math.PI / 2, 0, 0), color: plaster });
  });
  // mouldings along the open edges (top and bottom of the gallery's face)
  const edges = [[GAL.left, GAL.right, GAL.back, 'x'], [GAL.back, Z1, GAL.left, 'z'], [GAL.back, LAND.z0, GAL.right, 'z'], [LAND.z1, Z1, GAL.right, 'z'], [LAND.x0, LAND.x1, LAND.z0, 'x']];
  edges.forEach(([a, b, f, ax]) => {
    const L = b - a, m0 = (a + b) / 2;
    [[MZ - 0.04, 0.06, 0.05], [MZ - 0.17, 0.035, 0.03], [SLAB + 0.03, 0.06, 0.05]].forEach(([y, h, d]) => {
      P.add(rbox(ax === 'x' ? L + 0.06 : d * 2, h, ax === 'x' ? d * 2 : L + 0.06, 0.012, 1), { m: ax === 'x' ? M(m0, y, f) : M(f, y, m0), color: cherry });
    });
  });
  // joists under the gallery, and soft round ceiling lights between them
  for (let x = X0 + 0.7; x < X1; x += 1.3) P.add(box(0.1, 0.12, GAL.back - Z0), { m: M(x, SLAB - 0.06, (Z0 + GAL.back) / 2), color: mid });
  for (let z = GAL.back + 0.9; z < Z1; z += 1.3) {
    P.add(box(GAL.left - X0, 0.12, 0.1), { m: M((X0 + GAL.left) / 2, SLAB - 0.06, z), color: mid });
    P.add(box(X1 - GAL.right, 0.12, 0.1), { m: M((GAL.right + X1) / 2, SLAB - 0.06, z), color: mid });
  }
  const downlight = (x, z) => {
    G.add(new THREE.CylinderGeometry(0.075, 0.075, 0.01, 16), { m: M(x, SLAB - 0.003, z), color: flat(1.0, 0.92, 0.76) });
    P.add(new THREE.TorusGeometry(0.088, 0.012, 4, 18), { m: M(x, SLAB - 0.004, z, Math.PI / 2, 0, 0), color: flat(0.8, 0.78, 0.72, 'metal') });
  };
  [-5.35, -3.0, -0.9, 0.9, 3.0, 5.35].forEach((x) => downlight(x, -8.55));
  [-6.0, -3.4, -0.8, 1.6].forEach((z) => { downlight(-5.45, z); downlight(2.7, z); downlight(5.0, z); });

  // posts holding the gallery up: square with a chamfer, a base and a capital, little brackets
  POSTS.forEach(([x, z]) => {
    P.add(rbox(0.2, SLAB - F, 0.2, 0.025, 1), { m: M(x, (SLAB + F) / 2, z), color: cherry });
    P.add(rbox(0.28, 0.32, 0.28, 0.02, 1), { m: M(x, F + 0.16, z), color: mid });
    P.add(rbox(0.3, 0.06, 0.3, 0.02, 1), { m: M(x, F + 0.34, z), color: light });
    P.add(rbox(0.3, 0.08, 0.3, 0.02, 1), { m: M(x, SLAB - 0.16, z), color: light });
    P.add(rbox(0.26, 0.1, 0.26, 0.02, 1), { m: M(x, SLAB - 0.06, z), color: mid });
  });

  /* ---------- railings with turned balusters ---------- */
  const BAL = lathe([[0.026, 0], [0.026, 0.05], [0.017, 0.07], [0.015, 0.16], [0.03, 0.3], [0.033, 0.36], [0.019, 0.44], [0.014, 0.58], [0.021, 0.68], [0.026, 0.72], [0.016, 0.76], [0.023, 0.79], [0.023, 0.81]], 6);
  const newel = (x, z, y) => {
    P.add(rbox(0.11, 0.96, 0.11, 0.015, 1), { m: M(x, y + 0.48, z), color: cherry });
    P.add(rbox(0.15, 0.045, 0.15, 0.015, 1), { m: M(x, y + 0.98, z), color: dark });
    P.add(new THREE.SphereGeometry(0.05, 10, 7), { m: M(x, y + 1.04, z), color: cherry });
  };
  const rail = (x0, z0, x1, z1, y) => {
    const L = Math.hypot(x1 - x0, z1 - z0), ry = Math.atan2(x1 - x0, z1 - z0), mx = (x0 + x1) / 2, mz = (z0 + z1) / 2;
    P.add(rbox(0.075, 0.06, L, 0.022, 1), { m: M(mx, y + 0.93, mz, 0, ry, 0), color: cherry });
    P.add(box(0.05, 0.05, L), { m: M(mx, y + 0.065, mz, 0, ry, 0), color: mid });
    const N = Math.max(1, Math.round(L / 0.14));
    for (let i = 1; i < N; i++) { const t = i / N; P.add(BAL, { m: M(x0 + (x1 - x0) * t, y + 0.09, z0 + (z1 - z0) * t), color: light }); }
    newel(x0, z0, y); newel(x1, z1, y);
  };
  const e = 0.05;
  rail(GAL.left - e, GAL.back - e, GAL.right + e, GAL.back - e, MZ);
  rail(GAL.left - e, GAL.back - e, GAL.left - e, Z1 - 0.06, MZ);
  rail(GAL.right + e, GAL.back - e, GAL.right + e, LAND.z0, MZ);
  rail(GAL.right + e, 0.12, GAL.right + e, Z1 - 0.06, MZ);
  rail(LAND.x0 + 0.04, LAND.z0 + 0.04, GAL.right + e, LAND.z0 + 0.04, MZ);
  rail(LAND.x0 + 0.04, LAND.z0 + 0.04, LAND.x0 + 0.04, LAND.z1 - 0.12, MZ);

  /* ---------- the spiral stair ---------- */
  {
    const SP = SPIRAL, NT = 16, dA = (TAU * SP.turns) / (NT + 1);
    for (let i = 0; i < NT; i++) {
      const u = (i + 1) / (NT + 1), y = MZ - u * RISE, a = u * TAU * SP.turns;
      const a0 = a - dA * 0.5 - 0.04, a1 = a + dA * 0.5 + 0.04;
      // CylinderGeometry counts its angle from +z toward +x
      P.add(new THREE.CylinderGeometry(SP.r, SP.r, 0.055, 7, 1, false, Math.PI / 2 - a1, a1 - a0), { m: M(SP.x, y - 0.028, SP.z), color: cherry });
      P.add(new THREE.CylinderGeometry(SP.r - 0.04, SP.r - 0.04, 0.03, 7, 1, false, Math.PI / 2 - a1 + 0.02, a1 - a0 - 0.04), { m: M(SP.x, y - 0.07, SP.z), color: dark });
      [a - dA * 0.25, a + dA * 0.25].forEach((b) => P.add(BAL, { m: M(SP.x + Math.cos(b) * (SP.r - 0.06), y, SP.z + Math.sin(b) * (SP.r - 0.06), 0, 0, 0, 1, 1.07, 1), color: light }));
    }
    class Helix extends THREE.Curve {
      constructor(r, dy) { super(); this.r = r; this.dy = dy; }
      getPoint(t, o = new THREE.Vector3()) { const a = t * TAU * SP.turns; return o.set(SP.x + Math.cos(a) * this.r, MZ - t * RISE + this.dy, SP.z + Math.sin(a) * this.r); }
    }
    P.add(new THREE.TubeGeometry(new Helix(SP.r - 0.06, 0.92), 150, 0.03, 6), { color: cherry });   // hand rail
    P.add(new THREE.TubeGeometry(new Helix(SP.r - 0.02, -0.1), 150, 0.045, 6), { color: dark });    // outer stringer
    P.add(new THREE.CylinderGeometry(0.07, 0.07, MZ + 0.9 - F, 12), { m: M(SP.x, (MZ + 0.9 + F) / 2, SP.z), color: cherry });
    P.add(lathe([[0.15, 0], [0.15, 0.04], [0.1, 0.07], [0.08, 0.14], [0.07, 0.16]], 12), { m: M(SP.x, F, SP.z), color: dark });
    P.add(lathe([[0.07, 0], [0.09, 0.03], [0.05, 0.08], [0.06, 0.14], [0.03, 0.2], [0.0, 0.23]], 12), { m: M(SP.x, MZ + 0.9, SP.z), color: cherry });
  }

  /* ---------- the cabin stairs, down onto the gallery ---------- */
  {
    const STEPS = 12, run = (STAIR.top - STAIR.bottom) / STEPS, sx = (STAIR.x0 + STAIR.x1) / 2, sw = STAIR.x1 - STAIR.x0 - 0.04;
    for (let i = 0; i < STEPS; i++) {
      const z1 = STAIR.top - i * run, z0 = z1 - run, y = rampY(z1 - run * 0.5);
      P.add(rbox(sw, 0.05, run + 0.04, 0.012, 1), { m: M(sx, y - 0.025, (z0 + z1) / 2), color: light });
      P.add(box(sw, Math.abs(rampY(z1) - rampY(z0)), 0.03), { m: M(sx, (rampY(z1) + y) / 2, z1 - 0.01), color: dark });
    }
    const sl = Math.hypot(STAIR.top - STAIR.bottom, 0.12 - MZ), sa = Math.atan2(0.12 - MZ, STAIR.top - STAIR.bottom);
    [STAIR.x0, STAIR.x1].forEach((x) => {
      P.add(box(0.05, 0.28, sl), { m: M(x, (0.12 + MZ) / 2 - 0.1, (STAIR.top + STAIR.bottom) / 2, sa, 0, 0), color: mid });
      P.add(rbox(0.06, 0.06, sl, 0.02, 1), { m: M(x, (0.12 + MZ) / 2 + 0.85, (STAIR.top + STAIR.bottom) / 2, sa, 0, 0), color: cherry });
      for (let i = 1; i < STEPS; i += 1) { const z = STAIR.top - i * run; P.add(BAL, { m: M(x, rampY(z), z, 0, 0, 0, 1, 1.03, 1), color: light }); }
      // closed in below with a panel
      const pts = [[x, MZ, STAIR.bottom + 0.3], [x, MZ, STAIR.top], [x, rampY(STAIR.top) - 0.15, STAIR.top]];
      P.tris([...pts, pts[0], pts[2], pts[1]], mid);
    });
  }

  /* ---------- ceiling (the cabin's floor): plaster between dark beams ---------- */
  const hole = (x, z) => x > STAIR.x0 - 0.05 && x < STAIR.x1 + 0.05 && z > STAIR.bottom - 0.05 && z < STAIR.top + 0.2;
  for (let x = X0; x < X1 - 0.01; x += 0.5) for (let z = Z0; z < Z1 - 0.01; z += 0.5) {
    if (hole(x + 0.25, z + 0.25)) continue;
    P.add(new THREE.PlaneGeometry(0.5, 0.5), { m: M(x + 0.25, C, z + 0.25, Math.PI / 2, 0, 0), color: plaster });
  }
  for (let z = Z0 + 1.2; z < Z1; z += 1.8) {
    const segs = z > STAIR.bottom - 0.1 && z < STAIR.top + 0.2 ? [[X0, STAIR.x0 - 0.05], [STAIR.x1 + 0.05, X1]] : [[X0, X1]];
    segs.forEach(([a, b]) => P.add(rbox(b - a, 0.22, 0.2, 0.02, 1), { m: M((a + b) / 2, C - 0.11, z), color: dark }));
  }
  // a plaster rose where the chandelier hangs
  const CH = { x: -1.8, z: -2.75, y: -2.75 };
  P.add(lathe([[0.42, 0], [0.4, -0.03], [0.3, -0.05], [0.18, -0.07], [0.08, -0.1], [0.0, -0.1]], 24), { m: M(CH.x, C, CH.z), color: plaster });

  /* ---------- walls: stone at the foot, panelled wood above, crown moulding ---------- */
  const panelWood = kind('wood', (v) => { const c = 0.34 + n(v.x * 2, v.y * 6, v.z * 2) * 0.08; return [c * 1.06, c * 0.74, c * 0.5]; });
  [['z', Z0, X0, X1, 1], ['z', Z1, X0, X1, -1], ['x', X0, Z0, Z1, 1], ['x', X1, Z0, Z1, -1]].forEach(([axis, fixed, a, b, face]) => {
    // the back wall has a real opening for the window
    const hole = axis === 'z' && fixed === Z0 ? WINDOW : null;
    const cuts = []; for (let t = a; t < b - 0.01; t += 0.6) cuts.push(t); cuts.push(b);
    if (hole) { cuts.push(hole.x0, hole.x1); cuts.sort((p, q) => p - q); }
    for (let i = 0; i < cuts.length - 1; i++) {
      const t = cuts[i], w = cuts[i + 1] - t; if (w < 0.005) continue;
      const m2 = t + w / 2;
      const wall = (y0, y1, color) => P.add(new THREE.PlaneGeometry(w, y1 - y0), { m: axis === 'z' ? M(m2, (y0 + y1) / 2, fixed, 0, face > 0 ? 0 : Math.PI, 0) : M(fixed, (y0 + y1) / 2, m2, 0, face > 0 ? Math.PI / 2 : -Math.PI / 2, 0), color });
      if (hole && m2 > hole.x0 && m2 < hole.x1) { wall(F, hole.y0, stone); wall(hole.y1, C, panelWood); }
      else { wall(F, F + 0.9, stone); wall(F + 0.9, C, panelWood); }
    }
    [[F + 0.9, 0.06, 0.05], [F + 0.06, 0.12, 0.03], [C - 0.07, 0.14, 0.09], [C - 0.17, 0.05, 0.05]].forEach(([y, h, d]) => {
      const spans = hole && y > hole.y0 && y < hole.y1 ? [[a, hole.x0 - 0.2], [hole.x1 + 0.2, b]] : [[a, b]];
      spans.forEach(([s0, s1]) => {
        const len = s1 - s0, m0 = (s0 + s1) / 2;
        P.add(rbox(axis === 'z' ? len : d, h, axis === 'z' ? d : len, 0.015, 1), { m: axis === 'z' ? M(m0, y, fixed + face * d / 2) : M(fixed + face * d / 2, y, m0), color: mid });
      });
    });
  });
  // raised panels on the front wall of the tall room (behind the sofa)
  for (let x = GAL.left + 0.15; x < GAL.right - 0.6; x += 1.07) {
    P.add(rbox(0.9, 0.62, 0.035, 0.012, 1), { m: M(x + 0.45, F + 0.48, Z1 - 0.02), color: cherry });
    P.add(rbox(0.7, 0.44, 0.02, 0.02, 1), { m: M(x + 0.45, F + 0.48, Z1 - 0.04), color: mid });
    P.add(rbox(0.9, 2.4, 0.03, 0.012, 1), { m: M(x + 0.45, SLAB + 1.6, Z1 - 0.02), color: cherry });
    P.add(rbox(0.72, 2.2, 0.02, 0.02, 1), { m: M(x + 0.45, SLAB + 1.6, Z1 - 0.04), color: mid });
  }

  /* ---------- the tall window behind the desk (with shutters) ---------- */
  {
    const wx0 = WINDOW.x0, wx1 = WINDOW.x1, y0 = WINDOW.y0, y1 = WINDOW.y1, z = Z0 + 0.02;
    // the deep stone reveal of the opening (the wall is thick here)
    const dz = WINDOW.depth;
    P.add(new THREE.PlaneGeometry(dz, y1 - y0), { m: M(wx0, (y0 + y1) / 2, Z0 - dz / 2, 0, Math.PI / 2, 0), color: stone });
    P.add(new THREE.PlaneGeometry(dz, y1 - y0), { m: M(wx1, (y0 + y1) / 2, Z0 - dz / 2, 0, -Math.PI / 2, 0), color: stone });
    P.add(new THREE.PlaneGeometry(wx1 - wx0, dz), { m: M(0, y1, Z0 - dz / 2, Math.PI / 2, 0, 0), color: stone });
    P.add(new THREE.PlaneGeometry(wx1 - wx0, dz), { m: M(0, y0, Z0 - dz / 2, -Math.PI / 2, 0, 0), color: stone });
    // the glass: barely there, a faint cool sheen
    const glass = new THREE.Mesh(new THREE.PlaneGeometry(wx1 - wx0, y1 - y0), new THREE.MeshBasicMaterial({ color: 0xcfe0ea, transparent: true, opacity: 0.07, depthWrite: false }));
    glass.position.set(0, (y0 + y1) / 2, z + 0.03); glass.renderOrder = 2; group.add(glass);
    const bar = (w, h, x, y, d = 0.05) => P.add(rbox(w, h, d, 0.008, 1), { m: M(x, y, z + 0.05), color: light });
    for (let i = 1; i < 3; i++) bar(0.035, y1 - y0, wx0 + i * (wx1 - wx0) / 3, (y0 + y1) / 2);
    for (let j = 1; j < 5; j++) bar(wx1 - wx0, 0.035, 0, y0 + j * (y1 - y0) / 5);
    bar(0.06, y1 - y0, 0, (y0 + y1) / 2, 0.07);
    // frame, head with a small cornice, deep sill
    [-1, 1].forEach((s) => P.add(rbox(0.14, y1 - y0 + 0.2, 0.1, 0.015, 1), { m: M(s * (wx1 + 0.06), (y0 + y1) / 2, z + 0.05), color: cherry }));
    P.add(rbox(wx1 - wx0 + 0.4, 0.16, 0.12, 0.015, 1), { m: M(0, y1 + 0.08, z + 0.06), color: cherry });
    P.add(rbox(wx1 - wx0 + 0.5, 0.05, 0.18, 0.015, 1), { m: M(0, y1 + 0.18, z + 0.09), color: mid });
    P.add(rbox(wx1 - wx0 + 0.46, 0.05, 0.28, 0.02, 1), { m: M(0, y0 - 0.02, z + 0.14), color: light });
    P.add(rbox(wx1 - wx0 + 0.3, 0.12, 0.05, 0.015, 1), { m: M(0, y0 - 0.11, z + 0.04), color: cherry });
    // louvred shutters folded back against the wall
    [-1, 1].forEach((s) => {
      const sx = s * (wx1 + 0.33);
      [[0.36, 0.04, 0, y1 - 0.02], [0.36, 0.04, 0, y0 + 0.02], [0.04, y1 - y0, -0.16, (y0 + y1) / 2], [0.04, y1 - y0, 0.16, (y0 + y1) / 2], [0.36, 0.04, 0, (y0 + y1) / 2]].forEach(([w, h, dx, y]) => P.add(rbox(w, h, 0.035, 0.008, 1), { m: M(sx + dx, y, z + 0.03), color: light }));
      for (let y = y0 + 0.08; y < y1 - 0.06; y += 0.075) if (Math.abs(y - (y0 + y1) / 2) > 0.05) P.add(box(0.3, 0.05, 0.008), { m: M(sx, y, z + 0.03, -0.6, 0, 0), color: mid });
      [y0 + 0.3, y1 - 0.3].forEach((y) => P.add(box(0.03, 0.06, 0.02), { m: M(sx - s * 0.18, y, z + 0.05), color: iron }));
    });
  }

  /* ---------- bookcases ---------- */
  // lower cases (main floor) have cupboards below; upper cases (gallery) go up to the ceiling
  const cases = [];
  const lower = (x, z, ry, w) => cases.push({ x, z, ry, w, base: F, h: 2.8, rows: 4, rowY0: 0.86, rowH: 0.48, cab: 0.78, pref: [1, 2, 0, 3] });
  const upper = (x, z, ry, w) => cases.push({ x, z, ry, w, base: MZ, h: 2.88, rows: 5, rowY0: 0.16, rowH: 0.5, cab: 0, pref: [2, 3, 1, 0, 4] });
  [-2.25, -3.95, 2.25, 3.95, -5.65, 5.65].forEach((x) => lower(x, Z0 + CASE_D / 2, 0, 1.7));
  [-8.0, -6.0, -4.0, -2.0, 0.0].forEach((z) => lower(X0 + CASE_D / 2, z, Math.PI / 2, 2.0));
  [-8.0, -6.0, -4.0, -2.0, 0.0].forEach((z) => lower(X1 - CASE_D / 2, z, -Math.PI / 2, 2.0));
  [-1.0, 1.0, -3.0, 3.0, -5.0, 5.0].forEach((x) => upper(x, Z0 + CASE_D / 2, 0, 2.0));
  [-8.0, -6.0, -4.0, -2.0, 0.0].forEach((z) => upper(X0 + CASE_D / 2, z, Math.PI / 2, 2.0));
  [-8.0, -6.0, -4.0, -2.0, 0.0].forEach((z) => upper(X1 - CASE_D / 2, z, -Math.PI / 2, 2.0));
  const order = cases.map((_, i) => i);   // already in the order they fill: near the middle first, then out
  const caseM = (c) => at(c.x, c.base, c.z, c.ry);
  const local = (c, x, y, z) => new THREE.Vector3(x, y, z).applyMatrix4(caseM(c));
  cases.forEach((c) => {
    const m = caseM(c), W2 = c.w / 2, top = c.rowY0 + c.rows * c.rowH;
    const a = (geo, mx, color) => put(m, geo, mx, color);
    a(box(c.w, c.h - c.cab, 0.03), M(0, (c.h + c.cab) / 2, -CASE_D / 2 + 0.015), dark);
    [-1, 1].forEach((s) => a(rbox(0.06, c.h, CASE_D + 0.02, 0.012, 1), M(s * (W2 - 0.03), c.h / 2, 0.01), mid));
    for (let r = 0; r <= c.rows; r++) a(box(c.w - 0.1, 0.03, CASE_D - 0.03), M(0, c.rowY0 + r * c.rowH - 0.015, 0), mid);
    for (let r = 0; r < c.rows; r++) a(rbox(c.w - 0.1, 0.04, 0.022, 0.008, 1), M(0, c.rowY0 + r * c.rowH + 0.005, CASE_D / 2 - 0.006), light);
    a(box(c.w - 0.1, c.h - top - 0.06, 0.03), M(0, (top + c.h - 0.06) / 2, CASE_D / 2 - 0.03), cherry);    // frieze
    a(rbox(c.w + 0.04, 0.06, CASE_D + 0.05, 0.015, 1), M(0, c.h - 0.03, 0.02), dark);                      // crown
    a(rbox(c.w + 0.1, 0.04, CASE_D + 0.1, 0.015, 1), M(0, c.h + 0.01, 0.04), mid);
    if (c.cab) {
      a(rbox(c.w, c.cab - 0.12, CASE_D + 0.1, 0.01, 1), M(0, 0.1 + (c.cab - 0.12) / 2, 0.05), mid);
      a(box(c.w - 0.04, 0.1, CASE_D + 0.06), M(0, 0.05, 0.03), dark);
      a(rbox(c.w + 0.04, 0.045, CASE_D + 0.16, 0.014, 1), M(0, c.cab - 0.02, 0.06), light);
      const dw = (c.w - 0.12) / 2;
      [-1, 1].forEach((s) => {
        const dx = s * (dw / 2 + 0.015);
        a(rbox(dw - 0.02, c.cab - 0.26, 0.03, 0.006, 1), M(dx, 0.11 + (c.cab - 0.2) / 2, CASE_D / 2 + 0.11), cherry);
        a(rbox(dw - 0.16, c.cab - 0.42, 0.02, 0.02, 1), M(dx, 0.11 + (c.cab - 0.2) / 2, CASE_D / 2 + 0.13), light);
        a(new THREE.SphereGeometry(0.018, 8, 6), M(s * 0.05, 0.11 + (c.cab - 0.2) / 2 + 0.06, CASE_D / 2 + 0.15), brass);
      });
    } else a(rbox(c.w, c.rowY0 - 0.02, CASE_D + 0.04, 0.008, 1), M(0, (c.rowY0 - 0.02) / 2, 0.02), dark);
  });
  // a rolling library ladder on a brass rail along the upper back cases
  P.add(new THREE.CylinderGeometry(0.015, 0.015, 12.2, 6), { m: M(0, MZ + 2.55, Z0 + CASE_D + 0.05, 0, 0, Math.PI / 2), color: brass });
  {
    const lx = 5.6, lean = 0.2, zb = Z0 + CASE_D + 0.55;
    [-0.22, 0.22].forEach((dx) => P.add(rbox(0.05, 2.7, 0.06, 0.012, 1), { m: M(lx + dx, MZ + 1.33, zb - 0.26, -lean, 0, 0), color: light }));
    for (let i = 0; i < 8; i++) { const y = 0.25 + i * 0.31; P.add(new THREE.CylinderGeometry(0.018, 0.018, 0.44, 6), { m: M(lx, MZ + y, zb - y * Math.tan(lean) * 0.98, 0, 0, Math.PI / 2), color: light }); }
    [-0.22, 0.22].forEach((dx) => P.add(new THREE.TorusGeometry(0.03, 0.008, 4, 10), { m: M(lx + dx, MZ + 2.58, Z0 + CASE_D + 0.08, 0, Math.PI / 2, 0), color: brass }));
  }

  /* ---------- the desk in front of the window ---------- */
  {
    const Dm = at(0, F, -8.0);
    put(Dm, rbox(1.9, 0.06, 0.9, 0.022, 2), M(0, 0.77, 0), cherry);
    put(Dm, box(1.2, 0.004, 0.55), M(0, 0.802, 0.02), kind('leather', () => [0.15, 0.24, 0.17]));
    [-1, 1].forEach((s) => {
      put(Dm, rbox(0.5, 0.66, 0.82, 0.012, 1), M(s * 0.65, 0.41, 0), mid);
      put(Dm, rbox(0.54, 0.08, 0.86, 0.015, 1), M(s * 0.65, 0.04, 0), dark);
      for (let d = 0; d < 3; d++) {
        const y = 0.2 + d * 0.19;
        put(Dm, rbox(0.42, 0.16, 0.03, 0.008, 1), M(s * 0.65, y, -0.42), cherry);
        put(Dm, rbox(0.12, 0.018, 0.02, 0.008, 1), M(s * 0.65, y + 0.02, -0.445), brass);
      }
      put(Dm, rbox(0.4, 0.5, 0.03, 0.01, 1), M(s * 0.65, 0.42, 0.42), cherry);
      put(Dm, rbox(0.3, 0.38, 0.02, 0.015, 1), M(s * 0.65, 0.42, 0.44), light);
    });
    put(Dm, rbox(0.76, 0.11, 0.03, 0.008, 1), M(0, 0.68, -0.42), cherry);
    put(Dm, rbox(0.14, 0.018, 0.02, 0.008, 1), M(0, 0.69, -0.445), brass);
    put(Dm, box(0.8, 0.55, 0.02), M(0, 0.45, 0.38), mid);
    // green banker's lamp
    put(Dm, new THREE.CylinderGeometry(0.1, 0.12, 0.03, 16), M(0.6, 0.815, 0.1), brass);
    put(Dm, new THREE.CylinderGeometry(0.012, 0.012, 0.3, 6), M(0.6, 0.97, 0.1), brass);
    put(Dm, new THREE.SphereGeometry(1, 16, 8, 0, TAU, 0, Math.PI / 2), M(0.6, 1.1, 0.02, 0, 0, 0, 0.22, 0.09, 0.1), flat(0.12, 0.34, 0.2, 'metal'));
    put(Dm, new THREE.CylinderGeometry(0.03, 0.03, 0.12, 8), M(0.6, 1.08, 0.02, 0, 0, Math.PI / 2), glowW, G);
    // a stack of books, an ink pot and a pen, loose paper
    [[0.16, 0.05, [0.4, 0.14, 0.12]], [0.2, 0.045, [0.17, 0.25, 0.2]], [0.18, 0.04, [0.5, 0.4, 0.25]]].forEach(([w, h, c], i) => put(Dm, rbox(w * 1.4, h, w, 0.008, 1), M(-0.62, 0.8 + 0.025 + i * 0.045, 0.12, 0, i * 0.2 - 0.2, 0), flat(...c, 'leather')));
    put(Dm, lathe([[0.03, 0], [0.035, 0.02], [0.03, 0.05], [0.012, 0.06], [0.012, 0.07]], 10), M(-0.25, 0.8, 0.22), flat(0.1, 0.12, 0.16, 'metal'));
    put(Dm, new THREE.CylinderGeometry(0.004, 0.004, 0.16, 5), M(-0.1, 0.81, 0.05, 0, 0.5, Math.PI / 2), flat(0.1, 0.1, 0.1));
    put(Dm, box(0.3, 0.003, 0.4), M(0.05, 0.806, -0.02, 0, -0.12, 0), flat(0.9, 0.87, 0.78, 'paper'));
    put(Dm, box(0.3, 0.003, 0.4), M(0.12, 0.809, 0.0, 0, 0.1, 0), flat(0.92, 0.9, 0.82, 'paper'));
  }
  // the chair behind the desk: patterned fabric on a turned-leg frame
  {
    const Cm = at(0, F, -8.88);
    const damask = kind('fabric', (v) => { const k = Math.sin(v.x * 40) * Math.sin(v.y * 40 + v.z * 30); return k > 0.35 ? [0.74, 0.68, 0.5] : [0.42, 0.48, 0.38]; });
    const LEG = lathe([[0.018, 0], [0.024, 0.04], [0.018, 0.12], [0.028, 0.24], [0.022, 0.36], [0.026, 0.42], [0.026, 0.44]], 8);
    [[-0.21, 0.19], [0.21, 0.19]].forEach(([x, z]) => put(Cm, LEG, M(x, 0, z), dark));
    [[-0.21, -0.19], [0.21, -0.19]].forEach(([x, z]) => put(Cm, rbox(0.045, 0.98, 0.045, 0.01, 1), M(x, 0.49, z - 0.02, -0.08, 0, 0), dark));
    put(Cm, rbox(0.5, 0.06, 0.46, 0.015, 1), M(0, 0.44, 0), dark);
    put(Cm, rbox(0.48, 0.1, 0.44, 0.04, 2), M(0, 0.51, 0.01), damask);
    put(Cm, rbox(0.4, 0.46, 0.06, 0.03, 2), M(0, 0.82, -0.2, -0.08, 0, 0), damask);
    put(Cm, rbox(0.46, 0.05, 0.05, 0.015, 1), M(0, 1.06, -0.23, -0.08, 0, 0), dark);
  }

  /* ---------- sitting area under the chandelier ---------- */
  // chesterfield sofa: deep buttoned back, rolled arms, cushions and two pillows
  {
    const Sm = at(-1.8, F, -1.4, Math.PI);
    put(Sm, rbox(2.2, 0.32, 0.86, 0.05, 2), M(0, 0.28, 0), leather);
    [-1, 0, 1].forEach((i) => put(Sm, rbox(0.62, 0.14, 0.64, 0.05, 2), M(i * 0.63, 0.5, 0.08), leather));
    put(Sm, rbox(2.2, 0.5, 0.22, 0.07, 2), M(0, 0.67, -0.33), leather);
    for (let r = 0; r < 3; r++) for (let x = -0.9 + (r % 2) * 0.09; x <= 0.9; x += 0.18) put(Sm, new THREE.SphereGeometry(0.012, 6, 4), M(x, 0.6 + r * 0.09, -0.218), flat(0.12, 0.06, 0.04, 'leather'));
    [-1, 1].forEach((s) => {
      put(Sm, rbox(0.2, 0.36, 0.86, 0.04, 2), M(s * 1.0, 0.5, 0), leather);
      put(Sm, new THREE.CylinderGeometry(0.13, 0.13, 0.88, 16), M(s * 1.03, 0.68, 0, Math.PI / 2, 0, 0), leather);
      [-1, 1].forEach((t) => put(Sm, lathe([[0.04, 0], [0.05, 0.04], [0.035, 0.09], [0.045, 0.12]], 10), M(s * 0.98, 0, t * 0.36), dark));
      put(Sm, rbox(0.42, 0.4, 0.12, 0.07, 2), M(s * 0.66, 0.74, -0.15, -0.3, s * 0.25, s * 0.1), s > 0 ? kind('fabric', (v) => (Math.sin(v.x * 50) > 0.6 ? [0.72, 0.58, 0.3] : [0.56, 0.42, 0.22])) : flat(0.36, 0.42, 0.32, 'fabric'));
    });
  }
  // coffee table with turned legs, a shelf below, an open book on top
  {
    const Tm = at(-1.8, F, -2.75);
    const LEG = lathe([[0.025, 0], [0.032, 0.03], [0.022, 0.1], [0.034, 0.2], [0.026, 0.3], [0.03, 0.38], [0.03, 0.4]], 8);
    put(Tm, rbox(1.2, 0.05, 0.66, 0.02, 2), M(0, 0.43, 0), cherry);
    put(Tm, rbox(1.08, 0.08, 0.54, 0.01, 1), M(0, 0.37, 0), mid);
    put(Tm, rbox(1.0, 0.025, 0.48, 0.01, 1), M(0, 0.12, 0), mid);
    [[-0.52, -0.25], [0.52, -0.25], [-0.52, 0.25], [0.52, 0.25]].forEach(([x, z]) => put(Tm, LEG, M(x, 0, z), dark));
    [-1, 1].forEach((s) => {
      put(Tm, rbox(0.2, 0.012, 0.28, 0.004, 1), M(s * 0.1 + 0.1, 0.462, 0.05, 0, 0.15, s * 0.08), flat(0.9, 0.87, 0.78, 'paper'));
      put(Tm, rbox(0.21, 0.008, 0.29, 0.004, 1), M(s * 0.1 + 0.1, 0.455, 0.05, 0, 0.15, s * 0.08), flat(0.42, 0.14, 0.12, 'leather'));
    });
    put(Tm, lathe([[0.0, 0], [0.09, 0.0], [0.11, 0.025], [0.1, 0.03]], 16), M(-0.32, 0.455, -0.1), brass);
    put(Tm, rbox(0.24, 0.05, 0.17, 0.008, 1), M(-0.2, 0.18, 0.05, 0, 0.3, 0), flat(0.3, 0.33, 0.4, 'leather'));
  }
  // leather club chair beside it
  {
    const Am = at(-4.0, F, -2.9, Math.PI / 2);
    put(Am, rbox(0.86, 0.36, 0.8, 0.05, 2), M(0, 0.3, 0), leather);
    put(Am, rbox(0.56, 0.14, 0.6, 0.05, 2), M(0, 0.53, 0.08), leather);
    put(Am, rbox(0.86, 0.48, 0.2, 0.07, 2), M(0, 0.7, -0.3, -0.1, 0, 0), leather);
    [-1, 1].forEach((s) => {
      put(Am, rbox(0.17, 0.42, 0.8, 0.06, 2), M(s * 0.36, 0.56, 0), leather);
      [-1, 1].forEach((t) => put(Am, lathe([[0.035, 0], [0.045, 0.04], [0.03, 0.08], [0.04, 0.12]], 10), M(s * 0.36, 0, t * 0.32), dark));
    });
  }
  // standing lamp with a pleated shade
  {
    const x = -3.2, z = -0.9;
    P.add(lathe([[0.16, 0], [0.16, 0.02], [0.1, 0.05], [0.04, 0.09], [0.02, 0.12]], 16), { m: M(x, F, z), color: brass });
    P.add(new THREE.CylinderGeometry(0.014, 0.014, 1.45, 6), { m: M(x, F + 0.82, z), color: brass });
    P.add(new THREE.CylinderGeometry(0.16, 0.25, 0.3, 20, 1, true), { m: M(x, F + 1.6, z), color: kind('fabric', (v) => { const k = 0.82 + Math.sin(Math.atan2(v.z - z, v.x - x) * 20) * 0.04; return [k, k * 0.9, k * 0.72]; }) });
    G.add(new THREE.SphereGeometry(0.06, 10, 8), { m: M(x, F + 1.52, z), color: glowW });
  }
  // a globe on a turned stand
  {
    const x = 4.4, z = 1.6, y = F + 1.0;
    P.add(new THREE.SphereGeometry(0.28, 28, 18), { m: M(x, y, z, 0.4, 0, 0.2), color: (v) => { const land = n(v.x * 9 + 3, v.y * 9, v.z * 9) > 0.55; return land ? [0.66, 0.56, 0.36] : [0.24, 0.36, 0.42]; } });
    P.add(new THREE.TorusGeometry(0.31, 0.012, 6, 36), { m: M(x, y, z, 0, Math.PI / 2, 0.2), color: brass });
    P.add(new THREE.TorusGeometry(0.33, 0.016, 6, 36), { m: M(x, y - 0.02, z, Math.PI / 2, 0, 0), color: cherry });
    P.add(lathe([[0.2, 0], [0.2, 0.03], [0.07, 0.08], [0.05, 0.3], [0.08, 0.42], [0.04, 0.55], [0.06, 0.7], [0.03, 0.72]], 12), { m: M(x, F, z), color: cherry });
  }
  // a tall case clock in the front corner
  {
    const Km = at(-6.1, F, 1.9, Math.PI / 2);
    put(Km, rbox(0.56, 0.32, 0.38, 0.02, 1), M(0, 0.16, 0), dark);
    put(Km, rbox(0.46, 1.4, 0.3, 0.02, 1), M(0, 1.0, 0), cherry);
    put(Km, rbox(0.3, 1.0, 0.02, 0.02, 1), M(0, 1.0, 0.155), mid);
    put(Km, rbox(0.56, 0.56, 0.36, 0.02, 1), M(0, 1.98, 0), cherry);
    put(Km, new THREE.CylinderGeometry(0.28, 0.28, 0.36, 18, 1, false, -Math.PI / 2, Math.PI), M(0, 2.26, 0, Math.PI / 2, 0, 0, 1, 1, 0.5), dark);
    put(Km, new THREE.CylinderGeometry(0.19, 0.19, 0.02, 28), M(0, 1.98, 0.18, Math.PI / 2, 0, 0), flat(0.9, 0.86, 0.76, 'paper'));
    put(Km, new THREE.TorusGeometry(0.2, 0.012, 6, 28), M(0, 1.98, 0.19), brass);
    put(Km, box(0.012, 0.13, 0.006), M(0, 2.02, 0.195, 0, 0, 0.6), flat(0.08, 0.08, 0.08));
    put(Km, box(0.012, 0.16, 0.006), M(0, 2.04, 0.197, 0, 0, -0.3), flat(0.08, 0.08, 0.08));
    put(Km, new THREE.CylinderGeometry(0.06, 0.06, 0.012, 16), M(0, 0.7, 0.13, Math.PI / 2, 0, 0), brass);
  }

  /* ---------- the iron chandelier ---------- */
  {
    for (let y = C - 0.12, i = 0; y > CH.y + 0.8; y -= 0.085, i++) P.add(new THREE.TorusGeometry(0.03, 0.007, 4, 8), { m: M(CH.x, y, CH.z, 0, (i % 2) * Math.PI / 2, 0, 1, 1.4, 1), color: iron });
    P.add(lathe([[0, -0.28], [0.035, -0.22], [0.05, -0.12], [0.03, -0.02], [0.07, 0.04], [0.05, 0.12], [0.022, 0.3], [0.04, 0.45], [0.02, 0.6], [0.016, 0.8], [0.0, 0.82]], 12), { m: M(CH.x, CH.y, CH.z), color: iron });
    const ring = (R, y, N, cup) => {
      P.add(new THREE.TorusGeometry(R, 0.02, 6, 48), { m: M(CH.x, y, CH.z, Math.PI / 2, 0, 0), color: iron });
      for (let i = 0; i < N; i++) {
        const a = (i / N) * TAU + (cup ? 0 : 0.3), cx = CH.x + Math.cos(a) * R, cz = CH.z + Math.sin(a) * R;
        // a scrolled arm from the stem out to the ring
        const curve = new THREE.CubicBezierCurve3(new THREE.Vector3(CH.x, y + 0.1, CH.z), new THREE.Vector3(CH.x + Math.cos(a) * R * 0.3, y - 0.18, CH.z + Math.sin(a) * R * 0.3), new THREE.Vector3(CH.x + Math.cos(a) * R * 0.8, y - 0.12, CH.z + Math.sin(a) * R * 0.8), new THREE.Vector3(cx, y, cz));
        P.add(new THREE.TubeGeometry(curve, 12, 0.012, 5), { color: iron });
        P.add(lathe([[0.0, 0], [0.03, 0.0], [0.045, 0.035], [0.04, 0.05]], 10), { m: M(cx, y + 0.01, cz), color: iron });
        P.add(new THREE.CylinderGeometry(0.017, 0.017, 0.12, 8), { m: M(cx, y + 0.11, cz), color: flat(0.9, 0.86, 0.76, 'paper') });
        G.add(new THREE.SphereGeometry(0.02, 8, 6), { m: M(cx, y + 0.2, cz, 0, 0, 0, 1, 1.9, 1), color: glowW });
      }
    };
    ring(0.82, CH.y, 8, true);
    ring(0.42, CH.y + 0.4, 6, false);
    // straps holding the rings
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * TAU + Math.PI / 4;
      const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(CH.x + Math.cos(a) * 0.82, CH.y, CH.z + Math.sin(a) * 0.82), new THREE.Vector3(CH.x + Math.cos(a) * 0.7, CH.y + 0.5, CH.z + Math.sin(a) * 0.7), new THREE.Vector3(CH.x, CH.y + 0.78, CH.z));
      P.add(new THREE.TubeGeometry(curve, 12, 0.009, 4), { color: iron });
    }
  }

  /* ---------- up on the gallery: two white armchairs and a little round table ---------- */
  {
    const white = kind('fabric', (v) => { const c = 0.84 + n(v.x * 7, v.y * 7, v.z * 7) * 0.05; return [c, c * 0.97, c * 0.9]; });
    const chair = (z) => {
      const Wm = at(3.6, MZ, z, -Math.PI / 2);
      put(Wm, rbox(0.8, 0.3, 0.78, 0.06, 2), M(0, 0.3, 0), white);
      put(Wm, rbox(0.56, 0.13, 0.6, 0.05, 2), M(0, 0.5, 0.07), white);
      put(Wm, rbox(0.8, 0.62, 0.2, 0.08, 2), M(0, 0.76, -0.3, -0.12, 0, 0), white);
      [-1, 1].forEach((s) => {
        put(Wm, rbox(0.14, 0.38, 0.76, 0.06, 2), M(s * 0.34, 0.54, 0), white);
        [-1, 1].forEach((t) => put(Wm, lathe([[0.02, 0], [0.03, 0.05], [0.022, 0.1], [0.03, 0.15]], 8), M(s * 0.33, 0, t * 0.32), dark));
      });
      put(Wm, rbox(0.38, 0.36, 0.1, 0.06, 2), M(0, 0.72, -0.15, -0.25, 0, 0), flat(0.34, 0.4, 0.5, 'fabric'));
    };
    chair(-4.6); chair(-2.9);
    P.add(new THREE.CylinderGeometry(0.3, 0.3, 0.035, 24), { m: M(3.7, MZ + 0.58, -3.75), color: cherry });
    P.add(lathe([[0.17, 0], [0.17, 0.02], [0.06, 0.06], [0.035, 0.2], [0.05, 0.35], [0.03, 0.5], [0.06, 0.56]], 12), { m: M(3.7, MZ, -3.75), color: dark });
    P.add(lathe([[0.0, 0], [0.05, 0], [0.07, 0.06], [0.05, 0.16], [0.02, 0.2], [0.025, 0.24]], 12), { m: M(3.75, MZ + 0.6, -3.65), color: flat(0.6, 0.66, 0.66) });
    [[0.0, [0.5, 0.2, 0.16]], [0.04, [0.2, 0.3, 0.34]]].forEach(([y, c], i) => P.add(rbox(0.22, 0.04, 0.16, 0.006, 1), { m: M(3.6, MZ + 0.62 + y, -3.88, 0, i * 0.4, 0), color: flat(...c, 'leather') }));
  }

  /* ---------- paintings, rugs: canvas pictures (crisp patterns) ---------- */
  const canvasMesh = (W, H, draw, geo, m, alpha = false) => {
    const cv = document.createElement('canvas'); cv.width = W; cv.height = H;
    draw(cv.getContext('2d'), W, H);
    const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
    const mat = new THREE.MeshLambertMaterial({ map: t, color: 0xb8b0a8, alphaTest: alpha ? 0.5 : 0, side: THREE.DoubleSide });
    const mesh = new THREE.Mesh(geo, mat); mesh.applyMatrix4(m); mesh.receiveShadow = true;
    group.add(mesh); return mesh;
  };
  let seed = 7; const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  // a Persian rug: border bands, a field with small motifs, a big medallion, fringe at both ends
  const drawRug = (pal) => (g, W, H) => {
    const fr = Math.round(W * 0.035);   // fringe
    g.clearRect(0, 0, W, H);
    for (let y = 2; y < H - 2; y += 3) { g.fillStyle = y % 2 ? '#e9dfc8' : '#d7cbb0'; g.fillRect(0, y, fr + 2, 1.6); g.fillRect(W - fr - 2, y, fr + 2, 1.6); }
    const x0 = fr, w = W - 2 * fr;
    const band = (inset, col) => { g.fillStyle = col; g.fillRect(x0 + inset, inset, w - inset * 2, H - inset * 2); };
    band(0, pal.border); band(H * 0.035, pal.cream); band(H * 0.045, pal.border2); band(H * 0.115, pal.cream); band(H * 0.125, pal.field);
    // little diamonds running round the border
    g.fillStyle = pal.accent;
    const bi = H * 0.08, step = H * 0.06;
    const dia = (cx, cy, r) => { g.beginPath(); g.moveTo(cx, cy - r); g.lineTo(cx + r, cy); g.lineTo(cx, cy + r); g.lineTo(cx - r, cy); g.closePath(); g.fill(); };
    for (let x = x0 + bi; x < x0 + w - bi; x += step) { dia(x, bi, step * 0.3); dia(x, H - bi, step * 0.3); }
    for (let y = bi + step; y < H - bi; y += step) { dia(x0 + bi, y, step * 0.3); dia(x0 + w - bi, y, step * 0.3); }
    // field: a quiet lattice of tiny flowers
    const fx0 = x0 + H * 0.125, fy0 = H * 0.125, fw = w - H * 0.25, fh = H * 0.75;
    g.save(); g.beginPath(); g.rect(fx0, fy0, fw, fh); g.clip();
    for (let y = fy0 + 10, r = 0; y < fy0 + fh; y += H * 0.055, r++) for (let x = fx0 + 8 + (r % 2) * H * 0.04; x < fx0 + fw; x += H * 0.08) {
      g.fillStyle = pal.motif; dia(x, y, H * 0.012); g.fillStyle = pal.accent; g.fillRect(x - 1, y - 1, 2, 2);
    }
    // corners: quarter medallions
    const cx = x0 + w / 2, cy = H / 2;
    const medal = (mx, my, R, sx, cols) => {
      cols.forEach((col, k) => {
        const rr = R * (1 - k * 0.2); g.fillStyle = col; g.beginPath();
        for (let i = 0; i <= 64; i++) { const a = (i / 64) * TAU, q = rr * (1 + 0.14 * Math.cos(a * 8)) ; const px = mx + Math.cos(a) * q * sx, py = my + Math.sin(a) * q; i ? g.lineTo(px, py) : g.moveTo(px, py); }
        g.fill();
      });
    };
    [[fx0, fy0], [fx0 + fw, fy0], [fx0, fy0 + fh], [fx0 + fw, fy0 + fh]].forEach(([mx, my]) => medal(mx, my, H * 0.2, 1.3, [pal.medal, pal.cream, pal.medal]));
    g.restore();
    // the medallion with its pendants
    [-1, 1].forEach((s) => { g.fillStyle = pal.medal; dia(cx + s * H * 0.42, cy, H * 0.08); g.fillStyle = pal.cream; dia(cx + s * H * 0.42, cy, H * 0.04); });
    medal(cx, cy, H * 0.3, 1.45, [pal.cream, pal.medal, pal.field, pal.accent, pal.medal]);
    // wool: speckles and a touch of wear
    for (let i = 0; i < W * H * 0.05; i++) { const x = x0 + rnd() * w, y = rnd() * H; g.fillStyle = rnd() < 0.5 ? 'rgba(0,0,0,0.12)' : 'rgba(255,240,210,0.08)'; g.fillRect(x, y, 1.5, 1.5); }
    const wear = g.createRadialGradient(cx, cy, 0, cx, cy, w * 0.4); wear.addColorStop(0, 'rgba(255,240,220,0.1)'); wear.addColorStop(1, 'rgba(255,240,220,0)');
    g.fillStyle = wear; g.fillRect(x0, 0, w, H);
  };
  const rug = (x, z, w, d, ry, pal, y = F) => {
    const geo = new THREE.PlaneGeometry(w * 1.07, d);
    canvasMesh(1024, Math.round(1024 * d / (w * 1.07)), drawRug(pal), geo, new THREE.Matrix4().compose(new THREE.Vector3(x, y + 0.006, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, ry, 0, 'YXZ')), new THREE.Vector3(1, 1, 1)), true);
  };
  rug(0, -6.5, 3.2, 2.0, 0, { border: '#2a2440', border2: '#6a1d1c', cream: '#d8c7a0', field: '#7a201c', accent: '#c58f42', motif: '#4a1612', medal: '#22305a' });
  rug(-1.9, -2.6, 3.9, 2.8, 0, { border: '#6d1f1c', border2: '#1f2d4a', cream: '#d6c49a', field: '#1d2a46', accent: '#b07a3a', motif: '#2c3d5e', medal: '#7b2420' });
  rug(3.9, -3.75, 2.2, 3.0, Math.PI / 2, { border: '#5c3a22', border2: '#8a2e22', cream: '#e0d2ae', field: '#9a3a26', accent: '#d6a24c', motif: '#6a2416', medal: '#2b3a52' }, MZ);
  // a landscape painting in a gilt frame over the sofa, with two wall lights
  {
    const pw = 2.0, ph = 1.3, px = -1.8, py = F + 2.05, pz = Z1 - 0.06;
    canvasMesh(512, 333, (g, W, H) => {
      const sky = g.createLinearGradient(0, 0, 0, H * 0.6); sky.addColorStop(0, '#6f87a0'); sky.addColorStop(1, '#e3c9a0');
      g.fillStyle = sky; g.fillRect(0, 0, W, H);
      const hill = (y, amp, col, f) => { g.fillStyle = col; g.beginPath(); g.moveTo(0, H); for (let x = 0; x <= W; x += 4) g.lineTo(x, y + Math.sin(x * f + y) * amp + Math.sin(x * f * 2.7) * amp * 0.4); g.lineTo(W, H); g.fill(); };
      hill(H * 0.5, 14, '#56677a', 0.012); hill(H * 0.6, 10, '#47584a', 0.02);
      g.fillStyle = '#9fb2b8'; g.fillRect(0, H * 0.7, W, H * 0.08);
      hill(H * 0.8, 6, '#2f3a2a', 0.03);
      for (let i = 0; i < 26; i++) { const x = rnd() * W, y = H * (0.62 + rnd() * 0.2), h = 20 + rnd() * 40; g.fillStyle = '#1f2a1e'; g.beginPath(); g.moveTo(x, y - h); g.lineTo(x + h * 0.25, y); g.lineTo(x - h * 0.25, y); g.fill(); }
      for (let i = 0; i < 6000; i++) { g.fillStyle = `rgba(${rnd() < 0.5 ? '0,0,0' : '255,240,210'},0.05)`; g.fillRect(rnd() * W, rnd() * H, 2, 1); }   // brush texture
      const v = g.createRadialGradient(W / 2, H / 2, H * 0.3, W / 2, H / 2, W * 0.7); v.addColorStop(0, 'rgba(0,0,0,0)'); v.addColorStop(1, 'rgba(40,20,0,0.35)'); g.fillStyle = v; g.fillRect(0, 0, W, H);   // old varnish
    }, new THREE.PlaneGeometry(pw, ph), M(px, py, pz, 0, Math.PI, 0));
    const gilt = flat(0.72, 0.56, 0.26, 'metal');
    [[pw + 0.2, 0.12, 0, ph / 2 + 0.06], [pw + 0.2, 0.12, 0, -ph / 2 - 0.06], [0.12, ph, -pw / 2 - 0.06, 0], [0.12, ph, pw / 2 + 0.06, 0]].forEach(([w, h, dx, dy]) => P.add(rbox(w, h, 0.06, 0.025, 2), { m: M(px + dx, py + dy, pz + 0.01), color: gilt }));
    [-1, 1].forEach((s) => {
      const sx = px + s * 1.5, sy = F + 2.25;
      P.add(rbox(0.1, 0.22, 0.03, 0.02, 1), { m: M(sx, sy, Z1 - 0.02), color: brass });
      P.add(new THREE.CylinderGeometry(0.008, 0.008, 0.18, 5), { m: M(sx, sy + 0.02, Z1 - 0.1, Math.PI / 2, 0, 0), color: brass });
      P.add(new THREE.CylinderGeometry(0.06, 0.09, 0.13, 14, 1, true), { m: M(sx, sy + 0.16, Z1 - 0.19), color: flat(0.9, 0.84, 0.7, 'fabric') });
      G.add(new THREE.SphereGeometry(0.03, 8, 6), { m: M(sx, sy + 0.12, Z1 - 0.19), color: glowW });
    });
  }

  /* ---------- meshes (built once; books come later, from links.js) ---------- */
  const roomMesh = new THREE.Mesh(P.geometry(), inn); roomMesh.receiveShadow = true; roomMesh.castShadow = true; roomMesh.layers.enable(5);
  // lamps, candles and the window always shine down here (it's underground)
  const glowMesh = new THREE.Mesh(G.geometry(), new THREE.MeshBasicMaterial({ vertexColors: true, toneMapped: false }));
  group.add(roomMesh, glowMesh);
  const chLight = new THREE.PointLight(0xffc27a, 0, 90, 1.2);
  chLight.position.set(CH.x, CH.y - 0.45, CH.z); group.add(chLight);
  // the chandelier throws real shadows (railings, shelves, furniture); only the house is drawn into them (layer 5)
  chLight.castShadow = true; chLight.shadow.autoUpdate = false; chLight.shadow.mapSize.set(512, 512);
  chLight.shadow.camera.near = 0.5; chLight.shadow.camera.far = 90; chLight.shadow.bias = -0.003; chLight.shadow.normalBias = 0.25;
  chLight.shadow.camera.layers.set(5);  chLight.shadow.needsUpdate = true;   // draw once now, so the map exists from the first frame
  // a low warm fill (the lamps and the window), so the gallery's underside isn't black
  const deskLight = new THREE.PointLight(0xffd4a0, 0, 70, 1.2);
  deskLight.position.set(-0.8, F + 2.0, -4.6); group.add(deskLight);
  // the cabin sets one brightness for both
  const lampLight = { set intensity(v) { chLight.intensity = v * 1.2; deskLight.intensity = v * 0.75; }, get intensity() { return chLight.intensity / 1.25; } };

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
    const k = Math.floor(seed * 5), y = c.rowY0 + r * c.rowH;
    const at = (x, yy, z) => local(c, x, yy, z);
    const put = (geo, x, yy, color, sx = 1, sy = 1, sz = 1) => { const p = at(x, yy, 0.02); orn.add(geo, { m: new THREE.Matrix4().compose(p, new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), c.ry), new THREE.Vector3(sx, sy, sz)), color }); };
    const off = (seed * 1.3 % 1 - 0.5) * 1.0;
    if (k === 0) { put(new THREE.CylinderGeometry(0.06, 0.09, 0.26, 12), off, y + 0.13, flat(0.55, 0.6, 0.58)); put(new THREE.SphereGeometry(0.07, 10, 8), off + 0.3, y + 0.07, flat(0.7, 0.55, 0.35)); }
    else if (k === 1) { put(new THREE.BoxGeometry(0.3, 0.16, 0.22), off, y + 0.08, wood(0.5)); put(new THREE.BoxGeometry(0.3, 0.02, 0.22), off, y + 0.165, flat(0.62, 0.5, 0.28, 'metal')); }
    else if (k === 2) { // a little cat statue
      put(new THREE.SphereGeometry(0.06, 10, 8), off, y + 0.07, flat(0.25, 0.24, 0.24), 1, 1.2, 0.9);
      put(new THREE.SphereGeometry(0.04, 10, 8), off, y + 0.17, flat(0.25, 0.24, 0.24));
      [-1, 1].forEach((s) => put(new THREE.ConeGeometry(0.015, 0.035, 4), off + s * 0.022, y + 0.215, flat(0.25, 0.24, 0.24)));
    } else if (k === 3) { put(new THREE.CylinderGeometry(0.05, 0.05, 0.02, 12), off, y + 0.01, flat(0.62, 0.5, 0.28, 'metal')); put(new THREE.CylinderGeometry(0.02, 0.02, 0.14, 8), off, y + 0.09, flat(0.88, 0.84, 0.74, 'paper')); }
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
    order.forEach((ci) => cases[ci].pref.forEach((r) => slots.push([cases[ci], r])));
    const used = new Set();
    rows.forEach((row, i) => {
      const slot = slots[i]; if (!slot) return;
      const [c, r] = slot; used.add(c.x + ',' + c.z + ',' + r);
      const y = c.rowY0 + r * c.rowH;
      // books stand side by side, a little uneven, like a real shelf
      const dims = row.list.map((l) => { const h = hashS(l.url); return { t: 0.035 + h * 0.04, h: 0.24 + hashS(l.url + 'h') * 0.11, d: 0.17 + hashS(l.title || 'x') * 0.05 }; });
      const total = dims.reduce((s, d) => s + d.t + 0.004, 0), avail = c.w - 0.16;
      const k = total > avail ? avail / total : 1;
      let x = -c.w / 2 + 0.08;
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
    orn.clear();
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
    shadowLight: chLight, glowSpots: { CH, SLAB, F, MZ, Z0, Z1, C },
    reset(now) { if (st.open >= 0) closeBook(now); if (st.ring !== null) endRing(now); tip.classList.remove('show'); st.hoverKey = ''; },
    lampLight
  };
}
