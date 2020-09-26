import React from "react";

const Bullets = ({ items }) => (
    <ul>
        {items.map((item) => (
            <li key={item}>{item}</li>
        ))}
    </ul>
);

export default Bullets;
