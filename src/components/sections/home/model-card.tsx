"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import type { Model } from "@/data/models";
import type { Dictionary } from "@/i18n/get-dictionary";

interface ModelCardProps {
  model: Model;
  lang: string;
  dictionary: Dictionary;
}

/**
 * Gradient palette for model card placeholders.
 * Each model slug maps to a unique gradient to visually distinguish cards.
 */
const modelGradients: Record<string, string> = {
  "cr-v": "from-blue-800 to-blue-600",
  civic: "from-red-800 to-red-600",
  "hr-v": "from-emerald-800 to-emerald-600",
  "br-v": "from-amber-800 to-amber-600",
  brio: "from-violet-800 to-violet-600",
  jazz: "from-orange-800 to-orange-600",
  city: "from-cyan-800 to-cyan-600",
  accord: "from-indigo-800 to-indigo-600",
  "wr-v": "from-rose-800 to-rose-600",
};

function formatPrice(price: number): string {
  return `Rp ${(price / 1_000_000).toFixed(0)} Juta`;
}

export function ModelCard({ model, lang, dictionary }: ModelCardProps) {
  const gradient = modelGradients[model.slug] ?? "from-zinc-800 to-zinc-600";

  return (
    <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.25 }}>
      <Link href={`/${lang}/all-models/${model.slug}`} className="block">
        <Card className="overflow-hidden border-none shadow-md transition-shadow duration-300 hover:shadow-xl">
          {/* Gradient placeholder for car image */}
          <div
            className={`aspect-[16/10] w-full bg-gradient-to-br ${gradient}`}
          >
            <div className="flex h-full items-center justify-center text-3xl font-bold text-white/30">
              {model.name}
            </div>
          </div>

          <CardContent className="pt-4">
            <h3 className="text-lg font-semibold">Honda {model.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {dictionary.common.startingFrom}
            </p>
            <p className="text-base font-medium text-red-700">
              {formatPrice(model.startingPrice)}
            </p>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
