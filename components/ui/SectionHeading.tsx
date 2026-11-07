import Reveal from "./Reveal";

type Props = { eyebrow: string; title: React.ReactNode; desc?: string; center?: boolean };

export default function SectionHeading({ eyebrow, title, desc, center }: Props) {
  return (
    <Reveal stagger className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-heading text-[clamp(2rem,4.6vw,3.6rem)] font-extrabold leading-[1.05] tracking-tight">{title}</h2>
      {desc && <p className="mt-5 text-lg text-white/60">{desc}</p>}
    </Reveal>
  );
}