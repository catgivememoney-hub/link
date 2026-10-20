/* MEOW — small shared toolkit for building the 3D world: seeded random, noise,
   a geometry collector (Parts) and the material everything uses (coverMaterial). */
import * as THREE from 'three';

// seeded random, so the world looks the same every visit
export const mulberry = (a) => () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
export const h3 = (x, y, z) => { const s = Math.sin(x * 127.1 + y * 269.5 + z * 311.7) * 43758.5453; return s - Math.floor(s); };
export const n3 = (x, y, z) => {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
  const xf = x - xi, yf = y - yi, zf = z - zi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf), w = zf * zf * (3 - 2 * zf);
  const L = (a, b, t) => a + (b - a) * t;
  return L(L(L(h3(xi, yi, zi), h3(xi + 1, yi, zi), u), L(h3(xi, yi + 1, zi), h3(xi + 1, yi + 1, zi), u), v),
    L(L(h3(xi, yi, zi + 1), h3(xi + 1, yi, zi + 1), u), L(h3(xi, yi + 1, zi + 1), h3(xi + 1, yi + 1, zi + 1), u), v), w);
};

/* ---------- geometry helpers ---------- */
// collect pieces (any geometry + a transform + colour rule) into one BufferGeometry
// Surface kinds the material can draw (wood grain, stone, plaster, cloth …). A colour rule
// can carry its kind (see `kind()` below); wood and logs pick their grain direction from
// the piece's longest side.
export const MAT = { plain: 0, woodX: 1, woodZ: 2, woodY: 3, stone: 4, plaster: 5, fabric: 6, metal: 7, leather: 8, logX: 9, logZ: 10, paper: 11, shingle: 12 };
export const kind = (k, fn) => { fn.kind = k; return fn; };
export class Parts {
  constructor() { this.p = []; this.n = []; this.c = []; this.t = []; this.k = []; }
  clear() { this.p.length = this.n.length = this.c.length = this.t.length = this.k.length = 0; }
  add(geo, { m = null, color = () => [1, 1, 1], tip = () => 0, flat = false, normal = null, flip = false, mat = null } = {}) {
    let g = geo.index ? geo.toNonIndexed() : geo.clone();
    if (m) g.applyMatrix4(m);
    if (flat || !g.attributes.normal) g.computeVertexNormals();
    if (flip) {   // turn the faces inside out (to see the inside of a shape)
      for (const name of ['position', 'normal', 'uv']) {
        const at = g.attributes[name]; if (!at) continue;
        const a = at.array, k = at.itemSize;
        for (let t = 0; t < at.count; t += 3) for (let j = 0; j < k; j++) { const x = a[(t + 1) * k + j]; a[(t + 1) * k + j] = a[(t + 2) * k + j]; a[(t + 2) * k + j] = x; }
      }
      const nn = g.attributes.normal.array; for (let i = 0; i < nn.length; i++) nn[i] = -nn[i];
    }
    const P = g.attributes.position, N = g.attributes.normal;
    // which surface this piece is
    let id = mat;
    if (id === null) {
      const k = color.kind || 'plain';
      if (k === 'wood' || k === 'log') {
        g.computeBoundingBox(); const s = new THREE.Vector3(); g.boundingBox.getSize(s);
        const ax = s.x >= s.y && s.x >= s.z ? 'X' : s.z >= s.y ? 'Z' : 'Y';
        id = k === 'log' ? (ax === 'Z' ? MAT.logZ : MAT.logX) : MAT['wood' + ax];
      } else id = MAT[k] ?? 0;
    }
    const v = new THREE.Vector3(), n = new THREE.Vector3();
    for (let i = 0; i < P.count; i++) {
      v.fromBufferAttribute(P, i); n.fromBufferAttribute(N, i);
      if (normal) normal(v, n, i);
      const c = color(v, n, i);
      this.p.push(v.x, v.y, v.z); this.n.push(n.x, n.y, n.z); this.c.push(c[0], c[1], c[2]); this.t.push(tip(v, n)); this.k.push(id);
    }
    return this;
  }
  // raw triangles: list of [x,y,z] points, 3 per triangle
  tris(pts, color, tip = () => 0, up = null) {
    for (let i = 0; i < pts.length; i += 3) {
      const a = new THREE.Vector3(...pts[i]), b = new THREE.Vector3(...pts[i + 1]), c = new THREE.Vector3(...pts[i + 2]);
      const fn = up ? up.clone() : new THREE.Vector3().subVectors(c, b).cross(new THREE.Vector3().subVectors(a, b)).normalize();
      const id = MAT[color.kind] ?? (color.kind === 'wood' ? MAT.woodY : 0);
      [a, b, c].forEach((v) => { const col = color(v); this.p.push(v.x, v.y, v.z); this.n.push(fn.x, fn.y, fn.z); this.c.push(col[0], col[1], col[2]); this.t.push(tip(v)); this.k.push(id); });
    }
    return this;
  }
  geometry() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.p, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.n, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.c, 3));
    g.setAttribute('aTip', new THREE.Float32BufferAttribute(this.t, 1));
    g.setAttribute('aMat', new THREE.Float32BufferAttribute(this.k, 1));
    g.computeBoundingSphere(); g.computeBoundingBox();
    return g;
  }
}
// a box with soft rounded edges (like real furniture, cushions, mouldings)
export const rbox = (w, h, d, r = 0.02, k = 2) => {
  const s = 2 * k + 1, g = new THREE.BoxGeometry(1, 1, 1, s, s, s);
  const half = [w / 2, h / 2, d / 2], rr = Math.min(r, w / 2 - 1e-4, h / 2 - 1e-4, d / 2 - 1e-4);
  const P = g.attributes.position, N = g.attributes.normal, p = [0, 0, 0], q = [0, 0, 0];
  for (let i = 0; i < P.count; i++) {
    for (let a = 0; a < 3; a++) {
      const t = Math.round((P.getComponent(i, a) + 0.5) * s), hh = half[a];
      // the first k and last k segments cover the rounding, the middle one the flat face
      p[a] = t <= k ? -hh + rr * (t / k) : t >= s - k ? hh - rr * ((s - t) / k) : 0;
      if (t > k && t < s - k) p[a] = 0;
      q[a] = Math.max(-(hh - rr), Math.min(hh - rr, p[a]));
    }
    // points on a face that are not near an edge: push them to the face
    let dx = p[0] - q[0], dy = p[1] - q[1], dz = p[2] - q[2];
    const nx = N.getX(i), ny = N.getY(i), nz = N.getZ(i);
    if (Math.abs(nx) > 0.5) dx = Math.sign(nx) * Math.max(Math.abs(dx), 1e-6); if (Math.abs(ny) > 0.5) dy = Math.sign(ny) * Math.max(Math.abs(dy), 1e-6); if (Math.abs(nz) > 0.5) dz = Math.sign(nz) * Math.max(Math.abs(dz), 1e-6);
    const l = Math.hypot(dx, dy, dz) || 1;
    P.setXYZ(i, q[0] + dx / l * rr, q[1] + dy / l * rr, q[2] + dz / l * rr);
    N.setXYZ(i, dx / l, dy / l, dz / l);
  }
  return g;
};
// a turned shape (table legs, balusters, vases): profile = [[radius, y], …] from bottom to top
export const lathe = (profile, seg = 10) => new THREE.LatheGeometry(profile.map(([r, y]) => new THREE.Vector2(Math.max(0.0005, r), y)), seg);

export const M = (x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = sx, sz = sx) =>
  new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz, 'YXZ')), new THREE.Vector3(sx, sy, sz));

/* ---------- the shared material: grows with the scene, sways, gets moss / snow / frost ---------- */
// wind strength for every swaying plant and tree (main.js sets it per scene and graphics level)
export const WIND = { value: 1 };
export const coverMaterial = (shared, show, { sway = 0, side = THREE.FrontSide, color = 0xffffff, snowBias = 0, sink = 0, softBack = false, crisp = false, snowMask = false, grain = 0, rich = false, indoor = false, tree = false } = {}) => {
  const mat = new THREE.MeshLambertMaterial({ vertexColors: true, side, color });
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, shared, { uShow: show, uWind: WIND });
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>
        uniform float uShow, uTime, uSnowCover, uMoss, uFrost, uWind;
        attribute float aTip; attribute float aMat;
        varying float vSnowA; varying float vMossA; varying float vTipA; varying vec3 vObj; varying float vMat; varying vec3 vObjN;
        ${tree ? 'attribute float aHash; uniform float uBare; varying float vHash; varying float vLeaf;' : ''}`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vObj = position; vMat = aMat; vObjN = objectNormal;
        mat4 cIM = mat4(1.0);
        #ifdef USE_INSTANCING
          cIM = instanceMatrix;
        #endif
        vec4 cIP = modelMatrix * cIM * vec4(0.0, 0.0, 0.0, 1.0);
        vec4 cWP = modelMatrix * cIM * vec4(position, 1.0);
        mat3 cM3 = mat3(cIM);
        vec3 cWN = objectNormal / vec3(dot(cM3[0], cM3[0]), dot(cM3[1], cM3[1]), dot(cM3[2], cM3[2]));   // undo stretching
        cWN = normalize(mat3(modelMatrix) * (cM3 * cWN));
        float patchy = 0.75 + 0.25 * sin(cWP.x * 0.37 + sin(cWP.z * 0.23) * 2.0) * sin(cWP.z * 0.41);
        vSnowA = uSnowCover * smoothstep(${(0.2 - snowBias).toFixed(3)}, ${(0.7 - snowBias).toFixed(3)}, cWN.y) * patchy;
        ${snowMask ? 'vSnowA *= aTip;' : ''}
        vMossA = uMoss * smoothstep(0.0, 0.8, cWN.y) * (0.6 + 0.4 * patchy)${snowMask ? ' * aTip' : ''};
        vTipA = aTip * uFrost;
        ${sway ? `float sd = cIP.x * 0.071 + cIP.z * 0.053;
        // gusts roll across the land in waves; between them the plants still flutter a little
        float gust = 0.55 + 0.45 * sin(uTime * 0.45 - cIP.x * 0.011 - cIP.z * 0.007);
        gust = gust * gust * 1.6;
        float sw = (0.8 * sin(uTime * 1.6 + sd) + 0.45 * sin(uTime * 3.4 + sd * 1.7) + 0.22 * sin(uTime * 6.3 + sd * 2.3))
                 * ${sway.toFixed(4)} * ${tree ? '1.15' : '2.3'} * uWind * (0.35 + gust) * position.y * position.y;
        transformed.x += sw; transformed.z += sw * 0.6;` : ''}
        ${tree ? `vHash = aHash; vLeaf = step(12.5, aMat);
        // autumn: some trees drop all their needles (only trunk and branches stay)
        float bare = step(aHash, uBare) * vLeaf;
        transformed.xz *= 1.0 - bare * 0.985;` : ''}
        ${sink ? `transformed.y -= (1.0 - uShow) * ${sink.toFixed(1)};` : 'transformed *= uShow;'}`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        uniform vec3 uSnowC, uMossC; varying float vSnowA; varying float vMossA; varying float vTipA; varying vec3 vObj;
        // wood grain + fine speckle, so surfaces feel like real material up close
        float gH(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
        float gN(vec3 p) { vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(mix(gH(i), gH(i + vec3(1, 0, 0)), f.x), mix(gH(i + vec3(0, 1, 0)), gH(i + vec3(1, 1, 0)), f.x), f.y),
                     mix(mix(gH(i + vec3(0, 0, 1)), gH(i + vec3(1, 0, 1)), f.x), mix(gH(i + vec3(0, 1, 1)), gH(i + vec3(1, 1, 1)), f.x), f.y), f.z); }
        float grainH(vec3 p) { return gN(vec3(p.x * 1.3 + p.z * 0.4, p.y * 24.0, p.z * 1.3)) * 0.65 + gN(p * 11.0) * 0.35; }
        ${rich ? RICH_GLSL : ''}
        varying float vMat; varying vec3 vObjN;
        float gRichH = 0.0; float gAO = 1.0; float gBounce = 0.0;
        ${tree ? `uniform float uFall, uBloom, uLush; varying float vHash; varying float vLeaf;
        vec3 autumn(float h) {
          return h < 0.25 ? vec3(0.86, 0.42, 0.1) : h < 0.5 ? vec3(0.72, 0.16, 0.08) : h < 0.75 ? vec3(0.92, 0.7, 0.16) : vec3(0.55, 0.3, 0.12);
        }` : ''}`)
      .replace('#include <normal_fragment_begin>', `#include <normal_fragment_begin>
        ${softBack ? '#ifdef DOUBLE_SIDED\n normal *= faceDirection;\n #endif' : ''}
        ${rich ? `{
          vec2 dHdxy = vec2(dFdx(gRichH), dFdy(gRichH)) * ${(grain || 0.02).toFixed(3)};
          vec3 vSigmaX = dFdx(-vViewPosition), vSigmaY = dFdy(-vViewPosition);
          vec3 R1 = cross(vSigmaY, normal), R2 = cross(normal, vSigmaX);
          float fDet = dot(vSigmaX, R1) * faceDirection;
          vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
          { vec3 nb = abs(fDet) * normal - vGrad; if (dot(nb, nb) > 1e-12) normal = normalize(nb); }   // (never NaN on a degenerate pixel)
        }` : grain ? `{
          float gh = grainH(vObj);
          vec2 dHdxy = vec2(dFdx(gh), dFdy(gh)) * ${grain.toFixed(3)};
          vec3 vSigmaX = dFdx(-vViewPosition), vSigmaY = dFdy(-vViewPosition);
          vec3 R1 = cross(vSigmaY, normal), R2 = cross(normal, vSigmaX);
          float fDet = dot(vSigmaX, R1) * faceDirection;
          vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
          { vec3 nb = abs(fDet) * normal - vGrad; if (dot(nb, nb) > 1e-12) normal = normalize(nb); }   // (never NaN on a degenerate pixel)
        }` : ''}`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        ${tree ? `{
          // seasons on the needles: summer lush green, spring blossom, autumn colours
          float shade = clamp(dot(vColor.rgb, vec3(0.33)), 0.2, 1.6);
          vec3 c = diffuseColor.rgb;
          c = mix(c, c * vec3(0.78, 1.45, 0.62) * 1.25, uLush * vLeaf);
          vec3 blossom = mix(vec3(0.98, 0.72, 0.8), vec3(0.98, 0.95, 0.92), step(0.86, vHash));
          c = mix(c, c * vec3(0.95, 1.3, 0.8), uBloom * vLeaf * 0.6);
          c = mix(c, blossom * shade * 0.75, uBloom * vLeaf * step(0.7, vHash));
          c = mix(c, autumn(fract(vHash * 7.31)) * shade * 0.8, uFall * vLeaf);
          diffuseColor.rgb = c;
        }` : ''}
        ${rich ? 'gRichH = richSurface(int(vMat + 0.5), vObj, vObjN, diffuseColor.rgb);' : grain ? 'diffuseColor.rgb *= 0.84 + 0.3 * grainH(vObj);' : ''}
        ${indoor ? `{
          // soft shadow in the corners: near the floor, under the ceiling, along the walls
          // three rooms: the cabin, and the library below with its gallery (mezzanine)
          bool low = vObj.y < -0.2;
          bool under = vObj.z < -7.6 || vObj.x < -4.8 || vObj.x > 1.6;   // beneath the gallery
          bool main = vObj.y < -3.55 || !under;
          float fy = !low ? vObj.y - 0.12 : main ? vObj.y + 6.6 : vObj.y + 3.4;
          float cy = !low ? 2.62 - vObj.y : (main && under) ? -3.7 - vObj.y : -0.3 - vObj.y;
          vec2 ext = low ? vec2(6.5, 5.95) : vec2(3.03, 2.33);
          vec2 cen = low ? vec2(0.0, -3.55) : vec2(0.0, 0.0);
          vec2 dw = ext - abs(vObj.xz - cen);
          float inside = step(0.0, min(dw.x, dw.y)) * step(-0.05, fy) * step(-0.05, cy);
          float ao = mix(0.55, 1.0, smoothstep(0.0, 0.6, fy)) * mix(0.75, 1.0, smoothstep(0.0, 0.45, cy)) * mix(0.72, 1.0, smoothstep(0.0, 0.5, min(dw.x, dw.y)));
          gAO = mix(1.0, ao, inside);
          // light bouncing up off the floor reaches the undersides (gallery, ceiling) in the library
          gBounce = low ? smoothstep(-0.4, -0.95, vObjN.y) * inside : 0.0;
        }` : ''}
        diffuseColor.rgb = mix(diffuseColor.rgb, uMossC * (0.7 + 0.3 * diffuseColor.g), clamp(vMossA, 0.0, 0.8));
        diffuseColor.rgb = mix(diffuseColor.rgb, uSnowC, clamp(vSnowA * 1.5 - 0.2, 0.0, 1.0));
        diffuseColor.rgb = mix(diffuseColor.rgb, uSnowC * 0.96, ${crisp ? 'smoothstep(0.42, 0.56, vTipA) * 0.95' : 'clamp(vTipA, 0.0, 0.9)'});`);
  };
  if (indoor) {
    const prev = mat.onBeforeCompile;
    mat.onBeforeCompile = (sh) => {
      prev(sh);
      sh.fragmentShader = sh.fragmentShader.replace('#include <aomap_fragment>', `#include <aomap_fragment>
        reflectedLight.indirectDiffuse *= 0.62 * gAO;
        reflectedLight.indirectDiffuse += diffuseColor.rgb * gBounce * 0.42;
        reflectedLight.directDiffuse *= mix(1.0, gAO, 0.7);`);
    };
  }
  return mat;
};

/* ---------- surfaces drawn in the shader (no image files) ----------
   Coordinates are the piece's own metres, so a plank's grain runs along the plank. */
const RICH_GLSL = /* glsl */`
  float fbm3(vec3 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += a * gN(p); p *= 2.03; a *= 0.5; } return s; }
  vec2 cellN(vec2 p) {
    vec2 i = floor(p), f = fract(p); float d1 = 8.0, d2 = 8.0, id = 0.0;
    for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
      vec2 g = vec2(float(x), float(y));
      vec2 o = vec2(gH(vec3(i + g, 1.0)), gH(vec3(i + g, 7.0)));
      vec2 r = g + o - f; float d = dot(r, r);
      if (d < d1) { d2 = d1; d1 = d; id = gH(vec3(i + g, 3.0)); } else if (d < d2) d2 = d;
    }
    return vec2(sqrt(d2) - sqrt(d1), id);
  }
  vec2 planeUV(vec3 p, vec3 n) { vec3 a = abs(n); return a.y > a.x && a.y > a.z ? p.xz : a.x > a.z ? p.zy : p.xy; }
  // returns a small height value (for the bumps) and changes the colour
  float richSurface(int m, vec3 p, vec3 n, inout vec3 col) {
    if (m == 0) { col *= 0.88 + 0.22 * gN(p * 9.0); return gN(p * 9.0) * 0.4; }
    if (m == 1 || m == 2 || m == 3 || m == 9 || m == 10 || m == 12) {
      float along = (m == 1 || m == 9) ? p.x : (m == 2 || m == 10) ? p.z : p.y;
      vec2 cr = (m == 1 || m == 9) ? p.yz : (m == 2 || m == 10) ? p.xy : p.xz;
      float streak = fbm3(vec3(along * 1.4, cr * 34.0));
      float warp = fbm3(vec3(along * 0.35, cr * 2.5)) * 3.0;
      float ring = abs(fract((cr.x + cr.y) * 12.0 + warp) - 0.5);
      float lines = smoothstep(0.09, 0.0, ring);
      col *= 0.78 + 0.36 * streak - 0.13 * lines;
      // the odd knot
      float kn = gN(vec3(along * 1.1, cr * 5.0));
      col *= 1.0 - 0.38 * smoothstep(0.8, 0.93, kn);
      // warm and cool patches, the way old timber weathers
      col *= mix(vec3(1.06, 0.98, 0.88), vec3(0.9, 0.93, 0.98), gN(vec3(along * 0.25, cr * 0.8)));
      float h = streak * 0.7 + lines * 0.25;
      if (m == 9 || m == 10) {
        // round logs: long drying cracks and a rougher, weathered skin
        float crack = smoothstep(0.035, 0.0, abs(gN(vec3(along * 0.22, cr * 2.2)) - 0.5));
        col *= 1.0 - 0.4 * crack;
        col *= 0.92 + 0.12 * gN(p * 26.0);
        h -= crack * 1.2;
      }
      if (m == 12) {
        // shingles: rows of overlapping, slightly different tiles
        vec2 uv = vec2(along * 5.0, cr.x * 9.0 + cr.y * 9.0);
        float row = floor(uv.y), tile = floor(uv.x + gH(vec3(row, 2.0, 0.0)) * 4.0);
        col *= 0.8 + 0.35 * gH(vec3(row, tile, 1.0));
        float edge = smoothstep(0.0, 0.08, fract(uv.y)) * smoothstep(0.0, 0.05, abs(fract(uv.x + gH(vec3(row, 2.0, 0.0)) * 4.0) - 0.5) * 2.0);
        col *= 0.7 + 0.3 * edge; h = edge;
      }
      return h;
    }
    vec2 uv = planeUV(p, n);
    if (m == 4) {   // stone: separate stones with mortar between
      vec2 c = cellN(uv * 3.4);
      float edge = smoothstep(0.04, 0.16, c.x);
      vec3 tint = mix(vec3(1.0, 0.95, 0.88), vec3(0.88, 0.93, 1.0), gH(vec3(c.y * 13.0, 1.0, 2.0)));
      col *= mix(0.72, 1.18, c.y) * tint;
      col *= 0.86 + 0.24 * gN(p * 30.0);
      col = mix(col * 0.5 + vec3(0.06, 0.055, 0.05), col, edge);
      return edge * 0.9 + gN(p * 14.0) * 0.25;
    }
    if (m == 5) { col *= 0.9 + 0.14 * fbm3(p * 2.5) + 0.04 * gN(p * 40.0); return gN(p * 30.0) * 0.35; }
    if (m == 6) {   // cloth: a fine weave with a little fuzz
      // the weave fades out when it gets too fine to draw (no shimmering stripes)
      float fine = 1.0 - smoothstep(0.4, 1.2, max(fwidth(uv.x), fwidth(uv.y)) * 380.0 / 6.283);
      float w = sin(uv.x * 380.0) * sin(uv.y * 380.0) * fine;
      col *= 0.9 + 0.07 * w + 0.1 * gN(p * 45.0) * mix(0.5, 1.0, fine);
      return w * 0.12;
    }
    if (m == 7) {   // metal: brushed, with a touch of patina
      col *= 0.82 + 0.28 * gN(vec3(uv.x * 90.0, uv.y * 2.0, 0.0));
      col = mix(col, col * vec3(0.72, 0.9, 0.82), smoothstep(0.65, 0.85, fbm3(p * 7.0)) * 0.45);
      return 0.0;
    }
    if (m == 8) {   // leather: fine crackle and soft creases
      vec2 c = cellN(uv * 30.0);
      float e = smoothstep(0.0, 0.18, c.x);
      col *= 0.8 + 0.22 * e + 0.12 * gN(p * 4.0);
      return e * 0.5;
    }
    if (m == 11) { col *= 0.95 + 0.07 * gN(p * 50.0); return 0.0; }
    return 0.0;
  }
`;

