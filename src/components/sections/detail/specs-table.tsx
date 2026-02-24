"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import type { Model } from "@/data/models";
import type { Dictionary } from "@/i18n/get-dictionary";

interface SpecsTableProps {
  model: Model;
  dictionary: Dictionary;
}

interface SpecRow {
  label: string;
  value: string | number;
}

function SpecsRows({ rows }: { rows: SpecRow[] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-zinc-200">
      {rows.map((row, index) => (
        <div
          key={row.label}
          className={`flex items-center justify-between px-4 py-3 ${
            index % 2 === 0 ? "bg-white" : "bg-zinc-100"
          }`}
        >
          <span className="text-sm text-zinc-500">{row.label}</span>
          <span className="text-sm font-bold text-zinc-900">{row.value}</span>
        </div>
      ))}
    </div>
  );
}

export function SpecsTable({ model, dictionary }: SpecsTableProps) {
  const engineRows: SpecRow[] = [
    { label: dictionary.detail.engine, value: model.specs.engine },
    { label: dictionary.detail.horsepower, value: model.specs.horsepower },
    { label: dictionary.detail.torque, value: model.specs.torque },
    { label: dictionary.detail.transmission, value: model.specs.transmission },
    {
      label: dictionary.detail.fuelConsumption,
      value: model.specs.fuelConsumption,
    },
  ];

  const dimensionsRows: SpecRow[] = [
    { label: dictionary.detail.length, value: model.specs.length },
    { label: dictionary.detail.width, value: model.specs.width },
    { label: dictionary.detail.height, value: model.specs.height },
    { label: dictionary.detail.wheelbase, value: model.specs.wheelbase },
    {
      label: dictionary.detail.seatingCapacity,
      value: model.specs.seatingCapacity,
    },
  ];

  const safetyRows: SpecRow[] = [
    { label: dictionary.detail.airbags, value: model.specs.airbags },
  ];

  const comfortRows: SpecRow[] = [
    {
      label: dictionary.detail.seatingCapacity,
      value: model.specs.seatingCapacity,
    },
  ];

  return (
    <section className="bg-zinc-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
          {dictionary.detail.specifications}
        </h2>

        <Tabs defaultValue="engine" className="w-full">
          <TabsList className="mx-auto mb-8 w-fit">
            <TabsTrigger value="engine">{dictionary.detail.engine}</TabsTrigger>
            <TabsTrigger value="dimensions">
              {dictionary.detail.dimensions}
            </TabsTrigger>
            <TabsTrigger value="safety">{dictionary.detail.safety}</TabsTrigger>
            <TabsTrigger value="comfort">
              {dictionary.detail.comfort}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="engine">
            <SpecsRows rows={engineRows} />
          </TabsContent>

          <TabsContent value="dimensions">
            <SpecsRows rows={dimensionsRows} />
          </TabsContent>

          <TabsContent value="safety">
            <SpecsRows rows={safetyRows} />
          </TabsContent>

          <TabsContent value="comfort">
            <SpecsRows rows={comfortRows} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
