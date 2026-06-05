import React from "react";
import TextLeft from "../components/TextLeft";

export default function WorkflowSection() {
    const item = {
        title: 'How It Works',
        description: 'Define your interface in IDL or YAML — properties, operations, and signals. Choose your technology and pick a transport per feature, or stay fully local. Generate complete, buildable code with one command. Then iterate: regenerate anytime and your stub implementations are preserved while interface files stay in sync.',
        action: 'See the full workflow',
        imageDark: '/img/devcycle_dark.svg',
        imageLight: '/img/devcycle_light.svg',
        link: '/docs/',
    };
    return (
        <TextLeft item={item} />
    );
}
