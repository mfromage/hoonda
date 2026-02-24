"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Model } from "@/data/models";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

interface DetailHeroProps {
  model: Model;
  lang: Locale;
  dictionary: Dictionary;
}

const categoryImageGradients: Record<Model["category"], string> = {
  suv: "from-emerald-900/30 to-zinc-800",
  sedan: "from-indigo-900/30 to-zinc-800",
  hatchback: "from-sky-900/30 to-zinc-800",
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeSlideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export function DetailHero({ model, lang, dictionary }: DetailHeroProps) {
  const imageGradient = categoryImageGradients[model.category];

  return (
    <section className="relative w-full bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-800 pt-32 pb-16 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* "THE NEW" label */}
          <motion.p
            variants={fadeSlideUp}
            className="text-sm uppercase tracking-widest text-zinc-400"
          >
            {dictionary.detail.theNew}
          </motion.p>

          {/* Model name — huge heading */}
          <motion.h1
            variants={fadeSlideUp}
            className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-8xl"
          >
            {model.name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeSlideUp}
            className="mt-4 text-xl text-zinc-300"
          >
            {model.tagline[lang]}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeSlideUp}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="bg-white text-zinc-900 hover:bg-white/90"
            >
              {dictionary.detail.requestOffer}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 hover:text-white"
            >
              {dictionary.detail.downloadSpec}
            </Button>
          </motion.div>

          {/* Car image placeholder area */}
          <motion.div
            variants={fadeSlideUp}
            className="relative mt-12 w-full max-w-4xl mx-auto"
          >
            {/* Watermark model name behind image */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
            >
              <span className="select-none whitespace-nowrap text-[8rem] font-bold uppercase leading-none text-white opacity-[0.04] sm:text-[10rem] md:text-[12rem]">
                {model.name}
              </span>
            </div>

            {/* Image placeholder with category gradient */}
            <div
              className={`aspect-[16/9] w-full rounded-lg bg-gradient-to-r ${imageGradient}`}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
