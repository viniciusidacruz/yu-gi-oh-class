import { formatCurrency } from "@/shared/utils";
import type { CardProps } from "./types";
import { Button } from "../Button";

export const Card = ({ card }: CardProps) => {
  return (
    <div className="flex flex-col items-center">
      <img src={card.card_images[0].image_url} alt={card.name} />

      <h3 className="text-center font-bold mt-[15px] line-clamp-2 h-[42px]">
        {card.name}
      </h3>

      <span className="text-center mt-2 text-primary font-bold">
        {formatCurrency(Number(card.card_prices[0].ebay_price ?? 0))}
      </span>

      <Button variant="primary" className="w-full">
        Comprar
      </Button>
    </div>
  );
};
