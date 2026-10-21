/* MEOW (test copy) — real footsteps.
   Eight footsteps cut from a recording of steps in wet coarse sand (test/assets/audio/steps.mp3,
   freesound "footsteps in wet coarse sand", see README), played through a different treatment for
   each surface:
     sand  — the recording itself          grass — softer, duller, a little lower
     snow  — slower and deeper + crunch    wood  — tight and bright + a hollow board knock
     water — the step + a splash            stone — short and sharp       ice — crisp and glassy
   It replaces window.MEOW_SOUND.step (the rest of the sounds stay as they were). */
const MARKS = [[0.0, 0.43], [0.49, 0.43], [0.98, 0.43], [1.47, 0.43], [1.96, 0.43], [2.45, 0.43], [2.94, 0.43], [3.43, 0.43]];
// per surface: playback rate range, filters [type, freq, Q], gain, how much of the clip, extras
const LOOK = {
  sand:  { rate: [0.95, 1.06], f: [['highpass', 70]], gain: 0.9, len: 1 },
  grass: { rate: [0.9, 1.0], f: [['lowpass', 2600], ['highpass', 90]], gain: 0.75, len: 0.85 },
  snow:  { rate: [0.78, 0.88], f: [['lowpass', 5200], ['peaking', 2400, 1.2, 7]], gain: 0.85, len: 1, crunch: true },
  wood:  { rate: [1.18, 1.3], f: [['highpass', 260], ['peaking', 1500, 1.5, 4]], gain: 0.45, len: 0.45, knock: true },
  water: { rate: [1.0, 1.12], f: [['lowpass', 3800]], gain: 0.7, len: 1, splash: true },
  stone: { rate: [1.25, 1.4], f: [['highpass', 600], ['peaking', 3200, 1, 5]], gain: 0.55, len: 0.35 },
  ice:   { rate: [1.4, 1.6], f: [['highpass', 1100], ['peaking', 5200, 2, 8]], gain: 0.45, len: 0.3, click: true }
};

export function installFootsteps() {
  let ac = null, buf = null, loading = false, last = -1;
  const S = () => window.MEOW_STATE || {};
  const enabled = () => S().sound !== false;
  const vol = () => Math.pow(S().volume === undefined ? 0.7 : S().volume, 1.5);
  const ensure = () => {
    if (!ac) { const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return false; ac = new AC(); }
    if (ac.state === 'suspended') ac.resume();
    if (!buf && !loading) {
      loading = true;
      fetch('test/assets/audio/steps.mp3').then((r) => r.arrayBuffer()).then((a) => ac.decodeAudioData(a)).then((b) => { buf = b; }).catch(() => { loading = false; });
    }
    return !!buf;
  };
  const rand = (a, b) => a + Math.random() * (b - a);
  const noise = (dur) => { const n = ac.createBuffer(1, Math.ceil(ac.sampleRate * dur), ac.sampleRate), d = n.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; return n; };
  const burst = (dur, filters, peak, delay = 0) => {
    const src = ac.createBufferSource(); src.buffer = noise(dur);
    let node = src; filters.forEach(([type, f, q]) => { const b = ac.createBiquadFilter(); b.type = type; b.frequency.value = f; if (q) b.Q.value = q; node.connect(b); node = b; });
    const g = ac.createGain(), t = ac.currentTime + delay; g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(peak, t + 0.004); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    node.connect(g); g.connect(ac.destination); src.start(t); src.stop(t + dur + 0.02);
  };
  const old = window.MEOW_SOUND && window.MEOW_SOUND.step;
  const step = (surface = 'grass', pace = 1) => {
    if (!enabled()) return;
    if (!ensure()) { if (old) old(surface === 'sand' || surface === 'stone' || surface === 'ice' ? 'grass' : surface, pace); return; }
    const L = LOOK[surface] || LOOK.grass, v = vol() * (0.6 + 0.35 * Math.min(1.5, pace)) * rand(0.85, 1.08);
    let i; do { i = Math.floor(Math.random() * MARKS.length); } while (i === last && MARKS.length > 1); last = i;
    const [off, len] = MARKS[i];
    const src = ac.createBufferSource(); src.buffer = buf; src.playbackRate.value = rand(...L.rate) * (0.97 + 0.06 * Math.min(1.5, pace) / 1.5);
    let node = src;
    L.f.forEach(([type, f, q, gain]) => { const b = ac.createBiquadFilter(); b.type = type; b.frequency.value = f; if (q) b.Q.value = q; if (gain) b.gain.value = gain; node.connect(b); node = b; });
    const g = ac.createGain(), t = ac.currentTime, d = len * L.len / src.playbackRate.value;
    g.gain.setValueAtTime(L.gain * v, t); g.gain.setValueAtTime(L.gain * v, t + d * 0.7); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
    node.connect(g); g.connect(ac.destination);
    src.start(t, off, len * L.len + 0.02);
    // the character of each surface on top
    if (L.crunch) for (let k = 0; k < 5; k++) burst(0.03, [['bandpass', rand(1800, 3800), 2.5]], 0.05 * v, 0.02 + k * rand(0.012, 0.024));
    if (L.knock) { burst(0.14, [['bandpass', rand(170, 240), 2.4]], 0.4 * v); burst(0.05, [['bandpass', rand(900, 1300), 4]], 0.07 * v, 0.004); }
    if (L.splash) { burst(0.25, [['bandpass', rand(500, 900), 0.9]], 0.14 * v, 0.02); burst(0.12, [['highpass', 2500]], 0.05 * v, 0.05); }
    if (L.click) burst(0.02, [['highpass', 4000]], 0.06 * v, 0.005);
  };
  const hook = () => { if (window.MEOW_SOUND) window.MEOW_SOUND.step = step; };
  hook(); setTimeout(hook, 500);
  return { step };
}
