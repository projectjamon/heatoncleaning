import type { Metadata } from "next";
import { FaqAccordion } from "@/components/FaqAccordion";
import { faqs } from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about scheduling, weather policy, safety, and more.",
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-brand-900 sm:text-4xl">Frequently Asked Questions</h1>
      <p className="mt-3 text-brand-700">
        Don&apos;t see your question here? <a href="/contact/" className="text-brand-600 underline">Contact us</a> and
        we&apos;ll get you an answer.
      </p>
      <div className="mt-8">
        <FaqAccordion items={faqs} />
      </div>
    </div>
  );
}
