import React from "react";
import logo from "../logo.svg";
import MarkdownArticle from "../MarkdownArticle";

const md = `#### Introduction

This __Fluent UI CRA__ sample app shows how to create a *Create
React App / Fluent UI Single Page Application (SPA)*. It
incorporates several key features, selected for inclusion
due to their commonplace usage in React SPAs.

These include:

-   Fluent UI
-   Theming
-   The sheer convenience of SCSS
-   Component Composition
-   React Hooks & Context API
-   CSS Grid-based layout
-   React Router
-   Markdown rendering`;

const About = () => (
    <MarkdownArticle
        md={md}
        rightImg={<img src={logo} className="logo medium" alt="logo" />}
    />
);

export default About;
