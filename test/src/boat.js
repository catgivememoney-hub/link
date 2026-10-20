/* MEOW (test copy) — the little sailboat at the dock, and sailing it.
   Walk up to it (on the dock) and press E to go aboard. Then:
     W  sail forward (hold Shift for a stronger wind)     S  slow down / back off
     A / D  steer (the tiller and rudder turn, the boom swings over)
     mouse  look around the boat      E  step off (at the dock or near a shore)
   It floats and rocks on the lake, heels into turns, and can't sail through land,
   the dock or the house. Step off near the dock and it ties itself up again. */
import * as THREE from 'three';
import { heightAt } from './terrain.js';
import { builtAt } from './house.js';

const MAX = 21, BOOST = 1.6, BACK = 6;          // speeds, world units / s
const HALF_L = 11.2, HALF_B = 3.9;              // half length / half beam of the hull (world units)
const H0 = Math.PI / 2;                          // the heading it has at the mooring (bow toward -x)
const angDiff = (a, b) => Math.atan2(Math.sin(a - b), Math.cos(a - b));

export function createBoat({ scene, house, physics }) {
  const B = {
    node: null, mooring: null, parts: {}, ready: false,
    active: false, moored: true,
    x: 0, z: 0, h: H0, v: 0, steer: 0, sails: 0, bumpT: 0,
    home: null
  };
  const UP = new THREE.Vector3(0, 1, 0), m4 = new THREE.Matrix4(), tgt = new THREE.Vector3(), cam = new THREE.Vector3();

  // HUD: a prompt to board, and the controls while sailing
  const css = 'position:fixed;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;font:500 13px/1.4 "Josefin Sans",system-ui,sans-serif;letter-spacing:.04em;color:#fff;background:rgba(20,28,34,.62);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,.18);border-radius:999px;padding:8px 16px;transition:opacity .25s;opacity:0;white-space:nowrap;';
  const prompt = document.createElement('div'); prompt.style.cssText = css + 'bottom:22%;'; document.body.appendChild(prompt);
  const hud = document.createElement('div'); hud.style.cssText = css + 'bottom:28px;'; document.body.appendChild(hud);
  hud.innerHTML = '<b>W</b> sail &nbsp;·&nbsp; <b>S</b> slow &nbsp;·&nbsp; <b>A</b>/<b>D</b> steer &nbsp;·&nbsp; <b>Shift</b> more wind &nbsp;·&nbsp; <b>E</b> step off';
  const say = (el, text) => { if (text) el.innerHTML = text; el.style.opacity = text ? '1' : '0'; };
  let promptText = '';
  const showPrompt = (t) => { if (t !== promptText) { promptText = t; say(prompt, t); } };

  house.whenBoat((node, mooring) => {
    // take the boat out of the house so it can sail anywhere, keeping exactly where it is
    node.parent.updateMatrixWorld(true);
    scene.attach(node);
    node.rotation.order = 'YXZ';
    B.node = node; B.mooring = mooring;
    const get = (n) => node.getObjectByName(n.replace(/ /g, '_')) || node.getObjectByName(n);
    B.parts = { tiller: get('Tiller'), boom: get('Boom'), main: get('Mainsail'), jib: get('Jib'), fmain: get('Furled mainsail'), fjib: get('Furled jib') };
    B.x = node.position.x; B.z = node.position.z; B.h = H0;
    B.home = { x: B.x, z: B.z, h: H0 };
    node.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    setSails(false);
    B.ready = true;
  });
  const setSails = (up) => {
    const P = B.parts;
    if (P.main) P.main.visible = up; if (P.jib) P.jib.visible = up;
    if (P.fmain) P.fmain.visible = !up; if (P.fjib) P.fjib.visible = !up;
  };

  // the hull's outline at (x, z, heading): a few points around the edge
  const hullPoints = (x, z, h) => {
    const fx = -Math.sin(h), fz = -Math.cos(h), rx = Math.cos(h), rz = -Math.sin(h);
    return [[1, 0], [-0.95, 0], [0.45, 0.75], [0.45, -0.75], [-0.4, 1], [-0.4, -1], [0, 1], [0, -1]]
      .map(([a, b]) => [x + fx * a * HALF_L + rx * b * HALF_B, z + fz * a * HALF_L + rz * b * HALF_B]);
  };
  const clearWater = (x, z, h, waterY) => {
    if (!(Math.abs(x) < 800 && z > -880 && z < 400)) return false;
    for (const [px, pz] of hullPoints(x, z, h)) {
      if (heightAt(px, pz) > waterY - 0.9) return false;      // land or too shallow
      if (builtAt(px, pz)) return false;                       // the dock, the decks, the stairs
    }
    return true;
  };

  const api = {
    get active() { return B.active; },
    get ready() { return B.ready; },
    // while you walk, the hull is solid (you can't walk through it on the water)
    blocks(x, z, feet) {
      if (!B.ready || B.active || !B.node.visible) return false;
      const wy = B.node.position.y;
      if (feet > wy + 6 || feet < wy - 4) return false;
      const dx = x - B.x, dz = z - B.z, fx = -Math.sin(B.h), fz = -Math.cos(B.h);
      const a = dx * fx + dz * fz, b = dx * Math.cos(B.h) - dz * Math.sin(B.h);
      return (a / (HALF_L + 1.2)) ** 2 + (b / (HALF_B + 1.2)) ** 2 < 1;
    },
    // close enough to step aboard?
    canBoard(ps, waterY) {
      if (!B.ready || B.active || !B.node.visible) return false;
      return Math.hypot(ps.x - B.x, ps.z - B.z) < HALF_L + 12 && ps.feet < waterY + 9 && ps.feet > waterY - 3;
    },
    board(player) {
      if (!B.ready) return false;
      B.active = true; B.moored = false; B.v = 0; B.steer = 0;
      setSails(true); if (B.mooring) B.mooring.visible = false;
      const ps = player.state;
      // look the way the boat is pointing
      player.face(B.h, -0.08);
      ps.vx = ps.vz = 0;
      showPrompt(''); say(hud, hud.innerHTML); document.documentElement.classList.add('boating');
      if (window.MEOW_SOUND && window.MEOW_SOUND.whoosh) window.MEOW_SOUND.whoosh();
      return true;
    },
    // step off onto the nearest dock or shore; false if there's nowhere to stand
    leave(player, waterY, force = false) {
      if (!B.active) return false;
      let best = null;
      for (let r = 8; r <= 52 && !best; r += 3) {
        for (let i = 0; i < 36; i++) {
          const a = (i / 36) * Math.PI * 2, x = B.x + Math.cos(a) * r, z = B.z + Math.sin(a) * r;
          if (this.blocksAt(x, z)) continue;
          const f = physics.floor(x, z, waterY + 5.5);
          const ok = f.built || (heightAt(x, z) > waterY + 0.8 && heightAt(x, z) < 60);
          if (!ok || physics.blocked(x, z, f.y, 1)) continue;
          const d = r + Math.abs(f.y - waterY) * 0.2;
          if (!best || d < best.d) best = { x, z, y: f.y, d };
        }
      }
      if (!best && !force) { showPrompt('Sail closer to the dock or a shore to step off'); setTimeout(() => showPrompt(''), 1800); return false; }
      B.active = false; B.v = 0; B.steer = 0; setSails(false); say(hud, ''); document.documentElement.classList.remove('boating');
      // back near the dock: it ties itself up at its mooring again
      if (B.home && Math.hypot(B.x - B.home.x, B.z - B.home.z) < 70) { B.x = B.home.x; B.z = B.home.z; B.h = B.home.h; B.moored = true; if (B.mooring) B.mooring.visible = true; }
      if (best) { player.place(best.x, best.z, best.y); player.face(Math.atan2(-(best.x - B.x), -(best.z - B.z)), 0); }
      else if (B.home) { const x = B.home.x + 30, z = B.home.z - 9; player.place(x, z); }
      return true;
    },
    blocksAt(x, z) {
      const dx = x - B.x, dz = z - B.z, fx = -Math.sin(B.h), fz = -Math.cos(B.h);
      const a = dx * fx + dz * fz, b = dx * Math.cos(B.h) - dz * Math.sin(B.h);
      return (a / (HALF_L + 2)) ** 2 + (b / (HALF_B + 2)) ** 2 < 1;
    },
    // one frame. When you're aboard it also places the camera (out) and you (player.state)
    update(dt, time, keys, player, out, waterY, s, motionFull, canBoardNow) {
      if (!B.ready) return;
      const node = B.node;
      node.visible = B.active || !B.moored || s.pCabin > 0.5;
      if (B.active) {
        const f = (keys.has('KeyW') || keys.has('ArrowUp') ? 1 : 0) - (keys.has('KeyS') || keys.has('ArrowDown') ? 1 : 0);
        const r = (keys.has('KeyD') || keys.has('ArrowRight') ? 1 : 0) - (keys.has('KeyA') || keys.has('ArrowLeft') ? 1 : 0);
        const boost = keys.has('ShiftLeft') || keys.has('ShiftRight');
        const target = f > 0 ? MAX * (boost ? BOOST : 1) : f < 0 ? -BACK : 0;
        B.v += (target - B.v) * (1 - Math.exp(-dt * (f !== 0 ? 0.55 : 0.35)));
        B.steer += (r - B.steer) * (1 - Math.exp(-dt * 4));
        // the rudder bites harder with speed; a gentle turn even when nearly still (to swing out from the dock)
        const grip = Math.max(0.45, Math.min(1, Math.abs(B.v) / 7)) * (B.v < -0.5 ? -1 : 1);
        const nh = B.h - B.steer * 0.85 * grip * dt;
        const nx = B.x - Math.sin(nh) * B.v * dt, nz = B.z - Math.cos(nh) * B.v * dt;
        if (clearWater(nx, nz, nh, waterY)) { B.x = nx; B.z = nz; B.h = nh; }
        else if (clearWater(B.x, B.z, nh, waterY)) { B.h = nh; B.v *= 0.6; }
        else {
          // bumped: bounce back a little
          if (time - B.bumpT > 0.5 && Math.abs(B.v) > 3 && window.MEOW_SOUND && window.MEOW_SOUND.step) window.MEOW_SOUND.step('wood', 1.2);
          B.bumpT = time; B.v *= -0.3;
        }
      } else B.v *= Math.exp(-dt * 2);
      // float, rock with the waves, heel into turns, lift the bow a little at speed
      const sp = Math.abs(B.v) / MAX;
      const still = 1 - (s.ice || 0);   // frozen in: no rocking
      const bob = (Math.sin(time * 1.25) * 0.22 + Math.sin(time * 2.1 + 1.3) * 0.1) * still;
      const roll = still * Math.sin(time * 0.9) * 0.035 + Math.sin(time * 1.7 + 0.4) * 0.015 + (B.active ? B.steer * sp * 0.12 + sp * 0.06 : 0);
      const pitch = still * Math.sin(time * 1.1 + 0.8) * 0.02 + sp * 0.035;
      node.position.set(B.x, waterY + bob, B.z);
      node.rotation.set(roll, B.h - H0 + Math.PI, pitch, 'YXZ');
      const P = B.parts;
      if (P.tiller) P.tiller.rotation.y = B.steer * 0.55;
      if (P.boom) { B.sails += ((B.active ? 1 : 0) - B.sails) * (1 - Math.exp(-dt * 2)); P.boom.rotation.y = B.sails * (0.42 - B.steer * 0.3); }

      if (!B.active) {
        showPrompt(canBoardNow ? '<b>E</b> &nbsp;go aboard the sailboat' : '');
        return;
      }
      // you, sitting in the cockpit
      const ps = player.state;
      ps.x = B.x; ps.z = B.z; ps.feet = waterY + 2.2; ps.eyeY = ps.feet + 7.5; ps.vx = -Math.sin(B.h) * B.v; ps.vz = -Math.cos(B.h) * B.v; ps.air = false;
      // the camera: behind the boat, the mouse orbits it, it drifts back behind you while you sail
      const lk = motionFull ? 1 - Math.pow(1 - 0.12, dt * 60) : 1;
      if (Math.abs(B.v) > 2) ps.yawTo += angDiff(B.h, ps.yawTo) * (1 - Math.exp(-dt * 0.9));
      ps.yaw += angDiff(ps.yawTo, ps.yaw) * lk; ps.pitch += (ps.pitchTo - ps.pitch) * lk;
      const a = Math.min(1.1, Math.max(0.06, 0.3 - ps.pitch * 0.9)), dist = 36;
      tgt.set(B.x, waterY + 7, B.z);
      cam.set(tgt.x + Math.sin(ps.yaw) * Math.cos(a) * dist, tgt.y + Math.sin(a) * dist, tgt.z + Math.cos(ps.yaw) * Math.cos(a) * dist);
      cam.y = Math.max(cam.y, heightAt(cam.x, cam.z) + 3, waterY + 2);
      m4.lookAt(cam, tgt, UP);
      out.pos.copy(cam); out.q.setFromRotationMatrix(m4); out.roll = 0;
    }
  };
  return api;
}
