import React from "react";
import ReactMarkdown from "react-markdown";

const MarkdownArticle = ({ md, leftImg, rightImg }) => {
    // const getMd = async () => {
    //     const doc = await import(md);
    //     return doc.default;
    // };
    return (
        <>
            {leftImg && <aside>{leftImg}</aside>}
            <article style={{ width: "100%" }}>
                <ReactMarkdown
                    linkTarget="_blank"
                    source={md}
                    escapeHtml={false}
                />
            </article>
            {rightImg && <aside>{rightImg}</aside>}
        </>
    );
};

export default MarkdownArticle;
