import React from "react";

import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import clsx from "clsx";
import ThemedImage from "@theme/ThemedImage";

/**
 * @name TextLeft
 * @description This component is used to render the text on the left side of the image.
 * @param {Object} props
 * @param {Object} props.item
 * @param {string} props.item.title
 * @param {string} props.item.description
 * @param {string} props.item.link
 * @param {string} props.item.action
 * @param {string} props.item.image
 * @param {string} props.item.imageLight
 * @param {string} props.item.imageDark
 * @returns {JSX.Element}
 * @constructor
 * @example
 * <TextLeft item={item} />
 * @example
 * <TextLeft item={{
 *  title: "Title",
 *  description: "Description",
 *  link: "/docs",
 *  action: "Action",
 *  image: "/img/undraw_docusaurus_mountain.svg"
 * }} />
 */
export default function TextLeft({ item }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col col--6">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <div className={clsx(styles.right_align, "margin-top--lg")} >
                        <Link
                            className="button button--primary button--lg"
                            to={item.link}>
                            {item.action}
                        </Link>
                    </div>
                </div>
                <div className="col col--6">
                    <ThemedImage
                        alt={item.title}
                        sources={{
                            light: item.imageLight || item.image,
                            dark: item.imageDark || item.image
                        }}
                    />
                </div>
            </div>
        </div >
    );
}
