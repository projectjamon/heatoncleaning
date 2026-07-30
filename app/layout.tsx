import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GoogleTagManagerHead, GoogleTagManagerBody } from "@/components/layout/GoogleTagManager";
import { site } from "@/lib/data/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Ogden, UT`,
    template: `%s | ${site.name}`,
  },
  description:
    "Professional home and commercial cleaning in Ogden, UT and surrounding areas — deep cleaning, window cleaning, gutter cleaning, power washing, solar panel cleaning, and more.",
  openGraph: {
    type: "website",
    siteName: site.name,
    images: ["/images/og-default.svg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <GoogleTagManagerHead />
      </head>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <GoogleTagManagerBody />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
