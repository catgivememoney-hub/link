/* MEOW (test copy) — link trees and the cat paw.
   Every link in links.js lives in a tree. The first link takes the tree nearest the cabin, and every
   link after it takes the free tree nearest the previous link's tree — so new links grow outward
   from the last one. Aim at a link tree to see where it goes (a little card with the site's icon).
   Click it: a big grey-tabby paw (Jeffy's kitten: grey with dark stripes and pale socks) shoots out of
   the tree, its toes curl and claws come out as it grabs you, it drags you into the tree, everything
   goes dark — and the page becomes that website. Back in the browser brings you back to the forest. */
import * as THREE from 'three';

const HOUSE = { x: 106, z: -119 };
// the link grove: behind the house (the dock and the lake are in front, toward -x), so +x of the house
const GROVE = { x: 160, z: -119 };
const host = (u) => { try { return new URL(u).hostname.replace(/^www\./, ''); } catch { return u; } };
const clamp = (x) => Math.min(1, Math.max(0, x)), ease = (x) => x * x * (3 - 2 * x);
const easeIn = (x) => x * x * x, easeOut = (x) => 1 - Math.pow(1 - x, 3);

/* ---------- the paw (3D) ---------- */
// colours from the kitten photo (brightened a little for the forest light)
const FUR = new THREE.Color('#77706a'), STRIPE = new THREE.Color('#2a2521'), SOCK = new THREE.Color('#cbc4bb'), BEAN = new THREE.Color('#e3a1ae'), CLAW = new THREE.Color('#f4efe6');
// a little noise to rough up surfaces (fur isn't smooth plastic)
const nz = (x, y, z) => Math.sin(x * 12.9 + y * 7.1) * Math.sin(y * 11.3 + z * 5.7) * Math.sin(z * 9.7 + x * 3.3);
function fuzz(geo, amt) {
  const p = geo.attributes.position, n = geo.attributes.normal;
  for (let i = 0; i < p.count; i++) {
    const k = nz(p.getX(i) * 3, p.getY(i) * 3, p.getZ(i) * 3) * amt;
    p.setXYZ(i, p.getX(i) + n.getX(i) * k, p.getY(i) + n.getY(i) * k, p.getZ(i) + n.getZ(i) * k);
  }
  geo.computeVertexNormals(); return geo;
}
// a fur texture drawn once: thousands of short, soft strands (used as colour detail and as a bump map)
let FURTEX = null;
function furTexture() {
  if (FURTEX) return FURTEX;
  const c = document.createElement('canvas'); c.width = c.height = 512; const g = c.getContext('2d');
  g.fillStyle = '#9a9a9a'; g.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 22000; i++) {
    const x = Math.random() * 512, y = Math.random() * 512, len = 6 + Math.random() * 12, a = Math.PI / 2 + (Math.random() - 0.5) * 0.5, v = Math.floor(90 + Math.random() * 150);
    g.strokeStyle = `rgba(${v},${v},${v},0.55)`; g.lineWidth = 0.6 + Math.random() * 1.1;
    g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x + Math.cos(a) * len * 0.5 + (Math.random() - 0.5) * 3, y + Math.sin(a) * len * 0.5, x + Math.cos(a) * len, y + Math.sin(a) * len); g.stroke();
    // wrap around the edges so the tile repeats seamlessly
    if (y > 512 - 20) { g.beginPath(); g.moveTo(x, y - 512); g.lineTo(x + Math.cos(a) * len, y - 512 + Math.sin(a) * len); g.stroke(); }
  }
  FURTEX = new THREE.CanvasTexture(c); FURTEX.wrapS = FURTEX.wrapT = THREE.RepeatWrapping; FURTEX.colorSpace = THREE.SRGBColorSpace; FURTEX.anisotropy = 8;
  return FURTEX;
}
// A real-looking grey tabby foreleg (from Jeffy's reference photo): one continuous furry limb, the forearm
// running smoothly into a rounded, fluffy paw with soft toe lumps, covered in real fur drawn as many thin
// layers ("shells") of strands that stand off the skin, silver-tipped, with soft tabby bands on the arm.
const SHELLS = 22, FUR_LEN = 0.2, PAW_LEN = 1.9;
function pawGeometry() {
  const AROUND = 56, ARM_RINGS = 64, PAW_RINGS = 70;
  const pos = [], nrm = [], idx = [];
  const ring = (z, rx, ry, rings) => rings;
  const rows = [];
  // arm: z 0..1 (stretched to the real length in the shader); paw: z 1..1+PAW_LEN (fixed size)
  for (let r = 0; r <= ARM_RINGS; r++) { const t = r / ARM_RINGS; rows.push({ z: t, rx: 1.12 - 0.27 * t + 0.05 * Math.sin(t * 9), ry: 1.05 - 0.27 * t }); }
  for (let r = 1; r <= PAW_RINGS; r++) {
    const t = r / PAW_RINGS, z = 1 + t * PAW_LEN;
    // widens past the wrist into the paw, then rounds off into the toes
    let w = 0.85 + 0.42 * Math.sin(Math.min(1, t / 0.62) * Math.PI / 2), h = 0.8 - 0.1 * t;
    if (t > 0.58) { const c = Math.sqrt(Math.max(0, 1 - Math.pow((t - 0.58) / 0.42, 2))); w *= c; h *= c; }
    rows.push({ z, rx: w, ry: h, t });
  }
  rows.forEach((row, ri) => {
    for (let k = 0; k < AROUND; k++) {
      const th = (k / AROUND) * Math.PI * 2, cx = Math.cos(th), cy = Math.sin(th);
      let rx = row.rx, ry = row.ry;
      // four soft toe lumps across the front of the paw (and a slight dip between them)
      if (row.t !== undefined) { const tl = Math.exp(-Math.pow((row.t - 0.8) / 0.12, 2)); const k4 = 0.5 - 0.5 * Math.cos(4 * Math.PI * cx); const b = 1 + tl * (k4 - 0.35) * 0.18 * (cy > -0.2 ? 1 : 0.4); rx *= b; ry *= b; }
      pos.push(cx * rx, cy * ry, row.z);
    }
  });
  const tip = pos.length / 3; pos.push(0, 0, 1 + PAW_LEN);
  const R = rows.length;
  for (let r = 0; r < R - 1; r++) for (let k = 0; k < AROUND; k++) {
    const a = r * AROUND + k, b = r * AROUND + (k + 1) % AROUND, c = (r + 1) * AROUND + k, d = (r + 1) * AROUND + (k + 1) % AROUND;
    idx.push(a, c, b, b, c, d);
  }
  for (let k = 0; k < AROUND; k++) idx.push((R - 1) * AROUND + k, tip, (R - 1) * AROUND + (k + 1) % AROUND);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
  return g;
}
function buildPaw() {
  const paw = new THREE.Group();
  const geo = pawGeometry();
  const U = { uLen: { value: 6 }, uCurl: { value: 0 } };
  const mats = [];
  for (let i = 0; i <= SHELLS; i++) {
    const m = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.95, metalness: 0, fog: false });
    const h = i / SHELLS;
    m.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, U, { uH: { value: h } });
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', `#include <common>
          uniform float uLen, uCurl, uH; varying vec3 vP; varying float vZ; varying float vTh; varying float vPaw;
          // the arm stretches to the leg's length; the paw keeps its size and curls down to grab
          vec3 shapeP(vec3 p, out float pawK) {
            pawK = 0.0;
            if (p.z <= 1.0) { p.z *= uLen; return p; }
            float l = p.z - 1.0; pawK = clamp(l / ${PAW_LEN.toFixed(2)}, 0.0, 1.0);
            float a = uCurl * 1.1 * smoothstep(0.15, 1.0, pawK);
            float c = cos(a), s = sin(a);
            vec2 yz = vec2(p.y, l);
            yz = vec2(yz.x * c - yz.y * s, yz.x * s + yz.y * c);
            return vec3(p.x, yz.x, uLen + yz.y);
          }`)
        .replace('#include <beginnormal_vertex>', `#include <beginnormal_vertex>
          { float pk; vec3 q0 = shapeP(position, pk); float a = (position.z > 1.0) ? uCurl * 1.1 * smoothstep(0.15, 1.0, pk) : 0.0;
            float c = cos(a), s = sin(a); objectNormal = vec3(objectNormal.x, objectNormal.y * c - objectNormal.z * s, objectNormal.y * s + objectNormal.z * c); }`)
        .replace('#include <begin_vertex>', `
          float pk; vec3 transformed = shapeP(position, pk);
          // each fur layer stands a little further off the skin, combed toward the toes and drooping slightly
          transformed += normalize(objectNormal) * uH * ${FUR_LEN.toFixed(2)} + vec3(0.0, -0.03, 0.05) * uH * uH;
          vP = position; vZ = (position.z <= 1.0 ? position.z * uLen : uLen + (position.z - 1.0)); vTh = atan(position.y, position.x); vPaw = pk;`);
      sh.fragmentShader = sh.fragmentShader
        .replace('#include <common>', `#include <common>
          uniform float uH; varying vec3 vP; varying float vZ; varying float vTh; varying float vPaw;
          float ph(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
          float pn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(ph(i), ph(i + vec2(1, 0)), f.x), mix(ph(i + vec2(0, 1)), ph(i + vec2(1, 1)), f.x), f.y); }`)
        .replace('#include <color_fragment>', `#include <color_fragment>
          {
            // strands: a grid wrapped round the leg; each cell is one hair of random length, thinning to its tip
            vec2 g = vec2(vTh / 6.2832 * 190.0, vZ * 38.0);
            vec2 cell = floor(g), f = fract(g) - 0.5;
            float rnd = ph(cell), len = 0.55 + 0.45 * ph(cell + 3.1);
            if (uH > 0.0) {
              float r = 0.5 * (1.0 - uH / len);
              if (uH > len || length(f) > r + 0.08) discard;
            }
            // colours: grey tabby; soft darker bands across the top of the forearm; paler, silvery paw
            float top = smoothstep(-0.4, 0.8, sin(vTh));
            float band = smoothstep(0.25, 0.85, sin(vZ * 2.4 + sin(vTh * 2.0) * 0.7 + pn(vec2(vTh * 2.0, vZ)) * 1.6)) * top * (1.0 - vPaw * 0.85);
            vec3 base = mix(vec3(0.43, 0.41, 0.39), vec3(0.2, 0.18, 0.17), band);
            base = mix(base, vec3(0.55, 0.53, 0.51), vPaw * 0.6);
            base *= 0.86 + 0.28 * pn(vec2(vTh * 9.0, vZ * 3.0));
            // undercoat darker at the skin, light silver tips on the outer layers
            vec3 col = mix(base * 0.55, base, smoothstep(0.0, 0.5, uH));
            col = mix(col, vec3(0.86, 0.85, 0.83), smoothstep(0.55, 1.0, uH / len) * (0.55 + 0.35 * rnd));
            diffuseColor.rgb = col;
          }`);
    };
    m.customProgramCacheKey = () => 'meow-pawfur-' + i;
    mats.push(m);
    const mesh = new THREE.Mesh(geo, m); mesh.renderOrder = i; mesh.frustumCulled = false; mesh.castShadow = i === 0;
    paw.add(mesh);
  }
  // pink toe beans and the big pad underneath, peeking out of the fur on the palm side
  const hand = new THREE.Group(); paw.add(hand);
  const padMat = new THREE.MeshStandardMaterial({ color: 0xd99aa3, roughness: 0.6, fog: false });
  const pads = new THREE.Group(); hand.add(pads);
  [[0, -0.62, 0.95, 0.34, 0.26], [-0.62, -0.42, 1.55, 0.17, 0.15], [-0.22, -0.5, 1.72, 0.17, 0.15], [0.22, -0.5, 1.72, 0.17, 0.15], [0.62, -0.42, 1.55, 0.17, 0.15]].forEach(([x, y, z, rx, rz]) => {
    const b = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 12), padMat); b.scale.set(rx, 0.07, rz); b.position.set(x, y, z); pads.add(b);
  });
  return {
    group: paw,
    // len: leg length (world units); open: 1 = toes spread, 0 = curled into a grab; claws 0..1 (hidden in the fur)
    set(len, open) {
      U.uLen.value = Math.max(0.01, len); U.uCurl.value = 1 - open;
      hand.position.z = len;
      // the pads follow the paw's curl (same bend as the shader, applied to their group)
      const a = U.uCurl.value * 1.1 * 0.75; pads.rotation.x = a; pads.position.set(0, 0, 0);
    }
  };
}

export function createPortal({ scene, trees, camera, isClearing }) {
  const links = (window.MEOW_LINKS || []).filter((l) => l && /^https?:\/\//i.test(l.url || ''));
  const byTree = new Map();          // tree id → { link, top }

  /* ---------- which tree holds which link ---------- */
  {
    const ok = trees.base.map((b, i) => ({ i, b }))
      .filter(({ b }) => { const d = Math.hypot(b.p.x - HOUSE.x, b.p.z - HOUSE.z); return d > 28 && d < 600 && b.p.x > HOUSE.x + 14 && b.p.y > 3 && b.p.y < 55 && !isClearing(b.p.x, b.p.z); });
    const taken = new Set(), MIN = 7;
    const nearest = (x, z) => {
      let best = null, bd = Infinity;
      for (const c of ok) {
        if (taken.has(c.i)) continue;
        const d = Math.hypot(c.b.p.x - x, c.b.p.z - z);
        if (d < bd && [...taken].every((t) => Math.hypot(trees.base[t].p.x - c.b.p.x, trees.base[t].p.z - c.b.p.z) > MIN)) { bd = d; best = c; }
      }
      return best;
    };
    let from = GROVE;   // the first link takes the tree nearest the grove; each next one the free tree nearest the last
    for (const link of links) {
      const c = nearest(from.x, from.z); if (!c) break;
      taken.add(c.i);
      byTree.set(c.i, { link, top: c.b.p.y + c.b.s.y * 2.2 });
      from = { x: c.b.p.x, z: c.b.p.z };
    }
  }

  if (trees.keep) trees.keep([...byTree.keys()]);

  /* ---------- the hover card ---------- */
  const tip = document.createElement('div');
  tip.style.cssText = 'position:fixed;z-index:31;pointer-events:none;display:flex;gap:10px;align-items:center;padding:9px 14px;border-radius:14px;background:rgba(20,26,32,.72);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);color:#fff;font:500 13px/1.3 "Josefin Sans",system-ui,sans-serif;border:1px solid rgba(255,255,255,.16);opacity:0;transition:opacity .2s;max-width:320px';
  document.body.appendChild(tip);
  let tipFor = -1;
  const showTip = (id, x, y) => {
    const t = byTree.get(id); if (!t) return;
    if (tipFor !== id) {
      tipFor = id;
      const d = host(t.link.url);
      tip.innerHTML = `<img src="https://www.google.com/s2/favicons?domain=${encodeURIComponent(d)}&sz=64" width="28" height="28" style="border-radius:7px;background:#fff" alt="">
        <div><b style="font-weight:600">${(t.link.title || d).replace(/[<>&]/g, '')}</b><br><span style="opacity:.7">${d} · 🐾 click to go</span></div>`;
    }
    tip.style.left = Math.min(innerWidth - 330, x + 18) + 'px'; tip.style.top = Math.max(12, y - 20) + 'px'; tip.style.opacity = '1';
  };
  const hideTip = () => { tip.style.opacity = '0'; tipFor = -1; };

  /* ---------- the dark screen at the end (with the kitten) ---------- */
  const veil = document.createElement('div');
  veil.style.cssText = 'position:fixed;inset:0;z-index:60;pointer-events:none;display:none;background:#050607;opacity:0';
  veil.innerHTML = `<div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);text-align:center;color:#fff;font:500 18px/1.4 'Josefin Sans',system-ui,sans-serif;letter-spacing:.08em">
    <img src="test/assets/kitten.png" alt="" style="width:150px;height:150px;object-fit:contain;display:block;margin:0 auto 10px;filter:drop-shadow(0 6px 18px rgba(0,0,0,.6))">
    <div class="to"></div></div>`;
  document.body.appendChild(veil);
  const to = veil.querySelector('.to'), kitty = veil.querySelector('img');

  const paw = buildPaw(); paw.group.visible = false; scene.add(paw.group);
  const P = { active: false, t0: 0, dur: 2400, link: null, tree: new THREE.Vector3(), from: { pos: new THREE.Vector3(), q: new THREE.Quaternion() }, start: new THREE.Vector3(), gone: false, back: null };
  const side = new THREE.Vector3(), aim = new THREE.Vector3(), holdAim = new THREE.Vector3(), v1 = new THREE.Vector3(), camOff = new THREE.Vector3();
  const dir = new THREE.Vector3(), tip3 = new THREE.Vector3(), grab = new THREE.Vector3(), q = new THREE.Quaternion(), m4 = new THREE.Matrix4(), UP = new THREE.Vector3(0, 1, 0), pos = new THREE.Vector3();

  const api = {
    get active() { return P.active; },
    isLink(id) { return byTree.has(id); },
    get count() { return byTree.size; },
    trees() { return [...byTree.keys()]; },
    hover(id, x, y) { if (byTree.has(id)) showTip(id, x, y); else hideTip(); },
    unhover: hideTip,
    // click on a link tree: the paw grabs you, then the page becomes the link.
    // before = where you stood (so Back can bring you back there)
    // mode 'near': you're pulled up close and a normal-size paw swipes you in;
    //      'far' : you stay where you are and the leg stretches all the way out to you
    go(id, quick, before, mode = 'near') {
      const t = byTree.get(id); if (!t || P.active) return false;
      const b = trees.base[id];
      P.active = true; P.gone = false; P.link = t.link; P.back = before || null;
      P.dur = window.__MEOW_PAW_DUR || (quick ? 1300 : 2600);
      P.t0 = performance.now();
      P.from.pos.copy(camera.position); P.from.q.copy(camera.quaternion);
      // the paw comes out of the tree at your eye height (a far tree: you're pulled closer first)
      P.tree.set(b.p.x, Math.max(b.p.y + 4, Math.min(camera.position.y, t.top - 2)), b.p.z);
      dir.subVectors(camera.position, P.tree); dir.y = 0; const d = dir.length(); dir.normalize();
      P.start.copy(P.tree).addScaledVector(dir, Math.min(d, mode === 'far' ? 1e9 : 13)); P.start.y = camera.position.y;
      P.trunkR = b.s.x * 0.9;
      hideTip();
      to.innerHTML = `${(t.link.title || host(t.link.url)).replace(/[<>&]/g, '')}<br><span style="opacity:.6;font-size:14px">${host(t.link.url)}</span>`;
      veil.style.display = 'block'; veil.style.opacity = '0'; kitty.style.opacity = '0'; to.style.opacity = '0';
      const S = window.MEOW_SOUND; if (S && S.whoosh) setTimeout(() => S.whoosh(), P.dur * 0.15);
      return true;
    },
    // each frame while the paw has you: places the camera (out) and the paw
    update(now, out) {
      if (!P.active) { paw.group.visible = false; return false; }
      const k = window.__MEOW_PAW_K !== undefined ? window.__MEOW_PAW_K : clamp((now - P.t0) / P.dur);   // (tests can freeze it)
      // phase 1 (0 → .32): you're turned toward the tree and drawn in close; the paw shoots out at you
      // phase 2 (.32 → .48): it grabs — toes curl, claws out, a little jolt
      // phase 3 (.48 → .86): it drags you back into the tree, faster and faster
      // phase 4 (.7 → 1): everything goes dark, then the website opens
      const grabK = clamp((k - 0.32) / 0.16), drag = easeIn(clamp((k - 0.48) / 0.38));
      pos.lerpVectors(P.from.pos, P.start, ease(clamp(k / 0.3)));
      // the paw aims a little below and to the side of you, so you see its striped leg reaching out
      dir.subVectors(pos, P.tree); dir.y = 0; dir.normalize();
      side.crossVectors(dir, UP).normalize();
      aim.copy(pos).addScaledVector(dir, -6.5).addScaledVector(side, 2.6); aim.y -= 2.4;
      if (k < 0.48) holdAim.copy(aim);
      const toAim = v1.subVectors(holdAim, P.tree), full = toAim.length(); toAim.normalize();
      const out1 = easeOut(clamp(k / 0.3)) * full;
      const reach = k < 0.48 ? out1 : full * (1 - drag);
      tip3.copy(P.tree).addScaledVector(toAim, reach);
      // the camera: once grabbed, you're held where the paw has you and dragged with it
      if (k < 0.48) camOff.subVectors(pos, holdAim);
      else pos.copy(tip3).addScaledVector(camOff, 1 - 0.55 * drag);
      const shake = grabK > 0 && grabK < 1 ? Math.sin(grabK * 40) * 0.15 * (1 - grabK) : 0;
      pos.y += shake;
      out.pos.copy(pos);
      grab.lerpVectors(P.tree, tip3, k < 0.48 ? 0.8 : 0.6);
      m4.lookAt(pos, grab, UP); q.setFromRotationMatrix(m4);
      out.q.copy(P.from.q).slerp(q, ease(clamp(k / 0.22))); out.roll = Math.sin(drag * Math.PI) * 0.12 + shake * 0.3;
      // the paw itself: its leg runs from inside the trunk out to the hand
      paw.group.visible = true;
      paw.group.position.copy(P.tree).addScaledVector(toAim, -2);
      paw.group.lookAt(holdAim);
      paw.group.rotateZ(Math.PI * 0.08);
      paw.group.scale.setScalar(0.9);
      paw.set((reach + 2) / 0.9, 1 - grabK, k < 0.32 ? 0 : clamp(grabK * 2));
      // dark
      veil.style.opacity = String(ease(clamp((k - 0.66) / 0.24)));
      if (k > 0.82) { kitty.style.opacity = '1'; to.style.opacity = '1'; kitty.style.transition = to.style.transition = 'opacity .3s'; }
      if (k >= 1 && !P.gone) {
        P.gone = true; paw.group.visible = false;
        try { sessionStorage.setItem('meow.back', JSON.stringify(P.back || {})); } catch { /* ignore */ }
        setTimeout(() => { if (!window.__MEOW_NO_NAV) location.assign(P.link.url); }, 350);
        // if the site can't be reached, the forest comes back after a while
        setTimeout(() => { if (document.visibilityState === 'visible' && P.gone && !window.__MEOW_NO_NAV) api.reset(); }, 8000);
      }
      return true;
    },
    reset() { P.active = false; P.gone = false; paw.group.visible = false; veil.style.display = 'none'; veil.style.opacity = '0'; }
  };
  return api;
}
