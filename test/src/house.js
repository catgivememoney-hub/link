/* MEOW (test copy) — the new cabin on stilts, built in Blender (test/assets/house.glb).
   Replaces the old hand-built cabin and the library under it.

   Everything here is in the house's own metres, like the Blender file:
     local X → toward the lake, local Y → along the house, local Z → up (floor at 1.0)
     world = (112 - 4.5·X,  4.38 + 4.5·Z,  -119 + 4.5·Y)
   It answers the same questions the old cabin did (floors, blocked, inside, doors) so the
   walking physics and main.js work unchanged. */
import * as THREE from 'three';
import { GLTFLoader } from 'three-addons/loaders/GLTFLoader.js';
import { createBooks } from './books.js';
import { createFlame } from './highfx.js';

// where the house stands (terrain.js levels the ground here; props.js keeps a clearing)
export const CABIN = { x: 112, z: -119, y: 4.5, yaw: -Math.PI / 2, S: 4.5 };
const S = 4.5, OX = 112, OY = 4.38, OZ = -119;
export const toLocal = (x, z) => [(OX - x) / S, (z - OZ) / S];
export const toWorld = (X, Y, Z = 0) => new THREE.Vector3(OX - S * X, OY + S * Z, OZ + S * Y);
const lz = (feet) => (feet - OY) / S;           // feet height in house metres
const wy = (Z) => OY + S * Z;                    // house metres → world height

// clearings for trees, rocks and plants (the house, the dock, the boat's mooring)
export const HOUSE_ZONES = [
  { x: 105.7, z: -119, r: 34 },
  { x: 74, z: -111.8, r: 15 }, { x: 56, z: -111.8, r: 15 }, { x: 38, z: -111.8, r: 15 }, { x: 22, z: -111.8, r: 15 },
  { x: 53, z: -101, r: 16 }
];

const FL = 1.0, STEP = 0.6;                      // floor top; highest step (house metres)
const inR = (X, Y, r, p = 0) => X > r[0] - p && X < r[1] + p && Y > r[2] - p && Y < r[3] + p;
// [x0, x1, y0, y1]
const ROOMS = [[-2.5, 2.5, -3.5, 3.5], [2.5, 4.5, -3.5, -0.3]];
const DECKS = [[2.5, 6.5, -0.3, 3.5], [4.5, 6.5, -3.5, -0.3], [-4.1, -2.5, -1.1, 1.1]];
const DOCK = [[8.25, 17.8, 0.75, 2.45], [17.8, 20.4, -0.7, 3.9]], DOCK_Z = -0.3;
// stairs as ramps: rect, the x where the top is, top z, bottom z, x where the bottom is
const STAIRS = [
  { r: [6.5, 8.25, 0.95, 2.25], xt: 6.5, zt: FL, xb: 8.25, zb: -0.3 },
  { r: [-5.45, -4.1, -0.5, 0.5], xt: -4.1, zt: FL, xb: -5.45, zb: -0.01 }
];
const rampZ = (s, X) => s.zt + (s.zb - s.zt) * Math.min(1, Math.max(0, (X - s.xt) / (s.xb - s.xt)));
// walls: 'Y' runs along Y at X = at (and 'X' along X at Y = at), from a to b; door gaps by name
const WALLS = [
  ['Y', -2.5, -3.5, 3.5, [[-0.48, 0.48, 'Back door']]],
  ['Y', 2.5, -3.5, 3.5, [[0.97, 1.93, 'Front door'], [-1.42, -0.62, 'Bedroom door']]],
  ['Y', 4.5, -3.5, -0.3, []],
  ['X', 3.5, -2.5, 2.5, []],
  ['X', -3.5, -2.5, 4.5, []],
  ['X', -0.3, 2.5, 4.5, []]
];
// railings (thin walls), with the level they belong to: 'deck' or a stair
const RAILS = [
  ['Y', 6.5, -3.5, 0.95], ['Y', 6.5, 2.25, 3.5], ['X', 3.5, 2.6, 6.5], ['X', -3.5, 4.6, 6.5],
  ['X', 0.95, 6.5, 8.25], ['X', 2.25, 6.5, 8.25],
  ['X', -1.1, -4.1, -2.65], ['X', 1.1, -4.1, -2.65], ['Y', -4.1, -1.1, -0.55], ['Y', -4.1, 0.55, 1.1],
  ['X', -0.5, -5.45, -4.1], ['X', 0.5, -5.45, -4.1]
];
// furniture you bump into (on the house floor)
const FURN = [
  // (the sofa, the coffee table and the bed are measured from the model instead: see SURF)
  [0.0, 1.4, 2.9, 3.5],        // fireplace
  [-2.25, -0.75, -3.5, -2.65], // desk
  [-1.7, -1.1, -2.45, -1.85],  // office chair
  [0.8, 2.05, -3.5, -3.0],     // bookshelf
  [2.7, 3.2, -3.5, -2.88]      // nightstand
];
const SURF = [];   // filled when the model loads: { key, x0, y0, nx, ny, C, h[] } (h = top in house metres, -1 = none)
const surfAt = (X, Y, only) => {
  let top = -1;
  for (const q of SURF) {
    if (only ? q.key !== only : q.key === 'chair') continue;
    const i = Math.round((X - q.x0) / q.C), j = Math.round((Y - q.y0) / q.C);
    if (i >= 0 && j >= 0 && i < q.nx && j < q.ny) top = Math.max(top, q.h[j * q.nx + i]);
  }
  return top;
};
const DOORS = [['Front door', -Math.PI / 2], ['Bedroom door', Math.PI / 2], ['Back door', -Math.PI / 2]];
// is anything built at (x, z)? (the boat can't sail through the dock, the decks or the stairs)
export const builtAt = (x, z, pad = 0.15) => {
  const [X, Y] = toLocal(x, z);
  if (X < -6.5 || X > 21.5 || Y < -5 || Y > 5.5) return false;
  return DOCK.some((q) => inR(X, Y, q, pad)) || DECKS.some((q) => inR(X, Y, q, pad)) || ROOMS.some((q) => inR(X, Y, q, pad)) || STAIRS.some((s) => inR(X, Y, s.r, pad));
};
const smooth = (x) => x * x * (3 - 2 * x);

export function createHouse({ scene }) {
  const group = new THREE.Group(); group.name = 'house';
  scene.add(group);
  const doors = DOORS.map(([name, angle]) => ({ name, angle, node: null, k: 0, to: 0, hinge: null, meshes: [] }));
  const byName = Object.fromEntries(doors.map((d) => [d.name, d]));
  const H = { flame: null, hiFx: false, fire: null, ready: false, boatNode: null, onBoat: null, root: null, readyFns: [] };
  let boatBlock = null;

  // lights: the fire (flickers), the bedside lamp, the lantern on the dock
  const fireLight = new THREE.PointLight(0xff8a3c, 0, 46, 1.5); fireLight.position.copy(toWorld(0.7, 2.85, FL + 0.45)); group.add(fireLight);
  const lampLight = new THREE.PointLight(0xffc98a, 0, 26, 1.5); lampLight.position.copy(toWorld(3.02, -3.15, FL + 0.88)); group.add(lampLight);
  const dockLight = new THREE.PointLight(0xffc070, 0, 60, 1.2); dockLight.position.copy(toWorld(20.05, 3.55, DOCK_Z + 2.55)); group.add(dockLight);
  // the hanging light over the living room (off until you flip the switch by the front door)
  const ceilLight = new THREE.PointLight(0xffd29a, 0, 48, 1.3); ceilLight.position.copy(toWorld(0, 0.7, 3.45)); group.add(ceilLight);
  const glowMats = { dock: [], bulb: [] };
  const L = { ceiling: false, k: 0, lever: null, switchMeshes: [], lamp: true, lampK: 1, lampMeshes: [], lampGlow: [] };
  const DR = { node: null, k: 0, to: 0, meshes: [], z0: 0 };   // the nightstand drawer (slides out 0.3 m)
  // shadows from the fire, the hanging light and the dock lamp (graphics Best and up). They're only
  // re-drawn when something moves (a door, the light switch) or every couple of seconds, so they're cheap.
  const SH = { size: 0, t: 0, lights: [fireLight, ceilLight, dockLight] };
  SH.lights.forEach((l) => { l.shadow.autoUpdate = false; l.shadow.camera.near = 0.5; l.shadow.camera.far = 70; l.shadow.bias = -0.003; l.shadow.normalBias = 0.08; l.shadow.radius = 4; l.shadow.intensity = 0.85; });   // soft, never pitch black

  // light smoke drifting up out of the chimney (soft sprites that rise, spread and fade)
  const smoke = (() => {
    const N = 70, cv = document.createElement('canvas'); cv.width = cv.height = 128;
    // a soft, lumpy puff: many faint blobs inside a round falloff (no hard centre, no edge)
    const cx = cv.getContext('2d');
    for (let i = 0; i < 60; i++) {
      const a = Math.random() * 6.283, d = Math.pow(Math.random(), 0.7) * 34, x = 64 + Math.cos(a) * d, y = 64 + Math.sin(a) * d, r = 14 + Math.random() * 22;
      const g = cx.createRadialGradient(x, y, 0, x, y, r); g.addColorStop(0, 'rgba(255,255,255,0.09)'); g.addColorStop(1, 'rgba(255,255,255,0)');
      cx.fillStyle = g; cx.fillRect(0, 0, 128, 128);
    }
    { const g = cx.createRadialGradient(64, 64, 20, 64, 64, 64); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,1)'); cx.globalCompositeOperation = 'destination-out'; cx.fillStyle = g; cx.fillRect(0, 0, 128, 128); cx.globalCompositeOperation = 'source-over'; }
    const tex = new THREE.CanvasTexture(cv);
    const geo = new THREE.BufferGeometry(), pos = new Float32Array(N * 3), age = new Float32Array(N);
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('aAge', new THREE.BufferAttribute(age, 1));
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, fog: true,
      uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, { tMap: { value: tex }, uColor: { value: new THREE.Color(0xc9c9c6) }, uOp: { value: 0.5 }, uScale: { value: 560 } }]),
      vertexShader: 'attribute float aAge; varying float vAge; uniform float uScale;\n#include <fog_pars_vertex>\nvoid main(){ vAge = aAge; vec4 mvPosition = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mvPosition; gl_PointSize = uScale * (3.5 + aAge * 16.0) / -mvPosition.z;\n#include <fog_vertex>\n}',
      fragmentShader: 'uniform sampler2D tMap; uniform vec3 uColor; uniform float uOp; varying float vAge;\n#include <fog_pars_fragment>\nvoid main(){ float a = texture2D(tMap, gl_PointCoord).a * uOp * smoothstep(0.0, 0.2, vAge) * (1.0 - smoothstep(0.3, 1.0, vAge)); gl_FragColor = vec4(uColor, a);\n#include <fog_fragment>\n}'
    });
    const points = new THREE.Points(geo, mat); points.frustumCulled = false; points.visible = false; points.renderOrder = 2;
    group.add(points);
    const seed = Array.from({ length: N }, (_, i) => ({ t: i / N, dx: Math.random() - 0.5, dz: Math.random() - 0.5 }));
    const origin = new THREE.Vector3();
    const LIFE = 12;
    return {
      points, origin,
      update(dt, time, on, wind) {
        mat.uniforms.uOp.value = 0.6 * on;   // thicker smoke
        if (on < 0.01) return;
        for (let i = 0; i < N; i++) {
          const p = seed[i]; p.t += dt / LIFE; if (p.t > 1) { p.t -= 1; p.dx = Math.random() - 0.5; p.dz = Math.random() - 0.5; }
          const k = p.t, rise = k * 26, drift = k * k * 14 * wind;
          pos[i * 3] = origin.x + p.dx * (0.6 + k * 6) + drift + Math.sin(time * 0.7 + i) * k * 1.5;
          pos[i * 3 + 1] = origin.y + rise;
          pos[i * 3 + 2] = origin.z + p.dz * (0.6 + k * 6) + drift * 0.4;
          age[i] = k;
        }
        geo.attributes.position.needsUpdate = true; geo.attributes.aAge.needsUpdate = true;
      }
    };
  })();
  new GLTFLoader().load('test/assets/house.glb', (g) => {
    const root = g.scene;
    root.traverse((o) => {
      if (!o.isMesh) return;
      o.castShadow = true; o.receiveShadow = true;
      const m = o.material, n = m.name || '';
      if (n.startsWith('Dock lamp glass') || n.startsWith('Lamp bulb')) {
        // lamps that light up: their glass glows (strength set every frame)
        o.material = new THREE.MeshStandardMaterial({ color: n.startsWith('Dock') ? 0xf2e3a0 : 0xfff3d6, emissive: 0xffc070, emissiveIntensity: 0, roughness: 0.4, transparent: n.startsWith('Dock'), opacity: 0.92, name: n });
        (n.startsWith('Dock') ? glowMats.dock : glowMats.bulb).push(o.material); o.castShadow = false;
      } else if (n === 'Screen off') {
        // the monitor when the computer is off: plain black glass
        o.material = new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.55, metalness: 0, envMapIntensity: 0.12, name: n });
      } else if (n === 'Fire' || n === 'Screen' || n === 'Lamp glow') {
        o.material = new THREE.MeshBasicMaterial({ vertexColors: true, name: n });
        if (n === 'Lamp glow') L.lampGlow.push(o.material);
        o.castShadow = false;
      } else if (n === 'Glass') {
        m.transparent = true; m.opacity = 0.14; m.depthWrite = false; m.side = THREE.DoubleSide; m.roughness = 0.05; m.metalness = 0.1;
        o.castShadow = false; o.renderOrder = 2;
      } else { m.envMapIntensity = 0.6; }
    });
    group.add(root);
    root.updateMatrixWorld(true);
    // low furniture you can jump onto: a height map of each piece's real top (rays shot straight down at it)
    {
      const rc = new THREE.Raycaster(), down = new THREE.Vector3(0, -1, 0), bb = new THREE.Box3();
      for (const [nm, key] of [['Bed', 'bed'], ['Sofa', 'sofa'], ['Coffee table', 'table'], ['Office chair', 'chair']]) {
        const node = root.getObjectByName(nm) || root.getObjectByName(nm.replace(/ /g, '_')); if (!node) continue;
        bb.setFromObject(node);
        const [ax, ay] = toLocal(bb.max.x, bb.min.z), [bx, by] = toLocal(bb.min.x, bb.max.z);
        const C = 0.05, x0 = Math.min(ax, bx), y0 = Math.min(ay, by), nx = Math.ceil(Math.abs(bx - ax) / C) + 1, ny = Math.ceil(Math.abs(by - ay) / C) + 1;
        const h = new Float32Array(nx * ny).fill(-1);
        for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
          rc.set(toWorld(x0 + i * C, y0 + j * C, (bb.max.y - OY) / S + 0.5), down);
          const hit = rc.intersectObject(node, true)[0];
          if (hit) { const z = lz(hit.point.y); if (z > FL + 0.04) h[j * nx + i] = z; }
        }
        SURF.push({ key, x0, y0, nx, ny, C, h });
      }
    }
    // doors hinge on the face of the wall they swing toward, just inside the opening, so an open door
    // clears the frame posts (Blender local x, y → node x, −z); the back deck stops at the wall's face
    const FIX = { 'Front door': [-0.17, -0.03, 0.937], 'Bedroom door': [0.17, -0.03, 0.924], 'Back door': [0.17, 0.03, 0.937] };
    for (const [n, [dx, dy, k]] of Object.entries(FIX)) {
      const o = root.getObjectByName(n.replace(/ /g, '_')) || root.getObjectByName(n);
      if (o) { o.position.x += dx; o.position.z -= dy; o.scale.z *= k; }
    }
    { const o = root.getObjectByName('Back_deck_&_stairs') || root.getObjectByName('Back deck & stairs'); if (o) o.position.x -= 0.07; }
    root.updateMatrixWorld(true);
    for (const d of doors) {
      d.node = root.getObjectByName(d.name.replace(/ /g, '_')) || root.getObjectByName(d.name);
      if (d.node) { d.node.traverse((o) => { if (o.isMesh) d.meshes.push(o); }); d.hinge = d.node.getWorldPosition(new THREE.Vector3()); }
    }
    H.fire = root.getObjectByName('Fire');
    // a realistic shader fire sized to the fireplace's flames (shown on high graphics instead of the simple flames)
    if (H.fire) {
      root.updateMatrixWorld(true);
      const bb = new THREE.Box3().setFromObject(H.fire), sz = bb.getSize(new THREE.Vector3()), c = bb.getCenter(new THREE.Vector3());
      H.flame = createFlame(Math.max(sz.x, sz.z) * 1.05, Math.max(sz.y, 0.5) * 1.7);
      const base = new THREE.Vector3(c.x, bb.min.y, c.z); group.worldToLocal(base);
      H.flame.group.position.copy(base); H.flame.group.visible = H.hiFx; group.add(H.flame.group);
      H.fire.visible = !H.hiFx;
    }
    { const lamp = root.getObjectByName('Bedside_lamp') || root.getObjectByName('Bedside lamp'); if (lamp) lamp.traverse((m) => { if (m.isMesh) L.lampMeshes.push(m); }); }
    DR.node = root.getObjectByName('Drawer');
    if (DR.node) { DR.z0 = DR.node.position.z; DR.node.traverse((m) => { if (m.isMesh) DR.meshes.push(m); }); }
    L.lever = root.getObjectByName('Light_switch_lever') || root.getObjectByName('Light switch lever');
    ['Light_switch', 'Light switch', 'Light_switch_lever', 'Light switch lever'].forEach((n) => { const o = root.getObjectByName(n); if (o) o.traverse((m) => { if (m.isMesh && !L.switchMeshes.includes(m)) L.switchMeshes.push(m); }); });
    // the bookshelf gets real books (titles on their spines)
    const cabinNode = root.getObjectByName('New_Cabin') || root.getObjectByName('New Cabin');
    if (cabinNode) cabinNode.add(createBooks());
    H.boatNode = root.getObjectByName('Sailboat');
    H.mooring = root.getObjectByName('Mooring_lines_&_fenders') || root.getObjectByName('Mooring lines & fenders');
    // chimney smoke: find the top of the chimney (the highest vertices of its mesh)
    {
      const ch = root.getObjectByName('Fireplace_&_chimney') || root.getObjectByName('Fireplace & chimney');
      if (ch) {
        root.updateMatrixWorld(true);
        const pts = [], v = new THREE.Vector3();
        ch.traverse((m) => { if (!m.isMesh) return; const P = m.geometry.attributes.position; for (let i = 0; i < P.count; i++) pts.push(v.fromBufferAttribute(P, i).applyMatrix4(m.matrixWorld).clone()); });
        if (pts.length) {
          const top = Math.max(...pts.map((q) => q.y)), hi = pts.filter((q) => q.y > top - 0.6), c = new THREE.Vector3();
          hi.forEach((q) => c.add(q)); c.multiplyScalar(1 / hi.length); c.y = top;
          group.worldToLocal(c); smoke.origin.copy(c); smoke.points.visible = true;
        }
      }
    }
    H.root = root; H.ready = true;
    if (H.onBoat && H.boatNode) H.onBoat(H.boatNode, H.mooring);
    H.readyFns.forEach((fn) => fn(root));
  }, undefined, (e) => console.warn('[MEOW] house.glb not loaded', e && e.message));

  const doorOpen = (name) => { const d = byName[name]; return !d || d.k > 0.6; };
  // a thin wall segment from (a..b) along one axis at `at`; true if (X, Y) is within r of it
  const nearSeg = (axis, at, a, b, X, Y, r) => axis === 'Y'
    ? Math.abs(X - at) < r && Y > a - r && Y < b + r
    : Math.abs(Y - at) < r && X > a - r && X < b + r;

  const api = {
    group, doors,
    get ready() { return H.ready; },
    // high graphics: the realistic shader fire instead of the simple flames
    setFireQuality(high) { H.hiFx = !!high; if (H.flame) H.flame.group.visible = H.hiFx; if (H.fire) H.fire.visible = !H.hiFx; },
    holeBox: [1e9, 1e9, 1e9, 1e9], studyBox: [1e9, 1e9, 1e9, 1e9],
    // the boat module hooks in here (its hull is solid when you walk on the water)
    setBoatBlock(fn) { boatBlock = fn; },
    whenReady(fn) { if (H.ready) fn(H.root); else H.readyFns.push(fn); },
    whenBoat(fn) { H.onBoat = fn; if (H.ready && H.boatNode) fn(H.boatNode, H.mooring); },

    // every built surface under (x, z), in world units: [{ y, under }]; under = this replaces the ground
    floors(x, z, out) {
      const [X, Y] = toLocal(x, z);
      if (X < -6 || X > 21 || Y < -4 || Y > 4.5) return out;
      if (ROOMS.some((r) => inR(X, Y, r))) { out.push({ y: wy(FL), under: true }); const t = surfAt(X, Y); if (t > 0) out.push({ y: wy(t), under: false }); }
      else if (DECKS.some((r) => inR(X, Y, r))) out.push({ y: wy(FL), under: false });
      for (const s of STAIRS) if (inR(X, Y, s.r)) out.push({ y: wy(rampZ(s, X)), under: false });
      if (DOCK.some((r) => inR(X, Y, r))) out.push({ y: wy(DOCK_Z), under: false });
      return out;
    },
    // is (x, z) solid for someone whose feet are at `feet`? (pad = extra room, world units)
    blocked(x, z, pad, feet) {
      const [X, Y] = toLocal(x, z);
      if (X < -6.5 || X > 21.5 || Y < -5 || Y > 5.5) return boatBlock ? boatBlock(x, z, feet) : false;
      const f = lz(feet), r = 0.2 + (pad || 0) / S;
      // no crawling under the house, decks, stairs or dock
      if (f < FL - STEP - 0.05 && (ROOMS.some((q) => inR(X, Y, q, r)) || DECKS.some((q) => inR(X, Y, q, r)))) return true;
      for (const s of STAIRS) if (inR(X, Y, s.r, r * 0.5) && f < rampZ(s, X) - STEP - 0.05) return true;
      if (f < DOCK_Z - STEP && DOCK.some((q) => inR(X, Y, q, r))) return true;
      if (f < FL - STEP && X > -3.25 && X < -2.65 && Y > 2.1 && Y < 3.2) return true;          // the AC outdoor unit
      if (f > FL - STEP - 0.05 && f < 4.2) {
        for (const [axis, at, a, b, gaps] of WALLS) {
          if (!nearSeg(axis, at, a, b, X, Y, 0.13 + r)) continue;
          const u = axis === 'Y' ? Y : X;
          const gap = gaps.find(([g0, g1]) => u > g0 + r * 0.6 && u < g1 - r * 0.6);
          if (gap && doorOpen(gap[2])) continue;
          return true;
        }
        if (ROOMS.some((q) => inR(X, Y, q))) {
          if (FURN.some((q) => inR(X, Y, q, r))) return true;
          // the bed, sofa and table: solid only if their top is higher than a small step from your feet (jump onto them)
          const rr = r * 0.75;
          for (const [dx, dy] of [[0, 0], [rr, 0], [-rr, 0], [0, rr], [0, -rr]]) if (surfAt(X + dx, Y + dy) > f + 0.15) return true;
        }
      }
      if (f > -0.6 && f < 3) for (const [axis, at, a, b] of RAILS) if (nearSeg(axis, at, a, b, X, Y, 0.05 + r)) return true;
      return boatBlock ? boatBlock(x, z, feet) : false;
    },
    // where a cat sits at the computer: the chair seat (world position) and which way it faces
    chairSeat() {
      const q = SURF.find((k) => k.key === 'chair'); if (!q) return null;
      const X = q.x0 + q.nx * q.C / 2, Y = q.y0 + q.ny * q.C / 2;
      let seat = FL; for (let d = -0.12; d <= 0.001; d += 0.04) seat = Math.max(seat, surfAt(X, Y + d, 'chair'));
      const p = toWorld(X, Y - 0.04, seat); return { x: p.x, y: p.y, z: p.z };
    },
    // what you're standing on: 'bed', 'sofa', 'table' or null
    surfaceUnder(x, z, feet) {
      const [X, Y] = toLocal(x, z), f = lz(feet);
      for (const q of SURF) { if (q.key === 'chair') continue; const t = surfAt(X, Y, q.key); if (t > 0 && Math.abs(t - f) < 0.08) return q.key; }
      return null;
    },
    // indoors? (no rain or mist in here, warmer colour)
    inside(x, z, feet) {
      const [X, Y] = toLocal(x, z), f = lz(feet);
      return f > FL - 0.5 && f < 4.5 && ROOMS.some((q) => inR(X, Y, q));
    },
    // the door the ray hits (within reach), or null
    pickDoor(ray, reach = 26) {
      let best = null, bd = reach;
      for (const d of doors) {
        if (!d.meshes.length) continue;
        const h = ray.intersectObjects(d.meshes, false)[0];
        if (h && h.distance < bd) { bd = h.distance; best = d; }
      }
      return best;
    },
    nearestDoor(x, z, within = 22) {
      let best = null, bd = within;
      for (const d of doors) { if (!d.hinge) continue; const dd = Math.hypot(d.hinge.x - x, d.hinge.z - z); if (dd < bd) { bd = dd; best = d; } }
      return best;
    },
    toggle(d) { if (!d) return false; d.to = d.to > 0.5 ? 0 : 1; return d.to > 0.5; },
    // online: the same doors / lights / drawer for everyone
    doorIndex(d) { return doors.indexOf(d); },
    setDoor(i, open) { const d = doors[i]; if (!d || (d.to > 0.5) === !!open) return false; d.to = open ? 1 : 0; return true; },
    getState() { return { doors: doors.map((d) => (d.to > 0.5 ? 1 : 0)), light: L.ceiling ? 1 : 0, lamp: L.lamp ? 1 : 0, drawer: DR.to > 0.5 ? 1 : 0 }; },
    setState(st) {
      if (!st) return;
      if (st.doors) st.doors.forEach((v, i) => { if (doors[i]) doors[i].to = v ? 1 : 0; });
      if ('light' in st) L.ceiling = !!st.light;
      if ('lamp' in st) L.lamp = !!st.lamp;
      if ('drawer' in st) DR.to = st.drawer ? 1 : 0;
    },
    // the light switch by the front door
    pickSwitch(ray, reach = 22) { if (!L.switchMeshes.length) return false; const h = ray.intersectObjects(L.switchMeshes, false)[0]; return !!h && h.distance < reach; },
    toggleLight() { L.ceiling = !L.ceiling; return L.ceiling; },
    // the bedside lamp and the nightstand drawer (click them)
    pickLamp(ray, reach = 22) { if (!L.lampMeshes.length) return false; const h = ray.intersectObjects(L.lampMeshes, false)[0]; return !!h && h.distance < reach; },
    toggleLamp() { L.lamp = !L.lamp; return L.lamp; },
    get lampOn() { return L.lamp; },
    pickDrawer(ray, reach = 22) { if (!DR.meshes.length) return false; const h = ray.intersectObjects(DR.meshes, false)[0]; return !!h && h.distance < reach; },
    toggleDrawer() { DR.to = DR.to > 0.5 ? 0 : 1; return DR.to > 0.5; },
    get drawerOpen() { return DR.to > 0.5; },
    get lightOn() { return L.ceiling; },
    setLightShadows(size) {
      SH.size = size;
      SH.lights.forEach((l) => {
        l.castShadow = size > 0;
        if (size > 0) { if (l.shadow.map && l.shadow.mapSize.x !== size) { l.shadow.map.dispose(); l.shadow.map = null; } l.shadow.mapSize.set(size, size); l.shadow.needsUpdate = true; }
      });
    },
    get lightShadowBytes() { return SH.size ? SH.lights.length * 6 * SH.size * SH.size * 4 : 0; },

    update(s, time, now, waterY, feet, dt = 1 / 60) {
      group.visible = s.pCabin > 0.01;
      for (const d of doors) {
        d.k += (d.to - d.k) * (1 - Math.pow(0.0015, dt));
        if (Math.abs(d.to - d.k) < 0.001) d.k = d.to;
        if (d.node) d.node.rotation.y = d.angle * smooth(d.k);
      }
      const on = Math.min(1, s.pCabin || 0);
      const flick = 0.82 + 0.1 * Math.sin(time * 9.1 + Math.sin(time * 3.3) * 2) + 0.08 * Math.sin(time * 23.7);
      fireLight.intensity = 70 * flick * on;
      L.lampK += ((L.lamp ? 1 : 0) - L.lampK) * Math.min(1, dt * 12);
      lampLight.intensity = 22 * on * L.lampK;
      L.lampGlow.forEach((m) => m.color.setScalar(0.22 + 0.78 * L.lampK));
      DR.k += (DR.to - DR.k) * (1 - Math.pow(0.002, dt));
      if (DR.node) DR.node.position.z = DR.z0 - 0.3 * smooth(DR.k);
      // the dock lamp comes on as it gets dark (night, aurora, rain…), off on bright days
      const night = Math.min(1, Math.max(0, ((s.pGlow || 0) - 0.3) / 0.45));
      dockLight.intensity = night * 900 * on * (0.97 + 0.03 * flick);
      glowMats.dock.forEach((m) => { m.emissiveIntensity = 0.05 + night * 3.2; });
      // the hanging light (eases on and off; the switch lever flips)
      L.k += ((L.ceiling ? 1 : 0) - L.k) * (1 - Math.pow(0.0001, dt));
      ceilLight.intensity = L.k * 300 * on;
      glowMats.bulb.forEach((m) => { m.emissiveIntensity = 0.02 + L.k * 4; });
      if (L.lever) L.lever.rotation.z = L.ceiling ? -0.5 : 0.5;
      if (SH.size) {
        SH.t += dt;
        const moving = doors.some((d) => Math.abs(d.to - d.k) > 0.0005) || Math.abs((L.ceiling ? 1 : 0) - L.k) > 0.01;
        if (moving || SH.t > 2) { SH.t = 0; SH.lights.forEach((l) => { if (l.intensity > 0.01) l.shadow.needsUpdate = true; }); }
      }
      smoke.update(dt, time, on, 1);
      if (H.flame && H.hiFx) H.flame.update(dt, time, on);
      if (H.fire) { const k = 0.9 + 0.12 * flick; H.fire.scale.y = k; H.fire.position.y = (FL + 0.2) * (1 - k); }   // flames lick up from their base
    }
  };
  return api;
}
