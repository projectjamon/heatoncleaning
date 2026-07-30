"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/data/faq";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-brand-100 rounded-xl border border-brand-100">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : i)}
            >
              <span className="font-semibold text-brand-900">{item.question}</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden
                className={`shrink-0 transition-transform ${open ? "rotate-45" : ""}`}
              >
                <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            {open && <p className="px-5 pb-4 text-brand-700">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
