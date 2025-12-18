import React from "react";
import TextRight from "../components/TextRight";

const item = {
    title: 'Stateful APIs That Match Your Code',
    description: 'ObjectAPI models interfaces with observable properties, callable operations, and server-pushed signals. Write in a developer-friendly IDL or YAML — both generate the same code. Designed for systems where state matters: automotive, gaming, IoT.',
    action: 'Learn ObjectAPI',
    image: '/img/vehicle_api.png',
    link: '/docs/objectapi/intro',
};

export default function ObjectAPISection() {
    return (
        <TextRight item={item} />
    );
}