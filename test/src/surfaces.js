/* MEOW (test copy) — real materials for the house, the dock and the boat.
   The Blender house was painted with flat colours only (one material, "Cabin Vertex"), which made everything
   look like smooth plastic. Here every part gets the surface it really is — logs, weathered deck planks, a
   worn plank floor, polished furniture wood, white fireplace bricks, concrete footings, a ribbed metal roof,
   brass, steel, fabrics, rugs, rope, sailcloth — from CC0 photo-scanned texture sets (Poly Haven, see README).
   · Which surface: each colour of the painted model stands for one material (with a few per-part exceptions),
     decided once per vertex when the house loads (attribute aSlot, up to 4 surfaces per part).
   · The textures are laid on from three sides (triplanar), so the model needs no texture coordinates and
     nothing stretches; their scale is in real metres.
   · The paint colour stays (the texture adds grain, bumps and shine around it), so the house keeps its look.
   · Roughness is packed into the normal map's blue channel, so each surface costs two textures. */
import * as THREE from 'three';
import { TEXON } from './kit.js';

const ROOT = 'test/assets/pbr/';
// surface → texture set, metres per tile, how much the photo's own light/dark shows, bump strength, roughness range, metalness
export const SURFACES = {
  log:      { set: 'rough_wood',              m: 1.1, detail: 0.85, n: 1.0, r: [0.62, 0.95], metal: 0 },
  deck:     { set: 'weathered_planks',        m: 1.6, detail: 0.9,  n: 1.0, r: [0.6, 0.95],  metal: 0 },
  dock:     { set: 'wood_floor_deck',         m: 1.8, detail: 0.85, n: 1.0, r: [0.6, 0.95],  metal: 0 },
  siding:   { set: 'raw_plank_wall',          m: 1.6, detail: 0.8,  n: 1.0, r: [0.6, 0.95],  metal: 0 },
  floor:    { set: 'old_wood_floor',          m: 1.6, detail: 0.85, n: 0.8, r: [0.35, 0.8],  metal: 0 },
  wood:     { set: 'fine_grained_wood',       m: 0.9, detail: 0.8,  n: 0.5, r: [0.3, 0.6],   metal: 0 },
  trim:     { set: 'white_planks_clean',      m: 1.2, detail: 0.35, n: 0.5, r: [0.45, 0.75], metal: 0 },
  stone:    { set: 'castle_brick_02_white',   m: 1.6, detail: 0.8,  n: 1.2, r: [0.7, 1.0],   metal: 0 },
  concrete: { set: 'concrete_floor_worn_001', m: 2.0, detail: 0.7,  n: 0.9, r: [0.7, 1.0],   metal: 0 },
  roof:     { set: 'box_profile_metal_sheet', m: 1.4, detail: 0.6,  n: 1.2, r: [0.35, 0.7],  metal: 0.55 },
  brass:    { set: 'metal_plate',             m: 0.35, detail: 0.35, n: 0.3, r: [0.22, 0.45], metal: 1 },
  steel:    { set: 'metal_plate_02',          m: 0.5, detail: 0.35, n: 0.4, r: [0.25, 0.5],  metal: 0.9 },
  plastic:  { set: 'metal_plate_02',          m: 0.3, detail: 0.12, n: 0.12, r: [0.35, 0.55], metal: 0 },
  linen:    { set: 'rough_linen',             m: 0.35, detail: 0.6, n: 1.0, r: [0.8, 1.0],   metal: 0 },
  fleece:   { set: 'knitted_fleece',          m: 0.35, detail: 0.7, n: 1.0, r: [0.85, 1.0],  metal: 0 },
  uphol:    { set: 'poly_wool_herringbone',   m: 0.4, detail: 0.6,  n: 1.0, r: [0.8, 1.0],   metal: 0 },
  velvet:   { set: 'velour_velvet',           m: 0.35, detail: 0.6, n: 0.8, r: [0.7, 1.0],   metal: 0 },
  rug:      { set: 'wool_boucle',             m: 0.5, detail: 0.7,  n: 1.2, r: [0.85, 1.0],  metal: 0 },
  rope:     { set: 'hessian_230',             m: 0.25, detail: 0.7, n: 1.0, r: [0.8, 1.0],   metal: 0 },
  canvas:   { set: 'rough_linen',             m: 0.8, detail: 0.4,  n: 0.6, r: [0.7, 0.95],  metal: 0 },
  hull:     { set: 'concrete_floor_worn_001', m: 3.0, detail: 0.06, n: 0.08, r: [0.15, 0.3], metal: 0 }   // glossy painted fibreglass
};
// the house model's paint colours (sRGB) → surface
const PALETTE = {
  '#7a4c2f': 'wood', '#5c3d27': 'deck', '#6e482c': 'deck', '#6e492a': 'deck', '#4e3525': 'deck', '#5a3d27': 'deck', '#4e3527': 'floor',
  '#896a4c': 'dock', '#5a4735': 'dock', '#ffd179': 'brass', '#4b301e': 'siding', '#5b3926': 'siding', '#e7dfcb': 'trim',
  '#895a37': 'wood', '#af8256': 'wood', '#a67950': 'wood', '#5a3721': 'wood', '#6a4127': 'wood', '#2e2017': 'log',
  '#c8a14b': 'brass', '#c89932': 'brass', '#2e2e2e': 'plastic', '#252525': 'plastic', '#1b1b1b': 'plastic',
  '#999999': 'steel', '#ced2d5': 'steel', '#c8c9cc': 'steel', '#bcb8b1': 'stone', '#bcbcba': 'concrete', '#7e7a74': 'concrete', '#22201e': 'concrete',
  '#f2f2f0': 'plastic', '#efe9df': 'linen', '#6f8e62': 'fleece', '#405c75': 'uphol', '#577799': 'uphol', '#9a4b3d': 'velvet',
  '#d8c6a2': 'rug', '#3f5a4b': 'rug', '#6b5b89': 'rug', '#335a4e': 'roof', '#41a699': 'roof', '#28443d': 'roof', '#325f9f': 'linen',
  '#f4f4f2': 'hull', '#892e2e': 'hull', '#243d66': 'hull', '#212e3d': 'hull', '#273a5a': 'canvas', '#f6f3e9': 'canvas',
  '#f7f7f7': 'rope', '#d7c8a2': 'rope', '#e7dfcb|Mainsail': 'canvas'
};
// per-part exceptions: part name → { colour: surface }
const BY_PART = {
  'Walls (logs)': { '#7a4c2f': 'log' },
  'Mainsail': { '#e7dfcb': 'canvas' },
  'Bed': { '#f2f2f0': 'linen' },
  'Office chair': { '#1b1b1b': 'uphol' },
  'Ceiling lamp': { '#28443d': 'steel' },
  'Coffee table': { '#f2f2f0': 'plastic' },
  'Floor & stilts': { '#bcbcba': 'concrete' }
};

// on / off (Settings → Graphics → Textures): off = the plain painted look
export const SURF_ON = TEXON;   // the same switch as the ground and tree textures

/* ---------- loading: colour map + (normal xy, roughness) packed into one image ---------- */
const sets = {};
const blank = (rgb) => { const c = document.createElement('canvas'); c.width = c.height = 2; const g = c.getContext('2d'); g.fillStyle = rgb; g.fillRect(0, 0, 2, 2); return c; };
const loadImg = (url) => new Promise((res) => { const i = new Image(); i.onload = () => res(i); i.onerror = () => res(null); i.src = url; });
function textureSet(name) {
  if (sets[name]) return sets[name];
  const D = new THREE.Texture(blank('#808080')), N = new THREE.Texture(blank('#8080b0'));
  [D, N].forEach((t) => { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.needsUpdate = true; });
  D.colorSpace = THREE.SRGBColorSpace;
  const S = { D, N, avg: new THREE.Vector3(0.2195, 0.2195, 0.2195), ready: false };   // (the grey placeholder's own average, so nothing changes until the photo arrives)
  sets[name] = S;
  // (the normal map file already carries the roughness in its blue channel: packed when the textures were added)
  Promise.all([loadImg(`${ROOT}${name}_diff.webp`), loadImg(`${ROOT}${name}_nor.webp`)]).then(([d, n]) => {
    if (d) {
      D.image = d; D.anisotropy = 8; D.generateMipmaps = true; D.minFilter = THREE.LinearMipmapLinearFilter; D.needsUpdate = true;
      // the photo's average colour (linear), so it adds grain without changing the house's colours
      const k = document.createElement('canvas'); k.width = k.height = 16; const x = k.getContext('2d'); x.drawImage(d, 0, 0, 16, 16);
      const px = x.getImageData(0, 0, 16, 16).data; let a = 0, b = 0, c = 0;
      for (let i = 0; i < px.length; i += 4) { a += Math.pow(px[i] / 255, 2.2); b += Math.pow(px[i + 1] / 255, 2.2); c += Math.pow(px[i + 2] / 255, 2.2); }
      S.avg.set(a / 256, b / 256, c / 256);
    }
    if (n) { N.image = n; N.anisotropy = 8; N.generateMipmaps = true; N.minFilter = THREE.LinearMipmapLinearFilter; N.needsUpdate = true; }
    S.ready = true;
  });
  return S;
}

/* ---------- the shader ---------- */
const GLSL_V_HEAD = 'attribute float aSlot;\nflat varying int vSlot;\nvarying vec3 vSWP;\nvarying vec3 vSWN;\n';
const GLSL_F_HEAD = `
  flat varying int vSlot; varying vec3 vSWP; varying vec3 vSWN;
  uniform sampler2D tSD0, tSD1, tSD2, tSD3, tSN0, tSN1, tSN2, tSN3;
  uniform vec4 uSP[4];   // 1/size, detail, bump, metal
  uniform vec2 uSR[4];   // roughness range
  uniform vec3 uSA[4];   // the photo's average colour
  uniform float uSurfOn;
  vec3 sW; bool sSwap;
  // from above, the photo is turned to run down the slope (so a roof's ribs and a ramp's planks follow the fall line)
  vec2 sTop(vec3 p) { return sSwap ? p.zx : p.xz; }
  vec4 tri(sampler2D t, vec3 p) { return texture2D(t, p.zy) * sW.x + texture2D(t, sTop(p)) * sW.y + texture2D(t, p.xy) * sW.z; }
  vec4 sD(vec3 p) { if (vSlot == 0) return tri(tSD0, p); if (vSlot == 1) return tri(tSD1, p); if (vSlot == 2) return tri(tSD2, p); return tri(tSD3, p); }
  vec3 sNx(sampler2D t, vec3 p, vec3 n) {
    vec4 a = texture2D(t, p.zy), b = texture2D(t, sTop(p)), c = texture2D(t, p.xy);
    vec2 A = a.xy * 2.0 - 1.0, B = b.xy * 2.0 - 1.0, C = c.xy * 2.0 - 1.0;
    vec3 top = sSwap ? vec3(B.y, 0.0, B.x) : vec3(B.x, 0.0, B.y);
    return vec3(0.0, A.y, A.x) * sign(n.x) * sW.x + top * sign(n.y) * sW.y + vec3(C.x, C.y, 0.0) * sign(n.z) * sW.z; }
  float sRx(sampler2D t, vec3 p) { return texture2D(t, p.zy).z * sW.x + texture2D(t, sTop(p)).z * sW.y + texture2D(t, p.xy).z * sW.z; }
  vec3 sN(vec3 p, vec3 n) { if (vSlot == 0) return sNx(tSN0, p, n); if (vSlot == 1) return sNx(tSN1, p, n); if (vSlot == 2) return sNx(tSN2, p, n); return sNx(tSN3, p, n); }
  float sR(vec3 p) { if (vSlot == 0) return sRx(tSN0, p); if (vSlot == 1) return sRx(tSN1, p); if (vSlot == 2) return sRx(tSN2, p); return sRx(tSN3, p); }
  vec4 sP() { return vSlot == 0 ? uSP[0] : vSlot == 1 ? uSP[1] : vSlot == 2 ? uSP[2] : uSP[3]; }
  vec2 sRR() { return vSlot == 0 ? uSR[0] : vSlot == 1 ? uSR[1] : vSlot == 2 ? uSR[2] : uSR[3]; }
  vec3 sA() { return vSlot == 0 ? uSA[0] : vSlot == 1 ? uSA[1] : vSlot == 2 ? uSA[2] : uSA[3]; }
`;
function surfaceMaterial(base, slots) {
  const m = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, metalness: 0, envMapIntensity: 0.75, side: base.side, name: base.name });
  const ss = slots.map((k) => SURFACES[k]), T = ss.map((s) => textureSet(s.set));
  while (T.length < 4) { T.push(T[0]); ss.push(ss[0]); }
  const U = {
    uSurfOn: SURF_ON,
    uSP: { value: ss.map((s) => new THREE.Vector4(1 / (s.m * 4.5), s.detail, s.n, s.metal)) },
    uSR: { value: ss.map((s) => new THREE.Vector2(s.r[0], s.r[1])) },
    uSA: { value: T.map((t) => t.avg) }
  };
  T.forEach((t, i) => { U['tSD' + i] = { value: t.D }; U['tSN' + i] = { value: t.N }; });
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, U);
    sh.vertexShader = GLSL_V_HEAD + sh.vertexShader.replace('#include <worldpos_vertex>', `#include <worldpos_vertex>
      vSlot = int(aSlot + 0.5);
      vSWP = (modelMatrix * vec4(transformed, 1.0)).xyz;
      vSWN = normalize(mat3(modelMatrix) * objectNormal);`);
    sh.fragmentShader = GLSL_F_HEAD + sh.fragmentShader
      .replace('#include <color_fragment>', `#include <color_fragment>
        vec4 sp = sP(); vec3 sn = normalize(vSWN); sW = pow(abs(sn), vec3(8.0)); sW /= (sW.x + sW.y + sW.z); sSwap = abs(sn.x) > abs(sn.z) + 0.05;
        vec3 spos = vSWP * sp.x;
        vec3 sAlb = sD(spos).rgb;
        diffuseColor.rgb *= mix(vec3(1.0), clamp(sAlb / max(sA(), vec3(0.02)), 0.0, 2.2), sp.y * uSurfOn);`)
      .replace('#include <roughnessmap_fragment>', `float roughnessFactor = mix(0.7, mix(sRR().x, sRR().y, sR(spos)), uSurfOn);`)
      .replace('#include <metalnessmap_fragment>', `float metalnessFactor = sp.w * uSurfOn;`)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
        { vec3 bw = sN(spos, sn) * sp.z * uSurfOn; normal = normalize(normal + (viewMatrix * vec4(bw, 0.0)).xyz); }`);
  };
  m.customProgramCacheKey = () => 'meow-surface-v2';
  return m;
}

const hexOf = (r, g, b) => '#' + [r, g, b].map((x) => Math.round(Math.pow(Math.min(1, Math.max(0, x)), 1 / 2.2) * 255).toString(16).padStart(2, '0')).join('');
// give a painted mesh real surfaces (returns false if it has no paint colours to go by)
export function applySurfaces(mesh, partName, only) {
  const g = mesh.geometry;
  if (!g.attributes.color && only) {   // a part with one plain colour: paint it that colour and give it the one surface
    const n = g.attributes.position.count, c = mesh.material.color || new THREE.Color(1, 1, 1), a = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; }
    g.setAttribute('color', new THREE.BufferAttribute(a, 3));
  }
  const col = g.attributes.color; if (!col) return false;
  const over = BY_PART[partName] || {};
  const slotOf = new Map(), slots = [], aSlot = new Float32Array(col.count), counts = new Map();
  const kinds = new Array(col.count);
  for (let i = 0; i < col.count; i++) {
    const h = hexOf(col.getX(i), col.getY(i), col.getZ(i));
    let k = only || over[h] || PALETTE[h + '|' + partName] || PALETTE[h];
    if (!k) {   // an unlisted colour: the nearest listed one
      let bd = 1e9; const r = parseInt(h.slice(1, 3), 16), gg = parseInt(h.slice(3, 5), 16), b = parseInt(h.slice(5, 7), 16);
      for (const p in PALETTE) { if (p.includes('|')) continue; const dr = parseInt(p.slice(1, 3), 16) - r, dg = parseInt(p.slice(3, 5), 16) - gg, db = parseInt(p.slice(5, 7), 16) - b, d = dr * dr + dg * dg + db * db; if (d < bd) { bd = d; k = PALETTE[p]; } }
    }
    kinds[i] = k; counts.set(k, (counts.get(k) || 0) + 1);
  }
  // up to four surfaces per part (the most used ones); any others use the closest kind of the four
  [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 4).forEach(([k]) => { slotOf.set(k, slots.length); slots.push(k); });
  for (let i = 0; i < col.count; i++) aSlot[i] = slotOf.has(kinds[i]) ? slotOf.get(kinds[i]) : 0;
  g.setAttribute('aSlot', new THREE.BufferAttribute(aSlot, 1));
  mesh.material = surfaceMaterial(mesh.material, slots);
  return true;
}
