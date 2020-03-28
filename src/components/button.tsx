import * as React from "react";
import classnames from "classnames";
import { Link } from "gatsby";

import Styles from "../styles/button.module.scss"

interface IButtonProps {
    className?: string;
    text: string;
    href?: string;
    external?: boolean;
    onClick?: () => void;
}

const Button: React.FC<IButtonProps> = (props) => {
    const {
        text,
        className,
        href,
        external
    } = props;

    const rootClassName: string = classnames(Styles.button, className)
    if (external === true) {
        return (
            <a
                className={rootClassName}
                href={href}
                rel="noopener noreferrer"
            >
                <span className={Styles.buttonText}>{text}</span>
            </a>
        );
    }

    return (
        <Link
            className={rootClassName}
            to={href}
            activeClassName={Styles.active}
        >
            <span className={Styles.buttonText}>{text}</span>
        </Link>
    );
}

export default Button;