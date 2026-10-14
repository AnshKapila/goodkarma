interface SEOArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  image: string;
  datePublished?: string;
  dateModified?: string;
}

export function SEOArticleSchema({
  headline,
  description,
  url,
  image,
  datePublished = "2026-01-01",
  dateModified = "2026-10-14",
}: SEOArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": image.startsWith("http") ? image : `https://goodkarmabrand.com${image}`,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url.startsWith("http") ? url : `https://goodkarmabrand.com${url}`,
    },
    "author": {
      "@type": "Organization",
      "name": "Good Karma",
      "url": "https://goodkarmabrand.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Good Karma",
      "logo": {
        "@type": "ImageObject",
        "url": "https://goodkarmabrand.com/images/logo-dark.png",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
