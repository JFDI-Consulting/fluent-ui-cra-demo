import { Nav, Text } from "@fluentui/react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { dictionaryToObjectArray, firstKey } from "../lib";
import People from "./People";
import ToDos from "./ToDos";

const NonexistantApp = ({ app }) => (
    <Text variant="large">
        The "{app}" app hasn't yet been created... come back a little later!
    </Text>
);

const ContainerWithSidebar = ({ sidebar, content }) => (
    <div className="container sidebar">
        {" "}
        <aside>{sidebar}</aside>
        <article>{content}</article>
    </div>
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

    const [currentApp, loadApp] = useState(app || firstKey(apps));
    const history = useHistory();

    const linkClicked = (_, link) => {
        loadApp(link.key);
        history.push(`/main/apps/${link.key}`);
    };

    return (
        <ContainerWithSidebar
            sidebar={
                <Nav
                    groups={navLinks}
                    selectedKey={currentApp}
                    onLinkClick={linkClicked}
                ></Nav>
            }
            content={
                apps[currentApp] ? (
                    apps[currentApp].component
                ) : (
                    <NonexistantApp app={app} />
                )
            }
        />
    );
};

export default Apps;
