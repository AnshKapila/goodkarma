import { BookOpen, ExternalLink } from "lucide-react";

export interface SourceItem {
  citation: string;
  detail?: string;
  url?: string;
}

interface SourcesListProps {
  sources: SourceItem[];
  lastUpdated?: string;
  className?: string;
}

export function SourcesList({ 
  sources, 
  lastUpdated = "October 2026", 
  className = "" 
}: SourcesListProps) {
  return (
    <section className={`pt-12 mt-16 border-t border-border/60 ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2 text-ink">
          <BookOpen className="w-4 h-4 text-marigold" />
          <h3 className="text-sm font-semibold tracking-wide uppercase text-ink">
            Clinical References & Sources
          </h3>
        </div>
        <span className="text-xs text-muted-foreground font-light">
          Last updated: <time dateTime="2026-10-14">{lastUpdated}</time>
        </span>
      </div>

      <p className="text-xs text-muted-foreground font-light leading-relaxed mb-6 max-w-[700px]">
        Good Karma grounds all educational statements in peer-reviewed dermatological literature, textile science standards, and verified third-party laboratory certifications.
      </p>

      <ol className="space-y-3.5 text-xs text-muted-foreground font-light list-decimal pl-5">
        {sources.map((item, idx) => (
          <li key={idx} className="leading-relaxed pl-1">
            <span className="text-ink/90 font-medium">{item.citation}</span>
            {item.detail && <span className="text-muted-foreground"> — {item.detail}</span>}
            {item.url && (
              <a 
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 ml-2 text-marigold hover:underline"
              >
                <span>[Link]</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
