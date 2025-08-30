import { Select } from "./Select";
import { Pagination } from "./Pagination";
import type { FiltersProps } from "./types";

export const Filters = ({ data }: FiltersProps) => {
  return (
    <section className="w-full mt-8 gap-8 flex-col lg:flex-row flex lg:items-center justify-between">
      <Select data={data?.meta} />

      <Pagination data={data?.meta} />
    </section>
  );
};
