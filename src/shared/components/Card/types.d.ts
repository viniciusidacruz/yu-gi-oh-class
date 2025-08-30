import type { Card } from "@/shared/interfaces";

export interface CardProps {
  card: Card;
}

export type VisibleModalType = "add" | "already-added";
