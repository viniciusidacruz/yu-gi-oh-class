import { useQuery } from "@tanstack/react-query";

import { CardsService } from "../services";

export const useGetCards = () => {
  return useQuery({
    queryKey: ["cards"],
    queryFn: CardsService.getCards,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};
