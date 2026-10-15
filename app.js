(() => {
  'use strict';

  const KEY = 'linknest.links.v1';
  const THEME_KEY = 'linknest.theme';
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

  const color = (s) => {
    let h = 0;
    for (const c of s) h = (h * 31 + c.charCodeAt(0)) % 360;
    return `linear-gradient(135deg, hsl(${h} 80% 60%), hsl(${(h + 50) % 360} 80% 55%))`;
  };

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
      const raw = JSON.parse(localStorage.getItem(KEY) || '[]');
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

  const card = (l) => {
    const item = document.createElement('article');
    item.className = 'item';

    const a = document.createElement('a');
    a.className = 'link';
    a.href = l.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';

    const av = document.createElement('div');
    av.className = 'avatar';
    av.style.background = color(host(l.url));
    av.textContent = (l.title[0] || '?').toUpperCase();

    const meta = document.createElement('div');
    meta.className = 'meta';
    const strong = document.createElement('strong');
    strong.textContent = l.title;
    const small = document.createElement('small');
    small.textContent = host(l.url);
    meta.append(strong, small);
    a.append(av, meta);

    const row = document.createElement('div');
    row.className = 'row';
    if (l.tag) {
      const badge = document.createElement('span');
      badge.className = 'badge';
      badge.textContent = '#' + l.tag;
      row.appendChild(badge);
    }
    if (l.pinned) {
      const pin = document.createElement('span');
      pin.className = 'pinned';
      pin.textContent = '📌 featured';
      row.appendChild(pin);
    }
    const sp = document.createElement('span');
    sp.className = 'spacer';
    row.appendChild(sp);

    const cp = document.createElement('button');
    cp.type = 'button';
    cp.textContent = 'Copy';
    cp.setAttribute('aria-label', 'Copy link for ' + l.title);
    cp.addEventListener('click', () => copy(l.url, 'Link copied!'));
    row.appendChild(cp);

    if (!l.pinned) {
      const del = document.createElement('button');
      del.type = 'button';
      del.textContent = 'Delete';
      del.setAttribute('aria-label', 'Delete ' + l.title);
      del.addEventListener('click', () => {
        mine = mine.filter((x) => x.id !== l.id);
        save();
        render();
        toast('Link deleted');
      });
      row.appendChild(del);
    }

    item.append(a, row);
    return item;
  };

  const render = () => {
    renderTags();
    const q = $('search').value.trim().toLowerCase();
    const list = all()
      .filter((l) => activeTag === 'all' || l.tag === activeTag)
      .filter((l) => !q || (l.title + ' ' + l.url + ' ' + l.tag).toLowerCase().includes(q));
    const grid = $('grid');
    grid.replaceChildren(...list.map(card));
    $('empty').hidden = list.length > 0;
  };

  /* ---------- actions ---------- */
  const addLink = (e) => {
    e.preventDefault();
    const l = clean({ title: $('title').value, url: $('url').value, tag: $('tag').value });
    if (!l) { toast('Please enter a title and a valid http(s) URL.'); return; }
    if (all().some((x) => x.url === l.url)) { toast('That link is already here.'); return; }
    mine.unshift(l);
    save();
    $('addForm').reset();
    render();
    toast('Link added ✨');
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
    if (!mine.length) { toast('Add some links first.'); return; }
    const link = location.origin + location.pathname + '#share=' + enc(JSON.stringify(plain()));
    if (link.length > 8000) { toast('Too many links for a share link. Use Export instead.'); return; }
    copy(link, 'Share link copied!');
  };

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(plain(), null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'linknest-links.json';
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
        toast(`Imported ${mergeIn(data)} new link(s)`);
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
      if (valid.length && window.confirm(`Add ${valid.length} shared link(s) to your board?`)) {
        toast(`Imported ${mergeIn(valid)} new link(s)`);
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

  /* ---------- start ---------- */
  const init = async () => {
    initTheme();
    load();
    $('addForm').addEventListener('submit', addLink);
    $('search').addEventListener('input', render);
    $('shareBtn').addEventListener('click', share);
    $('exportBtn').addEventListener('click', exportJson);
    $('importFile').addEventListener('change', importJson);
    await loadCurated();
    render();
    handleShareHash();
  };

  init();
})();
