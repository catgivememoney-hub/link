/* MEOW — what the trees do.
   Walk into the forest (W A S D), aim at a tree to see what it holds,
   click it: the tree sways, rings its own chime note, and does its job.

   Tree jobs (decided by the tree's number, so every tree always does the same thing):
     · every 7th tree   → Scene: switches to the next scene
     · all other trees  → Meow: tells a cat fact
   Your links live as books in the study under the cabin (src/study.js). */
(() => {
  'use strict';

  const $ = (id) => document.getElementById(id);
  const t = (k, v) => window.MEOW_I18N.t(k, v);
  const tip = $('treeTip');
  const card = $('treeCard');
  const home = $('homeBtn');
  if (!tip || !card) return;

  const SCENES = ['rain', 'frost', 'mist', 'snow', 'night', 'aurora', 'ocean', 'spring', 'summer', 'fall'];
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
    ],
    yue: [
      '貓一日瞓 12 至 16 個鐘。',
      '一群貓喺英文叫 clowder。',
      '貓食唔出甜味。',
      '每隻貓嘅鼻紋都唔同。',
      '貓每隻耳仔有 32 條肌肉。',
      '貓嘅呼嚕聲大約 25 至 150 赫茲。'
    ],
    es: [
      'Los gatos duermen de 12 a 16 horas al día.',
      'Un grupo de gatos en inglés se llama «clowder».',
      'Los gatos no pueden saborear lo dulce.',
      'La huella de la nariz de cada gato es única.',
      'Los gatos tienen 32 músculos en cada oreja.',
      'El ronroneo de un gato va de unos 25 a 150 Hz.'
    ],
    hi: [
      'बिल्लियाँ दिन में 12 से 16 घंटे सोती हैं।',
      'अंग्रेज़ी में बिल्लियों के झुंड को “clowder” कहते हैं।',
      'बिल्लियाँ मीठा स्वाद नहीं पहचान पातीं।',
      'हर बिल्ली की नाक की छाप अलग होती है।',
      'बिल्ली के हर कान में 32 मांसपेशियाँ होती हैं।',
      'बिल्ली की घुरघुराहट लगभग 25 से 150 हर्ट्ज़ की होती है।'
    ],
    ja: [
      '猫は1日に12〜16時間眠ります。',
      '猫の群れは英語で「clowder」と言います。',
      '猫は甘い味を感じません。',
      '猫の鼻紋は一匹ずつ違います。',
      '猫の耳には片方に32の筋肉があります。',
      '猫のゴロゴロ音はおよそ25〜150ヘルツです。'
    ]
  };

  // trees don't hold links (the books in the library do): every 7th tree changes the scene,
  // the others tell a cat fact
  const kind = (id) => (id % 7 === 0 ? 'scene' : 'meow');

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
  const label = (id) => (kind(id) === 'scene' ? { icon: '◐', text: t('tNext') } : { icon: '🐾', text: t('tMeow') });
  const showTip = (id, x, y) => {
    const { icon, text } = label(id);
    tip.querySelector('i').textContent = icon;
    tip.querySelector('span').textContent = text;
    tip.classList.add('show');
    place(tip, x, y);
  };
  const hideTip = () => tip.classList.remove('show');
  addEventListener('pointermove', (e) => { if (tip.classList.contains('show') && !document.pointerLockElement) place(tip, e.clientX, e.clientY); }, { passive: true });

  /* ---------- the old link card (kept closed; links are books in the library now) ---------- */
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
      closeCard();
      if (kind(d.id) === 'scene') {
        const cur = (window.MEOW_STATE && window.MEOW_STATE.scene) || 'rain';
        const next = SCENES[(SCENES.indexOf(cur) + 1) % SCENES.length];
        if (window.MEOW_SET_SCENE) window.MEOW_SET_SCENE(next);
      } else {
        const list = FACTS[window.MEOW_I18N.lang] || FACTS.en;
        toast('🐾 ' + list[Math.floor(Math.random() * list.length)]);
      }
    }
  });

  /* ---------- back to the home view ---------- */
  if (home) home.addEventListener('click', () => { closeCard(); hideTip(); if (window.MEOW_BG && window.MEOW_BG.home) window.MEOW_BG.home(); });
})();
