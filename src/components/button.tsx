import * as React from "react";
import classnames from "classnames";

import Styles from "../styles/button.module.scss"

interface IButtonProps {
    className?: string;
    text: string;
    href?: string;
    onClick?: () => void;
}

const Button: React.FC<IButtonProps> = (props) => {
    const {
        text,
        className,
        href
    } = props;

    const rootClassName: string = classnames(Styles.button, className)
    return (
        <a
            className={rootClassName}
            href={href}
        >
            <span className={Styles.buttonText}>{text}</span>
        </a>
    );
}

export default Button;