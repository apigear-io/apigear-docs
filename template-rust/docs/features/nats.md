# NATS

This feature provides a *client* and a *service* adapter for your interfaces over the [NATS](https://nats.io/) protocol, built on the [`async-nats`](https://docs.rs/async-nats) crate. It lets you connect applications built with the same or different technologies — check all of our [templates](/docs/sdk/intro.md) and the NATS feature in other templates that support it.

* Use a *NATS client* in place of your local implementation to receive data from a remote service.
* Use a *NATS service adapter* to expose your implementation as a remote service.

note

This feature requires `api` and `core`.

tip

The NATS server is not part of the template. To run a client and a service (both connect as NATS clients) you need a [nats-server](https://nats.io/download/) reachable by both.

## File overview for module[​](#file-overview-for-module "Direct link to File overview for module")

With our example API definition

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

the following files are generated. The purpose and content of each file is explained below.

```
📂io_world

 ┣ 📂src

 ┃ ┣ 📂nats

 ┃ ┃ ┣ 📜mod.rs

 ┃ ┃ ┣ 📜hello_client.rs    # NATS client adapter for Hello

 ┃ ┃ ┗ 📜hello_service.rs   # NATS service adapter for Hello

 ┃ ┗ 📜lib.rs

 ┣ 📂tests

 ┃ ┣ 📜nats_common.rs       # server test helper

 ┃ ┗ 📜nats_hello_test.rs   # round-trip tests for Hello

 ...
```

The adapters use NATS request/reply for operations and dedicated subjects for properties, signals and the service's state.

## NATS client adapter[​](#nats-client-adapter "Direct link to NATS client adapter")

The file `📜hello_client.rs` contains `HelloNatsClient`, the NATS client version of the `Hello` interface. It implements `HelloTrait`, so you use it like a local implementation. It takes a connected [`async-nats`](https://docs.rs/async-nats) client and subscribes to the interface's subjects.

```
let nats = async_nats::connect("127.0.0.1:4222").await?;

let client = Arc::new(HelloNatsClient::new(nats));

let _subscription = client.subscribe();
```

#### Properties[​](#properties "Direct link to Properties")

A getter (here `last()`) returns the locally cached value last received from the service. A setter (here `set_last()`) sends a change request; the local value updates when the service confirms the change. Subscribe to changes through the [`Publisher`](/template-rust/docs/features/api.md#publisher) returned by `publisher()`.

#### Operations[​](#operations "Direct link to Operations")

Operations use NATS request/reply — the call sends a request and awaits the reply:

```
let result = client.say(&message, WhenEnum::Now).await;
```

#### Signals[​](#signals "Direct link to Signals")

Do not emit signals from a client. Subscribe to signals through the [`Publisher`](/template-rust/docs/features/api.md#publisher); incoming signal messages are delivered on the matching `broadcast` channel.

#### Connectivity[​](#connectivity "Direct link to Connectivity")

The client's `subscribe()` spawns a background task that subscribes to the property (`apigear.io.world.Hello.prop.*`), signal (`apigear.io.world.Hello.sig.*`) and state (`apigear.io.world.Hello.state`) subjects, and keeps the cache in sync as messages arrive. The service publishes its full state on the `.state` subject via `publish_state()`. Because NATS does not retain messages, a client that connects after the service published only sees the state if the service publishes it again — the generated `nats_server` example re-publishes the state periodically so late-joining clients still receive it.

## NATS service adapter[​](#nats-service-adapter "Direct link to NATS service adapter")

The file `📜hello_service.rs` contains `HelloNatsService`, which wraps a local `Hello` implementation and exposes it over NATS. It applies incoming operation and property-change requests to your local object and publishes property changes and signals back to clients.

* **Properties** — a change on your local object (or a client request) is published to all clients.
* **Operations** — a request is run on your local object; the result is returned only to the requesting client.
* **Signals** — a signal emitted by your local object is forwarded to all clients.

## Use the adapters[​](#use-the-adapters "Direct link to Use the adapters")

The generated `examples` crate ships ready-to-run `nats_server` and `nats_client` binaries. The client connects to the server, hands the connection to the adapter, and subscribes:

```
use std::sync::Arc;

use std::time::Duration;



let nats = async_nats::connect("127.0.0.1:4222").await.expect("connect to nats-server");



let client = Arc::new(HelloNatsClient::new(nats));

let _subscription = client.subscribe();



// Give the subscriptions and state exchange a moment.

tokio::time::sleep(Duration::from_millis(500)).await;



// Use the client like a local Hello implementation:

let result = client.say(&Default::default(), WhenEnum::Now).await;

println!("say() -> {result:?}");
```

Start a server, then run the two binaries in separate terminals (override the server URL with the `NATS_URL` environment variable, default `127.0.0.1:4222`):

```
nats-server -p 4222 &

cargo run -p rust_hello_world_examples --bin nats_server

cargo run -p rust_hello_world_examples --bin nats_client
```

## Tests[​](#tests "Direct link to Tests")

The NATS feature generates round-trip tests in `📜tests/nats_hello_test.rs`, backed by the helper in `📜nats_common.rs`. They exercise a real client ↔ service round-trip over a live server, so they are marked `#[ignore]` and skipped by default. Run them against a server the way CI does:

```
nats-server -p 4222 &

cargo test --manifest-path goldenmaster/Cargo.toml -- --ignored
```
