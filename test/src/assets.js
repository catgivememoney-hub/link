/* MEOW (test copy) — detailed models that load after the world is on screen.
   The new cabin brings its own furniture (test/assets/house.glb, see house.js), so only the
   fish is loaded here: Barramundi Fish (Khronos glTF Sample Assets, CC0), see the README. */
import * as THREE from 'three';
import { GLTFLoader } from 'three-addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three-addons/libs/meshopt_decoder.module.js';

export function createAssets({ fishing }) {
  const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
  let ready = 0;
  // the old downloaded fish (Barramundi) is no longer used: fish.js builds a new fish in code
  return { get ready() { return ready; }, update() {} };
}
