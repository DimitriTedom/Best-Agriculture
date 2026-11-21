import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./../styles/globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { Toaster } from "@/components/ui/sonner";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: {
    default: "BEST AGRICULTURE | Entreprise Agricole à Dschang & Santchou, Cameroun",
    template: "%s | BEST AGRICULTURE",
  },
  description:
    "Productions agricoles, conseils agronomiques, accompagnement et suivi des producteurs, vente de produits phytosanitaires et intrants agricoles à Dschang Foreke et Santchou (Menoua, Ouest Cameroun).",
  keywords: [
    "Best Agriculture",
    "entreprise agricole Dschang",
    "produits phytosanitaires Cameroun",
    "intrants agricoles Dschang Foreke",
    "conseil agronomique Menoua",
    "agro-pastoral Santchou",
    "horticulture sylviculture Ouest Cameroun",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${fraunces.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LanguageProvider>
            <div className="flex min-h-screen flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
            <WhatsAppFloat />
            <Toaster position="bottom-right" richColors />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
