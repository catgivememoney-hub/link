/* MEOW — soft contact shadows, painted INTO the ground.
   Every rock, log, stump, tree and the cabin darkens the terrain right under and around it.
   They used to be flat dark discs laid on the ground, which floated off slopes ("a ring around a
   planet") and looked like circles; now they're baked into one map that the terrain shader reads,
   so they follow every bump of the land and fade softly into it.
   Four layers (one per colour channel), each faded in/out with its scene:
     R = trees · G = rocks · B = logs & stumps · A = cabin & hives */
import * as THREE from 'three';

// the area the terrain covers (see createTerrain: 2200 × 1800, centred at z = -400)
export const CONTACT_BOX = new THREE.Vector4(-1100, -1300, 2200, 1800);
const N = 2048;
const layers = [null, null, null, null];
const data = new Uint8Array(N * N * 4);
const tex = new THREE.DataTexture(data, N, N, THREE.RGBAFormat);
tex.magFilter = THREE.LinearFilter; tex.minFilter = THREE.LinearFilter; tex.needsUpdate = true;
// how dark each layer is right now (strength × the scene's fade)
export const CONTACT = { tContact: { value: tex }, uContactBox: { value: CONTACT_BOX }, uContactStr: { value: new THREE.Vector4(0, 0, 0, 0) } };

const layer = (i) => {
  if (!layers[i]) { const c = document.createElement('canvas'); c.width = c.height = N; layers[i] = c; }
  return layers[i];
};
let pending = 0;
const rebuild = () => {
  pending = 0;
  for (let i = 0; i < 4; i++) {
    if (!layers[i]) continue;
    const src = layers[i].getContext('2d').getImageData(0, 0, N, N).data;
    for (let p = 0, q = i; p < src.length; p += 4, q += 4) data[q] = src[p + 3];
  }
  tex.needsUpdate = true;
};

const owners = [false, false, false, false];
const CH = { trees: 0, rocks: 1, logs: 2, cabin: 3 };
// items: [{ x, z, sx, sz, yaw }] (sizes in world units); channel: 'trees' | 'rocks' | 'logs' | 'cabin'
export function createContactShadows(scene, heightAt, items, strength = 0.45, channel = 'rocks') {
  const ci = CH[channel] ?? 1, g = layer(ci).getContext('2d');
  const kx = N / CONTACT_BOX.z, kz = N / CONTACT_BOX.w;
  g.globalCompositeOperation = 'lighter';
  items.forEach((it) => {
    const cx = (it.x - CONTACT_BOX.x) * kx, cy = (it.z - CONTACT_BOX.y) * kz;
    const rx = Math.max(0.8, it.sx * 0.5 * kx), ry = Math.max(0.8, it.sz * 0.5 * kz);
    g.save(); g.translate(cx, cy); g.rotate(-(it.yaw || 0)); g.scale(rx, ry);
    // dark right at the contact, then a soft falloff (no hard edge)
    const grd = g.createRadialGradient(0, 0, 0, 0, 0, 1);
    grd.addColorStop(0, 'rgba(0,0,0,0.8)'); grd.addColorStop(0.35, 'rgba(0,0,0,0.45)'); grd.addColorStop(0.65, 'rgba(0,0,0,0.12)'); grd.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = grd; g.beginPath(); g.arc(0, 0, 1, 0, Math.PI * 2); g.fill(); g.restore();
  });
  if (!pending) pending = setTimeout(rebuild, 0);
  // the first group on a layer controls its fade (others painted on the same layer ride along)
  const owner = !owners[ci]; owners[ci] = true;
  return { mesh: null, set(o) { if (owner) CONTACT.uContactStr.value.setComponent(ci, strength * o); } };
}
