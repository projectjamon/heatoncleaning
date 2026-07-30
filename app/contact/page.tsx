import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { GoogleMapEmbed } from "@/components/GoogleMapEmbed";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Extreme Cleaning Services — call, email, or send a message for a free quote.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold text-brand-900 sm:text-4xl">Contact Us</h1>
      <p className="mt-3 max-w-2xl text-brand-700">
        Send us a message and we&apos;ll get back to you with a quote, or reach out directly using the info below.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <ContactForm />

        <div>
          <GoogleMapEmbed />
          <dl className="mt-6 space-y-3 text-brand-700">
            <div>
              <dt className="text-sm font-semibold text-brand-900">Phone</dt>
              <dd>
                <a href={site.phoneHref} className="hover:text-brand-600">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-brand-900">Fax</dt>
              <dd>{site.fax}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-brand-900">Email</dt>
              <dd>
                <a href={`mailto:${site.email}`} className="hover:text-brand-600">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-brand-900">Office</dt>
              <dd>
                {site.officeAddress.line1}
                <br />
                {site.officeAddress.line2}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-brand-900">Mailing Address</dt>
              <dd>
                {site.mailingAddress.line1}
                <br />
                {site.mailingAddress.line2}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
