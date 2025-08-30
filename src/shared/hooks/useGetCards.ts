import { useQuery } from "@tanstack/react-query";

import { useQueryState } from "nuqs";

import { CardsService } from "../services";

export const useGetCards = () => {
  const [name] = useQueryState("name");
  const [num] = useQueryState("num", { defaultValue: "10" });
  const [type] = useQueryState("type");
  const [offset] = useQueryState("offset", { defaultValue: "0" });
  const [attribute] = useQueryState("attribute");

  const { data, isLoading } = useQuery({
    queryKey: ["cards", offset, num, attribute, type, name],
    queryFn: () =>
      CardsService.getCards(
        offset,
        num,
        attribute,
        type,
        decodeURIComponent(name ?? "")
      ),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  const isEmpty = !isLoading && !data?.data.length;
  const isSuccess = !isLoading && !isEmpty;

  return { data, isLoading, isEmpty, isSuccess };
};
