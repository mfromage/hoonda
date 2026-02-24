"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getModelsByCategory, type Model } from "@/data/models";
import type { Dictionary } from "@/i18n/get-dictionary";
import { FilterBar } from "./filter-bar";
import { ModelListCard } from "./model-list-card";

interface ModelGridProps {
  lang: string;
  dictionary: Dictionary;
}

export function ModelGrid({ lang, dictionary }: ModelGridProps) {
  const [activeFilter, setActiveFilter] = useState<
    Model["category"] | "all"
  >("all");

  const filteredModels = getModelsByCategory(activeFilter);

  return (
    <div className="flex flex-col gap-10">
      <FilterBar
        activeFilter={activeFilter}
        onFilterChange={(filter) =>
          setActiveFilter(filter as Model["category"] | "all")
        }
        dictionary={dictionary.models}
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredModels.map((model, index) => (
            <motion.div
              key={model.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.05 }}
              layout
            >
              <ModelListCard
                model={model}
                lang={lang}
                dictionary={dictionary}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
