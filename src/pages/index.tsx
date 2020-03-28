import * as React from "react"
import i18next from 'i18next';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Styles from "../styles/index.module.scss"
import List from "../components/list"
import Container from "../components/container"
import Image from "../components/image";
import Section from "../components/section";
import initialise from "../utilities/internationalisation";

initialise();

const IndexPage: React.FC = () => {
  return (
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

        <Section
          header={i18next.t('index.about-me.title')}
          content={[
            i18next.t('index.about-me.content-one'),
            i18next.t('index.about-me.content-two')
          ]}
        />
      </span>
    </Layout>
  )
};

export default IndexPage;
