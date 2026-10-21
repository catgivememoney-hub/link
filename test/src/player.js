/* MEOW — you, walking in the world.
   Modes:
     home   the camera sits at the scene's view (main.js moves it gently)
     enter  a smooth glide from the home view down between the trees
     walk   first person: W A S D, Shift runs, Space jumps, mouse looks around
     leave  a smooth glide back to the home view
   Your position is absolute (world x, z and the height of your feet), so changing
   the scene while you walk never moves you. */
import * as THREE from 'three';
import { heightAt } from './terrain.js';
import { STEP_UP } from './physics.js';

export const EYE = 7.5;            // eye height above your feet
const SPEED = 24, RUN = 2.4;       // walking speed (units / s) and how much faster running is
const GRAVITY = 44, JUMP = 15.5;
const PITCH_MIN = -1.1, PITCH_MAX = 0.9;
const SUB = 0.35;                  // longest step per physics sub-step (nothing thin is skipped)
const smoother = (x) => { x = Math.min(1, Math.max(0, x)); return x * x * x * (x * (x * 6 - 15) + 10); };

export function createPlayer({ physics, trees }) {
  const p = {
    mode: 'home',
    x: 0, z: 0, feet: 0, vy: 0, air: false, vx: 0, vz: 0,
    yaw: 0, pitch: 0, yawTo: 0, pitchTo: 0,
    eyeY: 0, roll: 0,
    bob: { phase: 0, amp: 0, run: 0, lastStep: 0 },
    tw: null                                       // the current glide (enter / leave)
  };
  const tmpE = new THREE.Euler(0, 0, 0, 'YXZ');
  const qOf = (yaw, pitch, roll = 0) => { tmpE.set(pitch, yaw, roll, 'YXZ'); return new THREE.Quaternion().setFromEuler(tmpE); };
  const yawOfDir = (dx, dz) => Math.atan2(-dx, -dz);    // yaw that looks along (dx, dz)

  const snd = (name, ...a) => { const S = window.MEOW_SOUND; if (S && S[name]) S[name](...a); };
  const surface = (scenes, water) => {
    const gh = heightAt(p.x, p.z);
    const f = physics.floor(p.x, p.z, p.feet);
    if (f.built) return 'wood';
    const wy = water.position.y, c = scenes.cur;
    if (gh < wy + 0.6) return (c.ice || 0) > 0.5 ? 'ice' : 'water';
    if (p.feet > gh + 0.8) return 'stone';                                     // standing up on a rock or log
    if (scenes.name === 'snow' || gh > c.snowLine - 6) return 'snow';
    if ((c.sand || 0) > 0.3 && gh < wy + 3.5) return 'sand';                   // the beach
    return gh < wy + 2.2 ? 'sand' : 'grass';                                   // wet ground at the water's edge
  };

  /* ---------- the glide into the forest ---------- */
  const freeAt = (x, z, pad) => !trees.blocks(x, z, pad + 0.001) && !physics.blocked(x, z, physics.groundAt(x, z), pad);
  const enter = (fromPos, fromQ, motionFull, waterY) => {
    const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(fromQ); fwd.y = 0; fwd.normalize();
    const baseAng = Math.atan2(fwd.z, fwd.x), sx = fromPos.x, sz = fromPos.z;
    const cands = [];
    for (let a = -0.7; a <= 0.701; a += 0.05) for (let d = 70; d <= 380; d += 10) {
      const ang = baseAng + a, x = sx + Math.cos(ang) * d, z = sz + Math.sin(ang) * d, h = heightAt(x, z);
      if (h < waterY + 1.5 || h > 64) continue;
      const score = (trees.solid ? Math.min(trees.countNear(x, z, 40), 22) * 2 : 30) - Math.abs(a) * 34 - d * 0.045;
      cands.push({ x, z, d, score });
    }
    cands.sort((a, b) => b.score - a.score);
    let pick = null;
    for (const c of cands.slice(0, 120)) {
      if (!freeAt(c.x, c.z, 4)) continue;
      // the low last stretch must be clear, and there must be room to walk on
      const ux = (sx - c.x) / c.d, uz = (sz - c.z) / c.d;
      let ok = true;
      for (let t = 2; t < 70 && ok; t += 2.5) ok = freeAt(c.x + ux * t, c.z + uz * t, 1.5);
      for (let t = 3; t < 30 && ok; t += 3) ok = freeAt(c.x - ux * t, c.z - uz * t, 1);
      if (ok) { pick = c; break; }
    }
    // nothing perfect: any open spot will do (never land in the lake if land is near)
    if (!pick) pick = cands.slice(0, 200).find((c) => freeAt(c.x, c.z, 2)) || null;
    if (!pick) pick = { x: sx + fwd.x * 60, z: sz + fwd.z * 60, d: 60 };
    const feet = physics.floor(pick.x, pick.z, physics.groundAt(pick.x, pick.z)).y;
    const startYaw = yawOfDir(fwd.x, fwd.z), endYaw = yawOfDir(pick.x - sx, pick.z - sz);
    // turn the short way round
    let dy = endYaw - startYaw; dy = Math.atan2(Math.sin(dy), Math.cos(dy));
    p.tw = {
      kind: 'enter', t0: performance.now(), dur: motionFull ? 2300 + pick.d * 5.2 : 700,
      from: fromPos.clone(), fromQ: fromQ.clone(), to: new THREE.Vector3(pick.x, feet + EYE, pick.z),
      yaw0: startYaw, yaw1: startYaw + dy, lift: motionFull ? 9 + pick.d * 0.02 : 0
    };
    p.mode = 'enter'; p.vx = p.vz = 0;
  };

  const leave = (fromPos, fromQ, motionFull) => {
    p.tw = { kind: 'leave', t0: performance.now(), dur: motionFull ? 1800 : 1, from: fromPos.clone(), fromQ: fromQ.clone() };
    p.mode = 'leave'; p.vx = p.vz = 0; p.vy = 0; p.air = false;
  };

  /* ---------- walking ---------- */
  const tryMove = (nx, nz) => {
    if (physics.blocked(nx, nz, p.feet)) return false;
    p.x = nx; p.z = nz;
    // follow the floor: up steps and stairs, down slopes; a real drop makes you fall
    const f = physics.floor(p.x, p.z, p.feet).y;
    if (!p.air) {
      if (f >= p.feet - STEP_UP) p.feet = f;
      else { p.air = true; p.vy = 0; }
    }
    return true;
  };
  const walk = (dt, keys, motionFull, scenes, water) => {
    const fwdX = -Math.sin(p.yaw), fwdZ = -Math.cos(p.yaw);
    const f = (keys.has('KeyW') || keys.has('ArrowUp') ? 1 : 0) - (keys.has('KeyS') || keys.has('ArrowDown') ? 1 : 0);
    const r = (keys.has('KeyD') || keys.has('ArrowRight') ? 1 : 0) - (keys.has('KeyA') || keys.has('ArrowLeft') ? 1 : 0);
    const running = keys.has('ShiftLeft') || keys.has('ShiftRight');
    let wx = fwdX * f - fwdZ * r, wz = fwdZ * f + fwdX * r;
    const wl = Math.hypot(wx, wz), sp = SPEED * (running ? RUN : 1);
    if (wl > 0) { wx = (wx / wl) * sp; wz = (wz / wl) * sp; }
    const acc = 1 - Math.pow(1 - (wl > 0 ? 0.08 : 0.12), dt * 60);
    p.vx += (wx - p.vx) * acc; p.vz += (wz - p.vz) * acc;
    // move in small steps; slide along walls instead of stopping dead
    const dist = Math.hypot(p.vx, p.vz) * dt, n = Math.max(1, Math.ceil(dist / SUB));
    for (let i = 0; i < n; i++) {
      const sx = p.vx * dt / n, sz = p.vz * dt / n;
      if (tryMove(p.x + sx, p.z + sz)) continue;
      // a round obstacle (rock, trunk, log): slide around it, with a little bump the first time you touch it
      const t = physics.touching(p.x + sx, p.z + sz, p.feet);
      if (t) {
        const vn = p.vx * t.nx + p.vz * t.nz;
        if (vn < 0) { p.vx -= vn * t.nx; p.vz -= vn * t.nz; }
        const now = performance.now();
        if (now - (p.touchAt || 0) > 450 && -vn > SPEED * 0.35) { p.touchAt = now; p.bob.amp = Math.min(1.4, p.bob.amp + 0.35); p.pitchTo += 0.015; snd('step', t.key === 'tree' ? 'wood' : 'stone', 0.6); }
        const tx = p.vx * dt / n, tz = p.vz * dt / n;
        if ((tx || tz) && tryMove(p.x + tx, p.z + tz)) continue;
        if (tryMove(p.x + t.nx * 0.05 + tx, p.z + t.nz * 0.05 + tz)) continue;
      }
      if (tryMove(p.x + sx, p.z)) { p.vz *= 0.5; continue; }
      if (tryMove(p.x, p.z + sz)) { p.vx *= 0.5; continue; }
      p.vx *= 0.3; p.vz *= 0.3; break;
    }
    // up and down: jumping and falling
    if (p.air) {
      p.vy -= GRAVITY * dt;
      p.feet += p.vy * dt;
      const fl = physics.floor(p.x, p.z, Math.max(p.feet, p.feet - p.vy * dt)).y;
      if (p.feet <= fl) {
        p.feet = fl; p.air = false;
        if (p.vy < -8) { p.bob.amp = Math.min(1.4, p.bob.amp + 0.5); const s = surface(scenes, water); snd('step', s, 1.5); setTimeout(() => snd('step', s, 1.1), 70); }
        p.vy = 0;
      }
    } else {
      // standing: stay glued to the floor (it can move under you, e.g. the boat dock slope)
      const fl = physics.floor(p.x, p.z, p.feet).y;
      if (fl > p.feet - STEP_UP) p.feet = fl; else { p.air = true; p.vy = 0; }
    }
    // the eyes glide up and down steps instead of jolting (but never lag behind a jump or a fall)
    const eyeT = p.feet + EYE;
    if (p.air) p.eyeY = eyeT;
    else { p.eyeY += (eyeT - p.eyeY) * (1 - Math.exp(-dt * 16)); p.eyeY = Math.min(eyeT + 1.5, Math.max(eyeT - 1.5, p.eyeY)); }
    // look
    const lk = motionFull ? 1 - Math.pow(1 - 0.12, dt * 60) : 1;
    p.yaw += (p.yawTo - p.yaw) * lk; p.pitch += (p.pitchTo - p.pitch) * lk;
    // walking motion and footsteps
    const b = p.bob, speed = Math.hypot(p.vx, p.vz);
    b.run += ((running ? 1 : 0) - b.run) * (1 - Math.pow(0.9, dt * 60));
    b.amp += (Math.min(1.2, speed / SPEED) - b.amp) * (1 - Math.pow(0.88, dt * 60));
    b.phase += Math.PI * 2 * (0.95 + 0.5 * b.run) * Math.min(1, speed / SPEED + 0.15) * dt * (speed > 0.3 ? 1 : 0.4);
    const stepNo = Math.floor(b.phase / Math.PI);
    if (stepNo !== b.lastStep) {
      b.lastStep = stepNo;
      if (speed > SPEED * 0.25 && !p.air) { snd('step', surface(scenes, water), Math.min(1.5, speed / SPEED)); return true; }
    }
    return false;
  };

  return {
    state: p,
    get mode() { return p.mode; },
    get walking() { return p.mode === 'walk'; },
    get out() { return p.mode !== 'home'; },          // away from the home view (enter, walk or leave)
    get gliding() { return p.mode === 'enter' || p.mode === 'leave'; },
    enter, leave,
    look(dx, dy, k) { p.yawTo -= dx * k; p.pitchTo = Math.max(PITCH_MIN, Math.min(PITCH_MAX, p.pitchTo - dy * k * 0.8)); },
    turn(a) { p.yawTo += a; },
    jump() { if (p.mode !== 'walk' || p.air) return false; p.vy = JUMP; p.air = true; return true; },
    // place yourself somewhere (testing, and after the glide)
    place(x, z, feet) {
      p.x = x; p.z = z; p.feet = feet !== undefined ? feet : physics.floor(x, z, physics.groundAt(x, z)).y;
      p.feet = physics.floor(x, z, p.feet).y; p.eyeY = p.feet + EYE; p.vx = p.vz = p.vy = 0; p.air = false;
      if (p.mode !== 'walk') { p.mode = 'walk'; p.tw = null; }
    },
    face(yaw, pitch = 0) { p.yaw = p.yawTo = yaw; p.pitch = p.pitchTo = pitch; },
    // advance one frame; home = the home view's camera pose { pos, q }; returns the camera pose
    // and whether a footstep happened (for snow prints)
    update(dt, now, keys, home, motionFull, scenes, water, out) {
      let stepped = false;
      if (p.mode === 'walk') stepped = walk(dt, keys, motionFull, scenes, water);
      if (p.mode === 'home') { out.pos.copy(home.pos); out.q.copy(home.q); out.roll = 0; return stepped; }
      if (p.mode === 'enter') {
        const t = p.tw, k = Math.min(1, (now - t.t0) / t.dur), e = smoother(k);
        out.pos.lerpVectors(t.from, t.to, e);
        // a gentle rise, then sink down between the trees to eye level
        const down = smoother((k - 0.3) / 0.7);
        out.pos.y = t.from.y + (t.to.y - t.from.y) * down + t.lift * Math.pow(Math.sin(Math.PI * Math.min(1, k * 1.15)), 1.4);
        out.pos.y = Math.max(out.pos.y, Math.max(heightAt(out.pos.x, out.pos.z), water.position.y) + 4);
        const turn = smoother(k / 0.55);
        const yaw = t.yaw0 + (t.yaw1 - t.yaw0) * turn, pitch = -0.07 * Math.sin(Math.PI * k) * (1 - k * 0.5);
        const fly = qOf(yaw, pitch, (t.yaw1 - t.yaw0) * 0.22 * Math.sin(Math.PI * Math.min(1, k * 1.3)));
        // blend out of the home camera's own angle during the first part
        out.q.copy(t.fromQ).slerp(fly, smoother(k / 0.35));
        out.roll = 0;
        if (k >= 1) {
          p.mode = 'walk'; p.tw = null;
          p.x = t.to.x; p.z = t.to.z; p.feet = t.to.y - EYE; p.eyeY = t.to.y; p.air = false;
          p.yaw = p.yawTo = t.yaw1; p.pitch = p.pitchTo = 0;
          this.justLanded = true;
        }
        return stepped;
      }
      if (p.mode === 'leave') {
        const t = p.tw, k = Math.min(1, (now - t.t0) / t.dur), e = smoother(k);
        out.pos.lerpVectors(t.from, home.pos, e);
        out.pos.y += Math.sin(Math.PI * e) * 6;
        out.q.copy(t.fromQ).slerp(home.q, e);
        out.roll = 0;
        if (k >= 1) { p.mode = 'home'; p.tw = null; }
        return stepped;
      }
      // walking: eyes, a little sway in the stride
      out.pos.set(p.x, p.eyeY, p.z);
      let roll = 0;
      const b = p.bob;
      if (b.amp > 0.001 && motionFull) {
        const s1 = Math.sin(b.phase), s2 = Math.sin(b.phase * 2), a = b.amp * (1 + b.run * 0.8);
        out.pos.y += -Math.abs(s1) * 0.32 * a + 0.16 * a;
        const side = s1 * 0.16 * a;
        out.pos.x += Math.cos(p.yaw) * side; out.pos.z -= Math.sin(p.yaw) * side;
        roll = s1 * 0.006 * a + s2 * 0.0015 * a;
      }
      out.q.copy(qOf(p.yaw, p.pitch, roll));
      out.roll = roll;
      return stepped;
    }
  };
}
