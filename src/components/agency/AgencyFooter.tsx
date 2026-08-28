// src/components/agency/AgencyFooter.tsx
import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";
import { defaultLocale } from "@/lib/i18n";

export default function AgencyFooter({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <footer className="mt-auto border-t border-line py-10">
      <div className="wrap flex flex-wrap items-center justify-between gap-4 text-sm text-gray-1">
        <div className="logo text-lg text-ink font-semibold">Imaginnative</div>
        {/* Indonesian-only section, so the link is hidden on the English site. */}
        {locale === defaultLocale ? (
          <Link href="/artikel" className="hover:text-ink transition-colors">
            {dict.nav.articles}
          </Link>
        ) : null}
        <div>
          {dict.footer.tagline} &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
