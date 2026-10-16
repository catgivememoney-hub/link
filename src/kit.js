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
export class Parts {
  constructor() { this.p = []; this.n = []; this.c = []; this.t = []; }
  add(geo, { m = null, color = () => [1, 1, 1], tip = () => 0, flat = false, normal = null, flip = false } = {}) {
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
    const v = new THREE.Vector3(), n = new THREE.Vector3();
    for (let i = 0; i < P.count; i++) {
      v.fromBufferAttribute(P, i); n.fromBufferAttribute(N, i);
      if (normal) normal(v, n, i);
      const c = color(v, n, i);
      this.p.push(v.x, v.y, v.z); this.n.push(n.x, n.y, n.z); this.c.push(c[0], c[1], c[2]); this.t.push(tip(v, n));
    }
    return this;
  }
  // raw triangles: list of [x,y,z] points, 3 per triangle
  tris(pts, color, tip = () => 0, up = null) {
    for (let i = 0; i < pts.length; i += 3) {
      const a = new THREE.Vector3(...pts[i]), b = new THREE.Vector3(...pts[i + 1]), c = new THREE.Vector3(...pts[i + 2]);
      const fn = up ? up.clone() : new THREE.Vector3().subVectors(c, b).cross(new THREE.Vector3().subVectors(a, b)).normalize();
      [a, b, c].forEach((v) => { const col = color(v); this.p.push(v.x, v.y, v.z); this.n.push(fn.x, fn.y, fn.z); this.c.push(col[0], col[1], col[2]); this.t.push(tip(v)); });
    }
    return this;
  }
  geometry() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.p, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.n, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.c, 3));
    g.setAttribute('aTip', new THREE.Float32BufferAttribute(this.t, 1));
    g.computeBoundingSphere(); g.computeBoundingBox();
    return g;
  }
}
export const M = (x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = sx, sz = sx) =>
  new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz, 'YXZ')), new THREE.Vector3(sx, sy, sz));

/* ---------- the shared material: grows with the scene, sways, gets moss / snow / frost ---------- */
export const coverMaterial = (shared, show, { sway = 0, side = THREE.FrontSide, color = 0xffffff, snowBias = 0, sink = 0, softBack = false, crisp = false, snowMask = false, grain = 0 } = {}) => {
  const mat = new THREE.MeshLambertMaterial({ vertexColors: true, side, color });
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, shared, { uShow: show });
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>
        uniform float uShow, uTime, uSnowCover, uMoss, uFrost;
        attribute float aTip;
        varying float vSnowA; varying float vMossA; varying float vTipA; varying vec3 vObj;`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vObj = position;
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
        vMossA = uMoss * smoothstep(0.0, 0.8, cWN.y) * (0.6 + 0.4 * patchy);
        vTipA = aTip * uFrost;
        ${sway ? `float sd = cIP.x * 0.071 + cIP.z * 0.053;
        float sw = (sin(uTime * 1.3 + sd) + 0.45 * sin(uTime * 3.1 + sd * 1.7)) * ${sway.toFixed(4)} * position.y * position.y;
        transformed.x += sw; transformed.z += sw * 0.7;` : ''}
        ${sink ? `transformed.y -= (1.0 - uShow) * ${sink.toFixed(1)};` : 'transformed *= uShow;'}`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        uniform vec3 uSnowC, uMossC; varying float vSnowA; varying float vMossA; varying float vTipA; varying vec3 vObj;
        // wood grain + fine speckle, so surfaces feel like real material up close
        float gH(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
        float gN(vec3 p) { vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(mix(gH(i), gH(i + vec3(1, 0, 0)), f.x), mix(gH(i + vec3(0, 1, 0)), gH(i + vec3(1, 1, 0)), f.x), f.y),
                     mix(mix(gH(i + vec3(0, 0, 1)), gH(i + vec3(1, 0, 1)), f.x), mix(gH(i + vec3(0, 1, 1)), gH(i + vec3(1, 1, 1)), f.x), f.y), f.z); }
        float grainH(vec3 p) { return gN(vec3(p.x * 1.3 + p.z * 0.4, p.y * 24.0, p.z * 1.3)) * 0.65 + gN(p * 11.0) * 0.35; }`)
      .replace('#include <normal_fragment_begin>', `#include <normal_fragment_begin>
        ${softBack ? '#ifdef DOUBLE_SIDED\n normal *= faceDirection;\n #endif' : ''}
        ${grain ? `{
          float gh = grainH(vObj);
          vec2 dHdxy = vec2(dFdx(gh), dFdy(gh)) * ${grain.toFixed(3)};
          vec3 vSigmaX = dFdx(-vViewPosition), vSigmaY = dFdy(-vViewPosition);
          vec3 R1 = cross(vSigmaY, normal), R2 = cross(normal, vSigmaX);
          float fDet = dot(vSigmaX, R1) * faceDirection;
          vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
          normal = normalize(abs(fDet) * normal - vGrad);
        }` : ''}`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        ${grain ? 'diffuseColor.rgb *= 0.84 + 0.3 * grainH(vObj);' : ''}
        diffuseColor.rgb = mix(diffuseColor.rgb, uMossC * (0.7 + 0.3 * diffuseColor.g), clamp(vMossA, 0.0, 0.8));
        diffuseColor.rgb = mix(diffuseColor.rgb, uSnowC, clamp(vSnowA * 1.5 - 0.2, 0.0, 1.0));
        diffuseColor.rgb = mix(diffuseColor.rgb, uSnowC * 0.96, ${crisp ? 'smoothstep(0.42, 0.56, vTipA) * 0.95' : 'clamp(vTipA, 0.0, 0.9)'});`);
  };
  return mat;
};

