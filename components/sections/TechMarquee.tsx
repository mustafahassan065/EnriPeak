const TECH = ["Next.js", "React", "Node.js", "NestJS", "FastAPI", "Python", "TypeScript", "PostgreSQL", "MongoDB", "Tailwind CSS", "REST & GraphQL", "LLM APIs"];

export default function TechMarquee() {
  const items = [...TECH, ...TECH];
  return (
    <section className="border-y border-white/10 bg-white/[.02] py-8" aria-label="Technologies we work with">
      <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.25em] text-white/40">Built with modern technology</p>
      <div
        className="marquee overflow-hidden"
        style={{ maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)" }}
      >
        <div className="marquee-track flex w-max gap-14 pr-14">
          {items.map((t, i) => (
            <span key={i} className="font-heading text-2xl font-bold text-white/35 transition-colors hover:text-brand-cyan">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}