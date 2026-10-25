/* MEOW — the 3D nature world (three.js). This file wires everything together.
   SOURCE. The site loads the bundled /world.js (see README: "Building world.js").

   Modules
     terrain.js   land, lake, heightAt()          sky.js       sky, sun, stars, aurora
     weather.js   rain, snow, leaves, mist         scenes.js    scene values + cross-fade
     trees.js     pines, fruit, bare branches      props.js     rocks, logs, plants, seasons
     house.js     the new stilt cabin (Blender)    boat.js      the sailboat you can sail
     physics.js   floors and collisions            player.js    walking, gliding, camera
     handlight.js flashlight / lantern (F)         fish.js      fish and fishing (R)
     lens.js      film-camera look                 mood.js      indoor light shafts, halos, dust

   Used by the page:  window.MEOW_BG.start(), setScene(name), setMotion('full'|'reduced'),
   home(), enter(), focus(on), pan(x), pulse(), toggleLight() */
import * as THREE from 'three';
import { heightAt, createTerrain, createWater, createDeepSnow } from './terrain.js';
import { createSky } from './sky.js';
import { createClouds } from './clouds.js';
import { createRainFX } from './highfx.js';
import { createWeather } from './weather.js';
import { createScenes, PRESETS, SCENE_NAMES } from './scenes.js';
import { createProps, createRipples, createFootprints } from './props.js';
import { createTrees } from './trees.js';
import { createHouse, CABIN, toWorld } from './house.js';     // test copy: the new stilt house from Blender
import { createBoat } from './boat.js';
import { WIND, TEXON } from './kit.js';
import { createComputer } from './computer.js';
import { createPortal } from './portal.js';
import { createSSFX } from './ssfx.js';
import { createOnline } from './online.js';
import { createItems } from './items.js';
import { installFootsteps } from './footsteps.js';
installFootsteps();
import { installSfx } from './sfx.js';
installSfx();
const FIRE_POS = toWorld(0.7, 2.85, 1.45);   // the fireplace (house metres, as in house.js)
import { SunLight } from 'three-addons/lights/SunLight.js';
import { createPhysics } from './physics.js';
import { createPlayer, EYE } from './player.js';
import { createLens } from './lens.js';
import { createHandLight } from './handlight.js';
import { createFish } from './fish.js';
import { createContactShadows } from './contact.js';
import { createAssets } from './assets.js';

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
  const clouds = createClouds(scene, U);   // Settings → Graphics → Clouds
  const rainFx = createRainFX(scene, heightAt);   // heavy rain with splashes (high graphics)
  const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
  const sun = new THREE.DirectionalLight(0xffffff, 1);
  scene.add(hemi, sun, sun.target);
  scene.fog = new THREE.FogExp2(0xcccccc, 0.004);
  const terrain = createTerrain(scene);
  const deepSnow = createDeepSnow(scene, terrain.TU, terrain.mesh);   // thick 3D snow you plough through (a graphics option)
  {
    let q = 3; try { q = Math.min(5, Math.max(1, +localStorage.getItem('meow.deepq') || 3)); } catch { /* ignore */ }
    deepSnow.setQuality(q, terrain.trail);
    const sel = document.getElementById('advDeepQ');
    if (sel) { sel.value = String(q); sel.addEventListener('change', () => { const v = +sel.value; deepSnow.setQuality(v, terrain.trail); try { localStorage.setItem('meow.deepq', String(v)); } catch { /* ignore */ } }); }
  }
  const water = createWater(scene, U);
  // the spots the home views look from stay clear of rocks and grass
  const CLEAR = [[0, 105], [0, 140], [-38, 112], [24, 78], [0, 92], [30, 102], [0, 125]].map(([x, z]) => ({ x, z, r: 42 }));
  const props = createProps({ scene, heightAt, U, snowColor: terrain.TU.uSnow, clear: CLEAR });
  const trees = createTrees({ scene, shared: props.shared, isClearing: (x, z) => props.inClearing(x, z) });
  props.plant(trees.base, 0);
  // soft shade on the ground under every tree and around the cabin
  const treeShade = createContactShadows(scene, heightAt, trees.base.map((b) => ({ x: b.p.x, z: b.p.z, sx: b.s.x * 3.4, sz: b.s.z * 3.4 })), 0.32, 'trees');
  const cabinShade = createContactShadows(scene, heightAt, [{ x: CABIN.x - 4.5, z: CABIN.z, sx: 7.4 * CABIN.S, sz: 8.2 * CABIN.S, yaw: CABIN.yaw }], 0.35, 'cabin');
  const cabin = createHouse({ scene });
  // the old library (links as books) lived under the old cabin; not in this test copy
  const study = { reset() {}, back() { return false; }, hover() { return false; }, click() { return false; } };
  const ripples = createRipples(scene, U);
  const prints = createFootprints(scene, U);
  const weather = createWeather(scene, U, renderer.getPixelRatio());
  const fishing = createFish({ scene, camera, heightAt, water: water.mesh });
  const assets = createAssets({ fishing });
  // image-based light: the sky of the moment, caught in a soft cube map every few seconds,
  // so the water and the detailed models reflect the real sky of each scene
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene();
  { const m = new THREE.Mesh(sky.geometry, sky.material); m.frustumCulled = false; envScene.add(m); }
  let envRT = null, envT = -1e9;
  let envSig = '';
  const refreshEnv = (now) => {
    if (now - envT < 1500) return;
    // only when the sky has really changed (a scene change), not every frame
    const sig = [U.uTop.value, U.uHorizon.value, U.uBottom.value, U.uSunColor.value].map((c) => c.getHexString()).join('') + U.uSunDir.value.toArray().map((v) => v.toFixed(2)).join() + U.uAurora.value.toFixed(2) + U.uSunSize.value.toFixed(3);
    if (sig === envSig) return;
    envSig = sig; envT = now;
    const rt = pmrem.fromScene(envScene, 0, 0.1, 3000, { size: 128 });
    if (envRT) envRT.dispose();
    envRT = rt; scene.environment = rt.texture;
  };
  const hand = createHandLight(scene, U);
  const lens = createLens(U);
  lens.fx = createSSFX();
  // the sun for Fancy and up: cascaded shadows (sharp near you, wider further away), replaces the plain sun
  const sunCSM = new SunLight(0xffffff, 1); sunCSM.visible = false; scene.add(sunCSM);
  const fxFrame = { sunDir: new THREE.Vector3(), sunDisc: new THREE.Vector3(), sunAmt: 0, sunColor: new THREE.Color(), sunVisible: 0, waterY: 0, ice: 0 };

  const st0 = window.MEOW_STATE;
  let motion = st0 && st0.motion === 'reduced' ? 'reduced' : 'full';
  const full = () => motion === 'full';
  const scenes = createScenes(st0 && PRESETS[st0.scene] ? st0.scene : 'rain');
  const physics = createPhysics({ trees, props, cabin, scenes, water: water.mesh });
  const player = createPlayer({ physics, trees });
  const boat = createBoat({ scene, house: cabin, physics });
  // Settings → Play together: other players, and the doors / lights / boat / scene shared with them
  const curl = { t: 0, k: 0 };
  const CAMFX = { lastYaw: 0, turn: 0, lat: 0, land: 0, landV: 0, t: 0, q: new THREE.Quaternion(), e: new THREE.Euler(0, 0, 0, 'XYZ') };
  const peerTrail = new Map();
  // camera view (Settings → Controls → View; the switch key is T unless you change it)
  const VIEW = { mode: 0, shown: 0, t: 1, body: 0, dist: 9, distTo: 9, key: 'KeyT', fromP: new THREE.Vector3(), fromQ: new THREE.Quaternion(), tp: new THREE.Vector3(), tq: new THREE.Quaternion(), v1: new THREE.Vector3(), v2: new THREE.Vector3(), e: new THREE.Euler() };
  try { VIEW.mode = Math.min(1, Math.max(0, parseInt(localStorage.getItem('meow.view') || '0', 10) || 0)); VIEW.key = localStorage.getItem('meow.key.view') || 'KeyT'; } catch { /* ignore */ }
  // third person: the scroll wheel moves the camera closer or further away
  try { VIEW.dist = VIEW.distTo = Math.min(28, Math.max(3, +localStorage.getItem('meow.camdist') || 9)); } catch { /* ignore */ }
  addEventListener('wheel', (e) => {
    if (VIEW.mode !== 1 || !player.walking || !document.pointerLockElement) return;
    VIEW.distTo = Math.min(28, Math.max(3, VIEW.distTo * Math.pow(1.0015, e.deltaY)));
    try { localStorage.setItem('meow.camdist', VIEW.distTo.toFixed(1)); } catch { /* ignore */ }
  }, { passive: true });
  const DROP = { key: 'KeyQ' }; try { DROP.key = localStorage.getItem('meow.key.drop') || 'KeyQ'; } catch { /* ignore */ }
  const keyName = (c) => c.replace(/^Key/, '').replace(/^Digit/, '').replace(/^Numpad/, 'Num ').replace(/^Arrow/, '').replace(/(Left|Right)$/, ' $1').trim();
  const setView = (m) => {
    VIEW.mode = m; try { localStorage.setItem('meow.view', String(m)); } catch { /* ignore */ }
  };
  {
    // a key button: click it, press any key (Esc cancels); keys the game already uses are refused
    const bindKey = (btn, get, set, store, other) => {
      if (!btn) return;
      btn.textContent = keyName(get());
      btn.addEventListener('click', () => {
        btn.textContent = 'Press a key…';
        const grab = (e) => {
          e.preventDefault(); e.stopImmediatePropagation(); removeEventListener('keydown', grab, true);
          if (e.code !== 'Escape') {
            if (RESERVED.includes(e.code) || e.code === other()) toastMsg(keyName(e.code) + ' is already used — pick another key');
            else { set(e.code); try { localStorage.setItem(store, e.code); } catch { /* ignore */ } }
          }
          btn.textContent = keyName(get());
        };
        addEventListener('keydown', grab, true);
      });
    };
    bindKey(document.getElementById('dropKey'), () => DROP.key, (k) => { DROP.key = k; }, 'meow.key.drop', () => VIEW.key);
    const kb = document.getElementById('viewKey');
    const RESERVED = ['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ShiftLeft', 'ShiftRight', 'Space', 'KeyE', 'KeyF', 'KeyR', 'Enter', 'Escape', 'Tab'];
    if (kb) {
      kb.textContent = keyName(VIEW.key);
      kb.addEventListener('click', () => {
        kb.textContent = 'Press a key…';
        const grab = (e) => {
          e.preventDefault(); e.stopImmediatePropagation(); removeEventListener('keydown', grab, true);
          if (e.code !== 'Escape') {
            if (RESERVED.includes(e.code) || e.code === DROP.key) toastMsg(keyName(e.code) + ' is already used — pick another key');
            else { VIEW.key = e.code; try { localStorage.setItem('meow.key.view', e.code); } catch { /* ignore */ } }
          }
          kb.textContent = keyName(VIEW.key);
        };
        addEventListener('keydown', grab, true);
      });
    }
  }
  const online = createOnline({ scene, player, scenes, toast: (m) => toastMsg(m),
    extra: () => ({ lt: hand.state === 'torch' ? 1 : hand.state === 'lamp' ? 2 : 0, seat: boat.active ? boat.seat : -1, boat: boat.snapshot() || undefined, skin: undefined,
      // 1 = curled up on the bed / sofa, 2 = sitting at the computer (then where the chair is)
      bodyYaw: VIEW.body, visY: VIEW.visY, tilt: VIEW.tilt, held: items.heldKind || undefined,
      pose: computer.active ? 2 : curl.k > 0.5 ? 1 : 0, ...(computer.active && cabin.chairSeat() ? { seatAt: cabin.chairSeat() } : {}) }) });
  window.MEOW_ONLINE = online;
  // the snack bag under the house and the bottle on the coffee table (see items.js)
  const items = createItems({ scene, terrain, physics, player, camera, cabin, scenes, water: water.mesh, online, toast: (m) => toastMsg(m) });
  setTimeout(() => { window.MEOW_DEBUG = { get portal() { return portal; }, trees, player, camera, scenes, cabin, items, terrain }; }, 0);   // (testing)
  boat.takenSeats = () => online.takenSeats();
  {
    const S = () => window.MEOW_SOUND || {};
    online.on('door', ([i, open]) => { if (cabin.setDoor(i, open) && S().door) S().door(!!open); });
    online.on('light', (on) => { cabin.setState({ light: on }); if (S().door) S().door(false); });
    online.on('lamp', (on) => { cabin.setState({ lamp: on }); if (S().click) S().click(); });
    online.on('drawer', (open) => { cabin.setState({ drawer: open }); if (window.MEOW_SFX) window.MEOW_SFX.drawer(!!open); });
    online.on('boat', (st, from) => boat.applyRemote(st, from));
    // only the room's host picks the scene; everyone else follows it
    online.on('scene', (name) => { if (!online.isHost || online.world.guestScene) applySceneFromHost(name); });
    online.setSync({
      snapshot: () => ({ scene: scenes.name, house: cabin.getState() }),
      apply: (v) => { if (v.house) cabin.setState(v.house); if (v.scene) applySceneFromHost(v.scene); }
    });
  }
  cabin.setBoatBlock((x, z, feet) => boat.blocks(x, z, feet));
  const computer = createComputer({ camera, house: cabin });
  const portal = createPortal({ scene, trees, camera, isClearing: (x, z) => props.inClearing(x, z) });
  let frameDt = 1 / 60;
  const fishSpot = { tick: 0, ok: false };
  const trailAt = { x: 0, z: 0 };
  const REACH = { mode: 'near', near: 40 }; try { REACH.mode = localStorage.getItem('meow.reach') || 'near'; } catch { /* ignore */ }
  const toastMsg = (m) => { const el = document.getElementById('toast'); if (!el) return; el.textContent = m; el.classList.add('show'); clearTimeout(toastMsg.t); toastMsg.t = setTimeout(() => el.classList.remove('show'), 1800); };
  {
    const seg = document.getElementById('reachSeg');
    const mark = () => seg && seg.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.val === REACH.mode)));
    if (seg) seg.addEventListener('click', (e) => { const b = e.target.closest('button'); if (!b) return; REACH.mode = b.dataset.val; try { localStorage.setItem('meow.reach', REACH.mode); } catch { /* ignore */ } mark(); });
    mark();
  }
  // sound mix (Settings → Sound), 0..1.5 each: your cat, objects, fireplace, boat, nature & link trees
  window.MEOW_MIX = { player: 1, objects: 1, fire: 1, boat: 1, nature: 1 };
  try {
    const old = JSON.parse(localStorage.getItem('meow.mix') || '{}');
    if (old.steps !== undefined && old.player === undefined) old.player = old.steps;   // older saved mix
    if (old.world !== undefined && old.objects === undefined) old.objects = old.fire = old.boat = old.world;
    ['player', 'objects', 'fire', 'boat', 'nature'].forEach((k) => { if (typeof old[k] === 'number') window.MEOW_MIX[k] = old[k]; });
  } catch { /* ignore */ }
  // the shared sound file (sound.js) has one volume; scale each of its sounds by its kind here
  {
    const KIND = { step: 'player', click: 'player', ignite: 'player', puff: 'player', fire: 'player', whoosh: 'player', cast: 'player', reel: 'player',
      page: 'objects', chime: 'nature', plop: 'nature', splash: 'nature' };
    let base = 0.7, wrapped = false;
    const wrap = () => {
      const S = window.MEOW_SOUND; if (!S || wrapped) return; wrapped = true;
      const setV = S.setVolume.bind(S); S.setVolume = (v) => { base = Math.max(0, Math.min(1, Number(v) || 0)); setV(base); };
      Object.entries(KIND).forEach(([fn, k]) => {
        const orig = S[fn]; if (typeof orig !== 'function') return;
        S[fn] = (...a) => { const m = window.MEOW_MIX[k] ?? 1; if (m === 1) return orig(...a); const v0 = (window.MEOW_STATE && typeof window.MEOW_STATE.volume === 'number') ? window.MEOW_STATE.volume : base; setV(Math.min(1, v0 * m)); try { return orig(...a); } finally { setV(v0); } };
      });
    };
    wrap(); setTimeout(wrap, 600);
  }
  [['volPlayer', 'player'], ['volObjects', 'objects'], ['volFire', 'fire'], ['volBoat', 'boat'], ['volNature', 'nature']].forEach(([id, k]) => {
    const el = document.getElementById(id), out = document.getElementById(id + 'Val'); if (!el) return;
    const show = () => { out.textContent = Math.round(window.MEOW_MIX[k] * 100) + '%'; };
    el.value = String(Math.round(window.MEOW_MIX[k] * 100)); show();
    el.addEventListener('input', () => { window.MEOW_MIX[k] = +el.value / 100; show(); try { localStorage.setItem('meow.mix', JSON.stringify(window.MEOW_MIX)); } catch { /* ignore */ } });
  });
  const GFX = { level: 'balanced', plants: true }; try { GFX.level = localStorage.getItem('meow.gfx') || 'none'; } catch { /* ignore */ }   // first visit: lightest graphics, so weak computers can open the menu

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
  const busy = () => !started || root.classList.contains('locked') || gal.focusTo > 0 || (computer && computer.active) || (portal && portal.active);
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
    terrain.TU.uHole.value.copy(FAR); water.WU.uStudy.value.copy(FAR);   // no hole in the ground: the new house stands on stilts
    terrain.TU.uLow.value.copy(s.low); terrain.TU.uHigh.value.copy(s.high); terrain.TU.uSnow.value.copy(s.snowC);
    terrain.TU.uSnowLine.value = s.snowLine; terrain.TU.uSand.value = s.sand;
    water.mesh.position.y = s.water; water.mat.color.copy(s.waterC); water.mat.roughness = Math.max(0.3, s.waterRough) + (0.1 - Math.max(0.3, s.waterRough)) * (s.ice || 0); water.mat.envMapIntensity = 0.35 + 0.5 * (s.ice || 0);
    water.WU.uIce.value = s.ice || 0; water.mat.metalness = 0.1 * (1 - (s.ice || 0));
    water.WU.uLevel.value = s.water; terrain.TU.uWaterY.value = s.water; terrain.TU.uWaterC.value.copy(s.waterC);
    water.tex.offset.set(time * 0.004, time * 0.006);
    sun.color.copy(s.lightC); sun.intensity = s.light * 2.2; sun.position.copy(s.lightDir).multiplyScalar(300);
    if (sunCSM.visible) { sunCSM.color.copy(sun.color); sunCSM.intensity = sun.intensity; sunCSM.position.copy(s.lightDir).normalize().multiplyScalar(100); }
    fxFrame.sunDir.copy(s.lightDir).normalize(); fxFrame.sunDisc.copy(U.uSunDir.value);
    fxFrame.sunAmt = Math.min(1, s.light) * (1 - indoorK); fxFrame.sunColor.copy(s.sunC); fxFrame.sunVisible = s.sunSize > 0 ? 1 : 0;
    fxFrame.waterY = s.water; fxFrame.ice = s.ice || 0;
    WIND.value = (0.9 + 0.7 * (s.rain || 0) + 0.3 * (s.snow || 0)) * (full() ? 1 : 0.3);
    hemi.color.copy(s.hemiSky); hemi.groundColor.copy(s.hemiGround); hemi.intensity = s.hemi * 1.6;
    trees.update(s, now);
    treeShade.set(s.trees); cabinShade.set(s.pCabin);
    props.update(s, time);
    if (!GFX.plants) for (const [o, key] of props.groups) if (key === 'pGrass' || key === 'pFerns' || key === 'flowers') o.visible = false;   // graphics: None
    cabin.update(s, time, now, s.water, player.walking ? player.state.feet : undefined, frameDt);
    online.update(frameDt, time);
    if (window.MEOW_SFX) { const fd = camera.position.distanceTo(FIRE_POS); window.MEOW_SFX.fireAt(Math.min(1, s.pCabin || 0) * Math.pow(1 - Math.min(1, Math.max(0, (fd - 3) / 45)), 2)); }
    assets.update(s, time);
    refreshEnv(now);
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
    if (boat.active) boat.leave(player, water.mesh.position.y, true);
    keys.clear();
    if (player.mode === 'walk' || player.mode === 'enter') player.leave(camera.position, camera.quaternion, full());
    trees.hover(-1); root.classList.remove('on-tree', 'on-book');
    dispatchEvent(new CustomEvent('meow:tree', { detail: { type: 'leave' } }));
  };
  // Esc: first close an open book / send flying books home, then leave the world
  const leaveScene = () => {
    if (computer.active) { computer.close(); return; }
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
    if (e.code === VIEW.key && !e.repeat && started && player.walking && !busy()) { e.preventDefault(); setView(VIEW.mode ? 0 : 1); toastMsg(VIEW.mode ? '🐈 Third person' : '👀 First person'); return; }
    if (e.code === 'KeyF' && !e.repeat && started && !root.classList.contains('locked')) { e.preventDefault(); hand.toggle(now); return; }
    if (busy() || !player.walking) return;
    if (e.code === DROP.key && !e.repeat) { if (items.drop(player.state, VIEW.body)) { e.preventDefault(); hover.pending = true; } return; }
    if (e.code === 'Space') { e.preventDefault(); if (!e.repeat && !boat.active) player.jump(); return; }
    if (e.code === 'KeyR' && !e.repeat) { if (!boat.active && fishing.key(now)) e.preventDefault(); return; }
    if (e.code === 'KeyE' && !e.repeat) {
      // E: step off the boat / go aboard / open or close the door you're looking at (or the nearest one)
      const wy = water.mesh.position.y;
      if (boat.active) { const drv = boat.seat === 0; if (boat.leave(player, wy) && drv) online.emit('boat', { on: 0, home: boat.moored ? 1 : 0 }); return; }
      if ((scenes.cur.ice || 0) < 0.5 && boat.canBoard(player.state, wy)) { boat.board(player); return; }
      { const [cx, cy] = aimPoint(); if (cabin.pickSwitch(rayAt(cx, cy))) { flipLight(); return; } if ((nearPC() && computer.pick(rayAt(cx, cy)))) { openComputer(); return; } }
      if (scenes.cur.pCabin > 0.5) {
        const [cx, cy] = aimPoint();
        const d = cabin.pickDoor(rayAt(cx, cy)) || cabin.nearestDoor(camera.position.x, camera.position.z, 14);
        if (d) toggleDoor(d);
      }
    }
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
  // the door under the dot (front, bedroom or back door), or null
  const aimAtDoor = (cx, cy) => {
    if (!player.walking || boat.active || scenes.cur.pCabin < 0.5) return null;
    return cabin.pickDoor(rayAt(cx, cy), 26);
  };
  // sit down at the computer (the pointer comes back so you can use the screen)
  const flipLight = () => { online.emit('light', cabin.toggleLight()); if (window.MEOW_SOUND && window.MEOW_SOUND.door) window.MEOW_SOUND.door(false); hover.pending = true; };
  // the computer only works when you're at the desk (not from across the room)
  const nearPC = () => { const s2 = cabin.chairSeat(), ps = player.state; return !!s2 && Math.hypot(ps.x - s2.x, ps.z - s2.z) < 7.5 && Math.abs(ps.feet - (s2.y - 2.25)) < 3; };
  const openComputer = () => { unlockPointer(); keys.clear(); actHint.classList.remove('show'); doorShown = false; computer.open(camera.position, camera.quaternion); };
  const toggleDoor = (d) => {
    if (!d) return false;
    const opened = cabin.toggle(d);
    online.emit('door', [cabin.doorIndex(d), opened ? 1 : 0]);
    if (window.MEOW_SOUND && window.MEOW_SOUND.door) window.MEOW_SOUND.door(opened);
    return true;
  };
  const setTreeHover = (id) => {
    if (!trees.hover(id)) return;
    root.classList.toggle('on-tree', id >= 0);
    // link trees show where they go (the paw card); the others keep their cat-fact / scene label
    if (id >= 0 && portal.isLink(id)) { dispatchEvent(new CustomEvent('meow:tree', { detail: { type: 'leave' } })); portal.hover(id, hover.x, hover.y); return; }
    portal.unhover();
    dispatchEvent(new CustomEvent('meow:tree', { detail: id >= 0 ? { type: 'hover', id, x: hover.x, y: hover.y } : { type: 'leave' } }));
  };
  let doorShown = false;
  const updateAim = () => {
    if (++hover.tick % 3 && !hover.pending) return;   // every third frame is plenty
    hover.pending = false;
    const [cx, cy] = aimPoint();
    const active = player.walking && !busy();
    const doorHit = active ? aimAtDoor(cx, cy) : null;
    const pc = active && !doorHit && !boat.active && (nearPC() && computer.pick(rayAt(cx, cy)));
    const sw = active && !doorHit && !pc && !boat.active && cabin.pickSwitch(rayAt(cx, cy));
    const lmp = active && !doorHit && !pc && !sw && !boat.active && cabin.pickLamp(rayAt(cx, cy));
    const drw = active && !doorHit && !pc && !sw && !lmp && !boat.active && cabin.pickDrawer(rayAt(cx, cy));
    const itm = active && !doorHit && !pc && !sw && !lmp && !drw && !boat.active && items.hover(rayAt(cx, cy), player.state);
    const door = !!doorHit || pc || sw || lmp || drw || itm;
    if (door !== doorShown) { doorShown = door; actHint.classList.toggle('show', door); }
    if (itm) actHint.querySelector('span').textContent = items.heldKind ? 'Click to swap what you carry' : 'Click to pick it up · ' + keyName(DROP.key) + ' to drop';
    else if (lmp) actHint.querySelector('span').textContent = cabin.lampOn ? 'Click to turn the lamp off' : 'Click to turn the lamp on';
    else if (drw) actHint.querySelector('span').textContent = cabin.drawerOpen ? 'Click to close the drawer' : 'Click to open the drawer';
    else if (sw) actHint.querySelector('span').textContent = cabin.lightOn ? 'Click to turn the light off' : 'Click to turn the light on';
    else if (pc) actHint.querySelector('span').textContent = 'Click to use the computer';
    else if (door) actHint.querySelector('span').textContent = doorHit.to > 0.5 ? t$('doorClose', 'Click to close the door') : t$('doorOpen', 'Click to open the door');
    root.classList.toggle('on-book', study.hover(rayAt(cx, cy), active && scenes.cur.pCabin > 0.5 && indoorK > 0.5));
    // trees light up under the dot (or the mouse at home); not from indoors or over the page's own buttons
    const treeOK = !busy() && indoorK < 0.5 && !player.gliding && player.walking;   // only once you're in the game (WASD)
    if (locked()) { hover.x = cx; hover.y = cy; }
    setTreeHover(treeOK ? trees.pick(rayAt(cx, cy)) : -1);
    if (trees.hovered >= 0 && portal.isLink(trees.hovered)) portal.hover(trees.hovered, hover.x, hover.y);
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
      if (resumeWait) resumeOff();
      // first click in the world hides the pointer; from then on you aim with the dot
      if (player.walking && !locked() && e.pointerType === 'mouse' && !lockFails && canvas.requestPointerLock) {
        lockPointer(); press = null; e.preventDefault(); resumeOff();
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
    if (player.walking && !busy() && !resumeWait && !look.ui && e.pointerType !== 'touch' && (e.movementX || e.movementY)) player.look(e.movementX, e.movementY, 0.0028 * sens());
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
    if (player.walking && !boat.active && items.click(rayAt(cx, cy), player.state, VIEW.body)) { hover.pending = true; return; }
    if (player.walking && scenes.cur.pCabin > 0.5 && indoorK > 0.5 && study.click(rayAt(cx, cy), now)) return;
    if (player.walking && !boat.active && cabin.pickSwitch(rayAt(cx, cy))) { flipLight(); return; }
    if (player.walking && !boat.active && cabin.pickLamp(rayAt(cx, cy))) { online.emit('lamp', cabin.toggleLamp()); if (window.MEOW_SOUND && window.MEOW_SOUND.click) window.MEOW_SOUND.click(); hover.pending = true; return; }
    if (player.walking && !boat.active && cabin.pickDrawer(rayAt(cx, cy))) { const o = cabin.toggleDrawer(); online.emit('drawer', o); if (window.MEOW_SFX) window.MEOW_SFX.drawer(o); hover.pending = true; return; }
    if (player.walking && !boat.active && (nearPC() && computer.pick(rayAt(cx, cy)))) { openComputer(); return; }
    { const d = aimAtDoor(cx, cy); if (d) { toggleDoor(d); return; } }
    if (!player.walking) { dispatchEvent(new CustomEvent('meow:tree', { detail: { type: 'miss' } })); return; }   // the trees aren't links on the home page
    const id = trees.hovered >= 0 ? trees.hovered : (indoorK < 0.5 ? trees.pick(rayAt(cx, cy)) : -1);
    if (id >= 0 && portal.isLink(id)) {
      // a link tree: the cat paw grabs you and takes you to the website.
      // Tree reach (Settings): 'near' = walk up to the tree first; 'far' = any distance (the leg stretches out)
      const tb = trees.base[id], dist = Math.hypot(tb.p.x - camera.position.x, tb.p.z - camera.position.z);
      if (REACH.mode === 'near' && dist > REACH.near) { toastMsg('🐾 Walk closer to this tree'); return; }
      trees.shake(id, now);
      if (window.MEOW_SOUND && window.MEOW_SOUND.chime) window.MEOW_SOUND.chime(id);
      const ps0 = player.state;
      unlockPointer(); keys.clear(); portal.go(id, !full(), { x: ps0.x, z: ps0.z, feet: ps0.feet, yaw: ps0.yaw, pitch: ps0.pitch, scene: scenes.name }, dist > REACH.near ? 'far' : 'near');
      return;
    }
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
    if (now - perf.since < 5000 || dt > 250 || document.hidden || ['fancy', 'best', 'extreme', 'none'].includes(GFX.level)) return;   // the higher levels keep what you chose
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
    frameDt = dt;
    let stepped = false;
    // on the boat it steers and places the camera; otherwise you walk as usual
    // the lake freezes over (snow scene): if you're out sailing you're put ashore
    if ((scenes.cur.ice || 0) > 0.5 && boat.active) boat.leave(player, water.mesh.position.y, true);
    if (computer.active) { computer.update(dt, camOut); boat.update(dt, time, keys, player, { pos: new THREE.Vector3(), q: new THREE.Quaternion() }, water.mesh.position.y, scenes.cur, full(), false); }
    else if (boat.active) boat.update(dt, time, keys, player, camOut, water.mesh.position.y, scenes.cur, full(), false);
    else {
      stepped = player.update(dt, now, keys, homePose, full(), scenes, water.mesh, camOut);
      boat.update(dt, time, keys, player, camOut, water.mesh.position.y, scenes.cur, full(), player.walking && !busy() && (scenes.cur.ice || 0) < 0.5 && boat.canBoard(player.state, water.mesh.position.y));
    }
    portal.update(now, camOut, scenes.cur);   // while the paw has you, it moves the camera
    if (player.justLanded) { player.justLanded = false; lockPointer(); }
    if (player.mode === 'home') setExploring(false);
    // stand still on the bed or the sofa for a moment and your cat curls up (others see it; your view sinks low)
    {
      const ps = player.state, on = player.walking && !boat.active && !computer.active && !ps.air ? cabin.surfaceUnder(ps.x, ps.z, ps.feet) : null;
      const still = Math.hypot(ps.vx || 0, ps.vz || 0) < 0.6;
      curl.t = (on === 'bed' || on === 'sofa') && still ? curl.t + dt : 0;
      curl.k += ((curl.t > 1.5 ? 1 : 0) - curl.k) * Math.min(1, dt * 3);
      if (curl.k > 0.001 && player.walking && VIEW.shown === 0) camOut.pos.y -= curl.k * 1.2;
    }
    // where your cat's paws really are: on the ground exactly as it's drawn (the walking height uses a
    // smoothed ground, which on a slope sits a little above the visible hillside), tipped to follow the slope
    {
      const ps = player.state, g = physics.groundAt(ps.x, ps.z);
      VIEW.visY = ps.feet; VIEW.tilt = 0;
      if (player.walking && !ps.air && Math.abs(ps.feet - g) < 0.05 && ps.feet > water.mesh.position.y + 0.05) {
        const sAt = terrain.surfaceAt, fx = -Math.sin(VIEW.body), fz = -Math.cos(VIEW.body);
        VIEW.visY = Math.max(water.mesh.position.y, sAt(ps.x, ps.z));
        VIEW.tilt = Math.max(-0.5, Math.min(0.5, Math.atan2(sAt(ps.x + fx * 1.6, ps.z + fz * 1.6) - sAt(ps.x - fx * 1.6, ps.z - fz * 1.6), 3.2)));
      }
    }
    // the perspective: 0 first person (your cat's eyes) · 1 third person. Switching glides the camera over.
    // In third person the mouse moves the camera freely around your cat; the cat only turns when you walk (WASD).
    {
      const ps = player.state, walk = player.walking && !boat.active && !computer.active && !(portal && portal.active);
      const mode = walk ? VIEW.mode : 0;
      if (mode !== VIEW.shown) { VIEW.fromP.copy(camera.position); VIEW.fromQ.copy(camera.quaternion); VIEW.t = walk ? 0 : 1; VIEW.shown = mode; }
      const sp = Math.hypot(ps.vx || 0, ps.vz || 0);
      if (mode === 0) VIEW.body = ps.yaw;
      else if (sp > 1) {   // face the way you're walking
        const want = Math.atan2(-ps.vx, -ps.vz); let d = want - VIEW.body; d = Math.atan2(Math.sin(d), Math.cos(d));
        VIEW.body += d * Math.min(1, dt * 10);
      }
      const fwd = VIEW.v1.set(0, 0, -1).applyQuaternion(camOut.q);
      const tp = VIEW.tp, tq = VIEW.tq;
      if (mode === 1) {
        // orbit: back off from the cat along the way you look, stopping short of walls
        const hx = ps.x, hy = ps.feet + EYE + 0.8, hz = ps.z;
        let d = 0;
        VIEW.dist += (VIEW.distTo - VIEW.dist) * Math.min(1, dt * 10);
        for (; d < VIEW.dist; d += 0.4) {
          const x = hx - fwd.x * (d + 0.4), z = hz - fwd.z * (d + 0.4);
          if (physics.blocked(x, z, ps.feet, 0.4)) break;
        }
        tp.set(hx - fwd.x * d, hy - fwd.y * d + 1.0, hz - fwd.z * d);
        if (physics.inside(ps.x, ps.z, ps.feet)) tp.y = Math.min(tp.y, ps.feet + 11);
        tp.y = Math.max(tp.y, physics.floor(tp.x, tp.z, ps.feet).y + 0.8);
        tq.copy(camOut.q);
      } else {
        // first person: at the front of the head, where a cat's eyes are
        tp.copy(camOut.pos).addScaledVector(VIEW.v2.set(fwd.x, 0, fwd.z).normalize(), 0.6); tq.copy(camOut.q);
      }
      if (VIEW.t < 1) {
        VIEW.t = Math.min(1, VIEW.t + dt / 0.6); const e = VIEW.t * VIEW.t * (3 - 2 * VIEW.t);
        camOut.pos.lerpVectors(VIEW.fromP, tp, e); camOut.q.copy(VIEW.fromQ).slerp(tq, e);
      } else { camOut.pos.copy(tp); camOut.q.copy(tq); }
      const show = walk && (mode > 0 || VIEW.t < 1);
      items.update(dt, time, ps, player.walking && VIEW.shown === 0 && VIEW.t >= 1);
      online.updateSelf(show, { held: items.heldKind, x: ps.x, y: VIEW.visY ?? ps.feet, tilt: VIEW.tilt || 0, z: ps.z, yaw: VIEW.body, pitch: mode ? 0 : ps.pitch, speed: sp, dt, time, pose: curl.k > 0.5 ? 1 : 0 });
    }
    // camera sway (Settings → Motion: full): you lean into turns and sideways steps, dip when you land, and
    // breathe a little standing still — like eyes in a moving body, not a camera on rails
    {
      const ps = player.state, F = CAMFX;
      const on = player.walking && full() && !computer.active && !(portal && portal.active);
      const k = on ? (VIEW.shown === 1 ? 0.45 : 1) : 0;
      let dyaw = ps.yaw - F.lastYaw; dyaw = Math.atan2(Math.sin(dyaw), Math.cos(dyaw)); F.lastYaw = ps.yaw;
      const rate = dt > 0 ? Math.max(-4, Math.min(4, dyaw / dt)) : 0;
      F.turn += (rate - F.turn) * (1 - Math.exp(-dt * 5));
      const rx = Math.cos(ps.yaw), rz = -Math.sin(ps.yaw), lat = ((ps.vx || 0) * rx + (ps.vz || 0) * rz) / 24;
      F.lat += (lat - F.lat) * (1 - Math.exp(-dt * 5));
      if (ps.landK) { F.landV -= ps.landK * 7; ps.landK = 0; }
      F.landV += (-F.land * 110 - F.landV * 13) * Math.min(dt, 0.05); F.land += F.landV * Math.min(dt, 0.05);
      F.t += dt;
      const sp = Math.min(1, Math.hypot(ps.vx || 0, ps.vz || 0) / 24), still = 1 - sp;
      const roll = (-F.turn * 0.022 - F.lat * 0.04 + Math.sin(F.t * 0.83) * 0.004 * still) * k;
      const pitch = (Math.sin(F.t * 1.25) * 0.005 * still + F.land * 0.08) * k;
      camOut.pos.y += (F.land * 0.55 + Math.sin(F.t * 1.25) * 0.025 * still) * k;
      camOut.q.multiply(F.q.setFromEuler(F.e.set(pitch, 0, roll)));
    }
    camera.position.copy(camOut.pos);
    camera.quaternion.copy(camOut.q);
    const fov = (innerWidth < 700 ? 62 : 50) - (player.mode === 'home' ? gal.focus * 6 - gal.pulse * 1.5 : 0);
    if (Math.abs(camera.fov - fov) > 0.01) { camera.fov = fov; camera.updateProjectionMatrix(); }
    sky.position.copy(camera.position);
    { const c = scenes.cur, starry = c.stars || 0;   // cloud cover from the scene: rain and snow skies are thick, clear starry nights thin
      clouds.update(camera.position, frameDt, Math.min(0.95, 0.42 + (c.rain || 0) * 0.42 + (c.snow || 0) * 0.3 + (c.mist || 0) * 0.12 - starry * 0.25), Math.min(1, (c.rain || 0) * 0.8)); }
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
    rainFx.update(dt, time, camera.position, (scenes.cur.rain || 0) * out, water.mesh.position.y, indoorK > 0.5);
    ripples.update(scenes.cur.pRipples * out, camera.position, water.mesh.position.y);
    prints.update(Math.min(1, Math.max(0, (100 - scenes.cur.snowLine) / 80)) * out);
    // snow trails: every bit of ground you cross on snow gets pressed down (refills while it snows)
    terrain.trail.update(dt, scenes.cur.snow || 0);
    deepSnow.update(ps.x, ps.z, scenes.cur.snowLine < heightAt(ps.x, ps.z) + 60);
    // other players' paws press the snow too (where they walk on it, as you see them)
    {
      const PT = peerTrail;
      for (const q of online.peers()) {
        const last = PT.get(q.id); if (!last) { PT.set(q.id, { x: q.x, z: q.z }); continue; }
        const dx = q.x - last.x, dz = q.z - last.z, d = Math.hypot(dx, dz); if (d < 0.5) continue;
        const gh = heightAt(q.x, q.z), sl = scenes.cur.snowLine, ground = physics.groundAt(q.x, q.z);
        const touching = q.y < ground + 0.6 || q.y < gh + 0.6;
        if (touching && d < 40 && Math.min(1, Math.max(0, (gh - (sl - 12)) / 24)) > 0.35 && gh > water.mesh.position.y + 0.6) {
          const n = Math.ceil(d / 0.5); for (let i = 1; i <= n; i++) terrain.trail.stamp(last.x + dx * i / n, last.z + dz * i / n, 1.15);
        }
        last.x = q.x; last.z = q.z;
      }
    }
    if (player.walking && !inside) {
      // only where your paws touch: a jump or a leap leaves the snow untouched until you land
      const ground = physics.groundAt(ps.x, ps.z), touching = !ps.air || ps.feet < ground + 0.5;
      if (!touching) { trailAt.x = ps.x; trailAt.z = ps.z; }
      else {
        const dx = ps.x - trailAt.x, dz = ps.z - trailAt.z, d = Math.hypot(dx, dz);
        if (d > 0.5) {
          const gh = heightAt(ps.x, ps.z), sl = scenes.cur.snowLine;
          // (on a slope the floor you stand on is a little above the exact ground height: compare with that)
          const snowy = Math.min(1, Math.max(0, (gh - (sl - 12)) / 24)) > 0.35 && gh > water.mesh.position.y + 0.6 && ps.feet < ground + 1.5;
          if (snowy && d < 80) { const n = Math.ceil(d / 0.5);   // fill the whole gap, even after a slow frame (a bigger jump is a teleport)
            for (let i = 1; i <= n; i++) terrain.trail.stamp(trailAt.x + dx * i / n, trailAt.z + dz * i / n, 1.15); }
          trailAt.x = ps.x; trailAt.z = ps.z;
        }
      }
    }
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
      // you can fish from the dock or from the shore, not from the boat
      const wy = water.mesh.position.y;
      if (++fishSpot.tick % 6 === 1) {
        const fl = physics.floor(ps.x, ps.z, ps.feet);
        let shore = false;
        if (!fl.built && ps.feet < wy + 9 && heightAt(ps.x, ps.z) > wy - 0.3) for (let i = 0; i < 36 && !shore; i++) { const a = (i % 12) * Math.PI / 6, r = 12 + Math.floor(i / 12) * 11; shore = heightAt(ps.x + Math.cos(a) * r, ps.z + Math.sin(a) * r) < wy - 0.6; }
        fishSpot.ok = player.walking && !boat.active && ((fl.built && ps.feet < wy + 5) || shore);
      }
      fishing.update(now, time, { active: player.walking && !busy(), ray: player.walking ? rayAt(fx, fy) : null, waterY: wy, amount: scenes.cur.fishy, indoor: indoorK > 0.5, canFish: fishSpot.ok && !boat.active && (scenes.cur.ice || 0) < 0.5, onBoat: boat.active });
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
    lens.render(renderer, scene, camera, time, fxFrame);
  };
  /* ---------- frame rate: an optional limit, and a counter (Settings) ----------
     The browser always draws in step with the screen (V-Sync is always on for web pages), so the most
     you can get is your screen's refresh rate; the limit lets you choose less. */
  const FPS = { cap: 0, last: 0, show: false, n: 0, t0: 0, raw: [], prev: 0, ms: 0 };
  try { FPS.cap = +(localStorage.getItem('meow.fpscap') || 0); FPS.show = localStorage.getItem('meow.showfps') === '1'; } catch { /* ignore */ }
  const fpsEl = document.createElement('div');
  fpsEl.style.cssText = 'position:fixed;left:12px;bottom:12px;z-index:70;pointer-events:none;font:600 12px/1.35 ui-monospace,Menlo,Consolas,monospace;color:#d9ffd6;background:rgba(0,0,0,.55);padding:6px 9px;border-radius:8px;white-space:pre;display:none';
  document.body.appendChild(fpsEl);
  const frame = (now) => {
    requestAnimationFrame(frame);
    if (FPS.prev) { FPS.raw.push(now - FPS.prev); if (FPS.raw.length > 120) FPS.raw.shift(); }
    FPS.prev = now;
    if (!started || document.hidden) return;
    if (FPS.cap > 0) {
      const iv = 1000 / FPS.cap, el = now - FPS.last;
      if (el < iv - 1.2) return;
      FPS.last = el > iv * 3 ? now : now - (el % iv);
    }
    const t = performance.now();
    step(now);
    watchPerf(now);
    FPS.ms += performance.now() - t; FPS.n++;
    if (now - FPS.t0 > 500) {
      if (FPS.show) {
        const sorted = [...FPS.raw].sort((a, b) => a - b), med = sorted[sorted.length >> 1] || 16.7;
        fpsEl.textContent = `${Math.round(FPS.n * 1000 / (now - FPS.t0))} fps   ${(FPS.ms / Math.max(1, FPS.n)).toFixed(1)} ms\nscreen ~${Math.round(1000 / med)} Hz · ${(GFX_LEVELS[GFX.level] || { name: "Custom" }).name}${FPS.cap ? ' · cap ' + FPS.cap : ''}`;
      }
      fpsEl.style.display = FPS.show ? 'block' : 'none';
      FPS.n = 0; FPS.ms = 0; FPS.t0 = now;
    }
  };
  {
    const sel = document.getElementById('fpsCap'), sw = document.getElementById('fpsShow');
    if (sel) { sel.value = String(FPS.cap); sel.addEventListener('change', () => { FPS.cap = +sel.value; try { localStorage.setItem('meow.fpscap', String(FPS.cap)); } catch { /* ignore */ } }); }
    if (sw) {
      sw.setAttribute('aria-checked', String(FPS.show));
      sw.addEventListener('click', () => { FPS.show = !FPS.show; sw.setAttribute('aria-checked', String(FPS.show)); try { localStorage.setItem('meow.showfps', FPS.show ? '1' : '0'); } catch { /* ignore */ } });
    }
  }

  /* ---------- scenes ---------- */
  const themeExposure = () => (root.getAttribute('data-theme') === 'dark' ? 0.62 : 1.0);
  new MutationObserver(() => { exposureTo = themeExposure(); }).observe(root, { attributes: true, attributeFilter: ['data-theme'] });
  const markScene = (name) => document.querySelectorAll('#sceneGrid button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.val === name)));
  function applySceneFromHost(name) { if (window.MEOW_STATE) window.MEOW_STATE.scene = name; markScene(name); window.MEOW_BG.setScene(name, true); }
  const goTo = (name, ms) => {
    scenes.go(name, full() ? ms : 1, performance.now());
    root.setAttribute('data-scene', scenes.name);
    if (started) dispatchEvent(new CustomEvent('meow:shot', { detail: { name: scenes.name, dur: full() ? ms : 1 } }));
  };
  root.setAttribute('data-scene', scenes.name);

  window.MEOW_BG = {
    scenes: SCENE_NAMES,
    setScene(name, fromHost) {
      if (!PRESETS[name]) name = 'rain';
      // in a room, only the host changes the scene (for everyone)
      if (!fromHost && online.inRoom && !online.canChangeScene && name !== scenes.name) {
        toastMsg('🐾 Only the room\'s host can change the scene');
        if (window.MEOW_STATE) window.MEOW_STATE.scene = scenes.name;
        markScene(scenes.name);
        return;
      }
      if (!fromHost && online.inRoom && online.canChangeScene) online.emit('scene', name);   // tell the room (the host passes it on)
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
      // back from a link (the page was loaded fresh): stand where you were before the paw took you
      let back = null; try { back = JSON.parse(sessionStorage.getItem('meow.back') || 'null'); sessionStorage.removeItem('meow.back'); } catch { /* ignore */ }
      if (back && typeof back.x === 'number') setTimeout(() => resumeAt(back), 600);
    },
    /* ---- for testing ---- */
    // stand at world (x, z); level: 'study' / 'mezz' for the library floors, else the highest floor there
    _standAt(x, z, level) {
      const feet = 1e5; void level;
      player.place(x, z, physics.floor(x, z, feet).y);
      setExploring(true);
    },
    _look(x, z, pitch = 0) { const ps = player.state; player.face(Math.atan2(-(x - ps.x), -(z - ps.z)), pitch); },
    _pos() { const ps = player.state; return { x: ps.x, z: ps.z, feet: ps.feet, mode: player.mode, cx: camera.position.x, cy: camera.position.y, cz: camera.position.z, yaw: ps.yaw, pitch: ps.pitch, indoor: indoorK }; },
    _toggleDoor(name) { toggleDoor(cabin.doors.find((q) => !name || q.name === name)); },
    _aimDoor(cx, cy) { const d = aimAtDoor(cx, cy); return { hit: !!d, name: d && d.name, walking: player.walking }; },
    get _trees() { return trees; }, get _keys() { return [...keys]; }, get _study() { return study; }, get _cabin() { return cabin; }, get _assets() { return assets; }, get _physics() { return physics; }, get _boat() { return boat; }, get _computer() { return computer; }, get _portal() { return portal; }, get _house() { return cabin; }, get _terrain() { return terrain; }, get _dbg() { return { renderer, sunCSM, sun, lens, scene }; }, get _player() { return player; }, get _cur() { return scenes.cur; },
    _nearTree(i, d = 16) { const b = trees.base[i % trees.base.length]; if (b) this._standAt(b.p.x, b.p.z + d); }
  };
  void EYE;

  /* ---------- graphics (Settings): None · Fast · Default · Balanced · Fancy · Best · Extreme ---------- */
  //   pr: pixel ratio cap (× your screen's), shadows: house/torch shadows, sun: sun-shadow map size (0 = none),
  //   box: how far around you sun shadows reach, plants: grass/ferns/flowers drawn, soft: soft shadow edges
  const GFX_LEVELS = {
    //          pixels         sun shadows: cascade map size, distance, softness   lamp/fire shadows   screen-space effects
    none:     { tex: false, name: 'None',     pr: 0.5,  shadows: false, csm: 0,    far: 0,   soft: 0,   lamps: 0,    plants: false, clouds: 0, hifx: 0, deep: 0, fx: {} },
    fast:     { tex: false, name: 'Fast',     pr: 0.75, shadows: false, csm: 0,    far: 0,   soft: 0,   lamps: 0,    plants: true,  clouds: 1, hifx: 0, deep: 0, fx: {} },
    default:  { name: 'Default',  pr: 1.0,  shadows: true,  csm: 0,    far: 0,   soft: 0,   lamps: 0,    plants: true,  clouds: 1, hifx: 0, deep: 0, fx: {} },
    balanced: { name: 'Balanced', pr: 1.5,  shadows: true,  csm: 0,    far: 0,   soft: 0,   lamps: 0,    plants: true,  clouds: 1, hifx: 0, deep: 0, fx: {} },
    fancy:    { name: 'Fancy',    pr: 1.5,  shadows: true,  csm: 1024, far: 160, soft: 1.0, lamps: 0,    plants: true,  clouds: 1, hifx: 0, deep: 0, fx: { ao: 0.8, aoSamples: 8, scale: 0.5 } },
    best:     { name: 'Best',     pr: 2.0,  shadows: true,  csm: 2048, far: 260, soft: 1.6, lamps: 512,  plants: true,  clouds: 2, hifx: 1, deep: 0, fx: { ao: 1, aoSamples: 12, contact: 0.6, scale: 0.75 } },
    extreme:  { name: 'Extreme',  pr: 3.0,  shadows: true,  csm: 3072, far: 400, soft: 1.8, lamps: 1024, plants: true,  clouds: 2, hifx: 1, deep: 0, fx: { ao: 1, aoSamples: 16, contact: 0.7, gi: 0.45, ssr: 1, rays: 1, scale: 1 } }
  };
  const GFX_ORDER = Object.keys(GFX_LEVELS);
  const OLD = { low: 'fast', mid: 'balanced', high: 'best' };
  sun.shadow.bias = -0.0006; sun.shadow.normalBias = 0.5;
  // Advanced (Settings): resolution, sharpness, and a Custom level built from individual choices
  const ADV = { res: 0, sharp: 0, custom: null };
  try { Object.assign(ADV, JSON.parse(localStorage.getItem('meow.gfxadv') || '{}')); } catch { /* ignore */ }
  const saveAdv = () => { try { localStorage.setItem('meow.gfxadv', JSON.stringify(ADV)); } catch { /* ignore */ } };
  const customFrom = (base) => ({ name: 'Custom', clouds: base.clouds ?? 1, hifx: base.hifx ?? 0, deep: base.deep ?? 0, pr: base.pr, shadows: base.shadows, csm: base.csm, far: base.far || 260, soft: base.soft || 1.6, lamps: base.lamps, plants: base.plants, tex: base.tex !== false,
    fx: Object.assign({ ao: 0, aoSamples: 12, contact: 0, gi: 0, ssr: 0, rays: 0, scale: 0.75 }, base.fx) });
  const applyGfx = (lv) => {
    lv = OLD[lv] || lv; if (lv !== 'custom' && !GFX_LEVELS[lv]) lv = 'balanced';
    if (lv === 'custom' && !ADV.custom) ADV.custom = customFrom(GFX_LEVELS.balanced);
    const G = lv === 'custom' ? ADV.custom : GFX_LEVELS[lv];
    GFX.level = lv; GFX.plants = G.plants; TEXON.value = G.tex === false ? 0 : 1; try { localStorage.setItem('meow.gfx', lv); } catch { /* ignore */ }
    const dpr = window.devicePixelRatio || 1;
    PR[0] = ADV.res > 0 ? dpr * ADV.res : lv === 'extreme' ? Math.min(dpr * 1.25, G.pr) : Math.min(dpr, G.pr);
    lens.LU.uSharp.value = ADV.sharp / 100;
    perf.level = 0; perf.sum = perf.n = 0; renderer.setPixelRatio(PR[0]);
    renderer.shadowMap.enabled = G.shadows;
    renderer.shadowMap.type = G.soft ? THREE.PCFSoftShadowMap : THREE.PCFShadowMap;
    sun.castShadow = false;
    // cascaded sun shadows
    sunCSM.visible = G.csm > 0; sun.visible = !sunCSM.visible; sunCSM.castShadow = G.csm > 0;
    if (G.csm > 0) {
      if (sunCSM.shadow.map && sunCSM.shadow.mapSize.y !== G.csm) { sunCSM.shadow.map.dispose(); sunCSM.shadow.map = null; }
      sunCSM.shadow.mapSize.set(G.csm, G.csm); sunCSM.shadow.camera.far = G.far; sunCSM.shadow.radius = G.soft;
      sunCSM.shadow.bias = -0.0003; sunCSM.shadow.normalBias = 0.12;
    }
    cabin.setLightShadows(G.lamps);
    clouds.setMode(G.clouds ?? 1);
    cabin.setFireQuality(!!G.hifx); deepSnow.setEnabled(!!G.deep); rainFx.setEnabled(!!G.hifx); fishing.setDetail(!!G.hifx);   // realistic fire, heavy rain, detailed fish
    dispatchEvent(new CustomEvent('meow:gfx', { detail: lv }));   // other players' cats pick their detail level from this
    lens.fx.configure(Object.assign({ ao: 0, aoSamples: 8, contact: 0, gi: 0, ssr: 0, rays: 0, scale: 0.5 }, G.fx));
    scene.traverse((o) => { if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => { m.needsUpdate = true; }); });
    resize();
    const r = document.getElementById('gfxRange'), out = document.getElementById('gfxVal');
    if (r && lv !== 'custom') r.value = String(GFX_ORDER.indexOf(lv)); if (out) out.textContent = G.name;
    syncAdv(G);
    // about how much graphics memory this level uses (picture buffers + shadow maps + the world itself)
    const mem = document.getElementById('gfxMem');
    if (mem) {
      const db = renderer.getDrawingBufferSize(new THREE.Vector2());
      const bytes = db.x * db.y * 8 + lens.bytes + lens.fx.bytes() + (G.csm ? 2 * G.csm * G.csm * 4 : 0) + cabin.lightShadowBytes + 350e6;
      mem.textContent = 'About ' + (bytes / 1e9).toFixed(bytes < 1e9 ? 2 : 1) + ' GB of graphics memory at this window size';
    }
  };
  // the Advanced panel: every control maps to one field of the Custom level
  function syncAdv(G) {
    const $ = (id) => document.getElementById(id); if (!$('advRes')) return;
    $('advRes').value = String(ADV.res); $('advSharp').value = String(ADV.sharp); $('advSharpVal').textContent = ADV.sharp + '%';
    $('advSun').value = String(G.csm || 0); $('advLamps').value = String(G.lamps || 0);
    const sw = (id, on) => $(id).setAttribute('aria-checked', String(!!on));
    sw('advShadows', G.shadows); sw('advPlants', G.plants); sw('advAO', G.fx.ao > 0); sw('advContact', G.fx.contact > 0);
    if ($('advClouds')) $('advClouds').value = String(G.clouds ?? 1);
    sw('advHiFx', !!G.hifx); if ($('advDeep')) sw('advDeep', !!G.deep);
    sw('advTex', G.tex !== false); sw('advSSR', G.fx.ssr > 0); sw('advGI', G.fx.gi > 0); sw('advRays', G.fx.rays > 0);
  }
  {
    const $ = (id) => document.getElementById(id);
    const toCustom = (fn) => { if (GFX.level !== 'custom') ADV.custom = customFrom(GFX_LEVELS[GFX.level] || GFX_LEVELS.balanced); fn(ADV.custom); saveAdv(); applyGfx('custom'); };
    if ($('advRes')) {
      $('advRes').addEventListener('change', (e) => { ADV.res = +e.target.value; saveAdv(); applyGfx(GFX.level); });
      $('advSharp').addEventListener('input', (e) => { ADV.sharp = +e.target.value; saveAdv(); $('advSharpVal').textContent = ADV.sharp + '%'; lens.LU.uSharp.value = ADV.sharp / 100; });
      $('advSun').addEventListener('change', (e) => toCustom((c) => { c.csm = +e.target.value; if (c.csm) c.shadows = true; }));
      $('advLamps').addEventListener('change', (e) => toCustom((c) => { c.lamps = +e.target.value; if (c.lamps) c.shadows = true; }));
      if ($('advClouds')) $('advClouds').addEventListener('change', (e) => toCustom((c) => { c.clouds = +e.target.value; }));
      const flip = (id, fn) => $(id).addEventListener('click', () => toCustom((c) => fn(c, $(id).getAttribute('aria-checked') !== 'true')));
      flip('advShadows', (c, on) => { c.shadows = on; if (!on) { c.csm = 0; c.lamps = 0; } });
      flip('advPlants', (c, on) => { c.plants = on; });
      if ($('advHiFx')) flip('advHiFx', (c, on) => { c.hifx = on ? 1 : 0; });
      if ($('advDeep')) flip('advDeep', (c, on) => { c.deep = on ? 1 : 0; });
      flip('advTex', (c, on) => { c.tex = on; });
      flip('advAO', (c, on) => { c.fx.ao = on ? 1 : 0; });
      flip('advContact', (c, on) => { c.fx.contact = on ? 0.65 : 0; });
      flip('advSSR', (c, on) => { c.fx.ssr = on ? 1 : 0; });
      flip('advGI', (c, on) => { c.fx.gi = on ? 0.45 : 0; });
      flip('advRays', (c, on) => { c.fx.rays = on ? 1 : 0; });
    }
  }
  { const r = document.getElementById('gfxRange'); if (r) r.addEventListener('input', () => applyGfx(GFX_ORDER[+r.value])); }
  // Settings → Graphics → Custom…: open the advanced panel; Save keeps the changes, Cancel restores how it was when opened
  {
    const $ = (id) => document.getElementById(id), btn = $('gfxCustomBtn'), panel = $('gfxCustom'), note = $('gfxSaved');
    let snap = null;
    const open = (on) => { panel.hidden = !on; btn.setAttribute('aria-expanded', String(on)); btn.textContent = on ? 'Custom ▾' : 'Custom…'; };
    if (btn && panel) {
      btn.addEventListener('click', () => { if (panel.hidden) { snap = { adv: JSON.parse(JSON.stringify(ADV)), level: GFX.level }; if (note) note.textContent = ''; open(true); } else open(false); });
      $('gfxSave').addEventListener('click', () => { saveAdv(); try { localStorage.setItem('meow.gfx', GFX.level); } catch { /* ignore */ } snap = null; open(false); if (note) note.textContent = 'Saved ✓'; toastMsg('Graphics saved'); });
      $('gfxCancel').addEventListener('click', () => {
        if (snap) { ADV.res = snap.adv.res; ADV.sharp = snap.adv.sharp; ADV.custom = snap.adv.custom; saveAdv(); applyGfx(snap.level); }
        snap = null; open(false); if (note) note.textContent = 'Not changed';
      });
    }
  }
  applyGfx(GFX.level);

  /* ---------- coming back from a link with the browser's Back button ---------- */
  const resumeEl = document.createElement('div');
  resumeEl.style.cssText = 'position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:45;pointer-events:none;padding:12px 20px;border-radius:999px;background:rgba(20,26,32,.66);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);color:#fff;font:500 14px/1.3 "Josefin Sans",system-ui,sans-serif;letter-spacing:.06em;border:1px solid rgba(255,255,255,.18);opacity:0;transition:opacity .3s';
  resumeEl.textContent = '🐾 Welcome back · click to look around';
  document.body.appendChild(resumeEl);
  let resumeWait = false;
  function resumeOff() { resumeWait = false; resumeEl.style.opacity = '0'; }
  function resumeAt(back) {
    portal.reset(); keys.clear(); drag = null; press = null;
    if (back && typeof back.x === 'number') {
      if (back.scene && PRESETS[back.scene] && back.scene !== scenes.name) goTo(back.scene, 1);
      player.place(back.x, back.z, back.feet);
      player.face((back.yaw || 0) + Math.PI, Math.max(-0.3, Math.min(0.3, back.pitch || 0)));   // facing away from the tree
    }
    setExploring(true);
    resumeWait = true; resumeEl.style.opacity = '1';
    hover.pending = true;
  }
  document.addEventListener('pointerlockchange', () => { if (locked()) resumeOff(); });
  addEventListener('pageshow', (e) => {
    // restored from the browser's back/forward cache: everything is still here, just reset it
    if (!e.persisted) return;
    let back = null; try { back = JSON.parse(sessionStorage.getItem('meow.back') || 'null'); sessionStorage.removeItem('meow.back'); } catch { /* ignore */ }
    resumeAt(back);
  });

  { const hint = document.querySelector('.walk-hint'); if (hint) hint.addEventListener('click', () => enterWorld()); }
  requestAnimationFrame(frame);
  if (window.MEOW_READY && window.MEOW_STATE) window.MEOW_READY.then(() => window.MEOW_BG.start());
})();
