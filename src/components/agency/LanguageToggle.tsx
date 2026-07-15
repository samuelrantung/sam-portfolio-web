"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { toggleHref } from "@/lib/i18n/routing";

export default function LanguageToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname() ?? "/";
  const target = toggleHref(pathname);
  const targetLabel = locale === "id" ? "EN" : "ID";

  return (
    <Link
      href={target}
      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border/40 text-xs font-bold text-muted hover:text-foreground hover:border-primary/40 transition-colors"
      aria-label={locale === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
    >
      <Languages className="w-3.5 h-3.5" />
      {targetLabel}
    </Link>
  );
}
