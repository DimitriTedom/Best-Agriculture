import type { Metadata } from "next";
import { ContactView } from "@/components/contact-view";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact & Devis",
  description:
    "Contactez Best Agriculture à Dschang Foreke (+237 650 66 53 83, bestagriculture6@gmail.com) pour un conseil agronomique, un suivi de parcelle ou un devis d'intrants.",
  path: "/contact",
  image: "/images/horticulture-harvest.jpg",
  imageAlt: "Contacter BEST AGRICULTURE à Dschang Foreke, Cameroun",
});

export default function ContactPage() {
  return <ContactView />;
}
