import { ReactNode, createContext,useState } from "react";
type themeContextType = {
  theme: string,
  toggleTheme:(e: any) => void;
}
interface ThemeProviderProps{
  children: ReactNode
}
export const ThemeContext = createContext<themeContextType>({theme: "", toggleTheme: () =>{}})
export default function ThemeProvider({children}: ThemeProviderProps){
  const [theme, setTheme] = useState("dark");
  const toggleTheme =()=>{
    setTheme((prev)=>prev === "dark"?"light":"dark");
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
