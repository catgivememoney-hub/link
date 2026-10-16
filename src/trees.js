/* MEOW — the pine forest: trees, grey (summer: ripe) fruit, bare autumn branches.
   Trees are solid (a spatial grid keeps the check fast), can be hovered and clicked:
   a clicked tree sways and settles. Seasons tint the needles in the shader. */
import * as THREE from 'three';
import { Parts, coverMaterial, mulberry } from './kit.js';
import { heightAt, fbm, vnoise, hash2 } from './terrain.js';

// seeded: the forest is the same on every visit
const R = mulberry(4071);
const rnd = (a, b) => a + R() * (b - a);
const CELL = 40;

export function createTrees({ scene, shared, isClearing }) {
  /* ---------- one pine: trunk, six drooping tiers, a leader ---------- */
  const pineGeo = (() => {
    const parts = new Parts();
    const trunk = new THREE.CylinderGeometry(0.05, 0.16, 2.9, 8, 5, true).translate(0, 1.45, 0);
    {
      const P = trunk.attributes.position, v = new THREE.Vector3();
      for (let i = 0; i < P.count; i++) {
        v.fromBufferAttribute(P, i);
        const a = Math.atan2(v.z, v.x);
        const flare = v.y < 0.4 ? 1 + (0.4 - v.y) * 2.6 * (0.55 + 0.45 * Math.max(0, Math.sin(a * 4 + 1))) : 1;
        P.setXYZ(i, v.x * flare + Math.sin(v.y * 1.7) * 0.03, v.y, v.z * flare);
      }
    }
    parts.add(trunk, {
      color: (v) => { const c = 0.42 + 0.16 * vnoise(v.y * 7, Math.atan2(v.z, v.x) * 2.5); return [c * 1.35, c * 0.98, c * 0.72]; },
      normal: (v, n) => n.set(v.x, 0.12, v.z).normalize()
    });
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
          const rim = rad / r;
          P.setXYZ(i, v.x * jag, v.y - (0.1 + 0.16 * lobe) * r * rim * rim - (under ? 0.02 : 0), v.z * jag);
        }
      };
      const cone = new THREE.ConeGeometry(r, h, 14, 3, true);
      shape(cone, false);
      cone.translate(0, base + h / 2, 0);
      parts.add(cone, {
        mat: 13,
        color: (v) => { const up = (v.y - base) / h, rad = Math.min(1, Math.hypot(v.x, v.z) / r); const c = 0.55 + 0.5 * rad + 0.22 * up + 0.08 * (hash2(v.x * 9.1, v.z * 7.3 + v.y) - 0.5) + t * 0.03; return [c * 0.98, c, c * 0.94]; },
        normal: (v, n) => { const rad = Math.hypot(v.x, v.z); n.set(v.x, rad * 0.55 + 0.32, v.z).normalize(); },
        // where snow settles: the upper part of each tier
        tip: (v) => { const up = (v.y - base) / h; const a = Math.atan2(v.z, v.x); const lobe = 0.5 + 0.5 * Math.sin(a * lobes + ph); return Math.min(1, Math.max(0, (up - 0.08) * 1.5) * (0.45 + 0.55 * lobe) + 0.25 * hash2(v.x * 5.3, v.z * 4.1)); }
      });
      const under = new THREE.ConeGeometry(r * 0.97, h * 0.38, 14, 1, true);
      shape(under, true);
      under.translate(0, base + h * 0.19 - 0.02, 0);
      parts.add(under, { mat: 13, flip: true, color: (v) => { const rad = Math.min(1, Math.hypot(v.x, v.z) / r); const c = 0.42 + 0.3 * rad; return [c * 0.95, c, c * 0.9]; }, normal: (v, n) => n.set(v.x * 0.3, -1, v.z * 0.3).normalize() });
      topY = base + h;
    }
    parts.add(new THREE.ConeGeometry(0.05, 0.5, 5, 1, true).translate(0, topY + 0.18, 0), { mat: 13, color: () => [1.0, 1.02, 0.95], tip: () => 0.7 });
    return parts.geometry();
  })();

  const show = { value: 1 };
  const SEASON = { uFall: { value: 0 }, uBloom: { value: 0 }, uLush: { value: 0 }, uBare: { value: 0 } };
  const mat = coverMaterial({ ...shared, ...SEASON, uMoss: { value: 0 }, uFrost: shared.uSnowCover }, show, { sway: 0.022, color: 0x334033, snowBias: -0.3, crisp: true, tree: true });

  /* ---------- place them ---------- */
  const N_MAX = 1400;
  const base = [];   // { p, s, q, c } per tree
  const trees = new THREE.InstancedMesh(pineGeo, mat, N_MAX);
  {
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), pos = new THREE.Vector3(), tint = new THREE.Color();
    let n = 0, guard = 0;
    while (n < N_MAX && guard++ < 60000) {
      const x = rnd(-650, 650), z = rnd(-700, 260), h = heightAt(x, z);
      if (h < 3 || h > 85) continue;
      if (fbm(x * 0.02, z * 0.02, 3) < 0.42) continue;   // natural clumps
      if (isClearing(x, z)) continue;
      const k = rnd(2.0, 4.6);
      pos.set(x, h - 0.4, z);
      s.set(k * rnd(0.8, 0.95), k * rnd(1.5, 2.1), k * rnd(0.8, 0.95));
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rnd(0, Math.PI * 2));
      const shade = rnd(0.82, 1.12);
      tint.setRGB(shade, shade * rnd(0.97, 1.03), shade * rnd(0.94, 1.0));
      base.push({ p: pos.clone(), s: s.clone(), q: q.clone(), c: tint.clone() });
      m.compose(pos, q, s); trees.setColorAt(n, tint); trees.setMatrixAt(n++, m);
    }
    trees.count = n;
    const hs = new Float32Array(N_MAX); for (let i = 0; i < N_MAX; i++) hs[i] = hash2(i * 1.37, 9.1);
    pineGeo.setAttribute('aHash', new THREE.InstancedBufferAttribute(hs, 1));
  }
  trees.castShadow = true; trees.receiveShadow = true;
  scene.add(trees);

  // spatial grid for "is a trunk here?"
  const grid = new Map();
  base.forEach((b, i) => { const k = Math.floor(b.p.x / CELL) + ',' + Math.floor(b.p.z / CELL); if (!grid.has(k)) grid.set(k, []); grid.get(k).push(i); });
  const nearby = (x, z, fn) => {
    const cx = Math.floor(x / CELL), cz = Math.floor(z / CELL);
    for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) { const L = grid.get((cx + a) + ',' + (cz + b)); if (L) for (const i of L) if (fn(i)) return true; }
    return false;
  };

  /* ---------- fruit hanging under the branches ---------- */
  const fruitGeo = (() => {
    const parts = new Parts();
    const rng = (i, k) => hash2(i * 3.17 + k, i * 1.91 - k * 2.3);
    for (let i = 0; i < 14; i++) {
      const t = i % 5, k = t / 5, r = 1.1 - k * 0.8, b0 = 0.5 + k * 2.5;
      const a = i * 2.39996 + rng(i, 1) * 0.6, rho = r * (0.62 + 0.28 * rng(i, 2));
      const x = Math.cos(a) * rho, z = Math.sin(a) * rho;
      const stem = 0.14 + 0.16 * rng(i, 3), size = 0.11 + 0.05 * rng(i, 4);
      const top = b0 - 0.2 * r * (rho / r) * (rho / r);
      parts.add(new THREE.CylinderGeometry(0.006, 0.008, stem, 4, 1), { m: new THREE.Matrix4().makeTranslation(x, top - stem / 2, z), color: () => [0.35, 0.33, 0.3] });
      const fruit = new THREE.SphereGeometry(size, 10, 7), P = fruit.attributes.position;
      for (let j = 0; j < P.count; j++) { const y = P.getY(j); P.setY(j, (y < 0 ? y * 1.25 : y) * 0.5); }
      fruit.computeVertexNormals();
      const g = 0.6 + 0.18 * rng(i, 5);
      parts.add(fruit, { m: new THREE.Matrix4().makeTranslation(x, top - stem - size * 0.5, z), color: (v) => { const shine = 0.85 + 0.25 * Math.max(0, v.y - (top - stem - size * 0.5)) / size; return [g * shine, g * shine, g * shine * 0.98]; } });
    }
    return parts.geometry();
  })();
  const FRUIT = { uFruitCol: { value: 0 } };
  const fruitMat = coverMaterial({ ...shared, uMoss: { value: 0 }, uFrost: { value: 0 } }, show, { sway: 0.022, color: 0xd8d8d8 });
  {
    const prev = fruitMat.onBeforeCompile;
    fruitMat.onBeforeCompile = (sh) => {
      prev(sh);
      Object.assign(sh.uniforms, FRUIT);
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nuniform float uFruitCol;')
        .replace('#include <color_vertex>', `vColor = vec4(1.0);
          #ifdef USE_COLOR
            vColor.rgb *= color;
          #endif
          #ifdef USE_INSTANCING_COLOR
            vColor.rgb *= mix(vec3(1.0), instanceColor.rgb * 1.5, uFruitCol);
          #endif`);
    };
  }
  const fruits = new THREE.InstancedMesh(fruitGeo, fruitMat, trees.count);
  const hasFruit = base.map((b, i) => hash2(i * 0.37, 5.1) < 0.5);
  {
    const m = new THREE.Matrix4(), zero = new THREE.Matrix4().makeScale(0, 0, 0);
    const pal = [0xc8402e, 0xe0782a, 0xd9b030, 0x9cba3a, 0xb8302a];
    base.forEach((b, i) => { fruits.setMatrixAt(i, hasFruit[i] ? m.compose(b.p, b.q, b.s) : zero); fruits.setColorAt(i, new THREE.Color(pal[i % pal.length])); });
    fruits.computeBoundingSphere();
  }
  fruits.castShadow = true;
  scene.add(fruits);

  /* ---------- bare branches for the trees that drop their needles in autumn ---------- */
  const branchGeo = (() => {
    const P = new Parts();
    const twig = (y, a, len, tilt, r) => P.add(new THREE.CylinderGeometry(r * 0.35, r, len, 5).translate(0, len / 2, 0),
      { m: new THREE.Matrix4().compose(new THREE.Vector3(0, y, 0), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, a, tilt, 'YXZ')), new THREE.Vector3(1, 1, 1)), color: () => [0.36, 0.28, 0.22] });
    for (let i = 0; i < 16; i++) {
      const y = 0.55 + i * 0.17, len = (1 - i / 18) * 0.9 + 0.12;
      twig(y, i * 2.4, len, 1.1 + (i % 3) * 0.12, 0.03);
      twig(y + 0.05, i * 2.4 + 0.9, len * 0.6, 0.8, 0.02);
    }
    return P.geometry();
  })();
  const branchShow = { value: 0 };
  const branches = new THREE.InstancedMesh(branchGeo, coverMaterial({ ...shared, uMoss: { value: 0 }, uFrost: { value: 0 } }, branchShow, { sway: 0.018, color: 0xb8a898 }), trees.count);
  {
    const zero = new THREE.Matrix4().makeScale(0, 0, 0), m = new THREE.Matrix4();
    base.forEach((b, i) => branches.setMatrixAt(i, hash2(i * 1.37, 9.1) < 0.45 ? m.compose(b.p, b.q, b.s) : zero));
    branches.computeBoundingSphere();
  }
  branches.castShadow = true;
  scene.add(branches);

  /* ---------- hover glow and the sway of a clicked tree ---------- */
  const GLOW = new THREE.Color(2.6, 2.6, 2.4);
  let hovered = -1;
  const shakes = new Map();
  const sq = new THREE.Quaternion(), se = new THREE.Euler(), sm = new THREE.Matrix4();
  const solid = () => trees.visible && show.value > 0.5;

  return {
    mesh: trees, fruits, base, geo: pineGeo, mat,
    get solid() { return solid(); },
    // a trunk within reach of (x, z)? pad = extra room (world units)
    blocks(x, z, pad = 0) {
      if (!solid()) return false;
      return nearby(x, z, (i) => { const b = base[i], dx = b.p.x - x, dz = b.p.z - z, r = b.s.x * 0.75 + 1.2 + pad; return dx * dx + dz * dz < r * r; });
    },
    // how many trees around a spot (for picking a nice landing place)
    countNear(x, z, r) { let c = 0; if (!solid()) return 0; nearby(x, z, (i) => { const dx = base[i].p.x - x, dz = base[i].p.z - z; if (dx * dx + dz * dz < r * r) c++; return false; }); return c; },
    pick(ray) {
      if (!solid()) return -1;
      const hit = ray.intersectObjects([trees, fruits], false)[0];
      return hit ? hit.instanceId : -1;
    },
    hover(id) {
      if (id === hovered) return false;
      if (hovered >= 0 && base[hovered]) trees.setColorAt(hovered, base[hovered].c);
      hovered = id;
      if (id >= 0) trees.setColorAt(id, GLOW);
      trees.instanceColor.needsUpdate = true;
      return true;
    },
    get hovered() { return hovered; },
    shake(id, now) { shakes.set(id, now); },
    // s = current scene values
    update(s, now) {
      mat.color.copy(s.treeC);
      show.value = s.trees; trees.visible = fruits.visible = s.trees > 0.01;
      SEASON.uFall.value = s.fall; SEASON.uBloom.value = s.bloom; SEASON.uLush.value = s.lush; SEASON.uBare.value = s.bare;
      FRUIT.uFruitCol.value = s.fruitCol;
      branchShow.value = Math.min(1, s.bare * 2.5) * s.trees; branches.visible = branchShow.value > 0.01;
      if (!shakes.size) return;
      shakes.forEach((start, id) => {
        const t = (now - start) / 1000, b = base[id];
        if (!b) { shakes.delete(id); return; }
        const a = t > 2.6 ? 0 : Math.sin(t * 15) * Math.exp(-t * 2.1) * 0.17;
        se.set(a * 0.6, 0, a); sq.setFromEuler(se).multiply(b.q); sm.compose(b.p, sq, b.s);
        trees.setMatrixAt(id, sm);
        if (hasFruit[id]) fruits.setMatrixAt(id, sm);
        if (t > 2.6) shakes.delete(id);
      });
      trees.instanceMatrix.needsUpdate = true; fruits.instanceMatrix.needsUpdate = true;
    }
  };
}
