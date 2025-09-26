import { type ReactNode } from "react";
type ThemeMode = "light" | "dark";
interface ThemeContextProps {
    mode: ThemeMode;
    toggleMode: () => void;
}
export declare const ThemeProvider: ({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useThemeContext: () => ThemeContextProps;
export {};
