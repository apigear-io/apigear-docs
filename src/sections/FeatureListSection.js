import React from 'react';
import FeatureList from '../components/FeatureList';

const items = [
  {
    title: 'Accelerate your integration story',
    description: 'Ease your software integration using an API driven approach using an object model.',
    image: '/img/accelerate.png'
  },
  {
    title: 'Simulate Service Backends',
    description: 'Simulate your service backends using our built-in simulator and unlock your integration. The simulator can be used for testing and development.',
    image: '/img/unlock.png'
  },
  {
    title: 'Analyze software behavior ',
    description: 'Analyze your software behavior using the built-in analytics. API analytics tracks the usage of your APIs and provides insights into the usage patterns.',
    image: '/img/insights.png',
  },
];


export default function Features() {
  return (
    <FeatureList items={items} />
  );
}
