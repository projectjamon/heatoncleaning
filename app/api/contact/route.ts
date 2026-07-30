import { NextResponse } from "next/server";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
  turnstileToken?: string | null;
};

async function verifyTurnstile(token: string | null | undefined) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  // Not configured yet in this env — skip verification rather than block
  // every submission. Make sure TURNSTILE_SECRET_KEY is set in production.
  if (!secret) return true;
  if (!token) return false;

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  });
  const data = await res.json();
  return data.success === true;
}

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;
  const { firstName, lastName, email, subject, message, turnstileToken } = body;

  if (!firstName || !lastName || !email || !subject || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const humanVerified = await verifyTurnstile(turnstileToken);
  if (!humanVerified) {
    return NextResponse.json({ error: "Spam check failed. Please try again." }, { status: 400 });
  }

  // TODO: send this via Resend/Formspree/etc. once a provider is chosen.
  // Until then, submissions are only logged server-side — nothing is
  // actually emailed to customerservice@extremecleaning.com yet.
  console.log("[contact form submission]", { firstName, lastName, email, subject, message });

  return NextResponse.json({ ok: true });
}
