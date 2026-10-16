/* MEOW — the sky dome: gradient, sun or moon, stars and aurora curtains. */
import * as THREE from 'three';

export function createSky(scene, U) {
  Object.assign(U, {
    uTop: { value: new THREE.Color() }, uHorizon: { value: new THREE.Color() }, uBottom: { value: new THREE.Color() },
    uSunColor: { value: new THREE.Color() }, uSunDir: { value: new THREE.Vector3(0, 0.2, -1) }, uSunSize: { value: 0 },
    uStars: { value: 0 }, uAurora: { value: 0 }, uAur1: { value: new THREE.Color() }, uAur2: { value: new THREE.Color() }
  });
  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(1400, 48, 24),
    new THREE.ShaderMaterial({
      uniforms: U, side: THREE.BackSide, depthWrite: false, fog: false,
      vertexShader: /* glsl */`
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          gl_Position = p.xyww;
        }`,
      fragmentShader: /* glsl */`
        uniform float uTime, uSunSize, uStars, uAurora;
        uniform vec3 uTop, uHorizon, uBottom, uSunColor, uSunDir, uAur1, uAur2;
        varying vec3 vDir;
        float hash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
        void main() {
          vec3 d = normalize(vDir);
          float h = d.y;
          vec3 col = h > 0.0 ? mix(uHorizon, uTop, pow(clamp(h, 0.0, 1.0), 0.55)) : mix(uHorizon, uBottom, clamp(-h / 0.25, 0.0, 1.0));
          // sun or moon: soft disc and halo
          float sd = dot(d, normalize(uSunDir));
          float on = step(0.00001, uSunSize);
          float disc = smoothstep(1.0 - uSunSize, 1.0 - uSunSize * 0.6, sd);
          float halo = pow(max(sd, 0.0), 90.0) * 0.55 + pow(max(sd, 0.0), 10.0) * 0.12;
          col += uSunColor * (disc + halo) * on;
          // stars, twinkling slowly
          vec3 g = floor(d * 420.0);
          float s = hash(g);
          float star = step(0.9972, s) * smoothstep(0.02, 0.2, h);
          col += vec3(star * (0.55 + 0.45 * sin(uTime * 1.2 + s * 90.0))) * uStars;
          // aurora: curtains with a sharp lower edge, rays and slow folds
          if (uAurora > 0.001) {
            float az = atan(d.x, -d.z);
            vec3 acc = vec3(0.0);
            for (int i = 0; i < 3; i++) {
              float fi = float(i);
              float base = 0.13 + fi * 0.055 + 0.05 * sin(az * 1.6 + fi * 2.1 + uTime * 0.03) + 0.025 * sin(az * 4.1 - uTime * 0.05 + fi * 1.7);
              float above = h - base;
              float shape = smoothstep(-0.012, 0.012, above) * exp(-max(above, 0.0) * (6.0 + fi * 2.5));
              float rays = 0.55 + 0.45 * sin(az * 70.0 + sin(az * 6.0 + uTime * 0.15) * 4.0 + uTime * 0.35 + fi * 5.0);
              rays *= 0.65 + 0.35 * sin(az * 23.0 - uTime * 0.21 + fi);
              float folds = 0.45 + 0.55 * pow(0.5 + 0.5 * sin(az * 2.6 + uTime * 0.05 * (fi + 1.0) + fi * 1.3), 2.0);
              acc += mix(uAur1, uAur2, smoothstep(0.0, 0.16, above)) * shape * (0.3 + 0.7 * rays) * folds * (1.0 - fi * 0.2);
            }
            col += acc * uAurora * 1.9 * smoothstep(-0.35, 0.4, -d.z) * smoothstep(0.03, 0.09, h);
          }
          gl_FragColor = vec4(col, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`
    })
  );
  mesh.frustumCulled = false;
  scene.add(mesh);
  return mesh;
}
