# Android Feature

The `android` feature generates Android Messenger-based service/client pairs for cross-process and cross-app communication. Each API interface gets its own dedicated Android `Service` and client — a module with multiple interfaces generates independent service/client pairs for each.

The client implements the same `IHello` interface as the local [stubs](/template-java/docs/features/stubs.md), so your application code works identically regardless of whether the backend is local or remote. Under the hood, all communication uses Android's [Messenger](https://developer.android.com/reference/android/os/Messenger) framework, a lightweight IPC mechanism built on `Handler` and `Binder`.

info

This feature requires the [api](/template-java/docs/features/api.md) and [stubs](/template-java/docs/features/stubs.md) features. The stubs provide the default backend implementation.

Minimum Android version

This feature requires **API 33 (Android 13 / Tiramisu)** or higher. The generated Messenger IPC code uses the type-safe `Bundle.getParcelable(String, Class<T>)` and `Bundle.getParcelableArray(String, Class<T>)` methods introduced in API 33. All generated modules set `minSdk 33` and `compileSdk 35`.

## Architecture[​](#architecture "Direct link to Architecture")

<!-- -->

*The client app uses `HelloClient` (which implements `IHello`) like any local implementation. Under the hood, property changes, operations, and signals are marshalled as Android `Message` objects via Messenger IPC.*

## Generated Modules[​](#generated-modules "Direct link to Generated Modules")

The feature generates three Gradle modules:

| Module                      | Type            | Purpose                                                      |
| --------------------------- | --------------- | ------------------------------------------------------------ |
| `ioWorld_android_messenger` | Android library | Message types and Parcelable wrappers for IPC serialization  |
| `ioWorld_android_service`   | Android library | Service adapter, provider, starter, and lifecycle controller |
| `ioWorld_android_client`    | Android library | Client that implements `IHello` via Messenger IPC            |

## Messenger Module[​](#messenger-module "Direct link to Messenger Module")

The `ioWorld_android_messenger` module contains the IPC serialization layer. For each struct and enum in your API, `Parcelable` wrappers are generated (e.g. `MessageParcelable`, `WhenParcelable`) along with a `HelloMessageType` enum defining the wire protocol. You do not interact with these types directly — they are used internally by the service adapter and client.

## Service Module[​](#service-module "Direct link to Service Module")

The service module provides the Android `Service` that hosts the backend implementation and handles IPC messages from clients.

### File Overview[​](#file-overview "Direct link to File Overview")

```
📂ioWorld/ioWorld_android_service

 ┣ 📜build.gradle

 ┣ 📜AndroidManifest.xml

 ┗ 📂src/main/java/ioWorld/ioWorld_android_service

   ┣ 📜HelloServiceAdapter.java

   ┣ 📜IHelloServiceProvider.java

   ┣ 📜HelloServiceProvider.java

   ┣ 📜HelloServiceStarter.java

   ┗ 📜HelloBaseServiceLifecycleController.java
```

### HelloServiceAdapter[​](#helloserviceadapter "Direct link to HelloServiceAdapter")

The core Android `Service` class. It bridges the backend `IHello` implementation to IPC clients by:

* Receiving property changes and RPC calls from clients, delegating them to the backend
* Listening for backend events and broadcasting them to all connected clients
* Sending an initial property snapshot when a client registers

### HelloServiceProvider[​](#helloserviceprovider "Direct link to HelloServiceProvider")

Singleton that creates a `HelloService` (from [stubs](/template-java/docs/features/stubs.md)) as the backend:

```
IHello backend = HelloServiceProvider.get().getServiceInstance();
```

You can replace this with a custom `IHelloServiceProvider` to use a different backend.

### HelloServiceStarter[​](#helloservicestarter "Direct link to HelloServiceStarter")

Convenience class for managing the service lifecycle. `start(Context)` creates the backend via `HelloServiceProvider`, starts the Android service, and returns the backend instance. `stop(Context)` stops the service and cleans up:

```
// In your Activity's onCreate or service initialization

HelloService backend = (HelloService) HelloServiceStarter.start(getApplicationContext());



// You can interact with the backend directly — changes are forwarded to all IPC clients

backend.addEventListener(myListener);

backend.setLast(new Message("Hello"));



// In onDestroy or when shutting down

HelloServiceStarter.stop(getApplicationContext());
```

The starter also exposes a `ServiceLifecycleListener` interface to receive connection and binding-death events.

### AndroidManifest[​](#androidmanifest "Direct link to AndroidManifest")

The service module declares the `HelloServiceAdapter` in its `AndroidManifest.xml`:

```
<permission android:name="ioWorld.ioWorld_android_service.PERMISSION_BIND"

    android:protectionLevel="normal" />



<service

    android:name="ioWorld.ioWorld_android_service.HelloServiceAdapter"

    android:enabled="true"

    android:exported="true" />
```

The full generated manifest also includes:

```
<uses-permission android:name="android.permission.FOREGROUND_SERVICE" />

<uses-permission android:name="android.permission.FOREGROUND_SERVICE_DATA_SYNC" />

<uses-permission android:name="android.permission.POST_NOTIFICATIONS" />
```

## Client Module[​](#client-module "Direct link to Client Module")

The client module provides a transparent IPC proxy that implements `IHello`.

### File Overview[​](#file-overview-1 "Direct link to File Overview")

```
📂ioWorld/ioWorld_android_client

 ┣ 📜build.gradle

 ┗ 📂src/main/java/ioWorld/ioWorld_android_client

   ┗ 📜HelloClient.java
```

### HelloClient[​](#helloclient "Direct link to HelloClient")

`HelloClient` extends `AbstractHello` and implements `ServiceConnection`. It provides the same `IHello` interface as the local stubs, but all operations are forwarded to the remote service via Messenger IPC:

```
HelloClient client = new HelloClient(context, "myConnection");



// Bind to a service running in another app

client.bindToService("com.example.serviceapp");



// Wait for ready state

client.addEventListener(new IHelloEventListener() {

    @Override

    public void on_readyStatusChanged(boolean isReady) {

        if (isReady) {

            // Now safe to use the client

            client.setLast(new Message("Hello"));

        }

    }



    @Override

    public void onLastChanged(Message newValue) {

        // Received property change from service

    }



    @Override

    public void onJustSaid(Message msg) {

        // Received signal from service

    }

});
```

**Key behaviors:**

* **`bindToService(packageName)`** — binds to the `HelloServiceAdapter` running in the given package
* **`unbindFromService()`** — disconnects from the service
* **`_isReady()`** — returns `true` when bound and connected; listen for `on_readyStatusChanged` to react
* **Property sync** — on connection, the service sends current property values to synchronize the client
* **Async RPC** — `sayAsync()` returns a `CompletableFuture` that resolves when the service responds; pending calls resolve with `null` on disconnect. If you unbox the result to a primitive type (e.g., `int`), check for `null` first to avoid a `NullPointerException`.

Extern types and class loaders

The generated Parcelable wrappers use `SomeParcelable.class.getClassLoader()` to set a class loader for deserialization. This resolves classes that are statically compiled into the APK, but fails for extern types loaded from dynamic libraries. If your extern types are not on the APK's static classpath, you must provide a custom `ClassLoader` that can resolve them.

## Quick Reference[​](#quick-reference "Direct link to Quick Reference")

**Service app** — start the service and get the backend:

```
HelloService backend = (HelloService) HelloServiceStarter.start(getApplicationContext());

// Interact with backend directly; stop when done:

HelloServiceStarter.stop(getApplicationContext());
```

**Client app** — bind to the service and use the `IHello` interface:

```
HelloClient client = new HelloClient(getApplicationContext(), "main");

client.bindToService("com.example.serviceapp");



// Use after on_readyStatusChanged(true):

client.setLast(new Message("Hello"));

client.sayAsync(new Message("World"), When.Now)

    .thenAccept(result -> Log.i("Client", "say returned: " + result));



// Later:

client.unbindFromService();
```
