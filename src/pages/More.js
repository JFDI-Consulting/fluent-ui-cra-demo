import React from "react";
import MarkdownArticle from "../MarkdownArticle";
import { Icon } from "@fluentui/react";
import { useThemeColor } from "../theming/ThemeContext";

const HowTo = () => {
    const [themePrimary] = useThemeColor("themePrimary");

    const md = `#### Resources I've Found Helpful

- [Fluent UI Components](https://developer.microsoft.com/en-us/fluentui#/controls)
- [Fluent UI Icons Reference](https://developer.microsoft.com/en-us/fluentui#/controls/web/icon)
- [Fluent UI Theme Designer](https://fabricweb.z5.web.core.windows.net/pr-deploy-site/refs/heads/master/theming-designer/index.html)
- CSS grid is used along with custom components like ContainerWithSidebar and semantic SCSS classes to fill the gap in presentation surface components in Fluent UI. `;

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
                        marginLeft: "3rem",
                        color: themePrimary
                    }}
                />
            }
        />
    );
};

export default HowTo;
