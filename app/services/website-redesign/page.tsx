"use client";

import { useRef, type ReactNode } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, ArrowRight, Gauge as GaugeIcon, Smartphone, Search, MousePointerClick } from "lucide-react";
import { gsap } from "@/lib/gsap";
import DiscoveryButton from "@/components/DiscoveryButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ============================================================
   SERVICE 04 — WEBSITE REDESIGN & PERFORMANCE OPTIMIZATION
   ============================================================ */

const CHALLENGE = [
  { t: "Outdated design", d: "The site looks like it belongs to a different decade — and visitors judge it in seconds." },
  { t: "Poor mobile experience", d: "Most traffic is on a phone, but the layout, tap targets and checkout were built for desktop." },
  { t: "Slow loading", d: "Heavy images and scripts push load times past the point where people wait." },
];

const FEATURES = [
  { icon: MousePointerClick, t: "UX redesign", d: "Clearer navigation, hierarchy and calls to action, tested against real user journeys." },
  { icon: Smartphone, t: "Responsive development", d: "A layout that works at every breakpoint, with mobile treated as the primary experience." },
  { icon: GaugeIcon, t: "Performance optimization", d: "Smaller payloads, smarter loading and measurable Core Web Vitals improvements." },
  { icon: Search, t: "SEO foundations", d: "Clean structure, metadata and crawlability so the redesign also helps discoverability." },
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
        <linearGradient id="scCard" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#15303A" /><stop offset="1" stopColor="#0C1C22" />
        </linearGradient>
        <linearGradient id="scCore" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#39E7EF" stopOpacity=".22" /><stop offset="1" stopColor="#39E7EF" stopOpacity=".05" />
        </linearGradient>
        <linearGradient id="scArea" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#39E7EF" stopOpacity=".35" /><stop offset="1" stopColor="#39E7EF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="scAreaAmber" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#F5B84B" stopOpacity=".3" /><stop offset="1" stopColor="#F5B84B" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="scImg" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#39E7EF" stopOpacity=".5" /><stop offset="1" stopColor="#1B4B6B" stopOpacity=".7" />
        </linearGradient>
        <linearGradient id="scImg2" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#F5B84B" stopOpacity=".55" /><stop offset="1" stopColor="#7A3E1E" stopOpacity=".6" />
        </linearGradient>
        <linearGradient id="scScan" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#39E7EF" stopOpacity="0" /><stop offset=".5" stopColor="#39E7EF" stopOpacity=".35" /><stop offset="1" stopColor="#39E7EF" stopOpacity="0" />
        </linearGradient>
        <filter id="scShadow" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#000" floodOpacity=".55" />
        </filter>
        <filter id="scGlow" x="-30%" y="-30%" width="160%" height="170%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#39E7EF" floodOpacity=".35" />
        </filter>
      </defs>
    </svg>
  );
}

function Win({ w, h, title, accent, children }: { w: number; h: number; title: string; accent?: string; children?: ReactNode }) {
  return (
    <g>
      <rect width={w} height={h} rx="8" fill="url(#scCard)" stroke={accent || "rgba(255,255,255,.12)"} filter="url(#scShadow)" />
      <path d={`M0 8a8 8 0 0 1 8-8h${w - 16}a8 8 0 0 1 8 8v10H0z`} fill="rgba(255,255,255,.045)" />
      <circle cx="9" cy="9" r="2" fill="#FF5F56" /><circle cx="16" cy="9" r="2" fill="#FFBD2E" /><circle cx="23" cy="9" r="2" fill="#27C93F" />
      <text x="32" y="11.5" className="sc-win-t">{title}</text>
      {children}
    </g>
  );
}

function Sk({ x, y, w, h = 3, o = 0.14, c = "#fff" }: { x: number; y: number; w: number; h?: number; o?: number; c?: string }) {
  return <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={c} fillOpacity={o} />;
}

function Gauge({ cx, cy, pct, col, val, label, r = 14 }: { cx: number; cy: number; pct: number; col: string; val: string; label: string; r?: number }) {
  const c = 2 * Math.PI * r;
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} stroke="rgba(255,255,255,.1)" strokeWidth="4" />
      <circle cx={cx} cy={cy} r={r} stroke={col} strokeWidth="4" strokeLinecap="round" transform={`rotate(-90 ${cx} ${cy})`} strokeDasharray={`${(c * pct) / 100} ${c}`} className="gauge" />
      <text x={cx} y={cy + 2.4} textAnchor="middle" className="sc-txt">{val}</text>
      <text x={cx} y={cy + r + 10} textAnchor="middle" className="sc-dim">{label}</text>
    </g>
  );
}

function OldPage({ w }: { w: number }) {
  return (
    <g opacity=".9">
      {[0, 1, 2, 3].map((i) => (<rect key={i} x={8 + i * ((w - 16) / 4)} y="25" width={(w - 16) / 4 - 3} height="10" fill="rgba(255,255,255,.07)" stroke="rgba(255,255,255,.28)" />))}
      <text x="8" y="52" className="sc-serif">Welcome to our website!!</text>
      <rect x="8" y="58" width="34" height="26" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.3)" />
      <path d="M8 84 L20 70 L28 78 L34 72 L42 84Z" fill="rgba(255,255,255,.18)" />
      <Sk x={48} y={60} w={w - 62} o={0.2} /><Sk x={48} y={67} w={w - 74} o={0.2} /><Sk x={48} y={74} w={w - 70} o={0.2} />
      <text x="48" y="91" className="sc-link">Click here for more info</text>
      <rect x={w - 44} y="40" width="36" height="10" fill="rgba(245,184,75,.2)" stroke="rgba(245,184,75,.6)" className="ch-err" />
      <text x={w - 26} y="47.4" textAnchor="middle" className="sc-amber">NEW!</text>
      <text x="8" y="105" className="sc-mono" style={{ fill: "rgba(230,240,242,.4)" }}>Visitors: 0004821</text>
    </g>
  );
}

function HeroRedesignScene() {
  return (
    <div className="relative mx-auto w-full max-w-[640px]" aria-hidden="true">
      <svg viewBox="0 0 440 320" className="h-auto w-full overflow-visible" fill="none" fontFamily="ui-sans-serif, system-ui, sans-serif">
        <g className="rd-h-arrow">
          <path d="M196 80 H244" stroke="#39E7EF" strokeWidth="1.8" strokeDasharray="4 4" className="sol-dash" />
          <path d="M236 74 L244 80 L236 86" stroke="#39E7EF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <circle r="3" fill="#39E7EF" filter="url(#scGlow)"><animateMotion dur="1.8s" repeatCount="indefinite" path="M196 80 H244" /></circle>
        </g>

        {/* before */}
        <g className="rd-h-old"><g transform="translate(6 10)">
          <Win w={190} h={140} title="oldsite.com">
            <OldPage w={190} />
            <rect x="8" y="116" width="46" height="12" rx="6" fill="rgba(245,184,75,.16)" stroke="rgba(245,184,75,.5)" />
            <text x="31" y="124.2" textAnchor="middle" className="sc-amber">Before</text>
            <text x="182" y="124.2" textAnchor="end" className="sc-amber">Load 4.8s</text>
          </Win>
        </g></g>

        {/* after */}
        <g className="rd-h-new"><g transform="translate(244 10)">
          <Win w={190} h={140} title="newsite.com" accent="rgba(57,231,239,.5)">
            <rect x="10" y="25" width="10" height="10" rx="3" fill="#39E7EF" />
            <Sk x={25} y={28} w={26} o={0.3} /><Sk x={104} y={28} w={16} /><Sk x={124} y={28} w={16} />
            <rect x="148" y="24" width="32" height="12" rx="6" fill="#39E7EF" />
            <text x="164" y="32.4" textAnchor="middle" className="sc-dark">Contact</text>
            <text x="10" y="58" className="sc-hl">Grow faster</text>
            <text x="10" y="71" className="sc-hl" style={{ fill: "#39E7EF" }}>online.</text>
            <Sk x={10} y={80} w={84} o={0.2} /><Sk x={10} y={88} w={70} />
            <rect x="10" y="98" width="50" height="14" rx="7" fill="#39E7EF" />
            <text x="35" y="107.4" textAnchor="middle" className="sc-dark">Get started</text>
            <rect x="108" y="44" width="72" height="68" rx="6" fill="url(#scImg)" stroke="rgba(57,231,239,.3)" />
            <path d="M116 100 L132 82 L146 92 L160 70 L176 86" stroke="#fff" strokeOpacity=".7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="10" y="118" width="46" height="12" rx="6" fill="rgba(39,201,63,.16)" stroke="rgba(39,201,63,.5)" />
            <text x="33" y="126.2" textAnchor="middle" className="sc-green">After</text>
            <text x="180" y="126.2" textAnchor="end" className="sc-green">Load 1.2s</text>
            <rect x="0" y="22" width="34" height="118" fill="url(#scScan)" className="scan" />
          </Win>
        </g></g>

        {/* phones */}
        <g className="rd-h-ph0"><g transform="translate(6 172)">
          <rect width="62" height="134" rx="11" fill="url(#scCard)" stroke="rgba(255,255,255,.18)" filter="url(#scShadow)" />
          <rect x="22" y="5" width="18" height="3" rx="1.5" fill="rgba(255,255,255,.15)" />
          <rect x="6" y="14" width="50" height="8" fill="rgba(255,255,255,.07)" stroke="rgba(255,255,255,.25)" />
          <text x="6" y="34" className="sc-serif" style={{ fontSize: "5px" }}>Welcome!!</text>
          <rect x="6" y="38" width="50" height="26" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.25)" />
          <Sk x={6} y={70} w={50} o={0.2} /><Sk x={6} y={77} w={50} o={0.2} /><Sk x={6} y={84} w={34} o={0.2} />
          <text x="6" y="97" className="sc-link" style={{ fontSize: "4.4px" }}>Click here</text>
          <rect x="6" y="104" width="50" height="9" fill="rgba(245,184,75,.14)" stroke="rgba(245,184,75,.5)" />
          <text x="31" y="110.6" textAnchor="middle" className="sc-amber" style={{ fontSize: "4.4px" }}>desktop-only</text>
          <text x="31" y="127" textAnchor="middle" className="sc-dim">Old</text>
        </g></g>
        <g className="rd-h-ph1"><g transform="translate(80 172)">
          <rect width="62" height="134" rx="11" fill="url(#scCard)" stroke="rgba(57,231,239,.5)" filter="url(#scShadow)" />
          <rect x="22" y="5" width="18" height="3" rx="1.5" fill="rgba(255,255,255,.15)" />
          <rect x="6" y="14" width="8" height="8" rx="2" fill="#39E7EF" />
          <Sk x={42} y={17} w={14} />
          <text x="6" y="36" className="sc-hl" style={{ fontSize: "8px" }}>Grow faster</text>
          <rect x="6" y="42" width="50" height="34" rx="5" fill="url(#scImg)" />
          <Sk x={6} y={82} w={44} o={0.25} /><Sk x={6} y={89} w={34} />
          <rect x="6" y="98" width="50" height="12" rx="6" fill="#39E7EF" />
          <text x="31" y="106.2" textAnchor="middle" className="sc-dark">Get started</text>
          <text x="31" y="127" textAnchor="middle" className="sc-cyan">New</text>
        </g></g>

        {/* vitals */}
        <g className="rd-h-cwv"><g transform="translate(156 172)">
          <Win w={278} h={134} title="Core Web Vitals" accent="rgba(39,201,63,.35)">
            <Gauge cx={44} cy={62} pct={92} col="#27C93F" val="1.2s" label="LCP" r={17} />
            <Gauge cx={104} cy={62} pct={85} col="#F5B84B" val="84ms" label="INP" r={17} />
            <Gauge cx={164} cy={62} pct={98} col="#27C93F" val="0.01" label="CLS" r={17} />
            <path d="M200 30V100" stroke="rgba(255,255,255,.08)" />
            <text x="214" y="44" className="sc-dim">Performance</text>
            <text x="214" y="68" className="sc-big" style={{ fill: "#27C93F" }}>96</text>
            <text x="214" y="82" className="sc-green">▲ +55 vs before</text>
            <text x="12" y="122" className="sc-amber">Before: LCP 4.8s · INP 320ms · CLS 0.31</text>
          </Win>
        </g></g>
      </svg>
    </div>
  );
}

function ChallengeScene() {
  return (
    <div className="relative h-full min-h-[240px]" aria-hidden="true">
      <svg viewBox="0 0 440 280" className="h-full w-full" fill="none" fontFamily="ui-sans-serif, system-ui, sans-serif">
        <g className="rd-c-phone"><g transform="translate(24 14)">
          <rect width="104" height="204" rx="14" fill="url(#scCard)" stroke="rgba(255,255,255,.18)" filter="url(#scShadow)" />
          <rect x="38" y="6" width="28" height="4" rx="2" fill="rgba(255,255,255,.15)" />
          <rect x="8" y="18" width="88" height="4" fill="rgba(255,255,255,.06)" />
          <rect x="8" y="18" width="88" height="4" fill="#F5B84B" className="bar-stall" style={{ transformOrigin: "0 0" }} />
          {[0, 1, 2, 3].map((i) => (<rect key={i} x={8 + i * 22} y="28" width="20" height="9" fill="rgba(255,255,255,.07)" stroke="rgba(255,255,255,.25)" />))}
          <text x="8" y="52" className="sc-serif">Welcome to our site!!</text>
          <rect x="8" y="58" width="88" height="62" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.2)" className="shimmer" />
          <circle cx="52" cy="89" r="12" stroke="rgba(245,184,75,.2)" strokeWidth="2.4" />
          <circle cx="52" cy="89" r="12" stroke="#F5B84B" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="18 60" className="spin" />
          <Sk x={8} y={128} w={80} o={0.15} /><Sk x={8} y={136} w={70} o={0.12} /><Sk x={8} y={144} w={76} o={0.12} />
          <text x="8" y="160" className="sc-link">Click here for more</text>
          <rect x="8" y="170" width="88" height="14" rx="3" fill="rgba(245,184,75,.14)" stroke="rgba(245,184,75,.5)" />
          <text x="52" y="179.6" textAnchor="middle" className="sc-amber">Loading… 6.8s</text>
          <text x="52" y="196" textAnchor="middle" className="sc-dim">Not mobile-friendly</text>
        </g></g>
        <g className="rd-c-an"><g transform="translate(150 14)">
          <Win w={284} h={120} title="Analytics · Bounce rate">
            <text x="14" y="44" className="sc-big" style={{ fill: "#F5B84B" }}>71%</text>
            <text x="14" y="56" className="sc-dim">bounce rate · mobile</text>
            <rect x="14" y="64" width="68" height="12" rx="6" fill="rgba(245,184,75,.16)" stroke="rgba(245,184,75,.5)" />
            <text x="48" y="72.4" textAnchor="middle" className="sc-amber">▲ +18% vs Q2</text>
            <path d="M98 100 L122 96 L146 98 L170 84 L194 78 L218 62 L242 52 L270 40 V110 H98Z" fill="url(#scAreaAmber)" />
            <path d="M98 100 L122 96 L146 98 L170 84 L194 78 L218 62 L242 52 L270 40" stroke="#F5B84B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sol-draw" />
            <circle cx="270" cy="40" r="3" fill="#F5B84B" />
            <circle cx="270" cy="40" r="3" fill="#F5B84B" className="sol-pulse" />
            <text x="14" y="100" className="sc-dim">Visitors leave in &lt;3s</text>
          </Win>
        </g></g>
        <g className="rd-c-lost"><g transform="translate(150 148)">
          <Win w={284} h={70} title="Visitors lost · this month">
            {[0, 1, 2, 3, 4].map((i) => (
              <g key={i} className="ch-err" style={{ animationDelay: `${i * 0.3}s` }}>
                <circle cx={22 + i * 18} cy="38" r="6" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.25)" />
                <path d={`M${19 + i * 18} 44 a3.4 3.4 0 0 1 6 0`} stroke="rgba(255,255,255,.3)" />
              </g>
            ))}
            <path d="M112 38 H130" stroke="#F5B84B" strokeWidth="1.4" strokeDasharray="2 3" />
            <path d="M126 34 L131 38 L126 42" stroke="#F5B84B" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <text x="146" y="40" className="sc-big" style={{ fill: "#F5B84B", fontSize: "13px" }}>−1,284</text>
            <text x="146" y="54" className="sc-dim">≈ −$18k potential revenue</text>
          </Win>
        </g></g>
        <g className="rd-c-bar"><g transform="translate(150 232)">
          <rect width="284" height="36" rx="10" fill="rgba(245,184,75,.08)" stroke="rgba(245,184,75,.45)" />
          <text x="142" y="22" textAnchor="middle" className="sc-amber" style={{ fontSize: "6.4px", letterSpacing: ".08em" }}>OLD DESIGN · SLOW MOBILE · LOST CUSTOMERS</text>
        </g></g>
      </svg>
    </div>
  );
}

function SolutionScene() {
  const checks = ["Mobile-first layout", "Core Web Vitals", "SEO structure", "Accessible"];
  const scores: [string, number, string][] = [["98", 98, "Performance"], ["100", 100, "Accessibility"], ["96", 96, "Best practices"], ["100", 100, "SEO"]];
  return (
    <div className="relative h-full min-h-[240px]" aria-hidden="true">
      <svg viewBox="0 0 440 280" className="h-full w-full" fill="none" fontFamily="ui-sans-serif, system-ui, sans-serif">
        <g className="rd-s-arrow">
          <path d="M126 64 H156" stroke="#39E7EF" strokeWidth="1.8" strokeDasharray="4 4" className="sol-dash" />
          <circle r="3" fill="#39E7EF" filter="url(#scGlow)"><animateMotion dur="1.8s" repeatCount="indefinite" path="M126 64 H156" /></circle>
        </g>
        <g className="rd-s-old"><g transform="translate(6 14)" opacity=".75">
          <Win w={120} h={100} title="Before"><OldPage w={120} /></Win>
        </g></g>
        <g className="rd-s-new"><g transform="translate(156 14)">
          <Win w={140} h={100} title="After" accent="rgba(57,231,239,.5)">
            <rect x="10" y="25" width="8" height="8" rx="2" fill="#39E7EF" />
            <Sk x={22} y={27} w={20} o={0.3} /><Sk x={86} y={27} w={12} /><Sk x={102} y={27} w={12} />
            <text x="10" y="50" className="sc-hl">Grow faster</text>
            <Sk x={10} y={57} w={60} o={0.2} /><Sk x={10} y={64} w={48} />
            <rect x="10" y="74" width="42" height="12" rx="6" fill="#39E7EF" />
            <text x="31" y="82.4" textAnchor="middle" className="sc-dark">Get started</text>
            <rect x="80" y="38" width="50" height="48" rx="5" fill="url(#scImg)" />
            <circle cx="116" cy="50" r="5" fill="#fff" fillOpacity=".2" />
            <rect x="0" y="22" width="30" height="78" fill="url(#scScan)" className="scan scan-sm" />
          </Win>
        </g></g>
        <g className="rd-s-check"><g transform="translate(316 14)">
          <Win w={118} h={100} title="Checklist">
            {checks.map((c, i) => (
              <g key={c} transform={`translate(0 ${24 + i * 18})`}>
                <circle cx="16" cy="7" r="6" fill="rgba(39,201,63,.18)" stroke="#27C93F" />
                <path d="M13 7 L15.4 9.4 L19.4 4.8" stroke="#27C93F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <text x="28" y="9.4" className="sc-txt">{c}</text>
              </g>
            ))}
          </Win>
        </g></g>
        <g className="rd-s-lh"><g transform="translate(6 130)">
          <Win w={428} h={134} title="Lighthouse report" accent="rgba(39,201,63,.35)">
            {scores.map(([v, p, l], i) => (<Gauge key={l} cx={56 + i * 104} cy={64} pct={p} col="#27C93F" val={v} label={l} r={18} />))}
            <path d="M14 106H414" stroke="rgba(255,255,255,.07)" />
            <text x="14" y="122" className="sc-amber">Performance before</text>
            <text x="102" y="122" className="sc-amber">41</text>
            <path d="M118 119H150" stroke="#39E7EF" strokeWidth="1.2" strokeDasharray="2 2" />
            <text x="156" y="122" className="sc-green">98</text>
            <text x="414" y="122" textAnchor="end" className="sc-dim">Load time 6.8s → 1.2s</text>
          </Win>
        </g></g>
      </svg>
    </div>
  );
}

export default function WebsiteRedesignPage() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".rd-h-old", { opacity: 0, x: -20, duration: 0.45 })
        .from(".rd-h-arrow", { opacity: 0, duration: 0.3 }, "-=0.2")
        .from(".rd-h-new", { opacity: 0, x: 20, duration: 0.45 }, "-=0.2")
        .from(".rd-h-ph0, .rd-h-ph1", { opacity: 0, y: 20, stagger: 0.12, duration: 0.45 }, "-=0.1")
        .from(".rd-h-cwv", { opacity: 0, y: 20, duration: 0.5 }, "-=0.3");
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: ".challenge-scene", start: "top 75%", once: true } });
      tl.from(".rd-c-phone", { opacity: 0, y: 14, duration: 0.45 })
        .from(".rd-c-an", { opacity: 0, x: 14, duration: 0.45 }, "-=0.25")
        .from(".rd-c-lost", { opacity: 0, x: 14, duration: 0.45 }, "-=0.3")
        .from(".rd-c-bar", { opacity: 0, y: 10, duration: 0.4 }, "-=0.1");
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: ".solution-scene", start: "top 75%", once: true } });
      tl.from(".rd-s-old", { opacity: 0, x: -14, duration: 0.45 })
        .from(".rd-s-arrow", { opacity: 0, duration: 0.3 }, "-=0.15")
        .from(".rd-s-new", { opacity: 0, x: 14, duration: 0.45 }, "-=0.15")
        .from(".rd-s-check", { opacity: 0, x: 14, duration: 0.45 }, "-=0.3")
        .from(".rd-s-lh", { opacity: 0, y: 14, duration: 0.5 }, "-=0.1");
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
        <section className="relative px-6 pb-20 pt-32 md:pt-40">
          <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-brand-cyan/[.07] blur-[140px]" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.95fr_1.05fr]">
            <div>
              <p className="eyebrow">Web Development · 04</p>
              <h1 className="mt-4 font-heading text-[clamp(2.4rem,5.5vw,4.4rem)] font-extrabold leading-[1.04] tracking-tight">
                Website redesign &amp; <span className="font-serif font-normal italic text-gradient">performance optimization</span> that earns the click.
              </h1>
              <p className="mt-6 max-w-lg text-lg text-white/60">
                A modern, responsive experience built for mobile-first visitors — with the speed and Core Web Vitals that keep them there.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <DiscoveryButton className="btn-amber hero-btn hero-in relative overflow-hidden px-5 py-3 text-sm opacity-0 sm:px-6 sm:py-3.5 sm:text-base">
  Book a Discovery Call <ArrowUpRight size={16} />
  <span aria-hidden="true" className="btn-sheen pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-white/50 blur-md" />
</DiscoveryButton>
                <Link href="#case-study" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-brand-cyan/40 hover:text-white">See the case study <ArrowRight size={16} /></Link>
              </div>
            </div>
            <HeroRedesignScene />
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

        <section className="relative px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div className="reveal-sec">
              <p className="eyebrow">The challenge</p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold md:text-4xl">An old site that quietly costs you customers.</h2>
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
              <h2 className="mt-3 font-heading text-3xl font-extrabold md:text-4xl">Redesign for people. Optimize for speed.</h2>
              <p className="mt-4 text-white/60">We rethink the experience and rebuild it on a performance-first foundation, so the site looks better and works measurably faster.</p>
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
              <h2 className="mt-3 font-heading text-3xl font-extrabold md:text-4xl">A before/after redesign that improved every Core Web Vital.</h2>
            </div>
           <div className="reveal-sec mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[.02]">
  <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
    <span className="h-2.5 w-2.5 rounded-full bg-brand-amber" />
    <span className="h-2.5 w-2.5 rounded-full bg-brand-cyan" />
    <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
    <span className="ml-3 font-mono text-xs text-white/40">https://www.sprinklersandlawns.com/</span>
  </div>
  
  {/* Image Container */}
  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0B1B20]">
    <img
      src="/images/fourservice.jpg" // <-- Yahan apni image ka naam aur extension likho
      alt="Client project screenshot"
      className="h-full w-full object-cover"
    />
  </div>
</div>

            <div className="reveal-sec mt-8">
              <p className="text-xs font-semibold uppercase tracking-[.22em] text-brand-cyan">Measured results</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { v: 71, s: "%", l: "Faster load time" },
                  { v: 34, s: "%", l: "Higher conversion rate" },
                  { v: 46, s: "%", l: "Lower bounce rate" },
                  { v: 18, s: "%", l: "More organic traffic" },
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
                  <li>— Outdated visual design and unclear navigation.</li>
                  <li>— Poor mobile layout and tap targets.</li>
                  <li>— Slow loading hurting conversion and SEO.</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.22em] text-brand-cyan">Our solution</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-white/55">
                  <li>— UX redesign focused on real user journeys.</li>
                  <li>— Responsive rebuild with mobile-first components.</li>
                  <li>— Performance optimization and Core Web Vitals tuning.</li>
                </ul>
              </div>
            </div>

            <div className="reveal-sec mt-10">
              <Link href="https://www.sprinklersandlawns.com/" className="inline-flex items-center gap-2 rounded-xl border border-brand-cyan/40 bg-brand-cyan/[.08] px-6 py-3 text-sm font-semibold text-brand-cyan transition-colors hover:bg-brand-cyan/[.14] hover:text-white">Live demo <ArrowUpRight size={16} /></Link>
            </div>
          </div>
        </section>

        <section className="relative px-6 py-28">
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow justify-center">Let’s talk</p>
            <h2 className="mt-4 font-heading text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold leading-[1.05] tracking-tight">
              Turn your old site into your <span className="font-serif font-normal italic text-gradient">best salesperson.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/60">Share your current site and what’s not working. We’ll come back with a clear redesign and performance plan.</p>
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
          .sc-big { fill: #fff; stroke: none; font-size: 17px; font-weight: 800; }
          .sc-mono { fill: rgba(230,240,242,.7); stroke: none; font-size: 5.4px; font-family: ui-monospace, Menlo, Consolas, monospace; }
          .sc-serif { fill: rgba(230,240,242,.75); stroke: none; font-size: 7px; font-family: Georgia, "Times New Roman", serif; font-weight: 700; }
          .sc-link { fill: #7A9BE0; stroke: none; font-size: 5.4px; text-decoration: underline; }
          .sol-core-t { fill: #39E7EF; stroke: none; font-size: 9px; font-weight: 800; letter-spacing: .1em; }
          .sol-out-t { fill: #39E7EF; stroke: none; font-size: 8px; font-weight: 800; letter-spacing: .1em; }
          .sol-out-s { fill: rgba(230,240,242,.55); stroke: none; font-size: 5.6px; }

          .ch-err, .shimmer, .cms-pulse, .pulse-btn { animation: scBlink 1.8s ease-in-out infinite; }
          @keyframes scBlink { 0%, 100% { opacity: .4; } 50% { opacity: 1; } }
          .ch-flow { animation: dashMove 1.6s linear infinite; }
          @keyframes dashMove { to { stroke-dashoffset: -14; } }
          .sol-dash { animation: solDash 2.4s linear infinite; }
          @keyframes solDash { to { stroke-dashoffset: -40; } }
          .sol-pulse { transform-box: fill-box; transform-origin: center; animation: solPulse 2s ease-out infinite; }
          @keyframes solPulse { 0% { transform: scale(1); opacity: .7; } 100% { transform: scale(3.2); opacity: 0; } }
          .sol-draw { stroke-dasharray: 260; animation: solDraw 4.5s ease-in-out infinite; }
          @keyframes solDraw { 0% { stroke-dashoffset: 260; } 40%, 85% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: -260; } }
          .spin { transform-box: fill-box; transform-origin: center; animation: scSpin 1.1s linear infinite; }
          @keyframes scSpin { to { transform: rotate(360deg); } }
          .caret { animation: scCaret 1s steps(1) infinite; }
          @keyframes scCaret { 50% { opacity: 0; } }
          .toast { animation: scToast 6s ease-in-out infinite; }
          @keyframes scToast { 0%, 8% { opacity: 0; transform: translateY(8px); } 18%, 78% { opacity: 1; transform: translateY(0); } 90%, 100% { opacity: 0; transform: translateY(-4px); } }
          .bar-stall { transform-box: fill-box; transform-origin: 0 50%; animation: scBar 3.4s ease-out infinite; }
          .bar-grow { transform-box: fill-box; transform-origin: 0 50%; animation: scBar 2.8s ease-out infinite; }
          @keyframes scBar { 0% { transform: scaleX(0); } 55%, 100% { transform: scaleX(1); } }
          .scan { animation: scScan 3.6s ease-in-out infinite; }
          .scan.scan-sm { animation-name: scScanSm; }
          @keyframes scScan { 0% { transform: translateX(0); opacity: 0; } 12%, 88% { opacity: 1; } 100% { transform: translateX(156px); opacity: 0; } }
          @keyframes scScanSm { 0% { transform: translateX(0); opacity: 0; } 12%, 88% { opacity: 1; } 100% { transform: translateX(110px); opacity: 0; } }
          .gauge { animation: scGauge 4.5s ease-out infinite; }
          @keyframes scGauge { 0% { stroke-dasharray: 0 120; } }
          @media (prefers-reduced-motion: reduce) {
            .marquee, .ch-err, .shimmer, .pulse-btn, .ch-flow, .sol-dash, .sol-pulse, .sol-draw, .spin, .caret, .toast, .bar-stall, .bar-grow, .scan, .gauge { animation: none !important; }
            .marquee { flex-wrap: wrap; justify-content: center; white-space: normal; }
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
}