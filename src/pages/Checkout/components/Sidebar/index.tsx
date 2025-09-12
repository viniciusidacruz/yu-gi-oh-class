import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store";
import { formatCurrency, getTotalValue } from "@/shared/utils";

export const Sidebar = () => {
  const { items, shipping } = useAppStore(
    useShallow((state) => ({
      items: state.items,
      shipping: state.shipping,
    }))
  );

  const total = getTotalValue(items);

  return (
    <aside className="w-full lg:w-[518px] bg-[#2D3331] py-[30px] px-[31px] h-fit lg:sticky lg:top-0">
      <h3 className="text-[26px] font-bold text-primary">
        Resumo da <span className="text-secondary">compra</span>
      </h3>

      <div className="w-full h-[1px] bg-primary mt-[13px]" />

      <div className="flex flex-col gap-3 pb-[30px] border-b border-primary pt-[25px]">
        <h4 className="text-white text-lg">Total dos produtos:</h4>
        <span className="text-primary font-bold text-[26px]">
          {formatCurrency(total)}
        </span>
      </div>

      <div className="flex flex-col gap-3 pb-[30px] border-b border-primary pt-[25px]">
        <h4 className="text-white text-lg">Valor do frete:</h4>
        <span className="text-primary font-bold text-[26px]">
          {formatCurrency(shipping)}
        </span>
      </div>

      <div className="flex flex-col mt-[26px]">
        <h4 className="text-white text-[26px] font-bold">TOTAL A PAGAR:</h4>
        <span className="text-secondary text-4xl font-bold">
          {formatCurrency(total + shipping)}
        </span>
      </div>
    </aside>
  );
};
