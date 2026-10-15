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
    maxV: rand(0.018, 0.045), // px per ms: slow, lazy slide
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
    const g = 0.00004 * DPR; // gentle pull once a drop starts sliding (very slow)

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
        d.vy = Math.min(d.vy + g * dt, d.maxV * DPR);
        d.y += d.vy * dt;
        d.wobble += 0.0012 * dt;
        d.x += Math.sin(d.wobble) * 0.006 * dt * DPR; // slight zig-zag
        d.r = Math.max(2.5 * DPR, d.r - 0.00004 * dt * DPR);
        const tl = d.trail.length;
        if (!tl || Math.abs(d.y - d.trail[tl - 1]) > 2 * DPR) d.trail.push(d.x, d.y);
        if (d.trail.length > 90) d.trail.splice(0, 2);
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
    for (const d of drops) drawDrop(d.x, d.y, d.r, d.sliding ? 1 + Math.min((d.vy / DPR) * 7, 0.3) : 1);
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

  /* ================= Sound (all generated, no audio files) ================= */
  // One shared audio engine for the light rain and the click sounds.
  // Browsers only allow sound after the visitor clicks/taps/presses a key,
  // so nothing is created until then.
  const SOUND_KEY = 'meow.rainSound';
  const btn = document.getElementById('soundBtn');
  let ac = null;          // AudioContext
  let rainGain = null;    // volume of the rain (0 = off)
  let clickGain = null;   // volume of click sounds
  let rainBuilt = false;
  let patterTimer = null;
  let rainOn = false;

  const getAudio = () => {
    if (ac) return ac;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ac = new AC();
    const comp = ac.createDynamicsCompressor(); // keeps everything smooth, never harsh
    comp.threshold.value = -18; comp.ratio.value = 3;
    comp.connect(ac.destination);
    rainGain = ac.createGain(); rainGain.gain.value = 0; rainGain.connect(comp);
    clickGain = ac.createGain(); clickGain.gain.value = 0.9; clickGain.connect(comp);
    return ac;
  };

  const noiseBuffer = (seconds, type) => {
    const len = Math.floor(ac.sampleRate * seconds);
    const buf = ac.createBuffer(1, len, ac.sampleRate);
    const d = buf.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < len; i++) {
      const w = Math.random() * 2 - 1;
      if (type === 'pink') {
        b0 = 0.99765 * b0 + w * 0.0990460;
        b1 = 0.96300 * b1 + w * 0.2965164;
        b2 = 0.57000 * b2 + w * 1.0526913;
        d[i] = (b0 + b1 + b2 + w * 0.1848) * 0.12;
      } else d[i] = w;
    }
    return buf;
  };

  const panner = (pan) => {
    if (ac.createStereoPanner) { const p = ac.createStereoPanner(); p.pan.value = pan; return p; }
    return ac.createGain();
  };

  /* ---- light rain: soft drizzle + scattered drip-drop ticks ---- */
  const buildRain = () => {
    if (rainBuilt) return;
    rainBuilt = true;

    // very quiet drizzle in the background
    const bed = ac.createBufferSource();
    bed.buffer = noiseBuffer(4, 'pink'); bed.loop = true;
    const hp = ac.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 700;
    const lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2800;
    const bedGain = ac.createGain(); bedGain.gain.value = 0.22;
    bed.connect(hp); hp.connect(lp); lp.connect(bedGain); bedGain.connect(rainGain);
    bed.start();

    const tickBuf = noiseBuffer(0.06, 'white');

    // "tick": a small drop landing on glass
    const tick = (t) => {
      const src = ac.createBufferSource(); src.buffer = tickBuf;
      const f = ac.createBiquadFilter(); f.type = 'bandpass';
      f.frequency.value = rand(1400, 3800); f.Q.value = rand(8, 16);
      const g = ac.createGain();
      const peak = rand(0.10, 0.32);
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(peak, t + 0.002);
      g.gain.exponentialRampToValueAtTime(0.0001, t + rand(0.025, 0.06));
      const p = panner(rand(-0.8, 0.8));
      src.connect(f); f.connect(g); g.connect(p); p.connect(rainGain);
      src.start(t); src.stop(t + 0.08);
    };

    // "plip": a rounder water drip, now and then
    const plip = (t) => {
      const o = ac.createOscillator(); o.type = 'sine';
      const f0 = rand(650, 1250);
      o.frequency.setValueAtTime(f0, t);
      o.frequency.exponentialRampToValueAtTime(f0 * 1.6, t + 0.05); // drips rise in pitch
      const g = ac.createGain();
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(rand(0.05, 0.11), t + 0.004);
      g.gain.exponentialRampToValueAtTime(0.0001, t + rand(0.07, 0.12));
      const p = panner(rand(-0.6, 0.6));
      o.connect(g); g.connect(p); p.connect(rainGain);
      o.start(t); o.stop(t + 0.15);
    };

    // irregular pitter-patter rhythm
    const patter = () => {
      if (ac.state === 'running' && rainOn) {
        const t = ac.currentTime + 0.02;
        if (Math.random() < 0.12) plip(t); else tick(t);
        if (Math.random() < 0.25) tick(t + rand(0.03, 0.09)); // occasional double drop
      }
      patterTimer = setTimeout(patter, rand(70, 260));
    };
    patter();
  };

  /* ---- soft click: a short, rounded "tok", neither crisp nor dull ---- */
  const playClick = () => {
    if (!getAudio()) return;
    if (ac.state !== 'running') ac.resume();
    const t = ac.currentTime + 0.005;
    const k = rand(0.96, 1.04); // tiny pitch variation so repeats feel natural

    const o = ac.createOscillator(); o.type = 'triangle';
    o.frequency.setValueAtTime(520 * k, t);
    o.frequency.exponentialRampToValueAtTime(330 * k, t + 0.06);
    const lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1700; lp.Q.value = 0.7;
    const g = ac.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.26, t + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.09);
    o.connect(lp); lp.connect(g); g.connect(clickGain);
    o.start(t); o.stop(t + 0.12);

    // a whisper of texture so it feels like a real button, not a beep
    if (!playClick.buf) playClick.buf = noiseBuffer(0.02, 'white');
    const n = ac.createBufferSource(); n.buffer = playClick.buf;
    const nf = ac.createBiquadFilter(); nf.type = 'bandpass'; nf.frequency.value = 2200; nf.Q.value = 1.2;
    const ng = ac.createGain();
    ng.gain.setValueAtTime(0.05, t);
    ng.gain.exponentialRampToValueAtTime(0.0001, t + 0.015);
    n.connect(nf); nf.connect(ng); ng.connect(clickGain);
    n.start(t); n.stop(t + 0.02);
  };

  /* ---- rain on/off button ---- */
  const setIcon = () => {
    if (!btn) return;
    btn.classList.toggle('on', rainOn);
    btn.setAttribute('aria-pressed', String(rainOn));
    btn.setAttribute('aria-label', rainOn ? 'Turn rain sound off' : 'Turn rain sound on');
    btn.title = rainOn ? 'Rain sound: on' : 'Rain sound: off';
  };

  const setRain = (want, remember = true) => {
    rainOn = want;
    if (remember) { try { localStorage.setItem(SOUND_KEY, want ? 'on' : 'off'); } catch { /* ignore */ } }
    if (getAudio()) {
      if (want) { buildRain(); ac.resume(); }
      rainGain.gain.cancelScheduledValues(ac.currentTime);
      rainGain.gain.setTargetAtTime(want ? 0.7 : 0, ac.currentTime, want ? 0.8 : 0.25); // gentle fades
    }
    setIcon();
  };

  let pref = 'on';
  try { pref = localStorage.getItem(SOUND_KEY) || 'on'; } catch { /* ignore */ }
  setIcon();

  if (btn) btn.addEventListener('click', () => setRain(!rainOn));

  // Every click/tap gets the soft click sound. The first one also starts the rain
  // (unless the visitor turned it off before).
  let started = false;
  addEventListener('pointerdown', (e) => {
    if (e.button !== 0) return;
    playClick();
    if (!started) {
      started = true;
      const onBtn = e.target && e.target.closest && e.target.closest('#soundBtn');
      if (pref === 'on' && !onBtn) setRain(true, false);
    }
  }, true);
  addEventListener('keydown', (e) => {
    if (!started && (e.key === 'Enter' || e.key === ' ')) {
      started = true;
      if (pref === 'on') setRain(true, false);
    }
  }, true);

  // pause all sound when the tab is hidden
  document.addEventListener('visibilitychange', () => {
    if (!ac) return;
    if (document.hidden) ac.suspend(); else ac.resume();
  });
})();
