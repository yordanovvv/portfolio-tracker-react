import { createContext, useContext, useEffect, useState } from "react";
import { Theme } from "../shared/interfaces";

// Create a new context for theme
const ThemeContext = createContext<Theme>({
  theme: "light",
  toggleTheme: () => {},
});

// Create a provider component to wrap the app with
export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "light");
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";

      // Store theme in local storage
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to consume the theme context
export const useTheme = () => useContext(ThemeContext);
