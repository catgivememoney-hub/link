# MEOW — test copy

Live at `/link/test/`. The main site (`/link/`) is untouched.

What's different from the main site:
- The 3D world loads straight from `test/src/` as ES modules (no bundling); three.js r186 is in `test/vendor/`.
- The old cabin and the library under it are replaced by the new stilt cabin built in Blender: `test/assets/house.glb` (`test/src/house.js`).
- The ground no longer has the flat rectangle over the library (`test/src/terrain.js`).
- The sailboat at the dock can be sailed (`test/src/boat.js`): walk onto the dock, press **E** to go aboard, **W** sail, **S** slow, **A/D** steer, **Shift** more wind, **E** to step off.
- Doors (front, bedroom, back): click them or press **E** near them.

Update 2:
- Doors and windows: the log ends now stop at solid posts with a beam over each opening (no logs poking through the frames).
- Fishing only from the dock or the shore (not from the boat). Fish swim under the surface, wiggle their tails, leap and splash.
- Grass and plants sway more, with gusts rolling across the meadow (stronger in rain).
- Settings → Graphics: Fast / Balanced / Best (Best adds sun shadows and full sharpness).
- The desktop computer in the cabin works: click the monitor. Google search and YouTube videos play on its screen; ↗ opens a page in a real tab.
- Every link in links.js has a link tree with a signpost near the cabin. Click it: a cat paw grabs you into the tree and the page becomes that website (Back returns).
