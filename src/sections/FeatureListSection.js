import React from 'react';
import FeatureList from '../components/FeatureList';

const items = [
  {
    title: 'Accelerate your integration story',
    description: 'Ease your software integration using an API driven approach using an object model.',
    imageDark: '/img/accelerate_dark.png',
    imageLight: '/img/accelerate_light.png',

  },
  {
    title: 'Simulate Service Backends',
    description: 'Simulate your service backends using our built-in simulator and unlock your integration. The simulator can be used for testing and development.',
    imageDark: '/img/unlock_dark.png',
    imageLight: '/img/unlock_light.png',
  },
  {
    title: 'Analyze software behavior ',
    description: 'Analyze your software behavior using the built-in analytics. API analytics tracks the usage of your APIs and provides insights into the usage patterns.',
    imageDark: '/img/insights_dark.png',
    imageLight: '/img/insights_light.png',
  },
];


export default function Features() {
  return (
    <FeatureList items={items} />
  );
}
