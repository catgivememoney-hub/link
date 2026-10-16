/* MEOW — fish in the lake.
   · Rainy days (and a little in spring / summer): fish come up for a breath —
     a head pops out, gulps, and slips back in, leaving a ring on the water.
   · Fishing: stand near water, aim the dot at the lake and press R to cast.
     Wait for the float to dip, then click (or press R) quickly to hook the fish.
     R while waiting reels the line back in. Your catches are counted. */
import * as THREE from 'three';
import { Parts, M } from './kit.js';

export function createFish({ scene, camera, heightAt, water }) {
  const t$ = (k, f, v) => (window.MEOW_I18N ? window.MEOW_I18N.t(k, v) : f);
  const snd = (name, ...a) => { const S = window.MEOW_SOUND; if (S && S[name]) S[name](...a); };

  /* ---------- a fish (body, fins, eyes) ---------- */
  const fishGeo = (() => {
    const P = new Parts();
    const body = new THREE.SphereGeometry(1, 18, 12);
    P.add(body, { m: M(0, 0, 0, 0, 0, 0, 1.0, 0.36, 0.28), color: (v) => { const top = v.y > 0.05 ? 0.55 : 0.85; const spot = Math.sin(v.x * 30) * Math.sin(v.z * 40) > 0.6 && v.y > 0 ? 0.8 : 1; return [top * 0.78 * spot, top * 0.84 * spot, top * 0.8 * spot]; } });
    P.add(new THREE.ConeGeometry(0.3, 0.45, 4), { m: M(-1.05, 0, 0, 0, 0, Math.PI / 2, 1, 1, 0.25), color: () => [0.42, 0.46, 0.44] });   // tail
    P.add(new THREE.ConeGeometry(0.16, 0.4, 4), { m: M(0.05, 0.38, 0, 0, 0, -0.4, 1, 1, 0.2), color: () => [0.42, 0.46, 0.44] });        // back fin
    [-1, 1].forEach((s) => {
      P.add(new THREE.SphereGeometry(0.07, 8, 6), { m: M(0.72, 0.08, s * 0.17), color: () => [0.95, 0.95, 0.92] });
      P.add(new THREE.SphereGeometry(0.04, 8, 6), { m: M(0.76, 0.085, s * 0.21), color: () => [0.05, 0.05, 0.05] });
    });
    P.add(new THREE.TorusGeometry(0.07, 0.025, 6, 12), { m: M(0.99, -0.02, 0, 0, Math.PI / 2, 0), color: () => [0.35, 0.22, 0.24] });     // mouth
    return P.geometry();
  })();
  const fishMat = new THREE.MeshLambertMaterial({ vertexColors: true });

  /* ---------- fish coming up for air ---------- */
  const N = 5, S = 1.6;
  const pop = Array.from({ length: N }, (_, i) => {
    const m = new THREE.Mesh(fishGeo, fishMat); m.visible = false; m.scale.setScalar(S); scene.add(m);
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.85, 1, 32).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xe8eef0, transparent: true, opacity: 0, depthWrite: false }));
    ring.visible = false; scene.add(ring);
    return { m, ring, next: performance.now() + 1500 + i * 1700, t0: 0, x: 0, z: 0, yaw: 0, on: false };
  });
  const ambient = (amount, now, waterY, indoor) => {
    pop.forEach((f) => {
      if (!f.on) {
        f.m.visible = false;
        if (amount < 0.05 || indoor || now < f.next) { f.ring.visible = f.ring.visible && now - f.t0 < 2600; return; }
        // pick a deep enough spot in front of / around you
        for (let k = 0; k < 8; k++) {
          const a = Math.random() * Math.PI * 2, d = 16 + Math.random() * 60;
          const x = camera.position.x + Math.cos(a) * d, z = camera.position.z + Math.sin(a) * d;
          if (heightAt(x, z) < waterY - 1.5) { f.x = x; f.z = z; f.yaw = Math.random() * 6.28; f.on = true; f.t0 = now; break; }
        }
        f.next = now + (2500 + Math.random() * 6000) / Math.max(0.2, amount);
        if (f.on && Math.hypot(f.x - camera.position.x, f.z - camera.position.z) < 45) setTimeout(() => snd('plop', 0.6), 250);
      }
      if (!f.on) return;
      const t = (now - f.t0) / 1000;
      // up (nose first), a gulp, then a little roll back down
      const up = t < 0.35 ? t / 0.35 : t < 0.9 ? 1 : Math.max(0, 1 - (t - 0.9) / 0.45);
      const e = up * up * (3 - 2 * up);
      f.m.visible = true;
      f.m.position.set(f.x, waterY - 1.2 * S + e * 1.45 * S, f.z);
      f.m.rotation.set(0, f.yaw, 1.05 - (t > 0.9 ? (t - 0.9) * 1.6 : 0));
      const gulp = t > 0.4 && t < 0.85 ? 1 + 0.12 * Math.sin((t - 0.4) * 40) : 1;
      f.m.scale.set(S, S * gulp, S);
      // ring spreading on the water
      f.ring.visible = true; f.ring.position.set(f.x, waterY + 0.05, f.z);
      const rt = Math.max(0, t - 0.2), rs = 0.6 + rt * 2.4;
      f.ring.scale.setScalar(rs); f.ring.material.opacity = Math.max(0, 0.55 - rt * 0.22);
      if (t > 1.4) { f.on = false; f.m.visible = false; }
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
  const catchFish = new THREE.Mesh(fishGeo, fishMat); catchFish.visible = false; scene.add(catchFish);

  const hint = document.createElement('div'); hint.className = 'fish-hint'; document.body.appendChild(hint);
  const setHint = (txt, hot) => { hint.textContent = txt || ''; hint.classList.toggle('show', !!txt); hint.classList.toggle('hot', !!hot); };

  const st = { mode: 'idle', t0: 0, from: new THREE.Vector3(), to: new THREE.Vector3(), biteAt: 0, aim: null, catchFrom: new THREE.Vector3() };
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
  const end = () => { st.mode = 'idle'; rod.visible = false; float.visible = false; line.visible = false; };

  return {
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
    // a click: only used while a fish is biting (or while the line is out, to reel in)
    click(now) { if (st.mode === 'bite') return this.strike(now); return false; },
    strike(now) {
      st.mode = 'catch'; st.t0 = now; st.catchFrom.copy(float.position);
      float.visible = false; snd('splash', true);
      const names = t$('fishNames', 'Trout|Perch|Carp|Pike|Bass|Catfish').split('|');
      const name = names[Math.floor(Math.random() * names.length)], cm = 18 + Math.floor(Math.random() * 40);
      caught++; try { localStorage.setItem('meow.fish', String(caught)); } catch { /* ignore */ }
      catchFish.scale.setScalar(0.6 + (cm - 18) / 60);
      setTimeout(() => toast('🐟 ' + t$('fishCaught', 'You caught a {name}! {cm} cm · {n} so far', { name, cm, n: caught })), 700);
      return true;
    },
    update(now, time, { active, ray, waterY, amount, indoor }) {
      ambient(amount, now, waterY, indoor);
      // where would the cast land?
      st.aim = active && !indoor && st.mode === 'idle' && ray ? waterHit(ray, waterY) : null;
      // rod tip in the world
      camera.updateMatrixWorld();
      tip.copy(tipLocal).applyMatrix4(rod.matrixWorld);
      if (st.mode === 'cast') {
        const k = Math.min(1, (now - st.t0) / 800);
        float.position.lerpVectors(tip, st.to, k); float.position.y += Math.sin(Math.PI * k) * 8;
        if (k >= 1) { st.mode = 'wait'; st.biteAt = now + 3000 + Math.random() * 7000; snd('plop', 0.8); }
      } else if (st.mode === 'wait') {
        float.position.set(st.to.x, waterY + Math.sin(time * 2.2) * 0.06, st.to.z);
        if (now > st.biteAt) { st.mode = 'bite'; st.t0 = now; snd('splash', false); }
        if (camera.position.distanceTo(st.to) > 80) { end(); toast(t$('fishSnap', 'The line snapped')); }
      } else if (st.mode === 'bite') {
        const t = (now - st.t0) / 1000;
        float.position.set(st.to.x + Math.sin(t * 20) * 0.08, waterY - 0.25 - Math.abs(Math.sin(t * 9)) * 0.45, st.to.z);
        if (t > 1.5) { st.mode = 'wait'; st.biteAt = now + 2500 + Math.random() * 6000; toast(t$('fishAway', 'It got away…')); }
      } else if (st.mode === 'catch') {
        // the fish leaps out of the water and flies over to you
        const k = Math.min(1, (now - st.t0) / 1100);
        tmp.set(0, -0.4, -3.2).applyQuaternion(camera.quaternion).add(camera.position);
        catchFish.visible = true;
        catchFish.position.lerpVectors(st.catchFrom, tmp, k); catchFish.position.y += Math.sin(Math.PI * k) * 6;
        catchFish.rotation.set(Math.sin(time * 18) * 0.4, time * 4, Math.PI / 2 * (1 - k));
        if (k >= 1) { catchFish.visible = false; end(); }
      }
      // the line: from the rod tip to the float, sagging a little
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
      // what to tell you
      if (!active) setHint('');
      else if (st.mode === 'bite') setHint(t$('fishBite', 'A bite! Click now!'), true);
      else if (st.mode === 'wait' || st.mode === 'cast') setHint(t$('fishWait', 'Waiting for a bite… · R reel in'));
      else if (st.aim) setHint(t$('fishCast', 'R  cast the line'));
      else setHint('');
    }
  };
}
