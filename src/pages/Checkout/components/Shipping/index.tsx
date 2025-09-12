import { Fragment } from "react";
import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store";
import { formatCurrency } from "@/shared/utils";
import { Checkbox } from "@/shared/components";

export const Shipping = () => {
  const { shipping, setShipping, shippingType, setShippingType } = useAppStore(
    useShallow((state) => ({
      shipping: state.shipping,
      setShipping: state.setShipping,
      shippingType: state.shippingType,
      setShippingType: state.setShippingType,
    }))
  );

  const isSelectedFixed = shippingType === "fixed";
  const isSelectedExpress = shippingType === "express";

  const onSelectFixed = () => {
    setShippingType("fixed");
    setShipping(15);
  };

  const onSelectExpress = () => {
    setShippingType("express");
    setShipping(0);
  };

  return (
    <Fragment>
      <div className="flex justify-between flex-col lg:flex-row">
        <h2 className="text-[26px] font-bold text-primary">
          Formas de <span className="text-secondary">envio</span>
        </h2>

        <div>
          <h4 className="font-bold">Custo do Frete</h4>

          <span className="font-bold text-2xl text-secondary">
            {formatCurrency(isSelectedFixed ? 15 : shipping)}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3.5">
        <div className="flex items-center gap-2">
          <Checkbox value={isSelectedFixed} onCheckedChange={onSelectFixed} />

          <span>
            Frete Fixo com rastreio ({formatCurrency(15)}){" "}
            <small>até 15 dias</small>
          </span>
        </div>

        <div className="flex items-start gap-2">
          <Checkbox
            value={isSelectedExpress}
            onCheckedChange={onSelectExpress}
          />

          <div>
            <span>Frete combinado com o vendedor</span>

            <div className="flex items-end gap-1.5">
              <span className="text-xs">Valor combinado:</span>

              <input
                min={0}
                type="number"
                name="combined-value"
                id="combined-value"
                disabled={!isSelectedExpress}
                value={isSelectedExpress ? shipping : 0}
                className="border border-quaternary px-2 mt-[11px] max-w-[102px] disabled:opacity-50 disabled:cursor-not-allowed"
                onChange={(e) => setShipping(Number(e.target.value))}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
