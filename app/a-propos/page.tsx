import type { Metadata } from "next";
import { AboutView } from "@/components/about-view";

export const metadata: Metadata = {
  title: "À Propos",
  description:
    "Découvrez Best Agriculture : notre histoire, nos valeurs, notre siège à Dschang Foreke, notre site agro-pastoral de Santchou et nos références officielles.",
};

export default function AboutPage() {
  return <AboutView />;
}
