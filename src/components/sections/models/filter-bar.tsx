"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/i18n/get-dictionary";

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  dictionary: Dictionary["models"];
}

const filters = [
  { key: "all", labelKey: "filterAll" as const },
  { key: "sedan", labelKey: "filterSedan" as const },
  { key: "hatchback", labelKey: "filterHatchback" as const },
  { key: "suv", labelKey: "filterSuv" as const },
];

export function FilterBar({
  activeFilter,
  onFilterChange,
  dictionary,
}: FilterBarProps) {
  return (
    <div className="flex items-center justify-center gap-1 overflow-x-auto sm:gap-2">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.key;

        return (
          <button
            key={filter.key}
            onClick={() => onFilterChange(filter.key)}
            className="relative shrink-0 px-4 py-2 text-sm font-medium transition-colors sm:px-6"
          >
            <span className={isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"}>
              {dictionary[filter.labelKey]}
            </span>
            {isActive && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-x-0 -bottom-px h-0.5 bg-white"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
