/* MEOW (test copy) — the desktop computer in the cabin works.
   Click the monitor (or press E while looking at it): you sit down, the view moves in to the
   screen, and a small web browser fills it — Google search, YouTube (paste any YouTube link and
   it plays right there), or any address. Esc or ✕ to stand up.

   Many big sites (google.com's own home page, youtube.com itself, most social sites) refuse to
   be shown inside another website. So Google runs in its embeddable mode, YouTube videos play
   through YouTube's embed player, and every page has ↗ to open it in a real browser tab. */
import * as THREE from 'three';
import { toWorld } from './house.js';

// the monitor's screen in house metres (see the Blender build): centre, half width, half height
const SCR = { x: -1.394, y: -3.066, z: 2.033, hw: 0.328, hh: 0.198 };   // the new monitor (Poly Pizza, see README)
const GOOGLE = 'https://www.google.com/webhp?igu=1';
const ytId = (u) => {
  const m = /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|live\/)|youtu\.be\/)([\w-]{11})/i.exec(u);
  return m ? m[1] : null;
};

export function createComputer({ camera, house }) {
  const C = { active: false, k: 0, meshes: [], ready: false, from: { pos: new THREE.Vector3(), q: new THREE.Quaternion() } };
  const seatPos = toWorld(SCR.x, SCR.y + 0.86, SCR.z + 0.02);
  const centre = toWorld(SCR.x, SCR.y, SCR.z);
  const seatQ = new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().lookAt(seatPos, centre, new THREE.Vector3(0, 1, 0)));
  const corners = [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([a, b]) => toWorld(SCR.x + a * SCR.hw, SCR.y, SCR.z + b * SCR.hh));

  house.whenReady((root) => {
    const mon = root.getObjectByName('Monitor');
    if (mon) mon.traverse((o) => { if (o.isMesh) C.meshes.push(o); });
    C.ready = C.meshes.length > 0;
  });

  /* ---------- the screen: a little browser ---------- */
  const el = document.createElement('div');
  el.className = 'pc-screen';
  el.innerHTML = `
    <style>
      .pc-screen{position:fixed;z-index:35;display:none;flex-direction:column;background:#0f1418;border-radius:4px;overflow:hidden;box-shadow:0 0 0 2px #050607, 0 0 40px rgba(120,170,255,.18);font:500 12px/1.3 "Josefin Sans",system-ui,sans-serif;color:#e8eef2;opacity:0;transition:opacity .35s}
      .pc-screen.on{opacity:1}
      .pc-bar{display:flex;gap:6px;align-items:center;padding:6px 8px;background:#1b232a;border-bottom:1px solid #263039}
      .pc-bar button{all:unset;cursor:pointer;padding:5px 10px;border-radius:6px;background:#26313a;white-space:nowrap}
      .pc-bar button:hover{background:#32414d}
      .pc-bar button.on{background:#3d6fb6}
      .pc-bar form{flex:1;display:flex}
      .pc-bar input{flex:1;min-width:0;border:0;outline:0;border-radius:6px;padding:6px 10px;background:#0c1115;color:#e8eef2;font:inherit}
      .pc-body{position:relative;flex:1;background:#fff}
      .pc-body iframe{position:absolute;inset:0;width:100%;height:100%;border:0;background:#fff}
      .pc-page{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;gap:12px;background:#0f0f0f;color:#fff;padding:20px;text-align:center}
      .pc-page h2{margin:0;font-size:20px;letter-spacing:.06em}
      .pc-page input{width:min(420px,90%);border:0;outline:0;border-radius:999px;padding:10px 16px;background:#222;color:#fff;font:inherit}
      .pc-page small{opacity:.6;max-width:440px}
      .pc-left{position:absolute;left:0;right:0;top:0;display:none;gap:8px;align-items:center;flex-wrap:wrap;padding:8px 10px;background:#fff7d6;color:#3a3220;border-bottom:1px solid #e8d79a;font-size:12px;z-index:2}
      .pc-left button{all:unset;cursor:pointer;padding:4px 10px;border-radius:6px;background:#2f5f9e;color:#fff;white-space:nowrap}
      .pc-left button.ghost{background:#e9dfb8;color:#3a3220}
      .pc-note{position:absolute;left:8px;bottom:8px;right:8px;font-size:11px;color:#556;pointer-events:none;background:rgba(255,255,255,.85);padding:4px 8px;border-radius:6px;transition:opacity .6s}
    </style>
    <div class="pc-bar">
      <button data-go="google">Google</button>
      <button data-go="youtube">YouTube</button>
      <form><input name="u" placeholder="Search Google or type an address / YouTube link" autocomplete="off" spellcheck="false"></form>
      <button data-go="new" title="Open this page in a real browser tab">↗</button>
      <button data-go="close" title="Stand up (Esc)">✕</button>
    </div>
    <div class="pc-body">
      <iframe allow="autoplay; encrypted-media; fullscreen; picture-in-picture; clipboard-write" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <div class="pc-page yt">
        <h2>▶ YouTube</h2>
        <form class="yt-play"><input name="v" placeholder="Paste a YouTube link to play it here" autocomplete="off"></form>
        <form class="yt-search"><input name="q" placeholder="…or search YouTube (opens a new tab)" autocomplete="off"></form>
        <small>YouTube doesn't allow its own site inside other websites, but its videos play here.</small>
      </div>
      <div class="pc-left"><span>Opened a site from the results. If it says <b>refused to connect</b>, that site doesn't allow being shown inside other websites.</span><button data-go="back">◀ Back to Google</button><button class="ghost" data-go="newsearch">↗ Search in a real tab</button></div>
      <div class="pc-note">If a page stays blank, that site blocks being shown inside other sites — press ↗ to open it in a new tab.</div>
    </div>`;
  document.body.appendChild(el);
  const frame = el.querySelector('iframe'), addr = el.querySelector('.pc-bar input'), yt = el.querySelector('.pc-page.yt'), note = el.querySelector('.pc-note');
  let current = GOOGLE, realUrl = 'https://www.google.com/';
  const tabs = (name) => el.querySelectorAll('.pc-bar button[data-go]').forEach((b) => b.classList.toggle('on', b.dataset.go === name));
  // every page we load ourselves counts one 'load'; any load beyond that means a link was clicked
  // inside the page (e.g. a Google result). Most sites refuse to be shown inside another site,
  // so after a click from the results we offer a way back and a real tab.
  const left = el.querySelector('.pc-left'); let expect = 0, lastSearch = '';
  // (from Google's home page the first page change is the results page itself, so one more is allowed)
  let extra = 0;
  frame.addEventListener('load', () => {
    if (expect > 0) { expect--; extra = 0; left.style.display = 'none'; return; }
    const g = (frame.src || '').includes('google.com/');
    if (g && ++extra > ((frame.src || '').includes('/search') ? 0 : 1)) left.style.display = 'flex';
  });
  const show = (url, real, tab) => {
    left.style.display = 'none';
    if (url.includes('google.com/search')) lastSearch = real;
    yt.style.display = 'none'; frame.style.display = 'block'; note.style.display = 'block'; note.style.opacity = '1';
    clearTimeout(show.t); show.t = setTimeout(() => { note.style.opacity = '0'; }, 7000);
    if (frame.src !== url) { expect = 1; frame.src = url; }
    current = url; realUrl = real || url; tabs(tab || '');
    addr.value = real && real.startsWith('https://www.google.com/search') ? decodeURIComponent((/[?&]q=([^&]*)/.exec(real) || [])[1] || '').replace(/\+/g, ' ') : (real || url);
  };
  const google = (q) => q ? show('https://www.google.com/search?igu=1&q=' + encodeURIComponent(q), 'https://www.google.com/search?q=' + encodeURIComponent(q), 'google') : show(GOOGLE, 'https://www.google.com/', 'google');
  const youtube = (id) => {
    if (id) { show(`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`, `https://www.youtube.com/watch?v=${id}`, 'youtube'); return; }
    frame.style.display = 'none'; note.style.display = 'none'; yt.style.display = 'flex'; tabs('youtube'); realUrl = 'https://www.youtube.com/'; addr.value = '';
    setTimeout(() => yt.querySelector('.yt-play input').focus(), 50);
  };
  const go = (text) => {
    const t = (text || '').trim(); if (!t) return;
    const id = ytId(t); if (id) return youtube(id);
    if (/^https?:\/\//i.test(t) || /^[\w-]+(\.[\w-]+)+(\/\S*)?$/.test(t)) { const u = /^https?:/i.test(t) ? t : 'https://' + t; return show(u, u, ''); }
    google(t);
  };
  el.querySelector('.pc-bar form').addEventListener('submit', (e) => { e.preventDefault(); go(addr.value); });
  el.querySelector('.yt-play').addEventListener('submit', (e) => { e.preventDefault(); const v = e.target.v.value; const id = ytId(v); if (id) youtube(id); else e.target.v.value = ''; });
  el.querySelector('.yt-search').addEventListener('submit', (e) => { e.preventDefault(); const q = e.target.q.value.trim(); if (q) window.open('https://www.youtube.com/results?search_query=' + encodeURIComponent(q), '_blank', 'noopener'); });
  el.addEventListener('click', (e) => {
    const b = e.target.closest('button[data-go]'); if (!b) return;
    const g = b.dataset.go;
    if (g === 'google') google();
    else if (g === 'youtube') youtube();
    else if (g === 'new') window.open(realUrl, '_blank', 'noopener');
    else if (g === 'close') api.close();
    else if (g === 'back') { expect = 1; left.style.display = 'none'; frame.src = current; }
    else if (g === 'newsearch') window.open(lastSearch || realUrl, '_blank', 'noopener');
  });
  // keys typed on the screen stay on the screen (except Esc, which stands you up)
  el.addEventListener('keydown', (e) => { if (e.key === 'Escape') { e.preventDefault(); api.close(); } e.stopPropagation(); });
  el.addEventListener('keyup', (e) => e.stopPropagation());

  const v = new THREE.Vector3();
  const place = () => {
    let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
    for (const c of corners) {
      v.copy(c).project(camera);
      const x = (v.x * 0.5 + 0.5) * innerWidth, y = (-v.y * 0.5 + 0.5) * innerHeight;
      x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y);
    }
    Object.assign(el.style, { left: x0 + 'px', top: y0 + 'px', width: (x1 - x0) + 'px', height: (y1 - y0) + 'px' });
  };

  const api = {
    get active() { return C.active; },
    get ready() { return C.ready; },
    // is the ray on the monitor (within reach)?
    pick(ray, reach = 22) { if (!C.ready) return false; const h = ray.intersectObjects(C.meshes, false)[0]; return !!h && h.distance < reach; },
    open(fromPos, fromQ) {
      if (C.active) return;
      C.active = true; C.k = 0; C.from.pos.copy(fromPos); C.from.q.copy(fromQ); document.documentElement.classList.add('boating', 'pc-on');
      if (!frame.src && yt.style.display !== 'flex') google();
    },
    close() {
      if (!C.active) return;
      C.active = false; el.classList.remove('on'); document.documentElement.classList.remove('boating', 'pc-on');
      setTimeout(() => { if (!C.active) el.style.display = 'none'; }, 350);
      if (document.activeElement && el.contains(document.activeElement)) document.activeElement.blur();
      if (yt.style.display !== 'flex' && current.includes('youtube')) frame.src = 'about:blank';   // stop a video when you stand up
      if (api.onClose) api.onClose();
    },
    // while seated: glide the camera in to the screen, then show the browser over it
    update(dt, out) {
      if (!C.active) return false;
      C.k = Math.min(1, C.k + dt / 0.7);
      const e = C.k * C.k * (3 - 2 * C.k);
      out.pos.lerpVectors(C.from.pos, seatPos, e); out.q.copy(C.from.q).slerp(seatQ, e); out.roll = 0;
      if (C.k >= 1) {
        if (el.style.display !== 'flex') { el.style.display = 'flex'; requestAnimationFrame(() => el.classList.add('on')); }
        place();
      }
      return true;
    }
  };
  return api;
}
