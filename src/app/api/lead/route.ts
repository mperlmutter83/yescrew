import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const FORM_KEY = "ae72d7c1b4e54c5a994fbcb00da6bef2";
const CRM_ENDPOINT = `https://yescrew-dashboard.vercel.app/api/forms/${FORM_KEY}/submit`;

// NOTE: yescrew.com is not yet verified on this Resend account, so
// notifications send FROM the verified yesidoinc.com sender for now.
const FROM = "Yes Crew Website <info@yesidoinc.com>";
const NOTIFY_TO = "yescrewnetwork@gmail.com";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function sendNotification(opts: {
  name: string;
  phone: string;
  email: string | null;
  serviceNeeded: string | null;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  const subject = `New Yes Crew opt-in — ${opts.name}`;
  const rows = [
    `<p><strong>Name:</strong> ${escapeHtml(opts.name)}</p>`,
    `<p><strong>Phone:</strong> ${escapeHtml(opts.phone)}</p>`,
    opts.email ? `<p><strong>Email:</strong> ${escapeHtml(opts.email)}</p>` : "",
    opts.serviceNeeded
      ? `<p><strong>Details:</strong> ${escapeHtml(opts.serviceNeeded)}</p>`
      : "",
  ].filter(Boolean);

  const html = `
    <div style="font-family:system-ui,-apple-system,sans-serif;font-size:15px;color:#111;">
      <h2 style="margin:0 0 12px;">New opt-in from yescrew.com</h2>
      ${rows.join("\n")}
      <hr style="border:none;border-top:1px solid #eee;margin:20px 0;" />
      <p style="font-size:13px;color:#888;">Reply directly to this email to respond to the applicant.</p>
    </div>
  `;

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: FROM,
      to: NOTIFY_TO,
      replyTo: opts.email || undefined,
      subject,
      html,
    });
  } catch {
    // Never fail the lead because of an email error
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const hasPhone = typeof body.phone === "string" && body.phone.trim().length > 0;

    if (hasPhone) {
      // Full submission → CRM (phone is the CRM's contact key)
      const res = await fetch(CRM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: body.name,
          email: body.email,
          phone: body.phone,
          service_needed: body.service_needed,
          company_website: body.company_website,
          elapsed_ms: body.elapsed_ms,
          submission_id: body.submission_id,
        }),
      });

      if (res.status === 201) {
        await sendNotification({
          name: body.name || "Unknown",
          phone: body.phone || "",
          email: body.email || null,
          serviceNeeded: body.service_needed || null,
        });
        return NextResponse.json({ ok: true }, { status: 201 });
      }
      return NextResponse.json({ ok: false }, { status: res.status });
    }

    // No phone → the CRM can't accept it (contacts are phone-keyed).
    // Still deliver the lead by email so no applicant is lost.
    await sendNotification({
      name: body.name || "Unknown",
      phone: "(not provided)",
      email: body.email || null,
      serviceNeeded: body.service_needed || null,
    });
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
