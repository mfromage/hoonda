import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { i18n, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

interface LangLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  if (!i18n.locales.includes(lang as Locale)) {
    return {};
  }

  const dictionary = await getDictionary(lang as Locale);

  const title =
    lang === "id" ? "Honda Indonesia | Beranda" : "Honda Indonesia | Home";
  const description =
    lang === "id"
      ? dictionary.home.heroSubtitle
      : dictionary.home.heroSubtitle;

  return {
    title,
    description,
    alternates: {
      languages: {
        en: "/en",
        id: "/id",
      },
    },
  };
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;

  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  const dictionary = await getDictionary(lang as Locale);

  return (
    <div>
      <Header lang={lang} dictionary={{ nav: dictionary.nav }} />
      <main className="min-h-screen">{children}</main>
      <Footer
        lang={lang}
        dictionary={{ footer: dictionary.footer, nav: dictionary.nav }}
      />
    </div>
  );
}
