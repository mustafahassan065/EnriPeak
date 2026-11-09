"use client";
import {useEffect, useRef, useState } from "react";

export const inputCls =
  "w-full rounded-xl border border-white/10 bg-white/[.04] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-brand-cyan/60 focus:bg-white/[.06]";

/** Honeypot: insan ko nazar nahi aata, bots bhar dete hain. */
export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label>Website<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
    </div>
  );
}

export function useSecureForm<T extends object>(endpoint: string) {
  const startedAt = useRef(Date.now());
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);


  async function submit(e: React.FormEvent<HTMLFormElement>, data: T) {
    e.preventDefault();
    const website = (new FormData(e.currentTarget).get("website") as string) || "";
    setStatus("loading");
    setError("");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, website, ts: startedAt.current }),
      });
      const j = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(j.error || "Something went wrong.");
      setStatus("done");
      return true;
    } catch (err: any) {
      setError(err.message);
      setStatus("error");
      return false;
    }
  }

  return { status, error, submit };
}