"use client";

import { useRef, type ReactNode } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, ArrowRight, FileSearch, Tags, Table2, Download, Search, Settings, Bell, ChevronDown } from "lucide-react";
import { gsap } from "@/lib/gsap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ============================================================
   SERVICE 08 — AI-POWERED DATA & DOCUMENT INTELLIGENCE
   ============================================================ */

const CHALLENGE = [
  { t: "Manual document review", d: "Someone reads every invoice, contract or form to extract the numbers." },
  { t: "Unstructured data", d: "The information is there, but locked inside PDFs and scans." },
  { t: "Slow extraction", d: "Reports and decisions wait on someone with time to read and re-type." },
];

const FEATURES = [
  { icon: FileSearch, t: "Document processing", d: "Reads PDFs, scans and forms — structured or messy." },
  { icon: Tags, t: "AI extraction", d: "Pulls the fields that matter and understands the surrounding context." },
  { icon: Table2, t: "Classification", d: "Groups documents by type and routes them to the right place." },
  { icon: Download, t: "Structured outputs", d: "Clean data ready for your dashboard, spreadsheet or downstream system." },
];

const TECHNOLOGIES = [
  // OCR & Layout
  { name: "Tesseract", type: "text", text: "TS", color: "FFFFFF" },
  { name: "PaddleOCR", type: "text", text: "PO", color: "F5B84B" },
  { name: "LayoutLM", type: "text", text: "LM", color: "39E7EF" },
  { name: "Unstructured.io", type: "text", text: "US", color: "FFFFFF" },
  { name: "Marker", type: "text", text: "MK", color: "F5B84B" },
  // Cloud IDP
  { name: "AWS Textract", type: "icon", icon: "amazonaws", color: "FF9900" },
  { name: "Google Document AI", type: "icon", icon: "googlecloud", color: "4285F4" },
  { name: "Azure Document AI", type: "icon", icon: "microsoftazure", color: "0089D6" },
  // Vision-Language
  { name: "GPT-4o", type: "icon", icon: "openai", color: "FFFFFF" },
  { name: "Claude 3.5 Sonnet", type: "icon", icon: "anthropic", color: "D97757" },
  { name: "Gemini 1.5 Pro", type: "icon", icon: "googlegemini", color: "8E75B2" },
];

/* ============================================================
   HERO — Real HTML/Tailwind Document Intelligence UI
   ============================================================ */
function HeroDocScene() {
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
            <span className="text-[10px] font-mono text-white/40">docs.enripeak.io/process/4821</span>
          </div>
        </div>

        <div className="flex h-[380px]">
          
          <div className="hero-sidebar flex w-44 flex-col border-r border-white/[0.08] bg-black/20 p-3">
            <div className="mb-4 flex items-center gap-2 px-2">
              <div className="grid h-6 w-6 place-items-center rounded bg-brand-cyan text-black"><FileSearch size={12} /></div>
              <span className="text-xs font-bold text-white">Docs</span>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center gap-2 rounded-md bg-brand-cyan/10 px-2 py-1.5 border border-brand-cyan/20">
                <FileSearch size={12} className="text-brand-cyan" />
                <span className="text-[11px] font-medium text-brand-cyan">Processed Files</span>
              </div>
              {[
                { icon: Table2, label: "Extracted Data" },
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
                   <span>AI Confidence</span>
                   <span className="text-brand-cyan">99.2%</span>
                 </div>
                 <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                   <div className="h-full w-[99%] bg-brand-cyan rounded-full" />
                 </div>
               </div>
            </div>
          </div>

          <div className="hero-content relative flex-1 overflow-hidden p-5 flex flex-col bg-[#08141A]/50">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white">Invoice Processing</h3>
                <p className="text-[10px] text-white/40">Extracting structured data from PDF</p>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse" />
                <span className="text-[10px] font-medium text-brand-cyan">Processing</span>
              </div>
            </div>

            <div className="hero-chart grid grid-cols-2 gap-3 flex-1">
              
              <div className="relative rounded-lg border border-white/10 bg-white/[0.03] p-3 flex flex-col justify-between overflow-hidden">
                <span className="text-[10px] font-bold text-white/60">Document Preview</span>
                <div className="mt-2 flex-1 rounded border border-white/5 bg-black/40 p-2 flex flex-col gap-1">
                  <div className="h-2 w-3/4 rounded bg-white/20" />
                  <div className="h-1.5 w-1/2 rounded bg-white/10" />
                  <div className="h-1.5 w-2/3 rounded bg-white/10" />
                  <div className="mt-2 h-6 w-full rounded bg-brand-cyan/20 border border-brand-cyan/30 flex items-center justify-center text-[8px] text-brand-cyan/70">TOTAL: $4,820</div>
                </div>
                <div className="doc-scan-line absolute left-0 right-0 top-0 h-[2px] bg-brand-cyan shadow-[0_0_10px_#39E7EF]" />
              </div>

              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3 flex flex-col">
                <span className="text-[10px] font-bold text-white/60 mb-2">Extracted Fields</span>
                <div className="space-y-1.5 flex-1">
                  {[
                    { l: "Invoice #", v: "INV-4821" },
                    { l: "Vendor", v: "Acme Ltd" },
                    { l: "Date", v: "2024-11-02" },
                    { l: "Total", v: "$4,820.00" },
                    { l: "Tax", v: "$321.00" },
                  ].map((f, i) => (
                    <div key={f.l} className="doc-field flex justify-between text-[10px]">
                      <span className="text-white/40">{f.l}</span>
                      <span className="font-bold text-white">{f.v}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-2">
                   <span className="text-[9px] text-brand-cyan">Auto-classified: Invoice</span>
                   <button className="rounded bg-brand-cyan px-2 py-1 text-[9px] font-bold text-black">Export JSON</button>
                </div>
              </div>
            </div>
            
            <div className="mt-3 rounded-lg border border-white/10 bg-[#050C10] p-2 font-mono text-[9px] text-white/50">
              <div className="text-brand-cyan mb-1">&gt; document.extract(fields) ... done</div>
              <div className="text-white/40">&gt; confidence: 99.2% · 5 fields extracted · saved to DB</div>
            </div>

          </div>
        </div>
      </div>

      <div className="premium-cursor absolute bottom-[40px] right-[100px] z-20 flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 shadow-xl">
        <span className="text-[10px] font-bold text-black">Export Data</span>
      </div>
      <svg className="premium-cursor-arrow absolute bottom-[20px] right-[120px] z-30 h-5 w-5 drop-shadow-md" viewBox="0 0 24 24" fill="white" stroke="#000" strokeWidth="1.5">
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
        <g className="doc-ch-stack">
          {[0, 1, 2, 3].map((i) => (
            <g key={i} className={`doc-ch-pdf doc-ch-pdf-${i}`}>
              <rect x={30 + i * 4} y={30 + i * 4} width="110" height="140" rx="6" fill="rgba(8,20,24,.9)" stroke="rgba(255,255,255,.18)" />
              <rect x={42 + i * 4} y={44 + i * 4} width="86" height="8" rx="3" fill="rgba(255,255,255,.18)" />
              <rect x={42 + i * 4} y={60 + i * 4} width="70" height="6" rx="2" fill="rgba(255,255,255,.12)" />
              <rect x={42 + i * 4} y={74 + i * 4} width="80" height="6" rx="2" fill="rgba(255,255,255,.12)" />
            </g>
          ))}
          <text x="80" y="196" textAnchor="middle" className="doc-ch-l">HUNDREDS OF PDFs</text>
        </g>
        <g className="doc-ch-person">
          <path d="M170 110 H220" stroke="rgba(245,184,75,.5)" strokeDasharray="3 4" />
          <rect x="220" y="60" width="140" height="110" rx="8" fill="rgba(8,20,24,.9)" stroke="rgba(255,255,255,.18)" />
          <rect x="234" y="76" width="112" height="14" rx="3" fill="rgba(245,184,75,.4)" />
          {[0, 1, 2].map((i) => (
            <g key={i} className={`doc-ch-row doc-ch-row-${i}`}>
              <rect x="234" y={100 + i * 20} width="40" height="6" rx="2" fill="rgba(255,255,255,.18)" />
              <rect x="282" y={100 + i * 20} width="64" height="6" rx="2" fill="rgba(255,255,255,.12)" />
            </g>
          ))}
          <circle cx="350" cy="160" r="6" fill="rgba(245,184,75,.2)" stroke="#F5B84B" />
          <text x="290" y="192" textAnchor="middle" className="doc-ch-l" style={{ fill: "#F5B84B" }}>MANUAL RE-TYPING</text>
        </g>
        <g className="doc-ch-slow">
          <path d="M360 115 H390" stroke="rgba(245,184,75,.4)" strokeDasharray="3 4" />
          <circle cx="412" cy="115" r="20" fill="rgba(245,184,75,.1)" stroke="rgba(245,184,75,.5)" />
          <path d="M412 105 V115 L418 119" stroke="#F5B84B" strokeWidth="2" />
          <text x="412" y="152" textAnchor="middle" className="doc-ch-l">SLOW</text>
        </g>
        <text x="220" y="232" textAnchor="middle" className="doc-ch-l">DECISIONS WAIT ON SOMEONE WITH TIME TO READ</text>
      </svg>
    </div>
  );
}

function SolutionScene() {
  return (
    <div className="relative h-full min-h-[240px]" aria-hidden="true">
      <svg viewBox="0 0 440 260" className="h-full w-full" fill="none">
        <g className="doc-sol-src">
          <rect x="16" y="90" width="80" height="100" rx="6" fill="rgba(8,20,24,.9)" stroke="rgba(255,255,255,.18)" />
          <rect x="26" y="104" width="60" height="6" rx="2" fill="rgba(255,255,255,.18)" />
          <rect x="26" y="118" width="50" height="5" rx="2" fill="rgba(255,255,255,.12)" />
          <rect x="26" y="130" width="56" height="5" rx="2" fill="rgba(255,255,255,.12)" />
          <rect x="26" y="148" width="60" height="14" rx="3" fill="rgba(57,231,239,.25)" />
          <text x="56" y="206" textAnchor="middle" className="doc-sol-l">PDF</text>
        </g>
        <g className="doc-sol-core">
          <rect x="150" y="90" width="140" height="100" rx="12" fill="rgba(57,231,239,.08)" stroke="#39E7EF" strokeWidth="1.6" />
          <text x="220" y="118" textAnchor="middle" className="doc-sol-core-t">AI EXTRACTION</text>
          <text x="220" y="132" textAnchor="middle" className="doc-sol-core-s">read · extract · classify</text>
          <circle cx="220" cy="140" r="34" stroke="rgba(57,231,239,.2)" strokeDasharray="3 6" className="doc-sol-ring" />
        </g>
        <g className="doc-sol-out">
          <rect x="330" y="70" width="100" height="140" rx="8" fill="rgba(57,231,239,.06)" stroke="rgba(57,231,239,.4)" />
          <text x="380" y="90" textAnchor="middle" className="doc-sol-l" style={{ fill: "#39E7EF" }}>DATA</text>
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i} className={`doc-sol-row doc-sol-row-${i}`}>
              <rect x="344" y={106 + i * 18} width={60 - i * 6} height="6" rx="2" fill="rgba(57,231,239,.55)" />
            </g>
          ))}
          <rect x="344" y="196" width="40" height="6" rx="2" fill="rgba(245,184,75,.55)" />
          <text x="380" y="226" textAnchor="middle" className="doc-sol-l" style={{ fill: "#F5B84B" }}>STRUCTURED</text>
        </g>
        <path d="M96 140 H150" stroke="#39E7EF" strokeWidth="2" strokeDasharray="4 5" className="doc-sol-flow" />
        <path d="M290 140 H330" stroke="#39E7EF" strokeWidth="2" strokeDasharray="4 5" className="doc-sol-flow" />
        <circle r="3.5" fill="#39E7EF"><animateMotion dur="2.6s" repeatCount="indefinite" path="M96 140 H150" /></circle>
        <circle r="3.5" fill="#F5B84B"><animateMotion dur="2.6s" repeatCount="indefinite" path="M290 140 H330" /></circle>
        <text x="220" y="228" textAnchor="middle" className="doc-sol-core-s">READ ONCE · EXTRACT ONCE · TRUST THE OUTPUT</text>
      </svg>
    </div>
  );
}

export default function DocumentIntelligencePage() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".hero-window", { opacity: 0, y: 40, scale: 0.95, rotationX: 10 }, { opacity: 1, y: 0, scale: 1, rotationX: 0, duration: 1, ease: "power4.out" });
      tl.fromTo(".hero-sidebar > div", { opacity: 0, x: -15 }, { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 }, "-=0.6");
      tl.fromTo(".hero-chart > div", { opacity: 0, y: 15, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.15, ease: "back.out(1.5)" }, "-=0.4");
      tl.fromTo(".doc-field", { opacity: 0, x: 10 }, { opacity: 1, x: 0, duration: 0.3, stagger: 0.1 }, "-=0.2");
      tl.fromTo([".premium-cursor", ".premium-cursor-arrow"], { opacity: 0, scale: 0.5, y: 20, x: 20 }, { opacity: 1, scale: 1, y: 0, x: 0, duration: 0.6, ease: "back.out(2)" }, "-=0.2");
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const chTl = gsap.timeline({ scrollTrigger: { trigger: ".challenge-scene", start: "top 75%", once: true } });
      chTl.from(".doc-ch-pdf", { opacity: 0, y: 8, stagger: 0.1, duration: 0.3 })
        .from(".doc-ch-person", { opacity: 0, x: 10, duration: 0.35 }, "-=0.1")
        .from(".doc-ch-slow", { opacity: 0, x: 10, duration: 0.35 }, "-=0.1");
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const solTl = gsap.timeline({ scrollTrigger: { trigger: ".solution-scene", start: "top 75%", once: true } });
      solTl.from(".doc-sol-src", { opacity: 0, x: -10, duration: 0.3 })
        .from(".doc-sol-core", { opacity: 0, y: 10, duration: 0.4 }, "-=0.1")
        .from(".doc-sol-out", { opacity: 0, x: 10, duration: 0.35 }, "-=0.1")
        .from(".doc-sol-row", { opacity: 0, y: 4, stagger: 0.08, duration: 0.2 }, "-=0.1");
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
              <p className="eyebrow">AI Solutions · 08</p>
              <h1 className="mt-4 font-heading text-[clamp(2.4rem,5.5vw,4.4rem)] font-extrabold leading-[1.04] tracking-tight text-white">
                AI-powered data &amp; <span className="font-serif font-normal italic text-gradient">document intelligence</span> that turns PDFs into answers.
              </h1>
              <p className="mt-6 max-w-lg text-lg text-white/60">
                Upload a document, and the system reads it, extracts the fields that matter, classifies it and produces structured data ready for your dashboard or system.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/#contact" className="btn-amber inline-flex items-center gap-2">Book a discovery call <ArrowUpRight size={18} /></Link>
                <Link href="#case-study" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-brand-cyan/40 hover:text-white">See the case study <ArrowRight size={16} /></Link>
              </div>
            </div>
            <HeroDocScene />
          </div>
        </section>

        <section className="relative px-6 pb-10 pt-20 text-center md:pt-24">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow justify-center">IDP Stack</p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
              Technologies we <span className="font-serif font-normal italic text-gradient">build with</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/55 md:text-lg">
              OCR parsers, cloud IDP services, and native vision-language models.
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
              <h2 className="mt-3 font-heading text-3xl font-extrabold md:text-4xl text-white">Manual review. Unstructured data. Slow extraction.</h2>
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
              <h2 className="mt-3 font-heading text-3xl font-extrabold md:text-4xl text-white">Read once. Extract once. Trust the output.</h2>
              <p className="mt-4 text-white/60">We design the extraction around the fields you actually need, handle messy documents with clear failure states, and route structured data into the tools your team already uses.</p>
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
              <h2 className="mt-3 font-heading text-3xl font-extrabold md:text-4xl text-white">A document pipeline that replaced manual data entry with structured output.</h2>
            </div>
           <div className="reveal-sec mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[.02]">
  <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
    <span className="h-2.5 w-2.5 rounded-full bg-brand-amber" />
    <span className="h-2.5 w-2.5 rounded-full bg-brand-cyan" />
    <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
    <span className="ml-3 font-mono text-xs text-white/40"></span>
  </div>
  
  {/* Image Container */}
  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0B1B20]">
    <img
      src="/images/eightservice.jpg" // <-- Yahan apni image ka naam aur extension likho
      alt="Client project screenshot"
      className="h-full w-full object-cover"
    />
  </div>
</div>

            <div className="reveal-sec mt-8">
              <p className="text-xs font-semibold uppercase tracking-[.22em] text-brand-cyan">Measured results</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { v: 2200, s: "+", l: "Total Documents processed" },
                  { v: 92, s: "%", l: "Extraction accuracy" },
                  { v: 72, s: "%", l: "Review time reduced" },
                  { v: 3, s: "x", l: "Faster decision-making" },
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
                  <li>— Thousands of PDFs reviewed manually.</li>
                  <li>— Data locked in unstructured documents.</li>
                  <li>— Reports delayed by slow extraction.</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.22em] text-brand-cyan">Our solution</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-white/55">
                  <li>— Document processing across PDFs and scans.</li>
                  <li>— AI extraction of the fields that matter.</li>
                  <li>— Structured outputs feeding existing dashboards.</li>
                </ul>
              </div>
            </div>

            <div className="reveal-sec mt-10">
              <Link href="#" className="inline-flex items-center gap-2 rounded-xl border border-brand-cyan/40 bg-brand-cyan/[.08] px-6 py-3 text-sm font-semibold text-brand-cyan transition-colors hover:bg-brand-cyan/[.14] hover:text-white">Live demo <ArrowUpRight size={16} /></Link>
            </div>
          </div>
        </section>

        <section className="relative px-6 py-28">
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow justify-center">Let’s talk</p>
            <h2 className="mt-4 font-heading text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold leading-[1.05] tracking-tight text-white">
              Turn your documents into <span className="font-serif font-normal italic text-gradient">clean, usable data.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/60">Tell us what documents slow your team down and which fields you actually need. We’ll map the extraction pipeline.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href="/#contact" className="btn-amber inline-flex items-center gap-2">Book a free discovery call <ArrowUpRight size={18} /></Link>
              <Link href="/services" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-brand-cyan/40 hover:text-white">Explore all services <ArrowRight size={16} /></Link>
            </div>
          </div>
        </section>

        <style jsx global>{`
          .eyebrow { font-size: 10px; font-weight: 700; letter-spacing: .24em; text-transform: uppercase; color: #39E7EF; display: flex; align-items: center; gap: .5rem; }
          
          @keyframes marqueeScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .marquee { animation: marqueeScroll 50s linear infinite; width: max-content; }
          .marquee:hover { animation-play-state: paused; }

          .doc-lbl { fill: rgba(230,240,242,.55); stroke: none; font-size: 8.5px; font-weight: 800; letter-spacing: .14em; }
          .doc-src-t { fill: rgba(57,231,239,.9); stroke: none; font-size: 9px; font-weight: 800; }
          .doc-ai-t { fill: #39E7EF; stroke: none; font-size: 10px; font-weight: 800; letter-spacing: .12em; }
          .doc-step-t { fill: rgba(230,240,242,.85); stroke: none; font-size: 9px; font-weight: 600; }
          .doc-tick { opacity: 0; transform-box: fill-box; transform-origin: center; }
          .doc-tick-0 { animation: docTick 6s ease-in-out infinite .2s; }
          .doc-tick-1 { animation: docTick 6s ease-in-out infinite .9s; }
          .doc-tick-2 { animation: docTick 6s ease-in-out infinite 1.6s; }
          .doc-tick-3 { animation: docTick 6s ease-in-out infinite 2.3s; }
          @keyframes docTick { 0%, 5% { opacity: 0; transform: scale(.4); } 15%, 90% { opacity: 1; transform: scale(1); } 100% { opacity: 0; } }
          .doc-field-l { fill: rgba(230,240,242,.55); stroke: none; font-size: 8.5px; font-weight: 700; }
          .doc-field-v { fill: rgba(230,240,242,.9); stroke: none; font-size: 9px; font-weight: 700; text-anchor: end; }
          .doc-row-v { fill: rgba(57,231,239,.85); stroke: none; font-size: 9px; font-weight: 800; }
          .doc-bar { transform-box: fill-box; transform-origin: 50% 100%; animation: docBar 3.2s ease-in-out infinite; }
          .doc-bar-0 { animation-delay: 0s; } .doc-bar-1 { animation-delay: .1s; } .doc-bar-2 { animation-delay: .2s; }
          .doc-bar-3 { animation-delay: .3s; } .doc-bar-4 { animation-delay: .4s; } .doc-bar-5 { animation-delay: .5s; }
          @keyframes docBar { 0%,100% { transform: scaleY(.35); } 50% { transform: scaleY(1); } }
          .doc-flow { animation: docDash 2.4s linear infinite; }
          @keyframes docDash { to { stroke-dashoffset: -44; } }
          .doc-ch-l { fill: rgba(230,240,242,.55); stroke: none; font-size: 9px; font-weight: 700; letter-spacing: .1em; }
          .doc-sol-l { fill: rgba(230,240,242,.55); stroke: none; font-size: 8.5px; font-weight: 800; letter-spacing: .12em; }
          .doc-sol-core-t { fill: #39E7EF; stroke: none; font-size: 10px; font-weight: 800; letter-spacing: .1em; }
          .doc-sol-core-s { fill: rgba(230,240,242,.5); stroke: none; font-size: 8px; }
          .doc-sol-ring { transform-origin: 220px 140px; animation: docRing 14s linear infinite; }
          @keyframes docRing { to { transform: rotate(360deg); } }
          .doc-sol-flow { animation: docDash 2.2s linear infinite; }

          .doc-scan-line { animation: docScan 2.5s ease-in-out infinite; }
          @keyframes docScan {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }

          @media (prefers-reduced-motion: reduce) {
            .marquee, .doc-tick, .doc-bar, .doc-flow, .doc-sol-ring, .doc-sol-flow, .doc-scan-line { animation: none !important; opacity: 1; transform: none; }
            .marquee { flex-wrap: wrap; justify-content: center; white-space: normal; }
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
}