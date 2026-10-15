# MEOW

A tiny black-and-white link board. Pure static site: HTML, CSS, JavaScript. No backend, no database, no login.

## Features
- Links shown in a vertical list. Hover a link to see a screenshot preview of the website.
- **Featured links**: edit `links.json`, commit, push. Everyone sees them.
- **Personal links**: added on the page, saved in that browser's `localStorage`.
- **Share**: "Copy share link" packs your links into the URL after `#`.
- **Backup**: Export / Import JSON.
- Light / dark toggle, Josefin Sans font.

## Notes
- The homepage file must be named `index.html` (all lowercase). GitHub Pages is case-sensitive.
- Previews come from the free WordPress mShots service and icons from Google's favicon service, so those services see the link addresses. The first preview of a new site can take a few seconds.
- Everything in a public repo is public. Don't put private links in `links.json`.
