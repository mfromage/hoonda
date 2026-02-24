"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/i18n/get-dictionary";

interface CTABannerProps {
  lang: string;
  dictionary: Dictionary;
}

export function CTABanner({ lang, dictionary }: CTABannerProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-r from-red-700 to-red-900 py-24 text-white"
    >
      {/* Parallax background layer */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-red-800/50 to-transparent"
        style={{ y: backgroundY }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          className="text-4xl font-bold tracking-tight sm:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {dictionary.home.ctaTitle}
        </motion.h2>

        <motion.p
          className="mt-6 text-lg text-red-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {dictionary.home.ctaSubtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="mt-10 border-white bg-transparent text-white hover:bg-white hover:text-red-900"
          >
            <Link href={`/${lang}/all-models`}>
              {dictionary.home.ctaButton}
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
