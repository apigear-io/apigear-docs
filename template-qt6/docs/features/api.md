# API

The feature `api` is the bare minimum for the code generation. What you receive is:

* abstract `QObject` base class for each *interface*
* *enums*
* *structs* with a basic implementation

note

To use the your API in `QML` directly see the [plugin](/template-qt6/docs/features/qmlplugin.md) feature which adds QML wrappers and factory implementation for interfaces, factories for structures and creates a module plugin for the api types.

### File overview for module[​](#file-overview-for-module "Direct link to File overview for module")

With an example API

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

the following file structure will be generated. The purpose and content of each file is explained below.

```
📂hello-world

 ┣ 📂apigear

 ┣ 📂qt_hello_world

 ┃ ┣ 📂apigear

 ┃ ┣ 📂examples

 ┃ ┣ 📂io_world

 ┃ ┃ ┣ 📂api

 ┃ ┃ ┃  ┣ 📜api.cpp

 ┃ ┃ ┃  ┣ 📜api.h

 ┃ ┃ ┃  ┣ 📜iapifactory.h

 ┃ ┃ ┃  ┣ 📜json.adapter.h

 ┃ ┃ ┃  ┗ 📜CMakeLists.txt

 ...
```

### Api[​](#api-1 "Direct link to Api")

Files `📜api.h` and `📜api.cpp` contain the api: interfaces, data structures and enums.

#### Enums[​](#enums "Direct link to Enums")

Each enum is exposed to qml and their metatype is declared with `Q_DECLARE_METATYPE`. For convenience of use each enum has:

* `toEnum` function converts given `quint8` to enum value.
* `QDataSteram` in and out operators for the enum.

#### Structs[​](#structs "Direct link to Structs")

Each struct has its fields exposed for qml

api.h

```
...

struct IO_WORLD_API_EXPORT Message

{

    Q_GADGET

    Q_PROPERTY(QString content MEMBER m_content )

...
```

note

We generate the import/export statements (here IO\_WORLD\_API\_EXPORT) for all the classes and structs that have an implementation in a *cpp* file and may be used outside of the library.

For convenience of use each structure has:

* equality comparison operators
* the `QDataSteram` in and out operators for the generated struct `Message`.

The struct metatype is declared with `Q_DECLARE_METATYPE`. That may not be enough if you want to bind to fields of the struct in qml. In that case we suggest using a [plugin](/template-qt6/docs/features/qmlplugin.md) which provides factory for it.

#### Interfaces[​](#interfaces "Direct link to Interfaces")

Base interface version for Qt template is a QObject Abstract base class, here `AbstractHello`.<br />It contains:

* a pure virtual `getters` and a `setters` for each property

```
   virtual void setLast(const Message& last) = 0;

   virtual Message last() const = 0;
```

* pure virtual functions for each operation

```
virtual int say(const Message& msg, When::WhenEnum when) = 0;
```

* signals: for each api signal and for each api property - on property changed signal

```
signals:

    void justSaid(const Message& msg);

    void lastChanged(const Message& last);
```

### Other[​](#other "Direct link to Other")

`📜 CMakeLists.txt` for building this module, describing it's dependencies, and exposing built package for other features that will use it. `📜 json.adapter.h` prepares adapters for structs to easy read from or write to `nlohmann::json`

```
Message message = json.get<Message>();

nlohmann::json message = message;
```

`📜iapifactory.h` provides an interface for ApiFactory which can produce your interface instances, here the `AbstractHello` instance. It's purpose is to provide the chosen implementation to a QML wrappers. The factory main implementation is provided by the [qmlplugin](/template-qt6/docs/features/qmlplugin.md), which explains its purpose and usage in details. You can also find implementation of factory interface in [stubs](/template-qt6/docs/features/stubs.md), [monitor](/template-qt6/docs/features/monitor.md) and [olink](/template-qt6/docs/features/olink.md) features. They all allow creating different `AbstractHello` backend for QML wrapper.
