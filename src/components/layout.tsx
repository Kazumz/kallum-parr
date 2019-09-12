import * as React from "react"
import {
  useStaticQuery,
  graphql
} from "gatsby"

import Header from "./header"
import Styles from "../styles/layout.module.scss"

interface ILayoutProps {
}

const Layout: React.FC<React.PropsWithChildren<ILayoutProps>> = (props) => {
  const {
    children
  } = props;

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={Styles.layout}>
      <Header siteTitle={data.site.siteMetadata.title} />

      <main className={Styles.layoutMain}>
        <div className={Styles.layoutMainContainer}>
          {children}
        </div>
      </main>

      <footer className={Styles.layoutFooter}>
        {`Example Footer`}
      </footer>
    </div>
  )
}

export default Layout
