import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
}

export function buildMetadata({
  title,
  description,
  image,
  path = "",
}: SEOProps): Metadata {
  const pageTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : SITE_CONFIG.title;
  const pageDescription = description || SITE_CONFIG.description;
  const pageImage = image || SITE_CONFIG.ogImage;
  const url = `${SITE_CONFIG.url}${path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: SITE_CONFIG.name,
      images: [{ url: pageImage }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
    },
    alternates: {
      canonical: url,
    },
  };
}
