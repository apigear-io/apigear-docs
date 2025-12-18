import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

function UseCase({ item }) {
    return (
        <div className={clsx('col col--4')}>
            <div className={styles.card}>
                <div className={styles.icon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </div>
        </div>
    );
}

export default function UseCaseList({ items, title, subtitle }) {
    return (
        <section className={styles.section}>
            <div className="container">
                {title && (
                    <div className={styles.header}>
                        <h2>{title}</h2>
                        {subtitle && <p>{subtitle}</p>}
                    </div>
                )}
                <div className="row">
                    {items.map((item, idx) => (
                        <UseCase key={idx} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
