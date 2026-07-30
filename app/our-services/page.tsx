import type { Metadata } from "next";
import Link from "next/link";
import { ServicesGrid } from "@/components/ServicesGrid";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Deep cleaning, window cleaning, gutter cleaning, power washing, spring cleaning, post-construction cleanup, and solar panel cleaning in Ogden, UT.",
};

export default function OurServicesPage() {
  const postConstruction = services.find((s) => s.slug === "post-construction-cleanup")!;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10 max-w-2xl">
        <h1 className="text-3xl font-bold text-brand-900 sm:text-4xl">Our Services</h1>
        <p className="mt-3 text-brand-700">
          Every service below is performed by trained, insured technicians and backed by the same standard: show up
          on time, do the job right, and leave the space better than we found it.
        </p>
      </div>

      <ServicesGrid />

      <section className="mt-14 rounded-xl bg-brand-50 p-8">
        <h2 className="text-xl font-bold text-brand-900">A Well-Kept Home Is An Investment</h2>
        <p className="mt-3 max-w-2xl text-brand-700">
          Regular professional cleaning does more than keep a home looking good — it protects the surfaces,
          fixtures, and systems that are expensive to replace. Clean gutters prevent water damage, clean solar
          panels keep producing at full efficiency, and a well-maintained exterior protects your home&apos;s biggest
          asset: its resale value.
        </p>
      </section>

      <section className="mt-8 rounded-xl border border-brand-200 p-8">
        <h2 className="text-xl font-bold text-brand-900">Just Finished A Remodel Or New Build?</h2>
        <p className="mt-3 max-w-2xl text-brand-700">{postConstruction.intro}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href={`/${postConstruction.slug}/`}
            className="inline-block rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            Learn About Post-Construction Cleanup
          </Link>
          {postConstruction.checklistHref && (
            <a
              href={postConstruction.checklistHref}
              className="inline-block rounded-full border border-brand-600 px-5 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-600 hover:text-white"
            >
              Download The Free Checklist
            </a>
          )}
        </div>
      </section>
    </div>
  );
}
