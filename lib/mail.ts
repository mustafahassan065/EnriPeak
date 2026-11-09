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

/**
 * Professional email shell:
 * - White background, black text
 * - No emoji, no brand colors, no gradients
 * - Clean border + subtle header rule
 */
const shell = (title: string, body: string) => `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#ffffff;">
    <div style="max-width:600px;margin:0 auto;padding:40px 24px;font-family:Arial,Helvetica,sans-serif;color:#111111;background:#ffffff;">
      <div style="border-bottom:2px solid #111111;padding-bottom:12px;margin-bottom:24px;">
        <span style="font-size:16px;font-weight:700;color:#111111;letter-spacing:0.5px;">EnriPeak</span>
      </div>
      <h1 style="margin:0 0 20px;font-size:20px;font-weight:600;color:#111111;line-height:1.3;">${title}</h1>
      ${body}
      <div style="border-top:1px solid #e5e5e5;margin-top:32px;padding-top:16px;">
        <p style="margin:0;font-size:12px;line-height:1.6;color:#666666;">
          EnriPeak &middot; Web Development &amp; AI Solutions<br>
          <a href="mailto:info@enripeak.com" style="color:#111111;text-decoration:underline;">info@enripeak.com</a>
        </p>
      </div>
    </div>
  </body>
</html>`;

/** One field row: label (bold black) + value (black) */
const row = (k: string, v: string) => `
  <tr>
    <td style="padding:10px 14px;border:1px solid #e5e5e5;background:#fafafa;font-size:13px;font-weight:600;color:#111111;width:130px;vertical-align:top;">${esc(k)}</td>
    <td style="padding:10px 14px;border:1px solid #e5e5e5;font-size:14px;color:#111111;line-height:1.6;">${
      v ? esc(v).replace(/\n/g, "<br>") : "&mdash;"
    }</td>
  </tr>`;

export const teamEmail = (title: string, fields: [string, string][]) =>
  shell(
    title,
    `<table style="width:100%;border-collapse:collapse;margin:0;">${fields
      .map(([k, v]) => row(k, v))
      .join("")}</table>`
  );

export const userConfirmEmail = (name: string) => {
  const first = (name || "").trim().split(" ")[0] || "there";
  return shell(
    "We received your message",
    `<p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#111111;">Dear ${esc(first)},</p>
     <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#111111;">
       Thank you for contacting EnriPeak. We have received your enquiry and our team will respond within 24 hours.
     </p>
     <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#111111;">
       If your matter is urgent, you may reply directly to this email and we will prioritise your request.
     </p>
     <p style="margin:0;font-size:15px;line-height:1.7;color:#111111;">
       Kind regards,<br>
       <strong>EnriPeak Team</strong>
     </p>`
  );
};