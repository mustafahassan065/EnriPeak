"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import SectionHeading from "@/components/ui/SectionHeading";
import { Rocket, Users, ShieldCheck, Zap, type LucideIcon } from "lucide-react";

const STATS: { value: number; suffix: string; label: string; icon: LucideIcon }[] = [
  { value: 30, suffix: "+", label: "Projects Delivered", icon: Rocket },
  { value: 15, suffix: "+", label: "Happy Clients", icon: Users },
  { value: 100, suffix: "%", label: "On-Time Delivery", icon: ShieldCheck },
  { value: 24, suffix: "h", label: "Avg. Response Time", icon: Zap },
];

function ClientPartnershipSketch() {
  return (
    <div className="about-sketch relative mx-auto w-full max-w-[620px]" aria-label="Illustration: a client shares an idea, EnriPeak plans, builds and delivers results together">
      <svg viewBox="0 0 620 500" role="img" className="h-auto w-full overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* ... (All internal SVG paths and defs from original file) ... */}
        {/* Keeping SVG content EXACTLY the same as provided, as it is already responsive */}
        <defs>
          <filter id="pencilTexture"><feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="2" seed="8"/><feDisplacementMap in="SourceGraphic" scale=".65"/></filter>
          <linearGradient id="sketchGlow" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#39E7EF" stopOpacity=".28"/><stop offset="1" stopColor="#F5B84B" stopOpacity=".08"/></linearGradient>
        </defs>
        <ellipse cx="310" cy="338" rx="250" ry="22" fill="url(#sketchGlow)" />
        <circle cx="310" cy="240" r="228" stroke="rgba(57,231,239,.10)" strokeDasharray="3 10" className="sketch-cycle" />

        <g className="sketch-draw" stroke="#D9E2E6" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" filter="url(#pencilTexture)">
          <path d="M28 328 H592" opacity=".5"/>
          <circle cx="95" cy="200" r="26"/>
          <path d="M69 197 C69 176 82 168 96 168 C112 168 122 180 121 197 C110 187 84 185 69 197Z"/>
          <path d="M86 203 H87 M104 203 H105" strokeWidth="3.2"/>
          <path d="M86 212 Q95 219 105 212"/>
          <path d="M88 226 V240 M102 226 V240"/>
          <path d="M45 328 C47 285 66 242 95 242 C124 242 143 285 145 328"/>
          <path d="M80 244 L95 262 L110 244"/>
          <circle cx="525" cy="200" r="26"/>
          <path d="M499 198 C499 178 512 172 526 172 C540 172 551 182 551 198 C541 190 515 188 499 198Z"/>
          <path d="M497 202 C495 172 513 160 526 160 C541 160 556 172 553 202"/>
          <rect x="491" y="196" width="9" height="17" rx="3"/>
          <rect x="550" y="196" width="9" height="17" rx="3"/>
          <path d="M496 214 C497 224 506 228 516 226"/>
          <path d="M516 203 H517 M534 203 H535" strokeWidth="3.2"/>
          <path d="M516 213 Q525 220 535 213"/>
          <path d="M518 226 V240 M532 226 V240"/>
          <path d="M475 328 C477 285 496 242 525 242 C554 242 573 285 575 328"/>
          <path d="M510 244 L525 262 L540 244"/>
        </g>
        <text x="95" y="350" textAnchor="middle" className="ab-who">YOUR BUSINESS</text>
        <text x="525" y="350" textAnchor="middle" className="ab-who">ENRIPEAK TEAM</text>

        <g className="ab-arm-l" stroke="#D9E2E6" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M140 290 C158 292 174 284 192 270"/><circle cx="195" cy="267" r="6" fill="#10191d"/>
        </g>
        <g className="ab-arm-r" stroke="#D9E2E6" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M480 290 C462 292 446 284 428 270"/><circle cx="425" cy="267" r="6" fill="#10191d"/>
        </g>

        <path d="M152 296 H215" stroke="rgba(57,231,239,.45)" strokeWidth="1.6" strokeDasharray="3 5" className="sketch-flowline"/>
        <path d="M405 296 H468" stroke="rgba(245,184,75,.45)" strokeWidth="1.6" strokeDasharray="3 5" className="sketch-flowline"/>
        <g className="ab-p23">
          <circle cx="152" cy="296" r="3.4" fill="#39E7EF" className="ab-dot-lr"/>
          <circle cx="215" cy="296" r="3.4" fill="#F5B84B" className="ab-dot-rl"/>
          <circle cx="405" cy="296" r="3.4" fill="#F5B84B" className="ab-dot-lr"/>
          <circle cx="468" cy="296" r="3.4" fill="#39E7EF" className="ab-dot-rl"/>
        </g>

        <g strokeLinecap="round" strokeLinejoin="round">
          <rect x="215" y="112" width="190" height="200" rx="12" fill="rgba(8,20,24,.82)" stroke="rgba(255,255,255,.2)" strokeWidth="1.6"/>
          <path d="M215 136 H405" stroke="rgba(255,255,255,.12)" strokeWidth="1.4"/>
          <circle cx="231" cy="124" r="3.5" fill="#F5B84B"/><circle cx="243" cy="124" r="3.5" fill="#39E7EF"/><circle cx="255" cy="124" r="3.5" fill="#fff" opacity=".35"/>
          <text x="270" y="127.5" className="ab-win-title ab-p1">SHARED PROJECT</text>
          <text x="270" y="127.5" className="ab-win-title ab-p2">WIREFRAME · PLAN</text>
          <text x="270" y="127.5" className="ab-win-title ab-p3">BUILDING…</text>
          <text x="270" y="127.5" className="ab-win-title ab-p4 ab-live">● LIVE</text>

          <g className="ab-p1">
            <circle cx="310" cy="205" r="24" stroke="#F5B84B" strokeWidth="2.2" fill="rgba(245,184,75,.12)"/>
            <path d="M300 232 H320 M303 239 H317" stroke="#F5B84B" strokeWidth="2.2"/>
            <path d="M310 168 V160 M283 178 L277 172 M337 178 L343 172 M276 205 H268 M344 205 H352" stroke="#F5B84B" strokeWidth="2"/>
            <path d="M302 205 L308 211 L319 198" stroke="#F5B84B" strokeWidth="2.4"/>
            <text x="310" y="272" textAnchor="middle" className="ab-win-label" fill="#F5B84B">YOUR IDEA</text>
          </g>

          <g className="ab-wire">
            <g className="ab-fillA">
              <rect x="235" y="176" width="150" height="60" rx="6" fill="rgba(57,231,239,.10)" stroke="none"/>
              <rect x="330" y="186" width="46" height="40" rx="4" fill="rgba(245,184,75,.24)" stroke="none"/>
              <rect x="247" y="222" width="38" height="10" rx="3" fill="rgba(57,231,239,.7)" stroke="none"/>
            </g>
            <g className="ab-fillB">
              <rect x="235" y="246" width="46" height="42" rx="4" fill="rgba(57,231,239,.12)" stroke="none"/>
              <rect x="288" y="246" width="46" height="42" rx="4" fill="rgba(57,231,239,.12)" stroke="none"/>
              <rect x="341" y="246" width="46" height="42" rx="4" fill="rgba(57,231,239,.12)" stroke="none"/>
              <rect x="239" y="252" width="38" height="14" rx="3" fill="rgba(57,231,239,.28)" stroke="none"/>
              <rect x="292" y="252" width="38" height="14" rx="3" fill="rgba(245,184,75,.3)" stroke="none"/>
              <rect x="345" y="252" width="38" height="14" rx="3" fill="rgba(57,231,239,.28)" stroke="none"/>
            </g>
            <g stroke="#D9E2E6" strokeWidth="1.8">
              <path pathLength="1" className="ab-draw1" d="M235 160 H262 M330 160 H345 M352 160 H367 M374 160 H386"/>
              <rect pathLength="1" className="ab-draw1" x="235" y="150" width="14" height="12" rx="3"/>
              <rect pathLength="1" className="ab-draw2" x="235" y="176" width="150" height="60" rx="6"/>
              <path pathLength="1" className="ab-draw2" d="M247 192 H318 M247 203 H298 M247 214 H290"/>
              <rect pathLength="1" className="ab-draw2" x="247" y="222" width="38" height="10" rx="3"/>
              <rect pathLength="1" className="ab-draw2" x="330" y="186" width="46" height="40" rx="4"/>
              <path pathLength="1" className="ab-draw2" d="M336 220 L349 203 L358 212 L367 198 L372 220"/>
              <rect pathLength="1" className="ab-draw3" x="235" y="246" width="46" height="42" rx="4"/>
              <rect pathLength="1" className="ab-draw3" x="288" y="246" width="46" height="42" rx="4"/>
              <rect pathLength="1" className="ab-draw3" x="341" y="246" width="46" height="42" rx="4"/>
              <path pathLength="1" className="ab-draw3" d="M239 277 H271 M239 283 H262 M292 277 H324 M292 283 H315 M345 277 H377 M345 283 H368"/>
            </g>
            <circle cx="366" cy="194" r="4" fill="#F5B84B" stroke="none"/>
            <path d="M235 300 H387" stroke="rgba(255,255,255,.14)" strokeWidth="4"/>
            <path pathLength="1" className="ab-prog" d="M235 300 H387" stroke="#39E7EF" strokeWidth="4"/>
          </g>

          <g className="ab-p4 ab-grow">
            <rect x="296" y="228" width="96" height="62" rx="7" fill="rgba(8,20,24,.97)" stroke="rgba(57,231,239,.65)" strokeWidth="1.6"/>
            <text x="305" y="242" className="ab-win-label" fill="#39E7EF">GROWTH</text>
            <rect className="ab-bar ab-bar1" x="306" y="270" width="12" height="12" rx="2" fill="#39E7EF" stroke="none"/>
            <rect className="ab-bar ab-bar2" x="324" y="262" width="12" height="20" rx="2" fill="#39E7EF" stroke="none"/>
            <rect className="ab-bar ab-bar3" x="342" y="254" width="12" height="28" rx="2" fill="#39E7EF" stroke="none"/>
            <rect className="ab-bar ab-bar4" x="360" y="246" width="12" height="36" rx="2" fill="#F5B84B" stroke="none"/>
          </g>
        </g>

        <g transform="translate(150 128)"><g className="ab-fly ab-idea">
          <circle r="8" fill="rgba(245,184,75,.25)" stroke="#F5B84B" strokeWidth="1.8"/><path d="M-3 11 H3" stroke="#F5B84B" strokeWidth="1.8"/>
        </g></g>
        <g transform="translate(436 262)"><g className="ab-fly ab-token">
          <text className="ab-token-text" x="-12" y="4">&lt;/&gt;</text>
        </g></g>
        <g transform="translate(204 266)"><g className="ab-fly ab-fb">
          <circle r="5" fill="#F5B84B"/><circle r="9" stroke="rgba(245,184,75,.45)" strokeWidth="1.4"/>
        </g></g>
        <g transform="translate(215 296)"><g className="ab-fly ab-value">
          <circle r="6.5" fill="#39E7EF"/><path d="M0 3 V-3 M-3 0 L0 -3.4 L3 0" stroke="#08141a" strokeWidth="1.6"/>
        </g></g>

        <g className="ab-bubbles">
          <g className="ab-p1"><path d="M78 148 L86 162 L98 148Z" className="ab-tail"/><rect x="30" y="112" width="130" height="36" rx="10" className="ab-bub"/><text x="95" y="134" textAnchor="middle" className="ab-say">I have an idea…</text></g>
          <g className="ab-p2"><path d="M78 148 L86 162 L98 148Z" className="ab-tail"/><rect x="30" y="112" width="130" height="36" rx="10" className="ab-bub"/><text x="95" y="134" textAnchor="middle" className="ab-say">Our goals &amp; users</text></g>
          <g className="ab-p3"><path d="M78 148 L86 162 L98 148Z" className="ab-tail"/><rect x="30" y="112" width="130" height="36" rx="10" className="ab-bub"/><text x="95" y="134" textAnchor="middle" className="ab-say">Here’s my feedback</text></g>
          <g className="ab-p4"><path d="M78 148 L86 162 L98 148Z" className="ab-tail"/><rect x="30" y="112" width="130" height="36" rx="10" className="ab-bub ab-bub-amber"/><text x="95" y="134" textAnchor="middle" className="ab-say">Love the result!</text></g>

          <g className="ab-p1"><path d="M512 148 L520 162 L534 148Z" className="ab-tail"/><rect x="460" y="112" width="130" height="36" rx="10" className="ab-bub"/><text x="525" y="134" textAnchor="middle" className="ab-say">Tell us more…</text></g>
          <g className="ab-p2"><path d="M512 148 L520 162 L534 148Z" className="ab-tail"/><rect x="460" y="112" width="130" height="36" rx="10" className="ab-bub"/><text x="525" y="134" textAnchor="middle" className="ab-say">Here’s the plan</text></g>
          <g className="ab-p3"><path d="M512 148 L520 162 L534 148Z" className="ab-tail"/><rect x="460" y="112" width="130" height="36" rx="10" className="ab-bub"/><text x="525" y="134" textAnchor="middle" className="ab-say">Building it now</text></g>
          <g className="ab-p4"><path d="M512 148 L520 162 L534 148Z" className="ab-tail"/><rect x="460" y="112" width="130" height="36" rx="10" className="ab-bub ab-bub-amber"/><text x="525" y="134" textAnchor="middle" className="ab-say">Live &amp; growing!</text></g>
        </g>

        <g textAnchor="middle">
          <text x="310" y="378" className="ab-cap ab-c1"><tspan fill="#39E7EF">01</tspan>  YOU SHARE THE IDEA</text>
          <text x="310" y="378" className="ab-cap ab-c2"><tspan fill="#39E7EF">02</tspan>  WE PLAN IT TOGETHER</text>
          <text x="310" y="378" className="ab-cap ab-c3"><tspan fill="#39E7EF">03</tspan>  WE BUILD · YOU REVIEW</text>
          <text x="310" y="378" className="ab-cap ab-c4"><tspan fill="#39E7EF">04</tspan>  RESULTS YOU CAN SEE</text>
        </g>
        <circle cx="280" cy="396" r="3.5" fill="#39E7EF" className="ab-dot ab-dot1"/>
        <circle cx="300" cy="396" r="3.5" fill="#39E7EF" className="ab-dot ab-dot2"/>
        <circle cx="320" cy="396" r="3.5" fill="#39E7EF" className="ab-dot ab-dot3"/>
        <circle cx="340" cy="396" r="3.5" fill="#F5B84B" className="ab-dot ab-dot4"/>
      </svg>
      <div className="absolute bottom-[8%] left-[4%] rounded-xl border border-white/10 bg-[#10191d]/90 px-4 py-3 shadow-xl backdrop-blur hidden sm:block">
        <span className="block text-[10px] uppercase tracking-[.2em] text-brand-cyan">Shared direction</span>
        <span className="mt-1 block font-heading text-sm font-semibold text-white">One team. One clear goal.</span>
      </div>
      <div className="absolute bottom-[8%] right-[4%] rounded-xl border border-white/10 bg-[#10191d]/90 px-4 py-3 shadow-xl backdrop-blur hidden sm:block">
        <span className="block text-[10px] uppercase tracking-[.2em] text-brand-amber">Built on trust</span>
        <span className="mt-1 block font-heading text-sm font-semibold text-white">Progress you can see.</span>
      </div>
    </div>
  );
}

export default function AboutIntro() {
  const root = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.fromTo(".about-copy", { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: .8, stagger: .12, ease: "power3.out", scrollTrigger: { trigger: root.current, start: "top 72%" } });
    gsap.fromTo(".about-sketch", { y: 35, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: root.current, start: "top 72%" } });

    const counters = gsap.utils.toArray<HTMLElement>("[data-counter]");
    counters.forEach((el, index) => {
      const target = Number(el.dataset.counter || 0);
      const suffix = el.dataset.suffix || "";
      const counter = { value: 0 };
      el.textContent = `0${suffix}`;
      gsap.to(counter, {
        value: target,
        duration: 2.1,
        delay: 0.18 + index * 0.12,
        ease: "power2.out",
        onUpdate: () => { el.textContent = `${Math.round(counter.value)}${suffix}`; },
        onComplete: () => { el.textContent = `${target}${suffix}`; },
      });
    });
    gsap.fromTo(".stats-rail-fill", { scaleY: 0 }, {
      scaleY: 1, duration: 1.8, delay: 0.2, ease: "power3.inOut",
      transformOrigin: "top center",
    });
  }, { scope: root });

  return (
    <section ref={root} className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 md:pb-32 md:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.95fr_1.05fr] lg:gap-10">
        <div>
          <SectionHeading eyebrow="A little about us" title={<>Built around people. <span className="font-serif font-normal italic text-gradient">Driven by possibility.</span></>} />
          <div className="about-copy mt-8 space-y-5 text-sm leading-7 text-white/65 sm:text-base md:leading-8">
            <p>EnriPeak is a digital solutions partner helping businesses turn ambitious ideas into useful, dependable technology. We bring web development and AI together to create digital experiences, intelligent workflows and products that solve real business problems.</p>
            <p>Founded in <span className="font-semibold text-white">[ADD FOUNDING YEAR]</span>, EnriPeak works with businesses across markets and has collaborated with clients in the <span className="text-white">UK, USA, Australia, Canada, UAE, India and Pakistan</span>.</p>
            <p>Our work spans modern websites and web applications, AI agents, workflow automation and integrations. We approach every engagement as a partnership: understand the business first, communicate clearly throughout, and build around outcomes that matter.</p>
          </div>
          <div className="about-copy relative mt-8 grid grid-cols-2 gap-3 border-t border-white/10 pt-6 pl-4 sm:grid-cols-2 xl:grid-cols-4">
            <span className="stats-rail-fill pointer-events-none absolute bottom-0 left-0 top-6 w-[2px] origin-top rounded-full bg-gradient-to-b from-brand-cyan via-brand-cyan to-brand-amber shadow-[0_0_12px_rgba(57,231,239,.45)]" aria-hidden="true" />
            {STATS.map(({ value, suffix, label, icon: Icon }) => (
              <div key={label} className="group rounded-xl border border-white/[.07] bg-white/[.025] p-4 transition-colors duration-300 hover:border-brand-cyan/30">
                <div className="flex items-center justify-between gap-2"><p className="font-heading text-xl font-bold tabular-nums text-white sm:text-2xl" data-counter={value} data-suffix={suffix}>0{suffix}</p><Icon className="h-4 w-4 text-brand-cyan/70 transition-transform duration-300 group-hover:-translate-y-1" /></div>
                <p className="mt-2 text-[10px] leading-4 text-white/45 sm:text-[11px] sm:leading-5">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-10 rounded-full bg-brand-cyan/10 blur-[90px]" />
          <ClientPartnershipSketch />
        </div>
      </div>
      <div className="mx-auto mt-16 grid max-w-7xl gap-8 border-t border-white/10 pt-10 md:mt-20 md:grid-cols-2 md:gap-12">
        <div className="about-copy"><p className="text-xs font-semibold uppercase tracking-[.22em] text-brand-cyan">Our vision</p><h3 className="mt-3 font-heading text-xl font-bold text-white md:text-3xl">Make powerful technology feel within reach.</h3><p className="mt-4 max-w-xl text-sm leading-7 text-white/60 md:text-base">We envision a world where businesses of every size can use thoughtful digital products and practical AI to work smarter, serve people better and move forward with confidence.</p></div>
        <div className="about-copy"><p className="text-xs font-semibold uppercase tracking-[.22em] text-brand-amber">Our mission</p><h3 className="mt-3 font-heading text-xl font-bold text-white md:text-3xl">Turn complexity into meaningful progress.</h3><p className="mt-4 max-w-xl text-sm leading-7 text-white/60 md:text-base">Our mission is to listen closely, bring the right people and technology together, and deliver reliable solutions with transparency, craft and a genuine commitment to our clients’ goals.</p></div>
      </div>
      <style jsx global>{`
        .sketch-draw { stroke-dasharray: 1200; stroke-dashoffset: 0; animation: pencilReveal 3.8s ease-in-out both; }
        .sketch-cycle { animation: cycleFlow 22s linear infinite; }
        .sketch-flowline { animation: connectionFlow 1.8s linear infinite; }
        .stats-rail-fill { animation: statsRailGlow 2.8s ease-in-out 2s infinite; }

        .ab-who { fill: rgba(230,240,242,.5); stroke: none; font-size: 10px; font-weight: 700; letter-spacing: .18em; }
        .ab-win-title { fill: rgba(230,240,242,.55); stroke: none; font-size: 9px; font-weight: 700; letter-spacing: .16em; }
        .ab-live { fill: #39E7EF; }
        .ab-win-label { stroke: none; font-size: 11px; font-weight: 800; letter-spacing: .14em; }
        .ab-bub { fill: rgba(16,25,29,.96); stroke: rgba(57,231,239,.55); stroke-width: 1.6; }
        .ab-bub-amber { stroke: rgba(245,184,75,.7); }
        .ab-tail { fill: rgba(16,25,29,.96); stroke: rgba(57,231,239,.55); stroke-width: 1.6; stroke-linejoin: round; }
        .ab-say { fill: #E9F2F4; stroke: none; font-size: 11px; font-weight: 600; }
        .ab-cap { fill: rgba(240,247,248,.82); stroke: none; font-size: 12px; font-weight: 700; letter-spacing: .16em; }
        .ab-token-text { fill: #39E7EF; stroke: none; font-size: 12px; font-weight: 800; }
        .ab-bar { transform-box: fill-box; transform-origin: 50% 100%; }
        .ab-grow { transform-box: fill-box; transform-origin: center; }
        .ab-arm-l { transform-box: fill-box; transform-origin: 0% 100%; }
        .ab-arm-r { transform-box: fill-box; transform-origin: 100% 100%; }
        .ab-draw1, .ab-draw2, .ab-draw3, .ab-prog { stroke-dasharray: 1; stroke-dashoffset: 0; }
        .ab-p1, .ab-p2, .ab-p3, .ab-c1, .ab-c2, .ab-c3 { opacity: 0; }
        .ab-fly, .ab-p23 { opacity: 0; }

        .ab-p1 { animation: abP1 12s ease-in-out infinite; }
        .ab-p2 { animation: abP2 12s ease-in-out infinite; }
        .ab-p3 { animation: abP3 12s ease-in-out infinite; }
        .ab-p4 { animation: abP4 12s ease-in-out infinite; }
        .ab-grow.ab-p4 { animation: abGrow 12s ease-in-out infinite; }
        .ab-wire { animation: abWire 12s ease-in-out infinite; }
        .ab-p23 { animation: abP23 12s ease-in-out infinite; }
        .ab-draw1 { animation: abDraw1 12s ease-in-out infinite; }
        .ab-draw2 { animation: abDraw2 12s ease-in-out infinite; }
        .ab-draw3 { animation: abDraw3 12s ease-in-out infinite; }
        .ab-fillA { animation: abFillA 12s ease-in-out infinite; }
        .ab-fillB { animation: abFillB 12s ease-in-out infinite; }
        .ab-prog { animation: abProg 12s ease-in-out infinite; }
        .ab-idea { animation: abIdea 12s ease-in-out infinite; }
        .ab-token { animation: abToken 12s ease-in-out infinite; }
        .ab-fb { animation: abFb 12s ease-in-out infinite; }
        .ab-value { animation: abValue 12s ease-in-out infinite; }
        .ab-dot-lr { animation: abDotLR 1.7s linear infinite; }
        .ab-dot-rl { animation: abDotRL 1.7s linear infinite .85s; }
        .ab-bar1 { animation: abBar1 12s ease-out infinite; }
        .ab-bar2 { animation: abBar2 12s ease-out infinite; }
        .ab-bar3 { animation: abBar3 12s ease-out infinite; }
        .ab-bar4 { animation: abBar4 12s ease-out infinite; }
        .ab-c1 { animation: abC1 12s ease-in-out infinite; }
        .ab-c2 { animation: abC2 12s ease-in-out infinite; }
        .ab-c3 { animation: abC3 12s ease-in-out infinite; }
        .ab-c4 { animation: abC4 12s ease-in-out infinite; }
        .ab-dot1 { animation: abDot1 12s linear infinite; }
        .ab-dot2 { animation: abDot2 12s linear infinite; }
        .ab-dot3 { animation: abDot3 12s linear infinite; }
        .ab-dot4 { animation: abDot4 12s linear infinite; }
        .ab-arm-l { animation: abArmL 12s ease-in-out infinite; }
        .ab-arm-r { animation: abArmR 12s ease-in-out infinite; }

        @keyframes cycleFlow { to { stroke-dashoffset: -260; } }
        @keyframes connectionFlow { to { stroke-dashoffset: -48; } }
        @keyframes statsRailGlow { 0%,100% { filter: drop-shadow(0 0 2px rgba(57,231,239,.25)); } 50% { filter: drop-shadow(0 0 8px rgba(57,231,239,.9)); } }
        @keyframes pencilReveal { 0% { stroke-dashoffset: 1200; opacity: .3; } 100% { stroke-dashoffset: 0; opacity: 1; } }
        @keyframes abP1 {
          0% { opacity:0;transform:translateY(6px); }
          0.5% { opacity:0;transform:translateY(6px); }
          2% { opacity:1;transform:none; }
          22% { opacity:1;transform:none; }
          25% { opacity:0;transform:translateY(-4px); }
          100% { opacity:0;transform:translateY(-4px); }
        }
        @keyframes abP2 {
          0% { opacity:0;transform:translateY(6px); }
          24.5% { opacity:0;transform:translateY(6px); }
          27% { opacity:1;transform:none; }
          47% { opacity:1;transform:none; }
          50% { opacity:0;transform:translateY(-4px); }
          100% { opacity:0;transform:translateY(-4px); }
        }
        @keyframes abP3 {
          0% { opacity:0;transform:translateY(6px); }
          49.5% { opacity:0;transform:translateY(6px); }
          52% { opacity:1;transform:none; }
          72% { opacity:1;transform:none; }
          75% { opacity:0;transform:translateY(-4px); }
          100% { opacity:0;transform:translateY(-4px); }
        }
        @keyframes abP4 {
          0% { opacity:0;transform:translateY(6px); }
          74.5% { opacity:0;transform:translateY(6px); }
          77% { opacity:1;transform:none; }
          94% { opacity:1;transform:none; }
          98% { opacity:0;transform:translateY(-4px); }
          100% { opacity:0;transform:translateY(-4px); }
        }
        @keyframes abWire {
          0% { opacity:0; }
          24.5% { opacity:0; }
          27% { opacity:1; }
          94% { opacity:1; }
          98% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes abP23 {
          0% { opacity:0; }
          25% { opacity:0; }
          27% { opacity:1; }
          72% { opacity:1; }
          75% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes abDraw1 {
          0% { stroke-dashoffset:1 }
          26% { stroke-dashoffset:1 }
          33% { stroke-dashoffset:0 }
          100% { stroke-dashoffset:0 }
        }
        @keyframes abDraw2 {
          0% { stroke-dashoffset:1 }
          30% { stroke-dashoffset:1 }
          38% { stroke-dashoffset:0 }
          100% { stroke-dashoffset:0 }
        }
        @keyframes abDraw3 {
          0% { stroke-dashoffset:1 }
          35% { stroke-dashoffset:1 }
          43% { stroke-dashoffset:0 }
          100% { stroke-dashoffset:0 }
        }
        @keyframes abFillA {
          0% { opacity:0 }
          50% { opacity:0 }
          57% { opacity:1 }
          100% { opacity:1 }
        }
        @keyframes abFillB {
          0% { opacity:0 }
          57% { opacity:0 }
          64% { opacity:1 }
          100% { opacity:1 }
        }
        @keyframes abProg {
          0% { stroke-dashoffset:1 }
          52% { stroke-dashoffset:1 }
          74% { stroke-dashoffset:0 }
          100% { stroke-dashoffset:0 }
        }
        @keyframes abIdea {
          0% { opacity:0;transform:translate(0,0) scale(.5) }
          2% { opacity:0;transform:translate(0,0) scale(.5) }
          5% { opacity:1;transform:translate(0,0) scale(1) }
          15% { opacity:1;transform:translate(160px,88px) scale(1) }
          17% { opacity:0;transform:translate(160px,88px) scale(.4) }
          100% { opacity:0;transform:translate(160px,88px) scale(.4) }
        }
        @keyframes abToken {
          0% { opacity:0;transform:none }
          52% { opacity:0;transform:none }
          54% { opacity:1;transform:none }
          60% { opacity:1;transform:translate(-96px,-26px) }
          61% { opacity:0;transform:translate(-96px,-26px) }
          62% { opacity:0;transform:none }
          63% { opacity:1;transform:none }
          69% { opacity:1;transform:translate(-96px,-26px) }
          70% { opacity:0;transform:translate(-96px,-26px) }
          100% { opacity:0;transform:translate(-96px,-26px) }
        }
        @keyframes abFb {
          0% { opacity:0;transform:none }
          53% { opacity:0;transform:none }
          55% { opacity:1;transform:none }
          60% { opacity:1;transform:translate(62px,-6px) }
          61% { opacity:0;transform:translate(62px,-6px) }
          64% { opacity:0;transform:none }
          65% { opacity:1;transform:none }
          70% { opacity:1;transform:translate(62px,-6px) }
          71% { opacity:0;transform:translate(62px,-6px) }
          100% { opacity:0;transform:translate(62px,-6px) }
        }
        @keyframes abValue {
          0% { opacity:0;transform:none }
          78% { opacity:0;transform:none }
          80% { opacity:1;transform:none }
          89% { opacity:1;transform:translate(-110px,0) }
          91% { opacity:0;transform:translate(-110px,0) }
          100% { opacity:0;transform:translate(-110px,0) }
        }
        @keyframes abDotLR {
          0% { opacity:0;transform:translateX(0) }
          15% { opacity:1 }
          85% { opacity:1;transform:translateX(63px) }
          100% { opacity:0;transform:translateX(63px) }
        }
        @keyframes abDotRL {
          0% { opacity:0;transform:translateX(0) }
          15% { opacity:1 }
          85% { opacity:1;transform:translateX(-63px) }
          100% { opacity:0;transform:translateX(-63px) }
        }
        @keyframes abGrow {
          0% { opacity:0;transform:scale(.85) }
          78% { opacity:0;transform:scale(.85) }
          82% { opacity:1;transform:scale(1) }
          94% { opacity:1;transform:scale(1) }
          98% { opacity:0;transform:scale(1) }
          100% { opacity:0 }
        }
        @keyframes abBar1 {
          0% { transform:scaleY(0) }
          81% { transform:scaleY(0) }
          88% { transform:scaleY(1) }
          100% { transform:scaleY(1) }
        }
        @keyframes abBar2 {
          0% { transform:scaleY(0) }
          83% { transform:scaleY(0) }
          90% { transform:scaleY(1) }
          100% { transform:scaleY(1) }
        }
        @keyframes abBar3 {
          0% { transform:scaleY(0) }
          85% { transform:scaleY(0) }
          92% { transform:scaleY(1) }
          100% { transform:scaleY(1) }
        }
        @keyframes abBar4 {
          0% { transform:scaleY(0) }
          87% { transform:scaleY(0) }
          94% { transform:scaleY(1) }
          100% { transform:scaleY(1) }
        }
        @keyframes abC1 {
          0% { opacity:0;transform:translateY(6px); }
          0.5% { opacity:0;transform:translateY(6px); }
          2% { opacity:1;transform:none; }
          22% { opacity:1;transform:none; }
          25% { opacity:0;transform:translateY(-4px); }
          100% { opacity:0;transform:translateY(-4px); }
        }
        @keyframes abC2 {
          0% { opacity:0;transform:translateY(6px); }
          24.5% { opacity:0;transform:translateY(6px); }
          27% { opacity:1;transform:none; }
          47% { opacity:1;transform:none; }
          50% { opacity:0;transform:translateY(-4px); }
          100% { opacity:0;transform:translateY(-4px); }
        }
        @keyframes abC3 {
          0% { opacity:0;transform:translateY(6px); }
          49.5% { opacity:0;transform:translateY(6px); }
          52% { opacity:1;transform:none; }
          72% { opacity:1;transform:none; }
          75% { opacity:0;transform:translateY(-4px); }
          100% { opacity:0;transform:translateY(-4px); }
        }
        @keyframes abC4 {
          0% { opacity:0;transform:translateY(6px); }
          74.5% { opacity:0;transform:translateY(6px); }
          77% { opacity:1;transform:none; }
          94% { opacity:1;transform:none; }
          98% { opacity:0;transform:translateY(-4px); }
          100% { opacity:0;transform:translateY(-4px); }
        }
        @keyframes abDot1 {
          0% { opacity:1 }
          24.9% { opacity:1 }
          25% { opacity:.25 }
          100% { opacity:.25 }
        }
        @keyframes abDot2 {
          0% { opacity:.25 }
          24.9% { opacity:.25 }
          25% { opacity:1 }
          49.9% { opacity:1 }
          50% { opacity:.25 }
          100% { opacity:.25 }
        }
        @keyframes abDot3 {
          0% { opacity:.25 }
          49.9% { opacity:.25 }
          50% { opacity:1 }
          74.9% { opacity:1 }
          75% { opacity:.25 }
          100% { opacity:.25 }
        }
        @keyframes abDot4 {
          0% { opacity:.25 }
          74.9% { opacity:.25 }
          75% { opacity:1 }
          99.9% { opacity:1 }
        }
        @keyframes abArmL {
          0% { transform:rotate(0) }
          27% { transform:rotate(0) }
          33% { transform:rotate(-13deg) }
          46% { transform:rotate(-13deg) }
          54% { transform:rotate(-4deg) }
          72% { transform:rotate(-4deg) }
          80% { transform:rotate(-12deg) }
          90% { transform:rotate(-12deg) }
          100% { transform:rotate(0) }
        }
        @keyframes abArmR {
          0% { transform:rotate(0) }
          8% { transform:rotate(12deg) }
          18% { transform:rotate(12deg) }
          27% { transform:rotate(0) }
          38% { transform:rotate(12deg) }
          46% { transform:rotate(12deg) }
          54% { transform:rotate(0) }
          60% { transform:rotate(12deg) }
          72% { transform:rotate(12deg) }
          100% { transform:rotate(0) }
        }
        @media (prefers-reduced-motion: reduce) {
          .about-sketch *, .stats-rail-fill { animation: none !important; }
          .ab-p1, .ab-p2, .ab-p3, .ab-c1, .ab-c2, .ab-c3, .ab-fly, .ab-p23 { opacity: 0; }
          .ab-dot { opacity: .5; }
          .ab-dot4 { opacity: 1; }
        }
      `}</style>
    </section>
  );
}