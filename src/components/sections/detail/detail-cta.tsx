import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

interface DetailCTAProps {
  lang: Locale;
  dictionary: Dictionary;
}

export function DetailCTA({ lang, dictionary }: DetailCTAProps) {
  return (
    <section className="bg-gradient-to-r from-zinc-900 to-zinc-800 py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 text-2xl font-light sm:text-3xl md:text-4xl">
          {dictionary.detail.interested}
        </h2>
        <p className="mb-10 text-lg text-white/70">
          {dictionary.detail.interestedSubtitle}
        </p>

        <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="bg-white text-zinc-900 hover:bg-white/90">
            {dictionary.common.testDrive}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10"
          >
            {dictionary.common.downloadBrochure}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10"
          >
            {dictionary.common.findDealer}
          </Button>
        </div>

        <Link
          href={`/${lang}/all-models`}
          className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          {dictionary.common.backToModels}
        </Link>
      </div>
    </section>
  );
}
