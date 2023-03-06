import React from 'react';
import Layout from '@theme/Layout';
import FeatureListSection from '../sections/FeatureListSection';
import HeroSection from '../sections/HeroSection';
import ObjectAPISection from '../sections/ObjectAPISection';
import WorkflowSection from '../sections/WorkflowSection';
import styles from './index.module.css';
export default function Home() {
  return (
    <Layout
      title={`Design your APIs and generate code`}
      description="Design your API and generate code">
      <HeroSection />
      <main>
        <section className={styles.section}>
          <FeatureListSection />
        </section>
        <section className={styles.section}>
          <ObjectAPISection />
        </section>
        <section className={styles.sectionDark}>
          <WorkflowSection />
        </section>
      </main>
    </Layout>
  );
}
