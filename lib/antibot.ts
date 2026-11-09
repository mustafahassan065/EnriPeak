import { NextRequest } from "next/server";

const hits = new Map<string, { n: number; t: number }>();


function rateLimited(key: string, limit: number, windowMs: number) {
  const now = Date.now();
  const h = hits.get(key);
  if (!h || now - h.t > windowMs) {
    hits.set(key, { n: 1, t: now });
    return false;
  }
  h.n++;
  return h.n > limit;
}

const getIp = (req: NextRequest) =>
  req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";

type Guard = { ok: true } | { ok: false; status: number; error: string; silent?: boolean };

export async function guard(req: NextRequest, b: any): Promise<Guard> {
  // 1. honeypot: bot ne chhupi field bhar di → fake success
  if (b?.website) return { ok: false, status: 200, error: "", silent: true };

  // 2. time trap: 3 second se pehle submit → fake success
  if (!b?.ts || Date.now() - Number(b.ts) < 3000) return { ok: false, status: 200, error: "", silent: true };

  // 3. rate limit: ek IP, 10 minute me max 5
  if (rateLimited(getIp(req), 5, 10 * 60_000))
    return { ok: false, status: 429, error: "Too many attempts. Please try again later." };

  return { ok: true };
}