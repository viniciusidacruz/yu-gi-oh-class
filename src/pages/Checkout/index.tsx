import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store";
import { getTotalValue, formatCurrency } from "@/shared/utils";

import { CartItem } from "./components/CartItem";

export function Checkout() {
  const { items } = useAppStore(
    useShallow((state) => ({
      items: state.items,
    }))
  );

  const total = getTotalValue(items);

  return (
    <section className="container mx-auto px-8 mt-[63px]">
      <h1 className="text-4xl font-bold text-primary">
        CARRINHO DE <span className="text-secondary">COMPRAS</span>
      </h1>

      <div className="w-full h-[1px] bg-primary mt-[21px]" />

      <div className="flex flex-col lg:flex-row gap-[100px] mt-[52px]">
        <div className="w-full border-[3px] border-quaternary px-12 py-10 flex flex-col gap-8">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <div className="mt-6 lg:mt-0 border-b border-quaternary pb-[30px] w-full flex flex-col items-end">
            <h4 className="font-bold">Subtotal</h4>

            <span className="font-bold text-2xl text-secondary">
              {formatCurrency(total)}
            </span>
          </div>
        </div>

        <p>teste</p>
      </div>
    </section>
  );
}
