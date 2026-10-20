/* MEOW (test copy) — detailed models that load after the world is on screen.
   The new cabin brings its own furniture (test/assets/house.glb, see house.js), so only the
   fish is loaded here: Barramundi Fish (Khronos glTF Sample Assets, CC0), see the README. */
import * as THREE from 'three';
import { GLTFLoader } from 'three-addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three-addons/libs/meshopt_decoder.module.js';

export function createAssets({ fishing }) {
  const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
  let ready = 0;
  loader.load('assets/models/BarramundiFish.glb', (g) => {
    let mesh = null;
    g.scene.updateMatrixWorld(true);
    g.scene.traverse((o) => { if (o.isMesh && !mesh) mesh = o; });
    if (!mesh) return;
    const geo = mesh.geometry.clone().applyMatrix4(mesh.matrixWorld);
    geo.rotateY(-Math.PI / 2);         // the model's head points to -z; ours to +x
    geo.computeBoundingBox();
    const b = geo.boundingBox, c = b.getCenter(new THREE.Vector3());
    geo.translate(-c.x, -c.y, -c.z);
    const k = 2.05 / (b.max.x - b.min.x); geo.scale(k, k, k);
    fishing.setModel(geo, mesh.material);
    ready++;
  }, undefined, (e) => console.warn('[MEOW] model not loaded: BarramundiFish', e && e.message));
  return { get ready() { return ready; }, update() {} };
}
