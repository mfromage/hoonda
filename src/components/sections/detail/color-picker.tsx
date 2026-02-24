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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedColor = model.colors[selectedIndex];

  return (
    <section className="bg-zinc-100 px-4 py-20 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-light md:text-4xl">
        {dictionary.detail.colors}
      </h2>

      <div className="mt-12">
        {/* Large car display area */}
        <div className="mx-auto max-w-5xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${selectedColor.hex}20, ${selectedColor.hex}40, ${selectedColor.hex}20)`,
                }}
              >
                <span className="select-none text-5xl font-light tracking-wide text-zinc-400/50 md:text-7xl">
                  {model.name}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Color swatches */}
        <div className="mt-8 flex items-center justify-center gap-4">
          {model.colors.map((color, index) => (
            <button
              key={color.hex}
              onClick={() => setSelectedIndex(index)}
              aria-label={color.name[lang]}
              className={cn(
                "h-10 w-10 cursor-pointer rounded-full transition-all",
                selectedIndex === index
                  ? "ring-2 ring-zinc-900 ring-offset-4"
                  : "ring-1 ring-zinc-300"
              )}
              style={{ background: color.hex }}
            />
          ))}
        </div>

        {/* Selected color name */}
        <p className="mt-4 text-center text-sm text-zinc-500">
          {selectedColor.name[lang]}
        </p>
      </div>
    </section>
  );
}
