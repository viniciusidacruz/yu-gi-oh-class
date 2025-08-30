import { cn } from "@/shared/utils";

import type { ButtonProps } from "./types";

export const Button = ({
  children,
  disabled,
  variant = "primary",
  className,
  ...props
}: ButtonProps) => (
  <button
    className={cn(
      "py-2 mt-5 text-white font-bold hover:brightness-110 transition-all duration-300 cursor-pointer flex-nowrap",
      variant === "primary" ? "bg-primary" : "bg-secondary",
      disabled ? "opacity-50 cursor-not-allowed" : "opacity-100 cursor-pointer",
      className
    )}
    {...props}
  >
    {children}
  </button>
);
