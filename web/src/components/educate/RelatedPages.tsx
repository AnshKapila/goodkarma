import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface RelatedPageItem {
  tag: string;
  title: string;
  description: string;
  href: string;
  accentColor?: "mauve" | "marigold" | "sage" | "ink";
}

interface RelatedPagesProps {
  pages: [RelatedPageItem, RelatedPageItem];
  className?: string;
}

export function RelatedPages({ pages, className = "" }: RelatedPagesProps) {
  return (
    <section className={`px-6 max-w-[1400px] mx-auto w-full py-12 md:py-16 ${className}`}>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-border/50">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-marigold mb-2 block">
            Continue Reading
          </span>
          <h2 className="text-h2 font-editorial italic text-ink">
            Related impact guides.
          </h2>
        </div>
        <Link 
          href="/educate" 
          className="text-sm font-medium text-ink hover:text-marigold transition-colors mt-2 md:mt-0 flex items-center gap-1.5"
        >
          Explore Educate Hub <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pages.map((item, idx) => {
          const tagColor = {
            mauve: "text-mauve bg-mauve/10 border-mauve/20",
            marigold: "text-marigold bg-marigold/10 border-marigold/20",
            sage: "text-sage bg-sage/10 border-sage/20",
            ink: "text-ink bg-ink/10 border-ink/20",
          }[item.accentColor || "marigold"];

          return (
            <Link
              key={idx}
              href={item.href}
              className="group bg-paper rounded-xl p-8 md:p-10 border border-border/60 hover:border-marigold/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border mb-4 ${tagColor}`}>
                  {item.tag}
                </span>
                <h3 className="text-2xl font-editorial italic text-ink mb-3 group-hover:text-marigold transition-colors">
                  {item.title}
                </h3>
                <p className="text-p2 text-muted-foreground font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-ink group-hover:text-marigold transition-colors pt-4 border-t border-border/40">
                <span>Read guide</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
