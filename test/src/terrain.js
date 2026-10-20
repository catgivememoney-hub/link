/* MEOW — the land and the water.
   heightAt(x, z) is the one source of truth for the ground: the terrain mesh,
   tree placement, walking and the cabin site all use it. */
import * as THREE from 'three';
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
    tDetail: { value: lateTexture('assets/textures/grass-detail.jpg', [97, 97, 97]) } };
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
        uniform vec3 uLow, uHigh, uSnow, uWaterC; uniform float uSnowLine, uSand, uWaterY; uniform vec4 uHole; uniform sampler2D tDetail; varying float vH; varying float vSlope; varying vec2 vXZ;
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
            land *= 1.0 + (dl - 0.38) * 3.2 * dnear * (1.0 - smoothstep(0.4, 0.8, vSlope) * 0.5);
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
  const mat = new THREE.MeshStandardMaterial({ color: 0x777777, roughness: 0.3, metalness: 0.35, normalMap: n1, normalScale: new THREE.Vector2(0.35, 0.35), transparent: true, envMapIntensity: 0.6 });
  // the lake must not show inside the library (which is below the water line)
  const WU = { uStudy: { value: new THREE.Vector4(1e9, 1e9, 1e9, 1e9) }, tShore: { value: shore }, uShore: { value: new THREE.Vector4(SR.x0, SR.z0, SR.w, SR.d) }, uLevel: { value: 0 }, uTime: U.uTime, tN2: { value: n2 } };
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, WU);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec2 vWXZ;')
      .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvWXZ = (modelMatrix * vec4(transformed, 1.0)).xz;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        varying vec2 vWXZ; uniform vec4 uStudy, uShore; uniform sampler2D tShore, tN2; uniform float uLevel, uTime;
        float wh(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float wn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(wh(i), wh(i + vec2(1, 0)), f.x), mix(wh(i + vec2(0, 1)), wh(i + vec2(1, 1)), f.x), f.y); }`)
      .replace('vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;', `vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
        {
          vec3 m2 = texture2D(tN2, vWXZ * 0.021 + uTime * vec2(-0.0021, 0.0014)).xyz * 2.0 - 1.0;
          vec3 m3 = texture2D(tN2, vWXZ * 0.0047 + uTime * vec2(0.0009, 0.0011)).xyz * 2.0 - 1.0;
          float far = smoothstep(60.0, 600.0, length(vec3(vWXZ.x, 0.0, vWXZ.y) - vec3(cameraPosition.x, 0.0, cameraPosition.z)));
          mapN = vec3((mapN.xy + m2.xy) * (1.0 - far * 0.7) + m3.xy * 0.7, mapN.z * m2.z);
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
        }`);
  };
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(4000, 4000).rotateX(-Math.PI / 2), mat);
  scene.add(mesh);
  mesh.renderOrder = 1;
  return { mesh, mat, tex: n1, WU };
}
