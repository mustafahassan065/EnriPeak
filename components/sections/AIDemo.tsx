"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { TrendingUp, Bot, Mountain, Layers, CalendarClock } from "lucide-react";
import { gsap } from "@/lib/gsap";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import DiscoveryButton from "../DiscoveryButton";

const PRINCIPLES = [
  {
    icon: TrendingUp,
    title: "Outcomes over output.",
    desc: "We measure success by what changes for your business — more growth, less friction, and time returned to your team.",
    scene: "outcomes",
  },
  {
    icon: Bot,
    title: "Human-led. AI-amplified.",
    desc: "We pair human judgment with intelligent systems, keeping people in control while technology handles the heavy lifting.",
    scene: "human-ai",
  },
  {
    icon: Mountain,
    title: "Launch is the beginning.",
    desc: "The best products keep getting better. We learn from real use, refine what matters, and build for lasting progress.",
    scene: "evolution",
  },
  {
    icon: Layers,
    title: "Make the complex feel simple.",
    desc: "We turn disconnected tools and tangled workflows into clear, connected systems your team can understand and own.",
    scene: "clarity",
  },
] as const;

/* ---------- concept-led animated illustrations ---------- */
function Scene({ kind }: { kind: string }) {
  // SVG contents remain identical to the original file.
  // I'll add the same SVG logic here, but the outer wrapper `<div>` uses responsive classes.
  if (kind === "outcomes") {
    return (
      <div className="phi-scene relative h-full min-h-[130px] overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 440 170" className="h-full w-full" fill="none">
           {/* All original SVG paths from outcomes */}
           <defs>
            <linearGradient id="phi-outcome-line" x1="42" y1="126" x2="390" y2="35" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00FFFF" stopOpacity=".2" />
              <stop offset="1" stopColor="#00FFFF" />
            </linearGradient>
            <filter id="phi-glow-cyan" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <path d="M38 130H402" stroke="white" strokeOpacity=".09" strokeDasharray="3 7" />
          <path d="M38 28V130" stroke="white" strokeOpacity=".09" strokeDasharray="3 7" />
          <path d="M44 116 C102 112 115 91 164 96 S240 80 278 59 S344 48 392 20" stroke="url(#phi-outcome-line)" strokeWidth="2.2" strokeLinecap="round" className="phi-chart-line" />
          <path d="M44 116 C102 112 115 91 164 96 S240 80 278 59 S344 48 392 20 L392 130H44Z" fill="url(#phi-outcome-line)" opacity=".07" />
          {[44, 164, 278, 392].map((x, i) => {
            const y = [116, 96, 59, 20][i];
            return <g key={x}><circle cx={x} cy={y} r="5" fill="#08151A" stroke={i === 3 ? "#FFBF00" : "#00FFFF"} strokeWidth="1.5" /><circle cx={x} cy={y} r="2" fill={i === 3 ? "#FFBF00" : "#00FFFF"} /></g>;
          })}
          <path d="M392 20L381 23M392 20L388 31" stroke="#FFBF00" strokeWidth="2" strokeLinecap="round" />
          <rect x="286" y="91" width="112" height="42" rx="8" fill="#0B1B20" stroke="white" strokeOpacity=".13" />
          <text x="298" y="107" fill="white" fillOpacity=".42" fontSize="8" letterSpacing="1.5">BUSINESS IMPACT</text>
          <text x="298" y="123" fill="#FFBF00" fontSize="13" fontWeight="700">MEASURABLE</text>
          <circle cx="0" cy="0" r="7" fill="#00FFFF" filter="url(#phi-glow-cyan)"><animateMotion dur="5.8s" repeatCount="indefinite" path="M44 116 C102 112 115 91 164 96 S240 80 278 59 S344 48 392 20" /></circle>
          <text x="42" y="151" fill="white" fillOpacity=".35" fontSize="8" letterSpacing="1.4">INSIGHT</text>
          <text x="170" y="151" fill="white" fillOpacity=".35" fontSize="8" letterSpacing="1.4">EXECUTION</text>
          <text x="346" y="151" fill="white" fillOpacity=".35" fontSize="8" letterSpacing="1.4">IMPACT</text>
        </svg>
      </div>
    );
  }

  if (kind === "human-ai") {
    return (
      <div className="phi-scene relative h-full min-h-[130px] overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 440 170" className="h-full w-full" fill="none">
          {/* All original SVG paths from human-ai */}
          <defs>
            <linearGradient id="phi-ai-flow" x1="94" y1="80" x2="346" y2="80" gradientUnits="userSpaceOnUse"><stop stopColor="#00FFFF" /><stop offset="1" stopColor="#FFBF00" /></linearGradient>
          </defs>
          <path d="M94 82H346" stroke="white" strokeOpacity=".16" strokeWidth="1.5" />
          <path d="M94 82H346" stroke="url(#phi-ai-flow)" strokeWidth="1.5" strokeDasharray="5 9" className="phi-flow-forward" />
          <path d="M346 105H94" stroke="#FFBF00" strokeOpacity=".45" strokeWidth="1.5" strokeDasharray="3 7" className="phi-flow-return" />
          <rect x="25" y="48" width="76" height="68" rx="13" fill="#0B1B20" stroke="#00FFFF" strokeOpacity=".45" />
          <circle cx="63" cy="69" r="10" stroke="#00FFFF" strokeOpacity=".8" strokeWidth="1.5" />
          <path d="M45 101C47 87 79 87 81 101" stroke="#00FFFF" strokeOpacity=".8" strokeWidth="1.5" strokeLinecap="round" />
          <text x="63" y="132" textAnchor="middle" fill="white" fillOpacity=".5" fontSize="8" letterSpacing="1.4">HUMAN</text>
          <rect x="181" y="38" width="78" height="88" rx="15" fill="#0B1B20" stroke="#00FFFF" strokeOpacity=".55" />
          <rect x="197" y="54" width="46" height="46" rx="10" fill="#00FFFF" fillOpacity=".07" stroke="#00FFFF" strokeOpacity=".55" />
          <path d="M220 62V92M205 77H235M210 67L230 87M230 67L210 87" stroke="#00FFFF" strokeOpacity=".8" strokeWidth="1.2" />
          <circle cx="220" cy="77" r="4" fill="#00FFFF" />
          <text x="220" y="114" textAnchor="middle" fill="white" fillOpacity=".6" fontSize="8" letterSpacing="1.2">AI SYSTEM</text>
          <rect x="339" y="48" width="76" height="68" rx="13" fill="#0B1B20" stroke="#FFBF00" strokeOpacity=".45" />
          <path d="M356 69H398M356 80H390M356 91H380" stroke="#FFBF00" strokeOpacity=".8" strokeWidth="2" strokeLinecap="round" />
          <text x="377" y="132" textAnchor="middle" fill="white" fillOpacity=".5" fontSize="8" letterSpacing="1.4">EXECUTION</text>
          <circle className="phi-ai-packet" cx="100" cy="82" r="4" fill="#00FFFF" />
          <circle className="phi-ai-return-packet" cx="340" cy="105" r="3.5" fill="#FFBF00" />
          <path d="M220 26V15M214 15H226" stroke="#00FFFF" strokeOpacity=".4" strokeWidth="1.2" strokeLinecap="round" />
          <circle className="phi-ai-core" cx="220" cy="77" r="35" stroke="#00FFFF" strokeOpacity=".3" strokeDasharray="2 6" />
        </svg>
      </div>
    );
  }

  if (kind === "evolution") {
    return (
      <div className="phi-scene relative h-full min-h-[130px] overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 440 170" className="h-full w-full" fill="none">
           {/* All original SVG paths from evolution */}
           <defs>
            <linearGradient id="phi-cycle" x1="168" y1="38" x2="272" y2="132" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00FFFF" />
              <stop offset="1" stopColor="#FFBF00" />
            </linearGradient>
          </defs>
          <circle cx="220" cy="85" r="48" stroke="white" strokeOpacity=".12" strokeWidth="1.2" />
          <circle cx="220" cy="85" r="48" stroke="url(#phi-cycle)" strokeWidth="2" strokeLinecap="round" strokeDasharray="72 230" className="phi-cycle-arc" />
          <path d="M255 52L265 54L262 64M185 118L175 116L178 106" stroke="#00FFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="190" y="66" width="60" height="38" rx="8" fill="#0B1B20" stroke="white" strokeOpacity=".2" />
          <path d="M199 94L209 85L217 89L229 76L241 80" stroke="#00FFFF" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="241" cy="80" r="2.6" fill="#FFBF00" />
          <text x="220" y="115" textAnchor="middle" fill="white" fillOpacity=".5" fontSize="7" letterSpacing="1.1">PRODUCT</text>
          <g>
            <circle cx="220" cy="37" r="17" fill="#0B1B20" stroke="#00FFFF" strokeOpacity=".7" />
            <text x="220" y="39.5" textAnchor="middle" fill="#00FFFF" fontSize="6.4" fontWeight="600" letterSpacing=".35">LISTEN</text>
          </g>
          <g>
            <circle cx="268" cy="85" r="17" fill="#0B1B20" stroke="#00FFFF" strokeOpacity=".55" />
            <text x="268" y="87.5" textAnchor="middle" fill="white" fillOpacity=".82" fontSize="6.6" fontWeight="600" letterSpacing=".3">BUILD</text>
          </g>
          <g>
            <circle cx="220" cy="133" r="17" fill="#0B1B20" stroke="#FFBF00" strokeOpacity=".65" />
            <text x="220" y="135.5" textAnchor="middle" fill="#FFBF00" fontSize="5.8" fontWeight="600" letterSpacing=".15">MEASURE</text>
          </g>
          <g>
            <circle cx="172" cy="85" r="17" fill="#0B1B20" stroke="#00FFFF" strokeOpacity=".55" />
            <text x="172" y="87.5" textAnchor="middle" fill="white" fillOpacity=".82" fontSize="5.9" fontWeight="600" letterSpacing=".1">IMPROVE</text>
          </g>
          <circle className="phi-cycle-orbit-dot" r="3.5" fill="#FFBF00">
            <animateMotion dur="7s" repeatCount="indefinite" path="M220 37 A48 48 0 1 1 219.9 37" />
          </circle>
        </svg>
      </div>
    );
  }

  return (
    <div className="phi-scene relative h-full min-h-[130px] overflow-hidden" aria-hidden="true">
      <svg viewBox="0 0 440 170" className="h-full w-full" fill="none">
        {/* All original SVG paths from clarity */}
        <defs>
          <linearGradient id="phi-clarity" x1="70" y1="85" x2="370" y2="85" gradientUnits="userSpaceOnUse"><stop stopColor="#00FFFF" stopOpacity=".35" /><stop offset=".55" stopColor="#00FFFF" /><stop offset="1" stopColor="#FFBF00" /></linearGradient>
        </defs>
        <g stroke="white" strokeOpacity=".2" strokeWidth="1.4">
          <path d="M54 34L190 85M54 68L190 85M54 102L190 85M54 136L190 85" />
          <path d="M190 85L286 85M286 85L376 49M286 85L376 121" />
        </g>
        <g fill="#0B1B20" stroke="#00FFFF" strokeOpacity=".65">
          <rect x="25" y="23" width="58" height="22" rx="6" /><rect x="25" y="57" width="58" height="22" rx="6" /><rect x="25" y="91" width="58" height="22" rx="6" /><rect x="25" y="125" width="58" height="22" rx="6" />
        </g>
        <g fill="#00FFFF" fillOpacity=".55"><circle cx="39" cy="34" r="2" /><circle cx="39" cy="68" r="2" /><circle cx="39" cy="102" r="2" /><circle cx="39" cy="136" r="2" /></g>
        <rect x="158" y="51" width="64" height="68" rx="12" fill="#0B1B20" stroke="#00FFFF" strokeWidth="1.5" />
        <path d="M176 72H204M176 84H204M176 96H196" stroke="#00FFFF" strokeOpacity=".75" strokeWidth="2" strokeLinecap="round" />
        <circle cx="190" cy="85" r="43" stroke="#00FFFF" strokeOpacity=".18" strokeDasharray="2 6" className="phi-hub-ring" />
        <g fill="#0B1B20" stroke="#FFBF00" strokeOpacity=".65"><rect x="355" y="34" width="60" height="30" rx="7" /><rect x="355" y="106" width="60" height="30" rx="7" /></g>
        <g fill="#FFBF00" fillOpacity=".8"><path d="M367 44H402V47H367Z" /><path d="M367 53H394V56H367Z" /><path d="M367 116H402V119H367Z" /><path d="M367 125H394V128H367Z" /></g>
        <path d="M54 34L190 85M54 68L190 85M54 102L190 85M54 136L190 85M190 85L286 85M286 85L376 49M286 85L376 121" stroke="url(#phi-clarity)" strokeWidth="1.6" strokeDasharray="4 8" className="phi-network-flow" />
        <circle cx="0" cy="0" r="3.5" fill="#00FFFF"><animateMotion dur="4.2s" repeatCount="indefinite" path="M54 34L190 85L286 85L376 49" /></circle>
        <text x="54" y="14" textAnchor="middle" fill="white" fillOpacity=".38" fontSize="8" letterSpacing="1.2">INPUTS</text>
        <text x="190" y="139" textAnchor="middle" fill="white" fillOpacity=".48" fontSize="8" letterSpacing="1.2">ONE CLEAR SYSTEM</text>
        <text x="385" y="22" textAnchor="middle" fill="white" fillOpacity=".38" fontSize="8" letterSpacing="1.2">OUTCOMES</text>
      </svg>
    </div>
  );
}

/* ---------- card: animation on top, text pinned to the bottom ---------- */
function PrincipleCard({ p, i, className = "" }: { p: (typeof PRINCIPLES)[number]; i: number; className?: string }) {
  return (
    <div className={`flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink/85 backdrop-blur-md ${className}`}>
      <div className="min-h-0 flex-1 p-2 sm:p-4 pb-1">
        <Scene kind={p.scene} />
      </div>
      <div className="p-4 pt-2 sm:p-5 sm:pt-3">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan">
            <p.icon size={15} />
          </span>
          <h3 className="font-heading text-sm font-extrabold tracking-tight sm:text-base md:text-lg">{p.title}</h3>
          <span className="ml-auto font-heading text-lg font-extrabold text-white/10 sm:text-xl">0{i + 1}</span>
        </div>
        <p className="mt-1.5 text-[11px] text-white/55 sm:text-xs md:text-sm">{p.desc}</p>
      </div>
    </div>
  );
}

export default function Philosophy() {
  const root = useRef<HTMLElement>(null);
  const dotsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      const panels = gsap.utils.toArray<HTMLElement>(".phi-panel");
      const total = panels.length;

      // left pair slides in from the left, right pair from the right
      panels.forEach((p, i) => {
        gsap.set(p, { x: i % 2 === 0 ? "-110vw" : "110vw", opacity: 0 });
      });

      const mm = gsap.matchMedia();

      mm.add("(min-width: 640px) and (prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".phi-pin",
            start: "top top",
            end: "+=2400",
            pin: true,
            scrub: 0.7,
            onUpdate: (self) => {
              const active = Math.min(total - 1, Math.floor(self.progress * total));
              dotsRef.current.forEach((d, i) => {
                if (!d) return;
                d.classList.toggle("bg-brand-cyan", i === active);
                d.classList.toggle("shadow-[0_0_12px_#00ffff]", i === active);
                d.classList.toggle("bg-white/15", i !== active);
              });
            },
          },
        });

        // row 1: two cards glide in from left & right
        tl.to(panels[0], { x: 0, opacity: 1, ease: "power3.out", duration: 1 }, 0);
        tl.to(panels[1], { x: 0, opacity: 1, ease: "power3.out", duration: 1 }, 0.18);
        // row 2: the other two follow
        tl.to(panels[2], { x: 0, opacity: 1, ease: "power3.out", duration: 1 }, 0.85);
        tl.to(panels[3], { x: 0, opacity: 1, ease: "power3.out", duration: 1 }, 1.03);
        // gentle settle
        tl.to({}, { duration: 0.5 });

        // the giant background words drift while pinned
        gsap.to(".phi-bgword", {
          xPercent: -8,
          ease: "none",
          scrollTrigger: { trigger: ".phi-pin", start: "top top", end: "+=2400", scrub: true },
        });
      });

      // reduced motion on desktop: cards simply appear in place
      mm.add("(min-width: 640px) and (prefers-reduced-motion: reduce)", () => {
        gsap.set(panels, { x: 0, opacity: 1 });
      });
    },
    { scope: root }
  );

  return (
    <section id="philosophy" ref={root} className="relative overflow-hidden">
      <style>{`
        .phi-chart-line { stroke-dasharray: 430; stroke-dashoffset: 430; animation: phi-chart-reveal 5.8s cubic-bezier(.65,0,.35,1) infinite; }
        @keyframes phi-chart-reveal { 0%, 8% { stroke-dashoffset: 430; } 52%, 84% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: -430; } }
        .phi-flow-forward { animation: phi-dash-forward 2.8s linear infinite; }
        .phi-flow-return { animation: phi-dash-return 3.6s linear infinite; }
        @keyframes phi-dash-forward { to { stroke-dashoffset: -56; } }
        @keyframes phi-dash-return { to { stroke-dashoffset: 50; } }
        .phi-ai-packet { animation: phi-ai-send 4.8s ease-in-out infinite; }
        .phi-ai-return-packet { animation: phi-ai-return 4.8s ease-in-out infinite; }
        @keyframes phi-ai-send { 0%,8% { transform: translateX(0); opacity: 0; } 15% { opacity: 1; } 48% { transform: translateX(245px); opacity: 1; } 56%,100% { transform: translateX(245px); opacity: 0; } }
        @keyframes phi-ai-return { 0%,55% { transform: translateX(0); opacity: 0; } 62% { opacity: 1; } 92% { transform: translateX(-245px); opacity: 1; } 100% { transform: translateX(-245px); opacity: 0; } }
        .phi-ai-core { transform-origin: 220px 77px; animation: phi-ai-core 4.8s ease-in-out infinite; }
        @keyframes phi-ai-core { 0%,40%,100% { transform: scale(.9); opacity: .35; } 50%,75% { transform: scale(1.08); opacity: .95; } }
        .phi-cycle-arc { transform-origin: 220px 84px; animation: phi-cycle-spin 8s linear infinite; }
        @keyframes phi-cycle-spin { to { transform: rotate(360deg); } }
        .phi-hub-ring { transform-origin: 190px 85px; animation: phi-hub-rotate 16s linear infinite; }
        @keyframes phi-hub-rotate { to { transform: rotate(360deg); } }
        .phi-network-flow { animation: phi-network-dash 3.5s linear infinite; }
        @keyframes phi-network-dash { to { stroke-dashoffset: -72; } }
        @media (prefers-reduced-motion: reduce) {
          .phi-chart-line, .phi-flow-forward, .phi-flow-return, .phi-ai-packet, .phi-ai-return-packet, .phi-ai-core, .phi-cycle-arc, .phi-hub-ring, .phi-network-flow { animation: none !important; }
          .phi-chart-line { stroke-dashoffset: 0; }
        }
      `}</style>

      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-brand-cyan/[.07] blur-[140px]" />

      {/* ---------- desktop: pinned 2×2 entrance ---------- */}
      <div className="phi-pin relative mt-4 hidden min-h-screen items-center overflow-hidden sm:flex">
        {/* giant centered background words */}
        <div
          aria-hidden
          className="phi-bgword pointer-events-none absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 select-none flex-col items-center font-heading font-extrabold leading-[0.95] tracking-tight text-white/[.05]"
        >
          <span className="text-[10vw]">OUR</span>
          <span className="text-[8.5vw]">PHILOSOPHY</span>
        </div>

        {/* stage */}
        <div className="phi-stage relative mx-auto h-[80vh] min-h-[560px] w-full max-w-6xl px-4 sm:px-6">
          {PRINCIPLES.map((p, i) => {
            const pos = ["left-4 sm:left-6 top-0", "right-4 sm:right-6 top-0", "left-4 sm:left-6 bottom-0", "right-4 sm:right-6 bottom-0"][i];
            return (
              <div key={p.title} className={`phi-panel absolute ${pos} w-[calc(50%-1.5rem)] sm:w-[calc(50%-2.25rem)] h-[calc(50%-0.75rem)] will-change-transform`}>
                <PrincipleCard p={p} i={i} className="h-full" />
              </div>
            );
          })}
        </div>

        {/* Progress indicators sit below the cards, never on top of them. */}
        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-2">
          {PRINCIPLES.map((_, i) => (
            <span
              key={i}
              ref={(el) => { dotsRef.current[i] = el; }}
              className={`h-1.5 w-8 rounded-full transition-all duration-500 ${i === 0 ? "bg-brand-cyan shadow-[0_0_12px_#00ffff]" : "bg-white/15"}`}
            />
          ))}
        </div>
      </div>

      {/* ---------- mobile: simple stacked cards ---------- */}
      <div className="mt-10 grid gap-4 px-4 sm:hidden">
        {PRINCIPLES.map((p, i) => (
          <Reveal key={p.title}>
            <PrincipleCard p={p} i={i} />
          </Reveal>
        ))}
      </div>

      {/* ---------- only the button ---------- */}
      <Reveal className="flex justify-center px-4 pb-20 pt-8 sm:px-6 sm:pb-28 sm:pt-14">
        <DiscoveryButton className="btn-amber inline-flex items-center justify-center px-6 py-3.5 text-sm sm:px-10 sm:py-5 sm:text-lg">
          <CalendarClock size={20} className="mr-2" /> Book a Free Discovery Call
        </DiscoveryButton>
      </Reveal>
    </section>
  );
}