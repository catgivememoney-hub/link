/* MEOW — quiet 3D nature world (three.js).
   SOURCE FILE. The site loads the bundled /world.js, built with:
     npx esbuild src/world.src.js --bundle --minify --format=iife --outfile=world.js

   One continuous landscape (mountains, lake, forest, sky, weather).
   Changing the scene never cuts: the camera glides and every colour,
   light, fog and weather value cross-fades over ~3 seconds.

   API used by settings.js:  window.MEOW_BG.setScene(name), setMotion('full'|'reduced'), start() */
import * as THREE from 'three';

(() => {
  'use strict';

  const canvas = document.getElementById('bg');
  if (!canvas) return;

  /* ---------- renderer (falls back to soft CSS gradients without WebGL) ---------- */
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'low-power' });
  } catch (e) {
    document.documentElement.classList.add('no-webgl');
    window.MEOW_BG = { scenes: [], setScene(n) { document.documentElement.setAttribute('data-scene', n); }, setMotion() {}, start() {} };
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.5, 3000);
  const clock = new THREE.Clock();

  /* ---------- tiny noise helpers (deterministic) ---------- */
  const hash2 = (x, z) => { const s = Math.sin(x * 127.1 + z * 311.7) * 43758.5453; return s - Math.floor(s); };
  const vnoise = (x, z) => {
    const xi = Math.floor(x), zi = Math.floor(z), xf = x - xi, zf = z - zi;
    const u = xf * xf * (3 - 2 * xf), v = zf * zf * (3 - 2 * zf);
    const a = hash2(xi, zi), b = hash2(xi + 1, zi), c = hash2(xi, zi + 1), d = hash2(xi + 1, zi + 1);
    return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
  };
  const fbm = (x, z, oct = 5) => { let s = 0, a = 0.5, f = 1; for (let i = 0; i < oct; i++) { s += a * vnoise(x * f, z * f); f *= 2.03; a *= 0.5; } return s; };
  const ridged = (x, z) => { let s = 0, a = 0.5, f = 1; for (let i = 0; i < 5; i++) { s += a * (1 - Math.abs(vnoise(x * f, z * f) * 2 - 1)); f *= 2.1; a *= 0.5; } return s; };
  const smooth = (e0, e1, x) => { const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0))); return t * t * (3 - 2 * t); };
  const rnd = (a, b) => a + Math.random() * (b - a);

  // Height of the land: a calm lake in the middle, hills around it, tall ridges far away.
  const heightAt = (x, z) => {
    const r = Math.hypot(x * 0.75, z + 20);
    const shore = smooth(55, 240, r);
    let h = (fbm(x * 0.006 + 3, z * 0.006 + 7) - 0.45) * 46 * (0.25 + shore);
    h += Math.pow(smooth(120, 650, -z), 1.3) * ridged(x * 0.0028, z * 0.0028) * 260;
    h += smooth(160, 520, Math.abs(x)) * fbm(x * 0.004, z * 0.004 + 11) * 130;
    h -= (1 - shore) * 9;
    return h;
  };

  /* ---------- sky dome (gradient, sun/moon, stars, aurora) ---------- */
  const U = {
    uTime: { value: 0 },
    uTop: { value: new THREE.Color() }, uHorizon: { value: new THREE.Color() }, uBottom: { value: new THREE.Color() },
    uSunColor: { value: new THREE.Color() }, uSunDir: { value: new THREE.Vector3(0, 0.2, -1) }, uSunSize: { value: 0 },
    uStars: { value: 0 }, uAurora: { value: 0 }, uAur1: { value: new THREE.Color() }, uAur2: { value: new THREE.Color() }
  };
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(1400, 48, 24),
    new THREE.ShaderMaterial({
      uniforms: U, side: THREE.BackSide, depthWrite: false, fog: false,
      vertexShader: /* glsl */`
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          gl_Position = p.xyww;
        }`,
      fragmentShader: /* glsl */`
        uniform float uTime, uSunSize, uStars, uAurora;
        uniform vec3 uTop, uHorizon, uBottom, uSunColor, uSunDir, uAur1, uAur2;
        varying vec3 vDir;
        float hash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
        void main() {
          vec3 d = normalize(vDir);
          float h = d.y;
          vec3 col = h > 0.0 ? mix(uHorizon, uTop, pow(clamp(h, 0.0, 1.0), 0.55)) : mix(uHorizon, uBottom, clamp(-h / 0.25, 0.0, 1.0));
          // sun or moon: soft disc and a gentle halo
          float sd = dot(d, normalize(uSunDir));
          float on = step(0.00001, uSunSize);
          float disc = smoothstep(1.0 - uSunSize, 1.0 - uSunSize * 0.6, sd);
          float halo = pow(max(sd, 0.0), 90.0) * 0.55 + pow(max(sd, 0.0), 10.0) * 0.12;
          col += uSunColor * (disc + halo) * on;
          // stars (twinkle slowly)
          vec3 g = floor(d * 420.0);
          float s = hash(g);
          float star = step(0.9972, s) * smoothstep(0.02, 0.2, h);
          col += vec3(star * (0.55 + 0.45 * sin(uTime * 1.2 + s * 90.0))) * uStars;
          // aurora ribbons
          if (uAurora > 0.001) {
            float a = 0.0;
            for (int i = 0; i < 3; i++) {
              float fi = float(i);
              float band = 0.30 + fi * 0.07 + sin(d.x * 2.6 + fi * 1.9 + uTime * 0.04 * (fi + 1.0)) * 0.07;
              float w = exp(-pow((h - band) * 13.0, 2.0));
              float curtain = 0.55 + 0.45 * sin(d.x * 22.0 + uTime * 0.25 + fi * 2.0);
              a += w * curtain * (1.0 - fi * 0.25);
            }
            col += mix(uAur1, uAur2, clamp(d.x * 0.6 + 0.5, 0.0, 1.0)) * a * uAurora * smoothstep(0.1, -0.6, d.z);
          }
          gl_FragColor = vec4(col, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`
    })
  );
  scene.add(sky);

  /* ---------- lights and fog ---------- */
  const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
  const sun = new THREE.DirectionalLight(0xffffff, 1);
  scene.add(hemi, sun, sun.target);
  scene.fog = new THREE.FogExp2(0xcccccc, 0.004);

  /* ---------- terrain ---------- */
  const TU = { uLow: { value: new THREE.Color() }, uHigh: { value: new THREE.Color() }, uSnow: { value: new THREE.Color() }, uSnowLine: { value: 100 } };
  const tGeo = new THREE.PlaneGeometry(2200, 1800, 230, 190);
  tGeo.rotateX(-Math.PI / 2);
  tGeo.translate(0, 0, -400);
  {
    const p = tGeo.attributes.position;
    for (let i = 0; i < p.count; i++) p.setY(i, heightAt(p.getX(i), p.getZ(i)));
    tGeo.computeVertexNormals();
  }
  const tMat = new THREE.MeshLambertMaterial({ color: 0xffffff });
  tMat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, TU);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying float vH; varying float vSlope;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvH = position.y; vSlope = 1.0 - normal.y;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform vec3 uLow, uHigh, uSnow; uniform float uSnowLine; varying float vH; varying float vSlope;')
      .replace('#include <color_fragment>', `#include <color_fragment>
        vec3 land = mix(uLow, uHigh, smoothstep(-5.0, 120.0, vH));
        float snow = smoothstep(uSnowLine - 12.0, uSnowLine + 12.0, vH) * (1.0 - smoothstep(0.35, 0.7, vSlope));
        diffuseColor.rgb = mix(land, uSnow, snow);`);
  };
  const terrain = new THREE.Mesh(tGeo, tMat);
  scene.add(terrain);

  /* ---------- water (lake or sea) with a moving ripple texture ---------- */
  const rippleTex = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 256;
    const g = c.getContext('2d'); const img = g.createImageData(256, 256);
    for (let y = 0; y < 256; y++) for (let x = 0; x < 256; x++) {
      const n = fbm(x / 22, y / 7, 4), m = fbm(x / 22 + 0.6, y / 7, 4), k = fbm(x / 22, y / 7 + 0.6, 4);
      const i = (y * 256 + x) * 4;
      img.data[i] = 128 + (n - m) * 300; img.data[i + 1] = 128 + (n - k) * 300; img.data[i + 2] = 255; img.data[i + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(60, 60);
    return t;
  })();
  const wMat = new THREE.MeshStandardMaterial({ color: 0x777777, roughness: 0.3, metalness: 0.35, normalMap: rippleTex, normalScale: new THREE.Vector2(0.35, 0.35) });
  const water = new THREE.Mesh(new THREE.PlaneGeometry(4000, 4000).rotateX(-Math.PI / 2), wMat);
  scene.add(water);

  /* ---------- pine forest (instanced cones that can grow and shrink) ---------- */
  const treeU = { uTree: { value: 1 } };
  const coneGeo = new THREE.ConeGeometry(1, 3.4, 7, 1).translate(0, 1.7, 0);
  const treeMat = new THREE.MeshLambertMaterial({ color: 0x334033 });
  treeMat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, treeU);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float uTree;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\ntransformed *= uTree;');
  };
  const TREE_N = 1400;
  const trees = new THREE.InstancedMesh(coneGeo, treeMat, TREE_N);
  {
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), pos = new THREE.Vector3();
    let n = 0, guard = 0;
    while (n < TREE_N && guard++ < 60000) {
      const x = rnd(-650, 650), z = rnd(-700, 260);
      const h = heightAt(x, z);
      if (h < 3 || h > 85) continue;
      if (fbm(x * 0.02, z * 0.02, 3) < 0.42) continue; // natural clumps
      const k = rnd(2.2, 4.8);
      pos.set(x, h - 0.6, z); s.set(k, k * rnd(1.3, 1.9), k);
      m.compose(pos, q, s); trees.setMatrixAt(n++, m);
    }
    trees.count = n;
  }
  scene.add(trees);

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

  /* ---------- weather: rain streaks, snow, fireflies ---------- */
  const softPoint = /* glsl */`
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d);`;

  // rain: thin slanted lines falling in a box that follows the camera
  const RAIN_N = 2600;
  const rainGeo = new THREE.BufferGeometry();
  {
    const pos = new Float32Array(RAIN_N * 6), end = new Float32Array(RAIN_N * 2);
    for (let i = 0; i < RAIN_N; i++) {
      const x = rnd(-90, 90), y = rnd(0, 70), z = rnd(-140, 40);
      pos.set([x, y, z, x, y, z], i * 6); end[i * 2 + 1] = 1;
    }
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

  const pointsSystem = (n, box, vert, color, size) => {
    const g = new THREE.BufferGeometry();
    const pos = new Float32Array(n * 3), seed = new Float32Array(n);
    for (let i = 0; i < n; i++) { pos.set([rnd(-box[0], box[0]), rnd(box[1], box[2]), rnd(box[3], box[4])], i * 3); seed[i] = Math.random(); }
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false,
      uniforms: { uTime: U.uTime, uOpacity: { value: 0 }, uColor: { value: new THREE.Color(color) }, uSize: { value: size * renderer.getPixelRatio() } },
      vertexShader: vert,
      fragmentShader: /* glsl */`
        uniform float uOpacity; uniform vec3 uColor; varying float vA;
        void main() {
          ${softPoint}
          gl_FragColor = vec4(uColor, a * uOpacity * vA);
          #include <colorspace_fragment>
        }`
    });
    const pts = new THREE.Points(g, mat); pts.frustumCulled = false; scene.add(pts);
    return pts;
  };

  const snow = pointsSystem(3200, [110, 0, 70, -160, 40], /* glsl */`
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

  const fireflies = pointsSystem(260, [160, 1, 14, -220, 30], /* glsl */`
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

  /* ---------- scene presets (muted: black & white → soft colour) ---------- */
  // sat = how much colour the whole picture keeps (0 = black & white).
  const V = (x, y, z) => new THREE.Vector3(x, y, z);
  const PRESETS = {
    rain: {
      sat: 0, skyTop: '#8f959a', skyHorizon: '#c6c9cb', skyBottom: '#8a8f93', fog: '#b7bbbe', fogDensity: 0.0042,
      low: '#6c7175', high: '#878c90', snowC: '#c9cccf', snowLine: 170, water: 0, waterC: '#6d7378', waterRough: 0.18,
      sunC: '#000000', sunDir: V(0, 0.3, -1), sunSize: 0, lightC: '#e8e8e8', light: 0.55, lightDir: V(0.3, 0.6, 0.2),
      hemiSky: '#cfd2d4', hemiGround: '#55595c', hemi: 0.95, treeC: '#3f4447', trees: 0.75,
      rain: 1, snow: 0, fire: 0, stars: 0, aurora: 0, aur1: '#000000', aur2: '#000000', mist: 0.55,
      cam: V(0, 13, 105), look: V(0, 9, 0)
    },
    frost: {
      sat: 0, skyTop: '#d7d9db', skyHorizon: '#eceded', skyBottom: '#cfd1d3', fog: '#e3e4e5', fogDensity: 0.0068,
      low: '#a9adb0', high: '#c3c6c8', snowC: '#eeeff0', snowLine: 90, water: 0, waterC: '#b4b8bb', waterRough: 0.4,
      sunC: '#000000', sunDir: V(0, 0.3, -1), sunSize: 0, lightC: '#ffffff', light: 0.45, lightDir: V(-0.3, 0.8, 0.3),
      hemiSky: '#f0f0f0', hemiGround: '#8d9093', hemi: 1.1, treeC: '#6f7477', trees: 0.35,
      rain: 0, snow: 0, fire: 0, stars: 0, aurora: 0, aur1: '#000000', aur2: '#000000', mist: 1,
      cam: V(0, 34, 140), look: V(0, 16, -20)
    },
    mist: {
      sat: 0.55, skyTop: '#93a4b1', skyHorizon: '#d6dcdf', skyBottom: '#a9b5bd', fog: '#ccd4d8', fogDensity: 0.0047,
      low: '#56645c', high: '#77858d', snowC: '#e5e9eb', snowLine: 95, water: 0, waterC: '#7a8c95', waterRough: 0.22,
      sunC: '#efe7da', sunDir: V(0.5, 0.35, -1), sunSize: 0.0016, lightC: '#f2ece2', light: 0.85, lightDir: V(0.5, 0.6, -0.4),
      hemiSky: '#d5dde2', hemiGround: '#4d5650', hemi: 0.8, treeC: '#34433b', trees: 0.95,
      rain: 0, snow: 0, fire: 0, stars: 0, aurora: 0, aur1: '#000000', aur2: '#000000', mist: 1,
      cam: V(-38, 22, 112), look: V(0, 20, -40)
    },
    snow: {
      sat: 0.6, skyTop: '#a3afba', skyHorizon: '#e1e5e8', skyBottom: '#c9d1d7', fog: '#dde2e6', fogDensity: 0.0045,
      low: '#e7ebee', high: '#f2f4f6', snowC: '#fbfcfd', snowLine: -20, water: 0.5, waterC: '#c3ccd2', waterRough: 0.75,
      sunC: '#e9e6e0', sunDir: V(-0.4, 0.3, -1), sunSize: 0.0014, lightC: '#f4f1ec', light: 0.7, lightDir: V(-0.4, 0.5, 0.3),
      hemiSky: '#eef2f5', hemiGround: '#8a96a0', hemi: 0.95, treeC: '#36443f', trees: 1,
      rain: 0, snow: 1, fire: 0, stars: 0, aurora: 0, aur1: '#000000', aur2: '#000000', mist: 0.45,
      cam: V(24, 11, 78), look: V(0, 12, -10)
    },
    night: {
      sat: 0.45, skyTop: '#04060d', skyHorizon: '#1a2238', skyBottom: '#0a0e18', fog: '#111727', fogDensity: 0.0032,
      low: '#141a24', high: '#1d2431', snowC: '#5d6676', snowLine: 160, water: 0, waterC: '#0e1421', waterRough: 0.1,
      sunC: '#d8d4c6', sunDir: V(-0.45, 0.32, -1), sunSize: 0.0022, lightC: '#93a0bf', light: 0.4, lightDir: V(-0.45, 0.5, -0.6),
      hemiSky: '#26304a', hemiGround: '#07090f', hemi: 0.45, treeC: '#0d1217', trees: 0.85,
      rain: 0, snow: 0, fire: 0.85, stars: 1, aurora: 0, aur1: '#000000', aur2: '#000000', mist: 0.25,
      cam: V(0, 10, 92), look: V(0, 16, -40)
    },
    aurora: {
      sat: 0.65, skyTop: '#03060a', skyHorizon: '#122029', skyBottom: '#070c10', fog: '#0d161b', fogDensity: 0.0034,
      low: '#1b2429', high: '#29333a', snowC: '#8b989f', snowLine: 55, water: 0, waterC: '#0c1418', waterRough: 0.08,
      sunC: '#000000', sunDir: V(0, 0.3, -1), sunSize: 0, lightC: '#8fb1aa', light: 0.35, lightDir: V(0.2, 0.6, -0.8),
      hemiSky: '#1f3a3a', hemiGround: '#05080a', hemi: 0.5, treeC: '#0b1113', trees: 0.6,
      rain: 0, snow: 0.22, fire: 0, stars: 0.75, aurora: 1, aur1: '#4f8f80', aur2: '#6f6595', mist: 0.15,
      cam: V(30, 15, 102), look: V(0, 34, -80)
    },
    ocean: {
      sat: 0.7, skyTop: '#4a4e68', skyHorizon: '#d4a28b', skyBottom: '#7c6670', fog: '#c29d90', fogDensity: 0.0026,
      low: '#4a4652', high: '#5d5765', snowC: '#a69aa3', snowLine: 200, water: 11, waterC: '#585d77', waterRough: 0.14,
      sunC: '#ecd0b2', sunDir: V(0, 0.17, -1), sunSize: 0.0045, lightC: '#efcfb4', light: 0.95, lightDir: V(0, 0.2, -1),
      hemiSky: '#c9a6a0', hemiGround: '#3c3a4a', hemi: 0.7, treeC: '#2f2c35', trees: 0,
      rain: 0, snow: 0, fire: 0, stars: 0.15, aurora: 0, aur1: '#000000', aur2: '#000000', mist: 0.35,
      cam: V(0, 7, 125), look: V(0, 9, 0)
    }
  };

  // Which values are colours / vectors (everything else is a plain number).
  const COLORS = ['skyTop', 'skyHorizon', 'skyBottom', 'fog', 'low', 'high', 'snowC', 'waterC', 'sunC', 'lightC', 'hemiSky', 'hemiGround', 'treeC', 'aur1', 'aur2'];
  const VECS = ['sunDir', 'lightDir', 'cam', 'look'];
  const toState = (p) => {
    const o = {};
    for (const k in p) {
      if (COLORS.includes(k)) o[k] = new THREE.Color(p[k]);
      else if (VECS.includes(k)) o[k] = p[k].clone();
      else o[k] = p[k];
    }
    return o;
  };
  const cloneState = (s) => toState(s);

  let cur = toState(PRESETS.rain);
  let from = cloneState(cur), to = cloneState(cur);
  let tStart = 0, tDur = 1;
  let arc = 0;
  let sceneName = 'rain';
  let motion = 'full';
  let running = false, started = false;
  let exposure = 1, exposureTo = 1;

  const ease = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);

  const blend = (k) => {
    for (const key in to) {
      if (COLORS.includes(key)) cur[key].copy(from[key]).lerp(to[key], k);
      else if (VECS.includes(key)) cur[key].copy(from[key]).lerp(to[key], k);
      else cur[key] = from[key] + (to[key] - from[key]) * k;
    }
  };

  /* ---------- push the current values into the 3D scene ---------- */
  const applyState = () => {
    const s = cur;
    U.uTop.value.copy(s.skyTop); U.uHorizon.value.copy(s.skyHorizon); U.uBottom.value.copy(s.skyBottom);
    U.uSunColor.value.copy(s.sunC); U.uSunDir.value.copy(s.sunDir).normalize(); U.uSunSize.value = s.sunSize;
    U.uStars.value = s.stars; U.uAurora.value = s.aurora; U.uAur1.value.copy(s.aur1); U.uAur2.value.copy(s.aur2);
    scene.fog.color.copy(s.fog); scene.fog.density = s.fogDensity * (1 + gal.focus * 0.35);
    TU.uLow.value.copy(s.low); TU.uHigh.value.copy(s.high); TU.uSnow.value.copy(s.snowC); TU.uSnowLine.value = s.snowLine;
    water.position.y = s.water; wMat.color.copy(s.waterC); wMat.roughness = s.waterRough;
    sun.color.copy(s.lightC); sun.intensity = s.light * 2.2; sun.position.copy(s.lightDir).multiplyScalar(300);
    hemi.color.copy(s.hemiSky); hemi.groundColor.copy(s.hemiGround); hemi.intensity = s.hemi * 1.6;
    treeMat.color.copy(s.treeC); treeU.uTree.value = s.trees; trees.visible = s.trees > 0.01;
    rainMat.uniforms.uOpacity.value = s.rain; rain.visible = s.rain > 0.01;
    snow.material.uniforms.uOpacity.value = s.snow; snow.visible = s.snow > 0.01;
    fireflies.material.uniforms.uOpacity.value = s.fire; fireflies.visible = s.fire > 0.01;
    mists.forEach((m) => { m.material.opacity = s.mist * 0.5; m.material.color.copy(s.fog); m.visible = s.mist > 0.01; });
    // colour amount of the whole picture: 0 = black & white, 1 = full (we stay well below)
    LU.uSat.value = s.sat;
  };

  /* ---------- camera: glide + gentle drift + mouse parallax ---------- */
  const pointer = { x: 0, y: 0, sx: 0, sy: 0 };
  addEventListener('pointermove', (e) => {
    pointer.x = (e.clientX / innerWidth) * 2 - 1;
    pointer.y = (e.clientY / innerHeight) * 2 - 1;
  }, { passive: true });

  // gallery reactions: push the camera into the valley, pan with the cards, small pulse
  const gal = { focus: 0, focusTo: 0, pan: 0, panTo: 0, pulse: 0 };
  const lookTmp = new THREE.Vector3();
  const dirTmp = new THREE.Vector3();
  const placeCamera = (time) => {
    const still = motion !== 'full';
    pointer.sx += (pointer.x - pointer.sx) * 0.035;
    pointer.sy += (pointer.y - pointer.sy) * 0.035;
    const drift = still ? 0 : 1;
    camera.position.set(
      cur.cam.x + Math.sin(time * 0.05) * 3 * drift + pointer.sx * 6 * drift,
      cur.cam.y + arc + Math.sin(time * 0.07) * 0.8 * drift - pointer.sy * 2.5 * drift,
      cur.cam.z
    );
    lookTmp.copy(cur.look);
    lookTmp.x += pointer.sx * 3 * drift;
    // gallery: move forward along the view, a little lower, and pan sideways
    const f = gal.focus;
    if (f > 0.0005 || Math.abs(gal.pan) > 0.0005) {
      dirTmp.copy(cur.look).sub(cur.cam).normalize();
      camera.position.addScaledVector(dirTmp, f * 34);
      camera.position.y -= f * 4 - gal.pulse * 2;
      camera.position.x += gal.pan * 10 * f;
      lookTmp.x += gal.pan * 38 * f;
      lookTmp.y -= f * 3;
    }
    camera.lookAt(lookTmp);
    const wantFov = (innerWidth < 700 ? 62 : 50) - f * 6 + gal.pulse * 1.5;
    if (Math.abs(camera.fov - wantFov) > 0.01) { camera.fov = wantFov; camera.updateProjectionMatrix(); }
    sky.position.copy(camera.position);
    // weather volumes follow the camera
    rain.position.set(camera.position.x, camera.position.y - 20, camera.position.z);
    snow.position.set(camera.position.x, camera.position.y - 20, camera.position.z);
    fireflies.position.set(cur.look.x * 0.3, water.position.y, cur.cam.z - 90);
  };

  /* ---------- film lens (post-processing) ----------
     The 3D scene is drawn into a texture first, then this pass adds a real
     camera feel: shallow depth of field (horizon sharp, top/bottom/edges soft),
     colour fringing near the edges, gentle vignette, grain and a faint flicker.
     "Rack focus": the blur breathes during scene changes, deepens behind the
     gallery and starts heavy on entrance, then pulls into focus. */
  const rt = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, depthBuffer: true });
  const LU = {
    tScene: { value: rt.texture }, uRes: { value: new THREE.Vector2(4, 4) }, uTime: U.uTime,
    uBlur: { value: 3 }, uBand: { value: 0.22 }, uFocusY: { value: 0.47 }, uPull: { value: 0 },
    uAberr: { value: 0.006 }, uSat: { value: 0 }, uGrain: { value: 0.022 }, uVig: { value: 0.32 }, uFlicker: { value: 0.01 }
  };
  const lensScene = new THREE.Scene();
  const lensCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  lensScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({
    uniforms: LU, depthTest: false, depthWrite: false,
    vertexShader: /* glsl */`
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
    fragmentShader: /* glsl */`
      uniform sampler2D tScene; uniform vec2 uRes;
      uniform float uTime, uBlur, uBand, uFocusY, uPull, uAberr, uSat, uGrain, uVig, uFlicker;
      varying vec2 vUv;
      float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
      void main() {
        vec2 uv = vUv;
        vec2 c = uv - 0.5;
        float r = length(c * vec2(uRes.x / uRes.y, 1.0));
        // how out-of-focus this pixel is (in pixels)
        float dy = abs(uv.y - uFocusY);
        float amt = smoothstep(uBand, uBand + 0.34, dy) * uBlur + smoothstep(0.5, 1.0, r) * uBlur * 0.55 + uPull;
        // 16-tap disc blur (golden-angle spiral) = soft round bokeh
        vec3 col = vec3(0.0);
        vec2 px = 1.0 / uRes;
        for (int i = 0; i < 16; i++) {
          float fi = float(i);
          float rr = sqrt((fi + 0.5) / 16.0);
          float a = fi * 2.39996323;
          col += texture2D(tScene, uv + vec2(cos(a), sin(a)) * rr * amt * px).rgb;
        }
        col /= 16.0;
        // lens colour fringing toward the edges
        vec2 ca = c * uAberr * (0.4 + r);
        col.r = mix(col.r, texture2D(tScene, uv + ca).r, 0.55);
        col.b = mix(col.b, texture2D(tScene, uv - ca).b, 0.55);
        // how much colour the picture keeps (0 = black & white)
        float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
        col = mix(vec3(l), col, uSat);
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        // film: grain, vignette, faint projector flicker
        gl_FragColor.rgb += (hash(uv * uRes + fract(uTime * 7.31) * 113.0) - 0.5) * uGrain;
        gl_FragColor.rgb *= 1.0 - uVig * smoothstep(0.32, 1.05, r);
        gl_FragColor.rgb *= 1.0 + uFlicker * sin(uTime * 37.0) * sin(uTime * 11.0);
      }`
  })));
  let entranceAt = 0;

  /* ---------- loop ---------- */
  const resize = () => {
    const w = innerWidth, h = innerHeight;
    renderer.setSize(w, h, false);
    const db = renderer.getDrawingBufferSize(new THREE.Vector2());
    rt.setSize(db.x, db.y);
    LU.uRes.value.copy(db);
    camera.aspect = w / h;
    camera.fov = w < 700 ? 62 : 50;
    camera.updateProjectionMatrix();
    if (!running) renderOnce();
  };

  let lastNow = 0;
  const step = (now) => {
    const time = clock.getElapsedTime();
    U.uTime.value = time;
    // transition progress
    const k = Math.min(1, (now - tStart) / tDur);
    blend(ease(k));
    arc = Math.sin(Math.PI * ease(k)) * (motion === 'full' ? 9 : 0) * (k < 1 ? 1 : 0);
    // ripples drift
    rippleTex.offset.x = time * 0.004; rippleTex.offset.y = time * 0.006;
    // mist drift
    mists.forEach((m) => { m.position.x += m.userData.v * 0.016; if (m.position.x > 520) m.position.x = -520; if (m.position.x < -520) m.position.x = 520; m.lookAt(camera.position.x, m.position.y, camera.position.z); });
    exposure += (exposureTo - exposure) * 0.04;
    const gk = motion === 'full' ? 0.035 : 1;
    gal.focus += (gal.focusTo - gal.focus) * gk;
    gal.pan += (gal.panTo - gal.pan) * (motion === 'full' ? 0.05 : 1);
    gal.pulse *= 0.94;
    renderer.toneMappingExposure = exposure;
    applyState();
    placeCamera(time);
    // rack focus
    const dpr = renderer.getPixelRatio();
    const full = motion === 'full';
    const shotPull = k < 1 ? Math.sin(Math.PI * ease(k)) * 6 : 0;          // focus breathes during scene changes
    const enter = full ? Math.max(0, 1 - (now - entranceAt) / 3600) : 0;    // entrance: from blur into focus
    LU.uBlur.value = 2.6 * dpr * (1 + gal.focus * 2.6);
    LU.uBand.value = 0.22 - gal.focus * 0.1;
    LU.uPull.value = (shotPull * (full ? 1 : 0) + Math.pow(enter, 1.6) * 18 + gal.pulse * 3) * dpr;
    LU.uFlicker.value = full ? 0.012 : 0;
    renderer.setRenderTarget(rt);
    renderer.render(scene, camera);
    renderer.setRenderTarget(null);
    renderer.render(lensScene, lensCam);
    lastNow = now;
  };

  const frame = (now) => {
    if (!running) return;
    if (!document.hidden) step(now);
    requestAnimationFrame(frame);
  };

  const renderOnce = () => {
    if (!started) return;
    tStart = -1e9; // jump to the end of any transition
    exposure = exposureTo;
    step(performance.now());
  };

  const themeExposure = () => (document.documentElement.getAttribute('data-theme') === 'dark' ? 0.62 : 1.0);

  const goTo = (name, dur) => {
    if (!PRESETS[name]) name = 'rain';
    sceneName = name;
    document.documentElement.setAttribute('data-scene', name);
    from = cloneState(cur);
    to = toState(PRESETS[name]);
    tStart = performance.now();
    tDur = motion === 'full' ? dur : 1;
    if (started) dispatchEvent(new CustomEvent('meow:shot', { detail: { name, dur: tDur } }));
    if (!running) renderOnce();
  };

  const startLoop = () => {
    if (!started) return;
    if (motion === 'full') {
      if (!running) { running = true; requestAnimationFrame(frame); }
    } else {
      running = false;
      renderOnce();
    }
  };

  window.MEOW_BG = {
    scenes: Object.keys(PRESETS),
    setScene(name) {
      if (name === sceneName && started) return;
      if (!started) { sceneName = PRESETS[name] ? name : 'rain'; document.documentElement.setAttribute('data-scene', sceneName); return; }
      goTo(name, 3200);
    },
    setMotion(m) { motion = m === 'reduced' ? 'reduced' : 'full'; startLoop(); },
    // called by gallery.js
    focus(on) { gal.focusTo = on ? 1 : 0; if (!running) renderOnce(); },
    pan(x) { gal.panTo = Math.max(-1, Math.min(1, x || 0)); },
    pulse() { if (motion === 'full') gal.pulse = 1; },
    start() {
      if (started) return;
      started = true;
      exposureTo = exposure = themeExposure();
      // entrance: begin high above the valley and glide down into the scene
      cur = toState(PRESETS[sceneName]);
      if (motion === 'full') {
        cur.cam.add(new THREE.Vector3(0, 120, 230));
        cur.look.add(new THREE.Vector3(0, 30, 0));
      }
      resize();
      entranceAt = performance.now();
      goTo(sceneName, 4200);
      canvas.classList.add('on');
      startLoop();
    }
  };

  addEventListener('resize', () => { clearTimeout(resize.t); resize.t = setTimeout(resize, 120); });
  new MutationObserver(() => { exposureTo = themeExposure(); if (!running) renderOnce(); })
    .observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  // Pick up settings that were applied before this file finished loading.
  const st = window.MEOW_STATE;
  if (st) { sceneName = PRESETS[st.scene] ? st.scene : 'rain'; motion = st.motion === 'reduced' ? 'reduced' : 'full'; }
  if (window.MEOW_READY && window.MEOW_STATE) window.MEOW_READY.then(() => window.MEOW_BG.start());
})();
