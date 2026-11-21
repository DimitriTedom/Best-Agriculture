import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./../styles/globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { StructuredData } from "@/components/structured-data";
import { Toaster } from "@/components/ui/sonner";
import { COMPANY_INFO } from "@/lib/content";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/metadata";

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

export const viewport: Viewport = {
  themeColor: "#163525",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BEST AGRICULTURE | Entreprise Agricole à Dschang & Santchou, Cameroun",
    template: "%s | BEST AGRICULTURE",
  },
  description:
    "Productions agricoles, conseils agronomiques, accompagnement et suivi des producteurs, vente de produits phytosanitaires et intrants agricoles à Dschang Foreke et Santchou (Menoua, Ouest Cameroun).",
  applicationName: COMPANY_INFO.name,
  authors: [{ name: COMPANY_INFO.name, url: SITE_URL }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  category: "agriculture",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  keywords: [
    "Best Agriculture",
    "entreprise agricole Dschang",
    "produits phytosanitaires Cameroun",
    "intrants agricoles Dschang Foreke",
    "conseil agronomique Menoua",
    "agro-pastoral Santchou",
    "horticulture sylviculture Ouest Cameroun",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "fr_CM",
    alternateLocale: ["en_CM"],
    url: SITE_URL,
    siteName: COMPANY_INFO.name,
    title: "BEST AGRICULTURE | Entreprise Agricole à Dschang & Santchou, Cameroun",
    description:
      "Productions agricoles, conseils agronomiques, suivi des producteurs et vente de produits phytosanitaires & intrants certifiés au cœur de l'Ouest Cameroun.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Hauts plateaux agricoles de Dschang, Ouest Cameroun — BEST AGRICULTURE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BEST AGRICULTURE | Entreprise Agricole à Dschang & Santchou",
    description:
      "Productions, conseils agronomiques, accompagnement des producteurs et vente de produits phytosanitaires & intrants agricoles à Dschang Foreke.",
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${fraunces.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground">
        <StructuredData />
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
