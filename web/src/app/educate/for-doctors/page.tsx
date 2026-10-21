import type { Metadata } from "next";
import { SEOArticleSchema } from "@/components/educate/SEOArticleSchema";
import { ForDoctorsEditorialView } from "@/components/educate/ForDoctorsEditorialView";
import type { SourceItem } from "@/components/educate/SourcesList";
import type { RelatedPageItem } from "@/components/educate/RelatedPages";

export const metadata: Metadata = {
  title: "For Clinicians — Dermatology & Practice Integration | Good Karma",
  description: "Clinical rationale, textile science, and practice resources for dermatologists, gynaecologists, and healthcare professionals.",
  alternates: {
    canonical: "https://goodkarmabrand.com/educate/for-doctors",
  },
  openGraph: {
    title: "For Clinicians: Clinical Rationale & Practice Resources | Good Karma",
    description: "How 100% GOTS organic cotton and botanical dyes support cutaneous microclimate comfort. Patient resources and clinic collaboration.",
    url: "https://goodkarmabrand.com/educate/for-doctors",
    siteName: "Good Karma",
    images: [
      {
        url: "https://goodkarmabrand.com/images/doctor-trust.jpg",
        width: 1200,
        height: 630,
        alt: "Clinician in natural organic cotton lab coat — Good Karma For Clinicians",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

export default function ForDoctorsPage() {
  const sources: SourceItem[] = [
    {
      citation: "Lisi, P., et al. (2014). 'Textile contact dermatitis: an overview.'",
      detail: "Contact Dermatitis, 71(4), 211-224. Clinical assessment of dispersed azo dyes and formaldehyde-based finishing resins as common contact sensitisers in allergic eczema.",
    },
    {
      citation: "Runeman, B. (2008). 'Skin interaction with absorbent hygiene products.'",
      detail: "Clinics in Dermatology, 26(1), 45-51. Demonstrates how occlusive moisture combined with mechanical friction compromises stratum corneum integrity.",
    },
    {
      citation: "Hatch, K. L., & Maibach, H. I. (1995). 'Textile chemical finish dermatitis.'",
      detail: "Contact Dermatitis, 32(5), 253-264. Comprehensive analysis of glyoxal and melamine resins used as wrinkle-resistant textile finishes causing localized dermatitis.",
    },
  ];

  const relatedPages: [RelatedPageItem, RelatedPageItem] = [
    {
      tag: "Dermatological Research",
      title: "The science of breathing: Skin Science.",
      description: "Detailed biomechanical breakdown of stratum corneum permeability, microclimatic friction, and fiber breathability.",
      href: "/educate/skin-science",
      accentColor: "mauve",
    },
    {
      tag: "Third-Party Audits",
      title: "Proof you can check: Our Certifications.",
      description: "Review our laboratory-verified GOTS certification and ecological toxicology audit protocols.",
      href: "/educate/certifications",
      accentColor: "ink",
    },
  ];

  return (
    <>
      <SEOArticleSchema
        headline="For Clinicians: Dermatological Rationale and Practice Resources"
        description="Comprehensive clinical guide on textile contact dermatitis, microclimate management, and physician resources from Good Karma."
        url="/educate/for-doctors"
        image="/images/doctor-trust.jpg"
        datePublished="2026-02-01"
        dateModified="2026-10-21"
      />
      <ForDoctorsEditorialView sources={sources} relatedPages={relatedPages} />
    </>
  );
}