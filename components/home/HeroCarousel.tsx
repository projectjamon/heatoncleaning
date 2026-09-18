"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    image: "/images/hero-slide-1.jpg",
    alt: "Extreme Cleaning Services team at work",
    heading: "Cleaning That Lives Up To Its Name",
    body: "Deep cleaning, window cleaning, and more for homes and businesses in Ogden, UT.",
  },
  {
    image: "/images/hero-slide-2.jpg",
    alt: "Technician cleaning exterior windows",
    heading: "Streak-Free Windows, Inside And Out",
    body: "Residential and commercial window cleaning from a trained, insured crew.",
  },
  {
    image: "/images/hero-slide-3.jpg",
    alt: "Freshly cleaned living room",
    heading: "A Home That Feels As Good As It Looks",
    body: "Reliable, professional service — scheduled around your life, not the other way around.",
  },
];

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    const id = setInterval(() => emblaApi.scrollNext(), 6000);
    return () => {
      clearInterval(id);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative overflow-hidden" aria-label="Featured">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div key={slide.heading} className="relative min-w-0 flex-[0_0_100%]">
              <div className="relative h-[420px] w-full sm:h-[520px]">
                <Image src={slide.image} alt={slide.alt} fill priority className="object-cover" />
                <div className="absolute inset-0 bg-brand-900/50" />
              </div>
              <div className="absolute inset-0 flex items-center">
                <div className="mx-auto max-w-6xl px-6">
                  <div className="max-w-xl text-white">
                    <span className="mb-4 inline-block rounded-full border border-white/50 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-widest">
                      Locally Owned · Ogden, UT
                    </span>
                    <h1 className="text-4xl font-bold leading-tight sm:text-5xl">{slide.heading}</h1>
                    <p className="mt-4 text-lg text-brand-50">{slide.body}</p>
                    <Link
                      href="/contact/"
                      className="mt-6 inline-block rounded-full bg-accent-500 px-6 py-3 font-semibold text-white hover:bg-accent-600"
                    >
                      Get A Free Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.heading}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === selectedIndex ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
