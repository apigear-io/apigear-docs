import React from 'react';
import FeatureList from '../components/FeatureList';

const items = [
  {
    title: 'Generate Production-Ready Code',
    description: 'From one YAML definition, generate complete SDKs with interfaces, stub implementations, unit tests, and build files. Zero manual boilerplate.',
    imageDark: '/img/accelerate_dark.png',
    imageLight: '/img/accelerate_light.png',

  },
  {
    title: 'Develop Without Dependencies',
    description: 'Simulate APIs before backends exist. Test integrations without hardware. Let frontend and backend teams ship features in parallel.',
    imageDark: '/img/unlock_dark.png',
    imageLight: '/img/unlock_light.png',
  },
  {
    title: 'Debug with Full Visibility',
    description: 'Monitor every API call in real-time. Trace property changes, method invocations, and signal emissions across your entire system.',
    imageDark: '/img/insights_dark.png',
    imageLight: '/img/insights_light.png',
  },
];


export default function Features() {
  return (
    <FeatureList items={items} />
  );
}
