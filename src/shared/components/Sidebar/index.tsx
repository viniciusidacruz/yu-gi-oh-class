import { useStableFilterOptions } from "@/shared/hooks";

import { Group } from "./Group";
import { Button } from "../Button";

import type { SidebarProps } from "./types";

export const Sidebar = ({ isLoading, data }: SidebarProps) => {
  const { types, attributes } = useStableFilterOptions(data);

  return (
    <aside className="w-full lg:w-[315px]">
      <h3 className="text-[26px] font-bold pb-1 border-b border-primary text-primary mb-[19px]">
        FILTROS
      </h3>

      <Group
        isLoading={isLoading}
        title="TIPO / ATRIBUTO"
        options={[...types, ...attributes]}
      />

      <div className="flex items-center gap-0 lg:gap-4 flex-col lg:flex-row">
        <Button
          type="button"
          variant="secondary"
          disabled={isLoading}
          className="w-full lg:w-auto"
        >
          PESQUISAR
        </Button>

        <Button
          type="button"
          variant="primary"
          disabled={isLoading}
          className="w-full lg:w-auto"
        >
          LIMPAR FILTROS
        </Button>
      </div>
    </aside>
  );
};
