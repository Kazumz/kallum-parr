import * as React from "react"
import {
  useStaticQuery,
  graphql
} from "gatsby"

import Header from "./header"
import LayoutStyles from '../styles/layout.module.scss'

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
    <div className={LayoutStyles.layout}>
      <Header siteTitle={data.site.siteMetadata.title} />

      <React.Fragment>
        <main>{children}</main>

        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </React.Fragment>
    </div>
  )
}

export default Layout
