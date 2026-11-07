import { Layers, Users, LifeBuoy } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";

const WAYS = [
  { icon: Layers, title: "Project-Based", d: "A defined scope, clear milestones and a fixed outcome. Best for launches and builds.", tag: "Fixed scope" },
  { icon: Users, title: "Dedicated Developer", d: "A developer embedded in your workflow on a flexible monthly basis.", tag: "Flexible" },
  { icon: LifeBuoy, title: "Ongoing Support", d: "Maintenance, monitoring and continuous improvements after launch.", tag: "Retainer" },
];

export default function Ways() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-28">
      <SectionHeading eyebrow="Ways to work" title={<>Work with us <span className="font-serif font-normal italic text-gradient">your way.</span></>} />
      <Reveal stagger className="mt-14 grid gap-6 md:grid-cols-3">
        {WAYS.map((w) => (
          <TiltCard key={w.title} className="rounded-3xl border border-white/10 bg-white/[.03] p-8 transition-colors hover:border-brand-amber/50">
            <div className="relative">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-amber/10 text-brand-amber"><w.icon size={26} /></span>
              <h3 className="mt-6 font-heading text-2xl font-bold">{w.title}</h3>
              <p className="mt-3 text-white/55">{w.d}</p>
              <span className="mt-6 inline-block rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">{w.tag}</span>
            </div>
          </TiltCard>
        ))}
      </Reveal>
    </section>
  );
}