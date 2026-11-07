"use client";

import { useRef, type ReactNode } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, ArrowRight, LayoutDashboard, Users, Plug, ShieldCheck, Search, Bell, Settings, ChevronDown } from "lucide-react";
import { gsap } from "@/lib/gsap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ============================================================
   SERVICE 01 — CUSTOM SAAS & WEB APPLICATION DEVELOPMENT
   ============================================================ */

const CHALLENGE = [
  { t: "Disconnected tools", d: "Data lives in spreadsheets, email and three different apps. Nobody has one reliable view." },
  { t: "Manual workflows", d: "Your team copies numbers between systems because nothing talks to each other." },
  { t: "Limited visibility", d: "You can’t see pipeline, usage or performance without asking someone to build a report." },
];

const FEATURES = [
  { icon: LayoutDashboard, t: "Role-based dashboards", d: "Every user sees the data and actions relevant to their role — not a wall of everything." },
  { icon: Users, t: "User management", d: "Invite, permission and audit team access without touching code." },
  { icon: Plug, t: "Integrations", d: "Connected to the tools you already use via secure, documented APIs." },
  { icon: ShieldCheck, t: "Secure by design", d: "Authentication, permissions and data boundaries designed in from the first sprint." },
];

// Real technology logos via Simple Icons CDN — each with its official brand colour (hex, no #)
const TECHNOLOGIES = [
  // Languages & markup
  { name: "HTML5", icon: "html5", color: "E34F26" },
  { name: "CSS3", icon: "css3", color: "33A9DC" },
  { name: "JavaScript", icon: "javascript", color: "F7DF1E" },
  { name: "TypeScript", icon: "typescript", color: "3178C6" },
  { name: "Python", icon: "python", color: "4B8BBE" },
  { name: "PHP", icon: "php", color: "8993BE" },
  // Frontend
  { name: "React", icon: "react", color: "61DAFB" },
  { name: "Next.js", icon: "nextdotjs", color: "FFFFFF" },
  { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
  // Backend
  { name: "Node.js", icon: "nodedotjs", color: "5FA04E" },
  { name: "Express", icon: "express", color: "FFFFFF" },
  { name: "NestJS", icon: "nestjs", color: "E0234E" },
  { name: "Django", icon: "django", color: "44B78B" },
  { name: "Flask", icon: "flask", color: "FFFFFF" },
  { name: "FastAPI", icon: "fastapi", color: "009688" },
  { name: "Laravel", icon: "laravel", color: "FF2D20" },
  { name: "GraphQL", icon: "graphql", color: "E10098" },
  // Databases
  { name: "PostgreSQL", icon: "postgresql", color: "4A90E2" },
  { name: "MongoDB", icon: "mongodb", color: "47A248" },
  { name: "MySQL", icon: "mysql", color: "5BA3D0" },
  { name: "Redis", icon: "redis", color: "FF4438" },
  { name: "Supabase", icon: "supabase", color: "3FCF8E" },
  // CMS & e-commerce
  { name: "WordPress", icon: "wordpress", color: "4AA3DF" },
  { name: "Shopify", icon: "shopify", color: "7AB55C" },
  // Payments & tooling
  { name: "Stripe", icon: "stripe", color: "8B85FF" },
  { name: "Git", icon: "git", color: "F05032" },
  { name: "Docker", icon: "docker", color: "2496ED" },
  { name: "AWS", icon: "amazonaws", color: "FF9900" },
  { name: "Nginx", icon: "nginx", color: "009639" },
  { name: "Vercel", icon: "vercel", color: "FFFFFF" },
];

/* ============================================================
   HERO — Real HTML/Tailwind Dashboard (MT Bytes Style)
   ============================================================ */
function HeroBuildScene() {
  return (
    <div className="relative mx-auto w-full max-w-[680px] select-none" aria-hidden="true">
      {/* Outer Glow */}
      <div className="absolute -inset-10 rounded-full bg-brand-cyan/10 blur-[80px]" />

      {/* Main Browser Window */}
      <div className="hero-window relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0B1B20] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl">
        
        {/* Window Header / Toolbar */}
        <div className="flex h-12 items-center gap-2 border-b border-white/[0.08] bg-white/[0.02] px-4">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
            <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
            <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
          </div>
          <div className="mx-auto flex h-6 w-64 items-center justify-center rounded-md border border-white/[0.05] bg-black/40 px-3">
            <span className="text-[10px] font-mono text-white/40">app.enripeak.io/dashboard</span>
          </div>
        </div>

        {/* App Body: Sidebar + Content */}
        <div className="flex h-[380px]">
          
          {/* Sidebar */}
          <div className="hero-sidebar flex w-44 flex-col border-r border-white/[0.08] bg-black/20 p-3">
            <div className="mb-4 flex items-center gap-2 px-2">
              <div className="grid h-6 w-6 place-items-center rounded bg-brand-cyan text-[10px] font-bold text-black">EP</div>
              <span className="text-xs font-bold text-white">Workspace</span>
            </div>
            
            {/* Nav Items */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 rounded-md bg-brand-cyan/10 px-2 py-1.5 border border-brand-cyan/20">
                <LayoutDashboard size={12} className="text-brand-cyan" />
                <span className="text-[11px] font-medium text-brand-cyan">Overview</span>
              </div>
              {[
                { icon: Search, label: "Analytics" },
                { icon: Users, label: "Team" },
                { icon: Settings, label: "Settings" }
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 rounded-md px-2 py-1.5 opacity-60">
                  <item.icon size={12} className="text-white" />
                  <span className="text-[11px] font-medium text-white">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto rounded-md border border-brand-amber/20 bg-brand-amber/10 p-2 text-center">
              <span className="text-[10px] font-bold text-brand-amber">Upgrade Plan</span>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="hero-content relative flex-1 overflow-hidden p-5">
            {/* Header */}
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white">Workspace Overview</h3>
                <p className="text-[10px] text-white/40">Here is what is happening today.</p>
              </div>
              <div className="flex gap-2">
                <div className="grid h-7 w-7 place-items-center rounded-full border border-white/10 bg-white/5"><Bell size={12} className="text-white/60"/></div>
                <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1"><span className="text-[10px] text-white/60">Last 30 days</span><ChevronDown size={10} className="text-white/40"/></div>
              </div>
            </div>

            {/* KPI Cards */}
            <div className="hero-kpis mb-5 grid grid-cols-3 gap-3">
              {[
                { label: "TOTAL REVENUE", value: "$48,290", bar: "bg-brand-cyan", w: "w-full" },
                { label: "ACTIVE USERS", value: "2,481", bar: "bg-brand-amber", w: "w-1/2" },
                { label: "COMPLETION", value: "92.4%", bar: "bg-[#27C93F]", w: "w-3/4" }
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

            {/* Chart + Table split */}
            <div className="hero-chart grid grid-cols-[1fr_140px] gap-3">
              {/* Chart Area */}
              <div className="relative rounded-lg border border-white/10 bg-white/[0.03] p-3">
                <span className="text-[10px] font-bold text-white/60">Revenue Growth</span>
                <svg viewBox="0 0 200 60" className="mt-3 w-full h-auto overflow-visible" fill="none">
                  <path d="M0 50 L30 40 L60 45 L90 20 L120 30 L150 10 L200 15" stroke="#39E7EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chart-line" />
                  <path d="M0 50 L30 40 L60 45 L90 20 L120 30 L150 10 L200 15 V60 H0 Z" fill="url(#cyan-grad)" opacity="0.1" />
                  <defs>
                    <linearGradient id="cyan-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop stopColor="#39E7EF" /><stop offset="1" stopColor="#39E7EF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="chart-tooltip absolute right-1/4 top-1/2 flex items-center gap-1.5 rounded bg-[#39E7EF] px-2 py-1 shadow-lg">
                  <span className="text-[9px] font-bold text-[#08141A]">$12.4k</span>
                </div>
              </div>

              {/* Recent Activity / Table */}
              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                <span className="text-[10px] font-bold text-white/60">Recent Leads</span>
                <div className="mt-3 space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="table-row flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full border border-brand-cyan/30 bg-brand-cyan/10" />
                      <div className="flex-1">
                        <div className="h-1.5 w-3/4 rounded bg-white/40" />
                        <div className="mt-1 h-1 w-1/2 rounded bg-white/20" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Cursor Action */}
      <div className="premium-cursor absolute bottom-12 right-8 z-20 flex items-center gap-2 rounded-lg bg-brand-cyan px-3 py-1.5 shadow-[0_10px_20px_rgba(57,231,239,0.3)]">
        <span className="text-[10px] font-bold text-[#08141A]">Export Report</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#08141A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      </div>
      <svg className="premium-cursor-arrow absolute bottom-8 right-12 z-30 h-5 w-5 drop-shadow-md" viewBox="0 0 24 24" fill="white" stroke="#08141a" strokeWidth="1.5">
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
      </svg>
    </div>
  );
}

/* Shared SVG Defs */
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

function Win({ w, h, title, children }: { w: number; h: number; title: string; children?: ReactNode }) {
  return (
    <g>
      <rect width={w} height={h} rx="8" fill="url(#scCard)" stroke="rgba(255,255,255,.12)" filter="url(#scShadow)" />
      <path d={`M0 8a8 8 0 0 1 8-8h${w - 16}a8 8 0 0 1 8 8v10H0z`} fill="rgba(255,255,255,.045)" />
      <circle cx="9" cy="9" r="2" fill="#FF5F56" />
      <circle cx="16" cy="9" r="2" fill="#FFBD2E" />
      <circle cx="23" cy="9" r="2" fill="#27C93F" />
      <text x="32" y="11.5" className="sc-win-t">{title}</text>
      {children}
    </g>
  );
}

function ChallengeScene() {
  const rows = [["Revenue", "48,290", "12%"], ["Leads", "1,204", "8%"], ["Churn", "3.1%", "2%"], ["Total", "=SUM(", "#REF!"]];
  const mails = [["Sam", "Re: numbers v7_FINAL"], ["Priya", "Fwd: which sheet is right?"], ["Ali", "Re: Re: report again"], ["Dan", "Can you resend the file?"]];
  const deals = [["Northwind", "NW", "$46,810", "14d ago"], ["Acme Co", "AC", "$12,400", "9d ago"], ["Globex", "GX", "$9,950", "21d ago"]];
  const copyA = "M68 132 V152 H170 V176";
  const copyC = "M372 132 V152 H270 V176";

  return (
    <div className="relative h-full min-h-[240px]" aria-hidden="true">
      <svg viewBox="0 0 440 280" className="h-full w-full" fill="none" fontFamily="ui-sans-serif, system-ui, sans-serif">
        <g className="ch-manual">
          {[copyA, copyC, "M220 132 V176"].map((d) => (
            <path key={d} d={d} stroke="rgba(245,184,75,.5)" strokeWidth="1.4" strokeDasharray="3 4" className="ch-flow" />
          ))}
          <path d="M166 171 L170 177 L174 171 M266 171 L270 177 L274 171 M216 171 L220 177 L224 171" stroke="#F5B84B" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="160" y="145" width="120" height="14" rx="7" fill="#1B1D18" stroke="rgba(245,184,75,.55)" />
          <text x="220" y="154.6" textAnchor="middle" className="sc-amber">MANUAL COPY-PASTE</text>
        </g>
        <g className="ch-broken">
          {[144, 296].map((cx) => (
            <g key={cx}>
              <path d={`M${cx - 14} 73 H${cx + 14}`} stroke="rgba(245,184,75,.55)" strokeWidth="1.4" strokeDasharray="2 3" />
              <circle cx={cx} cy="73" r="6.5" fill="#241F14" stroke="rgba(245,184,75,.7)" />
              <path d={`M${cx - 2.5} 70.5 L${cx + 2.5} 75.5 M${cx + 2.5} 70.5 L${cx - 2.5} 75.5`} stroke="#F5B84B" strokeWidth="1.4" strokeLinecap="round" />
            </g>
          ))}
        </g>
        <g className="ch-tool ch-tool-0">
          <g transform="translate(6 14)">
            <Win w={124} h={118} title="Q3_numbers.xlsx">
              <g transform="translate(8 24)">
                <rect width="108" height="11" rx="2" fill="rgba(255,255,255,.07)" />
                {["A", "B", "C"].map((c, i) => (
                  <text key={c} x={20 + i * 36} y="7.8" textAnchor="middle" className="sc-dim">{c}</text>
                ))}
                {rows.map((r, ri) => (
                  <g key={r[0]} transform={`translate(0 ${13 + ri * 17})`}>
                    <path d="M0 17H108" stroke="rgba(255,255,255,.07)" />
                    {r.map((v, ci) => (
                      <text key={ci} x={4 + ci * 36} y="11" className={ri === 3 && ci === 2 ? "sc-amber ch-err" : ci === 0 ? "sc-dim" : "sc-txt"}>{v}</text>
                    ))}
                  </g>
                ))}
                <rect x="36" y="13" width="36" height="17" rx="1" stroke="#39E7EF" strokeWidth="1" strokeDasharray="3 2" className="ch-sel" />
                <rect x="72" y="64" width="36" height="17" rx="1" fill="rgba(245,184,75,.12)" stroke="rgba(245,184,75,.6)" className="ch-err" />
              </g>
            </Win>
          </g>
        </g>
        <g className="ch-tool ch-tool-1">
          <g transform="translate(158 14)">
            <Win w={124} h={118} title="Inbox">
              <rect x="92" y="3" width="26" height="11" rx="5.5" fill="rgba(245,184,75,.18)" />
              <text x="105" y="10.8" textAnchor="middle" className="sc-amber">37</text>
              {mails.map(([from, subj], i) => (
                <g key={from} transform={`translate(0 ${24 + i * 22})`}>
                  <path d="M8 21H116" stroke="rgba(255,255,255,.07)" />
                  <circle cx="13" cy="9" r="2.2" fill={i < 2 ? "#39E7EF" : "rgba(255,255,255,.2)"} />
                  <text x="22" y="8" className="sc-txt">{from}</text>
                  <text x="22" y="16.5" className="sc-dim">{subj}</text>
                </g>
              ))}
            </Win>
          </g>
        </g>
        <g className="ch-tool ch-tool-2">
          <g transform="translate(310 14)">
            <Win w={124} h={118} title="CRM · Deals">
              {deals.map(([name, ini, val, age], i) => (
                <g key={name} transform={`translate(0 ${24 + i * 30})`}>
                  <path d="M8 27H116" stroke="rgba(255,255,255,.07)" />
                  <circle cx="17" cy="12" r="8" fill="rgba(57,231,239,.12)" stroke="rgba(57,231,239,.35)" />
                  <text x="17" y="14.2" textAnchor="middle" className="sc-cyan">{ini}</text>
                  <text x="30" y="10" className="sc-txt">{name}</text>
                  <text x="30" y="19.5" className={i === 0 ? "sc-amber" : "sc-dim"}>{val}</text>
                  <rect x="84" y="6" width="32" height="11" rx="5.5" fill="rgba(245,184,75,.14)" />
                  <text x="100" y="13.6" textAnchor="middle" className="sc-amber">{age}</text>
                </g>
              ))}
            </Win>
          </g>
        </g>
        <g className="ch-output">
          <g transform="translate(110 176)">
            <Win w={220} h={94} title="Weekly_report.docx">
              <text x="12" y="34" className="sc-h">Weekly Report</text>
              <g className="ch-err">
                <rect x="136" y="25" width="72" height="12" rx="6" fill="rgba(245,184,75,.16)" stroke="rgba(245,184,75,.5)" />
                <text x="172" y="33.4" textAnchor="middle" className="sc-amber">≠ doesn’t match</text>
              </g>
              <path d="M12 43H208" stroke="rgba(255,255,255,.08)" />
              <text x="12" y="55" className="sc-dim">Revenue · Sheets</text>
              <text x="208" y="55" textAnchor="end" className="sc-txt">$48,290</text>
              <text x="12" y="68" className="sc-dim">Revenue · CRM</text>
              <text x="208" y="68" textAnchor="end" className="sc-amber">$46,810</text>
              <circle cx="15" cy="82" r="4" stroke="#F5B84B" strokeWidth="1" />
              <path d="M15 79.6V82l1.8 1.2" stroke="#F5B84B" strokeWidth="1" strokeLinecap="round" />
              <text x="24" y="84" className="sc-amber">Last updated 9 days ago</text>
            </Win>
          </g>
        </g>
        <g className="ch-live">
          {[{ d: copyA, t: "$48,290", begin: "0s" }, { d: copyC, t: "$46,810", begin: "1.6s" }].map((c) => (
            <g key={c.t}>
              <g>
                <animateMotion dur="3.2s" begin={c.begin} repeatCount="indefinite" path={c.d} />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="3.2s" begin={c.begin} repeatCount="indefinite" />
                <rect x="-17" y="-6.5" width="34" height="13" rx="6.5" fill="#F5B84B" />
                <text y="2.4" textAnchor="middle" className="sc-dark">{c.t}</text>
                <g transform="translate(8 6)">
                  <path d="M0 0v11l3-3 2.4 5.2 2-.9L7.4 7.1H11.5z" fill="#fff" stroke="#08141A" strokeWidth=".9" strokeLinejoin="round" />
                </g>
              </g>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

function SolutionScene() {
  const links = [
    { d: "M136 40 Q175 40 175 76", n: 0 }, { d: "M136 176 H160 Q175 176 175 164", n: 1 },
    { d: "M304 40 Q265 40 265 76", n: 2 }, { d: "M304 176 H280 Q265 176 265 164", n: 3 },
  ];
  const integ = [["S", "Stripe", "#635BFF"], ["#", "Slack", "#E01E5A"], ["H", "HubSpot", "#FF7A59"]];
  const roles = [["SK", "Sara K.", "Admin", "#39E7EF"], ["OR", "Omar R.", "Editor", "#F5B84B"], ["LM", "Lina M.", "Viewer", "rgba(230,240,242,.5)"]];

  return (
    <div className="relative h-full min-h-[240px]" aria-hidden="true">
      <svg viewBox="0 0 440 280" className="h-full w-full" fill="none" fontFamily="ui-sans-serif, system-ui, sans-serif">
        {links.map((l) => (
          <g key={l.n} className={`sol-link sol-node-${l.n}-link`}>
            <path d={l.d} stroke="rgba(57,231,239,.5)" strokeWidth="1.4" strokeDasharray="4 6" className="sol-dash" />
          </g>
        ))}
        <path d="M220 164 V228" stroke="rgba(57,231,239,.5)" strokeWidth="1.4" strokeDasharray="4 6" className="sol-dash" />
        <g className="sol-core">
          <circle cx="220" cy="120" r="62" stroke="rgba(57,231,239,.22)" strokeDasharray="3 8" className="sol-core-ring" />
          <g transform="translate(150 76)" filter="url(#scGlow)">
            <rect width="140" height="88" rx="12" fill="url(#scCore)" stroke="#39E7EF" strokeWidth="1.4" />
            <text x="70" y="21" textAnchor="middle" className="sol-core-t">CUSTOM CORE</text>
            <path d="M12 28H128" stroke="rgba(57,231,239,.2)" />
            {["Auth", "Data", "Logic"].map((l, i) => (
              <g key={l} transform={`translate(${10 + i * 43} 35)`}>
                <rect width="38" height="16" rx="5" fill="rgba(8,20,26,.7)" stroke="rgba(57,231,239,.35)" />
                <circle cx="9" cy="8" r="2.2" fill="#39E7EF" />
                <text x="15" y="10.3" className="sc-txt">{l}</text>
              </g>
            ))}
            <rect x="10" y="58" width="120" height="18" rx="5" fill="rgba(8,20,26,.7)" stroke="rgba(255,255,255,.1)" />
            <circle cx="20" cy="67" r="2.4" fill="#27C93F" />
            <text x="27" y="69.2" className="sc-dim">Secure API · all systems live</text>
          </g>
        </g>
        <g className="sol-node sol-node-0">
          <g transform="translate(8 10)">
            <Win w={128} h={84} title="Dashboard">
              <text x="10" y="34" className="sc-h">$48.2k</text>
              <text x="52" y="33.5" className="sc-green">▲ 12.4%</text>
              <text x="10" y="42" className="sc-dim">Revenue · 30 days</text>
              <path d="M10 76 L30 69 L48 72 L68 60 L88 64 L108 52 L120 55 V80 H10Z" fill="url(#scArea)" opacity=".7" />
              <path d="M10 76 L30 69 L48 72 L68 60 L88 64 L108 52 L120 55" stroke="#39E7EF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="sol-draw" />
            </Win>
          </g>
        </g>
        <g className="sol-node sol-node-2">
          <g transform="translate(304 10)">
            <Win w={128} h={84} title="User roles">
              {roles.map(([ini, name, role, col], i) => (
                <g key={name} transform={`translate(0 ${23 + i * 20})`}>
                  <circle cx="17" cy="8" r="6.5" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.2)" />
                  <text x="17" y="10" textAnchor="middle" className="sc-dim">{ini}</text>
                  <text x="29" y="10.4" className="sc-txt">{name}</text>
                  <rect x="86" y="2.5" width="32" height="11" rx="5.5" fill="rgba(255,255,255,.06)" stroke={col} strokeOpacity=".6" />
                  <text x="102" y="10.2" textAnchor="middle" style={{ fill: col }} className="sc-role">{role}</text>
                </g>
              ))}
            </Win>
          </g>
        </g>
        <g className="sol-node sol-node-1">
          <g transform="translate(8 134)">
            <Win w={128} h={84} title="Integrations">
              {integ.map(([ini, name, col], i) => (
                <g key={name} transform={`translate(0 ${23 + i * 20})`}>
                  <circle cx="17" cy="8" r="6.5" fill={col} fillOpacity=".2" stroke={col} strokeOpacity=".7" />
                  <text x="17" y="10.2" textAnchor="middle" style={{ fill: col }} className="sc-role">{ini}</text>
                  <text x="29" y="10.4" className="sc-txt">{name}</text>
                  <circle cx="92" cy="8" r="2.2" fill="#27C93F" />
                  <circle cx="92" cy="8" r="2.2" fill="#27C93F" className="sol-pulse" />
                  <text x="98" y="10.2" className="sc-green">Live</text>
                </g>
              ))}
            </Win>
          </g>
        </g>
        <g className="sol-node sol-node-3">
          <g transform="translate(304 134)">
            <Win w={128} h={84} title="Reports">
              <circle cx="32" cy="50" r="14" stroke="rgba(255,255,255,.1)" strokeWidth="5" />
              <circle cx="32" cy="50" r="14" stroke="#39E7EF" strokeWidth="5" strokeLinecap="round" transform="rotate(-90 32 50)" className="sol-donut" />
              <text x="32" y="52.4" textAnchor="middle" className="sc-txt">92%</text>
              <text x="62" y="38" className="sc-dim">Weekly summary</text>
              <path d="M62 43H118M62 49H106" stroke="rgba(255,255,255,.18)" strokeWidth="2.4" strokeLinecap="round" />
              <rect x="62" y="58" width="56" height="13" rx="6.5" fill="#39E7EF" />
              <text x="90" y="66.6" textAnchor="middle" className="sc-dark">Export PDF</text>
            </Win>
          </g>
        </g>
        <g className="sol-request">
          {links.map((l, i) => (
            <circle key={l.n} r="2.6" fill="#39E7EF" filter="url(#scGlow)">
              <animateMotion dur="2.8s" begin={`${i * 0.7}s`} repeatCount="indefinite" path={l.d} keyPoints={i % 2 ? "1;0" : "0;1"} keyTimes="0;1" calcMode="linear" />
            </circle>
          ))}
          <circle r="2.6" fill="#F5B84B">
            <animateMotion dur="2.2s" repeatCount="indefinite" path="M220 164 V228" />
          </circle>
        </g>
        <g className="sol-output">
          <g transform="translate(100 228)">
            <rect width="240" height="38" rx="9" fill="rgba(57,231,239,.1)" stroke="#39E7EF" strokeWidth="1.4" filter="url(#scShadow)" />
            <circle cx="20" cy="19" r="4.5" fill="#27C93F" />
            <circle cx="20" cy="19" r="4.5" fill="#27C93F" className="sol-pulse" />
            <text x="33" y="17" className="sol-out-t">ONE SOURCE OF TRUTH</text>
            <text x="33" y="28.5" className="sol-out-s">Synced just now · every role sees the same data</text>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function CustomSaasPage() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".hero-window", { opacity: 0, y: 40, scale: 0.95, rotationX: 10 }, { opacity: 1, y: 0, scale: 1, rotationX: 0, duration: 1, ease: "power4.out" });
      tl.fromTo(".hero-sidebar > div", { opacity: 0, x: -15 }, { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 }, "-=0.6");
      tl.fromTo(".hero-kpis > div", { opacity: 0, y: 15, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.5)" }, "-=0.4");
      tl.fromTo(".chart-line", { strokeDasharray: 300, strokeDashoffset: 300 }, { strokeDashoffset: 0, duration: 1.2, ease: "power2.inOut" }, "-=0.4");
      tl.fromTo(".table-row", { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: 0.4, stagger: 0.1 }, "-=0.8");
      tl.fromTo([".premium-cursor", ".premium-cursor-arrow"], { opacity: 0, scale: 0.5, y: 20, x: 20 }, { opacity: 1, scale: 1, y: 0, x: 0, duration: 0.6, ease: "back.out(2)" }, "-=0.2");
      tl.to(".chart-tooltip", { opacity: 1, y: -5, duration: 0.3, ease: "power2.out" }, "-=0.1");
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const chTl = gsap.timeline({ scrollTrigger: { trigger: ".challenge-scene", start: "top 75%", once: true } });
      chTl.from(".ch-tool-0", { opacity: 0, y: 16, duration: 0.5 })
        .from(".ch-tool-1", { opacity: 0, y: 16, duration: 0.5 }, "-=0.3")
        .from(".ch-tool-2", { opacity: 0, y: 16, duration: 0.5 }, "-=0.3")
        .from(".ch-broken", { opacity: 0, duration: 0.5 }, "-=0.1")
        .from(".ch-manual", { opacity: 0, duration: 0.5 }, "-=0.2")
        .from(".ch-output", { opacity: 0, y: 14, duration: 0.5 }, "-=0.1")
        .from(".ch-live", { opacity: 0, duration: 0.4 }, "-=0.1");
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const solTl = gsap.timeline({ scrollTrigger: { trigger: ".solution-scene", start: "top 75%", once: true } });
      solTl.from(".sol-core", { opacity: 0, y: 12, duration: 0.5 })
        .from(".sol-node-0", { opacity: 0, x: -16, duration: 0.45 }, "-=0.2")
        .from(".sol-node-1", { opacity: 0, x: -16, duration: 0.45 }, "-=0.3")
        .from(".sol-node-2", { opacity: 0, x: 16, duration: 0.45 }, "-=0.3")
        .from(".sol-node-3", { opacity: 0, x: 16, duration: 0.45 }, "-=0.3")
        .from(".sol-node-0-link, .sol-node-1-link, .sol-node-2-link, .sol-node-3-link", { opacity: 0, duration: 0.4 }, "-=0.2")
        .from(".sol-request", { opacity: 0, duration: 0.3 }, "-=0.1")
        .from(".sol-output", { opacity: 0, y: 12, duration: 0.5 }, "-=0.1");
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
        
        {/* HERO */}
        <section className="relative px-6 pb-20 pt-32 md:pt-40">
          <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-brand-cyan/[.07] blur-[140px]" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.95fr_1.05fr]">
            <div>
              <p className="eyebrow">Web Development · 01</p>
              <h1 className="mt-4 font-heading text-[clamp(2.4rem,5.5vw,4.4rem)] font-extrabold leading-[1.04] tracking-tight text-white">
                Custom SaaS &amp; <span className="font-serif font-normal italic text-gradient">web applications</span> built around how your business actually works.
              </h1>
              <p className="mt-6 max-w-lg text-lg text-white/60">
                We design and build the software your operation needs — dashboards, portals, user management and integrations that replace disconnected tools with one reliable system.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/#contact" className="btn-amber inline-flex items-center gap-2">Book a discovery call <ArrowUpRight size={18} /></Link>
                <Link href="#case-study" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-brand-cyan/40 hover:text-white">See the case study <ArrowRight size={16} /></Link>
              </div>
              <ul className="mt-10 grid gap-3 text-sm text-white/55 sm:grid-cols-2">
                {["Replace manual workflows", "One source of truth", "Role-based access", "Built to scale"].map((b) => (
                  <li key={b} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />{b}</li>
                ))}
              </ul>
            </div>
            <HeroBuildScene />
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
                    {/* eslint-disable-next-line @next/next/no-img-element */}
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
              <h2 className="mt-3 font-heading text-3xl font-extrabold md:text-4xl text-white">Disconnected tools. Manual work. No clear view.</h2>
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
            <div className="challenge-scene reveal-sec rounded-3xl border border-white/10 bg-white/[.02] p-6">
              <ChallengeScene />
            </div>
          </div>
        </section>

        {/* SOLUTION */}
        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="reveal-sec max-w-2xl">
              <p className="eyebrow">Our solution</p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold md:text-4xl text-white">One custom system, designed around your workflow.</h2>
              <p className="mt-4 text-white/60">We map your process first, then build the architecture, interfaces and integrations that make it work — with permissions and data boundaries designed in.</p>
            </div>
            <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
              <div className="solution-scene reveal-sec rounded-3xl border border-white/10 bg-white/[.02] p-6">
                <SolutionScene />
              </div>
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
              <h2 className="mt-3 font-heading text-3xl font-extrabold md:text-4xl text-white">A project built to replace three tools and endless spreadsheets.</h2>
            </div>

            <div className="reveal-sec mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[.02]">
  <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
    <span className="h-2.5 w-2.5 rounded-full bg-brand-amber" />
    <span className="h-2.5 w-2.5 rounded-full bg-brand-cyan" />
    <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
    <span className="ml-3 font-mono text-xs text-white/40">https://manchestercertify.co.uk/</span>
  </div>
  
  {/* Image Container */}
  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0B1B20]">
    <img
      src="/images/firstservice.jpg" // <-- Yahan apni image ka naam aur extension likho
      alt="Client project screenshot"
      className="h-full w-full object-cover"
    />
  </div>
</div>

            <div className="reveal-sec mt-8">
              <p className="text-xs font-semibold uppercase tracking-[.22em] text-brand-cyan">Measured results</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { v: 35, s: "%", l: "Faster processing" },
                  { v: 12, s: "h", l: "Time saved weekly" },
                  { v: 80, s: "%", l: "Tasks automated" },
                  { v: 3, s: "x", l: "Faster user onboarding" },
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
                  <li>— Three disconnected tools with no shared data.</li>
                  <li>— Weekly reporting required manual copy-paste.</li>
                  <li>— No visibility into usage or pipeline.</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.22em] text-brand-cyan">Our solution</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-white/55">
                  <li>— One custom application with shared data model.</li>
                  <li>— Role-based dashboards and automated reporting.</li>
                  <li>— Secure integrations with existing tools.</li>
                </ul>
              </div>
            </div>

            <div className="reveal-sec mt-10">
              <Link href="https://manchestercertify.co.uk/" className="inline-flex items-center gap-2 rounded-xl border border-brand-cyan/40 bg-brand-cyan/[.08] px-6 py-3 text-sm font-semibold text-brand-cyan transition-colors hover:bg-brand-cyan/[.14] hover:text-white">Live demo <ArrowUpRight size={16} /></Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative px-6 py-28">
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow justify-center">Let’s talk</p>
            <h2 className="mt-4 font-heading text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold leading-[1.05] tracking-tight text-white">
              Replace disconnected tools with <span className="font-serif font-normal italic text-gradient">one clear system.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/60">Tell us what your team has to juggle today. We’ll map the workflow and recommend the most sensible first build.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href="/#contact" className="btn-amber inline-flex items-center gap-2">Book a free discovery call <ArrowUpRight size={18} /></Link>
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

          /* shared scene text */
          .sc-win-t { fill: rgba(230,240,242,.55); stroke: none; font-size: 6px; font-weight: 600; letter-spacing: .04em; }
          .sc-txt { fill: rgba(230,240,242,.88); stroke: none; font-size: 6.2px; font-weight: 600; }
          .sc-dim { fill: rgba(230,240,242,.42); stroke: none; font-size: 5.2px; }
          .sc-amber { fill: #F5B84B; stroke: none; font-size: 5.4px; font-weight: 700; }
          .sc-cyan { fill: #39E7EF; stroke: none; font-size: 5.4px; font-weight: 700; }
          .sc-green { fill: #27C93F; stroke: none; font-size: 5.2px; font-weight: 700; }
          .sc-role { stroke: none; font-size: 5.2px; font-weight: 700; }
          .sc-dark { fill: #08141A; stroke: none; font-size: 5.8px; font-weight: 800; }
          .sc-h { fill: #fff; stroke: none; font-size: 9px; font-weight: 800; }

          /* CHALLENGE */
          .ch-broken { animation: chBroken 2.4s ease-in-out infinite; }
          .ch-err { animation: chBroken 1.6s ease-in-out infinite; }
          @keyframes chBroken { 0%, 100% { opacity: .35; } 50% { opacity: 1; } }
          .ch-flow, .ch-sel { animation: dashMove 1.6s linear infinite; }
          @keyframes dashMove { to { stroke-dashoffset: -14; } }

          /* SOLUTION */
          .sol-core-t { fill: #39E7EF; stroke: none; font-size: 9px; font-weight: 800; letter-spacing: .1em; }
          .sol-core-ring { transform-origin: 220px 120px; animation: solRing 14s linear infinite; }
          @keyframes solRing { to { transform: rotate(360deg); } }
          .sol-out-t { fill: #39E7EF; stroke: none; font-size: 8px; font-weight: 800; letter-spacing: .1em; }
          .sol-out-s { fill: rgba(230,240,242,.55); stroke: none; font-size: 5.6px; }
          .sol-dash { animation: solDash 2.4s linear infinite; }
          @keyframes solDash { to { stroke-dashoffset: -40; } }
          .sol-pulse { transform-box: fill-box; transform-origin: center; animation: solPulse 2s ease-out infinite; }
          @keyframes solPulse { 0% { transform: scale(1); opacity: .7; } 100% { transform: scale(3.2); opacity: 0; } }
          .sol-draw { stroke-dasharray: 130; animation: solDraw 4.5s ease-in-out infinite; }
          @keyframes solDraw { 0% { stroke-dashoffset: 130; } 40%, 85% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: -130; } }
          .sol-donut { animation: solDonut 4.5s ease-in-out infinite; stroke-dasharray: 81 88; }
          @keyframes solDonut { 0% { stroke-dasharray: 0 88; } 40%, 100% { stroke-dasharray: 81 88; } }

          @media (prefers-reduced-motion: reduce) {
            .marquee, .ch-broken, .ch-err, .ch-flow, .ch-sel, .sol-core-ring, .sol-dash, .sol-pulse, .sol-draw, .sol-donut { animation: none !important; }
            .marquee { flex-wrap: wrap; justify-content: center; white-space: normal; }
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
}