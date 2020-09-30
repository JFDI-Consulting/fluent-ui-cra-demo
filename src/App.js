import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FluentThemedContainer, ThemeProvider } from "./theming/ThemeContext";
import "./App.scss";
import { initializeIcons } from "@fluentui/react";
import { Main } from "./pages/Main";
import { Front } from "./pages/Front";

const App = () => {
    initializeIcons();
    return (
        <Router>
            <ThemeProvider>
                <FluentThemedContainer>
                    <Switch>
                        <Route
                            path="/main/:section?/:app?"
                            children={<Main />}
                        />
                        <Route path="/">
                            <Front />
                        </Route>
                    </Switch>
                </FluentThemedContainer>
            </ThemeProvider>
        </Router>
    );
};

export default App;
