/* MEOW (test copy) — little things to find and carry.
   · A bag of 咪咪 prawn snacks leaning on a stilt in the middle, under the house (an easter egg).
   · A bottle of water on the coffee table, by the laptop. Click it to pick it up: your cat carries it
     sideways in its mouth (one thing at a time). Q drops it where you stand.
   · Leave the water bottle on the frozen lake (snow scene) for 10 seconds and it freezes into an iced bottle.
     Carry the iced bottle to the fireplace and drop it in the fire: 5 seconds later it pops out of the
     flames as a bottle of 冰红茶 (iced lemon tea), which you can pick up too.
   In a shared room everyone sees where the bottle is, who carries it and what it has turned into. */
import * as THREE from 'three';
import { setHeldMaker } from './online.js';

const S = 4.5;                               // house metres → world units
const FIRE = new THREE.Vector3(108.9, 9.35, -105.1);   // the hearth (where the flames sit)
const FIRE_OUT = new THREE.Vector3(108.9, 8.88, -110.4); // where the tea lands, on the floor in front of it
const TABLE = new THREE.Vector3(108.95, 11.13, -109.75); // the coffee table, beside the laptop
const STILT = { x: 108.4, z: -113.8, half: 0.945 };     // a stilt in the middle under the house (its concrete footing is 1.9 wide)

const tex = (url) => { const t = new THREE.TextureLoader().load(url); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t; };

/* ---------- the snack bag: a puffy pillow with crimped seals at the top and bottom ---------- */
function buildBag() {
  const W = 0.68, H = 0.78, g = new THREE.Group();
  const side = (url, back) => {
    const geo = new THREE.PlaneGeometry(W, H, 24, 28), p = geo.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i) / (W / 2), y = p.getY(i) / (H / 2);
      const seal = 1 - Math.min(1, Math.max(0, (Math.abs(y) - 0.84) / 0.08));   // flat crimped strips top and bottom
      const puff = Math.sqrt(Math.max(0, 1 - x * x)) * Math.sqrt(Math.max(0, 1 - Math.pow(Math.min(1, Math.abs(y) / 0.86), 2))) * seal;
      p.setZ(i, puff * 0.085 * (back ? -1 : 1));
    }
    if (back) { const uv = geo.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setX(i, 1 - uv.getX(i)); }   // seen from behind
    geo.computeVertexNormals();
    const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ map: tex(url), alphaTest: 0.4, roughness: 0.35, metalness: 0.15, side: THREE.DoubleSide }));
    m.castShadow = m.receiveShadow = true; return m;
  };
  g.add(side('test/assets/props/mimi_front.png', false));
  g.add(side('test/assets/props/mimi_back.png', true));
  return g;
}

/* ---------- bottles ---------- */
// the bottle's outline (radius along its height), measured from the tea photo so all three share one shape
const PROFILE = [[0, 0.0], [0.002, 0.12], [0.012, 0.135], [0.03, 0.15], [0.12, 0.155], [0.3, 0.14], [0.42, 0.148], [0.6, 0.15], [0.7, 0.135], [0.8, 0.095], [0.86, 0.065], [0.9, 0.06], [0.9, 0.0]];
const H = 1.0;
function latheGeo(scale = 1, seg = 40) {
  const pts = PROFILE.map(([y, r]) => new THREE.Vector2(r * scale, y * H));
  const g = new THREE.LatheGeometry(pts, seg); g.computeVertexNormals(); return g;
}
function capMesh(color) {
  const c = new THREE.Mesh(new THREE.CylinderGeometry(0.068, 0.068, 0.09, 24), new THREE.MeshStandardMaterial({ color, roughness: 0.45 }));
  c.position.y = H * 0.9 + 0.045; c.castShadow = true; return c;
}
// a label drawn on a canvas (the water bottle's)
function waterLabel() {
  const c = document.createElement('canvas'); c.width = 512; c.height = 128; const x = c.getContext('2d');
  const gr = x.createLinearGradient(0, 0, 0, 128); gr.addColorStop(0, '#2f8fd8'); gr.addColorStop(1, '#1b5fa8'); x.fillStyle = gr; x.fillRect(0, 0, 512, 128);
  x.strokeStyle = 'rgba(255,255,255,.55)'; x.lineWidth = 3; for (let i = 0; i < 4; i++) { x.beginPath(); for (let k = 0; k <= 512; k += 8) x.lineTo(k, 98 + i * 7 + Math.sin(k / 30 + i) * 4); x.stroke(); }
  x.fillStyle = '#fff'; x.font = 'bold 44px system-ui, sans-serif'; x.textAlign = 'center'; x.fillText('MEOW WATER', 128, 64); x.fillText('MEOW WATER', 384, 64);
  x.font = '600 20px system-ui, sans-serif'; x.fillText('natural spring · 500 ml', 128, 92); x.fillText('natural spring · 500 ml', 384, 92);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = THREE.RepeatWrapping; return t;
}
let LABEL_W = null, FROST = null;
function frostTex() {
  if (FROST) return FROST;
  const c = document.createElement('canvas'); c.width = c.height = 256; const x = c.getContext('2d');
  x.fillStyle = '#cfe6f3'; x.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 2600; i++) { const v = 200 + Math.random() * 55 | 0; x.fillStyle = `rgba(${v},${v + 5},255,${0.25 + Math.random() * 0.5})`; const r = 0.5 + Math.random() * 2.2; x.beginPath(); x.arc(Math.random() * 256, Math.random() * 256, r, 0, 7); x.fill(); }
  x.strokeStyle = 'rgba(255,255,255,.7)'; for (let i = 0; i < 60; i++) { x.lineWidth = 0.5 + Math.random(); x.beginPath(); let px = Math.random() * 256, py = Math.random() * 256; x.moveTo(px, py); for (let k = 0; k < 5; k++) { px += (Math.random() - 0.5) * 30; py += (Math.random() - 0.5) * 30; x.lineTo(px, py); } x.stroke(); }
  FROST = new THREE.CanvasTexture(c); FROST.colorSpace = THREE.SRGBColorSpace; FROST.wrapS = FROST.wrapT = THREE.RepeatWrapping; return FROST;
}
// the tea: front photo on the front half, back photo on the back half, projected straight on
let TEA = null;
function teaMaterial() {
  if (TEA) return TEA;
  const f = tex('test/assets/props/tea_front.png'), b = tex('test/assets/props/tea_back.png');
  const m = new THREE.MeshStandardMaterial({ roughness: 0.25, metalness: 0.0, alphaTest: 0.3, side: THREE.DoubleSide });
  m.onBeforeCompile = (sh) => {
    sh.uniforms.tF = { value: f }; sh.uniforms.tB = { value: b };
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vL;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvL = position;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vL; uniform sampler2D tF, tB;')
      .replace('#include <map_fragment>', `
        { float v = vL.y / ${H.toFixed(2)}; bool front = vL.z >= 0.0;
          float u = 0.5 + (front ? vL.x : -vL.x) / 0.32;
          vec4 c = front ? texture2D(tF, vec2(u, v)) : texture2D(tB, vec2(u, v));
          diffuseColor *= vec4(c.rgb, 1.0); if (c.a < 0.3) diffuseColor.rgb = vec3(0.8, 0.45, 0.12); }`);
  };
  TEA = m; return m;
}
export function buildBottle(kind) {
  const g = new THREE.Group();
  if (kind === 'tea') {
    const b = new THREE.Mesh(latheGeo(1.0, 48), teaMaterial()); b.castShadow = true; g.add(b);
    g.add(capMesh(0xf5c518));
  } else {
    const ice = kind === 'ice';
    // the water inside, a clear plastic shell, a label band
    const water = new THREE.Mesh(latheGeo(0.93), new THREE.MeshStandardMaterial({ color: ice ? 0xd8eef8 : 0x9fd3ee, transparent: true, opacity: ice ? 0.95 : 0.55, roughness: ice ? 0.6 : 0.05 }));
    water.scale.y = 0.95; g.add(water);
    const shell = new THREE.Mesh(latheGeo(1.0), new THREE.MeshPhysicalMaterial({ color: ice ? 0xe9f6ff : 0xffffff, transparent: true, opacity: ice ? 0.75 : 0.28, roughness: ice ? 0.75 : 0.08, clearcoat: ice ? 0 : 1, map: ice ? frostTex() : null, depthWrite: false }));
    shell.castShadow = true; g.add(shell);
    if (!LABEL_W) LABEL_W = waterLabel();
    const lab = new THREE.Mesh(new THREE.CylinderGeometry(0.152, 0.152, 0.22, 40, 1, true), new THREE.MeshStandardMaterial({ map: LABEL_W, roughness: 0.5, transparent: ice, opacity: ice ? 0.7 : 1 }));
    lab.position.y = 0.4; g.add(lab);
    g.add(capMesh(ice ? 0xbfe3ff : 0x2b7ad0));
    if (ice) {   // a crust of ice crystals
      const cm = new THREE.MeshStandardMaterial({ color: 0xf2fbff, roughness: 0.3, transparent: true, opacity: 0.85 });
      for (let i = 0; i < 26; i++) { const a = Math.random() * 6.28, y = 0.05 + Math.random() * 0.75, r = 0.15; const q = new THREE.Mesh(new THREE.OctahedronGeometry(0.02 + Math.random() * 0.03), cm); q.position.set(Math.cos(a) * r, y, Math.sin(a) * r); q.rotation.set(Math.random() * 3, Math.random() * 3, 0); g.add(q); }
    }
  }
  // the bottle's middle is its origin (so it sits and rotates nicely)
  g.children.forEach((c) => { c.position.y -= H * 0.47; });
  return g;
}

/* ---------- real physics ----------
   Each thing is a rigid body made of a few spheres (a bottle: a row of them along its length, so it rolls
   like a cylinder; the snack bag: its corners, so it lands flat and slides). Every step: gravity, then each
   sphere that sinks into the ground, a floor, a table, a rock or the ice is pushed back out and given an
   impulse (a bounce, and friction along the surface, which is what makes things roll and tumble) at that
   point, so the body also starts spinning. Slippery on ice, floats on open water, bumps off furniture and
   walls, gets nudged by cats walking into it, and goes to sleep once it's still. */
const G = 44;   // gravity (world units / s², the same as for your cat)
const BODIES = {
  bottle: { mass: 0.55, I: [0.045, 0.012, 0.045], pts: [[0, -0.42, 0, 0.15], [0, -0.14, 0, 0.152], [0, 0.14, 0, 0.15], [0, 0.34, 0, 0.12], [0, 0.48, 0, 0.07]], e: 0.28, mu: 0.55 },
  mimi: { mass: 0.06, I: [0.004, 0.003, 0.006], pts: [[-0.3, -0.35, 0, 0.05], [0.3, -0.35, 0, 0.05], [-0.3, 0.35, 0, 0.05], [0.3, 0.35, 0, 0.05], [0, 0, 0.05, 0.05], [0, 0, -0.05, 0.05]], e: 0.1, mu: 0.8 }
};
const bodyOf = (kind) => (kind === 'mimi' ? BODIES.mimi : BODIES.bottle);
const buildItem = (kind) => (kind === 'mimi' ? buildBag() : buildBottle(kind));
const HEARTH = { x0: 107.0, x1: 110.8, z0: -106.2, z1: -104.0 };   // the fire's bed, inside the fireplace
const inHearth = (p) => p.x > HEARTH.x0 && p.x < HEARTH.x1 && p.z > HEARTH.z0 && p.z < HEARTH.z1 && p.y < 11;

export function createItems({ scene, terrain, physics, player, camera, cabin, scenes, water, online, toast }) {
  const LIST = [
    { id: 'bottle', kind: 'water' },
    { id: 'mimi', kind: 'mimi' }
  ].map((o) => Object.assign({ obj: null, held: '', where: '', t: 0, owner: false, awake: false, still: 0,
    pos: new THREE.Vector3(), q: new THREE.Quaternion(), v: new THREE.Vector3(), w: new THREE.Vector3(),
    tgtP: new THREE.Vector3(), tgtQ: new THREE.Quaternion(), net: false, sendT: 0 }, o));
  const byId = (id) => LIST.find((o) => o.id === id);
  const holderMesh = new THREE.Group(); camera.add(holderMesh); holderMesh.position.set(0.05, -0.42, -1.05);
  if (!camera.parent) scene.add(camera);
  const show = (B) => { if (!B.obj) return; B.obj.visible = !B.held; B.obj.position.copy(B.pos); B.obj.quaternion.copy(B.q); };
  const setObj = (B) => { if (B.obj) scene.remove(B.obj); B.obj = buildItem(B.kind); scene.add(B.obj); show(B); };

  // starting spots: the bottle standing on the coffee table, the bag leaning on the stilt's footing
  { const B = byId('bottle'); B.pos.set(TABLE.x, TABLE.y + 0.47, TABLE.z); B.where = 'table'; }
  { const M = byId('mimi'), gy = terrain.surfaceAt(STILT.x, STILT.z - STILT.half - 0.3); M.pos.set(STILT.x + 0.05, gy + 0.38, STILT.z - STILT.half - 0.17); M.q.setFromEuler(new THREE.Euler(0.22, Math.PI, 0.04)); M.where = 'stilt'; }
  LIST.forEach(setObj);
  cabin.whenReady((root) => {
    const B = byId('bottle'); if (B.where !== 'table') return;
    const rc = new THREE.Raycaster(new THREE.Vector3(TABLE.x, TABLE.y + 3, TABLE.z), new THREE.Vector3(0, -1, 0));
    const hit = rc.intersectObject(root, true).find((h) => h.object.visible);
    if (hit) { B.pos.y = hit.point.y + 0.47; show(B); }
  });
  setHeldMaker((k) => { const m = buildItem(k); if (k === 'mimi') m.rotation.set(0, Math.PI / 2, 0); return m; });
  let fpKind = '';
  const showFP = (kind, firstPerson) => {
    const want = firstPerson ? kind : '';
    if (want === fpKind) return; fpKind = want;
    holderMesh.clear();
    if (want) { const m = buildItem(want); if (want === 'mimi') m.rotation.set(0.2, 0.5, 0); else m.rotation.set(0.15, 0.2, Math.PI / 2); holderMesh.add(m); }
  };

  /* --- the world as the things feel it --- */
  const wy = () => water.position.y;
  const iceOn = () => (scenes.cur.ice || 0) > 0.5;
  // the surface under (x, z) for something at height y: floors, tables, rocks… or the ground exactly as drawn
  const surfaceY = (x, z, y) => {
    const f = physics.floor(x, z, y, 0.35);
    let h = f.y;
    if (!f.built && Math.abs(h - physics.groundAt(x, z)) < 0.05) h = terrain.surfaceAt(x, z);   // (walking uses a smoothed ground)
    if (iceOn() && terrain.surfaceAt(x, z) < wy() - 0.25) h = Math.max(h, wy() + 0.02);         // the frozen lake
    return h;
  };
  const tmp = { r: new THREE.Vector3(), p: new THREE.Vector3(), n: new THREE.Vector3(), vp: new THREE.Vector3(), t: new THREE.Vector3(), a: new THREE.Vector3(), b: new THREE.Vector3(), m: new THREE.Matrix3(), m2: new THREE.Matrix3(), q: new THREE.Quaternion() };
  // world inverse inertia × vector
  const invI = (B, R, v, out) => {
    const I = bodyOf(B.kind).I;
    out.copy(v).applyMatrix3(tmp.m2.copy(R).transpose());
    out.set(out.x / I[0], out.y / I[1], out.z / I[2]).applyMatrix3(R);
    return out;
  };
  const step = (B, dt) => {
    const body = bodyOf(B.kind), R = tmp.m.setFromMatrix4(new THREE.Matrix4().makeRotationFromQuaternion(B.q));
    B.v.y -= G * dt;
    // open water: things float (the bottle bobs on its side)
    if (!iceOn() && terrain.surfaceAt(B.pos.x, B.pos.z) < wy() - 0.25 && B.pos.y < wy() + 0.05) {
      const sub = Math.min(1, (wy() + 0.05 - B.pos.y) / 0.3);
      B.v.y += G * 1.6 * sub * dt; B.v.multiplyScalar(1 - Math.min(1, 2.5 * dt)); B.w.multiplyScalar(1 - Math.min(1, 2.5 * dt));
    }
    B.pos.addScaledVector(B.v, dt);
    // turn by the spin
    const w = B.w, ang = w.length() * dt;
    if (ang > 1e-6) { tmp.q.setFromAxisAngle(tmp.a.copy(w).normalize(), ang); B.q.premultiply(tmp.q).normalize(); }
    R.setFromMatrix4(new THREE.Matrix4().makeRotationFromQuaternion(B.q));
    const icy = iceOn() && terrain.surfaceAt(B.pos.x, B.pos.z) < wy() - 0.25, mu = icy ? 0.04 : body.mu;
    // contacts
    for (const [lx, ly, lz, rad] of body.pts) {
      tmp.r.set(lx, ly, lz).applyMatrix3(R); tmp.p.copy(B.pos).add(tmp.r);
      const h = surfaceY(tmp.p.x, tmp.p.z, tmp.p.y);
      const pen = h + rad - tmp.p.y;
      if (pen <= 0) continue;
      // the surface's slope (so things roll downhill)
      const e = 0.3, hx = surfaceY(tmp.p.x + e, tmp.p.z, tmp.p.y) - surfaceY(tmp.p.x - e, tmp.p.z, tmp.p.y), hz = surfaceY(tmp.p.x, tmp.p.z + e, tmp.p.y) - surfaceY(tmp.p.x, tmp.p.z - e, tmp.p.y);
      const n = tmp.n.set(-hx / (2 * e), 1, -hz / (2 * e)).normalize();
      if (Math.abs(hx) > 0.5 || Math.abs(hz) > 0.5) n.set(0, 1, 0);   // a ledge (table edge, step): push straight up
      B.pos.addScaledVector(n, pen * 0.85);
      // velocity of this point
      const vp = tmp.vp.copy(B.w).cross(tmp.r).add(B.v), vn = vp.dot(n);
      if (vn < 0) {
        const rn = tmp.a.copy(tmp.r).cross(n), k = 1 / body.mass + invI(B, R, rn, tmp.b).cross(tmp.r).dot(n);
        const j = -(1 + (vn < -3 ? body.e : 0)) * vn / k;
        B.v.addScaledVector(n, j / body.mass); B.w.add(invI(B, R, tmp.a.copy(tmp.r).cross(n).multiplyScalar(j), tmp.b));
        // friction
        tmp.vp.copy(B.w).cross(tmp.r).add(B.v); const vt = tmp.t.copy(tmp.vp).addScaledVector(n, -tmp.vp.dot(n)), vtl = vt.length();
        if (vtl > 1e-4) {
          vt.multiplyScalar(1 / vtl);
          const rt = tmp.a.copy(tmp.r).cross(vt), kt = 1 / body.mass + invI(B, R, rt, tmp.b).cross(tmp.r).dot(vt);
          const jt = -Math.min(vtl / kt, mu * j);
          B.v.addScaledVector(vt, jt / body.mass); B.w.add(invI(B, R, tmp.a.copy(tmp.r).cross(vt).multiplyScalar(jt), tmp.b));
        }
      }
    }
    // rolling resistance and air
    B.w.multiplyScalar(1 - Math.min(1, (icy ? 0.2 : 1.2) * dt)); B.v.multiplyScalar(1 - Math.min(1, 0.15 * dt));
    // walls and furniture: bounce off (but things can go into the fireplace)
    if (!inHearth(B.pos) && physics.blocked(B.pos.x, B.pos.z, B.pos.y - 0.2, -0.75)) {
      B.pos.x -= B.v.x * dt * 1.2; B.pos.z -= B.v.z * dt * 1.2; B.v.x *= -0.35; B.v.z *= -0.35;
    }
  };
  const nudge = (B, x, z, vx, vz, r) => {   // a cat walking into it
    const dx = B.pos.x - x, dz = B.pos.z - z, d = Math.hypot(dx, dz);
    if (d > r || d < 1e-3) return false;
    const push = (r - d) / r, nx = dx / d, nz = dz / d, sp = Math.max(0, vx * nx + vz * nz);
    if (sp < 0.5 && push < 0.3) return false;
    B.v.x += nx * (sp * 0.9 + push * 6) * 0.25; B.v.z += nz * (sp * 0.9 + push * 6) * 0.25; B.v.y += 0.4;
    B.w.x += (Math.random() - 0.5) * 3; B.w.z += (Math.random() - 0.5) * 3;
    return true;
  };

  /* --- sharing with the room: whoever last touched a thing runs its physics and tells the others --- */
  const sync = (B) => online.emit('item', { id: B.id, k: B.kind, p: B.pos.toArray().map((x) => +x.toFixed(3)), q: B.q.toArray().map((x) => +x.toFixed(4)), h: B.held, w: B.where, a: B.awake ? 1 : 0 });
  online.on('item', (v) => {
    if (!v) return;
    const B = byId(v.id || 'bottle'); if (!B) return;
    if (v.k !== B.kind) { B.kind = v.k; setObj(B); }
    B.held = v.h || ''; B.where = v.w || ''; B.owner = false; B.awake = false; B.t = 0;
    B.tgtP.fromArray(v.p); if (v.q) B.tgtQ.fromArray(v.q); B.net = true;
    if (!v.a) { B.pos.copy(B.tgtP); B.q.copy(B.tgtQ); }
    show(B);
  });
  online.on('hello', () => LIST.forEach((B) => { if (B.owner) sync(B); }));
  const me = () => online.id || 'me';
  const mine = () => LIST.find((o) => o.held === me());
  const ray = new THREE.Raycaster();
  const aimed = (r, ps) => {
    ray.ray.copy(r.ray);
    let best = null, bd = Infinity;
    for (const B of LIST) {
      if (!B.obj || B.held || !B.obj.visible) continue;
      if (Math.hypot(ps.x - B.pos.x, ps.z - B.pos.z) > 7 || Math.abs(ps.feet - B.pos.y) > 6) continue;
      const h = ray.intersectObject(B.obj, true)[0];
      if (h && h.distance < bd) { bd = h.distance; best = B; }
    }
    return best;
  };

  const api = {
    get heldKind() { const B = mine(); return B ? B.kind : ''; },
    hover(r, ps) { return !!aimed(r, ps); },
    click(r, ps, yaw) {
      const B = aimed(r, ps); if (!B) return false;
      if (mine()) api.drop(ps, yaw);
      B.held = me(); B.where = 'mouth'; B.t = 0; B.owner = true; B.awake = false; show(B); sync(B);
      const S2 = window.MEOW_SOUND; if (S2 && S2.click) S2.click();
      return true;
    },
    // the drop key: it falls from your mouth with your speed and a little toss forward, then physics takes over
    drop(ps, yaw) {
      const B = mine(); if (!B) return false;
      const fx = -Math.sin(yaw), fz = -Math.cos(yaw);
      B.pos.set(ps.x + fx * 1.15, ps.feet + 1.7, ps.z + fz * 1.15);
      B.q.setFromEuler(new THREE.Euler(0, yaw, B.kind === 'mimi' ? 0 : Math.PI / 2, 'YXZ'));
      B.v.set((ps.vx || 0) * 0.8 + fx * 3, 2, (ps.vz || 0) * 0.8 + fz * 3);
      B.w.set((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2);
      B.held = ''; B.where = 'air'; B.owner = true; B.awake = true; B.still = 0; B.t = 0;
      show(B); sync(B);
      return true;
    },
    update(dt, time, ps, firstPerson) {
      const H2 = mine(); showFP(H2 ? H2.kind : '', firstPerson);
      dt = Math.min(dt, 0.05);
      for (const B of LIST) {
        if (!B.obj || B.held) continue;
        // other people's things glide to where they say
        if (!B.owner && B.net) { B.pos.lerp(B.tgtP, 1 - Math.exp(-dt * 12)); B.q.slerp(B.tgtQ, 1 - Math.exp(-dt * 12)); show(B); }
        // you walk into it: it's knocked along (and you run its physics now)
        if (player.walking && !ps.air && Math.abs(ps.feet - B.pos.y) < 1.6 && nudge(B, ps.x, ps.z, ps.vx || 0, ps.vz || 0, 1.0)) { B.owner = true; B.awake = true; B.still = 0; if (B.where === 'stilt' || B.where === 'table') B.where = 'ground'; }
        if (B.owner && B.awake) {
          const n = 4; for (let i = 0; i < n; i++) step(B, dt / n);
          show(B);
          // where is it now?
          B.where = inHearth(B.pos) ? 'fire' : (iceOn() && terrain.surfaceAt(B.pos.x, B.pos.z) < wy() - 0.25) ? 'ice' : (terrain.surfaceAt(B.pos.x, B.pos.z) < wy() - 0.25 && B.pos.y < wy() + 0.4) ? 'water' : 'ground';
          // asleep once still
          if (B.v.lengthSq() < 0.3 && B.w.lengthSq() < 0.3 && B.where !== 'water') { B.still += dt; if (B.still > 0.6) { B.awake = false; B.v.set(0, 0, 0); B.w.set(0, 0, 0); sync(B); } } else B.still = 0;
          B.sendT += dt; if (B.sendT > 0.12) { B.sendT = 0; sync(B); }
          if (B.pos.y < -60) { B.pos.set(TABLE.x, TABLE.y + 1, TABLE.z); B.v.set(0, 0, 0); }   // fell out of the world: back to the table
        }
        // the water bottle freezing on the ice, the iced bottle in the fire
        if (B.where === 'ice' && B.kind === 'water' && iceOn() && !B.awake) {
          B.t += dt;
          if (B.t > 10 && B.owner) { B.kind = 'ice'; B.t = 0; const p = B.pos.clone(), q = B.q.clone(); setObj(B); B.pos.copy(p); B.q.copy(q); show(B); sync(B); toast && toast('🧊 It froze into an iced bottle!'); const S2 = window.MEOW_SOUND; if (S2 && S2.click) S2.click(); }
        } else if (B.where === 'fire' && B.kind === 'ice') {
          B.t += dt;
          B.obj.position.x = B.pos.x + Math.sin(time * 40) * 0.03 * Math.min(1, B.t);
          if (B.t > 5 && B.owner) {
            // it pops out of the flames as tea: a real jump, out into the room
            B.kind = 'tea'; B.t = 0; const p = B.pos.clone(); setObj(B); B.pos.copy(p); B.pos.y += 0.4;
            B.v.set((Math.random() - 0.5) * 2, 15, -9); B.w.set(6, 0, 3); B.awake = true; B.still = 0; B.where = 'air';
            show(B); sync(B); toast && toast('🍋 冰红茶!'); const S2 = window.MEOW_SOUND; if (S2 && S2.whoosh) S2.whoosh();
          }
        } else if (B.where !== 'fire') B.t = (B.where === 'ice' && B.kind === 'water') ? B.t : 0;
      }
    },
    _L: LIST, get _B() { return byId('bottle'); }   // (testing)
  };
  return api;
}
