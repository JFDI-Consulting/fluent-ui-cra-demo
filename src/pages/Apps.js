import { Nav, Text } from "@fluentui/react";
import React, { useState } from "react";
import People from "./People";
import ToDos from "./ToDos";

const firstKey = (o = {}) => Object.keys(o)[0];
const dictionaryToObjectArray = (o = {}, fn) => Object.entries(o).map(fn);

const NonexistantApp = ({ app }) => (
    <Text variant="large">
        The "{app}" app hasn't yet been developed... come back a little later!
    </Text>
);
const Apps = ({ app }) => {
    // A dictionary of apps is transformed into an array of Nav links.
    const apps = {
        people: { name: "People", component: <People /> },
        todo: { name: "To Do", component: <ToDos /> }
    };
    const links = dictionaryToObjectArray(apps, ([key, { name }]) => ({
        key,
        name
    }));
    const navLinks = [
        {
            links
        }
    ];
    console.log(links);
    const [currentApp, loadApp] = useState(app || firstKey(apps));

    const linkClicked = (_, link) => loadApp(link.key);

    return (
        <div style={{ marginTop: "2rem", display: "flex" }}>
            <aside>
                <Nav
                    groups={navLinks}
                    selectedKey={currentApp}
                    onLinkClick={linkClicked}
                ></Nav>
            </aside>
            <article>
                {apps[currentApp] ? (
                    apps[currentApp].component
                ) : (
                    <NonexistantApp app={app} />
                )}
            </article>
        </div>
    );
};

export default Apps;
