import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Styles from "../styles/index.module.scss"
import { placeholderText } from "../common/placeholderText"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />

    <span className={Styles.index}>
      {placeholderText}
    </span>
  </Layout>
)

export default IndexPage
