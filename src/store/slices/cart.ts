import { type StateCreator } from "zustand";

import type { Card } from "@/shared/interfaces";

interface CartState {
  shipping: number;
  shippingType: "fixed" | "express";
  items: Card[];
}

interface CartActions {
  clearItems: () => void;
  addItem: (item: Card) => void;
  removeItem: (itemId: number) => void;
  setShipping: (shipping: number) => void;
  setShippingType: (shippingType: "fixed" | "express") => void;
}

export type CartSlice = CartState & CartActions;

const initialState: CartState = {
  items: [],
  shipping: 0,
  shippingType: "fixed",
};

export const useCartSlice: StateCreator<
  CartSlice,
  [["zustand/immer", never]],
  [],
  CartSlice
> = (set) => ({
  ...initialState,
  clearItems: () => set({ items: [] }),
  setShipping: (shipping) => set({ shipping }),
  setShippingType: (shippingType) => set({ shippingType }),
  addItem: (item) =>
    set((state) => {
      state.items.push(item);
    }),
  removeItem: (itemId) =>
    set((state) => {
      state.items = state.items.filter((item) => item.id !== itemId);
    }),
});
