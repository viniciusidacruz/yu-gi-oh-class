import { Link } from "react-router-dom";
import { useShallow } from "zustand/react/shallow";

import miniCart from "@/assets/images/cart.png";

import { cn } from "@/shared/utils";
import { useAppStore } from "@/store";
import { ROUTES } from "@/shared/constants";

import type { MiniCartProps } from "./types";

export const MiniCart = ({ className }: MiniCartProps) => {
  const { items } = useAppStore(
    useShallow((state) => ({
      items: state.items,
    }))
  );

  return (
    <Link to={ROUTES.CHECKOUT} className={cn("relative", className)}>
      <img src={miniCart} alt="MiniCart" />

      <span className="absolute top-0 right-0 bg-secondary text-white text-xs px-2 py-1 rounded-full">
        {items.length}
      </span>
    </Link>
  );
};
