---
sidebar_position: 1
---

# Scripting

ApiGear provides a powerful JavaScript-based scripting environment that lets you create dynamic behaviors for your APIs without writing compiled code. This is invaluable during development, testing, and demonstration phases.

## Why Scripting?

When developing systems with defined APIs, you often need to:

- **Test client code** before the backend is ready
- **Simulate complex behaviors** that are hard to reproduce manually
- **Demo features** without deploying full infrastructure
- **Prototype interactions** between services quickly

ApiGear's scripting capabilities address these needs with two complementary approaches.

## Two Sides of Scripting

```
┌─────────────────┐                    ┌─────────────────┐
│                 │                    │                 │
│  Scripted       │◄──── API ────────►│  Scripted       │
│  Clients        │      Calls         │  Backends       │
│                 │                    │                 │
│  (Stimulation)  │                    │  (Simulation)   │
│                 │                    │                 │
└─────────────────┘                    └─────────────────┘
     Calls TO                              Responds TO
     your service                          your client
```

### Scripted Backends

**Simulate your service** — Create mock implementations that respond to API calls from your real client code.

Use scripted backends when you want to:
- Develop client applications before the backend exists
- Test edge cases and error conditions
- Run demos without production dependencies
- Create reproducible test scenarios

The scripted backend acts as a stand-in for your real service, responding to method calls, maintaining property state, and emitting signals.

[Learn more about Scripted Backends →](./backends/intro)

### Scripted Clients

**Stimulate your service** — Create automated clients that call your real backend to test its behavior under various conditions.

Use scripted clients when you want to:
- Load test your service with realistic traffic patterns
- Automate integration testing
- Verify service behavior with scripted sequences
- Monitor how your service responds to specific inputs

The scripted client connects to your running service and executes predefined sequences of API calls.

[Learn more about Scripted Clients →](./clients/intro)

## Scripting Environment

Both scripted backends and clients use the same JavaScript runtime with access to:

- **Full API definitions** — Properties, methods, and signals from your ObjectAPI modules
- **Timing controls** — Delays, intervals, and scheduled actions
- **State management** — Read and modify property values
- **Event handling** — React to property changes and signals
- **Console output** — Log messages for debugging

Scripts are executed by the ApiGear CLI or Studio, connecting via WebSocket to interact with the system.

## Getting Started

1. **Define your API** using ObjectAPI
2. **Generate simulation files** (optional) or write scripts manually
3. **Run the script** with the CLI: `apigear sim run script.js`

Choose the approach that fits your development phase:
- Building a client? Start with [Scripted Backends](./backends/intro) to mock your service
- Building a service? Start with [Scripted Clients](./clients/intro) to test your implementation
