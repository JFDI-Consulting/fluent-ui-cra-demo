import React from "react";
import PropTypes from "prop-types";

const ContainerWithSidebar = ({ sidebar, content, fluid = false }) => {
    const styles = {
        container: {
            maxWidth: fluid ? null : 1024,
            margin: "auto",
            marginTop: "2rem",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "150px auto"
        },
        sidebar: {},
        article: {
            alignSelf: "center",
            justifySelf: "center"
        }
    };

    return (
        <div style={styles.container}>
            <aside style={styles.sidebar}>{sidebar}</aside>
            <article style={styles.article}>{content}</article>
        </div>
    );
};

ContainerWithSidebar.propTypes = {
    sidebar: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
    fluid: PropTypes.bool.isRequired
};

export default ContainerWithSidebar;
