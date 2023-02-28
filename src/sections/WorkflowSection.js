import React from "react";
import TextRight from "../components/TextRight";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function WorkflowSection() {
    const item = {
        title: 'API driven workflow for software projects',
        description: 'A digital workflow for API driven software integration. Customers design their software interfaces collaborative online in a team, view the document in the developer portal and download their beautiful crafted SDKs for integration.',
        action: 'More about the workflow',
        imageDark: '/img/devcycle_43_dark.svg',
        imageLight: '/img/devcycle_43_light.svg',
        link: '/docs/intro',
    };
    return (
        <TextRight item={item} />
    );
}