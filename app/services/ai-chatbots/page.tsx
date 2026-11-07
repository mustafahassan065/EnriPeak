"use client";

import { useRef, type ReactNode } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, ArrowRight, MessageCircle, BookOpen, Headset, BarChart3, Search, Settings, Bell, ChevronDown, User } from "lucide-react";
import { gsap } from "@/lib/gsap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ============================================================
   SERVICE 06 — AI CHATBOTS & CONVERSATIONAL ASSISTANTS
   ============================================================ */

const CHALLENGE = [
  { t: "Slow responses", d: "Customers wait hours or days for answers to the same handful of questions." },
  { t: "Repetitive support queries", d: "Your team answers the same things instead of solving the hard ones." },
  { t: "Limited availability", d: "Support stops outside office hours, exactly when some customers need it." },
];

const FEATURES = [
  { icon: MessageCircle, t: "Context-aware chatbot", d: "Remembers the conversation and answers based on what was just asked." },
  { icon: BookOpen, t: "Knowledge retrieval", d: "Pulls answers from your approved content instead of improvising." },
  { icon: Headset, t: "Human handoff", d: "When the bot is unsure or the query is sensitive, it hands to a person with the context attached." },
  { icon: BarChart3, t: "Conversation analytics", d: "See what people ask, where the bot fails and what to improve next." },
];

const TECHNOLOGIES = [
  // LLM APIs
  { name: "OpenAI API", type: "icon", icon: "openai", color: "FFFFFF" },
  { name: "Anthropic API", type: "icon", icon: "anthropic", color: "D97757" },
  { name: "Google Gemini", type: "icon", icon: "googlegemini", color: "8E75B2" },
  { name: "Groq", type: "text", text: "GQ", color: "F55036" },
  // Vector DBs
  { name: "Pinecone", type: "icon", icon: "pinecone", color: "FFFFFF" },
  { name: "Milvus", type: "icon", icon: "milvus", color: "00A1EA" },
  { name: "Qdrant", type: "text", text: "QD", color: "EF5350" },
  { name: "Weaviate", type: "text", text: "WV", color: "43CF5B" },
  { name: "pgvector", type: "icon", icon: "postgresql", color: "4A90E2" },
  // Frameworks
  { name: "Streamlit", type: "icon", icon: "streamlit", color: "FF4B4B" },
  { name: "Chainlit", type: "text", text: "CL", color: "39E7EF" },
  { name: "Vercel AI SDK", type: "icon", icon: "vercel", color: "FFFFFF" },
  { name: "Gradio", type: "text", text: "GR", color: "F5B84B" },
  // Platforms
  { name: "Voiceflow", type: "text", text: "VF", color: "39E7EF" },
  { name: "Rasa", type: "text", text: "RS", color: "F5B84B" },
  { name: "Dialogflow CX", type: "icon", icon: "googlecloud", color: "4285F4" },
  { name: "Amazon Lex", type: "icon", icon: "amazonaws", color: "FF9900" },
];

/* ============================================================
   HERO — Real HTML/Tailwind Chatbot UI
   ============================================================ */
function HeroChatScene() {
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
            <span className="text-[10px] font-mono text-white/40">chat.enripeak.io/session/4821</span>
          </div>
        </div>

        <div className="flex h-[380px]">
          
          <div className="hero-sidebar flex w-44 flex-col border-r border-white/[0.08] bg-black/20 p-3">
            <div className="mb-4 flex items-center gap-2 px-2">
              <div className="grid h-6 w-6 place-items-center rounded bg-brand-cyan text-black"><MessageCircle size={12} /></div>
              <span className="text-xs font-bold text-white">Live Chat</span>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center gap-2 rounded-md bg-brand-cyan/10 px-2 py-1.5 border border-brand-cyan/20">
                <User size={12} className="text-brand-cyan" />
                <span className="text-[11px] font-medium text-brand-cyan">Customer (Acme)</span>
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse" />
              </div>
              {[
                { icon: Search, label: "KB Search" },
                { icon: BarChart3, label: "Analytics" },
                { icon: Settings, label: "Bot Settings" }
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
                   <span>Bot Confidence</span>
                   <span className="text-brand-cyan">98%</span>
                 </div>
                 <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                   <div className="h-full w-[98%] bg-brand-cyan rounded-full" />
                 </div>
               </div>
            </div>
          </div>

          <div className="hero-content relative flex-1 overflow-hidden p-5 flex flex-col bg-[#08141A]/50">
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <h3 className="text-sm font-bold text-white">Support Session</h3>
                <p className="text-[10px] text-white/40">Context: Order #4821</p>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse" />
                <span className="text-[10px] font-medium text-brand-cyan">AI Online</span>
              </div>
            </div>

            <div className="hero-chat flex flex-col gap-3 flex-1 overflow-y-auto pr-2">
              <div className="flex justify-end">
                <div className="rounded-lg rounded-tr-none border border-white/10 bg-white/[0.05] px-3 py-2 max-w-[80%]">
                  <p className="text-[11px] text-white">Where is my order #4821?</p>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="rounded-lg rounded-tl-none border border-brand-cyan/20 bg-brand-cyan/[0.05] px-3 py-2 flex gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>

              <div className="flex justify-start">
                <div className="rounded-md border border-brand-amber/30 bg-brand-amber/[0.05] px-3 py-1.5 text-[10px] text-brand-amber/80 italic">
                  Retrieved from KB: Order #4821 · Shipped
                </div>
              </div>

              <div className="flex justify-start">
                <div className="rounded-lg rounded-tl-none border border-brand-cyan/30 bg-brand-cyan/[0.08] px-3 py-2 max-w-[85%]">
                  <p className="text-[11px] text-white/90">Your order #4821 is on the way. Expected delivery: tomorrow.</p>
                  <a href="#" className="mt-1 block text-[10px] text-brand-cyan underline">Track: enripeak.io/t/4821</a>
                </div>
              </div>

              <div className="flex justify-start mt-2">
                <div className="rounded-lg border border-brand-amber/50 bg-brand-amber/[0.08] px-3 py-2 w-full flex items-start gap-3">
                  <Headset size={14} className="text-brand-amber mt-0.5" />
                  <div>
                    <p className="text-[11px] font-bold text-brand-amber">Connecting you to a person</p>
                    <p className="text-[10px] text-white/50">Context attached · no repeat needed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-3 relative">
              <input type="text" placeholder="Type a message..." className="w-full rounded-lg border border-white/10 bg-white/5 py-2 pl-3 pr-10 text-[11px] text-white outline-none focus:border-brand-cyan/50" disabled />
              <button className="absolute right-1 top-1 h-8 w-8 rounded-md bg-brand-cyan flex items-center justify-center text-black"><ArrowUpRight size={14}/></button>
            </div>
          </div>
        </div>
      </div>

      <div className="premium-cursor absolute bottom-[60px] right-[100px] z-20 flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 shadow-xl">
        <span className="text-[10px] font-bold text-black">Talk to human</span>
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
        <g className="chat-ch-q">
          {[0, 1, 2, 3].map((i) => (
            <g key={i} className={`chat-ch-q-${i}`}>
              <rect x="24" y={40 + i * 30} width="140" height="22" rx="8" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.18)" />
              <text x="36" y={55 + i * 30} className="chat-ch-t">Where is my order?</text>
            </g>
          ))}
        </g>
        <g className="chat-ch-inbox">
          <path d="M170 110 H210" stroke="rgba(245,184,75,.5)" strokeDasharray="3 4" />
          <rect x="210" y="60" width="110" height="140" rx="10" fill="rgba(8,20,24,.9)" stroke="rgba(255,255,255,.18)" />
          <text x="265" y="82" textAnchor="middle" className="chat-ch-l">SUPPORT INBOX</text>
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i} className={`chat-ch-mail chat-ch-mail-${i}`}>
              <rect x="222" y={92 + i * 18} width={86 - i * 4} height="10" rx="3" fill="rgba(245,184,75,.5)" />
            </g>
          ))}
        </g>
        <g className="chat-ch-clock">
          <path d="M326 130 H356" stroke="rgba(245,184,75,.5)" strokeDasharray="3 4" />
          <circle cx="384" cy="130" r="22" fill="rgba(245,184,75,.1)" stroke="rgba(245,184,75,.5)" />
          <path d="M384 118 V130 L390 134" stroke="#F5B84B" strokeWidth="2" className="chat-ch-hand" />
          <text x="384" y="172" textAnchor="middle" className="chat-ch-l" style={{ fill: "#F5B84B" }}>OFF HOURS</text>
        </g>
        <text x="220" y="234" textAnchor="middle" className="chat-ch-l">CUSTOMERS WAIT · TEAM REPEATS · AVAILABILITY STOPS</text>
      </svg>
    </div>
  );
}

function SolutionScene() {
  return (
    <div className="relative h-full min-h-[240px]" aria-hidden="true">
      <svg viewBox="0 0 440 260" className="h-full w-full" fill="none">
        <g className="chat-sol-bot">
          <rect x="20" y="100" width="100" height="60" rx="10" fill="rgba(57,231,239,.08)" stroke="#39E7EF" strokeWidth="1.6" />
          <text x="70" y="126" textAnchor="middle" className="chat-sol-core">AI BOT</text>
          <text x="70" y="142" textAnchor="middle" className="chat-sol-s">context aware</text>
        </g>
        <g className="chat-sol-kb">
          <rect x="170" y="40" width="100" height="60" rx="8" fill="rgba(245,184,75,.06)" stroke="rgba(245,184,75,.45)" />
          <text x="220" y="66" textAnchor="middle" className="chat-sol-core" style={{ fill: "#F5B84B" }}>KNOWLEDGE</text>
          <text x="220" y="82" textAnchor="middle" className="chat-sol-s">approved content</text>
        </g>
        <g className="chat-sol-human">
          <rect x="170" y="160" width="100" height="60" rx="8" fill="rgba(57,231,239,.06)" stroke="rgba(57,231,239,.45)" />
          <text x="220" y="186" textAnchor="middle" className="chat-sol-core">HUMAN</text>
          <text x="220" y="202" textAnchor="middle" className="chat-sol-s">when needed</text>
        </g>
        <g className="chat-sol-out">
          <rect x="320" y="100" width="100" height="60" rx="10" fill="rgba(57,231,239,.1)" stroke="#39E7EF" strokeWidth="1.4" />
          <text x="370" y="126" textAnchor="middle" className="chat-sol-core">REPLY</text>
          <text x="370" y="142" textAnchor="middle" className="chat-sol-s">in seconds</text>
        </g>
        <path d="M220 100 V120 H70 V100" stroke="rgba(245,184,75,.5)" strokeWidth="1.6" strokeDasharray="4 5" className="chat-sol-flow" />
        <path d="M120 130 H170" stroke="#39E7EF" strokeWidth="2" strokeDasharray="4 5" className="chat-sol-flow" />
        <path d="M270 130 H320" stroke="#39E7EF" strokeWidth="2" strokeDasharray="4 5" className="chat-sol-flow" />
        <path d="M220 130 V160" stroke="rgba(57,231,239,.45)" strokeWidth="1.6" strokeDasharray="4 5" className="chat-sol-flow" />
        <circle r="3.5" fill="#F5B84B"><animateMotion dur="2.8s" repeatCount="indefinite" path="M220 100 V120 H70 V100" /></circle>
        <circle r="3.5" fill="#39E7EF"><animateMotion dur="2.6s" repeatCount="indefinite" path="M270 130 H320" /></circle>
        <text x="220" y="240" textAnchor="middle" className="chat-sol-s" style={{ letterSpacing: ".12em" }}>RETRIEVE · ANSWER · HAND OFF</text>
      </svg>
    </div>
  );
}

export default function AiChatbotsPage() {
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
      chTl.from(".chat-ch-q", { opacity: 0, x: -8, stagger: 0.08, duration: 0.25 })
        .from(".chat-ch-inbox", { opacity: 0, x: 10, duration: 0.35 }, "-=0.1")
        .from(".chat-ch-clock", { opacity: 0, x: 10, duration: 0.35 }, "-=0.1");
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const solTl = gsap.timeline({ scrollTrigger: { trigger: ".solution-scene", start: "top 75%", once: true } });
      solTl.from(".chat-sol-bot", { opacity: 0, y: 8, duration: 0.35 })
        .from(".chat-sol-kb", { opacity: 0, y: 8, duration: 0.35 }, "-=0.1")
        .from(".chat-sol-human", { opacity: 0, y: 8, duration: 0.35 }, "-=0.1")
        .from(".chat-sol-out", { opacity: 0, x: 10, duration: 0.35 }, "-=0.1");
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
              <p className="eyebrow">AI Solutions · 06</p>
              <h1 className="mt-4 font-heading text-[clamp(2.4rem,5.5vw,4.4rem)] font-extrabold leading-[1.04] tracking-tight text-white">
                AI chatbots &amp; <span className="font-serif font-normal italic text-gradient">conversational assistants</span> that actually resolve questions.
              </h1>
              <p className="mt-6 max-w-lg text-lg text-white/60">
                A context-aware assistant that answers from your approved knowledge, resolves the repetitive queries, and hands off cleanly to a person when it should.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/#contact" className="btn-amber inline-flex items-center gap-2">Book a discovery call <ArrowUpRight size={18} /></Link>
                <Link href="#case-study" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-brand-cyan/40 hover:text-white">See the case study <ArrowRight size={16} /></Link>
              </div>
            </div>
            <HeroChatScene />
          </div>
        </section>

        <section className="relative px-6 pb-10 pt-20 text-center md:pt-24">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow justify-center">Chatbot Stack</p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
              Technologies we <span className="font-serif font-normal italic text-gradient">build with</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/55 md:text-lg">
              LLM APIs, vector databases for RAG, framework UIs, and enterprise chatbot platforms.
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
              <h2 className="mt-3 font-heading text-3xl font-extrabold md:text-4xl text-white">Slow responses. Repetitive queries. Limited availability.</h2>
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
              <h2 className="mt-3 font-heading text-3xl font-extrabold md:text-4xl text-white">Context-aware answers, with a clean handoff when it matters.</h2>
              <p className="mt-4 text-white/60">We design the assistant around your real support content, test where it fails, and wire in a human handoff so nothing gets lost.</p>
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
              <h2 className="mt-3 font-heading text-3xl font-extrabold md:text-4xl text-white">A support assistant that resolves the repetitive queries and hands off the rest.</h2>
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
                  { v: 78, s: "%", l: "Faster first response" },
                  { v: 64, s: "%", l: "Queries resolved by bot" },
                  { v: 42, s: "%", l: "Lower support workload" },
                  { v: 4.6, s: "/5", l: "Customer satisfaction" },
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
                  <li>— Same questions answered again and again.</li>
                  <li>— Long response times at peak hours.</li>
                  <li>— No support outside office hours.</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.22em] text-brand-cyan">Our solution</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-white/55">
                  <li>— Context-aware bot on approved knowledge.</li>
                  <li>— Fast answers with clear limitations.</li>
                  <li>— Human handoff with conversation context attached.</li>
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
              Answer faster. <span className="font-serif font-normal italic text-gradient">Hand off smarter.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/60">Tell us the questions that keep repeating and where your support slows down. We’ll map the assistant and its boundaries.</p>
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

          .chat-hdr { fill: rgba(230,240,242,.85); stroke: none; font-size: 9px; font-weight: 800; letter-spacing: .12em; }
          .chat-online { animation: chatPulse 1.4s ease-in-out infinite; }
          @keyframes chatPulse { 0%,100% { opacity: .4; } 50% { opacity: 1; } }
          .chat-online-t { fill: rgba(230,240,242,.5); stroke: none; font-size: 8px; letter-spacing: .06em; }
          .chat-msg { fill: rgba(230,240,242,.9); stroke: none; font-size: 10px; font-weight: 600; }
          .chat-msg-sm { fill: rgba(57,231,239,.8); stroke: none; font-size: 8.5px; }
          .chat-dot { animation: chatDot 1.2s ease-in-out infinite; }
          .chat-dot1 { animation-delay: 0s; } .chat-dot2 { animation-delay: .15s; } .chat-dot3 { animation-delay: .3s; }
          @keyframes chatDot { 0%,100% { opacity: .25; transform: translateY(0); } 50% { opacity: 1; transform: translateY(-2px); } }
          .chat-kb { fill: rgba(245,184,75,.85); stroke: none; font-size: 8.5px; font-weight: 700; }
          .chat-hand-t { fill: #F5B84B; stroke: none; font-size: 10px; font-weight: 700; }
          .chat-hand-s { fill: rgba(230,240,242,.55); stroke: none; font-size: 8.5px; }
          .chat-flow { animation: chatFlow 2.4s linear infinite; }
          @keyframes chatFlow { to { stroke-dashoffset: -44; } }
          .chat-kb-pulse { animation: chatPulse 1.6s ease-in-out infinite; }
          .chat-ch-t { fill: rgba(230,240,242,.8); stroke: none; font-size: 9.5px; font-weight: 600; }
          .chat-ch-l { fill: rgba(230,240,242,.55); stroke: none; font-size: 9px; font-weight: 700; letter-spacing: .1em; }
          .chat-ch-hand { transform-origin: 384px 130px; animation: chatHand 3s linear infinite; }
          @keyframes chatHand { to { transform: rotate(360deg); } }
          .chat-sol-core { fill: #39E7EF; stroke: none; font-size: 10px; font-weight: 800; letter-spacing: .1em; }
          .chat-sol-s { fill: rgba(230,240,242,.5); stroke: none; font-size: 8px; }
          .chat-sol-flow { animation: chatFlow 2.2s linear infinite; }
          
          @media (prefers-reduced-motion: reduce) {
            .marquee, .chat-online, .chat-dot, .chat-flow, .chat-kb-pulse, .chat-ch-hand, .chat-sol-flow { animation: none !important; }
            .marquee { flex-wrap: wrap; justify-content: center; white-space: normal; }
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
}