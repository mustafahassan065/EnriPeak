"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const field =
  "w-full rounded-xl border border-white/10 bg-white/[.04] px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-white/35 focus:border-brand-cyan/60 focus:bg-white/[.06]";

export default function FinalCta() {
  const [sent, setSent] = useState(false);

  // TODO: connect to your backend / email service (e.g. a Next.js route handler).
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden py-32">
      {/* echo of the hero orbit */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
        {[0, 1, 2].map((i) => (
          <span key={i} className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-cyan/20" style={{ animation: `ring-pulse 7s ease-out ${i * 2.3}s infinite` }} />
        ))}
      </div>

      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <Reveal stagger>
          <p className="eyebrow">Let&apos;s talk_</p>
          <h2 className="mt-4 font-heading text-[clamp(2.4rem,5.6vw,4.8rem)] font-extrabold leading-[1.02] tracking-tight">
            Let&apos;s build your <span className="font-serif pr-2 font-normal italic text-gradient">peak.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg text-white/60">Tell us what you&apos;re building or what needs to work better. We&apos;ll reply with a straight answer — no sales pitch.</p>
        </Reveal>

        <Reveal>
          {sent ? (
            <div className="fade-up rounded-3xl border border-brand-cyan/40 bg-brand-cyan/[.06] p-10 text-center">
              <p className="font-heading text-2xl font-bold text-brand-cyan">Thanks — message received.</p>
              <p className="mt-2 text-white/60">We&apos;ll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4 rounded-3xl border border-white/10 bg-white/[.03] p-7 backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-2">
                <input required name="name" aria-label="Name" placeholder="Your name" className={field} />
                <input required type="email" name="email" aria-label="Email" placeholder="Work email" className={field} />
              </div>
              <select name="service" aria-label="Service" defaultValue="" className={`${field} text-white/70`}>
                <option value="" disabled>What do you need?</option>
                <option className="bg-ink">Web Development</option>
                <option className="bg-ink">AI Solutions</option>
                <option className="bg-ink">Both / Not sure yet</option>
              </select>
              <textarea required name="message" aria-label="Message" rows={4} placeholder="Tell us about your project" className={field} />
              <button type="submit" className="btn-amber w-full">Book my free discovery call <ArrowUpRight size={18} /></button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}