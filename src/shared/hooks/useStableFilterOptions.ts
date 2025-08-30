import { useRef } from "react";

import type { Card } from "@/shared/interfaces";
import { extractOptions } from "@/shared/utils";

export function useStableFilterOptions(cards?: Card[]) {
  const ref = useRef<{ types: string[]; attributes: string[] } | null>(null);

  if (!ref.current && cards && cards.length) {
    ref.current = extractOptions(cards);
  }

  return ref.current ?? { types: [], attributes: [] };
}
