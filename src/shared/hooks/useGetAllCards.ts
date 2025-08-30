import { useQuery } from "@tanstack/react-query";

import { CardsService } from "../services";

export const useGetAllCards = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["cards-filters"],
    queryFn: () => CardsService.getCards(),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const isEmpty = !isLoading && !data?.data.length;

  return { allCards: data?.data, isLoading, isEmpty };
};
