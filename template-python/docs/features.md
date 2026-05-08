# Features

This guide explains how to use the generated code, what are the available features and their benefits.

## Get started[​](#get-started "Direct link to Get started")

This template generates code for [*Python*](https://www.python.org/) projects. In order to successfully run the generated code, you need to have *Python* installed (at least 3.11). Check [the Python website](https://www.python.org/downloads/) for downloads. Basic understanding of *Python* is required.

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

Core features generate the view model for your `api`. They give you typed data structures, abstract base interfaces, and a runnable project skeleton you can fill in with your own logic.

* **`api`** — generates one `api.py` per module containing pydantic-based `BaseModel` structs (with alias-aware JSON encoding), `IntEnum` enums, and an abstract base class `I<Interface>` for every interface. The abstract methods raise `NotImplementedError`, so subclasses must override them. This feature also drops shared helpers under `utils/` (`eventhook.py`, `base_types.py`). Every other feature in this template depends on `api`.
* **`scaffold`** — generates the project skeleton: top-level `Makefile`, `requirements.txt`, root `README.md`, and a per-module `impl/` folder with one ready-to-edit Python file per interface. Each `impl/<interface>.py` extends the matching `I<Interface>` base class and provides a working default implementation: backing fields for properties, `EventHook` instances for property-change events and signals, getters/setters that fire the change events, and operations that return type-correct defaults. A pytest scaffold (`test_<interface>.py`) is generated alongside.

note

The `scaffold` feature is what older versions of these docs called *stubs*. The feature flag you pass in your solution YAML or on the command line is `scaffold` — use that name verbatim. The `test_helpers` feature adds builders under `test_helpers/` that you can use from your own tests.

### Extended[​](#extended "Direct link to Extended")

Extended features build on `api` and `scaffold` to expose your interfaces over the network. They each generate per-interface client and server adapters plus a shared protocol layer under the top-level `apigear/` folder.

* **`olink`** — generates an [ObjectLink](/docs/protocols/objectlink/intro.md) WebSocket client and server adapter per interface. You get a `<Interface>Sink` (client side, in `olink/sinks.py`) that implements your `I<Interface>` and forwards calls over the wire, and a `<Interface>Source` (server side, in `olink/sources.py`) that wraps your local implementation and exposes it remotely. The shared transport lives in `apigear/olink/` (built on `olink-core`, `websockets`, and `starlette`/`uvicorn`). Use this feature to connect with ApiGear simulation tools or to interoperate with any other ApiGear technology template that supports ObjectLink. See the [olink quickstart](/docs/protocols/objectlink/intro.md) and the generated `examples/olink/` folder.

* **`mqtt`** — generates MQTT client and server adapters per interface (`mqtt/sinks.py` and `mqtt/sources.py`) on top of the [Paho MQTT library](https://pypi.org/project/paho-mqtt/). The client adapter `<Interface>ClientAdapter` subscribes to property/signal/response topics and exposes async operations. The server adapter `<Interface>ServiceAdapter` wraps your local implementation, publishes property changes and signals, and answers method invocations. The shared transport lives in `apigear/mqtt/`. Worked examples are provided:

  * `examples/mqtt/server.py` shows the server adapter wrapping your local implementation.
  * `examples/mqtt/client.py` shows the client adapter consuming a remote service.

  See the dedicated [MQTT page](/template-python/docs/features/mqtt.md) for usage, scope, and current limitations.

There is also an *internal* feature `apigear`, which is generated for the extended features. Its usage is explained alongside the extended features that pull it in. Each feature can be selected using the solution file or via the command-line tool.

note

\*Features are case sensitive, make sure to always **use lower-case.** \*

tip

The *meta* feature `all` enables all specified features of the template. If you want to see the full extent of the generated code, `all` is the easiest solution. Note that `all` is part of the code generator and is not explicitly used within templates.

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

 ┃ ┃ ┣ 📂olink

 ┃ ┃ ┗ 📂test_helpers

 ┃ ┣ 📂utils

 ┃ ┣ 📜Makefile

 ┃ ┣ 📜README.md

 ┃ ┗ 📜requirements.txt
```
