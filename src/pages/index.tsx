import * as React from "react"
import i18next from 'i18next';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Styles from "../styles/index.module.scss"
import List from "../components/list"
import ImageContainer from "../components/image-container"
import OrangeBlob from "../images/orange-blob";
import Section from "../components/section";
import initialise from "../utilities/internationalisation";

initialise();

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <span className={Styles.index}>
        <Section
          title={i18next.t('index.about-me.title')}
          content={[
            i18next.t('index.about-me.content-one'),
            i18next.t('index.about-me.content-two'),
            i18next.t('index.about-me.content-three')
          ]}
        />

        <List
          className={Styles.indexList}
          items={[
            <ImageContainer
              content={<OrangeBlob />}
              title={i18next.t('index.blobs.reliable')}
            />,
            <ImageContainer
              content={<OrangeBlob />}
              title={i18next.t('index.blobs.consistent')}
            />,
            <ImageContainer
              content={<OrangeBlob />}
              title={i18next.t('index.blobs.motivated')}
            />
          ]}
        />

        <Section
          title={i18next.t('index.professional-development.title')}
          content={[
            i18next.t('index.professional-development.capita'),
          ]}
        />
      </span>
    </Layout>
  )
};

export default IndexPage;
