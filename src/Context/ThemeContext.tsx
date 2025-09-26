 import { createContext, useContext, useState, type ReactNode } from "react";
import { createTheme, ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";

type ThemeMode = "light" | "dark";

interface ThemeContextProps {
  mode: ThemeMode;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
const [mode, setMode] = useState<ThemeMode>(
  (localStorage.getItem("current-theme") as ThemeMode) || "light"
);


  const toggleMode = () => {
    setMode((prev) => {
      const newMode = prev === "light" ? "dark" : "light";
      localStorage.setItem("current-theme", newMode);
      return newMode;
    });
  };

 
  const theme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: { main: "#1976d2" },
            background: { default: "#f5f5f5", paper: "#fff" },
          }
        : {
            primary: { main: "#90caf9" },
            background: { default: "#121212", paper: "#1e1e1e" },
          }),
    },
  });

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useThemeContext must be used inside ThemeProvider");
  return context;
};
