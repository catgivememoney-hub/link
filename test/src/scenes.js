/* MEOW — the scenes (weather, season, light) and the smooth cross-fade between them.
   Every value of a scene blends over ~3 seconds when you switch, so nothing ever cuts.
   cam / look are where the home view looks from; walking never uses them. */
import * as THREE from 'three';
import { SHOW, SHOW_KEYS } from './props.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
// sat = how much colour the picture keeps (0 = black & white)
const BASE = {
  rain: {
    sat: 0, skyTop: '#8f959a', skyHorizon: '#c6c9cb', skyBottom: '#8a8f93', fog: '#b7bbbe', fogDensity: 0.0042,
    low: '#6c7175', high: '#878c90', snowC: '#c9cccf', snowLine: 170, water: 0, waterC: '#6d7378', waterRough: 0.18,
    sunC: '#000000', sunDir: V(0, 0.3, -1), sunSize: 0, lightC: '#e8e8e8', light: 0.55, lightDir: V(0.3, 0.6, 0.2),
    hemiSky: '#cfd2d4', hemiGround: '#55595c', hemi: 0.95, treeC: '#3f4447', trees: 0.75,
    rain: 1, snow: 0, fire: 0, stars: 0, aurora: 0, aur1: '#000000', aur2: '#000000', mist: 0.55, fishy: 1,
    cam: V(0, 13, 105), look: V(0, 9, 0)
  },
  frost: {
    sat: 0, skyTop: '#d7d9db', skyHorizon: '#eceded', skyBottom: '#cfd1d3', fog: '#e3e4e5', fogDensity: 0.0068,
    low: '#a9adb0', high: '#c3c6c8', snowC: '#eeeff0', snowLine: 90, water: 0, waterC: '#b4b8bb', waterRough: 0.4,
    sunC: '#000000', sunDir: V(0, 0.3, -1), sunSize: 0, lightC: '#ffffff', light: 0.45, lightDir: V(-0.3, 0.8, 0.3),
    hemiSky: '#f0f0f0', hemiGround: '#8d9093', hemi: 1.1, treeC: '#6f7477', trees: 0.35,
    rain: 0, snow: 0, fire: 0, stars: 0, aurora: 0, aur1: '#000000', aur2: '#000000', mist: 1,
    cam: V(0, 34, 140), look: V(0, 16, -20)
  },
  mist: {
    sat: 0.55, skyTop: '#93a4b1', skyHorizon: '#d6dcdf', skyBottom: '#a9b5bd', fog: '#ccd4d8', fogDensity: 0.0047,
    low: '#56645c', high: '#77858d', snowC: '#e5e9eb', snowLine: 95, water: 0, waterC: '#7a8c95', waterRough: 0.22,
    sunC: '#efe7da', sunDir: V(0.5, 0.35, -1), sunSize: 0.0016, lightC: '#f2ece2', light: 0.85, lightDir: V(0.5, 0.6, -0.4),
    hemiSky: '#d5dde2', hemiGround: '#4d5650', hemi: 0.8, treeC: '#34433b', trees: 0.95,
    rain: 0, snow: 0, fire: 0, stars: 0, aurora: 0, aur1: '#000000', aur2: '#000000', mist: 1,
    cam: V(-38, 22, 112), look: V(0, 20, -40)
  },
  snow: {
    sat: 0.6, skyTop: '#a3afba', skyHorizon: '#e1e5e8', skyBottom: '#c9d1d7', fog: '#dde2e6', fogDensity: 0.0045,
    low: '#e7ebee', high: '#f2f4f6', snowC: '#fbfcfd', snowLine: -20, water: 0.5, waterC: '#c3ccd2', waterRough: 0.75,
    sunC: '#e9e6e0', sunDir: V(-0.4, 0.3, -1), sunSize: 0.0014, lightC: '#f4f1ec', light: 0.7, lightDir: V(-0.4, 0.5, 0.3),
    hemiSky: '#eef2f5', hemiGround: '#8a96a0', hemi: 0.95, treeC: '#36443f', trees: 1,
    rain: 0, snow: 1, fire: 0, stars: 0, aurora: 0, aur1: '#000000', aur2: '#000000', mist: 0.45,
    cam: V(24, 11, 78), look: V(0, 12, -10)
  },
  night: {
    sat: 0.45, skyTop: '#04060d', skyHorizon: '#1a2238', skyBottom: '#0a0e18', fog: '#111727', fogDensity: 0.0032,
    low: '#3a4352', high: '#4a5262', snowC: '#8a93a3', snowLine: 160, water: 0, waterC: '#0e1421', waterRough: 0.1,
    sunC: '#d8d4c6', sunDir: V(-0.45, 0.32, -1), sunSize: 0.0022, lightC: '#93a0bf', light: 0.16, lightDir: V(-0.45, 0.5, -0.6),
    hemiSky: '#26304a', hemiGround: '#07090f', hemi: 0.16, treeC: '#2c3a33', trees: 0.85,
    rain: 0, snow: 0, fire: 0.85, stars: 1, aurora: 0, aur1: '#000000', aur2: '#000000', mist: 0.25, dof: 0.6,
    cam: V(0, 10, 92), look: V(0, 16, -40)
  },
  aurora: {
    sat: 0.65, skyTop: '#03060a', skyHorizon: '#122029', skyBottom: '#070c10', fog: '#0d161b', fogDensity: 0.0034,
    low: '#3b464c', high: '#4c575e', snowC: '#a9b5bb', snowLine: 55, water: 0, waterC: '#0c1418', waterRough: 0.08,
    sunC: '#000000', sunDir: V(0, 0.3, -1), sunSize: 0, lightC: '#8fb1aa', light: 0.14, lightDir: V(0.2, 0.6, -0.8),
    hemiSky: '#1f3a3a', hemiGround: '#05080a', hemi: 0.18, treeC: '#2a3833', trees: 0.6,
    rain: 0, snow: 0.22, fire: 0, stars: 0.75, aurora: 1, aur1: '#57e0a4', aur2: '#a77de0', mist: 0.15, dof: 0.3,
    cam: V(30, 15, 102), look: V(0, 34, -80)
  },
  ocean: {
    sat: 0.7, skyTop: '#4a4e68', skyHorizon: '#d4a28b', skyBottom: '#7c6670', fog: '#c29d90', fogDensity: 0.0026,
    low: '#4a4652', high: '#5d5765', snowC: '#a69aa3', snowLine: 200, water: 11, waterC: '#585d77', waterRough: 0.14,
    sunC: '#ecd0b2', sunDir: V(0, 0.17, -1), sunSize: 0.0045, lightC: '#efcfb4', light: 0.95, lightDir: V(0, 0.2, -1),
    hemiSky: '#c9a6a0', hemiGround: '#3c3a4a', hemi: 0.7, treeC: '#2f2c35', trees: 0,
    rain: 0, snow: 0, fire: 0, stars: 0.15, aurora: 0, aur1: '#000000', aur2: '#000000', mist: 0.35,
    cam: V(0, 7, 125), look: V(0, 9, 0)
  },
  spring: {
    sat: 0.78, skyTop: '#86acd2', skyHorizon: '#e4eef1', skyBottom: '#c9d8de', fog: '#dbe6e8', fogDensity: 0.0031,
    low: '#6e8f55', high: '#8ea478', snowC: '#eef2f2', snowLine: 150, water: 0, waterC: '#6a95a6', waterRough: 0.18,
    sunC: '#fff2d6', sunDir: V(0.4, 0.42, -1), sunSize: 0.0018, lightC: '#fff3df', light: 1.0, lightDir: V(0.4, 0.7, -0.3),
    hemiSky: '#dde9f1', hemiGround: '#5a6c48', hemi: 0.9, treeC: '#4a7342', trees: 1,
    rain: 0, snow: 0, fire: 0, stars: 0, aurora: 0, aur1: '#000000', aur2: '#000000', mist: 0.2,
    cam: V(-20, 12, 100), look: V(0, 12, -20), bloom: 1, flowers: 1, hives: 1, creek: 1, fishy: 0.3
  },
  summer: {
    sat: 0.92, skyTop: '#3f86cf', skyHorizon: '#cde6f4', skyBottom: '#93c4d6', fog: '#cbe2ec', fogDensity: 0.0021,
    low: '#5a8e42', high: '#7ba158', snowC: '#f2f4f4', snowLine: 210, water: 0, waterC: '#21b2b4', waterRough: 0.05,
    sunC: '#fff5d8', sunDir: V(0.2, 0.62, -1), sunSize: 0.0026, lightC: '#fff6e4', light: 1.35, lightDir: V(0.3, 0.85, -0.3),
    hemiSky: '#cbe6ff', hemiGround: '#4a6a38', hemi: 0.95, treeC: '#3d8a38', trees: 1,
    rain: 0, snow: 0, fire: 0, stars: 0, aurora: 0, aur1: '#000000', aur2: '#000000', mist: 0,
    cam: V(10, 11, 110), look: V(0, 10, -10), lush: 1, fruitCol: 1, sand: 1, creek: 0.7, flowers: 0.45, fishy: 0.4
  },
  fall: {
    sat: 0.82, skyTop: '#7a93ab', skyHorizon: '#ead7bd', skyBottom: '#b8a38c', fog: '#d8c6ad', fogDensity: 0.0036,
    low: '#7d6b44', high: '#92805b', snowC: '#efece6', snowLine: 175, water: 0, waterC: '#5c7380', waterRough: 0.2,
    sunC: '#ffd7a4', sunDir: V(-0.5, 0.24, -1), sunSize: 0.002, lightC: '#ffdaa8', light: 0.95, lightDir: V(-0.5, 0.5, -0.4),
    hemiSky: '#e5d4bd', hemiGround: '#5a4a34', hemi: 0.85, treeC: '#4c5a3a', trees: 1,
    rain: 0, snow: 0, fire: 0, stars: 0, aurora: 0, aur1: '#000000', aur2: '#000000', mist: 0.3,
    cam: V(-30, 14, 105), look: V(0, 12, -30), fall: 1, bare: 0.4, leaves: 1, creek: 0.5
  }
};
// values every scene has (0 unless the scene sets them)
const EXTRA = { fall: 0, bare: 0, bloom: 0, lush: 0, leaves: 0, flowers: 0, hives: 0, creek: 0, fishy: 0, sand: 0, fruitCol: 0, dof: 1 };
export const PRESETS = {};
for (const name in BASE) {
  PRESETS[name] = { ...EXTRA, ...BASE[name] };
  SHOW_KEYS.forEach((k, i) => { PRESETS[name][k] = SHOW[name][i]; });
}
export const SCENE_NAMES = Object.keys(PRESETS);

const COLORS = ['skyTop', 'skyHorizon', 'skyBottom', 'fog', 'low', 'high', 'snowC', 'waterC', 'sunC', 'lightC', 'hemiSky', 'hemiGround', 'treeC', 'aur1', 'aur2'];
const VECS = ['sunDir', 'lightDir', 'cam', 'look'];
const toState = (p) => {
  const o = {};
  for (const k in p) o[k] = COLORS.includes(k) ? new THREE.Color(p[k]) : VECS.includes(k) ? p[k].clone() : p[k];
  return o;
};
const ease = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);

export function createScenes(initial) {
  let name = PRESETS[initial] ? initial : 'rain';
  const cur = toState(PRESETS[name]);
  let from = toState(PRESETS[name]), to = toState(PRESETS[name]);
  let t0 = 0, dur = 1;
  return {
    cur,
    get name() { return name; },
    // start a cross-fade to another scene (dur in ms; 1 = instant)
    go(next, ms, now) {
      if (!PRESETS[next]) next = 'rain';
      name = next;
      from = toState(cur);
      // keep the same colour / vector objects in `cur`, just copy values into `from`
      to = toState(PRESETS[next]);
      t0 = now; dur = Math.max(1, ms);
    },
    // jump the current state (used at the start: begin high above the valley)
    offsetHome(dCam, dLook) { cur.cam.add(dCam); cur.look.add(dLook); from = toState(cur); },
    // blend; returns how far the transition is (0..1)
    step(now) {
      const k = Math.min(1, (now - t0) / dur), e = ease(k);
      for (const key in to) {
        if (COLORS.includes(key) || VECS.includes(key)) cur[key].copy(from[key]).lerp(to[key], e);
        else cur[key] = from[key] + (to[key] - from[key]) * e;
      }
      return k;
    }
  };
}
