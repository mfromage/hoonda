"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Model } from "@/data/models";
import type { Dictionary } from "@/i18n/get-dictionary";

interface ModelListCardProps {
  model: Model;
  lang: string;
  dictionary: Dictionary;
}

const categoryGradients: Record<Model["category"], string> = {
  hatchback: "from-blue-600 to-blue-900",
  sedan: "from-purple-600 to-purple-900",
  suv: "from-green-600 to-green-900",
};

export function ModelListCard({ model, lang, dictionary }: ModelListCardProps) {
  const gradient = categoryGradients[model.category];
  const isNew = model.year >= 2025;

  return (
    <Link href={`/${lang}/all-models/${model.slug}`}>
      <motion.div
        layout
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="group h-full"
      >
        <Card className="h-full overflow-hidden border-zinc-800 bg-zinc-900 py-0 transition-shadow group-hover:shadow-xl group-hover:shadow-black/30">
          {/* Gradient placeholder for car image */}
          <div className={`relative h-48 bg-gradient-to-br ${gradient}`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold text-white/20">
                {model.name}
              </span>
            </div>
            {isNew && (
              <div className="absolute left-4 top-4">
                <Badge variant="default" className="bg-red-600 text-white">
                  {dictionary.models.newBadge}
                </Badge>
              </div>
            )}
          </div>

          <CardContent className="flex flex-col gap-3 p-6">
            <h3 className="text-xl font-bold text-white">{model.name}</h3>
            <p className="text-sm text-zinc-400">
              {model.tagline[lang as keyof typeof model.tagline]}
            </p>
            <p className="text-lg font-semibold text-white">
              Rp {(model.startingPrice / 1_000_000).toFixed(0)} Juta
            </p>

            {/* Explore button - appears on hover */}
            <div className="opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <Button
                variant="outline"
                className="mt-2 w-full border-zinc-700 text-white hover:bg-zinc-800"
              >
                {dictionary.models.explore}
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}
