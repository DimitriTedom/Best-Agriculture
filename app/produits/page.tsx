import type { Metadata } from "next";
import { ProductsView } from "@/components/products-view";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Produits Phytosanitaires & Intrants Agricoles",
  description:
    "Catalogue des produits phytosanitaires homologués, engrais NPK, amendements, semences hybrides F1 certifiées et équipements agricoles disponibles chez Best Agriculture à Dschang Foreke.",
  path: "/produits",
  image: "/images/phytosanitary-inputs.jpg",
  imageAlt: "Comptoir de produits phytosanitaires et intrants agricoles à Dschang Foreke",
  keywords: ["fongicides", "insecticides", "herbicides", "engrais NPK", "semences certifiées"],
});

export default function ProductsPage() {
  return <ProductsView />;
}
