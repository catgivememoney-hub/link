/* MEOW (test copy) — link trees and the cat paw.
   Every link in links.js lives in a tree. The first link takes the tree nearest the cabin, and every
   link after it takes the free tree nearest the previous link's tree — so new links grow outward
   from the last one. Aim at a link tree to see where it goes (a little card with the site's icon).
   Click it: a big grey-tabby paw (Jeffy's kitten: grey with dark stripes and pale socks) shoots out of
   the tree, its toes curl and claws come out as it grabs you, it drags you into the tree, everything
   goes dark — and the page becomes that website. Back in the browser brings you back to the forest. */
import * as THREE from 'three';

const HOUSE = { x: 106, z: -119 };
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
function buildPaw() {
  const paw = new THREE.Group();
  // fur: very rough, with a soft sheen at grazing angles (velvet / fuzz), not a glossy rubber look
  const furMat = new THREE.MeshPhysicalMaterial({ vertexColors: true, roughness: 1, metalness: 0, sheen: 1, sheenRoughness: 0.55, sheenColor: new THREE.Color('#ffffff'), fog: false });
  const padMat = new THREE.MeshPhysicalMaterial({ vertexColors: true, roughness: 0.75, sheen: 0.3, sheenRoughness: 0.4, fog: false });
  // the leg: a tapered tube along +z (0 at the tree, 1 at the wrist); stretched to length each frame
  const arm = fuzz(new THREE.CylinderGeometry(0.9, 1.15, 1, 22, 48, true).rotateX(Math.PI / 2).translate(0, 0, 0.5), 0.035);
  {
    const p = arm.attributes.position, c = [];
    for (let i = 0; i < p.count; i++) {
      const z = p.getZ(i), a = Math.atan2(p.getY(i), p.getX(i)), top = Math.max(0, p.getY(i));
      // tabby stripes across the top, fading on the underside; a pale sock toward the wrist
      const ring = Math.sin(z * 30 + Math.sin(a * 3) * 1.2 + nz(a, z, 1) * 0.8) > 0.15 ? 1 : 0;
      const col = FUR.clone().lerp(STRIPE, ring * 0.8 * (0.25 + 0.75 * top));
      col.lerp(SOCK, ease(clamp((z - 0.78) / 0.16)));
      col.multiplyScalar(0.9 + 0.1 * nz(a * 5, z * 40, 2));
      c.push(col.r, col.g, col.b);
    }
    arm.setAttribute('color', new THREE.Float32BufferAttribute(c, 3));
  }
  const armMesh = new THREE.Mesh(arm, furMat);
  paw.add(armMesh);
  const hand = new THREE.Group(); paw.add(hand);
  const solid = (geo, col, mat = furMat, f = 0.03) => {
    const g = fuzz(geo.toNonIndexed(), f), n = g.attributes.position.count, c = [];
    for (let i = 0; i < n; i++) { const k = 0.93 + 0.07 * nz(g.attributes.position.getX(i) * 6, g.attributes.position.getY(i) * 6, i * 0.01); c.push(col.r * k, col.g * k, col.b * k); }
    g.setAttribute('color', new THREE.Float32BufferAttribute(c, 3)); return new THREE.Mesh(g, mat);
  };
  // a ruff of fur at the wrist
  for (let k = 0; k < 14; k++) { const a = (k / 14) * Math.PI * 2; const t = solid(new THREE.ConeGeometry(0.16, 0.55, 5), SOCK, furMat, 0.01); t.position.set(Math.cos(a) * 0.95, Math.sin(a) * 0.95, -0.05); t.rotation.set(Math.PI / 2 + 0.5, 0, a - Math.PI / 2); hand.add(t); }
  // the palm: a soft rounded mitten, a bit flatter front to back
  const palm = solid(new THREE.SphereGeometry(1, 28, 20), SOCK); palm.scale.set(1.3, 1.0, 0.95); palm.position.z = 0.5; hand.add(palm);
  // the main pad (three soft lobes) and four toes tucked in an arc, each with a small bean
  const pads = new THREE.Group(); hand.add(pads); pads.position.set(0, -0.28, 1.36);
  [[-0.26, 0.06, 0.27], [0.26, 0.06, 0.27], [0, -0.14, 0.33]].forEach(([x, y, r]) => { const m = solid(new THREE.SphereGeometry(r, 16, 12), BEAN, padMat, 0.004); m.position.set(x, y, 0); m.scale.z = 0.38; pads.add(m); });
  const toes = [];
  [[-0.86, 0.42, -0.32], [-0.3, 0.72, -0.1], [0.3, 0.72, 0.1], [0.86, 0.42, 0.32]].forEach(([x, y, rz]) => {
    const pivot = new THREE.Group(); pivot.position.set(x, y * 0.8, 0.9); pivot.rotation.z = rz; hand.add(pivot);
    const toe = solid(new THREE.SphereGeometry(0.4, 18, 14), SOCK); toe.scale.set(0.95, 1.05, 0.9); toe.position.set(0, 0.25, 0.22); pivot.add(toe);
    const bean = solid(new THREE.SphereGeometry(0.15, 12, 10), BEAN, padMat, 0.003); bean.scale.set(1, 1.15, 0.35); bean.position.set(0, 0.24, 0.57); pivot.add(bean);
    const claw = solid(new THREE.ConeGeometry(0.06, 0.38, 8).rotateX(Math.PI / 2).translate(0, 0, 0.19), CLAW, padMat, 0); claw.position.set(0, 0.5, 0.42); claw.rotation.x = -0.7; claw.scale.setScalar(0.01); pivot.add(claw);
    toes.push({ pivot, claw });
  });
  paw.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.frustumCulled = false; } });
  return {
    group: paw,
    // len: leg length (world units); open: 1 = toes spread, 0 = curled into a grab; claws 0..1
    set(len, open, claws) {
      armMesh.scale.z = Math.max(0.01, len);
      hand.position.z = len;
      toes.forEach(({ pivot, claw }, i) => {
        pivot.rotation.x = (1 - open) * 1.15 + (i % 2) * 0.05;
        claw.scale.setScalar(0.01 + claws * 0.99);
      });
      pads.scale.setScalar(0.9 + open * 0.1);
    }
  };
}

export function createPortal({ scene, trees, camera, isClearing }) {
  const links = (window.MEOW_LINKS || []).filter((l) => l && /^https?:\/\//i.test(l.url || ''));
  const byTree = new Map();          // tree id → { link, top }

  /* ---------- which tree holds which link ---------- */
  {
    const ok = trees.base.map((b, i) => ({ i, b }))
      .filter(({ b }) => { const d = Math.hypot(b.p.x - HOUSE.x, b.p.z - HOUSE.z); return d > 50 && d < 600 && b.p.y > 3 && b.p.y < 55 && !isClearing(b.p.x, b.p.z); });
    const taken = new Set(), MIN = 10;
    const nearest = (x, z) => {
      let best = null, bd = Infinity;
      for (const c of ok) {
        if (taken.has(c.i)) continue;
        const d = Math.hypot(c.b.p.x - x, c.b.p.z - z);
        if (d < bd && [...taken].every((t) => Math.hypot(trees.base[t].p.x - c.b.p.x, trees.base[t].p.z - c.b.p.z) > MIN)) { bd = d; best = c; }
      }
      return best;
    };
    let from = HOUSE;
    for (const link of links) {
      const c = nearest(from.x, from.z); if (!c) break;
      taken.add(c.i);
      byTree.set(c.i, { link, top: c.b.p.y + c.b.s.y * 2.2 });
      from = { x: c.b.p.x, z: c.b.p.z };
    }
  }

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
