/* MEOW — custom mouse pointers (Settings → Cursor).
   paw     the cat paw (image cursor, the original)
   classic outlined arrow with a tail
   soft    rounded pointer with a bright rim
   buddy   rounded arrow with a little blob friend that follows it

   The drawn pointers are real page elements so they can be frosted glass: a
   half-see-through fill that blurs what's behind it. Their colours come from CSS
   variables that change with the scene and theme, so they stay easy to see. */
(() => {
  'use strict';

  const root = document.documentElement;
  const SHAPES = {
    classic: 'M3 2 L3 22.5 L8.6 17.4 L12.6 26.2 L16.4 24.6 L12.5 16 L19.6 15.6 Z',
    soft: 'M5.2 3.3 C4.2 2.5 3.2 3 3.2 4.3 L3.6 20.6 C3.6 22.2 5.1 22.8 6.2 21.7 L10.3 17.6 C10.8 17.1 11.4 16.9 12.1 16.9 L18 16.9 C19.6 16.9 20.2 15.1 19 14.1 Z',
    buddy: 'M5.4 3.5 C4.3 2.6 3.2 3.2 3.3 4.6 L4 19.4 C4.1 21.1 6 21.6 7 20.3 L9.6 17 C10.2 16.2 11 15.9 12 15.9 L16.6 16 C18.4 16 19 13.9 17.7 12.8 Z'
  };
  const BLOB = 'M6 15 C3 14 3 10.5 6.2 10 C7.4 7.6 10 6.4 12.4 7.4 C11.6 5 13 2.6 15.2 3 C17.4 3.4 18.4 6 17.6 8.8 C18.6 9.6 19.6 9.4 21 9.6 C22.4 9.8 22.6 11.6 22.2 13 C24 15.6 25.4 18 25 21 C24.6 24.4 22 25.6 19 25.6 L11 25.6 C8.4 25.6 7.2 24 6.8 21.6 C6.4 19.2 6.6 17 6 15 Z';

  const el = document.createElement('div');
  el.className = 'mcur';
  el.setAttribute('aria-hidden', 'true');
  el.innerHTML = `
    <div class="mcur-arrow">
      <div class="mcur-fill"></div>
      <svg class="mcur-line" viewBox="0 0 32 32"><path class="rim" d=""/><path class="ink" d=""/></svg>
    </div>
    <div class="mcur-buddy">
      <div class="mcur-fill blob"></div>
      <svg class="mcur-line" viewBox="0 0 28 28"><path class="rim" d="${BLOB}"/><path class="ink" d="${BLOB}"/>
        <circle class="eye" cx="11.4" cy="15.2" r="1.1"/><circle class="eye" cx="17.4" cy="15.8" r="1.1"/>
        <path class="mouth" d="M12.2 18.2 q1.1 1.3 2.1 0.1 q1 1.2 2.1 -0.1"/></svg>
    </div>`;
  const arrowFill = el.querySelector('.mcur-arrow .mcur-fill');
  const arrowPaths = el.querySelectorAll('.mcur-arrow path');
  const buddy = el.querySelector('.mcur-buddy');
  el.querySelector('.mcur-fill.blob').style.clipPath = `path('${BLOB}')`;

  let style = 'paw';
  let x = -100, y = -100, bx = -100, by = -100, bvx = 0, bvy = 0, raf = 0, seen = false;

  const set = (name) => {
    style = ['paw', 'classic', 'soft', 'buddy'].includes(name) ? name : 'paw';
    const drawn = style !== 'paw';
    root.classList.toggle('mcur-on', drawn);
    root.dataset.cursor = style;
    if (!drawn) { el.remove(); return; }
    if (!el.isConnected) document.body.appendChild(el);
    arrowPaths.forEach((p) => p.setAttribute('d', SHAPES[style]));
    arrowFill.style.clipPath = `path('${SHAPES[style]}')`;
    buddy.hidden = style !== 'buddy';
  };

  // the little friend follows on a soft spring, leaning as it goes
  const tick = () => {
    raf = 0;
    if (style !== 'buddy') return;
    const tx = x + 14, ty = y + 12;
    bvx = (bvx + (tx - bx) * 0.09) * 0.72; bvy = (bvy + (ty - by) * 0.09) * 0.72;
    bx += bvx; by += bvy;
    const lean = Math.max(-18, Math.min(18, bvx * 2.2));
    const hop = Math.min(1, Math.hypot(bvx, bvy) / 6);
    buddy.style.transform = `translate3d(${bx - x}px, ${by - y}px, 0) rotate(${lean}deg) scale(${1 + hop * 0.06}, ${1 - hop * 0.06})`;
    if (Math.abs(tx - bx) + Math.abs(ty - by) + Math.abs(bvx) + Math.abs(bvy) > 0.3) raf = requestAnimationFrame(tick);
  };

  const interactive = (t) => t && t.closest && t.closest('a, button, label, [role="switch"], .chip, .scene, .rail-chip, .walk-hint, input[type="range"]');
  const textual = (t) => t && t.matches && t.matches('input:not([type="range"]):not([type="button"]), textarea, [contenteditable="true"]');

  addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch' || style === 'paw') return;
    x = e.clientX; y = e.clientY;
    if (!seen) { seen = true; bx = x + 14; by = y + 12; }
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    el.classList.toggle('hover', !!interactive(e.target) || root.classList.contains('on-tree'));
    el.classList.toggle('text', !!textual(e.target));
    el.classList.add('show');
    if (!raf) raf = requestAnimationFrame(tick);
  }, { passive: true });
  addEventListener('pointerdown', () => el.classList.add('down'), true);
  addEventListener('pointerup', () => el.classList.remove('down'), true);
  document.addEventListener('mouseleave', () => el.classList.remove('show'));
  addEventListener('blur', () => el.classList.remove('show'));

  window.MEOW_CURSOR = { set, get style() { return style; } };
  const st = window.MEOW_STATE;
  set(st && st.cursor);
})();
