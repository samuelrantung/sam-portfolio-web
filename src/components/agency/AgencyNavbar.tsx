// src/components/agency/AgencyNavbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import type { Dictionary, Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { whatsappUrl } from "@/lib/whatsapp";

export default function AgencyNavbar({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: dict.nav.home, href: localePath(locale, "/") },
    { label: dict.nav.aboutSamuel, href: localePath(locale, "/tentang/samuel") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 transition-all duration-300 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href={localePath(locale, "/")}
            className="flex items-center gap-2.5 font-display text-lg md:text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors"
          >
            <Image
              src="/imaginnative-logo.png"
              alt="imaginnative logo"
              width={28}
              height={28}
              className="w-7 h-7 object-contain rounded"
              priority
            />
            <span>imaginnative</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-muted hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappUrl(dict.cta.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-sm transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              {dict.cta.whatsappLabel}
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-card/50 transition-colors focus:outline-none flex items-center justify-center"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 space-y-1 bg-background/95 backdrop-blur-md border-b border-border/60">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-muted hover:text-foreground hover:bg-card/50 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={whatsappUrl(dict.cta.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-2 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-base"
          >
            <MessageCircle className="w-4 h-4" />
            {dict.cta.whatsappLabel}
          </a>
        </div>
      )}
    </nav>
  );
}
