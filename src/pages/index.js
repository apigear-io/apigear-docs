import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
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
      description="Generate production-ready SDKs from API definitions. One YAML spec, multiple native implementations with scripted backends and monitoring.">
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'ApiGear',
            applicationCategory: 'DeveloperApplication',
            operatingSystem: 'Windows, macOS, Linux',
            url: 'https://apigear.io',
            description:
              'ApiGear generates native SDKs from stateful API definitions (ObjectAPI) for C++, Qt, Unreal Engine, Python, Rust, and Java, with scripted backends and monitoring.',
            offers: {'@type': 'Offer', price: '0', priceCurrency: 'USD'},
          })}
        </script>
      </Head>
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
