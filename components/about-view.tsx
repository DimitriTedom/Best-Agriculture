"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Building2, Leaf, MapPin, ShieldCheck, Sprout } from "lucide-react";

import { useLanguage } from "@/components/language-provider";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/content";

export function AboutView() {
  const { locale } = useLanguage();

  const values =
    locale === "fr"
      ? [
          {
            icon: ShieldCheck,
            title: "Rigueur & Traçabilité",
            desc: "Nous distribuons exclusivement des intrants fiables et conseillons des doses conformes aux bonnes pratiques agronomiques.",
          },
          {
            icon: Sprout,
            title: "Proximité Producteur",
            desc: "Notre expertise s'exprime d'abord sur le terrain, aux côtés des agriculteurs de Dschang, Santchou et de toute la Menoua.",
          },
          {
            icon: Leaf,
            title: "Agriculture Durable",
            desc: "Préservation de la fertilité des sols volcaniques, lutte raisonnée et intégration agro-pastorale et sylvicole.",
          },
        ]
      : [
          {
            icon: ShieldCheck,
            title: "Rigor & Traceability",
            desc: "We distribute reliable, approved inputs and advise dosages aligned with Good Agricultural Practices.",
          },
          {
            icon: Sprout,
            title: "Close to Farmers",
            desc: "Our expertise starts in the field, standing alongside growers in Dschang, Santchou, and across Menoua.",
          },
          {
            icon: Leaf,
            title: "Sustainable Farming",
            desc: "Preserving fertile volcanic soils through balanced nutrition, integrated pest control, and agroforestry.",
          },
        ];

  return (
    <div>
      {/* Header */}
      <section className="border-b border-border bg-forest-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-harvest-300">
              {locale === "fr" ? "Notre Entreprise" : "Our Enterprise"}
            </p>
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
              {locale === "fr"
                ? "À Propos de Best Agriculture"
                : "About Best Agriculture"}
            </h1>
            <p className="text-base leading-relaxed text-forest-100/85 sm:text-lg">
              {locale === "fr"
                ? "Née au cœur du département de la Menoua, Best Agriculture unit la connaissance agronomique, la production agro-pastorale et la distribution d'intrants de qualité pour moderniser durablement les exploitations."
                : "Born in the heart of the Menoua division, Best Agriculture unites agronomic knowledge, agro-pastoral production, and quality input supply to sustainably modernize local farms."}
            </p>
          </div>
        </div>
      </section>

      {/* Story Split */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-xl lg:col-span-6">
            <Image
              src="/images/agronomy-advisory.jpg"
              alt="Équipe agronomique Best Agriculture sur le terrain dans l'Ouest Cameroun"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-5 lg:col-span-6">
            <h2 className="font-serif text-3xl font-bold text-foreground">
              {locale === "fr"
                ? "Une vision pragmatique au service de la réussite des producteurs"
                : "A pragmatic vision dedicated to farmer success"}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              {locale === "fr"
                ? "Portée par un fort ancrage local dans l'Ouest Cameroun, Best Agriculture est une entreprise agricole structurée qui intervient aussi bien dans la production (agriculture, activités agro-pastorales, horticulture et sylviculture) que dans le conseil et la fourniture de produits phytosanitaires et d'intrants."
                : "Rooted in West Cameroon, Best Agriculture is a structured agricultural enterprise active in production (crop farming, agro-pastoral operations, horticulture, and silviculture) as well as agronomic consulting and farm input distribution."}
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              {locale === "fr"
                ? "Parce que chaque campagne compte, nous accompagnons les producteurs individuels, les GIC et les coopératives avec des solutions concrètes, adaptées aux réalités climatiques des hauts plateaux de Dschang et de la plaine de Santchou."
                : "Because every season counts, we support individual farmers, CIGs, and cooperatives with practical solutions tailored to the microclimates of the Dschang highlands and the Santchou plains."}
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {values.map((val, i) => {
            const Icon = val.icon;
            return (
              <BlurFade key={val.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-100 text-forest-800">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-bold text-foreground">{val.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{val.desc}</p>
                </div>
              </BlurFade>
            );
          })}
        </div>

        {/* Locations & Official Credentials */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-secondary/50 p-8">
            <div className="flex items-center gap-3 text-forest-800">
              <MapPin className="h-6 w-6" />
              <h3 className="font-serif text-2xl font-bold text-foreground">
                {locale === "fr" ? "Nos Implantations" : "Our Locations"}
              </h3>
            </div>
            <div className="mt-6 space-y-5">
              <div className="rounded-2xl border border-border bg-card p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-forest-700">
                  {locale === "fr" ? "Siège & Comptoir Commercial" : "Headquarters & Inputs Counter"}
                </p>
                <p className="mt-1 font-serif text-lg font-bold text-foreground">Dschang Foreke</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {locale === "fr"
                    ? "Accueil des producteurs, conseils agronomiques, vente de produits phytosanitaires, semences, engrais et équipements."
                    : "Farmer reception, agronomic advisory, sale of phytosanitary products, seeds, fertilizers, and equipment."}
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-earth-700">
                  {locale === "fr" ? "Site de Production Agro-Pastorale" : "Agro-Pastoral Production Site"}
                </p>
                <p className="mt-1 font-serif text-lg font-bold text-foreground">
                  Kassalafam, Santchou (Menoua)
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {locale === "fr"
                    ? "Exploitation agricole, activités agro-pastorales, horticulture et sylviculture dans la plaine fertile de Santchou."
                    : "Crop farming, agro-pastoral operations, horticulture, and silviculture in the fertile plains of Santchou."}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-forest-950 p-8 text-white">
            <div className="flex items-center gap-3 text-harvest-300">
              <Award className="h-6 w-6" />
              <h3 className="font-serif text-2xl font-bold">
                {locale === "fr" ? "Identité & Mentions Officielles" : "Official Credentials"}
              </h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-forest-200/80">
              {locale === "fr"
                ? "Best Agriculture opère en toute transparence administrative et fiscale auprès des institutions camerounaises."
                : "Best Agriculture operates with full administrative and fiscal compliance under Cameroonian regulations."}
            </p>
            <dl className="mt-6 space-y-4 text-sm">
              <div className="flex flex-col justify-between gap-1 border-b border-forest-800 pb-3 sm:flex-row">
                <dt className="text-forest-300">
                  {locale === "fr" ? "Dénomination" : "Registered Name"}
                </dt>
                <dd className="font-semibold text-white">{COMPANY_INFO.name}</dd>
              </div>
              <div className="flex flex-col justify-between gap-1 border-b border-forest-800 pb-3 sm:flex-row">
                <dt className="text-forest-300">
                  {locale === "fr" ? "N° Contribuable" : "Taxpayer ID"}
                </dt>
                <dd className="font-mono font-semibold text-harvest-300">{COMPANY_INFO.taxId}</dd>
              </div>
              <div className="flex flex-col justify-between gap-1 border-b border-forest-800 pb-3 sm:flex-row">
                <dt className="text-forest-300">N° RCCM</dt>
                <dd className="font-mono font-semibold text-harvest-300">{COMPANY_INFO.rccm}</dd>
              </div>
              <div className="flex flex-col justify-between gap-1 border-b border-forest-800 pb-3 sm:flex-row">
                <dt className="text-forest-300">
                  {locale === "fr" ? "Objet social" : "Scope"}
                </dt>
                <dd className="text-right font-medium text-forest-100">
                  {locale === "fr"
                    ? "Agriculture, Agro-pastoral, Horticulture, Sylviculture & Intrants"
                    : "Agriculture, Agro-pastoral, Horticulture, Silviculture & Inputs"}
                </dd>
              </div>
              <div className="flex flex-col justify-between gap-1 sm:flex-row">
                <dt className="text-forest-300">
                  {locale === "fr" ? "Direction / Promotion" : "Founder / Promoter"}
                </dt>
                <dd className="font-medium text-forest-100">{COMPANY_INFO.promoter}</dd>
              </div>
            </dl>
            <div className="mt-8">
              <Button
                asChild
                className="w-full rounded-full bg-harvest-400 font-semibold text-forest-950 hover:bg-harvest-300"
              >
                <Link href="/contact">
                  <Building2 className="mr-2 h-4 w-4" />
                  {locale === "fr" ? "Entrer en contact avec nous" : "Get in touch with us"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
