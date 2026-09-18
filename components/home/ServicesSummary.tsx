import Link from "next/link";
import { services } from "@/lib/data/services";

export function ServicesSummary() {
  return (
    <section className="bg-brand-50 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8">
          <span className="mb-2 inline-block text-xs font-bold uppercase tracking-widest text-accent-500">
            What We Offer
          </span>
          <h2 className="text-2xl font-bold text-brand-900 sm:text-3xl">Our Services</h2>
          <p className="mt-2 max-w-xl text-brand-700">
            From a single deep clean to a standing maintenance schedule — here&apos;s what we do.
          </p>
        </div>

        <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}/`}
              className="w-[220px] shrink-0 rounded-lg border border-brand-100 bg-white p-5 transition hover:border-brand-300 hover:shadow-md sm:w-auto sm:shrink"
            >
              <h3 className="font-heading font-bold text-brand-900">{s.navTitle ?? s.title}</h3>
              <p className="mt-2 text-sm text-brand-600">{s.tagline}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/our-services/"
            className="inline-block rounded-full border border-brand-900 px-6 py-2.5 text-sm font-semibold text-brand-900 hover:bg-brand-900 hover:text-white"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
