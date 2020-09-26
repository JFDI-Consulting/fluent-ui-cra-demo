import React from "react";
import ReactMarkdown from "react-markdown";

const MarkdownArticle = ({ md, leftImg, rightImg }) => (
    <>
        {leftImg && <aside>{leftImg}</aside>}
        <article>
            <ReactMarkdown source={md} escapeHtml={false} />
        </article>
        {rightImg && <aside>{rightImg}</aside>}
    </>
);

export default MarkdownArticle;
