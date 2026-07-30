import Link from "next/link";
import { services } from "@/lib/data/services";

export function ServicesSummary() {
  return (
    <section className="bg-brand-50 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-brand-900 sm:text-3xl">Our Services</h2>
          <p className="mt-2 text-brand-700">
            From a single deep clean to a standing maintenance schedule — here&apos;s what we do.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}/`}
              className="rounded-lg border border-brand-100 bg-white p-5 transition hover:border-brand-300 hover:shadow-md"
            >
              <h3 className="font-semibold text-brand-900">{s.navTitle ?? s.title}</h3>
              <p className="mt-2 text-sm text-brand-600">{s.tagline}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/our-services/"
            className="inline-block rounded-full border border-brand-600 px-6 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-600 hover:text-white"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
