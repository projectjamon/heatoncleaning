import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { servicesBySlug } from "@/lib/data/services";

const service = servicesBySlug["spring-cleaning"];

export const metadata: Metadata = {
  title: service.title,
  description: service.metaDescription,
};

export default function Page() {
  return <ServicePageTemplate service={service} />;
}
