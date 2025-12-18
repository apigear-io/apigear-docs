import React from 'react';
import Layout from '@theme/Layout';
import FeatureListSection from '../sections/FeatureListSection';
import HeroSection from '../sections/HeroSection';
import WorkflowSection from '../sections/WorkflowSection';
import TechnologiesSection from '../sections/TechnologiesSection';
import ObjectAPISection from '../sections/ObjectAPISection';
import UseCasesSection from '../sections/UseCasesSection';
import CodeExampleSection from '../sections/CodeExampleSection';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title={`API Code Generator for C++, Qt, Unreal & Python`}
      description="Generate production-ready SDKs from API definitions. One YAML spec, multiple native implementations with simulation and monitoring.">
      <HeroSection />
      <main>
        <section className={styles.section}>
          <CodeExampleSection />
        </section>
        <section className={styles.section}>
          <UseCasesSection />
        </section>
        <section className={styles.section}>
          <FeatureListSection />
        </section>
        <section className={styles.sectionDark}>
          <WorkflowSection />
        </section>
        <section className={styles.section}>
          <TechnologiesSection />
        </section>
        <section className={styles.section}>
          <ObjectAPISection />
        </section>
      </main>
    </Layout>
  );
}
