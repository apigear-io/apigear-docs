import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    description: (
      <>
        ApiGear is designed from the ground up to design clean APIs, consistently across teams. No more boilerplate code. No more manual work.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    description: (
      <>
        ApiGear lets you focus on your problem domain, and we&apos;ll do the chores. Go ahead and enjoy a thoughtful solution with SDKs, monitoring and simulation built in.
      </>
    ),
  },
  {
    title: 'Powered by Experience',
    description: (
      <>
        Extend or customize your APIs and templates SDKs. ApiGear can
        be extended while reusing the same core APIs.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
