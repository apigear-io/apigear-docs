import React from 'react';
import UseCaseList from '../components/UseCaseList';

const items = [
  {
    icon: '🎮',
    title: 'Game Development',
    description: 'Generate Unreal Engine plugins from API specs. Decouple game logic from backend services and iterate faster.',
  },
  {
    icon: '🚗',
    title: 'Automotive & Embedded',
    description: 'Share consistent C++/Qt interfaces across ECUs. Simulate hardware APIs before the physical components exist.',
  },
  {
    icon: '📱',
    title: 'Cross-Platform SDKs',
    description: 'Maintain one definition, generate native code for every platform, and keep implementations in sync automatically.',
  },
];

export default function UseCasesSection() {
  return (
    <UseCaseList
      items={items}
      title="Built For"
      subtitle="Consistent APIs across languages and platforms — from prototype to production"
    />
  );
}
