---
sidebar_position: 1
---

# ApiGear Core

ApiGear introduces a novel and efficient digital workflow for software integration. This innovative approach to software development centers on an API-driven methodology, enabling teams to develop software-driven products seamlessly. By providing an integrated workflow with enhanced monitoring and simulation capabilities, ApiGear significantly reduces friction in the development process.

## What is ApiGear?

ApiGear is a comprehensive suite of tools and services that empowers development teams to create detailed descriptions of their software interfaces and generate ready-to-use integration SDKs. These SDKs come pre-configured with advanced features, including monitoring, logging, tracing, and simulation of interface calls, streamlining the development process.

## What is an API?

An API (Application Programming Interface) is a set of definitions that describe how software components communicate with each other. It serves as a contract between these components, specifying the data structures and behaviors they should exhibit. In essence, an API provides a clear description of software interfaces, facilitating seamless integration and interaction between different parts of a system.

## What is an API Module?

An API module is a structured description of an API. It is a document that encapsulates the API's specifications, detailing the software interfaces. A collection of these modules defines a complete software system, with each module serving as a fundamental building block. API modules can be transformed into SDKs using ApiGear Studio and the ApiGear CLI, streamlining the development process.

## What is an API SDK?

An API SDK (Software Development Kit) is a set of software components that directly reflect the content of an API module. It allows developers to focus on API usage rather than implementation details. The SDK serves as a ready-to-use integration component, facilitating the seamless incorporation of the software system with other systems or applications.

## How does it work?

The following steps provide a high-level overview of the ApiGear workflow. For more detailed information, please refer to our [Quick Start](/docs/quick-start) section.

### Development Cycle Overview

![Developer Cycle](/img/devcycle_light.svg#light)
![Developer Cycle](/img/devcycle_dark.svg#dark)

The graphic above illustrates the development cycle using ApiGear.

Like all modern development tools, ApiGear fully supports an agile development approach. You can begin with a minimal API definition and iteratively add functionality or modify existing details. While it's theoretically possible to completely rewrite the API, adopting an _API-first approach_ will help you design more stable and high-quality APIs from the outset.

### 1. Define API

Following the _API-first approach_, you begin by defining your [ObjectAPI module](/docs/advanced/objectapi/modules). This can be accomplished using either the [ApiGear Studio](/docs/studio/intro) or the [ApiGear CLI](/docs/cli/intro). An API module is a concise document that adheres to the ObjectAPI specification.

### 2. Generate SDK

Once you have created one or more API modules, you're ready to generate your first SDK. This process involves creating a solution file where you specify an output folder and select one of our expertly engineered [SDK templates](/docs/sdk/intro).

### 3. Apply Changes

The output folder contains various files, depending on the SDK solution file setup, selected template, and features.

If you opt for the "full package including scaffolding," you'll receive the following types of files:

1. The plain API in your preferred programming language
2. A stub implementation derived from this API with basic functionality
3. A comprehensive suite of test files covering the stub implementation
4. Project files to instantly build the entire API module and execute the test cases
5. Additional adapters created by ApiGear to provide API analytics insights
6. Examples demonstrating the usage of the generated code

### 4. Create Application

With the API module in place, you can begin integrating it into your application. Depending on whether the same team or a different team is implementing the application, they can utilize the module with a stub implementation, a simulation adapter, or the actual business logic. This approach eliminates dependencies, allowing the business logic on the service side and the user application to be developed in parallel, based on the commonly defined API description.

### 5. Gain Insights

The upcoming _ApiGear Analytics_ feature will provide comprehensive insights into your customers' API usage. This valuable feedback enables you to make informed decisions about which features to extend or optimize, enhancing efficiency and customer satisfaction.

