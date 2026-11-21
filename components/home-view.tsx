"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
  Sprout,
  Tractor,
  Trees,
  Users,
} from "lucide-react";

import { useLanguage } from "@/components/language-provider";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import NumberTicker from "@/components/ui/number-ticker";
import {
  COMPANY_INFO,
  PRODUCTS_DATA,
  SERVICES_DATA,
  SITE_COPY,
  getWhatsAppLink,
  type ServiceItem,
} from "@/lib/content";

const SERVICE_ICONS: Record<ServiceItem["icon"], React.ComponentType<{ className?: string }>> = {
  sprout: Sprout,
  compass: Compass,
  users: Users,
  shield: Shield,
  tractor: Tractor,
  trees: Trees,
};

export function HomeView() {
  const { locale } = useLanguage();
  const featuredProducts = PRODUCTS_DATA.slice(0, 4);

  const waHref = getWhatsAppLink(
    locale === "fr"
      ? "Bonjour Best Agriculture, je souhaite parler à un agronome."
      : "Hello Best Agriculture, I would like to speak with an agronomist."
  );

  return (
    <div className="overflow-x-clip">
      {/* HERO SECTION */}
      <section className="relative isolate min-h-[82vh] w-full overflow-hidden bg-forest-950">
        <Image
          src="/images/hero-highlands.jpg"
          alt="Hauts plateaux agricoles de Dschang, Ouest Cameroun — Best Agriculture"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/92 via-forest-950/72 to-forest-950/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-forest-950/30" />

        <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-12 px-4 pb-20 pt-20 sm:px-6 lg:flex-row lg:items-end lg:px-8 lg:pb-24 lg:pt-28">
          <div className="max-w-2xl space-y-6">
            <BlurFade delay={0.05} inView={false}>
              <span className="inline-flex items-center gap-2 rounded-full border border-harvest-400/40 bg-forest-900/75 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-harvest-300 backdrop-blur-sm">
                <Sprout className="h-3.5 w-3.5" />
                {SITE_COPY.hero.badge[locale]}
              </span>
            </BlurFade>

            <BlurFade delay={0.14} inView={false}>
              <h1 className="font-serif text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {SITE_COPY.hero.titleLine1[locale]}
                <span className="mt-1 block text-harvest-300">
                  {SITE_COPY.hero.titleLine2[locale]}
                </span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.22} inView={false}>
              <p className="max-w-xl text-base leading-relaxed text-forest-100/90 sm:text-lg">
                {SITE_COPY.hero.subtitle[locale]}
              </p>
            </BlurFade>

            <BlurFade delay={0.3} inView={false}>
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-harvest-400 px-7 text-forest-950 font-semibold hover:bg-harvest-300"
                >
                  <Link href="/produits">
                    {SITE_COPY.hero.primaryCta[locale]}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/30 bg-white/10 px-6 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
                >
                  <a href={waHref} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4 text-harvest-300" />
                    {SITE_COPY.hero.secondaryCta[locale]}
                  </a>
                </Button>
              </div>
            </BlurFade>
          </div>

          {/* Floating Field Counter Card */}
          <BlurFade delay={0.36} inView={false} className="w-full max-w-sm lg:mb-2">
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-forest-950/80 p-6 text-white shadow-2xl backdrop-blur-md">
              <BorderBeam size={80} duration={9} colorFrom="#fcd647" colorTo="#3d845b" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-harvest-300">
                    {SITE_COPY.hero.floatingCardTitle[locale]}
                  </p>
                  <p className="mt-1 font-serif text-lg font-semibold">
                    {SITE_COPY.hero.floatingCardSub[locale]}
                  </p>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-harvest-400/15 text-harvest-300">
                  <MapPin className="h-5 w-5" />
                </span>
              </div>
              <div className="mt-5 space-y-2 border-t border-white/10 pt-4 text-sm text-forest-100/85">
                <div className="flex items-center justify-between">
                  <span className="text-forest-300">{locale === "fr" ? "Téléphone" : "Phone"}</span>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="font-semibold text-white hover:text-harvest-300"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-forest-300">
                    {locale === "fr" ? "N° Contribuable" : "Tax ID"}
                  </span>
                  <span className="font-mono text-xs text-harvest-200">{COMPANY_INFO.taxId}</span>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* MARQUEE RIBBON */}
      <section className="border-y border-forest-900/15 bg-forest-900 py-3 text-forest-50">
        <Marquee pauseOnHover className="[--duration:34s]">
          {SITE_COPY.trustMarquee[locale].map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-3 px-4 text-xs font-semibold uppercase tracking-[0.18em] text-forest-100"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-harvest-400" />
              {item}
            </span>
          ))}
        </Marquee>
      </section>

      {/* STATS STRIP */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-y divide-border sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {SITE_COPY.stats.map((stat, idx) => (
            <div key={idx} className="px-6 py-8 text-center sm:text-left">
              <div className="font-serif text-3xl font-bold text-forest-800 sm:text-4xl">
                <NumberTicker value={stat.value} className="text-forest-800" />
                <span>{stat.suffix}</span>
              </div>
              <p className="mt-1.5 text-sm font-medium text-muted-foreground">
                {stat.label[locale]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-forest-700">
              {SITE_COPY.homeSections.servicesEyebrow[locale]}
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {SITE_COPY.homeSections.servicesTitle[locale]}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              {SITE_COPY.homeSections.servicesSubtitle[locale]}
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="w-fit rounded-full border-forest-800/30 text-forest-900 hover:bg-forest-50"
          >
            <Link href="/services">
              {SITE_COPY.homeSections.viewAllServices[locale]}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_DATA.map((service, index) => {
            const Icon = SERVICE_ICONS[service.icon];
            return (
              <BlurFade key={service.id} delay={index * 0.06}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-forest-500/40 hover:shadow-lg">
                  <div className="relative h-52 w-full overflow-hidden bg-forest-100">
                    <Image
                      src={service.image}
                      alt={service.title[locale]}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-forest-950/80 text-harvest-300 backdrop-blur-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground">
                      {service.title[locale]}
                    </h3>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {service.shortDesc[locale]}
                    </p>
                    <Link
                      href={`/services#${service.slug}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-800 transition group-hover:text-forest-600"
                    >
                      {locale === "fr" ? "En savoir plus" : "Learn more"}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </BlurFade>
            );
          })}
        </div>
      </section>

      {/* FEATURED PRODUCTS & INPUTS */}
      <section className="border-y border-border bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="space-y-5 lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-forest-700">
                {SITE_COPY.homeSections.catalogEyebrow[locale]}
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {SITE_COPY.homeSections.catalogTitle[locale]}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {SITE_COPY.homeSections.catalogSubtitle[locale]}
              </p>
              <div className="relative h-64 w-full overflow-hidden rounded-3xl border border-border shadow-md">
                <Image
                  src="/images/phytosanitary-inputs.jpg"
                  alt="Boutique d'intrants agricoles et produits phytosanitaires Best Agriculture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <Button
                asChild
                size="lg"
                className="rounded-full bg-forest-800 px-7 text-white hover:bg-forest-900"
              >
                <Link href="/produits">
                  {SITE_COPY.homeSections.viewFullCatalog[locale]}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {featuredProducts.map((product, i) => (
                <BlurFade key={product.id} delay={i * 0.07}>
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:border-forest-500/40">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="rounded-full bg-forest-100 px-3 py-1 text-xs font-semibold text-forest-800">
                          {product.badge[locale]}
                        </span>
                        <span className="text-xs font-medium text-muted-foreground">
                          {product.packaging[locale]}
                        </span>
                      </div>
                      <h3 className="mt-4 font-serif text-lg font-bold text-foreground">
                        {product.name[locale]}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {product.usage[locale]}
                      </p>
                    </div>
                    <div className="mt-4 border-t border-border/70 pt-3 text-xs font-medium text-earth-700">
                      {locale === "fr" ? "Cultures : " : "Crops: "}
                      {product.targetCrops[locale]}
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TERRITORIAL FOOTPRINT: DSCHANG FOREKE + SANTCHOU */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-xl">
              <Image
                src="/images/agropastoral-santchou.jpg"
                alt="Exploitation agro-pastorale à Santchou, Menoua, Cameroun"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:-mt-10 sm:px-6">
              <div className="relative z-10 rounded-2xl border border-border bg-card p-4 shadow-lg">
                <p className="text-xs font-bold uppercase tracking-wider text-forest-700">
                  {locale === "fr" ? "Siège & Boutique" : "HQ & Supply Store"}
                </p>
                <p className="mt-1 font-serif text-lg font-bold text-foreground">Dschang Foreke</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {locale === "fr" ? "Conseils & vente d'intrants" : "Advisory & inputs counter"}
                </p>
              </div>
              <div className="relative z-10 rounded-2xl border border-border bg-card p-4 shadow-lg">
                <p className="text-xs font-bold uppercase tracking-wider text-earth-700">
                  {locale === "fr" ? "Site de Production" : "Production Site"}
                </p>
                <p className="mt-1 font-serif text-lg font-bold text-foreground">Santchou</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {locale === "fr" ? "Kassalafam • Agro-pastoral" : "Kassalafam • Agro-pastoral"}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-forest-700">
              {SITE_COPY.homeSections.territoryEyebrow[locale]}
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {SITE_COPY.homeSections.territoryTitle[locale]}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              {SITE_COPY.homeSections.territoryDesc[locale]}
            </p>
            <ul className="space-y-3 text-sm text-foreground/90">
              {(locale === "fr"
                ? [
                    "Accès rapide aux intrants phytosanitaires certifiés à Dschang Foreke",
                    "Suivi agronomique mobile dans tout le département de la Menoua",
                    "Production agro-pastorale, horticole et sylvicole ancrée à Santchou",
                  ]
                : [
                    "Fast access to certified phytosanitary inputs in Dschang Foreke",
                    "Mobile agronomic field monitoring across the Menoua division",
                    "Agro-pastoral, horticultural, and silvicultural production in Santchou",
                  ]
              ).map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-forest-700" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Button
                asChild
                variant="outline"
                className="rounded-full border-forest-800/30 text-forest-900 hover:bg-forest-50"
              >
                <Link href="/a-propos">
                  {locale === "fr" ? "Découvrir notre histoire" : "Discover our story"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA BAND */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-forest-900 px-6 py-14 text-center text-white shadow-xl sm:px-12 lg:py-16">
          <div className="mx-auto max-w-2xl space-y-5">
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
              {SITE_COPY.homeSections.ctaTitle[locale]}
            </h2>
            <p className="text-base leading-relaxed text-forest-100/85">
              {SITE_COPY.homeSections.ctaSubtitle[locale]}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-harvest-400 px-8 font-semibold text-forest-950 hover:bg-harvest-300"
              >
                <Link href="/contact">
                  {locale === "fr" ? "Envoyer une demande" : "Send a Request"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/25 bg-white/10 px-7 text-white hover:bg-white/20 hover:text-white"
              >
                <a href={`tel:${COMPANY_INFO.phoneRaw}`}>
                  <Phone className="mr-2 h-4 w-4 text-harvest-300" />
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
