import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { transporter, teamEmail, userConfirmEmail, oneLine } from "@/lib/mail";
import { guard } from "@/lib/antibot";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  phone: z.string().trim().max(25).regex(/^[0-9+()\-\s]*$/, "Invalid phone").optional().or(z.literal("")),
  service: z.enum(["Web Development", "AI Solutions", "Both"]),
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
    // 1) Admin/team mail — must succeed
    await transporter.sendMail({
      from: `"EnriPeak Website" <info@enripeak.com>`,
      to: process.env.MAIL_TO,
      replyTo: oneLine(d.email),
      subject: `New enquiry (${d.service}): ${oneLine(d.name)}`,
      html: teamEmail("New Contact Form Enquiry", [
        ["Name", d.name], ["Email", d.email], ["Phone", d.phone || ""], ["Service", d.service], ["Note", d.note || ""],
      ]),
    });

    // 2) User confirmation — awaited so it actually sends before response ends,
    //    but wrapped in try/catch so a failure doesn't fail the whole request.
    try {
      await transporter.sendMail({
        from: `"EnriPeak" <info@enripeak.com>`,
        to: d.email,
        subject: "We received your message – EnriPeak",
        html: userConfirmEmail(d.name),
      });
    } catch (e) {
      console.error("confirm mail error", e);
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("contact mail error", e);
    return NextResponse.json({ error: "Could not send. Please try again." }, { status: 500 });
  }
}