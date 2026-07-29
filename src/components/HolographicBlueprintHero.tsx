"use client";
import { useEffect, useRef, useState } from "react";

// Design-space scene: a 2100x900 "holographic blueprint" of a website layout.
// Ported from a Claude-generated artifact (holographic-blueprint-hero) —
// static decorative markup only, no user input, safe as innerHTML.
const SCENE_HTML = `
  <div style="position: absolute; inset: 0; background: radial-gradient(60% 90% at 0% 50%, rgba(120, 70, 190, 0.28), transparent 70%), radial-gradient(55% 80% at 100% 40%, rgba(96, 58, 170, 0.24), transparent 72%), radial-gradient(70% 60% at 50% 108%, rgba(88, 52, 150, 0.18), transparent 70%);"></div>

  <div style="position: absolute; left: 0; top: 0; width: 2100px; height: 900px; perspective: 1700px; perspective-origin: 62% 48%;">
    <div style="position: absolute; inset: 0; transform-style: preserve-3d; animation: holoFlicker 7s ease-in-out infinite; transform: rotateX(7deg) rotateY(-17deg) rotateZ(-1deg);">

      <div style="position: absolute; left: -400px; top: 660px; width: 2900px; height: 1400px; transform: rotateX(80deg); transform-origin: 50% 0%; background-image: linear-gradient(rgba(255, 232, 31, 0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 232, 31, 0.16) 1px, transparent 1px); background-size: 120px 120px; mask-image: radial-gradient(60% 55% at 55% 8%, rgba(0,0,0,0.9), transparent 75%); -webkit-mask-image: radial-gradient(60% 55% at 55% 8%, rgba(0,0,0,0.9), transparent 75%);"></div>

      <div style="position: absolute; left: 1000px; top: 320px; width: 249px; height: 1px; transform-origin: 0% 50%; transform: translateZ(-80px) rotate(195deg); background: linear-gradient(90deg, rgba(255,232,31,0.75), rgba(255,232,31,0.12)); box-shadow: 0 0 8px rgba(255,232,31,0.5); animation: holoPulseGlow 5.5s ease-in-out infinite;"></div>
      <div style="position: absolute; left: 1620px; top: 300px; width: 228px; height: 1px; transform-origin: 0% 50%; transform: translateZ(-180px) rotate(-23deg); background: linear-gradient(90deg, rgba(255,232,31,0.8), rgba(255,232,31,0.14)); box-shadow: 0 0 9px rgba(255,232,31,0.55); animation: holoPulseGlow 6.5s ease-in-out infinite;"></div>
      <div style="position: absolute; left: 1620px; top: 520px; width: 253px; height: 1px; transform-origin: 0% 50%; transform: translateZ(-320px) rotate(18deg); background: linear-gradient(90deg, rgba(255,232,31,0.7), rgba(255,232,31,0.1)); box-shadow: 0 0 9px rgba(255,232,31,0.45); animation: holoPulseGlow 7.2s ease-in-out infinite;"></div>
      <div style="position: absolute; left: 1300px; top: 230px; width: 149px; height: 1px; transform-origin: 0% 50%; transform: translateZ(-420px) rotate(-47deg); background: linear-gradient(90deg, rgba(255,232,31,0.6), rgba(255,232,31,0.08)); box-shadow: 0 0 8px rgba(255,232,31,0.4);"></div>
      <div style="position: absolute; left: 1050px; top: 650px; width: 186px; height: 1px; transform-origin: 0% 50%; transform: translateZ(-120px) rotate(144deg); background: linear-gradient(90deg, rgba(255,232,31,0.55), rgba(255,232,31,0.08)); box-shadow: 0 0 8px rgba(255,232,31,0.38);"></div>

      <div style="position: absolute; left: 1000px; top: 230px; width: 620px; height: 420px; transform: translateZ(120px); border: 1px solid rgba(255, 232, 31, 0.6); box-shadow: 0 0 26px rgba(255, 232, 31, 0.22), 0 0 90px rgba(255, 232, 31, 0.1), inset 0 0 40px rgba(255, 232, 31, 0.05); background: linear-gradient(180deg, rgba(255, 232, 31, 0.035), rgba(255, 232, 31, 0.012));">
        <div style="position: absolute; left: -1px; top: -1px; width: 26px; height: 26px; border-left: 2px solid rgba(255,232,31,0.95); border-top: 2px solid rgba(255,232,31,0.95); box-shadow: 0 0 12px rgba(255,232,31,0.7);"></div>
        <div style="position: absolute; right: -1px; top: -1px; width: 26px; height: 26px; border-right: 2px solid rgba(255,232,31,0.95); border-top: 2px solid rgba(255,232,31,0.95); box-shadow: 0 0 12px rgba(255,232,31,0.7);"></div>
        <div style="position: absolute; left: -1px; bottom: -1px; width: 26px; height: 26px; border-left: 2px solid rgba(255,232,31,0.95); border-bottom: 2px solid rgba(255,232,31,0.95); box-shadow: 0 0 12px rgba(255,232,31,0.7);"></div>
        <div style="position: absolute; right: -1px; bottom: -1px; width: 26px; height: 26px; border-right: 2px solid rgba(255,232,31,0.95); border-bottom: 2px solid rgba(255,232,31,0.95); box-shadow: 0 0 12px rgba(255,232,31,0.7);"></div>

        <div style="position: absolute; left: 28px; top: 26px; right: 28px; height: 34px; border: 1px solid rgba(255, 232, 31, 0.45); display: flex; align-items: center; gap: 10px; padding: 0 12px; box-shadow: 0 0 10px rgba(255,232,31,0.14);">
          <div style="width: 14px; height: 14px; border: 1px solid rgba(255,232,31,0.8); box-shadow: 0 0 8px rgba(255,232,31,0.5);"></div>
          <div style="flex: 1;"></div>
          <div style="display: flex; gap: 8px;">
            <div style="width: 34px; height: 3px; background: rgba(255,232,31,0.55); box-shadow: 0 0 6px rgba(255,232,31,0.45);"></div>
            <div style="width: 34px; height: 3px; background: rgba(255,232,31,0.4); box-shadow: 0 0 6px rgba(255,232,31,0.3);"></div>
            <div style="width: 34px; height: 3px; background: rgba(255,232,31,0.4); box-shadow: 0 0 6px rgba(255,232,31,0.3);"></div>
            <div style="width: 18px; height: 3px; background: rgba(255,232,31,0.7); box-shadow: 0 0 7px rgba(255,232,31,0.5);"></div>
          </div>
        </div>

        <div style="position: absolute; left: 28px; top: 76px; right: 28px; height: 150px; border: 1px solid rgba(255, 232, 31, 0.5); overflow: hidden; box-shadow: 0 0 14px rgba(255,232,31,0.16), inset 0 0 30px rgba(255,232,31,0.05);">
          <div style="position: absolute; left: 0; top: 0; width: 200%; height: 1px; background: rgba(255,232,31,0.3); transform-origin: 0 0; transform: rotate(13.7deg);"></div>
          <div style="position: absolute; right: 0; top: 0; width: 200%; height: 1px; background: rgba(255,232,31,0.3); transform-origin: 100% 0; transform: rotate(-13.7deg);"></div>
          <div style="position: absolute; left: 24px; bottom: 22px; display: flex; flex-direction: column; gap: 9px;">
            <div style="width: 210px; height: 5px; background: rgba(255,232,31,0.75); box-shadow: 0 0 9px rgba(255,232,31,0.6);"></div>
            <div style="width: 150px; height: 3px; background: rgba(255,232,31,0.45);"></div>
            <div style="width: 78px; height: 20px; border: 1px solid rgba(255,232,31,0.9); box-shadow: 0 0 12px rgba(255,232,31,0.55);"></div>
          </div>
          <div style="position: absolute; right: 26px; top: 26px; width: 74px; height: 74px; border: 1px solid rgba(255,232,31,0.55); border-radius: 50%; box-shadow: 0 0 16px rgba(255,232,31,0.35);"></div>
          <div style="position: absolute; right: 44px; top: 44px; width: 38px; height: 38px; border: 1px dashed rgba(255,232,31,0.5); border-radius: 50%;"></div>
        </div>

        <div style="position: absolute; left: 28px; top: 244px; right: 28px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px;">
          <div style="height: 74px; border: 1px solid rgba(255, 232, 31, 0.42); padding: 12px; display: flex; flex-direction: column; gap: 8px; box-shadow: 0 0 10px rgba(255,232,31,0.12);">
            <div style="width: 16px; height: 16px; border: 1px solid rgba(255,232,31,0.75); transform: rotate(45deg); box-shadow: 0 0 8px rgba(255,232,31,0.45);"></div>
            <div style="width: 100%; height: 3px; background: rgba(255,232,31,0.45);"></div>
            <div style="width: 64%; height: 3px; background: rgba(255,232,31,0.28);"></div>
          </div>
          <div style="height: 74px; border: 1px solid rgba(255, 232, 31, 0.42); padding: 12px; display: flex; flex-direction: column; gap: 8px; box-shadow: 0 0 10px rgba(255,232,31,0.12);">
            <div style="width: 16px; height: 16px; border: 1px solid rgba(255,232,31,0.75); border-radius: 50%; box-shadow: 0 0 8px rgba(255,232,31,0.45);"></div>
            <div style="width: 100%; height: 3px; background: rgba(255,232,31,0.45);"></div>
            <div style="width: 52%; height: 3px; background: rgba(255,232,31,0.28);"></div>
          </div>
          <div style="height: 74px; border: 1px solid rgba(255, 232, 31, 0.42); padding: 12px; display: flex; flex-direction: column; gap: 8px; box-shadow: 0 0 10px rgba(255,232,31,0.12);">
            <div style="width: 16px; height: 16px; border: 1px solid rgba(255,232,31,0.75); box-shadow: 0 0 8px rgba(255,232,31,0.45);"></div>
            <div style="width: 100%; height: 3px; background: rgba(255,232,31,0.45);"></div>
            <div style="width: 72%; height: 3px; background: rgba(255,232,31,0.28);"></div>
          </div>
        </div>

        <div style="position: absolute; left: 28px; bottom: 24px; right: 28px; height: 56px; border: 1px dashed rgba(255, 232, 31, 0.4); display: flex; align-items: center; gap: 12px; padding: 0 14px;">
          <div style="flex: 1; display: flex; flex-direction: column; gap: 8px;">
            <div style="width: 100%; height: 10px; border: 1px solid rgba(255,232,31,0.4);"></div>
            <div style="width: 100%; height: 10px; border: 1px solid rgba(255,232,31,0.4);"></div>
          </div>
          <div style="width: 92px; height: 26px; border: 1px solid rgba(255,232,31,0.85); box-shadow: 0 0 14px rgba(255,232,31,0.5); background: rgba(255,232,31,0.08);"></div>
        </div>

        <div style="position: absolute; left: -46px; top: 40px; width: 22px; display: flex; flex-direction: column; gap: 13px; align-items: flex-end;">
          <div style="width: 20px; height: 1px; background: rgba(255,232,31,0.55);"></div>
          <div style="width: 10px; height: 1px; background: rgba(255,232,31,0.3);"></div>
          <div style="width: 10px; height: 1px; background: rgba(255,232,31,0.3);"></div>
          <div style="width: 20px; height: 1px; background: rgba(255,232,31,0.55);"></div>
          <div style="width: 10px; height: 1px; background: rgba(255,232,31,0.3);"></div>
          <div style="width: 10px; height: 1px; background: rgba(255,232,31,0.3);"></div>
          <div style="width: 20px; height: 1px; background: rgba(255,232,31,0.55);"></div>
        </div>
        <div style="position: absolute; left: 60px; bottom: -40px; height: 22px; display: flex; gap: 15px; align-items: flex-start;">
          <div style="width: 1px; height: 18px; background: rgba(255,232,31,0.5);"></div>
          <div style="width: 1px; height: 9px; background: rgba(255,232,31,0.28);"></div>
          <div style="width: 1px; height: 9px; background: rgba(255,232,31,0.28);"></div>
          <div style="width: 1px; height: 18px; background: rgba(255,232,31,0.5);"></div>
          <div style="width: 1px; height: 9px; background: rgba(255,232,31,0.28);"></div>
          <div style="width: 1px; height: 9px; background: rgba(255,232,31,0.28);"></div>
          <div style="width: 1px; height: 18px; background: rgba(255,232,31,0.5);"></div>
          <div style="width: 1px; height: 9px; background: rgba(255,232,31,0.28);"></div>
          <div style="width: 1px; height: 9px; background: rgba(255,232,31,0.28);"></div>
          <div style="width: 1px; height: 18px; background: rgba(255,232,31,0.5);"></div>
        </div>
      </div>

      <div style="position: absolute; left: 1830px; top: 130px; width: 230px; height: 150px; transform: translateZ(-180px); filter: blur(1.6px); opacity: 0.78; border: 1px solid rgba(255, 232, 31, 0.5); box-shadow: 0 0 22px rgba(255,232,31,0.18), inset 0 0 26px rgba(255,232,31,0.05); background: rgba(255,232,31,0.02); padding: 14px; display: flex; flex-direction: column; gap: 10px;">
        <div style="width: 100%; height: 46px; border: 1px solid rgba(255,232,31,0.4);"></div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
          <div style="height: 30px; border: 1px solid rgba(255,232,31,0.35);"></div>
          <div style="height: 30px; border: 1px solid rgba(255,232,31,0.35);"></div>
        </div>
        <div style="width: 62%; height: 3px; background: rgba(255,232,31,0.4);"></div>
      </div>

      <div style="position: absolute; left: 1855px; top: 560px; width: 210px; height: 155px; transform: translateZ(-320px); filter: blur(2.6px); opacity: 0.62; border: 1px solid rgba(255, 232, 31, 0.45); box-shadow: 0 0 26px rgba(255,232,31,0.16); background: rgba(255,232,31,0.02); padding: 14px; display: flex; flex-direction: column; gap: 9px;">
        <div style="width: 70%; height: 4px; background: rgba(255,232,31,0.5);"></div>
        <div style="width: 100%; height: 12px; border: 1px solid rgba(255,232,31,0.35);"></div>
        <div style="width: 100%; height: 12px; border: 1px solid rgba(255,232,31,0.35);"></div>
        <div style="width: 100%; height: 12px; border: 1px solid rgba(255,232,31,0.35);"></div>
        <div style="width: 56px; height: 18px; border: 1px solid rgba(255,232,31,0.7);"></div>
      </div>

      <div style="position: absolute; left: 1370px; top: 18px; width: 190px; height: 122px; transform: translateZ(-430px); filter: blur(3.2px); opacity: 0.5; border: 1px solid rgba(255, 232, 31, 0.4); box-shadow: 0 0 30px rgba(255,232,31,0.14); padding: 12px; display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 8px;">
        <div style="border: 1px solid rgba(255,232,31,0.3);"></div>
        <div style="border: 1px solid rgba(255,232,31,0.3);"></div>
        <div style="border: 1px solid rgba(255,232,31,0.3);"></div>
        <div style="border: 1px solid rgba(255,232,31,0.3);"></div>
      </div>

      <div style="position: absolute; left: 780px; top: 726px; width: 205px; height: 122px; transform: translateZ(-120px); filter: blur(2.1px); opacity: 0.5; border: 1px solid rgba(255, 232, 31, 0.38); box-shadow: 0 0 22px rgba(255,232,31,0.12); padding: 12px; display: flex; flex-direction: column; gap: 10px;">
        <div style="width: 100%; height: 34px; border: 1px solid rgba(255,232,31,0.28);"></div>
        <div style="width: 80%; height: 3px; background: rgba(255,232,31,0.32);"></div>
        <div style="width: 58%; height: 3px; background: rgba(255,232,31,0.24);"></div>
      </div>

      <div style="position: absolute; left: 596px; top: 196px; width: 168px; height: 106px; transform: translateZ(-70px); filter: blur(1.4px); opacity: 0.3; border: 1px solid rgba(255, 232, 31, 0.3); box-shadow: 0 0 16px rgba(255,232,31,0.08);"></div>

      <div style="position: absolute; left: 1700px; top: 380px; width: 150px; height: 150px; transform: translateZ(-260px); border: 1px dashed rgba(255,232,31,0.3); border-radius: 50%; opacity: 0.6; filter: blur(0.6px);"></div>
      <div style="position: absolute; left: 1520px; top: 640px; width: 260px; height: 90px; transform: translateZ(-220px) rotateX(72deg); border: 1px dashed rgba(255,232,31,0.26); border-radius: 50%; filter: blur(1px);"></div>
      <div style="position: absolute; left: 1258px; top: 176px; width: 10px; height: 10px; background: rgba(255,232,31,0.95); border-radius: 50%; box-shadow: 0 0 18px 4px rgba(255,232,31,0.7); transform: translateZ(60px);"></div>
      <div style="position: absolute; left: 1798px; top: 314px; width: 8px; height: 8px; background: rgba(255,232,31,0.85); border-radius: 50%; box-shadow: 0 0 22px 6px rgba(255,232,31,0.5); transform: translateZ(-200px); filter: blur(1.4px);"></div>
      <div style="position: absolute; left: 1660px; top: 700px; width: 14px; height: 14px; background: rgba(255,232,31,0.6); border-radius: 50%; box-shadow: 0 0 30px 10px rgba(255,232,31,0.35); transform: translateZ(-340px); filter: blur(3px);"></div>
    </div>
  </div>
`;

const OVERLAY_HTML = `
  <div style="position: absolute; inset: 0; pointer-events: none; background: repeating-linear-gradient(180deg, rgba(255, 232, 31, 0.045) 0px, rgba(255, 232, 31, 0.045) 1px, transparent 1px, transparent 4px); mix-blend-mode: screen;"></div>

  <div style="position: absolute; inset: 0; pointer-events: none; overflow: hidden; opacity: 0.5;">
    <div style="position: absolute; left: 0; right: 0; height: 220px; background: linear-gradient(180deg, transparent, rgba(255, 232, 31, 0.05), transparent); animation: holoScanDrift 9s linear infinite;"></div>
  </div>

  <div style="position: absolute; inset: 0; pointer-events: none; background: linear-gradient(90deg, rgba(6, 4, 5, 0.99) 0%, rgba(7, 4, 7, 0.96) 28%, rgba(8, 5, 8, 0.85) 46%, rgba(9, 6, 9, 0.6) 62%, rgba(9, 6, 9, 0.25) 78%, transparent 92%);"></div>

  <div style="position: absolute; inset: 0; pointer-events: none; background: rgba(5, 3, 5, 0.55);"></div>

  <div style="position: absolute; inset: 0; pointer-events: none; box-shadow: inset 0 0 220px 90px rgba(10, 6, 10, 0.9), inset 0 0 90px 10px rgba(96, 56, 170, 0.16);"></div>
`;

const STAGE_W = 2100;
const STAGE_H = 900;

// Design-space x of the main glowing panel's centre — the one thing that
// must stay on screen no matter how the crop window gets squeezed.
const FOCAL_X = 1310;

export default function HolographicBlueprintHero() {
  const boxRef = useRef<HTMLDivElement>(null);
  const dustRef = useRef<HTMLCanvasElement>(null);
  const [scale, setScale] = useState(1);
  const [offsetX, setOffsetX] = useState(0);

  // True cover-fit (like object-fit: cover): scale by whichever axis needs it
  // more, so the scaled stage always fully covers the box in both directions
  // — no empty gap, no hard mid-design crop, regardless of how tall the hero
  // text makes the section at any given width.
  //
  // Cover-fit alone re-introduces a different bug on narrow/tall viewports:
  // with the stage always anchored at left:0, a large height-driven scale
  // overflows the width so far that everything past x=600 (i.e. all the
  // interesting content — it's deliberately biased right, to keep the left
  // dark for text) gets pushed off the right edge. So we also solve for a
  // horizontal offset that keeps FOCAL_X visible, clamped so we never reveal
  // empty space on either side (same clamping object-position would apply).
  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const fit = () => {
      const cw = el.clientWidth;
      const ch = el.clientHeight;
      if (cw <= 0 || ch <= 0) return;
      const s = Math.max(cw / STAGE_W, ch / STAGE_H);
      setScale(s);

      const scaledW = STAGE_W * s;
      const ideal = cw / 2 - FOCAL_X * s;
      const minLeft = cw - scaledW;
      setOffsetX(Math.min(0, Math.max(minLeft, ideal)));
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const cv = dustRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    const spawnX = () => 700 + Math.pow(Math.random(), 0.75) * 1400;

    type Particle = { x: number; y: number; r: number; vy: number; vx: number; a: number; ph: number };
    const count = reduce ? 0 : 180;
    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: spawnX(),
      y: Math.random() * STAGE_H,
      r: 0.5 + Math.random() * 1.7,
      vy: -(0.06 + Math.random() * 0.34),
      vx: (Math.random() - 0.5) * 0.12,
      a: 0.12 + Math.random() * 0.55,
      ph: Math.random() * Math.PI * 2,
    }));

    let raf = 0;
    const draw = (t: number) => {
      ctx.clearRect(0, 0, STAGE_W, STAGE_H);
      for (const d of particles) {
        const flick = 0.65 + 0.35 * Math.sin(t / 700 + d.ph);
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 232, 31, ${(d.a * flick).toFixed(3)})`;
        ctx.shadowColor = "rgba(255, 232, 31, 0.9)";
        ctx.shadowBlur = 8 * d.r;
        ctx.fill();
        d.y += d.vy;
        d.x += d.vx;
        if (d.y < -8) {
          d.y = STAGE_H + 8;
          d.x = spawnX();
        }
      }
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={boxRef} className="absolute inset-0 overflow-hidden" style={{ background: "#0a0608" }}>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          transformOrigin: "0 0",
          transform: `translate(${offsetX}px, 0) scale(${scale})`,
          width: STAGE_W,
          height: STAGE_H,
          overflow: "hidden",
          background: "radial-gradient(120% 100% at 68% 45%, #211530 0%, #170f1a 42%, #0d0810 72%, #0a0608 100%)",
          fontSize: 0,
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: SCENE_HTML }} />
        <canvas
          ref={dustRef}
          width={STAGE_W}
          height={STAGE_H}
          style={{
            position: "absolute",
            inset: 0,
            width: STAGE_W,
            height: STAGE_H,
            pointerEvents: "none",
            mixBlendMode: "screen",
            opacity: 0.85,
          }}
        />
        <div dangerouslySetInnerHTML={{ __html: OVERLAY_HTML }} />
      </div>
    </div>
  );
}
