"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "@/lib/gsap";
import Reveal from "@/components/ui/Reveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PROJECTS = [
  {
    slug: "aethla-care",
    title: "Aethla Care",
    type: "Healthcare Platform",
    industry: "Healthcare · Qatar",
    line1: "Unified patient records and appointment scheduling. Delivered in 8 weeks by a 3-person team.",
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
    line1: "VoiceControl AI is 24/7 personal speech coach giving you real-time AI feedback to refine your tone",
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
    line1: "Booking EPC Services, end-to-end.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "VPS"],
    image: "/images/primepc.jpg",
    from: "#00ffff",
    to: "#ffbf00",
  },
  {
    slug: "aethelles",
    title: "Aethelles",
    type: "E-commerce",
    industry: "Luxury Resale · Australia",
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
    industry: "Calling agent · Italy",
    line1: "Collecting data with the help of calling agent",
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
    line1: "Providing Ceritication services to more than 10k + users monthly ",
    stack: ["Next.js", "Node.js", "PostgreSQL", "VPS"],
    image: "/images/manchester.jpg",
    from: "#ffbf00",
    to: "#0b0f14",
  },
  {
    slug: "ep-fitness",
    title: "EP Fitness",
    type: "Fitness Website",
    industry: "Fitness · Phillpines",
    line1: "Delivered Fitness Website in 2 weeks",
    stack: ["Next.js","TailwindCSS"],
    image: "/images/epfitness.jpg",
    from: "#00ffff",
    to: "#0b0f14",
  },
  {
    slug: "seaglore",
    title: "Seaglore",
    type: "Clothing Website",
    industry: "Eccomerce · Germany",
    line1: "Video consultations and Eccomerce  in one flow.",
    stack: ["React","Node.JS", "PostreSQL"],
    image: "/images/seaglore.jpg",
    from: "#ffbf00",
    to: "#0b0f14",
  },
  {
    slug: "sevil-velsha",
    title: "Sevil Velsha",
    type: "Voice Control",
    industry: "Portfolio · Germany",
    line1: "Portfolio analytics with  Voice analysis.",
    stack: ["Next.js", "Node.JS","Vercel"],
    image: "/images/sevilvelsha.jpg",
    from: "#00ffff",
    to: "#ffbf00",
  },
  {
    slug: "forex-trading",
    title: "Forex Trading",
    type: "Trading Platform",
    industry: "Trading · Pakistan",
    line1: "Trading and Course Platform with more than 12K+ users",
    stack: ["PHP", "Lareval", "MySQL"],
    image: "/images/forex.jpg",
    from: "#ffbf00",
    to: "#00ffff",
  },
  {
    slug: "aethla",
    title: "Aethla",
    type: "Maid Services",
    industry: "Health · Australia",
    line1: "Maid Services Website in multiple languages",
    stack: ["Next.js", "Node.js", "MongoDB", "VPS"],
    image: "/images/aethla.jpg",
    from: "#ffbf00",
    to: "#0b0f14",
  },
];

function CardImage({ src, alt, from, to, index, industry }: { src: string; alt: string; from: string; to: string; index: number; industry: string }) {
  return (
    <div className="relative h-48 shrink-0 overflow-hidden sm:h-56 md:h-64" style={{ background: `linear-gradient(135deg, ${from}33, ${to}55)` }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        className="absolute inset-0 h-full w-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
      <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-ink/60 px-3 py-1 text-[10px] font-semibold text-white/85 backdrop-blur md:text-xs">
        {industry}
      </span>
      <span className="absolute bottom-2 left-4 font-heading text-4xl font-extrabold leading-none text-white/90 md:text-5xl">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

export default function ProjectsPage() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".proj-card");

        cards.forEach((card, i) => {
          const direction = i % 2 === 0 ? -1 : 1;
          gsap.fromTo(
            card,
            { x: direction * 80, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                once: true,
              },
            }
          );
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".proj-card", { x: 0, opacity: 1 });
      });
    },
    { scope: root }
  );

  return (
    <>
      <Navbar />
      <main ref={root as unknown as React.RefObject<HTMLElement>} className="relative overflow-hidden">
        {/* Hero */}
        <section className="relative px-6 pb-12 pt-32 sm:pb-16 sm:pt-40">
          <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-brand-cyan/[.07] blur-[140px]" />
          <div className="mx-auto max-w-[1600px]">
            <Reveal>
              <p className="eyebrow">Case Studies</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-4 max-w-5xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Work that <span className="font-serif font-normal italic text-gradient">moves</span> the needle.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-3xl text-base text-white/60 sm:text-lg">
                A selection of platforms, products and websites we have shipped — from healthcare and fintech to e-commerce and AI. Every project starts with a problem and ends with a measurable result.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Projects grid */}
        <section className="relative px-6 pb-24 sm:pb-32">
          <div className="mx-auto max-w-[1600px]">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 2xl:grid-cols-4">
              {PROJECTS.map((p, i) => (
                <div key={p.slug} className="proj-card">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[.03] transition-colors duration-300 hover:border-brand-cyan/40"
                  >
                    <CardImage src={p.image} alt={`${p.title} — ${p.type}`} from={p.from} to={p.to} index={i} industry={p.industry} />

                    <div className="flex flex-1 flex-col p-5 md:p-6">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-cyan md:text-xs">{p.type}</p>
                      <h3 className="mt-1.5 flex items-center justify-between font-heading text-lg font-bold md:text-xl">
                        {p.title}
                        <ArrowUpRight size={20} className="text-white/30 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-amber" />
                      </h3>
                      <p className="mt-2 text-sm leading-snug text-white/60 md:text-base">{p.line1}</p>
                      <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                        {p.stack.map((s) => (
                          <span key={s} className="rounded-full bg-white/10 px-3 py-1 text-[10px] text-white/80 md:text-xs">{s}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}