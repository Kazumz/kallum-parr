import * as React from "react"
import i18next from 'i18next';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section";
import initialise from "../utilities/internationalisation";

initialise();

const MyHistoryPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="My History" />

      <Section
        title={i18next.t('my-history.title')}
        content={[
          i18next.t('my-history.content-one'),
          i18next.t('my-history.content-two'),
          i18next.t('my-history.content-three'),
          i18next.t('my-history.content-four'),
          i18next.t('my-history.content-five'),
          i18next.t('my-history.content-six'),
          i18next.t('my-history.content-seven'),
          i18next.t('my-history.content-eight'),
          i18next.t('my-history.content-nine'),
          i18next.t('my-history.content-ten')
        ]}
      />
    </Layout>
  )
};

export default MyHistoryPage;
