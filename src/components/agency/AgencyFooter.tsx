import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import type { Dictionary, Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { whatsappUrl } from "@/lib/whatsapp";

export default function AgencyFooter({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <footer className="mt-auto border-t border-border/40 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2.5 font-display text-lg font-bold text-foreground">
            <Image
              src="/imaginnative-logo.png"
              alt="imaginnative logo"
              width={24}
              height={24}
              className="w-6 h-6 object-contain rounded"
            />
            <span>imaginnative</span>
          </div>
          <p className="text-sm text-muted mt-1">{dict.footer.tagline}</p>
        </div>

        <div className="flex flex-col sm:items-end items-center gap-3">
          <a
            href={whatsappUrl(dict.cta.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            {dict.cta.whatsappLabel}
          </a>
          <nav className="flex items-center gap-4 text-sm text-muted">
            <Link href={localePath(locale, "/")} className="hover:text-foreground transition-colors">
              {dict.nav.home}
            </Link>
            <Link href={localePath(locale, "/tentang/samuel")} className="hover:text-foreground transition-colors">
              {dict.nav.aboutSamuel}
            </Link>
          </nav>
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Imaginnative. {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
