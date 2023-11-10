import { createContext } from "react";
type themeContextType = {
  theme: string,
  toggleTheme:(e: any) => void;
}
export const ThemeContext = createContext<themeContextType>({theme: "", toggleTheme: () =>{}})

