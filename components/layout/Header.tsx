"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { mainNav } from "@/lib/data/nav";
import { site } from "@/lib/data/site";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/images/logo.svg" alt={site.name} width={160} height={44} priority unoptimized />
        </Link>

        <nav className="hidden lg:flex items-center gap-6" aria-label="Main">
          {mainNav.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className="flex items-center gap-1 py-2 text-sm font-medium text-brand-800 hover:text-brand-600"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  onClick={() => setServicesOpen((o) => !o)}
                >
                  {item.label}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden>
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="absolute left-0 top-full w-64 rounded-lg border border-brand-100 bg-white py-2 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-brand-800 hover:bg-brand-50 hover:text-brand-600"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 text-sm font-medium text-brand-800 hover:text-brand-600"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <a
          href={site.phoneHref}
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-accent-500 px-4 py-2 text-sm font-semibold text-white hover:bg-accent-600"
        >
          {site.phone}
        </a>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-brand-800"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden border-t border-brand-100 bg-white px-4 py-3" aria-label="Mobile">
          {mainNav.map((item) => (
            <div key={item.href} className="py-1">
              <Link
                href={item.href}
                className="block py-2 text-sm font-medium text-brand-800"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="ml-3 border-l border-brand-100 pl-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block py-1.5 text-sm text-brand-600"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href={site.phoneHref}
            className="mt-3 block rounded-full bg-accent-500 px-4 py-2 text-center text-sm font-semibold text-white"
          >
            {site.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
