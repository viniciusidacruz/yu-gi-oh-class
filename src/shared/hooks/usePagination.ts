import { useQueryState } from "nuqs";
import type { Meta } from "../services";
import type { ChangeEvent } from "react";

export const usePagination = (data: Meta | undefined) => {
  const [offsetStr, setOffset] = useQueryState("offset", {
    defaultValue: "0",
  });
  const [numStr, setNum] = useQueryState("num", {
    defaultValue: "10",
  });

  const offset = Number(offsetStr ?? 0);

  const totalPages = Math.max(1, Number(data?.total_pages ?? 1));
  const pageSize = Math.max(1, Number(data?.current_rows || 10));

  const currentPage = Math.min(totalPages, Math.floor(offset / pageSize) + 1);

  const goToPage = (page: number) => {
    const clamped = Math.min(Math.max(page, 1), totalPages);
    const newOffset = (clamped - 1) * pageSize;
    setOffset(String(newOffset));
  };

  const handlePageSizeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setNum(event.target.value);
  };

  const prevDisabled = currentPage <= 1;
  const nextDisabled = currentPage >= totalPages;

  const windowSize = Math.min(5, totalPages);

  let start = currentPage - Math.floor(windowSize / 2);
  start = Math.max(1, start);

  if (start + windowSize - 1 > totalPages) {
    start = totalPages - windowSize + 1;
  }
  const pages = Array.from({ length: windowSize }, (_, i) => start + i);

  return {
    pages,
    numStr,
    goToPage,
    currentPage,
    prevDisabled,
    nextDisabled,
    handlePageSizeChange,
  };
};
