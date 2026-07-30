import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/templates/CityPageTemplate";
import { citiesBySlug } from "@/lib/data/cities";

const city = citiesBySlug["west-haven"];

export const metadata: Metadata = {
  title: `Cleaning Services in ${city.name}, ${city.state}`,
  description: city.metaDescription,
};

export default function Page() {
  return <CityPageTemplate city={city} />;
}
