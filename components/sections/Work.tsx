"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, CalendarClock } from "lucide-react";
import { gsap } from "@/lib/gsap";
import SectionHeading from "@/components/ui/SectionHeading";


const PROJECTS = [
  {
    slug: "aethla-care",
    title: "Aethla Care",
    type: "Healthcare Platform",
    industry: "Healthcare · Qatar",
    // TODO: edit these two lines per project
    line1: "Unified patient records and appointment scheduling.Delivered in 8 weeks by a 3-person team.",

    stack: ["Next.js", "Node.js", "MongoDB", "VPS"],
    image: "/images/aethlacare.jpg",
    from: "#00ffff",
    to: "#0b0f14",
  },
  {
    slug: "voicecontrol-ai",
    title: "VoiceControl AI",
    type: "AI Platform",
    industry: "Voice Coaching · AI",
    line1: "Built in 10 weeks, shipped on schedule.",
  
    stack: ["Python", "FastAPI", "OpenAI", "Anam Ai"],
    image: "/images/voicecontrol.jpg",
    from: "#ffbf00",
    to: "#0b0f14",
  },
  {
    slug: "prime-epc",
    title: "Prime EPC",
    type: "Booking & Payments",
    industry: "Energy Certificates · UK",
    line1: "Live in 6 weeks, end-to-end.",
    stack: ["Next.js", "Node.js", "PostreSQl", "VPS"],
    image: "/images/primepc.jpg",
    from: "#00ffff",
    to: "#ffbf00",
  },
  {
    slug: "aethelles",
    title: "Aethelles",
    type: "E-commerce",
    industry: "Luxury Resale · Fashion",
    line1: "Delivered in 12 weeks with full handover.",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    image: "/images/aethelles.jpg",
    from: "#ffbf00",
    to: "#00ffff",
  },
  {
    slug: "spritzometro",
    title: "SpritzoMetro",
    type: "Data Platform",
    industry: "Food & Drink · Italy",
    line1: "Shipped in 5 weeks, solo build.",
    stack: ["Vapi AI", "OpenAI", "Vercel", "Twillo Ai"],
    image: "/images/spritzo.jpg",
    from: "#00ffff",
    to: "#0b0f14",
  },
  {
    slug: "manchester-certify",
    title: "Manchester Certify",
    type: "Business Website",
    industry: "Certification Services · UK",
    line1: "Launched in 4 weeks.",
    stack: ["Next.js", "Node.js", "PostreSQL", "VPS"],
    image: "/images/manchester.jpg",
    from: "#ffbf00",
    to: "#0b0f14",
  },
];

const CARD_H = "lg:h-[clamp(480px,calc(100vh_-_17.5rem),680px)]";
const TOTAL_ITEMS = PROJECTS.length + 1; // +1 for the CTA banner

function CardImage({ src, alt, from, to, index, industry }: { src: string; alt: string; from: string; to: string; index: number; industry: string }) {
  const [ok, setOk] = useState(true);
  return (
    <div className="relative h-40 shrink-0 overflow-hidden sm:h-48 lg:h-auto lg:min-h-[140px] lg:flex-1" style={{ background: `linear-gradient(135deg, ${from}33, ${to}55)` }}>
      {ok && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setOk(false)}
          className="absolute inset-0 h-full w-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
      <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-ink/60 px-2.5 py-1 text-[10px] font-semibold text-white/85 backdrop-blur sm:left-5 sm:top-5 sm:px-3 sm:text-[11px]">
        {industry}
      </span>
      <span className="absolute bottom-3 left-4 font-heading text-4xl font-extrabold leading-none text-white/90 sm:left-5 sm:text-5xl">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

export default function Work() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const scrollContainer = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const [mobileActive, setMobileActive] = useState(0);

  // Desktop: pinned horizontal scroll + dots
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const t = track.current!;
        const dist = () => t.scrollWidth - window.innerWidth;
        gsap.to(t, {
          x: () => -dist(),
          ease: "none",
          scrollTrigger: {
            trigger: section.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${dist()}`,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const active = Math.min(TOTAL_ITEMS - 1, Math.floor(self.progress * TOTAL_ITEMS));
              dotsRef.current.forEach((d, i) => {
                if (!d) return;
                d.classList.toggle("bg-brand-cyan", i === active);
                d.classList.toggle("shadow-[0_0_12px_#00ffff]", i === active);
                d.classList.toggle("bg-white/15", i !== active);
              });
            },
          },
        });
      });
    },
    { scope: section }
  );

  // Mobile/tablet: track native horizontal scroll to update dots
  useEffect(() => {
    const el = scrollContainer.current;
    if (!el) return;

    const updateActive = () => {
      const cardWidth = el.querySelector("a, div")?.clientWidth ?? 1;
      const gap = 16; // gap-4 = 1rem = 16px
      const index = Math.round(el.scrollLeft / (cardWidth + gap));
      setMobileActive(Math.max(0, Math.min(TOTAL_ITEMS - 1, index)));
    };

    el.addEventListener("scroll", updateActive, { passive: true });
    updateActive();
    return () => el.removeEventListener("scroll", updateActive);
  }, []);

  // Scroll to a specific card when a dot is clicked
  const goToSlide = (index: number) => {
    const el = scrollContainer.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(`[data-slide="${index}"]`);
    if (!card) return;
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
    setMobileActive(index);
  };

  return (
    <section id="work" ref={section} className="relative flex flex-col justify-center overflow-hidden py-16 sm:py-20 lg:h-screen lg:pb-8 lg:pt-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Case Studies" title={<>Built to <span className="font-serif font-normal italic text-gradient">perform.</span></>} />
      </div>

      {/* Scroll container — horizontal on all screens; pinned on desktop */}
      <div
        ref={scrollContainer}
        className="scrollbar-hidden mt-6 snap-x snap-mandatory overflow-x-auto pb-4 sm:mt-8 lg:overflow-visible lg:pb-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div ref={track} className="flex w-max gap-4 px-4 sm:gap-6 sm:px-6 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] lg:pr-24">
          {PROJECTS.map((p, i) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              data-slide={i}
              className={`group flex w-[82vw] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[.03] transition-colors duration-300 hover:border-brand-cyan/40 sm:w-[520px] lg:w-[600px] ${CARD_H}`}
            >
              <CardImage src={p.image} alt={`${p.title} — ${p.type}`} from={p.from} to={p.to} index={i} industry={p.industry} />

              <div className="p-5 sm:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-cyan sm:text-xs">{p.type}</p>
                <h3 className="mt-1.5 flex items-center justify-between font-heading text-xl font-bold sm:text-2xl">
                  {p.title}
                  <ArrowUpRight className="text-white/30 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-amber" />
                </h3>

                <div className="mt-2 space-y-1.5 sm:mt-3">
                  <p className="text-xs leading-snug text-white/70 sm:text-sm">{p.line1}</p>
                  
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] text-white sm:px-3 sm:py-1 sm:text-xs">{s}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}

          {/* 7th item: banner with the two calls to action */}
          <div
            data-slide={PROJECTS.length}
            className={`relative flex min-h-[380px] w-[82vw] shrink-0 snap-start flex-col justify-center overflow-hidden rounded-3xl border border-brand-cyan/30 bg-ink p-6 sm:w-[520px] sm:p-8 lg:w-[640px] lg:p-12 ${CARD_H}`}
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-cyan/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-brand-amber/15 blur-3xl" />
            {[0, 1].map((i) => (
              <span
                key={i}
                className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full border border-brand-cyan/25"
                style={{ animation: `ring-pulse 6s ease-out ${i * 3}s infinite` }}
              />
            ))}
            <div className="relative">
              <p className="eyebrow">That&apos;s just the start</p>
              <h3 className="mt-3 font-heading text-2xl font-extrabold leading-[1.05] sm:mt-4 sm:text-3xl lg:text-5xl">
                Want to see <span className="font-serif pr-1 font-normal italic text-gradient">more?</span>
              </h3>
              <p className="mt-3 max-w-sm text-sm text-white/60 sm:mt-4 sm:text-base">Explore every project in detail — the problem, the solution and the result behind each one.</p>
              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                <Link href="/projects" className="btn-amber inline-flex justify-center w-full sm:w-auto">View More Projects <ArrowUpRight size={18} /></Link>
                <Link href="/#contact" className="btn-ghost inline-flex justify-center w-full sm:w-auto">Schedule a Call <CalendarClock size={18} /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress indicators — clickable on all screens */}
      <div className="mt-4 flex justify-center gap-2 lg:mt-0 lg:absolute lg:bottom-3 lg:left-1/2 lg:-translate-x-1/2">
        {Array.from({ length: TOTAL_ITEMS }).map((_, i) => {
          const isActive = i === mobileActive;
          return (
            <button
              key={i}
              ref={(el) => { dotsRef.current[i] = el; }}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                isActive
                  ? "w-8 bg-brand-cyan shadow-[0_0_12px_#00ffff]"
                  : "w-4 bg-white/15 sm:w-8 hover:bg-white/30"
              }`}
            />
          );
        })}
      </div>

      <style jsx>{`
        .scrollbar-hidden::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}