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
| `bg.js` | Animated backgrounds: rainy window, frosted mono, aurora, misty mountains, starry night, snowy forest, sunset sea. |
| `sound.js` | Light rain sound, generated in the browser (no audio files). |
| `app.js` | The link list, search, tags, hover previews. |

## Notes
- The homepage must be named `index.html` (all lowercase). GitHub Pages is case-sensitive.
- **The password only keeps casual visitors out.** This repo and the site are public, so anyone who knows how can open `links.js` directly. Don't put private links here.
- Settings are saved per browser. The password is asked again in every new tab.
- Previews come from WordPress mShots and icons from Google's favicon service, so those services see the link addresses.
