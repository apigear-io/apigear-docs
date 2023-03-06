import React from "react";
import TextLeft from "../components/TextLeft";

const item = {
    title: 'The ObjectAPI IDL matches your mindset',
    description: 'The ObjectAPI IDL is a simple and intuitive way to describe your API. It is designed to match your mindset and the way you think about your API.',
    action: 'View ObjectAPI Specification',
    image: '/img/vehicle_api.png',
    link: '/docs/category/objectapi',
};

export default function ObjectAPISection() {
    return (
        <TextLeft item={item} />
    );
}