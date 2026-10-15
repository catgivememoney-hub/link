/* MEOW — quiet 3D nature world (three.js).
   SOURCE FILE. The site loads the bundled /world.js, built with:
     npx esbuild src/world.src.js --bundle --minify --format=iife --outfile=world.js

   One continuous landscape (mountains, lake, forest, sky, weather).
   Changing the scene never cuts: the camera glides and every colour,
   light, fog and weather value cross-fades over ~3 seconds.

   API used by settings.js:  window.MEOW_BG.setScene(name), setMotion('full'|'reduced'), start() */
import * as THREE from 'three';
import { createProps, createRipples, createFootprints, SHOW, SHOW_KEYS, coverMaterial, Parts, CABIN } from './props.js';

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
  renderer.shadowMap.enabled = true;               // only the flashlight casts shadows
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
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
    h += (fbm(x * 0.035 + 17, z * 0.035 + 5, 2) - 0.5) * 3.2 * (0.3 + shore);   // small hummocks underfoot
    // a low grassy point reaching into the lake from the east shore (the cabin stands on it)
    {
      const ax = 205, az = -130, bx = 92, bz = -116;
      const t = Math.min(1, Math.max(0, ((x - ax) * (bx - ax) + (z - az) * (bz - az)) / ((bx - ax) ** 2 + (bz - az) ** 2)));
      const d = Math.hypot(x - (ax + (bx - ax) * t), z - (az + (bz - az) * t));
      const k = smooth(34, 12, d) * smooth(1.04, 0.9, t);
      const top = 4.6 + (fbm(x * 0.05, z * 0.05, 2) - 0.5) * 1.6 - t * 0.6;
      if (k > 0) h = h + (Math.max(h, top) - h) * k;
    }
    // level ground where the cabin stands
    const dc = Math.hypot(x - CABIN.x, z - CABIN.z);
    if (dc < 36) h += (CABIN.y - 0.12 - h) * smooth(36, 24, dc);
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
  const tGeo = new THREE.PlaneGeometry(2200, 1800, 300, 245);
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
      .replace('#include <common>', '#include <common>\nvarying float vH; varying float vSlope; varying vec2 vXZ;')
      .replace('#include <common>', '#include <common>')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvH = position.y; vSlope = 1.0 - normal.y; vXZ = position.xz;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        uniform vec3 uLow, uHigh, uSnow; uniform float uSnowLine; varying float vH; varying float vSlope; varying vec2 vXZ;
        float th(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float tn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(th(i), th(i + vec2(1, 0)), f.x), mix(th(i + vec2(0, 1)), th(i + vec2(1, 1)), f.x), f.y); }`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        vec3 land = mix(uLow, uHigh, smoothstep(-5.0, 120.0, vH));
        float snow = smoothstep(uSnowLine - 12.0, uSnowLine + 12.0, vH) * (1.0 - smoothstep(0.35, 0.7, vSlope));
        // ground detail: grass patches, soil and small stones (shows up under the flashlight)
        float d1 = tn(vXZ * 0.08), d2 = tn(vXZ * 0.45), d3 = tn(vXZ * 2.2);
        land *= 0.82 + 0.22 * d1 + 0.12 * d2 + 0.08 * d3;
        land = mix(land, land * vec3(0.92, 0.88, 0.84), smoothstep(0.35, 0.75, vSlope));   // rocky on slopes
        // snow: soft wind ripples and a faint cool tint in the hollows
        float drift = sin(vXZ.x * 0.55 + vXZ.y * 0.18 + d1 * 7.0) * 0.5 + 0.5;
        vec3 snowCol = uSnow * (0.93 + 0.05 * d2 + 0.04 * drift) * mix(vec3(0.94, 0.97, 1.0), vec3(1.0), d1);
        diffuseColor.rgb = mix(land, snowCol, snow);`)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
        {
          // small bumps of the ground (and drifts in the snow) catch the light up close
          vec3 wpos = vec3(vXZ.x, vH, vXZ.y);
          float dist = length(wpos - cameraPosition);
          float near = smoothstep(260.0, 25.0, dist);
          if (near > 0.0) {
            float e = 0.3;
            #define BMP(p) (tn((p) * 0.35) * 0.9 + tn((p) * 1.6) * 0.3 + snowK * sin((p).x * 0.55 + (p).y * 0.18 + d1 * 7.0) * 0.35)
            float snowK = smoothstep(uSnowLine - 12.0, uSnowLine + 12.0, vH);
            float b0 = BMP(vXZ);
            float bx = BMP(vXZ + vec2(e, 0.0)) - b0;
            float bz = BMP(vXZ + vec2(0.0, e)) - b0;
            vec3 bw = vec3(-bx, 0.0, -bz) / e * 0.55 * near;
            normal = normalize(normal + (viewMatrix * vec4(bw, 0.0)).xyz);
          }
        }`)
      .replace('#include <opaque_fragment>', `
        if (snow > 0.01) {
          // sparkle: tiny ice crystals glint in the light as you move
          vec3 wpos = vec3(vXZ.x, vH, vXZ.y);
          float dist = length(wpos - cameraPosition);
          vec2 cell = floor(vXZ * 2.6);
          float pick = step(0.982, th(cell));
          float star = smoothstep(0.22, 0.0, length(fract(vXZ * 2.6) - 0.5));
          float glint = pow(max(0.0, sin(dot(normalize(cameraPosition - wpos), vec3(37.0, 11.0, 23.0)) * 3.0 + th(cell + 7.0) * 40.0)), 24.0);
          float lit = dot(reflectedLight.directDiffuse, vec3(0.33)) + 0.25 * dot(reflectedLight.indirectDiffuse, vec3(0.33));
          outgoingLight += vec3(pick * star * glint * snow * smoothstep(90.0, 6.0, dist) * lit * 5.0);
        }
        #include <opaque_fragment>`);
  };
  const terrain = new THREE.Mesh(tGeo, tMat);
  terrain.receiveShadow = true;
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

  /* ---------- pine forest ----------
     Each tree: a thin trunk and four tiers of branches with ragged edges,
     lighter tips and soft rounded shading. Every tree gets its own turn,
     size and shade, and they all sway a little in the wind. */
  const treeU = { uTree: { value: 1 }, uTime: U.uTime };
  const pineGeo = (() => {
    const parts = new Parts();
    // trunk: tapered, rough bark, roots flaring into the ground, running up into the crown
    const trunk = new THREE.CylinderGeometry(0.05, 0.16, 2.9, 8, 5, true).translate(0, 1.45, 0);
    {
      const P = trunk.attributes.position, v = new THREE.Vector3();
      for (let i = 0; i < P.count; i++) {
        v.fromBufferAttribute(P, i);
        const a = Math.atan2(v.z, v.x);
        const flare = v.y < 0.4 ? 1 + (0.4 - v.y) * 2.6 * (0.55 + 0.45 * Math.max(0, Math.sin(a * 4 + 1))) : 1;
        const lean = Math.sin(v.y * 1.7) * 0.03;
        P.setXYZ(i, v.x * flare + lean, v.y, v.z * flare);
      }
    }
    parts.add(trunk, {
      color: (v) => { const c = 0.42 + 0.16 * vnoise(v.y * 7, Math.atan2(v.z, v.x) * 2.5); return [c * 1.35, c * 0.98, c * 0.72]; },
      normal: (v, n) => n.set(v.x, 0.12, v.z).normalize()
    });
    // six tiers of branches; each tier has lobes (branch clusters) that droop at the tips,
    // a lighter top and a dark, hollow underside you see when you stand under it
    const TIERS = 6;
    let topY = 0;
    for (let t = 0; t < TIERS; t++) {
      const k = t / (TIERS - 1);
      const r = 1.1 - k * 0.8, h = 1.02 - k * 0.42, base = 0.5 + k * 2.5;
      const lobes = 5 + (t % 3), ph = t * 1.93;
      const shape = (geo, under) => {
        const P = geo.attributes.position, v = new THREE.Vector3();
        for (let i = 0; i < P.count; i++) {
          v.fromBufferAttribute(P, i);
          const rad = Math.hypot(v.x, v.z);
          if (rad < 0.001) continue;
          const a = Math.atan2(v.z, v.x);
          const lobe = Math.pow(0.5 + 0.5 * Math.sin(a * lobes + ph), 2);
          const jag = 0.82 + 0.32 * lobe + 0.06 * Math.sin(a * 17 + t * 3) + 0.04 * Math.sin(a * 31 + t);
          const rim = rad / r;                          // 0 at the stem, 1 at the tips
          const droop = (0.1 + 0.16 * lobe) * r * rim * rim;
          P.setXYZ(i, v.x * jag, v.y - droop - (under ? 0.02 : 0), v.z * jag);
        }
      };
      const cone = new THREE.ConeGeometry(r, h, 14, 3, true);
      shape(cone, false);
      cone.translate(0, base + h / 2, 0);
      parts.add(cone, {
        color: (v) => {
          const up = (v.y - base) / h, rad = Math.min(1, Math.hypot(v.x, v.z) / r);
          const c = 0.55 + 0.5 * rad + 0.22 * up + 0.08 * (hash2(v.x * 9.1, v.z * 7.3 + v.y) - 0.5) + t * 0.03;
          return [c * 0.98, c, c * 0.94];
        },
        normal: (v, n) => { const rad = Math.hypot(v.x, v.z); n.set(v.x, rad * 0.55 + 0.32, v.z).normalize(); },
        // where snow settles: the upper part of each tier, broken up by the branch clusters
        tip: (v) => { const up = (v.y - base) / h; const a = Math.atan2(v.z, v.x); const lobe = 0.5 + 0.5 * Math.sin(a * lobes + ph); return Math.min(1, Math.max(0, (up - 0.08) * 1.5) * (0.45 + 0.55 * lobe) + 0.25 * hash2(v.x * 5.3, v.z * 4.1)); }
      });
      const under = new THREE.ConeGeometry(r * 0.97, h * 0.38, 14, 1, true);
      shape(under, true);
      under.translate(0, base + h * 0.19 - 0.02, 0);
      parts.add(under, {
        flip: true,
        color: (v) => { const rad = Math.min(1, Math.hypot(v.x, v.z) / r); const c = 0.42 + 0.3 * rad; return [c * 0.95, c, c * 0.9]; },
        normal: (v, n) => n.set(v.x * 0.3, -1, v.z * 0.3).normalize()
      });
      topY = base + h;
    }
    // the leader: a thin spike at the very top
    parts.add(new THREE.ConeGeometry(0.05, 0.5, 5, 1, true).translate(0, topY + 0.18, 0), { color: () => [1.0, 1.02, 0.95], tip: () => 0.7 });
    return parts.geometry();
  })();
  // the spots the home views look from stay clear of rocks and grass
  const CAM_SPOTS = [[0, 105], [0, 140], [-38, 112], [24, 78], [0, 92], [30, 102], [0, 125]].map(([x, z]) => ({ x, z, r: 42 }));
  const props = createProps({ scene, heightAt, U, snowColor: TU.uSnow, clear: CAM_SPOTS });
  // trees share the snow cover with everything else (no moss or frost on the needles)
  const treeMat = coverMaterial({ ...props.shared, uMoss: { value: 0 }, uFrost: props.shared.uSnowCover }, treeU.uTree, { sway: 0.022, color: 0x334033, snowBias: -0.3, crisp: true });
  const TREE_N = 1400;
  const treeBase = [];                  // base position, size, turn and shade of every tree
  const WHITE = new THREE.Color(1, 1, 1);
  const trees = new THREE.InstancedMesh(pineGeo, treeMat, TREE_N);
  {
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), pos = new THREE.Vector3();
    const tint = new THREE.Color();
    let n = 0, guard = 0;
    while (n < TREE_N && guard++ < 60000) {
      const x = rnd(-650, 650), z = rnd(-700, 260);
      const h = heightAt(x, z);
      if (h < 3 || h > 85) continue;
      if (fbm(x * 0.02, z * 0.02, 3) < 0.42) continue; // natural clumps
      if (props.blocked(x, z)) continue;               // clearings (cabin, stone circle)
      const k = rnd(2.0, 4.6);
      pos.set(x, h - 0.4, z);
      s.set(k * rnd(0.8, 0.95), k * rnd(1.5, 2.1), k * rnd(0.8, 0.95));
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rnd(0, Math.PI * 2));
      const shade = rnd(0.82, 1.12);
      tint.setRGB(shade, shade * rnd(0.97, 1.03), shade * rnd(0.94, 1.0));
      treeBase.push({ p: pos.clone(), s: s.clone(), q: q.clone(), c: tint.clone() });
      m.compose(pos, q, s); trees.setColorAt(n, tint); trees.setMatrixAt(n++, m);
    }
    trees.count = n;
  }
  trees.castShadow = true;
  trees.receiveShadow = true;
  scene.add(trees);
  props.plant(treeBase, 0);

  /* ---------- grey fruits hanging under the branches ----------
     Built in the same space as a tree and placed with the same matrices,
     so they sway, shake and grow with their tree. About half the trees bear fruit. */
  const fruitGeo = (() => {
    const parts = new Parts();
    const rng = (i, k) => hash2(i * 3.17 + k, i * 1.91 - k * 2.3);
    for (let i = 0; i < 14; i++) {
      const t = i % 5, k = t / 5;
      const r = 1.1 - k * 0.8, base = 0.5 + k * 2.5;
      const a = i * 2.39996 + rng(i, 1) * 0.6, rho = r * (0.62 + 0.28 * rng(i, 2));
      const x = Math.cos(a) * rho, z = Math.sin(a) * rho;
      const stem = 0.14 + 0.16 * rng(i, 3), size = 0.11 + 0.05 * rng(i, 4);
      const top = base - 0.2 * r * (rho / r) * (rho / r);   // just under the drooping branch
      // thin stem, then a round fruit (squashed in height: trees are stretched upward)
      parts.add(new THREE.CylinderGeometry(0.006, 0.008, stem, 4, 1), { m: new THREE.Matrix4().makeTranslation(x, top - stem / 2, z), color: () => [0.35, 0.33, 0.3] });
      const fruit = new THREE.SphereGeometry(size, 10, 7);
      const P = fruit.attributes.position;
      for (let j = 0; j < P.count; j++) { const y = P.getY(j); P.setY(j, (y < 0 ? y * 1.25 : y) * 0.5); }   // a little drop-shaped
      fruit.computeVertexNormals();
      const g = 0.6 + 0.18 * rng(i, 5);
      parts.add(fruit, { m: new THREE.Matrix4().makeTranslation(x, top - stem - size * 0.5, z),
        color: (v) => { const shine = 0.85 + 0.25 * Math.max(0, v.y - (top - stem - size * 0.5)) / size; return [g * shine, g * shine, g * shine * 0.98]; } });
    }
    return parts.geometry();
  })();
  const fruitMat = coverMaterial({ ...props.shared, uMoss: { value: 0 }, uFrost: { value: 0 } }, treeU.uTree, { sway: 0.022, color: 0xd8d8d8 });
  const fruits = new THREE.InstancedMesh(fruitGeo, fruitMat, trees.count);
  const hasFruit = treeBase.map((b, i) => hash2(i * 0.37, 5.1) < 0.5);
  {
    const m = new THREE.Matrix4(), zero = new THREE.Matrix4().makeScale(0, 0, 0);
    treeBase.forEach((b, i) => fruits.setMatrixAt(i, hasFruit[i] ? m.compose(b.p, b.q, b.s) : zero));
    fruits.computeBoundingSphere();
  }
  fruits.castShadow = true;
  scene.add(fruits);
  const ripples = createRipples(scene, U);
  const prints = createFootprints(scene, U);

  /* ---------- hand-held light: flashlight or warm lantern (F) ----------
     No hands are drawn, only the light. The flashlight is held low and to the
     right, its beam lags a little behind your view and trembles slightly; it
     casts shadows and shows as a soft beam in fog. The lantern is a warm flame
     that catches, flickers and swings like a pendulum as you walk. */
  const torch = new THREE.SpotLight(0xffeedd, 0, 280, THREE.MathUtils.degToRad(32), 0.7, 1.35);
  torch.castShadow = false;
  torch.shadow.mapSize.set(1024, 1024);
  torch.shadow.camera.near = 0.5;
  torch.shadow.camera.far = 280;
  torch.shadow.bias = -0.0012;
  torch.shadow.normalBias = 0.06;
  scene.add(torch, torch.target);
  const lamp = new THREE.PointLight(0xffa35a, 0, 120, 1.25);
  scene.add(lamp);

  // the visible beam: a soft, open cone with drifting dust, added on top of the scene
  const beamMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.BackSide, blending: THREE.AdditiveBlending, fog: false,
    uniforms: { uTime: U.uTime, uOpacity: { value: 0 }, uColor: { value: new THREE.Color(0xfff0dc) } },
    vertexShader: /* glsl */`
      varying vec3 vLocal; varying vec3 vN; varying vec3 vView;
      void main() {
        vLocal = position;
        vN = normalize(normalMatrix * normal);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vView = normalize(-mv.xyz);
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
        // seen from behind the lamp a beam is a faint haze, a little stronger toward its edges
        float facing = abs(dot(normalize(vN), normalize(vView)));
        float edge = 0.18 + 0.82 * pow(1.0 - facing, 2.0);
        float fall = pow(1.0 - along, 1.8) * smoothstep(0.02, 0.3, along);     // invisible at the hand, fades with distance
        float dust = 0.75 + 0.5 * noise(vLocal * vec3(9.0, 9.0, 26.0) + vec3(0.0, uTime * 0.25, uTime * 0.1));
        gl_FragColor = vec4(uColor * edge * fall * dust * uOpacity, 1.0);
        #include <colorspace_fragment>
      }`
  });
  const beamGeo = new THREE.ConeGeometry(1, 1, 40, 1, true).translate(0, -0.5, 0).rotateX(-Math.PI / 2);
  const beam = new THREE.Mesh(beamGeo, beamMat);
  beam.frustumCulled = false;
  beam.renderOrder = 5;
  scene.add(beam);

  const light = {
    state: 'off',                                    // F cycles: off → torch → lamp → off
    torch: { on: false, since: -1e9, level: 0 },     // each light fades in/out on its own,
    lamp: { on: false, since: -1e9, level: 0 },      // so switching torch → lamp cross-fades
    level: 0,
    aim: new THREE.Vector3(0, 0, -1),               // where the beam actually points (lags the view)
    swing: 0, swingV: 0, swingZ: 0, swingZV: 0,     // lantern pendulum
    lastVX: 0, lastVZ: 0
  };

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
      low: '#3a4352', high: '#4a5262', snowC: '#8a93a3', snowLine: 160, water: 0, waterC: '#0e1421', waterRough: 0.1,
      sunC: '#d8d4c6', sunDir: V(-0.45, 0.32, -1), sunSize: 0.0022, lightC: '#93a0bf', light: 0.16, lightDir: V(-0.45, 0.5, -0.6),
      hemiSky: '#26304a', hemiGround: '#07090f', hemi: 0.16, treeC: '#2c3a33', trees: 0.85,
      rain: 0, snow: 0, fire: 0.85, stars: 1, aurora: 0, aur1: '#000000', aur2: '#000000', mist: 0.25,
      cam: V(0, 10, 92), look: V(0, 16, -40)
    },
    aurora: {
      sat: 0.65, skyTop: '#03060a', skyHorizon: '#122029', skyBottom: '#070c10', fog: '#0d161b', fogDensity: 0.0034,
      low: '#3b464c', high: '#4c575e', snowC: '#a9b5bb', snowLine: 55, water: 0, waterC: '#0c1418', waterRough: 0.08,
      sunC: '#000000', sunDir: V(0, 0.3, -1), sunSize: 0, lightC: '#8fb1aa', light: 0.14, lightDir: V(0.2, 0.6, -0.8),
      hemiSky: '#1f3a3a', hemiGround: '#05080a', hemi: 0.18, treeC: '#2a3833', trees: 0.6,
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

  for (const name in PRESETS) SHOW_KEYS.forEach((k, i) => { PRESETS[name][k] = SHOW[name][i]; });

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

  let indoorK = 0;   // 1 while you're inside the cabin
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
    treeMat.color.copy(s.treeC); treeU.uTree.value = s.trees; trees.visible = s.trees > 0.01; fruits.visible = trees.visible;
    rainMat.uniforms.uOpacity.value = s.rain * (1 - indoorK); rain.visible = s.rain * (1 - indoorK) > 0.01;
    snow.material.uniforms.uOpacity.value = s.snow * (1 - indoorK); snow.visible = s.snow * (1 - indoorK) > 0.01;
    fireflies.material.uniforms.uOpacity.value = s.fire; fireflies.visible = s.fire > 0.01;
    // mist banks thin out when you walk right into them, and stay outside the cabin
    const indoor = s.pCabin > 0.5 && props.cabin.inside(camera.position.x, camera.position.z) ? 1 : 0;
    indoorK += ((indoor) - indoorK) * 0.12;
    mists.forEach((m) => {
      const d = Math.hypot(m.position.x - camera.position.x, m.position.z - camera.position.z);
      m.material.opacity = s.mist * 0.5 * smooth(12, 80, d) * (1 - indoorK); m.material.color.copy(s.fog); m.visible = s.mist > 0.01 && indoorK < 0.99;
    });
    // colour amount of the whole picture: 0 = black & white, 1 = full (we stay well below)
    LU.uSat.value = s.sat;
  };

  /* ---------- camera: glide + gentle drift + mouse parallax ---------- */
  const pointer = { x: 0, y: 0, sx: 0, sy: 0 };
  addEventListener('pointermove', (e) => {
    pointer.x = (e.clientX / innerWidth) * 2 - 1;
    pointer.y = (e.clientY / innerHeight) * 2 - 1;
  }, { passive: true });

  /* ---------- explore: W A S D / arrow keys walk, drag looks around ---------- */
  const EYE = 7.5;      // eye height above ground or water
  const SPEED = 24;     // walking speed (units per second); Shift runs
  const ex = { px: 0, pz: 0, vx: 0, vz: 0, homing: false, yaw: 0, yawTo: 0, pitch: 0, pitchTo: 0, ground: 0, on: false };
  const keys = new Set();
  const bob = { phase: 0, amp: 0, run: 0, lastStep: 0 };   // walking camera motion
  const ROAM = 70;      // highest ground you can walk on
  // entering the forest: a smooth glide over the water and down between the trees,
  // then you walk on your own
  const jump = { y: 0, v: 0, air: false };    // Space: a small hop
  const PITCH_MIN = -1.1, PITCH_MAX = 0.9;    // how far you can look down / up
  const look = { x: -1, y: -1, inside: false };   // where the mouse is (for turning at the screen edge)
  const fly = { on: false, t0: 0, dur: 1, tx: 0, tz: 0, sy: 0, ty: 0, yaw0: 0, yaw1: 0, lift: 10, y: 0, roll: 0 };
  let frameDt = 1 / 60;
  const fwd = new THREE.Vector3(), flat = new THREE.Vector3(), lookDir = new THREE.Vector3();
  const Y_AXIS = new THREE.Vector3(0, 1, 0);

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
    // explore: walk over the land (staying at eye height), turn and tilt the view
    const away = Math.hypot(ex.px, ex.pz);
    if (away > 0.01 || Math.abs(ex.yaw) > 0.0005 || Math.abs(ex.pitch) > 0.0005) {
      fwd.copy(cur.look).sub(cur.cam);
      const viewDist = fwd.length();
      fwd.normalize();
      const px = camera.position.x + ex.px, pz = camera.position.z + ex.pz;
      // ground under and just around you (so small bumps between terrain points can't poke through)
      let floor = heightAt(px, pz);
      for (let a = 0; a < 6.28; a += 1.57) floor = Math.max(floor, heightAt(px + Math.cos(a) * 4, pz + Math.sin(a) * 4));
      floor = Math.max(floor, water.position.y, props.floorAt(px, pz, cur));
      const ground = floor + EYE;
      ex.ground += (ground - ex.ground) * 0.12;   // glide over bumps instead of jolting…
      ex.ground = Math.max(ex.ground, floor + 3); // …but never sink below the ground
      const hb = smooth(0, 35, away);
      camera.position.set(px, Math.max(camera.position.y * (1 - hb) + ex.ground * hb, hb > 0.5 ? floor + 3 : -1e9), pz);
      if (fly.on) { camera.position.y = Math.max(fly.y, floor + 3); ex.ground = camera.position.y; }
      camera.position.y += jump.y;
      lookDir.copy(fwd).applyAxisAngle(Y_AXIS, ex.yaw);
      lookDir.y = lookDir.y * (1 - hb) - 0.04 * hb + ex.pitch;
      lookDir.normalize();
      lookTmp.copy(camera.position).addScaledVector(lookDir, viewDist);
    } else {
      ex.ground = camera.position.y;
    }
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
    // walking: two soft dips per stride, a gentle side sway and a tiny tilt.
    // The eyes stay steadier than the head, so the look point moves only half as much.
    let roll = fly.on ? fly.roll : 0;
    if (bob.amp > 0.001 && motion === 'full') {
      const s1 = Math.sin(bob.phase), s2 = Math.sin(bob.phase * 2);
      const a = bob.amp * (1 + bob.run * 0.8);
      const up = -Math.abs(s1) * 0.32 * a + 0.16 * a;          // dips at each foot strike
      const side = s1 * 0.16 * a;
      camera.position.y += up;
      dirTmp.copy(lookTmp).sub(camera.position); dirTmp.y = 0; dirTmp.normalize();
      camera.position.x += -dirTmp.z * side; camera.position.z += dirTmp.x * side;
      lookTmp.y += up * 0.5;
      roll += s1 * 0.006 * a + s2 * 0.0015 * a;
    }
    camera.lookAt(lookTmp);
    if (roll) camera.rotateZ(roll);
    const wantFov = (innerWidth < 700 ? 62 : 50) - f * 6 + gal.pulse * 1.5;
    if (Math.abs(camera.fov - wantFov) > 0.01) { camera.fov = wantFov; camera.updateProjectionMatrix(); }
    sky.position.copy(camera.position);
    // weather volumes follow the camera
    rain.position.set(camera.position.x, camera.position.y - 20, camera.position.z);
    snow.position.set(camera.position.x, camera.position.y - 20, camera.position.z);
    fireflies.position.set(cur.look.x * 0.3, water.position.y, cur.cam.z - 90);
  };

  /* ---------- light: switching on/off, hand lag, flame, pendulum ---------- */
  const fwdV = new THREE.Vector3(), rightV = new THREE.Vector3(), upV = new THREE.Vector3(), tmpV = new THREE.Vector3();
  const powerCurve = (mode, on, t) => {
    if (t < 0) return 0;              // scheduled to start a moment later
    if (mode === 'torch') {
      if (on) {                     // LED: quick catch, one tiny stutter, full
        if (t < 0.04) return 0.55; if (t < 0.08) return 0.12; if (t < 0.16) return 0.12 + (t - 0.08) / 0.08 * 0.88; return 1;
      }
      return Math.max(0, 1 - t / 0.12);  // off: quick fade
    }
    if (on) {                       // flame: sputter, dip, then grows warm
      if (t < 0.12) return t / 0.12 * 0.35; if (t < 0.24) return 0.35 - (t - 0.12) / 0.12 * 0.2;
      if (t < 0.7) { const k = (t - 0.24) / 0.46; return 0.15 + (1 - Math.pow(1 - k, 3)) * 0.85; } return 1;
    }
    return Math.max(0, 1 - Math.pow(t / 0.5, 0.8));     // off: dims slowly like a flame going out
  };
  const updateLight = (now, time) => {
    camera.updateMatrixWorld();
    fwdV.set(0, 0, -1).applyQuaternion(camera.quaternion);
    rightV.set(1, 0, 0).applyQuaternion(camera.quaternion);
    upV.set(0, 1, 0).applyQuaternion(camera.quaternion);
    const k = 1 - Math.pow(1 - 0.16, frameDt * 60);
    const fog = Math.min(1.6, scene.fog.density / 0.004);   // beams show more in mist and rain
    const rainy = rainMat.uniforms.uOpacity.value;

    /* --- flashlight --- */
    const tT = (now - light.torch.since) / 1000;
    const tLvl = powerCurve('torch', light.torch.on, tT) * (light.torch.on && tT > 0.16 ? 0.985 + 0.015 * Math.sin(time * 40) * Math.sin(time * 7) : 1);
    light.torch.level = tLvl;
    if (tLvl > 0.001) {
      // held low and to the right; the hand moves a little against the head bob
      const handBob = bob.amp * (motion === 'full' ? 1 : 0);
      torch.position.copy(camera.position)
        .addScaledVector(rightV, 0.75).addScaledVector(upV, -0.6 - Math.sin(bob.phase) * 0.05 * handBob).addScaledVector(fwdV, 0.4);
      // the beam follows the view with a small delay, plus a faint tremor
      tmpV.copy(fwdV);
      if (motion === 'full') {
        tmpV.addScaledVector(rightV, Math.sin(time * 1.7) * 0.004 + Math.sin(time * 4.3) * 0.002 + Math.sin(bob.phase) * 0.01 * handBob);
        tmpV.addScaledVector(upV, Math.sin(time * 2.1 + 1) * 0.004 + Math.sin(bob.phase * 2) * 0.008 * handBob);
      }
      light.aim.lerp(tmpV.normalize(), motion === 'full' ? k : 1).normalize();
      torch.target.position.copy(torch.position).addScaledVector(light.aim, 40);
      // visible beam
      const len = 90;
      const r = Math.tan(torch.angle) * len;
      beam.position.copy(torch.position);
      beam.lookAt(torch.target.position);
      beam.scale.set(r, r, len);
    }
    torch.intensity = tLvl * 520;
    torch.castShadow = tLvl > 0.02;
    beamMat.uniforms.uOpacity.value = tLvl * (0.018 + 0.03 * fog + 0.035 * rainy);
    beam.visible = tLvl > 0.01;

    /* --- warm lantern --- */
    const lT = (now - light.lamp.since) / 1000;
    const flick = light.lamp.on && lT > 0.7
      ? 0.88 + 0.07 * Math.sin(time * 9.3 + Math.sin(time * 3.1) * 2) + 0.04 * Math.sin(time * 23.7) + 0.02 * Math.sin(time * 41)
      : 1;
    const lLvl = powerCurve('lamp', light.lamp.on, lT) * flick;
    light.lamp.level = lLvl;
    // pendulum: sways when you speed up, slow down or turn, then settles
    if (motion === 'full') {
      const ax = (ex.vx - light.lastVX) / Math.max(frameDt, 0.001), az = (ex.vz - light.lastVZ) / Math.max(frameDt, 0.001);
      const side = -(ax * fwdV.z - az * fwdV.x) * 0.0012, fore = -(ax * fwdV.x + az * fwdV.z) * 0.0012;
      const dt = frameDt;
      light.swingV += (-light.swing * 14 - light.swingV * 1.8 + side) * dt;
      light.swing += light.swingV * dt;
      light.swingZV += (-light.swingZ * 14 - light.swingZV * 1.8 + fore + Math.sin(bob.phase * 2) * 0.6 * bob.amp) * dt;
      light.swingZ += light.swingZV * dt;
    }
    light.lastVX = ex.vx; light.lastVZ = ex.vz;
    lamp.position.copy(camera.position)
      .addScaledVector(rightV, 1.1 + Math.sin(light.swing) * 1.4)
      .addScaledVector(upV, -2.4 + (1 - Math.cos(light.swing)) * 1.4)
      .addScaledVector(fwdV, 2.2 + Math.sin(light.swingZ) * 1.0);
    if (motion === 'full' && light.lamp.on) lamp.position.y += Math.sin(time * 6.1) * 0.03;   // tiny flame jitter
    lamp.intensity = lLvl * 900;

    light.level = Math.max(tLvl, lLvl);
    root.classList.toggle('light-on', light.level > 0.05);
    root.classList.toggle('lamp-on', lLvl > 0.05);
  };
  // F: off → flashlight → warm lantern → off
  const toggleLight = () => {
    const now = performance.now();
    const snd = window.MEOW_SOUND;
    if (light.state === 'off') {
      light.state = 'torch';
      light.torch.on = true; light.torch.since = now;
      light.aim.copy(fwdV.lengthSq() ? fwdV : light.aim);
      if (snd && snd.click) snd.click(true);
    } else if (light.state === 'torch') {
      light.state = 'lamp';
      light.torch.on = false; light.torch.since = now;
      light.lamp.on = true; light.lamp.since = now + 120;        // the flame catches as the beam fades
      if (snd && snd.click) snd.click(false);
      if (snd && snd.ignite) setTimeout(() => snd.ignite(), 120);
    } else {
      light.state = 'off';
      light.lamp.on = false; light.lamp.since = now;
      if (snd && snd.puff) snd.puff();
    }
    if (snd && snd.fire) snd.fire(light.state === 'lamp');
    if (!running && started) { running = true; tempRun = true; requestAnimationFrame(frame); }
    dispatchEvent(new CustomEvent('meow:light', { detail: { state: light.state } }));
  };

  /* ---------- the glide into the forest ---------- */
  const freeAt = (x, z, pad) => {
    if (trees.visible && treeU.uTree.value > 0.5) {
      for (let i = 0; i < treeBase.length; i++) {
        const b = treeBase[i], dx = b.p.x - x, dz = b.p.z - z, r = b.s.x * 0.75 + 1.2 + pad;
        if (dx * dx + dz * dz < r * r) return false;
      }
    }
    return !props.blockedAt(x, z, pad, cur);
  };
  const startFly = () => {
    const sx = cur.cam.x, sz = cur.cam.z;
    const fx = cur.look.x - cur.cam.x, fz = cur.look.z - cur.cam.z, fl = Math.hypot(fx, fz) || 1;
    const baseAng = Math.atan2(fz / fl, fx / fl);
    const treesOn = trees.visible && treeU.uTree.value > 0.5;
    const wy = water.position.y;
    const cands = [];
    for (let a = -0.7; a <= 0.701; a += 0.05) for (let d = 70; d <= 380; d += 10) {
      const ang = baseAng + a, x = sx + Math.cos(ang) * d, z = sz + Math.sin(ang) * d;
      const h = heightAt(x, z);
      if (h < wy + 1.5 || h > ROAM - 6) continue;
      let count = 0;
      if (treesOn) for (let i = 0; i < treeBase.length; i++) { const dx = treeBase[i].p.x - x, dz = treeBase[i].p.z - z; if (dx * dx + dz * dz < 1600) count++; }
      const score = (treesOn ? Math.min(count, 22) * 2 : 30) - Math.abs(a) * 34 - d * 0.045;
      cands.push({ x, z, a, d, score });
    }
    cands.sort((p, q) => q.score - p.score);
    let pick = null;
    for (const c of cands.slice(0, 60)) {
      if (!freeAt(c.x, c.z, 4)) continue;
      // the last stretch is low among the trees: it must be clear
      let ok = true;
      const ux = (sx - c.x) / c.d, uz = (sz - c.z) / c.d;
      for (let t = 2; t < 70 && ok; t += 2.5) ok = freeAt(c.x + ux * t, c.z + uz * t, 1.5);
      // and room to keep walking forward once we land
      for (let t = 3; t < 30 && ok; t += 3) ok = freeAt(c.x - ux * t, c.z - uz * t, 1);
      if (ok) { pick = c; break; }
    }
    if (!pick) pick = { x: sx + Math.cos(baseAng) * 60, z: sz + Math.sin(baseAng) * 60, a: 0, d: 60 };
    const full = motion === 'full';
    fly.on = true; fly.t0 = performance.now();
    fly.dur = full ? 2300 + pick.d * 5.2 : 700;
    fly.sx = ex.px; fly.sz = ex.pz;
    fly.tx = pick.x - sx; fly.tz = pick.z - sz;
    fly.sy = camera.position.y;
    fly.ty = Math.max(heightAt(pick.x, pick.z), wy) + EYE;
    fly.yaw0 = ex.yaw; fly.yaw1 = -pick.a;
    fly.lift = full ? 9 + pick.d * 0.02 : 0;
    ex.vx = ex.vz = 0; ex.homing = false;
    if (!running && started) { running = true; tempRun = true; requestAnimationFrame(frame); }
  };
  const smoother = (x) => { x = Math.min(1, Math.max(0, x)); return x * x * x * (x * (x * 6 - 15) + 10); };
  const updateFly = (now) => {
    const k = Math.min(1, (now - fly.t0) / fly.dur);
    const e = smoother(k);
    ex.px = fly.sx + (fly.tx - fly.sx) * e;
    ex.pz = fly.sz + (fly.tz - fly.sz) * e;
    ex.vx = ex.vz = 0;
    // turn toward where we're going early, so we glide in looking ahead
    const turn = smoother(k / 0.55);
    ex.yaw = ex.yawTo = fly.yaw0 + (fly.yaw1 - fly.yaw0) * turn;
    ex.pitch = ex.pitchTo = -0.07 * Math.sin(Math.PI * k) * (1 - k * 0.5);
    // height: a gentle rise, then sink down between the trees to eye level
    const wx = cur.cam.x + ex.px, wz = cur.cam.z + ex.pz;
    const down = smoother((k - 0.3) / 0.7);
    let y = fly.sy + (fly.ty - fly.sy) * down + fly.lift * Math.pow(Math.sin(Math.PI * Math.min(1, k * 1.15)), 1.4);
    y = Math.max(y, Math.max(heightAt(wx, wz), water.position.y) + 4);
    fly.y = y;
    fly.roll = (fly.yaw1 - fly.yaw0) * 0.22 * Math.sin(Math.PI * Math.min(1, k * 1.3));
    if (k >= 1) { fly.on = false; fly.roll = 0; ex.ground = fly.ty; }
  };

  /* ---------- input for exploring and for the trees ---------- */
  const root = document.documentElement;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const busy = () => !started || root.classList.contains('locked') || gal.focusTo > 0;
  const overUI = (t) => t && t.closest && t.closest('.sidebar, .modal, .gallery, .top, .composer, .tools, .tree-card, .home-btn, .backdrop, .walk-hint, input, button, a, label');
  const wake = () => { if (!running) renderOnce(); };

  // keyboard walking: W/↑ forward, S/↓ back, A/← left, D/→ right, Shift to run
  const MOVE_KEYS = ['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ShiftLeft', 'ShiftRight'];
  const typing = (t) => t && (/INPUT|TEXTAREA|SELECT/.test(t.tagName) || t.isContentEditable);
  let tempRun = false;
  addEventListener('keydown', (e) => {
    if (!MOVE_KEYS.includes(e.code) || typing(e.target) || busy() || e.metaKey || e.ctrlKey || e.altKey) return;
    if (document.querySelector('.modal:not([hidden])')) return;
    if (!e.code.startsWith('Shift')) e.preventDefault();
    keys.add(e.code);
    ex.homing = false;
    if (!fly.on && !e.code.startsWith('Shift') && Math.hypot(ex.px, ex.pz) < 3) startFly();
    if (!running && started) { running = true; tempRun = true; requestAnimationFrame(frame); }
  });
  addEventListener('keyup', (e) => keys.delete(e.code));
  // F: flashlight / lantern on and off
  addEventListener('keydown', (e) => {
    if (e.code !== 'KeyF' || e.repeat || typing(e.target) || !started || root.classList.contains('locked')) return;
    if (document.querySelector('.modal:not([hidden])') || e.metaKey || e.ctrlKey || e.altKey) return;
    e.preventDefault();
    toggleLight();
  });
  addEventListener('blur', () => { keys.clear(); look.inside = false; door.hold = 0; door.key = false; });
  document.addEventListener('mouseleave', () => { look.inside = false; });
  // Space: jump (only out in the world)
  addEventListener('keydown', (e) => {
    if (e.code !== 'Space' || typing(e.target) || busy() || !ex.on || fly.on) return;
    if (document.querySelector('.modal:not([hidden])')) return;
    e.preventDefault();
    if (e.repeat || jump.air) return;
    jump.v = 15.5; jump.air = true;
    if (!running && started) { running = true; tempRun = true; requestAnimationFrame(frame); }
  });
  // E (hold for one second): open / close the cabin door when you're next to it
  const door = { hold: 0, key: false, done: false };
  addEventListener('keydown', (e) => {
    if (e.code !== 'KeyE' || typing(e.target) || busy() || !ex.on || e.repeat) return;
    door.key = true; door.done = false;
    if (!running && started) { running = true; tempRun = true; requestAnimationFrame(frame); }
  });
  addEventListener('keyup', (e) => { if (e.code === 'KeyE') { door.key = false; door.hold = 0; } });
  const actHint = document.createElement('div');
  actHint.className = 'act-hint';
  actHint.innerHTML = '<svg viewBox="0 0 40 40" aria-hidden="true"><circle class="trk" cx="20" cy="20" r="16"/><circle class="bar" cx="20" cy="20" r="16"/></svg><kbd>E</kbd><span></span>';
  document.body.appendChild(actHint);
  const actBar = actHint.querySelector('.bar'), actTxt = actHint.querySelector('span');
  const t$ = (k, f) => (window.MEOW_I18N ? window.MEOW_I18N.t(k) : f);
  let actShown = false;
  const updateDoor = (dt, now) => {
    const cab = props.cabin.door;
    const px = camera.position.x, pz = camera.position.z;
    const near = ex.on && !fly.on && cur.pCabin > 0.5 && cab.near(px, pz);
    if (near !== actShown) { actShown = near; actHint.classList.toggle('show', near); }
    if (near) actTxt.textContent = cab.open ? t$('doorClose', 'Hold E to close') : t$('doorOpen', 'Hold E to open');
    if (near && door.key && !door.done && cab.canToggle(px, pz)) door.hold = Math.min(1, door.hold + dt);
    else if (!door.key) door.hold = 0;
    actBar.style.strokeDashoffset = String(100.5 * (1 - door.hold));
    if (door.hold >= 1 && !door.done) {
      door.done = true; door.hold = 0;
      const opened = cab.toggle(now);
      if (window.MEOW_SOUND && window.MEOW_SOUND.door) window.MEOW_SOUND.door(opened);
    }
  };

  // right mouse button (or a finger on touch screens) drags to look around;
  // left click is for trees and links
  let drag = null, press = null;
  const hover = { x: 0, y: 0, pending: false, id: -1 };
  addEventListener('pointerdown', (e) => {
    if (busy() || overUI(e.target) || fly.on) return;
    const look = e.button === 2 || (e.pointerType === 'touch' && e.button === 0);
    if (look) {
      drag = { x: e.clientX, y: e.clientY, yaw: ex.yawTo, pitch: ex.pitchTo, moved: false, touch: e.pointerType === 'touch' };
      e.preventDefault(); // dragging to look must not select text or images
    } else if (e.button === 0) {
      press = { x: e.clientX, y: e.clientY };
      e.preventDefault();
    }
  });
  // no right-click menu over the 3D world (right button looks around)
  addEventListener('contextmenu', (e) => { if (started && !overUI(e.target) && !root.classList.contains('locked')) e.preventDefault(); });
  addEventListener('pointermove', (e) => {
    if (drag) {
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (Math.hypot(dx, dy) > 5) drag.moved = true;
      ex.yawTo = drag.yaw + dx * 0.0035;
      ex.pitchTo = clamp(drag.pitch + dy * 0.0025, PITCH_MIN, PITCH_MAX);
      root.classList.add('looking');
      wake();
      return;
    }
    look.x = e.clientX; look.y = e.clientY; look.inside = true; look.ui = !!overUI(e.target);
    if (busy() || overUI(e.target)) { if (hover.id >= 0) setHover(-1); return; }
    // in the forest, just moving the mouse / one finger on the trackpad turns the view:
    // slide right → turn left, slide up → look down (like pulling the world along)
    if (ex.on && !fly.on && e.pointerType !== 'touch' && (e.movementX || e.movementY)) {
      ex.yawTo += e.movementX * 0.0028;
      ex.pitchTo = clamp(ex.pitchTo + e.movementY * 0.0022, PITCH_MIN, PITCH_MAX);
      wake();
    }
    hover.x = e.clientX; hover.y = e.clientY; hover.pending = true;
  }, { passive: true });
  addEventListener('pointerup', (e) => {
    let wasClick = false;
    if (drag) {
      wasClick = drag.touch && !drag.moved;           // a tap on a touch screen is a click
      drag = null;
      root.classList.remove('looking');
    } else if (press && e.button === 0) {
      wasClick = Math.hypot(e.clientX - press.x, e.clientY - press.y) < 8;
    }
    press = null;
    if (wasClick) {
      // use the tree that is already lit up under the mouse, so label and click always match
      const id = hover.id >= 0 ? hover.id : pick(e.clientX, e.clientY);
      if (id >= 0) {
        shakes.set(id, performance.now());
        dispatchEvent(new CustomEvent('meow:tree', { detail: { type: 'click', id, x: e.clientX, y: e.clientY } }));
        wake();
      } else {
        dispatchEvent(new CustomEvent('meow:tree', { detail: { type: 'miss' } }));
      }
    }
  });

  // which tree is under the mouse?
  const ray = new THREE.Raycaster();
  ray.far = 900;
  const ndc = new THREE.Vector2();
  const pick = (cx, cy) => {
    if (!trees.visible || treeU.uTree.value < 0.5) return -1;
    ndc.set((cx / innerWidth) * 2 - 1, -(cy / innerHeight) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const hit = ray.intersectObjects([trees, fruits], false)[0];   // a fruit counts as its tree
    return hit ? hit.instanceId : -1;
  };
  const GLOW = new THREE.Color(2.6, 2.6, 2.4);
  const setHover = (id) => {
    if (id === hover.id) return;
    if (hover.id >= 0) trees.setColorAt(hover.id, treeBase[hover.id] ? treeBase[hover.id].c : WHITE);
    hover.id = id;
    if (id >= 0) trees.setColorAt(id, GLOW);
    trees.instanceColor.needsUpdate = true;
    root.classList.toggle('on-tree', id >= 0);
    dispatchEvent(new CustomEvent('meow:tree', { detail: id >= 0 ? { type: 'hover', id, x: hover.x, y: hover.y } : { type: 'leave' } }));
    wake();
  };

  // a clicked tree sways and settles
  const shakes = new Map();
  const swayQ = new THREE.Quaternion(), swayE = new THREE.Euler(), swayM = new THREE.Matrix4();
  const updateShakes = (now) => {
    if (!shakes.size) return;
    shakes.forEach((start, id) => {
      const t = (now - start) / 1000;
      const b = treeBase[id];
      if (!b) { shakes.delete(id); return; }
      const a = t > 2.6 ? 0 : Math.sin(t * 15) * Math.exp(-t * 2.1) * 0.17;
      swayE.set(a * 0.6, 0, a);
      swayQ.setFromEuler(swayE).multiply(b.q);
      swayM.compose(b.p, swayQ, b.s);
      trees.setMatrixAt(id, swayM);
      if (hasFruit[id]) fruits.setMatrixAt(id, swayM);
      if (t > 2.6) shakes.delete(id);
    });
    trees.instanceMatrix.needsUpdate = true;
    fruits.instanceMatrix.needsUpdate = true;
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
    // explore smoothing; drift back to centre at home
    const fullMo = motion === 'full';
    // time-based smoothing: same feel at any frame rate
    const fdt = Math.min(0.1, Math.max(0.001, (now - (lastNow || now)) / 1000)) * 60;
    const k60 = (k) => (fullMo ? 1 - Math.pow(1 - k, fdt) : 1);
    // walking: keys set where we want to go; velocity eases toward it
    {
      const dtS = fdt / 60;
      const fx = cur.look.x - cur.cam.x, fz = cur.look.z - cur.cam.z;
      const fl = Math.hypot(fx, fz) || 1;
      const c = Math.cos(ex.yaw), sn = Math.sin(ex.yaw);
      // facing direction on the ground (turned by how far you've looked left/right)
      const hx = (fx / fl) * c + (fz / fl) * sn, hz = -(fx / fl) * sn + (fz / fl) * c;
      const ctl = fly.on ? 0 : 1;
      const f = ctl * ((keys.has('KeyW') || keys.has('ArrowUp') ? 1 : 0) - (keys.has('KeyS') || keys.has('ArrowDown') ? 1 : 0));
      const r = ctl * ((keys.has('KeyD') || keys.has('ArrowRight') ? 1 : 0) - (keys.has('KeyA') || keys.has('ArrowLeft') ? 1 : 0));
      let wx = hx * f - hz * r, wz = hz * f + hx * r;
      const wl = Math.hypot(wx, wz);
      const sp = SPEED * (keys.has('ShiftLeft') || keys.has('ShiftRight') ? 2.4 : 1);
      if (wl > 0) { wx = (wx / wl) * sp; wz = (wz / wl) * sp; }
      const acc = 1 - Math.pow(1 - (wl > 0 ? 0.08 : 0.12), fdt);
      ex.vx += (wx - ex.vx) * acc; ex.vz += (wz - ex.vz) * acc;
      // stay in the valley: don't climb above the tree line or wander off the map
      const tryMove = (nx, nz) => {
        const wx2 = cur.cam.x + nx, wz2 = cur.cam.z + nz;
        if (!(Math.abs(wx2) < 820 && wz2 > -900 && wz2 < 420 && heightAt(wx2, wz2) < ROAM)) return false;
        // trees are solid: keep a little distance from every trunk
        if (trees.visible && treeU.uTree.value > 0.5) {
          for (let i = 0; i < treeBase.length; i++) {
            const b = treeBase[i], dx = b.p.x - wx2, dz = b.p.z - wz2, rr = b.s.x * 0.75 + 1.2;
            if (dx * dx + dz * dz < rr * rr) return false;
          }
        }
        if (props.blockedAt(wx2, wz2, 0, cur)) return false;
        return true;
      };
      const nx = ex.px + ex.vx * dtS, nz = ex.pz + ex.vz * dtS;
      if (fly.on) updateFly(now);
      else if (tryMove(nx, nz)) { ex.px = nx; ex.pz = nz; }
      else if (tryMove(nx, ex.pz)) { ex.px = nx; ex.vz *= 0.5; }      // slide along the slope
      else if (tryMove(ex.px, nz)) { ex.pz = nz; ex.vx *= 0.5; }
      else { ex.vx *= 0.3; ex.vz *= 0.3; }
      if (ex.homing) {                       // back button: glide home
        const k = 1 - Math.pow(1 - 0.06, fdt);
        ex.px -= ex.px * k; ex.pz -= ex.pz * k; ex.vx = ex.vz = 0;
        if (Math.hypot(ex.px, ex.pz) < 0.05) { ex.px = ex.pz = 0; ex.homing = false; }
      }
      const lightBusy = (now - Math.max(light.torch.since, light.lamp.since)) < 1200;
      if (tempRun && !keys.size && Math.hypot(ex.vx, ex.vz) < 0.05 && !ex.homing && !lightBusy && !fly.on && !jump.air && !door.key) { tempRun = false; running = motion === 'full'; }
    }
    frameDt = fdt / 60;
    // jump: up, gravity, land (with a soft thump and a little dip of the head)
    if (jump.air) {
      jump.v -= 44 * frameDt;
      jump.y += jump.v * frameDt;
      if (jump.y <= 0) {
        jump.y = 0; jump.air = false;
        bob.amp = Math.min(1.4, bob.amp + 0.5);
        if (window.MEOW_SOUND && window.MEOW_SOUND.step) {
          const x = camera.position.x, z = camera.position.z, gh = heightAt(x, z);
          const surf = props.floorAt(x, z, cur) > gh + 0.2 ? 'wood' : gh < water.position.y + 0.6 ? 'water' : (sceneName === 'snow' || gh > TU.uSnowLine.value - 6) ? 'snow' : 'grass';
          window.MEOW_SOUND.step(surf, 1.5); setTimeout(() => window.MEOW_SOUND.step(surf, 1.1), 70);
        }
      }
    }
    // keep turning while the mouse rests at the left / right edge of the screen
    if (ex.on && !fly.on && look.inside && !look.ui && !drag && !busy() && motion === 'full' && look.y > innerHeight * 0.15 && look.y < innerHeight * 0.85) {
      const edge = Math.max(30, innerWidth * 0.04);
      if (look.x > innerWidth - edge) ex.yawTo += 1.1 * frameDt * (look.x - (innerWidth - edge)) / edge;
      else if (look.x >= 0 && look.x < edge) ex.yawTo -= 1.1 * frameDt * (edge - look.x) / edge;
    }
    updateDoor(Math.min(0.25, (now - (lastNow || now)) / 1000), now);   // real time, so the 1 s hold is 1 s
    {
      const sp = Math.hypot(ex.vx, ex.vz);
      const running = (keys.has('ShiftLeft') || keys.has('ShiftRight')) ? 1 : 0;
      bob.run += (running - bob.run) * (1 - Math.pow(0.9, fdt));
      const want = Math.min(1.2, sp / SPEED);                 // 0 standing → 1 walking → more when running
      bob.amp += (want - bob.amp) * (1 - Math.pow(0.88, fdt)); // settle smoothly when you stop
      // steps per second grow with speed: ~0.95 strides/s walking, ~1.45 running
      bob.phase += Math.PI * 2 * (0.95 + 0.5 * bob.run) * Math.min(1, sp / SPEED + 0.15) * frameDt * (sp > 0.3 ? 1 : 0.4);
      // footsteps: one at each foot strike, the sound depends on what you're walking on
      const stepNo = Math.floor(bob.phase / Math.PI);
      if (stepNo !== bob.lastStep) {
        bob.lastStep = stepNo;
        if (sp > SPEED * 0.25 && window.MEOW_SOUND && window.MEOW_SOUND.step) {
          const wx = camera.position.x, wz = camera.position.z, gh = heightAt(wx, wz);
          const surface = props.floorAt(wx, wz, cur) > gh + 0.2 ? 'wood' : gh < water.position.y + 0.6 ? 'water' : (sceneName === 'snow' || gh > TU.uSnowLine.value - 6) ? 'snow' : 'grass';
          window.MEOW_SOUND.step(surface, Math.min(1.5, sp / SPEED));
        }
        const gh2 = heightAt(camera.position.x, camera.position.z);
        if (sp > SPEED * 0.25 && gh2 > water.position.y + 0.6 && (sceneName === 'snow' || gh2 > TU.uSnowLine.value + 4)) {
          const x = camera.position.x, z = camera.position.z, e = 1.5;
          const n = new THREE.Vector3(heightAt(x - e, z) - heightAt(x + e, z), 2 * e, heightAt(x, z - e) - heightAt(x, z + e)).normalize();
          prints.place(x, heightAt(x, z), z, Math.atan2(-ex.vx, -ex.vz), n);
        }
      }
    }
    const away = Math.hypot(ex.px, ex.pz);
    if (!drag && away < 2 && !fly.on) { const rr = Math.pow(0.96, fdt); ex.yawTo *= rr; ex.pitchTo *= rr; }
    ex.yaw += (ex.yawTo - ex.yaw) * k60(0.12);
    ex.pitch += (ex.pitchTo - ex.pitch) * k60(0.12);
    const exploring = away > 3;
    if (exploring !== ex.on) { ex.on = exploring; root.classList.toggle('exploring', exploring); }
    updateShakes(now);
    renderer.toneMappingExposure = exposure;
    applyState();
    placeCamera(time);
    props.update(cur, time, camera.position, water.position.y);
    ripples.update(cur.pRipples, camera.position, water.position.y);
    prints.update(Math.min(1, Math.max(0, (100 - cur.snowLine) / 80)));
    updateLight(now, time);
    if (hover.pending) { hover.pending = false; setHover(pick(hover.x, hover.y)); }
    // rack focus
    const dpr = renderer.getPixelRatio();
    const full = motion === 'full';
    const shotPull = k < 1 ? Math.sin(Math.PI * ease(k)) * 6 : 0;          // focus breathes during scene changes
    const enter = full ? Math.max(0, 1 - (now - entranceAt) / 3600) : 0;    // entrance: from blur into focus
    const walk = smooth(0, 60, Math.hypot(ex.px, ex.pz));   // in the forest everything near you stays sharp
    LU.uBlur.value = 2.6 * dpr * (1 + gal.focus * 2.6) * (1 - walk * 0.7);
    LU.uBand.value = 0.22 - gal.focus * 0.1 + walk * 0.12;
    LU.uPull.value = (shotPull * (full ? 1 : 0) + Math.pow(enter, 1.6) * 18 + gal.pulse * 3) * dpr;
    LU.uFlicker.value = full ? 0.012 : 0;
    renderer.setRenderTarget(rt);
    renderer.render(scene, camera);
    renderer.setRenderTarget(null);
    renderer.render(lensScene, lensCam);
    lastNow = now;
  };

  // if this computer struggles, draw fewer pixels (keeps walking smooth)
  const perf = { last: 0, sum: 0, n: 0, level: 0, since: 0 };
  const PR = [Math.min(window.devicePixelRatio || 1, 1.5), 1.1, 0.85, 0.7];
  const watchPerf = (now) => {
    if (!perf.since) perf.since = now;
    const dt = now - (perf.last || now); perf.last = now;
    if (now - perf.since < 5000 || dt > 250 || document.hidden) return;   // skip the entrance and tab switches
    perf.sum += dt; perf.n++;
    if (perf.n >= 90) {
      const avg = perf.sum / perf.n; perf.sum = perf.n = 0;
      if (avg > 30 && perf.level < PR.length - 1 && PR[perf.level + 1] < renderer.getPixelRatio()) {
        perf.level++; renderer.setPixelRatio(PR[perf.level]); resize();
      }
    }
  };
  const frame = (now) => {
    if (!running) return;
    if (!document.hidden) { step(now); watchPerf(now); }
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
    focus(on) { gal.focusTo = on ? 1 : 0; if (on) { fly.on = false; ex.homing = true; ex.yawTo = ex.pitchTo = 0; } if (!running) renderOnce(); },
    toggleLight() { toggleLight(); },
    // for testing: stand at an exact spot (world x, z)
    _standAt(x, z) { ex.px = x - cur.cam.x; ex.pz = z - cur.cam.z; ex.vx = ex.vz = 0; if (!running) renderOnce(); },
    _look(x, z) {
      const bx = cur.look.x - cur.cam.x, bz = cur.look.z - cur.cam.z;
      const px = cur.cam.x + ex.px, pz = cur.cam.z + ex.pz;
      let y = Math.atan2(bz, bx) - Math.atan2(z - pz, x - px);
      y = Math.atan2(Math.sin(y), Math.cos(y));
      ex.yaw = ex.yawTo = y; if (!running) renderOnce();
    },
    _printAt(x, z, yaw) { prints.place(x, heightAt(x, z), z, yaw, new THREE.Vector3(0, 1, 0)); },
    _toggleDoor() { props.cabin.door.toggle(performance.now()); },
    _pos() { return { x: cur.cam.x + ex.px, z: cur.cam.z + ex.pz, fly: fly.on }; },
    _sites() { return { cabin: props.cabinAt, circle: props.circleAt }; },
    _nearTree(i, d = 16) { const b = treeBase[i % treeBase.length]; if (b) this._standAt(b.p.x, b.p.z + d); },
    // back to the home view (used by the back button)
    enter() { if (started && !fly.on && !busy() && Math.hypot(ex.px, ex.pz) < 3) startFly(); },
    home() {
      const turns = Math.round(ex.yaw / (Math.PI * 2)) * Math.PI * 2; ex.yaw -= turns; ex.yawTo -= turns;
      fly.on = false; ex.homing = true; ex.yawTo = 0; ex.pitchTo = 0; keys.clear();
      if (!running && started) { running = true; tempRun = true; requestAnimationFrame(frame); }
    },
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

  { const hint = document.querySelector('.walk-hint'); if (hint) hint.addEventListener('click', () => window.MEOW_BG.enter()); }
  addEventListener('resize', () => { clearTimeout(resize.t); resize.t = setTimeout(resize, 120); });
  new MutationObserver(() => { exposureTo = themeExposure(); if (!running) renderOnce(); })
    .observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  // Pick up settings that were applied before this file finished loading.
  const st = window.MEOW_STATE;
  if (st) { sceneName = PRESETS[st.scene] ? st.scene : 'rain'; motion = st.motion === 'reduced' ? 'reduced' : 'full'; }
  if (window.MEOW_READY && window.MEOW_STATE) window.MEOW_READY.then(() => window.MEOW_BG.start());
})();
