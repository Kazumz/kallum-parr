import * as React from "react"
import classnames from "classnames";
import { Link } from "gatsby";

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
      <Link to={'/'} className={Styles.headerTitle}>
        {siteTitle}
      </Link>

      <nav className={Styles.headerQuickNav}>
        <Button
          className={Styles.headerQuickNavButton}
          text={'Home'}
          href={'/'}
        />
        <Button
          className={Styles.headerQuickNavButton}
          text={'CV'}
          href={'/cv/'}
        />
        <Button
          className={Styles.headerQuickNavButton}
          external={true}
          text={'GitHub'}
          href={'https://github.com/Kazumz/kallum-parr'}
        />
      </nav>

      <span />
    </header>
  );
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
