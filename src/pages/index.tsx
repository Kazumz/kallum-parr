import * as React from "react"
import i18next from 'i18next';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Styles from "../styles/index.module.scss"
import List from "../components/list"
import Container from "../components/container"
import Image from "../components/gatsby-astronaut";
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
              title={i18next.t('index.blobs.reliable')}
            />,
            <Container
              content={<Image />}
              title={i18next.t('index.blobs.consistent')}
            />,
            <Container
              content={<Image />}
              title={i18next.t('index.blobs.motivated')}
            />
          ]}
        />

        <Section
          header={i18next.t('index.about-me.title')}
          content={[
            i18next.t('index.about-me.content-one'),
            i18next.t('index.about-me.content-two'),
            i18next.t('index.about-me.content-three')
          ]}
        />

        <Section
          header={i18next.t('index.my-history.title')}
          content={[
            i18next.t('index.my-history.content-one'),
            i18next.t('index.my-history.content-two'),
            i18next.t('index.my-history.content-three'),
            i18next.t('index.my-history.content-four'),
            i18next.t('index.my-history.content-five'),
            i18next.t('index.my-history.content-six'),
            i18next.t('index.my-history.content-seven'),
            i18next.t('index.my-history.content-eight'),
            i18next.t('index.my-history.content-nine'),
            i18next.t('index.my-history.content-ten')
          ]}
        />

        <Section
          header={i18next.t('index.professional-development.title')}
          content={[
            i18next.t('index.professional-development.capita'),
          ]}
        />
      </span>
    </Layout>
  )
};

export default IndexPage;
