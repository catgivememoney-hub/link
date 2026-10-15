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
| `sound.js` | Light rain sound, generated in the browser (no audio files). |
| `app.js` | The link list, search, tags, hover previews. |
| `fx.js` | Interaction effects: magnetic buttons, click ripples, input-bar spotlight, MEOW letter parallax. |
| `forest.js` | Walk into the world with W A S D / arrow keys (Shift runs, drag to look, F for the flashlight or lantern — pick one in Settings). Every tree does something: holds a link, switches the scene (every 7th), tells a cat fact (every 11th), opens a random link (every 13th), and rings its own chime. |
| `cinema.js` | Film layer: grain, letterbox bars with scene titles, rack focus (what you're not looking at softens). |
| `gallery.js` | 3D floating gallery: pick a category and its links float in the middle as cards (drag, wheel, ← →, Enter, Esc). |

## Notes
- The homepage must be named `index.html` (all lowercase). GitHub Pages is case-sensitive.
- **The password only keeps casual visitors out.** This repo and the site are public, so anyone who knows how can open `links.js` directly. Don't put private links here.
- Settings are saved per browser. The password is asked again in every new tab.
- Previews come from WordPress mShots and icons from Google's favicon service, so those services see the link addresses.
