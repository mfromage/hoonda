"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import type { Model } from "@/data/models";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

interface KeyStatsProps {
  model: Model;
  lang: Locale;
  dictionary: Dictionary;
}

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: "easeOut" as const,
    },
  }),
};

export function KeyStats({ model, lang, dictionary }: KeyStatsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="border-b border-zinc-200 py-12">
      <div ref={ref} className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Stats row */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-0">
          {model.keyStats.map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={statVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className={`flex flex-col items-center px-8 md:px-12 ${
                index > 0
                  ? "border-t border-zinc-300 pt-8 md:border-t-0 md:border-l md:pt-0"
                  : ""
              }`}
            >
              <div className="flex items-baseline">
                <span className="text-5xl font-light md:text-6xl">
                  {stat.value}
                </span>
                <span className="ml-1 text-xl text-zinc-500 md:text-2xl">
                  {stat.unit}
                </span>
              </div>
              <p className="mt-2 text-sm text-zinc-500">{stat.label[lang]}</p>
            </motion.div>
          ))}
        </div>

        {/* Technical Data link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <Link
            href="#specifications"
            className="text-sm font-medium underline underline-offset-4 hover:text-zinc-600"
          >
            {dictionary.detail.technicalData} &darr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
