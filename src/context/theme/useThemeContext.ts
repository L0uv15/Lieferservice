import React from "react";
import { ThemeContext, themeContext } from "./ThemeContext";

export default function useThemeContext(): ThemeContext {
  const context = React.useContext(themeContext);
  if (!context) throw new Error("8eb50662-b11a-40b6-86de-016d54797c9c");
  return context;
}