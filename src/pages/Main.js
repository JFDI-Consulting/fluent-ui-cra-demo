import React, { useState } from "react";
import { CommandBar, Pivot, PivotItem } from "@fluentui/react";
import ThemeToggle from "../theming/ThemeToggle";
import About from "./About";
import HowTo from "./HowTo";
import Footer from "./Footer";
import Apps from "./Apps";
import { useParams } from "react-router-dom";

export const Main = () => {
    const { section = "apps", app } = useParams();
    console.log(section, app);
    const [currentTab, setTab] = useState(section);
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
            <Pivot
                defaultSelectedKey={currentTab}
                onLinkClick={link => setTab(link.itemKey)}
                className="full"
            >
                <PivotItem headerText="Apps">
                    <Apps itemKey="apps" app={app} />
                </PivotItem>

                <PivotItem itemKey="about" headerText="About">
                    <About />
                </PivotItem>
                <PivotItem itemKey="howto" headerText="How To">
                    <HowTo />
                </PivotItem>
                <PivotItem itemKey="more" headerText="Further Reading">
                    <p>Resources I've Found Helpful</p>
                </PivotItem>
            </Pivot>
            <Footer />
        </div>
    );
};
