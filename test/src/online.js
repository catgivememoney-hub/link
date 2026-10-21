/* MEOW (test copy) — play together online.
   Peer-to-peer (WebRTC) through PeerJS's free public broker: the site stays on GitHub Pages, no server of our own.
   One person presses "Host" and gets a room code; friends type that code and press "Join".
   Everyone is a cat: a body with a head, ears, tail and four legs that walk, and a name tag.
   The host relays everybody's position to everybody (a star), ~15 times a second; others are smoothed in between. */
import * as THREE from 'three';

const PEERJS = 'https://unpkg.com/peerjs@1.5.4/dist/peerjs.min.js';
const PREFIX = 'meow-cabin-';
const COLORS = ['#c8a27a', '#77706a', '#e8e2d8', '#3b3634', '#d9893f', '#9aa4ad'];

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
  let phase = 0;
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
    setLook(pitch) { head.rotation.x = -pitch * 0.6; }
  };
}

export function createOnline({ scene, player, scenes, toast }) {
  let peer = null, host = false, conns = new Map(), myId = null, code = null, sendT = 0;
  const others = new Map();   // id -> { cat, cur, tgt, name, scene }
  const me = { name: (() => { try { return localStorage.getItem('meow.name') || ''; } catch { return ''; } })() || 'Cat ' + Math.floor(100 + Math.random() * 900), color: COLORS[Math.floor(Math.random() * COLORS.length)] };
  const ui = {};

  const status = (t) => { if (ui.status) ui.status.textContent = t; };
  const ensure = (id, info) => {
    let o = others.get(id);
    if (!o) {
      const cat = buildCat(info.color || '#999', info.name || 'Cat');
      scene.add(cat.group);
      o = { cat, cur: { x: info.x, z: info.z, y: info.y, yaw: info.yaw }, tgt: { ...info }, name: info.name };
      others.set(id, o);
      toast('🐾 ' + (info.name || 'A cat') + ' joined');
      refreshList();
    }
    return o;
  };
  const drop = (id) => { const o = others.get(id); if (!o) return; scene.remove(o.cat.group); others.delete(id); toast('🐾 ' + (o.name || 'A cat') + ' left'); refreshList(); };
  const refreshList = () => { if (ui.list) ui.list.textContent = others.size ? 'Here: ' + [...others.values()].map((o) => o.name).join(', ') : ''; };

  const onData = (from, d) => {
    if (!d || typeof d !== 'object') return;
    if (d.t === 'p') {
      const id = d.id || from; if (id === myId) return;
      if (!d.on) { const o = others.get(id); if (o) o.cat.group.visible = false; return; }
      const o = ensure(id, d); o.tgt = d; o.cat.group.visible = true;
      if (host) conns.forEach((c, cid) => { if (cid !== from && c.open) c.send({ ...d, id }); });   // relay
    } else if (d.t === 'bye') { drop(d.id || from); if (host) conns.forEach((c, cid) => { if (cid !== from && c.open) c.send(d); }); }
  };
  const wire = (c) => {
    c.on('open', () => { conns.set(c.peer, c); status(host ? `Hosting · room ${code} · ${conns.size} joined` : `Joined room ${code}`); });
    c.on('data', (d) => onData(c.peer, d));
    c.on('close', () => { conns.delete(c.peer); drop(c.peer); if (host) { conns.forEach((x) => x.open && x.send({ t: 'bye', id: c.peer })); status(`Hosting · room ${code} · ${conns.size} joined`); } else status('Disconnected from the host'); });
  };

  const leave = () => {
    conns.forEach((c) => { try { c.send({ t: 'bye', id: myId }); c.close(); } catch { /* ignore */ } });
    conns.clear(); others.forEach((_, id) => drop(id));
    if (peer) peer.destroy(); peer = null; host = false; code = null; status('Not connected'); setButtons(false);
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
      else wire(peer.connect(PREFIX + code, { reliable: false }));
    });
    peer.on('connection', (c) => { if (host) wire(c); else c.close(); });
    peer.on('error', (e) => {
      const t = e && e.type;
      status(t === 'peer-unavailable' ? `No room "${code}" — check the code` : t === 'unavailable-id' ? 'That room code is taken, press Host again' : 'Connection problem: ' + (t || e));
      if (t === 'peer-unavailable' || t === 'unavailable-id') { peer.destroy(); peer = null; setButtons(false); }
    });
  };
  const setButtons = (on) => { if (ui.leave) ui.leave.hidden = !on; if (ui.host) ui.host.hidden = on; if (ui.join) ui.join.hidden = on; };

  // the panel lives in Settings → Online
  {
    const $ = (id) => document.getElementById(id);
    ui.status = $('onStatus'); ui.list = $('onList'); ui.code = $('onCode'); ui.host = $('onHost'); ui.join = $('onJoin'); ui.leave = $('onLeave'); ui.name = $('onName');
    if (ui.name) { ui.name.value = me.name; ui.name.addEventListener('change', () => { me.name = ui.name.value.trim().slice(0, 14) || me.name; try { localStorage.setItem('meow.name', me.name); } catch { /* ignore */ } }); }
    if (ui.host) ui.host.addEventListener('click', () => start(true));
    if (ui.join) ui.join.addEventListener('click', () => start(false, ui.code.value));
    if (ui.leave) ui.leave.addEventListener('click', leave);
    const copy = $('onCopy'); if (copy) copy.addEventListener('click', () => { if (code) navigator.clipboard && navigator.clipboard.writeText(code).then(() => toast('Room code copied')); });
    // a link like …/test/?room=ABCDE joins straight away
    const q = new URLSearchParams(location.search).get('room'); if (q) { if (ui.code) ui.code.value = q; setTimeout(() => start(false, q), 1500); }
    addEventListener('beforeunload', () => { if (peer) leave(); });
  }

  return {
    get count() { return others.size; },
    _recv: onData,   // (testing)
    update(dt, time) {
      // send my position
      if (peer && conns.size) {
        sendT += dt;
        if (sendT > 1 / 15) {
          sendT = 0;
          const p = player.state, on = !!player.walking;
          const msg = { t: 'p', id: myId, on, x: +p.x.toFixed(2), z: +p.z.toFixed(2), y: +p.feet.toFixed(2), yaw: +p.yaw.toFixed(3), pitch: +(p.pitch || 0).toFixed(3), name: me.name, color: me.color, scene: scenes.name };
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
        o.cat.animate(dt, speed, time); o.cat.setLook(t.pitch || 0);
      });
    }
  };
}
