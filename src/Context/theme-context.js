import { createContext, useContext, useReducer, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const currentTheme = localStorage?.getItem("theme");
  const [theme, setTheme] = useState(currentTheme ? currentTheme : "light");

  const toggleTheme = () => {
    theme === "light"
      ? localStorage?.setItem("theme", "dark")
      : localStorage?.setItem("theme", "light");
    const newTheme = localStorage?.getItem("theme");

    setTheme(newTheme);
  };
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

export { useTheme, ThemeProvider };
