import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";

/* ----- tiny animated scenes ----- */
function SceneSite() {
  return (
    <div className="flex h-24 items-end gap-2">
      {[40, 65, 50, 85, 100].map((h, i) => (
        <span key={i} className="scene-bar w-full rounded-t bg-gradient-to-t from-brand-cyan/20 to-brand-cyan" style={{ height: `${h}%`, animationDelay: `${i * 0.18}s` }} />
      ))}
    </div>
  );
}
function SceneManual() {
  return (
    <div className="flex h-24 flex-col justify-center gap-3">
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="scene-dot h-3 w-3 rounded-full" style={{ animationDelay: `${i * 0.5}s` }} />
          <span className="h-2 flex-1 rounded bg-white/10" style={{ maxWidth: `${90 - i * 18}%` }} />
        </div>
      ))}
    </div>
  );
}
function SceneAI() {
  return (
    <div className="relative h-24 text-xs">
      <div className="ml-auto w-fit rounded-lg bg-white/10 px-3 py-1.5">Summarize my leads</div>
      <div className="scene-dots absolute left-0 top-9 flex gap-1 rounded-lg bg-brand-cyan/15 px-3 py-2.5">
        {[0, 1, 2].map((i) => <span key={i} className="scene-blink h-1.5 w-1.5 rounded-full bg-brand-cyan" style={{ animationDelay: `${i * 0.2}s` }} />)}
      </div>
      <div className="scene-reply absolute left-0 top-9 rounded-lg bg-brand-cyan/15 px-3 py-1.5 text-brand-cyan">12 new leads, 4 hot</div>
    </div>
  );
}
function ScenePlatform() {
  return (
    <div className="flex h-24 flex-col-reverse justify-start gap-1.5">
      {[0, 1, 2].map((i) => (
        <span key={i} className="scene-block h-6 rounded-md border border-brand-amber/40 bg-brand-amber/15" style={{ animationDelay: `${i * 0.35}s`, width: `${100 - i * 14}%` }} />
      ))}
    </div>
  );
}

const CASES = [
  { title: "I need a website that converts", desc: "A fast, modern site that turns visitors into enquiries.", Scene: SceneSite },
  { title: "Manual work is slowing us down", desc: "Automate repetitive tasks so your team can focus on growth.", Scene: SceneManual },
  { title: "I want AI inside my product", desc: "Agents, chat and smart features built into what you already have.", Scene: SceneAI },
  { title: "I need a custom platform", desc: "Dashboards, portals and SaaS built exactly for your workflow.", Scene: ScenePlatform },
];

export default function Problems() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <SectionHeading eyebrow="Start here" title={<>Where are you <span className="font-serif font-normal italic text-gradient">today?</span></>} desc="Pick the one that sounds like you. We'll take it from there." />
      <Reveal stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {CASES.map(({ title, desc, Scene }) => (
          <TiltCard key={title} className="rounded-2xl border border-white/10 bg-white/[.03] p-6 transition-colors hover:border-brand-cyan/40">
            <div className="relative">
              <Scene />
              <h3 className="mt-6 font-heading text-lg font-bold leading-snug">{title}</h3>
              <p className="mt-2 text-sm text-white/55">{desc}</p>
            </div>
          </TiltCard>
        ))}
      </Reveal>
    </section>
  );
}