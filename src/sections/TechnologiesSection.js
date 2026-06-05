import React from "react";
import TextLeft from "../components/TextLeft";

const item = {
  title: 'Native Code for Every Platform',
  description: 'Generate idiomatic code for C++14, C++17, Qt6, Unreal Engine, Python, Rust, and Java. Each template follows its platform\'s conventions and best practices — and, depending on the template, features can run fully local or speak OLink, MQTT, or NATS.',
  action: 'Explore Templates',
  imageDark: '/img/technologies_dark.png',
  imageLight: '/img/technologies_light.png',
  link: '/docs/sdk/intro',
};

export default function TechnologiesSection() {
  return (
    <TextLeft item={item} />
  );
}
