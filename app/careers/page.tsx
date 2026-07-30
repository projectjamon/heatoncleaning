import type { Metadata } from "next";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Extreme Cleaning Services team — physical requirements, open roles, and how to apply.",
};

const requirements = [
  "Comfortable working on ladders and, for some roles, roofs",
  "Able to lift and carry 50+ lbs repeatedly throughout a shift",
  "Reliable transportation to our Ogden office and job sites",
  "Professional appearance and grooming standards",
  "Able to pass a drug screening — we maintain a drug-free workplace",
  "Comfortable working outdoors in a range of weather conditions",
];

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-brand-900 sm:text-4xl">Careers</h1>
      <p className="mt-3 text-brand-700">
        We&apos;re always interested in hearing from reliable, hard-working people who take pride in a job done right.
        Cleaning and exterior maintenance work is physical — here&apos;s what it takes.
      </p>

      <h2 className="mt-10 text-xl font-bold text-brand-900">Physical Requirements</h2>
      <ul className="mt-4 list-disc space-y-1.5 pl-5 text-brand-700">
        {requirements.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>

      <h2 className="mt-10 text-xl font-bold text-brand-900">Open Roles</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <a
          href="/downloads/team-lead-job-description.pdf"
          className="rounded-lg border border-brand-200 p-5 hover:border-brand-400 hover:shadow-md"
        >
          <h3 className="font-semibold text-brand-900">Team Lead</h3>
          <p className="mt-1 text-sm text-brand-600">Download the full job description (PDF)</p>
        </a>
        <a
          href="/downloads/cleaning-technician-job-description.pdf"
          className="rounded-lg border border-brand-200 p-5 hover:border-brand-400 hover:shadow-md"
        >
          <h3 className="font-semibold text-brand-900">Cleaning Technician</h3>
          <p className="mt-1 text-sm text-brand-600">Download the full job description (PDF)</p>
        </a>
      </div>

      <section className="mt-10 rounded-xl bg-brand-50 p-8">
        <h2 className="text-xl font-bold text-brand-900">How To Apply</h2>
        <p className="mt-3 text-brand-700">
          We accept applications in person at our Ogden office. Review the job description for the role you&apos;re
          interested in, bring a printed resume, and stop by during regular business hours.
        </p>
        <p className="mt-3 text-brand-700">
          {site.officeAddress.line1}, {site.officeAddress.line2}
        </p>
        <p className="mt-1 text-brand-700">
          Questions? Call {site.phone} or email{" "}
          <a href={`mailto:${site.email}`} className="text-brand-600 underline">
            {site.email}
          </a>
          .
        </p>
      </section>
    </div>
  );
}
