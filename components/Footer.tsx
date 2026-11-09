"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, BadgeCheck, Briefcase, CircleHelp, Globe, Info, Mail, Route, type LucideIcon } from "lucide-react";
import { gsap } from "@/lib/gsap";
import Reveal from "./ui/Reveal";
import { WEB_SERVICES, AI_SERVICES } from "@/lib/data";
import DiscoveryButton from "./DiscoveryButton";

type LinkItem = { title: string; href: string; icon: LucideIcon };

const COMPANY: LinkItem[] = [
  { title: "About Us", href: "/about", icon: Info },
  { title: "Why Us", href: "/about#why-enripeak", icon: BadgeCheck },
  { title: "Our Process", href: "/about#process", icon: Route },
  { title: "Case Studies", href: "/projects", icon: Briefcase },
  { title: "FAQs", href: "/#faq", icon: CircleHelp },
  { title: "Contact", href: "/#contact", icon: Mail },
];

// Brand icons (Font Awesome 6 paths) — LinkedIn, Instagram, Facebook, TikTok only.
const SOCIALS = [
  {
    label: "LinkedIn",
    href: "#",
    vb: "0 0 448 512",
    d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
  },
  {
    label: "Instagram",
    href: "#",
    vb: "0 0 448 512",
    d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
  },
  {
    label: "Facebook",
    href: "#",
    vb: "0 0 512 512",
    d: "M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256z",
  },
  {
    label: "TikTok",
    href: "#",
    vb: "0 0 448 512",
    d: "M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z",
  },
];
const EMAIL = "info@enripeak.com";

function Social({ label, href, vb, d }: { label: string; href: string; vb: string; d: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[.04] text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-cyan hover:bg-brand-cyan hover:text-ink hover:shadow-[0_8px_30px_-6px_rgba(0,255,255,.6)]"
    >
      <svg viewBox={vb} width="17" height="17" fill="currentColor" aria-hidden="true">
        <path d={d} />
      </svg>
    </a>
  );
}

const colTitle = "mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-brand-cyan";
const colLink = "group flex w-fit items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-white";

function Dash() {
  return <span className="h-px w-0 bg-brand-cyan transition-all duration-300 group-hover:w-3" />;
}

function ColTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 className={colTitle}>
      <span className="h-1.5 w-1.5 rounded-full bg-brand-amber" />
      {children}
    </h4>
  );
}

export default function Footer() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".wm-fill",
          { clipPath: "inset(100% 0% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", ease: "none", scrollTrigger: { trigger: root.current, start: "top 85%", end: "bottom bottom", scrub: true } }
        );
      });
    },
    { scope: root }
  );

  return (
    <footer ref={root} className="relative overflow-hidden border-t border-white/10 bg-[#080b10]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/60 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[640px] -translate-x-1/2 bg-brand-cyan/10 blur-[90px]" />

      <Reveal stagger className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-20 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.1fr]">
        {/* brand */}
        <div>
          {/* Logo — properly sized so it is clearly visible and top-aligned */}
          <Link href="/" aria-label="EnriPeak home" className="inline-block">
  <img
    src="/images/logobg2.png"
    alt="EnriPeak"
    className="h-11 w-auto object-contain sm:h-11 mix-blend-screen"
  />
</Link>
          <p className="mt-4 max-w-xs text-sm text-white/55">
            Web development and AI solutions for businesses that want to move faster and reach their peak.
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIALS.map((s) => (
              <Social key={s.label} {...s} />
            ))}
          </div>
        </div>

        <div>
          <ColTitle>Web Development</ColTitle>
          <ul className="space-y-3">
            {WEB_SERVICES.map((s) => (
              <li key={s.title}><Link href={s.href} className={colLink}><Dash />{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <ColTitle>AI Solutions</ColTitle>
          <ul className="space-y-3">
            {AI_SERVICES.map((s) => (
              <li key={s.title}><Link href={s.href} className={colLink}><Dash />{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <ColTitle>Company</ColTitle>
          <ul className="space-y-3">
            {COMPANY.map((s) => (
              <li key={s.title}><Link href={s.href} className={colLink}><Dash />{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <ColTitle>Contact</ColTitle>
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-brand-cyan">
            <Mail size={16} className="text-brand-cyan" /> {EMAIL}
          </a>
          <p className="mt-3 flex items-start gap-2 text-sm text-white/55">
            <Globe size={16} className="mt-0.5 shrink-0 text-brand-cyan" /> Remote-first, working with clients worldwide.
          </p>
          <DiscoveryButton className="btn-amber mt-6 !px-5 !py-2.5 text-sm">Book a Call <ArrowUpRight size={16} /></DiscoveryButton>
        </div>
      </Reveal>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 px-6 py-6 text-xs text-white/40 sm:flex-row">
        <p>© 2026 EnriPeak. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms</Link>
        </div>
      </div>

      <div aria-hidden="true" className="relative select-none overflow-hidden whitespace-nowrap px-2 text-center leading-[.78]">
        <span className="block translate-y-[6%] font-heading text-[15.5vw] font-extrabold tracking-tight" style={{ WebkitTextStroke: "1px rgba(255,255,255,.22)", color: "transparent" }}>
          ENRIPEAK
        </span>
        <span className="wm-fill text-gradient absolute inset-0 block translate-y-[6%] font-heading text-[15.5vw] font-extrabold tracking-tight">
          ENRIPEAK
        </span>
      </div>

      <div aria-hidden="true" className="h-10 sm:h-16" />
    </footer>
  );
}