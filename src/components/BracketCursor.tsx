"use client";

import { useEffect, useRef } from "react";

const HOVER_SEL =
  'a, button, [role="button"], input, textarea, select, label, summary, .domain';

export function BracketCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cur = cursorRef.current;
    if (!cur) return;

    let mx = 0;
    let my = 0;
    let raf: number | null = null;

    const tick = () => {
      cur.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      raf = null;
    };
    const queue = () => {
      if (raf == null) raf = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cur.classList.add("ready");
      const target = e.target as Element | null;
      const hover = target?.closest?.(HOVER_SEL);
      cur.classList.toggle("hover", !!hover);
      queue();
    };
    const onLeave = () => cur.classList.remove("ready");
    const onDown = () => cur.classList.add("click");
    const onUp = () => cur.classList.remove("click");

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);

    return () => {
      if (raf != null) cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <div className="cur-brackets" aria-hidden="true" ref={cursorRef}>
      <span className="b lt">&lt;</span>
      <span className="pt"></span>
      <span className="b gt">&gt;</span>
    </div>
  );
}
