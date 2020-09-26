import React from "react";
import Bullets from "./Bullets";
import logo from "../logo.svg";

const About = () => {
    return (
        <>
            <article>
                <h4>Introduction</h4>
                <p>
                    This Fluent UI CRA sample app shows how to create a Create
                    React App / Fluent UI Single Page Application (SPA). It
                    incorporates several key features, selected for inclusion
                    due to their commonplace usage in React SPAs.
                </p>
                <p>These include:</p>
                <Bullets
                    items={[
                        "Fluent UI",
                        "Theming",
                        "The sheer convenience of SCSS",
                        "Component Composition",
                        "React Hooks & Context API",
                        "CSS Grid-based layout",
                        "React Router"
                    ]}
                />
            </article>
            <aside>
                <img src={logo} className="logo medium" alt="logo" />
            </aside>
        </>
    );
};

export default About;
