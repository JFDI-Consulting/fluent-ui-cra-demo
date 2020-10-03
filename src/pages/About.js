import React from "react";
import logo from "../logo.svg";
import md from "./about.md";
import MarkdownArticle from "../components/MarkdownArticle";

const About = () => (
    <MarkdownArticle
        md={md}
        rightImg={
            <img
                src={logo}
                className="logo medium"
                alt="logo"
                style={{ marginTop: "3rem" }}
            />
        }
    />
);

export default About;
