import { COMPANY_INFO } from "@/lib/content";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/metadata";

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Store"],
    "@id": `${SITE_URL}/#organization`,
    name: COMPANY_INFO.name,
    description:
      "Entreprise agricole agréée à Dschang Foreke et Santchou (Menoua, Ouest Cameroun) : productions agricoles, conseils agronomiques, accompagnement et suivi des producteurs, vente de produits phytosanitaires et intrants agricoles.",
    url: SITE_URL,
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    logo: `${SITE_URL}/images/logo-best-agriculture.png`,
    telephone: COMPANY_INFO.phoneRaw,
    email: COMPANY_INFO.email,
    taxID: COMPANY_INFO.taxId,
    identifier: [
      {
        "@type": "PropertyValue",
        name: "N° Contribuable",
        value: COMPANY_INFO.taxId,
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Foreke Dschang",
      addressLocality: "Dschang",
      addressRegion: "Région de l'Ouest",
      addressCountry: "CM",
    },
    areaServed: [
      { "@type": "City", name: "Dschang" },
      { "@type": "City", name: "Santchou" },
      { "@type": "AdministrativeArea", name: "Menoua" },
      { "@type": "AdministrativeArea", name: "Région de l'Ouest, Cameroun" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:30",
        closes: "18:00",
      },
    ],
    knowsAbout: [
      "Productions agricoles",
      "Conseils agronomiques",
      "Accompagnement et suivi des producteurs",
      "Produits phytosanitaires",
      "Intrants agricoles",
      "Entreprises agro-pastorales",
      "Horticulture",
      "Sylviculture",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
