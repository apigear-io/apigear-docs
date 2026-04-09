# API Feature

The feature `api` is the bare minimum for code generation. The feature will generate:

* core behavioral API for the defined *interfaces*
* interfaces for [publisher](/template-cpp14/docs/features/api.md#publisher) and [subscriber](/template-cpp14/docs/features/api.md#subscriber) tailored for each interface
* Enumerations for the defined *enums*
* Data structured with a core implementation for the defined *structs*

note

Check out the [stubs](/template-cpp14/docs/features/stubs.md) feature which provides fully functional implementation for the publisher.

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

the following file structure will be generated inside the target folder. The purpose and content of each file is explained below.

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
 ┃ ┃ ┃ ┃ ┃ ┣ 📜CMakeLists.txt
 ┃ ┃ ┃ ┃ ┃ ┣ 📜common.h
 ┃ ┃ ┃ ┃ ┃ ┣ 📜datastructs.api.cpp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜datastructs.api.h
 ┃ ┃ ┃ ┃ ┃ ┣ 📜hello.api.h
 ┃ ┃ ┃ ┃ ┃ ┗ 📜io_world.h
 .. .
```

### Enums and Structures[​](#enums-and-structures "Direct link to Enums and Structures")

Files `datastructs.api.h` and `datastructs.api.cpp` contain core data structures and enumerations used in your module.

#### Enums[​](#enums "Direct link to Enums")

Inside the `datastructs.api.h` you will find all the enums defined in your API. For each enum there is a `enum class` generated with all the values defined.

For convenience of use each enum has a `toEnum` function, which converts given `uint8_t` to enum value.

#### Structs[​](#structs "Direct link to Structs")

All structs defined in your API are generated in `datastructs.api.h` and `datastructs.api.cpp` files. They are used to communicate data between your API and its users.

For convenience of use each structure has:

* equality comparison operators
* empty constructor and a constructor with parameters for all its fields.

### Interfaces[​](#interfaces "Direct link to Interfaces")

For each interface inside an AP module there is separate file generated, like the `📜hello.api.h`.

The interface class contains pure virtual functions as well as pure virtual subscriber and publisher classes.

The interface has:

* pure virtual `getters` and a `setters` for each property

  ```
  virtual void setLast(const Message& last) = 0;
  virtual const Message& getLast() const = 0;
  ```

* pure virtual functions for each operation

  ```
  virtual int say(const Message& msg, When::WhenEnum when) = 0;
  ```

* and their asynchronous versions

  ```
  virtual std::future<int> sayAsync(const Message& msg, WhenEnum when) = 0;
  ```

* an access to a publisher

  The interface does not contain signals defined in your interface, the signals feature is achieved with a subscriber/publisher mechanism.

A class interested in notification on signal emission (and property changes) needs to use the publisher to subscribe for those events. The important thing is that your implementation of the interface should notify the `IHelloPublisher` about emitted signals or state changed.

note

Notice the convention for the getter - we use an underscore `_` - this function is added by the generator to your interface. The underscore is used to prevent name collision with your implementation of the interface.

```
virtual IHelloPublisher& _getPublisher() const = 0;
```

#### Publisher[​](#publisher "Direct link to Publisher")

The `IHelloPublisher` provides the interface for subscribing and unsubscribing from a signal emission or a property change. Use of such a class is mandatory for implementation and allows users of your API to react on changes.

The publisher is responsible for keeping its clients informed about requested changes. But it is the interface (here `IHello`) implementation responsibility to call the publish functions from its API when signal or property change occurs e.g:

```
void Hello::setLast(const Message& last)
{
    ...
    // call the publish function
    m_publisher->publishLastChanged(last);

}
```

There are two ways of subscribing for changes.

Either provide an implementation for `ISubscriber` interface class and use is with those publisher's functions

```
void subscribeToAllChanges(IHelloSubscriber& subscriber);
void unsubscribeFromAllChanges(IHelloSubscriber& subscriber);
```

The subscribe ISubscriber assures your subscriber will be informed about all emitted signals and all property changes.

The other option is to use the *parallel* system of notification which doesn't require the `ISubscriber` and informs your Interface user about change of specific property or signal emission. E.g for `LastChanged` property we have:

```
long subscribeToLastChanged(HelloLastPropertyCb callback); // returns handleId that needs to be used to unsubscribe
void unsubscribeFromLastChanged(long handleId);
```

The publisher will execute the provided callback function each time and only when this property is changed.

caution

For both methods of subscribing make sure to remove subscription for a ISubscriber/callback before it becomes invalid. Also make sure that the subscribed function is not blocking and returns immediately!

The publish functions need to be called by the implementation of the `IHello` on each property change or signal emission to notify all the subscribers about this change.

note

Subscriptions systems are parallel - if you use both of them for single interface user i.e subscribe your class as an `ISubscriber` and for a single change your subscriber will be informed twice about that change, one for each subscription mechanism.

This means that the unsubscribe functions for both mechanisms work only for that mechanism, i.e. the unsubscribe with `ISubscriber` will not remove any subscriptions for the specific property/signal and they stay intact.

#### Subscriber[​](#subscriber "Direct link to Subscriber")

For each interface we generate the `ISubscriber`, for example here the `IHelloSubscriber` which contains a set of functions for all the properties and signals for the notification mechanism.

The implementation for `IHello` contains a publisher which can be used to subscribe for those changes called `IHelloSubscriber`. Each time publisher will receive publish request it will notify all subscribed `IHelloSubscriber` object about change. You can use `IHelloSubscriber` class to implement your local clients of the `IHello` or a network service adapter - see [Olink Server](/template-cpp14/docs/features/olink.md#olink-server-adapter).

Below is a small code snippet which shows an example implementation for `IHelloSubscriber`, a class which main functionality is reacting on changes in `Hello`.

```
class HelloUser : public IHelloSubscriber
{
public:
    HelloUser(IHello& Hello)
    : m_Hello(Hello)
    {
        m_Hello._getPublisher().subscribeToAllChanges(*this);
    }
     ~HelloUser()
     {
          m_Hello._getPublisher().unsubscribeFromAllChanges(*this);
     }

    void onJustSaid(const Message& /*msg*/) override
    {
        // do something with msg.
    }

    void onLastChanged(const Message& /*last*/) override
    {
        // do something with last;
    }
    // Some other functionality.
private:
    IHello& m_Hello
}
```

### Other[​](#other "Direct link to Other")

`📜 CMakeLists.txt` for building this module, describing it's dependencies, and exposing built package for other features that will use it.<br />`📜 common.h` prepares dll import/export statements.
