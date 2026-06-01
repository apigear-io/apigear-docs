# MQTT

This feature provides a *client* and a *service* adapter for your interfaces over the [MQTT](https://mqtt.org/) protocol, built on the [`rumqttc`](https://docs.rs/rumqttc) crate. It lets you connect applications built with the same or different technologies — check all of our [templates](/docs/sdk/intro.md) and the MQTT feature in other templates that support it.

* Use an *MQTT client* in place of your local implementation to receive data from a remote service.
* Use an *MQTT service adapter* to expose your implementation as a remote service.

note

This feature requires `api` and `core`.

tip

The MQTT broker is not part of the template. To run a client and a service you need a broker (for example [Mosquitto](https://mosquitto.org/)) reachable by both.

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

 ┃ ┣ 📂mqtt

 ┃ ┃ ┣ 📜mod.rs

 ┃ ┃ ┣ 📜hello_client.rs    # MQTT client adapter for Hello

 ┃ ┃ ┗ 📜hello_service.rs   # MQTT service adapter for Hello

 ┃ ┗ 📜lib.rs

 ┣ 📂tests

 ┃ ┣ 📜mqtt_common.rs       # broker test helper

 ┃ ┗ 📜mqtt_hello_test.rs   # round-trip tests for Hello

 ...
```

The adapters map your interface onto MQTT topics: operations are published as request messages, while properties, signals and the service's state use dedicated topics. The service publishes property and state messages as retained, so a client that connects later still receives the current state.

## MQTT client adapter[​](#mqtt-client-adapter "Direct link to MQTT client adapter")

The file `📜hello_client.rs` contains `HelloMqttClient`, the MQTT client version of the `Hello` interface. It implements `HelloTrait`, so you use it like a local implementation. It takes a shared [`rumqttc`](https://docs.rs/rumqttc) `AsyncClient`, subscribes to the interface's topics, and decodes incoming messages.

```
let client = Arc::new(HelloMqttClient::new(Arc::new(mqtt_async_client)));

client.subscribe_topics().await.expect("subscribe to topics");
```

#### Properties[​](#properties "Direct link to Properties")

A getter (here `last()`) returns the locally cached value last received from the service. A setter (here `set_last()`) publishes a change request; the local value updates when the service confirms the change. Subscribe to changes through the [`Publisher`](/template-rust/docs/features/api.md#publisher) returned by `publisher()`.

note

Property and state messages are retained on the broker, so a client connecting after the service started still receives the current property values.

#### Operations[​](#operations "Direct link to Operations")

Operations are published as request messages and awaited:

```
let result = client.say(&message, WhenEnum::Now).await;
```

#### Signals[​](#signals "Direct link to Signals")

Do not emit signals from a client. Subscribe to signals through the [`Publisher`](/template-rust/docs/features/api.md#publisher); incoming signal messages are delivered on the matching `broadcast` channel.

## MQTT service adapter[​](#mqtt-service-adapter "Direct link to MQTT service adapter")

The file `📜hello_service.rs` contains `HelloMqttService`, which wraps a local `Hello` implementation and exposes it over MQTT. It applies incoming operation and property-change requests to your local object and publishes property changes and signals back to clients.

* **Properties** — a change on your local object (or a client request) is published to all clients.
* **Operations** — a request is run on your local object; the result is returned only to the requesting client.
* **Signals** — a signal emitted by your local object is forwarded to all clients.

## Use the adapters[​](#use-the-adapters "Direct link to Use the adapters")

The generated `examples` crate ships ready-to-run `mqtt_server` and `mqtt_client` binaries. The client creates a `rumqttc` `AsyncClient`, hands it to the adapter, and pumps the MQTT event loop so the adapter receives state, property changes and signals:

```
use rumqttc::{AsyncClient, Event, MqttOptions, Packet};

use std::sync::Arc;

use std::time::Duration;



let mut opts = MqttOptions::new("hello-client", "127.0.0.1", 1883);

opts.set_keep_alive(Duration::from_secs(5));

let (mqtt, mut eventloop) = AsyncClient::new(opts, 64);



let client = Arc::new(HelloMqttClient::new(Arc::new(mqtt)));

client.subscribe_topics().await.expect("subscribe to topics");



// Drive the event loop so incoming messages reach the adapter.

let pump = client.clone();

tokio::spawn(async move {

    loop {

        if let Ok(Event::Incoming(Packet::Publish(p))) = eventloop.poll().await {

            pump.handle_message(&p.topic, &p.payload);

        }

    }

});



// Use the client like a local Hello implementation:

let _ = client.say(&Default::default(), WhenEnum::Now).await;
```

Start a broker, then run the two binaries in separate terminals (override the broker port with the `MQTT_PORT` environment variable, default `1883`):

```
mosquitto -p 1883 &

cargo run -p rust_hello_world_examples --bin mqtt_server

cargo run -p rust_hello_world_examples --bin mqtt_client
```

## Tests[​](#tests "Direct link to Tests")

The MQTT feature generates round-trip tests in `📜tests/mqtt_hello_test.rs`, backed by the helper in `📜mqtt_common.rs`. They exercise a real client ↔ service round-trip over a live broker, so they are marked `#[ignore]` and skipped by default. Run them against a broker the way CI does:

```
mosquitto -p 1883 &

cargo test --manifest-path goldenmaster/Cargo.toml -- --ignored
```
