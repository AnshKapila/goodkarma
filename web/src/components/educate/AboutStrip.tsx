import Link from "next/link";

interface AboutStripProps {
  className?: string;
}

export function AboutStrip({ className = "" }: AboutStripProps) {
  return (
    <div className={`w-full bg-[#5A6056] text-white border-y border-white/10 py-6 px-6 ${className}`}>
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-4">
          <Link href="/" aria-label="Good Karma Home" className="shrink-0 flex items-center">
            <img 
              src="/images/logo-white.png" 
              alt="Good Karma - Be Good, Wear Good." 
              className="h-7 md:h-8 w-auto object-contain"
            />
          </Link>
          <span className="hidden sm:inline-block text-white/30 text-lg font-light">|</span>
          <p className="text-p2 text-white/90 font-light">
            Good Karma makes naturally dyed, GOTS-certified cotton innerwear.
          </p>
        </div>
        <Link 
          href="/products" 
          className="text-xs uppercase tracking-widest font-medium text-white hover:text-white/80 transition-colors inline-flex items-center gap-1"
        >
          Explore Collection &rarr;
        </Link>
      </div>
    </div>
  );
}
