import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPublishedPosts, getPostBySlug } from "@/data/blogPosts";
import { ShareBar } from "@/components/educate/ShareBar";
import { TrustStrip } from "@/components/educate/TrustStrip";
import { ChevronRight, Clock, Calendar, ShieldCheck, User, Building, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPublishedPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Good Karma Journal",
    };
  }

  return {
    title: `${post.title} | Good Karma Journal`,
    description: post.excerpt,
    alternates: {
      canonical: `https://goodkarmabrand.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://goodkarmabrand.com/blog/${post.slug}`,
      siteName: "Good Karma",
      type: "article",
      publishedTime: post.publishedAt,
      images: post.coverImage ? [
        {
          url: `https://goodkarmabrand.com${post.coverImage}`,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || post.status !== "published") {
    notFound();
  }

  const isDoctor = post.category === "from-doctors";
  const relatedPosts = getPublishedPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    image: post.coverImage ? `https://goodkarmabrand.com${post.coverImage}` : undefined,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.title,
      worksFor: {
        "@type": "Organization",
        name: post.author.clinicName,
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Good Karma",
      logo: {
        "@type": "ImageObject",
        url: "https://goodkarmabrand.com/images/logo-dark.png",
      },
    },
  };

  return (
    <div className="flex flex-col w-full pb-32 bg-background pt-28 md:pt-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="px-6 max-w-[900px] mx-auto w-full mb-8">
        <nav aria-label="Breadcrumb" className="flex items-center text-xs text-muted-foreground font-light flex-wrap gap-y-2">
          <Link href="/" className="hover:text-ink transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-border shrink-0" />
          <Link href="/blog" className="hover:text-ink transition-colors">Journal & Blog</Link>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-border shrink-0" />
          <span className="text-ink font-medium truncate max-w-[240px] md:max-w-[400px]">
            {post.title}
          </span>
        </nav>
      </div>

      {/* Main Article Container */}
      <article className="px-6 max-w-[900px] mx-auto w-full">
        {/* Sample Content Banner */}
        {post.isSampleContent && (
          <div className="mb-8 p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-900 leading-relaxed font-light">
              <strong className="font-semibold uppercase tracking-wider font-mono mr-1.5">[SAMPLE_CONTENT]</strong>
              This is an editorial demonstration template. Clinician names and clinic affiliations are placeholders (e.g. &ldquo;Dr. [Name]&rdquo;) in accordance with our medical communication standards. No unverified patient claims or endorsements are published.
            </div>
          </div>
        )}

        {/* Article Header */}
        <header className="mb-10 pb-8 border-b border-border/60">
          {/* Category & Tags */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                isDoctor
                  ? "bg-sage/10 text-sage"
                  : "bg-marigold/10 text-marigold"
              }`}
            >
              {isDoctor ? "From Doctors" : "Our Articles"}
            </span>
            <span className="text-xs font-mono text-muted-foreground bg-paper px-3 py-1 rounded-full border border-border/50">
              {post.specialtyTag}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-editorial italic text-ink mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-p1 text-ink/70 font-light leading-relaxed mb-6">
            {post.excerpt}
          </p>

          {/* Meta line */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground font-light">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-ink/50" />
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-ink/50" />
              {post.readingTime}
            </span>
          </div>
        </header>

        {/* Author Card & Compliance Disclosures */}
        <div className="bg-paper rounded-2xl p-6 md:p-8 border border-border/70 mb-12 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Author details */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white border border-border/70 flex items-center justify-center text-ink shadow-2xs shrink-0">
                <User className="w-6 h-6 text-sage" />
              </div>
              <div>
                <div className="text-sm font-semibold text-ink flex items-center gap-2">
                  <span>{post.author.name}</span>
                  {isDoctor && (
                    <span className="text-[10px] font-mono uppercase tracking-wider bg-sage/10 text-sage px-2 py-0.5 rounded">
                      Verified Clinician
                    </span>
                  )}
                </div>
                <div className="text-xs text-muted-foreground font-light">
                  {post.author.title} &bull; {post.author.specialty}
                </div>
                <div className="text-xs text-muted-foreground/80 font-light flex items-center gap-1 mt-0.5">
                  <Building className="w-3 h-3 text-muted-foreground" />
                  {post.author.clinicUrl && post.author.clinicUrl !== "#" ? (
                    <a
                      href={post.author.clinicUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-ink/70"
                    >
                      {post.author.clinicName}
                    </a>
                  ) : (
                    <span>{post.author.clinicName}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Reviewed by Good Karma Badge */}
            {post.reviewedByGoodKarma && (
              <div className="inline-flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-sage/30 text-xs text-ink/80 shadow-2xs self-start sm:self-auto">
                <ShieldCheck className="w-4 h-4 text-sage shrink-0" />
                <div>
                  <span className="font-semibold block text-[11px] text-ink leading-tight">
                    Reviewed by Good Karma
                  </span>
                  <span className="text-[10px] text-muted-foreground font-light">
                    Materials & Standards Audit
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Mandatory Clinic Disclosure Line */}
          {post.author.isPartnerClinic && (
            <div className="pt-3 border-t border-border/50 text-[11px] text-muted-foreground font-light italic">
              Disclosure: {post.author.name} is a Good Karma partner clinic clinician. Contributions reflect objective clinical observations and material science assessments without commercial referral incentives.
            </div>
          )}
        </div>

        {/* Cover Image */}
        {post.coverImage && (
          <div className="w-full rounded-2xl overflow-hidden mb-12 border border-border/60 bg-paper">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-auto max-h-[480px] object-cover"
            />
          </div>
        )}

        {/* Article Body Content */}
        <div className="space-y-6 text-base md:text-lg text-ink/85 font-light leading-relaxed mb-16">
          {post.content.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Share Bar */}
        <div className="mb-16">
          <ShareBar
            title={post.title}
            urlPath={`/blog/${post.slug}`}
            showColleagueShare={isDoctor}
          />
        </div>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <section className="pt-12 border-t border-border/60">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-editorial italic text-ink">
                Related Articles
              </h3>
              <Link
                href="/blog"
                className="text-xs font-semibold text-sage hover:underline inline-flex items-center gap-1"
              >
                View all articles <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group bg-paper p-6 rounded-xl border border-border/60 hover:border-border transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sage block mb-2">
                      {related.specialtyTag}
                    </span>
                    <h4 className="text-base font-editorial italic text-ink group-hover:text-sage transition-colors line-clamp-2 mb-2">
                      {related.title}
                    </h4>
                    <p className="text-xs text-muted-foreground font-light line-clamp-2 mb-4">
                      {related.excerpt}
                    </p>
                  </div>
                  <div className="text-[11px] text-muted-foreground font-light pt-3 border-t border-border/40">
                    {related.author.name} &bull; {related.readingTime}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      {/* Trust Strip */}
      <TrustStrip className="mt-24" />
    </div>
  );
}
