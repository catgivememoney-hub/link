/* MEOW — the land and the water.
   heightAt(x, z) is the one source of truth for the ground: the terrain mesh,
   tree placement, walking and the cabin site all use it. */
import * as THREE from 'three';
import { CABIN } from './cabin.js';
import { STUDY } from './study.js';

/* ---------- small deterministic noise ---------- */
export const hash2 = (x, z) => { const s = Math.sin(x * 127.1 + z * 311.7) * 43758.5453; return s - Math.floor(s); };
export const vnoise = (x, z) => {
  const xi = Math.floor(x), zi = Math.floor(z), xf = x - xi, zf = z - zi;
  const u = xf * xf * (3 - 2 * xf), v = zf * zf * (3 - 2 * zf);
  const a = hash2(xi, zi), b = hash2(xi + 1, zi), c = hash2(xi, zi + 1), d = hash2(xi + 1, zi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
};
export const fbm = (x, z, oct = 5) => { let s = 0, a = 0.5, f = 1; for (let i = 0; i < oct; i++) { s += a * vnoise(x * f, z * f); f *= 2.03; a *= 0.5; } return s; };
const ridged = (x, z) => { let s = 0, a = 0.5, f = 1; for (let i = 0; i < 5; i++) { s += a * (1 - Math.abs(vnoise(x * f, z * f) * 2 - 1)); f *= 2.1; a *= 0.5; } return s; };
export const smooth = (e0, e1, x) => { const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0))); return t * t * (3 - 2 * t); };

/* ---------- height of the land ----------
   A calm lake in the middle, hills around it, tall ridges far away, a grassy point
   on the east shore where the cabin stands, and the ground kept level over the
   library under the cabin. */
export const heightAt = (x, z) => {
  const r = Math.hypot(x * 0.75, z + 20);
  const shore = smooth(55, 240, r);
  let h = (fbm(x * 0.006 + 3, z * 0.006 + 7) - 0.45) * 46 * (0.25 + shore);
  h += Math.pow(smooth(120, 650, -z), 1.3) * ridged(x * 0.0028, z * 0.0028) * 260;
  h += smooth(160, 520, Math.abs(x)) * fbm(x * 0.004, z * 0.004 + 11) * 130;
  h -= (1 - shore) * 9;
  h += (fbm(x * 0.035 + 17, z * 0.035 + 5, 2) - 0.5) * 3.2 * (0.3 + shore);   // small hummocks underfoot
  {
    // the grassy point reaching into the lake from the east shore
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
  {
    // and over the library below it, so it stays underground
    const lx = (z - CABIN.z) / CABIN.S, lz = -(x - CABIN.x) / CABIN.S;
    const ox = Math.max(STUDY.x0 - lx, lx - STUDY.x1, 0), oz = Math.max(STUDY.z0 - lz, lz - STUDY.z1, 0);
    const out = Math.hypot(ox, oz) * CABIN.S;
    if (out < 16) h = Math.max(h, h + (CABIN.y - 0.12 - h) * smooth(16, 5, out));
  }
  return h;
};

/* ---------- terrain mesh ---------- */
export function createTerrain(scene) {
  // uHole: no ground drawn inside the cabin (its floor is there, and the stairs go down through it)
  const TU = { uLow: { value: new THREE.Color() }, uHigh: { value: new THREE.Color() }, uSnow: { value: new THREE.Color() }, uSnowLine: { value: 100 }, uSand: { value: 0 }, uHole: { value: new THREE.Vector4(1e9, 1e9, 1e9, 1e9) } };
  const geo = new THREE.PlaneGeometry(2200, 1800, 300, 245);
  geo.rotateX(-Math.PI / 2);
  geo.translate(0, 0, -400);
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) p.setY(i, heightAt(p.getX(i), p.getZ(i)));
  geo.computeVertexNormals();
  const mat = new THREE.MeshLambertMaterial({ color: 0xffffff });
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, TU);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying float vH; varying float vSlope; varying vec2 vXZ;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvH = position.y; vSlope = 1.0 - normal.y; vXZ = position.xz;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        uniform vec3 uLow, uHigh, uSnow; uniform float uSnowLine, uSand; uniform vec4 uHole; varying float vH; varying float vSlope; varying vec2 vXZ;
        float th(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float tn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(th(i), th(i + vec2(1, 0)), f.x), mix(th(i + vec2(0, 1)), th(i + vec2(1, 1)), f.x), f.y); }`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        if (vXZ.x > uHole.x && vXZ.x < uHole.y && vXZ.y > uHole.z && vXZ.y < uHole.w) discard;
        vec3 land = mix(uLow, uHigh, smoothstep(-5.0, 120.0, vH));
        float snow = smoothstep(uSnowLine - 12.0, uSnowLine + 12.0, vH) * (1.0 - smoothstep(0.35, 0.7, vSlope));
        float d1 = tn(vXZ * 0.08), d2 = tn(vXZ * 0.45), d3 = tn(vXZ * 2.2);
        land *= 0.82 + 0.22 * d1 + 0.12 * d2 + 0.08 * d3;
        land = mix(land, land * vec3(0.92, 0.88, 0.84), smoothstep(0.35, 0.75, vSlope));
        float beach = (1.0 - smoothstep(1.2, 3.5, vH)) * smoothstep(-3.0, -0.5, vH) * uSand;
        land = mix(land, vec3(0.93, 0.85, 0.66) * (0.9 + 0.12 * d3), beach);
        float drift = sin(vXZ.x * 0.55 + vXZ.y * 0.18 + d1 * 7.0) * 0.5 + 0.5;
        vec3 snowCol = uSnow * (0.93 + 0.05 * d2 + 0.04 * drift) * mix(vec3(0.94, 0.97, 1.0), vec3(1.0), d1);
        diffuseColor.rgb = mix(land, snowCol, snow);`)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
        {
          vec3 wpos = vec3(vXZ.x, vH, vXZ.y);
          float near = smoothstep(260.0, 25.0, length(wpos - cameraPosition));
          if (near > 0.0) {
            float e = 0.3;
            float snowK = smoothstep(uSnowLine - 12.0, uSnowLine + 12.0, vH);
            #define BMP(p) (tn((p) * 0.35) * 0.9 + tn((p) * 1.6) * 0.3 + snowK * sin((p).x * 0.55 + (p).y * 0.18 + d1 * 7.0) * 0.35)
            float b0 = BMP(vXZ);
            vec3 bw = vec3(-(BMP(vXZ + vec2(e, 0.0)) - b0), 0.0, -(BMP(vXZ + vec2(0.0, e)) - b0)) / e * 0.55 * near;
            normal = normalize(normal + (viewMatrix * vec4(bw, 0.0)).xyz);
          }
        }`)
      .replace('#include <opaque_fragment>', `
        if (snow > 0.01) {
          // tiny ice crystals glint as you move
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
  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true;
  scene.add(mesh);
  return { mesh, TU };
}

/* ---------- water with a moving ripple texture ---------- */
export function createWater(scene) {
  const tex = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 256;
    const g = c.getContext('2d'), img = g.createImageData(256, 256);
    for (let y = 0; y < 256; y++) for (let x = 0; x < 256; x++) {
      const n = fbm(x / 22, y / 7, 4), m = fbm(x / 22 + 0.6, y / 7, 4), k = fbm(x / 22, y / 7 + 0.6, 4);
      const i = (y * 256 + x) * 4;
      img.data[i] = 128 + (n - m) * 300; img.data[i + 1] = 128 + (n - k) * 300; img.data[i + 2] = 255; img.data[i + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(60, 60);
    return t;
  })();
  const mat = new THREE.MeshStandardMaterial({ color: 0x777777, roughness: 0.3, metalness: 0.35, normalMap: tex, normalScale: new THREE.Vector2(0.35, 0.35) });
  // the lake must not show inside the library (which is below the water line)
  const WU = { uStudy: { value: new THREE.Vector4(1e9, 1e9, 1e9, 1e9) } };
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, WU);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec2 vWXZ;')
      .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvWXZ = (modelMatrix * vec4(transformed, 1.0)).xz;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec2 vWXZ; uniform vec4 uStudy;')
      .replace('#include <clipping_planes_fragment>', 'if (vWXZ.x > uStudy.x && vWXZ.x < uStudy.y && vWXZ.y > uStudy.z && vWXZ.y < uStudy.w) discard;\n#include <clipping_planes_fragment>');
  };
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(4000, 4000).rotateX(-Math.PI / 2), mat);
  scene.add(mesh);
  return { mesh, mat, tex, WU };
}
