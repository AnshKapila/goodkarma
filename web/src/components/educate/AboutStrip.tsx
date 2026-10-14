import Link from "next/link";

interface AboutStripProps {
  className?: string;
}

export function AboutStrip({ className = "" }: AboutStripProps) {
  return (
    <div className={`w-full bg-paper/60 border-y border-border/50 py-6 px-6 ${className}`}>
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-4">
          <Link href="/" aria-label="Good Karma Home" className="shrink-0">
            <img 
              src="/images/logo-dark.png" 
              alt="Good Karma" 
              className="h-6 w-auto object-contain"
            />
          </Link>
          <span className="hidden sm:inline-block text-border text-lg font-light">|</span>
          <p className="text-p2 text-ink/80 font-light">
            Good Karma makes naturally dyed, GOTS-certified cotton innerwear.
          </p>
        </div>
        <Link 
          href="/products" 
          className="text-xs uppercase tracking-widest font-medium text-marigold hover:text-ink transition-colors"
        >
          Explore Collection &rarr;
        </Link>
      </div>
    </div>
  );
}
