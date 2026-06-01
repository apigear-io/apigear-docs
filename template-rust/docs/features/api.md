# API Feature

The feature `api` is the bare minimum for code generation. It generates the trait-based API for your interfaces, the data types (structs and enums) defined in your module, a publisher for property changes and signals, and the shared error and future types. Together with the [core](#data-types-core) feature it produces a self-contained crate that compiles without any transport dependency.

The `api` feature generates:

* a trait for each defined *interface*, with awaitable operations and property accessors
* an ergonomic `_async` companion for every operation
* the `serde`-enabled [data structs and enums](#data-structs-and-enums) defined in your module
* a [`Publisher`](#publisher) per interface, exposing property changes and signals over tokio channels
* the shared [`ApiError` and `ApiFuture`](#apierror-and-apifuture) types

note

Check out the [stubs](/template-rust/docs/features/stubs.md) feature, which provides a ready-to-use implementation of every trait generated here.

### Files overview per module[​](#files-overview-per-module "Direct link to Files overview per module")

Using the example API definition

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

the following file structure is generated inside the module crate. The purpose and content of each file is explained below.

```
📂io_world

 ┣ 📂src

 ┃ ┣ 📂api

 ┃ ┃ ┣ 📜mod.rs              # re-exports for the api module

 ┃ ┃ ┣ 📜api_common.rs       # ApiError + ApiFuture

 ┃ ┃ ┣ 📜data_structs.rs     # module-wide enums/structs (Message, WhenEnum)

 ┃ ┃ ┗ 📜hello.rs            # HelloTrait, HelloTraitAsync, HelloPublisher

 ┃ ┗ 📜lib.rs

 ...
```

For each interface in the module a separate file is generated, like `📜hello.rs`. It contains the interface trait, its async companion trait, and the publisher.

## Interface trait[​](#interface-trait "Direct link to Interface trait")

Every interface becomes a trait that is `Send + Sync`, so an implementation can be shared across threads and `await` points. For the `Hello` interface you get a `HelloTrait`:

```
use crate::api::data_structs::*;

use crate::api::{ApiError, ApiFuture};



pub trait HelloTrait: Send + Sync {

    /// Operations return an awaitable, object-safe `ApiFuture`.

    fn say(

        &self,

        msg: &Message,

        when: WhenEnum,

    ) -> ApiFuture<'_, Result<i32, ApiError>>;



    /// Gets the value of the last property.

    fn last(&self) -> Message;

    /// Sets the value of the last property.

    fn set_last(

        &self,

        last: &Message,

    );



    fn publisher(&self) -> &HelloPublisher;

}
```

The trait has:

* an **operation** for each method in the interface. Operations are object-safe and awaitable: they return an `ApiFuture` (see [below](#apierror-and-apifuture)). Returning a boxed future — instead of using `async fn` directly — keeps the trait object-safe, so it can be used behind `Arc<dyn HelloTrait>`.
* a **getter and setter** for each property (here `last()` / `set_last()`).
* an accessor for the [`Publisher`](#publisher).

note

The trait itself does not contain signals — signal emission and property-change notification are handled by the [`Publisher`](#publisher).

### Async operations[​](#async-operations "Direct link to Async operations")

Calling an operation through the trait returns a future you `await`:

```
let result: Result<i32, ApiError> = object.say(&message, WhenEnum::Now).await;
```

For convenience, every interface also generates an **extension trait** `HelloTraitAsync` with an `_async` companion for each operation. It is provided through a blanket implementation for every implementor — including `dyn HelloTrait` — so it works on a trait object behind an `Arc` without any extra setup:

```
pub trait HelloTraitAsync: HelloTrait {

    fn say_async(

        &self,

        msg: &Message,

        when: WhenEnum,

    ) -> impl std::future::Future<Output = Result<i32, ApiError>> + Send {

        async move { self.say(msg, when).await }

    }

}



impl<T: HelloTrait + ?Sized> HelloTraitAsync for T {}
```

Bring the `_async` trait into scope to call the ergonomic variant:

```
use io_world::api::hello::HelloTrait;

use io_world::api::hello::HelloTraitAsync;



let said = object.say_async(&message, WhenEnum::Now).await?;
```

Both forms do the same work; `say()` returns the boxed `ApiFuture` (useful in object-safe contexts), while `say_async()` reads more naturally at the call site.

## Publisher[​](#publisher "Direct link to Publisher")

The interface trait does not expose signals or change callbacks directly. Instead, each interface gets a `Publisher` struct that broadcasts property changes and signal emissions over [tokio](https://tokio.rs/) channels. Subscribers receive a channel receiver and react to changes asynchronously.

```
use tokio::sync::{watch, broadcast};



pub struct HelloPublisher {

    /// Property changes are delivered over a `watch` channel (latest value).

    pub last_changed: watch::Sender<Message>,

    /// Signals are delivered over a `broadcast` channel (every emission).

    pub just_said: broadcast::Sender<(Message,)>,

}
```

Each property gets a `watch::Sender` named `<property>_changed` (here `last_changed`), and each signal gets a `broadcast::Sender` named after the signal (here `just_said`).

* **Property changes** use a tokio [`watch`](https://docs.rs/tokio/latest/tokio/sync/watch/) channel. A `watch` channel always holds the latest value, so a new subscriber immediately sees the current state. The implementation sends on the channel whenever the property changes.
* **Signals** use a tokio [`broadcast`](https://docs.rs/tokio/latest/tokio/sync/broadcast/) channel, so every subscriber receives every emission. Signal payloads are delivered as a tuple of the signal parameters (here `(Message,)`).

### Subscribe to changes and signals[​](#subscribe-to-changes-and-signals "Direct link to Subscribe to changes and signals")

Subscribe by calling `subscribe()` on the relevant channel sender exposed by `publisher()`:

```
// React to property changes:

let mut last_rx = object.publisher().last_changed.subscribe();

tokio::spawn(async move {

    while last_rx.changed().await.is_ok() {

        let last = last_rx.borrow().clone();

        println!("last property changed: {last:?}");

    }

});



// React to a signal:

let mut said_rx = object.publisher().just_said.subscribe();

tokio::spawn(async move {

    while let Ok((msg,)) = said_rx.recv().await {

        println!("justSaid emitted: {msg:?}");

    }

});
```

note

It is the implementation's responsibility to send on the publisher's channels when a property changes or a signal is emitted. The [stubs](/template-rust/docs/features/stubs.md) feature already does this for you — see the generated default implementation.

## ApiError and ApiFuture[​](#apierror-and-apifuture "Direct link to ApiError and ApiFuture")

The shared `ApiError` and `ApiFuture` types are defined in `📜api_common.rs`, inside the `api` module. They have no transport or IPC dependency, so the `api` and `core` features stay self-contained.

`ApiFuture` is a boxed, pinned, `Send` future — the return type of every trait operation:

```
use std::future::Future;

use std::pin::Pin;



/// A boxed, pinned future returned by async trait operations.

/// Named `ApiFuture` (not `ApiResult`) because it wraps a `Future`, not a `Result`.

pub type ApiFuture<'a, T> = Pin<Box<dyn Future<Output = T> + Send + 'a>>;
```

`ApiError` is a [`thiserror`](https://docs.rs/thiserror)-derived enum covering the failure modes shared by local and IPC implementations:

```
#[derive(Debug, thiserror::Error)]

pub enum ApiError {

    #[error("operation failed: {0}")]

    OperationFailed(String),

    #[error("not connected")]

    NotConnected,

    #[error("serialization error: {0}")]

    Serialization(#[from] serde_json::Error),

    #[error("transport error: {0}")]

    Transport(String),

}
```

Local implementations typically return `Ok(...)`, while the IPC client adapters use `NotConnected` and `Transport` when the remote service is unavailable.

## Data structs and enums[​](#data-structs-and-enums "Direct link to Data structs and enums")

The `api` feature also generates the data types defined in your module — the structs and enums referenced by your interfaces — into `📜src/api/data_structs.rs`. They carry `serde` derives so they can be serialized for the IPC transports. Bring them into scope with `use crate::api::data_structs::*;` (as the generated trait, implementation and adapter files do).

### Structs[​](#structs "Direct link to Structs")

Each struct in your API becomes a Rust struct with `serde` derives:

```
use serde::{Deserialize, Serialize};



#[derive(Debug, Default, Clone, Serialize, Deserialize, PartialEq)]

pub struct Message {

    pub content: String,

}
```

The derives give you, for free:

* `Default` for zero-value construction
* `Clone` and `PartialEq` for copying and comparison
* `Serialize`/`Deserialize` for the IPC transports

### Enums[​](#enums "Direct link to Enums")

Each enum becomes a `#[repr(u8)]` Rust enum with `serde` derives and a `TryFrom<u8>` conversion for decoding wire values:

```
use serde::{Deserialize, Serialize};

use std::convert::TryFrom;



#[repr(u8)]

#[derive(Copy, Clone, Debug, Default, Serialize, Deserialize, PartialEq)]

pub enum WhenEnum {

    #[default]

    Now = 0,

    Soon = 1,

    Never = 2,

}



impl TryFrom<u8> for WhenEnum {

    type Error = ();



    fn try_from(value: u8) -> Result<Self, Self::Error> {

        match value {

            0 => Ok(WhenEnum::Now),

            1 => Ok(WhenEnum::Soon),

            2 => Ok(WhenEnum::Never),

            _ => Err(()),

        }

    }

}
```

The first member is marked `#[default]`, so `WhenEnum::default()` and `Default::default()` resolve to it.

## Data types (core)[​](#data-types-core "Direct link to Data types (core)")

The [`core`](/template-rust/docs/features.md#core-features) feature generates the per-interface support types used for state synchronization and for passing implementations around, under `📂src/core_types/`. It does **not** generate your structs and enums — those come from the [`api`](#data-structs-and-enums) feature above. `core` is enabled automatically when you use [stubs](/template-rust/docs/features/stubs.md) or any extended feature.

For each interface it generates:

* a **property bundle** struct that gathers all of the interface's properties for state sync
* a **shared-reference** type alias and constructor for handing the implementation around as an `Arc`
* a **test helper** that builds a populated instance of each data struct

### Property bundle[​](#property-bundle "Direct link to Property bundle")

The property bundle (`📜src/core_types/hello_data.rs`) collects every property of the interface into one `serde`-enabled struct. The IPC adapters use it to send and receive the full initial state in a single message:

```
use crate::api::data_structs::*;

use serde::{Deserialize, Serialize};



/// Bundles all properties of Hello for state synchronization.

#[derive(Debug, Default, Clone, PartialEq, Serialize, Deserialize)]

pub struct HelloData {

    pub last: Message,

}
```

### Shared reference[​](#shared-reference "Direct link to Shared reference")

A type alias and constructor (`📜src/core_types/hello_shared.rs`) let you hand a trait object around as an `Arc`:

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

note

`new_shared_hello()` builds the default [stub](/template-rust/docs/features/stubs.md) implementation, so the shared-reference helper is only generated when `stubs` is enabled. The `core` feature also generates a `📜test_helpers.rs` with a `fill_test_*` function per data struct, used by the generated tests.
