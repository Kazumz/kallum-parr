import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Styles from "../styles/index.module.scss"
import List from "../components/list"
import Box from "../components/box"
import Image from "../components/image";

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />

    <span className={Styles.index}>
      <List
        className={Styles.indexList}
        items={[
          <Box
            className={Styles.box}
            content={<Image />}
            title={'Consistency'}
            description={''}
          />,
          <Box
            className={Styles.box}
            content={<Image />}
            title={'Performance'}
            description={''}
          />
        ]}
      />
    </span>
  </Layout>
)

export default IndexPage
