"use client";
import { useState } from "react";
import { CheckCircle2, ChevronDown, Loader2, Send } from "lucide-react";
import { Honeypot, inputCls, useSecureForm } from "./useSecureForm";

const SERVICES = ["Web Development", "AI Solutions", "Both"] as const;
type Service = (typeof SERVICES)[number];

export default function ContactForm() {
  const [f, setF] = useState<{ name: string; email: string; phone: string; service: Service; note: string }>({
    name: "",
    email: "",
    phone: "",
    service: "Web Development",
    note: "",
  });
  const { status, error, submit } = useSecureForm<typeof f>("/api/contact");

  if (status === "done")
    return (
      <div className="flex h-full min-h-[360px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[.03] p-8 text-center">
        <CheckCircle2 className="mb-4 text-brand-cyan" size={44} />
        <h3 className="font-heading text-2xl font-extrabold">Message sent!</h3>
        <p className="mt-2 max-w-sm text-sm text-white/60">
          Thanks, {f.name.split(" ")[0]}. We've emailed you a confirmation and will reply within 24 hours.
        </p>
      </div>
    );

  return (
    <form onSubmit={(e) => submit(e, f)} className="relative space-y-4 rounded-2xl border border-white/10 bg-white/[.03] p-6 sm:p-8">
      <Honeypot />
      <div className="grid gap-4 sm:grid-cols-2">
        <input className={inputCls} required minLength={2} maxLength={80} placeholder="Full name *" autoComplete="name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
        <input className={inputCls} required type="email" maxLength={120} placeholder="Email *" autoComplete="email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
      </div>
      <input className={inputCls} type="tel" maxLength={25} placeholder="Phone number (optional)" autoComplete="tel" value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} />

      {/* service dropdown */}
      <div>
        <label htmlFor="service" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
          Service *
        </label>
        <div className="relative">
          <select
            id="service"
            required
            value={f.service}
            onChange={(e) => setF({ ...f, service: e.target.value as Service })}
            className={`${inputCls} cursor-pointer appearance-none pr-11`}
          >
            {SERVICES.map((s) => (
              <option key={s} value={s} className="bg-[#0B0F14] text-white">
                {s}
              </option>
            ))}
          </select>
          <ChevronDown size={18} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/50" />
        </div>
      </div>

      <textarea className={`${inputCls} min-h-[120px] resize-y`} maxLength={1500} placeholder="Note (optional): tell us about your project" value={f.note} onChange={(e) => setF({ ...f, note: e.target.value })} />
      {error && <p className="text-sm text-red-400">{error}</p>}
      <button disabled={status === "loading"} className="btn-amber flex w-full items-center justify-center gap-2 px-6 py-3.5 text-sm disabled:opacity-60">
        {status === "loading" ? <><Loader2 size={16} className="animate-spin" /> Sending…</> : <>Send Message <Send size={16} /></>}
      </button>
    </form>
  );
}