import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BEST AGRICULTURE — Entreprise Agricole",
    short_name: "Best Agriculture",
    description:
      "Productions agricoles, conseils agronomiques, suivi des producteurs et vente de produits phytosanitaires & intrants à Dschang Foreke et Santchou.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf8f4",
    theme_color: "#163525",
    lang: "fr",
    icons: [
      {
        src: "/images/logo-best-agriculture.png",
        sizes: "222x252",
        type: "image/png",
      },
    ],
  };
}
