import React from 'react';
import CodeExample from '../components/CodeExample';

const inputCode = `module climate 1.0

interface Thermostat {
    // Properties (observable state)
    temperature: float
    targetTemp: float
    isHeating: bool

    // Operations (methods)
    setTarget(float temp)

    // Signals (server events)
    signal overheated(float temp)
}`;

const outputItems = [
  { icon: '📄', text: 'Thermostat.h / Thermostat.cpp' },
  { icon: '🧪', text: 'ThermostatTest.cpp' },
  { icon: '🔧', text: 'CMakeLists.txt' },
  { icon: '📦', text: 'Stub implementation' },
  { icon: '📡', text: 'OLink adapter (optional)' },
];

export default function CodeExampleSection() {
  return (
    <CodeExample
      title="See It In Action"
      subtitle="Stateful APIs with properties, operations, and signals"
      inputCode={inputCode}
      inputLabel="Define Your API (IDL)"
      outputItems={outputItems}
    />
  );
}
