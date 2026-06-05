import React from 'react';
import FeatureList from '../components/FeatureList';

const items = [
  {
    title: 'Generate Production-Ready Code',
    description: 'From one definition, generate complete SDKs — interfaces, stub implementations, unit tests, and build files. Zero hand-written boilerplate.',
    imageDark: '/img/accelerate_dark.png',
    imageLight: '/img/accelerate_light.png',

  },
  {
    title: 'Develop Without Dependencies',
    description: 'Simulate APIs before backends or hardware exist. Test integrations in isolation, ship frontend and backend in parallel — with traffic record & replay.',
    imageDark: '/img/unlock_dark.png',
    imageLight: '/img/unlock_light.png',
  },
  {
    title: 'Debug with Full Visibility',
    description: 'Monitor every API call in real time. Trace property changes, operation calls, and signal emissions across your whole system.',
    imageDark: '/img/insights_dark.png',
    imageLight: '/img/insights_light.png',
  },
];


export default function Features() {
  return (
    <FeatureList
      items={items}
      title="One platform: generate, simulate, monitor"
      subtitle="ApiGear is a complete toolkit around your API definition."
    />
  );
}
