import type { ReactNode } from "react";

/**
 * Outer wrapper receives the mouse-parallax, inner one the floating loop
 * (both driven by GSAP from Hero.tsx).
 */
export default function FloatCard({
  children,
  depth = 20,
  className = "",
  tilt = "",
}: {
  children: ReactNode;
  depth?: number;
  className?: string;
  tilt?: string;
}) {
  return (
    <div data-depth={depth} className={`float-wrap absolute z-10 ${className}`}>
      <div className={`float-inner ${tilt}`}>{children}</div>
    </div>
  );
}