import { Check, X } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const ROWS = [
  ["Design, build and AI split across different vendors", "One team from idea to deployment"],
  ["AI bolted on at the end, if at all", "AI designed into the product from day one"],
  ["Account managers between you and the developers", "Direct communication with the people building"],
  ["Generic templates and slow, heavy pages", "Custom, fast, accessible Next.js builds"],
  ["Handover and disappear", "Launch support, monitoring and ongoing care"],
];

export default function Why() {
  return (
    <section id="why" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading eyebrow="Why EnriPeak" title={<>Buy <span className="font-serif font-normal italic text-gradient">outcomes,</span> not hours.</>} desc="Most agencies sell capacity. We focus on shipping something that works and moves your business forward." />
      <Reveal stagger className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/[.02] p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 sm:text-sm">Typical agency</p>
          <ul className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">
            {ROWS.map(([a]) => (
              <li key={a} className="flex gap-3 text-sm text-white/50 sm:text-base"><X size={20} className="mt-0.5 shrink-0 text-white/30" />{a}</li>
            ))}
          </ul>
        </div>
        <div className="relative rounded-3xl border border-brand-cyan/40 bg-brand-cyan/[.04] p-6 shadow-[0_0_80px_-20px_rgba(0,255,255,.35)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-cyan sm:text-sm">EnriPeak</p>
          <ul className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">
            {ROWS.map(([, b]) => (
              <li key={b} className="flex gap-3 text-sm font-medium sm:text-base"><Check size={20} className="mt-0.5 shrink-0 text-brand-cyan" />{b}</li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}