/* MEOW — Settings panel, confirm dialog, and applying saved preferences.
   Preferences are saved in this browser (localStorage) under "meow.settings". */
(() => {
  'use strict';

  const KEY = 'meow.settings';
  const $ = (id) => document.getElementById(id);
  const root = document.documentElement;
  const I = window.MEOW_I18N;
  const t = (k, v) => I.t(k, v);

  const DEFAULTS = {
    lang: (() => {   // start in the visitor's own language when we have it
      const l = (navigator.language || '').toLowerCase();
      if (/^(yue|zh-hk|zh-mo)/.test(l)) return 'yue';
      for (const k of ['zh', 'es', 'hi', 'ja']) if (l.startsWith(k)) return k;
      return 'en';
    })(),
    scene: 'rain',
    sound: true,
    volume: 0.7,
    hints: true,
    motion: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'reduced' : 'full',
    cursor: 'paw',  // mouse pointer: paw, classic, soft or buddy
    sens: 1         // mouse sensitivity in the 3D world (0.2 – 2.5)
  };

  // [value, label key, preview swatch] — muted colours, black & white to soft colour
  const SCENES = [
    ['rain', 'bgRain', 'linear-gradient(180deg,#8f959a,#c6c9cb 55%,#6c7175)'],
    ['frost', 'bgFrost', 'linear-gradient(180deg,#d7d9db,#eceded 55%,#a9adb0)'],
    ['mist', 'bgMist', 'linear-gradient(180deg,#93a4b1,#d6dcdf 55%,#56645c)'],
    ['snow', 'bgSnow', 'linear-gradient(180deg,#a3afba,#e1e5e8 55%,#e7ebee)'],
    ['night', 'bgNight', 'radial-gradient(circle at 30% 30%,#d8d4c6 0 6%,transparent 7%),linear-gradient(180deg,#04060d,#1a2238 60%,#141a24)'],
    ['aurora', 'bgAurora', 'linear-gradient(170deg,#03060a 20%,#4f8f80 45%,#6f6595 60%,#122029 75%,#1b2429)'],
    ['ocean', 'bgOcean', 'radial-gradient(circle at 50% 58%,#ecd0b2 0 7%,transparent 8%),linear-gradient(180deg,#4a4e68,#d4a28b 58%,#585d77 59%)']
  ];

  let s = { ...DEFAULTS };
  try { s = { ...DEFAULTS, ...JSON.parse(localStorage.getItem(KEY) || '{}') }; } catch { /* ignore */ }
  window.MEOW_STATE = s;
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch { /* ignore */ } };

  /* ---------- confirm dialog (used before anything is deleted) ---------- */
  // Returns a Promise that resolves true only if the visitor clicks the confirm button.
  window.MEOW_CONFIRM = (message, yesLabel) => new Promise((resolve) => {
    const box = $('confirm');
    const prev = document.activeElement;
    $('confirmMsg').textContent = message;
    $('confirmYes').textContent = yesLabel || t('cDelete');
    $('confirmNo').textContent = t('cCancel');
    box.hidden = false;
    root.classList.add('confirm-open');
    $('confirmNo').focus(); // safest choice is focused first
    const done = (ok) => {
      box.hidden = true;
      root.classList.remove('confirm-open');
      $('confirmYes').onclick = $('confirmNo').onclick = null;
      box.onkeydown = box.onclick = null;
      if (prev && prev.focus) prev.focus();
      resolve(ok);
    };
    $('confirmYes').onclick = () => done(true);
    $('confirmNo').onclick = () => done(false);
    box.onclick = (e) => { if (e.target === box) done(false); };
    box.onkeydown = (e) => { if (e.key === 'Escape') done(false); };
  });

  /* ---------- apply settings to the page ---------- */
  const apply = () => {
    window.MEOW_STATE = s; // the 3D world reads this when it loads
    I.apply(s.lang);
    root.classList.toggle('no-hints', !s.hints);
    root.classList.toggle('reduce-motion', s.motion === 'reduced');
    if (window.MEOW_BG) { window.MEOW_BG.setScene(s.scene); window.MEOW_BG.setMotion(s.motion); }
    if (window.MEOW_SOUND) { window.MEOW_SOUND.setVolume(s.volume); window.MEOW_SOUND.setEnabled(s.sound); }
    if (window.MEOW_CURSOR) window.MEOW_CURSOR.set(s.cursor);
    syncPanel();
  };

  /* ---------- panel controls ---------- */
  const setSwitch = (el, on) => { el.setAttribute('aria-checked', String(on)); };
  const setSeg = (box, val) => box.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.val === val)));

  const syncPanel = () => {
    setSeg($('langSeg'), s.lang);
    setSeg($('motionSeg'), s.motion);
    setSeg($('cursorGrid'), s.cursor);
    setSwitch($('soundSwitch'), s.sound);
    setSwitch($('hintSwitch'), s.hints);
    $('volume').value = Math.round(s.volume * 100);
    $('sens').value = Math.round((s.sens || 1) * 100);
    $('sensVal').textContent = (s.sens || 1).toFixed(1) + '×';
    $('volume').disabled = !s.sound;
    $('sceneGrid').querySelectorAll('button').forEach((b) => {
      b.setAttribute('aria-pressed', String(b.dataset.val === s.scene));
      b.querySelector('span').textContent = t(b.dataset.label);
    });
  };

  const buildScenes = () => {
    const grid = $('sceneGrid');
    SCENES.forEach(([val, label, swatch]) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'scene';
      b.dataset.val = val;
      b.dataset.label = label;
      const sw = document.createElement('i');
      sw.style.background = swatch;
      const name = document.createElement('span');
      b.append(sw, name);
      b.addEventListener('click', () => { s.scene = val; save(); apply(); });
      grid.appendChild(b);
    });
  };

  // Where password.js lives on GitHub (worked out from the site address).
  const passwordEditUrl = () => {
    const m = location.hostname.match(/^([^.]+)\.github\.io$/i);
    const repo = location.pathname.split('/').filter(Boolean)[0];
    const owner = m && repo ? m[1] : 'catgivememoney-hub';
    return `https://github.com/${owner}/${m && repo ? repo : 'link'}/edit/main/password.js`;
  };

  // other parts of the page (the scene trees) can change the scene too
  window.MEOW_SET_SCENE = (val) => { s.scene = val; save(); apply(); };

  const toast = (msg) => {
    const el = $('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toast.t);
    toast.t = setTimeout(() => el.classList.remove('show'), 2600);
  };

  // open / close with a soft slide (the CSS handles the motion)
  const openPanel = () => {
    const m = $('settings');
    m.classList.remove('closing'); m.hidden = false;
    root.classList.add('panel-open'); // the page behind goes out of focus
    requestAnimationFrame(() => m.classList.add('open'));
    $('setClose').focus();
  };
  const closePanel = () => {
    const m = $('settings');
    m.classList.remove('open'); m.classList.add('closing');
    root.classList.remove('panel-open');
    setTimeout(() => { if (m.classList.contains('closing')) { m.hidden = true; m.classList.remove('closing'); } }, 320);
    $('settingsBtn').focus();
  };

  const init = () => {
    buildScenes();

    $('settingsBtn').addEventListener('click', openPanel);
    $('setClose').addEventListener('click', closePanel);
    $('settings').addEventListener('click', (e) => { if (e.target === $('settings')) closePanel(); });
    $('settings').addEventListener('keydown', (e) => { if (e.key === 'Escape') closePanel(); });

    $('langSeg').addEventListener('click', (e) => {
      const b = e.target.closest('button'); if (!b) return;
      s.lang = b.dataset.val; save(); apply();
    });
    $('motionSeg').addEventListener('click', (e) => {
      const b = e.target.closest('button'); if (!b) return;
      s.motion = b.dataset.val; save(); apply();
    });
    $('cursorGrid').addEventListener('click', (e) => {
      const b = e.target.closest('button'); if (!b) return;
      s.cursor = b.dataset.val; save(); apply();
    });
    $('soundSwitch').addEventListener('click', () => { s.sound = !s.sound; save(); apply(); });
    $('hintSwitch').addEventListener('click', () => { s.hints = !s.hints; save(); apply(); });
    $('sens').addEventListener('input', (e) => {
      s.sens = e.target.value / 100; save();
      $('sensVal').textContent = s.sens.toFixed(1) + '×';
    });
    $('volume').addEventListener('input', (e) => {
      s.volume = e.target.value / 100; save();
      if (window.MEOW_SOUND) window.MEOW_SOUND.setVolume(s.volume);
    });

    // Password: make the code for a new password, then jump to password.js on GitHub.
    $('changePw').href = passwordEditUrl();
    $('copyCode').addEventListener('click', async () => {
      const pw = $('newPw').value;
      if (!pw) { toast(t('sPwEmpty')); return; }
      const code = await window.MEOW_HASH(pw);
      try { await navigator.clipboard.writeText(code); toast(t('sPwCodeCopied')); }
      catch { window.prompt(t('sCopyCode'), code); }
      $('newPw').value = '';
    });
    $('lockNow').addEventListener('click', () => window.MEOW_LOCK && window.MEOW_LOCK());

    $('resetSettings').addEventListener('click', async () => {
      if (!(await window.MEOW_CONFIRM(t('cResetMsg'), t('cReset')))) return;
      s = { ...DEFAULTS }; window.MEOW_STATE = s; save(); apply();
    });

    apply();
  };

  // Wait for the password, then start the background.
  window.MEOW_READY.then(() => {
    init();
    if (window.MEOW_BG) window.MEOW_BG.start();
  });
})();
