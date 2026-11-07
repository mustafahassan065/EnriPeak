// components/case-study/Charts.tsx
"use client";

import { useEffect, useId, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/* TYPES                                                               */
/* ------------------------------------------------------------------ */
export type Compare = { label: string; before: number; after: number; unit: string; lowerIsBetter?: boolean };
export type Growth = { title: string; unit: string; labels: string[]; values: number[] };
export type Phase = { name: string; weeks: number };

/* ------------------------------------------------------------------ */
/* HELPERS                                                             */
/* ------------------------------------------------------------------ */
const clamp01 = (n: number) => Math.min(1, Math.max(0, n));
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const easeOutBack = (t: number) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};
const decimalsOf = (n: number) => {
  const s = String(n);
  const i = s.indexOf(".");
  return i === -1 ? 0 : s.length - i - 1;
};
const fmt = (n: number, d = 0) => n.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });

function fmtVal(n: number, d: number, unit: string) {
  const cur = unit === "$" || unit === "€";
  if (cur) return `${unit}${fmt(n, d)}`;
  if (!unit) return fmt(n, d);
  return unit === "%" ? `${fmt(n, d)}%` : `${fmt(n, d)} ${unit}`;
}

/** Fires once when the element scrolls into view. */
function useInView<T extends Element>(threshold = 0.25) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/** Linear 0 → 1 progress once `active` becomes true. Jumps to 1 if the user prefers reduced motion. */
function useProgress(active: boolean, duration = 1400, delay = 0) {
  const [p, setP] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setP(1);
      return;
    }
    let raf = 0;
    let start = 0;
    const tick = (now: number) => {
      if (!start) start = now;
      const t = Math.min((now - start) / duration, 1);
      setP(t);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    const timeout = setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [active, duration, delay]);
  return p;
}

function Arrow({ dir, size = 12, className = "" }: { dir: "up" | "down"; size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 12 12" width={size} height={size} aria-hidden className={className}>
      <path d={dir === "up" ? "M6 1 L11 10 H1 Z" : "M6 11 L11 2 H1 Z"} fill="currentColor" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* KPI CARD — number counts up from 0 when scrolled into view          */
/* ------------------------------------------------------------------ */
function parseKpi(value: string) {
  const m = value.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!m) return null;
  if (/\d/.test(m[3])) return null; // things like "24/7", "2-in-1" stay static
  return { prefix: m[1], num: parseFloat(m[2]), decimals: decimalsOf(parseFloat(m[2])), suffix: m[3] };
}

export function KpiCard({ value, label, index = 0 }: { value: string; label: string; index?: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const p = useProgress(inView, 1600, index * 120);
  const parsed = parseKpi(value);
  const dir = parsed ? (parsed.prefix.includes("+") ? "up" : parsed.prefix.includes("-") ? "down" : null) : null;

  return (
    <div ref={ref} className="rounded-2xl border border-white/10 bg-white/[.03] p-5">
      <p className="flex items-center gap-2 font-heading text-3xl font-extrabold text-brand-cyan md:text-4xl">
        {dir && <Arrow dir={dir} size={16} />}
        {parsed ? (
          <span>
            {dir ? parsed.prefix.replace(/[+-]/g, "") : parsed.prefix}
            {fmt(parsed.num * easeOutCubic(p), parsed.decimals)}
            {parsed.suffix}
          </span>
        ) : (
          <span>{value}</span>
        )}
      </p>
      <p className="mt-2 text-xs text-white/60 md:text-sm">{label}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* BEFORE vs AFTER — bars grow, numbers and % count up                 */
/* ------------------------------------------------------------------ */
function CompareRow({ d, index, active }: { d: Compare; index: number; active: boolean }) {
  const p = useProgress(active, 1600, index * 250);
  const eBefore = easeOutCubic(clamp01(p / 0.7));
  const eAfter = clamp01((p - 0.2) / 0.8);
  const afterBar = easeOutBack(eAfter); // slight overshoot, then settles
  const afterNum = easeOutCubic(eAfter);

  const max = Math.max(d.before, d.after) || 1;
  const dec = Math.max(decimalsOf(d.before), decimalsOf(d.after));
  const change = d.before === 0 ? 0 : ((d.after - d.before) / d.before) * 100;
  const good = d.lowerIsBetter ? change < 0 : change > 0;
  const dir = change >= 0 ? "up" : "down";

  return (
    <div>
      <div className="mb-3 flex items-baseline justify-between gap-4">
        <p className="text-sm font-semibold text-white md:text-base">{d.label}</p>
        <span className={`inline-flex items-center gap-1.5 text-sm font-bold ${good ? "text-brand-cyan" : "text-brand-amber"}`}>
          <Arrow dir={dir} size={11} />
          {fmt(Math.abs(change) * afterNum, 0)}%
        </span>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="w-14 shrink-0 text-xs text-white/50">Before</span>
          <div className="h-7 flex-1 overflow-hidden rounded bg-white/5">
            <div className="h-full rounded bg-white/30" style={{ width: `${(d.before / max) * 100 * eBefore}%` }} />
          </div>
          <span className="w-20 shrink-0 text-right text-xs tabular-nums text-white/70">{fmtVal(d.before * eBefore, dec, d.unit)}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-14 shrink-0 text-xs text-white/50">After</span>
          <div className="h-7 flex-1 overflow-hidden rounded bg-white/5">
            <div className="h-full rounded bg-brand-cyan" style={{ width: `${(d.after / max) * 100 * afterBar}%` }} />
          </div>
          <span className="w-20 shrink-0 text-right text-xs font-semibold tabular-nums text-white">{fmtVal(d.after * afterNum, dec, d.unit)}</span>
        </div>
      </div>
    </div>
  );
}

export function CompareChart({ data }: { data: Compare[] }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  return (
    <div ref={ref} className="space-y-8">
      {data.map((d, i) => (
        <CompareRow key={d.label} d={d} index={i} active={inView} />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* GROWTH LINE — draws left to right with a gentle wave that settles   */
/* ------------------------------------------------------------------ */
export function GrowthChart({ data }: { data: Growth }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const p = useProgress(inView, 2600);
  const clipId = "clip" + useId().replace(/[^a-zA-Z0-9]/g, "");

  const W = 600;
  const H = 260;
  const P = { l: 48, r: 16, t: 28, b: 32 };
  const n = data.values.length;
  const max = Math.max(...data.values) * 1.1;
  const x = (i: number) => P.l + (i * (W - P.l - P.r)) / (n - 1 || 1);
  const baseY = (v: number) => H - P.b - (v / max) * (H - P.t - P.b);

  const drawn = easeInOutCubic(p);
  const wobble = (i: number) => Math.sin(i * 1.9 + p * 16) * (1 - p) * 8; // 0 once finished
  const pts = data.values.map((v, i) => ({ x: x(i), y: baseY(v) + wobble(i) }));
  const lineD = pts.map((pt, i) => `${i === 0 ? "M" : "L"}${pt.x},${pt.y}`).join(" ");
  const areaD = `${lineD} L${x(n - 1)},${H - P.b} L${x(0)},${H - P.b} Z`;
  const clipW = (W - P.l - P.r) * drawn + 4 + (drawn >= 1 ? 12 : 0);
  const ticks = [0, 0.25, 0.5, 0.75, 1].map((t) => Math.round(max * t));

  const first = data.values[0];
  const last = data.values[n - 1];
  const totalChange = first === 0 ? 0 : ((last - first) / first) * 100;
  const dir = totalChange >= 0 ? "up" : "down";

  const pointLocal = (i: number) => {
    const frac = n > 1 ? i / (n - 1) : 0;
    return clamp01((drawn - frac * 0.88) / 0.12);
  };
  const lastLocal = pointLocal(n - 1);

  return (
    <div ref={ref}>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm text-white/60">
          {fmt(first)} → <span className="font-semibold tabular-nums text-white">{fmt(last * easeOutCubic(p))}</span> {data.unit}
        </p>
        <span className={`inline-flex items-center gap-1.5 text-sm font-bold ${totalChange >= 0 ? "text-brand-cyan" : "text-brand-amber"}`}>
          <Arrow dir={dir} size={11} />
          {fmt(Math.abs(totalChange) * easeOutCubic(p))}%
        </span>
      </div>

      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full min-w-[420px]" role="img" aria-label={data.title}>
          <defs>
            <clipPath id={clipId}>
              <rect x={P.l - 4} y={0} width={clipW} height={H} />
            </clipPath>
          </defs>

          {ticks.map((t) => (
            <g key={t}>
              <line x1={P.l} x2={W - P.r} y1={baseY(t)} y2={baseY(t)} stroke="rgba(255,255,255,0.08)" />
              <text x={P.l - 8} y={baseY(t) + 4} textAnchor="end" fontSize="11" fill="rgba(255,255,255,0.5)">
                {fmt(t)}
              </text>
            </g>
          ))}

          <g clipPath={`url(#${clipId})`}>
            <path d={areaD} fill="rgba(0,255,255,0.12)" />
            <path d={lineD} fill="none" stroke="#00ffff" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
          </g>

          {pts.map((pt, i) => {
            const local = pointLocal(i);
            return (
              <g key={i}>
                <circle cx={pt.x} cy={pt.y} r={Math.max(0, 4.5 * easeOutBack(local))} fill="#0b0f14" stroke="#00ffff" strokeWidth="2.5" />
                <text x={pt.x} y={H - 10} textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.6)" opacity={local}>
                  {data.labels[i]}
                </text>
              </g>
            );
          })}

          <text x={pts[0].x} y={pts[0].y - 12} textAnchor="start" fontSize="12" fontWeight="600" fill="rgba(255,255,255,0.75)" opacity={pointLocal(0)}>
            {fmt(first)}
          </text>
          <text x={pts[n - 1].x} y={pts[n - 1].y - 12} textAnchor="end" fontSize="13" fontWeight="700" fill="#fff" opacity={lastLocal}>
            {fmt(last * easeOutCubic(p))}
          </text>

          {/* soft pulse on the final point once the line is done */}
          {p >= 1 && (
            <g className="motion-reduce:hidden">
              <circle cx={pts[n - 1].x} cy={pts[n - 1].y} r="5" fill="none" stroke="#00ffff" strokeWidth="2">
                <animate attributeName="r" values="5;15" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.7;0" dur="2s" repeatCount="indefinite" />
              </circle>
            </g>
          )}
        </svg>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* PROCESS — Gantt-style timeline, phases fill in one after another    */
/* ------------------------------------------------------------------ */
const BAR_STYLES = [
  "from-brand-cyan to-brand-cyan/70",
  "from-brand-amber to-brand-amber/70",
  "from-brand-cyan to-brand-amber",
  "from-brand-amber to-brand-cyan",
  "from-brand-cyan/80 to-brand-cyan/40",
];

const formatWeeks = (w: number) => (w === 1 ? "1 week" : `${w} weeks`);

function formatRange(start: number, end: number) {
  const a = Math.floor(start + 1e-9) + 1;
  const b = Math.ceil(end - 1e-9);
  return a >= b ? `Week ${a}` : `Weeks ${a}–${b}`;
}

function PhaseRow({
  phase,
  index,
  start,
  total,
  active,
}: {
  phase: Phase;
  index: number;
  start: number;
  total: number;
  active: boolean;
}) {
  const p = useProgress(active, 1000, 200 + index * 550);
  const e = easeOutCubic(p);
  const leftPct = (start / total) * 100;
  const fullPct = (phase.weeks / total) * 100;
  const share = Math.round(fullPct);
  const gridLines = Array.from({ length: Math.max(0, Math.ceil(total) - 1) }, (_, k) => k + 1).filter((k) => k < total);

  return (
    <li className="grid items-center gap-3 md:grid-cols-[250px_1fr] md:gap-6">
      <div className="flex items-center gap-3" style={{ opacity: 0.3 + 0.7 * clamp01(p * 3) }}>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm font-bold text-brand-cyan">
          {index + 1}
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-white md:text-base">{phase.name}</p>
          <p className="text-xs text-white/50">
            {formatRange(start, start + phase.weeks)} · {formatWeeks(phase.weeks)}
          </p>
        </div>
      </div>

      <div className="relative h-10 overflow-hidden rounded-lg bg-white/[.04]">
        {gridLines.map((k) => (
          <span key={k} className="absolute inset-y-0 w-px bg-white/[.07]" style={{ left: `${(k / total) * 100}%` }} />
        ))}
        <div
          className={`absolute inset-y-0 flex items-center justify-end overflow-hidden rounded-lg bg-gradient-to-r ${BAR_STYLES[index % BAR_STYLES.length]}`}
          style={{ left: `${leftPct}%`, width: `${fullPct * e}%` }}
        >
          {fullPct > 14 && (
            <span className="whitespace-nowrap px-3 text-xs font-bold text-ink">{Math.round(share * e)}%</span>
          )}
        </div>
      </div>
    </li>
  );
}

export function ProcessTimeline({ phases }: { phases: Phase[] }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  const total = phases.reduce((a, ph) => a + ph.weeks, 0) || 1;
  const starts = phases.map((_, i) => phases.slice(0, i).reduce((a, ph) => a + ph.weeks, 0));
  const longest = phases.reduce((a, ph) => (ph.weeks > a.weeks ? ph : a), phases[0]);

  const summary = useProgress(inView, 1400);
  const liveDelay = 200 + phases.length * 550 + 700;
  const live = useProgress(inView, 600, liveDelay);

  const axis = Array.from({ length: Math.floor(total) + 1 }, (_, k) => k).filter((k) => (total > 8 ? k % 2 === 0 : true));

  return (
    <div ref={ref}>
      {/* Summary tiles */}
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-xl border border-white/10 bg-white/[.03] p-4">
          <p className="font-heading text-2xl font-extrabold text-brand-cyan md:text-3xl">
            {fmt(total * easeOutCubic(summary), decimalsOf(total))}
            <span className="ml-1 text-sm font-semibold text-white/60">{total === 1 ? "week" : "weeks"}</span>
          </p>
          <p className="mt-1 text-xs text-white/50">Total duration</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[.03] p-4">
          <p className="font-heading text-2xl font-extrabold text-brand-cyan md:text-3xl">{Math.round(phases.length * easeOutCubic(summary))}</p>
          <p className="mt-1 text-xs text-white/50">Delivery phases</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[.03] p-4">
          <p className="truncate font-heading text-sm font-bold text-white md:text-base">{longest.name}</p>
          <p className="mt-1 text-xs text-white/50">Longest phase · {formatWeeks(longest.weeks)}</p>
        </div>
      </div>

      {/* Week axis */}
      <div className="mt-8 hidden md:grid md:grid-cols-[250px_1fr] md:gap-6">
        <span />
        <div className="relative h-5">
          {axis.map((k) => (
            <span
              key={k}
              className="absolute -translate-x-1/2 text-[11px] text-white/40 first:translate-x-0"
              style={{ left: `${(k / total) * 100}%` }}
            >
              {k === 0 ? "Start" : `W${k}`}
            </span>
          ))}
        </div>
      </div>

      {/* Phases */}
      <ol className="mt-4 space-y-5 md:mt-2 md:space-y-3">
        {phases.map((ph, i) => (
          <PhaseRow key={ph.name} phase={ph} index={i} start={starts[i]} total={total} active={inView} />
        ))}
      </ol>

      {/* Live marker */}
      <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6" style={{ opacity: live }}>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-cyan text-ink">
          <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden>
            <path d="M3 8.5 L6.5 12 L13 4.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <p className="text-sm text-white/70">
          Project delivered by <span className="font-semibold text-white">{formatRange(total - 0.001, total)}</span>.
        </p>
      </div>
    </div>
  );
}