/* MEOW — what the trees do.
   Walk into the forest (two-finger swipe / wheel), hover a tree to see what it holds,
   click it: the tree sways, rings its own chime note, and does its job.

   Tree jobs (decided by the tree's number, so every tree always does the same thing):
     · every 13th tree  → Lucky: opens a random link
     · every 11th tree  → Meow: tells a cat fact
     · every 7th tree   → Scene: switches to the next scene
     · all other trees  → holds one of your links (from links.js); click for open / copy */
(() => {
  'use strict';

  const $ = (id) => document.getElementById(id);
  const t = (k, v) => window.MEOW_I18N.t(k, v);
  const tip = $('treeTip');
  const card = $('treeCard');
  const home = $('homeBtn');
  if (!tip || !card) return;

  const SCENES = ['rain', 'frost', 'mist', 'snow', 'night', 'aurora', 'ocean'];
  const FACTS = {
    en: [
      'Cats sleep 12–16 hours a day.',
      'A group of cats is called a clowder.',
      'Cats can’t taste sweetness.',
      'Every cat’s nose print is unique.',
      'Cats have 32 muscles in each ear.',
      'A cat’s purr is around 25–150 Hz.'
    ],
    zh: [
      '猫每天要睡 12 到 16 个小时。',
      '一群猫在英文里叫 clowder。',
      '猫尝不出甜味。',
      '每只猫的鼻纹都是独一无二的。',
      '猫的每只耳朵有 32 块肌肉。',
      '猫呼噜声的频率大约在 25 到 150 赫兹。'
    ]
  };

  const links = () => window.MEOW_LINKS_DATA || [];
  const host = (url) => { try { return new URL(url).hostname.replace(/^www\./, ''); } catch { return url; } };
  const kind = (id) => {
    if (id % 13 === 0) return 'lucky';
    if (id % 11 === 0) return 'meow';
    if (id % 7 === 0) return 'scene';
    return links().length ? 'link' : 'meow';
  };
  const linkFor = (id) => { const L = links(); return L[id % L.length]; };

  const toast = (msg) => {
    const el = $('toast'); el.textContent = msg; el.classList.add('show');
    clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove('show'), 2600);
  };

  const place = (el, x, y, dx = 18, dy = -14) => {
    const w = el.offsetWidth || 200, h = el.offsetHeight || 40;
    el.style.left = Math.min(innerWidth - w - 12, Math.max(12, x + dx)) + 'px';
    el.style.top = Math.min(innerHeight - h - 12, Math.max(12, y + dy)) + 'px';
  };

  /* ---------- hover label ---------- */
  const label = (id) => {
    const k = kind(id);
    if (k === 'link') return { icon: '↗', text: linkFor(id).title };
    if (k === 'scene') return { icon: '◐', text: t('tNext') };
    if (k === 'lucky') return { icon: '✦', text: t('tLucky') };
    return { icon: '🐾', text: t('tMeow') };
  };
  const showTip = (id, x, y) => {
    const { icon, text } = label(id);
    tip.querySelector('i').textContent = icon;
    tip.querySelector('span').textContent = text;
    tip.classList.add('show');
    place(tip, x, y);
  };
  const hideTip = () => tip.classList.remove('show');
  addEventListener('pointermove', (e) => { if (tip.classList.contains('show')) place(tip, e.clientX, e.clientY); }, { passive: true });

  /* ---------- link card ---------- */
  const openCard = (link, x, y) => {
    card.querySelector('strong').textContent = link.title;
    card.querySelector('small').textContent = host(link.url) + (link.tag ? '  ·  #' + link.tag : '');
    const fav = card.querySelector('.fav');
    fav.replaceChildren();
    const img = document.createElement('img');
    img.alt = '';
    img.src = 'https://www.google.com/s2/favicons?sz=64&domain=' + encodeURIComponent(host(link.url));
    img.onerror = () => { fav.textContent = (link.title[0] || '?').toUpperCase(); };
    fav.appendChild(img);
    $('treeOpen').href = link.url;
    $('treeCopy').onclick = async () => {
      try { await navigator.clipboard.writeText(link.url); toast(t('copied')); } catch { window.prompt(t('copy'), link.url); }
    };
    card.hidden = false;
    card.classList.remove('show');
    place(card, x, y, 22, -40);
    requestAnimationFrame(() => card.classList.add('show'));
  };
  const closeCard = () => {
    card.classList.remove('show');
    setTimeout(() => { if (!card.classList.contains('show')) card.hidden = true; }, 350);
  };
  addEventListener('keydown', (e) => { if (e.key === 'Escape') closeCard(); });

  /* ---------- what happens on a tree ---------- */
  addEventListener('meow:tree', (e) => {
    const d = e.detail || {};
    if (d.type === 'hover') showTip(d.id, d.x, d.y);
    else if (d.type === 'leave') hideTip();
    else if (d.type === 'miss') closeCard();
    else if (d.type === 'click') {
      if (window.MEOW_SOUND && window.MEOW_SOUND.chime) window.MEOW_SOUND.chime(d.id);
      const k = kind(d.id);
      if (k === 'link') openCard(linkFor(d.id), d.x, d.y);
      else if (k === 'scene') {
        closeCard();
        const cur = (window.MEOW_STATE && window.MEOW_STATE.scene) || 'rain';
        const next = SCENES[(SCENES.indexOf(cur) + 1) % SCENES.length];
        if (window.MEOW_SET_SCENE) window.MEOW_SET_SCENE(next);
      } else if (k === 'lucky') {
        closeCard();
        const L = links();
        if (L.length) {
          const pickL = L[Math.floor(Math.random() * L.length)];
          window.open(pickL.url, '_blank', 'noopener');
          toast('✦ ' + pickL.title);
        }
      } else {
        closeCard();
        const list = FACTS[window.MEOW_I18N.lang] || FACTS.en;
        toast('🐾 ' + list[Math.floor(Math.random() * list.length)]);
      }
    }
  });

  /* ---------- back to the home view ---------- */
  if (home) home.addEventListener('click', () => { closeCard(); hideTip(); if (window.MEOW_BG && window.MEOW_BG.home) window.MEOW_BG.home(); });
})();
