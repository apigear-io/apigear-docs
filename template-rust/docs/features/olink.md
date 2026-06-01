# Olink

This feature provides a *client* and a *service* adapter for your interfaces over the [ObjectLink](/docs/protocols/objectlink/intro.md) protocol. It lets you connect applications built with the same or different technologies — check all of our [templates](/docs/sdk/intro.md).

Use an *OLink client* in place of your local implementation to talk to a remote service or to the [ApiGear simulation](#simulation). Use an *OLink service adapter* to expose your implementation as a remote service.

note

This feature requires `api` and `core`.

### ApiGear ObjectLink protocol[​](#apigear-objectlink-protocol "Direct link to ApiGear ObjectLink protocol")

The [ObjectLink](/docs/protocols/objectlink/intro.md) protocol is a lightweight message protocol for objects described by an interface. It connects a client object with a server object and supports remote operations: requesting a property change (client) or notifying a property change (server), emitting a signal (server), and invoking a remote method with a response delivered to the caller (server).

The OLink adapters build on the [objectlink-core-rs](https://github.com/apigear-io/objectlink-core-rs) library (the `objectlink-core` crate), which is shared across Rust-based ObjectLink code. It provides the protocol abstraction — encoding and decoding messages and routing them to the right object through a registry — independent of the network stack. Messages are exchanged as newline-delimited JSON, so any byte stream (a TCP socket, an in-process loopback) can carry them.

## File overview for module[​](#file-overview-for-module "Direct link to File overview for module")

With our example API

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

 ┃ ┣ 📂olink

 ┃ ┃ ┣ 📜mod.rs

 ┃ ┃ ┣ 📜hello_client.rs    # OLink client adapter for Hello

 ┃ ┃ ┗ 📜hello_service.rs   # OLink service adapter for Hello

 ┃ ┗ 📜lib.rs

 ┣ 📂tests

 ┃ ┣ 📜olink_common.rs      # in-process loopback helper

 ┃ ┗ 📜olink_hello_test.rs  # round-trip tests for Hello

 ...
```

## OLink client adapter[​](#olink-client-adapter "Direct link to OLink client adapter")

The file `📜hello_client.rs` contains `HelloOlinkClient`, the OLink client version of the `Hello` interface. It implements two traits: `HelloTrait` (so you can use it exactly like a local implementation) and `ObjectSink` (so the OLink core can deliver incoming messages to it). It caches property values locally and forwards operations and property writes to the remote service.

```
pub struct HelloOlinkClient {

    data: RwLock<HelloData>,                  // locally cached property values

    node: RwLock<Option<Arc<dyn IClientNode>>>,

    publisher: HelloPublisher,

}
```

#### Properties[​](#properties "Direct link to Properties")

A property getter (here `last()`) returns the locally cached value last received from the service. A property setter (here `set_last()`) sends a change request to the service; the local value is **not** changed immediately — it updates when the service confirms the change. Subscribe to changes through the [`Publisher`](/template-rust/docs/features/api.md#publisher) returned by `publisher()`. When the client receives a property-change message, it updates its cache and sends on the matching `watch` channel.

note

On a successful link, the client receives the service's current state, so its cached properties start in sync with the service.

#### Operations[​](#operations "Direct link to Operations")

Operations are forwarded as remote invocations. Calling an operation sends an invoke request to the service and awaits the reply:

```
let result = client.say(&message, WhenEnum::Now).await;
```

If no client node has been set or the link is down, the operation resolves to `Err(ApiError::NotConnected)`.

#### Signals[​](#signals "Direct link to Signals")

Do not emit signals from a client. Subscribe to any signal through the [`Publisher`](/template-rust/docs/features/api.md#publisher); when the client receives a signal message it sends on the matching `broadcast` channel.

## OLink service adapter[​](#olink-service-adapter "Direct link to OLink service adapter")

The file `📜hello_service.rs` contains `HelloOlinkService`, which wraps a local `Hello` implementation and exposes it to remote clients by implementing the `ObjectSource` trait from [objectlink-core-rs](https://github.com/apigear-io/objectlink-core-rs). It receives remote invocations and property-change requests, applies them to your local object, and pushes property changes and signals back to connected clients. Construct it with the shared implementation you want to expose:

```
let object: Arc<dyn HelloTrait> = Arc::new(Hello::default());

let service = HelloOlinkService::new(object.clone());
```

* **Properties** — a property change on your local object (or a change requested by a client) is published to all connected clients.
* **Operations** — a remote invocation is run on your local object; the result is returned only to the calling client.
* **Signals** — a signal emitted by your local object is forwarded to all connected clients.

## Use the adapters[​](#use-the-adapters "Direct link to Use the adapters")

The adapters need a transport to carry the ObjectLink messages. The generated `examples` crate ships ready-to-run `olink_server` and `olink_client` binaries that wire the adapters to a TCP socket. The service side registers the adapter and pumps socket lines through a `RemoteNode`:

```
use objectlink_core::remote_node::RemoteNode;

use objectlink_core::remote_registry::RemoteRegistry;

use objectlink_core::traits::ObjectSource;

use std::sync::Arc;



let object = Arc::new(Hello::default());

let service: Arc<dyn ObjectSource> =

    Arc::new(HelloOlinkService::new(object.clone() as Arc<dyn HelloTrait>));



let registry = Arc::new(RemoteRegistry::new());

registry.add_source(Arc::downgrade(&service));

// Accept TCP connections and feed each incoming line to `node.handle_message(&line)`.
```

The client side connects a `HelloOlinkClient` through a `ClientNode` and links it to the remote object:

```
use objectlink_core::client_node::ClientNode;

use objectlink_core::client_registry::ClientRegistry;

use objectlink_core::traits::ObjectSink;

use std::sync::Arc;



let registry = Arc::new(ClientRegistry::new());

let node = Arc::new(ClientNode::new(registry));



let client = Arc::new(HelloOlinkClient::default());

client.set_node(node.clone());

let sink: Arc<dyn ObjectSink> = client.clone();

node.link_remote(&sink);



// Once linked, use the client like a local Hello implementation:

let _ = client.say(&Default::default(), WhenEnum::Now).await;

println!("last = {:?}", client.last());
```

Run the two binaries in separate terminals (override the address with the `OLINK_ADDR` environment variable, default `127.0.0.1:8182`):

```
cargo run -p rust_hello_world_examples --bin olink_server

cargo run -p rust_hello_world_examples --bin olink_client
```

## Tests[​](#tests "Direct link to Tests")

The OLink feature generates round-trip tests in `📜tests/olink_hello_test.rs`, backed by an in-process loopback helper in `📜olink_common.rs`. The loopback wires a service adapter and a client adapter together without a socket, so the tests verify the full client ↔ service round-trip — operations, property writes, remote property notifications, and signals — entirely in-memory. They run as part of `cargo test` and require no broker:

```
cargo test --manifest-path goldenmaster/Cargo.toml
```

## Simulation[​](#simulation "Direct link to Simulation")

The simulation lets you test, demonstrate or develop applications without the real service. The simulation server is integrated into [ApiGear Studio](/docs/studio/intro.md) and the [CLI](/docs/cli/simulate.md). Because the simulation speaks ObjectLink, point your `HelloOlinkClient` at the simulation server's address instead of a real service and it behaves like a remote implementation.

You drive the simulation with [simulation scenarios](/docs/scripting/backends/scenario.md) — YAML files that define sequences of actions that change property values or emit signals. See more on [simulation](/docs/scripting/backends/intro.md).

Run a scenario from the CLI and connect your client to the same port:

```
apigear simulate run path/to/helloworldtest.scenario.yaml --addr :8182
```
