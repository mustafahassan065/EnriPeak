"use client";

import { useRef, type ReactNode } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, ArrowRight, Database, ShieldCheck, Layers, Sparkles, Search, Settings, Bell, ChevronDown, User } from "lucide-react";
import { gsap } from "@/lib/gsap";
import DiscoveryButton from "@/components/DiscoveryButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ============================================================
   SERVICE 07 — CUSTOM AI ASSISTANTS & SYSTEM INTEGRATIONS
   ============================================================ */

const CHALLENGE = [
  { t: "Data silos", d: "Customer, order and document data live in separate systems that don’t talk." },
  { t: "Scattered information", d: "Finding an answer means checking three dashboards and asking a colleague." },
  { t: "Disconnected systems", d: "Every lookup is manual, even when the information already exists." },
];

const FEATURES = [
  { icon: Database, t: "Secure integrations", d: "Connected to CRM, ERP, internal documents and databases with proper access controls." },
  { icon: ShieldCheck, t: "Contextual retrieval", d: "The assistant pulls only the information relevant to the question and the user’s role." },
  { icon: Layers, t: "Approved actions", d: "Can take safe actions (create, update, send) inside approved boundaries." },
  { icon: Sparkles, t: "Custom assistant UX", d: "An interface that fits your team’s workflow, not a generic chat box." },
];

const TECHNOLOGIES = [
  // Voice & Audio
  { name: "OpenAI Whisper", type: "icon", icon: "openai", color: "FFFFFF" },
  { name: "ElevenLabs", type: "text", text: "11L", color: "FFFFFF" },
  { name: "Deepgram", type: "text", text: "DG", color: "13EF95" },
  { name: "Cartesia", type: "text", text: "CT", color: "F5B84B" },
  { name: "Amazon Nova Sonic", type: "icon", icon: "amazonaws", color: "FF9900" },
  // Workflow
  { name: "Make.com", type: "icon", icon: "make", color: "6D00CC" },
  { name: "Zapier AI", type: "icon", icon: "zapier", color: "FF4A00" },
  { name: "n8n", type: "icon", icon: "n8n", color: "EA4B71" },
  // OS & Workspace
  { name: "Microsoft Graph", type: "text", text: "MG", color: "0078D4" },
  { name: "Google Workspace", type: "icon", icon: "googleworkspace", color: "4285F4" },
  { name: "Apple App Intents", type: "icon", icon: "apple", color: "FFFFFF" },
];

/* ============================================================
   HERO — Real HTML/Tailwind Assistant UI
   ============================================================ */
function HeroAssistantScene() {
  return (
    <div className="relative mx-auto w-full max-w-[680px] select-none" aria-hidden="true">
      <div className="absolute -inset-10 rounded-full bg-brand-cyan/10 blur-[80px]" />

      <div className="hero-window relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0B1B20] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl">
        
        <div className="flex h-12 items-center gap-2 border-b border-white/[0.08] bg-white/[0.02] px-4">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
            <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
            <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
          </div>
          <div className="mx-auto flex h-6 w-64 items-center justify-center rounded-md border border-white/[0.05] bg-black/40 px-3">
            <span className="text-[10px] font-mono text-white/40">assistant.enripeak.io/query</span>
          </div>
        </div>

        <div className="flex h-[380px]">
          
          <div className="hero-sidebar flex w-44 flex-col border-r border-white/[0.08] bg-black/20 p-3">
            <div className="mb-4 flex items-center gap-2 px-2">
              <div className="grid h-6 w-6 place-items-center rounded bg-brand-cyan text-black"><Sparkles size={12} /></div>
              <span className="text-xs font-bold text-white">Assistant</span>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center gap-2 rounded-md bg-brand-cyan/10 px-2 py-1.5 border border-brand-cyan/20">
                <Search size={12} className="text-brand-cyan" />
                <span className="text-[11px] font-medium text-brand-cyan">Ask Assistant</span>
              </div>
              {[
                { icon: Database, label: "Systems" },
                { icon: ShieldCheck, label: "Permissions" },
                { icon: Settings, label: "Settings" }
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 rounded-md px-2 py-1.5 opacity-60">
                  <item.icon size={12} className="text-white" />
                  <span className="text-[11px] font-medium text-white">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto space-y-2">
               <div className="rounded-md border border-white/10 bg-white/5 p-2">
                 <div className="flex items-center justify-between text-[10px] text-white/50 mb-1">
                   <span>Systems Connected</span>
                   <span className="text-brand-cyan">4/4</span>
                 </div>
                 <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                   <div className="h-full w-full bg-brand-cyan rounded-full" />
                 </div>
               </div>
            </div>
          </div>

          <div className="hero-content relative flex-1 overflow-hidden p-5 flex flex-col bg-[#08141A]/50">
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <h3 className="text-sm font-bold text-white">Contextual Query</h3>
                <p className="text-[10px] text-white/40">Cross-referencing CRM, ERP, Docs</p>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse" />
                <span className="text-[10px] font-medium text-brand-cyan">Secure</span>
              </div>
            </div>

            <div className="hero-chat flex flex-col gap-3 flex-1 overflow-y-auto pr-2">
              <div className="flex justify-end">
                <div className="rounded-lg rounded-tr-none border border-white/10 bg-white/[0.05] px-3 py-2 max-w-[80%]">
                  <p className="text-[11px] text-white">What's the status of order #4821 for Acme Ltd?</p>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="rounded-lg rounded-tl-none border border-brand-cyan/20 bg-brand-cyan/[0.05] px-3 py-2 flex items-center gap-2">
                   <Search size={12} className="text-brand-cyan animate-pulse" />
                   <span className="text-[10px] text-brand-cyan/80">Querying 3 systems...</span>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="rounded-lg rounded-tl-none border border-brand-cyan/30 bg-brand-cyan/[0.08] px-3 py-2 max-w-[85%]">
                  <p className="text-[11px] text-white/90">Order #4821 shipped yesterday.</p>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-[10px] text-white/60">
                    <div className="bg-white/5 rounded px-2 py-1 border border-white/10">Customer: Acme Ltd</div>
                    <div className="bg-white/5 rounded px-2 py-1 border border-white/10">Owner: Sales</div>
                  </div>
                  <div className="mt-2 text-[9px] text-brand-cyan/70 flex items-center gap-1"><ShieldCheck size={10}/> Role-checked · Sources: CRM + ERP</div>
                </div>
              </div>

              <div className="flex justify-start mt-2">
                <div className="rounded-lg border border-brand-amber/50 bg-brand-amber/[0.08] px-3 py-2 w-full flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Layers size={14} className="text-brand-amber" />
                    <div>
                      <p className="text-[11px] font-bold text-brand-amber">Suggested Action</p>
                      <p className="text-[10px] text-white/50">"Send tracking link to customer"</p>
                    </div>
                  </div>
                  <button className="rounded bg-brand-amber px-2 py-1 text-[9px] font-bold text-black">Execute</button>
                </div>
              </div>
            </div>
            
            <div className="mt-3 relative">
              <input type="text" placeholder="Ask anything across systems..." className="w-full rounded-lg border border-white/10 bg-white/5 py-2 pl-3 pr-10 text-[11px] text-white outline-none focus:border-brand-cyan/50" disabled />
              <button className="absolute right-1 top-1 h-8 w-8 rounded-md bg-brand-cyan flex items-center justify-center text-black"><ArrowUpRight size={14}/></button>
            </div>
          </div>
        </div>
      </div>

      <div className="premium-cursor absolute bottom-[60px] right-[100px] z-20 flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 shadow-xl">
        <span className="text-[10px] font-bold text-black">Execute action</span>
      </div>
      <svg className="premium-cursor-arrow absolute bottom-[40px] right-[120px] z-30 h-5 w-5 drop-shadow-md" viewBox="0 0 24 24" fill="white" stroke="#000" strokeWidth="1.5">
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
      </svg>
    </div>
  );
}

function SceneDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="scCard" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#15303A" /><stop offset="1" stopColor="#0C1C22" /></linearGradient>
        <linearGradient id="scCore" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#39E7EF" stopOpacity=".22" /><stop offset="1" stopColor="#39E7EF" stopOpacity=".05" /></linearGradient>
        <linearGradient id="scArea" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#39E7EF" stopOpacity=".35" /><stop offset="1" stopColor="#39E7EF" stopOpacity="0" /></linearGradient>
        <filter id="scShadow" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#000" floodOpacity=".55" /></filter>
        <filter id="scGlow" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#39E7EF" floodOpacity=".35" /></filter>
      </defs>
    </svg>
  );
}

function ChallengeScene() {
  return (
    <div className="relative h-full min-h-[240px]" aria-hidden="true">
      <svg viewBox="0 0 440 260" className="h-full w-full" fill="none">
        <g className="ast-ch-user">
          <circle cx="60" cy="130" r="22" fill="rgba(57,231,239,.1)" stroke="#39E7EF" />
          <path d="M52 122 C52 116 56 114 60 114 C65 114 68 117 68 122 C68 127 60 128 60 132 M60 138 H60.5" stroke="#39E7EF" strokeWidth="2" />
          <text x="60" y="172" textAnchor="middle" className="ast-ch-l">QUESTION</text>
        </g>
        {[
          { x: 160, y: 40, l: "CRM", cls: "ast-ch-0" },
          { x: 160, y: 130, l: "ERP", cls: "ast-ch-1" },
          { x: 300, y: 40, l: "DOCS", cls: "ast-ch-2" },
          { x: 300, y: 130, l: "DB", cls: "ast-ch-3" },
        ].map((b) => (
          <g key={b.l} className={`ast-ch-box ${b.cls}`}>
            <rect x={b.x} y={b.y} width="70" height="60" rx="8" fill="rgba(255,255,255,.03)" stroke="rgba(255,255,255,.18)" strokeDasharray="4 4" />
            <text x={b.x + 35} y={b.y + 34} textAnchor="middle" className="ast-ch-sys">{b.l}</text>
            <text x={b.x + 35} y={b.y + 50} textAnchor="middle" className="ast-ch-s">isolated</text>
          </g>
        ))}
        <g className="ast-ch-broken">
          <path d="M82 130 Q 110 110 160 70" stroke="rgba(245,184,75,.4)" strokeDasharray="3 4" />
          <path d="M82 130 H160" stroke="rgba(245,184,75,.4)" strokeDasharray="3 4" />
          <path d="M82 130 Q 110 150 160 160" stroke="rgba(245,184,75,.4)" strokeDasharray="3 4" />
          <text x="240" y="222" textAnchor="middle" className="ast-ch-l" style={{ fill: "#F5B84B" }}>MANUAL LOOKUPS · NO SINGLE ANSWER</text>
        </g>
      </svg>
    </div>
  );
}

function SolutionScene() {
  return (
    <div className="relative h-full min-h-[240px]" aria-hidden="true">
      <svg viewBox="0 0 440 260" className="h-full w-full" fill="none">
        <g className="ast-sol-core">
          <rect x="150" y="90" width="140" height="80" rx="12" fill="rgba(57,231,239,.08)" stroke="#39E7EF" strokeWidth="1.6" />
          <text x="220" y="122" textAnchor="middle" className="ast-sol-core-t">CUSTOM</text>
          <text x="220" y="136" textAnchor="middle" className="ast-sol-core-t">ASSISTANT</text>
          <text x="220" y="152" textAnchor="middle" className="ast-sol-core-s">contextual · access checked</text>
          <circle cx="220" cy="130" r="46" stroke="rgba(57,231,239,.2)" strokeDasharray="3 8" className="ast-sol-ring" />
        </g>
        {[
          { x: 20, y: 30, l: "CRM", cls: "ast-sol-0" },
          { x: 20, y: 180, l: "ERP", cls: "ast-sol-1" },
          { x: 320, y: 30, l: "DOCS", cls: "ast-sol-2" },
          { x: 320, y: 180, l: "DB", cls: "ast-sol-3" },
        ].map((n) => (
          <g key={n.l} className={`ast-sol-node ${n.cls}`}>
            <rect x={n.x} y={n.y} width="100" height="50" rx="9" fill="rgba(255,255,255,.035)" stroke="rgba(255,255,255,.2)" />
            <text x={n.x + 50} y={n.y + 30} textAnchor="middle" className="ast-sol-node-t">{n.l}</text>
            <path d={`M${n.x < 220 ? n.x + 100 : n.x} ${n.y + 25} Q 220 130 220 130`} stroke="rgba(57,231,239,.45)" strokeWidth="1.4" strokeDasharray="3 5" />
          </g>
        ))}
        <g className="ast-sol-out">
          <rect x="130" y="206" width="180" height="34" rx="17" fill="rgba(57,231,239,.1)" stroke="#39E7EF" strokeWidth="1.3" />
          <circle cx="148" cy="223" r="4" fill="#39E7EF" />
          <text x="160" y="227" className="ast-sol-out-t">ONE CONTEXTUAL ANSWER</text>
        </g>
        <circle r="3.5" fill="#39E7EF"><animateMotion dur="3s" repeatCount="indefinite" path="M220 130 Q 220 50 120 55" /></circle>
        <circle r="3.5" fill="#39E7EF"><animateMotion dur="3s" repeatCount="indefinite" path="M220 130 Q 220 210 120 205" /></circle>
        <circle r="3.5" fill="#F5B84B"><animateMotion dur="3s" repeatCount="indefinite" path="M220 130 Q 220 50 320 55" /></circle>
        <circle r="3.5" fill="#F5B84B"><animateMotion dur="3s" repeatCount="indefinite" path="M220 130 Q 220 210 320 205" /></circle>
      </svg>
    </div>
  );
}

export default function CustomAiAssistantsPage() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".hero-window", { opacity: 0, y: 40, scale: 0.95, rotationX: 10 }, { opacity: 1, y: 0, scale: 1, rotationX: 0, duration: 1, ease: "power4.out" });
      tl.fromTo(".hero-sidebar > div", { opacity: 0, x: -15 }, { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 }, "-=0.6");
      tl.fromTo(".hero-chat > div", { opacity: 0, y: 15, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.15, ease: "back.out(1.5)" }, "-=0.4");
      tl.fromTo([".premium-cursor", ".premium-cursor-arrow"], { opacity: 0, scale: 0.5, y: 20, x: 20 }, { opacity: 1, scale: 1, y: 0, x: 0, duration: 0.6, ease: "back.out(2)" }, "-=0.2");
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const chTl = gsap.timeline({ scrollTrigger: { trigger: ".challenge-scene", start: "top 75%", once: true } });
      chTl.from(".ast-ch-user", { opacity: 0, x: -10, duration: 0.35 })
        .from(".ast-ch-box", { opacity: 0, y: 8, stagger: 0.08, duration: 0.3 }, "-=0.1")
        .from(".ast-ch-broken", { opacity: 0, y: 6, duration: 0.4 }, "-=0.1");
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const solTl = gsap.timeline({ scrollTrigger: { trigger: ".solution-scene", start: "top 75%", once: true } });
      solTl.from(".ast-sol-core", { opacity: 0, scale: 0.92, duration: 0.4 })
        .from(".ast-sol-node", { opacity: 0, x: (i) => (i < 2 ? -12 : 12), stagger: 0.1, duration: 0.3 }, "-=0.1")
        .from(".ast-sol-out", { opacity: 0, y: 8, duration: 0.35 }, "-=0.1");
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray<HTMLElement>(".reveal-sec").forEach((el) => {
        gsap.fromTo(el, { y: 26, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 82%" } });
      });
      gsap.utils.toArray<HTMLElement>("[data-metric]").forEach((el, i) => {
        const target = Number(el.dataset.metric || 0);
        const suffix = el.dataset.suffix || "";
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target, duration: 1.6, delay: 0.15 + i * 0.1, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
          onUpdate: () => { el.textContent = `${Math.round(obj.v)}${suffix}`; },
        });
      });
    });

    return () => mm.revert();
  }, { scope: root });

  return (
    <>
      <Navbar />
      <div ref={root} className="overflow-hidden bg-[#08141A]">
        <SceneDefs />
        
        <section className="relative px-6 pb-20 pt-32 md:pt-40">
          <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-brand-cyan/[.07] blur-[140px]" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.95fr_1.05fr]">
            <div>
              <p className="eyebrow">AI Solutions · 07</p>
              <h1 className="mt-4 font-heading text-[clamp(2.4rem,5.5vw,4.4rem)] font-extrabold leading-[1.04] tracking-tight text-white">
                Custom AI assistants &amp; <span className="font-serif font-normal italic text-gradient">system integrations</span> that connect your data.
              </h1>
              <p className="mt-6 max-w-lg text-lg text-white/60">
                One assistant connected to your CRM, ERP, documents and databases — answering questions from the systems you already trust, with proper access control.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <DiscoveryButton className="btn-amber inline-flex items-center gap-2">Book a discovery call <ArrowUpRight size={18} /></DiscoveryButton>
                <Link href="#case-study" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-brand-cyan/40 hover:text-white">See the case study <ArrowRight size={16} /></Link>
              </div>
            </div>
            <HeroAssistantScene />
          </div>
        </section>

        <section className="relative px-6 pb-10 pt-20 text-center md:pt-24">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow justify-center">Assistant Stack</p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
              Technologies we <span className="font-serif font-normal italic text-gradient">build with</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/55 md:text-lg">
              Voice models, workflow connectors, and deep OS/workspace integrations.
            </p>
            <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-brand-cyan/60 to-transparent" />
          </div>
        </section>

        <div className="relative w-full overflow-hidden border-y border-white/10 bg-[#0B1B20] py-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(255,255,255,0.05)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(57,231,239,0.07),transparent_70%)]" />
          <div className="relative flex w-full items-center overflow-hidden">
            <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-24 bg-gradient-to-r from-[#0B1B20] to-transparent md:w-40" />
            <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-24 bg-gradient-to-l from-[#0B1B20] to-transparent md:w-40" />

            <div className="marquee flex items-center whitespace-nowrap">
              {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, i) => (
                <div key={i} className="group mx-4 flex w-[150px] shrink-0 flex-col items-center justify-center gap-4 md:mx-5 md:w-[170px]">
                  <div className="grid h-28 w-28 place-items-center rounded-3xl border border-white/10 bg-white/[0.04] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:scale-110 group-hover:border-white/25 group-hover:bg-white/[0.08] md:h-32 md:w-32" style={{ boxShadow: `0 0 40px -12px #${tech.color}66` }}>
                    {tech.type === "icon" ? (
                      <img src={`https://cdn.simpleicons.org/${tech.icon}/${tech.color}`} alt={tech.name} loading="lazy" className="h-16 w-16 object-contain drop-shadow-[0_0_14px_rgba(255,255,255,0.12)] md:h-20 md:w-20" />
                    ) : (
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/[0.05] border border-white/10 text-xl font-bold md:h-20 md:w-20" style={{ color: `#${tech.color}` }}>
                        {tech.text}
                      </div>
                    )}
                  </div>
                  <span className="text-center text-xs font-bold tracking-wide text-white/70 transition-colors group-hover:text-white md:text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="relative px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div className="reveal-sec">
              <p className="eyebrow">The challenge</p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold md:text-4xl text-white">Data silos. Scattered information. Disconnected systems.</h2>
              <div className="mt-8 space-y-5">
                {CHALLENGE.map((c, i) => (
                  <div key={c.t} className="flex gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-brand-amber/30 bg-brand-amber/10 font-heading text-xs font-bold text-brand-amber">0{i + 1}</span>
                    <div>
                      <p className="font-heading text-lg font-bold text-white">{c.t}</p>
                      <p className="mt-1 text-sm leading-6 text-white/55">{c.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="challenge-scene reveal-sec rounded-3xl border border-white/10 bg-white/[.02] p-6"><ChallengeScene /></div>
          </div>
        </section>

        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="reveal-sec max-w-2xl">
              <p className="eyebrow">Our solution</p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold md:text-4xl text-white">One assistant, connected safely to your systems.</h2>
              <p className="mt-4 text-white/60">We map your data sources, design secure integrations, and give the assistant clear boundaries so it retrieves only what the user is allowed to see.</p>
            </div>
            <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
              <div className="solution-scene reveal-sec rounded-3xl border border-white/10 bg-white/[.02] p-6"><SolutionScene /></div>
              <div className="reveal-sec grid gap-4 sm:grid-cols-2">
                {FEATURES.map(({ icon: Icon, t, d }) => (
                  <div key={t} className="rounded-2xl border border-white/10 bg-white/[.025] p-5">
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan"><Icon size={17} /></span>
                    <p className="mt-3 font-heading text-base font-bold text-white">{t}</p>
                    <p className="mt-1 text-sm leading-6 text-white/55">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="case-study" className="relative px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="reveal-sec">
              <p className="eyebrow">Case study</p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold md:text-4xl text-white">An assistant that answers from four systems in one place.</h2>
            </div>
            <div className="reveal-sec mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[.02]">
  <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
    <span className="h-2.5 w-2.5 rounded-full bg-brand-amber" />
    <span className="h-2.5 w-2.5 rounded-full bg-brand-cyan" />
    <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
    <span className="ml-3 font-mono text-xs text-white/40">https://voicecontrol.tech/</span>
  </div>
  
  {/* Image Container */}
  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0B1B20]">
    <img
      src="/images/fiveservice.jpg" // <-- Yahan apni image ka naam aur extension likho
      alt="Client project screenshot"
      className="h-full w-full object-cover"
    />
  </div>
</div>
            <div className="reveal-sec mt-8">
              <p className="text-xs font-semibold uppercase tracking-[.22em] text-brand-cyan">Measured results</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { v: 68, s: "%", l: "Faster info retrieval" },
                  { v: 240, s: "+", l: "Manual lookups removed monthly" },
                  { v: 4, s: "", l: "Systems connected" },
                  { v: 54, s: "%", l: "Faster task completion" },
                ].map((m) => (
                  <div key={m.l} className="rounded-2xl border border-white/10 bg-white/[.025] p-6">
                    <p className="font-heading text-4xl font-extrabold tabular-nums text-white" data-metric={m.v} data-suffix={m.s}>0{m.s}</p>
                    <p className="mt-2 text-sm text-white/55">{m.l}</p>
                  </div>
                ))}
              </div>
             
            </div>

            <div className="reveal-sec mt-12 grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.22em] text-brand-amber">The challenge</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-white/55">
                  <li>— Data scattered across four disconnected systems.</li>
                  <li>— Every answer required manual lookup.</li>
                  <li>— No role-aware access to information.</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.22em] text-brand-cyan">Our solution</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-white/55">
                  <li>— Custom assistant with secure integrations.</li>
                  <li>— Contextual retrieval with role checks.</li>
                  <li>— Approved actions the assistant can take safely.</li>
                </ul>
              </div>
            </div>

            <div className="reveal-sec mt-10">
              <Link href="https://voicecontrol.tech/" className="inline-flex items-center gap-2 rounded-xl border border-brand-cyan/40 bg-brand-cyan/[.08] px-6 py-3 text-sm font-semibold text-brand-cyan transition-colors hover:bg-brand-cyan/[.14] hover:text-white">Live demo <ArrowUpRight size={16} /></Link>
            </div>
          </div>
        </section>

        <section className="relative px-6 py-28">
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow justify-center">Let’s talk</p>
            <h2 className="mt-4 font-heading text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold leading-[1.05] tracking-tight text-white">
              Connect your systems into <span className="font-serif font-normal italic text-gradient">one assistant.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/60">Tell us which systems you use and what people keep looking up manually. We’ll map the integrations and access boundaries.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
             <DiscoveryButton className="btn-amber inline-flex items-center gap-2">Book a free discovery call <ArrowUpRight size={18} /></DiscoveryButton>
              <Link href="/services" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-brand-cyan/40 hover:text-white">Explore all services <ArrowRight size={16} /></Link>
            </div>
          </div>
        </section>

        <style jsx global>{`
          .eyebrow { font-size: 10px; font-weight: 700; letter-spacing: .24em; text-transform: uppercase; color: #39E7EF; display: flex; align-items: center; gap: .5rem; }
          
          @keyframes marqueeScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .marquee { animation: marqueeScroll 50s linear infinite; width: max-content; }
          .marquee:hover { animation-play-state: paused; }

          .ast-hdr { fill: rgba(230,240,242,.85); stroke: none; font-size: 9px; font-weight: 800; letter-spacing: .12em; }
          .ast-online { animation: astPulse 1.4s ease-in-out infinite; }
          @keyframes astPulse { 0%,100% { opacity: .4; } 50% { opacity: 1; } }
          .ast-msg { fill: rgba(230,240,242,.9); stroke: none; font-size: 10px; font-weight: 600; }
          .ast-msg-sm { fill: rgba(57,231,239,.8); stroke: none; font-size: 8.5px; }
          .ast-thinking-t { fill: rgba(230,240,242,.55); stroke: none; font-size: 8.5px; font-weight: 600; }
          .ast-dot { animation: astDot 1.2s ease-in-out infinite; }
          .ast-dot1 { animation-delay: 0s; } .ast-dot2 { animation-delay: .15s; } .ast-dot3 { animation-delay: .3s; }
          @keyframes astDot { 0%,100% { opacity: .25; } 50% { opacity: 1; } }
          .ast-act-t { fill: #F5B84B; stroke: none; font-size: 9.5px; font-weight: 800; letter-spacing: .08em; }
          .ast-act-s { fill: rgba(230,240,242,.8); stroke: none; font-size: 9px; font-weight: 600; }
          .ast-src { fill: #39E7EF; stroke: none; font-size: 8.5px; font-weight: 700; letter-spacing: .06em; }
          .ast-sys-t { fill: rgba(230,240,242,.85); stroke: none; font-size: 10px; font-weight: 700; letter-spacing: .06em; }
          .ast-flow { animation: astDash 2.4s linear infinite; }
          @keyframes astDash { to { stroke-dashoffset: -44; } }
          .ast-ch-l { fill: rgba(230,240,242,.55); stroke: none; font-size: 9px; font-weight: 700; letter-spacing: .1em; }
          .ast-ch-sys { fill: rgba(230,240,242,.85); stroke: none; font-size: 10px; font-weight: 800; letter-spacing: .08em; }
          .ast-ch-s { fill: rgba(230,240,242,.4); stroke: none; font-size: 8px; }
          .ast-sol-core-t { fill: #39E7EF; stroke: none; font-size: 10px; font-weight: 800; letter-spacing: .1em; }
          .ast-sol-core-s { fill: rgba(230,240,242,.5); stroke: none; font-size: 8px; }
          .ast-sol-node-t { fill: rgba(230,240,242,.85); stroke: none; font-size: 10px; font-weight: 700; letter-spacing: .06em; }
          .ast-sol-ring { transform-origin: 220px 130px; animation: astRing 14s linear infinite; }
          @keyframes astRing { to { transform: rotate(360deg); } }
          .ast-sol-out-t { fill: #39E7EF; stroke: none; font-size: 9px; font-weight: 800; letter-spacing: .12em; }
          
          @media (prefers-reduced-motion: reduce) {
            .marquee, .ast-online, .ast-dot, .ast-flow, .ast-sol-ring { animation: none !important; }
            .marquee { flex-wrap: wrap; justify-content: center; white-space: normal; }
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
}