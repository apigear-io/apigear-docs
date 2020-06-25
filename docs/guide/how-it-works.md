# How APIGear Works

We developed an interface abstraction to let users define software interfaces. An interface is a contract between two software modules. These modules can be either a local module or a remote module sitting on a different hardware or even in the cloud.

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
