"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import SectionHeading from "@/components/ui/SectionHeading";

const REASONS = [
  {
    n: "01",
    tag: "Business before technology",
    title: "We start with the problem, not the pitch.",
    body: "Before recommending a website, an AI agent or an automation, we take time to understand how your business works, where friction exists and what a better result would look like. The solution is shaped around your priorities—not a pre-packed service list.",
    kind: "compass",
  },
  {
    n: "02",
    tag: "Web + AI, working together",
    title: "One partner for connected digital solutions.",
    body: "Your website, applications and AI workflows should support one another. We bring web engineering and practical AI capabilities together, helping you create a more joined-up experience instead of managing disconnected pieces with different providers.",
    kind: "orbit",
  },
  {
    n: "03",
    tag: "Clear collaboration",
    title: "You stay involved, informed and in control.",
    body: "We make progress visible through clear milestones, regular communication and working reviews. You can share feedback early, understand what is being built and make informed decisions without being buried in technical jargon.",
    kind: "conversation",
  },
  {
    n: "04",
    tag: "Built for what comes next",
    title: "We build to evolve—not just to go live.",
    body: "A launch is a starting point. We care about maintainability, performance and room to improve, so your digital product can adapt as your users, operations and ambitions change. We focus on useful foundations rather than short-lived effects.",
    kind: "growth",
  },
];

function Sketch({ kind }: { kind: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg
      viewBox="0 0 480 320"
      className={`why-art why-art-${kind} h-56 w-full max-w-[380px]`}
      aria-hidden="true"
    >
      {/* 01 — business first: find the friction in the real workflow, then shape the fix */}
      {kind === "compass" && (
        <g {...common}>
          <rect x="30" y="34" width="420" height="242" rx="16" className="why-panel" />
          <path d="M30 74 H450" className="why-divider" />
          <circle cx="54" cy="54" r="4" fill="#F5B84B" stroke="none" />
          <circle cx="70" cy="54" r="4" fill="#39E7EF" stroke="none" />
          <circle cx="86" cy="54" r="4" fill="white" opacity=".35" stroke="none" />
          <text x="108" y="58" className="why-micro">YOUR BUSINESS, UNDER THE LENS</text>

          {/* the way the business really works */}
          <rect x="56" y="98" width="88" height="62" rx="9" className="why-soft-box" />
          <rect x="196" y="98" width="88" height="62" rx="9" className="why-soft-box" />
          <rect x="336" y="98" width="88" height="62" rx="9" className="why-soft-box" />
          <circle cx="100" cy="116" r="5.5" stroke="#39E7EF" />
          <path d="M90 131 C90 121 110 121 110 131" stroke="#39E7EF" />
          <path d="M229 108 H251 Q255 108 255 112 V121 Q255 125 251 125 H243 L236 132 V125 H229 Q225 125 225 121 V112 Q225 108 229 108Z" stroke="#39E7EF" />
          <rect x="366" y="108" width="28" height="22" rx="3" stroke="#39E7EF" />
          <path d="M366 116 H394 M372 123 H382" stroke="#39E7EF" />
          <text x="100" y="150" textAnchor="middle" className="why-lbl">SALES</text>
          <text x="240" y="150" textAnchor="middle" className="why-lbl">SUPPORT</text>
          <text x="380" y="150" textAnchor="middle" className="why-lbl">BILLING</text>

          {/* lens highlights each stage as it is studied */}
          <rect x="56" y="98" width="88" height="62" rx="9" className="why-hl why1-n1" />
          <rect x="196" y="98" width="88" height="62" rx="9" className="why-hl why1-n2" />

          {/* handoff 1: healthy */}
          <path d="M144 129 H196" className="why-flow-cyan" />
          <circle cx="144" cy="129" r="4.5" fill="#39E7EF" stroke="none" className="why1-p why1-p-a" />
          <circle cx="144" cy="129" r="4.5" fill="#39E7EF" stroke="none" className="why1-p why1-p-b" />

          {/* handoff 2: jammed until we reshape it */}
          <g className="why1-jam">
            <path d="M284 129 L294 117 L304 141 L314 117 L324 141 L336 129" stroke="#FF6B6B" strokeWidth="2.2" />
            <circle cx="291" cy="129" r="4.5" fill="#FF6B6B" stroke="none" className="why1-queue" />
            <circle cx="304" cy="129" r="4.5" fill="#FF6B6B" stroke="none" className="why1-queue why1-queue-b" />
            <g className="why1-warn">
              <path d="M298 192 L310 170 L322 192Z" stroke="#FF6B6B" strokeWidth="2" fill="rgba(255,107,107,.12)" />
              <text x="310" y="188" textAnchor="middle" className="why-bang">!</text>
            </g>
            <text x="310" y="210" textAnchor="middle" className="why-lbl why-lbl-red">FRICTION</text>
            <path d="M112 247 H424" className="why-meter-track" />
            <path pathLength="1" d="M112 247 H424" className="why1-meter-red" />
          </g>

          <g className="why1-fix">
            <path d="M284 129 H336" className="why-flow-cyan" strokeWidth="3" />
            <circle cx="284" cy="129" r="4.5" fill="#39E7EF" stroke="none" className="why1-p why1-p-a" />
            <circle cx="284" cy="129" r="4.5" fill="#39E7EF" stroke="none" className="why1-p why1-p-b" />
            <circle cx="424" cy="98" r="10" fill="rgba(57,231,239,.16)" stroke="#39E7EF" />
            <path d="M419 98 L423 102 L430 94" stroke="#39E7EF" strokeWidth="2.2" />
            <path d="M298 190 L310 168 L322 190Z" stroke="none" fill="none" />
            <text x="310" y="210" textAnchor="middle" className="why-lbl why-lbl-cyan">SHAPED FOR YOU</text>
            <path d="M112 247 H424" className="why-meter-track" />
            <path pathLength="1" d="M112 247 H424" className="why1-meter-cyan" />
          </g>
          <text x="56" y="251" className="why-lbl">FLOW</text>

          {/* the magnifier that studies the business */}
          <g className="why1-lens">
            <circle cx="100" cy="129" r="21" className="why-lens-ring" />
            <path d="M115 144 L130 159" stroke="#39E7EF" strokeWidth="3.4" />
          </g>

          <text x="240" y="302" textAnchor="middle" className="why-caption">
            LISTEN  /  FIND THE FRICTION  /  SHAPE THE FIX
          </text>
        </g>
      )}

      {/* 02 — website + AI behave as one product: the user acts on the site, AI answers through it */}
      {kind === "orbit" && (
        <g {...common}>
          <rect x="30" y="34" width="420" height="242" rx="16" className="why-panel" />
          <path d="M30 74 H450" className="why-divider" />
          <text x="54" y="58" className="why-micro">ONE EXPERIENCE · TWO SYSTEMS</text>

          {/* website */}
          <rect x="50" y="92" width="140" height="146" rx="9" className="why-soft-box" />
          <path d="M50 112 H190" className="why-divider" />
          <circle cx="62" cy="102" r="3" fill="#F5B84B" stroke="none" />
          <circle cx="73" cy="102" r="3" fill="#39E7EF" stroke="none" />
          <rect x="62" y="122" width="116" height="22" rx="5" className="why-input" />
          <path pathLength="1" d="M70 133 H150" className="why2-type" />
          <rect x="62" y="152" width="58" height="22" rx="5" className="why2-btn" />
          <rect x="62" y="152" width="58" height="22" rx="5" className="why2-btn-press" />
          <text x="91" y="167" textAnchor="middle" className="why-btn-text">SEND</text>
          <g className="why2-reply">
            <rect x="62" y="184" width="116" height="42" rx="7" className="why-result-box" />
            <circle cx="77" cy="205" r="7" stroke="#F5B84B" />
            <path d="M73.5 205 L76 207.5 L81 202" stroke="#F5B84B" strokeWidth="2" />
            <text x="92" y="203" className="why-lbl">Instant reply</text>
            <path d="M92 214 H166" className="why-muted-line" />
          </g>
          <text x="120" y="258" textAnchor="middle" className="why-lbl">WEBSITE</text>

          {/* AI workflow */}
          <rect x="290" y="92" width="140" height="146" rx="9" className="why-soft-box" />
          <path d="M290 112 H430" className="why-divider" />
          <circle cx="302" cy="102" r="3" fill="#F5B84B" stroke="none" />
          <circle cx="313" cy="102" r="3" fill="#39E7EF" stroke="none" />
          <rect x="302" y="122" width="116" height="26" rx="6" className="why-ai-node" />
          <rect x="302" y="158" width="116" height="26" rx="6" className="why-ai-node" />
          <rect x="302" y="194" width="116" height="26" rx="6" className="why-ai-node" />
          <path d="M360 148 V158 M360 184 V194" className="why-ai-link" />
          <text x="316" y="139" className="why-lbl">Understand</text>
          <text x="316" y="175" className="why-lbl">Respond</text>
          <text x="316" y="211" className="why-lbl">Automate</text>
          <rect x="302" y="122" width="116" height="26" rx="6" className="why-hl why2-n1" />
          <rect x="302" y="158" width="116" height="26" rx="6" className="why-hl why2-n2" />
          <rect x="302" y="194" width="116" height="26" rx="6" className="why-hl why2-n3" />
          <text x="360" y="258" textAnchor="middle" className="why-lbl">AI WORKFLOW</text>

          {/* the shared data layer between them */}
          <path d="M190 158 H290" className="why-flow-cyan" />
          <path d="M290 176 H190" className="why-flow-amber" />
          <circle cx="240" cy="167" r="25" className="why-hub-bg" />
          <circle cx="240" cy="167" r="25" className="why-hub-ring" />
          <circle cx="240" cy="167" r="12" fill="#F5B84B" stroke="none" className="why2-core" />
          <text x="240" y="215" textAnchor="middle" className="why-small">SHARED DATA</text>

          {/* a visitor's message goes out, the AI's answer comes back */}
          <g transform="translate(190 158)"><g className="why2-req">
            <rect x="-7" y="-5" width="14" height="10" rx="2" fill="#0b1a1f" stroke="#39E7EF" strokeWidth="1.6" />
            <path d="M-7 -5 L0 1 L7 -5" stroke="#39E7EF" strokeWidth="1.4" />
          </g></g>
          <g transform="translate(290 176)"><g className="why2-res">
            <rect x="-7" y="-5" width="14" height="10" rx="2" fill="#0b1a1f" stroke="#F5B84B" strokeWidth="1.6" />
            <path d="M-7 -5 L0 1 L7 -5" stroke="#F5B84B" strokeWidth="1.4" />
          </g></g>

          {/* cursor that presses SEND */}
          <g transform="translate(96 161)"><g className="why2-cursor">
            <path d="M0 0 L0 16 L4.5 11.5 L8.5 20 L12 18.4 L8 10 L14 10Z" fill="#fff" stroke="#08141a" strokeWidth="1.2" />
          </g></g>

          <text x="240" y="302" textAnchor="middle" className="why-caption">
            ONE EXPERIENCE  /  CONNECTED SYSTEMS
          </text>
        </g>
      )}

      {/* 03 — you stay in control: milestones, a working review, your feedback, your approval */}
      {kind === "conversation" && (
        <g {...common}>
          <rect x="30" y="34" width="420" height="242" rx="16" className="why-panel" />
          <path d="M30 74 H450" className="why-divider" />
          <text x="54" y="58" className="why-micro">YOUR PROJECT, IN YOUR HANDS</text>

          {/* milestones */}
          <path d="M80 100 H400" className="why-muted-line" />
          <path pathLength="1" d="M80 100 H400" className="why3-prog" />
          <circle cx="80" cy="100" r="9" className="why-node" />
          <circle cx="187" cy="100" r="9" className="why-node" />
          <circle cx="293" cy="100" r="9" className="why-node" />
          <circle cx="400" cy="100" r="9" className="why-node" />
          <path d="M75.5 100 L78.5 103 L84.5 96.5" className="why-tick" />
          <path d="M182.5 100 L185.5 103 L191.5 96.5" className="why-tick why3-ck2" />
          <path d="M288.5 100 L291.5 103 L297.5 96.5" className="why-tick why3-ck3" />
          <path d="M395.5 100 L398.5 103 L404.5 96.5" className="why-tick why3-ck4" />
          <text x="80" y="124" textAnchor="middle" className="why-small">KICKOFF</text>
          <text x="187" y="124" textAnchor="middle" className="why-small">DESIGN</text>
          <text x="293" y="124" textAnchor="middle" className="why-small">REVIEW</text>
          <text x="400" y="124" textAnchor="middle" className="why-small">LAUNCH</text>
          <g className="why3-marker"><circle cx="80" cy="100" r="14" className="why3-marker-ring" /></g>

          {/* a working preview you can react to */}
          <g className="why3-card">
            <rect x="54" y="140" width="210" height="128" rx="8" className="why-soft-box" />
            <path d="M54 158 H264" className="why-divider" />
            <circle cx="66" cy="149" r="2.6" fill="#F5B84B" stroke="none" />
            <circle cx="76" cy="149" r="2.6" fill="#39E7EF" stroke="none" />
            <rect x="68" y="168" width="22" height="22" rx="5" className="why3-logo" />
            <path d="M200 178 H214 M222 178 H236 M244 178 H252" className="why-muted-line" />
            <path d="M68 214 H170 M68 226 H148" className="why-muted-line" />
            <rect x="68" y="240" width="52" height="14" rx="4" className="why-web-preview" />
            <rect x="180" y="204" width="72" height="50" rx="5" className="why-web-preview" />
            <path d="M188 246 L202 228 L212 238 L224 222 L244 246" className="why-muted-line" strokeWidth="1.8" />
            <g className="why3-upd">
              <rect x="112" y="166" width="62" height="18" rx="9" className="why-pill-amber" />
              <text x="143" y="178.5" textAnchor="middle" className="why-pill-text">UPDATED</text>
            </g>
            <g transform="translate(79 179)"><g className="why3-pin">
              <circle r="9" fill="rgba(245,184,75,.22)" stroke="#F5B84B" />
              <text y="3.6" textAnchor="middle" className="why-pin-text">1</text>
            </g></g>
          </g>

          {/* your feedback → our update → your approval */}
          <g className="why3-fb">
            <rect x="278" y="142" width="148" height="52" rx="9" className="why-feedback-box" />
            <circle cx="295" cy="162" r="9" fill="rgba(57,231,239,.18)" stroke="#39E7EF" />
            <circle cx="295" cy="159" r="2.8" stroke="#39E7EF" />
            <path d="M289.5 168 C289.5 163.5 300.5 163.5 300.5 168" stroke="#39E7EF" />
            <text x="311" y="165" className="why-lbl">Make the logo</text>
            <text x="311" y="180" className="why-lbl">bolder</text>
          </g>
          <g className="why3-reply">
            <rect x="278" y="202" width="148" height="28" rx="9" className="why-result-box" />
            <circle cx="294" cy="216" r="6.5" stroke="#39E7EF" />
            <path d="M290.5 216 L293 218.5 L298 213" stroke="#39E7EF" strokeWidth="2" />
            <text x="308" y="220" className="why-lbl">Done — updated</text>
          </g>
          <g className="why3-appr">
            <rect x="278" y="238" width="148" height="30" rx="9" className="why-appr-btn" />
            <rect x="278" y="238" width="148" height="30" rx="9" className="why3-appr-done" />
            <text x="352" y="257" textAnchor="middle" className="why-btn-text why3-t-appr">APPROVE</text>
            <text x="352" y="257" textAnchor="middle" className="why-btn-text why3-t-done">APPROVED ✓</text>
          </g>
          <g transform="translate(386 266)"><g className="why3-cursor">
            <path d="M0 0 L0 16 L4.5 11.5 L8.5 20 L12 18.4 L8 10 L14 10Z" fill="#fff" stroke="#08141a" strokeWidth="1.2" />
          </g></g>

          <text x="240" y="302" textAnchor="middle" className="why-caption">
            MILESTONES  /  REVIEW  /  FEEDBACK  /  APPROVE
          </text>
        </g>
      )}

      {/* 04 — built to evolve: the product keeps growing on a solid foundation */}
      {kind === "growth" && (
        <g {...common}>
          <rect x="30" y="34" width="420" height="242" rx="16" className="why-panel" />
          <path d="M30 70 H450" className="why-divider" />
          <text x="54" y="57" className="why-micro">YOUR PRODUCT, OVER TIME</text>

          {/* a growing stack: foundation first, then every improvement on top */}
          <g className="why4-found">
            <rect x="54" y="234" width="200" height="30" rx="7" className="why-found" />
            <text x="154" y="253" textAnchor="middle" className="why-lbl">SOLID FOUNDATION</text>
          </g>
          <g className="why4-b1">
            <rect x="62" y="198" width="184" height="30" rx="7" className="why-block-cyan" />
            <text x="154" y="217" textAnchor="middle" className="why-lbl">Launch version</text>
          </g>
          <g className="why4-b2">
            <rect x="62" y="162" width="184" height="30" rx="7" className="why-block-amber" />
            <text x="154" y="181" textAnchor="middle" className="why-lbl">+ Feature for users</text>
          </g>
          <g className="why4-b3">
            <rect x="62" y="126" width="184" height="30" rx="7" className="why-block-cyan" />
            <text x="154" y="145" textAnchor="middle" className="why-lbl">+ Smarter operations</text>
          </g>
          <g className="why4-ghost">
            <rect x="62" y="90" width="184" height="30" rx="7" className="why-ghost" />
            <text x="154" y="109" textAnchor="middle" className="why-small">+ room to grow</text>
          </g>
          <g className="why4-b4">
            <rect x="62" y="90" width="184" height="30" rx="7" className="why-block-amber" />
            <text x="154" y="109" textAnchor="middle" className="why-lbl">+ Whatever comes next</text>
          </g>

          {/* release number */}
          <text x="282" y="116" className="why-metric why4-v why4-v1">v1.0</text>
          <text x="282" y="116" className="why-metric why4-v why4-v2">v1.1</text>
          <text x="282" y="116" className="why-metric why4-v why4-v3">v1.2</text>
          <text x="282" y="116" className="why-metric why4-v why4-v4">v2.0</text>
          <text x="282" y="136" className="why-micro">LATEST RELEASE</text>

          {/* performance keeps improving */}
          <text x="282" y="168" className="why-lbl">SPEED</text>
          <path d="M282 180 H426" className="why-meter-track" />
          <path pathLength="1" d="M282 180 H426" className="why4-speed" />

          {/* what you get */}
          <g className="why4-r1"><circle cx="290" cy="212" r="7.5" stroke="#39E7EF" /><path d="M286.5 212 L289 214.5 L294 209" stroke="#39E7EF" strokeWidth="2" /><text x="304" y="216" className="why-lbl">Easy to maintain</text></g>
          <g className="why4-r2"><circle cx="290" cy="236" r="7.5" stroke="#39E7EF" /><path d="M286.5 236 L289 238.5 L294 233" stroke="#39E7EF" strokeWidth="2" /><text x="304" y="240" className="why-lbl">Faster as it grows</text></g>
          <g className="why4-r3"><circle cx="290" cy="260" r="7.5" stroke="#F5B84B" /><path d="M286.5 260 L289 262.5 L294 257" stroke="#F5B84B" strokeWidth="2" /><text x="304" y="264" className="why-lbl">Room to improve</text></g>

          <text x="240" y="302" textAnchor="middle" className="why-caption">
            LAUNCH  /  IMPROVE  /  EVOLVE
          </text>
        </g>
      )}
    </svg>
  );
}

export default function WhyEnriPeak() {
  const root = useRef<HTMLElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".why-card");

    gsap.fromTo(
      cards,
      { y: 54, opacity: 0, rotateX: 5 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.9,
        stagger: 0.16,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 72%" },
      }
    );

    // Each card's illustration plays its story only while the card is on screen,
    // and starts again from the first step whenever it scrolls back into view.
    cards.forEach((card) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top 88%",
        end: "bottom 6%",
        toggleClass: { targets: card, className: "is-live" },
      });
    });
  }, { scope: root });

  return (
    <section id="why-enripeak" ref={root} className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-brand-cyan/[.06] blur-[100px]" />

      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The EnriPeak difference"
          title={<>Why build with <span className="font-serif font-normal italic text-gradient">EnriPeak?</span></>}
        />

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/55">
          Choosing a technology partner is about more than finding someone who can write code. It is about finding a team that understands your direction, communicates honestly and takes responsibility for making the work matter.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {REASONS.map((r) => (
            <article
              key={r.n}
              className="why-card group relative grid min-h-[390px] overflow-hidden rounded-2xl border border-white/10 bg-white/[.025] p-7 transition-colors duration-500 hover:border-brand-cyan/35 hover:bg-white/[.045] md:grid-cols-[1fr_300px] md:gap-3 md:p-8"
            >
              <div className="relative z-10 flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="font-heading text-xs font-bold tracking-[.18em] text-brand-cyan">{r.n}</span>
                  <span className="h-px w-8 bg-white/20" />
                  <span className="text-[10px] font-semibold uppercase tracking-[.18em] text-white/40">{r.tag}</span>
                </div>

                <h3 className="mt-7 max-w-md font-heading text-2xl font-bold leading-tight text-white md:text-[26px]">
                  {r.title}
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-7 text-white/55">
                  {r.body}
                </p>
              </div>

              <div className="relative mt-5 flex min-w-0 items-center justify-center md:mt-0">
                <div className="absolute h-40 w-40 rounded-full bg-brand-cyan/[.07] blur-2xl transition-all duration-500 group-hover:bg-brand-cyan/[.14]" />
                <Sketch kind={r.kind} />
              </div>

              <span className="pointer-events-none absolute -bottom-10 -right-2 font-heading text-[150px] font-black leading-none text-white/[.025]">
                {r.n}
              </span>
            </article>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .why-art {
          color: rgba(225,235,238,.82);
          overflow: visible;
        }

        .why-card { transform-style: preserve-3d; }

        .why-panel { fill: rgba(8,20,24,.78); stroke: rgba(255,255,255,.15); }
        .why-divider { stroke: rgba(255,255,255,.12); }
        .why-soft-box { fill: rgba(255,255,255,.035); stroke: rgba(255,255,255,.16); }
        .why-muted-line { stroke: rgba(255,255,255,.25); stroke-width: 2.5; }
        .why-lbl { fill: rgba(236,244,246,.86); stroke: none; font-size: 12.5px; font-weight: 700; }
        .why-lbl-red { fill: #FF6B6B; }
        .why-lbl-cyan { fill: #39E7EF; }
        .why-small { fill: rgba(230,240,242,.62); stroke: none; font-size: 11px; font-weight: 700; letter-spacing: .06em; }
        .why-micro { fill: rgba(230,240,242,.45); stroke: none; font-size: 10px; font-weight: 700; letter-spacing: .16em; }
        .why-caption { fill: rgba(230,240,242,.4); stroke: none; font-size: 10px; font-weight: 700; letter-spacing: .16em; }
        .why-metric { fill: #39E7EF; stroke: none; font-size: 34px; font-weight: 800; }
        .why-bang { fill: #FF6B6B; stroke: none; font-size: 14px; font-weight: 800; }
        .why-btn-text { fill: #E9F2F4; stroke: none; font-size: 12px; font-weight: 800; letter-spacing: .08em; }
        .why-pin-text { fill: #F5B84B; stroke: none; font-size: 11px; font-weight: 800; }
        .why-pill-text { fill: #08141a; stroke: none; font-size: 10px; font-weight: 800; letter-spacing: .06em; }
        .why-pill-amber { fill: #F5B84B; stroke: none; }
        .why-hl { fill: rgba(57,231,239,.14); stroke: #39E7EF; stroke-width: 2; opacity: 0; }
        .why-flow-cyan { stroke: #39E7EF; stroke-width: 2; stroke-dasharray: 4 6; opacity: .7; }
        .why-flow-amber { stroke: #F5B84B; stroke-width: 2; stroke-dasharray: 4 6; opacity: .7; }
        .why-lens-ring { fill: rgba(57,231,239,.07); stroke: #39E7EF; stroke-width: 3; }
        .why-meter-track { stroke: rgba(255,255,255,.12); stroke-width: 9; }
        .why-hub-bg { fill: rgba(8,20,24,.97); stroke: none; }
        .why-hub-ring { stroke: #39E7EF; stroke-dasharray: 4 5; }
        .why-input { fill: rgba(255,255,255,.04); stroke: rgba(255,255,255,.22); }
        .why-ai-node { fill: rgba(57,231,239,.05); stroke: rgba(57,231,239,.45); }
        .why-ai-link { stroke: rgba(57,231,239,.6); stroke-dasharray: 3 4; }
        .why-web-preview { fill: rgba(57,231,239,.07); stroke: rgba(57,231,239,.45); }
        .why-result-box { fill: rgba(57,231,239,.06); stroke: rgba(57,231,239,.5); }
        .why-feedback-box { fill: rgba(11,23,27,.96); stroke: rgba(245,184,75,.6); }
        .why-appr-btn { fill: rgba(255,255,255,.05); stroke: rgba(255,255,255,.3); }
        .why-node { fill: #0b1114; stroke: rgba(255,255,255,.32); stroke-width: 2; }
        .why-tick { stroke: #39E7EF; stroke-width: 2.4; }
        .why-found { fill: rgba(245,184,75,.1); stroke: rgba(245,184,75,.6); }
        .why-block-cyan { fill: rgba(57,231,239,.1); stroke: rgba(57,231,239,.6); }
        .why-block-amber { fill: rgba(245,184,75,.12); stroke: rgba(245,184,75,.7); }
        .why-ghost { fill: none; stroke: rgba(255,255,255,.3); stroke-dasharray: 5 5; }

        /* 01 */
        .why1-meter-red { stroke: #FF6B6B; stroke-width: 9; stroke-dasharray: 1; stroke-dashoffset: .62; }
        .why1-meter-cyan { stroke: #39E7EF; stroke-width: 9; stroke-dasharray: 1; stroke-dashoffset: 0; }
        .why1-jam, .why1-lens { opacity: 0; }
        .why1-warn { transform-box: fill-box; transform-origin: center; }
        .why1-p { opacity: 0; }
        /* 02 */
        .why2-type { stroke: #39E7EF; stroke-width: 2.6; stroke-dasharray: 1; stroke-dashoffset: 0; }
        .why2-btn { fill: rgba(57,231,239,.22); stroke: #39E7EF; }
        .why2-btn-press { fill: #39E7EF; stroke: none; opacity: 0; }
        .why2-req, .why2-res, .why2-cursor { opacity: 0; }
        .why2-core { transform-box: fill-box; transform-origin: center; }
        /* 03 */
        .why3-prog { stroke: #39E7EF; stroke-width: 3; stroke-dasharray: 1; stroke-dashoffset: 0; }
        .why3-marker-ring { fill: none; stroke: #F5B84B; stroke-width: 2.4; }
        .why3-marker { opacity: 0; }
        .why3-logo { fill: rgba(57,231,239,.25); stroke: #39E7EF; transform-box: fill-box; transform-origin: 0% 0%; }
        .why3-pin { transform-box: fill-box; transform-origin: center; opacity: 0; }
        .why3-upd, .why3-cursor, .why3-t-appr { opacity: 0; }
        .why3-appr-done { fill: rgba(57,231,239,.22); stroke: #39E7EF; }
        .why3-t-done { fill: #39E7EF; }
        /* 04 */
        .why4-speed { stroke: #39E7EF; stroke-width: 9; stroke-dasharray: 1; stroke-dashoffset: .05; }
        .why4-ghost { opacity: 0; }
        .why4-v1, .why4-v2, .why4-v3 { opacity: 0; }
        .why4-v4 { fill: #F5B84B; }

        /* animations run only while the card is on screen, so every card tells its story from the start */
        .why-card.is-live .why1-jam { animation: why1Jam 9s ease-in-out infinite; }
        .why-card.is-live .why1-fix { animation: why1Fix 9s ease-in-out infinite; }
        .why-card.is-live .why1-lens { animation: why1Lens 9s ease-in-out infinite; }
        .why-card.is-live .why1-n1 { animation: why1N1 9s ease-in-out infinite; }
        .why-card.is-live .why1-n2 { animation: why1N2 9s ease-in-out infinite; }
        .why-card.is-live .why1-p-a { animation: why1P 1.7s linear infinite; }
        .why-card.is-live .why1-p-b { animation: why1P 1.7s linear infinite .85s; }
        .why-card.is-live .why1-queue { animation: why1Queue 1.1s ease-in-out infinite; }
        .why-card.is-live .why1-queue-b { animation-delay: .35s; }
        .why-card.is-live .why1-warn { animation: why1Warn .9s ease-in-out infinite; }
        .why-card.is-live .why1-meter-cyan { animation: why1Cyan 9s ease-in-out infinite; }
        .why-card.is-live .why2-type { animation: why2Type 8s ease-in-out infinite; }
        .why-card.is-live .why2-cursor { animation: why2Cursor 8s ease-in-out infinite; }
        .why-card.is-live .why2-btn-press { animation: why2Press 8s ease-in-out infinite; }
        .why-card.is-live .why2-req { animation: why2Req 8s ease-in-out infinite; }
        .why-card.is-live .why2-res { animation: why2Res 8s ease-in-out infinite; }
        .why-card.is-live .why2-n1 { animation: why2N1 8s ease-in-out infinite; }
        .why-card.is-live .why2-n2 { animation: why2N2 8s ease-in-out infinite; }
        .why-card.is-live .why2-n3 { animation: why2N3 8s ease-in-out infinite; }
        .why-card.is-live .why2-reply { animation: why2Reply 8s ease-in-out infinite; }
        .why-card.is-live .why2-core { animation: why2Core 8s ease-in-out infinite; }
        .why-card.is-live .why3-prog { animation: why3Prog 10s ease-in-out infinite; }
        .why-card.is-live .why3-marker { animation: why3Marker 10s ease-in-out infinite; }
        .why-card.is-live .why3-ck2 { animation: why3Ck2 10s ease-in-out infinite; }
        .why-card.is-live .why3-ck3 { animation: why3Ck3 10s ease-in-out infinite; }
        .why-card.is-live .why3-ck4 { animation: why3Ck4 10s ease-in-out infinite; }
        .why-card.is-live .why3-card { animation: why3Card 10s ease-in-out infinite; }
        .why-card.is-live .why3-logo { animation: why3Logo 10s ease-in-out infinite; }
        .why-card.is-live .why3-upd { animation: why3Upd 10s ease-in-out infinite; }
        .why-card.is-live .why3-pin { animation: why3Pin 10s ease-in-out infinite; }
        .why-card.is-live .why3-fb { animation: why3Fb 10s ease-in-out infinite; }
        .why-card.is-live .why3-reply { animation: why3Reply 10s ease-in-out infinite; }
        .why-card.is-live .why3-appr { animation: why3Appr 10s ease-in-out infinite; }
        .why-card.is-live .why3-t-appr { animation: why3TAppr 10s ease-in-out infinite; }
        .why-card.is-live .why3-t-done { animation: why3TDone 10s ease-in-out infinite; }
        .why-card.is-live .why3-appr-done { animation: why3TDone 10s ease-in-out infinite; }
        .why-card.is-live .why3-cursor { animation: why3Cursor 10s ease-in-out infinite; }
        .why-card.is-live .why4-b1 { animation: why4B1 10s ease-out infinite; }
        .why-card.is-live .why4-b2 { animation: why4B2 10s ease-out infinite; }
        .why-card.is-live .why4-b3 { animation: why4B3 10s ease-out infinite; }
        .why-card.is-live .why4-b4 { animation: why4B4 10s ease-out infinite; }
        .why-card.is-live .why4-ghost { animation: why4Ghost 10s ease-in-out infinite; }
        .why-card.is-live .why4-v1 { animation: why4V1 10s ease-in-out infinite; }
        .why-card.is-live .why4-v2 { animation: why4V2 10s ease-in-out infinite; }
        .why-card.is-live .why4-v3 { animation: why4V3 10s ease-in-out infinite; }
        .why-card.is-live .why4-v4 { animation: why4V4 10s ease-in-out infinite; }
        .why-card.is-live .why4-speed { animation: why4Speed 10s ease-in-out infinite; }
        .why-card.is-live .why4-r1 { animation: why4R1 10s ease-in-out infinite; }
        .why-card.is-live .why4-r2 { animation: why4R2 10s ease-in-out infinite; }
        .why-card.is-live .why4-r3 { animation: why4R3 10s ease-in-out infinite; }

        @keyframes why1Jam {
          0% { opacity:1 }
          54% { opacity:1 }
          59% { opacity:0 }
          96% { opacity:0 }
          100% { opacity:1 }
        }
        @keyframes why1Fix {
          0% { opacity:0; }
          59% { opacity:0; }
          62% { opacity:1; }
          92% { opacity:1; }
          97% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes why1Lens {
          0% { opacity:0;transform:translate(0,0) }
          3% { opacity:0;transform:translate(0,0) }
          6% { opacity:1;transform:translate(0,0) }
          14% { opacity:1;transform:translate(0,0) }
          30% { opacity:1;transform:translate(140px,0) }
          36% { opacity:1;transform:translate(140px,0) }
          50% { opacity:1;transform:translate(210px,0) }
          58% { opacity:1;transform:translate(210px,0) }
          63% { opacity:0;transform:translate(210px,0) }
          100% { opacity:0;transform:translate(210px,0) }
        }
        @keyframes why1N1 {
          0% { opacity:0; }
          4% { opacity:0; }
          6% { opacity:1; }
          18% { opacity:1; }
          20% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes why1N2 {
          0% { opacity:0; }
          22% { opacity:0; }
          24% { opacity:1; }
          38% { opacity:1; }
          40% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes why1P {
          0% { opacity:0;transform:translateX(0) }
          12% { opacity:1 }
          88% { opacity:1;transform:translateX(52px) }
          100% { opacity:0;transform:translateX(52px) }
        }
        @keyframes why1Queue {
          0% { transform:translateX(0);opacity:1 }
          50% { transform:translateX(9px);opacity:1 }
          100% { transform:translateX(0);opacity:1 }
        }
        @keyframes why1Warn {
          0% { transform:scale(1) }
          50% { transform:scale(1.18) }
          100% { transform:scale(1) }
        }
        @keyframes why1Red {
          0% { stroke-dashoffset:.62 }
          100% { stroke-dashoffset:.62 }
        }
        @keyframes why1Cyan {
          0% { stroke-dashoffset:1 }
          62% { stroke-dashoffset:1 }
          78% { stroke-dashoffset:0 }
          100% { stroke-dashoffset:0 }
        }
        @keyframes why2Type {
          0% { stroke-dashoffset:1 }
          3% { stroke-dashoffset:1 }
          13% { stroke-dashoffset:0 }
          100% { stroke-dashoffset:0 }
        }
        @keyframes why2Cursor {
          0% { opacity:0;transform:translate(46px,44px) scale(1) }
          6% { opacity:1;transform:translate(46px,44px) scale(1) }
          16% { opacity:1;transform:translate(0,0) scale(1) }
          19% { opacity:1;transform:translate(0,2px) scale(.88) }
          22% { opacity:1;transform:translate(0,0) scale(1) }
          34% { opacity:1;transform:translate(0,0) scale(1) }
          40% { opacity:0;transform:translate(0,0) scale(1) }
          100% { opacity:0;transform:translate(0,0) scale(1) }
        }
        @keyframes why2Press {
          0% { opacity:0 }
          18% { opacity:0 }
          20% { opacity:.55 }
          26% { opacity:0 }
          100% { opacity:0 }
        }
        @keyframes why2Req {
          0% { opacity:0;transform:none }
          22% { opacity:0;transform:none }
          24% { opacity:1;transform:none }
          38% { opacity:1;transform:translateX(100px) }
          40% { opacity:0;transform:translateX(100px) }
          100% { opacity:0;transform:translateX(100px) }
        }
        @keyframes why2Res {
          0% { opacity:0;transform:none }
          58% { opacity:0;transform:none }
          60% { opacity:1;transform:none }
          74% { opacity:1;transform:translateX(-100px) }
          76% { opacity:0;transform:translateX(-100px) }
          100% { opacity:0;transform:translateX(-100px) }
        }
        @keyframes why2N1 {
          0% { opacity:0; }
          34% { opacity:0; }
          36% { opacity:1; }
          46% { opacity:1; }
          47.5% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes why2N2 {
          0% { opacity:0; }
          44.5% { opacity:0; }
          46% { opacity:1; }
          58% { opacity:1; }
          59.5% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes why2N3 {
          0% { opacity:0; }
          74% { opacity:0; }
          76% { opacity:1; }
          92% { opacity:1; }
          96% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes why2Reply {
          0% { opacity:0;transform:translateY(8px); }
          72% { opacity:0;transform:translateY(8px); }
          75% { opacity:1;transform:none; }
          93% { opacity:1;transform:none; }
          98% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes why2Core {
          0% { transform:scale(.85) }
          24% { transform:scale(.85) }
          31% { transform:scale(1.3) }
          40% { transform:scale(.85) }
          60% { transform:scale(.85) }
          67% { transform:scale(1.3) }
          76% { transform:scale(.85) }
          100% { transform:scale(.85) }
        }
        @keyframes why3Prog {
          0% { stroke-dashoffset:1 }
          10% { stroke-dashoffset:1 }
          22% { stroke-dashoffset:.667 }
          30% { stroke-dashoffset:.667 }
          38% { stroke-dashoffset:.333 }
          80% { stroke-dashoffset:.333 }
          88% { stroke-dashoffset:0 }
          100% { stroke-dashoffset:0 }
        }
        @keyframes why3Marker {
          0% { opacity:0;transform:translateX(0) }
          2% { opacity:1;transform:translateX(0) }
          10% { opacity:1;transform:translateX(0) }
          22% { opacity:1;transform:translateX(107px) }
          30% { opacity:1;transform:translateX(107px) }
          38% { opacity:1;transform:translateX(213px) }
          80% { opacity:1;transform:translateX(213px) }
          88% { opacity:1;transform:translateX(320px) }
          97% { opacity:1;transform:translateX(320px) }
          100% { opacity:0;transform:translateX(320px) }
        }
        @keyframes why3Ck2 {
          0% { opacity:0 }
          21% { opacity:0 }
          22% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:0 }
        }
        @keyframes why3Ck3 {
          0% { opacity:0 }
          77% { opacity:0 }
          78% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:0 }
        }
        @keyframes why3Ck4 {
          0% { opacity:0 }
          89% { opacity:0 }
          90% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:0 }
        }
        @keyframes why3Card {
          0% { opacity:0;transform:translateY(10px); }
          12% { opacity:0;transform:translateY(10px); }
          16% { opacity:1;transform:none; }
          94% { opacity:1;transform:none; }
          98% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes why3Logo {
          0% { transform:scale(1) }
          52% { transform:scale(1) }
          58% { transform:scale(1.55) }
          100% { transform:scale(1.55) }
        }
        @keyframes why3Upd {
          0% { opacity:0; }
          56% { opacity:0; }
          58% { opacity:1; }
          76% { opacity:1; }
          79% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes why3Pin {
          0% { opacity:0;transform:scale(.4); }
          33% { opacity:0;transform:scale(.4); }
          36% { opacity:1;transform:none; }
          62% { opacity:1;transform:none; }
          65% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes why3Fb {
          0% { opacity:0;transform:translateY(8px); }
          35% { opacity:0;transform:translateY(8px); }
          38% { opacity:1;transform:none; }
          84% { opacity:1;transform:none; }
          89% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes why3Reply {
          0% { opacity:0;transform:translateY(8px); }
          51% { opacity:0;transform:translateY(8px); }
          54% { opacity:1;transform:none; }
          86% { opacity:1;transform:none; }
          91% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes why3Appr {
          0% { opacity:0;transform:translateY(8px); }
          55% { opacity:0;transform:translateY(8px); }
          58% { opacity:1;transform:none; }
          94% { opacity:1;transform:none; }
          98% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes why3TAppr {
          0% { opacity:0; }
          55% { opacity:0; }
          58% { opacity:1; }
          70% { opacity:1; }
          71% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes why3TDone {
          0% { opacity:0; }
          70.5% { opacity:0; }
          72% { opacity:1; }
          94% { opacity:1; }
          98% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes why3Cursor {
          0% { opacity:0;transform:translate(34px,6px) }
          62% { opacity:0;transform:translate(34px,6px) }
          66% { opacity:1;transform:translate(34px,6px) }
          70% { opacity:1;transform:translate(-30px,-8px) scale(1) }
          71.5% { opacity:1;transform:translate(-30px,-6px) scale(.86) }
          73% { opacity:1;transform:translate(-30px,-8px) scale(1) }
          80% { opacity:1;transform:translate(-30px,-8px) scale(1) }
          84% { opacity:0;transform:translate(-30px,-8px) }
          100% { opacity:0;transform:translate(-30px,-8px) }
        }
        @keyframes why4B1 {
          0% { opacity:0;transform:translateY(-22px) }
          4% { opacity:0;transform:translateY(-22px) }
          8% { opacity:1;transform:none }
          96% { opacity:1;transform:none }
          99% { opacity:0;transform:none }
          100% { opacity:0;transform:translateY(-22px) }
        }
        @keyframes why4B2 {
          0% { opacity:0;transform:translateY(-22px) }
          23% { opacity:0;transform:translateY(-22px) }
          27% { opacity:1;transform:none }
          96% { opacity:1;transform:none }
          99% { opacity:0;transform:none }
          100% { opacity:0;transform:translateY(-22px) }
        }
        @keyframes why4B3 {
          0% { opacity:0;transform:translateY(-22px) }
          45% { opacity:0;transform:translateY(-22px) }
          49% { opacity:1;transform:none }
          96% { opacity:1;transform:none }
          99% { opacity:0;transform:none }
          100% { opacity:0;transform:translateY(-22px) }
        }
        @keyframes why4B4 {
          0% { opacity:0;transform:translateY(-22px) }
          69% { opacity:0;transform:translateY(-22px) }
          73% { opacity:1;transform:none }
          96% { opacity:1;transform:none }
          99% { opacity:0;transform:none }
          100% { opacity:0;transform:translateY(-22px) }
        }
        @keyframes why4Ghost {
          0% { opacity:0 }
          40% { opacity:0 }
          46% { opacity:.9 }
          68% { opacity:.9 }
          70% { opacity:0 }
          100% { opacity:0 }
        }
        @keyframes why4V1 {
          0% { opacity:0; }
          2% { opacity:1; }
          20% { opacity:1; }
          22% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes why4V2 {
          0% { opacity:0; }
          22% { opacity:0; }
          24% { opacity:1; }
          42% { opacity:1; }
          44% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes why4V3 {
          0% { opacity:0; }
          44% { opacity:0; }
          46% { opacity:1; }
          66% { opacity:1; }
          68% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes why4V4 {
          0% { opacity:0; }
          69% { opacity:0; }
          71% { opacity:1; }
          94% { opacity:1; }
          98% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes why4Speed {
          0% { stroke-dashoffset:.62 }
          4% { stroke-dashoffset:.62 }
          24% { stroke-dashoffset:.62 }
          30% { stroke-dashoffset:.44 }
          46% { stroke-dashoffset:.44 }
          52% { stroke-dashoffset:.22 }
          71% { stroke-dashoffset:.22 }
          77% { stroke-dashoffset:.05 }
          100% { stroke-dashoffset:.05 }
        }
        @keyframes why4R1 {
          0% { opacity:0 }
          9% { opacity:0 }
          10% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:0 }
        }
        @keyframes why4R2 {
          0% { opacity:0 }
          31% { opacity:0 }
          32% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:0 }
        }
        @keyframes why4R3 {
          0% { opacity:0 }
          55% { opacity:0 }
          56% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:0 }
        }

        @media (prefers-reduced-motion: reduce) {
          .why-art * { animation: none !important; }
          .why1-p { opacity: 0; }
          .why2-req, .why2-res, .why2-cursor { opacity: 0; }
        }
`}</style>
    </section>
  );
}