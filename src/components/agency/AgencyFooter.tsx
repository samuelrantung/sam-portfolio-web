// src/components/agency/AgencyFooter.tsx
import type { Dictionary, Locale } from "@/lib/i18n";

export default function AgencyFooter({
  dict,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <footer className="mt-auto border-t border-line py-10">
      <div className="wrap flex flex-wrap items-center justify-between gap-4 text-sm text-gray-1">
        <div className="logo text-lg text-ink font-semibold">Imaginnative</div>
        <div>
          {dict.footer.tagline} &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
