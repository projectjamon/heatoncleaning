"use client";

import { useState, type FormEvent } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <p className="text-sm text-brand-200">Thanks for signing up!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="min-w-0 flex-1 rounded-md border border-brand-600 bg-brand-800 px-3 py-2 text-sm text-white placeholder:text-brand-300 focus:outline-none focus:ring-2 focus:ring-accent-400"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="shrink-0 rounded-md bg-accent-500 px-4 py-2 text-sm font-semibold text-white hover:bg-accent-600 disabled:opacity-60"
      >
        {status === "submitting" ? "Signing up…" : "Sign Up"}
      </button>
      {status === "error" && (
        <p className="text-sm text-accent-400 sm:ml-2 sm:self-center">Something went wrong — try again.</p>
      )}
    </form>
  );
}
