import * as React from "react";

interface ISectionProps {
    header?: string;
    content?: ReadonlyArray<string>;
    className?: string;
}

const Section: React.FC<ISectionProps> = (props) => {
    const {
        header,
        content,
        className
    } = props;

    const paragraphs: ReadonlyArray<JSX.Element> = React.useMemo(
        () => content.map((s: string, index: number) => <p key={index}>{s}</p>),
        [content]
    );

    return (
        <span className={className}>
            <h1>{header}</h1>
            {paragraphs}
        </span>
    );
}

export default Section;