import { createContext, useContext, useState } from "react";
import { COLOR_SCHEMES } from "@/constants";

// Context
const ColorSchemeContext = createContext();

// Provider
export function ColorSchemeProvider({ children }) {
  const [colorScheme, setColorScheme] = useState(
    Math.floor(Math.random() * (COLOR_SCHEMES.length + 1))
  );

  const toggleColorScheme = (colorScheme) => {
    setColorScheme((prevScheme) => colorScheme);
  };

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, toggleColorScheme }}>
      {children}
    </ColorSchemeContext.Provider>
  );
}

// hook para usar el contexto
export function useColorScheme() {
  return useContext(ColorSchemeContext);
}
