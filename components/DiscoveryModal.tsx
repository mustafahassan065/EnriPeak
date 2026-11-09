"use client";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { ArrowUpRight, CalendarCheck, Loader2, X } from "lucide-react";
import { Honeypot, inputCls, useSecureForm } from "./forms/useSecureForm";

const Ctx = createContext<{ open: () => void }>({ open: () => {} });
export const useDiscovery = () => useContext(Ctx);

const CALENDLY = process.env.NEXT_PUBLIC_CALENDLY_URL!;

function Modal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "" });
  const { status, error, submit } = useSecureForm<typeof form>("/api/discovery");

  const calendlyUrl = `${CALENDLY}${CALENDLY.includes("?") ? "&" : "?"}name=${encodeURIComponent(form.name)}&email=${encodeURIComponent(form.email)}`;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  useEffect(() => {
    if (status !== "done") return;
    const t = setTimeout(() => { window.location.href = calendlyUrl; }, 1500);
    return () => clearTimeout(t);
  }, [status, calendlyUrl]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dc-title"
    >
      <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#0B0F14] p-6 shadow-[0_0_60px_rgba(0,255,255,.12)] sm:p-8">
        <button onClick={onClose} aria-label="Close" className="absolute right-4 top-4 rounded-full p-1.5 text-white/50 transition hover:bg-white/10 hover:text-white">
          <X size={18} />
        </button>

        {status === "done" ? (
          <div className="py-6 text-center">
            <CalendarCheck className="mx-auto mb-4 text-brand-cyan" size={40} />
            <h3 className="font-heading text-2xl font-extrabold">You're all set!</h3>
            <p className="mt-2 text-sm text-white/60">Taking you to pick a time that suits you…</p>
            <a href={calendlyUrl} className="btn-amber mt-6 inline-flex px-6 py-3 text-sm">Open calendar now</a>
          </div>
        ) : (
          <form onSubmit={(e) => submit(e, form)} className="relative space-y-4">
            <h3 id="dc-title" className="font-heading text-2xl font-extrabold">Book your free discovery call</h3>
            <p className="text-sm text-white/60">Tell us who you are, then choose a time on the next step.</p>
            <Honeypot />
            <input className={inputCls} required minLength={2} maxLength={80} placeholder="Your name" autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input className={inputCls} required type="email" maxLength={120} placeholder="Your email" autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            {error && <p className="text-sm text-red-400">{error}</p>}
            <button disabled={status === "loading"} className="btn-amber flex w-full items-center justify-center gap-2 px-6 py-3.5 text-sm disabled:opacity-60">
              {status === "loading" ? <><Loader2 size={16} className="animate-spin" /> Sending…</> : <>Continue to Calendar <ArrowUpRight size={16} /></>}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function DiscoveryProvider({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  const open = useCallback(() => setShow(true), []);
  return (
    <Ctx.Provider value={{ open }}>
      {children}
      {show && <Modal onClose={() => setShow(false)} />}
    </Ctx.Provider>
  );
}