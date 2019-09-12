import * as React from "react";
import classnames from "classnames";

import Styles from "../styles/box.module.scss"

interface IBoxProps {
    className?: string;
    content: JSX.Element;
    title?: string;
    description?: string;
}

const Box: React.FC<IBoxProps> = (props) => {
    const {
        className,
        title,
        description,
        content
    } = props;

    const rootClassName: string = classnames(Styles.box, className)
    return (
        <div className={rootClassName}>
            <span className={Styles.boxImage}>
                {content}
            </span>
            <span className={Styles.boxTitle}>{title}</span>
            <span className={Styles.boxDescription}>{description}</span>
        </div>
    );
}

export default Box;