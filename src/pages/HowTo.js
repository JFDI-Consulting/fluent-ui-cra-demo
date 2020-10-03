import React from "react";
import MarkdownArticle from "../components/MarkdownArticle";
import { Icon } from "@fluentui/react";
import { useThemeColor } from "../theming/ThemeContext";
import md from "./howTo.md";

const HowTo = () => {
    const [themePrimary] = useThemeColor("themePrimary");

    return (
        <MarkdownArticle
            md={md}
            rightImg={
                <Icon
                    iconName="Unknown"
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
