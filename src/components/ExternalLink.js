import React from "react";
import { Link } from "@fluentui/react";

const ExternalLink = ({ href, text }) => (
    <Link href={href} target="_blank">
        {text}
    </Link>
);

export default ExternalLink;
