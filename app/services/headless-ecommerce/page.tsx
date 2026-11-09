"use client";

import { useRef, type ReactNode } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, ArrowRight, Store, Smartphone, Globe, Zap, LayoutDashboard, Gauge as GaugeIcon, Database, MessageSquare, Bot, FileText, ShoppingCart } from "lucide-react";
import { gsap } from "@/lib/gsap";
import DiscoveryButton from "@/components/DiscoveryButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ============================================================
   SERVICE 02 — HEADLESS & COMPOSABLE E-COMMERCE DEVELOPMENT
   ============================================================ */

const CHALLENGE = [
  { t: "Slow storefront", d: "Every interaction waits on the backend. Mobile shoppers leave before the page finishes loading." },
  { t: "Inflexible platform", d: "A locked template stack means every new page, offer or channel needs a developer." },
  { t: "Difficult integrations", d: "ERP, inventory and marketing tools live apart from the store, so data drifts." },
];

const FEATURES = [
  { icon: Zap, t: "Fast frontend", d: "A decoupled frontend that renders quickly and scales with traffic." },
  { icon: Store, t: "Central commerce engine", d: "One backend for products, pricing, carts and orders across channels." },
  { icon: Globe, t: "Composable channels", d: "Web, mobile and marketplaces connected through documented APIs." },
  { icon: Smartphone, t: "Mobile-first UX", d: "Checkout and browsing designed for the device most shoppers use." },
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

function HeroChannelsScene() {
  const links = ["M150 148 Q110 138 80 122", "M220 148 V134", "M290 148 Q330 138 360 122"];
  const orders = [["#4821", "$129", "Paid"], ["#4820", "$64", "Packed"]];
  return (
    <div className="relative mx-auto w-full max-w-[640px]" aria-hidden="true">
      <svg viewBox="0 0 440 320" className="h-auto w-full overflow-visible" fill="none" fontFamily="ui-sans-serif, system-ui, sans-serif">
        <g className="com-hlink">
          {links.map((d) => (<path key={d} d={d} stroke="rgba(57,231,239,.5)" strokeWidth="1.4" strokeDasharray="4 5" className="sol-dash" />))}
          {links.map((d, i) => (
            <circle key={d} r="2.6" fill={i === 2 ? "#F5B84B" : "#39E7EF"} filter="url(#scGlow)">
              <animateMotion dur="2.4s" begin={`${i * 0.5}s`} repeatCount="indefinite" path={d} keyPoints="1;0" keyTimes="0;1" calcMode="linear" />
            </circle>
          ))}
        </g>
        <g className="com-h0"><g transform="translate(6 10)">
          <Win w={150} h={112} title="store.com">
            <rect x="10" y="24" width="8" height="8" rx="2" fill="#39E7EF" />
            <Sk x={22} y={26} w={26} o={0.3} /><Sk x={70} y={26} w={14} /><Sk x={88} y={26} w={14} />
            <rect x="112" y="23" width="32" height="10" rx="5" fill="rgba(245,184,75,.18)" stroke="rgba(245,184,75,.5)" />
            <text x="128" y="30.4" textAnchor="middle" className="sc-amber">Cart · 2</text>
            {[0, 1, 2].map((i) => (
              <g key={i} transform={`translate(${10 + i * 46} 40)`}>
                <rect width="42" height="52" rx="4" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.1)" />
                <rect x="3" y="3" width="36" height="28" rx="3" fill={i === 1 ? "url(#scImg2)" : "url(#scImg)"} />
                <Sk x={4} y={35} w={26} o={0.3} />
                <text x="4" y="47" className="sc-cyan">{["$49", "$89", "$129"][i]}</text>
              </g>
            ))}
            <text x="10" y="104" className="sc-dim">Free shipping over $50</text>
          </Win>
        </g></g>
        <g className="com-h1"><g transform="translate(176 10)">
          <rect width="88" height="124" rx="13" fill="url(#scCard)" stroke="rgba(57,231,239,.4)" filter="url(#scShadow)" />
          <rect x="30" y="5" width="28" height="4" rx="2" fill="rgba(255,255,255,.15)" />
          <rect x="8" y="16" width="72" height="50" rx="6" fill="url(#scImg)" />
          <circle cx="62" cy="30" r="6" fill="#fff" fillOpacity=".18" />
          <text x="8" y="78" className="sc-txt">Runner Pro 2</text>
          <text x="8" y="88" className="sc-cyan">$129</text>
          <text x="80" y="88" textAnchor="end" className="sc-dim">★ 4.8</text>
          <rect x="8" y="94" width="72" height="14" rx="7" fill="#39E7EF" className="pulse-btn" />
          <text x="44" y="103.4" textAnchor="middle" className="sc-dark">Add to cart</text>
          <rect x="34" y="115" width="20" height="2.4" rx="1.2" fill="rgba(255,255,255,.2)" />
        </g></g>
        <g className="com-h2"><g transform="translate(284 10)">
          <Win w={150} h={112} title="Marketplace">
            {[0, 1, 2].map((i) => (
              <g key={i} transform={`translate(0 ${24 + i * 28})`}>
                <path d="M8 25H142" stroke="rgba(255,255,255,.07)" />
                <rect x="10" y="3" width="18" height="18" rx="3" fill={i === 1 ? "url(#scImg2)" : "url(#scImg)"} />
                <Sk x={34} y={6} w={50} o={0.3} /><Sk x={34} y={14} w={30} />
                <text x="86" y="12" className="sc-cyan">{["$49", "$89", "$129"][i]}</text>
                <rect x="108" y="6" width="32" height="11" rx="5.5" fill="rgba(39,201,63,.16)" />
                <text x="124" y="13.6" textAnchor="middle" className="sc-green">Synced</text>
              </g>
            ))}
          </Win>
        </g></g>
        <g className="com-hcore"><g transform="translate(110 148)" filter="url(#scGlow)">
          <Win w={220} h={92} title="Commerce engine" accent="rgba(57,231,239,.5)">
            {[["Products", "1,248"], ["Orders", "342"], ["Stock", "● live"]].map(([l, v], i) => (
              <g key={l} transform={`translate(${10 + i * 70} 24)`}>
                <rect width="64" height="24" rx="5" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.1)" />
                <text x="7" y="10" className="sc-dim">{l}</text>
                <text x="7" y="20" className={i === 2 ? "sc-green" : "sc-hl"}>{v}</text>
              </g>
            ))}
            {orders.map(([id, amt, st], i) => (
              <g key={id} transform={`translate(0 ${58 + i * 14})`}>
                <circle cx="16" cy="4" r="2.4" fill="#39E7EF" />
                <text x="24" y="6.2" className="sc-txt">{id}</text>
                <text x="110" y="6.2" className="sc-dim">{amt}</text>
                <text x="208" y="6.2" textAnchor="end" className="sc-green">{st}</text>
              </g>
            ))}
          </Win>
        </g></g>
        <g className="com-htoast"><g transform="translate(130 256)">
          <g className="toast">
            <rect width="180" height="36" rx="10" fill="#0F2A25" stroke="#27C93F" filter="url(#scShadow)" />
            <circle cx="20" cy="18" r="8" fill="rgba(39,201,63,.18)" stroke="#27C93F" />
            <path d="M16.5 18 L19 20.5 L23.5 15.5" stroke="#27C93F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <text x="36" y="15" className="sc-txt">New order #4822</text>
            <text x="36" y="26" className="sc-dim">Web · $129 · inventory updated everywhere</text>
          </g>
        </g></g>
      </svg>
    </div>
  );
}

function ChallengeScene() {
  return (
    <div className="relative h-full min-h-[240px]" aria-hidden="true">
      <svg viewBox="0 0 440 280" className="h-full w-full" fill="none" fontFamily="ui-sans-serif, system-ui, sans-serif">
        <g className="com-c-store"><g transform="translate(6 14)">
          <Win w={200} h={150} title="store.com/shoes">
            <rect x="0" y="19" width="200" height="2" fill="rgba(255,255,255,.06)" />
            <rect x="0" y="19" width="80" height="2" fill="#F5B84B" className="bar-stall" style={{ transformOrigin: "0 0" }} />
            <rect x="10" y="28" width="8" height="8" rx="2" fill="rgba(57,231,239,.3)" />
            <Sk x={22} y={30} w={30} /><Sk x={150} y={30} w={40} />
            <rect x="10" y="44" width="180" height="46" rx="5" fill="rgba(255,255,255,.05)" className="shimmer" />
            {[0, 1, 2].map((i) => (<rect key={i} x={10 + i * 62} y="98" width="56" height="34" rx="4" fill="rgba(255,255,255,.05)" className="shimmer" style={{ animationDelay: `${i * 0.25}s` }} />))}
            <circle cx="100" cy="67" r="12" stroke="rgba(245,184,75,.2)" strokeWidth="2.4" />
            <circle cx="100" cy="67" r="12" stroke="#F5B84B" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="18 60" className="spin" />
            <rect x="10" y="136" width="70" height="11" rx="5.5" fill="rgba(245,184,75,.16)" stroke="rgba(245,184,75,.5)" />
            <text x="45" y="143.6" textAnchor="middle" className="sc-amber">Loading… 6.4s</text>
          </Win>
        </g></g>
        <g className="com-c-session"><g transform="translate(222 14)">
          <Win w={212} h={70} title="Shopper session">
            <path d="M30 46H182" stroke="rgba(255,255,255,.12)" strokeWidth="1.4" />
            <path d="M30 46H110" stroke="rgba(245,184,75,.6)" strokeWidth="1.4" strokeDasharray="3 3" className="ch-flow" />
            {[["0s", "Landed", 30, "#39E7EF"], ["3s", "Waiting…", 106, "#F5B84B"], ["6s", "Left site", 182, "#FF5F56"]].map(([t, l, x, c]) => (
              <g key={t as string}>
                <circle cx={x as number} cy="46" r="6" fill="#0C1C22" stroke={c as string} strokeWidth="1.4" />
                {t === "6s" && <path d="M179 43 l6 6 M185 43 l-6 6" stroke="#FF5F56" strokeWidth="1.4" strokeLinecap="round" />}
                <text x={x as number} y="34" textAnchor="middle" className="sc-dim">{t}</text>
                <text x={x as number} y="63" textAnchor="middle" className="sc-txt">{l}</text>
              </g>
            ))}
          </Win>
        </g></g>
        <g className="com-c-rev"><g transform="translate(222 98)">
          <Win w={212} h={66} title="Revenue · today">
            <text x="10" y="36" className="sc-hl">$3,420</text>
            <rect x="10" y="42" width="38" height="11" rx="5.5" fill="rgba(245,184,75,.16)" stroke="rgba(245,184,75,.5)" />
            <text x="29" y="49.6" textAnchor="middle" className="sc-amber">▼ 23%</text>
            <path d="M76 30 L100 28 L120 36 L142 33 L164 46 L200 56 V62 H76Z" fill="url(#scAreaAmber)" />
            <path d="M76 30 L100 28 L120 36 L142 33 L164 46 L200 56" stroke="#F5B84B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="sol-draw" />
          </Win>
        </g></g>
        <g className="com-c-cart"><g transform="translate(6 182)">
          <Win w={428} h={86} title="Cart · abandoned">
            {[0, 1].map((i) => (
              <g key={i} transform={`translate(${12 + i * 150} 26)`}>
                <rect width="26" height="26" rx="4" fill={i ? "url(#scImg2)" : "url(#scImg)"} />
                <text x="34" y="10" className="sc-txt">{i ? "Trail Boot" : "Runner Pro 2"}</text>
                <text x="34" y="20" className="sc-dim">Size 42 · Qty 1</text>
                <text x="34" y="30" className="sc-cyan">{i ? "$92" : "$92"}</text>
              </g>
            ))}
            <path d="M318 24V76" stroke="rgba(255,255,255,.08)" />
            <text x="332" y="42" className="sc-dim">Cart total</text>
            <text x="332" y="62" className="sc-big" style={{ fill: "#F5B84B" }}>$184</text>
            <g className="ch-err">
              <rect x="368" y="50" width="52" height="14" rx="7" fill="rgba(245,184,75,.16)" stroke="rgba(245,184,75,.55)" />
              <text x="394" y="59.6" textAnchor="middle" className="sc-amber">Abandoned</text>
            </g>
            <text x="12" y="76" className="sc-dim">Session ended after 6.4s · no checkout</text>
          </Win>
        </g></g>
      </svg>
    </div>
  );
}

function SolutionScene() {
  return (
    <div className="relative h-full min-h-[240px]" aria-hidden="true">
      <svg viewBox="0 0 440 280" className="h-full w-full" fill="none" fontFamily="ui-sans-serif, system-ui, sans-serif">
        <g className="com-s-arrows">
          {["M134 80 H156", "M284 80 H306"].map((d, i) => (
            <g key={d}>
              <path d={d} stroke="rgba(57,231,239,.6)" strokeWidth="1.6" strokeDasharray="3 3" className="sol-dash" />
              <circle r="2.6" fill={i ? "#F5B84B" : "#39E7EF"}><animateMotion dur="1.6s" begin={`${i * 0.4}s`} repeatCount="indefinite" path={d} /></circle>
              <circle r="2.6" fill="#27C93F"><animateMotion dur="1.6s" begin={`${0.8 + i * 0.4}s`} repeatCount="indefinite" path={d} keyPoints="1;0" keyTimes="0;1" calcMode="linear" /></circle>
            </g>
          ))}
        </g>
        <g className="com-s0"><g transform="translate(6 14)">
          <Win w={128} h={130} title="Storefront" accent="rgba(57,231,239,.4)">
            <Sk x={10} y={26} w={24} o={0.3} /><Sk x={90} y={26} w={28} />
            <rect x="10" y="38" width="108" height="30" rx="5" fill="url(#scImg)" />
            <Sk x={16} y={46} w={44} o={0.7} /><Sk x={16} y={54} w={30} o={0.4} />
            {[0, 1].map((i) => (
              <g key={i} transform={`translate(${10 + i * 56} 74)`}>
                <rect width="52" height="30" rx="4" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.1)" />
                <rect x="3" y="3" width="46" height="16" rx="3" fill={i ? "url(#scImg2)" : "url(#scImg)"} />
                <text x="4" y="27" className="sc-cyan">{i ? "$89" : "$49"}</text>
              </g>
            ))}
            <rect x="10" y="110" width="70" height="12" rx="6" fill="rgba(57,231,239,.16)" stroke="rgba(57,231,239,.5)" />
            <text x="45" y="118.4" textAnchor="middle" className="sc-cyan">Cached at the edge</text>
          </Win>
        </g></g>
        <g className="com-s1"><g transform="translate(156 14)">
          <Win w={128} h={130} title="API · /products">
            <text x="10" y="34" className="sc-mono" style={{ fill: "#39E7EF" }}>GET /products/4821</text>
            <text x="10" y="46" className="sc-mono" style={{ fill: "#27C93F" }}>200 OK · 38ms</text>
            <path d="M10 54H118" stroke="rgba(255,255,255,.08)" />
            {["{", "  \"id\": 4821,", "  \"name\": \"Runner Pro 2\",", "  \"price\": 129,", "  \"stock\": 42", "}"].map((l, i) => (
              <text key={i} x="10" y={66 + i * 10} className="sc-mono">{l}</text>
            ))}
            <rect x="10" y="118" width="108" height="3" rx="1.5" fill="rgba(255,255,255,.08)" />
            <rect x="10" y="118" width="108" height="3" rx="1.5" fill="#27C93F" fillOpacity=".8" className="bar-grow" />
          </Win>
        </g></g>
        <g className="com-s2"><g transform="translate(306 14)">
          <Win w={128} h={130} title="Commerce engine" accent="rgba(245,184,75,.4)">
            {[["Products", "1,248"], ["Pricing rules", "36"], ["Orders", "342"], ["Inventory", "● live"]].map(([l, v], i) => (
              <g key={l} transform={`translate(0 ${24 + i * 25})`}>
                <path d="M8 23H120" stroke="rgba(255,255,255,.07)" />
                <circle cx="16" cy="9" r="3" fill="rgba(245,184,75,.25)" stroke="rgba(245,184,75,.6)" />
                <text x="26" y="11.4" className="sc-txt">{l}</text>
                <text x="118" y="11.4" textAnchor="end" className={i === 3 ? "sc-green" : "sc-amber"}>{v}</text>
              </g>
            ))}
          </Win>
        </g></g>
        <g className="com-s-perf"><g transform="translate(110 168)">
          <Win w={220} h={96} title="Performance" accent="rgba(39,201,63,.35)">
            <rect x="148" y="3" width="64" height="11" rx="5.5" fill="rgba(39,201,63,.16)" />
            <text x="180" y="10.8" textAnchor="middle" className="sc-green">Rendered in 0.4s</text>
            <Gauge cx={38} cy={52} pct={98} col="#27C93F" val="98" label="Score" r={15} />
            {[["LCP", "0.4s", 94], ["TTFB", "38ms", 90], ["CLS", "0", 100]].map(([l, v, p], i) => (
              <g key={l as string} transform={`translate(0 ${34 + i * 18})`}>
                <text x="84" y="8" className="sc-dim">{l}</text>
                <text x="108" y="8" className="sc-txt">{v}</text>
                <rect x="140" y="3" width="68" height="5" rx="2.5" fill="rgba(255,255,255,.08)" />
                <rect x="140" y="3" width={(68 * (p as number)) / 100} height="5" rx="2.5" fill="#27C93F" fillOpacity=".85" className="bar-grow" />
              </g>
            ))}
          </Win>
        </g></g>
      </svg>
    </div>
  );
}

export default function HeadlessEcommercePage() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".com-hcore", { opacity: 0, y: 14, duration: 0.5 })
        .from(".com-h0", { opacity: 0, x: -24, duration: 0.45 }, "-=0.2")
        .from(".com-h2", { opacity: 0, x: 24, duration: 0.45 }, "-=0.45")
        .from(".com-h1", { opacity: 0, y: -16, duration: 0.45 }, "-=0.45")
        .from(".com-hlink", { opacity: 0, duration: 0.4 }, "-=0.2")
        .from(".com-htoast", { opacity: 0, y: 14, duration: 0.5 }, "-=0.1");
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: ".challenge-scene", start: "top 75%", once: true } });
      tl.from(".com-c-store", { opacity: 0, y: 14, duration: 0.45 })
        .from(".com-c-session", { opacity: 0, x: 14, duration: 0.45 }, "-=0.25")
        .from(".com-c-rev", { opacity: 0, x: 14, duration: 0.45 }, "-=0.3")
        .from(".com-c-cart", { opacity: 0, y: 14, duration: 0.5 }, "-=0.2");
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: ".solution-scene", start: "top 75%", once: true } });
      tl.from(".com-s0, .com-s1, .com-s2", { opacity: 0, y: 12, stagger: 0.14, duration: 0.45 })
        .from(".com-s-arrows", { opacity: 0, duration: 0.4 }, "-=0.2")
        .from(".com-s-perf", { opacity: 0, y: 14, duration: 0.5 }, "-=0.1");
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
              <p className="eyebrow">Web Development · 02</p>
              <h1 className="mt-4 font-heading text-[clamp(2.4rem,5.5vw,4.4rem)] font-extrabold leading-[1.04] tracking-tight">
                Headless &amp; <span className="font-serif font-normal italic text-gradient">composable e-commerce</span> that keeps up with your customers.
              </h1>
              <p className="mt-6 max-w-lg text-lg text-white/60">
                One commerce engine, connected to fast storefronts across web, mobile and marketplaces. Flexible enough to change, fast enough to convert.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <DiscoveryButton className="btn-amber inline-flex items-center gap-2">Book a discovery call <ArrowUpRight size={18} /></DiscoveryButton>
                <Link href="#case-study" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-brand-cyan/40 hover:text-white">See the case study <ArrowRight size={16} /></Link>
              </div>
            </div>
            <HeroChannelsScene />
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
              <h2 className="mt-3 font-heading text-3xl font-extrabold md:text-4xl">A slow storefront loses the sale before checkout.</h2>
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
              <h2 className="mt-3 font-heading text-3xl font-extrabold md:text-4xl">A decoupled frontend on a central commerce engine.</h2>
              <p className="mt-4 text-white/60">We separate what customers see from how orders are processed — so the storefront can be fast and flexible, while the commerce core stays the single source of truth.</p>
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
              <h2 className="mt-3 font-heading text-3xl font-extrabold md:text-4xl">A storefront rebuilt for speed, with one commerce backend for every channel.</h2>
            </div>
            <div className="reveal-sec mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[.02]">
  <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
    <span className="h-2.5 w-2.5 rounded-full bg-brand-amber" />
    <span className="h-2.5 w-2.5 rounded-full bg-brand-cyan" />
    <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
    <span className="ml-3 font-mono text-xs text-white/40">https://aethelles.com/</span>
  </div>
  
  {/* Image Container */}
  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0B1B20]">
    <img
      src="/images/thirdservice.jpg" // <-- Yahan apni image ka naam aur extension likho
      alt="Client project screenshot"
      className="h-full w-full object-cover"
    />
  </div>
</div>

            <div className="reveal-sec mt-8">
              <p className="text-xs font-semibold uppercase tracking-[.22em] text-brand-cyan">Measured results</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { v: 62, s: "%", l: "Faster page load" },
                  { v: 28, s: "%", l: "Higher conversion rate" },
                  { v: 41, s: "%", l: "More checkouts completed" },
                  { v: 19, s: "%", l: "Revenue per visitor up" },
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
                  <li>— Slow, template-locked storefront.</li>
                  <li>— Every campaign change needed a developer.</li>
                  <li>— Inventory data out of sync with the store.</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.22em] text-brand-cyan">Our solution</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-white/55">
                  <li>— Decoupled frontend for fast rendering.</li>
                  <li>— Central commerce engine for all channels.</li>
                  <li>— Documented APIs connecting ERP and marketing tools.</li>
                </ul>
              </div>
            </div>

            <div className="reveal-sec mt-10">
              <Link href="https://aethelles.com/" className="inline-flex items-center gap-2 rounded-xl border border-brand-cyan/40 bg-brand-cyan/[.08] px-6 py-3 text-sm font-semibold text-brand-cyan transition-colors hover:bg-brand-cyan/[.14] hover:text-white">Live demo <ArrowUpRight size={16} /></Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative px-6 py-28">
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow justify-center">Let’s talk</p>
            <h2 className="mt-4 font-heading text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold leading-[1.05] tracking-tight">
              Make your storefront <span className="font-serif font-normal italic text-gradient">fast and flexible.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/60">Tell us where your store slows down and which channels you want to sell on. We’ll map the right architecture.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
        <DiscoveryButton className="btn-amber inline-flex items-center gap-2">Book a free discovery call <ArrowUpRight size={18} /></DiscoveryButton>
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
          .toast { animation: scToast 6s ease-in-out infinite; }
          @keyframes scToast { 0%, 8% { opacity: 0; transform: translateY(8px); } 18%, 78% { opacity: 1; transform: translateY(0); } 90%, 100% { opacity: 0; transform: translateY(-4px); } }
          .bar-stall { transform-box: fill-box; transform-origin: 0 50%; animation: scBar 3.4s ease-out infinite; }
          .bar-grow { transform-box: fill-box; transform-origin: 0 50%; animation: scBar 2.8s ease-out infinite; }
          @keyframes scBar { 0% { transform: scaleX(0); } 55%, 100% { transform: scaleX(1); } }
          .gauge { animation: scGauge 4.5s ease-out infinite; }
          @keyframes scGauge { 0% { stroke-dasharray: 0 120; } }
          @media (prefers-reduced-motion: reduce) {
            .marquee, .ch-err, .shimmer, .pulse-btn, .ch-flow, .sol-dash, .sol-pulse, .sol-draw, .spin, .toast, .bar-stall, .bar-grow, .gauge { animation: none !important; }
            .marquee { flex-wrap: wrap; justify-content: center; white-space: normal; }
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
}