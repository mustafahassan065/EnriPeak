"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { Bot, Check, Code } from "lucide-react";
import { gsap } from "@/lib/gsap";

/**
 * Line from the summit light → hanging banner.
 * The parent positions this component's origin exactly on the summit light.
 * Banner loops: Web Development (typing code) → AI Solutions (agent steps) → …
 */

const CODE = `const app = build({
  stack: "next",
  ui: premium(),
});
deploy(app);`;

const AI_STEPS = ["Reading inbox", "Understanding intent", "Drafting reply"];
const WEB_LIMIT = Math.ceil(CODE.length / 2) + 75; // ticks (40ms each)
const AI_LIMIT = 165;

type Props = { show: boolean; active: boolean; reduceMotion: boolean };

export default function SummitBanner({ show, active, reduceMotion }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const [st, setSt] = useState<{ scene: 0 | 1; n: number }>({ scene: 0, n: 0 });

  // content loop (paused when hero is off-screen)
  useEffect(() => {
    if (!show || !active || reduceMotion) return;
    const id = setInterval(() => {
      setSt(({ scene, n }) => {
        const limit = scene === 0 ? WEB_LIMIT : AI_LIMIT;
        return n + 1 > limit ? { scene: scene === 0 ? 1 : 0, n: 0 } : { scene, n: n + 1 };
      });
    }, 40);
    return () => clearInterval(id);
  }, [show, active, reduceMotion]);

  // entrance: line draws → drop → banner lowers out of it
  useGSAP(
    () => {
      if (!show) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ delay: 0.45, defaults: { ease: "power3.out" } });
        tl.fromTo(".sb-line", { scaleX: 0 }, { scaleX: 1, duration: 0.9, ease: "power2.inOut" }, 0)
          .fromTo(".sb-dot", { left: "0%" }, { left: "100%", duration: 0.9, ease: "power2.inOut" }, 0)
          .fromTo(".sb-drop", { scaleY: 0 }, { scaleY: 1, duration: 0.35 }, 0.85)
          .fromTo(
            ".sb-card",
            { clipPath: "inset(0 0 100% 0 round 12px)", opacity: 0, y: -8 },
            { clipPath: "inset(0 0 0% 0 round 12px)", opacity: 1, y: 0, duration: 0.9, clearProps: "clipPath,transform" },
            1.0
          );
        gsap.set(root.current, { opacity: 1 });
      });
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".sb-dot", { left: "100%" });
        gsap.set(root.current, { opacity: 1 });
      });
    },
    { scope: root, dependencies: [show] }
  );

  const t = reduceMotion ? 9999 : st.n;
  const scene = reduceMotion ? 0 : st.scene;
  const typed = CODE.slice(0, t * 2);
  const webDone = t * 2 >= CODE.length;

  return (
    <div
      ref={root}
      className="relative opacity-0"
      style={{ ["--ll" as string]: "clamp(36px, 12vw, 150px)", ["--bw" as string]: "clamp(164px, 38vw, 256px)" }}
      aria-hidden="true"
    >
      {/* horizontal line out of the summit light */}
      <div className="absolute left-0 top-0 h-[2px]" style={{ width: "var(--ll)" }}>
        <span
          className="sb-line absolute inset-0 origin-left bg-gradient-to-r from-brand-amber to-brand-cyan"
          style={{ boxShadow: "0 0 10px rgba(255,191,0,.7)" }}
        />
        <span
          className="sb-dot absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-cyan"
          style={{ left: "0%", boxShadow: "0 0 14px 4px rgba(0,255,255,.7)" }}
        />
      </div>

      {/* drop from the end of the line */}
      <span
        className="sb-drop absolute top-0 w-px origin-top bg-gradient-to-b from-brand-cyan to-brand-cyan/20"
        style={{ left: "var(--ll)", height: 26 }}
      />

      {/* the banner */}
      <div className="absolute -translate-x-1/2" style={{ left: "var(--ll)", top: 26, width: "var(--bw)" }}>
        <div className="sb-card overflow-hidden rounded-xl border border-white/15 bg-[#0d131a]/90 shadow-[0_20px_60px_-15px_rgba(0,0,0,.9)] backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
            <span
              key={scene}
              className="fade-up flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.16em] sm:text-[10px]"
              style={{ color: scene === 0 ? "#FFBF00" : "#00FFFF" }}
            >
              {scene === 0 ? <Code size={12} /> : <Bot size={12} />}
              {scene === 0 ? "Web Development" : "AI Solutions"}
            </span>
            <span className="flex gap-1">
              <i className={`h-1.5 w-1.5 rounded-full ${scene === 0 ? "bg-brand-amber" : "bg-white/25"}`} />
              <i className={`h-1.5 w-1.5 rounded-full ${scene === 1 ? "bg-brand-cyan" : "bg-white/25"}`} />
            </span>
          </div>

          <div key={scene} className="fade-up min-h-[104px] px-3 py-2.5">
            {scene === 0 ? (
              <>
                <pre className="min-h-[78px] whitespace-pre font-mono text-[10px] leading-[1.6] text-brand-cyan/90 sm:text-[11px]">
                  {typed}
                  <span className="scene-blink">▍</span>
                </pre>
                <p
                  className={`mt-1 flex items-center gap-1.5 text-[10px] font-semibold text-brand-amber transition-opacity duration-300 sm:text-[11px] ${
                    webDone ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Check size={12} /> Live in production
                </p>
              </>
            ) : (
              <ul className="space-y-2">
                {AI_STEPS.map((s, i) => {
                  const start = 6 + i * 30;
                  if (t < start) return null;
                  const ok = t >= start + 20;
                  return (
                    <li key={s} className="fade-up flex items-center justify-between gap-2 text-[10px] sm:text-[11px]">
                      <span className="text-white/75">
                        {s}
                        {ok ? "" : "…"}
                      </span>
                      {ok ? (
                        <Check size={12} className="shrink-0 text-brand-cyan" />
                      ) : (
                        <span className="scene-blink h-1.5 w-1.5 shrink-0 rounded-full bg-brand-amber" />
                      )}
                    </li>
                  );
                })}
                {t >= 105 && (
                  <li className="fade-up rounded-md bg-brand-cyan/10 px-2 py-1 text-[10px] font-semibold text-brand-cyan sm:text-[11px]">
                    ✓ Task completed by AI agent
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}