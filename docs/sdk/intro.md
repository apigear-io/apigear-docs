# SDK Templates

ApiGear provides a collection of SDK templates that transform your API definitions into production-ready code for various programming languages and platforms.

Each template generates clean interfaces, data structures, and build system support based on your API modules. Templates can be configured with different features and scale with your project as you add more API modules.

## Available Templates[​](#available-templates "Direct link to Available Templates")

### C++17[​](#c17 "Direct link to C++17")

Modern C++17 SDK with CMake and Conan support. Generates abstract interfaces, data structures, and full build infrastructure.

**Features:** API interfaces, scaffolding, OLink protocol, MQTT support, monitoring

[View C++17 Documentation →](/template-cpp17/docs/intro.md)

***

### C++14[​](#c14 "Direct link to C++14")

C++14 compliant SDK for projects requiring older compiler support. Currently in maintenance mode.

**Features:** API interfaces, scaffolding, CMake, Conan, test support

[View C++14 Documentation →](/template-cpp14/docs/intro.md)

***

### Qt6[​](#qt6 "Direct link to Qt6")

Qt6/QML SDK generating CMake-based libraries and QtQuick plugins. Ideal for Qt-based desktop and embedded applications.

**Features:** API interfaces, scaffolding, QML integration, OLink protocol, monitoring

[View Qt6 Documentation →](/template-qt6/docs/intro.md)

***

### Unreal Engine[​](#unreal-engine "Direct link to Unreal Engine")

Unreal Engine 5 SDK generating Blueprints and C++ classes. Perfect for game development and interactive applications.

**Features:** API interfaces, scaffolding, Blueprint support, OLink protocol, monitoring

[View Unreal Documentation →](/template-unreal/docs/intro.md)

***

### Python[​](#python "Direct link to Python")

Python SDK generating modules with clean interfaces and type hints. Suitable for backend services and scripting.

**Features:** API interfaces, scaffolding, test support, OLink protocol

[View Python Documentation →](/template-python/docs/intro.md)

***

## Template Features[​](#template-features "Direct link to Template Features")

All templates support common features that can be enabled or disabled:

| Feature      | Description                                            |
| ------------ | ------------------------------------------------------ |
| **API**      | Generates interface definitions and data structures    |
| **Scaffold** | Creates a complete project with build system and tests |
| **OLink**    | Enables remote object communication protocol           |
| **MQTT**     | Adds MQTT messaging support (select templates)         |
| **Monitor**  | Integrates with ApiGear monitoring tools               |

## Getting Started[​](#getting-started "Direct link to Getting Started")

1. Define your API using the [ObjectAPI format](/docs/objectapi/intro.md)
2. Create a [solution file](/docs/guide/quick-start.md#solution-file) specifying your template
3. Run the code generator using [CLI](/docs/cli/intro.md) or [Studio](/docs/studio/intro.md)
4. Follow the generated README for build and integration instructions
