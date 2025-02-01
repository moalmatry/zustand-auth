import { create } from "zustand";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { UserSlice, createUserSlice } from "./user-slice";

export type Store = UserSlice;

export const useStore = create<Store>()(
  devtools(
    persist(
      subscribeWithSelector(
        immer((...a) => ({
          ...createUserSlice(...a),
        }))
      ),
      {
        name: "local-storage",
      }
    )
  )
);
