import * as React from "react"
import classnames from "classnames";
import { Link } from "gatsby";
import i18next from 'i18next';

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
          text={i18next.t('header.home')}
          href={'/'}
        />
        <Button
          className={Styles.headerQuickNavButton}
          external={true}
          text={i18next.t('header.cv')}
          href={'https://1drv.ms/b/s!Ap2IEdO_tzkpiZIzUlmFoswX8b8hrA?e=yLV1ep'}
        />
        <Button
          className={Styles.headerQuickNavButton}
          external={true}
          text={i18next.t('header.github')}
          href={'https://github.com/Kazumz/kallum-parr'}
        />
      </nav>
    </header>
  );
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
