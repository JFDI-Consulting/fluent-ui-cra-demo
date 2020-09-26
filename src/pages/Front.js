import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export const Front = () => (
    <div className="container full-height dark center zoom-text">
        <h1>Fluent UI React Demo</h1>
        <img src={logo} className="logo" alt="logo" />
        <p>Built to show Fluent UI dev best practices</p>
        <Link to="/main">Come on in</Link>
    </div>
);
