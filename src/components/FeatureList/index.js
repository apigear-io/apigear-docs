import React from 'react';

import clsx from 'clsx';
import styles from './styles.module.css';
import ThemedImage from '@theme/ThemedImage';

function Feature({ item }) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <ThemedImage
                    alt={item.title}
                    sources={{
                        light: item.imageLight || item.image,
                        dark: item.imageDark || item.image
                    }}
                />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </div>
        </div>
    );
}

export default function FeatureList(props) {
    const items = props.items;
    return (
        <section className={styles.section}>
            <div className="container">
                <div className="row">
                    {items.map((item, idx) => (
                        <Feature key={idx} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}