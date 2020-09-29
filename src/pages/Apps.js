import { Nav } from "@fluentui/react";
import React, { useState } from "react";
import People from "./People";
import ToDos from "./ToDos";

const firstKey = (o = {}) => Object.keys(o)[0];
const dictionaryToObjectArray = (o = {}, fn) => Object.entries(o).map(fn);

const Apps = () => {
    // A dictionary of apps is transformed into an array of Nav links.
    const apps = { People: <People />, "To Do": <ToDos /> };
    const links = dictionaryToObjectArray(apps, ([name]) => ({ name }));
    const navLinks = [
        {
            links
        }
    ];
    console.log(links);
    const [currentApp, loadApp] = useState(firstKey(apps));

    const linkClicked = (_, link) => loadApp(link.name);

    return (
        <div style={{ marginTop: "2rem", display: "flex" }}>
            <aside>
                <Nav groups={navLinks} onLinkClick={linkClicked}></Nav>
            </aside>
            <article>{apps[currentApp]}</article>
        </div>
    );
};

export default Apps;
