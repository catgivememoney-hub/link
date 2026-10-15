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
    lang: (navigator.language || '').toLowerCase().startsWith('zh') ? 'zh' : 'en',
    scene: 'rain',
    sound: true,
    volume: 0.7,
    hints: true,
    motion: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'reduced' : 'full'
  };

  const SCENES = [
    ['rain', 'bgRain', 'linear-gradient(160deg,#f2f2f2,#bdbdbd)'],
    ['frost', 'bgFrost', 'linear-gradient(160deg,#fafafa,#8a8a8a)'],
    ['aurora', 'bgAurora', 'linear-gradient(135deg,#7fe3cc,#b9a0ff 55%,#ffaad2)'],
    ['mist', 'bgMist', 'linear-gradient(180deg,#e9eef2 0%,#b9c3cc 55%,#5f6e7c 100%)'],
    ['night', 'bgNight', 'radial-gradient(circle at 78% 22%,#fbf7e8 0 7%,transparent 8%),linear-gradient(180deg,#02030a,#1b2347)'],
    ['snow', 'bgSnow', 'linear-gradient(180deg,#dfe5ec 0%,#f4f6f8 60%,#6f7f8f 61%,#6f7f8f 100%)'],
    ['ocean', 'bgOcean', 'radial-gradient(circle at 50% 56%,#fff1d6 0 9%,transparent 10%),linear-gradient(180deg,#ffd3a5 0%,#fd9f88 55%,#3d3f73 56%,#3d3f73 100%)']
  ];

  let s = { ...DEFAULTS };
  try { s = { ...DEFAULTS, ...JSON.parse(localStorage.getItem(KEY) || '{}') }; } catch { /* ignore */ }
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
    $('confirmNo').focus(); // safest choice is focused first
    const done = (ok) => {
      box.hidden = true;
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
    I.apply(s.lang);
    root.classList.toggle('no-hints', !s.hints);
    root.classList.toggle('reduce-motion', s.motion === 'reduced');
    if (window.MEOW_BG) { window.MEOW_BG.setScene(s.scene); window.MEOW_BG.setMotion(s.motion); }
    if (window.MEOW_SOUND) { window.MEOW_SOUND.setVolume(s.volume); window.MEOW_SOUND.setEnabled(s.sound); }
    syncPanel();
  };

  /* ---------- panel controls ---------- */
  const setSwitch = (el, on) => {
    el.setAttribute('aria-checked', String(on));
    el.querySelector('.sw-label').textContent = on ? t('sOn') : t('sOff');
  };
  const setSeg = (box, val) => box.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.val === val)));

  const syncPanel = () => {
    setSeg($('langSeg'), s.lang);
    setSeg($('motionSeg'), s.motion);
    setSwitch($('soundSwitch'), s.sound);
    setSwitch($('hintSwitch'), s.hints);
    $('volume').value = Math.round(s.volume * 100);
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

  const toast = (msg) => {
    const el = $('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toast.t);
    toast.t = setTimeout(() => el.classList.remove('show'), 2600);
  };

  const openPanel = () => { $('settings').hidden = false; $('setClose').focus(); };
  const closePanel = () => { $('settings').hidden = true; $('settingsBtn').focus(); };

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
    $('soundSwitch').addEventListener('click', () => { s.sound = !s.sound; save(); apply(); });
    $('hintSwitch').addEventListener('click', () => { s.hints = !s.hints; save(); apply(); });
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
      s = { ...DEFAULTS }; save(); apply();
    });

    apply();
  };

  // Wait for the password, then start the background.
  window.MEOW_READY.then(() => {
    init();
    if (window.MEOW_BG) window.MEOW_BG.start();
  });
})();
