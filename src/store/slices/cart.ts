import { type StateCreator } from "zustand";

import type { Card } from "@/shared/interfaces";

interface CartState {
  items: Card[];
}

interface CartActions {
  clearItems: () => void;
  addItem: (item: Card) => void;
  removeItem: (itemId: number) => void;
}

export type CartSlice = CartState & CartActions;

const initialState: CartState = {
  items: [],
};

export const useCartSlice: StateCreator<
  CartSlice,
  [["zustand/immer", never]],
  [],
  CartSlice
> = (set) => ({
  ...initialState,
  clearItems: () => set({ items: [] }),
  addItem: (item) =>
    set((state) => {
      state.items.push(item);
    }),
  removeItem: (itemId) =>
    set((state) => {
      state.items = state.items.filter((item) => item.id !== itemId);
    }),
});
