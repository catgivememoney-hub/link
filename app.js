(() => {
  'use strict';

  const KEY = 'meow.links.v1';
  const OLD_KEY = 'linknest.links.v1'; // v1 name, migrated once
  const THEME_KEY = 'meow.theme';
  const SIDE_KEY = 'meow.sidebar';
  const MAX_IMPORT = 200;
  const $ = (id) => document.getElementById(id);

  let mine = [];     // links saved in this browser (localStorage)
  let curated = [];  // links shipped in links.json (same for every visitor)
  let activeTag = 'all';

  /* ---------- helpers ---------- */
  const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);

  // Only allow http/https so "javascript:" links can never be saved or opened.
  const safeUrl = (v) => {
    try {
      const u = new URL(String(v).trim());
      return u.protocol === 'http:' || u.protocol === 'https:' ? u.href : null;
    } catch { return null; }
  };

  const clean = (o) => {
    if (!o || typeof o !== 'object') return null;
    const url = safeUrl(o.url || '');
    const title = String(o.title || '').trim().slice(0, 80);
    if (!url || !title) return null;
    return {
      id: String(o.id || uid()).slice(0, 40),
      title,
      url,
      tag: String(o.tag || '').trim().toLowerCase().slice(0, 20),
      added: Number(o.added) || Date.now()
    };
  };

  const host = (url) => { try { return new URL(url).hostname.replace(/^www\./, ''); } catch { return url; } };

  const enc = (s) => {
    let r = '';
    new TextEncoder().encode(s).forEach((b) => { r += String.fromCharCode(b); });
    return btoa(r);
  };
  const dec = (s) => new TextDecoder().decode(Uint8Array.from(atob(s), (c) => c.charCodeAt(0)));

  let toastTimer;
  const toast = (msg) => {
    const t = $('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
  };

  const copy = async (text, okMsg) => {
    try {
      await navigator.clipboard.writeText(text);
      toast(okMsg);
    } catch {
      window.prompt('Copy this:', text);
    }
  };

  /* ---------- storage ---------- */
  const load = () => {
    try {
      const raw = JSON.parse(localStorage.getItem(KEY) || localStorage.getItem(OLD_KEY) || '[]');
      mine = Array.isArray(raw) ? raw.map(clean).filter(Boolean) : [];
    } catch { mine = []; }
  };
  const save = () => {
    try { localStorage.setItem(KEY, JSON.stringify(mine)); }
    catch { toast('Could not save (browser storage is blocked).'); }
  };

  const loadCurated = async () => {
    try {
      const res = await fetch('links.json', { cache: 'no-cache' });
      if (!res.ok) return;
      const data = await res.json();
      curated = (Array.isArray(data) ? data : []).map(clean).filter(Boolean);
      curated.forEach((l) => { l.pinned = true; });
    } catch { /* opened from a file:// URL or offline; that's fine */ }
  };

  /* ---------- rendering ---------- */
  const all = () => [...curated, ...mine];

  const renderTags = () => {
    const box = $('tags');
    box.replaceChildren();
    const tags = ['all', ...new Set(all().map((l) => l.tag).filter(Boolean))];
    if (!tags.includes(activeTag)) activeTag = 'all';
    tags.forEach((t) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip' + (t === activeTag ? ' active' : '');
      b.textContent = t === 'all' ? 'All' : '#' + t;
      b.addEventListener('click', () => { activeTag = t; render(); });
      box.appendChild(b);
    });
  };

  /* ---------- hover preview ---------- */
  // Free screenshot service (WordPress mShots). The first request for a new
  // site returns a "generating" placeholder, so we retry a couple of times.
  const shotUrl = (url, n) =>
    'https://s.wordpress.com/mshots/v1/' + encodeURIComponent(url) + '?w=680&h=425' + (n ? '&r=' + n : '');

  let hoverUrl = null;
  let retryTimer;

  // Put the card next to the mouse (or next to the row when using the keyboard),
  // flipping sides so it never goes off screen.
  const placeAt = (x, y) => {
    const p = $('preview');
    const w = p.offsetWidth || 340;
    const h = p.offsetHeight || 270;
    let left = x + 22;
    let top = y + 22;
    if (left + w > innerWidth - 12) left = x - w - 22;
    if (top + h > innerHeight - 12) top = y - h - 22;
    p.style.left = Math.max(12, left) + 'px';
    p.style.top = Math.max(12, top) + 'px';
  };

  const seen = new Set();

  const showPreview = (l, x, y) => {
    hoverUrl = l.url;
    clearTimeout(retryTimer);
    const img = $('previewImg');
    const msg = $('previewMsg');
    $('previewTitle').textContent = l.title;
    $('previewHost').textContent = host(l.url);
    img.classList.remove('ready');
    msg.textContent = 'Loading preview…';
    let tries = 0;
    const loadShot = () => {
      if (hoverUrl !== l.url) return;
      img.onload = () => {
        if (hoverUrl !== l.url) return;
        img.classList.add('ready');
        // A brand-new site first gets a "generating" image; refresh it shortly.
        if ((!seen.has(l.url) || img.naturalWidth < 600) && tries < 3) {
          tries++;
          retryTimer = setTimeout(loadShot, 3000);
        } else {
          seen.add(l.url);
        }
      };
      img.onerror = () => { if (hoverUrl === l.url) msg.textContent = 'No preview for this site'; };
      img.src = shotUrl(l.url, tries);
    };
    loadShot();
    placeAt(x, y);
    $('preview').classList.add('show');
  };

  const hidePreview = () => {
    hoverUrl = null;
    clearTimeout(retryTimer);
    $('preview').classList.remove('show');
  };

  /* ---------- one row in the list ---------- */
  const card = (l, i) => {
    const row = document.createElement('li');
    row.className = 'row' + (l.pinned ? ' featured' : '');
    row.style.animationDelay = Math.min(i * 25, 300) + 'ms';

    const num = document.createElement('span');
    num.className = 'num';
    num.textContent = String(i + 1).padStart(2, '0');

    const a = document.createElement('a');
    a.className = 'link';
    a.href = l.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';

    // Site icon, with the first letter as a fallback.
    const fav = document.createElement('span');
    fav.className = 'fav';
    const letter = (l.title[0] || '?').toUpperCase();
    const ico = document.createElement('img');
    ico.alt = '';
    ico.loading = 'lazy';
    ico.src = 'https://www.google.com/s2/favicons?sz=64&domain=' + encodeURIComponent(host(l.url));
    ico.onerror = () => { fav.textContent = letter; };
    fav.appendChild(ico);

    const meta = document.createElement('span');
    meta.className = 'meta';
    const strong = document.createElement('strong');
    strong.textContent = l.title;
    const small = document.createElement('small');
    small.textContent = host(l.url);
    meta.append(strong, small);
    a.append(fav, meta);

    a.addEventListener('mouseenter', (e) => showPreview(l, e.clientX, e.clientY));
    a.addEventListener('mousemove', (e) => placeAt(e.clientX, e.clientY));
    a.addEventListener('mouseleave', hidePreview);
    a.addEventListener('focus', () => {
      const r = a.getBoundingClientRect();
      showPreview(l, r.left + 120, r.bottom);
    });
    a.addEventListener('blur', hidePreview);

    row.append(num, a);

    if (l.tag) {
      const badge = document.createElement('span');
      badge.className = 'badge';
      badge.textContent = '#' + l.tag;
      row.appendChild(badge);
    }
    if (l.pinned) {
      const pin = document.createElement('span');
      pin.className = 'pin';
      pin.textContent = 'Featured';
      row.appendChild(pin);
    }

    const actions = document.createElement('span');
    actions.className = 'actions';
    row.appendChild(actions);

    const cp = document.createElement('button');
    cp.type = 'button';
    cp.textContent = 'Copy';
    cp.setAttribute('aria-label', 'Copy link for ' + l.title);
    cp.addEventListener('click', () => copy(l.url, 'Copied! 🐾'));
    actions.appendChild(cp);

    if (!l.pinned) {
      const del = document.createElement('button');
      del.type = 'button';
      del.textContent = 'Delete';
      del.setAttribute('aria-label', 'Delete ' + l.title);
      del.addEventListener('click', () => {
        mine = mine.filter((x) => x.id !== l.id);
        save();
        render();
        toast('Meow deleted');
      });
      actions.appendChild(del);
    }

    return row;
  };

  const render = () => {
    renderTags();
    const q = $('search').value.trim().toLowerCase();
    const list = all()
      .filter((l) => activeTag === 'all' || l.tag === activeTag)
      .filter((l) => !q || (l.title + ' ' + l.url + ' ' + l.tag).toLowerCase().includes(q));
    hidePreview();
    $('list').replaceChildren(...list.map(card));
    $('empty').hidden = list.length > 0;
    $('count').textContent = list.length;
  };

  /* ---------- actions ---------- */
  const addLink = (e) => {
    e.preventDefault();
    const l = clean({ title: $('title').value, url: $('url').value, tag: $('tag').value });
    if (!l) { toast('Please enter a title and a valid http(s) URL.'); return; }
    if (all().some((x) => x.url === l.url)) { toast('That meow is already here.'); return; }
    mine.unshift(l);
    save();
    $('addForm').reset();
    render();
    toast('Meow saved 🐾');
    if (!sidebarOpen()) setSidebar(true, false);
  };

  const mergeIn = (incoming) => {
    const have = new Set(all().map((l) => l.url));
    let added = 0;
    incoming.slice(0, MAX_IMPORT).map(clean).filter(Boolean).forEach((l) => {
      if (!have.has(l.url)) { l.id = uid(); mine.push(l); have.add(l.url); added++; }
    });
    save();
    render();
    return added;
  };

  const plain = () => mine.map(({ title, url, tag }) => ({ title, url, tag }));

  const share = () => {
    if (!mine.length) { toast('Add some meows first.'); return; }
    const link = location.origin + location.pathname + '#share=' + enc(JSON.stringify(plain()));
    if (link.length > 8000) { toast('Too many meows for a share link. Use Export instead.'); return; }
    copy(link, 'Share link copied!');
  };

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(plain(), null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'meow-links.json';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };

  const importJson = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 1_000_000) { toast('File too large.'); return; }
    const r = new FileReader();
    r.onload = () => {
      try {
        const data = JSON.parse(r.result);
        if (!Array.isArray(data)) throw new Error('not a list');
        toast(`Imported ${mergeIn(data)} new meow(s)`);
      } catch { toast('That file is not a valid links JSON.'); }
    };
    r.readAsText(file);
    e.target.value = '';
  };

  // Someone opened a share link: ask before importing anything.
  const handleShareHash = () => {
    if (!location.hash.startsWith('#share=')) return;
    try {
      const data = JSON.parse(dec(location.hash.slice(7)));
      if (!Array.isArray(data)) throw new Error('bad');
      const valid = data.slice(0, MAX_IMPORT).map(clean).filter(Boolean);
      if (valid.length && window.confirm(`Add ${valid.length} shared meow(s) to your board?`)) {
        toast(`Imported ${mergeIn(valid)} new meow(s)`);
      }
    } catch { toast('That share link looks broken.'); }
    history.replaceState(null, '', location.pathname + location.search);
  };

  /* ---------- theme ---------- */
  const applyTheme = (t) => document.documentElement.setAttribute('data-theme', t);
  const initTheme = () => {
    let t = null;
    try { t = localStorage.getItem(THEME_KEY); } catch { /* ignore */ }
    if (!t) t = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    applyTheme(t);
    $('themeBtn').addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem(THEME_KEY, next); } catch { /* ignore */ }
    });
  };

  /* ---------- sidebar ---------- */
  const isSmall = () => matchMedia('(max-width: 900px)').matches;

  const setSidebar = (open, remember) => {
    document.body.classList.toggle('side-closed', !open);
    $('menuBtn').setAttribute('aria-expanded', String(open));
    $('menuBtn').setAttribute('aria-label', open ? 'Close sidebar' : 'Open sidebar');
    $('backdrop').hidden = !(open && isSmall());
    $('sidebar').inert = !open;
    hidePreview();
    if (remember && !isSmall()) {
      try { localStorage.setItem(SIDE_KEY, open ? 'open' : 'closed'); } catch { /* ignore */ }
    }
  };
  const sidebarOpen = () => !document.body.classList.contains('side-closed');

  const initSidebar = () => {
    let saved = null;
    try { saved = localStorage.getItem(SIDE_KEY); } catch { /* ignore */ }
    // Open by default on big screens, closed on phones.
    setSidebar(isSmall() ? false : saved !== 'closed', false);
    $('menuBtn').addEventListener('click', () => setSidebar(!sidebarOpen(), true));
    $('closeSide').addEventListener('click', () => setSidebar(false, true));
    $('backdrop').addEventListener('click', () => setSidebar(false, true));
    addEventListener('keydown', (e) => { if (e.key === 'Escape' && sidebarOpen() && isSmall()) setSidebar(false, true); });
    matchMedia('(max-width: 900px)').addEventListener('change', () => setSidebar(isSmall() ? false : true, false));
    $('list').addEventListener('scroll', hidePreview, { passive: true });
  };

  /* ---------- start ---------- */
  const init = async () => {
    initTheme();
    initSidebar();
    load();
    $('addForm').addEventListener('submit', addLink);
    $('search').addEventListener('input', render);
    $('shareBtn').addEventListener('click', share);
    $('exportBtn').addEventListener('click', exportJson);
    $('importFile').addEventListener('change', importJson);
    addEventListener('scroll', hidePreview, { passive: true });
    await loadCurated();
    render();
    handleShareHash();
  };

  init();
})();
