/* MEOW — 3D floating gallery.
   Pick a category (tag) and its links float in the middle of the screen as
   glass cards on a slowly turning arc. The 3D world behind reacts: the camera
   pushes into the valley and pans as you turn the gallery.

   Controls: drag · mouse wheel · ← → keys · click a side card to bring it forward ·
   click the front card (or Enter) to open it · Esc or × to close.
   app.js calls window.MEOW_GALLERY.open(tag) and .refresh(). */
(() => {
  'use strict';

  const $ = (id) => document.getElementById(id);
  const root = document.documentElement;
  const t = (k, v) => window.MEOW_I18N.t(k, v);
  const motionOK = () => !root.classList.contains('reduce-motion');

  const el = $('gallery');
  const ring = $('ring');
  const rail = $('rail');
  if (!el || !ring || !rail) return;

  let cards = [];        // { link, node, appear, born }
  let leaving = [];      // cards flying away after a category switch
  let tag = 'all';
  let focus = 0;         // smooth position of the front card (float)
  let target = 0;        // where focus is heading
  let velocity = 0;
  let isOpen = false;
  let rafId = 0;
  const pointer = { x: 0, y: 0 };
  let drag = null;

  const host = (url) => { try { return new URL(url).hostname.replace(/^www\./, ''); } catch { return url; } };
  const shot = (url) => 'https://s.wordpress.com/mshots/v1/' + encodeURIComponent(url) + '?w=640&h=400';
  const links = () => window.MEOW_LINKS_DATA || [];
  const tagsOf = () => ['all', ...new Set(links().map((l) => l.tag).filter(Boolean))];
  const linksFor = (tg) => links().filter((l) => tg === 'all' || l.tag === tg);

  const ICON_OPEN = '<svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5M19 5l-8 8M18 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const ICON_COPY = '<svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M15 9V6.5A2.5 2.5 0 0 0 12.5 4h-6A2.5 2.5 0 0 0 4 6.5v6A2.5 2.5 0 0 0 6.5 15H9" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>';

  const toast = (msg) => {
    const box = $('toast'); box.textContent = msg; box.classList.add('show');
    clearTimeout(toast.t); toast.t = setTimeout(() => box.classList.remove('show'), 2000);
  };

  /* ---------- category rail ---------- */
  const buildRail = () => {
    rail.replaceChildren();
    tagsOf().forEach((tg, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'rail-chip';
      b.style.setProperty('--i', i);
      b.textContent = tg === 'all' ? t('all') : '#' + tg;
      b.setAttribute('aria-pressed', String(tg === tag));
      b.addEventListener('click', () => switchTo(tg));
      rail.appendChild(b);
    });
  };

  /* ---------- cards ---------- */
  const makeCard = (link, i) => {
    const node = document.createElement('article');
    node.className = 'card3d';
    node.tabIndex = -1;

    const face = document.createElement('div');
    face.className = 'card-face glass';

    const pic = document.createElement('div');
    pic.className = 'card-shot';
    const img = document.createElement('img');
    img.alt = '';
    img.loading = 'lazy';
    img.dataset.src = shot(link.url);
    img.onload = () => img.classList.add('ready');
    pic.appendChild(img);

    const body = document.createElement('div');
    body.className = 'card-body';
    const fav = document.createElement('span');
    fav.className = 'fav';
    const ico = document.createElement('img');
    ico.alt = '';
    ico.src = 'https://www.google.com/s2/favicons?sz=64&domain=' + encodeURIComponent(host(link.url));
    ico.onerror = () => { fav.textContent = (link.title[0] || '?').toUpperCase(); };
    fav.appendChild(ico);
    const meta = document.createElement('div');
    meta.className = 'meta';
    const h = document.createElement('strong'); h.textContent = link.title;
    const s = document.createElement('small'); s.textContent = host(link.url) + (link.tag ? '  ·  #' + link.tag : '');
    meta.append(h, s);
    body.append(fav, meta);

    const acts = document.createElement('div');
    acts.className = 'card-actions';
    const open = document.createElement('a');
    open.className = 'icon tiny'; open.href = link.url; open.target = '_blank'; open.rel = 'noopener noreferrer';
    open.innerHTML = ICON_OPEN; open.setAttribute('aria-label', link.title);
    const cp = document.createElement('button');
    cp.type = 'button'; cp.className = 'icon tiny'; cp.innerHTML = ICON_COPY; cp.setAttribute('aria-label', t('copy'));
    cp.addEventListener('click', async (e) => {
      e.stopPropagation();
      try { await navigator.clipboard.writeText(link.url); toast(t('copied')); } catch { window.prompt(t('copy'), link.url); }
    });
    open.addEventListener('click', (e) => e.stopPropagation());
    acts.append(open, cp);

    const sheen = document.createElement('i');
    sheen.className = 'sheen';

    face.append(pic, body, acts, sheen);
    node.appendChild(face);

    // click: side card comes forward, front card opens
    node.addEventListener('click', () => {
      if (drag && drag.moved) return;
      const idx = cards.findIndex((c) => c.node === node);
      if (idx < 0) return;
      if (Math.round(focus) === idx && Math.abs(focus - idx) < 0.2) launch(cards[idx]);
      else target = idx;
    });

    ring.appendChild(node);
    return { link, node, img, appear: 0, born: performance.now() + i * 80 };
  };

  // the front card leaps toward you, then the link opens
  const launch = (c) => {
    c.node.classList.add('launch');
    setTimeout(() => {
      window.open(c.link.url, '_blank', 'noopener');
      c.node.classList.remove('launch');
    }, motionOK() ? 380 : 0);
  };

  const build = () => {
    const list = linksFor(tag);
    cards = list.map(makeCard);
    focus = target = Math.max(0, Math.floor((list.length - 1) / 2)); // start in the middle
    $('galleryEmpty').hidden = list.length > 0;
    $('galleryCount').textContent = list.length;
    if (!motionOK()) cards.forEach((c) => { c.appear = 1; });
  };

  const switchTo = (tg) => {
    if (tg === tag && cards.length) return;
    tag = tg;
    rail.querySelectorAll('.rail-chip').forEach((b, i) => b.setAttribute('aria-pressed', String(tagsOf()[i] === tg)));
    // current cards fly back into the distance
    cards.forEach((c, i) => { c.leaveAt = performance.now() + i * 40; leaving.push(c); });
    cards = [];
    setTimeout(build, motionOK() ? 260 : 0);
    if (window.MEOW_BG && window.MEOW_BG.pulse) window.MEOW_BG.pulse();
  };

  /* ---------- layout loop ---------- */
  const geometry = () => {
    const small = innerWidth < 700;
    const w = small ? Math.min(260, innerWidth * 0.68) : 330;
    return { w, step: small ? 34 : 29, radius: small ? 420 : 720 };
  };

  let lastT = 0;
  // frame-rate independent smoothing: k is the amount per 60fps frame
  const ease60 = (k, dt) => 1 - Math.pow(1 - k, dt / 16.667);

  const loop = (now) => {
    rafId = requestAnimationFrame(loop);
    const dt = Math.min(100, lastT ? now - lastT : 16.667);
    lastT = now;
    const g = geometry();
    const time = now / 1000;
    ring.style.transform = `translateZ(${-g.radius}px)`;
    const anim = motionOK();

    // spring toward target
    if (!drag) {
      // small fixed physics steps keep the spring identical at any frame rate
      for (let s = 0, n = Math.min(8, Math.max(1, Math.round(dt / 16.667))); s < n; s++) {
        velocity = (velocity + (target - focus) * 0.12) * 0.72;
        focus += velocity;
      }
      if (!anim) { focus = target; velocity = 0; }
    }
    const n = cards.length;
    if (window.MEOW_BG && window.MEOW_BG.pan) window.MEOW_BG.pan(n > 1 ? (focus / (n - 1)) * 2 - 1 : 0);

    const place = (c, i, out) => {
      if (anim && now < c.born) return; // not yet
      const want = out ? 0 : 1;
      if (out && now < c.leaveAt) { /* wait */ } else c.appear += (want - c.appear) * (anim ? ease60(out ? 0.14 : 0.07, dt) : 1);
      const a = c.appear;
      const d = out ? c.lastD : i - focus;
      if (!out) c.lastD = d;
      const ad = Math.abs(d);
      const angle = d * g.step;
      const bob = anim ? Math.sin(time * 0.9 + i * 1.7) * 7 : 0;
      const front = Math.max(0, 1 - ad);
      // tilt the front card toward the mouse
      const tiltX = front * -pointer.y * 9, tiltY = front * pointer.x * 12;
      const depth = (1 - a) * (out ? -900 : -1100);
      const lift = front * 70;
      c.node.style.width = g.w + 'px';
      c.node.style.transform =
        `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${g.radius + depth + lift}px) rotateY(${-angle * 0.12}deg)` +
        ` translateY(${bob - (1 - a) * 60}px) rotateX(${(1 - a) * 35 + tiltX}deg) rotateY(${tiltY}deg)`;
      c.node.style.opacity = String(Math.max(0, Math.min(1, a * (1 - Math.max(0, ad - 2.2) * 0.45))));
      c.node.style.filter = ad > 0.6 || a < 0.98 ? `blur(${Math.min(6, Math.max(0, ad - 0.6) * 1.6 + (1 - a) * 8).toFixed(2)}px)` : 'none';
      c.node.style.zIndex = String(100 - Math.round(ad * 10));
      c.node.classList.toggle('front', ad < 0.5 && !out);
      c.node.style.setProperty('--mx', (50 + pointer.x * 40).toFixed(1) + '%');
      c.node.style.setProperty('--my', (50 + pointer.y * 40).toFixed(1) + '%');
      // load the screenshot only when the card is close to the front
      if (!out && ad < 3.2 && !c.img.src) c.img.src = c.img.dataset.src;
    };

    cards.forEach((c, i) => place(c, i, false));
    leaving = leaving.filter((c, i) => {
      place(c, i, true);
      if (c.appear < 0.02 && now > c.leaveAt) { c.node.remove(); return false; }
      return true;
    });

    if (!isOpen && !leaving.length && cards.every((c) => c.appear < 0.02)) {
      cancelAnimationFrame(rafId); rafId = 0;
      ring.replaceChildren();
      cards = [];
      el.hidden = true;
    }
  };

  /* ---------- open / close ---------- */
  const open = (tg = 'all') => {
    if (!links().length) return;
    const already = isOpen;
    isOpen = true;
    // on small screens, tuck the sidebar away so the cards have room
    if (innerWidth < 900 && !document.body.classList.contains('side-closed')) $('closeSide').click();
    el.hidden = false;
    root.classList.add('gallery-open');
    buildRail();
    if (already) { switchTo(tg); return; }
    tag = tg;
    rail.querySelectorAll('.rail-chip').forEach((b, i) => b.setAttribute('aria-pressed', String(tagsOf()[i] === tg)));
    ring.replaceChildren(); leaving = [];
    build();
    if (window.MEOW_BG && window.MEOW_BG.focus) window.MEOW_BG.focus(true);
    if (!rafId) rafId = requestAnimationFrame(loop);
    $('galleryClose').focus({ preventScroll: true });
  };

  const close = () => {
    if (!isOpen) return;
    isOpen = false;
    root.classList.remove('gallery-open');
    cards.forEach((c, i) => { c.leaveAt = performance.now() + i * 30; leaving.push(c); });
    cards = [];
    if (window.MEOW_BG && window.MEOW_BG.focus) window.MEOW_BG.focus(false);
    if (window.MEOW_BG && window.MEOW_BG.pan) window.MEOW_BG.pan(0);
  };

  /* ---------- input ---------- */
  addEventListener('pointermove', (e) => {
    pointer.x = (e.clientX / innerWidth) * 2 - 1;
    pointer.y = (e.clientY / innerHeight) * 2 - 1;
  }, { passive: true });

  const stage = $('galleryStage');
  stage.addEventListener('pointerdown', (e) => {
    if (e.button !== 0) return;
    drag = { x: e.clientX, f: focus, moved: false, last: e.clientX, v: 0 };
  });
  addEventListener('pointermove', (e) => {
    if (!drag) return;
    const dx = e.clientX - drag.x;
    if (Math.abs(dx) > 6) drag.moved = true;
    const g = geometry();
    focus = drag.f - dx / (g.w * 0.85);
    drag.v = (e.clientX - drag.last); drag.last = e.clientX;
  });
  addEventListener('pointerup', () => {
    if (!drag) return;
    const g = geometry();
    const fling = -drag.v / (g.w * 0.85) * 6;
    target = Math.max(0, Math.min(cards.length - 1, Math.round(focus + fling)));
    const wasMoved = drag.moved;
    setTimeout(() => { drag = null; }, 0);
    if (!wasMoved) drag = null;
  });
  stage.addEventListener('wheel', (e) => {
    e.preventDefault();
    const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    target = Math.max(0, Math.min(cards.length - 1, target + Math.sign(d) * (Math.abs(d) > 40 ? 1 : 0.34)));
    clearTimeout(stage.snap);
    stage.snap = setTimeout(() => { target = Math.round(target); }, 160);
  }, { passive: false });

  addEventListener('keydown', (e) => {
    if (!isOpen) return;
    if (e.target && /INPUT|TEXTAREA/.test(e.target.tagName)) return;
    if (e.key === 'Escape') { close(); }
    else if (e.key === 'ArrowRight') { target = Math.min(cards.length - 1, Math.round(target) + 1); e.preventDefault(); }
    else if (e.key === 'ArrowLeft') { target = Math.max(0, Math.round(target) - 1); e.preventDefault(); }
    else if (e.key === 'Enter' && cards[Math.round(focus)]) { launch(cards[Math.round(focus)]); e.preventDefault(); }
  });

  $('galleryClose').addEventListener('click', close);
  $('galleryPrev').addEventListener('click', () => { target = Math.max(0, Math.round(target) - 1); });
  $('galleryNext').addEventListener('click', () => { target = Math.min(cards.length - 1, Math.round(target) + 1); });

  document.addEventListener('meow:lang', () => { if (isOpen) buildRail(); });

  window.MEOW_GALLERY = { open, close, get isOpen() { return isOpen; }, refresh() { if (isOpen) { buildRail(); } } };
})();
