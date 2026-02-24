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
    <div>
      {rows.map((row) => (
        <div
          key={row.label}
          className="flex justify-between border-b border-zinc-200 py-4"
        >
          <span className="text-zinc-500">{row.label}</span>
          <span className="font-medium">{row.value}</span>
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
    <section
      id="specifications"
      className="bg-zinc-50 px-4 py-20 sm:px-6 lg:px-8"
    >
      <h2 className="text-center text-3xl font-light md:text-4xl">
        {dictionary.detail.specifications}
      </h2>

      <div className="mx-auto mt-12 max-w-3xl">
        <Tabs defaultValue="engine" className="w-full">
          <TabsList className="mx-auto mb-8 w-fit">
            <TabsTrigger value="engine">
              {dictionary.detail.engine}
            </TabsTrigger>
            <TabsTrigger value="dimensions">
              {dictionary.detail.dimensions}
            </TabsTrigger>
            <TabsTrigger value="safety">
              {dictionary.detail.safety}
            </TabsTrigger>
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
