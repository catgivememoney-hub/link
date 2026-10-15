/* MEOW — light rain sound, generated live with Web Audio (no audio files).
   Settings call window.MEOW_SOUND.setEnabled(true|false) and setVolume(0..1).
   Browsers only allow sound after the visitor clicks/taps/presses a key,
   so the rain starts on the first interaction after the page is unlocked. */
(() => {
  'use strict';

  const rand = (a, b) => a + Math.random() * (b - a);
  let ac = null;          // AudioContext
  let rainGain = null;    // rain volume (0 = silent)
  let rainBuilt = false;
  let patterTimer = null;
  let rainOn = false;
  let enabled = true;     // "Sound effects" switch in Settings
  let out = null;         // final mixer (for the tree chimes)
  let volume = 0.7;       // "Volume" slider in Settings
  let interacted = false;

  const getAudio = () => {
    if (ac) return ac;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ac = new AC();
    const comp = ac.createDynamicsCompressor(); // keeps everything smooth, never harsh
    out = comp;
    comp.threshold.value = -18; comp.ratio.value = 3;
    comp.connect(ac.destination);
    rainGain = ac.createGain(); rainGain.gain.value = 0; rainGain.connect(comp);
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

  // fade the rain to the wanted level
  const update = () => {
    rainOn = enabled && interacted;
    if (!rainOn && !ac) return;
    if (!getAudio()) return;
    if (rainOn) { buildRain(); ac.resume(); }
    rainGain.gain.cancelScheduledValues(ac.currentTime);
    rainGain.gain.setTargetAtTime(rainOn ? volume : 0, ac.currentTime, rainOn ? 0.6 : 0.25);
  };

  // a soft bell for the trees: each tree has its own note in a calm pentatonic scale
  const SCALE = [392.0, 440.0, 523.25, 587.33, 659.25, 783.99, 880.0, 1046.5];
  const chime = (n) => {
    if (!enabled || !getAudio()) return;
    ac.resume();
    const t = ac.currentTime + 0.01;
    const f = SCALE[Math.abs(n) % SCALE.length] * (n % 3 === 0 ? 0.5 : 1);
    const g = ac.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.16 * Math.max(0.3, volume), t + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 2.2);
    g.connect(out);
    [[1, 'sine', 1], [2.01, 'sine', 0.25], [3.02, 'triangle', 0.08]].forEach(([mul, type, amp]) => {
      const o = ac.createOscillator(); o.type = type; o.frequency.value = f * mul;
      const og = ac.createGain(); og.gain.value = amp;
      o.connect(og); og.connect(g);
      o.start(t); o.stop(t + 2.3);
    });
  };

  /* ---- walking and light sounds ---- */
  const nb = {};                                     // cached noise buffers
  const noise = (sec) => (nb[sec] = nb[sec] || noiseBuffer(sec, 'white'));
  const fx = (dur, chain, gainCurve, when = 0) => {
    // plays a filtered noise burst: chain = list of [type, freq, Q]
    const t = ac.currentTime + 0.005 + when;
    const src = ac.createBufferSource(); src.buffer = noise(Math.max(0.05, Math.ceil(dur * 20) / 20));
    let node = src;
    chain.forEach(([type, f, q]) => { const b = ac.createBiquadFilter(); b.type = type; b.frequency.value = f; if (q) b.Q.value = q; node.connect(b); node = b; });
    const g = ac.createGain(); node.connect(g); g.connect(out);
    gainCurve(g.gain, t);
    src.start(t); src.stop(t + dur + 0.05);
    return { src, t };
  };
  const ready = () => enabled && getAudio() && (ac.resume(), true);
  const vol = () => Math.max(0.25, volume);

  // a footstep: soft thud on grass/soil, crunch on snow, splash at the water's edge
  const step = (surface, pace = 1) => {
    if (!ready()) return;
    const v = vol() * (0.7 + 0.35 * pace) * rand(0.85, 1.1);
    if (surface === 'snow') {
      for (let i = 0; i < 5; i++) {
        fx(0.03, [['bandpass', rand(1800, 3600), 2.5]], (g, t) => { g.setValueAtTime(0, t); g.linearRampToValueAtTime(0.07 * v, t + 0.003); g.exponentialRampToValueAtTime(0.0001, t + 0.03); }, i * rand(0.012, 0.022));
      }
      fx(0.12, [['lowpass', 500]], (g, t) => { g.setValueAtTime(0, t); g.linearRampToValueAtTime(0.12 * v, t + 0.01); g.exponentialRampToValueAtTime(0.0001, t + 0.12); });
    } else if (surface === 'water') {
      fx(0.22, [['bandpass', rand(500, 900), 0.9]], (g, t) => { g.setValueAtTime(0, t); g.linearRampToValueAtTime(0.16 * v, t + 0.02); g.exponentialRampToValueAtTime(0.0001, t + 0.22); });
      const o = ac.createOscillator(), og = ac.createGain(), t = ac.currentTime + 0.03, f0 = rand(500, 800);
      o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f0 * 1.8, t + 0.06);
      og.gain.setValueAtTime(0, t); og.gain.linearRampToValueAtTime(0.035 * v, t + 0.005); og.gain.exponentialRampToValueAtTime(0.0001, t + 0.09);
      o.connect(og); og.connect(out); o.start(t); o.stop(t + 0.1);
    } else {
      // heel thud + a little rustle of grass
      fx(0.12, [['lowpass', rand(260, 380)], ['peaking', 120, 1]], (g, t) => { g.setValueAtTime(0, t); g.linearRampToValueAtTime(0.32 * v, t + 0.006); g.exponentialRampToValueAtTime(0.0001, t + 0.11); });
      fx(0.16, [['bandpass', rand(2200, 3800), 0.9]], (g, t) => { g.setValueAtTime(0, t); g.linearRampToValueAtTime(0.03 * v, t + 0.03); g.exponentialRampToValueAtTime(0.0001, t + 0.16); }, 0.01);
    }
  };

  // flashlight switch: a small mechanical "tick-tock"
  const click = (on) => {
    if (!ready()) return;
    const v = vol();
    const hi = on ? 4200 : 3600;
    fx(0.012, [['bandpass', hi, 3]], (g, t) => { g.setValueAtTime(0.0001, t); g.linearRampToValueAtTime(0.32 * v, t + 0.001); g.exponentialRampToValueAtTime(0.0001, t + 0.012); });
    fx(0.03, [['bandpass', hi * 0.42, 2.2]], (g, t) => { g.setValueAtTime(0.0001, t); g.linearRampToValueAtTime(0.22 * v, t + 0.002); g.exponentialRampToValueAtTime(0.0001, t + 0.03); }, 0.028);
  };

  // lantern catching: a soft whoosh that opens up, with a few sparks
  const ignite = () => {
    if (!ready()) return;
    const v = vol();
    const w = fx(0.6, [['lowpass', 300, 0.7]], (g, t) => { g.setValueAtTime(0.0001, t); g.linearRampToValueAtTime(0.22 * v, t + 0.18); g.exponentialRampToValueAtTime(0.0001, t + 0.6); });
    // the filter opens as the flame grows
    const lp = w.src; void lp;
    for (let i = 0; i < 5; i++) {
      fx(0.02, [['bandpass', rand(2500, 5500), 3]], (g, t) => { g.setValueAtTime(0.0001, t); g.linearRampToValueAtTime(rand(0.05, 0.1) * v, t + 0.002); g.exponentialRampToValueAtTime(0.0001, t + 0.02); }, 0.1 + i * rand(0.04, 0.09));
    }
  };

  // lantern out: a soft puff
  const puff = () => {
    if (!ready()) return;
    const v = vol();
    fx(0.25, [['lowpass', 700, 0.6]], (g, t) => { g.setValueAtTime(0.0001, t); g.linearRampToValueAtTime(0.18 * v, t + 0.02); g.exponentialRampToValueAtTime(0.0001, t + 0.25); });
  };

  // while the lantern burns: quiet crackles now and then
  let fireTimer = 0;
  const fire = (on) => {
    clearTimeout(fireTimer);
    if (!on) return;
    const tick = () => {
      if (enabled && ac && ac.state === 'running') {
        const v = vol();
        fx(0.015, [['bandpass', rand(2000, 6000), 2.5]], (g, t) => { g.setValueAtTime(0.0001, t); g.linearRampToValueAtTime(rand(0.015, 0.05) * v, t + 0.002); g.exponentialRampToValueAtTime(0.0001, t + 0.015); });
        if (Math.random() < 0.25) fx(0.15, [['lowpass', 220]], (g, t) => { g.setValueAtTime(0.0001, t); g.linearRampToValueAtTime(0.04 * v, t + 0.04); g.exponentialRampToValueAtTime(0.0001, t + 0.15); });
      }
      fireTimer = setTimeout(tick, rand(90, 420));
    };
    fireTimer = setTimeout(tick, 600);
  };

  window.MEOW_SOUND = {
    chime, step, click, ignite, puff, fire,
    setEnabled(on) { enabled = !!on; update(); },
    setVolume(v) { volume = Math.max(0, Math.min(1, Number(v) || 0)); update(); }
  };

  // start after the first click / tap / key press, once the site is unlocked
  const kick = () => {
    if (interacted || document.documentElement.classList.contains('locked')) return;
    interacted = true;
    update();
  };
  addEventListener('pointerdown', kick, true);
  addEventListener('keydown', kick, true);

  // pause all sound when the tab is hidden
  document.addEventListener('visibilitychange', () => {
    if (!ac) return;
    if (document.hidden) ac.suspend(); else if (rainOn) ac.resume();
  });
})();
