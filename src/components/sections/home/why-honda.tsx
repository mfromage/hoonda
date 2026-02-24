"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Dictionary } from "@/i18n/get-dictionary";

interface WhyHondaProps {
  dictionary: Dictionary;
}

interface RowData {
  titleKey: "innovationTitle" | "safetyTitle" | "technologyTitle";
  descKey: "innovationDesc" | "safetyDesc" | "technologyDesc";
  gradient: string;
  imageOnLeft: boolean;
}

const rows: RowData[] = [
  {
    titleKey: "innovationTitle",
    descKey: "innovationDesc",
    gradient: "from-red-700 to-orange-500",
    imageOnLeft: true,
  },
  {
    titleKey: "safetyTitle",
    descKey: "safetyDesc",
    gradient: "from-blue-700 to-cyan-500",
    imageOnLeft: false,
  },
  {
    titleKey: "technologyTitle",
    descKey: "technologyDesc",
    gradient: "from-violet-700 to-purple-500",
    imageOnLeft: true,
  },
];

function WhyHondaRow({
  row,
  dictionary,
}: {
  row: RowData;
  dictionary: Dictionary;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const slideDirection = row.imageOnLeft ? -60 : 60;

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col gap-8 md:flex-row md:items-center md:gap-12 ${
        !row.imageOnLeft ? "md:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, x: slideDirection }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: slideDirection }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Image placeholder */}
      <div className="flex-1">
        <div
          className={`aspect-video w-full rounded-lg bg-gradient-to-br ${row.gradient}`}
        />
      </div>

      {/* Text content */}
      <div className="flex-1">
        <h3 className="text-2xl font-bold tracking-tight">
          {dictionary.home[row.titleKey]}
        </h3>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {dictionary.home[row.descKey]}
        </p>
      </div>
    </motion.div>
  );
}

export function WhyHonda({ dictionary }: WhyHondaProps) {
  return (
    <section className="bg-zinc-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section title */}
        <h2 className="mb-16 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          {dictionary.home.whyHondaTitle}
        </h2>

        {/* Rows */}
        <div className="flex flex-col gap-20">
          {rows.map((row) => (
            <WhyHondaRow
              key={row.titleKey}
              row={row}
              dictionary={dictionary}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
