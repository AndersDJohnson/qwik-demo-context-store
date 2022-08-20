import { createContext } from "@builder.io/qwik";

export interface MyContextValue {
  count: number;
}

export const MyContext = createContext<MyContextValue>("myContext");
