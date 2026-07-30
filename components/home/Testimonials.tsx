"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
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
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="mx-auto max-w-3xl px-4 py-14 text-center">
      <h2 className="mb-8 text-2xl font-bold text-brand-900 sm:text-3xl">What Customers Say</h2>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((t) => (
            <figure key={t.name} className="min-w-0 flex-[0_0_100%] px-2">
              <blockquote className="text-lg italic text-brand-700">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-brand-900">
                {t.name} <span className="font-normal text-brand-500">— {t.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((t, i) => (
          <button
            key={t.name}
            type="button"
            aria-label={`Show testimonial ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === selectedIndex ? "bg-brand-600" : "bg-brand-200"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
