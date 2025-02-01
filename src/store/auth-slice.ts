import { Register } from "@/types";
import { StateCreator } from "zustand";

export type AuthState = {
  id: string;
  authenticated: boolean;
  token: string;
  name: string;
  profileImg: string;
  message: string;
  isLoading: boolean;
};

export type AuthActions = {
  addToken: (token: string) => void;
  addId: (id: string) => void;
  addName: (name: string) => void;
  addProfileImg: (profileImg: string) => void;
  addMessage: (message: string) => void;
  setAuthenticated: (authenticated: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
  logout: () => void;
  login: (email: string, password: string) => void;
  signup: (data: Register) => void;
};

const initialState: AuthState = {
  id: "",
  name: "",
  message: "",
  profileImg: "",
  token: "",
  isLoading: true,
  authenticated: false,
};

export type AuthSlice = AuthState & AuthActions;
export const createUserSlice: StateCreator<
  AuthSlice,
  [["zustand/immer", never]],
  [],
  AuthSlice
> = (set) => ({
  ...initialState,
  addId: (id) =>
    set((state) => {
      state.id = id;
    }),
  addMessage: (message) =>
    set((state) => {
      state.message = message;
    }),
  addName: (name) =>
    set((state) => {
      state.name = name;
    }),
  addProfileImg: (profileImage) =>
    set((state) => {
      state.profileImg = profileImage;
    }),
  addToken: (token) =>
    set((state) => {
      state.token = token;
    }),
  setIsLoading: (isLoading) =>
    set((state) => {
      state.isLoading = isLoading;
    }),
  setAuthenticated: (authenticated) =>
    set((state) => {
      state.authenticated = authenticated;
    }),

  login: (email, password) => {
    // Implement login logic here
    console.log(`Logging in with email: ${email} and password: ${password}`);
  },
  logout: () => {
    // Implement logout logic here
    console.log("Logging out");
  },
  signup: (data: Register) => {
    // Implement signup logic here
    console.log(`Signing up with data: ${JSON.stringify(data)}`);
  },
});
