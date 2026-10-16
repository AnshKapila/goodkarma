"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { BlogPost, BlogCategory, SpecialtyTag } from "@/data/blogPosts";
import { ArrowRight, BookOpen, Clock, User, ShieldCheck } from "lucide-react";

interface BlogFeedProps {
  initialPosts: BlogPost[];
}

const SPECIALTIES: SpecialtyTag[] = [
  "Dermatology",
  "Gynaecology",
  "Textile Science",
  "Paediatrics",
  "Environmental Health",
];

export function BlogFeed({ initialPosts }: BlogFeedProps) {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("filter") as BlogCategory | null;

  const [selectedCategory, setSelectedCategory] = useState<"all" | BlogCategory>(
    initialCategory === "from-doctors" || initialCategory === "our-articles"
      ? initialCategory
      : "all"
  );
  const [selectedSpecialty, setSelectedSpecialty] = useState<"all" | SpecialtyTag>("all");

  useEffect(() => {
    const filterParam = searchParams.get("filter") as BlogCategory | null;
    if (filterParam === "from-doctors" || filterParam === "our-articles") {
      setSelectedCategory(filterParam);
    }
  }, [searchParams]);

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      // Must be published (safety guard)
      if (post.status !== "published") return false;

      // Category filter
      if (selectedCategory !== "all" && post.category !== selectedCategory) {
        return false;
      }

      // Specialty filter
      if (selectedSpecialty !== "all" && post.specialtyTag !== selectedSpecialty) {
        return false;
      }

      return true;
    });
  }, [initialPosts, selectedCategory, selectedSpecialty]);

  return (
    <div className="space-y-12">
      {/* Filter Controls */}
      <div className="bg-paper p-6 md:p-8 rounded-2xl border border-border/60 space-y-6">
        {/* Category Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/50">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Category
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                selectedCategory === "all"
                  ? "bg-ink text-white shadow-sm"
                  : "bg-white text-muted-foreground hover:text-ink border border-border/60"
              }`}
            >
              All Articles ({initialPosts.length})
            </button>
            <button
              onClick={() => setSelectedCategory("from-doctors")}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                selectedCategory === "from-doctors"
                  ? "bg-sage text-white shadow-sm"
                  : "bg-white text-muted-foreground hover:text-sage border border-border/60"
              }`}
            >
              From Doctors ({initialPosts.filter((p) => p.category === "from-doctors").length})
            </button>
            <button
              onClick={() => setSelectedCategory("our-articles")}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                selectedCategory === "our-articles"
                  ? "bg-marigold text-white shadow-sm"
                  : "bg-white text-muted-foreground hover:text-marigold border border-border/60"
              }`}
            >
              Our Articles ({initialPosts.filter((p) => p.category === "our-articles").length})
            </button>
          </div>
        </div>

        {/* Specialty Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Specialty
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedSpecialty("all")}
              className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                selectedSpecialty === "all"
                  ? "bg-ink/10 text-ink font-semibold"
                  : "bg-white text-muted-foreground hover:text-ink border border-border/50"
              }`}
            >
              All Specialties
            </button>
            {SPECIALTIES.map((spec) => (
              <button
                key={spec}
                onClick={() => setSelectedSpecialty(spec)}
                className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                  selectedSpecialty === spec
                    ? "bg-ink text-white font-semibold shadow-sm"
                    : "bg-white text-muted-foreground hover:text-ink border border-border/50"
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      {filteredPosts.length === 0 ? (
        <div className="p-16 text-center bg-paper rounded-2xl border border-dashed border-border/70">
          <BookOpen className="w-10 h-10 text-muted-foreground mx-auto mb-3 opacity-60" />
          <h3 className="text-base font-medium text-ink mb-1">No articles found</h3>
          <p className="text-xs text-muted-foreground font-light mb-4">
            Try adjusting your category or specialty filter.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSelectedSpecialty("all");
            }}
            className="text-xs font-semibold text-sage underline underline-offset-4"
          >
            Reset all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => {
            const isDoctor = post.category === "from-doctors";
            return (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-border/70 overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-border transition-all group"
              >
                <div>
                  {/* Card Cover Image */}
                  {post.coverImage && (
                    <div className="w-full h-48 overflow-hidden bg-paper relative">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {post.isSampleContent && (
                        <div className="absolute top-3 right-3 bg-amber-100/90 backdrop-blur-xs text-amber-900 border border-amber-300 text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase tracking-wider shadow-xs">
                          SAMPLE CONTENT
                        </div>
                      )}
                    </div>
                  )}

                  <div className="p-6 md:p-8">
                    {/* Meta header */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                          isDoctor
                            ? "bg-sage/10 text-sage"
                            : "bg-marigold/10 text-marigold"
                        }`}
                      >
                        {post.specialtyTag}
                      </span>
                      <span className="text-[11px] text-muted-foreground flex items-center gap-1 font-light">
                        <Clock className="w-3 h-3" /> {post.readingTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-editorial italic text-ink mb-3 group-hover:text-sage transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-xs text-muted-foreground font-light leading-relaxed line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer with Author & Link */}
                <div className="px-6 pb-6 md:px-8 md:pb-8 pt-4 border-t border-border/40 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-paper border border-border/60 flex items-center justify-center text-ink/70">
                      <User className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-[11px]">
                      <span className="font-medium text-ink block leading-tight">
                        {post.author.name}
                      </span>
                      <span className="text-muted-foreground font-light text-[10px]">
                        {post.author.specialty}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="w-8 h-8 rounded-full bg-paper hover:bg-sage hover:text-white text-ink flex items-center justify-center transition-colors"
                    aria-label={`Read ${post.title}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
