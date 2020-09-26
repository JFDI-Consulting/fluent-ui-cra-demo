import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./theming/ThemeContext";
import "./App.scss";
import AppContainer from "./AppContainer";
import { initializeIcons } from "@fluentui/react";

const App = () => {
    initializeIcons();
    return (
        <Router>
            <ThemeProvider>
                <AppContainer />
            </ThemeProvider>
        </Router>
    );
};

export default App;
