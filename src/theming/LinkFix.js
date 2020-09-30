import React from "react";
import { useThemeColor } from "./ThemeContext";

const LinkFix = () => {
    const [themePrimary] = useThemeColor("themePrimary");
    return (
        <style>{`a, a:link, a:visited {color: ${themePrimary}; text-decoration: none; } a:hover {text-decoration: underline;}`}</style>
    );
};

export default LinkFix;
