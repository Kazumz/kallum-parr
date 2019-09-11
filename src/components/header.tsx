import { Link } from "gatsby"
import * as React from "react"
import classnames from "classnames";

import Styles from '../styles/header.module.scss'

interface IHeaderProps {
  className?: string;
  siteTitle?: string;
}

const Header: React.FC<IHeaderProps> = (props) => {
  const {
    className,
    siteTitle
  } = props;

  const rootClassName: string = classnames(Styles.header, className)
  return (
    <header className={rootClassName}>
      {props.siteTitle}
    </header>
  );
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
