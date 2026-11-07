"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** animate direct children one after another instead of the wrapper */
  stagger?: boolean;
};

export default function Reveal({ children, className = "", delay = 0, y = 40, stagger = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const el = ref.current!;
        gsap.from(stagger ? Array.from(el.children) : el, {
          y,
          opacity: 0,
          duration: 0.9,
          delay,
          ease: "power3.out",
          stagger: stagger ? 0.1 : 0,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}