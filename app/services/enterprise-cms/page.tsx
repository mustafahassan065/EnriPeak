"use client";

import { useRef, type ReactNode } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, ArrowRight, FileText, CheckCircle2, Globe2, Lock } from "lucide-react";
import { gsap } from "@/lib/gsap";
import DiscoveryButton from "@/components/DiscoveryButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ============================================================
   SERVICE 03 — ENTERPRISE CMS & PORTAL DEVELOPMENT
   ============================================================ */

const CHALLENGE = [
  { t: "Scattered content", d: "Content lives across drives, inboxes and old sites. Nobody knows which version is current." },
  { t: "Complicated approvals", d: "Publishing requires chasing sign-off across email threads and spreadsheets." },
  { t: "Limited access control", d: "Everyone has the same permissions, or nobody can update anything." },
];

const FEATURES = [
  { icon: FileText, t: "Central content model", d: "Structured content types that stay consistent across every site and portal." },
  { icon: CheckCircle2, t: "Publishing workflows", d: "Draft → review → approve → publish, with clear stages and notifications." },
  { icon: Lock, t: "Role permissions", d: "Granular access so every team edits only what it owns." },
  { icon: Globe2, t: "Multi-site publishing", d: "One content source, published to many websites and portals." },
];

const TECHNOLOGIES = [
  { name: "HTML5", icon: "html5", color: "E34F26" },
  { name: "CSS3", icon: "css3", color: "33A9DC" },
  { name: "JavaScript", icon: "javascript", color: "F7DF1E" },
  { name: "TypeScript", icon: "typescript", color: "3178C6" },
  { name: "Python", icon: "python", color: "4B8BBE" },
  { name: "PHP", icon: "php", color: "8993BE" },
  { name: "React", icon: "react", color: "61DAFB" },
  { name: "Next.js", icon: "nextdotjs", color: "FFFFFF" },
  { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
  { name: "Node.js", icon: "nodedotjs", color: "5FA04E" },
  { name: "Express", icon: "express", color: "FFFFFF" },
  { name: "NestJS", icon: "nestjs", color: "E0234E" },
  { name: "Django", icon: "django", color: "44B78B" },
  { name: "Flask", icon: "flask", color: "FFFFFF" },
  { name: "FastAPI", icon: "fastapi", color: "009688" },
  { name: "Laravel", icon: "laravel", color: "FF2D20" },
  { name: "GraphQL", icon: "graphql", color: "E10098" },
  { name: "PostgreSQL", icon: "postgresql", color: "4A90E2" },
  { name: "MongoDB", icon: "mongodb", color: "47A248" },
  { name: "MySQL", icon: "mysql", color: "5BA3D0" },
  { name: "Redis", icon: "redis", color: "FF4438" },
  { name: "Supabase", icon: "supabase", color: "3FCF8E" },
  { name: "WordPress", icon: "wordpress", color: "4AA3DF" },
  { name: "Shopify", icon: "shopify", color: "7AB55C" },
  { name: "Stripe", icon: "stripe", color: "8B85FF" },
  { name: "Git", icon: "git", color: "F05032" },
  { name: "Docker", icon: "docker", color: "2496ED" },
  { name: "AWS", icon: "amazonaws", color: "FF9900" },
  { name: "Nginx", icon: "nginx", color: "009639" },
  { name: "Vercel", icon: "vercel", color: "FFFFFF" },
];

function SceneDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="scCard" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#15303A" /><stop offset="1" stopColor="#0C1C22" /></linearGradient>
        <linearGradient id="scCore" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#39E7EF" stopOpacity=".22" /><stop offset="1" stopColor="#39E7EF" stopOpacity=".05" /></linearGradient>
        <linearGradient id="scArea" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#39E7EF" stopOpacity=".35" /><stop offset="1" stopColor="#39E7EF" stopOpacity="0" /></linearGradient>
        <linearGradient id="scAreaAmber" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#F5B84B" stopOpacity=".3" /><stop offset="1" stopColor="#F5B84B" stopOpacity="0" /></linearGradient>
        <linearGradient id="scImg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#39E7EF" stopOpacity=".5" /><stop offset="1" stopColor="#1B4B6B" stopOpacity=".7" /></linearGradient>
        <linearGradient id="scImg2" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#F5B84B" stopOpacity=".55" /><stop offset="1" stopColor="#7A3E1E" stopOpacity=".6" /></linearGradient>
        <linearGradient id="scScan" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#39E7EF" stopOpacity="0" /><stop offset=".5" stopColor="#39E7EF" stopOpacity=".35" /><stop offset="1" stopColor="#39E7EF" stopOpacity="0" /></linearGradient>
        <filter id="scShadow" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#000" floodOpacity=".55" /></filter>
        <filter id="scGlow" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#39E7EF" floodOpacity=".35" /></filter>
      </defs>
    </svg>
  );
}

function Win({ w, h, title, accent, children }: { w: number; h: number; title: string; accent?: string; children?: ReactNode }) {
  return (
    <g>
      <rect width={w} height={h} rx="8" fill="url(#scCard)" stroke={accent || "rgba(255,255,255,.12)"} filter="url(#scShadow)" />
      <path d={`M0 8a8 8 0 0 1 8-8h${w - 16}a8 8 0 0 1 8 8v10H0z`} fill="rgba(255,255,255,.045)" />
      <circle cx="9" cy="9" r="2" fill="#FF5F56" />
      <circle cx="16" cy="9" r="2" fill="#FFBD2E" />
      <circle cx="23" cy="9" r="2" fill="#27C93F" />
      <text x="32" y="11.5" className="sc-win-t">{title}</text>
      {children}
    </g>
  );
}

function Sk({ x, y, w, h = 3, o = 0.14, c = "#fff" }: { x: number; y: number; w: number; h?: number; o?: number; c?: string }) {
  return <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={c} fillOpacity={o} />;
}

function HeroPublishScene() {
  const approvals = [["SK", "Editor", true], ["LM", "Legal", true], ["OR", "Publish", false]] as const;
  const channels = ["Website", "Portal", "Partner app"];
  return (
    <div className="relative mx-auto w-full max-w-[640px]" aria-hidden="true">
      <svg viewBox="0 0 440 320" className="h-auto w-full overflow-visible" fill="none" fontFamily="ui-sans-serif, system-ui, sans-serif">
        <g className="cms-hflow">
          {["M134 80 H156", "M284 80 H306"].map((d) => (<path key={d} d={d} stroke="rgba(57,231,239,.6)" strokeWidth="1.6" strokeDasharray="3 3" className="sol-dash" />))}
          <circle r="2.6" fill="#39E7EF"><animateMotion dur="1.8s" repeatCount="indefinite" path="M134 80 H156" /></circle>
          <circle r="2.6" fill="#F5B84B"><animateMotion dur="1.8s" begin=".6s" repeatCount="indefinite" path="M284 80 H306" /></circle>
        </g>
        <g className="cms-h0"><g transform="translate(6 10)">
          <Win w={128} h={140} title="Editor">
            <text x="10" y="34" className="sc-hl">Q4 product update</text>
            {["B", "I", "H1", "🔗"].map((t, i) => (
              <g key={t}>
                <rect x={10 + i * 22} y="42" width="18" height="11" rx="3" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.12)" />
                <text x={19 + i * 22} y="50" textAnchor="middle" className="sc-dim">{i === 3 ? "↗" : t}</text>
              </g>
            ))}
            <Sk x={10} y={66} w={104} o={0.16} /><Sk x={10} y={75} w={92} o={0.14} /><Sk x={10} y={84} w={100} o={0.14} />
            <rect x="10" y="93" width="58" height="3" rx="1.5" fill="#39E7EF" fillOpacity=".7" className="type-bar" />
            <rect x="70" y="91" width="1.2" height="7" fill="#39E7EF" className="caret" />
            <rect x="10" y="114" width="44" height="12" rx="6" fill="rgba(245,184,75,.16)" stroke="rgba(245,184,75,.5)" />
            <circle cx="19" cy="120" r="2" fill="#F5B84B" className="cms-pulse" />
            <text x="25" y="122.2" className="sc-amber">Draft</text>
          </Win>
        </g></g>
        <g className="cms-h1"><g transform="translate(156 10)">
          <Win w={128} h={140} title="Approval">
            {approvals.map(([ini, name, done], i) => (
              <g key={name} transform={`translate(0 ${24 + i * 34})`}>
                <path d="M8 31H120" stroke="rgba(255,255,255,.07)" />
                <circle cx="18" cy="13" r="8" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.2)" />
                <text x="18" y="15.2" textAnchor="middle" className="sc-dim">{ini}</text>
                <text x="32" y="11" className="sc-txt">{name}</text>
                <text x="32" y="20.5" className={done ? "sc-green" : "sc-amber"}>{done ? "Approved" : "Pending"}</text>
                {done ? (
                  <g><circle cx="108" cy="13" r="7" fill="rgba(39,201,63,.18)" stroke="#27C93F" /><path d="M104.5 13 L107 15.5 L111.5 10.5" stroke="#27C93F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></g>
                ) : (
                  <g><circle cx="108" cy="13" r="7" stroke="#F5B84B" strokeDasharray="3 3" className="spin" /><circle cx="108" cy="13" r="2" fill="#F5B84B" className="cms-pulse" /></g>
                )}
              </g>
            ))}
            <text x="10" y="132" className="sc-dim">2 of 3 approved</text>
          </Win>
        </g></g>
        <g className="cms-h2"><g transform="translate(306 10)">
          <Win w={128} h={140} title="Publish to">
            {channels.map((c, i) => (
              <g key={c} transform={`translate(0 ${26 + i * 28})`}>
                <path d="M8 24H120" stroke="rgba(255,255,255,.07)" />
                <rect x="10" y="5" width="20" height="10" rx="5" fill="#39E7EF" fillOpacity=".85" />
                <circle cx="25" cy="10" r="3.6" fill="#08141A" />
                <text x="38" y="12.6" className="sc-txt">{c}</text>
                <circle cx="104" cy="10" r="2.2" fill="#27C93F" />
                <circle cx="104" cy="10" r="2.2" fill="#27C93F" className="sol-pulse" />
                <text x="109" y="12.2" className="sc-green">Live</text>
              </g>
            ))}
            <text x="10" y="132" className="sc-dim">Schedule: publish now</text>
          </Win>
        </g></g>
        <g className="cms-hsite"><g transform="translate(70 170)">
          <Win w={300} h={140} title="yourbrand.com/news" accent="rgba(57,231,239,.35)">
            <rect x="12" y="26" width="10" height="10" rx="3" fill="#39E7EF" />
            <Sk x={28} y={29} w={30} o={0.3} />
            <Sk x={190} y={29} w={22} /><Sk x={218} y={29} w={22} /><Sk x={246} y={29} w={30} />
            <rect x="12" y="46" width="22" height="10" rx="5" fill="rgba(39,201,63,.16)" stroke="rgba(39,201,63,.5)" />
            <text x="23" y="53.4" textAnchor="middle" className="sc-green">NEW</text>
            <text x="12" y="76" className="sc-hl">Q4 product update</text>
            <Sk x={12} y={86} w={140} o={0.2} /><Sk x={12} y={95} w={120} /><Sk x={12} y={104} w={130} />
            <rect x="12" y="116" width="52" height="14" rx="7" fill="#39E7EF" />
            <text x="38" y="125.6" textAnchor="middle" className="sc-dark">Read more</text>
            <rect x="178" y="46" width="110" height="84" rx="6" fill="url(#scImg)" stroke="rgba(57,231,239,.3)" />
            <circle cx="262" cy="68" r="9" fill="#fff" fillOpacity=".18" />
            <path d="M178 118 L212 92 L236 108 L258 88 L288 112 V130 H178Z" fill="#08141A" fillOpacity=".35" />
          </Win>
          <g className="toast">
            <rect x="170" y="24" width="124" height="16" rx="8" fill="#0F2A25" stroke="#27C93F" />
            <path d="M180 32 l3 3 5-6" stroke="#27C93F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <text x="194" y="34.4" className="sc-green">Published to 3 channels</text>
          </g>
        </g></g>
      </svg>
    </div>
  );
}

function ChallengeScene() {
  const files = [["Homepage_final.docx", "edited by 4"], ["Homepage_final_v3.docx", "edited by 2"], ["Homepage_FINAL_real.docx", "edited by 6"], ["Copy of Homepage (2).docx", "edited by 1"]];
  const mails = [["Legal", "Please approve ASAP"], ["Marketing", "Re: Re: sign-off?"], ["CEO", "Which version??"], ["Agency", "Approved* (see below)"]];
  return (
    <div className="relative h-full min-h-[240px]" aria-hidden="true">
      <svg viewBox="0 0 440 280" className="h-full w-full" fill="none" fontFamily="ui-sans-serif, system-ui, sans-serif">
        <g className="cms-cflow">
          {["M68 132 V152 H150 V176", "M220 132 V176", "M372 132 V152 H290 V176"].map((d) => (<path key={d} d={d} stroke="rgba(245,184,75,.5)" strokeWidth="1.4" strokeDasharray="3 4" className="ch-flow" />))}
          <rect x="160" y="145" width="120" height="14" rx="7" fill="#1B1D18" stroke="rgba(245,184,75,.55)" />
          <text x="220" y="154.6" textAnchor="middle" className="sc-amber">CHASING SIGN-OFFS</text>
        </g>
        <g className="cms-c0"><g transform="translate(6 14)">
          <Win w={124} h={118} title="Drive · /Content">
            {files.map(([n, s], i) => (
              <g key={n} transform={`translate(0 ${24 + i * 22})`}>
                <path d="M8 21H116" stroke="rgba(255,255,255,.07)" />
                <path d="M10 3h7l3 3v9h-10z" fill="rgba(57,231,239,.18)" stroke="rgba(57,231,239,.5)" strokeWidth=".8" />
                <text x="25" y="8" className="sc-txt">{n}</text>
                <text x="25" y="16.5" className="sc-dim">{s}</text>
              </g>
            ))}
          </Win>
        </g></g>
        <g className="cms-c1"><g transform="translate(158 14)">
          <Win w={124} h={118} title="Inbox">
            <rect x="92" y="3" width="26" height="11" rx="5.5" fill="rgba(245,184,75,.18)" />
            <text x="105" y="10.8" textAnchor="middle" className="sc-amber">52</text>
            {mails.map(([f, s], i) => (
              <g key={f} transform={`translate(0 ${24 + i * 22})`}>
                <path d="M8 21H116" stroke="rgba(255,255,255,.07)" />
                <circle cx="13" cy="9" r="2.2" fill={i < 3 ? "#39E7EF" : "rgba(255,255,255,.2)"} />
                <text x="22" y="8" className="sc-txt">{f}</text>
                <text x="22" y="16.5" className="sc-dim">{s}</text>
              </g>
            ))}
          </Win>
        </g></g>
        <g className="cms-c2"><g transform="translate(310 14)">
          <Win w={124} h={118} title="oldsite.com/news">
            <rect x="8" y="24" width="108" height="14" rx="2" fill="rgba(255,255,255,.07)" />
            <Sk x={14} y={30} w={30} o={0.3} />
            <text x="10" y="54" className="sc-txt">Spring Sale 2019</text>
            <Sk x={10} y={60} w={96} /><Sk x={10} y={68} w={80} />
            <rect x="10" y="78" width="104" height="14" rx="3" fill="rgba(245,184,75,.12)" stroke="rgba(245,184,75,.5)" className="ch-err" />
            <text x="62" y="87.6" textAnchor="middle" className="sc-amber">Last updated 2019</text>
            <Sk x={10} y={100} w={60} o={0.1} />
          </Win>
        </g></g>
        <g className="cms-cq"><g transform="translate(110 176)">
          <Win w={220} h={94} title="Publishing queue">
            <text x="12" y="34" className="sc-txt">Spring campaign</text>
            <rect x="12" y="39" width="120" height="5" rx="2.5" fill="rgba(255,255,255,.08)" />
            <rect x="12" y="39" width="48" height="5" rx="2.5" fill="#F5B84B" fillOpacity=".8" className="bar-stall" />
            <rect x="140" y="30" width="68" height="12" rx="6" fill="rgba(245,184,75,.16)" stroke="rgba(245,184,75,.5)" className="ch-err" />
            <text x="174" y="38.4" textAnchor="middle" className="sc-amber">Stalled · 12d</text>
            <path d="M12 54H208" stroke="rgba(255,255,255,.07)" />
            <text x="12" y="67" className="sc-txt">Careers page</text>
            <text x="208" y="67" textAnchor="end" className="sc-dim">Which version is current?</text>
            <circle cx="15" cy="81" r="4" stroke="#F5B84B" strokeWidth="1" />
            <path d="M15 78.6V81l1.8 1.2" stroke="#F5B84B" strokeWidth="1" strokeLinecap="round" />
            <text x="24" y="83.4" className="sc-amber">Nobody knows · publishing stalls</text>
          </Win>
        </g></g>
      </svg>
    </div>
  );
}

function SolutionScene() {
  const links = [
    { d: "M136 40 Q175 40 175 76", n: 0 }, { d: "M136 176 H160 Q175 176 175 164", n: 1 },
    { d: "M304 40 Q265 40 265 76", n: 2 }, { d: "M304 176 H280 Q265 176 265 164", n: 3 },
  ];
  const sites = [
    { t: "Site A", x: 8, y: 10, n: 0, v: 0 }, { t: "Portal", x: 8, y: 134, n: 1, v: 1 },
    { t: "Site B", x: 304, y: 10, n: 2, v: 2 }, { t: "Partner app", x: 304, y: 134, n: 3, v: 3 },
  ];
  const thumb = (v: number) => {
    if (v === 0) return (<g><Sk x={10} y={26} w={40} o={0.3} /><Sk x={88} y={26} w={30} /><rect x="10" y="38" width="62" height="6" rx="3" fill="#39E7EF" fillOpacity=".6" /><Sk x={10} y={50} w={56} /><Sk x={10} y={58} w={48} /><rect x="78" y="36" width="40" height="38" rx="4" fill="url(#scImg)" /></g>);
    if (v === 1) return (<g><rect x="8" y="22" width="26" height="58" fill="rgba(255,255,255,.04)" /><Sk x={12} y={30} w={18} o={0.3} /><Sk x={12} y={40} w={14} /><Sk x={12} y={50} w={16} /><rect x="40" y="28" width="36" height="22" rx="3" fill="rgba(57,231,239,.14)" /><rect x="80" y="28" width="38" height="22" rx="3" fill="rgba(255,255,255,.06)" /><rect x="40" y="54" width="36" height="22" rx="3" fill="rgba(255,255,255,.06)" /><rect x="80" y="54" width="38" height="22" rx="3" fill="rgba(245,184,75,.14)" /></g>);
    if (v === 2) return (<g><rect x="8" y="24" width="112" height="26" rx="4" fill="url(#scImg2)" /><Sk x={14} y={32} w={50} o={0.7} /><Sk x={14} y={40} w={34} o={0.4} /><rect x="8" y="56" width="34" height="22" rx="3" fill="rgba(255,255,255,.06)" /><rect x="47" y="56" width="34" height="22" rx="3" fill="rgba(255,255,255,.06)" /><rect x="86" y="56" width="34" height="22" rx="3" fill="rgba(255,255,255,.06)" /></g>);
    return (<g>{[0, 1, 2].map((i) => (<g key={i} transform={`translate(0 ${i * 18})`}><circle cx="18" cy="32" r="6" fill="rgba(57,231,239,.14)" stroke="rgba(57,231,239,.4)" /><Sk x={30} y={28} w={60} o={0.3} /><Sk x={30} y={35} w={42} /><rect x="98" y="28" width="20" height="9" rx="4.5" fill="rgba(57,231,239,.16)" /></g>))}</g>);
  };
  return (
    <div className="relative h-full min-h-[240px]" aria-hidden="true">
      <svg viewBox="0 0 440 280" className="h-full w-full" fill="none" fontFamily="ui-sans-serif, system-ui, sans-serif">
        {links.map((l) => (<g key={l.n} className="cms-s-link"><path d={l.d} stroke="rgba(57,231,239,.5)" strokeWidth="1.4" strokeDasharray="4 6" className="sol-dash" /></g>))}
        <path d="M220 164 V228" stroke="rgba(57,231,239,.5)" strokeWidth="1.4" strokeDasharray="4 6" className="sol-dash" />
        <g className="cms-s-core">
          <circle cx="220" cy="120" r="62" stroke="rgba(57,231,239,.22)" strokeDasharray="3 8" className="sol-core-ring" />
          <g transform="translate(150 76)" filter="url(#scGlow)">
            <rect width="140" height="88" rx="12" fill="url(#scCore)" stroke="#39E7EF" strokeWidth="1.4" />
            <text x="70" y="21" textAnchor="middle" className="sol-core-t">CONTENT MODEL</text>
            <path d="M12 28H128" stroke="rgba(57,231,239,.2)" />
            {["Title", "Body", "Image", "Locale", "SEO", "Roles"].map((l, i) => (
              <g key={l} transform={`translate(${10 + (i % 3) * 43} ${34 + Math.floor(i / 3) * 17})`}>
                <rect width="38" height="13" rx="4" fill="rgba(8,20,26,.7)" stroke="rgba(57,231,239,.35)" />
                <text x="19" y="9" textAnchor="middle" className="sc-txt">{l}</text>
              </g>
            ))}
            <circle cx="16" cy="76" r="2.4" fill="#27C93F" />
            <text x="23" y="78.2" className="sc-dim">Approved · v12 · just now</text>
          </g>
        </g>
        {sites.map((s) => (
          <g key={s.t} className={`cms-s${s.n}`}>
            <g transform={`translate(${s.x} ${s.y})`}>
              <Win w={128} h={84} title={s.t}>
                <rect x="94" y="3" width="26" height="11" rx="5.5" fill="rgba(39,201,63,.16)" />
                <text x="107" y="10.8" textAnchor="middle" className="sc-green">Live</text>
                {thumb(s.v)}
              </Win>
            </g>
          </g>
        ))}
        <g className="cms-s-packets">
          {links.map((l, i) => (
            <circle key={l.n} r="2.6" fill={i < 2 ? "#39E7EF" : "#F5B84B"} filter="url(#scGlow)">
              <animateMotion dur="2.8s" begin={`${i * 0.5}s`} repeatCount="indefinite" path={l.d} keyPoints="1;0" keyTimes="0;1" calcMode="linear" />
            </circle>
          ))}
        </g>
        <g className="cms-s-out">
          <g transform="translate(100 228)">
            <rect width="240" height="38" rx="9" fill="rgba(57,231,239,.1)" stroke="#39E7EF" strokeWidth="1.4" filter="url(#scShadow)" />
            <circle cx="20" cy="19" r="4.5" fill="#27C93F" />
            <circle cx="20" cy="19" r="4.5" fill="#27C93F" className="sol-pulse" />
            <text x="33" y="17" className="sol-out-t">APPROVED ONCE</text>
            <text x="33" y="28.5" className="sol-out-s">Published everywhere · 4 channels in sync</text>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function EnterpriseCmsPage() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".cms-h0", { opacity: 0, x: -20, duration: 0.45 })
        .from(".cms-h1", { opacity: 0, y: 15, duration: 0.45 }, "-=0.25")
        .from(".cms-h2", { opacity: 0, x: 20, duration: 0.45 }, "-=0.25")
        .from(".cms-hflow", { opacity: 0, duration: 0.3 }, "-=0.1")
        .from(".cms-hsite", { opacity: 0, y: 20, duration: 0.5 }, "-=0.1");
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: ".challenge-scene", start: "top 75%", once: true } });
      tl.from(".cms-c0", { opacity: 0, y: 14, duration: 0.45 })
        .from(".cms-c1", { opacity: 0, y: 14, duration: 0.45 }, "-=0.3")
        .from(".cms-c2", { opacity: 0, y: 14, duration: 0.45 }, "-=0.3")
        .from(".cms-cflow", { opacity: 0, duration: 0.4 }, "-=0.1")
        .from(".cms-cq", { opacity: 0, y: 14, duration: 0.5 }, "-=0.1");
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: ".solution-scene", start: "top 75%", once: true } });
      tl.from(".cms-s-core", { opacity: 0, y: 12, duration: 0.5 })
        .from(".cms-s0, .cms-s1", { opacity: 0, x: -16, stagger: 0.12, duration: 0.45 }, "-=0.2")
        .from(".cms-s2, .cms-s3", { opacity: 0, x: 16, stagger: 0.12, duration: 0.45 }, "-=0.4")
        .from(".cms-s-link, .cms-s-packets", { opacity: 0, duration: 0.4 }, "-=0.2")
        .from(".cms-s-out", { opacity: 0, y: 12, duration: 0.5 }, "-=0.1");
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
      <div ref={root} className="overflow-hidden">
        <SceneDefs />
        
        {/* HERO */}
        <section className="relative px-6 pb-20 pt-32 md:pt-40">
          <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-brand-cyan/[.07] blur-[140px]" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.95fr_1.05fr]">
            <div>
              <p className="eyebrow">Web Development · 03</p>
              <h1 className="mt-4 font-heading text-[clamp(2.4rem,5.5vw,4.4rem)] font-extrabold leading-[1.04] tracking-tight">
                Enterprise CMS &amp; <span className="font-serif font-normal italic text-gradient">portal development</span> for content that can’t go wrong.
              </h1>
              <p className="mt-6 max-w-lg text-lg text-white/60">
                One structured content model, clear approval workflows and role-based access — published consistently across every website and portal you run.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <DiscoveryButton className="btn-amber hero-btn hero-in relative overflow-hidden px-5 py-3 text-sm opacity-0 sm:px-6 sm:py-3.5 sm:text-base">
  Book a  Discovery Call <ArrowUpRight size={16} />
  <span aria-hidden="true" className="btn-sheen pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-white/50 blur-md" />
</DiscoveryButton>
                <Link href="#case-study" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-brand-cyan/40 hover:text-white">See the case study <ArrowRight size={16} /></Link>
              </div>
            </div>
            <HeroPublishScene />
          </div>
        </section>

        {/* WEB TECHNOLOGIES — heading sits OUTSIDE/ABOVE the bar */}
        <section className="relative px-6 pb-10 pt-20 text-center md:pt-24">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow justify-center">Our Tech Stack</p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
              Technologies we <span className="font-serif font-normal italic text-gradient">build with</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/55 md:text-lg">
              From front-end to databases and deployment — the modern languages, frameworks and platforms behind every product we ship.
            </p>
            <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-brand-cyan/60 to-transparent" />
          </div>
        </section>

        {/* TECHNOLOGIES MARQUEE BAR — icons only, big & eye-catching */}
        <div className="relative w-full overflow-hidden border-y border-white/10 bg-[#0B1B20] py-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(255,255,255,0.05)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(57,231,239,0.07),transparent_70%)]" />

          <div className="relative flex w-full items-center overflow-hidden">
            <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-24 bg-gradient-to-r from-[#0B1B20] to-transparent md:w-40" />
            <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-24 bg-gradient-to-l from-[#0B1B20] to-transparent md:w-40" />

            <div className="marquee flex items-center whitespace-nowrap">
              {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, i) => (
                <div key={i} className="group mx-4 flex w-[150px] shrink-0 flex-col items-center justify-center gap-4 md:mx-5 md:w-[170px]">
                  <div
                    className="grid h-28 w-28 place-items-center rounded-3xl border border-white/10 bg-white/[0.04] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:scale-110 group-hover:border-white/25 group-hover:bg-white/[0.08] md:h-32 md:w-32"
                    style={{ boxShadow: `0 0 40px -12px #${tech.color}66` }}
                  >
                    <img
                      src={`https://cdn.simpleicons.org/${tech.icon}/${tech.color}`}
                      alt={tech.name}
                      loading="lazy"
                      className="h-16 w-16 object-contain drop-shadow-[0_0_14px_rgba(255,255,255,0.12)] md:h-20 md:w-20"
                    />
                  </div>
                  <span className="text-sm font-bold tracking-wide text-white/70 transition-colors group-hover:text-white md:text-base">{tech.name}</span>
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
              <h2 className="mt-3 font-heading text-3xl font-extrabold md:text-4xl">Scattered content and approval chaos.</h2>
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
              <h2 className="mt-3 font-heading text-3xl font-extrabold md:text-4xl">One content source, governed publishing.</h2>
              <p className="mt-4 text-white/60">We design a structured content model and the workflows around it, so every team publishes with confidence and every channel stays consistent.</p>
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
              <h2 className="mt-3 font-heading text-3xl font-extrabold md:text-4xl">A CMS that publishes to three websites and one partner portal.</h2>
            </div>
           <div className="reveal-sec mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[.02]">
  <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
    <span className="h-2.5 w-2.5 rounded-full bg-brand-amber" />
    <span className="h-2.5 w-2.5 rounded-full bg-brand-cyan" />
    <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
    <span className="ml-3 font-mono text-xs text-white/40">https://aethlacare.com/</span>
  </div>
  
  {/* Image Container */}
  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0B1B20]">
    <img
      src="/images/secondservice.jpg" // <-- Yahan apni image ka naam aur extension likho
      alt="Client project screenshot"
      className="h-full w-full object-cover"
    />
  </div>
</div>

            <div className="reveal-sec mt-8">
              <p className="text-xs font-semibold uppercase tracking-[.22em] text-brand-cyan">Measured results</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { v: 58, s: "%", l: "Faster publishing" },
                  { v: 3, s: "x", l: "Faster approval cycles" },
                  { v: 74, s: "%", l: "Fewer content errors" },
                  { v: 92, s: "%", l: "Team adoption on day one" },
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
                  <li>— Content spread across drives and old sites.</li>
                  <li>— Approvals via email, no clear status.</li>
                  <li>— No granular access control per team.</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.22em] text-brand-cyan">Our solution</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-white/55">
                  <li>— Structured content model with reusable types.</li>
                  <li>— Staged approval workflow with notifications.</li>
                  <li>— Role-based permissions and multi-site publishing.</li>
                </ul>
              </div>
            </div>

            <div className="reveal-sec mt-10">
              <Link href="https://aethlacare.com/" className="inline-flex items-center gap-2 rounded-xl border border-brand-cyan/40 bg-brand-cyan/[.08] px-6 py-3 text-sm font-semibold text-brand-cyan transition-colors hover:bg-brand-cyan/[.14] hover:text-white">Live demo <ArrowUpRight size={16} /></Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative px-6 py-28">
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow justify-center">Let’s talk</p>
            <h2 className="mt-4 font-heading text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold leading-[1.05] tracking-tight">
              Give your content <span className="font-serif font-normal italic text-gradient">one trusted home.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/60">Tell us how many sites and teams you manage. We’ll map the content model and publishing workflow.</p>
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
          
          @keyframes marqueeScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee { 
            animation: marqueeScroll 70s linear infinite; 
            width: max-content;
          }
          .marquee:hover { 
            animation-play-state: paused; 
          }

          .sc-win-t { fill: rgba(230,240,242,.55); stroke: none; font-size: 6px; font-weight: 600; letter-spacing: .04em; }
          .sc-txt { fill: rgba(230,240,242,.88); stroke: none; font-size: 6.2px; font-weight: 600; }
          .sc-dim { fill: rgba(230,240,242,.42); stroke: none; font-size: 5.2px; }
          .sc-amber { fill: #F5B84B; stroke: none; font-size: 5.4px; font-weight: 700; }
          .sc-cyan { fill: #39E7EF; stroke: none; font-size: 5.4px; font-weight: 700; }
          .sc-green { fill: #27C93F; stroke: none; font-size: 5.2px; font-weight: 700; }
          .sc-dark { fill: #08141A; stroke: none; font-size: 5.6px; font-weight: 800; }
          .sc-hl { fill: #fff; stroke: none; font-size: 9px; font-weight: 800; }
          .sol-core-t { fill: #39E7EF; stroke: none; font-size: 9px; font-weight: 800; letter-spacing: .1em; }
          .sol-out-t { fill: #39E7EF; stroke: none; font-size: 8px; font-weight: 800; letter-spacing: .1em; }
          .sol-out-s { fill: rgba(230,240,242,.55); stroke: none; font-size: 5.6px; }

          .ch-err, .cms-pulse { animation: scBlink 1.8s ease-in-out infinite; }
          @keyframes scBlink { 0%, 100% { opacity: .4; } 50% { opacity: 1; } }
          .ch-flow { animation: dashMove 1.6s linear infinite; }
          @keyframes dashMove { to { stroke-dashoffset: -14; } }
          .sol-dash { animation: solDash 2.4s linear infinite; }
          @keyframes solDash { to { stroke-dashoffset: -40; } }
          .sol-core-ring { transform-origin: 220px 120px; animation: solRing 14s linear infinite; }
          @keyframes solRing { to { transform: rotate(360deg); } }
          .sol-pulse { transform-box: fill-box; transform-origin: center; animation: solPulse 2s ease-out infinite; }
          @keyframes solPulse { 0% { transform: scale(1); opacity: .7; } 100% { transform: scale(3.2); opacity: 0; } }
          .spin { transform-box: fill-box; transform-origin: center; animation: scSpin 1.1s linear infinite; }
          @keyframes scSpin { to { transform: rotate(360deg); } }
          .caret { animation: scCaret 1s steps(1) infinite; }
          @keyframes scCaret { 50% { opacity: 0; } }
          .type-bar { transform-box: fill-box; transform-origin: 0 50%; animation: scType 3.6s ease-out infinite; }
          @keyframes scType { 0% { transform: scaleX(.15); } 70%, 100% { transform: scaleX(1); } }
          .toast { animation: scToast 6s ease-in-out infinite; }
          @keyframes scToast { 0%, 8% { opacity: 0; transform: translateY(8px); } 18%, 78% { opacity: 1; transform: translateY(0); } 90%, 100% { opacity: 0; transform: translateY(-4px); } }
          .bar-stall { transform-box: fill-box; transform-origin: 0 50%; animation: scBar 3.4s ease-out infinite; }
          @keyframes scBar { 0% { transform: scaleX(0); } 55%, 100% { transform: scaleX(1); } }
          @media (prefers-reduced-motion: reduce) {
            .marquee, .ch-err, .cms-pulse, .ch-flow, .sol-dash, .sol-core-ring, .sol-pulse, .spin, .caret, .type-bar, .toast, .bar-stall { animation: none !important; }
            .marquee { flex-wrap: wrap; justify-content: center; white-space: normal; }
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
}