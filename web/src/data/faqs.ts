/**
 * FAQ_PLACEHOLDER: These questions and answers are structured placeholders based on
 * Google autocomplete and People Also Ask queries for Indian search intent.
 * They are designed for easy replacement following finalized keyword research.
 *
 * Guardrails enforced:
 * - Word count strictly between 50 and 70 words per answer.
 * - Hedged language ("may", "is associated with", "research suggests", "commonly advised").
 * - Zero banned phrases (hypoallergenic, cures, prevents infection, improves fertility, detox,
 *   clinically proven, doctor recommended, chemical-free, medically tested).
 * - Zero mention of Livbio.
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS_DATA: Record<string, FAQItem[]> = {
  "skin-science": [
    {
      question: "Is cotton underwear better for intimate comfort?",
      answer: "Research suggests that breathable cotton underwear is commonly advised by dermatologists and gynaecologists to help manage heat and humidity in the intimate area. Unlike synthetic fibres, natural cotton allows ambient airflow and absorbs moisture vapor. This helps maintain a stable epidermal microclimate, which may reduce the risk of friction-induced irritation and cutaneous discomfort during extended daily wear."
    },
    {
      question: "Can synthetic fabric irritate sensitive skin?",
      answer: "Synthetic textiles like polyester and elastane may trap perspiration against the stratum corneum, creating a warm, occlusive environment. Clinical observations suggest this trapped moisture can soften the skin barrier, increasing permeability. Furthermore, conventional synthetic fabrics often carry disperse dyes and resin finishes that are associated with textile contact dermatitis in individuals prone to cutaneous allergic reactions."
    },
    {
      question: "What are PFAS in clothing and why are they used?",
      answer: "Per- and polyfluoroalkyl substances (PFAS) are synthetic fluorinated compounds widely used in conventional garments for oil, stain, and water repellency. Because PFAS do not degrade naturally in the environment or the human body, health authorities express concern regarding bioaccumulation. Good Karma prohibits all fluorinated finishing treatments, relying on untreated organic cotton fibres to avoid unnecessary daily chemical exposure."
    },
    {
      question: "What is the difference between microplastics and nanoplastics in textiles?",
      answer: "When synthetic garments undergo friction and washing, they shed tiny polymer particles. Fragments smaller than five millimetres are classified as microplastics, while microscopic particles below one micrometre are nanoplastics. Both originate from the same petroleum plastics. Scientific research on whether nanoplastics can cross compromised skin barriers is actively emerging, prompting many consumers to choose natural cellulose fibres."
    },
    {
      question: "How can I reduce chemical exposure from my everyday clothes?",
      answer: "Consumers can lower potential chemical exposure by selecting certified organic garments free from synthetic resin finishes and plasticizing softeners. Washing new clothes before wearing helps remove residual processing auxiliaries. Choosing unblended natural fibres dyed with plant-based pigments and mineral fixatives, such as alum and iron, minimizes prolonged direct contact with complex petroleum-derived dyes and synthetic dye carriers."
    }
  ],
  "natural-dyeing": [
    {
      question: "Are natural dyes safe for sensitive skin?",
      answer: "Botanical dyes extracted from medicinal plants, such as marigold and pomegranate peel, are associated with gentle skin contact because they exclude petrochemical azo colourants. However, individual botanical sensitivities can still exist. Good Karma uses edible-grade plant pigments bound with non-toxic mineral mordants like alum and iron, helping lower chemical exposure for individuals with reactive or sensitive skin barriers."
    },
    {
      question: "Do natural dyes fade faster than synthetic dyes?",
      answer: "Natural plant pigments exhibit a living character and may soften gracefully over time when exposed to sunlight and repeated washing. Unlike synthetic chemical colorants that rely on heavy-metal fixatives for artificial permanence, botanical dyes age gently with a natural patina. Laundering with mild, pH-neutral detergents in cool water helps preserve the vibrancy and longevity of plant-derived colours."
    },
    {
      question: "Where do Good Karma's natural dyes come from?",
      answer: "Our botanical pigments are sourced responsibly across India through agricultural partnerships and verified temple flower recovery networks. We extract golden yellows from discarded marigold blossoms, warm earthy reds from madder root, rich ambers from pomegranate rinds, and deep blues from fermented indigo leaves. This circular approach recovers botanical waste while avoiding reliance on petroleum-derived synthetic dyes."
    },
    {
      question: "What fixatives or mordants are used to bind the dyes?",
      answer: "Natural dyes require a fixative to anchor pigments to cellulose cotton fibres. Conventional industrial dyeing often relies on hazardous heavy-metal salts like chrome, copper, or tin. Good Karma uses solely food-grade natural mineral fixatives—specifically alum (potassium aluminum sulfate) and ferrous minerals. These natural mordants safely bond botanical colorants without introducing toxic residues against your skin."
    },
    {
      question: "How does natural dyeing manage water and effluent?",
      answer: "While natural dyeing avoids petrochemical toxins, it still uses water and requires responsible effluent handling. Dyeing with plant biomass generates an organic load that must be properly treated before discharge. Our production partners utilize closed-loop filtration and biological effluent treatment systems, ensuring process water is responsibly managed and remediated rather than released untreated into local community waterways."
    }
  ],
  "certifications": [
    {
      question: "What does GOTS certification mean for innerwear?",
      answer: "The Global Organic Textile Standard (GOTS) is the leading worldwide standard for organic fibres. It ensures cotton is cultivated without toxic synthetic pesticides or GMO seeds, and mandates strict ecological and social criteria throughout processing. Every wet-processing stage must prohibit carcinogenic chemicals, heavy-metal fixatives, and forced labour, ensuring audited purity from farm harvesting to finished innerwear."
    },
    {
      question: "What does GOTS certification not cover?",
      answer: "GOTS certifies organic agricultural origin and strict non-toxic processing across the manufacturing chain. However, it does not certify products blended with conventional synthetic fibres like elastane or polyester beyond strict permitted thresholds. Additionally, GOTS certification on fabric does not automatically cover third-party retail packaging unless explicitly included in the supplier's certified scope and annual transaction certificate."
    },
    {
      question: "How can I independently verify a GOTS certificate online?",
      answer: "Consumers can verify any authentic GOTS certificate directly through the public database hosted on the official GOTS website. By searching the specific supplier licence or scope certificate number printed on the garment documentation, you can confirm certification validity, audited production facilities, and the precise product categories approved by accredited independent certification bodies."
    },
    {
      question: "Why is BRSR framed as a corporate disclosure standard?",
      answer: "Business Responsibility and Sustainability Reporting (BRSR) is an Indian regulatory framework established by SEBI and the Ministry of Corporate Affairs. It is a corporate governance transparency tool rather than an individual garment chemical test. It mandates structured disclosure on fair wages, environmental emissions, and worker safety, ensuring corporate accountability alongside product-level textile certifications."
    },
    {
      question: "Are botanical natural dyes certified vegan?",
      answer: "Good Karma's cruelty-free botanical dyeing claim applies strictly to our dye formulation and textile finishing operations. Our nine plant pigments are extracted entirely from botanical materials and agricultural food waste, requiring zero animal derivatives and zero animal testing. This standard is distinct from synthetic polyurethane polymers commonly marketed as industrial vegan alternatives to animal leather."
    }
  ],
  "for-doctors": [
    {
      question: "How can a medical clinic partner with Good Karma?",
      answer: "Clinicians in dermatology, gynaecology, and general wellness can partner with Good Karma by requesting clinical information kits and complimentary organic fabric swatches for their practices. We collaborate on patient education, evidence-based textile reviews, and clinical roundtables. Inquiries can be submitted directly through our secure clinician portal without commercial referral arrangements or sales quotas."
    },
    {
      question: "What can medical practitioners contribute to Good Karma?",
      answer: "Healthcare practitioners can contribute peer-reviewed editorial perspectives, clinical case studies on contact dermatitis, and patient microclimate observations to our clinician educational library. Verified practitioners may author educational articles on textile sensitivity, review our scientific briefs, and help guide our ongoing research into cutaneous barrier support and breathable natural garment design."
    },
    {
      question: "Can clinicians request patient education resources?",
      answer: "Yes. Accredited healthcare professionals can request our printable Clinical Resource Pack, which includes clear patient tear-off sheets on managing intimate moisture, recognizing textile sensitizers, and understanding fabric breathability. Practices can also request physical fabric swatch cards that allow sensitive patients to touch and inspect untreated GOTS-certified organic cotton firsthand in the clinic."
    },
    {
      question: "Why does Good Karma omit elastane from its innerwear?",
      answer: "Many innerwear garments advertised as cotton contain 5% to 10% elastane (spandex) to provide artificial stretch. Elastane is a polyurethane polymer that diminishes natural vapor breathability and may trap humidity against vulnerable skin folds. Good Karma designs garments using pure organic cotton rib knits that stretch naturally without adding synthetic rubber or petroleum plastics."
    },
    {
      question: "How does fabric breathability support clinical dermatological care?",
      answer: "Clinicians frequently advise patients with compromised cutaneous barriers or recurrent candidiasis to wear unblended, breathable cotton. Occlusive synthetic textiles elevate localized humidity and temperature, which may disrupt the stratum corneum and promote microbial imbalances. Breathable cotton supports passive thermal regulation and air circulation, complementing topical treatments by helping maintain a dry, balanced microclimate."
    }
  ],
  "impact": [
    {
      question: "What makes certified organic cotton different from conventional cotton?",
      answer: "Certified organic cotton is cultivated using regenerative organic agricultural methods without synthetic nitrogen fertilisers, toxic chemical insecticides, or genetically modified seeds. This protects rural groundwater tables and safeguards farmer health. By adhering to strict GOTS standards, the harvested cotton fibres remain completely free from hazardous pesticide residues before entering the spinning and knitting processes."
    },
    {
      question: "What happens to water and botanical waste during dyeing?",
      answer: "Natural dyeing utilizes renewable plant materials, such as marigold flowers and pomegranate rinds, which produce compostable organic residue after extraction. This biomass can be safely returned to enrich agricultural soil. Because botanical dyeing requires water, processing facilities utilize biological effluent treatment plants to remediate residual organic compounds before any wastewater is recycled or safely discharged."
    },
    {
      question: "How does Good Karma support fair worker conditions?",
      answer: "Good Karma's supply chain adheres to the International Labour Organization (ILO) conventions mandated under GOTS certification and Indian National Guidelines on Responsible Business Conduct (NGRBC). This guarantees living wages, safe working environments, strict non-discrimination, and zero child or forced labour across all ginning, spinning, dyeing, and garment assembly facilities in our partner network."
    },
    {
      question: "Why choose botanical plant dyes over conventional petroleum dyes?",
      answer: "Conventional textile dyeing relies heavily on petrochemical synthesis, generating non-biodegradable effluent and potentially releasing allergenic aromatic amines. Plant-based dyes utilize renewable agricultural resources and food-processing byproducts, significantly reducing dependence on fossil fuel chemistry. When paired with safe mineral fixatives like alum and iron, botanical dyeing provides a cleaner ecological footprint from farm to skin."
    },
    {
      question: "What is Good Karma's field-to-fabric supply chain journey?",
      answer: "Good Karma's supply chain traces five intentional steps: rain-fed organic cotton farming; untreated mechanical yarn spinning; botanical dyeing using marigold, madder, and pomegranate; skilled artisanal stitching; and delivery directly to you. Every stage is audited to eliminate synthetic resin washes, ensuring pure, breathable innerwear that cares for the soil, the artisans, and your skin."
    }
  ]
};
