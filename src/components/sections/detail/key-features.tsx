"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Model } from "@/data/models";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

interface KeyFeaturesProps {
  model: Model;
  lang: Locale;
  dictionary: Dictionary;
}

const categoryGradients: Record<Model["category"], string> = {
  suv: "bg-gradient-to-br from-emerald-100 to-emerald-200",
  sedan: "bg-gradient-to-br from-indigo-100 to-indigo-200",
  hatchback: "bg-gradient-to-br from-sky-100 to-sky-200",
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function KeyFeatures({ model, lang, dictionary }: KeyFeaturesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const gradient = categoryGradients[model.category];

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-light md:text-4xl">
        {dictionary.detail.features}
      </h2>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3"
      >
        {model.features.map((feature, index) => (
          <motion.div key={index} variants={cardVariants} className="flex flex-col">
            {/* Image placeholder */}
            <div className={`aspect-[4/3] rounded-lg ${gradient} mb-6`} />

            <h3 className="text-xl font-medium">{feature.title[lang]}</h3>

            <p className="mt-3 leading-relaxed text-zinc-600">
              {feature.description[lang]}
            </p>

            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium">
              {dictionary.detail.findOutMore}
              <ArrowRight size={14} />
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
