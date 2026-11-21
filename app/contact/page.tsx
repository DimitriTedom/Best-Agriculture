import type { Metadata } from "next";
import { ContactView } from "@/components/contact-view";

export const metadata: Metadata = {
  title: "Contact & Devis",
  description:
    "Contactez Best Agriculture à Dschang Foreke (+237 650 66 53 83, bestagriculture6@gmail.com) pour un conseil agronomique, un suivi de parcelle ou un devis d'intrants.",
};

export default function ContactPage() {
  return <ContactView />;
}
