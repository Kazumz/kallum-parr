import * as React from "react"
import i18next from 'i18next';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Styles from "../styles/404.module.scss"
import Section from "../components/section";
import initialise from "../utilities/internationalisation";

initialise();

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <Section
      className={Styles.title}
      title={i18next.t('404.not-found')}
      content={[
        i18next.t('404.navigate-home')
      ]}
    />
  </Layout>
)

export default NotFoundPage
