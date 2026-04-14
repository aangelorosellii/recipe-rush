import { socialImage, siteConfig } from "@/lib/site-config";

export function getCanonical(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function getPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const canonical = getCanonical(path);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: "RecipeRush board game coming soon",
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [socialImage],
    },
  };
}

export function getJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      areaServed: "Switzerland",
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: siteConfig.name,
      brand: siteConfig.name,
      description: siteConfig.description,
      category: "Board Game",
      url: siteConfig.url,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
    },
  ];
}
