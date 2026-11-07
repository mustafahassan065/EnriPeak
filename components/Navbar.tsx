"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, BadgeCheck, ChevronDown, CircleHelp, Info, Menu, Route, Users, X, type LucideIcon } from "lucide-react";
import Logo from "./Logo";
import { WEB_SERVICES, AI_SERVICES } from "@/lib/data";

type Cat = "web" | "ai";
type Menu = "offer" | "company" | null;

const CATS: Record<Cat, { title: string; sub: string; list: typeof WEB_SERVICES }> = {
  web: { title: "Web Development", sub: "Apps, sites, stores & APIs", list: WEB_SERVICES },
  ai: { title: "AI Solutions", sub: "Agents, automation & integrations", list: AI_SERVICES },
};

type Item = { title: string; desc: string; href: string; icon: LucideIcon };

// NOTE: /about and /about#team pages will be built in the next phase.
const COMPANY_ITEMS: Item[] = [
  { title: "About Us", desc: "The story and mission behind EnriPeak.", href: "/about", icon: Info },
  { title: "Our Philosophy", desc: "The Core Principles of EnriPeak.", href: "/#philosophy", icon: Users },
  { title: "Why EnriPeak?", desc: "What sets EnriPeak apart from typical agencies.", href: "/about#why-enripeak", icon: BadgeCheck },
  { title: "Our Process", desc: "Five steps from idea to launch.", href: "/about#process", icon: Route },
  { title: "FAQs", desc: "Answers to what clients ask most.", href: "/#faq", icon: CircleHelp },
];

const linkCls =
  "relative text-sm font-medium text-white/80 transition-colors hover:text-white after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brand-cyan after:transition-transform after:duration-300 hover:after:scale-x-100";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState<Menu>(null);
  const [cat, setCat] = useState<Cat>("web");
  const [mobile, setMobile] = useState(false);
  const [acc, setAcc] = useState(false);
  const [accCo, setAccCo] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = (m: Exclude<Menu, null>) => {
    if (timer.current) clearTimeout(timer.current);
    setMenu(m);
  };
  const closeMenu = () => {
    timer.current = setTimeout(() => setMenu(null), 140);
  };

  // "What We Offer" helpers (menu itself is unchanged)
  const mega = menu === "offer";
  const openMega = () => openMenu("offer");
  const closeMega = closeMenu;
  const setMega = (next: boolean | ((v: boolean) => boolean)) =>
    setMenu((m) => {
      const val = typeof next === "function" ? next(m === "offer") : next;
      return val ? "offer" : m === "offer" ? null : m;
    });

  const company = menu === "company";

  // navbar stays pinned at the top the whole time — only its background changes on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  const current = CATS[cat];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto mt-3 flex h-16 max-w-7xl items-center justify-between rounded-2xl border px-4 sm:px-5 transition-all duration-500 ${
          scrolled
            ? "border-white/10 bg-ink/70 shadow-[0_0_0_1px_rgba(0,255,255,.06),0_20px_60px_-20px_rgba(0,0,0,.8)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
        style={{ width: "calc(100% - 1.5rem)" }}
      >
        <Link href="/" aria-label="EnriPeak home">
  <img 
    src="/images/logobg2.png" 
    alt="EnriPeak" 
    className="h-11 w-auto sm:h-11" 
  />
</Link>

        {/* desktop links */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          <div onMouseEnter={openMega} onMouseLeave={closeMega} className="relative">
            <button
              className={`${linkCls} flex items-center gap-1`}
              aria-expanded={mega}
              aria-haspopup="true"
              onClick={() => setMega((v) => !v)}
              onFocus={openMega}
            >
              What We Offer
              <ChevronDown size={15} className={`transition-transform duration-300 ${mega ? "rotate-180 text-brand-cyan" : ""}`} />
            </button>
          </div>

          <div onMouseEnter={() => openMenu("company")} onMouseLeave={closeMenu} className="relative">
            <button
              className={`${linkCls} flex items-center gap-1`}
              aria-expanded={company}
              aria-haspopup="true"
              onClick={() => setMenu((m) => (m === "company" ? null : "company"))}
              onFocus={() => openMenu("company")}
            >
              Company
              <ChevronDown size={15} className={`transition-transform duration-300 ${company ? "rotate-180 text-brand-cyan" : ""}`} />
            </button>
          </div>

          <Link href="/projects" className={linkCls}>Case Studies</Link>
          <Link href="/#contact" className={linkCls}>Contact</Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/#contact" className="btn-amber !px-5 !py-2.5 text-sm">
            Free Discovery Call <ArrowUpRight size={16} />
          </Link>
        </div>

        <button className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 lg:hidden" onClick={() => setMobile(true)} aria-label="Open menu">
          <Menu size={20} />
        </button>
      </div>

      {/* ---------- mega menu: What We Offer (unchanged) ---------- */}
      <div
        onMouseEnter={openMega}
        onMouseLeave={closeMega}
        className={`absolute left-1/2 top-full hidden w-[min(1080px,94vw)] -translate-x-1/2 pt-2 transition-all duration-300 lg:block ${
          mega ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="grid grid-cols-[260px_1fr_290px] overflow-hidden rounded-2xl border border-white/10 bg-[#0d131a]/95 shadow-[0_40px_100px_-20px_rgba(0,0,0,.9)] backdrop-blur-2xl">
          {/* left: categories */}
          <div className="border-r border-white/10 p-3">
            {(Object.keys(CATS) as Cat[]).map((c) => (
              <button
                key={c}
                onMouseEnter={() => setCat(c)}
                onFocus={() => setCat(c)}
                className={`mb-1 w-full rounded-xl p-4 text-left transition-colors ${
                  cat === c ? "bg-brand-cyan/10 ring-1 ring-brand-cyan/30" : "hover:bg-white/5"
                }`}
              >
                <p className={`font-heading text-base font-bold ${cat === c ? "text-brand-cyan" : ""}`}>{CATS[c].title}</p>
                <p className="mt-1 text-xs text-white/50">{CATS[c].sub}</p>
              </button>
            ))}
          </div>

          {/* middle: services */}
          <div className="p-5">
            <div className="relative mb-4 h-24 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-brand-cyan/20 via-transparent to-brand-amber/20">
              <span className="absolute -right-6 -top-6 h-32 w-32 rounded-full border border-brand-cyan/40" style={{ animation: "ring-pulse 3s ease-out infinite" }} />
              <span className="absolute -right-6 -top-6 h-32 w-32 rounded-full border border-brand-amber/40" style={{ animation: "ring-pulse 3s ease-out 1.5s infinite" }} />
              <p className="absolute bottom-3 left-4 font-heading text-lg font-bold">{current.title}</p>
            </div>
            <ul key={cat} className="space-y-1">
              {current.list.map((s, i) => (
                <li key={s.title} className="fade-up" style={{ animationDelay: `${i * 60}ms` }}>
                  <Link
                    href={s.href}
                    onClick={() => setMega(false)}
                    className="group flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-white/5"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 text-brand-cyan transition-colors group-hover:border-brand-cyan/50">
                      <s.icon size={18} />
                    </span>
                    <span className="flex-1">
                      <span className="block text-sm font-semibold">{s.title}</span>
                      <span className="block text-xs text-white/50">{s.desc}</span>
                    </span>
                    <ArrowUpRight size={16} className="text-white/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-cyan" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* right: promo */}
          <div className="relative m-3 flex flex-col justify-end overflow-hidden rounded-xl bg-ink p-6">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-brand-cyan/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-10 h-40 w-40 rounded-full bg-brand-amber/15 blur-3xl" />
            
            {/* ----- IMAGE PLACEHOLDER START ----- */}
            <div className="relative mb-4 w-full h-45 rounded-lg overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center group/promo">
              <img 
                src="/images/cta2.avif" 
                alt="Promo illustration" 
                className="w-full h-full object-cover opacity-80 transition-opacity group-hover/promo:opacity-100"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
              />
             
            </div>
            {/* ----- IMAGE PLACEHOLDER END ----- */}

            <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">Let&apos;s talk_</p>
            <p className="relative mt-3 font-heading text-2xl font-extrabold leading-tight">Not sure where to start?</p>
            <p className="relative mt-2 text-sm text-white/60">Book a free 15-minute call. No sales pitch.</p>
            <Link href="/#contact" onClick={() => setMega(false)} className="btn-amber relative mt-5 !py-2.5 text-sm w-full justify-center">
              Book a call <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* ---------- mega menu: EnriPeak (same look as "What We Offer", without the left column) ---------- */}
      <div
        onMouseEnter={() => openMenu("company")}
        onMouseLeave={closeMenu}
        className={`absolute left-1/2 top-full hidden w-[min(760px,94vw)] -translate-x-1/2 pt-2 transition-all duration-300 lg:block ${
          company ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="grid grid-cols-[1fr_290px] overflow-hidden rounded-2xl border border-white/10 bg-[#0d131a]/95 shadow-[0_40px_100px_-20px_rgba(0,0,0,.9)] backdrop-blur-2xl">
          {/* left: items */}
          <div className="p-5">
            <div className="relative mb-4 h-24 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-brand-cyan/20 via-transparent to-brand-amber/20">
              <span className="absolute -right-6 -top-6 h-32 w-32 rounded-full border border-brand-cyan/40" style={{ animation: "ring-pulse 3s ease-out infinite" }} />
              <span className="absolute -right-6 -top-6 h-32 w-32 rounded-full border border-brand-amber/40" style={{ animation: "ring-pulse 3s ease-out 1.5s infinite" }} />
              <p className="absolute bottom-3 left-4 font-heading text-lg font-bold">EnriPeak</p>
            </div>
            <ul className="space-y-1">
              {COMPANY_ITEMS.map((s, i) => (
                <li key={s.title} className={company ? "fade-up" : ""} style={{ animationDelay: `${i * 60}ms` }}>
                  <Link
                    href={s.href}
                    onClick={() => setMenu(null)}
                    className="group flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-white/5"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 text-brand-cyan transition-colors group-hover:border-brand-cyan/50">
                      <s.icon size={18} />
                    </span>
                    <span className="flex-1">
                      <span className="block text-sm font-semibold">{s.title}</span>
                      <span className="block text-xs text-white/50">{s.desc}</span>
                    </span>
                    <ArrowUpRight size={16} className="text-white/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-cyan" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* right: promo */}
          <div className="relative m-3 flex flex-col justify-end overflow-hidden rounded-xl bg-ink p-6">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-brand-cyan/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-10 h-40 w-40 rounded-full bg-brand-amber/15 blur-3xl" />
            
            {/* ----- IMAGE PLACEHOLDER START ----- */}
            <div className="relative mb-4 w-full h-45 rounded-lg overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center group/promo">
              <img 
                src="/images/cases.avif" 
                alt="Company promo illustration" 
                className="w-full h-full object-cover opacity-80 transition-opacity group-hover/promo:opacity-100"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
              />
              {/* Fallback text if image missing */}
              
            </div>
            {/* ----- IMAGE PLACEHOLDER END ----- */}

            <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">Peak Stories_</p>
            <p className="relative mt-3 font-heading text-2xl font-extrabold leading-tight">Real projects. Real results.</p>
            <p className="relative mt-2 text-sm text-white/60">The problem, the solution and the result behind every project we build.</p>
            <Link href="/projects" onClick={() => setMenu(null)} className="btn-amber relative mt-5 !py-2.5 text-sm w-full justify-center">
              View Peak Stories <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* ---------- mobile menu ---------- */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-ink transition-all duration-500 lg:hidden ${
          mobile ? "visible translate-y-0 opacity-100" : "invisible -translate-y-4 opacity-0"
        }`}
      >
        {/* top bar: logo + close button */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <Link href="/" onClick={() => setMobile(false)} aria-label="EnriPeak home">
            <img src="/images/logobg.png" alt="EnriPeak" className="h-11 w-auto sm:h-11" />
          </Link>
          <button
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/15"
            onClick={() => setMobile(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex flex-1 flex-col overflow-y-auto px-6 font-heading" aria-label="Mobile">
          {/* Services (grouped: Web Development / AI Solutions) */}
          <div className="border-b border-white/10">
            <button
              className={`flex w-full items-center justify-between py-4 text-left text-xl font-bold transition-colors ${acc ? "text-brand-cyan" : ""}`}
              onClick={() => setAcc((v) => !v)}
              aria-expanded={acc}
            >
              Services <ChevronDown size={20} className={`transition-transform duration-300 ${acc ? "rotate-180" : ""}`} />
            </button>
            <div className={`grid transition-all duration-300 ${acc ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <div className="space-y-5 pb-5">
                  {(Object.keys(CATS) as Cat[]).map((c) => (
                    <div key={c}>
                      <p className="text-sm font-bold text-brand-cyan">{CATS[c].title}</p>
                      <p className="mb-2 mt-0.5 font-sans text-xs text-white/50">{CATS[c].sub}</p>
                      <ul className="divide-y divide-white/10 overflow-hidden rounded-xl border border-white/10">
                        {CATS[c].list.map((s) => (
                          <li key={s.title}>
                            <Link
                              href={s.href}
                              onClick={() => setMobile(false)}
                              className="flex items-center gap-3 p-3 transition-colors active:bg-white/5"
                            >
                              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 text-brand-cyan">
                                <s.icon size={18} />
                              </span>
                              <span className="flex-1 font-sans">
                                <span className="block text-sm font-semibold">{s.title}</span>
                                <span className="block text-xs text-white/50">{s.desc}</span>
                              </span>
                              <ArrowUpRight size={16} className="shrink-0 text-white/30" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* EnriPeak (company) */}
          <div className="border-b border-white/10">
            <button
              className={`flex w-full items-center justify-between py-4 text-left text-xl font-bold transition-colors ${accCo ? "text-brand-cyan" : ""}`}
              onClick={() => setAccCo((v) => !v)}
              aria-expanded={accCo}
            >
              EnriPeak <ChevronDown size={20} className={`transition-transform duration-300 ${accCo ? "rotate-180" : ""}`} />
            </button>
            <div className={`grid transition-all duration-300 ${accCo ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <ul className="mb-5 divide-y divide-white/10 overflow-hidden rounded-xl border border-white/10">
                  {COMPANY_ITEMS.map((s) => (
                    <li key={s.title}>
                      <Link
                        href={s.href}
                        onClick={() => setMobile(false)}
                        className="flex items-center gap-3 p-3 transition-colors active:bg-white/5"
                      >
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 text-brand-cyan">
                          <s.icon size={18} />
                        </span>
                        <span className="flex-1 font-sans">
                          <span className="block text-sm font-semibold">{s.title}</span>
                          <span className="block text-xs text-white/50">{s.desc}</span>
                        </span>
                        <ArrowUpRight size={16} className="shrink-0 text-white/30" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <Link href="/#work" onClick={() => setMobile(false)} className="border-b border-white/10 py-4 text-xl font-bold">Peak Stories</Link>
          <Link href="/#contact" onClick={() => setMobile(false)} className="border-b border-white/10 py-4 text-xl font-bold">Contact</Link>
        </nav>

        {/* bottom call-to-action */}
        <div className="border-t border-white/10 p-6">
          <Link href="/#contact" onClick={() => setMobile(false)} className="btn-amber w-full justify-center">
            Free Discovery Call <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </header>
  );
}