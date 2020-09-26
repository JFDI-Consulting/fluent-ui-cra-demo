import React from "react";
import { Toggle, TooltipHost } from "@fluentui/react";
import { useTheme } from "./ThemeContext";

const ThemeToggle = () => {
    const [{ themeId, themes }, setTheme] = useTheme();
    if (themes.length !== 2)
        console.error(
            `ThemeToggle only works with 2 selectable themes - there are ${themes.length}`
        );

    const toggleTheme = () => (themeId === themes[0] ? themes[1] : themes[0]);

    return (
        <div
            style={{
                position: "absolute",
                right: "1rem",
                top: "0"
            }}
        >
            <TooltipHost
                id="themeTip"
                content="Switch between light &amp; dark modes"
            >
                <Toggle
                    aria-describedby="themeTip"
                    checked={themeId === "dark"}
                    onChange={() => setTheme(toggleTheme())}
                />
            </TooltipHost>
        </div>
    );
};

export default ThemeToggle;
