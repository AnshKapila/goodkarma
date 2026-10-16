import type { Metadata } from "next";
import { Suspense } from "react";
import { getPublishedPosts } from "@/data/blogPosts";
import { BlogFeed } from "@/components/blog/BlogFeed";
import { TrustStrip } from "@/components/educate/TrustStrip";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Journal & Clinical Notes — Textile Science & Dermatology | Good Karma",
  description: "Peer-reviewed insights, clinician notes, and material science research on skin barrier health, contact allergens, and natural dyeing.",
  alternates: {
    canonical: "https://goodkarmabrand.com/blog",
  },
  openGraph: {
    title: "The Good Karma Journal — Textile Science & Clinical Notes",
    description: "Explore research and clinical perspectives on cutaneous microclimates, untreated organic cotton, and botanical dyes.",
    url: "https://goodkarmabrand.com/blog",
    siteName: "Good Karma",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const publishedPosts = getPublishedPosts();

  return (
    <div className="flex flex-col w-full pb-32 bg-background pt-28 md:pt-36">
      {/* Breadcrumb & Header */}
      <div className="px-6 max-w-[1400px] mx-auto w-full mb-12">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center text-xs text-muted-foreground font-light">
          <Link href="/" className="hover:text-ink transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-border" />
          <span className="text-ink font-medium">Journal & Blog</span>
        </nav>

        <div className="max-w-[760px]">
          <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-3 block">
            The Good Karma Journal
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-editorial italic text-ink mb-6">
            Textile science & clinical notes.
          </h1>
          <p className="text-p1 text-muted-foreground font-light leading-relaxed">
            Exploring cutaneous microclimates, dermatological literature, and the material chemistry of botanical textile processing. Authored by verified practitioners and our research team.
          </p>
        </div>
      </div>

      {/* Main Blog Feed Area */}
      <div className="px-6 max-w-[1400px] mx-auto w-full">
        <Suspense fallback={<div className="p-12 text-center text-xs text-muted-foreground font-mono">Loading articles...</div>}>
          <BlogFeed initialPosts={publishedPosts} />
        </Suspense>
      </div>

      {/* Trust Strip */}
      <TrustStrip className="mt-24" />
    </div>
  );
}
