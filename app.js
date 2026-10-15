(() => {
  'use strict';

  const OLD_STORE = 'meow.links.v1';       // old: links kept in the browser
  const OLDER_STORE = 'linknest.links.v1';
  const THEME_KEY = 'meow.theme';
  const SIDE_KEY = 'meow.sidebar';
  const $ = (id) => document.getElementById(id);
  const t = (k, v) => window.MEOW_I18N.t(k, v);

  let links = [];    // every link, read from links.js in the repo
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
      window.prompt(t('copy'), text);
    }
  };

  /* ---------- links come from links.js in the repo ---------- */
  // links.js sets window.MEOW_LINKS. We add a timestamp so the browser always
  // gets the newest version instead of an old cached copy.
  const loadRepoLinks = () => new Promise((resolve) => {
    const sc = document.createElement('script');
    sc.src = 'links.js?t=' + Date.now();
    sc.onload = sc.onerror = () => {
      const data = Array.isArray(window.MEOW_LINKS) ? window.MEOW_LINKS : [];
      links = data.map(clean).filter(Boolean);
      resolve();
    };
    document.head.appendChild(sc);
  });

  // Where to edit links.js on GitHub (works out the repo from the site address).
  const repoInfo = () => {
    const m = location.hostname.match(/^([^.]+)\.github\.io$/i);
    const repo = location.pathname.split('/').filter(Boolean)[0];
    if (m && repo) return { owner: m[1], repo };
    return { owner: 'catgivememoney-hub', repo: 'link' };
  };
  const editUrl = () => {
    const { owner, repo } = repoInfo();
    return `https://github.com/${owner}/${repo}/edit/main/links.js`;
  };

  // One line of links.js for a link.
  const toLine = (l) =>
    `  { title: ${JSON.stringify(l.title)}, url: ${JSON.stringify(l.url)}, tag: ${JSON.stringify(l.tag || '')} },`;

  // Links people added in older versions were kept only in their browser.
  const browserOnly = () => {
    try {
      const raw = JSON.parse(localStorage.getItem(OLD_STORE) || localStorage.getItem(OLDER_STORE) || '[]');
      const have = new Set(links.map((l) => l.url));
      return (Array.isArray(raw) ? raw : []).map(clean).filter((l) => l && !have.has(l.url));
    } catch { return []; }
  };

  /* ---------- rendering ---------- */
  const all = () => links;

  const renderTags = () => {
    const box = $('tags');
    box.replaceChildren();
    const tags = ['all', ...new Set(all().map((l) => l.tag).filter(Boolean))];
    if (!tags.includes(activeTag)) activeTag = 'all';
    tags.forEach((tag) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip' + (tag === activeTag ? ' active' : '');
      b.textContent = tag === 'all' ? t('all') : '#' + tag;
      b.addEventListener('click', () => { activeTag = tag; render(); });
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
    msg.textContent = t('loadingPreview');
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
      img.onerror = () => { if (hoverUrl === l.url) msg.textContent = t('noPreview'); };
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
    row.className = 'row';
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

    const actions = document.createElement('span');
    actions.className = 'actions';
    row.appendChild(actions);

    const cp = document.createElement('button');
    cp.type = 'button';
    cp.textContent = t('copy');
    cp.setAttribute('aria-label', t('copy') + ': ' + l.title);
    cp.addEventListener('click', () => copy(l.url, t('copied')));
    actions.appendChild(cp);

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
  // A static site can't write to GitHub by itself, so "Meow it" copies the new
  // line and opens links.js in GitHub's editor. Paste it in and commit.
  const addLink = (e) => {
    e.preventDefault();
    const l = clean({ title: $('title').value, url: $('url').value, tag: $('tag').value });
    if (!l) { toast(t('invalidLink')); return; }
    if (links.some((x) => x.url === l.url)) { toast(t('dupLink')); return; }
    window.open(editUrl(), '_blank', 'noopener');
    copy(toLine(l), t('lineCopied'));
    $('addForm').reset();
  };

  const exportJson = () => {
    const data = links.map(({ title, url, tag }) => ({ title, url, tag }));
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'meow-links.json';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };

  // Offer to move links that were only saved in this browser into links.js.
  const showMoveNotice = () => {
    const extra = browserOnly();
    const box = $('moveNotice');
    if (!extra.length) { box.hidden = true; return; }
    box.hidden = false;
    $('moveText').textContent = t('olderLinks', { n: extra.length });
    $('moveBtn').onclick = () => {
      window.open(editUrl(), '_blank', 'noopener');
      copy(extra.map(toLine).join('\n'), t('linesCopied'));
    };
    $('moveDismiss').onclick = async () => {
      // deleting needs a confirmation first
      if (!(await window.MEOW_CONFIRM(t('cDismiss', { n: extra.length })))) return;
      try { localStorage.removeItem(OLD_STORE); localStorage.removeItem(OLDER_STORE); } catch { /* ignore */ }
      box.hidden = true;
    };
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
    $('menuBtn').setAttribute('aria-label', open ? t('closeSidebar') : t('openSidebar'));
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
    await window.MEOW_READY; // wait for the password screen
    initTheme();
    initSidebar();
    $('addForm').addEventListener('submit', addLink);
    $('search').addEventListener('input', render);
    $('editBtn').href = editUrl();
    $('exportBtn').addEventListener('click', exportJson);
    addEventListener('scroll', hidePreview, { passive: true });
    await loadRepoLinks();
    render();
    showMoveNotice();
    // redraw text when the language changes in Settings
    document.addEventListener('meow:lang', () => { render(); showMoveNotice(); setSidebar(sidebarOpen(), false); });
  };

  init();
})();
