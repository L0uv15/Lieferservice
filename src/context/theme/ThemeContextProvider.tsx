import { createDarkTheme, createHighContrastTheme, createLightTheme, FluentProvider, Theme } from "@fluentui/react-components"
import { ThemeContext, themeContext } from "./ThemeContext"
import React from "react"
import { greenBrandVariants } from "./brandVariants";

export default function ThemeContextProvider(properties: React.PropsWithChildren): React.JSX.Element {

    const [mode, _setMode] = React.useState<ThemeContext["mode"]>("light")

    const setMode = React.useCallback<ThemeContext["setMode"]>((args) => _setMode(args.mode), []);

    const theme = React.useMemo<Theme>(() => {
        switch (mode) {
            case "dark": return { ...createDarkTheme(greenBrandVariants)};
            case "light": return { ...createLightTheme(greenBrandVariants)};
            case "high-contrast": return { ...createHighContrastTheme()};
        }
    }, [mode]);

    const value = React.useMemo<ThemeContext>(() => ({
        mode,
        setMode
    }), [mode, setMode])

    return (
        <themeContext.Provider value={value}>
            <FluentProvider theme={theme}>
                {properties.children}
            </FluentProvider>
        </themeContext.Provider>
    )
}