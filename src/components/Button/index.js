import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

/**
 * @name Button
 * @description simple button component
 * @param {string} link
 * @param {string} message
 * @returns {JSX.Element}
 * @constructor
 * @example
 * <Button item={item} />
 * @example
 * <Button item={{
 *  link: "/docs",
 *  message: "Message"
 * }} />
 */
export default function Button({link, message}) {
    return (
        <div className={styles.buttons}>
            <Link
                className="button button--primary button--lg"
                to={link}>
                {message}
            </Link>
        </div>
    );
}