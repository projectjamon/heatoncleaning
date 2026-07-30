import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How We Work",
  description: "Our 4-step process, from your first call to a scheduled cleaning — no surprises.",
};

const steps = [
  {
    number: "1",
    title: "You Call Us",
    body: "Tell us what you need cleaned and roughly when. We'll ask a few questions to understand the scope.",
  },
  {
    number: "2",
    title: "In-Home Consultation",
    body: "For larger jobs, we'll walk the space with you in person so the proposal reflects the actual work, not a guess.",
  },
  {
    number: "3",
    title: "Written Proposal",
    body: "You get a clear, itemized price before any work begins — no surprise charges once we're on site.",
  },
  {
    number: "4",
    title: "We Schedule And Clean",
    body: "We show up on time, do the work to the standard we quoted, and walk through the results with you.",
  },
];

const appreciate = [
  "Dependable scheduling — we show up when we say we will",
  "Professional, background-checked technicians",
  "Genuine expertise across every service we offer",
  "Clear, upfront pricing with no hidden fees",
  "A reliable point of contact if anything needs adjusting",
];

export default function HowWeWorkPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-brand-900 sm:text-4xl">How We Work</h1>
      <p className="mt-3 text-brand-700">
        A simple, predictable process from your first call to a finished job.
      </p>

      <ol className="mt-10 space-y-8">
        {steps.map((step) => (
          <li key={step.number} className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 font-bold text-white">
              {step.number}
            </span>
            <div>
              <h2 className="font-semibold text-brand-900">{step.title}</h2>
              <p className="mt-1 text-brand-700">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <section className="mt-14 rounded-xl bg-brand-50 p-8">
        <h2 className="text-xl font-bold text-brand-900">What You&apos;ll Appreciate</h2>
        <ul className="mt-4 list-disc space-y-1.5 pl-5 text-brand-700">
          {appreciate.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <div className="mt-12 rounded-xl bg-brand-900 p-8 text-center text-white">
        <p className="text-lg font-semibold">Ready for step one? Give us a call or send a message.</p>
        <Link
          href="/contact/"
          className="mt-4 inline-block rounded-full bg-accent-500 px-6 py-3 font-semibold hover:bg-accent-600"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
