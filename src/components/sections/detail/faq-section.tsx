"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { Model } from "@/data/models";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

interface FAQSectionProps {
  model: Model;
  lang: Locale;
  dictionary: Dictionary;
}

export function FAQSection({ model, lang, dictionary }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="border-t border-zinc-200 px-4 py-20 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-light md:text-4xl">
        {dictionary.detail.faqTitle}
      </h2>

      <div className="mx-auto mt-12 max-w-3xl">
        {model.faq.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index}>
              <button
                type="button"
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between border-b border-zinc-200 py-6 text-left"
              >
                <span className="text-lg font-medium">
                  {faq.question[lang]}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-5 w-5 text-zinc-500" />
                </motion.span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 leading-relaxed text-zinc-600">
                      {faq.answer[lang]}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
