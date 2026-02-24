import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { i18n, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { getModelBySlug, getAllSlugs } from "@/data/models";
import { DetailHero } from "@/components/sections/detail/detail-hero";
import { ImageGallery } from "@/components/sections/detail/image-gallery";
import { KeyFeatures } from "@/components/sections/detail/key-features";
import { SpecsTable } from "@/components/sections/detail/specs-table";
import { ColorPicker } from "@/components/sections/detail/color-picker";
import { DetailCTA } from "@/components/sections/detail/detail-cta";

interface ModelDetailPageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export function generateStaticParams() {
  return i18n.locales.flatMap((lang) =>
    getAllSlugs().map((slug) => ({ lang, slug }))
  );
}

export async function generateMetadata({
  params,
}: ModelDetailPageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const model = getModelBySlug(slug);

  if (!model) {
    return {};
  }

  return {
    title: `Honda ${model.name} | Honda Indonesia`,
    description: model.tagline[lang as Locale] ?? model.tagline.en,
  };
}

export default async function ModelDetailPage({ params }: ModelDetailPageProps) {
  const { lang, slug } = await params;
  const locale = lang as Locale;

  const model = getModelBySlug(slug);
  if (!model) {
    notFound();
  }

  const dictionary = await getDictionary(locale);

  return (
    <>
      <DetailHero model={model} lang={locale} dictionary={dictionary} />
      <ImageGallery model={model} lang={locale} />
      <KeyFeatures model={model} lang={locale} dictionary={dictionary} />
      <SpecsTable model={model} dictionary={dictionary} />
      <ColorPicker model={model} lang={locale} dictionary={dictionary} />
      <DetailCTA lang={locale} dictionary={dictionary} />
    </>
  );
}
