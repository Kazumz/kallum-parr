import * as React from "react";

interface ITextProps {
    header?: string;
    content?: string;
}

const Text: React.FC<ITextProps> = (props) => {
    const {
        header,
        content
    } = props;

    return (
        <span>
            <h1>{header}</h1>
            <p>{content}</p>
        </span>
    );
}

export default Text;