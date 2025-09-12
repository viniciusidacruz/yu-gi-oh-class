import { Fragment } from "react";
import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store";
import { getTotalValue } from "@/shared/utils";

import { Sidebar } from "./components/Sidebar";
import { CartItem } from "./components/CartItem";
import { SubTotal } from "./components/SubTotal";
import { Shipping } from "./components/Shipping";

export function Checkout() {
  const { items } = useAppStore(
    useShallow((state) => ({
      items: state.items,
    }))
  );

  const total = getTotalValue(items);
  const hasItems = items.length > 0;

  return (
    <section className="container mx-auto px-8 mt-[63px]">
      <h1 className="text-4xl font-bold text-primary">
        CARRINHO DE <span className="text-secondary">COMPRAS</span>
      </h1>

      <div className="w-full h-[1px] bg-primary mt-[21px]" />

      <div className="flex flex-col lg:flex-row gap-[100px] mt-[52px]">
        <div className="w-full border-[3px] border-quaternary px-12 py-10 flex flex-col gap-8">
          {hasItems ? (
            <Fragment>
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}

              <SubTotal total={total} />

              <Shipping />
            </Fragment>
          ) : (
            <p>Nenhum item encontrado</p>
          )}
        </div>

        {hasItems && <Sidebar />}
      </div>
    </section>
  );
}
