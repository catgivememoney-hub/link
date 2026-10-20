/* MEOW (test copy) — the books on the living-room bookshelf.
   Real titles on the spines (classics), all sizes: thick and thin, tall and short, a few leaning
   on their neighbours and a few lying in little stacks. One mesh, one texture (all spines are
   painted onto a single canvas), so it costs almost nothing to draw.
   Built in the house's own metres, Blender-style (Z up, spines facing +Y into the room); the
   group is turned to the glTF frame and hung under the house's root node. */
import * as THREE from 'three';

const TITLES = [
  ['Moby-Dick', 'Melville'], ['Pride and Prejudice', 'Austen'], ['Dracula', 'Stoker'], ['Frankenstein', 'Shelley'],
  ['The Odyssey', 'Homer'], ['War and Peace', 'Tolstoy'], ['Jane Eyre', 'Brontë'], ['Little Women', 'Alcott'],
  ['Treasure Island', 'Stevenson'], ['Alice in Wonderland', 'Carroll'], ['Peter Pan', 'Barrie'], ['The Time Machine', 'Wells'],
  ['Walden', 'Thoreau'], ['Emma', 'Austen'], ['Don Quixote', 'Cervantes'], ['Les Misérables', 'Hugo'],
  ['The Jungle Book', 'Kipling'], ['Black Beauty', 'Sewell'], ['Wuthering Heights', 'Brontë'], ['Great Expectations', 'Dickens'],
  ['Hamlet', 'Shakespeare'], ['Macbeth', 'Shakespeare'], ['The Iliad', 'Homer'], ['Sherlock Holmes', 'Doyle'],
  ['Heidi', 'Spyri'], ['The Secret Garden', 'Burnett'], ['Anne of Green Gables', 'Montgomery'], ['Oliver Twist', 'Dickens'],
  ['The Raven', 'Poe'], ['Gulliver’s Travels', 'Swift'], ['Robinson Crusoe', 'Defoe'], ['The Wind in the Willows', 'Grahame'],
  ['Crime and Punishment', 'Dostoevsky'], ['Anna Karenina', 'Tolstoy'], ['The Count of Monte Cristo', 'Dumas'], ['Ivanhoe', 'Scott'],
  ['The Three Musketeers', 'Dumas'], ['A Christmas Carol', 'Dickens'], ['The Call of the Wild', 'London'], ['White Fang', 'London'],
  ['Twenty Thousand Leagues', 'Verne'], ['Around the World in 80 Days', 'Verne'], ['The Invisible Man', 'Wells'], ['Middlemarch', 'Eliot'],
  ['Sense and Sensibility', 'Austen'], ['The Picture of Dorian Gray', 'Wilde'], ['Kidnapped', 'Stevenson'], ['Tom Sawyer', 'Twain'],
  ['Huckleberry Finn', 'Twain'], ['The Aeneid', 'Virgil'], ['Beowulf', 'Anon.'], ['Grimm’s Fairy Tales', 'Grimm'],
  ['Aesop’s Fables', 'Aesop'], ['The Little Prince', 'Saint-Exupéry'], ['Leaves of Grass', 'Whitman'], ['The Art of War', 'Sun Tzu'],
  ['Persuasion', 'Austen'], ['Bleak House', 'Dickens'], ['The Brothers Karamazov', 'Dostoevsky'], ['Cats of the World', 'M. Whisker'],
  ['On the Origin of Species', 'Darwin'], ['Meditations', 'Aurelius'], ['The Divine Comedy', 'Dante'], ['Paradise Lost', 'Milton'],
  ['Northanger Abbey', 'Austen'], ['Silas Marner', 'Eliot'], ['The Prince', 'Machiavelli'], ['Candide', 'Voltaire']
];
const COVERS = ['#7a1f1f', '#1f3d6b', '#2f5a3a', '#6b4a1f', '#3a2a55', '#1a1a1a', '#8a5a1f', '#24565a', '#5a2440', '#d8ccb0', '#475a24', '#9a3b2a', '#2a3e4f', '#6d6a5f', '#b38b3d', '#4e2e1e', '#c7b9a0', '#244a3a'];
const GOLD = '#e6c46a';

// shelf (house metres): inside the side panels, the shelves the books stand on, front edge
const SH = { x0: 0.835, x1: 2.015, yFront: -3.045, zs: [1.04, 1.44, 1.84, 2.24, 2.64], clear: 0.36 };

export function createBooks() {
  let seed = 7; const R = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const rr = (a, b) => a + R() * (b - a);
  const pick = (a) => a[Math.floor(R() * a.length)];

  /* ---------- 1) decide every book ---------- */
  const books = [];  // { w, d, h, title, author, cover, text, band, x, z, lean, flat, yaw }
  let ti = Math.floor(R() * TITLES.length);
  const make = (kind) => {
    const thick = kind === 'thick', thin = kind === 'thin';
    const [title, author] = TITLES[ti++ % TITLES.length];
    const cover = pick(COVERS);
    const light = parseInt(cover.slice(1, 3), 16) + parseInt(cover.slice(3, 5), 16) + parseInt(cover.slice(5, 7), 16) > 420;
    return {
      w: thick ? rr(0.055, 0.085) : thin ? rr(0.018, 0.028) : rr(0.028, 0.05),
      h: rr(0.2, 0.33), d: rr(0.15, 0.23), title, author, cover,
      text: light ? '#2a2420' : R() < 0.55 ? GOLD : '#f2ece0', band: R() < 0.6
    };
  };
  for (const z of SH.zs) {
    let x = SH.x0 + rr(0, 0.02), prev = null;
    while (x < SH.x1 - 0.03) {
      const r = R();
      if (r < 0.06 && x > SH.x0 + 0.15) { x += rr(0.04, 0.12); prev = null; continue; }   // a gap
      if (r < 0.15 && x < SH.x1 - 0.32) {
        // a little stack lying flat (biggest at the bottom)
        // (each one fully inside the stack's footprint, so nothing pokes into its neighbours)
        const n = 2 + Math.floor(R() * 3), base = rr(0.24, 0.32); let zz = z;
        x += 0.012;
        for (let k = 0; k < n; k++) {
          const b = make(k === 0 ? 'thick' : 'normal'); b.h = base - k * rr(0.005, 0.03); b.flat = true; b.yaw = rr(-0.03, 0.03);
          if (zz + b.w > z + SH.clear - 0.02) break;
          b.x = x + base / 2; b.z = zz; zz += b.w + 0.001; books.push(b);
        }
        x += base + 0.025; prev = null; continue;
      }
      const b = make(r < 0.3 ? 'thick' : r < 0.5 ? 'thin' : 'normal');
      if (r > 0.9 && prev && !prev.lean) {
        // leaning on the book to its left
        // it rests on the neighbour's top corner if that one is shorter, otherwise against its side
        const a = rr(0.18, 0.42), p = x + Math.min(b.h * Math.sin(a), prev.h * Math.tan(a)) + 0.002;
        if (p + b.w * Math.cos(a) > SH.x1) break;
        b.lean = a; b.x = p; b.z = z; books.push(b);
        x = p + b.w * Math.cos(a) + rr(0.02, 0.06); prev = b; continue;
      }
      if (x + b.w > SH.x1) break;
      b.x = x + b.w / 2; b.z = z; books.push(b); x += b.w + rr(0.0015, 0.005); prev = b;   // never exactly touching (no flicker)
    }
  }

  /* ---------- 2) paint every spine onto one canvas ---------- */
  const PPM = 1000, CW = 2048;           // pixels per metre, canvas width
  let cx = 0, cy = 0, rowH = 0;
  books.forEach((b) => {
    const w = Math.max(14, Math.round(b.w * PPM)), h = Math.round(b.h * PPM);
    if (cx + w + 4 > CW) { cx = 0; cy += rowH + 4; rowH = 0; }
    b.cell = [cx, cy, w, h]; cx += w + 4; rowH = Math.max(rowH, h);
  });
  const swY = cy + rowH + 8, CH = Math.pow(2, Math.ceil(Math.log2(swY + 40)));
  const cv = document.createElement('canvas'); cv.width = CW; cv.height = CH;
  const g = cv.getContext('2d');
  g.fillStyle = '#efe6d2'; g.fillRect(0, CH - 24, 24, 24);                            // the page colour
  books.forEach((b, i) => {
    const [x, y, w, h] = b.cell;
    const grd = g.createLinearGradient(x, 0, x + w, 0);
    grd.addColorStop(0, shade(b.cover, -0.25)); grd.addColorStop(0.35, shade(b.cover, 0.12)); grd.addColorStop(1, shade(b.cover, -0.3));
    g.fillStyle = grd; g.fillRect(x, y, w, h);
    // a swatch of the plain cover colour (for the front and back covers)
    b.sw = [28 + (i % 60) * 30, CH - 24 - Math.floor(i / 60) * 30]; g.fillStyle = b.cover; g.fillRect(b.sw[0], b.sw[1], 24, 24);
    if (b.band) { g.fillStyle = b.text; [0.06, 0.1, 0.9, 0.94].forEach((k) => g.fillRect(x + 2, y + h * k, w - 4, Math.max(2, h * 0.008))); }
    // the title, running down the spine
    g.save(); g.translate(x + w / 2, y + h / 2); g.rotate(Math.PI / 2);
    g.fillStyle = b.text; g.textAlign = 'center'; g.textBaseline = 'middle';
    let fs = Math.min(w * 0.62, 30); const maxL = h * (b.band ? 0.66 : 0.8);
    g.font = `600 ${fs}px Georgia, "Times New Roman", serif`;
    while (g.measureText(b.title).width > maxL && fs > 7) { fs -= 1; g.font = `600 ${fs}px Georgia, "Times New Roman", serif`; }
    const two = w > 34;
    g.fillText(b.title, two ? -h * 0.04 : 0, two ? -w * 0.12 : 0);
    if (two) { g.font = `400 ${Math.min(fs * 0.7, 18)}px Georgia, serif`; g.globalAlpha = 0.8; g.fillText(b.author, -h * 0.04, w * 0.26); g.globalAlpha = 1; }
    g.restore();
  });
  const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 8;
  tex.minFilter = THREE.LinearMipmapLinearFilter;

  /* ---------- 3) the geometry: six faces per book, each with its own patch of the canvas ---------- */
  const P = [], N = [], UV = [], I = [];
  const uvRect = (px, py, pw, ph) => [px / CW, 1 - (py + ph) / CH, (px + pw) / CW, 1 - py / CH];   // u0 v0 u1 v1
  const pageUV = uvRect(4, CH - 20, 16, 16);
  const m = new THREE.Matrix4(), v = new THREE.Vector3(), nv = new THREE.Vector3(), nm = new THREE.Matrix3();
  const quad = (pts, n, [u0, v0, u1, v1]) => {
    // pts: bottom-left, bottom-right, top-right, top-left as seen from outside
    const k = P.length / 3;
    pts.forEach((p) => { v.set(...p).applyMatrix4(m); P.push(v.x, v.y, v.z); nv.set(...n).applyMatrix3(nm).normalize(); N.push(nv.x, nv.y, nv.z); });
    UV.push(u0, v0, u1, v0, u1, v1, u0, v1);
    I.push(k, k + 1, k + 2, k, k + 2, k + 3);
  };
  books.forEach((b) => {
    const { w, d, h } = b, a = w / 2, y0 = SH.yFront - d - R() * 0.012, y1 = y0 + d;
    // place: upright, leaning (pivot on its bottom-left edge) or lying flat
    if (b.flat) m.makeTranslation(b.x, 0, b.z + a).multiply(new THREE.Matrix4().makeRotationZ(b.yaw)).multiply(new THREE.Matrix4().makeRotationY(-Math.PI / 2)).multiply(new THREE.Matrix4().makeTranslation(0, 0, -h / 2));
    else if (b.lean) m.makeTranslation(b.x, 0, b.z).multiply(new THREE.Matrix4().makeRotationY(-b.lean)).multiply(new THREE.Matrix4().makeTranslation(a, 0, 0));
    else m.makeTranslation(b.x, 0, b.z);
    nm.getNormalMatrix(m);
    const [cx0, cy0, cw, ch] = b.cell, spine = uvRect(cx0, cy0, cw, ch), cov = uvRect(b.sw[0] + 4, b.sw[1] + 4, 16, 16);
    quad([[a, y1, 0], [-a, y1, 0], [-a, y1, h], [a, y1, h]], [0, 1, 0], spine);           // spine (faces the room)
    quad([[-a, y0, 0], [a, y0, 0], [a, y0, h], [-a, y0, h]], [0, -1, 0], pageUV);         // fore-edge (against the wall)
    quad([[a, y0, 0], [a, y1, 0], [a, y1, h], [a, y0, h]], [1, 0, 0], cov);               // covers
    quad([[-a, y1, 0], [-a, y0, 0], [-a, y0, h], [-a, y1, h]], [-1, 0, 0], cov);
    quad([[-a, y0, h], [a, y0, h], [a, y1, h], [-a, y1, h]], [0, 0, 1], pageUV);          // top (pages)
    quad([[-a, y1, 0], [a, y1, 0], [a, y0, 0], [-a, y0, 0]], [0, 0, -1], pageUV);
  });
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
  geo.setAttribute('normal', new THREE.Float32BufferAttribute(N, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(UV, 2));
  geo.setIndex(I);
  const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ map: tex, roughness: 0.82, envMapIntensity: 0.4 }));
  mesh.castShadow = true; mesh.receiveShadow = true; mesh.name = 'Books';
  const grp = new THREE.Group(); grp.name = 'Bookshelf books';
  grp.rotation.x = -Math.PI / 2;   // Blender's Z-up house metres → the glTF frame of the house node
  grp.add(mesh);
  grp.userData.count = books.length;
  return grp;
}

function shade(hex, k) {
  const c = new THREE.Color(hex);
  if (k > 0) c.lerp(new THREE.Color(1, 1, 1), k); else c.multiplyScalar(1 + k);
  return '#' + c.getHexString();
}
