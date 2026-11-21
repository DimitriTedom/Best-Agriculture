import nodemailer from "nodemailer";

export interface ContactInquiryPayload {
  fullName: string;
  phone: string;
  email?: string;
  subject: string;
  message: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function isSmtpConfigured(): boolean {
  return Boolean(process.env.SMTP_USER && process.env.SMTP_PASS);
}

export async function sendContactInquiryEmail(payload: ContactInquiryPayload) {
  const host = process.env.SMTP_HOST || "smtp.hostinger.com";
  const port = Number(process.env.SMTP_PORT || "465");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    throw new Error("SMTP credentials (SMTP_USER / SMTP_PASS) are not configured.");
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });

  const toEmail = process.env.CONTACT_TO_EMAIL || user;
  const ccEmail = process.env.CONTACT_CC_EMAIL || undefined;

  const safeName = escapeHtml(payload.fullName);
  const safePhone = escapeHtml(payload.phone);
  const safeEmail = payload.email ? escapeHtml(payload.email) : "Non renseigné";
  const safeSubject = escapeHtml(payload.subject);
  const safeMessage = escapeHtml(payload.message).replace(/\n/g, "<br />");

  const textBody = [
    "Nouvelle demande reçue depuis best-agriculture.com",
    "--------------------------------------------------",
    `Nom complet : ${payload.fullName}`,
    `Téléphone / WhatsApp : ${payload.phone}`,
    `Email : ${payload.email || "Non renseigné"}`,
    `Objet : ${payload.subject}`,
    "",
    "Message :",
    payload.message,
  ].join("\n");

  const htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; color: #163525; background-color: #faf8f4; padding: 24px; border-radius: 16px; border: 1px solid #e5e0d5;">
      <div style="background-color: #163525; color: #ffffff; padding: 20px 24px; border-radius: 12px;">
        <p style="margin: 0; font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: #fcd647; font-weight: 700;">BEST AGRICULTURE • Nouveau Message</p>
        <h1 style="margin: 6px 0 0; font-size: 20px; font-weight: 700;">${safeSubject}</h1>
      </div>

      <table style="width: 100%; border-collapse: collapse; margin-top: 20px; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e0d5;">
        <tr>
          <td style="padding: 12px 16px; font-size: 13px; color: #5c6b61; border-bottom: 1px solid #f0ece3; width: 38%;">Nom complet</td>
          <td style="padding: 12px 16px; font-size: 14px; font-weight: 600; color: #163525; border-bottom: 1px solid #f0ece3;">${safeName}</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; font-size: 13px; color: #5c6b61; border-bottom: 1px solid #f0ece3;">Téléphone / WhatsApp</td>
          <td style="padding: 12px 16px; font-size: 14px; font-weight: 600; color: #163525; border-bottom: 1px solid #f0ece3;">${safePhone}</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; font-size: 13px; color: #5c6b61;">Email</td>
          <td style="padding: 12px 16px; font-size: 14px; color: #163525;">${safeEmail}</td>
        </tr>
      </table>

      <div style="margin-top: 18px; background: #ffffff; padding: 18px 20px; border-radius: 12px; border: 1px solid #e5e0d5;">
        <p style="margin: 0 0 8px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #5c6b61;">Message du client</p>
        <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #1d2b22;">${safeMessage}</p>
      </div>

      <p style="margin: 20px 0 0; font-size: 12px; color: #6b7a70; text-align: center;">
        Envoyé depuis le formulaire de contact de <strong>best-agriculture.com</strong>
      </p>
    </div>
  `;

  await transporter.sendMail({
    from: `"BEST AGRICULTURE (Site Web)" <${user}>`,
    to: toEmail,
    cc: ccEmail,
    replyTo: payload.email || undefined,
    subject: `[Site Web] ${payload.subject} — ${payload.fullName}`,
    text: textBody,
    html: htmlBody,
  });
}
