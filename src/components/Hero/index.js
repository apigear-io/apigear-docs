import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

/**
 * @name Hero
 * @description Hero component
 * @param {Object} props
 * @param {Object} props.item
 * @param {string} props.item.title
 * @param {string} props.item.tagline
 * @param {string} props.item.link
 * @param {string} props.item.message
 * @returns {JSX.Element}
 * @constructor
 * @example
 * <Hero item={item} />
 * @example
 * <Hero item={{
 *  title: "Title",
 *  tagline: "Tagline",
 *  link: "/docs",
 *  message: "Message"
 * }} />
 */
export default function Hero({ item }) {
    return (
        <header className={clsx('hero', styles.banner)}>
            <div className="container">
                <h1 className="hero__title">{item.title}</h1>
                <p className="hero__subtitle">{item.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--primary button--lg"
                        to={item.link}>
                        {item.message}
                    </Link>
                </div>
            </div>
        </header>
    );
}