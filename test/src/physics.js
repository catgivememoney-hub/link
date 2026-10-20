/* MEOW — walking physics: what you stand on and what you bump into.
   One place answers both questions for the whole world:
     floor(x, z, feet)   → the surface under you: ground or water, the top of a log
                           or rock, the cabin floor, the stairs, the library floors
     blocked(x, z, feet) → is something solid here? (trees, rocks, logs, walls, furniture)
   Everything works from where your feet really are, so stairs and the gallery behave. */
import { heightAt } from './terrain.js';
import { CABIN } from './house.js';

export const STEP_UP = 0.6 * CABIN.S;   // the highest step you can walk up (a stair, a low log)
const ROAM = 70;                          // the hills above this are too steep to walk

export function createPhysics({ trees, props, cabin, scenes, water }) {
  const cand = [], built = [];
  // ground under a spot: the highest of a few samples, so small bumps can't poke through you
  const groundAt = (x, z) => {
    let h = heightAt(x, z);
    for (let a = 0; a < 6.28; a += 1.57) h = Math.max(h, heightAt(x + Math.cos(a) * 4, z + Math.sin(a) * 4));
    return Math.max(h, water.position.y);
  };
  const cabinOn = () => scenes.cur.pCabin > 0.5;

  return {
    groundAt,
    // the surface you'd be standing on: { y, built } (built = a floor of the house, dock or porch)
    floor(x, z, feet) {
      cand.length = 0; built.length = 0;
      if (cabinOn()) cabin.floors(x, z, built);
      const under = built.some((c) => c.under);
      // inside the house or down in the library the built floors are all there is
      if (!under) {
        cand.push(groundAt(x, z));
        props.tops(x, z, scenes.cur, cand);
      }
      let best = -Infinity, isBuilt = false;
      const consider = (y, b) => { if (y <= feet + STEP_UP && y > best) { best = y; isBuilt = b; } };
      cand.forEach((y) => consider(y, false));
      built.forEach((c) => consider(c.y, true));
      if (best === -Infinity) {
        // nothing within reach below or a step above: take the nearest (never fall through a floor)
        let d = Infinity;
        cand.forEach((y) => { if (Math.abs(y - feet) < d) { d = Math.abs(y - feet); best = y; isBuilt = false; } });
        built.forEach((c) => { if (Math.abs(c.y - feet) < d) { d = Math.abs(c.y - feet); best = c.y; isBuilt = true; } });
      }
      return { y: best, built: isBuilt };
    },
    // can you stand at (x, z)? pad = extra room around you (world units)
    blocked(x, z, feet, pad = 0) {
      if (!(Math.abs(x) < 820 && z > -900 && z < 420)) return true;
      if (cabinOn() && cabin.blocked(x, z, pad, feet)) return true;
      // out in the open: steep hills, trunks, rocks and logs
      if (cabinOn() && cabin.inside(x, z, feet)) return false;
      if (heightAt(x, z) > ROAM) return true;
      if (trees.blocks(x, z, pad)) return true;
      return props.blocks(x, z, pad, scenes.cur, feet);
    },
    // indoors? (no rain, no mist, warmer colour)
    inside(x, z, feet) { return cabinOn() && feet !== undefined && cabin.inside(x, z, feet); }
  };
}
