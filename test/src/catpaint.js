/* MEOW (test copy) — paint your cat (Settings → Play together → Paint…).
   Paint is a list of dabs ("stamps") stored in the cat model's own rest-pose space, so the same paint fits
   every detail level (low / mid / very high) of that model. Each dab: position, surface direction, size,
   colour, opacity and brush. Each cat gets its own per-vertex "paint" colour (RGBA) that the cat shaders mix in.
   Dabs are packed into a short text (16 bytes each) to save in the browser and to send to other players. */
import * as THREE from 'three';
import { MeshBVH, acceleratedRaycast } from 'three-mesh-bvh';   // fast picking (MIT, test/vendor/three-mesh-bvh)

export const MAX_STAMPS = 6000;
const BRUSH = { soft: 0, hard: 1, spray: 2, erase: 3, highlighter: 4, pencil: 5, pen: 6, marker: 7 };
// the paint tools: which kind of dab each makes, its starting size and strength
export const TOOLS = {
  soft:        { k: 0, size: 22, alpha: 85, name: 'Soft brush',  icon: '🖌' },
  fine:        { k: 0, size: 7,  alpha: 90, name: 'Fine brush',  icon: '✒' },
  hard:        { k: 1, size: 20, alpha: 95, name: 'Hard brush',  icon: '⬤' },
  pen:         { k: 6, size: 3,  alpha: 100, name: 'Pen',        icon: '🖊' },
  pencil:      { k: 5, size: 5,  alpha: 80, name: 'Pencil',      icon: '✏' },
  marker:      { k: 7, size: 14, alpha: 90, name: 'Marker',      icon: '🖍' },
  highlighter: { k: 4, size: 24, alpha: 40, name: 'Highlighter', icon: '▮' },
  spray:       { k: 2, size: 32, alpha: 85, name: 'Spray',       icon: '💨' },
  erase:       { k: 3, size: 24, alpha: 100, name: 'Eraser',     icon: '⌫' }
};

/* ---------- pack / unpack ---------- */
export function encodePaint(stamps) {
  const n = Math.min(stamps.length, MAX_STAMPS), b = new ArrayBuffer(n * 16), v = new DataView(b);
  for (let i = 0; i < n; i++) {
    const s = stamps[i], o = i * 16;
    v.setInt16(o, Math.round(s.p[0] * 4000)); v.setInt16(o + 2, Math.round(s.p[1] * 4000)); v.setInt16(o + 4, Math.round(s.p[2] * 4000));
    v.setInt8(o + 6, Math.round(s.n[0] * 127)); v.setInt8(o + 7, Math.round(s.n[1] * 127)); v.setInt8(o + 8, Math.round(s.n[2] * 127));
    v.setUint8(o + 9, Math.min(255, Math.round(s.r * 300)));
    v.setUint8(o + 10, s.c[0]); v.setUint8(o + 11, s.c[1]); v.setUint8(o + 12, s.c[2]);
    v.setUint8(o + 13, Math.round(s.a * 255)); v.setUint8(o + 14, s.k); v.setUint8(o + 15, 0);
  }
  let str = ''; const u = new Uint8Array(b);
  for (let i = 0; i < u.length; i += 0x8000) str += String.fromCharCode.apply(null, u.subarray(i, i + 0x8000));
  return btoa(str);
}
export function decodePaint(text) {
  if (!text || typeof text !== 'string') return [];
  try {
    const bin = atob(text), u = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
    const v = new DataView(u.buffer), n = Math.min(MAX_STAMPS, Math.floor(u.length / 16)), out = [];
    for (let i = 0; i < n; i++) {
      const o = i * 16;
      out.push({ p: [v.getInt16(o) / 4000, v.getInt16(o + 2) / 4000, v.getInt16(o + 4) / 4000], n: [v.getInt8(o + 6) / 127, v.getInt8(o + 7) / 127, v.getInt8(o + 8) / 127],
        r: v.getUint8(o + 9) / 300, c: [v.getUint8(o + 10), v.getUint8(o + 11), v.getUint8(o + 12)], a: v.getUint8(o + 13) / 255, k: v.getUint8(o + 14) });
    }
    return out;
  } catch { return []; }
}

/* ---------- paint onto a geometry ---------- */
// a per-instance copy of the geometry that shares every buffer except its own "paint" colours
export function paintableGeometry(geo) {
  const g = new THREE.BufferGeometry();
  if (geo.index) g.setIndex(geo.index);
  for (const k in geo.attributes) g.setAttribute(k, geo.attributes[k]);
  g.groups = geo.groups.slice(); g.boundingSphere = geo.boundingSphere; g.boundingBox = geo.boundingBox;
  const n = geo.attributes.position.count;
  g.setAttribute('paint', new THREE.BufferAttribute(new Uint8Array(n * 4), 4, true));
  g.userData.paintRGBA = new Float32Array(n * 4);   // full precision while painting
  return g;
}
// vertex positions and normals in the cat's model space, measured on the cat in its rest pose
// (the files store positions squashed for size and undo that in the skeleton, so we ask three.js where each vertex really is)
export function bakeModelSpace(mesh, root) {
  const g = mesh.geometry, p = g.attributes.position, nr = g.attributes.normal, n = p.count;
  mesh.updateMatrixWorld(true); root.updateMatrixWorld(true); if (mesh.skeleton) mesh.skeleton.update();
  const M = root.matrixWorld.clone().invert().multiply(mesh.matrixWorld);
  const pos = new Float32Array(n * 3), nor = new Float32Array(n * 3), v = new THREE.Vector3(), w = new THREE.Vector3(), cell = 0.2, map = new Map();
  for (let i = 0; i < n; i++) {
    v.fromBufferAttribute(p, i); if (mesh.isSkinnedMesh) mesh.applyBoneTransform(i, v); v.applyMatrix4(M);
    pos[i * 3] = v.x; pos[i * 3 + 1] = v.y; pos[i * 3 + 2] = v.z;
    const k = Math.floor(v.x / cell) + ',' + Math.floor(v.y / cell) + ',' + Math.floor(v.z / cell);
    let a = map.get(k); if (!a) map.set(k, (a = [])); a.push(i);
  }
  if (nr) {
    // normals: skin a point a tiny step along the stored normal and see which way it went
    const e = 1e-3;
    for (let i = 0; i < n; i++) {
      w.fromBufferAttribute(nr, i).normalize().multiplyScalar(e).add(v.fromBufferAttribute(p, i));
      if (mesh.isSkinnedMesh) mesh.applyBoneTransform(i, w); w.applyMatrix4(M);
      w.x -= pos[i * 3]; w.y -= pos[i * 3 + 1]; w.z -= pos[i * 3 + 2]; w.normalize();
      nor[i * 3] = w.x; nor[i * 3 + 1] = w.y; nor[i * 3 + 2] = w.z;
    }
  }
  g.userData.grid = { cell, map, pos, nor: nr ? nor : null };
}
const gridOf = (g) => g.userData.grid;
const tmpC = new THREE.Color();
const linear = (c) => { tmpC.setRGB(c[0] / 255, c[1] / 255, c[2] / 255, THREE.SRGBColorSpace); return [tmpC.r, tmpC.g, tmpC.b]; };
// apply stamps[from..] on top of what is there; from = 0 starts clean
export function applyPaint(g, stamps, from = 0) {
  const A = g.attributes.paint, F = g.userData.paintRGBA; if (!A || !F) return;
  if (from === 0) F.fill(0);
  const grid = gridOf(g); if (!grid) return;
  const { cell, map, pos, nor } = grid, count = pos.length / 3;
  let lo = Infinity, hi = -1;
  for (let s = from; s < stamps.length; s++) {
    const st = stamps[s], r = Math.max(0.005, st.r), lc = linear(st.c);
    const x0 = Math.floor((st.p[0] - r) / cell), x1 = Math.floor((st.p[0] + r) / cell);
    const y0 = Math.floor((st.p[1] - r) / cell), y1 = Math.floor((st.p[1] + r) / cell);
    const z0 = Math.floor((st.p[2] - r) / cell), z1 = Math.floor((st.p[2] + r) / cell);
    for (let x = x0; x <= x1; x++) for (let y = y0; y <= y1; y++) for (let z = z0; z <= z1; z++) {
      const list = map.get(x + ',' + y + ',' + z); if (!list) continue;
      for (const i of list) {
        const dx = pos[i * 3] - st.p[0], dy = pos[i * 3 + 1] - st.p[1], dz = pos[i * 3 + 2] - st.p[2], d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (d >= r) continue;
        // only the side facing the brush (an ear painted in front stays clean behind)
        const facing = nor ? nor[i * 3] * st.n[0] + nor[i * 3 + 1] * st.n[1] + nor[i * 3 + 2] * st.n[2] : 1;
        if (facing < -0.15) continue;
        const t = d / r;
        let w;
        switch (st.k) {
          case BRUSH.hard: w = t < 0.82 ? 1 : 1 - (t - 0.82) / 0.18; break;
          case BRUSH.pen: w = t < 0.9 ? 1 : 1 - (t - 0.9) / 0.1; break;                       // crisp ink
          case BRUSH.marker: w = t < 0.6 ? 1 : 1 - (t - 0.6) / 0.4; break;                    // solid with a soft rim
          case BRUSH.highlighter: w = t < 0.85 ? 1 : 1 - (t - 0.85) / 0.15; break;            // flat
          case BRUSH.pencil: {                                                                // grainy, like paper tooth
            w = t < 0.8 ? 1 : 1 - (t - 0.8) / 0.2;
            const gr = Math.sin(i * 12.9898 + 78.233) * 43758.5453; w *= (gr - Math.floor(gr)) > 0.42 ? 1 : 0.18; break;
          }
          default: w = (1 - t) * (1 - t) * (3 - 2 * (1 - t));
        }
        w *= st.a * Math.min(1, (facing + 0.15) / 0.35);
        if (w <= 0) continue;
        const o = i * 4;
        if (st.k === BRUSH.erase) { F[o + 3] *= 1 - w; }
        else if (st.k === BRUSH.highlighter) {
          // see-through and never builds up past its strength, however often you go over it
          if (F[o + 3] < w) { const k2 = (w - F[o + 3]) / Math.max(1e-4, 1 - F[o + 3]); for (let c = 0; c < 3; c++) F[o + c] += (lc[c] - F[o + c]) * k2; F[o + 3] = w; }
        } else {
          const a0 = F[o + 3], a1 = a0 + w * (1 - a0);
          for (let c = 0; c < 3; c++) F[o + c] = a1 > 0 ? (F[o + c] * a0 * (1 - w) + lc[c] * w) / a1 : lc[c];
          F[o + 3] = a1;
        }
        if (i < lo) lo = i; if (i > hi) hi = i;
      }
    }
  }
  if (from === 0) { lo = 0; hi = count - 1; }
  if (hi < lo) return;
  const arr = A.array;
  for (let i = lo * 4; i <= hi * 4 + 3; i++) arr[i] = Math.max(0, Math.min(255, Math.round(F[i] * 255)));
  A.addUpdateRange(lo * 4, (hi - lo + 1) * 4); A.needsUpdate = true;
}

// shader pieces the cat materials add (vertex: pass the paint on; fragment: lay it over the fur)
export const PAINT_VS_HEAD = 'attribute vec4 paint;\nvarying vec4 vPaint;\n';
export const PAINT_VS_BODY = 'vPaint = paint;';
export const PAINT_FS_HEAD = 'varying vec4 vPaint;\n';
export const PAINT_FS_BODY = 'diffuseColor.rgb = mix(diffuseColor.rgb, vPaint.rgb, vPaint.a);';

/* ---------- the paint board ---------- */
// opts: { build(detail) -> cat (model cat with .mesh, .paintGeo, .setPaint), stamps, color, onSave(stamps), onClose() }
export function openPaintEditor(opts) {
  const css = `
  .mp-wrap{position:fixed;inset:0;z-index:2147482000;display:flex;background:#15171b;color:#f3efe8;font:14px/1.3 system-ui,-apple-system,Segoe UI,sans-serif;touch-action:none;user-select:none}
  .mp-view{position:relative;flex:1;min-width:0}
  .mp-view canvas{width:100%;height:100%;display:block;cursor:none}
  .mp-side{width:270px;max-width:46vw;overflow:auto;padding:16px;display:flex;flex-direction:column;gap:14px;background:#1d2026;border-left:1px solid rgba(255,255,255,.08)}
  .mp-side h2{margin:0;font-size:17px;letter-spacing:.02em}
  .mp-side h4{margin:0 0 6px;font-size:11px;letter-spacing:.12em;text-transform:uppercase;opacity:.6;font-weight:600}
  .mp-row{display:flex;gap:6px;flex-wrap:wrap}
  .mp-b{font:inherit;font-size:13px;padding:8px 10px;border-radius:11px;border:1.5px solid rgba(255,255,255,.14);background:rgba(255,255,255,.06);color:inherit;cursor:pointer}
  .mp-b:hover{background:rgba(255,255,255,.12)} .mp-b[aria-pressed=true]{border-color:#f3efe8;background:rgba(255,255,255,.18)}
  .mp-b.solid{background:#f3efe8;color:#16181c;border-color:#f3efe8;font-weight:600}
  .mp-b:disabled{opacity:.35;cursor:default}
  .mp-side input[type=range]{width:100%}
  .mp-col{display:flex;align-items:center;gap:10px}
  .mp-wheel{position:relative;width:44px;height:44px;border-radius:50%;overflow:hidden;cursor:pointer;background:conic-gradient(red,yellow,lime,cyan,blue,magenta,red);box-shadow:inset 0 0 0 3px rgba(255,255,255,.6)}
  .mp-wheel input{position:absolute;inset:0;opacity:0;width:100%;height:100%;cursor:pointer}
  .mp-cur{width:34px;height:34px;border-radius:50%;box-shadow:inset 0 0 0 2px rgba(255,255,255,.5)}
  .mp-recent{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-top:10px}
  .mp-recent button{aspect-ratio:1;border-radius:9px;border:2px solid rgba(255,255,255,.18);cursor:pointer;padding:0;transition:transform .18s cubic-bezier(.3,1.6,.5,1),box-shadow .18s,border-color .18s}
  .mp-recent button:hover{transform:scale(1.08)}
  .mp-recent button.on{transform:scale(1.22);border-color:#fff;box-shadow:0 0 0 3px rgba(255,255,255,.35),0 4px 12px rgba(0,0,0,.5);z-index:1;position:relative}
  .mp-recent .empty{border:2px dashed rgba(255,255,255,.14);background:transparent;cursor:default}
  .mp-tools{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}
  .mp-tools .mp-b{padding:8px 4px;font-size:12px;display:flex;flex-direction:column;align-items:center;gap:2px}
  .mp-tools .mp-b span{font-size:16px;line-height:1}
  .mp-big{flex:1;font-size:15px!important;font-weight:700;padding:12px 8px!important;letter-spacing:.02em}
  .mp-big b{font-size:20px;line-height:0;vertical-align:-2px;margin-right:4px}
  .mp-lock{display:flex;align-items:center;gap:6px}
  .mp-lock svg{width:18px;height:18px;overflow:visible}
  .mp-lock .sh{transition:transform .38s cubic-bezier(.3,1.7,.45,1);transform-origin:15px 9px}
  .mp-lock[aria-pressed=false] .sh{transform:translateY(-4px) rotate(-28deg)}
  .mp-lock .bd{transition:fill .25s}
  .mp-lock[aria-pressed=true] .bd{fill:#f3efe8} .mp-lock[aria-pressed=false] .bd{fill:none}
  .mp-lock[aria-pressed=true]{animation:mpclick .3s}
  @keyframes mpclick{40%{transform:scale(.9)}100%{transform:scale(1)}}
  .mp-side, .mp-side *{cursor:default} .mp-side button, .mp-side label, .mp-side input{cursor:pointer}
  .mp-hint{position:absolute;left:14px;bottom:12px;font-size:12px;opacity:.65;pointer-events:none;max-width:70%}
  .mp-count{font-size:11px;opacity:.55}
  .mp-foot{margin-top:auto;display:flex;gap:8px}
  .mp-foot .mp-b{flex:1;padding:11px}
  @media (max-width:700px){.mp-wrap{flex-direction:column}.mp-side{width:auto;max-width:none;max-height:44vh;border-left:0;border-top:1px solid rgba(255,255,255,.08)}}`;
  const wrap = document.createElement('div'); wrap.className = 'mp-wrap';
  wrap.innerHTML = `<style>${css}</style>
    <div class="mp-view"><canvas></canvas><div class="mp-hint">Paint: left mouse / one finger · Turn: right-drag, or the Turn tool · Zoom: wheel / pinch (zooms toward the pointer) · Move: Shift-drag / two fingers</div></div>
    <div class="mp-side">
      <h2>Paint your cat</h2>
      <div><h4>Tool</h4><div class="mp-row" data-g="mode"><button class="mp-b" data-v="paint">🖌 Paint</button><button class="mp-b" data-v="erase">⌫ Eraser</button><button class="mp-b" data-v="turn">✋ Turn</button></div>
        <div class="mp-row" style="margin-top:6px"><button class="mp-b mp-lock" data-l="lockX" title="Stop the cat turning left and right"><svg viewBox="0 0 24 24"><path class="sh" d="M7 11V8a5 5 0 0 1 10 0v3" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><rect class="bd" x="4.5" y="11" width="15" height="10" rx="2.5" stroke="currentColor" stroke-width="2"/></svg>Lock X</button><button class="mp-b mp-lock" data-l="lockY" title="Stop the cat tipping up and down"><svg viewBox="0 0 24 24"><path class="sh" d="M7 11V8a5 5 0 0 1 10 0v3" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><rect class="bd" x="4.5" y="11" width="15" height="10" rx="2.5" stroke="currentColor" stroke-width="2"/></svg>Lock Y</button><button class="mp-b" data-a="view">Reset view</button></div></div>
      <div><h4>Brush <span data-o="tool" style="text-transform:none;letter-spacing:0;opacity:.8"></span></h4><div class="mp-tools" data-g="brush">${['soft','fine','hard','pen','pencil','marker','highlighter','spray'].map((k) => `<button class="mp-b" data-v="${k}" title="${TOOLS[k].name}"><span>${TOOLS[k].icon}</span>${TOOLS[k].name.replace(' brush', '')}</button>`).join('')}</div></div>
      <div><h4>Brush size <span data-o="size"></span></h4><input type="range" data-i="size" min="1" max="100" value="22"></div>
      <div><h4>Strength <span data-o="alpha"></span></h4><input type="range" data-i="alpha" min="5" max="100" value="85"></div>
      <div><h4>Colour</h4><div class="mp-col"><label class="mp-wheel" title="Pick any colour"><input type="color" data-i="color"></label><div class="mp-cur"></div><span data-o="hex" style="font-size:12px;opacity:.7"></span></div>
        <div style="font-size:11px;opacity:.55;margin-top:10px">Last 10 colours</div><div class="mp-recent"></div></div>
      <div><h4>Edit</h4><div class="mp-row"><button class="mp-b mp-big" data-a="undo"><b>↶</b>Undo</button><button class="mp-b mp-big" data-a="redo"><b>↷</b>Redo</button></div><div class="mp-row" style="margin-top:6px"><button class="mp-b" data-a="clear" style="flex:1">Clear all</button></div><div class="mp-count" style="margin-top:6px"></div></div>
      <div class="mp-foot"><button class="mp-b" data-a="cancel">Cancel</button><button class="mp-b solid" data-a="save">Save</button></div>
    </div>`;
  document.body.appendChild(wrap);
  const q = (s) => wrap.querySelector(s), view = q('.mp-view'), canvas = q('canvas');
  const st = { mode: 'paint', brush: 'soft', color: opts.color || '#3a2a20', recent: [], sizes: {}, alphas: {}, lockX: false, lockY: false };
  try { const sv = JSON.parse(localStorage.getItem('meow.paintTools2') || '{}'); Object.assign(st, sv); } catch { /* ignore */ }
  if (!TOOLS[st.brush] || st.brush === 'erase') st.brush = 'soft';
  st.recent = (st.recent || []).filter((c) => /^#[0-9a-f]{6}$/i.test(c)).slice(-10);
  const saveTools = () => { try { localStorage.setItem('meow.paintTools2', JSON.stringify({ brush: st.brush, color: st.color, recent: st.recent, sizes: st.sizes, alphas: st.alphas, lockX: st.lockX, lockY: st.lockY })); } catch { /* ignore */ } };
  const tool = () => (st.mode === 'erase' ? 'erase' : st.brush);
  Object.defineProperty(st, 'size', { get: () => st.sizes[tool()] ?? TOOLS[tool()].size, set: (v) => { st.sizes[tool()] = v; } });
  Object.defineProperty(st, 'alpha', { get: () => st.alphas[tool()] ?? TOOLS[tool()].alpha, set: (v) => { st.alphas[tool()] = v; } });
  // the last 10 colours used: a new one goes on the end, and the oldest drops off the front
  const useColor = (c) => { c = c.toLowerCase(); if (st.recent.includes(c)) return; st.recent.push(c); if (st.recent.length > 10) st.recent.shift(); saveTools(); };
  const stamps = (opts.stamps || []).map((s) => ({ ...s, p: s.p.slice(), n: s.n.slice(), c: s.c.slice() }));
  const strokes = [];   // where each stroke starts in stamps (for undo)
  const redo = []; let cleared = null;
  const radius = () => 0.012 + Math.pow(st.size / 100, 1.6) * 0.75;

  // three.js scene
  const r = new THREE.WebGLRenderer({ canvas, antialias: true }); r.setPixelRatio(Math.min(2, devicePixelRatio)); r.toneMapping = THREE.ACESFilmicToneMapping; r.setClearColor(0x1b1e24);
  const scn = new THREE.Scene();
  scn.add(new THREE.HemisphereLight(0xffffff, 0x4a4038, 1.9));
  const key = new THREE.DirectionalLight(0xffffff, 2.2); key.position.set(-6, 9, -8); scn.add(key);
  const fill = new THREE.DirectionalLight(0xffffff, 0.9); fill.position.set(7, 3, 9); scn.add(fill);
  const cam = new THREE.PerspectiveCamera(32, 1, 0.05, 300); scn.add(cam);
  cam.add(new THREE.DirectionalLight(0xffffff, 0.6));   // a light that follows your view, so no side stays dark
  const pivot = new THREE.Group(); scn.add(pivot);       // the cat turns inside this
  let cat = null, mesh = null, pick = null, center = new THREE.Vector3(0, 2.8, 0), dist = 15, target = new THREE.Vector3();
  const resetView = () => { pivot.quaternion.setFromEuler(new THREE.Euler(0, Math.PI * 0.8, 0)); target.set(0, 0, 0); dist = 15; };
  const setCat = (c) => {
    if (cat) pivot.remove(cat.group);
    cat = c; mesh = c.mesh; c.group.position.set(0, 0, 0);
    // center the cat on the pivot so it turns around its middle
    c.group.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(mesh, true); box.getCenter(center); c.group.position.sub(center);
    pivot.add(c.group); c.setPaint(stamps);
    // a frozen copy of the cat's shape just for finding the spot under the pointer:
    // picking on the boned model recalculates every triangle on its bones each time; this copy skips that
    const grid = mesh.geometry.userData.grid;
    if (grid) {
      const pg = new THREE.BufferGeometry(); pg.setAttribute('position', new THREE.BufferAttribute(grid.pos, 3));
      if (mesh.geometry.index) pg.setIndex(mesh.geometry.index);
      pg.computeBoundingSphere(); pg.computeBoundingBox();
      pg.boundsTree = new MeshBVH(pg);   // a box tree over the triangles: each pick tests a handful instead of all of them
      pick = new THREE.Mesh(pg, new THREE.MeshBasicMaterial({ side: THREE.DoubleSide })); pick.raycast = acceleratedRaycast; pick.visible = false; c.root.add(pick);
    } else pick = mesh;
    const tag = c.group.children.find((o) => o.isSprite); if (tag) tag.visible = false;
  };
  setCat(opts.build());
  if (opts.buildHigh) opts.buildHigh().then((c) => { if (c && wrap.isConnected) setCat(c); }).catch(() => {});
  resetView();
  // the brush circle that follows the pointer on the fur
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.93, 1, 48), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.85, depthTest: false, side: THREE.DoubleSide }));
  ring.renderOrder = 20; ring.visible = false; scn.add(ring);
  const dot = new THREE.Mesh(new THREE.CircleGeometry(0.06, 16), new THREE.MeshBasicMaterial({ color: 0xffffff, depthTest: false })); dot.renderOrder = 21; ring.add(dot);

  // UI wiring
  const mark = () => {
    wrap.querySelectorAll('[data-g=mode] [data-v]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.v === st.mode)));
    wrap.querySelectorAll('[data-g=brush] [data-v]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.v === st.brush && st.mode === 'paint')));
    wrap.querySelectorAll('[data-l]').forEach((b) => b.setAttribute('aria-pressed', String(!!st[b.dataset.l])));
    q('[data-o=tool]').textContent = '· ' + TOOLS[tool()].name;
    q('[data-o=size]').textContent = st.size; q('[data-o=alpha]').textContent = st.alpha + '%';
    q('[data-i=size]').value = st.size; q('[data-i=alpha]').value = st.alpha; q('[data-i=color]').value = st.color;
    q('.mp-cur').style.background = st.color; q('[data-o=hex]').textContent = st.color.toUpperCase();
    q('[data-a=undo]').disabled = !strokes.length && !cleared; q('[data-a=redo]').disabled = !redo.length;
    q('.mp-count').textContent = `${stamps.length} / ${MAX_STAMPS} dabs` + (stamps.length >= MAX_STAMPS ? ' — full, erase or clear to paint more' : '');
    const rc = q('.mp-recent'); rc.innerHTML = '';
    for (let i = 0; i < 10; i++) {
      const c = st.recent[i], b = document.createElement('button');
      if (!c) { b.className = 'empty'; b.disabled = true; rc.appendChild(b); continue; }
      b.style.background = c; b.title = c.toUpperCase(); if (c === st.color.toLowerCase()) b.className = 'on';
      b.addEventListener('click', () => { st.color = c; if (st.mode === 'erase') st.mode = 'paint'; mark(); saveTools(); });
      rc.appendChild(b);
    }
  };
  wrap.querySelector('[data-g=mode]').addEventListener('click', (e) => { const b = e.target.closest('[data-v]'); if (b) { st.mode = b.dataset.v; mark(); } });
  wrap.querySelector('[data-g=brush]').addEventListener('click', (e) => { const b = e.target.closest('[data-v]'); if (b) { st.brush = b.dataset.v; st.mode = 'paint'; mark(); saveTools(); } });
  wrap.querySelectorAll('[data-l]').forEach((b) => b.addEventListener('click', () => { st[b.dataset.l] = !st[b.dataset.l]; mark(); saveTools(); }));
  q('[data-i=size]').addEventListener('input', (e) => { st.size = +e.target.value; mark(); saveTools(); });
  q('[data-i=alpha]').addEventListener('input', (e) => { st.alpha = +e.target.value; mark(); saveTools(); });
  q('[data-i=color]').addEventListener('input', (e) => { st.color = e.target.value; if (st.mode === 'erase') st.mode = 'paint'; mark(); });
  const repaint = () => { cat.setPaint(stamps); mark(); };
  wrap.addEventListener('click', (e) => {
    const a = e.target.closest('[data-a]'); if (!a) return;
    const k = a.dataset.a;
    if (k === 'view') resetView();
    if (k === 'undo') { if (strokes.length) { const at = strokes.pop(); redo.push(stamps.splice(at)); repaint(); } else if (cleared) { stamps.push(...cleared); cleared = null; repaint(); } }
    if (k === 'redo' && redo.length) { strokes.push(stamps.length); stamps.push(...redo.pop()); repaint(); }
    if (k === 'clear' && stamps.length) { cleared = stamps.splice(0); strokes.length = 0; redo.length = 0; repaint(); }
    if (k === 'save') { close(); opts.onSave(stamps); }
    if (k === 'cancel') { if (stamps.length !== (opts.stamps || []).length && !confirmLeave()) return; close(); if (opts.onClose) opts.onClose(); }
  });
  const confirmLeave = () => { const b = q('[data-a=cancel]'); if (b.dataset.sure) return true; b.dataset.sure = '1'; b.textContent = 'Discard?'; setTimeout(() => { b.textContent = 'Cancel'; delete b.dataset.sure; }, 2500); return false; };

  // picking the fur under the pointer
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  const hitAt = (x, y) => {
    const rc = canvas.getBoundingClientRect(); ndc.set(((x - rc.left) / rc.width) * 2 - 1, -((y - rc.top) / rc.height) * 2 + 1);
    ray.setFromCamera(ndc, cam); ray.firstHitOnly = true; const h = ray.intersectObject(pick, false)[0]; if (!h) return null;
    const root = cat.root; root.updateMatrixWorld(true);
    const local = root.worldToLocal(h.point.clone());
    const wn = (h.face ? h.face.normal.clone() : new THREE.Vector3(0, 1, 0)).transformDirection(pick.matrixWorld);
    // make the normal face the viewer (the copy is two-sided)
    if (wn.dot(ray.ray.direction) > 0) wn.negate();
    const n = wn.clone().transformDirection(root.matrixWorld.clone().invert());
    return { point: h.point, local, n, wn };
  };
  let last = null;
  const dab = (h, first) => {
    if (stamps.length >= MAX_STAMPS) return;
    const rad = radius(), col = new THREE.Color(st.color), c = [Math.round(col.r * 255), Math.round(col.g * 255), Math.round(col.b * 255)];
    // the radius in the cat's own units (the cat may be shown scaled)
    const R = rad / cat.root.matrixWorld.getMaxScaleOnAxis();
    if (!first && last && last.distanceTo(h.local) < R * (tool() === 'spray' ? 0.6 : 0.28)) return;
    const from = stamps.length;
    const base = { n: [h.n.x, h.n.y, h.n.z], c, a: st.alpha / 100, k: TOOLS[tool()].k };
    if (tool() === 'spray') {
      // speckles scattered over the brush circle
      const t1 = new THREE.Vector3().crossVectors(h.n, Math.abs(h.n.y) < 0.9 ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(1, 0, 0)).normalize(), t2 = new THREE.Vector3().crossVectors(h.n, t1);
      for (let i = 0; i < 9; i++) {
        const a = Math.random() * Math.PI * 2, d = Math.sqrt(Math.random()) * R;
        const p = h.local.clone().addScaledVector(t1, Math.cos(a) * d).addScaledVector(t2, Math.sin(a) * d);
        stamps.push({ ...base, p: [p.x, p.y, p.z], r: R * (0.1 + Math.random() * 0.12), k: BRUSH.hard });
      }
    } else {
      // a fast stroke: fill the gap since the last dab so the line stays solid
      if (!first && last) {
        const gap = last.distanceTo(h.local), step = R * 0.3, k = Math.min(40, Math.floor(gap / step));
        if (gap < R * 8) for (let j = 1; j < k; j++) { const p = last.clone().lerp(h.local, j / k); stamps.push({ ...base, p: [p.x, p.y, p.z], r: R }); }
      }
      stamps.push({ ...base, p: [h.local.x, h.local.y, h.local.z], r: R });
    }
    last = h.local.clone();
    cat.addPaint(stamps, from);
    if (tool() !== 'erase' && first) { useColor(st.color); mark(); }
  };
  // pointer handling: paint, turn (360° in every direction), zoom and move
  const ptrs = new Map(); let drag = null, pinch = null;
  const right = new THREE.Vector3(), up = new THREE.Vector3(), qq = new THREE.Quaternion();
  const turn = (dx, dy) => {
    cam.updateMatrixWorld(); right.setFromMatrixColumn(cam.matrixWorld, 0); up.setFromMatrixColumn(cam.matrixWorld, 1);
    if (!st.lockX) pivot.quaternion.premultiply(qq.setFromAxisAngle(up, dx * 0.009));
    if (!st.lockY) pivot.quaternion.premultiply(qq.setFromAxisAngle(right, dy * 0.009));
  };
  const pan = (dx, dy) => { cam.updateMatrixWorld(); right.setFromMatrixColumn(cam.matrixWorld, 0); up.setFromMatrixColumn(cam.matrixWorld, 1); const k = dist * 0.0012; target.addScaledVector(right, -dx * k).addScaledVector(up, dy * k); };
  const zoomAt = (factor, x, y) => {
    const nd = Math.max(1.2, Math.min(40, dist * factor));
    const h = x !== undefined ? hitAt(x, y) : null;
    if (h && factor < 1) target.lerp(h.point, 1 - nd / dist);   // zoom toward what you point at
    dist = nd;
  };
  canvas.addEventListener('contextmenu', (e) => e.preventDefault());
  canvas.addEventListener('pointerdown', (e) => {
    canvas.setPointerCapture(e.pointerId); ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (ptrs.size === 2) { const [a, b] = [...ptrs.values()]; pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }; drag = null; return; }
    const how = e.button === 2 || e.button === 1 || st.mode === 'turn' ? (e.shiftKey ? 'pan' : 'turn') : e.shiftKey ? 'pan' : 'paint';
    drag = { how, x: e.clientX, y: e.clientY };
    if (how === 'paint') { const h = hitAt(e.clientX, e.clientY); strokes.push(stamps.length); redo.length = 0; cleared = null; last = null; if (h) dab(h, true); }
  });
  canvas.addEventListener('pointermove', (e) => {
    const p = ptrs.get(e.pointerId); if (p) { p.x = e.clientX; p.y = e.clientY; }
    if (pinch && ptrs.size === 2) {
      const [a, b] = [...ptrs.values()], d = Math.hypot(a.x - b.x, a.y - b.y), mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
      zoomAt(pinch.d / Math.max(1, d), mx, my); pan(mx - pinch.x, my - pinch.y); pinch = { d, x: mx, y: my }; return;
    }
    pending = { x: e.clientX, y: e.clientY };   // the spot under the pointer is found once per frame, not per mouse event
    if (!drag) return;
    const dx = e.clientX - drag.x, dy = e.clientY - drag.y; drag.x = e.clientX; drag.y = e.clientY;
    if (drag.how === 'turn') { turn(dx, dy); hover = null; } else if (drag.how === 'pan') { pan(dx, dy); hover = null; }
  });
  const end = (e) => {
    ptrs.delete(e.pointerId); if (ptrs.size < 2) pinch = null;
    if (drag && drag.how === 'paint') { if (strokes.length && strokes[strokes.length - 1] === stamps.length) strokes.pop(); mark(); }
    drag = null;
  };
  canvas.addEventListener('pointerup', end); canvas.addEventListener('pointercancel', end);
  canvas.addEventListener('pointerleave', () => { hover = null; pending = null; });
  canvas.addEventListener('wheel', (e) => { e.preventDefault(); zoomAt(Math.exp(e.deltaY * 0.0012), e.clientX, e.clientY); }, { passive: false });
  const onKey = (e) => {
    if (e.key === 'Escape') q('[data-a=cancel]').click();
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') { e.preventDefault(); q(e.shiftKey ? '[data-a=redo]' : '[data-a=undo]').click(); }
    if (e.key === '[') { st.size = Math.max(1, st.size - 4); mark(); } if (e.key === ']') { st.size = Math.min(100, st.size + 4); mark(); }
    e.stopPropagation();
  };
  addEventListener('keydown', onKey, true);

  let hover = null, pending = null, raf = 0, alive = true, overCanvas = false;
  canvas.addEventListener('pointerenter', () => { overCanvas = true; }); canvas.addEventListener('pointerleave', () => { overCanvas = false; });
  const frame = () => {
    if (!alive) return;
    if (pending && st.mode !== 'turn' && (!drag || drag.how === 'paint') || (pending && drag && drag.how === 'paint')) {
      hover = hitAt(pending.x, pending.y);
      if (drag && drag.how === 'paint' && hover) dab(hover, false);
    }
    pending = null;
    const w = view.clientWidth, h = view.clientHeight;
    if (canvas.width !== Math.round(w * r.getPixelRatio())) { r.setSize(w, h, false); cam.aspect = w / Math.max(1, h); cam.updateProjectionMatrix(); }
    cam.position.copy(target).add(new THREE.Vector3(0, 0, dist)); cam.lookAt(target);
    if (hover && st.mode !== 'turn' && (!drag || drag.how === 'paint')) {
      ring.visible = true; ring.position.copy(hover.point).addScaledVector(hover.wn, 0.01);
      ring.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), hover.wn); ring.scale.setScalar(radius());
      ring.material.color.set(tool() === 'erase' ? '#ffffff' : st.color); dot.material.color.set(tool() === 'erase' ? '#ff6b6b' : '#ffffff');
    } else ring.visible = false;
    canvas.style.cursor = drag && drag.how !== 'paint' ? 'grabbing' : hover && st.mode !== 'turn' ? 'none' : 'grab';
    // the site's own arrow: hidden only while the brush circle stands in for it over the cat
    const mc = document.querySelector('.mcur'); if (mc) mc.style.visibility = ring.visible && overCanvas ? 'hidden' : '';
    r.render(scn, cam);
    raf = requestAnimationFrame(frame);
  };
  const close = () => { const mc = document.querySelector('.mcur'); if (mc) mc.style.visibility = ''; alive = false; cancelAnimationFrame(raf); removeEventListener('keydown', onKey, true); r.dispose(); r.forceContextLoss(); wrap.remove(); };
  mark(); frame();
  return { close };
}
