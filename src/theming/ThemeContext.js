import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { themes, list } from "./themes";
import { Customizations, Fabric } from "@fluentui/react";
import LinkStylingFix from "./LinkStylingFix";

const getInitialThemeState = () => localStorage.getItem("theme") || list[0];

const useThemeState = () => {
    const [themeId, setTheme] = useState(getInitialThemeState());
    const setAndSaveTheme = theme => {
        localStorage.setItem("theme", theme);
        setTheme(theme);
    };
    return [{ themeId, theme: themes[themeId], themes: list }, setAndSaveTheme];
};

const ThemeContext = createContext();
const ThemeProvider = ({ children }) => (
    <ThemeContext.Provider value={useThemeState()}>
        <LinkStylingFix />
        {children}
    </ThemeContext.Provider>
);

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired
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

FluentThemedContainer.propTypes = {
    children: PropTypes.node.isRequired
};

const useThemeColor = colorId => {
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
