import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = (await request.json()) as { email?: string };

  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  // TODO: wire up to Resend Audiences, Mailchimp, or another list provider.
  // Until then, signups are only logged server-side.
  console.log("[newsletter signup]", { email });

  return NextResponse.json({ ok: true });
}
