/* MEOW (test copy) — link trees and the cat paw.
   Every link in links.js gets its own tree near the cabin, marked by a little wooden signpost
   with the site's name. Aim at it to see where it goes. Click it: a big cat paw reaches out of
   the tree, grabs you, and pulls you in — and the page turns into that website.
   (Back in the browser brings you back to the forest.) */
import * as THREE from 'three';
import { heightAt } from './terrain.js';

const HOUSE = { x: 106, z: -119 };
const host = (u) => { try { return new URL(u).hostname.replace(/^www\./, ''); } catch { return u; } };

export function createPortal({ scene, trees, camera, isClearing }) {
  const links = (window.MEOW_LINKS || []).filter((l) => l && /^https?:\/\//i.test(l.url || ''));
  const byTree = new Map();          // tree id → { link, sign, pos }
  const group = new THREE.Group(); scene.add(group);

  /* ---------- pick a tree for every link: in the woods around the cabin, spread out ---------- */
  {
    const cand = trees.base.map((b, i) => ({ i, b, d: Math.hypot(b.p.x - HOUSE.x, b.p.z - HOUSE.z) }))
      .filter((c) => c.d > 55 && c.d < 260 && c.b.p.y > 3 && c.b.p.y < 45 && !isClearing(c.b.p.x, c.b.p.z))
      .sort((a, b) => a.d - b.d);
    const chosen = [];
    for (const c of cand) {
      if (chosen.length >= links.length) break;
      if (chosen.some((o) => Math.hypot(o.b.p.x - c.b.p.x, o.b.p.z - c.b.p.z) < 34)) continue;
      chosen.push(c);
    }
    const wood = new THREE.MeshLambertMaterial({ color: 0x6e4a2c });
    chosen.forEach((c, k) => {
      const link = links[k], b = c.b;
      // the signpost stands in front of the tree, facing the cabin
      const dx = HOUSE.x - b.p.x, dz = HOUSE.z - b.p.z, dl = Math.hypot(dx, dz) || 1;
      const off = b.s.x * 1.1 + 4.5;
      const px = b.p.x + (dx / dl) * off, pz = b.p.z + (dz / dl) * off, py = heightAt(px, pz);
      const sign = new THREE.Group();
      sign.position.set(px, py, pz); sign.rotation.y = Math.atan2(dx, dz);
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.34, 8.5, 7).translate(0, 4.25, 0), wood);
      const cv = document.createElement('canvas'); cv.width = 512; cv.height = 192;
      const g = cv.getContext('2d');
      g.fillStyle = '#8a5a34'; g.beginPath(); g.roundRect(6, 6, 500, 180, 26); g.fill();
      g.strokeStyle = '#5a3a20'; g.lineWidth = 8; g.stroke();
      for (let y = 40; y < 180; y += 34) { g.strokeStyle = 'rgba(60,35,18,.25)'; g.lineWidth = 2; g.beginPath(); g.moveTo(20, y); g.lineTo(492, y); g.stroke(); }
      g.fillStyle = '#fff4e2'; g.textAlign = 'center'; g.textBaseline = 'middle';
      let fs = 60; g.font = `600 ${fs}px "Josefin Sans", system-ui, sans-serif`;
      const title = (link.title || host(link.url)).slice(0, 26);
      while (g.measureText(title).width > 440 && fs > 26) { fs -= 4; g.font = `600 ${fs}px "Josefin Sans", system-ui, sans-serif`; }
      g.fillText(title, 256, 80);
      g.font = '400 30px "Josefin Sans", system-ui, sans-serif'; g.fillStyle = 'rgba(255,244,226,.75)';
      g.fillText('🐾 ' + host(link.url), 256, 140);
      const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
      const board = new THREE.Mesh(new THREE.PlaneGeometry(10, 3.75), new THREE.MeshLambertMaterial({ map: tex, side: THREE.DoubleSide }));
      board.position.set(0, 9.6, 0.36);
      const back = new THREE.Mesh(new THREE.BoxGeometry(10.3, 4.05, 0.5), wood); back.position.set(0, 9.6, 0);
      sign.add(post, back, board);
      sign.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
      group.add(sign);
      byTree.set(c.i, { link, sign, pos: b.p.clone(), s: b.s.x });
    });
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
        <div><b style="font-weight:600">${(t.link.title || d).replace(/[<>&]/g, '')}</b><br><span style="opacity:.7">${d} · click, the paw takes you there</span></div>`;
    }
    tip.style.left = Math.min(innerWidth - 330, x + 18) + 'px'; tip.style.top = Math.max(12, y - 20) + 'px'; tip.style.opacity = '1';
  };
  const hideTip = () => { tip.style.opacity = '0'; tipFor = -1; };

  /* ---------- the paw ---------- */
  const PAW = `<svg viewBox="0 0 220 300" width="100%" height="100%" aria-hidden="true">
    <defs><linearGradient id="fur" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f7b56a"/><stop offset="1" stop-color="#e48a3c"/></linearGradient></defs>
    <path d="M70 300 C 62 230, 58 190, 60 150 L 160 150 C 162 190, 158 230, 150 300 Z" fill="url(#fur)"/>
    <path d="M78 300 C 74 250, 76 210, 80 175 M110 300 C 110 250, 110 210, 110 172 M142 300 C 146 250, 144 210, 140 175" stroke="#d87a30" stroke-width="5" fill="none" stroke-linecap="round" opacity=".55"/>
    <ellipse cx="110" cy="118" rx="88" ry="74" fill="url(#fur)"/>
    <g class="claws" fill="#fffaf2" opacity="0">
      <path d="M40 62 l-8 -22 l16 14 z"/><path d="M80 34 l-4 -24 l13 19 z"/><path d="M140 34 l4 -24 l-13 19 z"/><path d="M180 62 l8 -22 l-16 14 z"/>
    </g>
    <g fill="#ff9db4">
      <ellipse cx="46" cy="82" rx="20" ry="24" transform="rotate(-25 46 82)"/>
      <ellipse cx="84" cy="54" rx="20" ry="25" transform="rotate(-8 84 54)"/>
      <ellipse cx="136" cy="54" rx="20" ry="25" transform="rotate(8 136 54)"/>
      <ellipse cx="174" cy="82" rx="20" ry="24" transform="rotate(25 174 82)"/>
      <path d="M110 92 C 140 92, 160 118, 158 140 C 156 162, 132 166, 110 158 C 88 166, 64 162, 62 140 C 60 118, 80 92, 110 92 Z"/>
    </g>
    <g fill="#fff" opacity=".35"><ellipse cx="40" cy="74" rx="6" ry="8"/><ellipse cx="80" cy="45" rx="6" ry="8"/><ellipse cx="131" cy="45" rx="6" ry="8"/><ellipse cx="168" cy="74" rx="6" ry="8"/><ellipse cx="96" cy="108" rx="10" ry="7"/></g>
  </svg>`;
  const veil = document.createElement('div');
  veil.style.cssText = 'position:fixed;inset:0;z-index:60;pointer-events:none;display:none';
  const paw = document.createElement('div');
  paw.style.cssText = 'position:absolute;width:min(60vmin,520px);aspect-ratio:220/300;left:0;top:0;transform-origin:50% 100%;will-change:transform;filter:drop-shadow(0 18px 30px rgba(0,0,0,.35))';
  paw.innerHTML = PAW;
  const dark = document.createElement('div');
  dark.style.cssText = 'position:absolute;inset:0;background:#07090b;opacity:0;-webkit-mask-image:radial-gradient(circle at var(--x) var(--y), transparent var(--r), #000 calc(var(--r) + 40px));mask-image:radial-gradient(circle at var(--x) var(--y), transparent var(--r), #000 calc(var(--r) + 40px))';
  const say = document.createElement('div');
  say.style.cssText = 'position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);color:#fff;font:500 18px/1.4 "Josefin Sans",system-ui,sans-serif;letter-spacing:.08em;text-align:center;opacity:0;transition:opacity .25s';
  veil.append(dark, paw, say); document.body.appendChild(veil);

  const P = { active: false, t0: 0, dur: 1800, link: null, tree: new THREE.Vector3(), from: { pos: new THREE.Vector3(), q: new THREE.Quaternion() }, sx: 0, sy: 0, gone: false, quick: false };
  const v = new THREE.Vector3(), mid = new THREE.Vector3(), endP = new THREE.Vector3(), q = new THREE.Quaternion(), m4 = new THREE.Matrix4(), UP = new THREE.Vector3(0, 1, 0);
  const ease = (x) => x * x * (3 - 2 * x), clamp = (x) => Math.min(1, Math.max(0, x));

  const api = {
    get active() { return P.active; },
    isLink(id) { return byTree.has(id); },
    count: byTree.size,
    hover(id, x, y) { if (byTree.has(id)) showTip(id, x, y); else hideTip(); },
    unhover: hideTip,
    // click on a link tree: the paw grabs you, then the page becomes the link
    go(id, quick) {
      const t = byTree.get(id); if (!t || P.active) return false;
      P.active = true; P.gone = false; P.link = t.link; P.quick = !!quick; P.dur = window.__MEOW_PAW_DUR || (quick ? 900 : 1900);
      P.t0 = performance.now();
      P.tree.set(t.pos.x, t.pos.y + 7.5, t.pos.z);
      P.from.pos.copy(camera.position); P.from.q.copy(camera.quaternion);
      hideTip();
      veil.style.display = 'block'; say.style.opacity = '0'; dark.style.opacity = '0';
      say.innerHTML = `🐾 ${(t.link.title || host(t.link.url)).replace(/[<>&]/g, '')}<br><span style="opacity:.6;font-size:14px">${host(t.link.url)}</span>`;
      const S = window.MEOW_SOUND; if (S && S.whoosh) S.whoosh();
      return true;
    },
    // each frame: the camera is pulled into the tree, the paw plays over it
    update(now, out, s) {
      group.visible = (s ? s.trees : 1) > 0.3;
      if (!P.active) return false;
      const k = clamp((now - P.t0) / P.dur);
      // where the tree is on screen (the paw comes out of it)
      v.copy(P.tree).project(camera);
      const tx = (v.x * 0.5 + 0.5) * innerWidth, ty = (-v.y * 0.5 + 0.5) * innerHeight;
      // camera: turn to the tree and get pulled in, faster and faster
      const dir = v.copy(P.tree).sub(P.from.pos); const dist = dir.length(); dir.normalize();
      mid.copy(P.from.pos);
      endP.copy(P.tree).addScaledVector(dir, -2);
      const pull = Math.pow(clamp((k - 0.38) / 0.62), 2.2);
      out.pos.lerpVectors(mid, endP, pull);
      m4.lookAt(out.pos.clone(), P.tree, UP); q.setFromRotationMatrix(m4);
      out.q.copy(P.from.q).slerp(q, ease(clamp(k / 0.35))); out.roll = Math.sin(pull * Math.PI) * 0.08;
      void dist;
      // the paw: reaches out of the tree (0 → .3), grabs (.3 → .45), pulls back in (.45 → .85)
      const W = paw.offsetWidth, H = paw.offsetHeight;
      const reach = ease(clamp(k / 0.3)), back = ease(clamp((k - 0.45) / 0.4));
      const cx = innerWidth / 2, cy = innerHeight * 0.95;
      const px = tx + (cx - tx) * reach * (1 - back), py = ty + (cy - ty) * reach * (1 - back);
      const ang = Math.atan2(ty - cy, tx - cx) * 180 / Math.PI + 90;
      const grab = k > 0.3 && k < 0.5 ? Math.sin(((k - 0.3) / 0.2) * Math.PI) : 0;
      const sc = (0.15 + 0.95 * reach) * (1 - 0.85 * back) * (1 + grab * 0.12);
      paw.style.transform = `translate(${px - W / 2}px, ${py - H}px) rotate(${ang + (1 - reach) * 20}deg) scale(${sc}, ${sc * (1 - grab * 0.16)})`;
      paw.style.opacity = String(k < 0.9 ? 1 : 1 - (k - 0.9) / 0.1);
      paw.querySelector('.claws').setAttribute('opacity', String(grab));
      // the world closes in to a circle around the tree, then goes dark
      const close = ease(clamp((k - 0.5) / 0.4));
      dark.style.setProperty('--x', tx + 'px'); dark.style.setProperty('--y', ty + 'px');
      dark.style.setProperty('--r', Math.max(0, (1 - close) * Math.hypot(innerWidth, innerHeight)) + 'px');
      dark.style.opacity = String(clamp((k - 0.45) / 0.15));
      if (k > 0.82) say.style.opacity = '1';
      if (k >= 1 && !P.gone) {
        P.gone = true;
        // the page becomes the link (Back returns to the forest)
        setTimeout(() => { if (!window.__MEOW_NO_NAV) location.assign(P.link.url); }, 250);   // (testing can switch the jump off)
        // if the site can't be reached the veil lifts again after a while
        setTimeout(() => { if (document.visibilityState === 'visible') { P.active = false; veil.style.display = 'none'; } }, 6000);
      }
      return true;
    },
    // coming back with the browser's Back button: the page may be restored from cache mid-animation
    reset() { P.active = false; veil.style.display = 'none'; }
  };
  addEventListener('pageshow', (e) => { if (e.persisted) api.reset(); });
  return api;
}
