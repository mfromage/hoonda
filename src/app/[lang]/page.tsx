import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { HeroSection } from "@/components/sections/home/hero-section";
import { FeaturedModels } from "@/components/sections/home/featured-models";
import { WhyHonda } from "@/components/sections/home/why-honda";
import { CTABanner } from "@/components/sections/home/cta-banner";

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);

  return (
    <>
      <HeroSection lang={lang} dictionary={dictionary} />
      <FeaturedModels lang={lang} dictionary={dictionary} />
      <WhyHonda dictionary={dictionary} />
      <CTABanner lang={lang} dictionary={dictionary} />
    </>
  );
}
