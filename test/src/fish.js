/* MEOW (test copy) — fish in the lake.
   · Fish swim about just under the surface (backs and fins breaking the water), turning,
     darting now and then, tails swishing.
   · Some come up for a gulp of air; others leap clean out of the water in an arc and
     splash back in (more on rainy days).
   · Fishing: from the dock or the shore (not from the boat). Aim the dot at the water and
     press R to cast. When the float dips, click (or press R) quickly. R while waiting reels in. */
import * as THREE from 'three';
import { Parts, M } from './kit.js';

export function createFish({ scene, camera, heightAt, water }) {
  const t$ = (k, f, v) => (window.MEOW_I18N ? window.MEOW_I18N.t(k, v) : f);
  const snd = (name, ...a) => { const S = window.MEOW_SOUND; if (S && S[name]) S[name](...a); };
  const T = { value: 0 };

  /* ---------- a fish (body, fins, eyes); head toward +x, about 2 long ---------- */
  let fishGeo = (() => {
    const P = new Parts();
    const body = new THREE.SphereGeometry(1, 18, 12);
    P.add(body, { m: M(0, 0, 0, 0, 0, 0, 1.0, 0.36, 0.28), color: (v) => { const top = v.y > 0.05 ? 0.55 : 0.85; const spot = Math.sin(v.x * 30) * Math.sin(v.z * 40) > 0.6 && v.y > 0 ? 0.8 : 1; return [top * 0.78 * spot, top * 0.84 * spot, top * 0.8 * spot]; } });
    P.add(new THREE.ConeGeometry(0.3, 0.45, 4), { m: M(-1.05, 0, 0, 0, 0, Math.PI / 2, 1, 1, 0.25), color: () => [0.42, 0.46, 0.44] });
    P.add(new THREE.ConeGeometry(0.16, 0.4, 4), { m: M(0.05, 0.38, 0, 0, 0, -0.4, 1, 1, 0.2), color: () => [0.42, 0.46, 0.44] });
    [-1, 1].forEach((s) => {
      P.add(new THREE.SphereGeometry(0.07, 8, 6), { m: M(0.72, 0.08, s * 0.17), color: () => [0.95, 0.95, 0.92] });
      P.add(new THREE.SphereGeometry(0.04, 8, 6), { m: M(0.76, 0.085, s * 0.21), color: () => [0.05, 0.05, 0.05] });
    });
    P.add(new THREE.TorusGeometry(0.07, 0.025, 6, 12), { m: M(0.99, -0.02, 0, 0, Math.PI / 2, 0), color: () => [0.35, 0.22, 0.24] });
    return P.geometry();
  })();
  let baseMat = new THREE.MeshLambertMaterial({ vertexColors: true });

  // each fish gets its own copy of the material with a swimming tail: the back half of the body
  // bends side to side, more toward the tail; uWig = how hard it swims
  const wiggly = (src) => {
    const m = src.clone();
    m.userData.u = { uTime: T, uWig: { value: 0.1 }, uFreq: { value: 9 }, uPhase: { value: Math.random() * 6.28 } };
    m.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, m.userData.u);
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nuniform float uTime, uWig, uFreq, uPhase;')
        .replace('#include <begin_vertex>', `#include <begin_vertex>
          { float bw = smoothstep(0.45, -1.1, position.x);
            transformed.z += sin(uTime * uFreq - position.x * 2.8 + uPhase) * uWig * bw;
            transformed.z += sin(uTime * uFreq * 0.5 + uPhase) * uWig * 0.25 * (1.0 - bw); }`);
    };
    m.customProgramCacheKey = () => 'fishwig';
    return m;
  };
  const fishes = [];   // every fish mesh (so a detailed model can be swapped in)
  const makeFish = (scale) => { const m = new THREE.Mesh(fishGeo, wiggly(baseMat)); m.scale.setScalar(scale); m.visible = false; scene.add(m); fishes.push(m); return m; };
  const wig = (m, amount, freq) => { const u = m.material.userData.u; u.uWig.value = amount; if (freq) u.uFreq.value = freq; };

  /* ---------- rings and splash drops on the water ---------- */
  const ringMat = new THREE.MeshBasicMaterial({ color: 0xe8eef0, transparent: true, opacity: 0, depthWrite: false });
  const rings = Array.from({ length: 14 }, () => { const r = new THREE.Mesh(new THREE.RingGeometry(0.85, 1, 32).rotateX(-Math.PI / 2), ringMat.clone()); r.visible = false; scene.add(r); return { r, t0: -1e9, s: 1 }; });
  let ringI = 0;
  const ring = (x, z, waterY, now, s = 1) => { const q = rings[ringI++ % rings.length]; q.t0 = now; q.s = s; q.r.position.set(x, waterY + 0.05, z); q.r.visible = true; };
  const DROPS = 90;
  const dropGeo = new THREE.BufferGeometry(); dropGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(DROPS * 3), 3));
  const drops = new THREE.Points(dropGeo, new THREE.PointsMaterial({ color: 0xf2f7f8, size: 0.35, transparent: true, opacity: 0.85, depthWrite: false }));
  drops.frustumCulled = false; scene.add(drops);
  const dv = Array.from({ length: DROPS }, () => ({ x: 0, y: -1e5, z: 0, vx: 0, vy: 0, vz: 0, life: 0 }));
  let dropI = 0;
  const splash = (x, z, waterY, n = 14, power = 1) => {
    for (let i = 0; i < n; i++) {
      const d = dv[dropI++ % DROPS], a = Math.random() * 6.28, s = (2 + Math.random() * 4) * power;
      d.x = x; d.z = z; d.y = waterY + 0.1; d.vx = Math.cos(a) * s * 0.5; d.vz = Math.sin(a) * s * 0.5; d.vy = (5 + Math.random() * 6) * power; d.life = 1;
    }
  };
  const stepFx = (dt, now, waterY) => {
    rings.forEach((q) => {
      const t = (now - q.t0) / 1000;
      if (t > 2.6) { q.r.visible = false; return; }
      q.r.scale.setScalar((0.6 + t * 2.4) * q.s); q.r.material.opacity = Math.max(0, 0.55 - t * 0.22);
    });
    const a = dropGeo.attributes.position;
    dv.forEach((d, i) => {
      if (d.life > 0) { d.vy -= 30 * dt; d.x += d.vx * dt; d.y += d.vy * dt; d.z += d.vz * dt; if (d.y < waterY) { d.life = 0; d.y = -1e5; } }
      a.setXYZ(i, d.x, d.y, d.z);
    });
    a.needsUpdate = true;
  };

  /* ---------- fish swimming just under the surface ---------- */
  const SW = 9, SS = 1.6;
  const swimmers = Array.from({ length: SW }, (_, i) => ({ m: makeFish(SS * (0.8 + Math.random() * 0.5)), on: false, x: 0, z: 0, h: 0, v: 3, turn: 0, depth: 0, dart: 0, next: 0, rippleAt: 0, id: i }));
  const deep = (x, z, waterY, d = 2.4) => heightAt(x, z) < waterY - d;
  const spawn = (f, waterY) => {
    for (let k = 0; k < 20; k++) {
      const a = Math.random() * 6.28, d = 20 + Math.random() * 70;
      const x = camera.position.x + Math.cos(a) * d, z = camera.position.z + Math.sin(a) * d;
      if (deep(x, z, waterY, 3)) { f.x = x; f.z = z; f.h = Math.random() * 6.28; f.on = true; f.depth = 0.35 + Math.random() * 0.9; return true; }
    }
    return false;
  };
  const swim = (dt, now, time, waterY, amount, indoor) => {
    for (const f of swimmers) {
      const want = amount > 0.05 && !indoor && f.id < Math.round(SW * Math.min(1, 0.45 + amount));
      if (!want) { f.m.visible = false; f.on = false; continue; }
      if (!f.on || Math.hypot(f.x - camera.position.x, f.z - camera.position.z) > 130) { if (!spawn(f, waterY)) { f.m.visible = false; continue; } }
      // wander: a slowly changing turn; steer away from shallow water ahead; sometimes dart
      if (now > f.next) { f.turn = (Math.random() - 0.5) * 1.4; f.next = now + 1200 + Math.random() * 2500; if (Math.random() < 0.18) f.dart = 1; }
      const ax = f.x + Math.cos(f.h) * 9, az = f.z + Math.sin(f.h) * 9;
      if (!deep(ax, az, waterY)) f.turn = 2.2 * (Math.sin(f.id * 7.1 + time) > 0 ? 1 : -1);
      f.dart *= Math.exp(-dt * 1.6);
      const sp = 3.2 + f.dart * 14;
      f.h += f.turn * dt * (0.6 + f.dart);
      const nx = f.x + Math.cos(f.h) * sp * dt, nz = f.z + Math.sin(f.h) * sp * dt;
      if (deep(nx, nz, waterY, 1.6)) { f.x = nx; f.z = nz; } else f.h += 2.5 * dt;
      const y = waterY - f.depth * f.m.scale.y * 0.9 + Math.sin(time * 1.3 + f.id) * 0.08;
      f.m.visible = true;
      f.m.position.set(f.x, y, f.z);
      f.m.rotation.set(0, -f.h, Math.sin(time * 0.7 + f.id) * 0.05, 'YXZ');
      wig(f.m, 0.12 + f.dart * 0.28, 8 + f.dart * 14);
      // a fin near the top makes little rings now and then
      if (f.depth < 0.6 && now > f.rippleAt) { ring(f.x - Math.cos(f.h) * 1.2, f.z - Math.sin(f.h) * 1.2, waterY, now, 0.45); f.rippleAt = now + 900 + Math.random() * 1400; }
    }
  };

  /* ---------- fish coming up for air, and fish leaping ---------- */
  const N = 5, S = 1.6;
  const pop = Array.from({ length: N }, (_, i) => ({ m: makeFish(S), next: performance.now() + 1500 + i * 1700, t0: 0, x: 0, z: 0, yaw: 0, on: false, kind: 'gulp', splashed: 0 }));
  const ambient = (amount, now, waterY, indoor) => {
    pop.forEach((f) => {
      if (!f.on) {
        f.m.visible = false;
        if (amount < 0.05 || indoor || now < f.next) return;
        for (let k = 0; k < 8; k++) {
          const a = Math.random() * Math.PI * 2, d = 16 + Math.random() * 60;
          const x = camera.position.x + Math.cos(a) * d, z = camera.position.z + Math.sin(a) * d;
          if (deep(x, z, waterY, 2.5)) { f.x = x; f.z = z; f.yaw = Math.random() * 6.28; f.on = true; f.t0 = now; f.splashed = 0; f.kind = Math.random() < 0.55 ? 'jump' : 'gulp'; break; }
        }
        f.next = now + (2500 + Math.random() * 6000) / Math.max(0.2, amount);
        if (f.on && Math.hypot(f.x - camera.position.x, f.z - camera.position.z) < 45) setTimeout(() => snd('plop', 0.6), 250);
      }
      if (!f.on) return;
      const t = (now - f.t0) / 1000;
      f.m.visible = true;
      if (f.kind === 'gulp') {
        // up (nose first), a gulp, then a little roll back down
        const up = t < 0.35 ? t / 0.35 : t < 0.9 ? 1 : Math.max(0, 1 - (t - 0.9) / 0.45);
        const e = up * up * (3 - 2 * up);
        f.m.position.set(f.x, waterY - 1.2 * S + e * 1.45 * S, f.z);
        f.m.rotation.set(0, f.yaw, 1.05 - (t > 0.9 ? (t - 0.9) * 1.6 : 0), 'YXZ');
        const gulp = t > 0.4 && t < 0.85 ? 1 + 0.12 * Math.sin((t - 0.4) * 40) : 1;
        f.m.scale.set(S, S * gulp, S);
        wig(f.m, 0.15, 10);
        if (!f.splashed) { ring(f.x, f.z, waterY, now); f.splashed = 1; }
        if (t > 1.4) f.on = false;
      } else {
        // a leap: out of the water in an arc, nose following the flight, a splash at each end
        const D = 1.05, len = 4.6 * S, hgt = 2.4 * S, k = Math.min(1, t / D);
        const dx = Math.cos(-f.yaw), dz = Math.sin(-f.yaw);
        const px = f.x + dx * len * (k - 0.5), pz = f.z + dz * len * (k - 0.5);
        const py = waterY - 0.6 * S + 4 * hgt * k * (1 - k);
        const vy = 4 * hgt * (1 - 2 * k), vh = len;
        f.m.position.set(px, py, pz);
        f.m.rotation.set(0, f.yaw, Math.atan2(vy, vh), 'YXZ');
        f.m.scale.setScalar(S);
        wig(f.m, 0.32, 18);
        if (k > 0.08 && f.splashed === 0) { ring(px, pz, waterY, now, 0.8); splash(px, pz, waterY, 12, 0.8); f.splashed = 1; }
        if (k > 0.9 && f.splashed === 1) { ring(px, pz, waterY, now, 1.1); splash(px, pz, waterY, 18, 1); f.splashed = 2; if (Math.hypot(px - camera.position.x, pz - camera.position.z) < 50) snd('splash', false); }
        if (k >= 1) f.on = false;
      }
    });
  };

  /* ---------- fishing ---------- */
  scene.add(camera);   // so the rod can be carried in view
  const rod = new THREE.Group();
  {
    const wood = new THREE.MeshLambertMaterial({ color: 0x6b4a2e }), dark = new THREE.MeshLambertMaterial({ color: 0x222222 });
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.035, 2.4, 6).translate(0, 1.2, 0), wood);
    const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.35, 8).translate(0, 0.18, 0), dark);
    const reel = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.06, 12), dark); reel.rotation.z = Math.PI / 2; reel.position.set(0.06, 0.42, 0);
    rod.add(pole, grip, reel);
    rod.position.set(0.55, -0.85, -0.9); rod.rotation.set(-0.95, 0, -0.25);
    rod.visible = false; camera.add(rod);
  }
  const tipLocal = new THREE.Vector3(0, 2.4, 0);
  const float = new THREE.Group();
  {
    const red = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshLambertMaterial({ color: 0xd8442e, emissive: 0x401008 }));
    const white = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), new THREE.MeshLambertMaterial({ color: 0xf2f0ea }));
    const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.3, 5).translate(0, 0.22, 0), new THREE.MeshLambertMaterial({ color: 0xd8442e }));
    float.add(red, white, stick); float.scale.setScalar(2.2); float.visible = false; scene.add(float);
  }
  const LINE_N = 16;
  const lineGeo = new THREE.BufferGeometry(); lineGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(LINE_N * 3), 3));
  const line = new THREE.Line(lineGeo, new THREE.LineBasicMaterial({ color: 0xe8e8e0, transparent: true, opacity: 0.7 })); line.frustumCulled = false; line.visible = false; scene.add(line);
  const catchFish = makeFish(1);
  // a fish nosing around the float before it bites
  const nibbler = makeFish(1.3);

  const hint = document.createElement('div'); hint.className = 'fish-hint'; document.body.appendChild(hint);
  const setHint = (txt, hot) => { hint.textContent = txt || ''; hint.classList.toggle('show', !!txt); hint.classList.toggle('hot', !!hot); };

  const st = { mode: 'idle', t0: 0, from: new THREE.Vector3(), to: new THREE.Vector3(), biteAt: 0, aim: null, catchFrom: new THREE.Vector3(), lastDip: 0 };
  let caught = 0; try { caught = +(localStorage.getItem('meow.fish') || 0); } catch { /* ignore */ }
  const tip = new THREE.Vector3(), tmp = new THREE.Vector3();
  const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const waterHit = (ray, waterY) => {
    plane.constant = -waterY;
    const p = ray.ray.intersectPlane(plane, new THREE.Vector3());
    if (!p) return null;
    const d = p.distanceTo(camera.position);
    if (d > 70 || d < 6) return null;
    if (heightAt(p.x, p.z) > waterY - 0.6) return null;   // that's land (or too shallow)
    return p;
  };
  const toast = (msg) => { const el = document.getElementById('toast'); if (!el) return; el.textContent = msg; el.classList.add('show'); clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove('show'), 3200); };
  const end = () => { st.mode = 'idle'; rod.visible = false; float.visible = false; line.visible = false; nibbler.visible = false; };
  let lastNow = performance.now();

  return {
    // swap in a detailed fish (assets.js); geo is in the same frame: head toward +x, about 2 long
    setModel(geo, mat) {
      fishGeo = geo; baseMat = mat;
      fishes.forEach((m) => { const u = m.material.userData.u; m.geometry = geo; m.material = wiggly(mat); Object.assign(m.material.userData.u, { uWig: u.uWig, uFreq: u.uFreq, uPhase: u.uPhase }); });
    },
    get busy() { return st.mode !== 'idle'; },
    reset() { end(); catchFish.visible = false; setHint(''); },
    // R: cast, reel in, or strike when a fish bites
    key(now) {
      if (st.mode === 'idle') {
        if (!st.aim) return false;
        st.mode = 'cast'; st.t0 = now; st.to.copy(st.aim); rod.visible = true; line.visible = true; float.visible = true;
        snd('cast'); return true;
      }
      if (st.mode === 'bite') return this.strike(now);
      if (st.mode === 'wait' || st.mode === 'cast') { snd('reel'); end(); return true; }
      return false;
    },
    click(now) { if (st.mode === 'bite') return this.strike(now); return false; },
    strike(now) {
      st.mode = 'catch'; st.t0 = now; st.catchFrom.copy(float.position);
      float.visible = false; nibbler.visible = false; snd('splash', true);
      splash(st.catchFrom.x, st.catchFrom.z, st.catchFrom.y, 20, 1.1); ring(st.catchFrom.x, st.catchFrom.z, st.catchFrom.y, now, 1.2);
      const names = t$('fishNames', 'Trout|Perch|Carp|Pike|Bass|Catfish').split('|');
      const name = names[Math.floor(Math.random() * names.length)], cm = 18 + Math.floor(Math.random() * 40);
      caught++; try { localStorage.setItem('meow.fish', String(caught)); } catch { /* ignore */ }
      catchFish.scale.setScalar(0.6 + (cm - 18) / 60);
      setTimeout(() => toast('🐟 ' + t$('fishCaught', 'You caught a {name}! {cm} cm · {n} so far', { name, cm, n: caught })), 700);
      return true;
    },
    // canFish: standing on the dock or by the shore (and not on the boat)
    update(now, time, { active, ray, waterY, amount, indoor, canFish = true, onBoat = false }) {
      const dt = Math.min(0.1, Math.max(0, (now - lastNow) / 1000)); lastNow = now;
      T.value = time;
      swim(dt, now, time, waterY, amount, indoor);
      ambient(amount, now, waterY, indoor);
      stepFx(dt, now, waterY);
      // you can't fish from here (on the boat, or away from the water): reel in
      if (!canFish && (st.mode === 'cast' || st.mode === 'wait' || st.mode === 'bite')) end();
      const hit = active && !indoor && st.mode === 'idle' && ray ? waterHit(ray, waterY) : null;
      st.aim = canFish ? hit : null;
      camera.updateMatrixWorld();
      tip.copy(tipLocal).applyMatrix4(rod.matrixWorld);
      if (st.mode === 'cast') {
        const k = Math.min(1, (now - st.t0) / 800);
        float.position.lerpVectors(tip, st.to, k); float.position.y += Math.sin(Math.PI * k) * 8;
        if (k >= 1) { st.mode = 'wait'; st.biteAt = now + 3000 + Math.random() * 7000; snd('plop', 0.8); ring(st.to.x, st.to.z, waterY, now, 0.7); splash(st.to.x, st.to.z, waterY, 6, 0.4); }
      } else if (st.mode === 'wait') {
        float.position.set(st.to.x, waterY + Math.sin(time * 2.2) * 0.06, st.to.z);
        // a fish comes circling in toward the float before it bites
        const left = (st.biteAt - now) / 1000;
        if (left < 3) {
          const r = 1.5 + left * 2.2, a = time * 1.6;
          nibbler.visible = true;
          nibbler.position.set(st.to.x + Math.cos(a) * r, waterY - 0.7, st.to.z + Math.sin(a) * r);
          nibbler.rotation.set(0, -(a + Math.PI / 2), 0, 'YXZ'); wig(nibbler, 0.14, 9);
        }
        if (now > st.biteAt) { st.mode = 'bite'; st.t0 = now; snd('splash', false); }
        if (camera.position.distanceTo(st.to) > 80) { end(); toast(t$('fishSnap', 'The line snapped')); }
      } else if (st.mode === 'bite') {
        const t = (now - st.t0) / 1000;
        float.position.set(st.to.x + Math.sin(t * 20) * 0.08, waterY - 0.25 - Math.abs(Math.sin(t * 9)) * 0.45, st.to.z);
        nibbler.position.set(st.to.x - 1.2, waterY - 0.6, st.to.z); nibbler.rotation.set(0, 0, -0.3, 'YXZ'); wig(nibbler, 0.4, 22);
        if (now - st.lastDip > 340) { ring(st.to.x, st.to.z, waterY, now, 0.6); st.lastDip = now; }
        if (t > 1.5) { st.mode = 'wait'; st.biteAt = now + 2500 + Math.random() * 6000; nibbler.visible = false; toast(t$('fishAway', 'It got away…')); }
      } else if (st.mode === 'catch') {
        // the fish leaps out, flapping hard, and flies over to you
        const k = Math.min(1, (now - st.t0) / 1100);
        tmp.set(0, -0.4, -3.2).applyQuaternion(camera.quaternion).add(camera.position);
        catchFish.visible = true;
        catchFish.position.lerpVectors(st.catchFrom, tmp, k); catchFish.position.y += Math.sin(Math.PI * k) * 6;
        catchFish.rotation.set(Math.sin(time * 18) * 0.4, time * 4, Math.PI / 2 * (1 - k));
        wig(catchFish, 0.5, 26);
        if (k >= 1) { catchFish.visible = false; end(); }
      }
      if (line.visible) {
        const a = lineGeo.attributes.position;
        for (let i = 0; i < LINE_N; i++) {
          const u = i / (LINE_N - 1);
          tmp.lerpVectors(tip, float.visible ? float.position : st.catchFrom, u);
          tmp.y -= Math.sin(Math.PI * u) * (st.mode === 'bite' ? 0.2 : 1.2);
          a.setXYZ(i, tmp.x, tmp.y, tmp.z);
        }
        a.needsUpdate = true;
        rod.rotation.x = -0.95 + (st.mode === 'bite' ? Math.sin(time * 30) * 0.05 - 0.15 : 0);
      }
      if (!active || onBoat) setHint('');
      else if (st.mode === 'bite') setHint(t$('fishBite', 'A bite! Click now!'), true);
      else if (st.mode === 'wait' || st.mode === 'cast') setHint(t$('fishWait', 'Waiting for a bite… · R reel in'));
      else if (st.aim) setHint(t$('fishCast', 'R  cast the line'));
      else if (hit && !canFish) setHint('Go to the dock or the shore to fish');
      else setHint('');
    }
  };
}
