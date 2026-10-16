/* MEOW — the 3D nature world (three.js). This file wires everything together.
   SOURCE. The site loads the bundled /world.js (see README: "Building world.js").

   Modules
     terrain.js   land, lake, heightAt()          sky.js       sky, sun, stars, aurora
     weather.js   rain, snow, leaves, mist         scenes.js    scene values + cross-fade
     trees.js     pines, fruit, bare branches      props.js     rocks, logs, plants, seasons
     cabin.js     the log cabin (walk-in)          study.js     the library under it
     physics.js   floors and collisions            player.js    walking, gliding, camera
     handlight.js flashlight / lantern (F)         fish.js      fish and fishing (R)
     lens.js      film-camera look                 mood.js      indoor light shafts, halos, dust

   Used by the page:  window.MEOW_BG.start(), setScene(name), setMotion('full'|'reduced'),
   home(), enter(), focus(on), pan(x), pulse(), toggleLight() */
import * as THREE from 'three';
import { heightAt, createTerrain, createWater } from './terrain.js';
import { createSky } from './sky.js';
import { createWeather } from './weather.js';
import { createScenes, PRESETS, SCENE_NAMES } from './scenes.js';
import { createProps, createRipples, createFootprints } from './props.js';
import { createTrees } from './trees.js';
import { createCabin, CABIN } from './cabin.js';
import { STUDY } from './study.js';
import { createPhysics } from './physics.js';
import { createPlayer, EYE } from './player.js';
import { createLens } from './lens.js';
import { createHandLight } from './handlight.js';
import { createFish } from './fish.js';

(() => {
  'use strict';
  const canvas = document.getElementById('bg');
  if (!canvas) return;
  const root = document.documentElement;

  /* ---------- renderer (soft CSS gradients if there's no WebGL) ---------- */
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'low-power' });
  } catch (e) {
    root.classList.add('no-webgl');
    window.MEOW_BG = { scenes: [], setScene(n) { root.setAttribute('data-scene', n); }, setMotion() {}, start() {}, home() {}, enter() {}, focus() {}, pan() {}, pulse() {}, toggleLight() {} };
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.5, 3000);
  scene.add(camera);
  const U = { uTime: { value: 0 } };
  const t0 = performance.now();

  /* ---------- build the world ---------- */
  const sky = createSky(scene, U);
  const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
  const sun = new THREE.DirectionalLight(0xffffff, 1);
  scene.add(hemi, sun, sun.target);
  scene.fog = new THREE.FogExp2(0xcccccc, 0.004);
  const terrain = createTerrain(scene);
  const water = createWater(scene);
  // the spots the home views look from stay clear of rocks and grass
  const CLEAR = [[0, 105], [0, 140], [-38, 112], [24, 78], [0, 92], [30, 102], [0, 125]].map(([x, z]) => ({ x, z, r: 42 }));
  const props = createProps({ scene, heightAt, U, snowColor: terrain.TU.uSnow, clear: CLEAR });
  const trees = createTrees({ scene, shared: props.shared, isClearing: (x, z) => props.inClearing(x, z) });
  props.plant(trees.base, 0);
  const cabin = createCabin({ scene, shared: props.shared, U, camera });
  const study = cabin.study;
  const ripples = createRipples(scene, U);
  const prints = createFootprints(scene, U);
  const weather = createWeather(scene, U, renderer.getPixelRatio());
  const fishing = createFish({ scene, camera, heightAt, water: water.mesh });
  const hand = createHandLight(scene, U);
  const lens = createLens(U);

  const st0 = window.MEOW_STATE;
  let motion = st0 && st0.motion === 'reduced' ? 'reduced' : 'full';
  const full = () => motion === 'full';
  const scenes = createScenes(st0 && PRESETS[st0.scene] ? st0.scene : 'rain');
  const physics = createPhysics({ trees, props, cabin, scenes, water: water.mesh });
  const player = createPlayer({ physics, trees });

  /* ---------- state ---------- */
  let started = false, entranceAt = 0, exposure = 1, exposureTo = 1, indoorK = 0, walkK = 0, arc = 0;
  const gal = { focus: 0, focusTo: 0, pan: 0, panTo: 0, pulse: 0 };   // the 3D gallery pushes the camera in
  const pointer = { x: 0, y: 0, sx: 0, sy: 0 };                     // mouse parallax at home
  const keys = new Set();
  const FAR = new THREE.Vector4(1e9, 1e9, 1e9, 1e9);
  const camOut = { pos: new THREE.Vector3(), q: new THREE.Quaternion(), roll: 0 };
  const homePose = { pos: new THREE.Vector3(), q: new THREE.Quaternion() };
  const lookM = new THREE.Matrix4(), UP = new THREE.Vector3(0, 1, 0), lookAt = new THREE.Vector3(), tmp = new THREE.Vector3();
  const t$ = (k, f) => (window.MEOW_I18N ? window.MEOW_I18N.t(k) : f);
  const sens = () => Math.max(0.2, Math.min(2.5, (window.MEOW_STATE && Number(window.MEOW_STATE.sens)) || 1));
  const busy = () => !started || root.classList.contains('locked') || gal.focusTo > 0;
  const modalOpen = () => !!document.querySelector('.modal:not([hidden])');
  const typing = (t) => t && (/INPUT|TEXTAREA|SELECT/.test(t.tagName) || t.isContentEditable);
  const overUI = (t) => t && t.closest && t.closest('.sidebar, .modal, .gallery, .top, .composer, .tools, .tree-card, .home-btn, .backdrop, .walk-hint, input, button, a, label');

  /* ---------- the home view: the scene's camera, a slow drift and mouse parallax ---------- */
  const computeHome = (time) => {
    const s = scenes.cur, d = full() ? 1 : 0;
    pointer.sx += (pointer.x - pointer.sx) * 0.035; pointer.sy += (pointer.y - pointer.sy) * 0.035;
    homePose.pos.set(
      s.cam.x + (Math.sin(time * 0.05) * 3 + pointer.sx * 6) * d,
      s.cam.y + arc + (Math.sin(time * 0.07) * 0.8 - pointer.sy * 2.5) * d,
      s.cam.z);
    lookAt.copy(s.look); lookAt.x += pointer.sx * 3 * d;
    // gallery: move in along the view, a little lower, and pan with the cards
    const f = gal.focus;
    if (f > 0.0005 || Math.abs(gal.pan) > 0.0005) {
      tmp.copy(s.look).sub(s.cam).normalize();
      homePose.pos.addScaledVector(tmp, f * 34);
      homePose.pos.y -= f * 4 - gal.pulse * 2;
      homePose.pos.x += gal.pan * 10 * f;
      lookAt.x += gal.pan * 38 * f; lookAt.y -= f * 3;
    }
    lookM.lookAt(homePose.pos, lookAt, UP);
    homePose.q.setFromRotationMatrix(lookM);
  };

  /* ---------- push the current scene values into the world ---------- */
  const applyScene = (time, now) => {
    const s = scenes.cur;
    U.uTop.value.copy(s.skyTop); U.uHorizon.value.copy(s.skyHorizon); U.uBottom.value.copy(s.skyBottom);
    U.uSunColor.value.copy(s.sunC); U.uSunDir.value.copy(s.sunDir).normalize(); U.uSunSize.value = s.sunSize;
    U.uStars.value = s.stars; U.uAurora.value = s.aurora; U.uAur1.value.copy(s.aur1); U.uAur2.value.copy(s.aur2);
    scene.fog.color.copy(s.fog); scene.fog.density = s.fogDensity * (1 + gal.focus * 0.35) * (1 - 0.85 * indoorK);
    const cabinOn = s.pCabin > 0.5;
    if (cabinOn) { terrain.TU.uHole.value.set(...cabin.holeBox); water.WU.uStudy.value.set(...cabin.studyBox); }
    else { terrain.TU.uHole.value.copy(FAR); water.WU.uStudy.value.copy(FAR); }
    terrain.TU.uLow.value.copy(s.low); terrain.TU.uHigh.value.copy(s.high); terrain.TU.uSnow.value.copy(s.snowC);
    terrain.TU.uSnowLine.value = s.snowLine; terrain.TU.uSand.value = s.sand;
    water.mesh.position.y = s.water; water.mat.color.copy(s.waterC); water.mat.roughness = s.waterRough;
    water.tex.offset.set(time * 0.004, time * 0.006);
    sun.color.copy(s.lightC); sun.intensity = s.light * 2.2; sun.position.copy(s.lightDir).multiplyScalar(300);
    hemi.color.copy(s.hemiSky); hemi.groundColor.copy(s.hemiGround); hemi.intensity = s.hemi * 1.6;
    trees.update(s, now);
    props.update(s, time);
    cabin.update(s, time, now, s.water, player.walking ? player.state.feet : undefined);
  };

  /* ---------- pointer lock: in the world the mouse is hidden and a white dot aims ---------- */
  const locked = () => !!document.pointerLockElement;
  let lockFails = 0;   // a browser that won't hide the pointer just uses normal clicks
  const lockPointer = () => {
    if (locked() || !canvas.requestPointerLock || lockFails > 0) return;
    try { const r = canvas.requestPointerLock(); if (r && r.catch) r.catch(() => { lockFails++; }); } catch (e) { lockFails++; }
  };
  const unlockPointer = () => { if (locked() && document.exitPointerLock) { window.MEOW_UNLOCK_REASON = 'self'; document.exitPointerLock(); } };
  document.addEventListener('pointerlockerror', () => { lockFails++; });
  const dot = document.createElement('div'); dot.className = 'aim-dot'; document.body.appendChild(dot);
  const centre = () => [innerWidth / 2, innerHeight / 2];

  /* ---------- going into the world and back ---------- */
  const setExploring = (on) => { if (root.classList.contains('exploring') !== on) root.classList.toggle('exploring', on); };
  const enterWorld = () => {
    if (!started || busy() || player.mode !== 'home') return;
    player.enter(camera.position, camera.quaternion, full(), water.mesh.position.y);
    setExploring(true);
  };
  const goHome = () => {
    unlockPointer();
    study.reset(performance.now());
    fishing.reset();
    keys.clear();
    if (player.mode === 'walk' || player.mode === 'enter') player.leave(camera.position, camera.quaternion, full());
    trees.hover(-1); root.classList.remove('on-tree', 'on-book');
    dispatchEvent(new CustomEvent('meow:tree', { detail: { type: 'leave' } }));
  };
  // Esc: first close an open book / send flying books home, then leave the world
  const leaveScene = () => {
    if (!player.out || busy()) return;
    if (study.back(performance.now())) return;
    goHome();
  };
  document.addEventListener('pointerlockchange', () => {
    root.classList.toggle('pl', locked());
    if (!locked()) {
      // freed on purpose (a link card, going home) — or the browser's Esc: that means "leave"
      const why = window.MEOW_UNLOCK_REASON; window.MEOW_UNLOCK_REASON = '';
      if (!why) setTimeout(() => { if (document.hasFocus() && !document.hidden) leaveScene(); }, 80);
      hover.pending = true;
    }
  });

  /* ---------- keyboard ---------- */
  const MOVE = ['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ShiftLeft', 'ShiftRight'];
  addEventListener('keydown', (e) => {
    if (typing(e.target) || e.metaKey || e.ctrlKey || e.altKey || modalOpen()) return;
    const now = performance.now();
    if (MOVE.includes(e.code)) {
      if (busy()) return;
      if (!e.code.startsWith('Shift')) e.preventDefault();
      keys.add(e.code);
      if (player.mode === 'home' && !e.code.startsWith('Shift')) enterWorld();
      return;
    }
    if (e.code === 'KeyF' && !e.repeat && started && !root.classList.contains('locked')) { e.preventDefault(); hand.toggle(now); return; }
    if (busy() || !player.walking) return;
    if (e.code === 'Space') { e.preventDefault(); if (!e.repeat) player.jump(); return; }
    if (e.code === 'KeyR' && !e.repeat) { if (fishing.key(now)) e.preventDefault(); return; }
    if (e.code === 'KeyE' && !e.repeat && scenes.cur.pCabin > 0.5 && cabin.door.near(camera.position.x, camera.position.z)) toggleDoor();
  });
  addEventListener('keyup', (e) => keys.delete(e.code));
  addEventListener('blur', () => { keys.clear(); look.inside = false; });
  // a plain Esc when the pointer isn't hidden (a link card or a dialog closes first instead)
  addEventListener('keydown', (e) => {
    if (e.key !== 'Escape' || !player.out || typing(e.target) || modalOpen()) return;
    const card = document.getElementById('treeCard');
    if (card && !card.hidden && card.classList.contains('show')) return;
    leaveScene();
  }, true);

  /* ---------- aiming: the dot (or the mouse) on trees, books, the door ---------- */
  const ray = new THREE.Raycaster(); ray.far = 900;
  const ndc = new THREE.Vector2();
  const rayAt = (cx, cy) => { ndc.set((cx / innerWidth) * 2 - 1, -(cy / innerHeight) * 2 + 1); ray.setFromCamera(ndc, camera); return ray; };
  const hover = { x: 0, y: 0, pending: false, tick: 0 };
  const aimPoint = () => (locked() ? centre() : [hover.x, hover.y]);
  const actHint = document.createElement('div');
  actHint.className = 'act-hint';
  actHint.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="3" width="12" height="18" rx="6" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 3v6" stroke="currentColor" stroke-width="1.6"/><path d="M6.5 9h5.5V3.4A6 6 0 0 0 6.5 9z" fill="currentColor"/></svg><span></span>';
  document.body.appendChild(actHint);
  const aimAtDoor = (cx, cy) => {
    if (!player.walking || scenes.cur.pCabin < 0.5 || !cabin.door.near(camera.position.x, camera.position.z)) return false;
    const hit = rayAt(cx, cy).intersectObject(cabin.door.mesh, false)[0];
    return !!hit && hit.distance < 26;
  };
  const toggleDoor = () => {
    if (!cabin.door.canToggle(camera.position.x, camera.position.z)) return false;
    const opened = cabin.door.toggle(performance.now());
    if (window.MEOW_SOUND && window.MEOW_SOUND.door) window.MEOW_SOUND.door(opened);
    return true;
  };
  const setTreeHover = (id) => {
    if (!trees.hover(id)) return;
    root.classList.toggle('on-tree', id >= 0);
    dispatchEvent(new CustomEvent('meow:tree', { detail: id >= 0 ? { type: 'hover', id, x: hover.x, y: hover.y } : { type: 'leave' } }));
  };
  let doorShown = false;
  const updateAim = () => {
    if (++hover.tick % 3 && !hover.pending) return;   // every third frame is plenty
    hover.pending = false;
    const [cx, cy] = aimPoint();
    const active = player.walking && !busy();
    const door = active && aimAtDoor(cx, cy);
    if (door !== doorShown) { doorShown = door; actHint.classList.toggle('show', door); }
    if (door) actHint.querySelector('span').textContent = cabin.door.open ? t$('doorClose', 'Click to close the door') : t$('doorOpen', 'Click to open the door');
    root.classList.toggle('on-book', study.hover(rayAt(cx, cy), active && scenes.cur.pCabin > 0.5 && indoorK > 0.5));
    // trees light up under the dot (or the mouse at home); not from indoors or over the page's own buttons
    const treeOK = !busy() && indoorK < 0.5 && !player.gliding && (player.walking || (look.inside && !look.ui));
    if (locked()) { hover.x = cx; hover.y = cy; }
    setTreeHover(treeOK ? trees.pick(rayAt(cx, cy)) : -1);
  };

  /* ---------- mouse and touch ---------- */
  const look = { x: -1, y: -1, inside: false, ui: false };
  let drag = null, press = null;
  addEventListener('pointerdown', (e) => {
    if (busy() || overUI(e.target) || player.gliding) return;
    const isLook = e.button === 2 || (e.pointerType === 'touch' && e.button === 0);
    if (isLook) {
      drag = { x: e.clientX, y: e.clientY, lx: e.clientX, ly: e.clientY, moved: false, touch: e.pointerType === 'touch' };
      e.preventDefault();
    } else if (e.button === 0) {
      // first click in the world hides the pointer; from then on you aim with the dot
      if (player.walking && !locked() && e.pointerType === 'mouse' && !lockFails && canvas.requestPointerLock) {
        lockPointer(); press = null; e.preventDefault();
        dispatchEvent(new CustomEvent('meow:tree', { detail: { type: 'miss' } }));
        return;
      }
      press = { x: e.clientX, y: e.clientY };
      e.preventDefault();
    }
  });
  addEventListener('contextmenu', (e) => { if (started && !overUI(e.target) && !root.classList.contains('locked')) e.preventDefault(); });
  addEventListener('pointermove', (e) => {
    pointer.x = (e.clientX / innerWidth) * 2 - 1; pointer.y = (e.clientY / innerHeight) * 2 - 1;
    if (drag) {
      if (Math.hypot(e.clientX - drag.x, e.clientY - drag.y) > 5) drag.moved = true;
      if (player.walking) player.look(e.clientX - drag.lx, e.clientY - drag.ly, 0.0035);
      drag.lx = e.clientX; drag.ly = e.clientY;
      root.classList.add('looking');
      return;
    }
    if (locked()) { if (player.walking && !busy()) player.look(e.movementX, e.movementY, 0.0024 * sens()); return; }
    look.x = e.clientX; look.y = e.clientY; look.inside = true; look.ui = !!overUI(e.target);
    // without a hidden pointer, just moving the mouse turns the view in the world
    if (player.walking && !busy() && !look.ui && e.pointerType !== 'touch' && (e.movementX || e.movementY)) player.look(e.movementX, e.movementY, 0.0028 * sens());
    hover.x = e.clientX; hover.y = e.clientY; hover.pending = true;
  }, { passive: true });
  document.addEventListener('mouseleave', () => { look.inside = false; hover.pending = true; });
  addEventListener('pointerup', (e) => {
    let click = false;
    if (drag) { click = drag.touch && !drag.moved; drag = null; root.classList.remove('looking'); }
    else if (press && e.button === 0) click = locked() || Math.hypot(e.clientX - press.x, e.clientY - press.y) < 8;
    press = null;
    if (!click) return;
    const [cx, cy] = locked() ? centre() : [e.clientX, e.clientY];
    const now = performance.now();
    // what was clicked: a biting fish, then a book, then the door, then a tree
    if (player.walking && fishing.click(now)) return;
    if (player.walking && scenes.cur.pCabin > 0.5 && indoorK > 0.5 && study.click(rayAt(cx, cy), now)) return;
    if (aimAtDoor(cx, cy)) { toggleDoor(); return; }
    const id = trees.hovered >= 0 ? trees.hovered : (indoorK < 0.5 ? trees.pick(rayAt(cx, cy)) : -1);
    if (id >= 0) {
      trees.shake(id, now);
      dispatchEvent(new CustomEvent('meow:tree', { detail: { type: 'click', id, x: cx, y: cy } }));
    } else dispatchEvent(new CustomEvent('meow:tree', { detail: { type: 'miss' } }));
  });

  /* ---------- size ---------- */
  const resize = () => {
    const w = innerWidth, h = innerHeight;
    renderer.setSize(w, h, false);
    const db = renderer.getDrawingBufferSize(new THREE.Vector2());
    lens.resize(db.x, db.y);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  addEventListener('resize', () => { clearTimeout(resize.t); resize.t = setTimeout(resize, 120); });

  // a slow computer draws fewer pixels (keeps walking smooth)
  const perf = { last: 0, sum: 0, n: 0, level: 0, since: 0 };
  const PR = [Math.min(window.devicePixelRatio || 1, 1.5), 1.1, 0.85, 0.7];
  const watchPerf = (now) => {
    if (!perf.since) perf.since = now;
    const dt = now - (perf.last || now); perf.last = now;
    if (now - perf.since < 5000 || dt > 250 || document.hidden) return;
    perf.sum += dt; perf.n++;
    if (perf.n >= 90) {
      const avg = perf.sum / perf.n; perf.sum = perf.n = 0;
      if (avg > 30 && perf.level < PR.length - 1 && PR[perf.level + 1] < renderer.getPixelRatio()) { perf.level++; renderer.setPixelRatio(PR[perf.level]); resize(); }
    }
  };

  /* ---------- one frame ---------- */
  let last = 0;
  const step = (now) => {
    const dt = Math.min(0.1, Math.max(0.001, (now - (last || now)) / 1000)); last = now;
    const time = (now - t0) / 1000;
    U.uTime.value = time;
    const k = scenes.step(now);
    arc = full() && k < 1 ? Math.sin(Math.PI * k) * 9 : 0;   // the home camera rises a little during a scene change
    const gk = full() ? 1 - Math.pow(1 - 0.035, dt * 60) : 1;
    gal.focus += (gal.focusTo - gal.focus) * gk;
    gal.pan += (gal.panTo - gal.pan) * (full() ? 1 - Math.pow(0.95, dt * 60) : 1);
    gal.pulse *= Math.pow(0.94, dt * 60);
    exposure += (exposureTo - exposure) * 0.04;

    // you and the camera
    computeHome(time);
    const stepped = player.update(dt, now, keys, homePose, full(), scenes, water.mesh, camOut);
    if (player.justLanded) { player.justLanded = false; lockPointer(); }
    if (player.mode === 'home') setExploring(false);
    camera.position.copy(camOut.pos);
    camera.quaternion.copy(camOut.q);
    const fov = (innerWidth < 700 ? 62 : 50) - (player.mode === 'home' ? gal.focus * 6 - gal.pulse * 1.5 : 0);
    if (Math.abs(camera.fov - fov) > 0.01) { camera.fov = fov; camera.updateProjectionMatrix(); }
    sky.position.copy(camera.position);
    // keep turning while the mouse rests at the left / right edge (when the pointer isn't hidden)
    if (!locked() && player.walking && look.inside && !look.ui && !drag && !busy() && full() && look.y > innerHeight * 0.15 && look.y < innerHeight * 0.85) {
      const edge = Math.max(30, innerWidth * 0.04);
      if (look.x > innerWidth - edge) player.turn(-1.1 * dt * (look.x - (innerWidth - edge)) / edge);
      else if (look.x >= 0 && look.x < edge) player.turn(1.1 * dt * (edge - look.x) / edge);
    }

    // indoors? (warmer colour, no weather, real focus)
    const ps = player.state;
    const inside = player.walking && physics.inside(ps.x, ps.z, ps.feet);
    indoorK += ((inside ? 1 : 0) - indoorK) * (1 - Math.pow(0.88, dt * 60));
    walkK += ((player.out ? 1 : 0) - walkK) * (1 - Math.pow(0.97, dt * 60));
    // the house fades away in a scene without it: don't stay inside a vanishing room
    if (player.walking && scenes.cur.pCabin < 0.6 && cabin.inside(ps.x, ps.z, ps.feet)) goHome();

    applyScene(time, now);
    const out = 1 - indoorK;
    weather.update(scenes.cur, camera.position, scenes.cur.look, scenes.cur.cam, water.mesh.position.y, out, dt);
    ripples.update(scenes.cur.pRipples * out, camera.position, water.mesh.position.y);
    prints.update(Math.min(1, Math.max(0, (100 - scenes.cur.snowLine) / 80)) * out);
    if (stepped && !inside) {
      const gh = heightAt(ps.x, ps.z);
      if (gh > water.mesh.position.y + 0.6 && (scenes.name === 'snow' || gh > scenes.cur.snowLine + 4) && !physics.floor(ps.x, ps.z, ps.feet).built) {
        const e = 1.5, n = new THREE.Vector3(heightAt(ps.x - e, ps.z) - heightAt(ps.x + e, ps.z), 2 * e, heightAt(ps.x, ps.z - e) - heightAt(ps.x, ps.z + e)).normalize();
        prints.place(ps.x, gh, ps.z, Math.atan2(-ps.vx, -ps.vz), n);
      }
    }
    hand.update(camera, now, time, dt, { fog: Math.min(1.6, scene.fog.density / 0.004), rain: weather.rainAmount, bob: ps.bob, vx: ps.vx, vz: ps.vz, motionFull: full() });
    {
      const [fx, fy] = aimPoint();
      fishing.update(now, time, { active: player.walking && !busy(), ray: player.walking ? rayAt(fx, fy) : null, waterY: water.mesh.position.y, amount: scenes.cur.fishy, indoor: indoorK > 0.5 });
    }
    updateAim();

    // the lens
    const LU = lens.LU, dpr = renderer.getPixelRatio();
    const shotPull = full() && k < 1 ? Math.sin(Math.PI * (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2)) * 6 : 0;
    const enter = full() ? Math.max(0, 1 - (now - entranceAt) / 3600) : 0;
    LU.uBlur.value = 2.6 * dpr * (1 + gal.focus * 2.6) * (1 - walkK * 0.7) * scenes.cur.dof;
    LU.uBand.value = 0.22 - gal.focus * 0.1 + walkK * 0.12;
    LU.uPull.value = (shotPull + Math.pow(enter, 1.6) * 18 + gal.pulse * 3) * dpr;
    LU.uFlicker.value = full() ? 0.012 : 0;
    LU.uIndoor.value = full() ? indoorK : 0; LU.uBlurIn.value = 4.5 * dpr;
    LU.uVig.value = 0.32 + indoorK * 0.16;
    LU.uSat.value = scenes.cur.sat + (Math.max(scenes.cur.sat, 0.8) - scenes.cur.sat) * indoorK;   // warm colour comes back inside
    renderer.toneMappingExposure = exposure;
    lens.render(renderer, scene, camera);
  };
  const frame = (now) => {
    requestAnimationFrame(frame);
    if (!started || document.hidden) return;
    step(now);
    watchPerf(now);
  };

  /* ---------- scenes ---------- */
  const themeExposure = () => (root.getAttribute('data-theme') === 'dark' ? 0.62 : 1.0);
  new MutationObserver(() => { exposureTo = themeExposure(); }).observe(root, { attributes: true, attributeFilter: ['data-theme'] });
  const goTo = (name, ms) => {
    scenes.go(name, full() ? ms : 1, performance.now());
    root.setAttribute('data-scene', scenes.name);
    if (started) dispatchEvent(new CustomEvent('meow:shot', { detail: { name: scenes.name, dur: full() ? ms : 1 } }));
  };
  root.setAttribute('data-scene', scenes.name);

  window.MEOW_BG = {
    scenes: SCENE_NAMES,
    setScene(name) {
      if (!PRESETS[name]) name = 'rain';
      if (name === scenes.name && started) return;
      if (!started) { scenes.go(name, 1, performance.now()); root.setAttribute('data-scene', name); return; }
      goTo(name, 3200);
    },
    setMotion(m) { motion = m === 'reduced' ? 'reduced' : 'full'; },
    focus(on) { gal.focusTo = on ? 1 : 0; if (on && player.out) goHome(); },
    pan(x) { gal.panTo = Math.max(-1, Math.min(1, x || 0)); },
    pulse() { if (full()) gal.pulse = 1; },
    toggleLight() { hand.toggle(performance.now()); },
    enter() { enterWorld(); },
    home() { goHome(); },
    start() {
      if (started) return;
      started = true;
      exposureTo = exposure = themeExposure();
      resize();
      // entrance: begin high above the valley and glide down into the scene
      const name = scenes.name;
      scenes.go(name, 1, -1e9); scenes.step(performance.now());
      if (full()) scenes.offsetHome(new THREE.Vector3(0, 120, 230), new THREE.Vector3(0, 30, 0));
      entranceAt = performance.now();
      goTo(name, 4200);
      canvas.classList.add('on');
    },
    /* ---- for testing ---- */
    // stand at world (x, z); level: 'study' / 'mezz' for the library floors, else the highest floor there
    _standAt(x, z, level) {
      const feet = level === 'study' ? CABIN.y + STUDY.floor * CABIN.S : level === 'mezz' ? CABIN.y + STUDY.mezz * CABIN.S : 1e5;
      player.place(x, z, physics.floor(x, z, feet).y);
      setExploring(true);
    },
    _look(x, z, pitch = 0) { const ps = player.state; player.face(Math.atan2(-(x - ps.x), -(z - ps.z)), pitch); },
    _pos() { const ps = player.state; return { x: ps.x, z: ps.z, feet: ps.feet, mode: player.mode, cx: camera.position.x, cy: camera.position.y, cz: camera.position.z, yaw: ps.yaw, pitch: ps.pitch, indoor: indoorK }; },
    _toggleDoor() { cabin.door.toggle(performance.now()); },
    _aimDoor(cx, cy) { const r = rayAt(cx, cy); const h = r.intersectObject(cabin.door.mesh, false)[0]; return { hit: !!h, d: h ? h.distance : -1, walking: player.walking, busy: busy(), hover: [hover.x, hover.y], ok: aimAtDoor(cx, cy) }; },
    get _trees() { return trees; }, get _keys() { return [...keys]; }, get _study() { return study; }, get _cabin() { return cabin; }, get _physics() { return physics; }, get _player() { return player; }, get _cur() { return scenes.cur; },
    _nearTree(i, d = 16) { const b = trees.base[i % trees.base.length]; if (b) this._standAt(b.p.x, b.p.z + d); }
  };
  void EYE;

  { const hint = document.querySelector('.walk-hint'); if (hint) hint.addEventListener('click', () => enterWorld()); }
  requestAnimationFrame(frame);
  if (window.MEOW_READY && window.MEOW_STATE) window.MEOW_READY.then(() => window.MEOW_BG.start());
})();
