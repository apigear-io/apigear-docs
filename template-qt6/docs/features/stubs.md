# Stubs

The feature `stubs` adds:

* a semi-featured starting point for your implementation a instantiable classes for your Interfaces.
* the factory, that produces this implementation stubs (for QMLWrapper)
* a setup for tests.

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
 ┃ ┃ ┣ 📂implementation
 ┃ ┃ ┃ ┣ 📂tests
 ┃ ┃ ┃ ┃ ┣ 📜CMakeLists.txt
 ┃ ┃ ┃ ┃ ┣ 📜test_hello.cpp
 ┃ ┃ ┃ ┃ ┗ 📜test_hello.h
 ┃ ┃ ┃ ┣ 📜CMakeLists.txt
 ┃ ┃ ┃ ┣ 📜factory.cpp
 ┃ ┃ ┃ ┣ 📜factory.h
 ┃ ┃ ┃ ┣ 📜hello.cpp
 ┃ ┃ ┃ ┗ 📜hello.h
 ...
```

### The Stub[​](#the-stub "Direct link to The Stub")

Files `📜hello.h` and `📜hello.cpp` contain the implementation of the `AbstractHello`. The class skeleton:

* adds the properties of the interface as a private class members - here `Message m_last`
* initializes them with default values in ctor.
* defines getters and setters for each property
* provides empty implementation of operation to implement the business logic.

note

We generate the import/export statements - here IO\_WORLD\_IMPL\_EXPORT - for all the classes and structs that have an implementation in a *cpp* file and may be used outside of the library.

### Factory[​](#factory "Direct link to Factory")

Factory of stub is defined in `📜factory.h` and `📜factory.cpp` This factory is necessary, when you want to provide this stub implementation to the QML Wrapper. See [this](/template-qt6/docs/features/qmlplugin.md#providing-backend-to-qml-wrapper) api section for full information.

Also have in mind, that using this version of provided pair "factory - stub", you will not have any handle to interact with a created stub from code. Only changes and interaction will be possible from QML. You could create your version of a factory which also registers the objects to some kind of global registry, which you're able to reach from code.

### Test[​](#test "Direct link to Test")

For each interface we provide a template for your tests: pair of `📜test_hello.h` and `📜test_hello.cpp` files with a test class for the interface. It contains 3 kinds of init methods: before each test cases is executed, before first test case is executed and one to create a global data table for tests; For clean up there are 2 methods: one called after each test and one called after last test case is called. There are also slots - initial dummy tests, one for each operation and property.
