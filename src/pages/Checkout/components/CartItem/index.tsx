import type { Card } from "@/shared/interfaces";
import { formatCurrency } from "@/shared/utils/format-currency";

interface CartItemProps {
  item: Card;
}

export const CartItem = ({ item }: CartItemProps) => {
  return (
    <div className="flex gap-[11px] flex-col lg:flex-row border-b border-quaternary pb-[30px] items-center">
      <img
        alt={item.name}
        className="w-[100px] h-[156px]"
        src={item.card_images[0].image_url}
      />

      <div className="h-full flex flex-col items-center lg:items-start justify-between w-full">
        <h3 className="font-bold">{item.name}</h3>

        <p className="font-light mt-[2px] line-clamp-4 mb-auto">{item.desc}</p>

        <div className="flex justify-between flex-col lg:flex-row mt-[23px] w-full">
          <div className="flex gap-[14px] lg:gap-[142px]">
            <div>
              <h4 className="font-bold">Preço por unidade</h4>

              <span className="font-bold text-primary">
                {formatCurrency(Number(item.card_prices[0].ebay_price ?? 0))}
              </span>
            </div>

            <div>
              <h4 className="font-bold">Quantidade</h4>

              <span className="font-bold text-primary">1</span>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:ml-auto">
            <h4 className="font-bold">Total</h4>

            <span className="font-bold text-2xl text-secondary">
              {formatCurrency(Number(item.card_prices[0].ebay_price ?? 0))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
