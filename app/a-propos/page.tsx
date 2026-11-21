import type { Metadata } from "next";
import { AboutView } from "@/components/about-view";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "À Propos",
  description:
    "Découvrez Best Agriculture : notre histoire, nos valeurs, notre siège commercial à Dschang Foreke, notre site agro-pastoral de Kassalafam (Santchou) et nos références officielles.",
  path: "/a-propos",
  image: "/images/agropastoral-santchou.jpg",
  imageAlt: "Site de production agro-pastorale de Santchou — BEST AGRICULTURE",
});

export default function AboutPage() {
  return <AboutView />;
}
