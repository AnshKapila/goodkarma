import type { Metadata } from "next";
import { OurStoryEditorialView } from "@/components/story/OurStoryEditorialView";

export const metadata: Metadata = {
  title: "Our Story — Rooted in Care & Clean Textile Chemistry | Good Karma",
  description: "Good Karma was founded on an undeniable truth: what touches your skin for 24 hours a day matters. 100% GOTS organic cotton, botanical dyes, and zero synthetic compromise.",
  alternates: {
    canonical: "https://goodkarmabrand.com/our-story",
  },
  openGraph: {
    title: "Our Story: Rooted in Care, Engineered for Skin | Good Karma",
    description: "Discover the origins, philosophy, and artisan textile continuum behind Good Karma. Pure organic cotton essentials crafted with botanical plant pigments.",
    url: "https://goodkarmabrand.com/our-story",
    siteName: "Good Karma",
    images: [
      {
        url: "https://goodkarmabrand.com/images/organic-cotton-harvest.jpg",
        width: 1200,
        height: 630,
        alt: "Artisan hands holding freshly harvested organic cotton bolls at golden sunrise",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function OurStoryPage() {
  return <OurStoryEditorialView />;
}