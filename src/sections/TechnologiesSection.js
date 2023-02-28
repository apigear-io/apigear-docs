import React from "react";
import Technologies from "@site/static/img/technologies.png";
import TextLeft from "../components/TextLeft";

const item = {
    title: 'Wide range of Technology SDKs',
    description: 'Use one of our SDKs to integrate your software with our API. We support a wide range of programming languages and frameworks.',
    action: 'View SDKs',
    image: Technologies,
    link: '/docs/intro',
};

export default function TechnologiesSection() {
    return (
        <TextLeft item={item} />
    );
}