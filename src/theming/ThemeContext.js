import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { themes, list } from "./themes";
import { Customizations, Fabric } from "@fluentui/react";

const getInitialThemeState = () => localStorage.getItem("theme") || list[0];

const useThemeState = () => {
    const [themeId, setTheme] = useState(getInitialThemeState());
    const setAndSaveTheme = (theme) => {
        localStorage.setItem("theme", theme);
        setTheme(theme);
    };
    return [{ themeId, theme: themes[themeId], themes: list }, setAndSaveTheme];
};

const ThemeContext = createContext();
const ThemeProvider = ({ children }) => (
    <ThemeContext.Provider value={useThemeState()}>
        {children}
    </ThemeContext.Provider>
);

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
    initialState: PropTypes.string.isRequired
};

const useTheme = () => useContext(ThemeContext);

const FluentThemedContainer = ({ children }) => {
    const [{ theme }] = useTheme();

    useEffect(
        () =>
            Customizations.applySettings({
                theme
            }),
        [theme]
    );

    return <Fabric applyTheme>{children} </Fabric>;
};

const useThemeColor = (colorId) => {
    const [
        {
            theme: {
                palette: { [colorId]: color }
            }
        }
    ] = useTheme();

    return [color];
};

export { ThemeProvider, useTheme, useThemeColor, FluentThemedContainer };
