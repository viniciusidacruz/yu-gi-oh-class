import { useQuery } from "@tanstack/react-query";

import { useQueryState } from "nuqs";

import { CardsService } from "../services";

export const useGetCards = () => {
  const [name] = useQueryState("name");
  const [type] = useQueryState("type");
  const [race] = useQueryState("race");
  const [attribute] = useQueryState("attribute");
  const [num] = useQueryState("num", { defaultValue: "10" });
  const [offset] = useQueryState("offset", { defaultValue: "0" });

  const { data, isLoading } = useQuery({
    queryKey: ["cards", offset, num, attribute, type, name, race],
    queryFn: () =>
      CardsService.getCards(
        offset,
        num,
        decodeURIComponent(attribute ?? ""),
        decodeURIComponent(type ?? ""),
        decodeURIComponent(name ?? ""),
        decodeURIComponent(race ?? "")
      ),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  const isEmpty = !isLoading && !data?.data.length;
  const isSuccess = !isLoading && !isEmpty;

  return { data, isLoading, isEmpty, isSuccess };
};
