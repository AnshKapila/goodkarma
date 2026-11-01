import type { Metadata } from "next";
import { OurStoryEditorialView } from "@/components/story/OurStoryEditorialView";

export const metadata: Metadata = {
  title: "Our Story | Good Karma",
  description: "Discover the thinking behind Good Karma, our approach to responsibility, the people connected to our work and the impact we hope to make.",
  alternates: {
    canonical: "https://goodkarmabrand.com/our-story",
  },
  openGraph: {
    title: "Our Story | Good Karma",
    description: "Discover the thinking behind Good Karma, our approach to responsibility, the people connected to our work and the impact we hope to make.",
    url: "https://goodkarmabrand.com/our-story",
    siteName: "Good Karma",
    images: [
      {
        url: "https://goodkarmabrand.com/images/story/story-hero.jpg",
        width: 1200,
        height: 630,
        alt: "The choices and people behind Good Karma",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function OurStoryPage() {
  return <OurStoryEditorialView />;
}
