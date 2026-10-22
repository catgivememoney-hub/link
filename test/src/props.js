/* MEOW — things that live in the landscape (no animals).
   Rocks, fallen logs, stumps, ferns, grass, reeds, a log cabin with a dock and a
   little boat, a stone circle, sea stacks with a lighthouse, rain rings on the
   water and footprints in the snow.

   Every group fades in and out with the scene: it grows out of / sinks into the
   ground while the scene cross-fades. The amounts per scene live in SHOW below. */
import * as THREE from 'three';
import { mergeVertices } from 'three-addons/utils/BufferGeometryUtils.js';

/* how much of each group every scene shows (0 = hidden, 1 = fully there) */
export const SHOW = {
  //          rocks logs ferns grass reeds cabin glow  stones stacks ripples frost snowC moss
  rain:   [   1,    1,   1,    1,    1,    1,   0.65, 0,     0,     1,      0,    0,    0.75],
  frost:  [   1,    1,   0,    0.85, 0.7,  1,   0.25, 1,     0,     0,      1,    0.55, 0   ],
  mist:   [   1,    1,   1,    1,    1,    1,   0.35, 0,     0,     0,      0,    0,    1   ],
  snow:   [   1,    1,   0,    0.3,  0.45, 1,   0.6,  0,     0,     0,      1,    1,    0   ],
  night:  [   1,    1,   0.9,  1,    1,    1,   1,    0,     0,     0,      0,    0,    0.5 ],
  aurora: [   1,    1,   0,    0.6,  0.6,  1,   1,    1,     0,     0,      0.8,  0.75, 0   ],
  ocean:  [   1,    0,   0,    0.7,  0,    0,   0,    0,     1,     0,      0,    0,    0.3 ],
  spring: [   1,    1,   1,    1,    1,    1,   0.3,  0,     0,     0,      0,    0,    0.5 ],
  summer: [   1,    1,   0.8,  1,    0.7,  1,   0.2,  0,     0,     0,      0,    0,    0.2 ],
  fall:   [   1,    1,   0.6,  0.8,  0.9,  1,   0.5,  0,     0,     0,      0,    0,    0.4 ]
};
export const SHOW_KEYS = ['pRocks', 'pLogs', 'pFerns', 'pGrass', 'pReeds', 'pCabin', 'pGlow', 'pStones', 'pStacks', 'pRipples', 'pFrost', 'pSnowCover', 'pMoss'];

import { mulberry, n3, Parts, M, coverMaterial, kind } from './kit.js';
import { CABIN, HOUSE_ZONES } from './house.js';
import { createContactShadows } from './contact.js';

/* ---------- build everything ---------- */
export function createProps({ scene, heightAt, U, snowColor, clear = [] }) {
  const R = mulberry(20260707);
  const rr = (a, b) => a + R() * (b - a);
  const shared = {
    uTime: U.uTime,
    uSnowCover: { value: 0 }, uMoss: { value: 0 }, uFrost: { value: 0 },
    uSnowC: snowColor, uMossC: { value: new THREE.Color('#4f6a3c') }
  };
  const show = {}; SHOW_KEYS.forEach((k) => { show[k] = { value: 0 }; });
  // season-only things (amounts come straight from the scene values)
  const SEASON_KEYS = ['leaves', 'flowers', 'hives', 'creek'];
  SEASON_KEYS.forEach((k) => { show[k] = { value: 0 }; });
  const groups = [];          // [mesh, key]
  const solids = [];          // things you can't walk through: {x, z, r, key}
  const zones = [];           // clearings where no trees grow: {x, z, r}
  const slope = (x, z) => { const e = 2; return Math.hypot(heightAt(x + e, z) - heightAt(x - e, z), heightAt(x, z + e) - heightAt(x, z - e)) / (2 * e); };
  const groundQ = (x, z, yaw, tiltK = 1) => {
    // turn to face `yaw` and lean with the slope of the ground
    const e = 2;
    const nx = heightAt(x - e, z) - heightAt(x + e, z), nz = heightAt(x, z - e) - heightAt(x, z + e);
    const n = new THREE.Vector3(nx * tiltK, 2 * e, nz * tiltK).normalize();
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), n);
    return q.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw));
  };
  const clearOf = (x, z) => !clear.some((c) => Math.hypot(c.x - x, c.z - z) < c.r);
  const add = (obj, key, { cast = false, receive = true } = {}) => {
    obj.castShadow = cast; obj.receiveShadow = receive; scene.add(obj); groups.push([obj, key]); return obj;
  };
  // instances are split into patches of land, so whatever is behind you isn't drawn at all
  const CHUNK = 160;
  // soft contact shadows under things that sit on the ground
  const blobs = [];
  const yawOf = (q) => { const d = new THREE.Vector3(1, 0, 0).applyQuaternion(q); return Math.atan2(-d.z, d.x); };
  const shadowsFor = (list, key, size, strength, channel) => {
    const items = list.map((it) => { const [sx, sz] = size(it.s); return { x: it.p.x, z: it.p.z, sx, sz, yaw: yawOf(it.q) }; });
    blobs.push({ key, b: createContactShadows(scene, heightAt, items, strength, channel) });
  };
  const instanced = (geo, mat, list, key, opts) => {
    const cells = new Map();
    list.forEach((it) => { const k = Math.floor(it.p.x / CHUNK) + ',' + Math.floor(it.p.z / CHUNK); if (!cells.has(k)) cells.set(k, []); cells.get(k).push(it); });
    const m = new THREE.Matrix4();
    cells.forEach((items) => {
      const im = new THREE.InstancedMesh(geo, mat, items.length);
      items.forEach((it, i) => { m.compose(it.p, it.q, it.s); im.setMatrixAt(i, m); });
      im.computeBoundingSphere();
      add(im, key, opts);
    });
  };

  /* ===== special places (picked first, so trees leave them clear) ===== */
  const findSpot = (x0, z0, rad, test) => {
    let best = null, bd = 1e9;
    for (let i = 0; i < 900; i++) {
      const a = R() * Math.PI * 2, d = Math.sqrt(R()) * rad;
      const x = x0 + Math.cos(a) * d, z = z0 + Math.sin(a) * d;
      if (test(x, z) && d < bd) { bd = d; best = { x, z }; }
    }
    return best || { x: x0, z: z0 };
  };
  // log cabin: on the east shore of the lake, a little above the water, facing the lake
  const cabinAt = { x: CABIN.x, z: CABIN.z };
  zones.push({ x: cabinAt.x, z: cabinAt.z, r: 34 });
  HOUSE_ZONES.forEach((q) => zones.push(q));          // the new stilt house, its dock and the boat
  // stone circle: an open rise north of the lake
  const circleAt = findSpot(-95, -258, 50, (x, z) => { const h = heightAt(x, z); return h > 9 && h < 32 && slope(x, z) < 0.16; });
  zones.push({ x: circleAt.x, z: circleAt.z, r: 30 });

  /* ===== rocks ===== */
  const rockGeo = (seed, detail) => {
    let g = new THREE.IcosahedronGeometry(1, detail + 1); g.deleteAttribute('normal'); g.deleteAttribute('uv'); g = mergeVertices(g);   // shared corners → smooth, natural shading
    const P = g.attributes.position, v = new THREE.Vector3();
    for (let i = 0; i < P.count; i++) {
      v.fromBufferAttribute(P, i);
      const k = 1 + (n3(v.x * 1.6 + seed, v.y * 1.6, v.z * 1.6) - 0.5) * 0.55 + (n3(v.x * 4 + seed, v.y * 4, v.z * 4) - 0.5) * 0.14;
      v.multiplyScalar(k);
      v.y = v.y < -0.25 ? -0.25 + (v.y + 0.25) * 0.2 : v.y;    // flat underside sits in the ground
      v.y *= 0.72; v.x *= 1.12;
      P.setXYZ(i, v.x, v.y, v.z);
    }
    g.computeVertexNormals();
    return new Parts().add(g, {
      flat: false,
      color: (p) => { const c = 0.5 + n3(p.x * 3 + seed, p.y * 3, p.z * 3) * 0.28 + p.y * 0.12; return [c, c * 0.99, c * 0.95]; }
    }).geometry();
  };
  const rockMat = coverMaterial(shared, show.pRocks, { color: 0x8d8f90, snowBias: 0.05, tex: 'rock', texTile: 5 });
  const rockSets = [[], [], []], pebbles = [];
  const putRock = (x, z, s, list, solid) => {
    const h = heightAt(x, z);
    const sc = new THREE.Vector3(s * rr(0.8, 1.25), s * rr(0.6, 1.1), s * rr(0.8, 1.2));
    // sunk well into the ground and only slightly tilted, so no edge ever lifts off a slope
    const sink = s * 0.3 + Math.abs(heightAt(x + s, z) - heightAt(x - s, z)) * 0.5 + Math.abs(heightAt(x, z + s) - heightAt(x, z - s)) * 0.5;
    list.push({ p: new THREE.Vector3(x, h - sink, z), q: groundQ(x, z, R() * 6.28, 0.3), s: sc });
    // top: how high it is (you can jump over it or stand on it); rt: the flat-ish area on top
    if (solid) solids.push({ x, z, r: s * 0.92 + 0.45, key: 'pRocks', top: h - sink + sc.y * 0.82, rt: s * 0.75 });
  };
  for (let i = 0, tries = 0; i < 260 && tries < 20000; tries++) {
    const x = rr(-560, 560), z = rr(-560, 230), h = heightAt(x, z);
    if (h < -1.5 || h > 75) continue;
    const big = R() < 0.25;
    const s = big ? rr(4, 9) : rr(1.2, 3.4);
    if (zones.some((q) => Math.hypot(q.x - x, q.z - z) < q.r + s) || !clearOf(x, z)) continue;
    putRock(x, z, s, rockSets[i % 3], s > 2.2); i++;
  }
  // a few boulders along the shore, half in the water
  for (let i = 0, tries = 0; i < 70 && tries < 9000; tries++) {
    const x = rr(-260, 260), z = rr(-260, 160), h = heightAt(x, z);
    if (h < -1.2 || h > 1.5) continue;
    if (zones.some((q) => Math.hypot(q.x - x, q.z - z) < q.r) || !clearOf(x, z)) continue;
    putRock(x, z, rr(1.5, 5), rockSets[i % 3], true); i++;
  }
  for (let i = 0, tries = 0; i < 700 && tries < 20000; tries++) {
    const x = rr(-480, 480), z = rr(-480, 200), h = heightAt(x, z);
    if (h < -0.6 || h > 70 || !clearOf(x, z) || zones.some((q) => Math.hypot(q.x - x, q.z - z) < q.r)) continue;
    putRock(x, z, rr(0.35, 1.0), pebbles, false); i++;
  }
  rockSets.forEach((list, i) => instanced(rockGeo(i * 17.3, 2), rockMat, list, 'pRocks', { cast: true }));
  shadowsFor(rockSets.flat(), 'pRocks', (sc) => [sc.x * 1.45, sc.z * 1.45], 0.38, 'rocks');   // just a soft darkening where it meets the ground
  instanced(rockGeo(5.1, 1), rockMat, pebbles, 'pRocks');

  /* ===== fallen logs and stumps ===== */
  const bark = (p) => { const c = 0.42 + n3(p.x * 9, p.y * 2, p.z * 2) * 0.22 + Math.sin(Math.atan2(p.z, p.y) * 9) * 0.04; return [c * 1.0, c * 0.82, c * 0.66]; };
  const logGeo = (() => {
    const parts = new Parts();
    const body = new THREE.CylinderGeometry(1, 0.9, 1, 12, 5, true);
    const P = body.attributes.position, v = new THREE.Vector3();
    for (let i = 0; i < P.count; i++) { v.fromBufferAttribute(P, i); const k = 1 + (n3(v.x * 3, v.y * 6, v.z * 3) - 0.5) * 0.18; P.setXYZ(i, v.x * k, v.y, v.z * k); }
    body.computeVertexNormals();
    parts.add(body, { m: M(0, 0, 0, 0, 0, Math.PI / 2), color: bark });
    // cut ends with growth rings
    const ring = (p) => { const r = Math.hypot(p.y, p.z); const c = 0.62 + Math.sin(r * 26) * 0.05 - r * 0.12; return [c * 1.05, c * 0.9, c * 0.72]; };
    parts.add(new THREE.CircleGeometry(0.88, 12), { m: M(0.5, 0, 0, 0, Math.PI / 2, 0), color: ring });
    parts.add(new THREE.CircleGeometry(0.98, 12), { m: M(-0.5, 0, 0, 0, -Math.PI / 2, 0), color: ring });
    // a broken branch
    parts.add(new THREE.CylinderGeometry(0.12, 0.2, 0.9, 6, 1), { m: M(0.15, 0.55, 0.3, 0.5, 0, -0.5, 1, 1, 1), color: bark });
    return parts.geometry();
  })();
  const stumpGeo = (() => {
    const parts = new Parts();
    const body = new THREE.CylinderGeometry(0.85, 1, 1, 12, 3, true);
    const P = body.attributes.position, v = new THREE.Vector3();
    for (let i = 0; i < P.count; i++) {
      v.fromBufferAttribute(P, i);
      const a = Math.atan2(v.z, v.x);
      const flare = v.y < -0.3 ? 1 + 0.35 * Math.pow(Math.max(0, Math.sin(a * 5)), 2) : 1;     // roots
      const top = v.y > 0.45 ? (n3(v.x * 4, 0, v.z * 4) - 0.5) * 0.3 : 0;                        // jagged break
      P.setXYZ(i, v.x * flare, v.y + top, v.z * flare);
    }
    body.computeVertexNormals();
    parts.add(body, { m: M(0, 0.5, 0), color: (p) => { const c = bark(p); return c; } });
    parts.add(new THREE.CircleGeometry(0.85, 12), { m: M(0, 0.98, 0, -Math.PI / 2, 0, 0), color: (p) => { const r = Math.hypot(p.x, p.z); const c = 0.6 + Math.sin(r * 22) * 0.05; return [c * 1.05, c * 0.9, c * 0.7]; } });
    return parts.geometry();
  })();
  const woodMat = coverMaterial(shared, show.pLogs, { color: 0xb7a99a, tex: 'log', texTile: 1.4 });

  /* ===== stone circle ===== */
  const stonesMesh = (() => {
    const parts = new Parts();
    const stone = (seed) => {
      const g = new THREE.BoxGeometry(1, 1, 1, 3, 5, 2);
      const P = g.attributes.position, v = new THREE.Vector3();
      for (let i = 0; i < P.count; i++) {
        v.fromBufferAttribute(P, i);
        const taper = 1 - (v.y + 0.5) * 0.3;
        const k = 1 + (n3(v.x * 3 + seed, v.y * 3, v.z * 3) - 0.5) * 0.35;
        const round = v.y > 0.35 ? 1 - (v.y - 0.35) * 1.2 * Math.hypot(v.x, v.z) : 1;   // weathered top
        P.setXYZ(i, v.x * taper * k * round, v.y + (v.y > 0.4 ? (n3(v.x * 5, seed, v.z * 5) - 0.5) * 0.15 : 0), v.z * taper * k * round);
      }
      return g;
    };
    const grey = (seed) => (p) => { const c = 0.5 + n3(p.x * 2 + seed, p.y * 2, p.z * 2) * 0.22; return [c * 0.97, c, c * 0.98]; };
    const N = 11, RAD = 15;
    for (let i = 0; i < N; i++) {
      const a = (i / N) * Math.PI * 2 + rr(-0.06, 0.06);
      const x = Math.cos(a) * RAD, z = Math.sin(a) * RAD;
      const tall = rr(5, 9.5), lean = i === 4 ? 0.35 : rr(-0.06, 0.06);
      const y = heightAt(circleAt.x + x, circleAt.z + z) - heightAt(circleAt.x, circleAt.z);
      parts.add(stone(i * 3.7), { m: M(x, y + tall / 2 - 0.6, z, lean, -a + Math.PI / 2, rr(-0.05, 0.05), rr(2.2, 3.2), tall, rr(1.0, 1.5)), flat: true, color: grey(i) });
      solids.push({ x: circleAt.x + x, z: circleAt.z + z, r: 3.6, key: 'pStones' });
    }
    // fallen stone and the altar in the middle
    parts.add(stone(40), { m: M(3, 0.4, -2, 0.1, 0.7, Math.PI / 2 - 0.05, 2.6, 7, 1.4), flat: true, color: grey(40) });
    parts.add(stone(50), { m: M(-2, 0.5, 2.5, 0, 0.3, 0, 4.5, 1.5, 2.6), flat: true, color: grey(50) });
    solids.push({ x: circleAt.x + 3, z: circleAt.z - 2, r: 4.5, key: 'pStones' }, { x: circleAt.x - 2, z: circleAt.z + 2.5, r: 4, key: 'pStones' });
    const m = new THREE.Mesh(parts.geometry(), coverMaterial(shared, show.pStones, { color: 0x9a9c9c, tex: 'rock', texTile: 2.5 }));
    m.position.set(circleAt.x, heightAt(circleAt.x, circleAt.z), circleAt.z);
    return add(m, 'pStones', { cast: true });
  })();
  void stonesMesh;

  /* ===== sea stacks and a lighthouse on a rock island (sea scene, water at 11) ===== */
  const stackGeo = (seed, island) => {
    const g = new THREE.CylinderGeometry(island ? 0.85 : 0.5, 1.15, 1, 12, 10, false);
    const P = g.attributes.position, v = new THREE.Vector3();
    for (let i = 0; i < P.count; i++) {
      v.fromBufferAttribute(P, i);
      const up = v.y + 0.5;
      // layered, eroded rock: ledges, notches and a broken, uneven top
      let k = 1 + (n3(v.x * 2 + seed, v.y * 5, v.z * 2) - 0.5) * 0.6 + Math.sin(v.y * 26 + seed) * 0.04;
      if (!island && up > 0.55) k *= 1 - (n3(seed, v.y * 3, 1) - 0.3) * 0.5;
      const topJag = v.y > 0.49 && !island ? (n3(v.x * 3 + seed, 0, v.z * 3) - 0.5) * 0.25 : 0;
      const lean = island ? 0 : up * up * 0.18 * Math.sin(seed);
      P.setXYZ(i, v.x * k + lean, v.y + topJag, v.z * k);
    }
    return g;
  };
  const stackParts = new Parts();
  const ISLE = { x: 132, z: -178 };
  [[-125, -135, 9, 70], [-150, -95, 5, 36], [-170, -70, 7, 48], [-82, -215, 8, 95], [52, -255, 10, 58], [72, -240, 4.5, 30], [195, -105, 6, 40], [-30, -300, 9, 80], [ISLE.x, ISLE.z, 30, 22]].forEach(([x, z, r, h], i, all) => {
    const island = i === all.length - 1;
    const top = 11 + h * 0.5 - 0.1;
    stackParts.add(stackGeo(i * 9.1, island), {
      m: M(x, top - h / 2 - 8, z, 0, i, 0, r, h + 16, r * rr(0.8, 1.1)), flat: true,
      color: (p) => { const c = 0.42 + n3(p.x * 0.2, p.y * 0.6, p.z * 0.2) * 0.24; const lush = p.y > top - 1.5 ? 0.12 : 0; return [c - lush * 0.4, c + lush * 0.3, c * 0.95 - lush * 0.3]; }
    });
    solids.push({ x, z, r: r * 1.2 + 1.5, key: 'pStacks' });
  });
  // lighthouse (white with bands), gallery, lamp room, cap
  {
    const base = 11 + 22 * 0.5 - 0.1, L = new THREE.Vector3(ISLE.x, base, ISLE.z);
    const tower = new THREE.CylinderGeometry(2.6, 3.8, 26, 16, 8, false);
    stackParts.add(tower, { m: M(L.x, L.y + 13, L.z), color: (p) => { const band = Math.floor((p.y - base) / 6.5) % 2; return band ? [0.55, 0.22, 0.2] : [0.92, 0.91, 0.88]; } });
    stackParts.add(new THREE.CylinderGeometry(4, 4, 0.5, 16), { m: M(L.x, L.y + 26.2, L.z), color: () => [0.2, 0.2, 0.22] });
    stackParts.add(new THREE.CylinderGeometry(2.0, 2.0, 0.6, 12), { m: M(L.x, L.y + 26.7, L.z), color: () => [0.2, 0.2, 0.22] });
    stackParts.add(new THREE.ConeGeometry(2.6, 2.6, 12), { m: M(L.x, L.y + 31.3, L.z), color: () => [0.25, 0.23, 0.24] });
    // a small keeper's house beside it
    stackParts.add(new THREE.BoxGeometry(7, 4, 5), { m: M(L.x + 7, L.y + 2, L.z + 3), color: () => [0.85, 0.84, 0.8] });
    stackParts.add(new THREE.ConeGeometry(5, 2.6, 4), { m: M(L.x + 7, L.y + 5.3, L.z + 3, 0, Math.PI / 4, 0, 1, 1, 0.75), color: () => [0.45, 0.25, 0.22] });
  }
  add(new THREE.Mesh(stackParts.geometry(), coverMaterial(shared, show.pStacks, { color: 0xa8a3a6, sink: 140, tex: 'rock', texTile: 12 })), 'pStacks');
  // lamp room glow + slowly turning beams
  const lightTop = new THREE.Vector3(ISLE.x, 11 + 22 * 0.5 - 0.1 + 28.5, ISLE.z);
  const lampGlass = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 1.8, 3.2, 12), new THREE.MeshBasicMaterial({ color: 0xffe2b0, fog: false }));
  lampGlass.position.copy(lightTop);
  add(lampGlass, 'pStacks', { receive: false });
  const beamPivot = new THREE.Group(); beamPivot.position.copy(lightTop);
  const lhBeamMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false,
    uniforms: { uOpacity: { value: 0 } },
    vertexShader: 'varying float vY; varying vec3 vN; varying vec3 vV; void main(){ vY = position.y; vN = normalize(normalMatrix * normal); vec4 mv = modelViewMatrix * vec4(position, 1.0); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }',
    fragmentShader: 'uniform float uOpacity; varying float vY; varying vec3 vN; varying vec3 vV; void main(){ float t = clamp(-vY, 0.0, 1.0); float facing = abs(dot(normalize(vN), normalize(vV))); float a = pow(1.0 - t, 2.2) * smoothstep(0.0, 0.03, t) * pow(facing, 1.6); gl_FragColor = vec4(vec3(1.0, 0.9, 0.72) * a * uOpacity, 1.0); }'
  });
  [0, Math.PI].forEach((r) => {
    const c = new THREE.Mesh(new THREE.ConeGeometry(1, 1, 20, 1, true).translate(0, -0.5, 0), lhBeamMat);
    c.rotation.set(Math.PI / 2, 0, 0); c.scale.set(8, 230, 8);
    const holder = new THREE.Group(); holder.rotation.y = r; holder.add(c); c.position.z = 0;
    beamPivot.add(holder);
  });
  scene.add(beamPivot);

  /* ===== plants: grass, ferns and reeds ===== */
  const tuft = (blades, hMin, hMax, spread, width, shade) => {
    const parts = new Parts();
    const pts = [];
    for (let b = 0; b < blades; b++) {
      const a = (b / blades) * Math.PI * 2 + R() * 0.7;
      const h = rr(hMin, hMax), lean = rr(0.15, 0.55), r0 = R() * spread;
      const bx = Math.cos(a) * r0, bz = Math.sin(a) * r0;
      const dx = Math.cos(a) * lean, dz = Math.sin(a) * lean;
      const px = -Math.sin(a) * width, pz = Math.cos(a) * width;
      const mid = [bx + dx * h * 0.35, h * 0.55, bz + dz * h * 0.35], tip = [bx + dx * h, h * 0.92, bz + dz * h];
      pts.push([bx - px, 0, bz - pz], [bx + px, 0, bz + pz], [mid[0] + px * 0.6, mid[1], mid[2] + pz * 0.6]);
      pts.push([bx - px, 0, bz - pz], [mid[0] + px * 0.6, mid[1], mid[2] + pz * 0.6], [mid[0] - px * 0.6, mid[1], mid[2] - pz * 0.6]);
      pts.push([mid[0] - px * 0.6, mid[1], mid[2] - pz * 0.6], [mid[0] + px * 0.6, mid[1], mid[2] + pz * 0.6], tip);
    }
    const top = hMax;
    parts.tris(pts, (v) => { const k = v.y / top; return [shade[0] * (0.55 + 0.6 * k), shade[1] * (0.55 + 0.6 * k), shade[2] * (0.55 + 0.6 * k)]; }, (v) => Math.pow(v.y / top, 1.5), new THREE.Vector3(0, 1, 0));
    return parts;
  };
  const grassGeo = tuft(11, 0.9, 1.8, 0.55, 0.07, [0.48, 0.6, 0.3]).geometry();
  const reedParts = tuft(9, 3.2, 5.5, 0.5, 0.06, [0.6, 0.66, 0.42]);
  [[0.15, 0.1], [-0.2, 0.25], [0.05, -0.3]].forEach(([x, z], i) => {
    const h = 4.6 + i * 0.5;
    reedParts.add(new THREE.CylinderGeometry(0.03, 0.03, h, 4), { m: M(x, h / 2, z), color: () => [0.5, 0.52, 0.35], tip: () => 0.3 });
    reedParts.add(new THREE.CylinderGeometry(0.11, 0.11, 0.7, 6), { m: M(x, h + 0.2, z), color: () => [0.36, 0.26, 0.18], tip: () => 0.6 });   // cattail head
  });
  const reedGeo = reedParts.geometry();
  const fernGeo = (() => {
    const parts = new Parts();
    const pts = [];
    const fronds = 8;
    for (let f = 0; f < fronds; f++) {
      const a = (f / fronds) * Math.PI * 2 + R() * 0.5, L = rr(1.6, 2.3), rise = rr(0.7, 1.1);
      const dir = [Math.cos(a), Math.sin(a)], side = [-Math.sin(a), Math.cos(a)];
      const at = (t) => [dir[0] * L * t, rise * Math.sin(t * Math.PI * 0.75) - 0.25 * t * t, dir[1] * L * t];
      const SEG = 9;
      for (let i = 0; i < SEG; i++) {
        const t0 = i / SEG, t1 = (i + 1) / SEG, tm = (t0 + t1) / 2;
        const c0 = at(t0), c1 = at(t1), cm = at(tm);
        const w = 0.34 * Math.sin(Math.PI * Math.min(1, tm * 1.1)) * (1 - tm * 0.4) + 0.03;
        const lx = side[0] * w, lz = side[1] * w;
        pts.push(c0, c1, [cm[0] + lx, cm[1] - 0.06, cm[2] + lz]);
        pts.push(c0, [cm[0] - lx, cm[1] - 0.06, cm[2] - lz], c1);
      }
    }
    parts.tris(pts, (v) => { const r = Math.hypot(v.x, v.z) / 2.3; return [0.36 + r * 0.22, 0.52 + r * 0.26, 0.26 + r * 0.12]; }, (v) => Math.hypot(v.x, v.z) / 2.3, new THREE.Vector3(0, 1, 0));
    return parts.geometry();
  })();
  // grass, ferns and reeds take the colour of the land in each scene (lush in summer, straw in autumn)
  const plantMats = [];
  const plantMat = (key, sway) => { const m = coverMaterial(shared, show[key], { sway, side: THREE.DoubleSide, color: 0xffffff, snowBias: -1, softBack: true }); plantMats.push(m); return m; };

  /* ===== seasons: leaf piles (autumn), flowers, beehives and a creek (spring / summer) ===== */
  let creekMesh = null, creekMat = null, bees = null;
  const plantSeasons = (treeBase, inZone, near) => {
    // --- autumn leaf piles: low, bumpy mounds of red, orange and gold leaves
    const pileGeo = (() => {
      const P = new Parts();
      const g = new THREE.SphereGeometry(1, 14, 7, 0, Math.PI * 2, 0, Math.PI / 2);
      const pos = g.attributes.position, v = new THREE.Vector3();
      for (let i = 0; i < pos.count; i++) { v.fromBufferAttribute(pos, i); const k = 1 + (n3(v.x * 3, v.y * 3, v.z * 3) - 0.5) * 0.4; pos.setXYZ(i, v.x * k, v.y * 0.32 * k, v.z * k); }
      g.computeVertexNormals();
      const pal = [[0.86, 0.42, 0.1], [0.72, 0.18, 0.08], [0.92, 0.68, 0.16], [0.55, 0.3, 0.12]];
      P.add(g, { color: (p) => { const c = pal[Math.floor(n3(p.x * 6, p.y * 6, p.z * 6) * 3.99)]; const k = 0.7 + n3(p.x * 20, 0, p.z * 20) * 0.5; return [c[0] * k, c[1] * k, c[2] * k]; } });
      // single leaves lying on top
      for (let i = 0; i < 26; i++) {
        const a = R() * 6.28, r = Math.sqrt(R()) * 1.15, c = pal[i % 4];
        P.add(new THREE.PlaneGeometry(0.16, 0.1), { m: M(Math.cos(a) * r, 0.33 * (1 - r * r * 0.6) + 0.02, Math.sin(a) * r, -Math.PI / 2 + rr(-0.4, 0.4), R() * 6, 0), color: () => c });
      }
      return P.geometry();
    })();
    const piles = [];
    for (let tries = 0; piles.length < 320 && tries < 6000; tries++) {
      const b = treeBase[Math.floor(R() * treeBase.length)]; if (!b) break;
      const a = R() * 6.28, d = rr(2, 9), x = b.p.x + Math.cos(a) * d, z = b.p.z + Math.sin(a) * d, h = heightAt(x, z);
      if (h < 1 || h > 70 || inZone(x, z)) continue;
      const k = rr(1.4, 3.2);
      piles.push({ p: new THREE.Vector3(x, h - 0.1, z), q: groundQ(x, z, R() * 6.28, 0.8), s: new THREE.Vector3(k, k * rr(0.8, 1.3), k * rr(0.7, 1.1)) });
    }
    instanced(pileGeo, coverMaterial(shared, show.leaves, { side: THREE.DoubleSide, softBack: true, snowBias: -1 }), piles, 'leaves');

    // --- spring flowers: little clumps in three colours
    const flowerGeo = (petal, centre) => {
      const P = new Parts();
      for (let f = 0; f < 6; f++) {
        const a = R() * 6.28, r = R() * 0.5, x = Math.cos(a) * r, z = Math.sin(a) * r, h = rr(0.35, 0.7);
        P.add(new THREE.CylinderGeometry(0.012, 0.016, h, 4).translate(0, h / 2, 0), { m: M(x, 0, z), color: () => [0.32, 0.5, 0.24], tip: () => 0 });
        for (let p = 0; p < 5; p++) {
          const pa = p / 5 * 6.28 + a;
          P.add(new THREE.SphereGeometry(0.06, 6, 4), { m: M(x + Math.cos(pa) * 0.06, h, z + Math.sin(pa) * 0.06, 0, -pa, 0, 1.3, 0.3, 0.7), color: () => petal, tip: () => 1 });
        }
        P.add(new THREE.SphereGeometry(0.035, 6, 4), { m: M(x, h + 0.015, z), color: () => centre, tip: () => 1 });
        P.add(new THREE.PlaneGeometry(0.14, 0.05), { m: M(x + 0.04, h * 0.4, z, 0, a, 0.5), color: () => [0.34, 0.55, 0.26], tip: () => 0 });
      }
      return P.geometry();
    };
    const fMat = coverMaterial(shared, show.flowers, { sway: 0.08, side: THREE.DoubleSide, softBack: true, snowBias: -1 });
    [[[0.92, 0.45, 0.62], [0.95, 0.85, 0.3]], [[0.96, 0.84, 0.25], [0.7, 0.45, 0.15]], [[0.72, 0.68, 0.95], [0.98, 0.95, 0.6]], [[0.98, 0.97, 0.95], [0.95, 0.8, 0.25]]].forEach(([petal, centre], vi) => {
      const list = [];
      for (let tries = 0; list.length < 520 && tries < 30000; tries++) {
        const x = rr(-420, 420), z = rr(-420, 190), h = heightAt(x, z);
        if (h < 1 || h > 55 || inZone(x, z) || !clearOf(x, z) || near(x, z, 3)) continue;
        if (n3(x * 0.025 + vi * 3, 1, z * 0.025) < 0.5) continue;      // in drifts, like real meadows
        const k = rr(1.6, 2.6);
        list.push({ p: new THREE.Vector3(x, h - 0.05, z), q: groundQ(x, z, R() * 6.28, 0.5), s: new THREE.Vector3(k, k, k) });
      }
      instanced(flowerGeo(petal, centre), fMat, list, 'flowers');
    });

    // --- beehives by the cabin (painted boxes on a stand)
    const hiveGeo = (() => {
      const P = new Parts();
      const wood = kind('wood', (v) => { const c = 0.5 + n3(v.x * 6, v.y * 6, v.z * 6) * 0.12; return [c, c * 0.8, c * 0.58]; });
      [[-0.22, -0.18], [0.22, -0.18], [-0.22, 0.18], [0.22, 0.18]].forEach(([x, z]) => P.add(new THREE.BoxGeometry(0.06, 0.4, 0.06), { m: M(x, 0.2, z), color: wood }));
      P.add(new THREE.BoxGeometry(0.58, 0.06, 0.5), { m: M(0, 0.42, 0), color: wood });
      const paint = [[0.92, 0.9, 0.84], [0.86, 0.82, 0.62], [0.78, 0.86, 0.84]];
      for (let i = 0; i < 3; i++) P.add(new THREE.BoxGeometry(0.5, 0.24, 0.44), { m: M(0, 0.57 + i * 0.245, 0), color: () => paint[i] });
      P.add(new THREE.BoxGeometry(0.56, 0.05, 0.5), { m: M(0, 1.3, 0), color: () => [0.6, 0.58, 0.55] });
      [-1, 1].forEach((k) => P.add(new THREE.BoxGeometry(0.34, 0.03, 0.54), { m: M(k * 0.14, 1.38, 0, 0, 0, -k * 0.5), color: () => [0.45, 0.42, 0.4] }));
      P.add(new THREE.BoxGeometry(0.22, 0.03, 0.02), { m: M(0, 0.49, 0.225), color: () => [0.08, 0.06, 0.05] });     // entrance
      P.add(new THREE.BoxGeometry(0.3, 0.02, 0.1), { m: M(0, 0.46, 0.27, 0.25, 0, 0), color: wood });                 // landing board
      return P.geometry();
    })();
    const hives = [], beeSpots = [];
    [[-5.6, -0.6], [-5.6, 0.9], [-5.6, 2.4]].forEach(([lx, lz]) => {
      const x = CABIN.x - lz * CABIN.S, z = CABIN.z + lx * CABIN.S, h = heightAt(x, z);
      hives.push({ p: new THREE.Vector3(x, h, z), q: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI + 0.1), s: new THREE.Vector3(CABIN.S, CABIN.S, CABIN.S) });
      solids.push({ x, z, r: 2.8, key: 'hives' });
      beeSpots.push(x, h + 4.5, z);
    });
    instanced(hiveGeo, coverMaterial(shared, show.hives, { rich: true, grain: 0.02 }), hives, 'hives', { cast: true });
    shadowsFor(hives, 'hives', () => [CABIN.S * 1.2, CABIN.S * 1.1], 0.4, 'cabin');
    // a few bees busy around the hives
    {
      const N = 60, g = new THREE.BufferGeometry(), pos = new Float32Array(N * 3), seed = new Float32Array(N);
      for (let i = 0; i < N; i++) { const k = i % 3; pos.set([beeSpots[k * 3], beeSpots[k * 3 + 1], beeSpots[k * 3 + 2]], i * 3); seed[i] = R(); }
      g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
      const mat = new THREE.ShaderMaterial({
        transparent: true, depthWrite: false,
        uniforms: { uTime: U.uTime, uOpacity: { value: 0 } },
        vertexShader: `uniform float uTime; attribute float aSeed; varying float vB;
          void main() {
            float t = uTime * (1.2 + aSeed) + aSeed * 40.0;
            vec3 p = position + vec3(sin(t * 1.3) * (1.5 + aSeed * 4.0), sin(t * 2.1) * 1.2 + cos(t * 0.7) * 1.5, cos(t * 1.1) * (1.5 + aSeed * 4.0));
            vec4 mv = modelViewMatrix * vec4(p, 1.0);
            gl_PointSize = 26.0 / -mv.z; vB = aSeed;
            gl_Position = projectionMatrix * mv;
          }`,
        fragmentShader: `uniform float uOpacity; varying float vB;
          void main() { vec2 q = gl_PointCoord - 0.5; float d = length(q); if (d > 0.5) discard;
            vec3 c = mix(vec3(0.12, 0.1, 0.06), vec3(0.95, 0.75, 0.2), step(0.0, sin(q.x * 30.0)));
            gl_FragColor = vec4(c, uOpacity * smoothstep(0.5, 0.35, d)); }`
      });
      bees = new THREE.Points(g, mat); bees.frustumCulled = false; scene.add(bees);
    }

    // --- a creek running down from the hills into the lake
    const path = [];
    {
      let x = -275, z = -30, dx = 1, dz = 0;
      for (let i = 0; i < 260; i++) {
        const h = heightAt(x, z);
        path.push([x, z]);
        if (h < -0.6) break;
        const e = 2, gx = heightAt(x + e, z) - heightAt(x - e, z), gz = heightAt(x, z + e) - heightAt(x, z - e);
        const tl = Math.hypot(-x, -20 - z) || 1;
        let nx = dx * 0.7 - gx * 0.6 + (-x / tl) * 0.25 + (n3(i * 0.1, 3, 1) - 0.5) * 0.5, nz = dz * 0.7 - gz * 0.6 + ((-20 - z) / tl) * 0.25 + (n3(i * 0.1, 7, 2) - 0.5) * 0.5;
        const l = Math.hypot(nx, nz) || 1; dx = nx / l; dz = nz / l;
        x += dx * 4; z += dz * 4;
      }
    }
    if (path.length > 4) {
      const pos = [], uv = [], idx = [];
      let along = 0;
      path.forEach(([x, z], i) => {
        const [px, pz] = path[Math.max(0, i - 1)], [qx, qz] = path[Math.min(path.length - 1, i + 1)];
        let tx = qx - px, tz = qz - pz; const tl = Math.hypot(tx, tz) || 1; tx /= tl; tz /= tl;
        const w = 3.0 + 3.6 * Math.min(1, i / 25) + Math.sin(i * 0.4) * 0.8;   // starts as a trickle, widens
        const lx = x - tz * w, lz = z + tx * w, rx = x + tz * w, rz = z - tx * w;
        const y = Math.max(heightAt(lx, lz), heightAt(rx, rz), heightAt(x, z)) + 0.32;
        if (i) along += Math.hypot(x - path[i - 1][0], z - path[i - 1][1]);
        pos.push(lx, y, lz, rx, y, rz); uv.push(0, along / 10, 1, along / 10);
        if (i) { const a = (i - 1) * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
      });
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx);
      creekMat = new THREE.ShaderMaterial({
        transparent: true, depthWrite: false, fog: true, side: THREE.DoubleSide,
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, { uOpacity: { value: 0 }, uColor: { value: new THREE.Color(0x6a95a6) } }]),
        vertexShader: ['varying vec2 vUv;', '#include <fog_pars_vertex>', 'void main() {', '  vUv = uv; vec4 mvPosition = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mvPosition;', '  #include <fog_vertex>', '}'].join('\n'),
        fragmentShader: ['uniform float uTime, uOpacity; uniform vec3 uColor; varying vec2 vUv;', '#include <fog_pars_fragment>',
          'float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }',
          'float n(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }',
          'void main() {',
          '  float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);',
          '  float flow = n(vec2(vUv.x * 5.0, vUv.y * 6.0 - uTime * 1.6)) * 0.6 + n(vec2(vUv.x * 11.0, vUv.y * 14.0 - uTime * 2.4)) * 0.4;',
          '  float foam = smoothstep(0.8, 0.95, flow) * 0.45;',
          '  vec3 col = mix(uColor * (0.55 + 0.25 * flow), vec3(0.85, 0.92, 0.93), foam) * mix(0.75, 1.0, edge);',
          '  gl_FragColor = vec4(col, uOpacity * (0.35 + 0.55 * edge));',
          '  #include <colorspace_fragment>', '  #include <fog_fragment>', '}'].join('\n')
      });
      creekMat.uniforms.uTime = U.uTime;
      creekMesh = new THREE.Mesh(g, creekMat); creekMesh.renderOrder = 1;
      add(creekMesh, 'creek', { receive: false });
      creekPath = path;
    }
  };
  let creekPath = null;

  // solids in a grid, so "is something in the way?" stays fast (built once everything is placed)
  const SC = 40, sgrid = new Map();
  const buildGrid = () => {
    sgrid.clear();
    solids.forEach((c) => {
      const r = c.r + 2;
      for (let gx = Math.floor((c.x - r) / SC); gx <= Math.floor((c.x + r) / SC); gx++) for (let gz = Math.floor((c.z - r) / SC); gz <= Math.floor((c.z + r) / SC); gz++) {
        const k = gx + ',' + gz; if (!sgrid.has(k)) sgrid.set(k, []); sgrid.get(k).push(c);
      }
    });
  };
  const near = (x, z) => sgrid.get(Math.floor(x / SC) + ',' + Math.floor(z / SC)) || [];

  return {
    shared, show, groups, solids, zones, cabinAt, circleAt,
    // trees must not grow in clearings (the cabin, the stone circle)
    inClearing(x, z) { return zones.some((q) => Math.hypot(q.x - x, q.z - z) < q.r); },
    // something solid at (x, z)? feet = your height: you can be above a log or rock you jumped onto
    blocks(x, z, pad, cur, feet) {
      for (const c of near(x, z)) {
        if (cur[c.key] < 0.5) continue;
        if (c.top !== undefined && feet >= c.top - 0.7) continue;
        const dx = c.x - x, dz = c.z - z, r = c.r + pad;
        if (dx * dx + dz * dz < r * r) return true;
      }
      return false;
    },
    // the round thing you're pushing into at (x, z): its outward direction (to slide around it), or null
    touching(x, z, pad, cur, feet) {
      for (const c of near(x, z)) {
        if (cur[c.key] < 0.5) continue;
        if (c.top !== undefined && feet >= c.top - 0.7) continue;
        const dx = x - c.x, dz = z - c.z, r = c.r + pad, d2 = dx * dx + dz * dz;
        if (d2 < r * r) { const d = Math.sqrt(d2) || 1; return { nx: dx / d, nz: dz / d, key: c.key }; }
      }
      return null;
    },
    // tops of logs, stumps and rocks under (x, z) that you could stand on
    tops(x, z, cur, out) {
      for (const c of near(x, z)) {
        if (c.top === undefined || cur[c.key] < 0.5) continue;
        const dx = c.x - x, dz = c.z - z;
        if (dx * dx + dz * dz < c.rt * c.rt) out.push(c.top);
      }
      return out;
    },
    // second step, after the trees are planted: things that need to know where the trees stand
    plant(treeBase, waterLevel = 0) {
      const near = (x, z, r) => treeBase.some((b) => { const dx = b.p.x - x, dz = b.p.z - z; return dx * dx + dz * dz < r * r; });
      const inZone = (x, z, pad = 0) => zones.some((q) => Math.hypot(q.x - x, q.z - z) < q.r + pad);
      // logs and stumps in the forest
      const logs = [], stumps = [];
      for (let i = 0, tries = 0; i < 70 && tries < 8000; tries++) {
        const b = treeBase[Math.floor(R() * treeBase.length)]; if (!b) break;
        const a = R() * 6.28, d = rr(7, 20), x = b.p.x + Math.cos(a) * d, z = b.p.z + Math.sin(a) * d;
        const h = heightAt(x, z); if (h < 1.5 || h > 68 || inZone(x, z, 10)) continue;
        const len = rr(9, 18), rad = rr(0.8, 1.4), yaw = R() * 6.28;
        const ex = Math.cos(yaw) * len / 2, ez = -Math.sin(yaw) * len / 2;
        if (near(x, z, 6) || near(x + ex, z + ez, 4) || near(x - ex, z - ez, 4)) continue;
        const h1 = heightAt(x + ex, z + ez), h2 = heightAt(x - ex, z - ez);
        const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(R() * 6.28, yaw, Math.atan2(h1 - h2, len), 'YZX'));
        logs.push({ p: new THREE.Vector3(x, (h1 + h2) / 2 + rad * 0.55, z), q, s: new THREE.Vector3(len, rad, rad) });
        for (let k = -0.5; k <= 0.5; k += 0.125) solids.push({ x: x + ex * 2 * k, z: z + ez * 2 * k, r: rad + 1.6, key: 'pLogs', top: (h1 + h2) / 2 + rad * 0.55 + (h1 - h2) * k + rad, rt: rad * 1.1 });
        i++;
      }
      for (let i = 0, tries = 0; i < 90 && tries < 8000; tries++) {
        const b = treeBase[Math.floor(R() * treeBase.length)]; if (!b) break;
        const a = R() * 6.28, d = rr(6, 16), x = b.p.x + Math.cos(a) * d, z = b.p.z + Math.sin(a) * d;
        const h = heightAt(x, z); if (h < 1.5 || h > 70 || near(x, z, 5) || inZone(x, z)) continue;
        const r = rr(0.9, 1.7);
        const sh = rr(1.4, 3.2);
        stumps.push({ p: new THREE.Vector3(x, h - 0.4, z), q: groundQ(x, z, R() * 6.28, 0.4), s: new THREE.Vector3(r, sh, r) });
        solids.push({ x, z, r: r + 1.3, key: 'pLogs', top: h - 0.4 + sh, rt: r * 0.85 });
        i++;
      }
      instanced(logGeo, woodMat, logs, 'pLogs', { cast: true });
      instanced(stumpGeo, woodMat, stumps, 'pLogs', { cast: true });
      shadowsFor(logs, 'pLogs', (sc) => [sc.x * 1.2, sc.y * 3.4], 0.45, 'logs');
      shadowsFor(stumps, 'pLogs', (sc) => [sc.x * 3.2, sc.z * 3.2], 0.45, 'logs');

      // grass: meadows and forest floor, thicker in clumps
      const grass = [];
      for (let tries = 0; grass.length < 5200 && tries < 60000; tries++) {
        const x = rr(-470, 470), z = rr(-470, 210), h = heightAt(x, z);
        if (h < waterLevel + 0.6 || h > 66 || !clearOf(x, z) || inZone(x, z)) continue;
        if (n3(x * 0.03, 0, z * 0.03) < 0.42) continue;
        const k = rr(1.2, 2.6);
        grass.push({ p: new THREE.Vector3(x, h - 0.15, z), q: groundQ(x, z, R() * 6.28, 0.5), s: new THREE.Vector3(k, k * rr(0.8, 1.3), k) });
      }
      instanced(grassGeo, plantMat('pGrass', 0.05), grass, 'pGrass');
      // ferns under the trees
      const ferns = [];
      for (let tries = 0; ferns.length < 1100 && tries < 20000; tries++) {
        const b = treeBase[Math.floor(R() * treeBase.length)]; if (!b) break;
        const a = R() * 6.28, d = rr(2.5, 13), x = b.p.x + Math.cos(a) * d, z = b.p.z + Math.sin(a) * d;
        const h = heightAt(x, z); if (h < 1 || h > 70 || inZone(x, z)) continue;
        const k = rr(1.6, 3.4);
        ferns.push({ p: new THREE.Vector3(x, h - 0.1, z), q: groundQ(x, z, R() * 6.28, 0.5), s: new THREE.Vector3(k, k * rr(0.8, 1.1), k) });
      }
      instanced(fernGeo, plantMat('pFerns', 0.03), ferns, 'pFerns');
      // reeds at the water's edge
      const reeds = [];
      for (let tries = 0; reeds.length < 700 && tries < 90000; tries++) {
        const x = rr(-280, 280), z = rr(-280, 170), h = heightAt(x, z);
        if (h < -1.4 || h > 1.2 || !clearOf(x, z) || inZone(x, z, -6)) continue;
        if (n3(x * 0.05, 3, z * 0.05) < 0.4) continue;
        const k = rr(1.1, 1.9);
        reeds.push({ p: new THREE.Vector3(x, h - 0.2, z), q: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), R() * 6.28), s: new THREE.Vector3(k, k * rr(0.8, 1.2), k) });
      }
      instanced(reedGeo, plantMat('pReeds', 0.0011), reeds, 'pReeds');   // tall reeds by the water: only a gentle nod
      plantSeasons(treeBase, inZone, near);
      buildGrid();
    },
    // per frame: s = the current (cross-faded) scene values
    update(s, time, camPos, waterY) {
      for (const k of SHOW_KEYS) show[k].value = s[k];
      blobs.forEach(({ key, b }) => b.set(s[key] || 0));
      plantMats.forEach((m) => { m.color.copy(s.low).multiplyScalar(1.7); m.color.r = Math.min(1.1, m.color.r); m.color.g = Math.min(1.1, m.color.g); m.color.b = Math.min(1.1, m.color.b); });
      for (const k of SEASON_KEYS) show[k].value = s[k] || 0;
      if (creekMesh) { creekMat.uniforms.uOpacity.value = Math.min(1, (s.creek || 0) * 1.2); creekMat.uniforms.uColor.value.copy(s.waterC).lerp(new THREE.Color(0.32, 0.52, 0.56), 0.5); }
      if (bees) { bees.material.uniforms.uOpacity.value = s.hives || 0; bees.visible = (s.hives || 0) > 0.05; }
      shared.uSnowCover.value = s.pSnowCover; shared.uMoss.value = s.pMoss; shared.uFrost.value = s.pFrost;
      for (const [obj, key] of groups) obj.visible = s[key] > 0.01;
      lampGlass.material.color.setRGB(1.6, 1.4, 1.05);
      lampGlass.position.y = lightTop.y - (1 - s.pStacks) * 140;
      beamPivot.position.y = lampGlass.position.y;
      beamPivot.rotation.y = time * 0.45;
      beamPivot.visible = s.pStacks > 0.5;
      lhBeamMat.uniforms.uOpacity.value = Math.max(0, s.pStacks - 0.5) * 0.5;
      void camPos;
    }
  };
}

/* ---------- rain rings on the water around you ---------- */
export function createRipples(scene, U) {
  const N = 320;
  const geo = new THREE.InstancedBufferGeometry().copy(new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2));
  const off = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) { off[i * 3] = Math.random() * 120 - 60; off[i * 3 + 1] = Math.random(); off[i * 3 + 2] = Math.random() * 120 - 60; }
  geo.setAttribute('aOff', new THREE.InstancedBufferAttribute(off, 3));
  geo.instanceCount = N;
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, fog: true,
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, { uOpacity: { value: 0 }, uCam: { value: new THREE.Vector3() }, uWater: { value: 0 } }]),
    vertexShader: /* glsl */`
      uniform float uTime, uOpacity, uWater; uniform vec3 uCam; attribute vec3 aOff; varying vec2 vUv; varying float vT;
      #include <fog_pars_vertex>
      void main() {
        float cyc = uTime * 0.85 + aOff.y;
        float t = fract(cyc), n = floor(cyc);
        vec2 jitter = vec2(fract(sin(n * 12.9 + aOff.x) * 437.5), fract(sin(n * 78.2 + aOff.z) * 951.3)) * 30.0 - 15.0;
        vec2 base = aOff.xz + jitter;
        vec2 xz = uCam.xz + mod(base - uCam.xz + 60.0, 120.0) - 60.0;
        float size = 0.3 + t * 1.7;
        vec3 p = vec3(xz.x + position.x * size, uWater + 0.06, xz.y + position.z * size);
        vUv = uv; vT = t;
        vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,
    fragmentShader: /* glsl */`
      uniform float uOpacity; varying vec2 vUv; varying float vT;
      #include <fog_pars_fragment>
      void main() {
        float d = length(vUv - 0.5) * 2.0;
        float ring = smoothstep(0.07, 0.0, abs(d - 0.85)) + 0.4 * smoothstep(0.06, 0.0, abs(d - 0.55)) * (1.0 - vT);
        gl_FragColor = vec4(vec3(0.9), ring * (1.0 - vT) * (1.0 - vT) * uOpacity * 0.22);
        #include <fog_fragment>
      }`
  });
  mat.uniforms.uTime = U.uTime;
  const mesh = new THREE.Mesh(geo, mat); mesh.frustumCulled = false;
  scene.add(mesh);
  return {
    update(amount, camPos, waterY) {
      mat.uniforms.uOpacity.value = amount; mat.uniforms.uCam.value.copy(camPos); mat.uniforms.uWater.value = waterY;
      mesh.visible = amount > 0.01;
    }
  };
}

/* ---------- footprints in the snow ---------- */
export function createFootprints(scene, U) {
  const N = 90;
  const geo = new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2);
  const born = new THREE.InstancedBufferAttribute(new Float32Array(N).fill(-1e5), 1);
  born.setUsage(THREE.DynamicDrawUsage);
  geo.setAttribute('aBorn', born);
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
    uniforms: { uTime: U.uTime, uColor: { value: new THREE.Color(0x6e7a88) }, uShow: { value: 0 } },
    vertexShader: /* glsl */`
      attribute float aBorn; varying vec2 vUv; varying float vAge;
      uniform float uTime;
      void main() {
        vUv = uv; vAge = uTime - aBorn;
        gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: /* glsl */`
      uniform vec3 uColor; uniform float uShow; varying vec2 vUv; varying float vAge;
      void main() {
        vec2 p = (vUv - 0.5) * vec2(2.0, 2.0);
        // a boot print: sole and heel
        float sole = smoothstep(1.0, 0.75, length((p - vec2(0.0, 0.28)) * vec2(1.6, 1.25)));
        float heel = smoothstep(1.0, 0.75, length((p - vec2(0.0, -0.55)) * vec2(1.9, 2.6)));
        float a = max(sole, heel) * (1.0 - smoothstep(30.0, 60.0, vAge)) * smoothstep(0.0, 0.15, vAge);
        gl_FragColor = vec4(uColor, a * 0.38 * uShow);
        #include <colorspace_fragment>
      }`
  });
  // InstancedMesh gives us instanceMatrix; our extra attribute rides along on the geometry
  const mesh = new THREE.InstancedMesh(geo, mat, N);
  mesh.frustumCulled = false;
  const m = new THREE.Matrix4(); m.makeScale(0, 0, 0);
  for (let i = 0; i < N; i++) mesh.setMatrixAt(i, m);
  scene.add(mesh);
  let next = 0, side = 1;
  const q = new THREE.Quaternion(), s = new THREE.Vector3(1.15, 1, 2.3), p = new THREE.Vector3();
  return {
    mesh,
    place(x, y, z, yaw, normal) {
      side = -side;
      p.set(x + Math.cos(yaw) * 0.9 * side, y + 0.45, z - Math.sin(yaw) * 0.9 * side);
      q.setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal).multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw));
      m.compose(p, q, s);
      mesh.setMatrixAt(next, m); mesh.instanceMatrix.needsUpdate = true;
      born.array[next] = U.uTime.value; born.needsUpdate = true;
      next = (next + 1) % N;
    },
    update(amount) { mat.uniforms.uShow.value = amount; mesh.visible = amount > 0.01; }
  };
}
