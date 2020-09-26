import React from "react";
import { FluentThemedContainer } from "./theming/ThemeContext";
import { Main } from "./pages/Main";
import { Front } from "./pages/Front";
import { Switch, Route } from "react-router-dom";

const AppContainer = () => {
    return (
        <FluentThemedContainer>
            <Switch>
                <Route path="/main">
                    <Main />
                </Route>
                <Route path="/">
                    <Front />
                </Route>
            </Switch>
        </FluentThemedContainer>
    );
};

export default AppContainer;
