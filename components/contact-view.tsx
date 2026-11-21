"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sprout,
} from "lucide-react";

import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { COMPANY_INFO, getWhatsAppLink } from "@/lib/content";

const contactFormSchema = z.object({
  fullName: z.string().trim().min(2, "Veuillez indiquer votre nom complet / Please enter your name."),
  phone: z.string().trim().min(6, "Veuillez indiquer un numéro valide / Please enter a valid phone number."),
  email: z
    .string()
    .trim()
    .email("Adresse email invalide / Invalid email address.")
    .optional()
    .or(z.literal("")),
  subject: z.string().trim().min(2, "Veuillez choisir un objet / Please select a subject."),
  message: z.string().trim().min(10, "Décrivez brièvement votre besoin (10 caractères min.)."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactView() {
  const { locale } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      subject: locale === "fr" ? "Devis produits phytosanitaires & intrants" : "Farm inputs & phytosanitary quote",
      message: "",
    },
  });

  const currentValues = watch();

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setSubmitted(true);
      toast.success(
        locale === "fr"
          ? "Votre demande a bien été envoyée à Best Agriculture !"
          : "Your inquiry has been sent to Best Agriculture!"
      );
      reset();
    } catch {
      toast.error(
        locale === "fr"
          ? "Une erreur est survenue. Vous pouvez nous écrire directement sur WhatsApp."
          : "An error occurred. You can also reach us directly on WhatsApp."
      );
    }
  };

  const subjects =
    locale === "fr"
      ? [
          "Devis produits phytosanitaires & intrants",
          "Conseil agronomique & diagnostic parcelle",
          "Accompagnement et suivi de campagne",
          "Commande de productions agricoles / plants",
          "Partenariat GIC / Coopérative",
        ]
      : [
          "Farm inputs & phytosanitary quote",
          "Agronomic advisory & field diagnostic",
          "Season-long farmer coaching",
          "Agricultural produce / nursery order",
          "Cooperative / CIG partnership",
        ];

  const waDirect = getWhatsAppLink(
    locale === "fr"
      ? `Bonjour Best Agriculture${currentValues.fullName ? `, je suis ${currentValues.fullName}` : ""}. Objet : ${currentValues.subject || "Demande d'information"}. ${currentValues.message || ""}`
      : `Hello Best Agriculture${currentValues.fullName ? `, my name is ${currentValues.fullName}` : ""}. Subject: ${currentValues.subject || "Inquiry"}. ${currentValues.message || ""}`
  );

  return (
    <div>
      {/* Header */}
      <section className="border-b border-border bg-forest-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-harvest-300">
              {locale === "fr" ? "Contact & Devis" : "Contact & Quotes"}
            </p>
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
              {locale === "fr"
                ? "Parlons de votre exploitation"
                : "Let's talk about your farm"}
            </h1>
            <p className="text-base leading-relaxed text-forest-100/85 sm:text-lg">
              {locale === "fr"
                ? "Notre équipe à Dschang Foreke est disponible pour répondre à vos questions techniques, préparer vos devis d'intrants ou planifier une visite terrain."
                : "Our team in Dschang Foreke is ready to answer your technical questions, prepare input quotes, or schedule a field visit."}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Contact Details Sidebar */}
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                {locale === "fr" ? "Coordonnées Directes" : "Direct Contact"}
              </h2>
              <div className="mt-6 space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-forest-100 text-forest-800">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      {locale === "fr" ? "Siège & Boutique d'intrants" : "HQ & Inputs Counter"}
                    </p>
                    <p className="mt-0.5 text-muted-foreground">
                      {locale === "fr" ? COMPANY_INFO.hqAddressFr : COMPANY_INFO.hqAddressEn}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-earth-100 text-earth-800">
                    <Sprout className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      {locale === "fr" ? "Site de Production" : "Production Site"}
                    </p>
                    <p className="mt-0.5 text-muted-foreground">
                      {locale === "fr" ? COMPANY_INFO.farmSiteFr : COMPANY_INFO.farmSiteEn}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-forest-100 text-forest-800">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      {locale === "fr" ? "Téléphone & WhatsApp" : "Phone & WhatsApp"}
                    </p>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="mt-0.5 block font-semibold text-forest-800 hover:underline"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-forest-100 text-forest-800">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="mt-0.5 block text-forest-800 hover:underline"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-harvest-100 text-harvest-800">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      {locale === "fr" ? "Horaires d'ouverture" : "Opening Hours"}
                    </p>
                    <p className="mt-0.5 text-muted-foreground">
                      {locale === "fr"
                        ? "Lundi – Samedi : 07h30 – 18h00"
                        : "Monday – Saturday: 7:30 AM – 6:00 PM"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 border-t border-border pt-6">
                <Button
                  asChild
                  className="w-full rounded-full bg-[#1F8A4C] text-white hover:bg-[#19723E]"
                >
                  <a href={waDirect} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {locale === "fr"
                      ? "Discuter immédiatement sur WhatsApp"
                      : "Chat immediately on WhatsApp"}
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-10">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                {locale === "fr"
                  ? "Envoyer une demande de conseil ou de devis"
                  : "Send an advisory or quote request"}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {locale === "fr"
                  ? "Remplissez ce formulaire et notre équipe vous recontactera rapidement par téléphone ou WhatsApp."
                  : "Fill out this form and our team will get back to you promptly by phone or WhatsApp."}
              </p>

              {submitted && (
                <div className="mt-6 flex items-start gap-3 rounded-2xl border border-forest-300 bg-forest-50 p-4 text-sm text-forest-900">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-forest-700" />
                  <div>
                    <p className="font-semibold">
                      {locale === "fr" ? "Demande enregistrée !" : "Inquiry received!"}
                    </p>
                    <p className="mt-0.5 text-forest-800/85">
                      {locale === "fr"
                        ? "Merci pour votre message. Pour une réponse instantanée, vous pouvez aussi cliquer sur WhatsApp."
                        : "Thank you for reaching out. For an instant reply, feel free to message us on WhatsApp as well."}
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">
                      {locale === "fr" ? "Nom complet *" : "Full name *"}
                    </Label>
                    <Input
                      id="fullName"
                      placeholder={locale === "fr" ? "Ex. Jean-Paul Fotso" : "e.g. Jean-Paul Fotso"}
                      {...register("fullName")}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-destructive">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      {locale === "fr" ? "Téléphone / WhatsApp *" : "Phone / WhatsApp *"}
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+237 6XX XX XX XX"
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <p className="text-xs text-destructive">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      {locale === "fr" ? "Email (optionnel)" : "Email (optional)"}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="nom@exemple.com"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">
                      {locale === "fr" ? "Objet de votre demande *" : "Subject *"}
                    </Label>
                    <select
                      id="subject"
                      {...register("subject")}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      {subjects.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.subject && (
                      <p className="text-xs text-destructive">{errors.subject.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    {locale === "fr"
                      ? "Détails (culture, superficie, intrants recherchés...) *"
                      : "Details (crop, acreage, inputs needed...) *"}
                  </Label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder={
                      locale === "fr"
                        ? "Décrivez votre culture, votre localisation (Dschang, Santchou, Bafou...) et vos besoins..."
                        : "Describe your crop, location (Dschang, Santchou, Bafou...), and requirements..."
                    }
                    {...register("message")}
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="rounded-full bg-forest-800 px-8 text-white hover:bg-forest-900"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting
                      ? locale === "fr"
                        ? "Envoi en cours..."
                        : "Sending..."
                      : locale === "fr"
                        ? "Envoyer ma demande"
                        : "Send Inquiry"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
