"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  MessageCircle,
  Shield,
  Sprout,
  Tractor,
  Trees,
  Users,
} from "lucide-react";

import { useLanguage } from "@/components/language-provider";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { SERVICES_DATA, getWhatsAppLink, type ServiceItem } from "@/lib/content";

const SERVICE_ICONS: Record<ServiceItem["icon"], React.ComponentType<{ className?: string }>> = {
  sprout: Sprout,
  compass: Compass,
  users: Users,
  shield: Shield,
  tractor: Tractor,
  trees: Trees,
};

export function ServicesView() {
  const { locale } = useLanguage();

  const processSteps =
    locale === "fr"
      ? [
          {
            step: "01",
            title: "Écoute & Diagnostic",
            desc: "Analyse de votre parcelle, de votre culture et des contraintes phytosanitaires ou pédologiques.",
          },
          {
            step: "02",
            title: "Prescription Raisonnée",
            desc: "Recommandation d'itinéraire technique, de variétés adaptées et de dosages précis.",
          },
          {
            step: "03",
            title: "Fourniture d'Intrants",
            desc: "Mise à disposition immédiate de produits homologués, semences et engrais à Dschang Foreke.",
          },
          {
            step: "04",
            title: "Suivi jusqu'à la Récolte",
            desc: "Accompagnement terrain et ajustements en cours de campagne pour maximiser votre rendement.",
          },
        ]
      : [
          {
            step: "01",
            title: "Listening & Diagnosis",
            desc: "Assessment of your plot, crop variety, and phytosanitary or soil constraints.",
          },
          {
            step: "02",
            title: "Tailored Prescription",
            desc: "Clear technical schedule, adapted varieties, and safe dosage recommendations.",
          },
          {
            step: "03",
            title: "Certified Input Supply",
            desc: "Immediate availability of approved crop protection, seeds, and fertilizers in Dschang Foreke.",
          },
          {
            step: "04",
            title: "Field Follow-Up",
            desc: "On-field coaching and mid-season adjustments to secure your harvest yield.",
          },
        ];

  return (
    <div>
      {/* Page Hero */}
      <section className="border-b border-border bg-forest-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-harvest-300">
              {locale === "fr" ? "Expertise Terrain • Ouest Cameroun" : "Field Expertise • West Cameroon"}
            </p>
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
              {locale === "fr"
                ? "Nos Services Agricoles & Agronomiques"
                : "Our Agricultural & Agronomic Services"}
            </h1>
            <p className="text-base leading-relaxed text-forest-100/85 sm:text-lg">
              {locale === "fr"
                ? "Productions, conseils, accompagnement et suivi des producteurs, distribution d'intrants phytosanitaires, agro-pastoralisme, horticulture et sylviculture."
                : "Crop production, agronomic advisory, farmer monitoring, phytosanitary & farm inputs supply, agro-pastoralism, horticulture, and silviculture."}
            </p>
          </div>
        </div>
      </section>

      {/* Process Ribbon */}
      <section className="border-b border-border bg-secondary/50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <span className="font-serif text-2xl font-bold text-harvest-600">{item.step}</span>
                <h2 className="mt-2 font-serif text-lg font-bold text-foreground">{item.title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services List */}
      <section className="mx-auto max-w-7xl space-y-16 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {SERVICES_DATA.map((service, index) => {
          const Icon = SERVICE_ICONS[service.icon];
          const isReversed = index % 2 === 1;
          const waHref = getWhatsAppLink(
            locale === "fr"
              ? `Bonjour Best Agriculture, je souhaite en savoir plus sur votre service : ${service.title.fr}.`
              : `Hello Best Agriculture, I would like more information about your service: ${service.title.en}.`
          );

          return (
            <BlurFade key={service.id} delay={0.05}>
              <article
                id={service.slug}
                className="grid scroll-mt-28 items-center gap-10 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:grid-cols-12 lg:p-10"
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-forest-100 lg:col-span-5 ${
                    isReversed ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title[locale]}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>

                <div className={`space-y-5 lg:col-span-7 ${isReversed ? "lg:order-1" : ""}`}>
                  <div className="inline-flex items-center gap-2 rounded-full bg-forest-100 px-3.5 py-1.5 text-xs font-semibold text-forest-800">
                    <Icon className="h-4 w-4" />
                    <span>0{index + 1}</span>
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                    {service.title[locale]}
                  </h2>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {service.fullDesc[locale]}
                  </p>
                  <ul className="space-y-2.5 text-sm text-foreground/90">
                    {service.highlights[locale].map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest-700" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <Button
                      asChild
                      className="rounded-full bg-forest-800 px-6 text-white hover:bg-forest-900"
                    >
                      <a href={waHref} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        {locale === "fr" ? "Demander via WhatsApp" : "Inquire via WhatsApp"}
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full border-forest-800/30 text-forest-900 hover:bg-forest-50"
                    >
                      <Link href="/contact">
                        {locale === "fr" ? "Prendre rendez-vous" : "Book a Consultation"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            </BlurFade>
          );
        })}
      </section>
    </div>
  );
}
