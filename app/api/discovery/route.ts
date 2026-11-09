import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { transporter, teamEmail, oneLine } from "@/lib/mail";
import { guard } from "@/lib/antibot";



const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
});

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const g = await guard(req, body);
  if (!g.ok) return g.silent ? NextResponse.json({ ok: true }) : NextResponse.json({ error: g.error }, { status: g.status });

  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Please enter a valid name and email." }, { status: 400 });
  const { name, email } = parsed.data;

  try {
    await transporter.sendMail({
      from: `"EnriPeak Website" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: oneLine(email),
      subject: `New discovery call request: ${oneLine(name)}`,
      html: teamEmail("New Discovery Call Request", [["Name", name], ["Email", email]]),
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("discovery mail error", e);
    return NextResponse.json({ error: "Could not send. Please try again." }, { status: 500 });
  }
}