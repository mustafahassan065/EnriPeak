import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { transporter, teamEmail, userConfirmEmail, oneLine } from "@/lib/mail";
import { guard } from "@/lib/antibot";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  phone: z.string().trim().max(25).regex(/^[0-9+()\-\s]*$/, "Invalid phone").optional().or(z.literal("")),
  service: z.enum(["Web Development", "AI Solutions"]),
  note: z.string().trim().max(1500).optional().or(z.literal("")),
});

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const g = await guard(req, body);
  if (!g.ok) return g.silent ? NextResponse.json({ ok: true }) : NextResponse.json({ error: g.error }, { status: g.status });

  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Please check your details and try again." }, { status: 400 });
  const d = parsed.data;

  try {
    await transporter.sendMail({
      from: `"EnriPeak Website" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: oneLine(d.email),
      subject: `New enquiry (${d.service}): ${oneLine(d.name)}`,
      html: teamEmail("New Contact Form Enquiry", [
        ["Name", d.name], ["Email", d.email], ["Phone", d.phone || ""], ["Service", d.service], ["Note", d.note || ""],
      ]),
    });
    // user ko confirmation (fail ho to bhi request fail nahi hogi)
    transporter
      .sendMail({
        from: `"EnriPeak" <${process.env.SMTP_USER}>`,
        to: d.email,
        subject: "We received your message – EnriPeak",
        html: userConfirmEmail(d.name),
      })
      .catch((e) => console.error("confirm mail error", e));

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("contact mail error", e);
    return NextResponse.json({ error: "Could not send. Please try again." }, { status: 500 });
  }
}