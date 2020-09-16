import * as React from "react"
import i18next from 'i18next';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section";
import initialise from "../internationalisation/i18n";

initialise();

const MyHistoryPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="My History" />

      <Section
        title={i18next.t('my-history.title')}
        content={[
          i18next.t('my-history.description'),
        ]}
      />

      <Section
        subTitle={i18next.t('my-history.gta.title')}
        content={[
          i18next.t('my-history.gta.content-one'),
          i18next.t('my-history.gta.content-two'),
          i18next.t('my-history.gta.content-three'),
          i18next.t('my-history.gta.content-four'),
        ]}
      />

      <Section
        subTitle={i18next.t('my-history.gmod.title')}
        content={[
          i18next.t('my-history.gmod.content-one'),
          i18next.t('my-history.gmod.content-two'),
          i18next.t('my-history.gmod.content-three'),
        ]}
      />

      <Section
        subTitle={i18next.t('my-history.minecraft.title')}
        content={[
          i18next.t('my-history.minecraft.content-one'),
          i18next.t('my-history.minecraft.content-two'),
          i18next.t('my-history.minecraft.content-three'),
        ]}
      />
    </Layout>
  )
};

export default MyHistoryPage;
