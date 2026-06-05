import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import HeroSection from '../sections/HeroSection';
import ObjectAPISection from '../sections/ObjectAPISection';
import WorkflowSection from '../sections/WorkflowSection';
import CodeExampleSection from '../sections/CodeExampleSection';
import AIAgentsSection from '../sections/AIAgentsSection';
import FeatureListSection from '../sections/FeatureListSection';
import TechnologiesSection from '../sections/TechnologiesSection';
import UseCasesSection from '../sections/UseCasesSection';
import FinalCtaSection from '../sections/FinalCtaSection';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title={`API Code Generator for C++, Qt, Unreal & Python`}
      description="Free, open-source CLI that generates native SDKs from one API definition — C++, Qt, Unreal, Python, Rust & Java — with simulation and monitoring built in.">
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
              'ApiGear generates native SDKs from stateful API definitions (ObjectAPI) for C++, Qt, Unreal Engine, Python, Rust, and Java, with per-feature transports such as OLink and MQTT (NATS on select templates), scripted backends and monitoring.',
            offers: {'@type': 'Offer', price: '0', priceCurrency: 'USD'},
          })}
        </script>
      </Head>
      <HeroSection />
      <main>
        <section className={styles.section}>
          <ObjectAPISection />
        </section>
        <section className={styles.sectionDark}>
          <WorkflowSection />
        </section>
        <section className={styles.section}>
          <CodeExampleSection />
        </section>
        <section className={styles.sectionDark}>
          <AIAgentsSection />
        </section>
        <section className={styles.section}>
          <FeatureListSection />
        </section>
        <section className={styles.sectionDark}>
          <TechnologiesSection />
        </section>
        <section className={styles.section}>
          <UseCasesSection />
        </section>
        <section className={styles.sectionDark}>
          <FinalCtaSection />
        </section>
      </main>
    </Layout>
  );
}
