# Features

This guide explains how to use the generated code, what features are available, and their purpose.

info

A feature is a part of the template that generates a specific aspect of the code. For example, the `api` feature generates the interface traits and the publisher, while the `stubs` feature generates a default implementation you can build on.

## Get started[​](#get-started "Direct link to Get started")

This template generates a [Cargo](https://doc.rust-lang.org/cargo/) workspace for pure *Rust* projects. To successfully compile and use the code you need a working [Rust toolchain](https://www.rust-lang.org/tools/install) (`rustc` and `cargo`, 1.80 or newer). The generated code is asynchronous and built on [tokio](https://tokio.rs/).

note

Basic Rust knowledge is necessary.

### Code generation[​](#code-generation "Direct link to Code generation")

Follow the documentation for [code generation](/docs/guide/quick-start.md) in general and the [CLI](/docs/cli/generate.md) or the [Studio](/docs/studio/intro.md) tools. Or try the [quick start guide](/template-rust/docs/quickstart.md) first, which shows how to prepare an API and generate code from it.

tip

For questions regarding the template please go to our [discussions page](https://github.com/orgs/apigear-io/discussions). For feature requests or bug reports please use our [issue tracker](https://github.com/apigear-io/template-rust/issues).

### Example API[​](#example-api "Direct link to Example API")

The following code snippet contains the *API* definition used throughout this guide to demonstrate the generated code and its usage.

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

The core features generate a working view of your *API* definition. They are self-contained: the `api` and `core` features do **not** depend on any transport or IPC crate, so you can use the generated module crate in a pure in-process application.

* [api](/template-rust/docs/features/api.md) - generates the interface traits for your *API*, with awaitable operations and a `Publisher` (built on tokio channels) that exposes property changes and signals. Also generates the `serde`-enabled data structs and enums (`Serialize`/`Deserialize`, `TryFrom<u8>` for enums) defined in your module, and the shared `ApiError` and `ApiFuture` types.
* [core](/template-rust/docs/features/api.md#data-types-core) - generates per-interface support types under `core_types/`: a property-bundle struct for state synchronization, a shared-reference alias and constructor (`Arc<dyn Trait>`), and a test helper.
* [stubs](/template-rust/docs/features/stubs.md) - adds a ready-to-use default implementation of each interface trait, the workspace `Cargo.toml`, the `examples` crate, and per-interface unit tests. This is a good starting point for your own implementation.

note

The `stubs` feature requires `api` and `core`.

### Extended Features[​](#extended-features "Direct link to Extended Features")

The extended features build on top of `api` and `core` and add more functionality, like monitoring or sharing your data over the network (see [olink](/template-rust/docs/features/olink.md), [mqtt](/template-rust/docs/features/mqtt.md), [nats](/template-rust/docs/features/nats.md)).

* [monitor](/template-rust/docs/features/monitor.md) - generates a [`tracing`](https://docs.rs/tracing) decorator that wraps any implementation and logs all operations and state changes to the [CLI](/docs/cli/intro.md) or the [Studio](/docs/studio/intro.md).
* [olink](/template-rust/docs/features/olink.md) - provides a client and a service adapter for each interface that can be connected to any of the other technology templates with support for [ObjectLink](/docs/protocols/objectlink/intro.md). Use this feature to connect with the ApiGear simulation tools. Includes in-process loopback round-trip tests.
* [mqtt](/template-rust/docs/features/mqtt.md) - provides client and service adapters for each interface over the [MQTT](https://mqtt.org/) protocol (via the [`rumqttc`](https://docs.rs/rumqttc) crate). Check also MQTT in other technology templates that support it. Includes broker-backed integration tests.
* [nats](/template-rust/docs/features/nats.md) - provides client and service adapters for each interface over the [NATS](https://nats.io/) protocol (via the [`async-nats`](https://docs.rs/async-nats) crate). Check also NATS in other technology templates that support it. Includes server-backed integration tests.
* examples - a shared `examples` crate with runnable programs: a local example exercising every interface in-process, plus `*_server` and `*_client` binaries for each IPC transport (OLink over TCP, MQTT and NATS over a broker/server). Run them with `cargo run`.

Each feature can be selected using the solution file or via the command line tool.

note

*Features are case sensitive, make sure to always **use lower-case.***

tip

The *meta* feature `all` enables all specified features of the template. If you want to see the full extent of the generated code, `all` is the easiest solution. Please note, `all` is part of the code generator and not explicitly defined within templates.

## Folder structure[​](#folder-structure "Direct link to Folder structure")

This graph shows the folder structure generated with `all` features enabled. Each module becomes its own workspace member crate (here `io_world`), and the shared `examples` crate sits next to it at the workspace root (here `rust_hello_world`). For more details visit the documentation for each feature.

```
📂hello-world

 ┣ 📂apigear

 ┃ ┣ 📜helloworld.solution.yaml

 ┃ ┗ 📜helloworld.module.yaml

 ┣ 📂rust_hello_world

 ┃ ┣ 📜Cargo.toml          # workspace manifest

 ┃ ┣ 📜rustfmt.toml

 ┃ ┣ 📂examples            # runnable example programs (local + IPC client/server)

 ┃ ┗ 📂io_world            # one crate per module

 ┃ ┃ ┣ 📜Cargo.toml

 ┃ ┃ ┣ 📂src

 ┃ ┃ ┃ ┣ 📜lib.rs

 ┃ ┃ ┃ ┣ 📂api             # api feature: traits + Publisher + data structs/enums + ApiError/ApiFuture

 ┃ ┃ ┃ ┣ 📂core_types      # core feature: property bundle + shared reference + test helpers

 ┃ ┃ ┃ ┣ 📂implementation  # stubs feature: default implementation

 ┃ ┃ ┃ ┣ 📂monitor         # monitor feature: tracing decorator

 ┃ ┃ ┃ ┣ 📂olink           # olink feature: client + service adapters

 ┃ ┃ ┃ ┣ 📂mqtt            # mqtt feature: client + service adapters

 ┃ ┃ ┃ ┗ 📂nats            # nats feature: client + service adapters

 ┃ ┃ ┗ 📂tests             # unit tests + IPC round-trip tests
```
