import nodemailer from "nodemailer";

const port = Number(process.env.SMTP_PORT || 465);

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port,
  secure: port === 465,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});

export const esc = (s = "") =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

/** Line breaks hata do taake email headers me injection na ho sake. */
export const oneLine = (s = "") => s.replace(/[\r\n]+/g, " ").trim();

const shell = (title: string, body: string) => `
<div style="background:#0B0F14;padding:32px;font-family:Arial,sans-serif;color:#fff">
  <div style="max-width:560px;margin:auto;background:#111823;border:1px solid #1f2a37;border-radius:16px;padding:28px">
    <h2 style="margin:0 0 16px;color:#00FFFF">${title}</h2>${body}
    <p style="margin-top:28px;color:#7b8794;font-size:12px">EnriPeak · Web Development &amp; AI Solutions</p>
  </div>
</div>`;

const row = (k: string, v: string) =>
  `<p style="margin:8px 0;color:#c9d1d9"><b style="color:#FFBF00">${k}:</b> ${esc(v) || "—"}</p>`;

export const teamEmail = (title: string, fields: [string, string][]) =>
  shell(title, fields.map(([k, v]) => row(k, v)).join(""));

export const userConfirmEmail = (name: string) =>
  shell(
    "We got your message ✔",
    `<p style="color:#c9d1d9;line-height:1.6">Hi ${esc(name)},<br/><br/>
     Thanks for reaching out to EnriPeak. Our team will reply within 24 hours.
     If it's urgent, just reply to this email.</p>`
  );