import React from "react";
import TextLeft from "../components/TextLeft";

const item = {
  title: 'Wide range of Technology SDKs',
  description: 'Use one of our SDKs to integrate your software with our API. We support a wide range of programming languages and frameworks.',
  action: 'View SDKs',
  imageDark: '/img/technologies_dark.png',
  imageLight: '/img/technologies_light.png',
  link: '/docs/category/sdk-templates',
};

export default function TechnologiesSection() {
  return (
    <TextLeft item={item} />
  );
}
