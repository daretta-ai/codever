"use client";

import { useEffect, useRef } from "react";

const VS = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

const FS = `
#extension GL_OES_standard_derivatives : enable
precision highp float;

uniform vec2  u_res;
uniform vec2  u_mouse;
uniform float u_press;
uniform float u_time;
uniform int   u_variant;
uniform float u_intensity;
uniform float u_speed;
uniform float u_grain;
uniform float u_opacity;
uniform vec3  u_bg;
uniform vec3  u_c1;
uniform vec3  u_c2;
uniform vec3  u_c3;

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 rot = mat2(0.8, -0.6, 0.6, 0.8);
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = rot * p * 2.02;
    a *= 0.5;
  }
  return v;
}
vec3 mixp(vec3 base, vec3 a, vec3 b, vec3 c, float t1, float t2, float t3) {
  vec3 col = base;
  col = mix(col, a, smoothstep(0.0, 0.6, t1));
  col = mix(col, b, smoothstep(0.4, 0.9, t2));
  col = mix(col, c, smoothstep(0.78, 0.98, t3));
  return col;
}
vec3 aurora(vec2 uv, vec2 m, float t) {
  vec2 q = vec2(
    fbm(uv * 1.4 + vec2(0.0, t * 0.18)),
    fbm(uv * 1.4 + vec2(5.2, t * 0.18 + 1.3))
  );
  float md = length(uv - m);
  vec2 pull = (uv - m) / max(md, 0.0001) * exp(-md * 1.4) * (0.6 * u_intensity + 0.6 * u_press);
  vec2 r = vec2(
    fbm(uv * 1.6 + 4.0 * q + pull + vec2(1.7, 9.2) + 0.12 * t),
    fbm(uv * 1.6 + 4.0 * q - pull + vec2(8.3, 2.8) + 0.10 * t)
  );
  float f = fbm(uv * 1.2 + 4.0 * r);
  vec3 col = mixp(u_bg, u_c1, u_c2, u_c3, f, dot(r, vec2(0.5)) + 0.2, q.x + 0.1);
  col += u_c3 * 0.55 * exp(-md * 6.0) * (0.6 + 0.6 * u_press);
  return col;
}
vec3 ink(vec2 uv, vec2 m, float t) {
  vec2 p = uv * 2.0;
  vec2 q = vec2(fbm(p + 0.07 * t), fbm(p + vec2(3.1, 1.8) - 0.07 * t));
  float md = length(uv - m);
  vec2 push = normalize(uv - m + 0.0001) * (0.35 * u_intensity + 0.35 * u_press) / (md + 0.25);
  float f = fbm(p + 2.4 * q + push);
  float band = abs(sin(f * 11.0 + t * 0.4));
  band = smoothstep(0.0, 0.5, 1.0 - band);
  vec3 col = mix(u_bg, u_c1, smoothstep(0.2, 0.8, f));
  col = mix(col, u_c2, band * 0.65);
  col += u_c3 * 0.5 * exp(-md * 5.5);
  return col;
}
vec3 field(vec2 uv, vec2 m, float t) {
  float md = length(uv - m);
  vec2 p = uv + 0.18 * (uv - m) * exp(-md * 1.6) * (1.0 + 1.5 * u_press);
  float a = sin(p.x * 3.5 + t * 0.5);
  float b = sin(p.y * 3.0 - t * 0.4);
  float c = sin((p.x + p.y) * 2.4 + t * 0.7);
  float d = sin(length(p - vec2(sin(t*0.3), cos(t*0.27))) * 4.5 + t * 0.6);
  float v = (a + b + c + d) * 0.25;
  v = 0.5 + 0.5 * v;
  v = mix(v, fbm(p * 1.4 + 0.1 * t), 0.35);
  vec3 col = mix(u_bg, u_c1, smoothstep(0.0, 0.6, v));
  col = mix(col, u_c2, smoothstep(0.5, 0.9, v));
  col += u_c3 * 0.6 * exp(-md * 4.5);
  return col;
}
vec2 hash22(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return -1.0 + 2.0 * fract(sin(p) * 43758.5453);
}
float voro(vec2 p, float t, vec2 m) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float minD = 8.0;
  float second = 8.0;
  for (int x = -1; x <= 1; x++) {
    for (int y = -1; y <= 1; y++) {
      vec2 g = vec2(float(x), float(y));
      vec2 o = 0.5 + 0.5 * sin(t * 0.6 + 6.2831 * hash22(i + g));
      o += 0.25 * (m - (i + g)) * exp(-length(m - (i + g)) * 0.4);
      float d = length(g + o - f);
      if (d < minD) { second = minD; minD = d; }
      else if (d < second) { second = d; }
    }
  }
  return second - minD;
}
float gridMask(vec2 uv, float spacing, float thickness) {
  vec2 g = abs(fract(uv / spacing - 0.5) - 0.5) * spacing;
  vec2 fw = fwidth(uv);
  vec2 line = vec2(
    1.0 - smoothstep(thickness - fw.x, thickness + fw.x, g.x),
    1.0 - smoothstep(thickness - fw.y, thickness + fw.y, g.y)
  );
  return max(line.x, line.y);
}
vec3 mesh(vec2 uv, vec2 m, float t) {
  float md = length(uv - m);
  float prox = exp(-md * 2.6);
  float major = 0.20;
  float minor = major / 5.0;
  float gMajor = gridMask(uv, major, 0.0010);
  float gMinor = gridMask(uv, minor, 0.0006);
  vec2 p  = uv * 3.2;
  vec2 mp = m  * 3.2;
  float v = voro(p, t * (0.35 + 0.65 * u_intensity), mp);
  float fw = fwidth(v);
  float edge = 1.0 - smoothstep(0.0, fw * 1.6, v);
  float interior = smoothstep(0.04, 0.18, v) * 0.05;
  vec3 col = u_bg;
  col = mix(col, u_c1, gMajor * 0.16);
  col = mix(col, u_c1, gMinor * 0.55 * prox);
  col = mix(col, u_c2, edge * (0.32 + 0.55 * prox));
  col += u_c1 * interior;
  col += u_c3 * 0.32 * exp(-md * 6.5);
  return col;
}
void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_res) / u_res.y;
  vec2 m  = (u_mouse - 0.5 * u_res) / u_res.y;
  float t = u_time * u_speed;
  vec3 col;
  if (u_variant == 0)      col = aurora(uv, m, t);
  else if (u_variant == 1) col = ink(uv, m, t);
  else if (u_variant == 2) col = field(uv, m, t);
  else                     col = mesh(uv, m, t);
  float g = hash21(gl_FragCoord.xy + fract(t)) - 0.5;
  col += g * u_grain;
  float vig = smoothstep(1.4, 0.4, length(uv));
  col *= mix(0.78, 1.0, vig);
  col = mix(u_bg, col, u_opacity);
  gl_FragColor = vec4(col, 1.0);
}
`;

function hexToRgb(hex: string): [number, number, number] {
  const s = hex.replace("#", "");
  const expanded = s.length === 3 ? s.split("").map((c) => c + c).join("") : s;
  const n = parseInt(expanded, 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

export function Shader() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      (canvas.getContext("webgl", {
        antialias: false,
        premultipliedAlpha: false,
        alpha: false,
      }) as WebGLRenderingContext | null) ??
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);

    if (!gl) {
      canvas.style.display = "none";
      return;
    }
    gl.getExtension("OES_standard_derivatives");

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(sh));
      }
      return sh;
    };

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VS));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FS));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(prog));
    }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );
    const aPos = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const u = (n: string) => gl.getUniformLocation(prog, n);
    const uRes = u("u_res");
    const uMouse = u("u_mouse");
    const uPress = u("u_press");
    const uTime = u("u_time");
    const uVariant = u("u_variant");
    const uIntensity = u("u_intensity");
    const uSpeed = u("u_speed");
    const uGrain = u("u_grain");
    const uOpacity = u("u_opacity");
    const uBg = u("u_bg");
    const uC1 = u("u_c1");
    const uC2 = u("u_c2");
    const uC3 = u("u_c3");

    const state = {
      mouseTarget: [window.innerWidth / 2, window.innerHeight / 2] as [number, number],
      mouse: [window.innerWidth / 2, window.innerHeight / 2] as [number, number],
      pressTarget: 0,
      press: 0,
      variant: 3,
      intensity: 0.15,
      speed: 0.2,
      grain: 0,
      opacity: 0.18,
      palette: ["#08070E", "#15102A", "#7E6FB5", "#544488"] as const,
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.floor(window.innerWidth * dpr);
      const h = Math.floor(window.innerHeight * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      gl.viewport(0, 0, w, h);
    };
    resize();
    window.addEventListener("resize", resize);

    const setMouse = (x: number, y: number) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      state.mouseTarget = [x * dpr, (window.innerHeight - y) * dpr];
    };
    const onMove = (e: MouseEvent) => setMouse(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => {
      if (e.touches[0]) setMouse(e.touches[0].clientX, e.touches[0].clientY);
    };
    const onDown = () => { state.pressTarget = 1; };
    const onUp = () => { state.pressTarget = 0; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchstart", onDown, { passive: true });
    window.addEventListener("touchend", onUp);

    let raf = 0;
    const t0 = performance.now();
    const frame = (now: number) => {
      const t = (now - t0) / 1000;
      state.mouse[0] += (state.mouseTarget[0] - state.mouse[0]) * 0.1;
      state.mouse[1] += (state.mouseTarget[1] - state.mouse[1]) * 0.1;
      state.press += (state.pressTarget - state.press) * 0.12;

      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform2f(uMouse, state.mouse[0], state.mouse[1]);
      gl.uniform1f(uPress, state.press);
      gl.uniform1f(uTime, t);
      gl.uniform1i(uVariant, state.variant);
      gl.uniform1f(uIntensity, state.intensity);
      gl.uniform1f(uSpeed, state.speed);
      gl.uniform1f(uGrain, state.grain);
      gl.uniform1f(uOpacity, state.opacity);

      const [bg, c1, c2, c3] = state.palette;
      gl.uniform3fv(uBg, hexToRgb(bg));
      gl.uniform3fv(uC1, hexToRgb(c1));
      gl.uniform3fv(uC2, hexToRgb(c2));
      gl.uniform3fv(uC3, hexToRgb(c3));

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchstart", onDown);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  return (
    <>
      <canvas id="shader" ref={canvasRef} aria-hidden="true" />
      <div className="shader-veil" aria-hidden="true" />
    </>
  );
}
