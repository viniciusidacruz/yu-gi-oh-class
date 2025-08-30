import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/shared/utils";
import { usePagination } from "@/shared/hooks";

import type { PaginationProps } from "./types";

export const Pagination = ({ data }: PaginationProps) => {
  const { currentPage, goToPage, prevDisabled, nextDisabled, pages } =
    usePagination(data);

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        disabled={prevDisabled}
        aria-label="Página anterior"
        onClick={() => goToPage(currentPage - 1)}
        className="text-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft />
      </button>

      <div className="flex items-center gap-2">
        {pages.map((p) => {
          const isActive = p === currentPage;

          return (
            <button
              key={p}
              type="button"
              onClick={() => goToPage(p)}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "w-8 h-8 rounded-md text-sm font-medium flex items-center justify-center",
                isActive
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              )}
            >
              {p}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        disabled={nextDisabled}
        aria-label="Próxima página"
        onClick={() => goToPage(currentPage + 1)}
        className="text-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight />
      </button>
    </div>
  );
};
