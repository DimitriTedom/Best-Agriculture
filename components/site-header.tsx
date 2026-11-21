"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";

import { BrandLogo } from "@/components/brand-logo";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO, SITE_COPY } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const { locale, setLocale } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: "/", label: SITE_COPY.nav.home[locale] },
    { href: "/services", label: SITE_COPY.nav.services[locale] },
    { href: "/produits", label: SITE_COPY.nav.products[locale] },
    { href: "/a-propos", label: SITE_COPY.nav.about[locale] },
    { href: "/contact", label: SITE_COPY.nav.contact[locale] },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/85 backdrop-blur-md">
      {/* Top micro utility bar */}
      <div className="hidden border-b border-forest-900/10 bg-forest-950 text-xs text-forest-100/90 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <div className="flex items-center gap-4">
            <span className="font-medium text-harvest-300">
              {locale === "fr"
                ? "Foreke Dschang, Santchou (Menoua) • Entreprise Agricole"
                : "Foreke Dschang, Santchou (Menoua) • Agricultural Enterprise"}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 transition hover:text-harvest-300"
            >
              <Phone className="h-3.5 w-3.5 text-harvest-400" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
            <span className="text-forest-700">|</span>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="transition hover:text-harvest-300"
            >
              {COMPANY_INFO.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="transition-opacity hover:opacity-90"
          onClick={() => setMobileOpen(false)}
        >
          <BrandLogo size="md" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-forest-100 text-forest-900 font-semibold"
                    : "text-foreground/80 hover:bg-secondary hover:text-forest-900"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {/* FR / EN Switcher */}
          <div
            className="inline-flex items-center rounded-full border border-border bg-secondary/70 p-0.5 text-xs font-semibold"
            role="group"
            aria-label="Language switcher"
          >
            <button
              type="button"
              onClick={() => setLocale("fr")}
              className={cn(
                "rounded-full px-2.5 py-1 transition-all",
                locale === "fr"
                  ? "bg-forest-800 text-white shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={cn(
                "rounded-full px-2.5 py-1 transition-all",
                locale === "en"
                  ? "bg-forest-800 text-white shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              EN
            </button>
          </div>

          <Button
            asChild
            className="rounded-full bg-forest-800 px-5 text-white hover:bg-forest-900"
          >
            <Link href="/contact">{SITE_COPY.nav.cta[locale]}</Link>
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setLocale(locale === "fr" ? "en" : "fr")}
            className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-bold text-forest-900"
          >
            {locale === "fr" ? "EN" : "FR"}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 pb-6 pt-3 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    isActive
                      ? "bg-forest-100 text-forest-900 font-semibold"
                      : "text-foreground/85 hover:bg-secondary"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-4 flex flex-col gap-2.5 border-t border-border pt-4">
            <Button
              asChild
              className="w-full rounded-full bg-forest-800 text-white hover:bg-forest-900"
            >
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                {SITE_COPY.nav.cta[locale]}
              </Link>
            </Button>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 rounded-full border border-border py-2.5 text-sm font-medium text-forest-900"
            >
              <Phone className="h-4 w-4 text-forest-700" />
              {COMPANY_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
