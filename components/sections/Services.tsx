"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
import { WEB_SERVICES, AI_SERVICES, type Service } from "@/lib/data";

// on short desktop screens (laptops) the descriptions are hidden so the pinned section always fits the viewport
const SHORT = "[@media(min-width:1024px)_and_(max-height:800px)]:hidden";

function scrollDriven(tl: ReturnType<typeof gsap.timeline>, vars: ScrollTrigger.Vars) {
  return ScrollTrigger.create({
    ...vars,
    onRefresh: (self) => {
      tl.invalidate();
      tl.progress(self.progress);
    },
    onUpdate: (self) => {
      gsap.to(tl, { progress: self.progress, duration: self.direction === 1 ? 0.5 : 0.25, ease: "power2.out", overwrite: true });
    },
  });
}

function Pillar({ tag, title, desc, list, accent }: { tag: string; title: string; desc: string; list: Service[]; accent: "cyan" | "amber" }) {
  const color = accent === "cyan" ? "text-brand-cyan" : "text-brand-amber";
  return (
    <TiltCard className="h-full rounded-3xl border border-white/10 bg-ink bg-gradient-to-b from-white/[.05] to-transparent p-6 sm:p-8 md:p-10">
      <div className="relative">
        <span className={`text-xs font-bold uppercase tracking-[0.25em] ${color}`}>{tag}</span>
        <h3 className="mt-3 font-heading text-2xl font-extrabold sm:text-3xl md:text-4xl">{title}</h3>
        <p className={`mt-3 max-w-md text-sm text-white/60 sm:text-base ${SHORT}`}>{desc}</p>
        <ul className="mt-6 divide-y divide-white/10 border-y border-white/10 sm:mt-8">
          {list.map((s) => (
            <li key={s.title}>
              <Link href={s.href} className="group flex items-center gap-3 py-4 sm:gap-4">
                <s.icon size={18} className={`shrink-0 ${color} sm:size-5`} />
                <span className="flex-1 min-w-0">
                  <span className="block text-sm font-semibold sm:text-base">{s.title}</span>
                  <span className={`block text-xs text-white/50 sm:text-sm ${SHORT}`}>{s.desc}</span>
                </span>
                <ArrowUpRight size={18} className="shrink-0 text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </TiltCard>
  );
}

export default function Services() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const a = root.current!.querySelector<HTMLElement>(".svc-a")!;
      const b = root.current!.querySelector<HTMLElement>(".svc-b")!;

      // DESKTOP: section is pinned. The two boxes start stacked on top of each other
      // and slide apart (with the tilt straightening) into the normal side-by-side layout.
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const dx = () => (b.offsetLeft - a.offsetLeft) / 2; // half the distance between the two columns
        const tl = gsap.timeline({ paused: true, defaults: { ease: "power2.inOut" } });
        tl.fromTo(a, { x: () => dx(), y: 18, rotation: -5, scale: 0.96 }, { x: 0, y: 0, rotation: 0, scale: 1, duration: 1 }, 0)
          .fromTo(b, { x: () => -dx(), y: -6, rotation: 4, scale: 1 }, { x: 0, y: 0, rotation: 0, scale: 1, duration: 1 }, 0)
          .to({}, { duration: 0.2 }); // short hold so the final layout is visible before the pin releases
        scrollDriven(tl, { trigger: root.current, start: "top top", end: "+=85%", pin: true, anticipatePin: 1 });
      });

      // TABLET / MOBILE: no pin (the boxes are taller than the screen). The second box starts
      // lying on top of the first and slides down into its place as you scroll.
      mm.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ paused: true });
        tl.fromTo(
          b,
          { y: () => -(b.offsetTop - a.offsetTop) + 28, rotation: 2, scale: 0.96 },
          { y: 0, rotation: 0, scale: 1, ease: "power2.inOut" }
        );
        scrollDriven(tl, { trigger: ".svc-grid", start: "top 80%", end: "top 25%" });
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} id="services" className="relative flex scroll-mt-24 items-center lg:min-h-screen">
      <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:pb-12 lg:pt-24">
        <SectionHeading eyebrow="What we do" title={<>Two disciplines<span className="font-serif font-normal italic text-gradient">   One team.</span></>} desc="From high-performance websites and custom web applications to intelligent AI agents, automation, and integrations, we build digital solutions that help businesses operate smarter, move faster, and scale with confidence." />
        <div className="svc-grid relative mt-10 grid gap-5 sm:mt-12 sm:gap-6 lg:mt-12 lg:grid-cols-2">
          <div className="svc-a h-full">
            <Pillar accent="amber" tag="01 — Web" title="Web Development" desc="Modern, scalable web products built with Modern Technologies." list={WEB_SERVICES} />
          </div>
          <div className="svc-b h-full">
            <Pillar accent="cyan" tag="02 — AI" title="AI Solutions" desc="Practical AI that automates work and adds intelligence to your product." list={AI_SERVICES} />
          </div>
        </div>
      </div>
    </section>
  );
}