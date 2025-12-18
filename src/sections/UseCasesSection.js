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
    description: 'Create consistent C++/Qt interfaces across ECUs. Simulate hardware APIs before physical components exist.',
  },
  {
    icon: '📱',
    title: 'Cross-Platform SDKs',
    description: 'Maintain one API definition, generate native code for every platform. Keep implementations in sync automatically.',
  },
];

export default function UseCasesSection() {
  return (
    <UseCaseList
      items={items}
      title="Built For"
      subtitle="Teams who need consistent APIs across languages and platforms"
    />
  );
}
