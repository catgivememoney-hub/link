/* MEOW (test copy) — play together online.
   Peer-to-peer (WebRTC) through PeerJS's free public broker: the site stays on GitHub Pages, no server of our own.
   One person presses "Host" and gets a room code; friends type that code and press "Join".
   Everyone is a cat: a body with a head, ears, tail and four legs that walk, and a name tag.
   The host relays everybody's position to everybody (a star), ~15 times a second; others are smoothed in between. */
import * as THREE from 'three';

const PEERJS = 'https://unpkg.com/peerjs@1.5.4/dist/peerjs.min.js';
const PREFIX = 'meow-cabin-';
// the 8 cat skins (Settings → Play together)
export const SKINS = [
  { name: 'Ginger', color: '#d9893f' }, { name: 'Tabby grey', color: '#8a8580' }, { name: 'Black', color: '#2a2624' }, { name: 'White', color: '#ece6dc' },
  { name: 'Cream', color: '#e2c9a0' }, { name: 'Chocolate', color: '#7a5638' }, { name: 'Blue', color: '#6f7c88' }, { name: 'Calico', color: '#c9a27c' }
];

const loadPeer = () => new Promise((res, rej) => {
  if (window.Peer) return res(window.Peer);
  const s = document.createElement('script'); s.src = PEERJS; s.onload = () => res(window.Peer); s.onerror = () => rej(new Error('PeerJS failed to load'));
  document.head.appendChild(s);
});

/* ---------- a cat body (about as tall as your eye height) ---------- */
function buildCat(color, name) {
  const g = new THREE.Group();
  const fur = new THREE.MeshStandardMaterial({ color, roughness: 0.95 });
  const pale = new THREE.MeshStandardMaterial({ color: new THREE.Color(color).lerp(new THREE.Color('#ffffff'), 0.55), roughness: 0.95 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x1b1714, roughness: 0.5 });
  const pink = new THREE.MeshStandardMaterial({ color: 0xe3a1ae, roughness: 0.7 });
  const S = (r, w, h) => new THREE.SphereGeometry(r, w || 24, h || 18);
  const mesh = (geo, m, x = 0, y = 0, z = 0, sx = 1, sy = sx, sz = sx) => { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); o.scale.set(sx, sy, sz); o.castShadow = true; return o; };
  // body (cat faces -z, like the camera)
  const body = new THREE.Group(); body.position.y = 2.7; g.add(body);
  body.add(mesh(S(1), fur, 0, 0, 0, 1.15, 1.05, 2.1));
  body.add(mesh(S(1), pale, 0, -0.35, -0.3, 0.9, 0.75, 1.6));   // pale belly
  // head
  const head = new THREE.Group(); head.position.set(0, 1.55, -2.0); body.add(head);
  head.add(mesh(S(1), fur, 0, 0, 0, 1.15, 1.0, 1.0));
  head.add(mesh(S(0.55), pale, 0, -0.35, -0.72, 1.0, 0.7, 0.7));   // muzzle
  head.add(mesh(S(0.12), pink, 0, -0.12, -1.08, 1.2, 0.8, 0.8));    // nose
  [-1, 1].forEach((k) => {
    head.add(mesh(S(0.16), dark, 0.42 * k, 0.18, -0.86, 1, 1.15, 0.6));   // eyes
    const ear = mesh(new THREE.ConeGeometry(0.42, 0.85, 12), fur, 0.6 * k, 0.9, -0.05); ear.rotation.z = -0.3 * k; head.add(ear);
    const inner = mesh(new THREE.ConeGeometry(0.25, 0.55, 10), pink, 0.6 * k, 0.86, -0.17); inner.rotation.z = -0.3 * k; head.add(inner);
  });
  // legs (pivot at the hip / shoulder)
  const legs = [];
  [[-0.6, -1.3], [0.6, -1.3], [-0.6, 1.3], [0.6, 1.3]].forEach(([x, z]) => {
    const pivot = new THREE.Group(); pivot.position.set(x, -0.4, z); body.add(pivot);
    pivot.add(mesh(new THREE.CylinderGeometry(0.42, 0.34, 1.9, 14), fur, 0, -0.95, 0));
    pivot.add(mesh(S(0.36), pale, 0, -1.9, -0.1, 1.15, 0.6, 1.3));   // paw
    legs.push(pivot);
  });
  // tail: a curve of segments
  const tail = new THREE.Group(); tail.position.set(0, 0.4, 2.0); body.add(tail);
  const segs = []; let parent = tail;
  for (let i = 0; i < 7; i++) { const sg = new THREE.Group(); sg.position.set(0, i ? 0.45 : 0, 0); parent.add(sg); sg.add(mesh(S(0.22 - i * 0.015, 10, 8), i === 6 ? pale : fur, 0, 0.22, 0, 1, 1.6, 1)); segs.push(sg); parent = sg; }
  // name tag
  const tag = (() => {
    const c = document.createElement('canvas'); c.width = 256; c.height = 64; const x = c.getContext('2d');
    x.fillStyle = 'rgba(20,26,32,0.6)'; x.beginPath(); x.roundRect(4, 8, 248, 48, 24); x.fill();
    x.fillStyle = '#fff'; x.font = '600 28px system-ui, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(name.slice(0, 14), 128, 33);
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), depthTest: false, transparent: true }));
    sp.scale.set(4, 1, 1); sp.position.y = 6.8; sp.renderOrder = 10; return sp;
  })();
  g.add(tag);
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
  const me = { name: (() => { try { return localStorage.getItem('meow.name') || ''; } catch { return ''; } })() || 'Cat ' + Math.floor(100 + Math.random() * 900), skin: (() => { try { return Math.min(7, Math.max(0, +(localStorage.getItem('meow.skin') || 0))); } catch { return 0; } })() };
  me.color = SKINS[me.skin].color;
  const handlers = {}; let sync = { snapshot: () => ({}), apply: () => {} };
  const ui = {};

  const status = (t) => { if (ui.status) ui.status.textContent = t; };
  const ensure = (id, info, quiet) => {
    let o = others.get(id);
    if (!o) {
      const cat = buildCat(info.color || '#999', info.name || 'Cat');
      scene.add(cat.group);
      o = { cat, cur: { x: info.x, z: info.z, y: info.y, yaw: info.yaw }, tgt: { ...info }, name: info.name, color: info.color };
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
      if (d.color && o.color && d.color !== o.color) { drop(id, true); o = ensure(id, d, true); }
      o.color = d.color; o.tgt = d; o.cat.group.visible = true;
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
      SKINS.forEach((k, i) => {
        const b = document.createElement('button'); b.type = 'button'; b.title = k.name; b.dataset.i = i;
        b.style.cssText = `width:30px;height:30px;border-radius:50%;border:2px solid transparent;background:${k.color};cursor:pointer;box-shadow:inset 0 0 0 2px rgba(255,255,255,.35)`;
        b.addEventListener('click', () => { me.skin = i; me.color = k.color; try { localStorage.setItem('meow.skin', String(i)); } catch { /* ignore */ } mark(); });
        sk.appendChild(b);
      });
      const mark = () => [...sk.children].forEach((b) => { b.style.borderColor = +b.dataset.i === me.skin ? 'currentColor' : 'transparent'; });
      mark();
    }
    const copy = $('onCopy'); if (copy) copy.addEventListener('click', () => { if (code) navigator.clipboard && navigator.clipboard.writeText(code).then(() => toast('Room code copied')); });
    // a link like …/test/?room=ABCDE joins straight away
    const q = new URLSearchParams(location.search).get('room'); if (q) { if (ui.code) ui.code.value = q; setTimeout(() => start(false, q), 1500); }
    addEventListener('beforeunload', () => { if (peer) leave(); });
  }

  return {
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
          const msg = { t: 'p', id: myId, on, ...ex, x: +p.x.toFixed(2), z: +p.z.toFixed(2), y: +p.feet.toFixed(2), yaw: +p.yaw.toFixed(3), pitch: +(p.pitch || 0).toFixed(3), name: me.name, color: me.color, scene: scenes.name };
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
