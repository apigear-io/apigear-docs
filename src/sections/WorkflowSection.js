import React from "react";
import TextRight from "../components/TextRight";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function WorkflowSection() {
    const item = {
        title: 'How It Works',
        description: 'Define your API interfaces in YAML with properties, methods, and signals. Choose a template for your target platform. Generate complete, buildable code with one command. Iterate on your API — regenerate anytime without losing your implementation.',
        action: 'See the full workflow',
        imageDark: '/img/devcycle_dark.svg',
        imageLight: '/img/devcycle_light.svg',
        link: '/docs/',
    };
    return (
        <TextRight item={item} />
    );
}