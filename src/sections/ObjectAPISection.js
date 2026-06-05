import React from "react";
import TextRight from "../components/TextRight";

const item = {
    title: 'One definition. Any technology. Any transport.',
    description: 'Model a stateful interface once with ObjectAPI — observable properties, callable operations, and server-pushed signals. Choose your target technology, then pick a transport per feature — OLink, MQTT, NATS, or extend the templates to target more, like gRPC — or keep it fully local. Unlike REST or OpenAPI, your definition stays the single source of truth: the service owns state, and clients sync or request changes.',
    action: 'Learn ObjectAPI',
    image: '/img/vehicle_api.png',
    link: '/docs/objectapi/intro',
};

export default function ObjectAPISection() {
    return (
        <TextRight item={item} />
    );
}
