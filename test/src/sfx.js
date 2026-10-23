/* MEOW (test copy) — extra sounds made in the browser (no files):
   · doors: a wooden creak with hinge squeak, then a latch (open) or a solid thump (close)
   · the fireplace: a soft roar plus random crackles and pops, louder as you walk up to it
   · the boat engine: a low putter whose pitch and loudness follow the throttle
   It replaces window.MEOW_SOUND.door and adds MEOW_SFX.{fireAt, engine}. */
export function installSfx() {
  let ac = null, out = null, master = null; const bus = {};   // one volume per kind of sound (Settings → Sound)
  const S = () => window.MEOW_STATE || {};
  const vol = () => (S().sound === false ? 0 : Math.pow(S().volume === undefined ? 0.7 : S().volume, 1.5));
  const ok = () => {
    if (!ac && navigator.userActivation && !navigator.userActivation.hasBeenActive) return false;   // browsers only allow sound after a click / key
    if (!ac) { const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return false; ac = new AC(); master = ac.createGain(); master.connect(ac.destination); ['objects', 'fire', 'boat'].forEach((k) => { bus[k] = ac.createGain(); bus[k].connect(master); }); out = bus.objects; }
    if (ac.state === 'suspended') ac.resume();
    const M = window.MEOW_MIX || {}; master.gain.value = vol(); Object.keys(bus).forEach((k) => { bus[k].gain.value = M[k] ?? 1; });
    return ac.state === 'running';
  };
  const rand = (a, b) => a + Math.random() * (b - a);
  let noiseBuf = null;
  const noise = () => { if (!noiseBuf) { noiseBuf = ac.createBuffer(1, ac.sampleRate * 2, ac.sampleRate); const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; } return noiseBuf; };
  const chain = (src, filters, dest) => { let n = src; filters.forEach(([t, f, q, g]) => { const b = ac.createBiquadFilter(); b.type = t; b.frequency.value = f; if (q) b.Q.value = q; if (g) b.gain.value = g; n.connect(b); n = b; }); n.connect(dest); };
  const burst = (dur, filters, peak, delay = 0, dest = out) => {
    const s = ac.createBufferSource(); s.buffer = noise(); s.loop = true;
    const g = ac.createGain(), t = ac.currentTime + delay;
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(peak, t + Math.min(0.004, dur * 0.2)); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    chain(s, filters, g); g.connect(dest); s.start(t, rand(0, 1.5)); s.stop(t + dur + 0.05);
  };

  /* ---------- doors ---------- */
  const door = (open) => {
    if (!ok()) return;
    const t = ac.currentTime + 0.01, len = open ? 0.75 : 0.55;
    // the wood groaning on its hinges: a rough, wavering tone
    const o = ac.createOscillator(), lfo = ac.createOscillator(), lg = ac.createGain(), g = ac.createGain();
    o.type = 'sawtooth'; o.frequency.setValueAtTime(open ? 95 : 120, t); o.frequency.linearRampToValueAtTime(open ? 140 : 85, t + len);
    lfo.frequency.value = rand(18, 26); lg.gain.value = 14; lfo.connect(lg); lg.connect(o.frequency);
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.07, t + 0.08); g.gain.linearRampToValueAtTime(0.05, t + len * 0.8); g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    chain(o, [['bandpass', 650, 3], ['lowpass', 2200]], g); g.connect(out); o.start(t); lfo.start(t); o.stop(t + len + 0.05); lfo.stop(t + len + 0.05);
    // a short hinge squeak
    const sq = ac.createOscillator(), sg = ac.createGain();
    sq.type = 'triangle'; sq.frequency.setValueAtTime(rand(900, 1200), t + 0.05); sq.frequency.linearRampToValueAtTime(rand(1300, 1600), t + 0.3);
    sg.gain.setValueAtTime(0.0001, t + 0.05); sg.gain.linearRampToValueAtTime(0.018, t + 0.12); sg.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);
    sq.connect(sg); sg.connect(out); sq.start(t + 0.05); sq.stop(t + 0.4);
    if (open) {
      burst(0.03, [['bandpass', 2400, 3]], 0.25);                              // the latch lifts
      burst(0.5, [['lowpass', 700]], 0.05, 0.1);                               // air moving
    } else {
      burst(0.22, [['lowpass', 220], ['peaking', 95, 1.2, 8]], 0.9, len - 0.05); // the door hits its frame
      burst(0.04, [['bandpass', 1900, 4]], 0.22, len - 0.02);                  // the latch catches
    }
  };

  /* ---------- the fireplace ---------- */
  let fire = null;
  const startFire = () => {
    const g = ac.createGain(); g.gain.value = 0; g.connect(bus.fire);
    const roar = ac.createBufferSource(); roar.buffer = noise(); roar.loop = true;
    const rg = ac.createGain(); rg.gain.value = 0.18;
    chain(roar, [['lowpass', 420], ['highpass', 60]], rg); rg.connect(g); roar.start();
    fire = { g, timer: 0 };
    const tick = () => {
      if (fire.g.gain.value > 0.003) {
        const big = Math.random() < 0.12;
        burst(big ? 0.06 : 0.015, [['bandpass', big ? rand(700, 1500) : rand(1800, 4200), big ? 1.5 : 3]], big ? 0.35 : rand(0.08, 0.2), 0, g);
        if (Math.random() < 0.25) for (let i = 0; i < 3; i++) burst(0.01, [['bandpass', rand(2500, 5000), 4]], rand(0.05, 0.12), 0.015 + i * rand(0.01, 0.03), g);   // a hiss of sap
      }
      fire.timer = setTimeout(tick, rand(40, 260));
    };
    tick();
  };
  // level 0..1 (how close you are and whether the fire burns)
  const fireAt = (level) => {
    if (!Number.isFinite(level)) level = 0;   // never hand the audio a broken number
    if (level <= 0.001 && !fire) return;
    if (!ok()) return;   // (also refreshes the volumes each frame)
    if (!fire) startFire();
    fire.g.gain.setTargetAtTime(Math.max(0, Math.min(1, level)) * 0.9, ac.currentTime, 0.25);
  };

  /* ---------- the boat engine ---------- */
  let eng = null;
  const startEngine = () => {
    const g = ac.createGain(); g.gain.value = 0; g.connect(bus.boat);
    const o = ac.createOscillator(); o.type = 'sawtooth';
    const sub = ac.createOscillator(); sub.type = 'square';
    // the putter: the tone is chopped by a pulse at the firing rate
    const am = ac.createGain(); am.gain.value = 0.5;
    const pulse = ac.createOscillator(); pulse.type = 'square'; const pd = ac.createGain(); pd.gain.value = 0.5; pulse.connect(pd); pd.connect(am.gain);
    const mix = ac.createGain(); mix.gain.value = 0.35; const sg = ac.createGain(); sg.gain.value = 0.25;
    o.connect(mix); sub.connect(sg); sg.connect(mix); mix.connect(am);
    chain(am, [['lowpass', 520, 1.2], ['highpass', 35]], g);
    const wash = ac.createBufferSource(); wash.buffer = noise(); wash.loop = true; const wg = ac.createGain(); wg.gain.value = 0;
    chain(wash, [['bandpass', 600, 0.6]], wg); wg.connect(bus.boat);
    [o, sub, pulse, wash].forEach((n) => n.start());
    eng = { g, o, sub, pulse, wg, lp: 0 };
  };
  // on: in the boat; throttle 0..1 (how hard the engine works); speed 0..1 (how fast the boat goes)
  const engine = (on, throttle = 0, speed = 0) => {
    if (!on && !eng) return;
    if (!ok()) return;
    if (!eng) startEngine();
    const t = ac.currentTime, k = on ? 1 : 0, r = 0.25 + 0.75 * throttle;
    eng.o.frequency.setTargetAtTime(38 + 70 * r, t, 0.35);
    eng.sub.frequency.setTargetAtTime(19 + 35 * r, t, 0.35);
    eng.pulse.frequency.setTargetAtTime(7 + 22 * r, t, 0.35);
    eng.g.gain.setTargetAtTime(k * (0.22 + 0.35 * throttle), t, 0.3);
    eng.wg.gain.setTargetAtTime(k * speed * 0.12, t, 0.4);
  };

  // a wooden drawer sliding on its runners, then a soft knock at the end
  const drawer = (open) => {
    if (!ok()) return;
    burst(0.32, [['bandpass', open ? 900 : 750, 0.9], ['lowpass', 2200]], 0.12);
    for (let i = 0; i < 6; i++) burst(0.012, [['bandpass', rand(1500, 2600), 3]], 0.05, 0.03 + i * 0.045);
    burst(0.12, [['lowpass', 300]], open ? 0.25 : 0.45, 0.3);
  };
  const hook = () => { if (window.MEOW_SOUND) window.MEOW_SOUND.door = door; };
  hook(); setTimeout(hook, 500);
  window.MEOW_SFX = { door, fireAt, engine, drawer };
  return window.MEOW_SFX;
}
