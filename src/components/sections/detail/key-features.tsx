"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Gauge, Shield, Sparkles, Fuel, Cog, Eye } from "lucide-react";
import type { Model } from "@/data/models";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

interface KeyFeaturesProps {
  model: Model;
  lang: Locale;
  dictionary: Dictionary;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Gauge,
  Shield,
  Sparkles,
  Fuel,
  Cog,
  Eye,
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

  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
          {dictionary.detail.features}
        </h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {model.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] ?? Gauge;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="flex flex-col items-center rounded-2xl border border-zinc-100 bg-white p-8 text-center shadow-sm"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-zinc-100">
                  <IconComponent className="h-7 w-7 text-zinc-700" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">
                  {feature.title[lang]}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500">
                  {feature.description[lang]}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
