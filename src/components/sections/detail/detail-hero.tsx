"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { Model } from "@/data/models";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

interface DetailHeroProps {
  model: Model;
  lang: Locale;
  dictionary: Dictionary;
}

const categoryGradients: Record<Model["category"], string> = {
  suv: "from-emerald-900 via-emerald-800 to-emerald-950",
  sedan: "from-indigo-900 via-indigo-800 to-indigo-950",
  hatchback: "from-sky-900 via-sky-800 to-sky-950",
};

export function DetailHero({ model, lang, dictionary }: DetailHeroProps) {
  const gradient = categoryGradients[model.category];
  const formattedPrice = `Rp ${(model.startingPrice / 1_000_000).toFixed(0)} Juta`;

  return (
    <section
      className={`relative w-full bg-gradient-to-br ${gradient} pt-32 pb-20 text-white`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl"
          >
            {model.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="max-w-xl text-lg text-white/80 md:text-xl"
          >
            {model.tagline[lang]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="text-2xl font-semibold md:text-3xl"
          >
            {formattedPrice}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <Button size="lg" className="bg-white text-zinc-900 hover:bg-white/90">
              {dictionary.common.testDrive}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
