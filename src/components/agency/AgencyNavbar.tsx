// src/components/agency/AgencyNavbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import LanguageToggle from "@/components/agency/LanguageToggle";
import type { Dictionary, Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import WhatsAppLink from "./WhatsAppLink";

export default function AgencyNavbar({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: dict.nav.services, href: localePath(locale, "/layanan") },
    { label: dict.nav.portfolio, href: localePath(locale, "/portofolio") },
    { label: dict.nav.about, href: localePath(locale, "/tentang") },
    { label: dict.nav.contact, href: localePath(locale, "/kontak") },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-paper border-b border-line">
      <div className="wrap nav-in">
        <Link
          href={localePath(locale, "/")}
          className="logo hover:opacity-85 transition-opacity"
        >
          Imaginnative
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          <div className="nav-links">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <WhatsAppLink
            message={dict.cta.whatsappMessage}
            source="navbar"
            className="link-cta text-sm"
          >
            Konsultasi <span className="arw">&rarr;</span>
          </WhatsAppLink>
          {/* <LanguageToggle locale={locale} /> */}
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          <WhatsAppLink
            message={dict.cta.whatsappMessage}
            source="navbar_mobile"
            className="pill py-2 px-4 text-xs font-medium"
          >
            Konsultasi
          </WhatsAppLink>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-ink hover:opacity-75 transition-opacity focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div className="md:hidden px-6 pt-2 pb-6 space-y-3 bg-paper border-b border-line">
          <Link
            href={localePath(locale, "/")}
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-semibold text-ink border-b border-line"
          >
            {dict.nav.home}
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-medium text-gray-1 hover:text-ink transition-colors"
            >
              {item.label}
            </Link>
          ))}
          {/* <div className="pt-3 border-t border-line">
            <LanguageToggle locale={locale} />
          </div> */}
        </div>
      )}
    </nav>
  );
}
