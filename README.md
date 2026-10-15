# MEOW

A small link board. It's a pure static site (HTML, CSS and JavaScript) hosted free on GitHub Pages.

## Files
| File | What it does |
|---|---|
| `links.js` | **The list of links.** Edit this to add or remove links. |
| `password.js` | **The password** (stored as a SHA-256 hash). Read the comments inside to change it. |
| `gate.js` | The password screen (one input box). |
| `settings.js` | ⚙ Settings: language, background, sound, hints, animation, password. |
| `i18n.js` | English / 中文 text. |
| `world.js` | The quiet 3D nature world (built from `src/world.src.js` with three.js 0.186.1). Scenes: rain, frost, mist, snow, night, aurora, sea. Edit the source file, then rebuild: `npx esbuild src/world.src.js --bundle --minify --format=iife --outfile=world.js` |
| `sound.js` | Sound effects generated in the browser (no audio files): tree chimes, footsteps, flashlight click, lantern flame. No background sound. |
| `app.js` | The link list, search, tags, hover previews. |
| `fx.js` | Interaction effects: magnetic buttons, click ripples, input-bar spotlight, MEOW letter parallax. |
| `src/props.js` | Things in the landscape (no animals): rocks, fallen logs, stumps, ferns, grass, reeds, a log cabin with a dock and boat (warm windows and chimney smoke at night), a stone circle (frost, aurora), sea stacks and a lighthouse (sea), rain rings on the water, snow on trees and roofs, footprints in the snow. `SHOW` at the top sets how much of each appears in every scene. Bundled into `world.js`. |
| `src/cabin.js` | The log cabin by the lake: a walk-in house (solid walls and furniture, fireplace, bed, table, shelf, porch, dock, boat). Hold E for one second at the door to open or close it. Bundled into `world.js`. |
| `src/kit.js` | Shared 3D helpers (noise, geometry collector, the snow/moss material). |
| `cursor.js` | Mouse pointers chosen in Settings: paw, classic, soft, buddy. Frosted see-through fill; colours follow the scene so the pointer stays visible. |
| `forest.js` | Press W (or click the hint) to glide into the forest, then walk with W A S D / arrow keys (Shift runs, Space jumps, move the mouse to look — slide right turns left, slide up looks down; left-click trees, F cycles flashlight → warm lantern → off; footsteps and light sounds). Every tree does something: holds a link, switches the scene (every 7th), tells a cat fact (every 11th), opens a random link (every 13th), and rings its own chime. |
| `cinema.js` | Film layer: grain, letterbox bars with scene titles, rack focus (what you're not looking at softens). |
| `gallery.js` | 3D floating gallery: pick a category and its links float in the middle as cards (drag, wheel, ← →, Enter, Esc). |

## Notes
- The homepage must be named `index.html` (all lowercase). GitHub Pages is case-sensitive.
- **The password only keeps casual visitors out.** This repo and the site are public, so anyone who knows how can open `links.js` directly. Don't put private links here.
- Settings are saved per browser. The password is asked again in every new tab.
- Previews come from WordPress mShots and icons from Google's favicon service, so those services see the link addresses.
