import React from "react";

export type ThemeContext = {
    mode: "dark" | "light" | "high-contrast",
    setMode: (args: { mode: ThemeContext["mode"] }) => void,
}

export const themeContext = React.createContext<ThemeContext | null>(null);