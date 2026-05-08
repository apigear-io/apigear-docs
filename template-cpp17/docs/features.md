# Features

This guide explains how to use the generated code, what are the available features and their benefits.

info

A feature is a part of the template that generates a specific aspect of the code. For example, the `api` feature generates the core API interfaces and the `stubs` feature generates a stub implementation for the API.

## Get started[​](#get-started "Direct link to Get started")

This template generates code for pure c++ projects. In order to successfully compile and use the code, you need to have a working c++ compiler toolchain installed.

note

Basic c++ knowledge is necessary.

### Code generation[​](#code-generation "Direct link to Code generation")

Follow the documentation for the [code generation](/docs/guide/quick-start.md) in general and [CLI](/docs/cli/generate.md) or the [Studio](/docs/studio/intro.md) tools. Or try first the [quick start guide](/template-cpp17/docs/quickstart.md) which shows how to prepare api and generate code out of it.

tip

For questions regarding the template please go to our [discussions page](https://github.com/orgs/apigear-io/discussions). For feature requests or bug reports please use our [issue tracker](https://github.com/apigear-io/template-cpp17/issues).

### Example API[​](#example-api "Direct link to Example API")

The following code snippet contains the *API* definition which is used throughout this guide to demonstrate the generated code and its usage.

Hello World API (click to expand)

```
schema: apigear.module/1.0

name: io.world

version: "1.0.0"



interfaces:

  - name: Hello

    properties:

      - { name: last, type: Message }

    operations:

      - name: say

        params:

          - { name: msg, type: Message }

          - { name: when, type: When }

        return:

          type: int

    signals:

      - name: justSaid

        params:

          - { name: msg, type: Message }

enums:

  - name: When

    members:

      - { name: Now, value: 0 }

      - { name: Soon, value: 1 }

      - { name: Never, value: 2 }

structs:

  - name: Message

    fields:

      - { name: content, type: string }
```

## Features[​](#features-1 "Direct link to Features")

### Core Features[​](#core-features "Direct link to Core Features")

Features generate a view model for the *API* definition. This can be used to implement a working *C++* service and directly use it in your project.

* [api](/template-cpp17/docs/features/api.md) - generates compilable base pure interfaces for your *API*, as also a basic implementation for data types and subscriber/publisher as abstract classes that describe the notification system for users of your interfaces.
* [stubs](/template-cpp17/docs/features/stubs.md) - adds a basic stub implementation for the *API*, you'll get classes that can actually be instantiated with a ready to use publishers, this is a good starting point for your implementation.
* [conan](/template-cpp17/docs/features/conan.md) - build and packaging support for your project.

### Extended Features[​](#extended-features "Direct link to Extended Features")

Features can be used in combination with *API* and add more functionality on top, like simulation support (see [olink](/template-cpp17/docs/features/olink.md#simulation))

* [olink](/template-cpp17/docs/features/olink.md) - provides a client and server adapters for each interface, that can be connected to any of the other technology templates with support for [ObjectLink](/docs/protocols/objectlink/intro.md). Use this feature to connect with ApiGear simulation tools.

* examples\_olink - examples of generated code for the olink feature. Contains:

  <!-- -->

  * `olinkserver` shows use of your interfaces as an olink services.
  * `olinkclient` shows use of your interfaces as an olink clients.

* [monitor](/template-cpp17/docs/features/monitor.md) - generates a middle-ware layer which logs all API events to the [CLI](/docs/cli/intro.md) or the [Studio](/docs/studio/intro.md)

* [MQTT](/template-cpp17/docs/features/mqtt.md) *experimental* - provides minimal working adapters for MQTT client and service side for each interfaces. Check also MQTT in other technology templates that supports it.

* examples\_mqtt - examples of generated code for the olink feature. Contains:

  <!-- -->

  * `mqttserver` shows use of your interfaces with mqtt adapted for your services.
  * `mqttclient` shows use of your interfaces as a mqtt adapted for your services users.

* [NATS](/template-cpp17/docs/features/nats.md) *experimental* - provides minimal working adapters for NATS client and service side for each interfaces. Check also NATS in other technology templates that supports it.

* * examples\_nats - examples of generated code for the olink feature. Contains:

    <!-- -->

    * `natsserver` shows use of your interfaces with nats adapted for your services.
    * `natsclient` shows use of your interfaces as a nats adapted for your services users.

* examples of generated code for basic features:

  <!-- -->

  * `app` simple example with stubs.
  * `appthreadsafe` simple example with stubs wrapped with thread safe decorator. See [thread safe decorator from core features](/template-cpp17/docs/features/stubs.md#core)

![Overview of features for user application, including receiving data from network: Bottom floor shows possible inputs for your API, you can either obtain data from the network with OLink or MQTT or use local (thread safe if necessary) implementation.](/img/features/featuresApp.png)

Figure: Overview of features for user application, including receiving data from network: Bottom floor shows possible inputs for your API, you can either obtain data from the network with OLink or MQTT or use local (thread safe if necessary) implementation.

note

Theoretically you can use the Thread Safe Decorator with other features that implements API: OLinkClient and MQTT Client, but they, already provide thread safety on at least the same level as the Thread Safe Decorator.

![Overview of features for user application, including publishing data through network: Topmost floor shows your options for using your local implementation (bottom floor): you can use it in your local app and/or use method of sharing the data with clients in the network. Consider then using thread safe version of your implementation.](/img/features/featuresServer.png)

Figure: Overview of features for user application, including publishing data through network: Topmost floor shows your options for using your local implementation (bottom floor): you can use it in your local app and/or use method of sharing the data with clients in the network. Consider then using thread safe version of your implementation.

There are also an *internal* features:

* `apigear`, which is generated for the *extended* features and is explained with them.
* `core`, which is generated for the stubs and the *extended* features. For the explanation see [core documentation](/template-cpp17/docs/features/stubs.md#core)

Each feature can be selected using the solution file or via command line tool.

note

\_Features are case sensitive, make sure to always **use lower-case.** \_

tip

The *meta* feature `all` enables all specified features of the template. If you want to see the full extent of the generated code `all` is easiest solution. Please note, `all` is part of the code generator and not explicitly used within templates.

## Folder structure[​](#folder-structure "Direct link to Folder structure")

This graph shows the full folder structure which is generated for `all` features enabled, but skips the [conan](/template-cpp17/docs/features/conan.md) files. Generated features are encapsulated in separate folders for each module or for the common features like `examples` and the internal helper feature `apigear`, a level above, in the `generation target` level, here `cpp_hello_world`. For more details visit the documentation for each feature.

```
📂hello-world

 ┣ 📂apigear

 ┃ ┣ 📜helloworld.solution.yaml

 ┃ ┗ 📜helloworld.module.yaml

 ┣ 📂cpp_hello_world

 ┃ ┣ 📂apigear

 ┃ ┣ 📂examples

 ┃ ┣ 📂modules

 ┃ ┃ ┗ 📂io_world

 ┃ ┃ ┃ ┣ 📂conan

 ┃ ┃ ┃ ┣ 📂generated

 ┃ ┃ ┃ ┃ ┣ 📂api

 ┃ ┃ ┃ ┃ ┣ 📂core

 ┃ ┃ ┃ ┃ ┣ 📂monitor

 ┃ ┃ ┃ ┃ ┣ 📂mqtt

 ┃ ┃ ┃ ┃ ┗ 📂olink

 ┃ ┃ ┃ ┣ 📂implementation

 ┃ ┃ ┃ ┣ 📜CMakeLists.txt

 ┃ ┃ ┃ ┗ 📜Io_worldConfig.cmake.in

 ┃ ┗ 📜CMakeLists.txt
```
