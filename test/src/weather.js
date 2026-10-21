/* MEOW — weather: rain streaks, snow, falling leaves, fireflies and soft mist banks.
   Rain, snow and leaves fall in a box that follows the camera; nothing falls indoors. */
import * as THREE from 'three';
import { smooth } from './terrain.js';

const rnd = (a, b) => a + Math.random() * (b - a);

export function createWeather(scene, U, pixelRatio) {
  /* ---------- rain: thin slanted lines ---------- */
  const RAIN_N = 2600;
  const rainGeo = new THREE.BufferGeometry();
  {
    const pos = new Float32Array(RAIN_N * 6), end = new Float32Array(RAIN_N * 2);
    for (let i = 0; i < RAIN_N; i++) { const x = rnd(-90, 90), y = rnd(0, 70), z = rnd(-140, 40); pos.set([x, y, z, x, y, z], i * 6); end[i * 2 + 1] = 1; }
    rainGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    rainGeo.setAttribute('aEnd', new THREE.BufferAttribute(end, 1));
  }
  const rainMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false,
    uniforms: { uTime: U.uTime, uOpacity: { value: 0 }, uColor: { value: new THREE.Color(0xdfe3e6) } },
    vertexShader: /* glsl */`
      uniform float uTime; attribute float aEnd; varying float vEnd;
      void main() {
        vec3 p = position;
        p.y = mod(p.y - uTime * 34.0, 70.0) - 10.0;
        p.y -= aEnd * 2.2; p.x += aEnd * 0.35;
        vEnd = aEnd;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }`,
    fragmentShader: /* glsl */`
      uniform float uOpacity; uniform vec3 uColor; varying float vEnd;
      void main() {
        gl_FragColor = vec4(uColor, uOpacity * 0.32 * (1.0 - vEnd * 0.7));
        #include <colorspace_fragment>
      }`
  });
  const rain = new THREE.LineSegments(rainGeo, rainMat);
  rain.frustumCulled = false;
  scene.add(rain);

  /* ---------- soft points: snow, leaves, fireflies ---------- */
  const points = (n, box, vert, color, size) => {
    const g = new THREE.BufferGeometry();
    const pos = new Float32Array(n * 3), seed = new Float32Array(n);
    for (let i = 0; i < n; i++) { pos.set([rnd(-box[0], box[0]), rnd(box[1], box[2]), rnd(box[3], box[4])], i * 3); seed[i] = Math.random(); }
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false,
      uniforms: { uTime: U.uTime, uOpacity: { value: 0 }, uColor: { value: new THREE.Color(color) }, uSize: { value: size * pixelRatio } },
      vertexShader: vert,
      fragmentShader: /* glsl */`
        uniform float uOpacity; uniform vec3 uColor; varying float vA;
        void main() {
          float a = smoothstep(0.5, 0.0, length(gl_PointCoord - 0.5));
          gl_FragColor = vec4(uColor, a * uOpacity * vA);
          #include <colorspace_fragment>
        }`
    });
    const pts = new THREE.Points(g, mat); pts.frustumCulled = false; scene.add(pts);
    return pts;
  };
  const snow = points(3200, [110, 0, 70, -160, 40], /* glsl */`
    uniform float uTime, uSize; attribute float aSeed; varying float vA;
    void main() {
      vec3 p = position;
      p.y = mod(p.y - uTime * (1.4 + aSeed * 1.6), 70.0) - 10.0;
      p.x += sin(uTime * 0.4 + aSeed * 30.0) * 1.6;
      p.z += cos(uTime * 0.3 + aSeed * 20.0) * 1.0;
      vec4 mv = modelViewMatrix * vec4(p, 1.0);
      gl_PointSize = uSize * (0.6 + aSeed) * (60.0 / -mv.z);
      vA = 0.8;
      gl_Position = projectionMatrix * mv;
    }`, 0xf4f6f8, 3.2);
  const leaves = points(900, [90, 0, 60, -120, 40], /* glsl */`
    uniform float uTime, uSize; attribute float aSeed; varying float vA;
    void main() {
      vec3 p = position;
      p.y = mod(p.y - uTime * (1.2 + aSeed * 1.4), 60.0) - 8.0;
      p.x += sin(uTime * 0.7 + aSeed * 40.0) * 3.0 + uTime * 0.8;
      p.z += cos(uTime * 0.5 + aSeed * 23.0) * 2.0;
      p.x = mod(p.x + 90.0, 180.0) - 90.0;
      vec4 mv = modelViewMatrix * vec4(p, 1.0);
      gl_PointSize = uSize * (0.6 + aSeed) * (60.0 / -mv.z) * (0.55 + 0.45 * abs(sin(uTime * 3.0 + aSeed * 30.0)));
      vA = 0.9;
      gl_Position = projectionMatrix * mv;
    }`, 0xd27a2c, 4.2);
  const fireflies = points(260, [160, 1, 14, -220, 30], /* glsl */`
    uniform float uTime, uSize; attribute float aSeed; varying float vA;
    void main() {
      vec3 p = position;
      p.x += sin(uTime * 0.2 + aSeed * 40.0) * 4.0;
      p.y += sin(uTime * 0.35 + aSeed * 13.0) * 1.5;
      p.z += cos(uTime * 0.18 + aSeed * 22.0) * 4.0;
      vec4 mv = modelViewMatrix * vec4(p, 1.0);
      gl_PointSize = uSize * (70.0 / -mv.z);
      vA = 0.35 + 0.65 * pow(0.5 + 0.5 * sin(uTime * (0.6 + aSeed) + aSeed * 50.0), 3.0);
      gl_Position = projectionMatrix * mv;
    }`, 0xd9d2b0, 5);

  /* ---------- soft mist banks ---------- */
  const mistTex = (() => {
    const c = document.createElement('canvas'); c.width = 256; c.height = 128;
    const g = c.getContext('2d');
    const grd = g.createRadialGradient(128, 64, 0, 128, 64, 128);
    grd.addColorStop(0, 'rgba(255,255,255,0.9)'); grd.addColorStop(0.5, 'rgba(255,255,255,0.35)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grd; g.fillRect(0, 0, 256, 128);
    return new THREE.CanvasTexture(c);
  })();
  const mists = Array.from({ length: 9 }, (_, i) => {
    const mat = new THREE.MeshBasicMaterial({ map: mistTex, transparent: true, depthWrite: false, fog: false, opacity: 0 });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(rnd(380, 620), rnd(70, 120)), mat);
    mesh.position.set(rnd(-400, 400), rnd(8, 45), -60 - i * 70);
    mesh.userData.v = rnd(1.2, 3.2) * (Math.random() < 0.5 ? -1 : 1);
    scene.add(mesh);
    return mesh;
  });

  const set = (obj, amount) => { obj.material.uniforms.uOpacity.value = amount; obj.visible = amount > 0.01; };
  return {
    get rainAmount() { return rainMat.uniforms.uOpacity.value; },
    // s = current scene values, cam = camera position, out = 1 outdoors / 0 indoors
    update(s, cam, homeLook, homeCam, waterY, out, dt) {
      set(rain, s.rain * out); set(snow, s.snow * out); set(leaves, s.leaves * out); set(fireflies, s.fire);
      rain.position.set(cam.x, cam.y - 20, cam.z);
      snow.position.copy(rain.position); leaves.position.copy(rain.position);
      fireflies.position.set(homeLook.x * 0.3, waterY, homeCam.z - 90);
      mists.forEach((m) => {
        m.position.x += m.userData.v * dt;
        if (m.position.x > 520) m.position.x = -520; else if (m.position.x < -520) m.position.x = 520;
        m.lookAt(cam.x, m.position.y, cam.z);
        // banks thin out when you walk right into them, and stay outside
        const d = Math.hypot(m.position.x - cam.x, m.position.z - cam.z);
        // …and never near the cabin: a bank would slice through the house and show at the doors
        const dh = Math.hypot(cam.x - 106, cam.z + 119), bankNearHouse = Math.abs(m.position.z + 119) < 60;
        m.material.opacity = s.mist * 0.5 * smooth(12, 80, d) * out * (bankNearHouse ? smooth(60, 150, dh) : 1);
        m.material.color.copy(s.fog);
        m.visible = m.material.opacity > 0.003;
      });
    }
  };
}
