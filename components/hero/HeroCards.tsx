"use client";

import { useEffect, useState } from "react";
import { gsap } from "@/lib/gsap";

const CODE = `const app = await build({
  stack: "next + node",
  ai: agents.enable(),
});
await deploy(app);`;

export function CodeCard() {
  const [n, setN] = useState(0);
  const len = CODE.length;

  useEffect(() => {
    const id = setInterval(() => setN((v) => (v >= len + 60 ? 0 : v + 1)), 40);
    return () => clearInterval(id);
  }, [len]);

  const done = n >= len;
  return (
    <div className="w-[240px] max-w-full rounded-xl border border-white/10 bg-[#0d131a]/90 p-3.5 shadow-2xl backdrop-blur sm:w-[270px] sm:p-4">
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-brand-amber" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="ml-2 text-[10px] text-white/40">app.ts</span>
      </div>
      <pre className="min-h-[92px] whitespace-pre-wrap font-mono text-[10px] leading-5 text-brand-cyan/90 sm:text-[11px]">
        {CODE.slice(0, n)}
        <span className="scene-blink">▍</span>
      </pre>
      <div className={`mt-2 text-[10px] font-semibold transition-opacity duration-300 sm:text-[11px] ${done ? "opacity-100 text-brand-amber" : "opacity-0"}`}>
        ✓ Deployed
      </div>
    </div>
  );
}

export function ChatCard() {
  return (
    <div className="w-[220px] max-w-full rounded-xl border border-white/10 bg-[#0d131a]/90 p-3.5 shadow-2xl backdrop-blur sm:w-[240px] sm:p-4">
      <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-white/40">AI Agent</p>
      <div className="ml-auto w-fit max-w-[85%] rounded-lg rounded-br-sm bg-white/10 px-3 py-2 text-[11px] sm:text-xs">
        Can you book me a demo for Friday?
      </div>
      <div className="relative mt-2 h-[52px]">
        <div className="scene-dots absolute left-0 top-0 flex gap-1 rounded-lg bg-brand-cyan/15 px-3 py-2.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="scene-blink h-1.5 w-1.5 rounded-full bg-brand-cyan" style={{ animationDelay: `${i * 0.2}s` }} />
          ))}
        </div>
        <div className="scene-reply absolute left-0 top-0 max-w-[90%] rounded-lg rounded-bl-sm bg-brand-cyan/15 px-3 py-2 text-[11px] text-brand-cyan sm:text-xs">
          Done. Friday 3 PM is booked and the invite is sent.
        </div>
      </div>
    </div>
  );
}

export function MetricCard() {
  const [val, setVal] = useState(0);

  useEffect(() => {
    const o = { v: 0 };
    const tween = gsap.to(o, {
      v: 8,
      duration: 2,
      ease: "power2.out",
      repeat: -1,
      repeatDelay: 3.5,
      onUpdate: () => setVal(Math.round(o.v)),
    });
    return () => { tween.kill(); };
  }, []);

  return (
    <div className="w-[170px] max-w-full rounded-xl border border-white/10 bg-[#0d131a]/90 p-3.5 shadow-2xl backdrop-blur sm:w-[190px] sm:p-4">
      <p className="text-[9px] font-semibold uppercase tracking-widest text-white/40 sm:text-[10px]">Core services</p>
      <p className="mt-1 font-heading text-3xl font-extrabold text-brand-amber sm:text-4xl">{val}</p>
      <p className="text-[10px] text-white/50 sm:text-[11px]">across Web &amp; AI</p>
      <svg viewBox="0 0 120 30" className="mt-2 w-full" fill="none">
        <path className="draw-line" d="M0 26 L20 20 L40 22 L60 12 L80 14 L100 4 L120 6" stroke="#00FFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}