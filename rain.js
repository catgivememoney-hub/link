/* MEOW — rainy frosted window background + rain sound.
   Pure canvas + Web Audio, no image or audio files. */
(() => {
  'use strict';

  const canvas = document.getElementById('rain');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isDark = () => document.documentElement.getAttribute('data-theme') === 'dark';

  let W = 0, H = 0, DPR = 1;
  let grain = null;          // frosted-glass noise pattern
  let smalls = [];           // tiny droplets stuck on the glass
  let drops = [];            // bigger drops that grow and slide down
  let last = performance.now();
  let t0 = last;

  const rand = (a, b) => a + Math.random() * (b - a);

  /* ---------- setup ---------- */
  const makeGrain = () => {
    const g = document.createElement('canvas');
    g.width = g.height = 160;
    const gx = g.getContext('2d');
    const img = gx.createImageData(160, 160);
    for (let i = 0; i < img.data.length; i += 4) {
      const v = Math.random() * 255;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
      img.data[i + 3] = 22;
    }
    gx.putImageData(img, 0, 0);
    return ctx.createPattern(g, 'repeat');
  };

  const area = () => (W * H) / (1280 * 800);

  const newSmall = () => ({ x: rand(0, W), y: rand(0, H), r: rand(0.8, 2.8) * DPR });
  const newDrop = (top) => ({
    x: rand(0, W),
    y: top ? rand(-40, 0) * DPR : rand(0, H),
    r: rand(3, 7.5) * DPR,
    trail: [],
    vy: 0,
    sliding: false,
    wobble: rand(0, Math.PI * 2),
    lastTrail: 0
  });

  const resize = () => {
    DPR = Math.min(window.devicePixelRatio || 1, 1.5);
    W = canvas.width = Math.floor(innerWidth * DPR);
    H = canvas.height = Math.floor(innerHeight * DPR);
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
    grain = makeGrain();
    const a = area();
    smalls = Array.from({ length: Math.round(520 * a) }, newSmall);
    drops = Array.from({ length: Math.round(70 * a) }, () => newDrop(false));
  };

  /* ---------- drawing ---------- */
  // Slowly drifting black & white gradient seen through blurry glass.
  const drawBackground = (t) => {
    const dark = isDark();
    const base = ctx.createLinearGradient(0, 0, W * 0.4, H);
    if (dark) { base.addColorStop(0, '#050505'); base.addColorStop(1, '#1d1d1d'); }
    else { base.addColorStop(0, '#f7f7f7'); base.addColorStop(1, '#d6d6d6'); }
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, W, H);

    const blobs = dark
      ? [['rgba(255,255,255,0.20)', 0.00], ['rgba(255,255,255,0.13)', 2.10], ['rgba(0,0,0,0.65)', 4.20]]
      : [['rgba(0,0,0,0.20)', 0.00], ['rgba(0,0,0,0.12)', 2.10], ['rgba(255,255,255,0.85)', 4.20]];
    const m = Math.max(W, H);
    blobs.forEach(([c, p], i) => {
      const s = t * (0.00011 + i * 0.00003);
      const x = W * (0.5 + 0.38 * Math.sin(s + p));
      const y = H * (0.5 + 0.34 * Math.cos(s * 1.3 + p));
      const g = ctx.createRadialGradient(x, y, 0, x, y, m * 0.55);
      g.addColorStop(0, c);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
    });

    // frosted grain
    ctx.fillStyle = grain;
    ctx.fillRect(0, 0, W, H);
  };

  // A water drop: soft body, dark lower rim, bright highlight (looks like a lens).
  const drawDrop = (x, y, r, stretch = 1) => {
    const dark = isDark();
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(1, stretch);
    const body = ctx.createRadialGradient(-r * 0.3, -r * 0.35, r * 0.1, 0, 0, r);
    if (dark) {
      body.addColorStop(0, 'rgba(255,255,255,0.32)');
      body.addColorStop(0.6, 'rgba(255,255,255,0.08)');
      body.addColorStop(1, 'rgba(0,0,0,0.45)');
    } else {
      body.addColorStop(0, 'rgba(255,255,255,0.95)');
      body.addColorStop(0.6, 'rgba(255,255,255,0.35)');
      body.addColorStop(1, 'rgba(0,0,0,0.28)');
    }
    ctx.fillStyle = body;
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.fill();
    if (r > 1.6 * DPR) {
      ctx.fillStyle = dark ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.95)';
      ctx.beginPath();
      ctx.arc(-r * 0.32, -r * 0.38, r * 0.22, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  };

  /* ---------- simulation ---------- */
  const step = (dt) => {
    const g = 0.0009 * DPR; // pull of gravity once a drop starts sliding

    // slowly add new tiny droplets so the glass never dries out
    const want = Math.round(520 * area());
    for (let i = 0; i < 3 && smalls.length < want; i++) smalls.push(newSmall());
    if (Math.random() < 0.35 * area()) drops.push(newDrop(Math.random() < 0.3));

    for (let i = drops.length - 1; i >= 0; i--) {
      const d = drops[i];
      if (d.dead) continue;
      if (!d.sliding) {
        d.r += 0.0009 * dt * DPR;                  // drops slowly collect water
        if (d.r > 6.5 * DPR || Math.random() < 0.0005 * dt) d.sliding = true;
      } else {
        d.vy = Math.min(d.vy + g * dt, 0.55 * DPR);
        d.y += d.vy * dt;
        d.wobble += 0.004 * dt;
        d.x += Math.sin(d.wobble) * 0.05 * dt * DPR; // slight zig-zag
        d.r = Math.max(2.5 * DPR, d.r - 0.00025 * dt * DPR);
        d.trail.push(d.x, d.y);
        if (d.trail.length > 80) d.trail.splice(0, 2);
        // leave a trail of tiny droplets
        if (d.y - d.lastTrail > rand(10, 22) * DPR) {
          d.lastTrail = d.y;
          smalls.push({ x: d.x + rand(-1.5, 1.5) * DPR, y: d.y - d.r * 1.4, r: rand(0.8, 1.8) * DPR });
        }
        // wipe tiny droplets out of the path
        for (let j = smalls.length - 1; j >= 0; j--) {
          const s = smalls[j];
          const dx = s.x - d.x, dy = s.y - d.y;
          if (dy > -d.r && dy < d.r * 1.2 && dx * dx < d.r * d.r * 1.4) {
            smalls.splice(j, 1);
            d.r = Math.min(d.r + s.r * 0.08, 9 * DPR);
          }
        }
      }
      // merge with other drops (the smaller one is absorbed)
      for (let k = 0; k < drops.length && !d.dead; k++) {
        const o = drops[k];
        if (o === d || o.dead) continue;
        const dx = o.x - d.x, dy = o.y - d.y, rr = o.r + d.r;
        if (dx * dx + dy * dy < rr * rr * 0.6) {
          const big = d.r >= o.r ? d : o, small = big === d ? o : d;
          big.r = Math.min(Math.sqrt(big.r * big.r + small.r * small.r), 10 * DPR);
          big.sliding = big.sliding || small.sliding || big.r > 5 * DPR;
          small.dead = true;
        }
      }
      if (d.y - d.r > H + 20) d.dead = true;
    }
    drops = drops.filter((d) => !d.dead);
    if (drops.length > 180 * area()) drops.splice(0, drops.length - Math.round(140 * area()));
    if (smalls.length > 900 * area()) smalls.splice(0, smalls.length - Math.round(900 * area()));
  };

  const draw = (t) => {
    drawBackground(t);
    for (const s of smalls) drawDrop(s.x, s.y, s.r);
    // wet streaks left behind by sliding drops (clearer glass)
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    for (const d of drops) {
      const tr = d.trail;
      if (!tr || tr.length < 6) continue;
      ctx.strokeStyle = isDark() ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.28)';
      ctx.lineWidth = d.r * 0.75;
      ctx.beginPath();
      ctx.moveTo(tr[0], tr[1]);
      for (let k = 2; k < tr.length; k += 2) ctx.lineTo(tr[k], tr[k + 1]);
      ctx.stroke();
    }
    for (const d of drops) drawDrop(d.x, d.y, d.r, d.sliding ? 1 + Math.min(d.vy / DPR, 0.4) : 1);
  };

  const frame = (now) => {
    const dt = Math.min(now - last, 50);
    last = now;
    if (!document.hidden) {
      step(dt);
      draw(now - t0);
    }
    requestAnimationFrame(frame);
  };

  resize();
  addEventListener('resize', () => { clearTimeout(resize.t); resize.t = setTimeout(resize, 150); });
  if (reduceMotion) {
    draw(0);
    new MutationObserver(() => draw(0)).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  } else {
    requestAnimationFrame(frame);
  }

  /* ================= Rain sound (generated, no audio file) ================= */
  const SOUND_KEY = 'meow.rainSound';
  const btn = document.getElementById('soundBtn');
  let audio = null;     // { ctx, master, dripTimer }
  let on = false;

  const noiseBuffer = (ac, seconds, type) => {
    const len = Math.floor(ac.sampleRate * seconds);
    const buf = ac.createBuffer(1, len, ac.sampleRate);
    const d = buf.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, last = 0;
    for (let i = 0; i < len; i++) {
      const w = Math.random() * 2 - 1;
      if (type === 'pink') {
        b0 = 0.99765 * b0 + w * 0.0990460;
        b1 = 0.96300 * b1 + w * 0.2965164;
        b2 = 0.57000 * b2 + w * 1.0526913;
        d[i] = (b0 + b1 + b2 + w * 0.1848) * 0.12;
      } else if (type === 'brown') {
        last = (last + 0.02 * w) / 1.02;
        d[i] = last * 3.2;
      } else {
        d[i] = w;
      }
    }
    return buf;
  };

  const startAudio = () => {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    const ac = new AC();
    const master = ac.createGain();
    master.gain.value = 0;
    master.connect(ac.destination);

    const loop = (buf, filters, gain) => {
      const src = ac.createBufferSource();
      src.buffer = buf;
      src.loop = true;
      let node = src;
      for (const [type, freq, q] of filters) {
        const f = ac.createBiquadFilter();
        f.type = type; f.frequency.value = freq; if (q) f.Q.value = q;
        node.connect(f); node = f;
      }
      const g = ac.createGain();
      g.gain.value = gain;
      node.connect(g); g.connect(master);
      src.start();
    };

    // steady rain "shhh"
    loop(noiseBuffer(ac, 4, 'pink'), [['highpass', 400], ['lowpass', 5200]], 0.9);
    // soft low body of the rain
    loop(noiseBuffer(ac, 4, 'brown'), [['lowpass', 500]], 0.5);
    // fine hiss
    loop(noiseBuffer(ac, 2, 'white'), [['highpass', 6000]], 0.035);

    // individual drops tapping the window
    const white = noiseBuffer(ac, 0.05, 'white');
    const drip = () => {
      const n = 1 + Math.floor(Math.random() * 3);
      for (let i = 0; i < n; i++) {
        const t = ac.currentTime + Math.random() * 0.12;
        const src = ac.createBufferSource();
        src.buffer = white;
        const f = ac.createBiquadFilter();
        f.type = 'bandpass'; f.frequency.value = rand(1800, 5200); f.Q.value = rand(4, 10);
        const g = ac.createGain();
        const peak = rand(0.08, 0.3);
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(peak, t + 0.002);
        g.gain.exponentialRampToValueAtTime(0.0001, t + rand(0.02, 0.06));
        src.connect(f); f.connect(g); g.connect(master);
        src.start(t); src.stop(t + 0.07);
      }
    };
    const dripTimer = setInterval(drip, 90);

    return { ctx: ac, master, dripTimer };
  };

  const setIcon = () => {
    if (!btn) return;
    btn.classList.toggle('on', on);
    btn.setAttribute('aria-pressed', String(on));
    btn.setAttribute('aria-label', on ? 'Turn rain sound off' : 'Turn rain sound on');
    btn.title = on ? 'Rain sound: on' : 'Rain sound: off';
  };

  const setSound = (want) => {
    on = want;
    try { localStorage.setItem(SOUND_KEY, want ? 'on' : 'off'); } catch { /* ignore */ }
    if (want) {
      if (!audio) audio = startAudio();
      if (audio) {
        audio.ctx.resume();
        const g = audio.master.gain;
        g.cancelScheduledValues(audio.ctx.currentTime);
        g.setTargetAtTime(0.55, audio.ctx.currentTime, 0.6); // gentle fade in
      }
    } else if (audio) {
      audio.master.gain.setTargetAtTime(0, audio.ctx.currentTime, 0.25);
      setTimeout(() => { if (!on && audio) audio.ctx.suspend(); }, 1200);
    }
    setIcon();
  };

  let pref = 'on';
  try { pref = localStorage.getItem(SOUND_KEY) || 'on'; } catch { /* ignore */ }
  setIcon();

  if (btn) btn.addEventListener('click', (e) => { e.stopPropagation(); setSound(!on); });

  // Browsers only allow sound after the visitor interacts with the page,
  // so start the rain on the first click / tap / key press (unless muted).
  if (pref === 'on') {
    const kick = (e) => {
      if (e.target && e.target.closest && e.target.closest('#soundBtn')) return;
      removeEventListener('pointerdown', kick, true);
      removeEventListener('keydown', kick, true);
      if (!on) setSound(true);
    };
    addEventListener('pointerdown', kick, true);
    addEventListener('keydown', kick, true);
  }

  // pause audio when the tab is hidden
  document.addEventListener('visibilitychange', () => {
    if (!audio) return;
    if (document.hidden) audio.ctx.suspend();
    else if (on) audio.ctx.resume();
  });
})();
