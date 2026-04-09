# Stubs

The feature `stubs` adds:

* a semi-featured starting point for your implementation and instantiable interfaces classes
* an implementation for publishers
* a setup for tests
* a thread safe decorator for your interfaces

With the stub feature you'll get an additional `core` folder generated, it contains common functionality used also by other features: Olink or Mqtt. Its content will be explained below.

note

For the basic skeleton implementation you'll find in `📂hello-world\cpp_hello_world\modules\io_world\implementation` the bear minimum classes are the [publisher](/template-cpp17/docs/features/stubs.md#publisher) and [data](/template-cpp17/docs/features/stubs.md#data) from `core` features. For the start focus on them and then explore more functionality.

### File overview for module[​](#file-overview-for-module "Direct link to File overview for module")

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

the following file structure will be generated. The purpose and content of each file is explained below.

```
📂hello-world
 ┣ 📂apigear
 ┣ 📂cpp_hello_world
 ┃ ┣ 📂apigear
 ┃ ┣ 📂examples
 ┃ ┣ 📂modules
 ┃ ┃ ┗ 📂io_world
 ┃ ┃ ┃ ┣ 📂generated
 ┃ ┃ ┃ ┃ ┣ 📂api
 ┃ ┃ ┃ ┃ ┣ 📂core
 ┃ ┃ ┃ ┃ ┃ ┣ 📜CMakeLists.txt
 ┃ ┃ ┃ ┃ ┃ ┣ 📜hello.data.h
 ┃ ┃ ┃ ┃ ┃ ┣ 📜hello.publisher.cpp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜hello.publisher.h
 ┃ ┃ ┃ ┃ ┃ ┣ 📜hello.threadsafedecorator.cpp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜hello.threadsafedecorator.h
 ┃ ┃ ┃ ┃ ┃ ┣ 📜io_world.json.adapter.cpp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜io_world.json.adapter.h
 ┃ ┃ ┃ ┃ ┃ ┗ 📜io_world.test.cpp
 ┃ ┃ ┃ ┣ 📂implementation
 ┃ ┃ ┃ ┃ ┣ 📜CMakeLists.txt
 ┃ ┃ ┃ ┃ ┣ 📜hello.cpp
 ┃ ┃ ┃ ┃ ┣ 📜hello.h
 ┃ ┃ ┃ ┃ ┗ 📜hello.test.cpp
 ...
```

### Implementation[​](#implementation "Direct link to Implementation")

Files `📜hello.h` and `📜hello.cpp` contain the implementation of the `IHello`. The class skeleton:

* adds the properties of the interface as a private class members - with a [HelloData structure](/template-cpp17/docs/features/stubs.md#data)

* implements getters and setters for each property

* owns a [publisher](/template-cpp17/docs/features/stubs.md#publisher) and shares it through the `_getPublisher` method implementation

* provides empty implementation of operation for you to fill the business logic.

  tip

  When adding a logic don't forget to use the publisher each time you want the property change to be shared or the signal to be emitted.

  note

  We generate the import/export statements, here HELLO\_WORLD\_EXAMPLE\_IO\_WORLD\_EXPORT, for all the classes and structs that have an implementation in a *cpp* file and may be used outside of the library.

### Core[​](#core "Direct link to Core")

#### Publisher[​](#publisher "Direct link to Publisher")

Files `📜hello.publisher.cpp` and `📜hello.publisher.h` provide an implementation of a IHelloPublisher (api.md#Publisher). It stores clients of the Hello (either the `IHelloSubscriber`s or callbacks for specific change). When a call of the appropriate publish function is executed on the publisher instance, it informs all of interested clients about the change.

This class is thread safe in a way that adding and removing subscribers (both for full interface or specific notifications) is thread safe. If you use publisher from many threads for notification you need to make sure that `ISubscriber` or the callbacks are thread safe or modify the publisher to use them in thread-safe way. You may also want to take a look at generated [IHello thread safe decorator](/template-cpp17/docs/features/stubs.md#thread-safe-decorator).

#### Data[​](#data "Direct link to Data")

The `📜hello.data.h` contains the helper structure for implementations of Hello. It stores all the properties that an interface has and initializes them to default values.

#### Thread Safe Decorator[​](#thread-safe-decorator "Direct link to Thread Safe Decorator")

Files `📜hello.threadsafedecorator.cpp` and `📜hello.threadsafedecorator.h` provide a wrapper for your `IHello` implementation which can be used to make property access thread safe.

For each property it allows multiple get operations at the same time but only one set. The properties are guarded one by one - so at one time you can write to different properties.

Operations are not guarded by default - the implementation may either be thread safe by design (const, re-entrant) or too complex to simply lock it.

So depending on the logic in your methods you can decide to leave them without any mutexes, add same mechanism as for properties in the implementation file of the Hello interface, or try different solutions like introducing an event queue.

#### Json adapters[​](#json-adapters "Direct link to Json adapters")

Files `📜io_world.json.adapter.cpp` and `📜io_world.json.adapter.h` are generated per whole module. They prepare adapters for structs to easy convert to and from `nlohmann::json`. This is currently used by our implemented protocols for the data packing. With this implementation you use the structures as below

```
Message message = json.get<Message>();
nlohmann::json message = message;
```

### Tests[​](#tests "Direct link to Tests")

For each interface we provide a template for your tests: `📜hello.test.cpp`. We used [Catch2](https://github.com/catchorg/Catch2) for setting up a test skeleton. You can find there instantiating the interface, section with executing methods (no checks) and section with setting a property with check that it actually happen. That is a starting point for your tests.

tip

In case you'll need mocks, `Catch2` goes well along with [trompeloeil](https://github.com/rollbear/trompeloeil).
