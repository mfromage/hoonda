"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Model } from "@/data/models";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

interface ColorPickerProps {
  model: Model;
  lang: Locale;
  dictionary: Dictionary;
}

export function ColorPicker({ model, lang, dictionary }: ColorPickerProps) {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const selectedColor = model.colors[selectedColorIndex];

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
          {dictionary.detail.colors}
        </h2>

        {/* Color swatches */}
        <div className="mb-4 flex items-center justify-center gap-3">
          {model.colors.map((color, index) => (
            <button
              key={color.hex}
              onClick={() => setSelectedColorIndex(index)}
              aria-label={color.name[lang]}
              className={cn(
                "h-10 w-10 cursor-pointer rounded-full transition-all",
                selectedColorIndex === index
                  ? "ring-2 ring-zinc-900 ring-offset-2"
                  : "hover:scale-110"
              )}
              style={{ backgroundColor: color.hex }}
            />
          ))}
        </div>

        {/* Selected color name */}
        <p className="mb-8 text-center text-sm font-medium text-zinc-600">
          {selectedColor.name[lang]}
        </p>

        {/* Display area with color tint */}
        <div className="relative mx-auto aspect-video max-w-3xl overflow-hidden rounded-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedColorIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${selectedColor.hex}22, ${selectedColor.hex}44, ${selectedColor.hex}22)`,
              }}
            >
              <div
                className="flex h-full w-full items-center justify-center"
                style={{
                  background: `radial-gradient(ellipse at center, ${selectedColor.hex}33 0%, transparent 70%)`,
                }}
              >
                <span className="text-2xl font-bold tracking-tight text-zinc-400 md:text-4xl">
                  {model.name}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
