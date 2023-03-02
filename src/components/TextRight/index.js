import React from "react";

import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import ThemedImage from "@theme/ThemedImage";

/**
 * @name TextRight
 * @description This component is used to render the text on the right side of the image.
 * @param {Object} props
 * @param {Object} props.item
 * @param {string} props.item.title
 * @param {string} props.item.description
 * @param {string} props.item.link
 * @param {string} props.item.action
 * @param {string} props.item.image
 * @returns {JSX.Element}
 * @constructor
 * @example
 * <TextRight item={item} />
 * @example
 * <TextRight item={{
 *   title: "Title",
 *   description: "Description",
 *   link: "/docs",
 *   action: "Action",
 *   image: "/img/undraw_docusaurus_mountain.svg"
 * }} />
 */
export default function TextRight({ item }) {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className="row">
                    <div className="col col--6">
                        <ThemedImage
                            alt={item.title}
                            width="800px"
                            sources={{
                                light: item.imageLight || item.image,
                                dark: item.imageDark || item.image
                            }}
                        />
                    </div>
                    <div className="col col--6">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <div className="margin-top--lg">
                            <Link
                                className="button button--primary button--lg"
                                to={item.link}>
                                {item.action}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
