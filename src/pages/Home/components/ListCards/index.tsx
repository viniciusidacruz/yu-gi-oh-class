import { Card } from "@/shared/components";
import type { ListCardsProps } from "./types";

export const ListCards = ({ cards }: ListCardsProps) => (
  <section className="mt-[69px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-rows-auto gap-[49px]">
    {cards.map((card) => (
      <Card key={card.id} card={card} />
    ))}
  </section>
);
