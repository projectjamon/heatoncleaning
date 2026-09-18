import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/data/services";

export function ServicesGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {services.map((s) => (
        <Link
          key={s.slug}
          href={`/${s.slug}/`}
          className="group overflow-hidden rounded-xl border border-brand-100 transition hover:shadow-lg"
        >
          <div className="relative h-40 w-full">
            <Image src={s.heroImage} alt={s.heroImageAlt} fill className="object-cover" />
          </div>
          <div className="p-5">
            <h3 className="font-semibold text-brand-900 group-hover:text-brand-600">{s.title}</h3>
            <p className="mt-2 text-sm text-brand-600">{s.tagline}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
