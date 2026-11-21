import type { Metadata } from "next";
import { ServicesView } from "@/components/services-view";

export const metadata: Metadata = {
  title: "Services Agricoles & Agronomiques",
  description:
    "Productions agricoles, conseils agronomiques, accompagnement des producteurs, produits phytosanitaires, agro-pastoralisme, horticulture et sylviculture à Dschang et Santchou.",
};

export default function ServicesPage() {
  return <ServicesView />;
}
