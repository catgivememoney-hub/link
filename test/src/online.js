/* MEOW (test copy) — play together online.
   Peer-to-peer (WebRTC) through PeerJS's free public broker: the site stays on GitHub Pages, no server of our own.
   One person presses "Host" and gets a room code; friends type that code and press "Join".
   Everyone is a cat: a body with a head, ears, tail and four legs that walk, and a name tag.
   The host relays everybody's position to everybody (a star), ~15 times a second; others are smoothed in between. */
import * as THREE from 'three';
import { GLTFLoader } from 'three-addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three-addons/libs/meshopt_decoder.module.js';
import * as SkeletonUtils from 'three-addons/utils/SkeletonUtils.js';
import { encodePaint, decodePaint, paintableGeometry, applyPaint, bakeModelSpace, openPaintEditor, PAINT_VS_HEAD, PAINT_VS_BODY, PAINT_FS_HEAD, PAINT_FS_BODY } from './catpaint.js';

const PEERJS = 'https://unpkg.com/peerjs@1.5.4/dist/peerjs.min.js';
const PREFIX = 'meow-cabin-';
// the cat skins (Settings → Play together). The last five are modelled on Jeffy's cat photos:
// stripe = tabby stripes, back = darker back/cap, belly = chest/belly/muzzle/paws, iris = eye colour, extras = tongue, big eyes, boots, purse
export const SKINS = [
  { name: 'El Gato', color: '#e29b56', stripe: '#bb6529', stripeAmt: 0.6, belly: '#f8f0e5', bigEyes: true },
  // realistic cat: "3d modelling my cat: Fripouille" by guillaume bolis (Sketchfab, CC BY 4.0), re-rigged for MEOW
  { name: 'Fripouille', color: '#c47a3f', model: 'frip', iris: '#8d9443' }
];

const loadPeer = () => new Promise((res, rej) => {
  if (window.Peer) return res(window.Peer);
  const s = document.createElement('script'); s.src = PEERJS; s.onload = () => res(window.Peer); s.onerror = () => rej(new Error('PeerJS failed to load'));
  document.head.appendChild(s);
});

/* ---------- a cat body (about as tall as your eye height) ---------- */
// fur with tabby stripes and a darker back, worked out from each part's own shape (no textures to load)
function furMat(color, sk, axis, freq, gate, backAmt = 1) {
  const m = new THREE.MeshStandardMaterial({ color, roughness: 0.95 });
  const amt = sk.stripe ? (sk.stripeAmt ?? 0.8) : 0, back = sk.back ? (sk.backAmt ?? 0.8) * backAmt : 0;
  if (!amt && !back) return m;
  const u = { uStripe: { value: new THREE.Color(sk.stripe || color) }, uAmt: { value: amt }, uAxis: { value: axis }, uFreq: { value: freq },
    uGate: { value: new THREE.Vector2(gate[0], gate[1]) }, uBack: { value: new THREE.Color(sk.back || color) }, uBackAmt: { value: back } };
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, u);
    sh.vertexShader = 'varying vec3 vFurP;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n  vFurP = position;');
    sh.fragmentShader = 'varying vec3 vFurP;\nuniform vec3 uStripe, uAxis, uBack;\nuniform float uAmt, uFreq, uBackAmt;\nuniform vec2 uGate;\n' +
      sh.fragmentShader.replace('#include <color_fragment>', `#include <color_fragment>
      {
        vec3 p = vFurP;
        float t = dot(p, uAxis) * uFreq + sin(p.x * 4.7 + p.y * 3.1) * 0.9 + sin(p.z * 6.3 - p.x * 2.0) * 0.5;
        float s = smoothstep(0.3, 0.75, sin(t));
        diffuseColor.rgb = mix(diffuseColor.rgb, uBack, smoothstep(0.1, 0.9, p.y) * uBackAmt);
        diffuseColor.rgb = mix(diffuseColor.rgb, uStripe, s * smoothstep(uGate.x, uGate.y, p.y) * uAmt);
      }`);
  };
  m.customProgramCacheKey = () => 'meow-fur';
  return m;
}

function buildSimpleCat(skin, name) {
  const sk = typeof skin === 'string' ? { color: skin } : (skin || { color: '#999' });
  const color = sk.color;
  const g = new THREE.Group();
  const bodyCol = sk.bodyColor || color;
  const fur = furMat(bodyCol, sk.bodyColor ? {} : sk, new THREE.Vector3(0, 0, 1), 14, [-0.25, 0.35]);   // body: rings along the spine
  const headFur = furMat(color, sk, new THREE.Vector3(1, 0, 0), 17, [0.2, 0.55]);                      // head: lines up the forehead
  const legFur = furMat(bodyCol, sk.bodyColor ? {} : sk, new THREE.Vector3(0, 1, 0), 9, [-9, -8], 0.35);  // legs: rings
  const pale = new THREE.MeshStandardMaterial({ color: sk.belly || new THREE.Color(color).lerp(new THREE.Color('#ffffff'), 0.55), roughness: 0.95 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x1b1714, roughness: sk.iris || sk.bigEyes ? 0.15 : 0.5 });
  const pink = new THREE.MeshStandardMaterial({ color: 0xe3a1ae, roughness: 0.7 });
  const S = (r, w, h) => new THREE.SphereGeometry(r, w || 24, h || 18);
  const mesh = (geo, m, x = 0, y = 0, z = 0, sx = 1, sy = sx, sz = sx) => { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); o.scale.set(sx, sy, sz); o.castShadow = true; return o; };
  // body (cat faces -z, like the camera)
  const body = new THREE.Group(); body.position.y = 2.7; g.add(body);
  const fl = sk.fluffy ? 1.18 : 1;
  body.add(mesh(S(1), fur, 0, 0, 0, 1.15 * fl, 1.05 * fl, 2.1));
  if (sk.fluffy) [[0, 0.15, -1.75, 0.95], [-0.75, -0.2, -1.2, 0.7], [0.75, -0.2, -1.2, 0.7], [0, 0.6, 1.5, 0.8]].forEach(([x, y, z, r]) => body.add(mesh(S(r), fur, x, y, z, 1, 0.9, 1)));   // fluffy ruff
  body.add(mesh(S(1), pale, 0, -0.35, -0.3, 0.9, 0.75, 1.6));   // pale belly
  // head
  const head = new THREE.Group(); head.position.set(0, 1.55, -2.0); body.add(head);
  head.add(mesh(S(1), headFur, 0, 0, 0, 1.15, 1.0, 1.0));
  head.add(mesh(S(0.55), pale, 0, -0.35, -0.72, 1.0, 0.7, 0.7));   // muzzle
  head.add(mesh(S(0.12), pink, 0, -0.12, -1.08, 1.2, 0.8, 0.8));    // nose
  const white = new THREE.MeshBasicMaterial({ color: 0xffffff });
  [-1, 1].forEach((k) => {
    if (sk.bigEyes) {   // huge round pleading eyes
      head.add(mesh(S(0.26), dark, 0.44 * k, 0.15, -0.86, 1, 1.1, 0.6));
      head.add(mesh(S(0.065, 10, 8), white, 0.4 * k + 0.07, 0.27, -1.0));
      head.add(mesh(S(0.03, 8, 6), white, 0.47 * k - 0.05, 0.05, -1.0));
    } else if (sk.iris) {   // coloured eyes with a pupil
      head.add(mesh(S(0.17), new THREE.MeshStandardMaterial({ color: sk.iris, roughness: 0.15 }), 0.42 * k, 0.18, -0.86, 1, 1.1, 0.6));
      head.add(mesh(S(0.09), dark, 0.42 * k, 0.18, -0.93, 0.75, 1.35, 0.5));
      head.add(mesh(S(0.035, 8, 6), white, 0.42 * k + 0.05, 0.27, -0.97));
    } else head.add(mesh(S(0.16), dark, 0.42 * k, 0.18, -0.86, 1, 1.15, 0.6));   // eyes
    const ear = mesh(new THREE.ConeGeometry(0.42, 0.85, 12), headFur, 0.6 * k, 0.9, -0.05); ear.rotation.z = -0.3 * k; head.add(ear);
    const inner = mesh(new THREE.ConeGeometry(0.25, 0.55, 10), pink, 0.6 * k, 0.86, -0.17); inner.rotation.z = -0.3 * k; head.add(inner);
  });
  if (sk.tongue) { const t = mesh(S(0.21), new THREE.MeshStandardMaterial({ color: 0xe8728a, roughness: 0.35 }), 0, -0.72, -1.08, 1.0, 0.42, 1.25); t.rotation.x = 0.75; head.add(t); }   // blep
  if (sk.purse) {   // the pink crossbody bag
    const pm = new THREE.MeshStandardMaterial({ color: sk.purse, roughness: 0.55 });
    const strap = mesh(new THREE.TorusGeometry(1.0, 0.07, 8, 40), pm, 0, 0.05, -1.05, 1.2 * fl, 1.08 * fl, 1); strap.rotation.z = 0.45; body.add(strap);
    const bag = mesh(new THREE.BoxGeometry(0.5, 0.62, 0.95), pm, 1.32 * fl, -0.55, -0.9); bag.rotation.z = 0.12; body.add(bag);
    body.add(mesh(S(0.07, 8, 6), new THREE.MeshStandardMaterial({ color: 0xd9b45a, metalness: 0.8, roughness: 0.3 }), 1.6 * fl, -0.45, -0.9));
  }
  // legs (pivot at the hip / shoulder)
  const legs = [];
  [[-0.6, -1.3], [0.6, -1.3], [-0.6, 1.3], [0.6, 1.3]].forEach(([x, z]) => {
    const pivot = new THREE.Group(); pivot.position.set(x, -0.4, z); body.add(pivot);
    pivot.add(mesh(new THREE.CylinderGeometry(0.42, 0.34, 1.9, 14), legFur, 0, -0.95, 0));
    if (sk.boots) {   // little lace-up boots
      const bm = new THREE.MeshStandardMaterial({ color: sk.boots, roughness: 0.8 });
      pivot.add(mesh(new THREE.CylinderGeometry(0.44, 0.44, 0.75, 14), bm, 0, -1.55, 0));
      pivot.add(mesh(S(0.42), bm, 0, -1.9, -0.18, 1.1, 0.55, 1.4));
      pivot.add(mesh(new THREE.CylinderGeometry(0.47, 0.47, 0.1, 14), new THREE.MeshStandardMaterial({ color: 0x5a3d24, roughness: 0.9 }), 0, -2.08, -0.12, 1, 1, 1.35));   // sole
      [-1.35, -1.6].forEach((y) => pivot.add(mesh(new THREE.BoxGeometry(0.34, 0.04, 0.04), new THREE.MeshStandardMaterial({ color: 0x6b4a2c }), 0, y, -0.45)));   // laces
    } else pivot.add(mesh(S(0.36), pale, 0, -1.9, -0.1, 1.15, 0.6, 1.3));   // paw
    legs.push(pivot);
  });
  // tail: a curve of segments
  const tail = new THREE.Group(); tail.position.set(0, 0.4, 2.0); body.add(tail);
  const tailM = new THREE.MeshStandardMaterial({ color: bodyCol, roughness: 0.95 }), stripeM = new THREE.MeshStandardMaterial({ color: new THREE.Color(sk.stripe || color).lerp(new THREE.Color(color), 1 - (sk.stripeAmt ?? 0.8)), roughness: 0.95 });
  const segs = []; let parent = tail;
  for (let i = 0; i < 7; i++) { const sg = new THREE.Group(); sg.position.set(0, i ? 0.45 : 0, 0); parent.add(sg); sg.add(mesh(S((0.22 - i * 0.015) * fl, 10, 8), i === 6 ? (sk.stripe && !sk.bodyColor ? stripeM : pale) : (sk.stripe && !sk.bodyColor && i % 2 ? stripeM : tailM), 0, 0.22, 0, 1, 1.6, 1)); segs.push(sg); parent = sg; }
  // name tag
  const tag = (() => {
    const c = document.createElement('canvas'); c.width = 256; c.height = 64; const x = c.getContext('2d');
    x.fillStyle = 'rgba(20,26,32,0.6)'; x.beginPath(); x.roundRect(4, 8, 248, 48, 24); x.fill();
    x.fillStyle = '#fff'; x.font = '600 28px system-ui, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(name.slice(0, 14), 128, 33);
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), depthTest: false, transparent: true }));
    sp.scale.set(4, 1, 1); sp.position.y = 6.8; sp.renderOrder = 10; return sp;
  })();
  g.add(tag); if (!name) tag.visible = false;
  // their flashlight (a beam from the head where they look) and their lantern
  const torch = new THREE.SpotLight(0xffeedd, 0, 280, THREE.MathUtils.degToRad(30), 0.7, 1.35);
  torch.position.set(0.6, 6.4, -1.2); g.add(torch); g.add(torch.target);
  const lamp = new THREE.PointLight(0xffb060, 0, 60, 1.6); lamp.position.set(0.9, 4.6, -1.6); g.add(lamp);
  let phase = 0, lt = 0, sit = 0;
  return {
    group: g,
    animate(dt, speed, time) {
      const k = Math.min(1, speed / 25);
      phase += dt * (2 + speed * 0.28);
      legs.forEach((l, i) => { l.rotation.x = Math.sin(phase + (i === 0 || i === 3 ? 0 : Math.PI)) * 0.6 * k; });
      body.position.y = 2.7 + Math.abs(Math.sin(phase)) * 0.15 * k;
      head.rotation.x = Math.sin(time * 0.7) * 0.05;
      segs.forEach((s, i) => { s.rotation.x = 0.35 + 0.05 * i; s.rotation.z = Math.sin(time * 2.2 - i * 0.5) * (0.12 + 0.2 * (1 - k)); });
    },
    setLook(pitch, yaw) {
      head.rotation.x = -pitch * 0.6;
      // the beam points where they look (pitch up/down, straight ahead of the body)
      torch.target.position.set(0.6, 6.4 + Math.sin(pitch) * 50, -1.2 - Math.cos(pitch) * 50);
    },
    setLight(state, t) { lt += ((state === 1 ? 1 : 0) - lt) * 0.2; torch.intensity = lt * 520; lamp.intensity = (state === 2 ? 900 * (0.92 + 0.08 * Math.sin(t * 13)) : 0); },
    setSit(on) { sit += ((on ? 1 : 0) - sit) * 0.15; legs.forEach((l, i) => { l.rotation.x = (i < 2 ? -1.2 : 1.1) * sit + l.rotation.x * (1 - sit); }); body.position.y -= sit * 1.6; }
  };
}

/* ---------- the modelled cat (built in Blender: test/assets/cat_low|mid|high.glb) ----------
   One skinned mesh + 23 bones. The fur pattern is painted from per-vertex masks baked in Blender:
   colour R = pale (belly, chest, muzzle, paws, tail tip), G = where stripes may go, B = darker back / ears, A = pink (nose, inner ears);
   uv.x = stripe position along each body part. So every skin works on every detail level with no textures. */
const CAT_FILES = (m, d) => `test/assets/${m === 'frip' ? 'frip' : 'cat'}_${d}.glb`;
// graphics level → model detail: None/Fast/Default = low (2.6k triangles), Balanced/Fancy = mid (16k), Best/Extreme = very high (110k)
const detailFor = (lv) => (lv === 'best' || lv === 'extreme') ? 'high' : (lv === 'balanced' || lv === 'fancy' || lv === 'custom') ? 'mid' : 'low';
const catModels = {}, catLoading = {};
let wantDetail = (() => { try { return detailFor(localStorage.getItem('meow.gfx') || 'none'); } catch { return 'low'; } })();
const loadCatModel = (d, model = 'cat') => {
  const key = model + ':' + d;
  if (catModels[key] || catLoading[key]) return;
  catLoading[key] = true;
  new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).load(CAT_FILES(model, d), (g) => {
    g.scene.traverse((o) => {
      if (!o.isSkinnedMesh || model !== 'cat') return;
      const geo = o.geometry;   // rename so three.js doesn't treat them as ordinary vertex colours / texture coords
      if (geo.getAttribute('color')) { geo.setAttribute('furMask', geo.getAttribute('color')); geo.deleteAttribute('color'); }
      if (geo.getAttribute('uv')) { geo.setAttribute('furT', geo.getAttribute('uv')); geo.deleteAttribute('uv'); }
    });
    catModels[key] = g.scene; catLoading[key] = false;
    dispatchEvent(new CustomEvent('meow:catmodel', { detail: d }));
  }, undefined, (e) => { catLoading[key] = false; console.warn('[MEOW] cat model not loaded', key, e && e.message); });
};
const catModel = (model = 'cat') => { const t = catModels[model + ':' + wantDetail]; if (!t) loadCatModel(wantDetail, model); return t || null; };

// a cat skin in another colour: stripes follow as a darker shade of it
const withColor = (sk, col) => (!col || col === sk.color) ? sk : { ...sk, color: col, stripe: sk.stripe ? '#' + new THREE.Color(col).multiplyScalar(0.62).getHexString() : sk.stripe };

function furSkinMat(sk) {
  const color = new THREE.Color(sk.color);
  const m = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.92 });
  const u = {
    uFur: { value: color }, uBody: { value: new THREE.Color(sk.bodyColor || sk.color) }, uBodyOn: { value: sk.bodyColor ? 1 : 0 },
    uPale: { value: new THREE.Color(sk.belly || new THREE.Color(sk.color).lerp(new THREE.Color('#ffffff'), 0.55)) },
    uStripe: { value: new THREE.Color(sk.stripe || sk.color) }, uAmt: { value: sk.stripe ? (sk.stripeAmt ?? 0.8) : 0 },
    uBack: { value: new THREE.Color(sk.back || sk.color) }, uBackAmt: { value: sk.back ? (sk.backAmt ?? 0.8) : 0 },
    uPink: { value: new THREE.Color(0xe3a1ae) }, uInflate: { value: sk.fluffy ? 0.2 : 0 }
  };
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, u);
    sh.vertexShader = PAINT_VS_HEAD + 'attribute vec4 furMask;\nattribute vec2 furT;\nuniform float uInflate;\nvarying vec4 vMask;\nvarying float vT;\nvarying vec3 vFurP;\n' +
      sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
        vMask = furMask; vT = furT.x * 100.0 - 50.0; vFurP = position; ` + PAINT_VS_BODY + `
        float headK = 1.0 - smoothstep(1.2, 1.6, length((position - vec3(0.0, 4.02, -2.2)) / vec3(1.3, 1.2, 1.25)));
        transformed += normal * uInflate * (1.0 - headK) * smoothstep(0.7, 1.4, position.y);`);
    sh.fragmentShader = PAINT_FS_HEAD + 'uniform vec3 uFur, uBody, uPale, uStripe, uBack, uPink;\nuniform float uBodyOn, uAmt, uBackAmt;\nvarying vec4 vMask;\nvarying float vT;\nvarying vec3 vFurP;\n' +
      sh.fragmentShader.replace('#include <color_fragment>', `#include <color_fragment>
      {
        vec3 p = vFurP;
        float headK = 1.0 - smoothstep(1.15, 1.35, length((p - vec3(0.0, 4.02, -2.2)) / vec3(1.3, 1.2, 1.25)));
        vec3 c = mix(uBody, uFur, max(1.0 - uBodyOn, headK));
        c = mix(c, uBack, vMask.b * uBackAmt);
        float t = vT + sin(p.x * 3.1 + p.y * 2.3) * 0.9 + sin(p.z * 4.1 - p.x * 1.7) * 0.5;
        float s = smoothstep(0.3, 0.75, sin(t));
        c = mix(c, uStripe, s * vMask.g * uAmt * max(1.0 - uBodyOn, headK));
        c = mix(c, uPale, clamp(vMask.r, 0.0, 1.0));
        c = mix(c, uPink, vMask.a);
        diffuseColor.rgb *= c;
        ` + PAINT_FS_BODY + `
      }`);
  };
  m.customProgramCacheKey = () => 'meow-catskin';
  m.userData.u = u;
  return m;
}

// bind-pose points on the model (three.js coords: x right, y up, -z forward)
const SPOTS = {
  cat: { eye: [new THREE.Vector3(0.576, 4.276, -2.644), new THREE.Vector3(-0.576, 4.276, -2.644)], eyeN: [new THREE.Vector3(0.62, 0.35, -0.70), new THREE.Vector3(-0.62, 0.35, -0.70)], mouth: new THREE.Vector3(0, 3.62, -2.96), eyeR: 1, inset: 0.05 },
  frip: { eye: [new THREE.Vector3(0.262, 4.49, -4.6), new THREE.Vector3(-0.262, 4.49, -4.6)], eyeN: [new THREE.Vector3(0.4, 0.08, -0.91), new THREE.Vector3(-0.4, 0.08, -0.91)], mouth: new THREE.Vector3(0, 4.26, -4.97), eyeR: 1, inset: 0.035 }
};

// a realistic cat eye (for Fripouille): painted iris with fibres, a dark rim, a rounded pupil, glossy and set into the head
const irisTex = (() => {
  const cache = new Map();
  return (col) => {
    if (cache.has(col)) return cache.get(col);
    const S = 256, c = document.createElement('canvas'); c.width = c.height = S; const x = c.getContext('2d'), m = S / 2;
    const base = new THREE.Color(col), inner = base.clone().lerp(new THREE.Color('#cdb56a'), 0.4), outer = base.clone().multiplyScalar(0.5);
    x.fillStyle = '#2a2116'; x.fillRect(0, 0, S, S);
    let g = x.createRadialGradient(m, m, 10, m, m, m);
    g.addColorStop(0, '#' + inner.getHexString()); g.addColorStop(0.55, '#' + base.getHexString()); g.addColorStop(0.9, '#' + outer.getHexString()); g.addColorStop(1, '#1b140c');
    x.fillStyle = g; x.beginPath(); x.arc(m, m, m - 2, 0, Math.PI * 2); x.fill();
    // fibres
    for (let i = 0; i < 260; i++) {
      const a = Math.random() * Math.PI * 2, r0 = 30 + Math.random() * 20, r1 = 80 + Math.random() * 40;
      x.strokeStyle = Math.random() < 0.5 ? 'rgba(255,240,170,0.13)' : 'rgba(60,40,10,0.16)'; x.lineWidth = 1 + Math.random() * 1.5;
      x.beginPath(); x.moveTo(m + Math.cos(a) * r0, m + Math.sin(a) * r0); x.lineTo(m + Math.cos(a + (Math.random() - 0.5) * 0.08) * r1, m + Math.sin(a) * r1); x.stroke();
    }
    // a soft ring around the pupil and the pupil itself (a calm, rounded oval)
    g = x.createRadialGradient(m, m, 30, m, m, 70); g.addColorStop(0, 'rgba(110,80,20,0.55)'); g.addColorStop(1, 'rgba(110,80,20,0)');
    x.fillStyle = g; x.beginPath(); x.arc(m, m, 70, 0, Math.PI * 2); x.fill();
    x.fillStyle = '#050403'; x.beginPath(); x.ellipse(m, m, 34, 50, 0, 0, Math.PI * 2); x.fill();
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; cache.set(col, t); return t;
  };
})();
function realEye(col) {
  const e = new THREE.Group();
  const geo = new THREE.SphereGeometry(1, 40, 28);
  // map the iris picture straight on from the front (+z)
  const p = geo.attributes.position, uv = geo.attributes.uv;
  for (let i = 0; i < p.count; i++) uv.setXY(i, p.getX(i) * 0.5 + 0.5, p.getY(i) * 0.5 + 0.5);
  const ball = new THREE.Mesh(geo, new THREE.MeshPhysicalMaterial({ map: irisTex(col), roughness: 0.35, clearcoat: 1, clearcoatRoughness: 0.04, envMapIntensity: 1.2 }));
  ball.scale.set(1, 0.9, 0.42); e.add(ball);
  // a dark eyelid rim, slightly almond-shaped
  const lid = new THREE.Mesh(new THREE.TorusGeometry(1.0, 0.14, 10, 40), new THREE.MeshStandardMaterial({ color: 0x24170f, roughness: 0.8 }));
  lid.scale.set(1.04, 0.86, 0.6); lid.position.z = 0.02; e.add(lid);
  // a small window highlight
  const hl = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 8), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.7 }));
  hl.scale.set(1, 1, 0.3); hl.position.set(0.32, 0.34, 0.42); e.add(hl);
  e.scale.setScalar(0.13);
  return e;
}

function buildModelCat(tpl, sk, name) {
  const g = new THREE.Group();
  const body = new THREE.Group(); g.add(body);
  const root = SkeletonUtils.clone(tpl); body.add(root);
  const real = sk.model === 'frip', SP = SPOTS[real ? 'frip' : 'cat'];
  let fur = real ? null : furSkinMat(sk), tintU = null;
  const tintMat = (base) => {   // recolour the orange fur of the realistic cat, keep its white parts white
    const m = base.clone(); tintU = { uTint: { value: new THREE.Color(sk.color) }, uTintOn: { value: sk.color.toLowerCase() === '#c47a3f' ? 0 : 1 } };
    m.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, tintU);
      sh.vertexShader = PAINT_VS_HEAD + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n' + PAINT_VS_BODY);
      sh.fragmentShader = PAINT_FS_HEAD + 'uniform vec3 uTint;\nuniform float uTintOn;\n' + sh.fragmentShader.replace('#include <map_fragment>', `#include <map_fragment>
        {
          vec3 c = diffuseColor.rgb; float mx = max(c.r, max(c.g, c.b)), mn = min(c.r, min(c.g, c.b));
          float sat = (mx - mn) / max(mx, 1e-4), lum = dot(c, vec3(0.299, 0.587, 0.114));
          vec3 orig = vec3(0.77, 0.48, 0.25);   // the model's own fur colour (linear-ish)
          vec3 re = uTint * lum / dot(orig, vec3(0.299, 0.587, 0.114));
          diffuseColor.rgb = mix(c, re, smoothstep(0.18, 0.45, sat) * uTintOn);
          ` + PAINT_FS_BODY + `
        }`);
    };
    m.customProgramCacheKey = () => 'meow-catrealtint'; return m;
  };
  let pmesh = null;
  root.traverse((o) => { if (o.isSkinnedMesh) { o.geometry = paintableGeometry(o.geometry); pmesh = o; } if (o.isMesh) { if (fur) o.material = fur; else if (real) { o.material = tintMat(o.material); fur = o.material; } o.castShadow = true; o.receiveShadow = true; o.frustumCulled = false; } });
  g.updateMatrixWorld(true);
  if (pmesh) bakeModelSpace(pmesh, root);   // where each vertex sits on the cat (for paint)
  const bones = {}; root.traverse((o) => { if (o.isBone) bones[o.name] = o; });
  // paw pads (toe beans), painted onto the underside of each paw so they follow its shape; your own paint goes on top
  const padStamps = [];
  if (pmesh) {
    const P = pmesh.geometry.userData.grid.pos, n = P.length / 3;
    let minY = Infinity; for (let i = 0; i < n; i++) minY = Math.min(minY, P[i * 3 + 1]);
    let midZ = 0, cnt = 0; for (let i = 0; i < n; i++) if (P[i * 3 + 1] < minY + 0.5) { midZ += P[i * 3 + 2]; cnt++; } midZ /= Math.max(1, cnt);
    const col = new THREE.Color(sk.pads || (real ? '#d99aa3' : '#eba7b2')), c = [Math.round(col.r * 255), Math.round(col.g * 255), Math.round(col.b * 255)];
    const down = [0, -1, 0];
    [[1, true], [-1, true], [1, false], [-1, false]].forEach(([sx, front]) => {
      const pts = []; for (let i = 0; i < n; i++) {
        const x = P[i * 3], y = P[i * 3 + 1], z = P[i * 3 + 2];
        if (y < minY + 0.12 && Math.sign(x) === sx && (z < midZ) === front) pts.push([x, y, z]);
      }
      if (pts.length < 3) return;
      let cx = 0, cz = 0; pts.forEach((q) => { cx += q[0]; cz += q[2]; }); cx /= pts.length; cz /= pts.length;
      let wx = 0, wz = 0; pts.forEach((q) => { wx = Math.max(wx, Math.abs(q[0] - cx)); wz = Math.max(wz, Math.abs(q[2] - cz)); });
      const W = Math.max(0.1, Math.min(wx, wz)), y0 = minY + 0.03;
      // the big heel pad (a few dabs side by side), toward the back of the paw (+z)
      [-0.35, 0, 0.35].forEach((t) => padStamps.push({ p: [cx + t * W * 0.5, y0, cz + W * 0.32], n: down, r: W * 0.5, c, a: 1, k: 7 }));
      // four toe beans in an arc toward the front (-z)
      [-1.5, -0.5, 0.5, 1.5].forEach((t) => padStamps.push({ p: [cx + t * W * 0.37, y0, cz - W * 0.52 + Math.abs(t) * W * 0.12], n: down, r: W * 0.26, c, a: 1, k: 7 }));
    });
  }
  const S = (r, w, h) => new THREE.SphereGeometry(r, w || 24, h || 18);
  const mesh = (geo, m) => { const o = new THREE.Mesh(geo, m); o.castShadow = true; return o; };
  const at = (o, p, sc) => { if (p) o.position.copy(p); if (sc) o.scale.copy(sc); return o; };
  // put an object at a bind-pose world spot, then hang it on a bone (it follows the bone from then on)
  const pin = (bone, o, pos, look) => { o.position.copy(pos); if (look) o.lookAt(pos.clone().add(look)); g.add(o); o.updateMatrixWorld(true); bones[bone].attach(o); return o; };
  const dark = new THREE.MeshStandardMaterial({ color: 0x1b1714, roughness: sk.iris || sk.bigEyes ? 0.15 : 0.4 });
  const white = new THREE.MeshBasicMaterial({ color: 0xffffff });
  SP.eye.forEach((p, i) => {
    const n = SP.eyeN[i].clone().normalize(), c = p.clone().addScaledVector(n, -SP.inset);
    const e = new THREE.Group(); e.scale.setScalar(SP.eyeR);
    if (real) {
      const re = realEye(sk.iris || '#b49a3a'); if (i === 0) re.scale.x *= -1; e.add(re);   // mirror the highlight on the left eye
    } else if (sk.bigEyes) {
      e.add(at(mesh(S(0.27), dark), null, new THREE.Vector3(1, 1.1, 0.55)));
      const h1 = mesh(S(0.07, 10, 8), white); h1.position.set(i ? 0.06 : -0.06, 0.1, 0.13); e.add(h1);
      const h2 = mesh(S(0.035, 8, 6), white); h2.position.set(i ? -0.08 : 0.08, -0.1, 0.13); e.add(h2);
    } else if (sk.iris) {
      e.add(at(mesh(S(0.17), new THREE.MeshStandardMaterial({ color: sk.iris, roughness: 0.15 })), null, new THREE.Vector3(1, 1.1, 0.55)));
      const pu = mesh(S(0.09), dark); pu.scale.set(0.7, 1.35, 0.5); pu.position.z = 0.06; e.add(pu);
      const hl = mesh(S(0.035, 8, 6), white); hl.position.set(0.05, 0.08, 0.1); e.add(hl);
    } else e.add(at(mesh(S(0.16), dark), null, new THREE.Vector3(1, 1.15, 0.55)));
    pin('head', e, c, n);
  });
  if (sk.tongue) { const t = mesh(S(0.15), new THREE.MeshStandardMaterial({ color: 0xe8728a, roughness: 0.35 })); t.scale.set(1.0, 0.45, 1.2); t.rotation.x = 0.6; pin('head', t, SP.mouth.clone().add(new THREE.Vector3(0, -0.12, 0.02))); }
  if (sk.purse) {
    const pm = new THREE.MeshStandardMaterial({ color: sk.purse, roughness: 0.55 });
    const strap = mesh(new THREE.TorusGeometry(1.0, 0.06, 8, 48), pm); strap.scale.set(0.95, 0.92, 1); strap.rotation.z = 0.45; pin('chest', strap, new THREE.Vector3(0, 2.75, -0.9));
    const bag = mesh(new THREE.BoxGeometry(0.42, 0.55, 0.8), pm); bag.rotation.z = 0.12; pin('chest', bag, new THREE.Vector3(1.0, 2.15, -0.75));
    pin('chest', mesh(S(0.06, 8, 6), new THREE.MeshStandardMaterial({ color: 0xd9b45a, metalness: 0.8, roughness: 0.3 })), new THREE.Vector3(1.22, 2.25, -0.75));
  }
  if (sk.boots) {
    const bm = new THREE.MeshStandardMaterial({ color: sk.boots, roughness: 0.8 }), sole = new THREE.MeshStandardMaterial({ color: 0x5a3d24, roughness: 0.9 }), lace = new THREE.MeshStandardMaterial({ color: 0x6b4a2c });
    [['handL', 0.6, -1.5], ['handR', -0.6, -1.5], ['footL', 0.6, 1.3], ['footR', -0.6, 1.3]].forEach(([b, x, z]) => {
      const boot = new THREE.Group();
      boot.add(at(mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.62, 16), bm), new THREE.Vector3(0, 0.42, 0.05)));
      boot.add(at(mesh(S(0.36), bm), new THREE.Vector3(0, 0.2, -0.16), new THREE.Vector3(1.05, 0.6, 1.4)));
      boot.add(at(mesh(new THREE.CylinderGeometry(0.39, 0.39, 0.08, 16), sole), new THREE.Vector3(0, 0.04, -0.1), new THREE.Vector3(1, 1, 1.4)));
      [0.38, 0.56].forEach((y) => boot.add(at(mesh(new THREE.BoxGeometry(0.3, 0.035, 0.035), lace), new THREE.Vector3(0, y, -0.32))));
      pin(b, boot, new THREE.Vector3(x, 0, z));
    });
  }
  // name tag, flashlight and lantern (same as the simple cat)
  const tag = (() => {
    const c = document.createElement('canvas'); c.width = 256; c.height = 64; const x = c.getContext('2d');
    x.fillStyle = 'rgba(20,26,32,0.6)'; x.beginPath(); x.roundRect(4, 8, 248, 48, 24); x.fill();
    x.fillStyle = '#fff'; x.font = '600 28px system-ui, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(name.slice(0, 14), 128, 33);
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), depthTest: false, transparent: true }));
    sp.scale.set(4, 1, 1); sp.position.y = 6.6; sp.renderOrder = 10; return sp;
  })();
  g.add(tag); if (!name) tag.visible = false;
  const torch = new THREE.SpotLight(0xffeedd, 0, 280, THREE.MathUtils.degToRad(30), 0.7, 1.35);
  torch.position.set(0.6, 5.6, -2.6); g.add(torch); g.add(torch.target);
  const lamp = new THREE.PointLight(0xffb060, 0, 60, 1.6); lamp.position.set(0.9, 4.0, -2.2); g.add(lamp);
  // bones turn about fixed world axes measured in the rest pose
  const X = new THREE.Vector3(1, 0, 0), q = new THREE.Quaternion(), wq = new THREE.Quaternion();
  const J = {};
  Object.values(bones).forEach((b) => {
    b.getWorldQuaternion(wq); const inv = wq.clone().invert();
    const kid = b.children.find((c) => c.isBone); let side = new THREE.Vector3(0, 1, 0);
    if (kid) { const a = b.getWorldPosition(new THREE.Vector3()), c = kid.getWorldPosition(new THREE.Vector3()); side = new THREE.Vector3().crossVectors(c.sub(a).normalize(), X).normalize(); }
    J[b.name] = { b, rest: b.quaternion.clone(), pitch: X.clone().applyQuaternion(inv), yaw: side.applyQuaternion(inv) };
  });
  const turn = (n, pitch, yaw = 0) => {
    const j = J[n]; if (!j) return;
    j.b.quaternion.copy(j.rest);
    if (pitch) j.b.quaternion.multiply(q.setFromAxisAngle(j.pitch, pitch));
    if (yaw) j.b.quaternion.multiply(q.setFromAxisAngle(j.yaw, yaw));
  };
  const LEG = ['upperarmL', 'upperarmR', 'thighL', 'thighR'];
  const tailB = Object.keys(J).filter((k) => k.startsWith('tail')).sort();
  if (pmesh) applyPaint(pmesh.geometry, padStamps, 0);
  let phase = 0, lt = 0, sit = 0, look = 0, bob = 0;
  const legA = [0, 0, 0, 0];
  return {
    group: g, model: true, mesh: pmesh, root,
    setPaint(st) { if (pmesh) applyPaint(pmesh.geometry, padStamps.concat(st || []), 0); },
    addPaint(st, from) { if (pmesh) applyPaint(pmesh.geometry, st, from, true); },
    animate(dt, speed, time) {
      const k = Math.min(1, speed / 25);
      phase += dt * (2 + speed * 0.28);
      LEG.forEach((n, i) => { legA[i] = Math.sin(phase + (i === 0 || i === 3 ? 0 : Math.PI)) * 0.6 * k; });
      bob = Math.abs(Math.sin(phase)) * 0.15 * k;
      tailB.forEach((n, i) => turn(n, Math.sin(time * 1.3 - i * 0.4) * 0.03, Math.sin(time * 2.2 - i * 0.5) * (0.08 + 0.14 * (1 - k))));
      look = look || 0;
      turn('neck', 0); turn('head', -look * 0.6 + Math.sin(time * 0.7) * 0.05);
      this._apply();
    },
    _apply() {
      LEG.forEach((n, i) => turn(n, legA[i] * (1 - sit) + (i < 2 ? -1.2 : 1.1) * sit));
      ['forearmL', 'forearmR'].forEach((n) => turn(n, 0.9 * sit)); ['shinL', 'shinR'].forEach((n) => turn(n, -1.2 * sit));
      body.position.y = bob - sit * 1.6;
    },
    setLook(pitch) {
      look = pitch;
      torch.target.position.set(0.6, 5.6 + Math.sin(pitch) * 50, -2.6 - Math.cos(pitch) * 50);
    },
    setLight(state, t) { lt += ((state === 1 ? 1 : 0) - lt) * 0.2; torch.intensity = lt * 520; lamp.intensity = (state === 2 ? 900 * (0.92 + 0.08 * Math.sin(t * 13)) : 0); },
    setSit(on) { sit += ((on ? 1 : 0) - sit) * 0.15; this._apply(); },
    setColor(col) {
      const c = new THREE.Color(col);
      if (tintU) { tintU.uTint.value.copy(c); tintU.uTintOn.value = col.toLowerCase() === SKINS.find((k) => k.model === 'frip').color ? 0 : 1; return; }
      const u = fur && fur.userData.u; if (!u) return;
      u.uFur.value.copy(c); u.uBody.value.copy(c); if (sk.stripe) u.uStripe.value.copy(c).multiplyScalar(0.62);
    },
    dispose() { if (fur) fur.dispose(); }
  };
}

// the modelled cat when its file has loaded, otherwise the simple one made of spheres
function buildCat(skin, name) {
  const sk = typeof skin === 'string' ? { color: skin } : (skin || { color: '#999' });
  const tpl = catModel(sk.model);
  return tpl ? buildModelCat(tpl, sk, name) : buildSimpleCat(sk, name);
}

export function createOnline({ scene, player, scenes, toast, extra }) {
  let peer = null, host = false, conns = new Map(), myId = null, code = null, sendT = 0;
  const others = new Map();   // id -> { cat, cur, tgt, name, scene }
  const me = { name: (() => { try { return localStorage.getItem('meow.name') || ''; } catch { return ''; } })() || 'Cat ' + Math.floor(100 + Math.random() * 900), skin: (() => { try { return Math.min(SKINS.length - 1, Math.max(0, +(localStorage.getItem('meow.skin') || 0) | 0)); } catch { return 0; } })() };
  me.color = (() => { try { return localStorage.getItem('meow.catcolor') || ''; } catch { return ''; } })() || SKINS[me.skin].color;
  // painted fur, one per model ('cat' = El Gato, 'frip' = Fripouille), packed as text
  const modelOf = (i) => (SKINS[i] && SKINS[i].model) || 'cat';
  me.paint = (() => { try { return JSON.parse(localStorage.getItem('meow.catpaint') || '{}'); } catch { return {}; } })();
  const myPaint = () => me.paint[modelOf(me.skin)] || '';
  const paintsBy = new Map();   // other players' paint: id -> { skin, d }
  const applyRemotePaint = (id) => {
    const o = others.get(id), v = paintsBy.get(id); if (!o || !o.cat.setPaint) return;
    o.cat.setPaint(v && v.skin === o.tgt.skin ? (v.st || (v.st = decodePaint(v.d))) : []);
  };
  const sendPaint = (to) => {
    const msg = { t: 'ev', k: 'catpaint', v: { skin: me.skin, d: myPaint() }, id: myId };
    if (to) { if (to.open) to.send(msg); return; }
    conns.forEach((c) => { if (c.open) c.send(msg); });
  };
  const handlers = {}; let sync = { snapshot: () => ({}), apply: () => {} };
  const ui = {};

  // a skin by number (newer players), or just a colour (older copies of the page)
  const skinOf = (info) => withColor((Number.isInteger(info.skin) && SKINS[info.skin]) || SKINS[0], /^#[0-9a-f]{6}$/i.test(info.color || '') ? info.color : null);
  const status = (t) => { if (ui.status) ui.status.textContent = t; };
  const ensure = (id, info, quiet) => {
    let o = others.get(id);
    if (!o) {
      const cat = buildCat(skinOf(info), info.name || 'Cat');
      scene.add(cat.group);
      setTimeout(() => applyRemotePaint(id), 0);
      o = { cat, cur: { x: info.x, z: info.z, y: info.y, yaw: info.yaw }, tgt: { ...info }, name: info.name, color: info.color, skin: info.skin };
      others.set(id, o);
      if (!quiet) toast('🐾 ' + (info.name || 'A cat') + ' joined');
      refreshList();
    }
    return o;
  };
  const drop = (id, quiet) => { const o = others.get(id); if (!o) return; scene.remove(o.cat.group); others.delete(id); if (!quiet) toast('🐾 ' + (o.name || 'A cat') + ' left'); refreshList(); };
  // swap every other player's cat when the model arrives or the graphics level changes
  const rebuildAll = () => {
    others.forEach((o) => {
      const old = o.cat; scene.remove(old.group); if (old.dispose) old.dispose();
      o.cat = buildCat(skinOf(o.tgt), o.name || 'Cat'); scene.add(o.cat.group);
      o.cat.group.position.copy(old.group.position); o.cat.group.rotation.copy(old.group.rotation); o.cat.group.visible = old.group.visible;
    });
    others.forEach((_, id) => applyRemotePaint(id));
  };
  addEventListener('meow:catmodel', (e) => { if (e.detail === wantDetail) { rebuildAll(); redrawSkins(); } });
  addEventListener('meow:gfx', (e) => {
    const d = detailFor(e.detail); if (d === wantDetail) return;
    wantDetail = d; if (catModels['cat:' + d]) { rebuildAll(); redrawSkins(); } else loadCatModel(d);
  });
  setTimeout(() => loadCatModel(wantDetail), 1200);
  let redrawSkins = () => {};
  const refreshList = () => { if (ui.list) ui.list.textContent = others.size ? 'Here: ' + [...others.values()].map((o) => o.name).join(', ') : ''; };

  const onData = (from, d) => {
    if (!d || typeof d !== 'object') return;
    if (d.t === 'p') {
      const id = d.id || from; if (id === myId) return;
      if (!d.on) { const o = others.get(id); if (o) o.cat.group.visible = false; return; }
      let o = ensure(id, d);
      if ((d.color && o.color && d.color !== o.color) || (d.skin != null && d.skin !== o.skin)) { drop(id, true); o = ensure(id, d, true); }
      o.color = d.color; o.skin = d.skin; o.tgt = d; o.cat.group.visible = true;
      if (d.boat && handlers.boat) handlers.boat(d.boat, id);
      if (host) conns.forEach((c, cid) => { if (cid !== from && c.open) c.send({ ...d, id }); });   // relay
    } else if (d.t === 'ev' && d.k === 'catpaint') {
      const id = d.id || from; if (id === myId || !d.v) return;
      paintsBy.set(id, { skin: d.v.skin, d: String(d.v.d || '').slice(0, 140000) }); applyRemotePaint(id);
      if (host) conns.forEach((c, cid) => { if (cid !== from && c.open) c.send(d); });
    } else if (d.t === 'ev') {
      if ((d.id || from) !== myId && handlers[d.k]) handlers[d.k](d.v, d.id || from);
      if (host) conns.forEach((c, cid) => { if (cid !== from && c.open) c.send(d); });
    } else if (d.t === 'snap') {
      sync.apply(d.v);
    } else if (d.t === 'bye') { drop(d.id || from); if (host) conns.forEach((c, cid) => { if (cid !== from && c.open) c.send(d); }); }
  };
  const wire = (c) => {
    c.on('open', () => { conns.set(c.peer, c); if (host) { c.send({ t: 'snap', v: sync.snapshot() }); paintsBy.forEach((v, id) => c.send({ t: 'ev', k: 'catpaint', v: { skin: v.skin, d: v.d }, id })); } setTimeout(() => sendPaint(c), 400); onStatusChange(); status(host ? `Hosting · room ${code} · ${conns.size} joined` : `Joined room ${code}`); });
    c.on('data', (d) => onData(c.peer, d));
    c.on('close', () => { conns.delete(c.peer); onStatusChange(); drop(c.peer); if (host) { conns.forEach((x) => x.open && x.send({ t: 'bye', id: c.peer })); status(`Hosting · room ${code} · ${conns.size} joined`); } else status('Disconnected from the host'); });
  };

  const leave = () => {
    conns.forEach((c) => { try { c.send({ t: 'bye', id: myId }); c.close(); } catch { /* ignore */ } });
    conns.clear(); others.forEach((_, id) => drop(id));
    if (peer) peer.destroy(); peer = null; host = false; code = null; status('Not connected'); setButtons(false); onStatusChange();
  };
  const start = async (asHost, joinCode) => {
    if (peer) leave();
    status('Connecting…');
    let Peer; try { Peer = await loadPeer(); } catch (e) { status('Could not load the online library (check your connection)'); return; }
    host = asHost;
    code = asHost ? Math.random().toString(36).slice(2, 7).toUpperCase() : String(joinCode || '').trim().toUpperCase();
    if (!code) { status('Type the room code first'); return; }
    peer = asHost ? new Peer(PREFIX + code) : new Peer();
    peer.on('open', (id) => {
      myId = id; setButtons(true);
      if (asHost) { status(`Hosting · room ${code} · share this code`); if (ui.code) ui.code.value = code; }
      else wire(peer.connect(PREFIX + code, { reliable: true }));
    });
    peer.on('connection', (c) => { if (host) wire(c); else c.close(); });
    peer.on('error', (e) => {
      const t = e && e.type;
      status(t === 'peer-unavailable' ? `No room "${code}" — check the code` : t === 'unavailable-id' ? 'That room code is taken, press Host again' : 'Connection problem: ' + (t || e));
      if (t === 'peer-unavailable' || t === 'unavailable-id') { peer.destroy(); peer = null; setButtons(false); }
    });
  };
  const onStatusChange = () => dispatchEvent(new CustomEvent('meow:online'));
  const setButtons = (on) => { if (ui.leave) ui.leave.hidden = !on; if (ui.host) ui.host.hidden = on; if (ui.join) ui.join.hidden = on; };

  // the panel lives in Settings → Online
  {
    const $ = (id) => document.getElementById(id);
    ui.status = $('onStatus'); ui.list = $('onList'); ui.code = $('onCode'); ui.host = $('onHost'); ui.join = $('onJoin'); ui.leave = $('onLeave'); ui.name = $('onName');
    if (ui.name) { ui.name.value = me.name; ui.name.addEventListener('change', () => { me.name = ui.name.value.trim().slice(0, 14) || me.name; try { localStorage.setItem('meow.name', me.name); } catch { /* ignore */ } }); }
    if (ui.host) ui.host.addEventListener('click', () => start(true));
    if (ui.join) ui.join.addEventListener('click', () => start(false, ui.code.value));
    if (ui.leave) ui.leave.addEventListener('click', leave);
    const sk = $('onSkins');
    if (sk) {
      // the old heading above this box moves into the box's own title row
      const oldH = sk.previousElementSibling; if (oldH && /your cat/i.test(oldH.textContent)) oldH.remove();
      sk.innerHTML = '';
      sk.style.cssText = 'display:flex;flex-direction:column;gap:10px;margin-top:14px';
      sk.innerHTML = `
        <div style="display:flex;align-items:center;gap:8px">
          <h3 style="font-size:13px;margin:0;flex:1">Your cat</h3>
          <span id="onCatState" style="font-size:11px;opacity:.65"></span>
          <button id="onCatSave" type="button" class="btn solid" style="padding:5px 14px">Save</button>
        </div>
        <div style="position:relative;border-radius:16px;overflow:hidden;background:radial-gradient(circle at 50% 40%,rgba(255,255,255,.25),rgba(0,0,0,.18));height:220px;cursor:grab;touch-action:none" id="onPrevBox">
          <canvas id="onPrev" style="width:100%;height:100%;display:block"></canvas>
          <div id="onPrevName" style="position:absolute;left:12px;bottom:10px;font-size:12px;font-weight:600;opacity:.85"></div>
          <div style="position:absolute;right:12px;bottom:10px;font-size:11px;opacity:.6">drag to turn</div>
        </div>
        <div id="onModels" style="display:flex;gap:8px"></div>
        <div style="display:flex;align-items:center;gap:10px">
          <label style="position:relative;width:40px;height:40px;flex:none;border-radius:50%;overflow:hidden;cursor:pointer;box-shadow:inset 0 0 0 3px rgba(255,255,255,.55);background:conic-gradient(red,yellow,lime,cyan,blue,magenta,red)" title="Choose the fur colour">
            <input id="onColor" type="color" style="position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%">
          </label>
          <div style="display:flex;flex-direction:column;flex:1;min-width:0"><span style="font-size:12px;font-weight:600">Fur colour</span><span id="onColorHex" style="font-size:11px;opacity:.65"></span></div>
          <span id="onColorNow" style="width:26px;height:26px;border-radius:50%;flex:none;box-shadow:inset 0 0 0 2px rgba(255,255,255,.4)"></span>
        </div>
        <button id="onPaint" type="button" class="btn" style="padding:9px 12px">🖌 Paint your cat…</button>`;
      const canvas = $('onPrev'), box = $('onPrevBox'), nameEl = $('onPrevName'), models = $('onModels'), pick = $('onColor'), stateEl = $('onCatState');
      // changes here are a draft until Save
      const draft = { skin: me.skin, color: me.color, paint: { ...me.paint } };
      const dirty = () => draft.skin !== me.skin || draft.color.toLowerCase() !== me.color.toLowerCase() || ['cat', 'frip'].some((k) => (draft.paint[k] || '') !== (me.paint[k] || ''));
      const commit = () => {
        me.skin = draft.skin; me.color = draft.color; me.paint = { ...draft.paint };
        try { localStorage.setItem('meow.skin', String(me.skin)); localStorage.setItem('meow.catcolor', me.color); localStorage.setItem('meow.catpaint', JSON.stringify(me.paint)); } catch { /* ignore */ }
        sendPaint(); marks(); toast('🐾 Your cat is saved');
      };
      $('onCatSave').addEventListener('click', commit);
      SKINS.forEach((k, i) => {
        const b = document.createElement('button'); b.type = 'button'; b.className = 'btn'; b.dataset.i = i; b.textContent = k.name;
        b.style.cssText = 'flex:1;padding:8px 10px;border-radius:12px;border:2px solid transparent;background-image:none';
        b.addEventListener('click', () => { if (draft.skin === i) return; draft.skin = i; draft.color = k.color; refresh(true); });
        models.appendChild(b);
      });
      pick.addEventListener('input', () => { draft.color = pick.value; if (cat && cat.setColor) cat.setColor(pick.value); else refresh(true); marks(); });
      const marks = () => {
        [...models.children].forEach((b) => { b.style.borderColor = +b.dataset.i === draft.skin ? 'currentColor' : 'transparent'; });
        pick.value = draft.color; $('onColorHex').textContent = draft.color.toUpperCase(); $('onColorNow').style.background = draft.color;
        nameEl.textContent = SKINS[draft.skin].name;
        const d = dirty(); stateEl.textContent = d ? 'Not saved yet' : 'Saved ✓'; $('onCatSave').disabled = !d; $('onCatSave').style.opacity = d ? '1' : '.45';
      };
      // the paint board opens on the very-high model of your cat
      const modelReady = (model, d) => new Promise((res) => {
        if (catModels[model + ':' + d]) return res(catModels[model + ':' + d]);
        const on = () => { if (catModels[model + ':' + d]) { removeEventListener('meow:catmodel', on); res(catModels[model + ':' + d]); } };
        addEventListener('meow:catmodel', on); loadCatModel(d, model); setTimeout(() => res(catModels[model + ':' + d] || null), 20000);
      });
      $('onPaint').addEventListener('click', async () => {
        const model = modelOf(draft.skin), sk2 = skinOf({ skin: draft.skin, color: draft.color });
        const first = catModels[model + ':high'] || catModels[model + ':' + wantDetail] || await modelReady(model, wantDetail);
        if (!first) { toast('The cat model is still loading, try again in a moment'); return; }
        openPaintEditor({
          color: '#3b2a1e',
          stamps: decodePaint(draft.paint[model] || ''),
          build: () => buildModelCat(first, sk2, ''),
          buildHigh: catModels[model + ':high'] ? null : () => modelReady(model, 'high').then((t) => t && buildModelCat(t, sk2, '')),
          onSave: (st) => { draft.paint[model] = st.length ? encodePaint(st) : ''; if (cat && cat.setPaint) cat.setPaint(st); marks(); }
        });
      });
      // the live 3D preview (shows the draft)
      let r = null, scn = null, cam = null, cat = null, spin = 0.6, drag = null, raf = 0, last = 0;
      const setup = () => {
        if (r) return true;
        try { r = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true }); } catch { return false; }
        r.toneMapping = THREE.ACESFilmicToneMapping; r.outputColorSpace = THREE.SRGBColorSpace;
        scn = new THREE.Scene();
        scn.add(new THREE.HemisphereLight(0xffffff, 0x6b5a4a, 2.2));
        const sun = new THREE.DirectionalLight(0xffffff, 2.6); sun.position.set(-5, 10, -8); scn.add(sun);
        const ground = new THREE.Mesh(new THREE.CircleGeometry(4.5, 48), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.12 })); ground.rotation.x = -Math.PI / 2; scn.add(ground);
        cam = new THREE.PerspectiveCamera(28, 1, 0.1, 200);
        return true;
      };
      const refresh = (rebuild) => {
        marks();
        if (!setup()) return;
        if (rebuild || !cat) {
          if (cat) { scn.remove(cat.group); if (cat.dispose) cat.dispose(); }
          cat = buildCat(skinOf({ skin: draft.skin, color: draft.color }), '');
          if (cat.setPaint) cat.setPaint(decodePaint(draft.paint[modelOf(draft.skin)] || ''));
          scn.add(cat.group);
          const real = SKINS[draft.skin].model === 'frip';
          cam.position.set(0, real ? 5.2 : 4.6, real ? -17 : -14); cam.lookAt(0, 2.6, 0);
        }
      };
      const loop = (t) => {
        raf = 0;
        if (!sk.offsetParent) return;   // Settings closed: stop drawing
        const dt = Math.min(0.05, (t - (last || t)) / 1000); last = t;
        const w = canvas.clientWidth, h = canvas.clientHeight;
        if (r && (canvas.width !== Math.round(w * Math.min(2, devicePixelRatio)) || canvas.height !== Math.round(h * Math.min(2, devicePixelRatio)))) { r.setPixelRatio(Math.min(2, devicePixelRatio)); r.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix(); }
        if (cat) { if (!drag) spin += dt * 0.5; cat.group.rotation.y = spin; cat.animate(dt, 0, t / 1000); cat.setLook(Math.sin(t / 1400) * 0.25); }
        if (r) r.render(scn, cam);
        raf = requestAnimationFrame(loop);
      };
      const kick = () => { if (!raf && sk.offsetParent) { refresh(false); last = 0; raf = requestAnimationFrame(loop); } };
      box.addEventListener('pointerdown', (e) => { drag = { x: e.clientX, s: spin }; box.setPointerCapture(e.pointerId); box.style.cursor = 'grabbing'; });
      box.addEventListener('pointermove', (e) => { if (drag) spin = drag.s + (e.clientX - drag.x) * 0.012; });
      const up = () => { drag = null; box.style.cursor = 'grab'; };
      box.addEventListener('pointerup', up); box.addEventListener('pointercancel', up);
      redrawSkins = () => refresh(true);   // the model arrived or the detail level changed
      new MutationObserver(kick).observe(document.body, { attributes: true, subtree: true, attributeFilter: ['class', 'hidden', 'open'] });
      setTimeout(kick, 1500);
      marks();
    }
    const copy = $('onCopy'); if (copy) copy.addEventListener('click', () => { if (code) navigator.clipboard && navigator.clipboard.writeText(code).then(() => toast('Room code copied')); });
    // a link like …/test/?room=ABCDE joins straight away
    const q = new URLSearchParams(location.search).get('room'); if (q) { if (ui.code) ui.code.value = q; setTimeout(() => start(false, q), 1500); }
    addEventListener('beforeunload', () => { if (peer) leave(); });
  }

  return {
    SKINS, buildCat,   // (testing)
    get count() { return others.size; },
    get inRoom() { return !!peer && (host || conns.size > 0); },
    get isHost() { return host; },
    // shared things (doors, lights, the boat, the scene): tell everyone; handlers run when others do it
    emit(k, v) { if (!peer) return; const d = { t: 'ev', k, v, id: myId }; conns.forEach((c) => { if (c.open) c.send(d); }); },
    on(k, fn) { handlers[k] = fn; },
    setSync(s2) { sync = s2; },
    // which boat seats other players sit in
    takenSeats() { return [...others.values()].map((o) => o.tgt.seat).filter((x) => x >= 0); },
    _recv: onData,   // (testing)
    update(dt, time) {
      // send my position
      if (peer && conns.size) {
        sendT += dt;
        if (sendT > 1 / 15) {
          sendT = 0;
          const p = player.state, on = !!player.walking;
          const ex = extra ? extra() : {};
          const msg = { t: 'p', id: myId, on, ...ex, x: +p.x.toFixed(2), z: +p.z.toFixed(2), y: +p.feet.toFixed(2), yaw: +p.yaw.toFixed(3), pitch: +(p.pitch || 0).toFixed(3), name: me.name, color: me.color, skin: me.skin, scene: scenes.name };
          conns.forEach((c) => { if (c.open) c.send(msg); });
        }
      }
      // move the others smoothly toward their latest position
      const a = 1 - Math.exp(-dt * 10);
      others.forEach((o) => {
        const c = o.cur, t = o.tgt;
        const px = c.x, pz = c.z;
        c.x += (t.x - c.x) * a; c.z += (t.z - c.z) * a; c.y += (t.y - c.y) * a;
        let dy = t.yaw - c.yaw; dy = Math.atan2(Math.sin(dy), Math.cos(dy)); c.yaw += dy * a;
        const speed = Math.hypot(c.x - px, c.z - pz) / Math.max(dt, 1e-3);
        o.cat.group.position.set(c.x, c.y, c.z); o.cat.group.rotation.y = c.yaw;
        o.cat.animate(dt, (t.seat >= 0) ? 0 : speed, time); o.cat.setLook(t.pitch || 0); o.cat.setLight(t.lt || 0, time); o.cat.setSit(t.seat >= 0);
      });
    }
  };
}
