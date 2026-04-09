# QML Plugin

With this feature you can use a qml version of your interface as a \[Qml plugin]\(<https://doc.qt.io/qtcreator/creator-qml-modules-with-plugins.html>. It provides qml -available version of you interfaces and factory implementation for interfaces and factories for structures. It creates a qml module for your interface.

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
 ┃ ┃ ...
 ┃ ┃ ┣ 📂qmlplugin
 ┃ ┃ ┃  ┣ 📜apifactory.cpp
 ┃ ┃ ┃  ┣ 📜apifactory.h
 ┃ ┃ ┃  ┗ 📜CMakeLists.txt
 ┃ ┃ ┃  ┣ 📜qml_api.cpp
 ┃ ┃ ┃  ┣ 📜qml_api.h
 ┃ ┃ ┃  ┣ 📜qmlhello.cpp
 ┃ ┃ ┃  ┣ 📜qmlhello.h
```

### QML API[​](#qml-api "Direct link to QML API")

To avoid possible namespace collision between different modules we use `QML_NAMED_ELEMENT()` with module name and element name for all registering objects, like e.g. `QML_NAMED_ELEMENT(IoWorldWhen)` for `When` enum.

Files `📜qml_api.h` and `📜qml_api.cpp` contain:

* the enum wrapper for enum registration, which adds only QML macros for registering enum from `api` library.

```
struct ForeignWhen : public QObject
{
    Q_OBJECT
    QML_FOREIGN(When)
    QML_NAMED_ELEMENT(IoWorldWhen)
    QML_UNCREATABLE("This is enum class")
    QML_ADDED_IN_VERSION(1,0)
};
```

* the factory for uncreatable otherwise in QML structures

```
class IO_WORLD_QML_EXPORT MessageFactory : public QObject {
    Q_OBJECT
    QML_ADDED_IN_VERSION(1,0)
    QML_NAMED_ELEMENT(IoWorldMessageFactory)
    QML_SINGLETON
public:
    Q_INVOKABLE io_world::Message create(QString in_content);
};
```

All factories are `QML_SINGLETONS`, so you don't have to create any instance of it, just call `var myInstance = IoWorldMessageFactory.create(...)` in your qml code. The create function requires input parameters for all members of the created structure.

note

The qml plugin uses the version information form helloworld.module.yaml to register types, both with the `QML_ADDED_IN_VERSION` and with `qt_add_qml_module` in CMakeLists.txt. Use this version when importing your module in qml, here `import io_world 1.0`

### QML Wrappers[​](#qml-wrappers "Direct link to QML Wrappers")

Files `📜qmlhello.h` and `📜qmlhello.cpp` contain a qml wrapper for the `Hello` interface.<br />The qml wrapper requires providing an implemented `AbstractHello` instance. For that we use the factory described in \[api] module with `📜iapifactory.h` and implemented in this module in (`📜apifactory.h`, `📜apifactory.cpp`). The functionality is explained [below](/template-qt6/docs/features/qmlplugin.md#providing-backend-to-qml-wrapper).

The QML wrapper (simplified version)

qmlhello.h

```
class IO_WORLD_QML_EXPORT QMLHello : public AbstractHello
{
    Q_OBJECT
    QML_NAMED_ELEMENT(IoWorldHello)
    ...
    Q_PROPERTY(Message last READ last WRITE setLast NOTIFY lastChanged)
    ...
    Q_INVOKABLE int say(const Message& msg, When::WhenEnum when) override;
    ...
Q_SIGNALS:
    void lastChanged(const Message& last);
}
```

The qml wrapper makes the interface usable from qml:<br />Line 6 shows exposed properties, with emitting signal on property changed from qml (`NOTIFY lastChanged`) - hence overriding signal for property changed (line 11).<br />Line 8 shows the function exposed as a callable from qml.<br />The wrapper forwards the calls to backend and all the signals from backend to qml wrapper.

caution

The signals defined in the api shall be emitted by the backend and handled in qml, not the other way around. When the signal is emitted in qml, it won't reach the backend implementation.

To use QMLHello you just need to create an instance of it in your QML code with a proper name (the one used in `QML_NAMED_ELEMENT`):

```
import QtQuick 2.15
import QtQuick.Layouts 1.2
import io_world 1.0

ApplicationWindow {
    id: appWindow
    visible: true
    width: 300
    height: 300

    IoWorldHello { id: qmlIoWorldHello }
```

### Providing backend to QML Wrapper.[​](#providing-backend-to-qml-wrapper "Direct link to Providing backend to QML Wrapper.")

The `QmlHello` is instantiated in qml without any handle to get or set the backend. Therefore, the global `ApiFactory` class of `IApiFactory` type is added to provide a flexible and extensible way to create it. The `QmlHello` class creates the `Hello` backend object by itself using the global `ApiFactory`. By providing your `IApiFactory` implementation, you will be able to use a `Hello` backend of your choice.

Here is an example code snippet that shows how to prepare your `IApiFactory`

io\_world/customfactory.h

```
#pragma once

#include "io_world/api/iapifactory.h"
// #include "your CustomHello header file"
#include <QtCore>

class CustomFactory : public QObject, public IApiFactory
{
public:
    CustomFactory(..., QObject *parent = nullptr); //provide any extra resources your factory needs.

    std::shared_ptr<AbstractHello> createHello(QObject *parent = nullptr) override
    {
        return make_shared<CustomHello>(...); // provide any resource your CustomHello needs.
    }
};
```

and set in code

main.cpp

```
#include "io_world/api/apifactory.h"
#include "io_world/customfactory.h"

#include <QtCore>
#include <QGuiApplication>
#include <QQmlApplicationEngine>

int main(int argc, char *argv[]){

    io_world::CustomFactory io_worldFactory();
    // Setting the CustomFactory as a global factory. From now, each qml object will create backend with it.
    io_world::ApiFactory::set(&io_worldFactory); 

    // Starting your application after setting the factory.
    const QUrl url(QStringLiteral("qrc:/main.qml"));
    QGuiApplication app(argc, argv);
    QQmlApplicationEngine engine;

    engine.load(url);
    ...
```

this way, on every `QmlHello` instantiation, your `CustomFactory::createHello` is called, and the returned object is used by `QmlHello`.

note

You can check the `qml example` or factories provided by other features. For instance [olink](/template-qt6/docs/features/olink.md).

caution

Your IApiFactory implementation needs to be set to `ApiFactory` once, before the QML file is loaded.

### Paths[​](#paths "Direct link to Paths")

If you run your application outside of *Qt Creator* you need to add the import paths (paths where the plugins are) to runtime. You can either set the QML\_IMPORT\_PATH and QML2\_IMPORT\_PATH environment variables - for ad-hoc import paths (for debugging or testing) or use the `QQmlEngine::addImportPath()` function for fixed import paths that should always be available.

```
    QGuiApplication app(argc, argv);
    QQmlApplicationEngine engine;
    app.addLibraryPath(the-directory);
```

Usually the plugins are located in your `CMAKE_BINARY_DIR` in the target folder. In our example code that would be "your-build-dir/io/world/qmlplugin" folder.

Read more on [import paths](https://doc.qt.io/qt-6/qtqml-syntax-imports.html#qml-import-path)
