"use client";

import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { getWhatsAppLink } from "@/lib/content";

export function WhatsAppFloat() {
  const { locale } = useLanguage();

  const message =
    locale === "fr"
      ? "Bonjour Best Agriculture, je souhaite obtenir un conseil agronomique ou un devis d'intrants agricoles."
      : "Hello Best Agriculture, I would like agronomic advice or a quote for agricultural inputs.";

  return (
    <a
      href={getWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Best Agriculture"
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 rounded-full bg-[#1F8A4C] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-forest-950/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#19723E] hover:shadow-xl"
    >
      <MessageCircle className="h-5 w-5 shrink-0" />
      <span className="hidden sm:inline">
        {locale === "fr" ? "WhatsApp Direct" : "Chat on WhatsApp"}
      </span>
    </a>
  );
}
