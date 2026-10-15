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
  let volume = 0.7;       // "Volume" slider in Settings
  let interacted = false;

  const getAudio = () => {
    if (ac) return ac;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ac = new AC();
    const comp = ac.createDynamicsCompressor(); // keeps everything smooth, never harsh
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

  window.MEOW_SOUND = {
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
