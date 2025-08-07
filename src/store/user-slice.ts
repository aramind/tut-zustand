import type { Store } from "@/types/store";
import type { StateCreator } from "zustand";

export type UserState = {
  userName: string;
  fullName: string;
  age: number;
  address: string;
};

export type UserActions = {
  setAddress: (address: string) => void;
};

export type UserSlice = UserState & UserActions;

export const createUserSlice: StateCreator<
  Store,
  [["zustand/immer", never]],
  [],
  UserSlice
> = (set) => ({
  address: "",
  age: 0,
  fullName: "",
  userName: "",
  setAddress: (address) =>
    set((state) => {
      state.address = address;
    }),
});
