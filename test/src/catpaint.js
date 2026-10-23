/* MEOW (test copy) — paint your cat (Settings → Play together → Paint…).
   Paint is a list of dabs ("stamps") stored in the cat model's own rest-pose space, so the same paint fits
   every detail level (low / mid / very high) of that model. Each dab: position, surface direction, size,
   colour, opacity and brush. Each cat gets its own per-vertex "paint" colour (RGBA) that the cat shaders mix in.
   Dabs are packed into a short text (16 bytes each) to save in the browser and to send to other players. */
import * as THREE from 'three';

export const MAX_STAMPS = 6000;
const BRUSH = { soft: 0, hard: 1, spray: 2, erase: 3 };

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
// vertex positions and normals in the cat's model space (the files store them squashed for size; userData.toModel undoes that)
const gridOf = (g) => {
  if (g.userData.grid) return g.userData.grid;
  const p = g.attributes.position, nr = g.attributes.normal, M = g.userData.toModel || new THREE.Matrix4(), NM = new THREE.Matrix3().getNormalMatrix(M);
  const n = p.count, pos = new Float32Array(n * 3), nor = new Float32Array(n * 3), v = new THREE.Vector3(), cell = 0.2, map = new Map();
  for (let i = 0; i < n; i++) {
    v.fromBufferAttribute(p, i).applyMatrix4(M); pos[i * 3] = v.x; pos[i * 3 + 1] = v.y; pos[i * 3 + 2] = v.z;
    if (nr) { v.fromBufferAttribute(nr, i).applyMatrix3(NM).normalize(); nor[i * 3] = v.x; nor[i * 3 + 1] = v.y; nor[i * 3 + 2] = v.z; }
    const k = Math.floor(pos[i * 3] / cell) + ',' + Math.floor(pos[i * 3 + 1] / cell) + ',' + Math.floor(pos[i * 3 + 2] / cell);
    let a = map.get(k); if (!a) map.set(k, (a = [])); a.push(i);
  }
  return (g.userData.grid = { cell, map, pos, nor: nr ? nor : null });
};
const tmpC = new THREE.Color();
const linear = (c) => { tmpC.setRGB(c[0] / 255, c[1] / 255, c[2] / 255, THREE.SRGBColorSpace); return [tmpC.r, tmpC.g, tmpC.b]; };
// apply stamps[from..] on top of what is there; from = 0 starts clean
export function applyPaint(g, stamps, from = 0) {
  const A = g.attributes.paint, F = g.userData.paintRGBA; if (!A || !F) return;
  if (from === 0) F.fill(0);
  const { cell, map, pos, nor } = gridOf(g), count = pos.length / 3;
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
        let w = st.k === BRUSH.hard ? (t < 0.82 ? 1 : 1 - (t - 0.82) / 0.18) : (1 - t) * (1 - t) * (3 - 2 * (1 - t)) * 1.0;
        w *= st.a * Math.min(1, (facing + 0.15) / 0.35);
        if (w <= 0) continue;
        const o = i * 4;
        if (st.k === BRUSH.erase) { F[o + 3] *= 1 - w; }
        else {
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
  .mp-wrap{position:fixed;inset:0;z-index:2147483000;display:flex;background:#15171b;color:#f3efe8;font:14px/1.3 system-ui,-apple-system,Segoe UI,sans-serif;touch-action:none;user-select:none}
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
  .mp-recent{display:flex;gap:6px;flex-wrap:wrap} .mp-recent button{width:24px;height:24px;border-radius:50%;border:2px solid rgba(255,255,255,.25);cursor:pointer;padding:0}
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
      <div><h4>Tool</h4><div class="mp-row" data-g="mode"><button class="mp-b" data-v="paint">🖌 Paint</button><button class="mp-b" data-v="turn">✋ Turn</button><button class="mp-b" data-a="view">Reset view</button></div></div>
      <div><h4>Brush</h4><div class="mp-row" data-g="brush"><button class="mp-b" data-v="soft">Soft</button><button class="mp-b" data-v="hard">Hard</button><button class="mp-b" data-v="spray">Spray</button><button class="mp-b" data-v="erase">Eraser</button></div></div>
      <div><h4>Brush size <span data-o="size"></span></h4><input type="range" data-i="size" min="1" max="100" value="22"></div>
      <div><h4>Strength <span data-o="alpha"></span></h4><input type="range" data-i="alpha" min="5" max="100" value="85"></div>
      <div><h4>Colour</h4><div class="mp-col"><label class="mp-wheel" title="Pick any colour"><input type="color" data-i="color"></label><div class="mp-cur"></div><span data-o="hex" style="font-size:12px;opacity:.7"></span></div>
        <div class="mp-recent" style="margin-top:8px"></div></div>
      <div><h4>Edit</h4><div class="mp-row"><button class="mp-b" data-a="undo">↶ Undo</button><button class="mp-b" data-a="redo">↷ Redo</button><button class="mp-b" data-a="clear">Clear all</button></div><div class="mp-count" style="margin-top:6px"></div></div>
      <div class="mp-foot"><button class="mp-b" data-a="cancel">Cancel</button><button class="mp-b solid" data-a="save">Save</button></div>
    </div>`;
  document.body.appendChild(wrap);
  const q = (s) => wrap.querySelector(s), view = q('.mp-view'), canvas = q('canvas');
  const st = { mode: 'paint', brush: 'soft', size: 22, alpha: 85, color: opts.color || '#3a2a20', recent: [] };
  try { Object.assign(st, JSON.parse(localStorage.getItem('meow.paintTools') || '{}')); } catch { /* ignore */ }
  const saveTools = () => { try { localStorage.setItem('meow.paintTools', JSON.stringify({ brush: st.brush, size: st.size, alpha: st.alpha, color: st.color, recent: st.recent })); } catch { /* ignore */ } };
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
  let cat = null, mesh = null, center = new THREE.Vector3(0, 2.8, 0), dist = 15, target = new THREE.Vector3();
  const resetView = () => { pivot.quaternion.setFromEuler(new THREE.Euler(0, Math.PI * 0.8, 0)); target.set(0, 0, 0); dist = 15; };
  const setCat = (c) => {
    if (cat) pivot.remove(cat.group);
    cat = c; mesh = c.mesh; c.group.position.set(0, 0, 0);
    // center the cat on the pivot so it turns around its middle
    c.group.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(mesh, true); box.getCenter(center); c.group.position.sub(center);
    pivot.add(c.group); c.setPaint(stamps);
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
    wrap.querySelectorAll('[data-g=brush] [data-v]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.v === st.brush)));
    q('[data-o=size]').textContent = st.size; q('[data-o=alpha]').textContent = st.alpha + '%';
    q('[data-i=size]').value = st.size; q('[data-i=alpha]').value = st.alpha; q('[data-i=color]').value = st.color;
    q('.mp-cur').style.background = st.color; q('[data-o=hex]').textContent = st.color.toUpperCase();
    q('[data-a=undo]').disabled = !strokes.length && !cleared; q('[data-a=redo]').disabled = !redo.length;
    q('.mp-count').textContent = `${stamps.length} / ${MAX_STAMPS} dabs` + (stamps.length >= MAX_STAMPS ? ' — full, erase or clear to paint more' : '');
    const rc = q('.mp-recent'); rc.innerHTML = '';
    st.recent.forEach((c) => { const b = document.createElement('button'); b.style.background = c; b.title = c; b.addEventListener('click', () => { st.color = c; mark(); saveTools(); }); rc.appendChild(b); });
  };
  wrap.querySelector('[data-g=mode]').addEventListener('click', (e) => { const b = e.target.closest('[data-v]'); if (b) { st.mode = b.dataset.v; mark(); } });
  wrap.querySelector('[data-g=brush]').addEventListener('click', (e) => { const b = e.target.closest('[data-v]'); if (b) { st.brush = b.dataset.v; st.mode = 'paint'; mark(); saveTools(); } });
  q('[data-i=size]').addEventListener('input', (e) => { st.size = +e.target.value; mark(); saveTools(); });
  q('[data-i=alpha]').addEventListener('input', (e) => { st.alpha = +e.target.value; mark(); saveTools(); });
  q('[data-i=color]').addEventListener('input', (e) => { st.color = e.target.value; if (st.brush === 'erase') st.brush = 'soft'; mark(); });
  q('[data-i=color]').addEventListener('change', (e) => { st.recent = [e.target.value, ...st.recent.filter((c) => c !== e.target.value)].slice(0, 10); mark(); saveTools(); });
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
    ray.setFromCamera(ndc, cam); const h = ray.intersectObject(mesh, false)[0]; if (!h) return null;
    const root = cat.root; root.updateMatrixWorld(true);
    const local = root.worldToLocal(h.point.clone());
    const wn = (h.face ? h.face.normal.clone() : new THREE.Vector3(0, 1, 0)).transformDirection(mesh.matrixWorld);
    const n = wn.clone().transformDirection(root.matrixWorld.clone().invert());
    return { point: h.point, local, n, wn };
  };
  let last = null;
  const dab = (h, first) => {
    if (stamps.length >= MAX_STAMPS) return;
    const rad = radius(), col = new THREE.Color(st.color), c = [Math.round(col.r * 255), Math.round(col.g * 255), Math.round(col.b * 255)];
    // the radius in the cat's own units (the cat may be shown scaled)
    const R = rad / cat.root.matrixWorld.getMaxScaleOnAxis();
    if (!first && last && last.distanceTo(h.local) < R * (st.brush === 'spray' ? 0.6 : 0.28)) return;
    const from = stamps.length;
    const base = { n: [h.n.x, h.n.y, h.n.z], c, a: st.alpha / 100, k: BRUSH[st.brush] };
    if (st.brush === 'spray') {
      // speckles scattered over the brush circle
      const t1 = new THREE.Vector3().crossVectors(h.n, Math.abs(h.n.y) < 0.9 ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(1, 0, 0)).normalize(), t2 = new THREE.Vector3().crossVectors(h.n, t1);
      for (let i = 0; i < 9; i++) {
        const a = Math.random() * Math.PI * 2, d = Math.sqrt(Math.random()) * R;
        const p = h.local.clone().addScaledVector(t1, Math.cos(a) * d).addScaledVector(t2, Math.sin(a) * d);
        stamps.push({ ...base, p: [p.x, p.y, p.z], r: R * (0.1 + Math.random() * 0.12), k: BRUSH.hard });
      }
    } else stamps.push({ ...base, p: [h.local.x, h.local.y, h.local.z], r: R });
    last = h.local.clone();
    cat.addPaint(stamps, from);
    if (st.brush !== 'erase' && first) { st.recent = [st.color, ...st.recent.filter((x) => x !== st.color)].slice(0, 10); saveTools(); }
  };
  // pointer handling: paint, turn (360° in every direction), zoom and move
  const ptrs = new Map(); let drag = null, pinch = null;
  const right = new THREE.Vector3(), up = new THREE.Vector3(), qq = new THREE.Quaternion();
  const turn = (dx, dy) => {
    cam.updateMatrixWorld(); right.setFromMatrixColumn(cam.matrixWorld, 0); up.setFromMatrixColumn(cam.matrixWorld, 1);
    pivot.quaternion.premultiply(qq.setFromAxisAngle(up, dx * 0.009)); pivot.quaternion.premultiply(qq.setFromAxisAngle(right, dy * 0.009));
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
    const h = hitAt(e.clientX, e.clientY); hover = h;
    if (!drag) return;
    const dx = e.clientX - drag.x, dy = e.clientY - drag.y; drag.x = e.clientX; drag.y = e.clientY;
    if (drag.how === 'turn') turn(dx, dy); else if (drag.how === 'pan') pan(dx, dy);
    else if (h) dab(h, false);
  });
  const end = (e) => {
    ptrs.delete(e.pointerId); if (ptrs.size < 2) pinch = null;
    if (drag && drag.how === 'paint') { if (strokes.length && strokes[strokes.length - 1] === stamps.length) strokes.pop(); mark(); }
    drag = null;
  };
  canvas.addEventListener('pointerup', end); canvas.addEventListener('pointercancel', end);
  canvas.addEventListener('pointerleave', () => { hover = null; });
  canvas.addEventListener('wheel', (e) => { e.preventDefault(); zoomAt(Math.exp(e.deltaY * 0.0012), e.clientX, e.clientY); }, { passive: false });
  const onKey = (e) => {
    if (e.key === 'Escape') q('[data-a=cancel]').click();
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') { e.preventDefault(); q(e.shiftKey ? '[data-a=redo]' : '[data-a=undo]').click(); }
    if (e.key === '[') { st.size = Math.max(1, st.size - 4); mark(); } if (e.key === ']') { st.size = Math.min(100, st.size + 4); mark(); }
    e.stopPropagation();
  };
  addEventListener('keydown', onKey, true);

  let hover = null, raf = 0, alive = true;
  const frame = () => {
    if (!alive) return;
    const w = view.clientWidth, h = view.clientHeight;
    if (canvas.width !== Math.round(w * r.getPixelRatio())) { r.setSize(w, h, false); cam.aspect = w / Math.max(1, h); cam.updateProjectionMatrix(); }
    cam.position.copy(target).add(new THREE.Vector3(0, 0, dist)); cam.lookAt(target);
    if (hover && (!drag || drag.how === 'paint')) {
      ring.visible = true; ring.position.copy(hover.point).addScaledVector(hover.wn, 0.01);
      ring.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), hover.wn); ring.scale.setScalar(radius());
      ring.material.color.set(st.brush === 'erase' ? '#ffffff' : st.color); dot.material.color.set(st.brush === 'erase' ? '#ff6b6b' : '#ffffff');
    } else ring.visible = false;
    canvas.style.cursor = drag && drag.how !== 'paint' ? 'grabbing' : hover && st.mode === 'paint' ? 'none' : 'grab';
    r.render(scn, cam);
    raf = requestAnimationFrame(frame);
  };
  const close = () => { alive = false; cancelAnimationFrame(raf); removeEventListener('keydown', onKey, true); r.dispose(); r.forceContextLoss(); wrap.remove(); };
  mark(); frame();
  return { close };
}
