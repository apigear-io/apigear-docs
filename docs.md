# Introduction

ApiGear generates native SDKs from **stateful API definitions**. Define your interfaces once using ObjectAPI, then generate production-ready code for C++, Qt, Unreal Engine, or Python.

## Stateful APIs for Real-World Systems[​](#stateful-apis-for-real-world-systems "Direct link to Stateful APIs for Real-World Systems")

Unlike REST or RPC specifications that model stateless requests, ObjectAPI models interfaces as **objects with observable state** — properties that change over time, methods to call, and signals (events) pushed from server to client.

This matches how systems actually work in automotive, gaming, IoT, and embedded domains where state matters.

```
interface Thermostat {
    temperature: float       // property: observable state
    setTarget(float temp)    // operation: method call
    signal overheated()      // signal: server-pushed event
}
```

## In 3 Steps[​](#in-3-steps "Direct link to In 3 Steps")

1. **Define your API** using the ObjectAPI IDL or YAML format
2. **Run the generator** with your chosen template (C++14, C++17, Qt6, Unreal, Python)
3. **Get complete, buildable code** — interfaces, stubs, tests, and build files

## Key Concepts[​](#key-concepts "Direct link to Key Concepts")

| Term              | What it means                                                                               |
| ----------------- | ------------------------------------------------------------------------------------------- |
| **ObjectAPI**     | A specification for stateful, object-oriented APIs with properties, operations, and signals |
| **IDL Format**    | A concise, developer-friendly syntax for writing APIs (auto-converts to YAML)               |
| **YAML Format**   | The canonical format for API modules                                                        |
| **Solution File** | A config file specifying which modules to generate and which template to use                |
| **Template**      | A code generator for a specific platform (e.g., `template-cpp17`, `template-unreal`)        |

## Why ApiGear?[​](#why-apigear "Direct link to Why ApiGear?")

### Designed for Real Systems[​](#designed-for-real-systems "Direct link to Designed for Real Systems")

* **Stateful by design** — Properties with change notifications, not just request/response. This is how real systems work in automotive, gaming, and IoT.
* **Protocol agnostic** — Your API definition is independent of transport. Generate code that works over WebSockets, IPC, or custom protocols without changing your interface.
* **Built for complex domains** — Trusted in automotive HMI, game engines, industrial IoT, and embedded systems where reliability and performance matter.

### Accelerate Development[​](#accelerate-development "Direct link to Accelerate Development")

* **Parallel development** — Frontend and backend teams work simultaneously. UI developers use simulated backends while services are still being built.
* **Eliminate integration bugs** — No more mismatched types, missing fields, or API drift. The generated code guarantees both sides speak the same language.
* **Reduce boilerplate by 80%** — Stop writing repetitive serialization, networking, and observer code. Focus on business logic instead.

### One Source of Truth[​](#one-source-of-truth "Direct link to One Source of Truth")

* **Define once, generate everywhere** — A single API definition produces native SDKs for C++, Qt, Unreal Engine, Python, and more.
* **Consistent patterns** — Every generated SDK follows the same architecture. Learn one, understand all.
* **Version your APIs** — Track API evolution in git. Review changes in pull requests. Roll back when needed.

### Production-Ready Output[​](#production-ready-output "Direct link to Production-Ready Output")

* **Complete, buildable code** — Not just interfaces, but stubs, tests, build files, and examples. Run your first test minutes after generation.
* **Built-in simulation** — Test against scripted backends before real services exist. Validate edge cases, error handling, and timing scenarios.
* **Real-time monitoring** — Debug with visibility into every property change, method call, and signal across your system.

### Extensible & Open[​](#extensible--open "Direct link to Extensible & Open")

* **Open source** — Backed by Epic Games. Inspect the code, contribute improvements, or fork for your needs.
* **Write your own templates** — Need a custom target platform? The template system is fully extensible with Jinja2.
* **Active community** — Get help on Slack, discuss on GitHub, or contribute to the ecosystem.

## How does it work?[​](#how-does-it-work "Direct link to How does it work?")

The following steps provide a high-level overview of the ApiGear workflow. For more detailed information, please refer to our [Quick Start](/docs/guide/quick-start.md) section.

### Development Cycle Overview[​](#development-cycle-overview "Direct link to Development Cycle Overview")

![Developer Cycle](/assets/images/devcycle_light-f521e6094e307c5e453639b3e814ba2c.svg#light) ![Developer Cycle](/assets/images/devcycle_dark-b481b45da22d2b7a412e1e922bb463c3.svg#dark)

The graphic above illustrates the development cycle using ApiGear.

Like all modern development tools, ApiGear fully supports an agile development approach. You can begin with a minimal API definition and iteratively add functionality or modify existing details. While it's theoretically possible to completely rewrite the API, adopting an *API-first approach* will help you design more stable and high-quality APIs from the outset.

### 1. Define API[​](#1-define-api "Direct link to 1. Define API")

Following the *API-first approach*, you begin by defining your [ObjectAPI module](/docs/objectapi/modules.md). This can be accomplished using either the [ApiGear Studio](/docs/studio/intro.md) or the [ApiGear CLI](/docs/cli/intro.md). An API module is a concise document that adheres to the ObjectAPI specification.

### 2. Generate SDK[​](#2-generate-sdk "Direct link to 2. Generate SDK")

Once you have created one or more API modules, you're ready to generate your first SDK. This process involves creating a solution file where you specify an output folder and select one of our expertly engineered [SDK templates](/docs/sdk/intro.md).

### 3. Apply Changes[​](#3-apply-changes "Direct link to 3. Apply Changes")

The output folder contains various files, depending on the SDK solution file setup, selected template, and features.

If you opt for the "full package including scaffolding," you'll receive the following types of files:

1. The plain API in your preferred programming language
2. A stub implementation derived from this API with basic functionality
3. A comprehensive suite of test files covering the stub implementation
4. Project files to instantly build the entire API module and execute the test cases
5. Additional adapters created by ApiGear to provide API analytics insights
6. Examples demonstrating the usage of the generated code

### 4. Create Application[​](#4-create-application "Direct link to 4. Create Application")

With the API module in place, you can begin integrating it into your application. Depending on whether the same team or a different team is implementing the application, they can utilize the module with a stub implementation, a simulation adapter, or the actual business logic. This approach eliminates dependencies, allowing the business logic on the service side and the user application to be developed in parallel, based on the commonly defined API description.

### 5. Gain Insights[​](#5-gain-insights "Direct link to 5. Gain Insights")

The upcoming *ApiGear Analytics* feature will provide comprehensive insights into your customers' API usage. This valuable feedback enables you to make informed decisions about which features to extend or optimize, enhancing efficiency and customer satisfaction.
