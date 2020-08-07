---
title: "How it works"
description: "A temperature sensor tutorial using ApiGear and Raspberry Pi"
position: 3
category: "Guide"
version: 1.0
---

# How It Works

We developed an interface abstraction schema to let users define software interfaces as configuration. An interface define the boundary between two software modules and acts as a contract between them.

## API Contracts

API contracts are split into modules. Each module represent a partial agreement and can be versioned independent form the rest of the system. A contract can be documented directly inside the definition but also in external documents called pages. Typically a page describes additional concepts or underlying information to the recipient.

- **Bundling**: Modules are bundled inside a project and can be exported as in different document formats or presented online to share the current API contract state across the team.

- **Transformation**: For developers API contracts can be transformed into source code and updated regularly as SDKs. The source code can either be minimal to allow an integration into an existing offering or comes with a ready-to-use project structure to jump-start the development.

## Browsing APIs

These interface description is managed by a team and versioned. A API portal is available to browse the API documentation at any time. The portal will also display some usage examples for developers to get started. Additional documentation pages can be added to enhance the documentation. A portal ensure all participants have a clean overview about the latest API version available.

## Validating APIs

API scenarios can describe the usage of the APIs and are used to define the API fulfillment. Documentation and scenarios can be used for contracting of subcontractors or as a work base between teams or even inside teams.

## Generating source code

Our code generation tool is able to generate for different language and technologies a full SDK to get started with the development of features. The SDK can be generated either via our online UI or using our CLI tool, for example for CI integration.

## Mocking APIs

The API mock is used to decouple teams from dependency. If Team A waits for an API implementation from Team B it would normally be locked. Using the API mock team A can continue to develop and cover all API scenarios until Team B starts delivering the real implementation. The API mock can be used in a mixed operation mode where API are partially used from the production API and others from the mock API.

## Testing APIs

Testing edge case is often much easier by using an API mock, for this the test case runs against a API client using a special configured API mock.
