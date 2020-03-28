import * as React from "react";
import classnames from "classnames";

import Styles from "../styles/list.module.scss"

interface IListProps {
    className?: string;
    items: ReadonlyArray<JSX.Element>;
}

const List: React.FC<IListProps> = (props) => {
    const {
        items,
        className
    } = props;

    const rootClassName: string = classnames(Styles.list, className)
    return (
        <ul className={rootClassName}>
            {items.map((item: JSX.Element, index: number) => {
                return (
                    <li key={index}>
                        {item}
                    </li>
                )
            })}
        </ul>
    );
}

export default List;