/* MEOW — soft contact shadows.
   A dark, blurry patch on the ground under rocks, logs, stumps, trees and the cabin,
   so things sit *in* the landscape instead of looking pasted onto it. */
import * as THREE from 'three';

let blobTex = null;
const texture = () => {
  if (blobTex) return blobTex;
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grd.addColorStop(0, 'rgba(255,255,255,1)'); grd.addColorStop(0.35, 'rgba(255,255,255,0.75)');
  grd.addColorStop(0.7, 'rgba(255,255,255,0.25)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd; g.fillRect(0, 0, 128, 128);
  blobTex = new THREE.CanvasTexture(c);
  return blobTex;
};

// items: [{ x, z, sx, sz, yaw }] (sizes in world units); returns { mesh, set(opacity) }
export function createContactShadows(scene, heightAt, items, strength = 0.45) {
  const geo = new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2);
  const mat = new THREE.MeshBasicMaterial({ color: 0x000000, alphaMap: texture(), transparent: true, depthWrite: false, opacity: strength, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -4 });
  const mesh = new THREE.InstancedMesh(geo, mat, Math.max(1, items.length));
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), qy = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), n = new THREE.Vector3(), p = new THREE.Vector3(), s = new THREE.Vector3();
  items.forEach((it, i) => {
    const e = 2, h = heightAt(it.x, it.z);
    n.set(heightAt(it.x - e, it.z) - heightAt(it.x + e, it.z), 2 * e, heightAt(it.x, it.z - e) - heightAt(it.x, it.z + e)).normalize();
    q.setFromUnitVectors(up, n).multiply(qy.setFromAxisAngle(up, it.yaw || 0));
    p.set(it.x, h + 0.12, it.z); s.set(it.sx, 1, it.sz);
    mesh.setMatrixAt(i, m.compose(p, q, s));
  });
  mesh.count = items.length;
  mesh.computeBoundingSphere();
  mesh.renderOrder = 0;
  scene.add(mesh);
  return { mesh, set(o) { mat.opacity = strength * o; mesh.visible = o > 0.01; } };
}
