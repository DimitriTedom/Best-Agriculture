"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck, Sprout } from "lucide-react";

import { BrandLogo } from "@/components/brand-logo";
import { useLanguage } from "@/components/language-provider";
import { COMPANY_INFO, SITE_COPY } from "@/lib/content";

export function SiteFooter() {
  const { locale } = useLanguage();

  const links = [
    { href: "/", label: SITE_COPY.nav.home[locale] },
    { href: "/services", label: SITE_COPY.nav.services[locale] },
    { href: "/produits", label: SITE_COPY.nav.products[locale] },
    { href: "/a-propos", label: SITE_COPY.nav.about[locale] },
    { href: "/contact", label: SITE_COPY.nav.contact[locale] },
  ];

  return (
    <footer className="border-t border-forest-900 bg-forest-950 text-forest-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-4">
            <BrandLogo inverted size="md" />
            <p className="text-sm leading-relaxed text-forest-200/80">
              {SITE_COPY.footer.description[locale]}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-base font-semibold text-harvest-300">
              {SITE_COPY.footer.quickLinks[locale]}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {links.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-forest-200/80 transition hover:text-harvest-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-base font-semibold text-harvest-300">
              {SITE_COPY.footer.contactTitle[locale]}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-forest-200/85">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-harvest-400" />
                <span>
                  {locale === "fr" ? COMPANY_INFO.hqAddressFr : COMPANY_INFO.hqAddressEn}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Sprout className="mt-0.5 h-4 w-4 shrink-0 text-harvest-400" />
                <span>
                  {locale === "fr" ? COMPANY_INFO.farmSiteFr : COMPANY_INFO.farmSiteEn}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-harvest-400" />
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="transition hover:text-harvest-300"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-harvest-400" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="transition hover:text-harvest-300"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Credentials */}
          <div>
            <h3 className="font-serif text-base font-semibold text-harvest-300">
              {SITE_COPY.footer.legalTitle[locale]}
            </h3>
            <div className="mt-4 space-y-3 rounded-2xl border border-forest-800/80 bg-forest-900/50 p-4 text-xs text-forest-200/85">
              <div className="flex items-center gap-2 font-semibold text-harvest-300">
                <ShieldCheck className="h-4 w-4" />
                <span>{locale === "fr" ? "Entreprise enregistrée" : "Registered Enterprise"}</span>
              </div>
              <div>
                <span className="block text-forest-300/70">N° Contribuable</span>
                <span className="font-mono font-semibold text-white">{COMPANY_INFO.taxId}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-forest-800/80 pt-8 text-xs text-forest-300/70 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. {SITE_COPY.footer.rights[locale]}
          </p>
          <p>Foreke Dschang, Santchou • Région de l&apos;Ouest, Cameroun</p>
        </div>
      </div>
    </footer>
  );
}
