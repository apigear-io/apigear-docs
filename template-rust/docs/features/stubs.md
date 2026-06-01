# Stubs

The feature `stubs` turns the bare [api](/template-rust/docs/features/api.md) traits into a runnable workspace. It adds:

* a ready-to-use default implementation of every interface trait — a good starting point for your own logic
* the workspace `Cargo.toml` and `rustfmt.toml`
* the `examples` crate with runnable programs
* per-interface unit tests

note

The `stubs` feature requires `api` and `core`. Enabling it pulls them in automatically.

### File overview[​](#file-overview "Direct link to File overview")

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
📂rust_hello_world

 ┣ 📜Cargo.toml                          # workspace manifest (system scope)

 ┣ 📜rustfmt.toml

 ┣ 📂examples                            # runnable example programs (system scope)

 ┃ ┣ 📜Cargo.toml

 ┃ ┗ 📂src

 ┃ ┃ ┣ 📜main.rs                         # local in-process example

 ┃ ┃ ┗ 📂bin                             # IPC client/server binaries

 ┃ ┗ ...

 ┗ 📂io_world

 ┃ ┣ 📜Cargo.toml                        # module crate manifest

 ┃ ┣ 📂src

 ┃ ┃ ┣ 📜lib.rs

 ┃ ┃ ┗ 📂implementation

 ┃ ┃ ┃ ┣ 📜mod.rs

 ┃ ┃ ┃ ┗ 📜hello.rs                      # default Hello implementation

 ┃ ┗ 📂tests

 ┃ ┃ ┗ 📜implementation_hello_test.rs    # unit tests for Hello
```

## Implementation[​](#implementation "Direct link to Implementation")

The file `📜implementation/hello.rs` contains the default implementation of `HelloTrait`. It is a regular struct that:

* stores each property behind a [`parking_lot::RwLock`](https://docs.rs/parking_lot) for interior mutability, so the methods take `&self` (matching the object-safe trait) yet can still mutate state
* owns a [`HelloPublisher`](/template-rust/docs/features/api.md#publisher) and returns it through `publisher()`
* implements the property getters and setters, sending on the publisher's channel on every actual change
* provides a default body for each operation for you to fill with your business logic

```
use crate::api::hello::HelloTrait;

use crate::api::data_structs::*;

use crate::api::{ApiError, ApiFuture};

use crate::api::hello::HelloPublisher;

use parking_lot::RwLock;



pub struct Hello {

    last: RwLock<Message>,

    publisher: HelloPublisher,

}



impl Default for Hello {

    fn default() -> Self {

        Self { last: RwLock::new(Default::default()), publisher: Default::default() }

    }

}



impl HelloTrait for Hello {

    fn say(

        &self,

        _msg: &Message,

        _when: WhenEnum,

    ) -> ApiFuture<'_, Result<i32, ApiError>> {

        // Fill in your business logic here.

        Box::pin(async move { Ok(Default::default()) })

    }



    fn last(&self) -> Message {

        self.last.read().clone()

    }

    fn set_last(

        &self,

        last: &Message,

    ) {

        let new_val = last.clone();

        let mut value = self.last.write();

        if *value == new_val {

            return; // skip notification if the value did not change

        }

        *value = new_val.clone();

        // Notify subscribers of the change.

        let _ = self.publisher.last_changed.send(new_val);

    }



    fn publisher(&self) -> &HelloPublisher {

        &self.publisher

    }

}
```

tip

When adding your own logic, remember to send on the publisher's channels each time you want a property change to be shared or a signal to be emitted — just like the generated setters do.

note

The setter skips the notification when the new value equals the current one, so subscribers are only woken on a real change.

### Shared constructor[​](#shared-constructor "Direct link to Shared constructor")

Alongside each implementation, the [core](/template-rust/docs/features/api.md#data-types-core) feature generates a shared type alias and constructor in `📜src/core_types/hello_shared.rs`, so you can hand a trait object around as an `Arc`:

```
use std::sync::Arc;

use crate::api::hello::HelloTrait;

use crate::implementation::hello::Hello;



/// Shared reference to a Hello implementation.

pub type SharedHello = Arc<dyn HelloTrait>;



/// Creates a new shared Hello with the default implementation.

pub fn new_shared_hello() -> SharedHello {

    Arc::new(Hello::default())

}
```

This `Arc<dyn HelloTrait>` is exactly what the [monitor](/template-rust/docs/features/monitor.md), [olink](/template-rust/docs/features/olink.md), [mqtt](/template-rust/docs/features/mqtt.md) and [nats](/template-rust/docs/features/nats.md) features wrap, so the same implementation can be used locally and exposed over the network.

## The examples crate[​](#the-examples-crate "Direct link to The examples crate")

The `📂examples` crate is generated once per workspace (system scope). Its `src/main.rs` instantiates every interface's default implementation in-process and exercises it — calling the first operation through the `_async` companion, setting each property, and reporting how many signals are available through the publisher. Run it with:

```
cargo run -p rust_hello_world_examples
```

The `examples/src/bin/` folder additionally contains `*_server` and `*_client` binaries for each IPC transport. They are documented with the [olink](/template-rust/docs/features/olink.md), [mqtt](/template-rust/docs/features/mqtt.md) and [nats](/template-rust/docs/features/nats.md) features.

## Build on the stub[​](#build-on-the-stub "Direct link to Build on the stub")

The default implementation is the recommended starting point. A typical workflow:

1. Generate with the `stubs` feature (and any IPC features you need).
2. Fill in the operation bodies in `📂implementation/*.rs` with your logic.
3. Send on the publisher's signal channels wherever your logic emits a signal.
4. Use your implementation locally, or wrap it with a [monitor](/template-rust/docs/features/monitor.md) decorator or an IPC service adapter to share it over the network.

note

Set `force: false` in your solution file for the `stubs` target if you don't want your filled-in implementations overwritten on regeneration. The [api](/template-rust/docs/features/api.md) and [core](/template-rust/docs/features/api.md#data-types-core) files are always regenerated.

## Tests[​](#tests "Direct link to Tests")

For each interface a unit test file is generated, like `📜tests/implementation_hello_test.rs`. It instantiates the default implementation and exercises each operation through both the `ApiFuture` form and the `_async` companion. These tests run as part of `cargo test` (no broker required) and are a starting point for your own tests:

```
#[tokio::test]

async fn test_say() {

    let test_object = Hello::default();

    let result = test_object.say(&Default::default(), Default::default()).await;

    assert!(result.is_ok());

    let result_async = test_object.say_async(&Default::default(), Default::default()).await;

    assert!(result_async.is_ok());

}
```
