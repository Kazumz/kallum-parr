import * as React from "react";
import classnames from "classnames";

import Styles from "../styles/image-container.module.scss"

interface IImageContainerProps {
    className?: string;
    content: JSX.Element;
    title?: string;
    description?: string;
}

const ImageContainer: React.FC<IImageContainerProps> = (props) => {
    const {
        className,
        title,
        description,
        content
    } = props;

    const rootClassName: string = classnames(Styles.imageContainer, className)
    return (
        <div className={rootClassName}>
            <span className={Styles.imageContainerImage}>
                {content}
            </span>
            <span className={Styles.imageContainerTitle}>{title}</span>
            <span className={Styles.imageContainerDescription}>{description}</span>
        </div>
    );
}

export default ImageContainer;