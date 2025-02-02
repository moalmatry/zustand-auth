/* eslint-disable @typescript-eslint/ban-ts-comment */
import { create } from "zustand";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { UserSlice, createUserSlice } from "./user-slice";
import { AuthSlice, createAuthSlice } from "./auth-slice";

export type Store = AuthSlice & UserSlice;

export const useStore = create<Store>()(
  devtools(
    persist(
      subscribeWithSelector(
        immer((...a) => ({
          // @ts-ignore
          ...createUserSlice(...a),
          // @ts-ignore
          ...createAuthSlice(...a),
        }))
      ),
      {
        name: "local-storage",
      }
    )
  )
);
