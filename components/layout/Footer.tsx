import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/data/site";
import { services } from "@/lib/data/services";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-900 text-brand-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">Newsletter Signup</h2>
          <p className="mb-3 text-sm text-brand-200">
            Seasonal cleaning tips and occasional service reminders — no spam.
          </p>
          <NewsletterForm />
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">Contact</h2>
          <ul className="space-y-2 text-sm text-brand-200">
            <li>
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>Fax: {site.fax}</li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.mapLinkHref} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {site.officeAddress.line1}
                <br />
                {site.officeAddress.line2}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">Service Areas</h2>
          <ul className="space-y-2 text-sm text-brand-200">
            {site.serviceAreaCities.map((c) => (
              <li key={c.slug}>
                <Link href={`/${c.slug}/`} className="hover:text-white">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="mb-3 mt-6 text-sm font-semibold uppercase tracking-wide text-white">Site Map</h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-brand-200">
            <li>
              <Link href="/our-services/" className="hover:text-white">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/how-we-work/" className="hover:text-white">
                How We Work
              </Link>
            </li>
            <li>
              <Link href="/faq/" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/careers/" className="hover:text-white">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/blog/" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact/" className="hover:text-white">
                Contact
              </Link>
            </li>
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}/`} className="hover:text-white">
                  {s.navTitle ?? s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">Partners</h2>
          <a
            href={site.partner.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 inline-block rounded-lg bg-white p-2.5"
          >
            <Image src="/images/partner-healthy-homes.png" alt={site.partner.name} width={90} height={57} />
          </a>
          <a
            href={site.charity.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-white p-2.5"
          >
            <Image
              src="/images/badge-cleaning-for-a-reason.png"
              alt={`Proud sponsor of ${site.charity.name}`}
              width={64}
              height={64}
            />
          </a>

          <h2 className="mb-2 mt-6 text-sm font-semibold uppercase tracking-wide text-white">We Accept</h2>
          <p className="text-sm text-brand-200">{site.acceptedCards.join(" · ")}</p>
        </div>
      </div>

      <div className="border-t border-brand-800 px-4 py-4 text-center text-xs text-brand-300">
        © {year} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
