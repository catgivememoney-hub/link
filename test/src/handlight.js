/* MEOW — the light you carry (F): flashlight → warm lantern → off.
   No hands are drawn, only the light. The flashlight is held low and to the right,
   its beam lags a little behind your view, casts shadows and shows as a soft beam in
   fog. The lantern is a warm flame that catches, flickers and swings as you walk. */
import * as THREE from 'three';

const curve = (mode, on, t) => {
  if (t < 0) return 0;
  if (mode === 'torch') {
    if (on) { if (t < 0.04) return 0.55; if (t < 0.08) return 0.12; if (t < 0.16) return 0.12 + (t - 0.08) / 0.08 * 0.88; return 1; }
    return Math.max(0, 1 - t / 0.12);
  }
  if (on) {
    if (t < 0.12) return t / 0.12 * 0.35; if (t < 0.24) return 0.35 - (t - 0.12) / 0.12 * 0.2;
    if (t < 0.7) { const k = (t - 0.24) / 0.46; return 0.15 + (1 - Math.pow(1 - k, 3)) * 0.85; } return 1;
  }
  return Math.max(0, 1 - Math.pow(t / 0.5, 0.8));
};

export function createHandLight(scene, U) {
  const torch = new THREE.SpotLight(0xffeedd, 0, 280, THREE.MathUtils.degToRad(32), 0.7, 1.35);
  torch.castShadow = true;                    // stays on; the map is only drawn while the light is on
  torch.shadow.autoUpdate = false; torch.shadow.needsUpdate = true;
  torch.shadow.mapSize.set(1024, 1024);
  torch.shadow.camera.near = 0.5; torch.shadow.camera.far = 280;
  torch.shadow.bias = -0.0012; torch.shadow.normalBias = 0.06;
  scene.add(torch, torch.target);
  const lamp = new THREE.PointLight(0xffa35a, 0, 120, 1.25);
  scene.add(lamp);

  const beamMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.BackSide, blending: THREE.AdditiveBlending, fog: false,
    uniforms: { uTime: U.uTime, uOpacity: { value: 0 }, uColor: { value: new THREE.Color(0xfff0dc) } },
    vertexShader: /* glsl */`
      varying vec3 vLocal; varying vec3 vN; varying vec3 vView;
      void main() {
        vLocal = position; vN = normalize(normalMatrix * normal);
        vec4 mv = modelViewMatrix * vec4(position, 1.0); vView = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */`
      uniform float uTime, uOpacity; uniform vec3 uColor;
      varying vec3 vLocal; varying vec3 vN; varying vec3 vView;
      float hash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
      float noise(vec3 p) {
        vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x), mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
                   mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x), mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
      }
      void main() {
        float along = clamp(vLocal.z, 0.0, 1.0);
        float facing = abs(dot(normalize(vN), normalize(vView)));
        float edge = 0.18 + 0.82 * pow(1.0 - facing, 2.0);
        float fall = pow(1.0 - along, 1.8) * smoothstep(0.02, 0.3, along);
        float dust = 0.75 + 0.5 * noise(vLocal * vec3(9.0, 9.0, 26.0) + vec3(0.0, uTime * 0.25, uTime * 0.1));
        gl_FragColor = vec4(uColor * edge * fall * dust * uOpacity, 1.0);
        #include <colorspace_fragment>
      }`
  });
  const beam = new THREE.Mesh(new THREE.ConeGeometry(1, 1, 40, 1, true).translate(0, -0.5, 0).rotateX(-Math.PI / 2), beamMat);
  beam.frustumCulled = false; beam.renderOrder = 5;
  scene.add(beam);

  const L = {
    state: 'off', torch: { on: false, since: -1e9 }, lamp: { on: false, since: -1e9 },
    aim: new THREE.Vector3(0, 0, -1), swing: 0, swingV: 0, swingZ: 0, swingZV: 0, lastVX: 0, lastVZ: 0, shadowTick: 0
  };
  const fwd = new THREE.Vector3(), right = new THREE.Vector3(), up = new THREE.Vector3(), tmp = new THREE.Vector3();
  const snd = (name, ...a) => { const S = window.MEOW_SOUND; if (S && S[name]) S[name](...a); };

  return {
    get state() { return L.state; },
    toggle(now) {
      if (L.state === 'off') { L.state = 'torch'; L.torch.on = true; L.torch.since = now; snd('click', true); }
      else if (L.state === 'torch') {
        L.state = 'lamp'; L.torch.on = false; L.torch.since = now; L.lamp.on = true; L.lamp.since = now + 120;
        snd('click', false); setTimeout(() => snd('ignite'), 120);
      } else { L.state = 'off'; L.lamp.on = false; L.lamp.since = now; snd('puff'); }
      snd('fire', L.state === 'lamp');
      dispatchEvent(new CustomEvent('meow:light', { detail: { state: L.state } }));
    },
    off(now) { if (L.state !== 'off') { L.state = 'off'; L.torch.on = L.lamp.on = false; L.torch.since = L.lamp.since = now; snd('fire', false); } },
    // fog: how hazy (beam shows more), rain: rain amount, bob: walking motion, vx/vz: your velocity
    update(camera, now, time, dt, { fog, rain, bob, vx, vz, motionFull }) {
      camera.updateMatrixWorld();
      fwd.set(0, 0, -1).applyQuaternion(camera.quaternion);
      right.set(1, 0, 0).applyQuaternion(camera.quaternion);
      up.set(0, 1, 0).applyQuaternion(camera.quaternion);
      const k = 1 - Math.pow(1 - 0.16, dt * 60);
      // flashlight
      const tT = (now - L.torch.since) / 1000;
      const tLvl = curve('torch', L.torch.on, tT) * (L.torch.on && tT > 0.16 ? 0.985 + 0.015 * Math.sin(time * 40) * Math.sin(time * 7) : 1);
      if (tLvl > 0.001) {
        const hb = motionFull ? bob.amp : 0;
        torch.position.copy(camera.position).addScaledVector(right, 0.75).addScaledVector(up, -0.6 - Math.sin(bob.phase) * 0.05 * hb).addScaledVector(fwd, 0.4);
        tmp.copy(fwd);
        if (motionFull) {
          tmp.addScaledVector(right, Math.sin(time * 1.7) * 0.004 + Math.sin(time * 4.3) * 0.002 + Math.sin(bob.phase) * 0.01 * hb);
          tmp.addScaledVector(up, Math.sin(time * 2.1 + 1) * 0.004 + Math.sin(bob.phase * 2) * 0.008 * hb);
        }
        L.aim.lerp(tmp.normalize(), motionFull ? k : 1).normalize();
        torch.target.position.copy(torch.position).addScaledVector(L.aim, 40);
        const len = 90, r = Math.tan(torch.angle) * len;
        beam.position.copy(torch.position); beam.lookAt(torch.target.position); beam.scale.set(r, r, len);
        // the shadow map only needs drawing while the light is on (every other frame is plenty)
        if ((L.shadowTick = (L.shadowTick + 1) % 2) === 0) torch.shadow.needsUpdate = true;
      } else L.aim.copy(fwd);
      torch.intensity = tLvl * 520;
      beamMat.uniforms.uOpacity.value = tLvl * (0.018 + 0.03 * fog + 0.035 * rain);
      beam.visible = tLvl > 0.01;
      // lantern
      const lT = (now - L.lamp.since) / 1000;
      const flick = L.lamp.on && lT > 0.7 ? 0.88 + 0.07 * Math.sin(time * 9.3 + Math.sin(time * 3.1) * 2) + 0.04 * Math.sin(time * 23.7) + 0.02 * Math.sin(time * 41) : 1;
      const lLvl = curve('lamp', L.lamp.on, lT) * flick;
      if (motionFull) {
        // the pendulum: sways when you speed up, slow down or turn, then settles
        const ax = (vx - L.lastVX) / Math.max(dt, 0.001), az = (vz - L.lastVZ) / Math.max(dt, 0.001);
        const side = -(ax * fwd.z - az * fwd.x) * 0.0012, fore = -(ax * fwd.x + az * fwd.z) * 0.0012;
        L.swingV += (-L.swing * 14 - L.swingV * 1.8 + side) * dt; L.swing += L.swingV * dt;
        L.swingZV += (-L.swingZ * 14 - L.swingZV * 1.8 + fore + Math.sin(bob.phase * 2) * 0.6 * bob.amp) * dt; L.swingZ += L.swingZV * dt;
      }
      L.lastVX = vx; L.lastVZ = vz;
      lamp.position.copy(camera.position)
        .addScaledVector(right, 1.1 + Math.sin(L.swing) * 1.4)
        .addScaledVector(up, -2.4 + (1 - Math.cos(L.swing)) * 1.4)
        .addScaledVector(fwd, 2.2 + Math.sin(L.swingZ) * 1.0);
      if (motionFull && L.lamp.on) lamp.position.y += Math.sin(time * 6.1) * 0.03;
      lamp.intensity = lLvl * 900;
      const root = document.documentElement, lvl = Math.max(tLvl, lLvl);
      root.classList.toggle('light-on', lvl > 0.05);
      root.classList.toggle('lamp-on', lLvl > 0.05);
      return lvl;
    },
    busy(now) { return now - Math.max(L.torch.since, L.lamp.since) < 1200; }
  };
}
