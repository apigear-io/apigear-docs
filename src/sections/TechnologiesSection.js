import React from "react";
import TextLeft from "../components/TextLeft";

const item = {
  title: 'Native Code for Every Platform',
  description: 'Generate idiomatic code for C++14, C++17, Qt6, Unreal Engine, and Python. Each template produces code that follows platform conventions and best practices.',
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
