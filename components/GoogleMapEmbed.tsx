import { site } from "@/lib/data/site";

export function GoogleMapEmbed() {
  return (
    <iframe
      src={site.mapEmbedSrc}
      title={`Map of ${site.name}`}
      className="h-80 w-full rounded-xl border border-brand-100"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
