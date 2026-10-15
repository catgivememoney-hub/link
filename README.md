# MEOW

A tiny black-and-white link board. Pure static site: HTML, CSS, JavaScript. No backend, no database, no login.

## Features
- Links shown in a vertical list. Hover a link to see a screenshot preview of the website.
- **All links live in `links.js`** in this repo, so every visitor sees the same list.
- To add one: use the form (it copies the new line and opens `links.js` on GitHub), paste, commit. Or edit `links.js` directly.
- **Backup**: Export JSON.
- Rain background and light rain sound (on/off button, starts after the first click).
- Light / dark toggle, Josefin Sans font.

## Notes
- The homepage file must be named `index.html` (all lowercase). GitHub Pages is case-sensitive.
- Previews come from the free WordPress mShots service and icons from Google's favicon service, so those services see the link addresses. The first preview of a new site can take a few seconds.
- Everything in a public repo is public. Don't put private links in `links.js`.
