import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { SHOW_OEKO_TEX } from "@/config/features";

interface TrustStripProps {
  className?: string;
  subtitle?: string;
}

export function TrustStrip({ 
  className = "",
  subtitle = "Independently verified and third-party certified at every step."
}: TrustStripProps) {
  const allBadges = [
    {
      code: "GOTS",
      name: "Global Organic Textile Standard",
      detail: "100% Organic Fibres • Zero Toxic Chemicals",
      href: "/educate/certifications#gots"
    },
    {
      code: "OEKO-TEX",
      name: "Standard 100",
      detail: "Tested for Harmful Substances • Skin Safe",
      href: "/educate/certifications#oeko-tex"
    },
    {
      code: "BRSR",
      name: "Corporate ESG Disclosure",
      detail: "National Guidelines on Responsible Conduct",
      href: "/educate/certifications#brsr-ngrbc"
    },
    {
      code: "VEGAN",
      name: "Cruelty-Free Dyeing",
      detail: "100% Botanical Colours • Zero Animal Tests",
      href: "/educate/certifications#vegan"
    }
  ];

  const badges = SHOW_OEKO_TEX 
    ? allBadges 
    : allBadges.filter(b => b.code !== "OEKO-TEX");

  return (
    <section className={`px-6 max-w-[1400px] mx-auto w-full py-12 md:py-16 ${className}`}>
      <div className="bg-paper rounded-xl p-8 md:p-12 border border-border/60 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-border/50">
          <div>
            <div className="flex items-center gap-2 text-marigold text-xs font-bold uppercase tracking-widest mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Independent Verification</span>
            </div>
            <h2 className="text-h2 font-editorial italic text-ink">
              Proof you can check.
            </h2>
            <p className="text-p2 text-muted-foreground font-light mt-2 max-w-[550px]">
              {subtitle}
            </p>
          </div>
          <Link 
            href="/educate/certifications"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-marigold transition-colors group shrink-0"
          >
            <span>View all certification details</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge) => (
            <Link
              key={badge.code}
              href={badge.href}
              className="bg-white p-6 rounded-xl border border-border/50 flex flex-col justify-between hover:border-marigold/40 hover:shadow-sm transition-all group duration-200"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-paper flex items-center justify-center font-bold text-xs text-ink mb-4 border border-border/30 group-hover:bg-marigold/10 group-hover:text-marigold transition-colors">
                  {badge.code}
                </div>
                <h3 className="text-base font-medium text-ink mb-1 group-hover:text-marigold transition-colors">
                  {badge.name}
                </h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  {badge.detail}
                </p>
              </div>
              <span className="text-[11px] font-medium text-marigold mt-4 inline-flex items-center gap-1">
                Read certificate &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
