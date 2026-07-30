import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/data/services";

export function ServicePageTemplate({ service }: { service: Service }) {
  return (
    <>
      <section className="relative">
        <div className="relative h-[320px] w-full sm:h-[400px]">
          <Image src={service.heroImage} alt={service.heroImageAlt} fill unoptimized priority className="object-cover" />
          <div className="absolute inset-0 bg-brand-900/55" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-4xl px-6 text-center text-white">
            <h1 className="text-3xl font-bold sm:text-4xl">{service.title}</h1>
            <p className="mt-3 text-lg text-brand-50">{service.tagline}</p>
            <Link
              href="/contact/"
              className="mt-6 inline-block rounded-full bg-accent-500 px-6 py-3 font-semibold text-white hover:bg-accent-600"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-12">
        <p className="text-lg text-brand-700">{service.intro}</p>

        <div className="mt-8 space-y-10">
          {service.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-bold text-brand-900">{section.heading}</h2>
              {section.paragraphs.map((p, i) => (
                <p key={i} className="mt-3 text-brand-700">
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-brand-700">
                  {section.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {service.checklistHref && (
          <div className="mt-10 rounded-lg border border-brand-200 bg-brand-50 p-5">
            <p className="font-semibold text-brand-900">Free Post-Construction Cleaning Checklist</p>
            <a
              href={service.checklistHref}
              className="mt-2 inline-block text-sm font-semibold text-brand-600 underline hover:text-brand-800"
            >
              Download the PDF checklist →
            </a>
          </div>
        )}

        <div className="mt-12 rounded-xl bg-brand-900 p-8 text-center text-white">
          <p className="text-lg font-semibold">{service.closingCta}</p>
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
