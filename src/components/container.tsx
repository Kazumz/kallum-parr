import * as React from "react";
import classnames from "classnames";

import Styles from "../styles/container.module.scss"

interface IContainerProps {
    className?: string;
    content: JSX.Element;
    title?: string;
    description?: string;
}

const Container: React.FC<IContainerProps> = (props) => {
    const {
        className,
        title,
        description,
        content
    } = props;

    const rootClassName: string = classnames(Styles.container, className)
    return (
        <div className={rootClassName}>
            <span className={Styles.containerImage}>
                {content}
            </span>
            <span className={Styles.containerTitle}>{title}</span>
            <span className={Styles.containerDescription}>{description}</span>
        </div>
    );
}

export default Container;