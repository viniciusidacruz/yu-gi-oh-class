import { Skeleton } from "@/shared/components";

export const HomeSkeleton = () => (
  <div className="mt-8">
    <div className="flex flex-col lg:flex-row gap-8 justify-between">
      <Skeleton className="w-[100px] h-4" />
      <Skeleton className="w-[300px] h-4" />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
      {Array.from({ length: 10 }).map((_, index) => (
        <Skeleton key={index} className="w-full h-20" />
      ))}
    </div>
  </div>
);
