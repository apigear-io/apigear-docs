# Features

This guide explains how to use the generated code, what features are available, and their benefits.

info

A feature is a part of the template that generates a specific aspect of the code. For example, the `api` feature generates the core API interfaces and the `stubs` feature generates a stub implementation for the API.

## Get started[​](#get-started "Direct link to Get started")

This template generates Unreal Engine plugins from your API definitions. The generated code integrates seamlessly with both Blueprints and C++.

note

Basic Unreal Engine knowledge is recommended. Familiarity with Unreal's plugin system, Blueprints, and C++ module structure will help you get the most out of the generated code.

### Code generation[​](#code-generation "Direct link to Code generation")

Follow the documentation for [code generation](/docs/guide/quick-start.md) in general and [CLI](/docs/cli/generate.md) or the [Studio](/docs/studio/intro.md) tools. Or try first the [quick start guide](/template-unreal/docs/quickstart.md) which shows how to prepare an API and generate code from it.

tip

For questions regarding the template please go to our [discussions page](https://github.com/orgs/apigear-io/discussions). For feature requests or bug reports please use our [issue tracker](https://github.com/apigear-io/template-unreal/issues).

### Example API[​](#example-api "Direct link to Example API")

The following code snippet contains the *API* definition which is used throughout this guide to demonstrate the generated code and its usage.

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

The template provides features across three layers: **Core** (API and implementations), **Extended** (connectivity and monitoring), and **Infrastructure** (plugin support). These features compose to create a complete plugin architecture:

<!-- -->

*Your application programs against the generated API interfaces. Stubs provide local implementations, OLink and MsgBus connect to remote services, Monitor wraps any implementation for tracing, and the Infrastructure layer provides settings and connection management.*

### Core Features[​](#core-features "Direct link to Core Features")

Core features generate Unreal Engine plugins from your API definition:

* [api](/template-unreal/docs/features/api.md) - generates the core interfaces, data types (structs, enums), and abstract base classes. Provides both Blueprint-compatible interfaces and native C++ access.
* [stubs](/template-unreal/docs/features/stubs.md) - generates ready-to-use implementation stubs as GameInstance Subsystems. Provides a starting point for your business logic and test fixtures for unit testing.

### Extended Features[​](#extended-features "Direct link to Extended Features")

Extended features add connectivity and monitoring capabilities:

* [olink](/template-unreal/docs/features/olink.md) - provides client and server adapters for the [ObjectLink](/docs/protocols/objectlink/intro.md) protocol. Use this to connect your Unreal application to remote services or the ApiGear simulation tools.
* [msgbus](/template-unreal/docs/features/msgbus.md) - provides adapters using Unreal's built-in Message Bus for inter-process communication within the Unreal ecosystem.

> **Choosing between OLink and Message Bus?** See the [comparison guide](/template-unreal/docs/features/msgbus.md#when-to-use-message-bus-vs-olink) for a detailed breakdown.

* [monitor](/template-unreal/docs/features/monitor.md) - generates a middleware layer which logs all API events to the [CLI](/docs/cli/intro.md) or the [Studio](/docs/studio/intro.md).

### Test Features[​](#test-features "Direct link to Test Features")

* `olink_tests` - test fixtures and specs for OLink client/server functionality.
* `msgbus_tests` - test fixtures and specs for Message Bus adapters.

### Internal Features[​](#internal-features "Direct link to Internal Features")

These features are generated automatically when required by other features:

* `plugin` - generates the `{Module}Core` and `{Module}Editor` modules:

  <!-- -->

  * **Core module** (`IoWorldCore`): Settings class, implementation factory, and test utilities
  * **Editor module** (`IoWorldEditor`): Project Settings UI customization

* `apigear` - core ApiGear plugin with connection management, settings, and editor UI

* `apigear_olink` - OLink protocol support with client/host connections

* `apigear_olinkproto` - ObjectLink protocol library

**Module Settings**: When you enable extended features, the Core module's settings class (`UIoWorldSettings`) gains configuration options accessible in Project Settings:

| Setting                     | Feature | Purpose                                                |
| --------------------------- | ------- | ------------------------------------------------------ |
| `TracerServiceIdentifier`   | monitor | Select which backend implementation the monitor traces |
| `OLinkConnectionIdentifier` | olink   | Select which OLink connection the client uses          |
| `MsgBusHeartbeatIntervalMS` | msgbus  | Configure heartbeat interval for service discovery     |

**Test Utilities**: The Core module includes test helpers for writing your own automation tests:

```
#include "IoWorld/Tests/IoWorldTestsCommon.h"

FIoWorldMessage TestMsg = createTestFIoWorldMessage();
TArray<FIoWorldMessage> TestArray = createTestFIoWorldMessageArray();
```

Each feature can be selected using the solution file or via the command line tool.

note

*Features are case sensitive, make sure to always **use lower-case.***

tip

The *meta* feature `all` enables all specified features of the template. If you want to see the full extent of the generated code, `all` is the easiest solution.

## Folder structure[​](#folder-structure "Direct link to Folder structure")

This graph shows the folder structure generated for a module with all features enabled. Each ApiGear module becomes an Unreal plugin.

```
📂ue_project/Plugins
 ┣ 📂ApiGear
 ┃ ┣ 📜apigear.uplugin
 ┃ ┗ 📂Source
 ┃   ┣ 📂ApiGear
 ┃   ┣ 📂ApiGearEditor
 ┃   ┣ 📂ApiGearOLink
 ┃   ┗ 📂ThirdParty
 ┃     ┣ 📂nlohmannJsonLibrary
 ┃     ┗ 📂OLinkProtocolLibrary
 ┣ 📂IoWorld
 ┃ ┣ 📜IoWorld.uplugin
 ┃ ┣ 📂Config
 ┃ ┗ 📂Source
 ┃   ┣ 📂IoWorldAPI
 ┃   ┣ 📂IoWorldCore
 ┃   ┣ 📂IoWorldEditor
 ┃   ┣ 📂IoWorldImplementation
 ┃   ┣ 📂IoWorldMonitor
 ┃   ┣ 📂IoWorldMsgBus
 ┃   ┗ 📂IoWorldOLink
```

note

The module name `io.world` is converted to PascalCase `IoWorld` for Unreal naming conventions. Each feature generates a separate Unreal module within the plugin.
