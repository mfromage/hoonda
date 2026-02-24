"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Model } from "@/data/models";
import type { Locale } from "@/i18n/config";

interface ImageGalleryProps {
  model: Model;
  lang: Locale;
}

const placeholderGradients = [
  "from-zinc-700 via-zinc-600 to-zinc-800",
  "from-zinc-600 via-zinc-500 to-zinc-700",
  "from-zinc-800 via-zinc-700 to-zinc-900",
];

export function ImageGallery({ model }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="bg-white py-12 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Main image area */}
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "absolute inset-0 flex items-center justify-center bg-gradient-to-br",
                placeholderGradients[selectedIndex % placeholderGradients.length]
              )}
            >
              <span className="text-3xl font-bold tracking-tight text-white/60 md:text-5xl">
                {model.name}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnail strip */}
        <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
          {model.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={cn(
                "h-14 w-20 flex-shrink-0 cursor-pointer rounded transition-all",
                "bg-gradient-to-br",
                placeholderGradients[index % placeholderGradients.length],
                selectedIndex === index
                  ? "ring-2 ring-zinc-900 ring-offset-2"
                  : "opacity-60 hover:opacity-80"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
