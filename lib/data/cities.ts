export type City = {
  slug: string;
  name: string;
  state: string;
  heroImage: string;
  heroImageAlt: string;
  metaDescription: string;
  intro: string;
  localNote: string;
};

export const cities: City[] = [
  {
    slug: "ogden",
    name: "Ogden",
    state: "UT",
    heroImage: "/images/city-ogden.svg",
    heroImageAlt: "Extreme Cleaning Services technician working at a home in Ogden, UT",
    metaDescription:
      "Extreme Cleaning Services is based in Ogden, UT and offers deep cleaning, window cleaning, gutter cleaning, power washing, and more throughout the Ogden area.",
    intro:
      "Extreme Cleaning Services is based right here in Ogden — our office is on S Stewart Dr, so Ogden homes and businesses are the properties we know best. From historic 25th Street storefronts to newer construction near the foothills, we've cleaned a wide range of Ogden properties and calibrate our approach to the building, not just a checklist.",
    localNote:
      "As a local, Ogden-based crew, we can typically offer flexible scheduling and faster response times for Ogden addresses than a company dispatching from further away.",
  },
  {
    slug: "west-haven",
    name: "West Haven",
    state: "UT",
    heroImage: "/images/city-west-haven.svg",
    heroImageAlt: "Extreme Cleaning Services technician working at a home in West Haven, UT",
    metaDescription:
      "Extreme Cleaning Services proudly serves West Haven, UT with deep cleaning, window cleaning, gutter cleaning, power washing, and more.",
    intro:
      "West Haven's newer neighborhoods and growing number of homes make it one of our most-requested service areas outside Ogden proper. Whether it's a newly built home that needs its first post-construction clean or a growing family looking for a recurring deep-clean schedule, our crew is a short drive from West Haven and out to most addresses within a day or two of booking.",
    localNote:
      "We serve West Haven on the same scheduling and pricing as our Ogden home base — no travel surcharge for standard service requests.",
  },
];

export const citiesBySlug = Object.fromEntries(cities.map((c) => [c.slug, c]));
