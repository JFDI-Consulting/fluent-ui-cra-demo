import React from "react";
import MarkdownArticle from "../components/MarkdownArticle";
import { Icon } from "@fluentui/react";
import { useThemeColor } from "../theming/ThemeContext";
import md from "./more.md";

const HowTo = () => {
    const [themePrimary] = useThemeColor("themePrimary");

    return (
        <MarkdownArticle
            md={md}
            rightImg={
                <Icon
                    iconName="Documentation"
                    style={{
                        fontSize: 200,
                        height: 200,
                        width: 200,
                        marginTop: "3rem",
                        marginLeft: "3rem",
                        color: themePrimary
                    }}
                />
            }
        />
    );
};

export default HowTo;
