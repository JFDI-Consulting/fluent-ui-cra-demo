import { Nav } from "@fluentui/react";
import React, { useState } from "react";
import People from "./People";
import ToDos from "./ToDos";

const Apps = () => {
    const [currentApp, loadApp] = useState("People");
    const apps = { People: <People />, "To Do": <ToDos /> };

    const navLinks = [
        {
            links: Object.keys(apps).map((name) => ({ name }))
        }
    ];
    const linkClicked = (e, link) => loadApp(link.name);

    return (
        <>
            <aside>
                <Nav groups={navLinks} onLinkClick={linkClicked}></Nav>
            </aside>
            <article>{apps[currentApp]}</article>
        </>
    );
};

export default Apps;
