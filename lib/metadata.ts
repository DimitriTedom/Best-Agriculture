import type { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/content";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://best-agriculture.com"
).replace(/\/$/, "");

export const DEFAULT_OG_IMAGE = "/images/hero-highlands.jpg";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  keywords?: string[];
}

export function buildPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  imageAlt = `${COMPANY_INFO.name} — Dschang Foreke & Santchou, Cameroun`,
  keywords = [],
}: PageMetadataOptions): Metadata {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}${normalizedPath === "/" ? "" : normalizedPath}`;

  return {
    title,
    description,
    keywords: [
      "Best Agriculture",
      "entreprise agricole Dschang",
      "Dschang Foreke",
      "Santchou Menoua",
      "produits phytosanitaires Cameroun",
      "intrants agricoles Ouest Cameroun",
      ...keywords,
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: "fr_CM",
      alternateLocale: ["en_CM"],
      url: canonicalUrl,
      siteName: COMPANY_INFO.name,
      title: `${title} | ${COMPANY_INFO.name}`,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${COMPANY_INFO.name}`,
      description,
      images: [image],
    },
  };
}
