"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { MessageCircle, PackageCheck, Search, ShieldCheck, Sprout } from "lucide-react";

import { useLanguage } from "@/components/language-provider";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  PRODUCTS_DATA,
  getWhatsAppLink,
  type ProductCategory,
} from "@/lib/content";
import { cn } from "@/lib/utils";

export function ProductsView() {
  const { locale } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("all");
  const [query, setQuery] = useState("");

  const categories: { id: ProductCategory; label: { fr: string; en: string } }[] = [
    { id: "all", label: { fr: "Tous les intrants", en: "All Inputs" } },
    { id: "phytosanitaires", label: { fr: "Produits Phytosanitaires", en: "Crop Protection" } },
    { id: "engrais", label: { fr: "Engrais & Amendements", en: "Fertilizers & Soil" } },
    { id: "semences", label: { fr: "Semences & Plants", en: "Seeds & Saplings" } },
    { id: "materiel", label: { fr: "Matériel & EPI", en: "Equipment & PPE" } },
  ];

  const filteredProducts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS_DATA.filter((item) => {
      const matchesCat = activeCategory === "all" || item.category === activeCategory;
      if (!matchesCat) return false;
      if (!q) return true;
      return (
        item.name[locale].toLowerCase().includes(q) ||
        item.usage[locale].toLowerCase().includes(q) ||
        item.targetCrops[locale].toLowerCase().includes(q)
      );
    });
  }, [activeCategory, query, locale]);

  return (
    <div>
      {/* Header */}
      <section className="border-b border-border bg-forest-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-harvest-400/35 bg-forest-900/70 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-harvest-300">
              <ShieldCheck className="h-3.5 w-3.5" />
              {locale === "fr"
                ? "Comptoir Agricole • Dschang Foreke"
                : "Agricultural Counter • Dschang Foreke"}
            </span>
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
              {locale === "fr"
                ? "Produits Phytosanitaires & Intrants Agricoles"
                : "Phytosanitary Products & Farm Inputs"}
            </h1>
            <p className="text-base leading-relaxed text-forest-100/85 sm:text-lg">
              {locale === "fr"
                ? "Parcourez nos gammes d'intrants homologués, engrais, semences certifiées et équipements. Chaque achat inclut un conseil de dosage et d'application sécurisée."
                : "Browse our approved crop protection products, fertilizers, certified seeds, and equipment. Every purchase includes dosage and safe application advice."}
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-[68px] z-30 border-b border-border bg-background/95 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-semibold transition-all sm:text-sm",
                  activeCategory === cat.id
                    ? "bg-forest-800 text-white shadow-sm"
                    : "border border-border bg-card text-foreground/80 hover:bg-secondary"
                )}
              >
                {cat.label[locale]}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-72">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={
                locale === "fr"
                  ? "Rechercher (tomate, NPK, mildiou...)"
                  : "Search (tomato, NPK, blight...)"
              }
              className="rounded-full bg-card pl-10"
            />
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {filteredProducts.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border bg-card p-12 text-center">
            <Sprout className="mx-auto h-10 w-10 text-forest-600" />
            <h2 className="mt-4 font-serif text-xl font-bold text-foreground">
              {locale === "fr" ? "Aucun intrant trouvé" : "No matching inputs found"}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {locale === "fr"
                ? "Essayez un autre mot-clé ou contactez notre comptoir de Dschang Foreke pour une demande spécifique."
                : "Try another keyword or contact our Dschang Foreke counter for a specific item."}
            </p>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setActiveCategory("all");
                setQuery("");
              }}
              className="mt-5 rounded-full"
            >
              {locale === "fr" ? "Réinitialiser les filtres" : "Reset filters"}
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product, index) => {
              const waHref = getWhatsAppLink(
                locale === "fr"
                  ? `Bonjour Best Agriculture, je souhaite connaître la disponibilité et le tarif pour : ${product.name.fr} (${product.packaging.fr}).`
                  : `Hello Best Agriculture, I would like availability and pricing for: ${product.name.en} (${product.packaging.en}).`
              );

              return (
                <BlurFade key={product.id} delay={index * 0.04}>
                  <article className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-forest-500/40 hover:shadow-md">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="rounded-full bg-forest-100 px-3 py-1 text-xs font-semibold text-forest-800">
                          {product.badge[locale]}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-forest-700">
                          <PackageCheck className="h-3.5 w-3.5" />
                          {locale === "fr" ? "Disponible" : "Available"}
                        </span>
                      </div>

                      <h2 className="mt-4 font-serif text-xl font-bold text-foreground">
                        {product.name[locale]}
                      </h2>
                      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                        {product.usage[locale]}
                      </p>

                      <dl className="mt-5 space-y-2 rounded-2xl bg-secondary/60 p-3.5 text-xs">
                        <div className="flex justify-between gap-2">
                          <dt className="font-semibold text-foreground/75">
                            {locale === "fr" ? "Conditionnement" : "Packaging"}
                          </dt>
                          <dd className="text-right font-medium text-foreground">
                            {product.packaging[locale]}
                          </dd>
                        </div>
                        <div className="flex justify-between gap-2">
                          <dt className="font-semibold text-foreground/75">
                            {locale === "fr" ? "Cultures cibles" : "Target crops"}
                          </dt>
                          <dd className="text-right font-medium text-earth-800">
                            {product.targetCrops[locale]}
                          </dd>
                        </div>
                      </dl>
                    </div>

                    <div className="mt-6 flex items-center gap-2.5">
                      <Button
                        asChild
                        className="flex-1 rounded-full bg-forest-800 text-white hover:bg-forest-900"
                      >
                        <a href={waHref} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="mr-2 h-4 w-4" />
                          {locale === "fr" ? "Demander un tarif" : "Request Price"}
                        </a>
                      </Button>
                    </div>
                  </article>
                </BlurFade>
              );
            })}
          </div>
        )}

        {/* Safety Advisory Banner */}
        <div className="mt-14 rounded-3xl border border-harvest-300/60 bg-harvest-50 p-6 sm:p-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl space-y-2">
              <h3 className="font-serif text-xl font-bold text-forest-950">
                {locale === "fr"
                  ? "Besoin d'une prescription personnalisée pour votre culture ?"
                  : "Need a tailored prescription for your crop?"}
              </h3>
              <p className="text-sm leading-relaxed text-earth-900/85">
                {locale === "fr"
                  ? "Les produits phytosanitaires s'utilisent avec précaution. Apportez une photo de votre parcelle ou contactez nos conseillers à Dschang Foreke pour identifier la solution la plus sûre et économique."
                  : "Crop protection products require careful dosing. Share a photo of your field or visit our advisors in Dschang Foreke to identify the safest and most cost-effective solution."}
              </p>
            </div>
            <Button
              asChild
              className="shrink-0 rounded-full bg-forest-900 px-6 text-white hover:bg-forest-950"
            >
              <Link href="/contact">
                {locale === "fr" ? "Consulter un conseiller" : "Consult an Advisor"}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
