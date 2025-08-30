import { useQuery } from "@tanstack/react-query";

import { useQueryState } from "nuqs";

import { CardsService } from "../services";

export const useGetCards = () => {
  const [num] = useQueryState("num", { defaultValue: "10" });
  const [type] = useQueryState("type");
  const [offset] = useQueryState("offset", { defaultValue: "0" });
  const [attribute] = useQueryState("attribute");

  return useQuery({
    queryKey: ["cards", offset, num, attribute, type],
    queryFn: () => CardsService.getCards(offset, num, attribute, type),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};
