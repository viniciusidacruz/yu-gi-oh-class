import type { Card } from "../interfaces";

export const getTotalValue = (items: Card[]) => {
  return items.reduce(
    (acc, item) => acc + Number(item.card_prices[0].ebay_price ?? 0),
    0
  );
};
