"use client";

import { useRef, type ReactNode } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, ArrowRight, Workflow, Plug, UserCheck, Clock, Terminal, Activity, Cpu, Search, Settings, Bell, ChevronDown } from "lucide-react";
import { gsap } from "@/lib/gsap";
import DiscoveryButton from "@/components/DiscoveryButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ============================================================
   SERVICE 05 — AI AGENTS & BUSINESS WORKFLOW AUTOMATION
   ============================================================ */

const CHALLENGE = [
  { t: "Repetitive tasks", d: "Your team spends hours copying data, sending follow-ups and moving records between tools." },
  { t: "Manual handoffs", d: "Work waits in someone’s inbox. Nobody knows whose turn it is or what happens next." },
  { t: "Slow operations", d: "Simple processes take days because they depend on people being available." },
];

const FEATURES = [
  { icon: Workflow, t: "AI agents", d: "Agents that retrieve information, decide the next step and complete multi-stage tasks." },
  { icon: Plug, t: "Tool integrations", d: "Connected to the apps your team already uses via secure, documented APIs." },
  { icon: UserCheck, t: "Human approvals", d: "Sensitive steps pause for a person to review and approve — nothing important runs unattended." },
  { icon: Clock, t: "Audit & monitoring", d: "Every run is logged, so you can see what happened and why." },
];

const TECHNOLOGIES = [
  // Orchestration
  { name: "LangGraph", type: "text", text: "LG", color: "39E7EF" },
  { name: "CrewAI", type: "text", text: "CR", color: "F5B84B" },
  { name: "AutoGen", type: "text", text: "AG", color: "FFFFFF" },
  { name: "LangChain", type: "icon", icon: "langchain", color: "FFFFFF" },
  { name: "LlamaIndex", type: "text", text: "LI", color: "F5B84B" },
  { name: "Semantic Kernel", type: "text", text: "SK", color: "39E7EF" },
  // Reasoning
  { name: "OpenAI o1/o3", type: "icon", icon: "openai", color: "FFFFFF" },
  { name: "Claude 3.5 Sonnet", type: "icon", icon: "anthropic", color: "D97757" },
  { name: "DeepSeek-R1", type: "text", text: "DS", color: "4D6BFE" },
  // Platforms
  { name: "AWS Bedrock", type: "icon", icon: "amazonaws", color: "FF9900" },
  { name: "Microsoft Copilot", type: "text", text: "MC", color: "FFFFFF" },
  { name: "Google Vertex AI", type: "icon", icon: "googlecloud", color: "4285F4" },
  // Execution
  { name: "BrowserUse", type: "text", text: "BU", color: "39E7EF" },
  { name: "Playwright", type: "icon", icon: "playwright", color: "2EAD33" },
  { name: "Selenium", type: "icon", icon: "selenium", color: "43B02A" },
  { name: "E2B Sandbox", type: "text", text: "E2B", color: "F5B84B" },
];

/* ============================================================
   HERO — High-level HTML/Tailwind AI Dashboard
   ============================================================ */
function HeroAgentScene() {
  return (
    <div className="relative mx-auto w-full max-w-[680px] select-none" aria-hidden="true">
      <div className="absolute -inset-10 rounded-full bg-brand-cyan/10 blur-[80px]" />

      <div className="hero-window relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0B1B20] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl">
        
        {/* Header */}
        <div className="flex h-12 items-center gap-2 border-b border-white/[0.08] bg-white/[0.02] px-4">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
            <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
            <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
          </div>
          <div className="mx-auto flex h-6 w-64 items-center justify-center rounded-md border border-white/[0.05] bg-black/40 px-3">
            <span className="text-[10px] font-mono text-white/40">agent.enripeak.io/run/4821</span>
          </div>
        </div>

        {/* App Body */}
        <div className="flex h-[380px]">
          
          {/* Sidebar */}
          <div className="hero-sidebar flex w-44 flex-col border-r border-white/[0.08] bg-black/20 p-3">
            <div className="mb-4 flex items-center gap-2 px-2">
              <div className="grid h-6 w-6 place-items-center rounded bg-brand-cyan text-black"><Cpu size={12} /></div>
              <span className="text-xs font-bold text-white">Agent 05</span>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center gap-2 rounded-md bg-brand-cyan/10 px-2 py-1.5 border border-brand-cyan/20">
                <Activity size={12} className="text-brand-cyan" />
                <span className="text-[11px] font-medium text-brand-cyan">Live Run</span>
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse" />
              </div>
              {[
                { icon: Terminal, label: "Logs" },
                { icon: Search, label: "History" },
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
                  <span>System Health</span>
                  <span className="text-brand-cyan">99.9%</span>
                </div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[99%] bg-brand-cyan rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="hero-content relative flex-1 overflow-hidden p-5 flex flex-col">
            
            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  Process Refund <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-white/60 font-mono">#4821</span>
                </h3>
                <p className="text-[10px] text-white/40">Executing multi-step autonomous workflow</p>
              </div>
              <div className="flex gap-2">
                <div className="grid h-7 w-7 place-items-center rounded-full border border-white/10 bg-white/5"><Bell size={12} className="text-white/60"/></div>
                <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1"><span className="text-[10px] text-white/60">Auto</span><ChevronDown size={10} className="text-white/40"/></div>
              </div>
            </div>

            {/* KPI Cards */}
            <div className="hero-kpis mb-4 grid grid-cols-3 gap-3">
              {[
                { label: "DATA FETCHED", value: "1.2s", bar: "bg-brand-cyan", w: "w-full" },
                { label: "POLICY CHECK", value: "Passed", bar: "bg-brand-amber", w: "w-1/2" },
                { label: "HUMAN REVIEW", value: "Pending", bar: "bg-brand-amber", w: "w-1/4" }
              ].map((kpi) => (
                <div key={kpi.label} className="rounded-lg border border-white/10 bg-white/[0.03] p-3 shadow-lg">
                  <span className="text-[9px] font-bold tracking-wider text-white/40">{kpi.label}</span>
                  <p className="mt-1 text-lg font-extrabold text-white">{kpi.value}</p>
                  <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
                    <div className={`h-full ${kpi.bar} ${kpi.w} rounded-full`} />
                  </div>
                </div>
              ))}
            </div>

            {/* Graph + Approval Split */}
            <div className="hero-chart grid grid-cols-[1fr_160px] gap-3 flex-1">
              
              {/* Chart Area */}
              <div className="relative rounded-lg border border-white/10 bg-white/[0.03] p-3 flex flex-col">
                <span className="text-[10px] font-bold text-white/60">Agent Activity Stream</span>
                <svg viewBox="0 0 200 60" className="mt-3 w-full h-auto overflow-visible" fill="none">
                  <path d="M0 50 L30 40 L60 45 L90 20 L120 30 L150 10 L200 15" stroke="#39E7EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chart-line" />
                  <path d="M0 50 L30 40 L60 45 L90 20 L120 30 L150 10 L200 15 V60 H0 Z" fill="url(#cyan-grad)" opacity="0.1" />
                  <defs>
                    <linearGradient id="cyan-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop stopColor="#39E7EF" /><stop offset="1" stopColor="#39E7EF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Terminal Log inside Chart */}
                <div className="mt-auto rounded bg-black/40 p-2 font-mono text-[9px] text-white/50 border border-white/5">
                  <div className="text-brand-cyan">&gt; data.retrieve(#4821) ... OK</div>
                  <div className="text-brand-cyan">&gt; policy.check() ... PASS</div>
                  <div className="text-brand-amber">&gt; awaiting_human(approval) ...</div>
                </div>
              </div>

              {/* Action / Approval Card */}
              <div className="rounded-lg border border-brand-amber/30 bg-brand-amber/[0.05] p-3 flex flex-col justify-between">
                <div>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-brand-amber"><UserCheck size={12}/> Approval</span>
                  <p className="mt-2 text-[11px] text-white/80 leading-tight">Action: Issue refund of <span className="font-bold">$129.00</span></p>
                </div>
                <div className="mt-3 space-y-1.5">
                  <button className="w-full rounded bg-brand-amber py-1.5 text-[10px] font-bold text-black hover:bg-[#ffc966] transition-colors">Approve</button>
                  <button className="w-full rounded border border-white/10 bg-white/5 py-1.5 text-[10px] text-white/60 hover:bg-white/10 transition-colors">Reject</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Cursor Action */}
      <div className="premium-cursor absolute bottom-[120px] right-[100px] z-20 flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 shadow-xl">
        <span className="text-[10px] font-bold text-black">Click to approve</span>
      </div>
      <svg className="premium-cursor-arrow absolute bottom-[100px] right-[120px] z-30 h-5 w-5 drop-shadow-md" viewBox="0 0 24 24" fill="white" stroke="#000" strokeWidth="1.5">
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
        <g className="agq-tasks">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <g key={i} className={`agq-task agq-task-${i}`}>
              <rect x="20" y={40 + i * 22} width="120" height="16" rx="4" fill="rgba(245,184,75,.1)" stroke="rgba(245,184,75,.45)" />
              <rect x="26" y={44 + i * 22} width={60 - i * 4} height="8" rx="3" fill="rgba(245,184,75,.6)" />
            </g>
          ))}
          <text x="80" y="188" textAnchor="middle" className="agq-lbl">TASK QUEUE</text>
        </g>
        <g className="agq-inbox">
          <path d="M150 130 H200" stroke="rgba(245,184,75,.5)" strokeDasharray="3 4" />
          <rect x="200" y="90" width="110" height="80" rx="8" fill="rgba(8,20,24,.9)" stroke="rgba(255,255,255,.18)" />
          <rect x="212" y="104" width="86" height="8" rx="3" fill="rgba(255,255,255,.18)" />
          <rect x="212" y="118" width="70" height="8" rx="3" fill="rgba(255,255,255,.15)" />
          <rect x="212" y="132" width="60" height="8" rx="3" fill="rgba(255,255,255,.15)" />
          <circle cx="255" cy="154" r="8" stroke="#F5B84B" strokeWidth="1.8" className="agq-wait" />
          <text x="255" y="188" textAnchor="middle" className="agq-lbl" style={{ fill: "#F5B84B" }}>ONE PERSON</text>
        </g>
        <g className="agq-output">
          <path d="M310 130 H350" stroke="rgba(245,184,75,.4)" strokeDasharray="3 4" />
          <circle cx="380" cy="130" r="22" fill="rgba(245,184,75,.1)" stroke="rgba(245,184,75,.5)" />
          <path d="M380 120 V130 L386 134" stroke="#F5B84B" strokeWidth="2" />
          <text x="380" y="172" textAnchor="middle" className="agq-lbl">SLOW</text>
          <text x="220" y="236" textAnchor="middle" className="agq-lbl">WORK WAITS · NOBODY KNOWS WHOSE TURN</text>
        </g>
      </svg>
    </div>
  );
}

function SolutionScene() {
  return (
    <div className="relative h-full min-h-[240px]" aria-hidden="true">
      <svg viewBox="0 0 440 260" className="h-full w-full" fill="none">
        <rect x="16" y="60" width="90" height="140" rx="9" fill="rgba(57,231,239,.06)" stroke="#39E7EF" strokeWidth="1.3" />
        <text x="61" y="82" textAnchor="middle" className="ags-lbl">INTAKE</text>
        {[0, 1, 2].map((i) => (
          <rect key={i} x="28" y={96 + i * 26} width="66" height="14" rx="4" fill="rgba(57,231,239,.18)" />
        ))}
        <g className="ags-engine">
          <rect x="140" y="70" width="160" height="120" rx="12" fill="rgba(57,231,239,.08)" stroke="#39E7EF" strokeWidth="1.6" />
          <text x="220" y="94" textAnchor="middle" className="ags-core">WORKFLOW</text>
          {["Pick up", "Call tool", "Approve", "Deliver"].map((s, i) => (
            <g key={s} className={`ags-step ags-step-${i}`}>
              <circle cx="160" cy={112 + i * 20} r="5" fill={i === 2 ? "#F5B84B" : "#39E7EF"} />
              <text x="172" y={116 + i * 20} className="ags-step-t">{s}</text>
            </g>
          ))}
        </g>
        <g className="ags-tools">
          {[
            { y: 70, l: "CRM" },
            { y: 120, l: "PAY" },
            { y: 170, l: "MAIL" },
          ].map((t) => (
            <g key={t.l}>
              <rect x="330" y={t.y} width="90" height="34" rx="7" fill="rgba(255,255,255,.035)" stroke="rgba(255,255,255,.2)" />
              <text x="375" y={t.y + 21} textAnchor="middle" className="ags-tool">{t.l}</text>
            </g>
          ))}
        </g>
        <path d="M106 130 H140" stroke="#39E7EF" strokeWidth="2" strokeDasharray="4 5" className="ags-flow" />
        <path d="M300 110 Q 315 110 330 87" stroke="#39E7EF" strokeWidth="2" strokeDasharray="4 5" className="ags-flow" />
        <path d="M300 130 H330" stroke="#39E7EF" strokeWidth="2" strokeDasharray="4 5" className="ags-flow" />
        <path d="M300 150 Q 315 150 330 187" stroke="#F5B84B" strokeWidth="2" strokeDasharray="4 5" className="ags-flow" />
        <circle r="3.5" fill="#39E7EF"><animateMotion dur="2.4s" repeatCount="indefinite" path="M106 130 H140" /></circle>
        <circle r="3.5" fill="#F5B84B"><animateMotion dur="3s" repeatCount="indefinite" path="M300 150 Q 315 150 330 187" /></circle>
        <g className="ags-output">
          <rect x="150" y="208" width="140" height="30" rx="15" fill="rgba(57,231,239,.1)" stroke="#39E7EF" strokeWidth="1.3" />
          <circle cx="168" cy="223" r="4" fill="#39E7EF" />
          <text x="180" y="227" className="ags-out">AUTOMATED · LOGGED</text>
        </g>
      </svg>
    </div>
  );
}

export default function AiAgentsPage() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".hero-window", { opacity: 0, y: 40, scale: 0.95, rotationX: 10 }, { opacity: 1, y: 0, scale: 1, rotationX: 0, duration: 1, ease: "power4.out" });
      tl.fromTo(".hero-sidebar > div", { opacity: 0, x: -15 }, { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 }, "-=0.6");
      tl.fromTo(".hero-kpis > div", { opacity: 0, y: 15, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.5)" }, "-=0.4");
      tl.fromTo(".chart-line", { strokeDasharray: 300, strokeDashoffset: 300 }, { strokeDashoffset: 0, duration: 1.2, ease: "power2.inOut" }, "-=0.4");
      tl.fromTo(".hero-chart .text-white\\/50 > div", { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: 0.4, stagger: 0.1 }, "-=0.8");
      tl.fromTo([".premium-cursor", ".premium-cursor-arrow"], { opacity: 0, scale: 0.5, y: 20, x: 20 }, { opacity: 1, scale: 1, y: 0, x: 0, duration: 0.6, ease: "back.out(2)" }, "-=0.2");
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const chTl = gsap.timeline({ scrollTrigger: { trigger: ".challenge-scene", start: "top 75%", once: true } });
      chTl.from(".agq-task", { opacity: 0, x: -10, stagger: 0.08, duration: 0.25 })
        .from(".agq-inbox", { opacity: 0, x: 10, duration: 0.35 }, "-=0.1")
        .from(".agq-output", { opacity: 0, x: 10, duration: 0.35 }, "-=0.1");
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const solTl = gsap.timeline({ scrollTrigger: { trigger: ".solution-scene", start: "top 75%", once: true } });
      solTl.from(".ags-engine", { opacity: 0, y: 10, duration: 0.4 })
        .from(".ags-step", { opacity: 0, x: -6, stagger: 0.1, duration: 0.25 }, "-=0.1")
        .from(".ags-tools > g", { opacity: 0, x: 12, stagger: 0.08, duration: 0.3 }, "-=0.1")
        .from(".ags-output", { opacity: 0, y: 8, duration: 0.35 }, "-=0.1");
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
              <p className="eyebrow">AI Solutions · 05</p>
              <h1 className="mt-4 font-heading text-[clamp(2.4rem,5.5vw,4.4rem)] font-extrabold leading-[1.04] tracking-tight text-white">
                AI agents &amp; <span className="font-serif font-normal italic text-gradient">workflow automation</span> that take work off your team.
              </h1>
              <p className="mt-6 max-w-lg text-lg text-white/60">
                Agents that retrieve information, take action in your tools and complete multi-step tasks — with human approval wherever it matters.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <DiscoveryButton className="btn-amber hero-btn hero-in relative overflow-hidden px-5 py-3 text-sm opacity-0 sm:px-6 sm:py-3.5 sm:text-base">
  Book a Discovery Call <ArrowUpRight size={16} />
  <span aria-hidden="true" className="btn-sheen pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-white/50 blur-md" />
</DiscoveryButton>
                <Link href="#case-study" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-brand-cyan/40 hover:text-white">See the case study <ArrowRight size={16} /></Link>
              </div>
            </div>
            <HeroAgentScene />
          </div>
        </section>

        {/* TECH MARQUEE */}
        <section className="relative px-6 pb-10 pt-20 text-center md:pt-24">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow justify-center">Agentic Stack</p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
              Technologies we <span className="font-serif font-normal italic text-gradient">build with</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/55 md:text-lg">
              Orchestration frameworks, reasoning engines, agentic platforms, and execution sandboxes.
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

        {/* CHALLENGE */}
        <section className="relative px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div className="reveal-sec">
              <p className="eyebrow">The challenge</p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold md:text-4xl text-white">Repetitive tasks. Manual handoffs. Slow operations.</h2>
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

        {/* SOLUTION */}
        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="reveal-sec max-w-2xl">
              <p className="eyebrow">Our solution</p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold md:text-4xl text-white">Agents, workflows and approvals — built around your process.</h2>
              <p className="mt-4 text-white/60">We start with the task and design the AI around it: what it should do, which tools it should call, and where a person needs to approve.</p>
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

        {/* CASE STUDY */}
        <section id="case-study" className="relative px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="reveal-sec">
              <p className="eyebrow">Case study</p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold md:text-4xl text-white">An automation workflow that replaced hours of daily manual work.</h2>
            </div>
           <div className="reveal-sec mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[.02]">
  <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
    <span className="h-2.5 w-2.5 rounded-full bg-brand-amber" />
    <span className="h-2.5 w-2.5 rounded-full bg-brand-cyan" />
    <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
    <span className="ml-3 font-mono text-xs text-white/40">https://spritzometro.com/</span>
  </div>
  
  {/* Image Container */}
  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0B1B20]">
    <img
      src="/images/sixservice.jpg" // <-- Yahan apni image ka naam aur extension likho
      alt="Client project screenshot"
      className="h-full w-full object-cover"
    />
  </div>
</div>

            <div className="reveal-sec mt-8">
              <p className="text-xs font-semibold uppercase tracking-[.22em] text-brand-cyan">Measured results</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { v: 12, s: "h", l: "Hours saved weekly" },
                  { v: 320, s: "+", l: "Tasks automated monthly" },
                  { v: 68, s: "%", l: "Faster processing time" },
                  { v: 97, s: "%", l: "Successful completion rate" },
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
                  <li>— Repetitive daily tasks with no automation.</li>
                  <li>— Handoffs stuck in inboxes.</li>
                  <li>— No audit trail of what ran and why.</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.22em] text-brand-cyan">Our solution</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-white/55">
                  <li>— Multi-step agents wired to existing tools.</li>
                  <li>— Human approval on sensitive steps.</li>
                  <li>— Full run logs for every action.</li>
                </ul>
              </div>
            </div>

            <div className="reveal-sec mt-10">
              <Link href="https://spritzometro.com/" className="inline-flex items-center gap-2 rounded-xl border border-brand-cyan/40 bg-brand-cyan/[.08] px-6 py-3 text-sm font-semibold text-brand-cyan transition-colors hover:bg-brand-cyan/[.14] hover:text-white">Live demo <ArrowUpRight size={16} /></Link>
            </div>
          </div>
        </section>

        <section className="relative px-6 py-28">
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow justify-center">Let’s talk</p>
            <h2 className="mt-4 font-heading text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold leading-[1.05] tracking-tight text-white">
              Take the repetitive work <span className="font-serif font-normal italic text-gradient">off your team.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/60">Tell us which tasks pile up and what tools you use. We’ll map the automation and where a human should approve.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <DiscoveryButton className="btn-amber hero-btn hero-in relative overflow-hidden px-5 py-3 text-sm opacity-0 sm:px-6 sm:py-3.5 sm:text-base">
  Book a Discovery Call <ArrowUpRight size={16} />
  <span aria-hidden="true" className="btn-sheen pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-white/50 blur-md" />
</DiscoveryButton>
              <Link href="/services" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-brand-cyan/40 hover:text-white">Explore all services <ArrowRight size={16} /></Link>
            </div>
          </div>
        </section>

        <style jsx global>{`
          .eyebrow { font-size: 10px; font-weight: 700; letter-spacing: .24em; text-transform: uppercase; color: #39E7EF; display: flex; align-items: center; gap: .5rem; }
          
          @keyframes marqueeScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .marquee { animation: marqueeScroll 50s linear infinite; width: max-content; }
          .marquee:hover { animation-play-state: paused; }

          .agq-lbl { fill: rgba(230,240,242,.55); stroke: none; font-size: 9px; font-weight: 700; letter-spacing: .1em; }
          .agq-wait { animation: agqWait 2s ease-in-out infinite; }
          @keyframes agqWait { 0%,100% { opacity: .35; } 50% { opacity: 1; } }
          .ags-lbl { fill: rgba(230,240,242,.55); stroke: none; font-size: 8px; font-weight: 700; letter-spacing: .12em; }
          .ags-core { fill: #39E7EF; stroke: none; font-size: 10px; font-weight: 800; letter-spacing: .12em; }
          .ags-step-t { fill: rgba(230,240,242,.85); stroke: none; font-size: 8.5px; font-weight: 600; }
          .ags-tool { fill: rgba(230,240,242,.85); stroke: none; font-size: 9px; font-weight: 700; }
          .ags-flow { animation: agsDash 2.2s linear infinite; }
          @keyframes agsDash { to { stroke-dashoffset: -36; } }
          .ags-out { fill: #39E7EF; stroke: none; font-size: 9px; font-weight: 800; letter-spacing: .1em; }
          
          @media (prefers-reduced-motion: reduce) {
            .marquee, .agq-wait, .ags-flow { animation: none !important; }
            .marquee { flex-wrap: wrap; justify-content: center; white-space: normal; }
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
}