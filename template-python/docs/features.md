# Features

This guide explains how to use the generated code, what are the available features and their benefits.

## Get started[​](#get-started "Direct link to Get started")

This template generates code for [*Python*](https://www.python.org/) projects. In order to successfully compile and use the code, you need to have the *Python* installed (at least 3.12). Check [the Python website](https://www.python.org/downloads/) for downloads. Basic understanding of *Python* is required.

### Code generation[​](#code-generation "Direct link to Code generation")

Follow the documentation for the [code generation](/docs/guide/quick-start.md) in general and [CLI](/docs/cli/generate.md) or the [Studio](/docs/studio/intro.md) tools. Or try first the [quick start guide](/template-python/docs/quickstart.md) which shows how to prepare api and generate code out of it.

tip

For questions regarding this template please go to our [discussions page](https://github.com/orgs/apigear-io/discussions). For feature requests or bug reports please use the [issue tracker](https://github.com/apigear-io/template-python/issues).

### Example API[​](#example-api "Direct link to Example API")

The following code snippet contains the *API* which is used throughout this guide to demonstrate the generated code and its usage in *Python*.

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

### Core[​](#core "Direct link to Core")

Features generate a view model for the `api`. This can be used to implement a working service and directly use it in your UI project.

* \[api] TBD - generates abstract base interface and a basic implementation for data types
* \[stubs] TBD - adds a basic stubs for the `api`, you'll get classes that can be instantiated and have some default behavior.

### Extended[​](#extended "Direct link to Extended")

Features can be used in combination with `api` and add more functionality on top, like the simulation

* \[olink] TBD - provides a client and server adapters for each interface, that can be connected to any of the other technology templates with support for [ObjectLink](/docs/protocols/objectlink/intro.md). Use this feature to connect with ApiGear simulation tools.

* \[MQTT] TBD - provides minimal working adapters for MQTT client and service side for each interfaces. Check also MQTT in other technology templates that supports it. Also examples are provided:

  <!-- -->

  * `examples/mqtt/server.py` that shows usage of your services in mqtt server adapter.
  * `examples/mqtt/client.py` that shows usage of your interfaces in mqtt client adapter.

There is also an *internal* feature `apigear`, which is generated for the *extended* features, its usage is explained with the extended features. Each feature can be selected using the solution file or via command line tool.

note

\*Features are case sensitive, make sure to always **use lower-case.** \*

tip

The *meta* feature `all` enables all specified features of the template. If you want to see the full extent of the generated code `all` is easiest solution. Please note, `all` is part of the code generator and not explicitly used within templates.

## Folder structure[​](#folder-structure "Direct link to Folder structure")

This graph shows the full folder structure which is generated for `all` features enabled. Generated features are encapsulated in separate folders inside the module folder, here `io_world` or for the common features like `examples` and the internal helper feature `apigear`, a level above, in the `generation layer` level, here `qt_hello_world`. For more details visit the documentation for each feature.

```
📂hello-world
 ┣ 📂apigear
 ┃ ┣ 📜helloworld.solution.yaml
 ┃ ┗ 📜helloworld.module.yaml
 ┣ 📂py_hello_world
 ┃ ┣ 📂apigear
 ┃ ┣ 📂examples
 ┃ ┃ ┣ 📂mqtt
 ┃ ┃ ┗ 📂olink
 ┃ ┣ 📂io_world
 ┃ ┃ ┣ 📂api
 ┃ ┃ ┣ 📂impl
 ┃ ┃ ┣ 📂mqtt
 ┃ ┃ ┗ 📂olink
 ┃ ┣ 📂utlis
 ┃ ┗ 📜requirements.txt
```
