import React, { useEffect, useState } from "react";
import { useTheme } from "../theming/ThemeContext";

const People = () => {
    const [data, setData] = useState([]);

    const [
        {
            theme: { palette }
        }
    ] = useTheme();

    useEffect(() => {
        fetch("https://fakerapi.it/api/v1/persons?_quantity=10")
            .then((response) => response.json())
            .then((obj) => setData(obj));
    }, []);

    return <div>PEOPLE APP HERE</div>;
};

export default People;
