import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold tracking-tight">
        {dictionary.home.heroTitle}
      </h1>
    </div>
  );
}
