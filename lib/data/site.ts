export const site = {
  name: "Extreme Cleaning Services",
  shortName: "Extreme Cleaning",
  domain: "extremecleaning.com",
  url: "https://www.extremecleaning.com",
  phone: "801-392-7007",
  phoneHref: "tel:+18013927007",
  fax: "801-392-5164",
  email: "customerservice@extremecleaning.com",
  officeAddress: {
    line1: "375 S Stewart Dr, Bay 1 Ste 101",
    line2: "Ogden, UT 84401",
  },
  mailingAddress: {
    line1: "3108 S. Tyler Ave.",
    line2: "Ogden, UT 84403",
  },
  mapEmbedSrc:
    "https://www.google.com/maps?q=375+S+Stewart+Dr,+Bay+1+Ste+101,+Ogden,+UT+84401&output=embed",
  mapLinkHref:
    "https://www.google.com/maps/search/?api=1&query=375+S+Stewart+Dr,+Bay+1+Ste+101,+Ogden,+UT+84401",
  serviceAreaCities: [
    { name: "Ogden, UT", slug: "ogden" },
    { name: "West Haven, UT", slug: "west-haven" },
  ],
  partner: {
    name: "Healthy Homes Housekeeping",
    // TODO: replace with the real partner site URL before launch.
    href: "https://example.com",
  },
  charity: {
    name: "Cleaning for a Reason",
    href: "https://www.cleaningforareason.org",
  },
  acceptedCards: ["Visa", "Mastercard", "American Express", "Discover"],
} as const;
