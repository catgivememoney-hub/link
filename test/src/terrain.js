/* MEOW — the land and the water.
   heightAt(x, z) is the one source of truth for the ground: the terrain mesh,
   tree placement, walking and the cabin site all use it. */
import * as THREE from 'three';
import { TEXON } from './kit.js';
import { CONTACT } from './contact.js';
import { CABIN } from './house.js';

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
   on the east shore where the cabin stands (test copy: the library under it is gone). */
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
    const k = smooth(48, 12, d) * smooth(1.04, 0.9, t);   // a wide, gentle bank down to the water
    const top = 4.6 + (fbm(x * 0.05, z * 0.05, 2) - 0.5) * 1.6 - t * 0.6;
    if (k > 0) h = h + (Math.max(h, top) - h) * k;
  }
  // level ground where the cabin stands
  const dc = Math.hypot(x - CABIN.x, z - CABIN.z);
  if (dc < 44) h += (CABIN.y - 0.12 - h) * smooth(44, 22, dc);
  return h;
};

/* ---------- terrain mesh ---------- */
// a texture that starts as a flat colour and swaps in a downloaded picture once it arrives
// (so nothing ever samples an empty texture while the file is still on its way)
export function lateTexture(url, rgb, repeat = true) {
  const c = document.createElement('canvas'); c.width = c.height = 2;
  const g = c.getContext('2d'); g.fillStyle = `rgb(${rgb.join(',')})`; g.fillRect(0, 0, 2, 2);
  const t = new THREE.Texture(c); t.needsUpdate = true;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  const img = new Image();
  img.onload = () => { t.image = img; t.anisotropy = 4; t.needsUpdate = true; };
  img.src = url;
  return t;
}

export function createTerrain(scene) {
  // uHole: no ground drawn inside the cabin (its floor is there, and the stairs go down through it)
  const TU = { uLow: { value: new THREE.Color() }, uHigh: { value: new THREE.Color() }, uSnow: { value: new THREE.Color() }, uSnowLine: { value: 100 }, uSand: { value: 0 }, uHole: { value: new THREE.Vector4(1e9, 1e9, 1e9, 1e9) }, uWaterY: { value: 0 }, uWaterC: { value: new THREE.Color(0x6d7378) },
    // fine grass detail up close (assets/textures/grass-detail.jpg, CC-BY 3.0, see README)
    tDetail: { value: lateTexture('assets/textures/grass-detail.jpg', [97, 97, 97]) },
    // CC0 Poly Haven ground (grass) and rock, used up close when Textures are on (Settings → Graphics)
    tGrassD: { value: lateTexture('test/assets/tex/grass_diff.jpg', [110, 110, 90]) }, tRockD: { value: lateTexture('test/assets/tex/rock_diff.jpg', [128, 128, 128]) }, tRockN: { value: lateTexture('test/assets/tex/rock_nor_gl.jpg', [128, 128, 255]) }, uTexOn: TEXON,
    // snow trails: a pressure map that follows you (see createTrail below)
    tTrail: { value: null }, uTrailBox: { value: new THREE.Vector4(0, 0, 1, 1) } };
  const trail = createTrail(TU);
  const geo = new THREE.PlaneGeometry(2200, 1800, 300, 245);
  geo.rotateX(-Math.PI / 2);
  geo.translate(0, 0, -400);
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) p.setY(i, heightAt(p.getX(i), p.getZ(i)));
  geo.computeVertexNormals();
  const mat = new THREE.MeshLambertMaterial({ color: 0xffffff });
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, TU, CONTACT);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying float vH; varying float vSlope; varying vec2 vXZ;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvH = position.y; vSlope = 1.0 - normal.y; vXZ = position.xz;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        uniform vec3 uLow, uHigh, uSnow, uWaterC; uniform float uSnowLine, uSand, uWaterY; uniform vec4 uHole; uniform sampler2D tDetail, tGrassD, tRockD, tRockN; uniform float uTexOn; uniform sampler2D tContact; uniform vec4 uContactBox, uContactStr; varying float vH; varying float vSlope; varying vec2 vXZ;
        uniform sampler2D tTrail; uniform vec4 uTrailBox;
        float trl(vec2 p) { vec2 uv = (p - uTrailBox.xy) / uTrailBox.zw; if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) return 0.0; return texture2D(tTrail, uv).r; }
        float th(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float tn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(th(i), th(i + vec2(1, 0)), f.x), mix(th(i + vec2(0, 1)), th(i + vec2(1, 1)), f.x), f.y); }`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        if (vXZ.x > uHole.x && vXZ.x < uHole.y && vXZ.y > uHole.z && vXZ.y < uHole.w) discard;
        vec3 land = mix(uLow, uHigh, smoothstep(-5.0, 120.0, vH));
        float snow = smoothstep(uSnowLine - 12.0, uSnowLine + 12.0, vH) * (1.0 - smoothstep(0.35, 0.7, vSlope));
        float d1 = tn(vXZ * 0.08), d2 = tn(vXZ * 0.45), d3 = tn(vXZ * 2.2);
        land *= 0.82 + 0.22 * d1 + 0.12 * d2 + 0.08 * d3;
        {
          // real grass detail, only near you (it would shimmer far away)
          float dnear = smoothstep(170.0, 18.0, length(vec3(vXZ.x, vH, vXZ.y) - cameraPosition));
          if (dnear > 0.0) {
            float dl = dot(texture2D(tDetail, vXZ * 0.09).rgb, vec3(0.3, 0.59, 0.11)) * 0.6 + dot(texture2D(tDetail, vXZ * 0.023 + 0.37).rgb, vec3(0.3, 0.59, 0.11)) * 0.4;
            land *= 1.0 + (dl - 0.38) * 3.2 * dnear * (1.0 - smoothstep(0.4, 0.8, vSlope) * 0.5) * (1.0 - 0.6 * uTexOn);
          }
          if (uTexOn > 0.5) {
            // real ground and rock photos: ground on the flats, rock on the steep parts, faded with distance
            float tnear = smoothstep(240.0, 20.0, length(vec3(vXZ.x, vH, vXZ.y) - cameraPosition));
            vec3 gA = texture2D(tGrassD, vXZ * 0.11).rgb, gB = texture2D(tGrassD, vXZ * 0.031 + 0.4).rgb;
            float gl = dot(mix(gA, gB, 0.4), vec3(0.3, 0.59, 0.11));
            vec3 rk = texture2D(tRockD, vec2(vXZ.x + vH * 0.7, vH) * 0.07).rgb;
            float rl = dot(rk, vec3(0.3, 0.59, 0.11));
            float steep = smoothstep(0.32, 0.62, vSlope);
            land *= mix(1.0, mix(0.55 + gl * 1.6, 0.45 + rl * 1.5, steep), tnear);
            land = mix(land, land * vec3(0.95, 0.93, 0.9), steep * tnear);
          }
        }
        land = mix(land, land * vec3(0.92, 0.88, 0.84), smoothstep(0.35, 0.75, vSlope));
        float beach = (1.0 - smoothstep(uWaterY + 1.2, uWaterY + 3.5, vH)) * smoothstep(uWaterY - 3.0, uWaterY - 0.5, vH) * uSand;
        land = mix(land, vec3(0.93, 0.85, 0.66) * (0.9 + 0.12 * d3), beach);
        // where land meets water: a wet, darker band, then the lake bed tinted by the water
        float wet = smoothstep(uWaterY + 2.2, uWaterY + 0.1, vH) * (0.75 + 0.25 * d2);
        land *= mix(1.0, 0.7, wet);
        float under = smoothstep(uWaterY + 0.1, uWaterY - 4.5, vH);
        land = mix(land, uWaterC * (0.55 + 0.2 * d1), under * 0.85);
        snow *= 1.0 - smoothstep(uWaterY + 0.6, uWaterY - 0.4, vH);
        float drift = sin(vXZ.x * 0.55 + vXZ.y * 0.18 + d1 * 7.0) * 0.5 + 0.5;
        vec3 snowCol = uSnow * (0.93 + 0.05 * d2 + 0.04 * drift) * mix(vec3(0.94, 0.97, 1.0), vec3(1.0), d1);
        diffuseColor.rgb = mix(land, snowCol, snow);
        {
          // contact shadows baked into the ground (contact.js): under rocks, logs, trees, the cabin
          vec2 cuv = (vXZ - uContactBox.xy) / uContactBox.zw;
          float cs = dot(texture2D(tContact, cuv), uContactStr);
          diffuseColor.rgb *= 1.0 - clamp(cs, 0.0, 0.8) * (1.0 - snow * 0.5);
        }
        // pressed snow where you walked: packed down, a little blue-grey in its own shadow, with a bright rim
        float trA = trl(vXZ) * snow;
        if (trA > 0.002) diffuseColor.rgb = mix(diffuseColor.rgb, snowCol * vec3(0.62, 0.7, 0.82), clamp(trA * 1.1, 0.0, 0.95));`)
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
          // the trail is a groove: its sides catch the light
          if (snow > 0.01) {
            float e = 0.45, t0 = trl(vXZ);
            vec3 tg = vec3(trl(vXZ + vec2(e, 0.0)) - t0, 0.0, trl(vXZ + vec2(0.0, e)) - t0) / e;
            if (dot(tg, tg) > 0.0) normal = normalize(normal + (viewMatrix * vec4(tg * 3.0 * snow, 0.0)).xyz);
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
  // the ground's height exactly as drawn (the mesh's own triangles, not the smooth formula): cats stand on this
  const GX = 300, GZ = 245, SX = 2200 / GX, SZ = 1800 / GZ, X0 = -1100, Z0 = -1300, PY = geo.attributes.position;
  const surfaceAt = (x, z) => {
    const gx = (x - X0) / SX, gz = (z - Z0) / SZ;
    if (gx < 0 || gz < 0 || gx >= GX || gz >= GZ) return heightAt(x, z);
    const ix = Math.floor(gx), iz = Math.floor(gz), fx = gx - ix, fz = gz - iz, W = GX + 1;
    const ha = PY.getY(iz * W + ix), hb = PY.getY((iz + 1) * W + ix), hc = PY.getY((iz + 1) * W + ix + 1), hd = PY.getY(iz * W + ix + 1);
    return fx + fz < 1 ? ha + (hd - ha) * fx + (hb - ha) * fz : hc + (hb - hc) * (1 - fx) + (hd - hc) * (1 - fz);
  };
  return { mesh, TU, trail, surfaceAt };
}

/* ---------- water with a moving ripple texture ---------- */
export function createWater(scene, U) {
  // the height of the lake bed, baked once, so the water knows how deep it is everywhere:
  // it turns clear and pale in the shallows and fades softly into the shore, with a little foam
  const SR = { x0: -700, z0: -800, w: 1400, d: 1300 }, NX = 448, NZ = 416;
  const shore = (() => {
    const data = new Uint16Array(NX * NZ);
    for (let j = 0; j < NZ; j++) for (let i = 0; i < NX; i++) {
      data[j * NX + i] = THREE.DataUtils.toHalfFloat(heightAt(SR.x0 + (i + 0.5) / NX * SR.w, SR.z0 + (j + 0.5) / NZ * SR.d));
    }
    const t = new THREE.DataTexture(data, NX, NZ, THREE.RedFormat, THREE.HalfFloatType);
    t.minFilter = t.magFilter = THREE.LinearFilter; t.needsUpdate = true;
    return t;
  })();
  // real water normal maps from the three.js examples (two layers drifting across each other)
  const n1 = lateTexture('assets/textures/water-normal-1.jpg', [128, 128, 255]); n1.repeat.set(70, 70);
  const n2 = lateTexture('assets/textures/water-normal-2.jpg', [128, 128, 255]);
  const mat = new THREE.MeshStandardMaterial({ color: 0x777777, roughness: 0.3, metalness: 0.35, normalMap: n1, normalScale: new THREE.Vector2(0.35, 0.35), transparent: true, envMapIntensity: 0.35 });
  // the lake must not show inside the library (which is below the water line)
  const WU = { uIce: { value: 0 }, uStudy: { value: new THREE.Vector4(1e9, 1e9, 1e9, 1e9) }, tShore: { value: shore }, uShore: { value: new THREE.Vector4(SR.x0, SR.z0, SR.w, SR.d) }, uLevel: { value: 0 }, uTime: U.uTime, tN2: { value: n2 } };
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, WU);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec2 vWXZ;')
      .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvWXZ = (modelMatrix * vec4(transformed, 1.0)).xz;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        varying vec2 vWXZ; uniform vec4 uStudy, uShore; uniform sampler2D tShore, tN2; uniform float uLevel, uTime, uIce;
        float wh(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float wn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(wh(i), wh(i + vec2(1, 0)), f.x), mix(wh(i + vec2(0, 1)), wh(i + vec2(1, 1)), f.x), f.y); }
        // distance to the nearest edge between cells (for the ice's crack network)
        float ivor(vec2 q) { vec2 i = floor(q), f = fract(q); float d1 = 8.0, d2 = 8.0;
          for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) { vec2 g = vec2(float(x), float(y)); vec2 o = vec2(wh(i + g), wh(i + g + 19.1));
            float d = length(g + o - f); if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) d2 = d; }
          return d2 - d1; }`)
      .replace('vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;', `vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
        {
          vec3 m2 = texture2D(tN2, vWXZ * 0.021 + uTime * vec2(-0.0021, 0.0014)).xyz * 2.0 - 1.0;
          vec3 m3 = texture2D(tN2, vWXZ * 0.0047 + uTime * vec2(0.0009, 0.0011)).xyz * 2.0 - 1.0;
          float far = smoothstep(60.0, 600.0, length(vec3(vWXZ.x, 0.0, vWXZ.y) - vec3(cameraPosition.x, 0.0, cameraPosition.z)));
          mapN = vec3((mapN.xy + m2.xy) * (1.0 - far * 0.7) + m3.xy * 0.7, mapN.z * m2.z);
          mapN.xy *= 1.0 - 0.8 * uIce;   // ice keeps a faint uneven surface
        }`)
      .replace('#include <clipping_planes_fragment>', 'if (vWXZ.x > uStudy.x && vWXZ.x < uStudy.y && vWXZ.y > uStudy.z && vWXZ.y < uStudy.w) discard;\n#include <clipping_planes_fragment>')
      .replace('#include <color_fragment>', `#include <color_fragment>
        {
          vec2 suv = (vWXZ - uShore.xy) / uShore.zw;
          float bed = (suv.x > 0.0 && suv.x < 1.0 && suv.y > 0.0 && suv.y < 1.0) ? texture2D(tShore, suv).r : -100.0;
          float depth = uLevel - bed;
          // shallow water is clearer and lighter, deep water keeps its colour
          float shallow = 1.0 - smoothstep(0.0, 7.0, depth);
          diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 1.3 + vec3(0.05, 0.07, 0.06), shallow * 0.55);
          // a thin line of foam that breathes along the shore
          float n = wn(vWXZ * 0.3 + vec2(uTime * 0.05, 0.0)) + 0.5 * wn(vWXZ * 1.1 - vec2(0.0, uTime * 0.08));
          float foam = smoothstep(2.6, 0.3, depth) * smoothstep(0.35, 1.0, 0.5 + 0.5 * sin(depth * 3.0 - uTime * 1.1 + n * 6.0)) * smoothstep(0.35, 0.95, n) * 0.55;
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.9, 0.92, 0.93), clamp(foam, 0.0, 0.4));
          // and the water fades out softly where it meets the land (no hard line)
          diffuseColor.a *= smoothstep(-0.1, 3.2, depth) * (1.0 - 0.3 * shallow) + clamp(foam, 0.0, 0.4) * smoothstep(0.0, 1.2, depth) * 0.5;
          // frozen (snow scene): pale blue-white ice with cracks and drifts of snow; solid, no shine of open water
          if (uIce > 0.001) {
            // frozen (snow scene): clear blue ice, darker where the lake is deep, cloudy and white in patches,
            // a web of white cracks (big plates and fine ones), frozen bubbles, skate scratches and drifts of frost
            vec2 p = vWXZ;
            float deepK = smoothstep(0.5, 10.0, depth);
            vec3 ice = mix(vec3(0.42, 0.72, 0.88), vec3(0.08, 0.32, 0.55), deepK);
            float cloud = wn(p * 0.05) * 0.6 + wn(p * 0.21) * 0.4;
            ice = mix(ice, vec3(0.74, 0.88, 0.95), smoothstep(0.55, 0.9, cloud) * 0.6);
            ice *= 0.92 + 0.12 * wn(p * 0.7);
            float cr1 = smoothstep(0.03, 0.0, ivor(p * 0.03 + wn(p * 0.05) * 0.7));
            float cr2 = smoothstep(0.022, 0.0, ivor(p * 0.12 + 3.0 + wn(p * 0.3) * 0.4)) * (0.4 + 0.6 * wn(p * 0.04 + 5.0));
            ice = mix(ice, vec3(0.9, 0.96, 1.0), clamp(cr1 * 0.9 + cr2 * 0.55, 0.0, 1.0));
            ice = mix(ice, ice * 0.8, smoothstep(0.2, 0.0, ivor(p * 0.03 + wn(p * 0.05) * 0.7)) * 0.25);   // the crack edges go a little darker underneath
            vec2 bc = floor(p * 2.5); float bub = step(0.975, wh(bc)) * smoothstep(0.3, 0.05, length(fract(p * 2.5) - 0.5 - (wh(bc + 3.0) - 0.5) * 0.3));
            ice = mix(ice, vec3(0.95, 0.98, 1.0), bub * 0.75 * (1.0 - deepK * 0.5));
            float sc = smoothstep(0.02, 0.0, abs(fract(dot(p, vec2(0.8, 0.6)) * 0.7 + wn(p * 0.15) * 1.6) - 0.5)) * smoothstep(0.62, 0.8, wn(p * 0.035 + 9.0));
            ice = mix(ice, vec3(0.86, 0.94, 0.99), sc * 0.35);
            float frost = smoothstep(0.5, 0.85, wn(p * 0.02 + 3.0) * 0.7 + wn(p * 0.09) * 0.3);
            ice = mix(ice, vec3(0.95, 0.97, 0.99), frost * 0.75);
            diffuseColor.rgb = mix(diffuseColor.rgb, ice, uIce);
            diffuseColor.a = mix(diffuseColor.a, smoothstep(-0.4, 0.6, depth), uIce);
          }
        }`);
  };
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(4000, 4000).rotateX(-Math.PI / 2), mat);
  scene.add(mesh);
  mesh.renderOrder = 1;
  return { mesh, mat, tex: n1, WU };
}

/* ---------- snow trails ----------
   A 512×512 pressure map, 320×320 world units, that moves with you (it shifts when you near its edge,
   so trails far behind you fade off it). Every step on snow presses a soft round dent; while it snows
   the dents fill in again, slowly (about a minute in a full snowfall). */
function createTrail(TU) {
  let N = 512, CELL; const SIZE = 320;
  let data, tex;
  const make = (n) => {
    N = n; CELL = SIZE / N; data = new Uint8Array(N * N);
    if (tex) tex.dispose();
    tex = new THREE.DataTexture(data, N, N, THREE.RedFormat, THREE.UnsignedByteType);
    tex.magFilter = tex.minFilter = THREE.LinearFilter; tex.needsUpdate = true;
    TU.tTrail.value = tex;
  };
  make(512);
  let x0 = -SIZE / 2, z0 = -SIZE / 2, dirty = false, acc = 0, any = false;
  const box = () => TU.uTrailBox.value.set(x0, z0, SIZE, SIZE);
  box();
  // keep (x, z) well inside the map: shift the map (and what's on it) when you walk toward an edge
  const follow = (x, z) => {
    const m = SIZE * 0.22;
    if (x > x0 + m && x < x0 + SIZE - m && z > z0 + m && z < z0 + SIZE - m) return;
    const nx0 = Math.round((x - SIZE / 2) / CELL) * CELL, nz0 = Math.round((z - SIZE / 2) / CELL) * CELL;
    const di = Math.round((nx0 - x0) / CELL), dj = Math.round((nz0 - z0) / CELL);
    const copy = new Uint8Array(N * N);
    for (let j = 0; j < N; j++) {
      const sj = j + dj; if (sj < 0 || sj >= N) continue;
      for (let i = 0; i < N; i++) { const si = i + di; if (si >= 0 && si < N) copy[j * N + i] = data[sj * N + si]; }
    }
    data.set(copy); x0 = nx0; z0 = nz0; box(); dirty = true;
  };
  return {
    // press the snow at (x, z); r = radius in world units
    stamp(x, z, r = 1.7, depth = 1) {
      follow(x, z);
      const ci = (x - x0) / CELL, cj = (z - z0) / CELL, rr = r / CELL;
      for (let j = Math.floor(cj - rr); j <= Math.ceil(cj + rr); j++) {
        if (j < 0 || j >= N) continue;
        for (let i = Math.floor(ci - rr); i <= Math.ceil(ci + rr); i++) {
          if (i < 0 || i >= N) continue;
          const d = Math.hypot(i - ci, j - cj) / rr; if (d >= 1) continue;
          const v = Math.round(255 * depth * (1 - d * d) * (1 - d * d));
          const k = j * N + i; if (v > data[k]) data[k] = v;
        }
      }
      dirty = true; any = true;
    },
    // snowRate 0..1: how hard it's snowing (fills the trails back in)
    update(dt, snowRate) {
      acc += dt;
      if (any && snowRate > 0.02 && acc > 0.5) {
        const fill = Math.max(1, Math.round(acc * 255 / 60 * snowRate));
        let left = false;
        for (let k = 0; k < data.length; k++) { const v = data[k]; if (v) { const n = v > fill ? v - fill : 0; data[k] = n; if (n) left = true; } }
        any = left; dirty = true; acc = 0;
      } else if (acc > 0.5) acc = 0;
      if (dirty) { tex.needsUpdate = true; dirty = false; }
    },
    clear() { data.fill(0); any = false; tex.needsUpdate = true; },
    // sharper trails (more detail in the pressure map); clears the trails you've made
    setRes(n) { if (n !== N) { make(n); box(); any = false; } }
  };
}


/* ---------- deep snow (Settings → Graphics → Custom → "Deep snow"; off by default) ----------
   A thick layer of real 3D snow on a fine grid that follows you. It reads the same trail map as the
   ground: where you walk, the snow is pushed down to the ground and heaped up along both sides, so
   your path is a real furrow through the snow rather than a darker stripe. */
export function createDeepSnow(scene, TU, ground) {
  // The ground's height, read straight from the terrain mesh's own points into a small texture (once),
  // so the graphics card can place the snow on the land itself. The snow grid never has to be rebuilt:
  // it just slides along under you, which costs nothing (the old version recomputed ~330,000 heights
  // on the main thread every ~20 steps, which froze the game for half a second).
  const gp = ground.geometry.attributes.position, gw = ground.geometry.parameters;
  const NX = gw.widthSegments + 1, NZ = gw.heightSegments + 1;
  const hd = new Uint16Array(NX * NZ);
  let minX = Infinity, minZ = Infinity, maxX = -Infinity, maxZ = -Infinity;
  for (let i = 0; i < gp.count; i++) { const x = gp.getX(i), z = gp.getZ(i); minX = Math.min(minX, x); maxX = Math.max(maxX, x); minZ = Math.min(minZ, z); maxZ = Math.max(maxZ, z); }
  for (let i = 0; i < gp.count; i++) {
    const ix = Math.round((gp.getX(i) - minX) / (maxX - minX) * (NX - 1)), iz = Math.round((gp.getZ(i) - minZ) / (maxZ - minZ) * (NZ - 1));
    hd[iz * NX + ix] = THREE.DataUtils.toHalfFloat(gp.getY(i));
  }
  const hTex = new THREE.DataTexture(hd, NX, NZ, THREE.RedFormat, THREE.HalfFloatType);
  hTex.minFilter = hTex.magFilter = THREE.LinearFilter; hTex.needsUpdate = true;
  // texel centres sit exactly on the terrain's points, so the snow follows the same surface you see
  const cell = new THREE.Vector2((maxX - minX) / (NX - 1), (maxZ - minZ) / (NZ - 1));
  const box = new THREE.Vector4(minX - cell.x / 2, minZ - cell.y / 2, (maxX - minX) + cell.x, (maxZ - minZ) + cell.y);

  // quality 1..5: how fine the snow grid is, and how sharp the trail map (fewer = faster)
  const Q = [null, { size: 90, seg: 180, trail: 512 }, { size: 100, seg: 250, trail: 768 }, { size: 110, seg: 330, trail: 1024 }, { size: 120, seg: 440, trail: 1536 }, { size: 130, seg: 560, trail: 2048 }];
  const DEPTH = 1.5; let STEP = 110 / 330;
  let geo = new THREE.PlaneGeometry(110, 110, 330, 330).rotateX(-Math.PI / 2);
  const DU = { uDepth: { value: DEPTH }, tGround: { value: hTex }, uGroundBox: { value: box }, uCell: { value: cell } };
  const mat = new THREE.MeshLambertMaterial({ color: 0xffffff, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, TU, DU);
    const H = `uniform sampler2D tTrail, tGround; uniform vec4 uTrailBox, uGroundBox; uniform vec2 uCell; uniform float uSnowLine, uWaterY, uDepth; varying float vSk; varying float vPress; varying float vWall; varying vec2 vXZ; varying vec3 vGN;
      float trv(vec2 p) { vec2 uv = (p - uTrailBox.xy) / uTrailBox.zw; if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) return 0.0; return texture2D(tTrail, uv).r; }
      // the ground height exactly as the terrain mesh draws it: the same two triangles per square (not a smooth blend),
      // so the snow never dips under the visible ground and lets it poke through as jagged teeth
      float gh(vec2 p) {
        vec2 g = (p - uGroundBox.xy) / uCell - 0.5; ivec2 sz = textureSize(tGround, 0);
        vec2 i0 = clamp(floor(g), vec2(0.0), vec2(sz) - 2.0); vec2 f = clamp(g - i0, 0.0, 1.0); ivec2 i = ivec2(i0);
        float ha = texelFetch(tGround, i, 0).r, hb = texelFetch(tGround, i + ivec2(0, 1), 0).r, hc = texelFetch(tGround, i + ivec2(1, 1), 0).r, hd = texelFetch(tGround, i + ivec2(1, 0), 0).r;
        return (f.x + f.y < 1.0) ? ha + (hd - ha) * f.x + (hb - ha) * f.y : hc + (hb - hc) * (1.0 - f.x) + (hd - hc) * (1.0 - f.y);
      }
      float sh2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float sn2(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(sh2(i), sh2(i + vec2(1, 0)), f.x), mix(sh2(i + vec2(0, 1)), sh2(i + vec2(1, 1)), f.x), f.y); }
      // snow height above the ground at p: full depth, pressed down in the trail, heaped up beside it
      float snowH(vec2 p, float sk) {
        float t = (trv(p) * 2.0 + trv(p + vec2(0.7, 0.0)) + trv(p - vec2(0.7, 0.0)) + trv(p + vec2(0.0, 0.7)) + trv(p - vec2(0.0, 0.7)) + trv(p + vec2(0.5, 0.5)) + trv(p - vec2(0.5, 0.5)) + trv(p + vec2(0.5, -0.5)) + trv(p - vec2(0.5, -0.5))) / 10.0;   // softened, so the walls slope over several grid squares
        float ring = (trv(p + vec2(1.1, 0.0)) + trv(p - vec2(1.1, 0.0)) + trv(p + vec2(0.0, 1.1)) + trv(p - vec2(0.0, 1.1))) * 0.25;
        float berm = max(0.0, ring - t) * 1.8;
        return uDepth * sk * (0.88 + 0.24 * sn2(p * 0.35) - t * 0.95 + berm * 0.55);
      }`;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\n' + H)
      .replace('#include <beginnormal_vertex>', `
        vec2 wxz = (modelMatrix * vec4(position, 1.0)).xz;
        float g0 = gh(wxz), gx = gh(wxz + vec2(uCell.x, 0.0)) - gh(wxz - vec2(uCell.x, 0.0)), gz = gh(wxz + vec2(0.0, uCell.y)) - gh(wxz - vec2(0.0, uCell.y));
        vec3 gN = normalize(vec3(-gx / (2.0 * uCell.x), 1.0, -gz / (2.0 * uCell.y)));
        float sk = smoothstep(uSnowLine - 12.0, uSnowLine + 12.0, g0) * (1.0 - smoothstep(0.35, 0.7, 1.0 - gN.y)) * (1.0 - smoothstep(uWaterY + 0.6, uWaterY - 0.4, g0));
        float e = 0.35, hx = snowH(wxz + vec2(e, 0.0), sk) - snowH(wxz - vec2(e, 0.0), sk), hz = snowH(wxz + vec2(0.0, e), sk) - snowH(wxz - vec2(0.0, e), sk);
        vec3 objectNormal = normalize(gN + vec3(-hx, 0.0, -hz) / (2.0 * e));
        #ifdef USE_TANGENT
          vec3 objectTangent = vec3(1.0, 0.0, 0.0);
        #endif`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vSk = sk; vXZ = wxz; vPress = trv(wxz); vWall = length(vec2(hx, hz)) / (2.0 * e); vGN = gN;
        transformed.y = g0 + max(0.1, snowH(wxz, sk));`);
    // the snow's surface direction is worked out for every pixel (not just at the grid's corners), so the
    // trail walls shade smoothly with no triangle pattern
    const FH = `uniform sampler2D tTrail; uniform vec4 uTrailBox; uniform float uDepth; varying vec3 vGN;
      float trv(vec2 p) { vec2 uv = (p - uTrailBox.xy) / uTrailBox.zw; if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) return 0.0; return texture2D(tTrail, uv).r; }
      float sh2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float sn2(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(sh2(i), sh2(i + vec2(1, 0)), f.x), mix(sh2(i + vec2(0, 1)), sh2(i + vec2(1, 1)), f.x), f.y); }
      float snowH(vec2 p, float sk) {
        float t = (trv(p) * 2.0 + trv(p + vec2(0.7, 0.0)) + trv(p - vec2(0.7, 0.0)) + trv(p + vec2(0.0, 0.7)) + trv(p - vec2(0.0, 0.7)) + trv(p + vec2(0.5, 0.5)) + trv(p - vec2(0.5, 0.5)) + trv(p + vec2(0.5, -0.5)) + trv(p - vec2(0.5, -0.5))) / 10.0;   // softened, so the walls slope over several grid squares
        float ring = (trv(p + vec2(1.1, 0.0)) + trv(p - vec2(1.1, 0.0)) + trv(p + vec2(0.0, 1.1)) + trv(p - vec2(0.0, 1.1))) * 0.25;
        float berm = max(0.0, ring - t) * 1.8;
        return uDepth * sk * (0.88 + 0.24 * sn2(p * 0.35) - t * 0.95 + berm * 0.55);
      }`;
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform vec3 uSnow; uniform vec4 uHole; varying float vSk; varying float vPress; varying float vWall; varying vec2 vXZ;\n' + FH)
      .replace('#include <normal_fragment_begin>', `#include <normal_fragment_begin>
        { float e = 0.18, hx = snowH(vXZ + vec2(e, 0.0), vSk) - snowH(vXZ - vec2(e, 0.0), vSk), hz = snowH(vXZ + vec2(0.0, e), vSk) - snowH(vXZ - vec2(0.0, e), vSk);
          vec3 wn = normalize(normalize(vGN) + vec3(-hx, 0.0, -hz) / (2.0 * e));
          normal = normalize((viewMatrix * vec4(wn, 0.0)).xyz); }`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        if (vSk < 0.08) discard;
        if (vXZ.x > uHole.x && vXZ.x < uHole.y && vXZ.y > uHole.z && vXZ.y < uHole.w) discard;
        // the furrow reads clearly: packed blue-grey snow at the bottom, its walls in their own soft shade
        diffuseColor.rgb = uSnow * mix(vec3(1.0), vec3(0.64, 0.71, 0.84), smoothstep(0.12, 0.8, vPress));
        diffuseColor.rgb *= 1.0 - 0.36 * smoothstep(0.06, 0.8, vWall) * (0.5 + 0.5 * smoothstep(0.0, 0.5, vPress));`);
  };
  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true; mesh.castShadow = false; mesh.frustumCulled = false; mesh.visible = false;
  scene.add(mesh);
  let on = false, quality = 0;
  return {
    setQuality(q, trail) {
      q = Math.max(1, Math.min(5, q | 0)); if (q === quality) return; quality = q;
      const c = Q[q]; STEP = c.size / c.seg;
      const g2 = new THREE.PlaneGeometry(c.size, c.size, c.seg, c.seg).rotateX(-Math.PI / 2);
      mesh.geometry.dispose(); mesh.geometry = g2; geo = g2;
      if (trail) trail.setRes(c.trail);
    },
    setEnabled(v) { on = !!v; if (!on) mesh.visible = false; },
    get enabled() { return on; },
    // show it around (x, z) when the scene has snow on the ground near you (snapped to the grid so it doesn't shimmer)
    update(x, z, snowy) {
      mesh.visible = on && snowy;
      if (mesh.visible) mesh.position.set(Math.round(x / STEP) * STEP, 0, Math.round(z / STEP) * STEP);
    }
  };
}
