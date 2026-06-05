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
  { icon: '📡', text: 'OLink transport adapter (optional)' },
];

export default function CodeExampleSection() {
  return (
    <CodeExample
      title="See It In Action"
      subtitle="One stateful interface — properties, operations, and signals — becomes buildable code."
      inputCode={inputCode}
      inputLabel="Define your API (IDL)"
      outputItems={outputItems}
      footnote="C++ shown. The same definition also generates Python, Qt, Unreal, Rust & Java."
    />
  );
}
