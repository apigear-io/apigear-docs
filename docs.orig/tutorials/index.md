# Development Cycle

This is section is about how to use ApiGear to create SDKs with the ObjectAPI.

:::tip
Feel free to jump directly to our [demos over at github](https://github.com/apigear-io/objectapi-demos). They showcase two different APIs in several languages including applications which use the API modules.
:::

Now, that you know the basics about the [ObjectAPI](../objectapi/overview) and how to create SDKs using ApiGear, we provide some demos and hints for real world projects.

We will cover starting from scratch as well as updating an existing API, previously created using ApiGear. Our [demos](https://github.com/apigear-io/objectapi-demos) are implemented using the same process as described below.

## Cycle Overview

<img src="/devcycle_43_light.svg" class="light-img" alt="Dev cycle light" />
<!-- <img src="/devcycle_43_dark.svg" class="dark-img" alt="Dev cycle dark" /> -->
The graphic describes the development cycle using ApiGear.

Like every modern development tool ApiGear fully supports an agile development approach. You can start with a minimal API definition and then iteratively add more functionality or change existing details. Theoretically, you could even rewrite the whole API.
However, using the _API first approach_ will help you design more stable and high quality APIs.

## Define API

As with every _API first approach_ you start at defining your [ObjectAPI module](../objectapi/modules).
The easiest way to do this in a team is to use our online collaboration suite as described in [Start -> modules](../guide/modules) section.

## Create SDK

Once you have created one or several API modules you are set to create your first SDK. Therefore you choose one of our expert engineered [SDK templates](../sdk/intro) and a SDK runner for your project.

The SDK runner will create a _.zip_ file for you to download.

## Apply Changes

The aforementioned SDK _.zip_ file consists of several different files depending on the SDK runner setup and chosen programming language.

Assuming you chose the "full package including scaffolding" then you have the following types of files:

1. The plain API in your preferred language
2. A stub implementation derived from this API with a basic implementation
3. A suite of test files covering the stub implementation
4. Project files to instantaneously build the whole API module and execute the test cases
5. Additional adapters created by ApiGear to provide API analytics insights.

From here on we recommend a _split strategy_ depending on whether you created the API module for the first time or whether you want to update an existing implementation.

### First run

The easiest way to set your project up for long time API updates is to create an _ini(tial)_ folder within your project and extract the SDK _unmodified_ in this folder. Afterwards you just simply copy this _ini_ folder to a _sol(ution)_ folder. You should then commit this state as initial version to be able to always rollback.

Once this is done you can start replacing the API stub implementation in the _sol_ folder with your business logic and the same time update the test stubs to cover the real API behavior.

### Updating existing APIs

When you have set up your project as described in the _first run_ using a _ini_ and _sol_ folder - or a similar setup - you can now easily apply updates to your API using the following steps.

- extract the updated SDK _unmodified_ into the _ini_ folder. A diff of your preferred source control tool should only should the auto generated changes based on your API modification
- use a _compare and merge_ tool to go over the differences of the updated _ini_ folder and your existing implementation in the _sol_ folder
- only apply the interface changes without overwriting your business logic

This process might sound cumbersome on first sight but is really easy and straight forward to use.

## Create application

Now, that we have our API module in place we can start using it an application.
Depending on whether it is the same team or a different team implementing the application, they can use the module either with a stub implementation, a simulation adapter or the real business logic. There is no dependency anymore - the API module and the application can be both developed in parallel based on the commonly defined API description.

Our [demos](https://github.com/apigear-io/objectapi-demos) were developed the same way as described above. Small increments at a time, super fast and with high quality built in. The applications are stored in the _app(lication)_ folder.

## Gain insights

With the upcoming feature _ApiGear analytics_ you will gain full insight into your customers API usage. Based on this highly valuable feedback you are able to make fully informed decisions on which feature to extend or which could be spared for future efficiency and customer satisfaction.
