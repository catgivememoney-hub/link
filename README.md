# MEOW

A small link board. It's a pure static site (HTML, CSS and JavaScript) hosted free on GitHub Pages.

## Files
| File | What it does |
|---|---|
| `links.js` | **The list of links.** Edit this to add or remove links. |
| `password.js` | **The password** (stored as a SHA-256 hash). Read the comments inside to change it. |
| `gate.js` | The password screen (one input box). |
| `settings.js` | ⚙ Settings: language, background, sound, hints, animation, password. |
| `i18n.js` | All the site's text in 6 languages: English, 中文, 粵語 (Cantonese), Español, हिन्दी (Hindi), 日本語. |
| `world.js` | The quiet 3D nature world (built from `src/world.src.js` with three.js 0.186.1). Scenes: rain, frost, mist, snow, night, aurora, sea, spring (blossom, flowers, beehives, a creek), summer (lush trees, ripe fruit, sandy shore, turquoise water), autumn (red and gold trees, bare trees, leaf piles, falling leaves). Edit the source file, then rebuild: `npx esbuild src/world.src.js --bundle --minify --format=iife --outfile=world.js` |
| `sound.js` | Sound effects generated in the browser (no audio files): tree chimes, footsteps, flashlight click, lantern flame. No background sound. |
| `app.js` | The link list, search, tags, hover previews. |
| `fx.js` | Interaction effects: magnetic buttons, click ripples, input-bar spotlight, MEOW letter parallax. |
| `src/props.js` | Things in the landscape (no animals): rocks, fallen logs, stumps, ferns, grass, reeds, a log cabin with a dock and boat (warm windows and chimney smoke at night), a stone circle (frost, aurora), sea stacks and a lighthouse (sea), rain rings on the water, snow on trees and roofs, footprints in the snow. `SHOW` at the top sets how much of each appears in every scene. Bundled into `world.js`. |
| `src/cabin.js` | The log cabin by the lake: a walk-in house (solid walls and furniture, fireplace, bed, table, shelf, porch, dock, boat). Aim the centre dot at the door and click (or tap E) to open or close it. Bundled into `world.js`. |
| `src/study.js` | The library under the cabin, two storeys high: the cabin stairs bring you onto a gallery with turned-baluster railings, a spiral stair takes you down to the main floor (tall shuttered window, desk, Persian rugs, chesterfield sofa, iron chandelier). Every link in links.js is a book; each shelf row is one tag with a brass plate. Click a book: it floats out and opens on the website's cover — click it again to visit. Click a tag plate: that tag's books fly around you. Esc puts things back. |
| `src/fish.js` | Fish in the lake: on rainy days they pop up for air; fishing with R (cast, wait for the float to dip, click to hook). Catches are counted in this browser. |
| `src/kit.js` | Shared 3D helpers (noise, geometry collector, the snow/moss material). |
| `cursor.js` | Mouse pointers chosen in Settings: paw, classic, soft, buddy. Frosted see-through fill; colours follow the scene so the pointer stays visible. |
| `forest.js` | Press W (or click the hint) to glide into the forest, then walk with W A S D / arrow keys (Shift runs, Space jumps (over logs, stumps and smaller rocks — you can stand on top of them), the pointer hides and a white dot marks the centre; move the mouse to look (slide right turns right, slide up looks up), click what the dot is on, Esc leaves the forest; mouse sensitivity is in Settings; F cycles flashlight → warm lantern → off; footsteps and light sounds). Trees don't hold links (the books in the study do): every 7th tree switches the scene, the others tell a cat fact; each rings its own chime. |
| `cinema.js` | Film layer: grain, letterbox bars with scene titles, rack focus (what you're not looking at softens). |
| `gallery.js` | 3D floating gallery: pick a category and its links float in the middle as cards (drag, wheel, ← →, Enter, Esc). |

## Notes
- The homepage must be named `index.html` (all lowercase). GitHub Pages is case-sensitive.
- **The password only keeps casual visitors out.** This repo and the site are public, so anyone who knows how can open `links.js` directly. Don't put private links here.
- Settings are saved per browser. The password is asked again in every new tab.
- Previews come from WordPress mShots and icons from Google's favicon service, so those services see the link addresses.
