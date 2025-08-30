import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";

import { useCartSlice, type CartSlice } from "./slices/cart";

type Store = CartSlice;

export const useAppStore = create<Store>()(
  devtools(
    persist(
      subscribeWithSelector(
        immer((...a) => ({
          ...useCartSlice(...a),
        }))
      ),
      {
        name: "app-storage",
      }
    ),
    { name: "AppStore" }
  )
);
