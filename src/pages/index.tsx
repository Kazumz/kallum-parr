import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Styles from "../styles/index.module.scss"
import List from "../components/list"
import Container from "../components/container"
import Image from "../components/image";

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />

    <span className={Styles.index}>
      <List
        className={Styles.indexList}
        items={[
          <Container
            content={<Image />}
            title={'Reliable'}
          />,
          <Container
            content={<Image />}
            title={'Consistent'}
          />,
          <Container
            content={<Image />}
            title={'Motivated'}
          />
        ]}
      />
    </span>
  </Layout>
)

export default IndexPage
