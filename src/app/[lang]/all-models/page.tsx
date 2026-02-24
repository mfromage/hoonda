import type { Metadata } from "next";
import { i18n, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { ModelGrid } from "@/components/sections/models/model-grid";

interface AllModelsPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: AllModelsPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);

  return {
    title:
      lang === "id"
        ? `${dictionary.models.pageTitle} | Honda Indonesia`
        : `${dictionary.models.pageTitle} | Honda Indonesia`,
    description: dictionary.models.pageSubtitle,
    alternates: {
      languages: {
        en: "/en/all-models",
        id: "/id/all-models",
      },
    },
  };
}

export default async function AllModelsPage({ params }: AllModelsPageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);

  return (
    <div>
      {/* Page header */}
      <section className="px-6 pb-12 pt-32">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {dictionary.models.pageTitle}
          </h1>
          <p className="mt-4 text-lg text-zinc-400">
            {dictionary.models.pageSubtitle}
          </p>
        </div>
      </section>

      {/* Model grid with filters */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <ModelGrid lang={lang} dictionary={dictionary} />
      </section>
    </div>
  );
}
