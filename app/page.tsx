import { HeroCarousel } from "@/components/home/HeroCarousel";
import { PromoCards } from "@/components/home/PromoCards";
import { ServicesSummary } from "@/components/home/ServicesSummary";
import { Testimonials } from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <PromoCards />
      <ServicesSummary />
      <Testimonials />
    </>
  );
}
