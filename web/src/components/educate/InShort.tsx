import { CheckCircle2 } from "lucide-react";

interface InShortProps {
  bullets: [string, string, string];
  accentColor?: "mauve" | "marigold" | "sage" | "ink";
  className?: string;
}

export function InShort({ bullets, accentColor = "marigold", className = "" }: InShortProps) {
  const iconColor = {
    mauve: "text-mauve",
    marigold: "text-marigold",
    sage: "text-sage",
    ink: "text-ink",
  }[accentColor];

  const badgeBg = {
    mauve: "bg-mauve/10 text-mauve border-mauve/20",
    marigold: "bg-marigold/10 text-marigold border-marigold/20",
    sage: "bg-sage/10 text-sage border-sage/20",
    ink: "bg-ink/10 text-ink border-ink/20",
  }[accentColor];

  return (
    <section className={`px-6 max-w-[1400px] mx-auto w-full mb-16 md:mb-24 ${className}`}>
      <div className="bg-paper rounded-xl p-8 md:p-10 border border-border/60 shadow-sm relative overflow-hidden">
        <div className="flex items-center gap-3 mb-6">
          <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${badgeBg}`}>
            In short
          </span>
          <span className="text-xs text-muted-foreground font-light">
            Three key takeaways from this guide
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {bullets.map((bullet, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center font-bold text-xs shadow-xs border border-border/50 mt-0.5 ${iconColor}`}>
                {idx + 1}
              </span>
              <p className="text-p2 text-ink/85 font-normal leading-relaxed">
                {bullet}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
