import { NextResponse } from "next/server";
import { z } from "zod";
import { isSmtpConfigured, sendContactInquiryEmail } from "@/lib/mailer";

export const runtime = "nodejs";

const contactSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  phone: z.string().trim().min(6).max(30),
  email: z.string().trim().email().optional().or(z.literal("")),
  subject: z.string().trim().min(2).max(120),
  message: z.string().trim().min(10).max(2000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Invalid form data",
          issues: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    if (isSmtpConfigured()) {
      await sendContactInquiryEmail({
        fullName: parsed.data.fullName,
        phone: parsed.data.phone,
        email: parsed.data.email || undefined,
        subject: parsed.data.subject,
        message: parsed.data.message,
      });
    } else {
      console.warn(
        "[Best Agriculture Contact] SMTP_USER/SMTP_PASS not set — logged inquiry without sending email.",
        {
          fullName: parsed.data.fullName,
          phone: parsed.data.phone,
          subject: parsed.data.subject,
        }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[Best Agriculture Contact Error]", error);
    return NextResponse.json(
      { ok: false, error: "Unable to send inquiry right now." },
      { status: 500 }
    );
  }
}
