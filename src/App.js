import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FluentThemedContainer, ThemeProvider } from "./theming/ThemeContext";
import "./App.scss";
import { initializeIcons } from "@fluentui/react";
import { AppContainer } from "./pages/AppContainer";
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
                            children={<AppContainer />}
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
