import React from "react";
import { CommandBar, Pivot, PivotItem } from "@fluentui/react";
import ThemeToggle from "../theming/ThemeToggle";
import About from "./About";
import HowTo from "./HowTo";
import Footer from "./Footer";

export const Main = () => {
    const items = [
        {
            key: "back",
            text: "Back to Front",
            iconProps: { iconName: "ChevronLeft" },
            href: "/"
        }
    ];

    return (
        <div className="container dark grid full-height header-middle-footer">
            <header className="header center bottomline spaced widely">
                <h1>Fluent UI CRA Demo</h1>
                <div style={{ position: "relative" }}>
                    <CommandBar items={items}>&lt; back to front</CommandBar>
                    <ThemeToggle />
                </div>
            </header>
            <Pivot className="full">
                <PivotItem headerText="About">
                    <About />
                </PivotItem>
                <PivotItem headerText="How To">
                    <HowTo />
                </PivotItem>
                <PivotItem headerText="Further Reading">
                    <p>Resources I've Found Helpful</p>
                </PivotItem>
            </Pivot>
            <Footer />
        </div>
    );
};
