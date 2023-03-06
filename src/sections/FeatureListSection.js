import React from 'react';
import FeatureList from '../components/FeatureList';

const items = [
  {
    title: 'Use our technology SDKs',
    description: 'Use one of our SDKs to integrate your software with our API. We support a wide range of programming languages and frameworks.',
    imageDark: '/img/use.png',
    imageLight: '/img/use.png',

  },
  {
    title: 'Write custom SDKs',
    description: 'Write your own SDKs for your software. We provide a set of tools to help you generate your own SDKs. You can also use our SDKs as a template to write your own.',
    imageDark: '/img/customize.png',
    imageLight: '/img/customize.png',
  },
  {
    title: 'Contribute to our SDKs',
    description: 'Contribute to our SDKs and help us improve them. We are always looking for new contributors to help us improve our SDKs.',
    imageDark: '/img/contribute.png',
    imageLight: '/img/contribute.png',
  },
];


export default function Features() {
  return (
    <FeatureList items={items} />
  );
}
