// app/projects/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { CompareChart, GrowthChart, KpiCard, ProcessTimeline } from "@/components/case-study/Charts";
import type { Compare, Growth, Phase } from "@/components/case-study/Charts";
import DiscoveryButton from "@/components/DiscoveryButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ------------------------------------------------------------------ */
/* TYPES                                                               */
/* ------------------------------------------------------------------ */
type Kpi = { value: string; label: string };

type CaseStudy = {
  title: string;
  type: string;
  industry: string;
  summary: string;
  stack: string[];
  kpis: Kpi[];
  challenge: string[];
  solution: string[];
  results: string[];
  compare: Compare[];
  growth?: Growth;
  timeline: Phase[];
  image?: string;
};

/* ------------------------------------------------------------------ */
/* DATA — key = slug from the projects list                            */
/* IMPORTANT: all numbers below are SAMPLE values. Replace with real,  */
/* client-approved numbers before publishing.                          */
/* ------------------------------------------------------------------ */
const CASE_STUDIES: Record<string, CaseStudy> = {
  "aethla-care": {
    title: "Aethla Care",
    type: "Healthcare Platform",
    industry: "Healthcare · Qatar",
    summary: "Unified patient records and appointment scheduling for a home healthcare provider, delivered in 8 weeks by a 3-person team.",
    stack: ["Next.js", "NestJS", "MongoDB", "VPS"],
    image: "/images/aethlacare.jpg",
    kpis: [
      { value: "8 weeks", label: "Delivery time" },
      { value: "3", label: "Team members" },
      { value: "-70%", label: "Scheduling time" },
      { value: "1", label: "Unified system" },
    ],
    challenge: [
      "Patient records lived in spreadsheets and chat apps, so staff often worked with outdated information.",
      "Appointments were booked by phone and manually assigned to nurses, causing double bookings.",
    ],
    solution: [
      "One platform with a central patient record, accessible by role (admin, nurse, patient).",
      "Automated scheduling that assigns available staff and sends reminders.",
      "Deployed on a secured VPS with SSL and daily backups.",
    ],
    results: [
      "Booking a visit now takes minutes instead of a chain of phone calls.",
      "Double bookings were removed and every record sits in one place.",
    ],
    compare: [
      { label: "Time to schedule a visit", before: 45, after: 12, unit: "min", lowerIsBetter: true },
      { label: "Double bookings per month", before: 14, after: 1, unit: "", lowerIsBetter: true },
      { label: "Records found in under 1 minute", before: 30, after: 95, unit: "%" },
    ],
    growth: {
      title: "Appointments handled per month",
      unit: "appointments",
      labels: ["M1", "M2", "M3", "M4", "M5", "M6"],
      values: [120, 210, 330, 470, 610, 780],
    },
    timeline: [
      { name: "Discovery & design", weeks: 1 },
      { name: "Backend & database", weeks: 3 },
      { name: "Frontend & dashboards", weeks: 3 },
      { name: "Testing & launch", weeks: 1 },
    ],
  },

  "voicecontrol-ai": {
    title: "VoiceControl AI",
    type: "AI Platform",
    industry: "Voice Coaching · AI",
    summary: "A 24/7 personal speech coach that gives real-time AI feedback to help users refine their tone and delivery.",
    stack: ["Python", "FastAPI", "OpenAI", "Anam AI"],
    image: "/images/voicecontrol.jpg",
    kpis: [
      { value: "24/7", label: "Coach availability" },
      { value: "Real-time", label: "AI feedback" },
      { value: "5x", label: "Practice sessions" },
      { value: "10 weeks", label: "Delivery time" },
    ],
    challenge: [
      "Human voice coaches are expensive and only available at fixed hours.",
      "Learners had no objective way to measure improvement between sessions.",
    ],
    solution: [
      "An AI coach that analyses speech live and gives instant feedback on tone, pace and clarity.",
      "Progress tracking so users can see their improvement session by session.",
      "FastAPI backend with OpenAI and Anam AI for analysis and avatar interaction.",
    ],
    results: [
      "Users practise far more often because the coach is always available.",
      "Progress is visible and measurable instead of subjective.",
    ],
    compare: [
      { label: "Cost per coaching hour", before: 60, after: 8, unit: "$", lowerIsBetter: true },
      { label: "Practice sessions per user / month", before: 3, after: 15, unit: "" },
      { label: "Time to get feedback", before: 1440, after: 1, unit: "min", lowerIsBetter: true },
    ],
    growth: {
      title: "Active users per month",
      unit: "users",
      labels: ["M1", "M2", "M3", "M4", "M5", "M6"],
      values: [40, 110, 240, 420, 700, 1050],
    },
    timeline: [
      { name: "Research & prototype", weeks: 2 },
      { name: "AI pipeline", weeks: 4 },
      { name: "Frontend & UX", weeks: 3 },
      { name: "Testing & launch", weeks: 1 },
    ],
  },

  "prime-epc": {
    title: "Prime EPC",
    type: "Booking & Payments",
    industry: "Energy Certificates · UK",
    summary: "End-to-end online booking and payment for EPC (Energy Performance Certificate) services.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "VPS"],
    image: "/images/primepc.jpg",
    kpis: [
      { value: "100%", label: "Online booking" },
      { value: "-80%", label: "Admin time" },
      { value: "24/7", label: "Bookings open" },
      { value: "7 weeks", label: "Delivery time" },
    ],
    challenge: [
      "Customers had to call or email to book, and payments were chased manually.",
      "The team spent hours on scheduling and paperwork each day.",
    ],
    solution: [
      "A booking flow where customers choose a service, pick a slot and pay online.",
      "Admin dashboard to manage bookings, assessors and payments.",
      "Automatic confirmations and reminders by email.",
    ],
    results: [
      "Customers book at any hour without contacting the team.",
      "Admin workload dropped and payments arrive before the visit.",
    ],
    compare: [
      { label: "Admin time per booking", before: 25, after: 5, unit: "min", lowerIsBetter: true },
      { label: "Unpaid bookings", before: 22, after: 2, unit: "%", lowerIsBetter: true },
      { label: "Bookings per week", before: 20, after: 65, unit: "" },
    ],
    growth: {
      title: "Bookings per month",
      unit: "bookings",
      labels: ["M1", "M2", "M3", "M4", "M5", "M6"],
      values: [60, 110, 170, 230, 290, 360],
    },
    timeline: [
      { name: "Planning & design", weeks: 1 },
      { name: "Booking & payments", weeks: 3 },
      { name: "Admin portal", weeks: 2 },
      { name: "Testing & launch", weeks: 1 },
    ],
  },

  aethelles: {
    title: "Aethelles",
    type: "E-commerce",
    industry: "Luxury Resale · Australia",
    summary: "A full e-commerce platform for pre-owned luxury and streetwear resale, delivered in 12 weeks with full handover.",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    image: "/images/aethelles.jpg",
    kpis: [
      { value: "12 weeks", label: "Delivery time" },
      { value: "100%", label: "Handover completed" },
      { value: "2x", label: "Conversion rate" },
      { value: "-60%", label: "Listing time" },
    ],
    challenge: [
      "The client sold through social media and DMs, which made orders hard to track.",
      "Each unique pre-owned item needed its own listing, stock and condition details.",
    ],
    solution: [
      "A storefront built for one-of-a-kind items with condition grading and multiple photos.",
      "Admin panel for fast listing, inventory and order management.",
      "Secure checkout and a complete handover with documentation.",
    ],
    results: [
      "Orders and stock are tracked in one place instead of chat threads.",
      "The client can list new items quickly and run the store independently.",
    ],
    compare: [
      { label: "Time to list one item", before: 20, after: 8, unit: "min", lowerIsBetter: true },
      { label: "Visitor-to-order conversion", before: 1, after: 2.2, unit: "%" },
      { label: "Order errors per month", before: 10, after: 1, unit: "", lowerIsBetter: true },
    ],
    growth: {
      title: "Monthly revenue index (month 1 = 100)",
      unit: "index",
      labels: ["M1", "M2", "M3", "M4", "M5", "M6"],
      values: [100, 140, 190, 260, 330, 410],
    },
    timeline: [
      { name: "Discovery & design", weeks: 2 },
      { name: "Store & checkout", weeks: 5 },
      { name: "Admin & inventory", weeks: 3 },
      { name: "Testing & handover", weeks: 2 },
    ],
  },

  spritzometro: {
    title: "SpritzoMetro",
    type: "Data Platform",
    industry: "Calling Agent · Italy",
    summary: "A price index platform that collects Spritz prices using an AI calling agent instead of manual surveys.",
    stack: ["Vapi AI", "OpenAI", "Vercel", "Twilio AI"],
    image: "/images/spritzo.jpg",
    kpis: [
      { value: "AI", label: "Calling agent" },
      { value: "500+", label: "Venues covered" },
      { value: "-90%", label: "Manual effort" },
      { value: "6 weeks", label: "Delivery time" },
    ],
    challenge: [
      "Collecting prices from bars and restaurants by hand was slow and did not scale.",
      "Data went out of date quickly, so the index was not reliable.",
    ],
    solution: [
      "An AI calling agent that phones venues, asks the price and records the answer.",
      "Calls are transcribed and structured data is stored automatically.",
      "A public dashboard shows the price index on a map.",
    ],
    results: [
      "Many more venues are covered with almost no manual work.",
      "Data is refreshed regularly, so the index stays current.",
    ],
    compare: [
      { label: "Venues surveyed per week", before: 15, after: 120, unit: "" },
      { label: "Cost per data point", before: 5, after: 0.5, unit: "$", lowerIsBetter: true },
      { label: "Data refresh cycle", before: 30, after: 7, unit: "days", lowerIsBetter: true },
    ],
    growth: {
      title: "Venues in the index",
      unit: "venues",
      labels: ["M1", "M2", "M3", "M4", "M5", "M6"],
      values: [30, 90, 180, 290, 400, 520],
    },
    timeline: [
      { name: "Research & call flow", weeks: 1 },
      { name: "Calling agent", weeks: 2 },
      { name: "Data pipeline & dashboard", weeks: 2 },
      { name: "Testing & launch", weeks: 1 },
    ],
  },

  "manchester-certify": {
    title: "Manchester Certify",
    type: "Business Website",
    industry: "Certification Services · UK",
    summary: "A certification services website serving more than 10K users every month.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "VPS"],
    image: "/images/manchester.jpg",
    kpis: [
      { value: "10K+", label: "Monthly users" },
      { value: "+150%", label: "Online enquiries" },
      { value: "2x", label: "Faster booking" },
      { value: "6 weeks", label: "Delivery time" },
    ],
    challenge: [
      "The old site was slow, hard to use on mobile and did not generate enquiries.",
      "Customers could not easily see services or book an appointment.",
    ],
    solution: [
      "A fast, mobile-friendly website with clear service pages.",
      "Online booking and an admin portal to manage appointments.",
      "SEO-ready structure so customers can find the business.",
    ],
    results: [
      "Traffic grew past 10K monthly users.",
      "More enquiries now come directly through the website.",
    ],
    compare: [
      { label: "Page load time", before: 6.5, after: 1.8, unit: "s", lowerIsBetter: true },
      { label: "Monthly enquiries", before: 40, after: 100, unit: "" },
      { label: "Mobile bounce rate", before: 68, after: 38, unit: "%", lowerIsBetter: true },
    ],
    growth: {
      title: "Monthly visitors",
      unit: "users",
      labels: ["M1", "M2", "M3", "M4", "M5", "M6"],
      values: [1200, 2800, 4900, 7000, 8800, 10500],
    },
    timeline: [
      { name: "Planning & design", weeks: 1 },
      { name: "Frontend", weeks: 2 },
      { name: "Booking & admin", weeks: 2 },
      { name: "SEO & launch", weeks: 1 },
    ],
  },

  "ep-fitness": {
    title: "EP Fitness",
    type: "Fitness Website",
    industry: "Fitness · Philippines",
    summary: "A conversion-focused fitness coaching website, delivered in just 2 weeks.",
    stack: ["Next.js", "TailwindCSS"],
    image: "/images/epfitness.jpg",
    kpis: [
      { value: "2 weeks", label: "Delivery time" },
      { value: "+120%", label: "Lead enquiries" },
      { value: "95+", label: "Performance score" },
      { value: "100%", label: "Mobile friendly" },
    ],
    challenge: [
      "The coach relied only on Instagram, with no place to explain programs or collect leads.",
      "Potential clients had no clear next step after seeing the content.",
    ],
    solution: [
      "A clean landing site with programs, results and clear call-to-action buttons.",
      "Lead form connected to the coach's inbox.",
      "Optimised for mobile, where most of the audience browses.",
    ],
    results: [
      "Leads now arrive through a dedicated website funnel.",
      "The site loads fast and works well on all devices.",
    ],
    compare: [
      { label: "Leads per month", before: 15, after: 33, unit: "" },
      { label: "Page load time", before: 5, after: 1.4, unit: "s", lowerIsBetter: true },
      { label: "Time to launch", before: 30, after: 14, unit: "days", lowerIsBetter: true },
    ],
    growth: {
      title: "Leads per month",
      unit: "leads",
      labels: ["M1", "M2", "M3", "M4", "M5", "M6"],
      values: [12, 20, 28, 34, 41, 49],
    },
    timeline: [
      { name: "Design", weeks: 0.5 },
      { name: "Build", weeks: 1 },
      { name: "Testing & launch", weeks: 0.5 },
    ],
  },

  seaglore: {
    title: "Seaglore",
    type: "Clothing Website",
    industry: "E-commerce · Germany",
    summary: "Video consultations and e-commerce in one seamless flow for a wellness and clothing brand.",
    stack: ["React", "Node.js", "PostgreSQL"],
    image: "/images/seaglore.jpg",
    kpis: [
      { value: "2-in-1", label: "Shop + consultation" },
      { value: "+90%", label: "Order value" },
      { value: "9 weeks", label: "Delivery time" },
      { value: "DE/EN", label: "Languages" },
    ],
    challenge: [
      "Consultations and product sales ran on separate tools, so customers dropped off between them.",
      "The brand wanted personal advice to lead directly to a purchase.",
    ],
    solution: [
      "One platform where customers can book a video consultation and shop in the same flow.",
      "Product recommendations after each consultation.",
      "Secure payments and an admin panel for orders and bookings.",
    ],
    results: [
      "Customers move from advice to purchase without leaving the site.",
      "Average order value increased because of guided recommendations.",
    ],
    compare: [
      { label: "Average order value", before: 55, after: 105, unit: "€" },
      { label: "Cart abandonment", before: 78, after: 52, unit: "%", lowerIsBetter: true },
      { label: "Tools used by the team", before: 4, after: 1, unit: "", lowerIsBetter: true },
    ],
    growth: {
      title: "Orders per month",
      unit: "orders",
      labels: ["M1", "M2", "M3", "M4", "M5", "M6"],
      values: [25, 55, 95, 140, 190, 250],
    },
    timeline: [
      { name: "Discovery & design", weeks: 2 },
      { name: "Shop & checkout", weeks: 3 },
      { name: "Video consultations", weeks: 3 },
      { name: "Testing & launch", weeks: 1 },
    ],
  },

  "sevil-velsha": {
    title: "Sevil Velsha",
    type: "Voice Control",
    industry: "Portfolio · Germany",
    summary: "A voice coaching funnel and portfolio site with analytics and voice analysis.",
    stack: ["Next.js", "Node.js", "Vercel"],
    image: "/images/sevilvelsha.jpg",
    kpis: [
      { value: "+110%", label: "Client enquiries" },
      { value: "3 weeks", label: "Delivery time" },
      { value: "95+", label: "Performance score" },
      { value: "1", label: "Clear funnel" },
    ],
    challenge: [
      "The coach had no central place to present her work or turn visitors into clients.",
      "Voice samples and analysis were shared informally and were hard to showcase.",
    ],
    solution: [
      "A portfolio and funnel site that guides visitors from interest to booking.",
      "Voice analysis showcase with clear explanations of the results.",
      "Hosted on Vercel for speed and reliability.",
    ],
    results: [
      "Visitors have a clear path to book a session.",
      "The coach can present her expertise professionally.",
    ],
    compare: [
      { label: "Enquiries per month", before: 10, after: 21, unit: "" },
      { label: "Visitor-to-lead conversion", before: 1.2, after: 3.5, unit: "%" },
      { label: "Page load time", before: 4.2, after: 1.2, unit: "s", lowerIsBetter: true },
    ],
    growth: {
      title: "Enquiries per month",
      unit: "enquiries",
      labels: ["M1", "M2", "M3", "M4", "M5", "M6"],
      values: [8, 14, 21, 27, 34, 42],
    },
    timeline: [
      { name: "Strategy & design", weeks: 1 },
      { name: "Build", weeks: 1.5 },
      { name: "Testing & launch", weeks: 0.5 },
    ],
  },

  "forex-trading": {
    title: "Forex Trading",
    type: "Trading Platform",
    industry: "Trading · Pakistan",
    summary: "A trading education and course platform serving more than 12K users.",
    stack: ["PHP", "Laravel", "MySQL"],
    image: "/images/forex.jpg",
    kpis: [
      { value: "12K+", label: "Registered users" },
      { value: "6 weeks", label: "Delivery time" },
      { value: "3x", label: "Course enrolments" },
      { value: "99%", label: "Uptime" },
    ],
    challenge: [
      "Courses were sold manually, with no user accounts or progress tracking.",
      "Onboarding each student took a lot of the owner's time.",
    ],
    solution: [
      "A course platform with accounts, gated lessons, payments and an admin panel.",
      "Progress tracking so students can continue where they stopped.",
      "Built on Laravel and MySQL to handle thousands of users.",
    ],
    results: [
      "Enrolments grew steadily as the platform scaled past 12K users.",
      "Admins manage everything from a single dashboard.",
    ],
    compare: [
      { label: "Manual onboarding per student", before: 30, after: 2, unit: "min", lowerIsBetter: true },
      { label: "Monthly enrolments", before: 40, after: 120, unit: "" },
      { label: "Support requests per week", before: 60, after: 20, unit: "", lowerIsBetter: true },
    ],
    growth: {
      title: "Registered users",
      unit: "users",
      labels: ["M1", "M3", "M6", "M9", "M12"],
      values: [500, 2500, 6000, 9500, 12000],
    },
    timeline: [
      { name: "Planning & design", weeks: 1 },
      { name: "Core platform", weeks: 3 },
      { name: "Payments & admin", weeks: 1 },
      { name: "Testing & launch", weeks: 1 },
    ],
  },

  aethla: {
    title: "Aethla",
    type: "Maid Services",
    industry: "Health · Australia",
    summary: "A multilingual maid services website with online booking and a modern admin panel.",
    stack: ["Next.js", "Node.js", "MongoDB", "VPS"],
    image: "/images/aethla.jpg",
    kpis: [
      { value: "Multi", label: "Language support" },
      { value: "+100%", label: "Online bookings" },
      { value: "-60%", label: "Admin workload" },
      { value: "5 weeks", label: "Delivery time" },
    ],
    challenge: [
      "Customers speak different languages, and the business could only serve some of them.",
      "Bookings were handled by phone and message, which was slow and error-prone.",
    ],
    solution: [
      "A website in multiple languages so every customer can read and book in their own.",
      "Online booking with confirmations and an admin panel for scheduling staff.",
      "Deployed on a VPS with SSL for secure, reliable access.",
    ],
    results: [
      "More customers can book without a language barrier.",
      "The team spends less time on manual coordination.",
    ],
    compare: [
      { label: "Bookings per month", before: 30, after: 65, unit: "" },
      { label: "Time to confirm a booking", before: 120, after: 5, unit: "min", lowerIsBetter: true },
      { label: "Languages supported", before: 1, after: 4, unit: "" },
    ],
    growth: {
      title: "Bookings per month",
      unit: "bookings",
      labels: ["M1", "M2", "M3", "M4", "M5", "M6"],
      values: [20, 38, 55, 72, 90, 112],
    },
    timeline: [
      { name: "Planning & design", weeks: 1 },
      { name: "Website & languages", weeks: 2 },
      { name: "Booking & admin", weeks: 1 },
      { name: "Testing & launch", weeks: 1 },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* NEXT.JS ROUTING                                                     */
/* ------------------------------------------------------------------ */
export function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cs = CASE_STUDIES[slug];
  if (!cs) return {};
  return {
    title: `${cs.title} — Case Study | EnriPeak`,
    description: cs.summary,
  };
}

/* ------------------------------------------------------------------ */
/* SMALL BUILDING BLOCKS                                               */
/* ------------------------------------------------------------------ */
function Block({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section className="py-10 md:py-16">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-heading text-2xl font-bold md:text-4xl">{title}</h2>
      <div className="mt-6 md:mt-8">{children}</div>
    </section>
  );
}

function TextList({ items }: { items: string[] }) {
  return (
    <ul className="max-w-3xl space-y-4">
      {items.map((t) => (
        <li key={t} className="flex gap-3 text-base leading-relaxed text-white/70 md:text-lg">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

function Card({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[.03] p-5 md:p-8">
      {title && <p className="mb-6 text-sm font-semibold uppercase tracking-[0.15em] text-white/50">{title}</p>}
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* PAGE                                                                */
/* ------------------------------------------------------------------ */
export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = CASE_STUDIES[slug];
  if (!cs) notFound();

  const slugs = Object.keys(CASE_STUDIES);
  const nextSlug = slugs[(slugs.indexOf(slug) + 1) % slugs.length];
  const next = CASE_STUDIES[nextSlug];

  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        {/* Hero */}
        <section className="relative px-4 pb-10 pt-32 sm:px-6 sm:pb-12 sm:pt-40">
          <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-brand-cyan/[.07] blur-[140px]" />
          <div className="mx-auto max-w-5xl">
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white">
              <ArrowLeft size={16} /> All case studies
            </Link>
            <p className="eyebrow mt-8">
              {cs.type} · {cs.industry}
            </p>
            <h1 className="mt-4 font-heading text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">{cs.title}</h1>
            <p className="mt-6 max-w-3xl text-base text-white/60 sm:text-lg">{cs.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {cs.stack.map((s) => (
                <span key={s} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-4 pb-24 sm:px-6">
          {/* KPI row */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {cs.kpis.map((k, i) => (
              <KpiCard key={k.label} value={k.value} label={k.label} index={i} />
            ))}
          </div>

          {/* Cover image */}
          {cs.image && (
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[.03] md:mt-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={cs.image} alt={`${cs.title} preview`} className="h-auto w-full object-contain" />
            </div>
          )}

          <Block eyebrow="The Problem" title="What the client was facing">
            <TextList items={cs.challenge} />
          </Block>

          <Block eyebrow="The Solution" title="What we built">
            <TextList items={cs.solution} />
          </Block>

          <Block eyebrow="The Impact" title="Results in numbers">
            <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
              <Card title="Before vs After">
                <CompareChart data={cs.compare} />
              </Card>
              {cs.growth && (
                <Card title={cs.growth.title}>
                  <GrowthChart data={cs.growth} />
                </Card>
              )}
            </div>
            <div className="mt-6 md:mt-8">
              <TextList items={cs.results} />
            </div>
          </Block>

          <Block eyebrow="The Process" title="How the project was delivered">
            <Card>
              <ProcessTimeline phases={cs.timeline} />
            </Card>
          </Block>

          {/* Footer nav */}
          <div className="mt-8 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-center">
            <Link href={`/projects/${nextSlug}`} className="group">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">Next case study</p>
              <p className="mt-1 font-heading text-xl font-bold transition-colors group-hover:text-brand-cyan">{next.title} →</p>
            </Link>
            {/* CHANGED: Background color #FFBF00 */}
            <DiscoveryButton className="btn-amber hero-btn hero-in relative overflow-hidden px-5 py-3 text-sm opacity-0 sm:px-6 sm:py-3.5 sm:text-base">
  Book a Discovery Call <ArrowUpRight size={16} />
  <span aria-hidden="true" className="btn-sheen pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-white/50 blur-md" />
</DiscoveryButton>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}