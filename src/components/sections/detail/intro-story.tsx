"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Model } from "@/data/models";
import type { Locale } from "@/i18n/config";

interface IntroStoryProps {
  model: Model;
  lang: Locale;
}

export function IntroStory({ model, lang }: IntroStoryProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div ref={ref} className="mx-auto max-w-4xl text-center">
        {/* Editorial heading composed from model name + tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-light italic md:text-4xl lg:text-5xl"
        >
          The Honda {model.name}. {model.tagline[lang]}.
        </motion.h2>

        {/* Model description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-lg leading-relaxed text-zinc-600"
        >
          {model.description[lang]}
        </motion.p>
      </div>
    </section>
  );
}
