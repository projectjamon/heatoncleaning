import Image from "next/image";
import Link from "next/link";
import type { City } from "@/lib/data/cities";
import { services } from "@/lib/data/services";

export function CityPageTemplate({ city }: { city: City }) {
  return (
    <>
      <section className="relative">
        <div className="relative h-[320px] w-full sm:h-[400px]">
          <Image src={city.heroImage} alt={city.heroImageAlt} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-brand-900/55" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-4xl px-6 text-center text-white">
            <h1 className="text-3xl font-bold sm:text-4xl">
              Cleaning Services in {city.name}, {city.state}
            </h1>
            <Link
              href="/contact/"
              className="mt-6 inline-block rounded-full bg-accent-500 px-6 py-3 font-semibold text-white hover:bg-accent-600"
            >
              Get A Free Quote
            </Link>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-12">
        <p className="text-lg text-brand-700">{city.intro}</p>
        <p className="mt-4 text-brand-700">{city.localNote}</p>

        <h2 className="mt-10 text-xl font-bold text-brand-900">
          Services Available in {city.name}
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}/`}
              className="rounded-lg border border-brand-100 p-4 transition hover:border-brand-300 hover:shadow-md"
            >
              <h3 className="font-semibold text-brand-900">{s.navTitle ?? s.title}</h3>
              <p className="mt-1 text-sm text-brand-600">{s.tagline}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-xl bg-brand-900 p-8 text-center text-white">
          <p className="text-lg font-semibold">
            Ready to schedule service in {city.name}?
          </p>
          <Link
            href="/contact/"
            className="mt-4 inline-block rounded-full bg-accent-500 px-6 py-3 font-semibold hover:bg-accent-600"
          >
            Contact Us
          </Link>
        </div>
      </article>
    </>
  );
}
