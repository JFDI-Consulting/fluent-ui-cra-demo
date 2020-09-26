import { Icon } from "@fluentui/react";
import React from "react";
import { useTheme } from "../theming/ThemeContext";
import Bullets from "./Bullets";

const HowTo = () => {
    const [
        {
            theme: {
                palette: { themePrimary }
            }
        }
    ] = useTheme();

    console.log("ThemePrimary", themePrimary);
    return (
        <>
            <article>
                <h4>How To</h4>
                <p>
                    It's not immediately obvious from the documentation how to
                    do quite a few things using Fluent UI. This is partly
                    because it's a work-in-progress. This demo app has solved a
                    number of common challenges.
                </p>
                <Bullets
                    items={[
                        "Switching themes is achieved using the React Context API in a convenient custom wrapper (ThemeContext.js). The theme is switched by calling its internal state's set-state function, provided by the useTheme custom hook. Applying the theme is done by the Fabric component's applyTheme method, with Fluent UI's Customizations.applySettings called in a useEffect hook whenever the theme changes."
                    ]}
                />
            </article>
            <aside>
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
            </aside>
        </>
    );
};

export default HowTo;
