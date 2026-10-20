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
const FUR = new THREE.Color('#6f665d'), STRIPE = new THREE.Color('#221e1b'), SOCK = new THREE.Color('#d6cfc6'), BEAN = new THREE.Color('#f29bb0'), CLAW = new THREE.Color('#fbf7f0');
function buildPaw() {
  const paw = new THREE.Group();
  const furMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, fog: false });
  // the leg: a tapered tube along +z (0 at the tree, 1 at the wrist); stretched to length each frame
  const arm = new THREE.CylinderGeometry(1.0, 1.35, 1, 18, 40, true).rotateX(Math.PI / 2).translate(0, 0, 0.5);
  {
    const p = arm.attributes.position, c = [];
    for (let i = 0; i < p.count; i++) {
      const z = p.getZ(i), a = Math.atan2(p.getY(i), p.getX(i));
      // tabby stripes: wavy rings, darker on top; pale sock toward the wrist
      const ring = Math.sin(z * 38 + Math.sin(a * 3) * 1.1) > 0.05 && p.getY(i) > -0.75 ? 1 : 0;
      const col = FUR.clone().lerp(STRIPE, ring * 0.85 * (0.6 + 0.4 * Math.max(0, p.getY(i))));
      col.lerp(SOCK, ease(clamp((z - 0.9) / 0.08)));
      col.multiplyScalar(0.92 + 0.08 * Math.sin(a * 17 + z * 90));
      c.push(col.r, col.g, col.b);
    }
    arm.setAttribute('color', new THREE.Float32BufferAttribute(c, 3));
  }
  const armMesh = new THREE.Mesh(arm, furMat);
  paw.add(armMesh);
  // the hand at the end of the leg (moves with the leg's length)
  const hand = new THREE.Group(); paw.add(hand);
  const solid = (geo, col) => { const g = geo.toNonIndexed(); const n = g.attributes.position.count, c = []; for (let i = 0; i < n; i++) c.push(col.r, col.g, col.b); g.setAttribute('color', new THREE.Float32BufferAttribute(c, 3)); return new THREE.Mesh(g, furMat); };
  const palm = solid(new THREE.SphereGeometry(1, 22, 16), SOCK); palm.scale.set(1.55, 1.15, 1.05); palm.position.z = 0.55; hand.add(palm);
  // the big heart-shaped pad, facing out (+z)
  const pads = new THREE.Group(); hand.add(pads); pads.position.set(0, -0.25, 1.48);
  [[-0.32, 0.05, 0.42], [0.32, 0.05, 0.42], [0, -0.22, 0.5]].forEach(([x, y, r]) => { const m = solid(new THREE.SphereGeometry(r, 14, 10), BEAN); m.position.set(x, y, 0); m.scale.z = 0.45; pads.add(m); });
  // four toes, each with its own bean and a claw that comes out on the grab
  const toes = [];
  [[-1.02, 0.52, -0.25], [-0.36, 0.92, -0.08], [0.36, 0.92, 0.08], [1.02, 0.52, 0.25]].forEach(([x, y, rz]) => {
    const pivot = new THREE.Group(); pivot.position.set(x * 0.92, y * 0.75, 0.95); pivot.rotation.z = rz; hand.add(pivot);
    const toe = solid(new THREE.SphereGeometry(0.48, 14, 10), SOCK); toe.scale.set(1, 1.05, 0.95); toe.position.set(0, 0.32, 0.25); pivot.add(toe);
    const bean = solid(new THREE.SphereGeometry(0.22, 10, 8), BEAN); bean.scale.z = 0.4; bean.position.set(0, 0.36, 0.68); pivot.add(bean);
    const claw = solid(new THREE.ConeGeometry(0.1, 0.55, 8).rotateX(Math.PI / 2).translate(0, 0, 0.27), CLAW); claw.position.set(0, 0.62, 0.5); claw.rotation.x = -0.6; claw.scale.setScalar(0.01); pivot.add(claw);
    toes.push({ pivot, claw });
  });
  // a few tufts of fur sticking out between the toes
  for (let k = 0; k < 3; k++) { const t = solid(new THREE.ConeGeometry(0.12, 0.5, 6), SOCK); t.position.set(-0.68 + k * 0.68, 1.05, 0.7); t.rotation.x = 0.4; hand.add(t); }
  paw.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.frustumCulled = false; } });
  return {
    group: paw,
    // len: leg length (world units); open: 1 = toes spread, 0 = curled into a grab; claws 0..1
    set(len, open, claws) {
      armMesh.scale.z = Math.max(0.01, len);
      hand.position.z = len;
      toes.forEach(({ pivot, claw }, i) => {
        pivot.rotation.x = (1 - open) * 1.25 + (i % 2) * 0.05;
        claw.scale.setScalar(0.01 + claws * 0.99);
      });
      pads.scale.setScalar(0.85 + open * 0.15);
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
    go(id, quick, before) {
      const t = byTree.get(id); if (!t || P.active) return false;
      const b = trees.base[id];
      P.active = true; P.gone = false; P.link = t.link; P.back = before || null;
      P.dur = window.__MEOW_PAW_DUR || (quick ? 1300 : 2600);
      P.t0 = performance.now();
      P.from.pos.copy(camera.position); P.from.q.copy(camera.quaternion);
      // the paw comes out of the tree at your eye height (a far tree: you're pulled closer first)
      P.tree.set(b.p.x, Math.max(b.p.y + 4, Math.min(camera.position.y, t.top - 2)), b.p.z);
      dir.subVectors(camera.position, P.tree); dir.y = 0; const d = dir.length(); dir.normalize();
      P.start.copy(P.tree).addScaledVector(dir, Math.min(d, 26)); P.start.y = camera.position.y;
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
