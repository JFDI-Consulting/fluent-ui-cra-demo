import React from "react";
import { useTheme } from "./ThemeContext";

const LinkFix = () => {
    const [
        {
            theme: { palette }
        }
    ] = useTheme();

    return (
        <style>
            {`
                a:not([class]),
                a:link:not([class]),
                a:visited:not([class]),
                a[class=""],
                a[class=""]:link,
                a[class=""]:visited {
                    color: ${palette.themePrimary}; text-decoration: none;
                }
                a:not([class]):hover, a[class=""]:hover {
                    text-decoration: underline;
                    color: ${palette.themeDark};
                }
            `}
        </style>
    );
};

export default LinkFix;
