import type { Metadata } from "next";
import { SEOArticleSchema } from "@/components/educate/SEOArticleSchema";
import { CertificationsEditorialView } from "@/components/educate/CertificationsEditorialView";
import type { SourceItem } from "@/components/educate/SourcesList";
import type { RelatedPageItem } from "@/components/educate/RelatedPages";
import { SHOW_OEKO_TEX } from "@/config/features";

export const metadata: Metadata = {
  title: SHOW_OEKO_TEX 
    ? "Proof You Can Check — GOTS & OEKO-TEX Certifications | Good Karma"
    : "Proof You Can Check — GOTS & Verified Standards | Good Karma",
  description: SHOW_OEKO_TEX
    ? "Explore Good Karma's verified textile credentials. Download third-party certificates for 100% GOTS organic cotton, OEKO-TEX Standard 100, and cruelty-free botanical dyeing."
    : "Explore Good Karma's verified textile credentials. Review third-party documentation for 100% GOTS organic cotton, BRSR disclosure, and cruelty-free botanical dyeing.",
  alternates: {
    canonical: "https://goodkarmabrand.com/educate/certifications",
  },
  openGraph: {
    title: "Proof You Can Check: Verified Organic & Standards Disclosure | Good Karma",
    description: "We don't ask you to take our word for it. Review plain-language breakdowns of our GOTS, BRSR disclosures, and plant-based dyeing standards.",
    url: "https://goodkarmabrand.com/educate/certifications",
    siteName: "Good Karma",
    images: [
      {
        url: "https://goodkarmabrand.com/images/certifications-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Good Karma Third-Party Textile Certification Proof",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

export default function CertificationsPage() {
  const sources: SourceItem[] = [
    {
      citation: "Global Organic Textile Standard (GOTS) Version 7.0 (2023).",
      detail: "Manual for the Implementation of GOTS. Section 2.4: Environmental and Social Criteria. Enforces bans on endocrine disruptors, GMOs, and toxic heavy-metal mordants across the entire supply chain.",
      url: "https://global-standard.org",
    },
    ...(SHOW_OEKO_TEX ? [{
      citation: "OEKO-TEX® Association (2024).",
      detail: "Standard 100 by OEKO-TEX® Criteria Catalogue and Limit Values. Zurich, Switzerland. Regulates thresholds for aromatic amines, formaldehyde, extractable heavy metals, and perfluorinated chemicals (PFAS).",
      url: "https://www.oeko-tex.com/en/our-standards/standard-100-by-oeko-tex",
    }] : []),
    {
      citation: "Ministry of Corporate Affairs (MCA), Government of India (2019).",
      detail: "National Guidelines on Responsible Business Conduct (NGRBC). Establishes 9 core principles for businesses to uphold human rights, fair wages, and environmental responsibility.",
      url: "https://www.mca.gov.in",
    },
    {
      citation: "Securities and Exchange Board of India (SEBI) (2021).",
      detail: "Business Responsibility and Sustainability Reporting (BRSR) Framework. Mandatory transparency mechanism for environmental stewardship and fair supply chain practices.",
    },
    {
      citation: "Hatch, K. L., & Maibach, H. I. (1995).",
      detail: "Textile chemical finish dermatitis. Contact Dermatitis, 32(5), 253-264. Clinical evidence documenting allergic contact dermatitis triggered by synthetic dye fixatives, azo dyes, and resin finishes.",
    },
  ];

  const relatedPages: [RelatedPageItem, RelatedPageItem] = [
    {
      tag: "Dermatological Health",
      title: "The science of breathing: Skin Science.",
      description: "How synthetic fabrics affect the stratum corneum barrier and why pure organic cotton supports natural cutaneous balance.",
      href: "/educate/skin-science",
      accentColor: "mauve",
    },
    {
      tag: "Botanical Palette",
      title: "Colours drawn directly from nature.",
      description: "How our nine plant dyes replace petroleum pigments with marigold, madder root, and pomegranate peel.",
      href: "/educate/natural-dyeing",
      accentColor: "marigold",
    },
  ];

  return (
    <>
      <SEOArticleSchema
        headline="Proof You Can Check: Verified Organic & Standards Disclosure"
        description="Comprehensive third-party certification breakdown for Good Karma: GOTS, BRSR disclosure, and cruelty-free botanical dyeing."
        url="/educate/certifications"
        image="/images/certifications-hero.jpg"
        datePublished="2026-01-20"
        dateModified="2026-10-16"
      />

      <CertificationsEditorialView 
        sources={sources}
        relatedPages={relatedPages}
      />
    </>
  );
}
