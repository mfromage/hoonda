"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredModels, getModelBySlug } from "@/data/models";
import type { Dictionary } from "@/i18n/get-dictionary";
import { ModelCard } from "./model-card";

interface FeaturedModelsProps {
  lang: string;
  dictionary: Dictionary;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const SCROLL_AMOUNT = 340;

export function FeaturedModels({ lang, dictionary }: FeaturedModelsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const models = featuredModels
    .map((slug) => getModelBySlug(slug))
    .filter(Boolean);

  function scrollLeft() {
    scrollRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
  }

  function scrollRight() {
    scrollRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
  }

  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {dictionary.home.featuredTitle}
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            {dictionary.home.featuredSubtitle}
          </p>
        </div>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Left scroll button */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollLeft}
            className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full shadow-md md:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="size-5" />
          </Button>

          {/* Scrollable container */}
          <motion.div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {models.map((model) => (
              <motion.div
                key={model!.slug}
                className="min-w-[300px] snap-center"
                variants={itemVariants}
              >
                <ModelCard model={model!} lang={lang} dictionary={dictionary} />
              </motion.div>
            ))}
          </motion.div>

          {/* Right scroll button */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollRight}
            className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full shadow-md md:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="size-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
