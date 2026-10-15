/* MEOW — film layer for the whole page.
   · moving film grain over everything
   · letterbox bars that slide in for each "shot" (scene change, entrance, gallery),
     with the scene name shown like a film title in the lower bar
   · focus classes so the part you're not looking at softens (rack focus) */
(() => {
  'use strict';

  const root = document.documentElement;
  const caption = document.getElementById('caption');
  const grain = document.getElementById('grain');
  const t = (k) => (window.MEOW_I18N ? window.MEOW_I18N.t(k) : k);

  /* ---------- film grain texture (made once, then shifted around in CSS) ---------- */
  if (grain) {
    const c = document.createElement('canvas');
    c.width = c.height = 220;
    const g = c.getContext('2d');
    const img = g.createImageData(220, 220);
    for (let i = 0; i < img.data.length; i += 4) {
      const v = 110 + Math.random() * 145;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
      img.data[i + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    grain.style.backgroundImage = `url(${c.toDataURL('image/png')})`;
  }

  /* ---------- letterbox + caption for each shot ---------- */
  const LABEL = { rain: 'bgRain', frost: 'bgFrost', mist: 'bgMist', snow: 'bgSnow', night: 'bgNight', aurora: 'bgAurora', ocean: 'bgOcean' };
  let shotTimer = 0;
  addEventListener('meow:shot', (e) => {
    if (root.classList.contains('reduce-motion')) return;
    const { name, dur } = e.detail || {};
    if (caption) caption.textContent = t(LABEL[name] || 'bgRain');
    root.classList.add('cine-shot');
    clearTimeout(shotTimer);
    shotTimer = setTimeout(() => root.classList.remove('cine-shot'), Math.max(1800, (dur || 3000) + 300));
  });

  /* ---------- rack focus: what you hover stays sharp, the rest softens ---------- */
  const sidebar = document.getElementById('sidebar');
  const stage = document.querySelector('.stage');
  const set = (cls, on) => root.classList.toggle(cls, on);
  if (sidebar) {
    sidebar.addEventListener('pointerenter', () => set('focus-side', true));
    sidebar.addEventListener('pointerleave', () => set('focus-side', false));
  }
  if (stage) {
    const comp = document.getElementById('addForm');
    if (comp) {
      comp.addEventListener('focusin', () => set('focus-stage', true));
      comp.addEventListener('focusout', () => set('focus-stage', false));
    }
  }
})();
