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
const STILT = { x: 108.4, z: -113.8, half: 0.405 };     // a stilt in the middle under the house

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
const PROFILE = [[0, 0.135], [0.03, 0.15], [0.12, 0.155], [0.3, 0.14], [0.42, 0.148], [0.6, 0.15], [0.7, 0.135], [0.8, 0.095], [0.86, 0.065], [0.9, 0.06], [0.9, 0.0]];
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

export function createItems({ scene, terrain, physics, player, camera, cabin, scenes, water, online, toast }) {
  // the snack bag, leaning on the stilt
  const bag = buildBag(); scene.add(bag);
  const placeBag = () => {
    const gy = terrain.surfaceAt(STILT.x, STILT.z - STILT.half - 0.3);
    bag.position.set(STILT.x + 0.05, gy + 0.38, STILT.z - STILT.half - 0.17);
    bag.rotation.set(0.22, Math.PI, 0.04, 'XYZ');   // its front faces out, its top leaning back on the post
  };
  placeBag();

  // the bottle
  const B = { kind: 'water', obj: null, pos: TABLE.clone(), lying: false, held: '', where: 'table', t: 0, pop: null, owner: true };
  const holderMesh = new THREE.Group(); camera.add(holderMesh); holderMesh.position.set(0.05, -0.42, -1.05);
  if (!camera.parent) scene.add(camera);
  const setObj = () => {
    if (B.obj) { scene.remove(B.obj); B.obj = null; }
    B.obj = buildBottle(B.kind); B.obj.traverse((m) => { if (m.isMesh) m.userData.item = true; }); scene.add(B.obj); place();
  };
  const place = () => {
    if (!B.obj) return;
    B.obj.visible = !B.held;
    B.obj.position.copy(B.pos);
    if (B.lying) { B.obj.rotation.set(0, B.yaw || 0, Math.PI / 2); B.obj.position.y += 0.15; } else { B.obj.rotation.set(0, B.yaw || 0, 0); B.obj.position.y += H * 0.47; }
  };
  setObj();
  setHeldMaker((k) => buildBottle(k));
  // what you carry in first person: the bottle sideways across your view, low
  let fpKind = '';
  const showFP = (kind, firstPerson) => {
    const want = firstPerson ? kind : '';
    if (want === fpKind) return; fpKind = want;
    holderMesh.clear();
    if (want) { const m = buildBottle(want); m.rotation.set(0.15, 0.2, Math.PI / 2); m.traverse((o) => { if (o.material) { o.material = o.material.clone(); o.material.depthTest = true; } }); holderMesh.add(m); }
  };

  const ray = new THREE.Raycaster();
  const sync = () => online.emit('item', { k: B.kind, p: [B.pos.x, B.pos.y, B.pos.z], l: B.lying ? 1 : 0, h: B.held, w: B.where, y: B.yaw || 0 });
  online.on('item', (v) => {
    if (!v) return;
    const kindChanged = v.k !== B.kind; B.kind = v.k; B.pos.set(v.p[0], v.p[1], v.p[2]); B.lying = !!v.l; B.held = v.h || ''; B.where = v.w || ''; B.yaw = v.y || 0; B.t = 0; B.owner = false;
    if (kindChanged) setObj(); else place();
  });
  const me = () => online.id || 'me';
  const iHold = () => B.held === me();

  const api = {
    get heldKind() { return iHold() ? B.kind : ''; },
    // aiming at the bottle, close enough to pick it up?
    hover(r, ps) {
      if (!B.obj || B.held || !B.obj.visible) return false;
      if (Math.hypot(ps.x - B.obj.position.x, ps.z - B.obj.position.z) > 7 || Math.abs(ps.feet - B.obj.position.y) > 6) return false;
      ray.ray.copy(r.ray);
      return ray.intersectObject(B.obj, true).length > 0;
    },
    click(r, ps) {
      if (!api.hover(r, ps)) return false;
      if (B.pop) return false;
      B.held = me(); B.where = 'mouth'; B.t = 0; B.owner = true; place(); sync();
      const S2 = window.MEOW_SOUND; if (S2 && S2.click) S2.click();
      return true;
    },
    // Q: put it down where you stand (on the ice, in the fire, on the floor, anywhere)
    drop(ps, yaw) {
      if (!iHold()) return false;
      const fx = -Math.sin(yaw), fz = -Math.cos(yaw);
      let x = ps.x + fx * 1.3, z = ps.z + fz * 1.3;
      B.yaw = yaw + Math.PI / 2; B.lying = true; B.owner = true; B.t = 0;
      // into the fire?
      if (Math.hypot(x - FIRE.x, z - FIRE.z) < 3.4 && Math.abs(ps.feet - 8.88) < 1.5) { B.pos.copy(FIRE); B.where = 'fire'; }
      else {
        let y = physics.floor(x, z, ps.feet + 1).y;
        const wy = water.position.y;
        if ((scenes.cur.ice || 0) > 0.5 && terrain.surfaceAt(x, z) < wy - 0.25 && ps.feet < wy + 1) { y = wy + 0.02; B.where = 'ice'; }
        else if (terrain.surfaceAt(x, z) < wy - 0.25 && y <= wy + 0.05) { y = wy; B.where = 'water'; }
        else B.where = 'ground';
        B.pos.set(x, y, z);
      }
      B.held = ''; place(); sync();
      if (B.where === 'ice' && B.kind === 'water') toast && toast('🧊 Leave it on the ice…');
      if (B.where === 'fire' && B.kind === 'ice') toast && toast('🔥 Into the fire…');
      return true;
    },
    update(dt, time, ps, firstPerson) {
      showFP(iHold() ? B.kind : '', firstPerson);
      if (!B.obj) return;
      // the tea popping out of the fire: a little arc onto the floor
      if (B.pop) {
        B.pop.t += dt / 0.9; const k = Math.min(1, B.pop.t);
        B.obj.position.lerpVectors(B.pop.from, B.pop.to, k); B.obj.position.y += Math.sin(Math.PI * k) * 3.2 + 0.15;
        B.obj.rotation.z = Math.PI / 2 + k * 6.3;
        if (k >= 1) { B.pop = null; B.pos.copy(FIRE_OUT); B.where = 'ground'; B.lying = true; place(); if (B.owner) sync(); }
        return;
      }
      if (B.held) return;
      // the water bottle freezing on the ice
      if (B.where === 'ice' && B.kind === 'water' && (scenes.cur.ice || 0) > 0.5) {
        B.t += dt;
        if (B.t > 10 && B.owner) { B.kind = 'ice'; B.t = 0; setObj(); sync(); toast && toast('🧊 It froze into an iced bottle!'); const S2 = window.MEOW_SOUND; if (S2 && S2.click) S2.click(); }
      } else if (B.where === 'fire' && B.kind === 'ice') {
        // in the flames: it shivers and glows, then pops out as tea
        B.t += dt;
        B.obj.position.x = B.pos.x + Math.sin(time * 40) * 0.03 * Math.min(1, B.t);
        if (B.t > 5 && B.owner) {
          B.kind = 'tea'; B.t = 0; setObj(); B.pop = { t: 0, from: FIRE.clone(), to: FIRE_OUT.clone() };
          sync(); toast && toast('🍋 冰红茶!'); const S2 = window.MEOW_SOUND; if (S2 && S2.whoosh) S2.whoosh();
        }
      } else if (B.where === 'water') {
        B.obj.position.y = B.pos.y + 0.12 + Math.sin(time * 1.6) * 0.04;   // bobbing
      } else B.t = 0;
    },
    // someone joined: tell them where the bottle is
    share() { if (B.owner) sync(); }
  };
  return api;
}
