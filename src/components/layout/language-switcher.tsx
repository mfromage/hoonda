"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n } from "@/i18n/config";

interface LanguageSwitcherProps {
  lang: string;
}

export function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
  const pathname = usePathname();

  function getLocalePath(locale: string) {
    if (!pathname) return `/${locale}`;
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  }

  return (
    <div className="flex items-center gap-2 text-sm">
      {i18n.locales.map((locale, index) => (
        <span key={locale} className="flex items-center gap-2">
          {index > 0 && (
            <span className="text-white/40 select-none">|</span>
          )}
          <Link
            href={getLocalePath(locale)}
            className={
              locale === lang
                ? "font-bold text-white"
                : "text-white/60 hover:text-white transition-colors"
            }
          >
            {locale.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}
