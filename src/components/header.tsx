import * as React from "react"
import classnames from "classnames";

import Styles from "../styles/header.module.scss"
import Button from "./button";

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
      <span className={Styles.headerTitle}>{siteTitle}</span>
      <span className={Styles.headerQuickNav}>
        <Button
          className={Styles.headerQuickNavButton}
          text={'CV'}
          href={'about:blank'}
        />
        <Button
          className={Styles.headerQuickNavButton}
          text={'GitHub'}
          href={'https://github.com/Kazumz/kallum-parr'}
        />
      </span>
      <span />
    </header>
  );
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
