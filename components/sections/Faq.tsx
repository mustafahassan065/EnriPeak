"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Bot,
  CalendarDays,
  Code2,
  Plus,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const FAQ_GROUPS = [
  // Original FAQ data remains untouched...
  {
    id: "start",
    number: "01",
    label: "Get started",
    intro: "A good project starts with the right questions. Here’s what to know before we begin.",
    icon: Sparkles,
    questions: [
      {
        q: "I have an idea, but I’m not sure what I need. Can you help me shape it?",
        a: "Absolutely. You don’t need a finished brief or a technical plan to start a conversation. Tell us what you’re trying to achieve, what feels difficult today, and where you want to go. We’ll help turn that into a practical direction, identify what should be built first, and recommend the right next step — without adding technology just for the sake of it.",
      },
      {
        q: "What happens after I get in touch?",
        a: "We start by understanding your business, your goals, and the problem behind the project. From there, we explore the best approach, clarify the scope, and outline the likely timeline and investment. You’ll know what we’re proposing and why before you decide whether to move forward.",
      },
      {
        q: "Do you work with startups as well as established businesses?",
        a: "Yes. We work with founders bringing a new idea to life and businesses ready to improve or expand what they already have. The approach changes with the stage you’re at: validating an idea, launching a first version, modernising an existing product, or building systems that can support the next stage of growth.",
      },
    ],
  },
  {
    id: "web",
    number: "02",
    label: "Web development",
    intro: "From the first customer touchpoint to the systems running behind your business.",
    icon: Code2,
    questions: [
      {
        q: "What kind of websites and web applications do you create?",
        a: "We build purposeful digital experiences — from conversion-focused business websites and e-commerce stores to custom web applications, dashboards, portals, and complex platforms. The right solution depends on what your users need to do and what your business needs the product to achieve. Every build is planned around usability, performance, and room to grow.",
      },
      {
        q: "Can you improve or take over a website that already exists?",
        a: "Yes. A complete rebuild isn’t always the answer. We can improve an existing website, resolve technical issues, refresh its experience, add new functionality, or connect it with the tools your team already uses. We first assess what’s working and what’s holding it back, then recommend the most sensible route.",
      },
      {
        q: "Will my website be fast, responsive, and easy to manage?",
        a: "Those are core requirements, not optional extras. We build with mobile usability, performance, accessibility, and maintainable structure in mind. We’ll also discuss how you’ll manage content and everyday updates, so your website remains useful after launch — not something you’re afraid to touch.",
      },
    ],
  },
  {
    id: "ai",
    number: "03",
    label: "AI solutions",
    intro: "Practical AI that takes work off your team and makes your operations smarter.",
    icon: Bot,
    questions: [
      {
        q: "What can you actually build with AI for my business?",
        a: "We can build AI agents, workflow automation, intelligent assistants, document-processing systems, and integrations that connect AI with your existing tools. The opportunity might be answering repetitive enquiries, handling internal processes, finding information across documents, or helping your team make sense of business data. We start with the task and design the AI around it.",
      },
      {
        q: "Can AI work with the tools and data we already have?",
        a: "In many cases, yes. We can explore integrations with your website, CRM, databases, internal platforms, and third-party services through their available APIs and access methods. Before recommending an approach, we check the systems involved, data requirements, permissions, and any practical limitations.",
      },
      {
        q: "How do you keep AI solutions reliable and under control?",
        a: "A useful AI system needs more than a clever prompt. We consider the quality of its data, clear task boundaries, testing, privacy, monitoring, and human approval wherever a decision needs oversight. We also plan for exceptions, so the system can hand work back to a person instead of confidently producing the wrong outcome.",
      },
    ],
  },
  {
    id: "booking",
    number: "04",
    label: "Booking a call",
    intro: "A straightforward conversation to understand the challenge and see if we’re the right fit.",
    icon: CalendarDays,
    questions: [
      {
        q: "What should I prepare before the discovery call?",
        a: "Nothing formal is required. It helps to bring a little context about your business, the challenge or idea you have in mind, and what a successful outcome would look like. If you have examples, existing links, or rough notes, feel free to share them — but you don’t need a polished brief to have a useful conversation.",
      },
      {
        q: "What will we cover during the call?",
        a: "We’ll discuss your goals, your users, the current situation, and what you want to improve or create. We’ll ask questions to understand the scope, highlight possible approaches, and talk through practical considerations such as priorities, timing, and budget. You’ll leave with a clearer sense of the next step, even if we decide not to work together.",
      },
      {
        q: "Am I committing to a project by booking a call?",
        a: "Not at all. The discovery call is a chance for both sides to understand the opportunity and decide whether there’s a good fit. There’s no obligation to proceed. If the project makes sense, we can follow up with a proposed scope, milestones, timeline, and estimate for you to review before making any decision.",
      },
    ],
  },
] as const;

export default function Faq() {
  const [activeGroup, setActiveGroup] = useState(0);
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);
  const active = FAQ_GROUPS[activeGroup];

  const selectGroup = (index: number) => {
    setActiveGroup(index);
    setOpenQuestion(0);
  };

  return (
    <section id="faq" className="relative mx-auto max-w-6xl scroll-mt-24 px-4 pb-20 sm:px-6 md:pb-28">
      <SectionHeading
        eyebrow="A few good questions"
        title={<>Good to know <span className="font-serif font-normal italic text-gradient">before we build.</span></>}
        desc="From the first conversation to the finished product, here are a few things worth knowing about working with us."
      />

      <Reveal className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
        {/* Category navigation */}
        <div className="flex flex-col gap-3" aria-label="FAQ categories">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white/35">Explore by topic</p>
          {FAQ_GROUPS.map((group, index) => {
            const Icon = group.icon;
            const selected = activeGroup === index;
            return (
              <button
                key={group.id}
                type="button"
                onClick={() => selectGroup(index)}
                aria-pressed={selected}
                className={`group relative flex w-full items-center gap-4 overflow-hidden rounded-xl border px-4 py-4 text-left transition-all duration-300 sm:px-5 ${
                  selected
                    ? "border-brand-cyan/35 bg-brand-cyan/[0.08] shadow-[0_0_32px_rgba(0,255,255,0.06)]"
                    : "border-white/[0.08] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.045]"
                }`}
              >
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg border transition-colors ${selected ? "border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan" : "border-white/10 bg-white/[0.03] text-white/45 group-hover:text-white/75"}`}>
                  <Icon size={18} strokeWidth={1.7} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className={`block font-heading text-sm font-bold sm:text-base ${selected ? "text-white" : "text-white/65 group-hover:text-white"}`}>
                    {group.label}
                  </span>
                  <span className="mt-1 block text-xs text-white/35">{group.questions.length} questions</span>
                </span>
                <span className={`font-mono text-xs ${selected ? "text-brand-cyan" : "text-white/25"}`}>{group.number}</span>
                {selected && <span className="absolute bottom-0 left-0 top-0 w-[2px] bg-brand-cyan" />}
              </button>
            );
          })}

          <div className="mt-3 rounded-xl border border-white/[0.08] bg-white/[0.025] p-5">
            <p className="text-sm font-semibold text-white">Still have a question?</p>
            <p className="mt-1.5 text-sm leading-relaxed text-white/50">Tell us what you’re planning. We’ll help you work out the next step.</p>
            <Link href="/#contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan transition-colors hover:text-white">
              Talk to our team <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        {/* Questions for the selected category */}
        <div className="min-w-0">
          <div className="divide-y divide-white/10 border-y border-white/10">
            {active.questions.map((item, index) => {
              const isOpen = openQuestion === index;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-6 py-5 text-left sm:py-6"
                    onClick={() => setOpenQuestion(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className={`font-heading text-base font-bold transition-colors sm:text-lg`}>
                      {item.q}
                    </span>
                    <Plus className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45 text-brand-cyan" : "text-white/40"}`} />
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-5 sm:pb-6" : "grid-rows-[0fr]"}`}>
                    <p className="overflow-hidden text-sm leading-7 text-white/60 sm:text-base">{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col items-start justify-between gap-4 text-xs text-white/35 sm:flex-row sm:items-center">
            <span>Thoughtful answers. No unnecessary jargon.</span>
            <span className="hidden items-center gap-1 sm:inline-flex">Next step, when you’re ready <ArrowDownRight size={13} /></span>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-6 text-center sm:flex-row sm:px-9 sm:py-7 sm:text-left">
        <div>
          <p className="font-heading text-lg font-bold text-white sm:text-xl">Have a project in mind?</p>
          <p className="mt-1 text-sm text-white/50">Let’s turn the questions into a clear plan.</p>
        </div>
        <Link href="/#contact" className="btn-amber inline-flex shrink-0 items-center justify-center gap-2 px-6 py-3 font-semibold w-full sm:w-auto">
          Book a discovery call <ArrowUpRight size={17} />
        </Link>
      </Reveal>
    </section>
  );
}