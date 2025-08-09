import { create } from "zustand";
import { createUserSlice } from "./user-slice";
import type { Store } from "@/types/store";
import { immer } from "zustand/middleware/immer";
import { createCartSlice } from "./cart-slice";
import { devtools, subscribeWithSelector } from "zustand/middleware";

export const useStore = create<Store>()(
  devtools(
    subscribeWithSelector(
      immer((...a) => ({
        ...createUserSlice(...a),
        ...createCartSlice(...a),
      }))
    )
  )
);
