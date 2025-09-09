import { useFilters } from "@/shared/hooks";
import { Button } from "@/shared/components";
import { orderOptions } from "@/shared/utils";
import { ATTRIBUTE, RACE, CARD_TYPE } from "@/shared/constants";

import { Group } from "./Group";

export const Sidebar = () => {
  const {
    onSubmit,
    cardTypeOptions,
    handleClearFilters,
    typeAndAttributeOptions,
    handleTypeAndAttributeOptionsChange,
    handleCardTypeOptionsChange,
  } = useFilters();

  const typeAndAttribute = orderOptions([...RACE, ...ATTRIBUTE]);

  return (
    <aside className="w-full lg:w-[315px]">
      <h3 className="text-[26px] font-bold border-b border-primary text-primary mb-[19px]">
        FILTROS
      </h3>

      <Group
        options={typeAndAttribute}
        title="TIPO / ATRIBUTO"
        value={typeAndAttributeOptions}
        onChange={handleTypeAndAttributeOptionsChange}
      />

      <Group
        options={CARD_TYPE}
        title="TIPO DE CARTA"
        value={cardTypeOptions}
        onChange={handleCardTypeOptionsChange}
      />

      <div className="flex items-center gap-0 lg:gap-4 flex-col lg:flex-row">
        <Button
          type="button"
          variant="primary"
          className="w-full"
          onClick={onSubmit}
        >
          PESQUISAR
        </Button>

        <Button
          type="button"
          variant="secondary"
          className="w-full"
          onClick={handleClearFilters}
        >
          LIMPAR FILTROS
        </Button>
      </div>
    </aside>
  );
};
