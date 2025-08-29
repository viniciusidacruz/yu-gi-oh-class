import { Link } from "react-router-dom";

import miniCart from "@/assets/images/cart.png";

import { cn } from "@/shared/utils";
import { ROUTES } from "@/shared/constants";

import type { MiniCartProps } from "./types";

export const MiniCart = ({ className }: MiniCartProps) => {
  return (
    <Link to={ROUTES.CHECKOUT} className={cn("relative", className)}>
      <img src={miniCart} alt="MiniCart" />
    </Link>
  );
};
