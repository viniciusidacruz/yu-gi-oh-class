import { usePagination } from "@/shared/hooks";
import type { SelectProps } from "./types";

export const Select = ({ data }: SelectProps) => {
  const { handlePageSizeChange, numStr } = usePagination(data);

  return (
    <div className="flex items-center gap-[11px]">
      <select
        className="w-15 p-1 border"
        value={numStr}
        onChange={handlePageSizeChange}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>

      <span className="text-tertiary">Itens por página</span>
    </div>
  );
};
