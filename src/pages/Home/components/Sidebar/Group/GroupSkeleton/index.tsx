import { Skeleton } from "@/shared/components";

export const GroupSkeleton = () => (
  <div className="flex flex-col gap-2">
    <Skeleton className="w-1/2 h-4 mb-[7px]" />

    {Array.from({ length: 10 }).map((_, index) => (
      <Skeleton key={index} className="w-full h-4" />
    ))}
  </div>
);
