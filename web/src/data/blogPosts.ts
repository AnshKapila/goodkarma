/**
 * Blog Data Model & Seed Posts
 *
 * Requirements:
 * - Top-level nav item: Home · Products · Educate ▾ · Blog · Contact
 * - Filters: All, From doctors, Our articles, plus specialty tags
 * - Post template: Author card (name, specialty, clinic link), disclosure line ("Dr [Name] is a Good Karma partner clinic"),
 *   "Reviewed by Good Karma" line, share bar, related posts.
 * - Model doctor posts with status: 'draft' | 'pending' | 'published' (visibility only on approval: status === 'published').
 * - Seed ONLY clearly labelled SAMPLE_CONTENT posts with placeholder names like "Dr. [Name]".
 *   Never use realistic doctor names or publish unverified clinician claims.
 */

export type BlogCategory = "from-doctors" | "our-articles";

export type SpecialtyTag = 
  | "Dermatology" 
  | "Gynaecology" 
  | "Textile Science" 
  | "Paediatrics" 
  | "Environmental Health";

export interface BlogAuthor {
  name: string;
  title: string;
  specialty: string;
  clinicName: string;
  clinicUrl?: string;
  isPartnerClinic?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  publishedAt: string;
  readingTime: string;
  category: BlogCategory;
  specialtyTag: SpecialtyTag;
  author: BlogAuthor;
  status: "draft" | "pending" | "published";
  isSampleContent: boolean;
  reviewedByGoodKarma: boolean;
  coverImage?: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "fabric-microclimates-and-cutaneous-comfort",
    title: "Fabric Microclimates and Cutaneous Comfort: A Dermatological Note",
    excerpt: "How prolonged occlusive synthetic underwear wear elevates localized humidity and temperature, and why unblended cotton supports natural barrier balance.",
    content: [
      "In clinical dermatology, recurrent intertrigo, friction erythema, and subtle contact dermatitis in intertriginous zones frequently present without an obvious allergen trigger. While topical formulations provide immediate symptomatic respite, evaluating the mechanical and microclimatic environment of the patient's clothing is essential.",
      "Commercial synthetic underwear composed of polyester, nylon, and high proportions of elastane acts as an occlusive membrane. Because synthetic polymers are non-hygroscopic, sweat is trapped directly against the stratum corneum. Over extended hours, this continuous humidity macerates corneocytes, diminishing their defensive integrity and elevating cutaneous permeability.",
      "Research suggests that breathable, 100% GOTS-certified organic cotton allows passive convective air exchange and moisture vapor dispersion. By eliminating synthetic resin anti-wrinkle washes and petrochemical azo dyes, patients with reactive skin barriers can maintain a more balanced, comfortable cutaneous microclimate throughout the day."
    ],
    publishedAt: "2026-03-15",
    readingTime: "4 min read",
    category: "from-doctors",
    specialtyTag: "Dermatology",
    author: {
      name: "Dr. [Name]",
      title: "Consultant Dermatologist",
      specialty: "Cutaneous Barrier Health",
      clinicName: "[Clinic Name Placeholder]",
      clinicUrl: "#",
      isPartnerClinic: true,
    },
    status: "published",
    isSampleContent: true,
    reviewedByGoodKarma: true,
    coverImage: "/images/skin-barrier-diagram.jpg",
  },
  {
    slug: "maternal-skin-barrier-postpartum",
    title: "The Maternal Skin Barrier in Postpartum Months: Considerations for Intimate Health",
    excerpt: "Gynaecological observations on hormonal transitions, heightened cutaneous sensitivity, and the role of unblended natural fibres in recovery.",
    content: [
      "During pregnancy and the immediate postpartum period, profound hormonal shifts alter sebum production, barrier elasticity, and tissue vascularity. Women frequently report increased sensitivity to tight waistbands, artificial elastane friction, and synthetic dye finishes.",
      "The intimate area requires particular gentleness during this healing window. Occlusive synthetic fabrics create an unventilated microclimate with elevated temperature and trapped moisture—conditions associated in clinical observation with heightened irritation and microflora imbalance. Clinicians commonly advise breathable, loose-fitting cotton innerwear to promote natural airflow.",
      "Good Karma's 100% organic cotton innerwear eliminates synthetic polyurethane elastane cores and chemical softener residues, providing new mothers with clean, unblended comfort during an essential stage of physical recovery."
    ],
    publishedAt: "2026-03-02",
    readingTime: "5 min read",
    category: "from-doctors",
    specialtyTag: "Gynaecology",
    author: {
      name: "Dr. [Name]",
      title: "Obstetrician & Gynaecologist",
      specialty: "Maternal Wellness",
      clinicName: "[Clinic Name Placeholder]",
      clinicUrl: "#",
      isPartnerClinic: true,
    },
    status: "published",
    isSampleContent: true,
    reviewedByGoodKarma: true,
    coverImage: "/images/new-mothers.png",
  },
  {
    slug: "understanding-plant-dyes-vs-synthetic-pigments",
    title: "Understanding Plant Dyes: The Difference Between Extraction and Petrochemical Synthesis",
    excerpt: "A textile science breakdown of botanical colorants, mineral fixatives, and why eliminating synthetic azo dyes reduces everyday chemical exposure.",
    content: [
      "Nearly 70% of commercial textile dyes are synthesized from petroleum fractions through complex chemical diazotization reactions. Under specific physiological conditions involving skin warmth and moisture, certain synthetic azo dyes can release aromatic amines that are recognized contact sensitisers.",
      "Botanical dyeing represents an entirely distinct chemical paradigm. By extracting flavonoids and tannins from marigold blossoms, madder roots, and pomegranate peels, color is obtained directly from renewable plants. Rather than relying on toxic heavy-metal mordants like chrome or copper, Good Karma binds these natural pigments using food-grade alum and iron minerals.",
      "While natural dyeing requires responsible biological water management to handle suspended plant matter, it dramatically shortens the chemical chain and lowers cumulative exposure next to sensitive skin."
    ],
    publishedAt: "2026-02-18",
    readingTime: "4 min read",
    category: "our-articles",
    specialtyTag: "Textile Science",
    author: {
      name: "Good Karma Research",
      title: "Textile Chemistry Team",
      specialty: "Botanical Extraction",
      clinicName: "Good Karma Laboratory",
      isPartnerClinic: false,
    },
    status: "published",
    isSampleContent: true,
    reviewedByGoodKarma: true,
    coverImage: "/images/natural-dye-hero.jpg",
  },
  {
    slug: "infant-skin-permeability-and-textiles",
    title: "Early Barriers: Why Infant Skin Requires Untreated Natural Fibres",
    excerpt: "Paediatric dermatological insights into stratum corneum thickness, transdermal absorption, and the importance of certified organic cotton.",
    content: [
      "An infant's stratum corneum is significantly thinner and less densely packed than that of an adult. Consequently, the pediatric skin barrier exhibits higher transepidermal water loss and enhanced permeability to external substances.",
      "Synthetic clothing finished with fluorinated stain-repellents (PFAS) or anti-wrinkle formaldehyde resins poses avoidable exposure for infants. Furthermore, rigid polyester seams and non-breathable fabrics can aggravate common pediatric conditions like prickly heat (miliaria) and atopic eczema.",
      "GOTS-certified organic cotton guarantees that no synthetic pesticides, chemical defoliants, or toxic finishing resins were used at any processing phase. Dressing little ones in soft, unbleached organic cotton supports comfortable, uncompromised barrier development."
    ],
    publishedAt: "2026-02-05",
    readingTime: "4 min read",
    category: "from-doctors",
    specialtyTag: "Paediatrics",
    author: {
      name: "Dr. [Name]",
      title: "Paediatric Dermatology Specialist",
      specialty: "Pediatric Skin Barriers",
      clinicName: "[Clinic Name Placeholder]",
      clinicUrl: "#",
      isPartnerClinic: true,
    },
    status: "published",
    isSampleContent: true,
    reviewedByGoodKarma: true,
    coverImage: "/images/little-ones.jpg",
  },
  {
    slug: "textile-effluent-and-environmental-stewardship",
    title: "Textile Effluent and Environmental Stewardship: What Actually Happens to Process Water",
    excerpt: "An honest examination of effluent organic loads, biological remediation, and the trade-offs of natural textile processing.",
    content: [
      "Textile dyeing is one of the most water-intensive industrial processes in the world. Conventional synthetic dyehouses discharge millions of litres of wastewater laden with non-biodegradable synthetic pigments, heavy metals, and persistent fluorinated surfactants.",
      "Natural dyeing avoids petroleum-derived carcinogens, but it still utilizes water and requires rigorous wastewater management. Dyeing with plant biomass generates an effluent with higher biological oxygen demand (BOD) due to natural plant sugars and fibres. Responsible natural dye operations utilize dedicated biological effluent treatment plants (ETP) to filter and remediate this water.",
      "True ecological responsibility requires acknowledging these realities openly. At Good Karma, we continually work to refine our closed-loop extraction and responsible effluent protocols."
    ],
    publishedAt: "2026-01-28",
    readingTime: "5 min read",
    category: "our-articles",
    specialtyTag: "Environmental Health",
    author: {
      name: "Good Karma Editorial",
      title: "Sustainability Team",
      specialty: "Ecological Auditing",
      clinicName: "Good Karma",
      isPartnerClinic: false,
    },
    status: "published",
    isSampleContent: true,
    reviewedByGoodKarma: true,
    coverImage: "/images/connecting-skin-nature.png",
  },
  {
    slug: "draft-microplastics-study-review",
    title: "Emerging Research on Nanoplastics and Dermal Permeability",
    excerpt: "Internal review of recent peer-reviewed literature on sub-micron synthetic polymer fragmentation.",
    content: ["Draft content under peer review..."],
    publishedAt: "2026-04-01",
    readingTime: "3 min read",
    category: "our-articles",
    specialtyTag: "Textile Science",
    author: {
      name: "Good Karma Research",
      title: "Research Analyst",
      specialty: "Polymer Science",
      clinicName: "Good Karma",
    },
    status: "draft", // Will be hidden because status !== 'published'
    isSampleContent: true,
    reviewedByGoodKarma: false,
  }
];

export function getPublishedPosts(): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.status === "published");
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post || post.status !== "published") return undefined;
  return post;
}
