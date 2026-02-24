"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Model } from "@/data/models";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

interface DesignStoriesProps {
  model: Model;
  lang: Locale;
  dictionary: Dictionary;
}

const categoryGradients: Record<Model["category"], string> = {
  suv: "bg-gradient-to-br from-emerald-100 to-emerald-200",
  sedan: "bg-gradient-to-br from-indigo-100 to-indigo-200",
  hatchback: "bg-gradient-to-br from-sky-100 to-sky-200",
};

function StoryBlock({
  story,
  index,
  lang,
  category,
}: {
  story: Model["designStories"][number];
  index: number;
  lang: Locale;
  category: Model["category"];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const isOdd = index % 2 !== 0;
  const xOffset = isOdd ? 60 : -60;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: xOffset }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: xOffset }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`flex flex-col items-center gap-8 md:flex-row ${isOdd ? "md:flex-row-reverse" : ""}`}
    >
      <div className="w-full md:w-1/2">
        <div
          className={`aspect-[4/3] rounded-lg ${categoryGradients[category]}`}
        />
      </div>

      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-light md:text-3xl">
          {story.title[lang]}
        </h3>
        <p className="mt-4 leading-relaxed text-zinc-600">
          {story.description[lang]}
        </p>
      </div>
    </motion.div>
  );
}

export function DesignStories({ model, lang, dictionary }: DesignStoriesProps) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-light md:text-4xl lg:text-5xl">
        {dictionary.detail.designTitle}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-zinc-500">
        {dictionary.detail.designSubtitle}
      </p>

      <div className="mt-16 space-y-16 md:space-y-24">
        {model.designStories.map((story, index) => (
          <StoryBlock
            key={index}
            story={story}
            index={index}
            lang={lang}
            category={model.category}
          />
        ))}
      </div>
    </section>
  );
}
