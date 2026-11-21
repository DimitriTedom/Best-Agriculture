import type { Metadata } from "next";
import { ProductsView } from "@/components/products-view";

export const metadata: Metadata = {
  title: "Produits Phytosanitaires & Intrants Agricoles",
  description:
    "Catalogue des produits phytosanitaires homologués, engrais, semences certifiées et équipements agricoles disponibles chez Best Agriculture à Dschang Foreke.",
};

export default function ProductsPage() {
  return <ProductsView />;
}
