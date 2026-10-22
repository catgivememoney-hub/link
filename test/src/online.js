/* MEOW (test copy) — play together online.
   Peer-to-peer (WebRTC) through PeerJS's free public broker: the site stays on GitHub Pages, no server of our own.
   One person presses "Host" and gets a room code; friends type that code and press "Join".
   Everyone is a cat: a body with a head, ears, tail and four legs that walk, and a name tag.
   The host relays everybody's position to everybody (a star), ~15 times a second; others are smoothed in between. */
import * as THREE from 'three';

const PEERJS = 'https://unpkg.com/peerjs@1.5.4/dist/peerjs.min.js';
const PREFIX = 'meow-cabin-';
// the cat skins (Settings → Play together). The last five are modelled on Jeffy's cat photos:
// stripe = tabby stripes, back = darker back/cap, belly = chest/belly/muzzle/paws, iris = eye colour, extras = tongue, big eyes, boots, purse
export const SKINS = [
  { name: 'Ginger', color: '#d9893f' }, { name: 'Tabby grey', color: '#8a8580' }, { name: 'Black', color: '#2a2624' }, { name: 'White', color: '#ece6dc' },
  { name: 'Cream', color: '#e2c9a0' }, { name: 'Chocolate', color: '#7a5638' }, { name: 'Blue', color: '#6f7c88' }, { name: 'Calico', color: '#c9a27c' },
  { name: 'Smokey', color: '#aaa39b', back: '#57514c', backAmt: 0.9, stripe: '#5d5751', stripeAmt: 0.35, belly: '#f1ede7', iris: '#7f97a8' },
  { name: 'Silver tabby', color: '#cdcdca', stripe: '#3b3b3d', stripeAmt: 1, belly: '#f6f6f4', iris: '#8e9c6c' },
  { name: 'November', color: '#ab9375', stripe: '#36291d', stripeAmt: 0.9, bodyColor: '#f7f4ef', belly: '#ffffff', fluffy: true, boots: '#c99a5c', purse: '#ec8aa3' },
  { name: 'Blep', color: '#8d6e51', stripe: '#31241a', stripeAmt: 0.85, belly: '#f4eee5', iris: '#a9b066', tongue: true },
  { name: 'El Gato', color: '#e29b56', stripe: '#bb6529', stripeAmt: 0.6, belly: '#f8f0e5', bigEyes: true }
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

function buildCat(skin, name) {
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
  if (sk.tongue) { const t = mesh(S(0.17), new THREE.MeshStandardMaterial({ color: 0xe8728a, roughness: 0.35 }), 0, -0.66, -1.02, 1.05, 0.45, 1.1); t.rotation.x = 0.5; head.add(t); }   // blep
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

export function createOnline({ scene, player, scenes, toast, extra }) {
  let peer = null, host = false, conns = new Map(), myId = null, code = null, sendT = 0;
  const others = new Map();   // id -> { cat, cur, tgt, name, scene }
  const me = { name: (() => { try { return localStorage.getItem('meow.name') || ''; } catch { return ''; } })() || 'Cat ' + Math.floor(100 + Math.random() * 900), skin: (() => { try { return Math.min(SKINS.length - 1, Math.max(0, +(localStorage.getItem('meow.skin') || 0) | 0)); } catch { return 0; } })() };
  me.color = SKINS[me.skin].color;
  const handlers = {}; let sync = { snapshot: () => ({}), apply: () => {} };
  const ui = {};

  // a skin by number (newer players), or just a colour (older copies of the page)
  const skinOf = (info) => (Number.isInteger(info.skin) && SKINS[info.skin] && SKINS[info.skin].color === info.color) ? SKINS[info.skin] : (info.color || '#999');
  const status = (t) => { if (ui.status) ui.status.textContent = t; };
  const ensure = (id, info, quiet) => {
    let o = others.get(id);
    if (!o) {
      const cat = buildCat(skinOf(info), info.name || 'Cat');
      scene.add(cat.group);
      o = { cat, cur: { x: info.x, z: info.z, y: info.y, yaw: info.yaw }, tgt: { ...info }, name: info.name, color: info.color, skin: info.skin };
      others.set(id, o);
      if (!quiet) toast('🐾 ' + (info.name || 'A cat') + ' joined');
      refreshList();
    }
    return o;
  };
  const drop = (id, quiet) => { const o = others.get(id); if (!o) return; scene.remove(o.cat.group); others.delete(id); if (!quiet) toast('🐾 ' + (o.name || 'A cat') + ' left'); refreshList(); };
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
    } else if (d.t === 'ev') {
      if ((d.id || from) !== myId && handlers[d.k]) handlers[d.k](d.v, d.id || from);
      if (host) conns.forEach((c, cid) => { if (cid !== from && c.open) c.send(d); });
    } else if (d.t === 'snap') {
      sync.apply(d.v);
    } else if (d.t === 'bye') { drop(d.id || from); if (host) conns.forEach((c, cid) => { if (cid !== from && c.open) c.send(d); }); }
  };
  const wire = (c) => {
    c.on('open', () => { conns.set(c.peer, c); if (host) c.send({ t: 'snap', v: sync.snapshot() }); onStatusChange(); status(host ? `Hosting · room ${code} · ${conns.size} joined` : `Joined room ${code}`); });
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
      const label = document.createElement('div'); label.style.cssText = 'width:100%;font-size:12px;opacity:.75;margin-top:2px';
      SKINS.forEach((k, i) => {
        const b = document.createElement('button'); b.type = 'button'; b.title = k.name; b.setAttribute('aria-label', k.name); b.dataset.i = i;
        b.style.cssText = `width:52px;height:52px;border-radius:14px;border:2px solid transparent;background:${k.color} center/cover no-repeat;cursor:pointer;box-shadow:inset 0 0 0 2px rgba(255,255,255,.35);padding:0`;
        b.addEventListener('click', () => { me.skin = i; me.color = k.color; try { localStorage.setItem('meow.skin', String(i)); } catch { /* ignore */ } mark(); });
        sk.appendChild(b);
      });
      sk.appendChild(label);
      const mark = () => { [...sk.querySelectorAll('button')].forEach((b) => { b.style.borderColor = +b.dataset.i === me.skin ? 'currentColor' : 'transparent'; }); label.textContent = SKINS[me.skin].name; };
      mark();
      // a small picture of each cat on its button (drawn once, the first time Settings is open)
      let drawn = false;
      const draw = () => {
        if (drawn || !sk.offsetParent) return; drawn = true;
        try {
          const W = 104, r = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
          r.setSize(W, W); r.setPixelRatio(1); r.toneMapping = THREE.ACESFilmicToneMapping;
          const sc = new THREE.Scene();
          sc.add(new THREE.HemisphereLight(0xffffff, 0x6b5a4a, 2.2));
          const sun = new THREE.DirectionalLight(0xffffff, 2.6); sun.position.set(-4, 9, -8); sc.add(sun);
          const cam = new THREE.PerspectiveCamera(30, 1, 0.1, 100); cam.position.set(-6.5, 5.6, -10.5); cam.lookAt(0, 3.2, -0.6);
          [...sk.querySelectorAll('button')].forEach((b) => {
            const c = buildCat(SKINS[+b.dataset.i], ''); c.group.rotation.y = 0.15; sc.add(c.group); c.animate(0, 0, 0.6);
            r.render(sc, cam); b.style.backgroundImage = `url(${r.domElement.toDataURL()})`;
            sc.remove(c.group); c.group.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material) [].concat(o.material).forEach((m) => { if (m.map) m.map.dispose(); m.dispose(); }); });
          });
          r.dispose(); r.forceContextLoss();
        } catch { /* no pictures, the colours still show */ }
      };
      const mo = new MutationObserver(() => { draw(); if (drawn) mo.disconnect(); });
      mo.observe(document.body, { attributes: true, subtree: true, attributeFilter: ['class', 'hidden', 'open'] });
      setTimeout(draw, 3000);
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
