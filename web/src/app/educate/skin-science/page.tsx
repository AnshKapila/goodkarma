import type { Metadata } from "next";
import { SEOArticleSchema } from "@/components/educate/SEOArticleSchema";
import { SkinScienceFluxView } from "@/components/educate/SkinScienceFluxView";
import type { SourceItem } from "@/components/educate/SourcesList";
import type { RelatedPageItem } from "@/components/educate/RelatedPages";
import { SHOW_OEKO_TEX } from "@/config/features";

export const metadata: Metadata = {
  title: "Skin Science — How Fabrics Impact Barrier Health | Good Karma",
  description: "A dermatological look at how synthetic fabrics affect the stratum corneum, microclimate heat and moisture, and why pure organic cotton supports natural barrier balance.",
  alternates: {
    canonical: "https://goodkarmabrand.com/educate/skin-science",
  },
  openGraph: {
    title: "Skin Science: The Biology of What Touches Your Skin | Good Karma",
    description: "The dermatological evidence behind synthetic fabrics vs. breathable GOTS organic cotton. Written plainly, grounded in peer-reviewed science.",
    url: "https://goodkarmabrand.com/educate/skin-science",
    siteName: "Good Karma",
    images: [
      {
        url: "https://goodkarmabrand.com/images/skin-barrier-diagram.jpg",
        width: 1200,
        height: 630,
        alt: "Skin Barrier Cross-Section Diagram — Good Karma Skin Science",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

export default function SkinSciencePage() {
  const sources: SourceItem[] = [
    {
      citation: "Elias, P. M. (2005). 'Stratum corneum defensive functions: an integrated view.'",
      detail: "Journal of Investigative Dermatology, 125(2), 183-200. Demonstrates how microclimate humidity and occlusive synthetic fabrics disrupt epidermal barrier repair.",
      url: "https://pubmed.ncbi.nlm.nih.gov/16098026/",
    },
    {
      citation: "Runeman, B. (2008). 'Skin interaction with absorbent hygiene products.'",
      detail: "Clinics in Dermatology, 26(1), 45-51. Evaluates cutaneous microclimate, mechanical friction, and hydration dynamics next to delicate skin.",
      url: "https://pubmed.ncbi.nlm.nih.gov/18280904/",
    },
    {
      citation: "Hatch, K. L., & Maibach, H. I. (1995). 'Textile chemical finish dermatitis.'",
      detail: "Contact Dermatitis, 32(5), 253-264. Explores dermatological contact sensitivity associated with synthetic dye fixatives, azo dyes, and resin finishes.",
      url: "https://pubmed.ncbi.nlm.nih.gov/7664633/",
    },
    {
      citation: "Jung, A., & Schill, W. B. (2000). 'Patients' clothing and its effect on scrotal temperature.'",
      detail: "International Journal of Andrology, 23(4), 206-211. Correlates synthetic, non-breathable underwear with elevated intrascrotal heat.",
      url: "https://pubmed.ncbi.nlm.nih.gov/10931235/",
    },
    {
      citation: "European Environment Agency (EEA) (2022). 'Microplastics from textiles: towards a circular economy for textiles in Europe.'",
      detail: "Briefing on synthetic fibre shedding, filament fragmentation, and potential environmental and cutaneous interactions.",
      url: "https://www.eea.europa.eu/publications/microplastics-from-textiles-towards-a",
    },
    {
      citation: "European Chemicals Agency (ECHA) (2023). 'Substances in textiles and skin sensitization.'",
      detail: "Regulatory review of chemical limit values, disperse dyes, and skin-sensitizing finishing agents in commercial apparel.",
      url: "https://echa.europa.eu",
    },
    {
      citation: "Global Organic Textile Standard (GOTS) Version 7.0 (2023).",
      detail: "Section 2.4: Prohibited Chemical Inputs in Textile Processing. Strict prohibition of endocrine disruptors, fluorinated substances (PFAS), and heavy-metal mordants.",
      url: "https://global-standard.org",
    },
  ];

  const relatedPages: [RelatedPageItem, RelatedPageItem] = [
    {
      tag: "Botanical Palette",
      title: "Colours drawn directly from nature.",
      description: "How our nine plant dyes replace synthetic petroleum pigments with marigold, madder, and pomegranate.",
      href: "/educate/natural-dyeing",
      accentColor: "marigold",
    },
    {
      tag: "Third-Party Audits",
      title: "Proof you can check: Our Certifications.",
      description: SHOW_OEKO_TEX
        ? "Read plain-language breakdowns of our GOTS, OEKO-TEX Standard 100, and cruelty-free dye certificates."
        : "Read plain-language breakdowns of our GOTS, BRSR disclosure, and cruelty-free dye certificates.",
      href: "/educate/certifications",
      accentColor: "ink",
    },
  ];

  return (
    <>
      <SEOArticleSchema
        headline="Skin Science: How Fabric Interacts with Your Skin Barrier"
        description="A dermatological breakdown of the stratum corneum, fabric microclimates, and why pure organic cotton protects delicate skin."
        url="/educate/skin-science"
        image="/images/skin-barrier-diagram.jpg"
        datePublished="2026-01-15"
        dateModified="2026-10-21"
      />
      <SkinScienceFluxView sources={sources} relatedPages={relatedPages} />
    </>
  );
}
