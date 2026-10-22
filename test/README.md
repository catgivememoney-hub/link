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

Update 3:
- New monitor (black screen when the computer is off) and a new garden lamp on the dock, which lights up at night.
- Hanging light in the living room, off by default; the switch is on the wall by the front door (click it or press E).
- Bookshelf: real titles on the spines, thick and thin books, some leaning, some stacked flat.
- Roof: the bedroom roof and the living-room roof now meet in a proper valley (nothing pokes through inside).
- Computer: ✕ is the only way out (the bottom button is hidden while you use it). Clicking a Google result that refuses to be shown offers "Back to Google" or a real tab.
- Link trees: no signposts. A 3D grey-tabby paw (modelled on Jeffy's kitten, test/assets/kitten.png) grabs you and drags you into the tree, the screen goes dark, then the link opens. The first link takes the tree nearest the cabin; each next link takes the free tree nearest the previous one.
- Back from a link: you stand where you were, the pointer comes back with one click.

## Credits (test copy)
| File | Source | License |
| --- | --- | --- |
| Monitor (inside `test/assets/house.glb`) | [Monitor](https://poly.pizza/m/3CNCR-m-KGH) by TheFlyingPotato Youtube, via Poly Pizza | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) |
| Dock lamp (inside `test/assets/house.glb`) | [Garden Lamp](https://poly.pizza/m/cCiFRJLsuI) by Zsky, via Poly Pizza | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) |

Update 4:
- Settings → Graphics is a slider with seven levels: None, Fast, Default, Balanced, Fancy, Best, Extreme.
- Snow: walking on snow leaves a pressed trail; while it snows, the trail slowly fills back in (about a minute).
- Snow scene: the lake is frozen solid. The boat can't be boarded (if you're sailing when it freezes, you're put ashore) and there's no fishing on the ice.
- Gallery: the category chips (All, #learn, …) are bigger and sit on an even, gentle slant.
- Chimney stones laid in proper staggered courses (nothing overlapping); bookshelf books never overlap; reeds by the water only nod gently.

Update 6:
- Five new cats in Settings → Play together → Your cat, modelled on Jeffy's cat photos: Smokey (grey kitten with a dark cap), Silver tabby (bold stripes), November (felt kitten: tabby head, fluffy white body, pink bag, little boots), Blep (brown tabby, tongue out), El Gato (ginger with huge pleading eyes). Each button now shows a picture of the cat; the chosen one is what other players see.

Update 5 (graphics):
- Settings → Frame rate: Match screen / 240 / 165 / 144 / 120 / 90 / 60 / 30, and Show FPS (fps, frame time, your screen's refresh rate). V-Sync is always on in browsers.
- Fancy: cascaded sun shadows (three.js SunLight: sharp near you, wider further out) + ambient occlusion.
- Best: + softer shadow edges, contact shadows, shadows from the fire, the hanging light and the dock lamp (only redrawn when something moves).
- Extreme: + screen-space reflections on the lake/ice, bounce light, sun shafts. All screen-space effects are in `test/src/ssfx.js`.
- Settings shows roughly how much graphics memory the chosen level uses (about 0.5–1 GB at 1440p on Extreme).

- Footsteps: cut from the user-supplied freesound recording "footsteps in wet coarse sand" (test/assets/audio/steps.mp3).
- Textures in test/assets/tex (bark = "Pine Bark", log = "Bark Willow", rock = "Rock Face", grass = "Aerial Grass Rock", wood = "Wood Planks"): Poly Haven, CC0 (https://polyhaven.com), resized to 512 px.
