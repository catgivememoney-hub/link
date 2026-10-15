/* MEOW — small interaction effects.
   · magnetic buttons: icons lean gently toward the mouse
   · ripple: a soft ring of light where you click
   · composer spotlight: a light that follows the mouse inside the input bar
   · wordmark parallax: the MEOW letters drift at different depths */
(() => {
  'use strict';

  const root = document.documentElement;
  const calm = () => root.classList.contains('reduce-motion') || matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches; // real mouse, not touch

  /* ---------- magnetic buttons ---------- */
  const RANGE = 70; // px around the button where it starts to lean
  const magnets = () => document.querySelectorAll('.icon.glass, .add-btn');
  if (fine) {
    addEventListener('pointermove', (e) => {
      if (calm()) return;
      magnets().forEach((el) => {
        const r = el.getBoundingClientRect();
        if (!r.width) return;
        const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        const dx = e.clientX - cx, dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy);
        const reach = Math.max(r.width, r.height) / 2 + RANGE;
        if (dist < reach) {
          const pull = 1 - dist / reach;
          el.style.translate = `${(dx * 0.28 * pull).toFixed(1)}px ${(dy * 0.28 * pull).toFixed(1)}px`;
          el.dataset.mag = '1';
        } else if (el.dataset.mag) {
          el.style.translate = '';
          delete el.dataset.mag;
        }
      });
    }, { passive: true });
  }

  /* ---------- ripple on click ---------- */
  addEventListener('pointerdown', (e) => {
    if (calm() || e.button !== 0) return;
    const el = e.target.closest && e.target.closest('.icon, .btn, .add-btn, .rail-chip, .chip, .scene');
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dot = document.createElement('span');
    dot.className = 'ripple';
    dot.style.left = (e.clientX - r.left) + 'px';
    dot.style.top = (e.clientY - r.top) + 'px';
    if (getComputedStyle(el).position === 'static') el.style.position = 'relative';
    el.appendChild(dot);
    setTimeout(() => dot.remove(), 850);
  }, true);

  /* ---------- light that follows the mouse in the input bar ---------- */
  const comp = document.getElementById('addForm');
  if (comp) {
    comp.addEventListener('pointermove', (e) => {
      const r = comp.getBoundingClientRect();
      comp.style.setProperty('--px', (e.clientX - r.left) + 'px');
      comp.style.setProperty('--py', (e.clientY - r.top) + 'px');
    }, { passive: true });
  }

  /* ---------- MEOW letters drift at different depths ---------- */
  const word = document.querySelector('.wordmark');
  if (word && fine) {
    addEventListener('pointermove', (e) => {
      if (calm()) return;
      word.style.setProperty('--mx', ((e.clientX / innerWidth) * 2 - 1).toFixed(3));
      word.style.setProperty('--my', ((e.clientY / innerHeight) * 2 - 1).toFixed(3));
    }, { passive: true });
  }
})();
