import type { Metadata } from "next";
import { HomeView } from "@/components/home-view";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Entreprise Agricole à Dschang & Santchou, Cameroun",
  description:
    "Productions agricoles, conseils agronomiques, accompagnement des producteurs et vente de produits phytosanitaires & intrants certifiés à Dschang Foreke et Santchou.",
  path: "/",
  image: "/images/hero-highlands.jpg",
  imageAlt: "Hauts plateaux agricoles de Dschang — BEST AGRICULTURE",
});

export default function HomePage() {
  return <HomeView />;
}
