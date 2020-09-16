import * as React from "react";

import isNullUndefinedOrEmpty from "../utilities/string-utilities";

interface ISectionProps {
    title?: string;
    subTitle?: string;
    content?: ReadonlyArray<string>;
    className?: string;
}

const Section: React.FC<ISectionProps> = ({
    title,
    subTitle,
    content = [],
    className
}) => {

    const paragraphs: ReadonlyArray<JSX.Element> = React.useMemo(
        () => content.map((s: string, index: number) => <p key={index}>{s}</p>),
        [content]
    );

    return (
        <span className={className}>
            {!isNullUndefinedOrEmpty(title) && <h1>{title}</h1>}
            {!isNullUndefinedOrEmpty(subTitle) && <h2>{subTitle}</h2>}
            {paragraphs}
        </span>
    );
}

export default Section;