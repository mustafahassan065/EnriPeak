// Placeholder logo mark — replace with your final logo (SVG/PNG) when ready.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="ep-logo" x1="0" y1="32" x2="32" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00FFFF" />
            <stop offset="1" stopColor="#FFBF00" />
          </linearGradient>
        </defs>
        <path d="M2 27 12 8l6 10 3-5 9 14H2Z" stroke="url(#ep-logo)" strokeWidth="2.2" strokeLinejoin="round" />
        <circle cx="12" cy="8" r="2.2" fill="#FFBF00" />
      </svg>
      <span className="font-heading text-lg font-extrabold tracking-tight">
        Enri<span className="text-brand-cyan">Peak</span>
      </span>
    </span>
  );
}