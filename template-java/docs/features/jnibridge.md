# JNI Bridge Feature

The `jnibridge` feature generates Java classes that bridge the API to native C++ code via JNI (Java Native Interface). This enables native applications — such as Unreal Engine — to use the generated API through the Android service/client architecture.

info

This feature requires the [api](/template-java/docs/features/api.md), [stubs](/template-java/docs/features/stubs.md), and [android](/template-java/docs/features/android.md) features. It provides both a JNI-backed service implementation and a JNI-forwarding client.

note

The JNI bridge files are generated as standalone Java files without a Gradle build script, since they are typically integrated into a host build system such as Unreal Engine's build pipeline.

## Overview[​](#overview "Direct link to Overview")

The JNI bridge provides two integration points:

* **JNI Service** — a backend implementation where all operations are delegated to native C++ code via JNI. Use this when the business logic lives in native code.
* **JNI Client** — wraps the `HelloClient` (from the [android](/template-java/docs/features/android.md) feature) and forwards all events to native code via JNI callbacks. Use this when native code needs to consume the API as a client.

<!-- -->

## JNI Service[​](#jni-service "Direct link to JNI Service")

The JNI service module provides a backend implementation where native C++ code handles all API operations.

### File Overview[​](#file-overview "Direct link to File Overview")

```
📂ioWorld/ioWorldjniservice

 ┣ 📜HelloJniService.java

 ┣ 📜HelloJniServiceProvider.java

 ┗ 📜HelloJniServiceStarter.java
```

### HelloJniService[​](#hellojniservice "Direct link to HelloJniService")

Extends `AbstractHello` and delegates all property access and operations to `private native` methods (`nativeSetLast`, `nativeGetLast`, `nativeSay`). Your C++ implementation provides the actual logic.

Property access is **synchronous and pass-through** — every `getLast()` and `setLast()` call blocks until the native method returns. There is no Java-side property cache. Async operations use a **single-thread executor**, guaranteeing that all async calls are processed in order.

The native code can call back into Java to emit events:

* **`onLastChanged(Message)`** / **`onJustSaid(Message)`** — forward to all listeners (including the `HelloServiceAdapter` if active)
* **`nativeServiceReady(boolean)`** — sets the ready-state flag

### HelloJniServiceProvider[​](#hellojniserviceprovider "Direct link to HelloJniServiceProvider")

Singleton that extends `HandlerThread` and implements `IHelloServiceProvider`. Mirrors `HelloServiceProvider` but creates a `HelloJniService` instead of `HelloService`:

```
AbstractHello backend = HelloJniServiceProvider.get().getServiceInstance();
```

### HelloJniServiceStarter[​](#hellojniservicestarter "Direct link to HelloJniServiceStarter")

Convenience class for managing the service lifecycle with the JNI backend. Like `HelloServiceStarter`, `start(Context)` creates the backend, starts the Android service, and returns the backend instance. `stop(Context)` stops the service:

```
// From native code via JNI

HelloJniService backend = (HelloJniService) HelloJniServiceStarter.start(context);



// Later

HelloJniServiceStarter.stop(context);
```

Connection status changes trigger a native callback:

```
public native void nativeOnAndroidServiceConnectionStatusChanged(boolean isConnected);
```

## JNI Client[​](#jni-client "Direct link to JNI Client")

The JNI client wraps `HelloClient` and forwards all events to native code via JNI callbacks.

### File Overview[​](#file-overview-1 "Direct link to File Overview")

```
📂ioWorld/ioWorldjniclient

 ┗ 📜HelloJniClient.java
```

### HelloJniClient[​](#hellojniclient "Direct link to HelloJniClient")

Use this from C++ to consume the API as a client. The JNI client wraps `HelloClient` and exposes methods that native code can call via JNI:

```
// Called from native to connect/disconnect

public boolean bind(Context context, String packageName, String connectionID);

public void unbind();



// Async RPC with caller-generated callId for native correlation

public void sayAsync(String callId, Message msg, When when);
```

All property changes, signals, and RPC results are forwarded to native via the callbacks listed in the table below.

### Async RPC correlation[​](#async-rpc-correlation "Direct link to Async RPC correlation")

Unlike the standard `HelloClient` which uses `CompletableFuture`, the JNI client uses a **string-based `callId`** for async RPC correlation. A string-based `callId` is simpler than correlating Java `CompletableFuture` objects across the JNI boundary.

The flow works as follows:

1. Native code generates a unique ID (e.g., a GUID) and calls `sayAsync(callId, msg, when)` via JNI
2. The JNI client forwards the call to the underlying `HelloClient` and stores the `callId`
3. When the result arrives, the JNI client calls `nativeOnSayResult(result, callId)` back to native code
4. Native code matches the `callId` to the original request and fulfills the corresponding promise

```
// Native side: initiate an async call with a unique ID

FGuid callId = FGuid::NewGuid();

jstring jCallId = env->NewStringUTF(TCHAR_TO_UTF8(*callId.ToString(EGuidFormats::Digits)));

env->CallVoidMethod(jniClient, sayAsyncMethodID, jCallId, jMsg, jWhen);

// Store callId → promise mapping



// Later, Java calls back:

// nativeOnSayResult(int result, String callId)

// → parse callId, look up the matching promise, fulfill it with the result
```

## Usage from Native Code[​](#usage-from-native-code "Direct link to Usage from Native Code")

The JNI service is designed to be driven from native C++ code. Your native application is responsible for the full lifecycle: starting the Java service, providing the backend logic via native method implementations, forwarding events back to Java, and stopping the service on shutdown.

Threading

All native method calls (`nativeSetLast`, `nativeGetLast`, `nativeSay`, etc.) arrive on a **dedicated JNI thread**, not on your application's main thread. Your native implementations must account for this — use appropriate synchronization when accessing shared state, and dispatch to the correct thread if your framework requires it (e.g., the game thread in Unreal Engine). The same applies to JNI callbacks from the client side (`nativeOnLastChanged`, `nativeOnSayResult`, etc.).

### Service lifecycle[​](#service-lifecycle "Direct link to Service lifecycle")

From native code, use JNI to call `HelloJniServiceStarter.start(context)` and `stop(context)`:

1. **Startup** — find the `HelloJniServiceStarter` Java class and call its static `start` method, passing the Android activity context. This creates the `HelloJniService`, starts the Android service, and returns the Java service instance. Store a global reference to it.
2. **Ready** — once your native backend is initialized, call `nativeServiceReady(true)` on the Java instance to signal that the service is ready.
3. **Shutdown** — call `nativeServiceReady(false)`, then call `HelloJniServiceStarter.stop(context)` and release the Java global reference.

### Implementing native methods[​](#implementing-native-methods "Direct link to Implementing native methods")

Your C++ code must provide JNI function implementations for all native methods declared in `HelloJniService`. When Java calls `nativeSetLast(Message)`, `nativeGetLast()`, or `nativeSay(Message, When)`, your native implementation handles the actual logic:

```
// Example: property set — Java calls this when a client sets the property

JNI_METHOD void Java_ioWorld_ioWorldjniservice_HelloJniService_nativeSetLast(

    JNIEnv* Env, jclass Clazz, jobject msg)

{

    // Convert Java Message to native type, then delegate to your backend

    auto backend = getBackendService();

    if (backend) {

        backend->SetLast(convertFromJava(Env, msg));

    }

}
```

### Forwarding events to Java[​](#forwarding-events-to-java "Direct link to Forwarding events to Java")

When your native backend changes a property or emits a signal, call back into Java using cached JNI method IDs. At startup, cache the method IDs for `onLastChanged`, `onJustSaid`, and `nativeServiceReady`:

```
// Cache method IDs during initialization

jclass serviceClass = env->FindClass("ioWorld/ioWorldjniservice/HelloJniService");

jmethodID onLastChangedID = env->GetMethodID(serviceClass, "onLastChanged",

    "(LioWorld/ioWorld_api/Message;)V");



// Later, when a property changes in native code:

env->CallVoidMethod(javaServiceInstance, onLastChangedID, javaMessageObj);
```

This ensures that property changes and signals originating in native code are forwarded through the Java service to all connected IPC clients.

tip

The [Unreal Engine template](https://github.com/apigear-io/template-unreal) generates the complete C++ JNI adapter automatically — including JNI method caching, native method implementations, event forwarding, and thread-safe lifecycle management. If you use Unreal Engine, you do not need to write any of this by hand.

## Native Method Summary[​](#native-method-summary "Direct link to Native Method Summary")

### Service-side native methods[​](#service-side-native-methods "Direct link to Service-side native methods")

| Method                                                   | Direction  | Purpose                            |
| -------------------------------------------------------- | ---------- | ---------------------------------- |
| `nativeSetLast(Message)`                                 | Java → C++ | Delegate property set to native    |
| `nativeGetLast()`                                        | Java → C++ | Delegate property get to native    |
| `nativeSay(Message, When)`                               | Java → C++ | Delegate operation to native       |
| `nativeOnAndroidServiceConnectionStatusChanged(boolean)` | Java → C++ | Notify native of service lifecycle |

### Client-side native methods[​](#client-side-native-methods "Direct link to Client-side native methods")

| Method                                                                          | Direction  | Purpose                           |
| ------------------------------------------------------------------------------- | ---------- | --------------------------------- |
| `nativeOnLastChanged(Message)`                                                  | Java → C++ | Forward property change to native |
| `nativeOnJustSaid(Message)`                                                     | Java → C++ | Forward signal to native          |
| `nativeOnSayResult(int, String)`                                                | Java → C++ | Forward RPC result to native      |
| `nativeAsyncOperationFailed(String callId, String errorMessage, int errorCode)` | Java → C++ | Forward RPC failure to native     |
| `nativeIsReady(boolean)`                                                        | Java → C++ | Forward ready state to native     |

note

The `nativeOn{Op}Result` callbacks and `nativeAsyncOperationFailed` are only generated for interfaces that define at least one operation. Interfaces with only properties and signals will not include these callbacks or their associated imports.
