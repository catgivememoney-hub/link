# MEOW — test copy

Live at `/link/test/`. The main site (`/link/`) is untouched.

What's different from the main site:
- The 3D world loads straight from `test/src/` as ES modules (no bundling); three.js r186 is in `test/vendor/`.
- The old cabin and the library under it are replaced by the new stilt cabin built in Blender: `test/assets/house.glb` (`test/src/house.js`).
- The ground no longer has the flat rectangle over the library (`test/src/terrain.js`).
- The sailboat at the dock can be sailed (`test/src/boat.js`): walk onto the dock, press **E** to go aboard, **W** sail, **S** slow, **A/D** steer, **Shift** more wind, **E** to step off.
- Doors (front, bedroom, back): click them or press **E** near them.
