import type { Metadata } from "next";
import { ServicesView } from "@/components/services-view";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Services Agricoles & Agronomiques",
  description:
    "Productions agricoles, conseils agronomiques, accompagnement et suivi des producteurs, produits phytosanitaires, agro-pastoralisme, horticulture et sylviculture à Dschang et Santchou.",
  path: "/services",
  image: "/images/agronomy-advisory.jpg",
  imageAlt: "Conseil agronomique et suivi des producteurs — BEST AGRICULTURE",
  keywords: ["conseil agronomique", "suivi des producteurs", "horticulture", "sylviculture"],
});

export default function ServicesPage() {
  return <ServicesView />;
}
