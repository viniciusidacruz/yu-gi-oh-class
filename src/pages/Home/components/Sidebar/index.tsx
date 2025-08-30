import { Fragment } from "react";

import { Button } from "@/shared/components";
import { useStableFilterOptions } from "@/shared/hooks";

import { Group } from "./Group";
import type { SidebarProps } from "./types";

export const Sidebar = ({ isLoading, data }: SidebarProps) => {
  const { types, attributes } = useStableFilterOptions(data);

  const isEmpty = !data.length;

  return (
    <aside className="w-full lg:w-[315px]">
      <h3 className="text-[26px] font-bold pb-1 border-b border-primary text-primary mb-[19px]">
        FILTROS
      </h3>

      {isEmpty ? (
        <p className="text-tertiary">Nenhum filtro encontrado</p>
      ) : (
        <Fragment>
          <Group
            isLoading={isLoading}
            title="TIPO / ATRIBUTO"
            options={[...types, ...attributes]}
          />

          <div className="flex items-center gap-0 lg:gap-4 flex-col lg:flex-row">
            <Button
              type="button"
              variant="primary"
              disabled={isLoading}
              className="w-full"
            >
              PESQUISAR
            </Button>

            <Button
              type="button"
              variant="secondary"
              disabled={isLoading}
              className="w-full"
            >
              LIMPAR FILTROS
            </Button>
          </div>
        </Fragment>
      )}
    </aside>
  );
};
