import { HeroCarousel } from "@/components/home/HeroCarousel";
import { TrustStrip } from "@/components/home/TrustStrip";
import { PromoCards } from "@/components/home/PromoCards";
import { ServicesSummary } from "@/components/home/ServicesSummary";
import { Testimonials } from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <TrustStrip />
      <PromoCards />
      <ServicesSummary />
      <Testimonials />
    </>
  );
}
