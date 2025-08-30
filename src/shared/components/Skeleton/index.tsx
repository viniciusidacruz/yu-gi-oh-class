import { cn } from "@/shared/utils";
import type { ComponentProps } from "react";

export const Skeleton = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("animate-puls", className)} {...props}>
    <div className="w-full h-full bg-gray-200 rounded-md" />
  </div>
);
