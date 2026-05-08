# Template Java

This is the documentation for the *Java* template for the [ApiGear](/docs/guide/quick-start.md) code generator.

It generates a complete Java and Android SDK from your API definitions, including:

* Java interfaces, enums, structs, and abstract base classes
* Stub implementations with default behavior
* Android service/client architecture with Messenger-based IPC
* JNI bridge for native C++ integration

## When to use this template[​](#when-to-use-this-template "Direct link to When to use this template")

This template is designed for Android systems where multiple apps communicate through shared APIs — a common pattern in automotive infotainment, IoT gateways, and other embedded Android platforms. In these systems, a service app hosts the business logic (or delegates to native C++ for performance-critical work), and one or more client apps bind to it over IPC using the same interface, as if the call were local.

Without code generation, building this architecture means hand-writing Android Service boilerplate, Messenger message handling, Parcelable serialization, property synchronization, and — if native code is involved — JNI bindings for every interface. The template generates all of it from a single API definition.

Use this template when you need to:

* **Share APIs between Android apps** — The template generates a Messenger-based service/client architecture that handles cross-process IPC. Each API interface gets its own independent service and client pair, so you can compose your system from modular, separately deployable components. Application code works identically whether the backend is local or remote.
* **Bridge native C++ code into Android** — The JNI bridge lets native applications (such as Unreal Engine running on Android) participate in the service/client architecture without writing JNI boilerplate by hand. The service app can delegate directly to a C++ implementation while exposing the same Java interface to all clients.
* **Generate a complete, build-ready project** — The output is a Gradle multi-module project with proper dependency management. Generated code covers Parcelable serialization, Messenger setup, service binding, async RPC correlation, and property change notifications — the kind of boilerplate that is tedious to write and error-prone to maintain by hand.
* **Define APIs once, generate the plumbing** — Pure Java API types (interfaces, enums, structs) can be used in any Java project. The stubs, Android, and JNI layers require the Android SDK and are optional features you enable only when you need them.

tip

If you only need Java interfaces and data types without Android or JNI integration, you can generate just the `api` and `stubs` features. See [Features](/template-java/docs/features.md) for the full list.

## Requirements[​](#requirements "Direct link to Requirements")

The recommended way to build and develop with the generated code is **Android Studio**, which manages the Android SDK, Gradle, and JDK automatically.

For command-line or CI builds, the generated project requires:

* **JDK 17** or later
* **Gradle 8.7+**
* **Android SDK** with compileSdk 35

The minimum supported Android version is **API 33 (Android 13 / Tiramisu)**.

Java version details

The build toolchain requires JDK 17 because the Android Gradle Plugin 8.5.2 depends on it. The generated source code itself targets **Java 11** (`sourceCompatibility = JavaVersion.VERSION_11`) and uses no Java 17 language features. This means the compiled bytecode is Java 11-compatible, while the build machine must have JDK 17 installed.

Android 13 (API 33) natively supports Java 11 library APIs. Newer Java language features like records (Java 16), sealed classes (Java 17), and text blocks (Java 15) could technically be used with minSdk 33 — AGP desugars them into compatible bytecode — but the generated code does not use them.

## Documentation[​](#documentation "Direct link to Documentation")

* [Quick-Start](/template-java/docs/quickstart.md?current-template=template-java) is the easiest way to get started
* [Features](/template-java/docs/features.md) explains the available code generator features, what code is generated, and how to use it
