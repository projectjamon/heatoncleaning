import { services } from "./services";

export const mainNav = [
  { label: "Home", href: "/" },
  {
    label: "Our Services",
    href: "/our-services/",
    children: services.map((s) => ({ label: s.navTitle ?? s.title, href: `/${s.slug}/` })),
  },
  { label: "How We Work", href: "/how-we-work/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Careers", href: "/careers/" },
  { label: "Contact", href: "/contact/" },
];
