import React from "react";
import ExternalLink from "../components/ExternalLink";

const Footer = () => {
    return (
        <footer className="footer topline spaced widely">
            <p>
                Created by{" "}
                <ExternalLink
                    href="https://www.linkedin.com/in/jsilver"
                    text="Jon Silver"
                />
            </p>
            <p>
                Copyright {new Date().getFullYear()} &copy;
                <ExternalLink
                    href="https://jfdi.info"
                    text="JFDI Consulting Ltd"
                />
            </p>
            <p>
                <ExternalLink
                    href="https://github.com/jfdi-consulting/fluent-ui-cra-demo/"
                    text="See the GitHub Repo"
                />
            </p>
        </footer>
    );
};

export default Footer;
