import type { Metadata } from "next";
import { SEOArticleSchema } from "@/components/educate/SEOArticleSchema";
import { NaturalDyeingDeltaView } from "@/components/educate/NaturalDyeingDeltaView";
import type { SourceItem } from "@/components/educate/SourcesList";
import type { RelatedPageItem } from "@/components/educate/RelatedPages";
import { SHOW_OEKO_TEX } from "@/config/features";

export const metadata: Metadata = {
  title: "Natural Dyeing — Botanical Palette & Clean Chemistry | Good Karma",
  description: "Colours drawn directly from nature. Explore our botanical dye library made from marigold, madder root, and pomegranate with zero petrochemical azo dyes or PFAS.",
  alternates: {
    canonical: "https://goodkarmabrand.com/educate/natural-dyeing",
  },
  openGraph: {
    title: "Natural Dyeing: Colours Drawn Directly From Nature | Good Karma",
    description: "Discover Good Karma's botanical dyeing craft. 100% plant-based pigments, natural mineral mordants, and zero synthetic azo dyes.",
    url: "https://goodkarmabrand.com/educate/natural-dyeing",
    siteName: "Good Karma",
    images: [
      {
        url: "https://goodkarmabrand.com/images/natural-dye-hero-bowls.jpg",
        width: 1200,
        height: 630,
        alt: "Natural botanical dye bowls with pigments, alum crystals, and dried botanicals in clay vessels",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

export default function NaturalDyeingPage() {
  const sources: SourceItem[] = [
    {
      citation: "Saxena, S., & Raja, A. S. M. (2014). 'Natural Dyes: Sources, Chemistry, Application and Sustainability Issues.'",
      detail: "Roadmap to Sustainable Textiles and Clothing, Springer, 37-80. Reviews botanical extraction protocols, non-toxic mineral mordanting, and the ecological dynamics of natural pigments.",
      url: "https://link.springer.com/chapter/10.1007/978-981-287-065-0_2",
    },
    {
      citation: "European Chemicals Agency (ECHA). 'Azo substances in consumer articles.'",
      detail: "REACH Annex XVII: Restrictions on aromatic amines released by synthetic azo colorants under reducing physiological skin conditions.",
      url: "https://echa.europa.eu",
    },
    {
      citation: "Bechtold, T., & Mussak, R. (2009). 'Handbook of Natural Colorants.'",
      detail: "John Wiley & Sons. Analyzes fastness, skin compatibility, and botanical properties of alizarin from Rubia cordifolia and flavonoids from Punica granatum.",
    },
    {
      citation: "GOTS Ecological Criteria for Chemical Inputs (2023).",
      detail: "Standard Section 4.3: Prohibition of bioaccumulative fluorinated chemicals (PFAS) and aromatic amine-releasing dyes.",
      url: "https://global-standard.org",
    },
  ];

  const relatedPages: [RelatedPageItem, RelatedPageItem] = [
    {
      tag: "Dermatological Research",
      title: "The science of breathing: Skin Science.",
      description: "How synthetic fabrics affect the stratum corneum and why organic cotton supports natural microclimate balance.",
      href: "/educate/skin-science",
      accentColor: "mauve",
    },
    {
      tag: "Verified Standards",
      title: "Proof you can check: Our Certifications.",
      description: SHOW_OEKO_TEX
        ? "Inspect our third-party GOTS and OEKO-TEX Standard 100 certifications for clean textile chemistry."
        : "Inspect our third-party GOTS and BRSR disclosure certifications for clean textile chemistry.",
      href: "/educate/certifications",
      accentColor: "ink",
    },
  ];

  return (
    <>
      <SEOArticleSchema
        headline="Natural Dyeing: Colours Drawn Directly From Nature"
        description="A complete exploration of Good Karma's natural botanical dye library, non-toxic mineral mordants, and clean textile chemistry."
        url="/educate/natural-dyeing"
        image="/images/natural-dye-hero.jpg"
        datePublished="2026-01-20"
        dateModified="2026-10-21"
      />
      <NaturalDyeingDeltaView sources={sources} relatedPages={relatedPages} />
    </>
  );
}
