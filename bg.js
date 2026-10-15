/* MEOW — animated backgrounds, drawn on a canvas (no image files).
   Scenes: rain, frost, aurora, mist, night, snow, ocean.
   Settings call window.MEOW_BG.setScene(name) and window.MEOW_BG.setMotion('full'|'reduced'). */
(() => {
  'use strict';

  const canvas = document.getElementById('bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const isDark = () => document.documentElement.getAttribute('data-theme') === 'dark';
  const rand = (a, b) => a + Math.random() * (b - a);

  let W = 0, H = 0, DPR = 1;
  let grain = null;
  let sceneName = 'rain';
  let motion = 'full';
  let running = false;
  let started = false;
  let last = performance.now();
  const t0 = last;
  let state = {};

  const area = () => (W * H) / (1280 * 800);

  /* ---------- shared pieces ---------- */
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
  const frost = () => { ctx.fillStyle = grain; ctx.fillRect(0, 0, W, H); };

  const linear = (stops, x1 = 0, y1 = 0, x2 = 0, y2 = H) => {
    const g = ctx.createLinearGradient(x1, y1, x2, y2);
    stops.forEach(([p, c]) => g.addColorStop(p, c));
    return g;
  };

  // soft moving blobs of colour (used by several scenes)
  const blobs = (t, list, speed = 0.00011, size = 0.55) => {
    const m = Math.max(W, H);
    list.forEach(([c, p], i) => {
      const s = t * (speed + i * 0.00003);
      const x = W * (0.5 + 0.38 * Math.sin(s + p));
      const y = H * (0.5 + 0.34 * Math.cos(s * 1.3 + p));
      const g = ctx.createRadialGradient(x, y, 0, x, y, m * size);
      g.addColorStop(0, c);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
    });
  };

  // black & white drifting gradient (rain + frost scenes)
  const monoGradient = (t) => {
    const dark = isDark();
    ctx.fillStyle = linear(dark ? [[0, '#050505'], [1, '#1d1d1d']] : [[0, '#f7f7f7'], [1, '#d6d6d6']], 0, 0, W * 0.4, H);
    ctx.fillRect(0, 0, W, H);
    blobs(t, dark
      ? [['rgba(255,255,255,0.20)', 0], ['rgba(255,255,255,0.13)', 2.1], ['rgba(0,0,0,0.65)', 4.2]]
      : [['rgba(0,0,0,0.20)', 0], ['rgba(0,0,0,0.12)', 2.1], ['rgba(255,255,255,0.85)', 4.2]]);
  };

  // smooth wavy line made of sine waves (mountains, hills, waves)
  const ridge = (seed, amp, freqs) => (x) => {
    let y = 0;
    freqs.forEach((f, i) => { y += Math.sin(x * f + seed * (i + 1) * 1.7) / (i + 1); });
    return y * amp;
  };

  /* ---------- scene: rainy window ---------- */
  const rainScene = (() => {
    const newSmall = () => ({ x: rand(0, W), y: rand(0, H), r: rand(0.8, 2.8) * DPR });
    const newDrop = (top) => ({
      x: rand(0, W), y: top ? rand(-40, 0) * DPR : rand(0, H), r: rand(3, 7.5) * DPR,
      trail: [], maxV: rand(0.018, 0.045), vy: 0, sliding: false, wobble: rand(0, 6.28), lastTrail: 0
    });

    const drawDrop = (x, y, r, stretch = 1) => {
      const dark = isDark();
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(1, stretch);
      const body = ctx.createRadialGradient(-r * 0.3, -r * 0.35, r * 0.1, 0, 0, r);
      if (dark) {
        body.addColorStop(0, 'rgba(255,255,255,0.32)'); body.addColorStop(0.6, 'rgba(255,255,255,0.08)'); body.addColorStop(1, 'rgba(0,0,0,0.45)');
      } else {
        body.addColorStop(0, 'rgba(255,255,255,0.95)'); body.addColorStop(0.6, 'rgba(255,255,255,0.35)'); body.addColorStop(1, 'rgba(0,0,0,0.28)');
      }
      ctx.fillStyle = body;
      ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
      if (r > 1.6 * DPR) {
        ctx.fillStyle = dark ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.95)';
        ctx.beginPath(); ctx.arc(-r * 0.32, -r * 0.38, r * 0.22, 0, Math.PI * 2); ctx.fill();
      }
      ctx.restore();
    };

    return {
      init() {
        state.smalls = Array.from({ length: Math.round(520 * area()) }, newSmall);
        state.drops = Array.from({ length: Math.round(70 * area()) }, () => newDrop(false));
      },
      step(dt) {
        const { smalls } = state;
        const g = 0.00004 * DPR; // very slow slide
        const want = Math.round(520 * area());
        for (let i = 0; i < 3 && smalls.length < want; i++) smalls.push(newSmall());
        if (Math.random() < 0.35 * area()) state.drops.push(newDrop(Math.random() < 0.3));
        const drops = state.drops;
        for (let i = drops.length - 1; i >= 0; i--) {
          const d = drops[i];
          if (d.dead) continue;
          if (!d.sliding) {
            d.r += 0.0009 * dt * DPR;
            if (d.r > 6.5 * DPR || Math.random() < 0.0005 * dt) d.sliding = true;
          } else {
            d.vy = Math.min(d.vy + g * dt, d.maxV * DPR);
            d.y += d.vy * dt;
            d.wobble += 0.0012 * dt;
            d.x += Math.sin(d.wobble) * 0.006 * dt * DPR;
            d.r = Math.max(2.5 * DPR, d.r - 0.00004 * dt * DPR);
            const tl = d.trail.length;
            if (!tl || Math.abs(d.y - d.trail[tl - 1]) > 2 * DPR) d.trail.push(d.x, d.y);
            if (d.trail.length > 90) d.trail.splice(0, 2);
            if (d.y - d.lastTrail > rand(10, 22) * DPR) {
              d.lastTrail = d.y;
              smalls.push({ x: d.x + rand(-1.5, 1.5) * DPR, y: d.y - d.r * 1.4, r: rand(0.8, 1.8) * DPR });
            }
            for (let j = smalls.length - 1; j >= 0; j--) {
              const s = smalls[j];
              const dx = s.x - d.x, dy = s.y - d.y;
              if (dy > -d.r && dy < d.r * 1.2 && dx * dx < d.r * d.r * 1.4) {
                smalls.splice(j, 1);
                d.r = Math.min(d.r + s.r * 0.08, 9 * DPR);
              }
            }
          }
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
        state.drops = drops.filter((d) => !d.dead);
        if (state.drops.length > 180 * area()) state.drops.splice(0, state.drops.length - Math.round(140 * area()));
        if (smalls.length > 900 * area()) smalls.splice(0, smalls.length - Math.round(900 * area()));
      },
      draw(t) {
        monoGradient(t);
        frost();
        for (const s of state.smalls) drawDrop(s.x, s.y, s.r);
        ctx.lineCap = 'round'; ctx.lineJoin = 'round';
        ctx.strokeStyle = isDark() ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.28)';
        for (const d of state.drops) {
          const tr = d.trail;
          if (!tr || tr.length < 6) continue;
          ctx.lineWidth = d.r * 0.75;
          ctx.beginPath(); ctx.moveTo(tr[0], tr[1]);
          for (let k = 2; k < tr.length; k += 2) ctx.lineTo(tr[k], tr[k + 1]);
          ctx.stroke();
        }
        for (const d of state.drops) drawDrop(d.x, d.y, d.r, d.sliding ? 1 + Math.min((d.vy / DPR) * 7, 0.3) : 1);
      }
    };
  })();

  /* ---------- scene: frosted black & white gradient ---------- */
  const frostScene = { init() {}, step() {}, draw(t) { monoGradient(t); frost(); } };

  /* ---------- scene: aurora frosted gradient ---------- */
  const auroraScene = {
    init() {}, step() {},
    draw(t) {
      const dark = isDark();
      ctx.fillStyle = linear(dark ? [[0, '#05070f'], [1, '#121a2a']] : [[0, '#eef3f7'], [1, '#dfe6f0']]);
      ctx.fillRect(0, 0, W, H);
      blobs(t, dark
        ? [['rgba(64,224,190,0.35)', 0], ['rgba(140,90,255,0.30)', 2.1], ['rgba(255,110,190,0.22)', 4.2], ['rgba(60,140,255,0.25)', 5.4]]
        : [['rgba(120,230,205,0.45)', 0], ['rgba(185,160,255,0.40)', 2.1], ['rgba(255,170,210,0.35)', 4.2], ['rgba(140,190,255,0.35)', 5.4]],
      0.00009, 0.5);
      frost();
    }
  };

  /* ---------- scene: misty mountains ---------- */
  const mistScene = {
    init() {
      state.layers = [0, 1, 2, 3].map((i) => ({
        f: ridge(rand(0, 100), (40 + i * 18) * DPR, [0.0016 / DPR, 0.004 / DPR, 0.011 / DPR]),
        base: H * (0.42 + i * 0.13)
      }));
      state.fogs = Array.from({ length: 5 }, (_, i) => ({ y: H * (0.45 + i * 0.11), x: rand(0, W), v: rand(0.006, 0.015) * DPR }));
    },
    step(dt) { state.fogs.forEach((f) => { f.x = (f.x + f.v * dt) % (W * 1.5); }); },
    draw() {
      const dark = isDark();
      ctx.fillStyle = linear(dark ? [[0, '#0d1117'], [1, '#2a3038']] : [[0, '#e9eef2'], [1, '#c9d2da']]);
      ctx.fillRect(0, 0, W, H);
      const cols = dark ? ['#1f262e', '#191f26', '#13181e', '#0c1014'] : ['#b9c3cc', '#9eabb7', '#7f8e9c', '#5f6e7c'];
      state.layers.forEach((L, i) => {
        ctx.fillStyle = cols[i];
        ctx.beginPath(); ctx.moveTo(0, H);
        for (let x = 0; x <= W; x += 8 * DPR) ctx.lineTo(x, L.base - L.f(x) - 60 * DPR);
        ctx.lineTo(W, H); ctx.closePath(); ctx.fill();
        // fog between layers
        const f = state.fogs[i];
        if (f) {
          const fogC = dark ? 'rgba(160,170,180,0.10)' : 'rgba(255,255,255,0.45)';
          const g = ctx.createRadialGradient(f.x - W * 0.25, f.y, 0, f.x - W * 0.25, f.y, W * 0.6);
          g.addColorStop(0, fogC); g.addColorStop(1, 'rgba(255,255,255,0)');
          ctx.fillStyle = g; ctx.fillRect(0, f.y - H * 0.2, W, H * 0.4);
        }
      });
      frost();
    }
  };

  /* ---------- scene: starry night ---------- */
  const nightScene = {
    init() {
      state.stars = Array.from({ length: Math.round(260 * area()) }, () => ({
        x: rand(0, W), y: rand(0, H * 0.75), r: rand(0.4, 1.6) * DPR, p: rand(0, 6.28), s: rand(0.0008, 0.0025)
      }));
      state.hill1 = ridge(rand(0, 100), 30 * DPR, [0.002 / DPR, 0.006 / DPR]);
      state.hill2 = ridge(rand(0, 100), 22 * DPR, [0.003 / DPR, 0.009 / DPR]);
      state.shoot = null;
    },
    step(dt) {
      if (!state.shoot && Math.random() < 0.0006 * dt) {
        state.shoot = { x: rand(W * 0.1, W * 0.9), y: rand(0, H * 0.3), life: 0 };
      }
      if (state.shoot) { state.shoot.life += dt; if (state.shoot.life > 900) state.shoot = null; }
    },
    draw(t) {
      const dark = isDark();
      ctx.fillStyle = linear(dark ? [[0, '#02030a'], [0.7, '#0c1430'], [1, '#1b2347']] : [[0, '#1a2346'], [0.7, '#3b4a7a'], [1, '#6d77a3']]);
      ctx.fillRect(0, 0, W, H);
      // moon
      const mx = W * 0.8, my = H * 0.18, mr = 34 * DPR;
      const glow = ctx.createRadialGradient(mx, my, mr * 0.5, mx, my, mr * 5);
      glow.addColorStop(0, 'rgba(255,250,230,0.25)'); glow.addColorStop(1, 'rgba(255,250,230,0)');
      ctx.fillStyle = glow; ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = '#fbf7e8'; ctx.beginPath(); ctx.arc(mx, my, mr, 0, Math.PI * 2); ctx.fill();
      // twinkling stars
      for (const s of state.stars) {
        ctx.globalAlpha = 0.45 + 0.55 * Math.abs(Math.sin(s.p + t * s.s));
        ctx.fillStyle = '#fff';
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = 1;
      // shooting star
      const sh = state.shoot;
      if (sh) {
        const k = sh.life / 900, len = 140 * DPR;
        const x = sh.x + k * 260 * DPR, y = sh.y + k * 120 * DPR;
        const g = ctx.createLinearGradient(x, y, x - len, y - len * 0.46);
        g.addColorStop(0, `rgba(255,255,255,${0.9 * (1 - k)})`); g.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.strokeStyle = g; ctx.lineWidth = 1.6 * DPR;
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x - len, y - len * 0.46); ctx.stroke();
      }
      // hills
      [[state.hill1, H * 0.82, '#0a0f22'], [state.hill2, H * 0.9, '#05070f']].forEach(([f, base, c]) => {
        ctx.fillStyle = c; ctx.beginPath(); ctx.moveTo(0, H);
        for (let x = 0; x <= W; x += 8 * DPR) ctx.lineTo(x, base - f(x));
        ctx.lineTo(W, H); ctx.closePath(); ctx.fill();
      });
      frost();
    }
  };

  /* ---------- scene: snowy forest ---------- */
  const snowScene = {
    init() {
      state.flakes = Array.from({ length: Math.round(220 * area()) }, () => ({
        x: rand(0, W), y: rand(0, H), r: rand(0.8, 3) * DPR, v: rand(0.012, 0.04) * DPR, p: rand(0, 6.28)
      }));
      const trees = (n, base, hmin, hmax) => Array.from({ length: n }, () => ({ x: rand(-40, W + 40), b: base + rand(-10, 14) * DPR, h: rand(hmin, hmax) * DPR }));
      state.back = trees(Math.round(26 * area() + 10), H * 0.78, 80, 160);
      state.front = trees(Math.round(14 * area() + 6), H * 0.95, 140, 260);
    },
    step(dt) {
      for (const f of state.flakes) {
        f.y += f.v * dt * (f.r / DPR / 2);
        f.p += 0.001 * dt;
        f.x += Math.sin(f.p) * 0.01 * dt * DPR;
        if (f.y > H + 5) { f.y = -5; f.x = rand(0, W); }
      }
    },
    draw() {
      const dark = isDark();
      ctx.fillStyle = linear(dark ? [[0, '#0b0f16'], [1, '#2a3340']] : [[0, '#dfe5ec'], [1, '#f4f6f8']]);
      ctx.fillRect(0, 0, W, H);
      const pine = (x, b, h, c) => {
        ctx.fillStyle = c; ctx.beginPath();
        const w = h * 0.42;
        for (let k = 0; k < 3; k++) {
          const top = b - h + k * h * 0.22, bot = b - h * 0.32 + k * h * 0.22;
          ctx.moveTo(x, top); ctx.lineTo(x - w * (0.55 + k * 0.22), bot); ctx.lineTo(x + w * (0.55 + k * 0.22), bot); ctx.closePath();
        }
        ctx.fill();
        ctx.fillRect(x - h * 0.03, b - h * 0.12, h * 0.06, h * 0.12);
      };
      state.back.forEach((tr) => pine(tr.x, tr.b, tr.h, dark ? '#1c2430' : '#a9b6c3'));
      ctx.fillStyle = dark ? '#1a212b' : '#eef2f6';
      ctx.fillRect(0, H * 0.8, W, H * 0.2);
      state.front.forEach((tr) => pine(tr.x, tr.b, tr.h, dark ? '#0d1218' : '#6f7f8f'));
      ctx.fillStyle = dark ? 'rgba(235,240,245,0.85)' : 'rgba(255,255,255,0.95)';
      for (const f of state.flakes) { ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2); ctx.fill(); }
      frost();
    }
  };

  /* ---------- scene: sunset sea ---------- */
  const oceanScene = {
    init() {
      state.waves = Array.from({ length: 26 }, (_, i) => ({ k: i / 26, p: rand(0, 6.28), s: rand(0.0005, 0.0012) }));
    },
    step() {},
    draw(t) {
      const dark = isDark();
      const horizon = H * 0.58;
      ctx.fillStyle = linear(dark
        ? [[0, '#0f0c24'], [0.6, '#3b1f45'], [1, '#7a3a4a']]
        : [[0, '#ffd3a5'], [0.5, '#fd9f88'], [1, '#c779a4']], 0, 0, 0, horizon);
      ctx.fillRect(0, 0, W, horizon);
      // sun
      const sx = W * 0.5, sy = horizon - 10 * DPR, sr = 70 * DPR;
      const glow = ctx.createRadialGradient(sx, sy, sr * 0.4, sx, sy, sr * 4);
      glow.addColorStop(0, dark ? 'rgba(255,150,120,0.35)' : 'rgba(255,240,200,0.6)'); glow.addColorStop(1, 'rgba(255,200,150,0)');
      ctx.fillStyle = glow; ctx.fillRect(0, 0, W, horizon);
      ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W, horizon); ctx.clip();
      ctx.fillStyle = dark ? '#ff9f80' : '#fff1d6'; ctx.beginPath(); ctx.arc(sx, sy, sr, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
      // sea
      ctx.fillStyle = linear(dark ? [[0, '#2a1838'], [1, '#07060f']] : [[0, '#c46f8a'], [1, '#3d3f73']], 0, horizon, 0, H);
      ctx.fillRect(0, horizon, W, H - horizon);
      // shimmering wave lines and the sun's reflection
      for (const w of state.waves) {
        const y = horizon + Math.pow(w.k, 1.6) * (H - horizon);
        const span = (0.08 + w.k * 0.5) * W;
        const off = Math.sin(t * w.s + w.p) * 30 * DPR * (0.3 + w.k);
        ctx.strokeStyle = dark ? `rgba(255,170,140,${0.35 - w.k * 0.25})` : `rgba(255,240,220,${0.6 - w.k * 0.4})`;
        ctx.lineWidth = (1 + w.k * 2.5) * DPR;
        ctx.beginPath(); ctx.moveTo(sx - span / 2 + off, y); ctx.lineTo(sx + span / 2 + off, y); ctx.stroke();
        ctx.strokeStyle = `rgba(255,255,255,${0.10 - w.k * 0.06})`;
        ctx.beginPath(); ctx.moveTo(0, y + 4 * DPR);
        for (let x = 0; x <= W; x += 16 * DPR) ctx.lineTo(x, y + 4 * DPR + Math.sin(x * 0.01 / DPR + t * w.s * 2 + w.p) * 2 * DPR * (1 + w.k * 3));
        ctx.stroke();
      }
      frost();
    }
  };

  const SCENES = { rain: rainScene, frost: frostScene, aurora: auroraScene, mist: mistScene, night: nightScene, snow: snowScene, ocean: oceanScene };

  /* ---------- engine ---------- */
  const scene = () => SCENES[sceneName] || rainScene;

  const resize = () => {
    DPR = Math.min(window.devicePixelRatio || 1, 1.5);
    W = canvas.width = Math.floor(innerWidth * DPR);
    H = canvas.height = Math.floor(innerHeight * DPR);
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
    grain = makeGrain();
    state = {};
    scene().init();
    if (!running) scene().draw(performance.now() - t0);
  };

  const frame = (now) => {
    if (!running) return;
    const dt = Math.min(now - last, 50);
    last = now;
    if (!document.hidden) { scene().step(dt); scene().draw(now - t0); }
    requestAnimationFrame(frame);
  };

  const startLoop = () => {
    if (!started) return;
    if (motion === 'full') {
      if (!running) { running = true; last = performance.now(); requestAnimationFrame(frame); }
    } else {
      running = false;
      scene().draw(performance.now() - t0); // one still frame
    }
  };

  window.MEOW_BG = {
    scenes: Object.keys(SCENES),
    setScene(name) {
      if (!SCENES[name]) name = 'rain';
      sceneName = name;
      document.documentElement.setAttribute('data-scene', name);
      if (!W) return;
      state = {};
      scene().init();
      scene().draw(performance.now() - t0);
    },
    setMotion(m) { motion = m === 'reduced' ? 'reduced' : 'full'; startLoop(); },
    start() { started = true; if (!W) resize(); startLoop(); }
  };

  addEventListener('resize', () => { clearTimeout(resize.t); resize.t = setTimeout(resize, 150); });
  // redraw the still frame when the theme changes in reduced-motion mode
  new MutationObserver(() => { if (!running && W) scene().draw(performance.now() - t0); })
    .observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
})();
