"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Rocket, Users, ShieldCheck, Zap, type LucideIcon } from "lucide-react";
import { gsap } from "@/lib/gsap";
import SummitBanner from "./SummitBanner";
import DiscoveryButton from "../DiscoveryButton";

const PeakOrbit = dynamic(() => import("./PeakOrbit"), { ssr: false });

// NOTE: placeholder numbers — replace with your real stats.
const STATS: { value: number; suffix: string; label: string; icon: LucideIcon }[] = [
  { value: 30, suffix: "+", label: "Projects Delivered", icon: Rocket },
  { value: 15, suffix: "+", label: "Happy Clients", icon: Users },
  { value: 100, suffix: "%", label: "On-Time Delivery", icon: ShieldCheck },
  { value: 24, suffix: "h", label: "Avg. Response Time", icon: Zap },
];


const PEAK = "Peak.";
const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#/<>_+*";
const GLOW_ON = "blur(0px) drop-shadow(0 0 22px rgba(0,255,255,.8))";
const GLOW_OFF = "blur(0px) drop-shadow(0 0 0px rgba(0,255,255,0))";

/** Text "decodes" from random characters into the real word. */
function scrambleTo(tl: ReturnType<typeof gsap.timeline>, el: HTMLElement, final: string, duration: number, at: number) {
  const node = el.firstChild as Text;
  const o = { p: 0 };
  const render = () => {
    const reveal = Math.floor(o.p * final.length);
    let out = "";
    for (let i = 0; i < final.length; i++) {
      const c = final[i];
      out += i < reveal || /[\s.·]/.test(c) ? c : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
    }
    node.nodeValue = out;
  };
  tl.to(o, { p: 1, duration, ease: "none", onStart: render, onUpdate: render, onComplete: () => { node.nodeValue = final; } }, at);
}

/** Splits text into per-character spans (words stay together so wrapping still works). */
function Chars({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <span aria-hidden="true">
      {words.map((w, wi) => (
        <span key={wi}>
          <span className="inline-block whitespace-nowrap">
            {w.split("").map((c, ci) => (
              <span key={ci} className="ch inline-block">{c}</span>
            ))}
          </span>
          {wi < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}

function Stat({ value, suffix, label, icon: Icon }: { value: number; suffix: string; label: string; icon: LucideIcon }) {
  const num = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const o = { v: 0 };
    const tween = gsap.to(o, {
      v: value,
      duration: 1.8,
      ease: "power2.out",
      delay: 2.2,
      onUpdate: () => {
        if (num.current) num.current.textContent = `${Math.round(o.v)}${suffix}`;
      },
    });
    return () => { tween.kill(); };
  }, [value, suffix]);

  return (
    <div className="stat flex items-center gap-2.5 px-3 py-3 transition-colors duration-300 hover:bg-white/[.05] sm:gap-3 sm:px-5 sm:py-4">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-brand-cyan/10 text-brand-cyan sm:h-9 sm:w-9">
        <Icon size={14} className="sm:h-4 sm:w-4" />
      </span>
      <div>
        <p className="font-heading text-lg font-extrabold leading-tight sm:text-xl md:text-2xl">
          <span ref={num}>0{suffix}</span>
        </p>
        <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-white/45 sm:text-[9px] md:text-[10px]">{label}</p>
      </div>
    </div>
  );
}

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const anchor = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
  const [reduce, setReduce] = useState(false);
  const [built, setBuilt] = useState(false);

  // pause everything when the hero is off-screen + respect reduced motion
  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0 });
    io.observe(root.current!);
    return () => io.disconnect();
  }, []);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const el = root.current!;
        const eyebrow = el.querySelector<HTMLElement>(".hero-eyebrow")!;
        const peak = el.querySelector<HTMLElement>(".hl-peak")!;
        peak.style.minWidth = `${peak.offsetWidth}px`; // keep layout stable while the word decodes

        // starting states (everything is hidden by CSS until this runs, so there is no flash)
        gsap.set(".ch", { opacity: 0, yPercent: 70, rotateX: -85, scale: 1.12, filter: "blur(10px)", transformPerspective: 700, transformOrigin: "50% 100%" });
        gsap.set(".hl-peak", { opacity: 0 });
        gsap.set(".hero-h1", { opacity: 1 });

        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          onComplete: () => { gsap.set(".ch, .hero-lead", { clearProps: "filter" }); peak.style.minWidth = ""; },
        });

        // 2. heading: every letter flips up out of blur
        tl.to(".ch", { opacity: 1, yPercent: 0, rotateX: 0, scale: 1, filter: "blur(0px)", duration: 0.9, ease: "back.out(1.5)", stagger: { each: 0.028 } }, 0.3);

        // 3. "Peak." decodes, pops and flashes
        tl.set(".hl-peak", { opacity: 1 }, 1.1)
          .fromTo(".hl-peak", { scale: 1.35, filter: "blur(8px) drop-shadow(0 0 0px rgba(0,255,255,0))", transformOrigin: "0% 60%" }, { scale: 1, filter: GLOW_ON, duration: 0.9, ease: "expo.out" }, 1.1)
          .to(".hl-peak", { filter: GLOW_OFF, duration: 1.2, ease: "power2.inOut", clearProps: "filter" }, 2.0);
        scrambleTo(tl, peak, PEAK, 1.0, 1.1);

        // 4. paragraph, buttons (spring pop + sheen), stats bar (wipe)
        tl.fromTo(".hero-lead", { opacity: 0, y: 22, filter: "blur(8px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, clearProps: "transform" }, 1.35)
          .fromTo(".hero-btn", { opacity: 0, scale: 0.6, y: 24 }, { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: "back.out(2.4)", stagger: 0.12, clearProps: "transform" }, 1.6)
          .fromTo(".btn-sheen", { xPercent: -120 }, { xPercent: 420, duration: 0.9, ease: "power2.inOut" }, 2.3)
          .fromTo(".hero-stats", { opacity: 1, clipPath: "inset(0 100% 0 0 round 16px)" }, { clipPath: "inset(0 0% 0 0 round 16px)", duration: 0.9, ease: "power3.inOut", clearProps: "clipPath" }, 1.9)
          .from(".stat", { opacity: 0, y: 14, duration: 0.5, stagger: 0.1, clearProps: "transform" }, 2.1);

        // cursor spotlight
        const onMove = (e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          el.style.setProperty("--mx", `${e.clientX - r.left}px`);
          el.style.setProperty("--my", `${e.clientY - r.top}px`);
        };
        window.addEventListener("mousemove", onMove);

        return () => {
          window.removeEventListener("mousemove", onMove);
          (peak.firstChild as Text).nodeValue = PEAK;
          peak.style.minWidth = "";
        };
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        root.current!.querySelectorAll<HTMLElement>(".hero-in").forEach((n) => { n.style.opacity = "1"; });
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative isolate flex min-h-screen items-center overflow-hidden pb-12 pt-24 sm:pb-16 sm:pt-28">
      <div className="bg-grid absolute inset-0 -z-10" />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "radial-gradient(520px circle at var(--mx, 50%) var(--my, 30%), rgba(0,255,255,.10), transparent 60%)" }}
      />
      <div className="pointer-events-none absolute -bottom-48 left-1/2 -z-10 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-brand-cyan/10 blur-[130px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-6">
        {/* ---------- copy ---------- */}
        <div className="relative z-20">
          <h1
            aria-label="Building What Takes Your Business to Peak."
            className="hero-h1 hero-in relative mt-5 font-heading text-[clamp(2rem,7.2vw,5.4rem)] font-extrabold leading-[1.08] tracking-tight opacity-0 sm:leading-[1.04]"
          >
            <span className="block pb-2"><Chars text="Building What" /></span>
            <span className="block pb-2"><Chars text="Takes Your Business" /></span>
            <span className="block pb-3">
              <Chars text="to" />{" "}
              <em aria-hidden="true" className="hl-peak font-serif inline-block pr-2 font-normal italic text-gradient">{PEAK}</em>
            </span>
          </h1>

          <p className="hero-lead hero-in mt-5 max-w-xl text-sm text-white/65 opacity-0 sm:mt-6 sm:text-base md:text-lg">
            We turn ambitious ideas into powerful digital products, combining modern web technologies and AI to help businesses scale smarter, operate faster, and achieve their full potential.
          </p>

          <div className="mt-7 flex flex-wrap gap-3 sm:mt-9 sm:gap-4">
            <DiscoveryButton className="btn-amber hero-btn hero-in relative overflow-hidden px-5 py-3 text-sm opacity-0 sm:px-6 sm:py-3.5 sm:text-base">
  Free Discovery Call <ArrowUpRight size={16} />
  <span aria-hidden="true" className="btn-sheen pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-white/50 blur-md" />
</DiscoveryButton>
            <Link href="/#services" className="btn-ghost hero-btn hero-in px-5 py-3 text-sm opacity-0 sm:px-6 sm:py-3.5 sm:text-base">Explore Services</Link>
          </div>

          {/* ---------- stats bar ---------- */}
          <div className="hero-stats hero-in mt-10 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 opacity-0 sm:mt-12 sm:grid-cols-4">
            {STATS.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
        </div>

        {/* ---------- 3D ascent animation + summit banner ---------- */}
        <div className="relative h-[320px] w-full sm:h-[440px] md:h-[520px] lg:h-[600px] xl:h-[680px]">
          <PeakOrbit inView={inView} reduceMotion={reduce} anchorRef={anchor} onBuilt={() => setBuilt(true)} />
          <div ref={anchor} className="pointer-events-none absolute left-0 top-0 z-10" style={{ transform: "translate3d(-9999px,0,0)" }}>
            <SummitBanner show={built} active={inView} reduceMotion={reduce} />
          </div>
        </div>
      </div>
    </section>
  );
}