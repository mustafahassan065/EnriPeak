"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import DiscoveryButton from "../DiscoveryButton";
import { ArrowUpRight } from "lucide-react";

export default function AboutCta() {
  const root = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.fromTo(".about-cta-content", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: .8, ease: "power3.out", scrollTrigger: { trigger: root.current, start: "top 78%" } });
  }, { scope: root });
  return (
    <section ref={root} className="px-4 pb-20 pt-8 sm:px-6 md:pb-32">
      <div className="about-cta-content relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-[#101a1e] px-5 py-12 text-center sm:rounded-[28px] sm:px-7 sm:py-14 md:px-16 md:py-20">
        <div className="pointer-events-none absolute -left-20 -top-28 h-80 w-80 rounded-full bg-brand-cyan/15 blur-[90px]"/><div className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-brand-amber/10 blur-[90px]"/>
        <div className="relative mx-auto max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[.24em] text-brand-cyan">The next step starts here</p>
          <h2 className="mt-4 font-heading text-2xl font-extrabold leading-tight text-white sm:mt-5 sm:text-3xl md:text-5xl">
            Have a challenge worth <span className="font-serif font-normal italic text-gradient">solving?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/55 sm:mt-5 md:text-base">
            Tell us what you are working toward. We&apos;ll help you explore the right web or AI solution and what it would take to make it real.
          </p>
          <DiscoveryButton className="btn-amber hero-btn hero-in relative overflow-hidden px-5 py-3 text-sm opacity-0 sm:px-6 sm:py-3.5 sm:text-base">
  Let&apos;s talk about your project <ArrowUpRight size={16} />
  <span aria-hidden="true" className="btn-sheen pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-white/50 blur-md" />
</DiscoveryButton>
        </div>
      </div>
    </section>
  );
}