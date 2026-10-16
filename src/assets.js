/* MEOW — detailed models from free, open libraries (see "Asset credits" in the README).
   They load after the world is already on screen. Until a model arrives (or if it can't
   load) the hand-built version stays in its place, so nothing is ever missing.

     · Sheen Wood Leather Sofa  → the sofa under the chandelier
     · Chair Damask Purplegold  → the chair at the desk
     · Sheen Chair ×2           → the two armchairs up on the gallery
     · Antique Camera           → an old plate camera on its tripod in the library
     · Lantern                  → an iron lamp post at the end of the dock (it glows at night)
     · Barramundi Fish          → the fish that jump and the fish you catch

   Everything here is placed in the cabin's own metres (the cabin group scales it). */
import * as THREE from 'three';
import { GLTFLoader } from 'three-addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three-addons/libs/meshopt_decoder.module.js';
import { STUDY } from './study.js';

export function createAssets({ cabin, fishing }) {
  const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
  const cache = {};
  const load = (name) => (cache[name] = cache[name] || new Promise((ok, no) => loader.load(`assets/models/${name}.glb`, (g) => ok(g.scene), undefined, no)));
  const F = STUDY.floor, MZ = STUDY.mezz;
  const group = cabin.group, study = cabin.study;
  const A = { glass: [], light: null, ready: 0 };

  // scale a model (to a height, or a width) and stand it on y = 0, centred; returns a pivot to place
  const fit = (src, { h, w, s }) => {
    const obj = src.clone(true);
    const box = new THREE.Box3().setFromObject(obj), size = box.getSize(new THREE.Vector3());
    obj.scale.multiplyScalar(s || (h ? h / size.y : w / size.x));
    box.setFromObject(obj);
    const c = box.getCenter(new THREE.Vector3());
    obj.position.set(-c.x, -box.min.y, -c.z);
    const pivot = new THREE.Group(); pivot.add(obj);
    return pivot;
  };
  // shadows, the indoor shadow layer, and how much of the sky it reflects
  const prep = (obj, env) => {
    obj.traverse((o) => {
      if (!o.isMesh) return;
      o.castShadow = o.receiveShadow = true; o.layers.enable(5);
      (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => { m.envMapIntensity = env; });
    });
    return obj;
  };
  const place = (pivot, x, y, z, ry = 0) => { pivot.position.set(x, y, z); pivot.rotation.y = ry; group.add(pivot); return pivot; };
  const done = () => { A.ready++; if (study.shadowLight) study.shadowLight.shadow.needsUpdate = true; };
  const warn = (name) => (e) => console.warn('[MEOW] model not loaded:', name, e && e.message);

  /* ---------- the library furniture (all three replace the hand-built pieces together) ---------- */
  Promise.all([load('SheenWoodLeatherSofa'), load('ChairDamaskPurplegold'), load('SheenChair')]).then(([sofa, damask, sheen]) => {
    place(prep(fit(sofa, { w: 2.3 }), 0.3), -1.8, F, -1.4, Math.PI);
    place(prep(fit(damask, { s: 1.15 }), 0.3), 0, F, -8.9, 0);
    [-4.6, -2.9].forEach((z) => place(prep(fit(sheen, { s: 1.15 }), 0.3), 3.6, MZ, z, -Math.PI / 2));
    study.swap.visible = false;
    done();
  }).catch(warn('library furniture'));

  load('AntiqueCamera').then((cam) => {
    place(prep(fit(cam, { h: 1.55 }), 0.35), 5.35, F, -0.3, -Math.PI * 0.75);
    done();
  }).catch(warn('AntiqueCamera'));

  /* ---------- the lamp post on the dock ---------- */
  load('Lantern').then((lan) => {
    const L = cabin.LANT;
    const post = prep(fit(lan, { h: 2.35 }), 0.8);
    post.traverse((o) => {
      if (!o.isMesh) return;
      const m = o.material;
      if (m.emissive && (m.emissiveMap || m.emissive.getHex() !== 0)) { m.userData.e0 = m.emissiveIntensity; A.glass.push(m); }
    });
    place(post, L.x, L.y, L.z, Math.PI);
    // its warm light at night (where the lantern hangs)
    const box = new THREE.Box3().setFromObject(post.children[0]);
    A.light = new THREE.PointLight(0xffb070, 0, 36, 1.4);
    A.light.position.set(box.max.x - (box.max.x - box.min.x) * 0.12, box.max.y * 0.55, 0);
    post.add(A.light);
    done();
  }).catch(warn('Lantern'));

  /* ---------- the fish ---------- */
  load('BarramundiFish').then((root) => {
    let mesh = null;
    root.updateMatrixWorld(true);
    root.traverse((o) => { if (o.isMesh && !mesh) mesh = o; });
    if (!mesh) return;
    const geo = mesh.geometry.clone().applyMatrix4(mesh.matrixWorld);
    geo.rotateY(-Math.PI / 2);         // the model's head points to -z; ours to +x
    geo.computeBoundingBox();
    const b = geo.boundingBox, c = b.getCenter(new THREE.Vector3());
    geo.translate(-c.x, -c.y, -c.z);
    geo.scale(2.05 / (b.max.x - b.min.x), 2.05 / (b.max.x - b.min.x), 2.05 / (b.max.x - b.min.x));
    fishing.setModel(geo, mesh.material);
    A.ready++;
  }).catch(warn('BarramundiFish'));

  return {
    get ready() { return A.ready; },
    update(s, time) {
      const g = Math.min(1, s.pGlow || 0);
      const flick = 0.9 + 0.06 * Math.sin(time * 8.3 + Math.sin(time * 2.9) * 2) + 0.04 * Math.sin(time * 21.7);
      if (A.light) A.light.intensity = g * 55 * flick * Math.min(1, s.pCabin || 0);
      A.glass.forEach((m) => { m.emissiveIntensity = (m.userData.e0 || 1) * (0.15 + g * 2.2 * flick); });
    }
  };
}
