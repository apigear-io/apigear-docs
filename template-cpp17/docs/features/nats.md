# NATS

caution

This is an experimental feature. It contains the smallest working set of functionalities to adapt the generated interface for use with the NATS protocol. It doesn't include any security, the error handling is minimal and it is not production ready. It doesn't use the JetStream nor the Streaming features. Please also check issues on github for this template.

note

The [CNATS](https://nats-io.github.io/nats.c/) library is used to implement NATS in this library.

This feature provides NATS protocol adapters for your objects defined by interfaces. With this feature you can also see how an existing protocol can be adapted for sharing your data in your ecosystem. When going through this document you may notice this implementation contains general client/server adapters in `📂hello-world/apigear/nats` and an interface specific part generated from templates for each interface in `📂hello-world/cpp_hello_world/modules/io_world/generated/nats`.

This feature provides a *client* and *service* adapter for your interfaces for the NATS protocol. It allows you to connect different applications in the same or different technologies (check all of our [templates](/docs/sdk/intro.md)).

* Use an *Nats client* instead of your interface implementation to be able to receive data from remote service.
* Use an *Nats server adapter* to expose your interface implementation as a remote service. You can expose same service for different technologies (olink, mqtt, other adapted protocol).

tip

The NATS server is not provided with the template. To be able to run apigear client and service (both serve as NATS clients) you need to run a NATS server, which is accessible for both client and service.

caution

In this library we use STL classes in public interfaces. We assume that this library is built from source (configuration provided by generated `CMakeLists`). Otherwise, it has to be ensured that your build configuration matches the library build configuration.

## File overview for module[​](#file-overview-for-module "Direct link to File overview for module")

With our API definition

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

the following file structure is generated. The purpose and content of each file is explained below.

```
📂hello-world
 ┣ 📂apigear
 ┃ ...
 ┣ 📂cpp_hello_world
 ┃ ┣ 📂apigear
 ┃ ┃ ┣ 📂nats
 ┃ ┃ ┃ ┣ 📜CMakeLists.txt
 ┃ ┃ ┃ ┣ 📜natsclient.cpp
 ┃ ┃ ┃ ┣ 📜natsclient.h
 ┃ ┃ ┃ ┣ 📜natsservice.cpp
 ┃ ┃ ┃ ┣ 📜natsservice.h
 ┃ ┃ ┃ ┣ ... (helper files)
 ┃ ┃ ...
 ┃ ┣ 📂examples
 ┃ ┣ 📂modules
 ┃ ┃ ┗ 📂io_world
 ┃ ┃ ┃ ┣ 📂generated
 ┃ ┃ ┃ ┃ ┣ 📂nats
 ┃ ┃ ┃ ┃ ┃ ┣ 📜CMakeLists.txt
 ┃ ┃ ┃ ┃ ┃ ┣ 📜helloclient.cpp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜helloclient.h
 ┃ ┃ ┃ ┃ ┃ ┣ 📜helloservice.cpp
 ┃ ┃ ┃ ┃ ┃ ┗ 📜helloservice.h
 ...
```

### ApiGear NATS - The Network Layer[​](#apigear-nats---the-network-layer "Direct link to ApiGear NATS - The Network Layer")

When using the `nats` feature (or any of those: `olink`, `monitor`, `mqtt` feature) you'll get an additional folder at the top most directory: the `📂hello-world/cpp_hello_world/apigear`. The `📂nats` subfolder contains objects that implement a network layer (based on [CNATS](https://nats-io.github.io/nats.c/) library) for the NATS protocol. Those are:

* `Client` - Adapts the NATS client, to serve as an network endpoint for [interface client adapters](/template-cpp17/docs/features/nats.md#nats-client-adapter).
* `Service` - Adapts the NATS client to serve as an network endpoint for [interface service adapters](/template-cpp17/docs/features/nats.md#nats-server-adapter).
* `Base` - shared by the `Client` and `Service` base which provides an interface to CNATS functionality tailored to the ApiGear requirements. it allows requesting call (with returning a message), subscribing for topics and publishing them. It also allows subscription and conntection state monitoring.

note

The CNATS allows connection configuration, please check [nats options](https://nats-io.github.io/nats.c/group__opts_group.html) for more information. The most important options used in this implementation, that may influence the performance are `SetSendAsap` and `UseGlobalMessageDelivery`, both set to true.

### NATS Client Adapter[​](#nats-client-adapter "Direct link to NATS Client Adapter")

Files `📜helloclient.h` and `📜helloclient.cpp` implement the remote client for the `Hello` interface - a `HelloClient` class.<br />The object is an `IHello` implementation.<br />It requires an instance of `ApiGear::Nats::Client` to work. It uses the Client to subscribe (and unsubscribe) for topics that allow receiving properties, signals and invoke responses from service.

#### Properties[​](#properties "Direct link to Properties")

The property getters (here `getLast()` ) return immediately the locally stored, last received value from service.<br />The property setter (here `void setLast(const Message& last)` ) requests setting a value on service side, local value is not changed.<br />You can subscribe to a property change event (here `last` property ) through the publisher which you can get from the API with `_getPublisher()`. Or you can subscribe as an `IHelloSubscriber` and get all changes. See [publisher](/template-cpp17/docs/features/api.md#publisher) and [subscriber](/template-cpp17/docs/features/api.md#subscriber) for more info on subscribing. When the client receives information that server changed the property, a target property (here `last`) is updated locally and a notifies subscribers that property has changed.

#### Operations[​](#operations "Direct link to Operations")

The operations have an async version, which is called by the immediate version.

The async version sends an invoke operation request to a server.

So calling `myHelloClientInstance.say(myWhen)` implements execution of `sayAsync` and waits for the result or for method finishes in case of void functions. Have in mind that this is a blocking operation.

#### Signals[​](#signals "Direct link to Signals")

You can subscribe to any signals offered by your interface (here `justSaid)` signal), through the publisher. You can either select the signal you're interested in, or subscribe as an `IHelloSubscriber` to get all the signals and property change notifications.

When a `HelloClient` client receives the message from server that indicates the signal was emitted it notifies all the subscribers that requested this notification.

You should not emit any signals from a client.

#### Connectivity[​](#connectivity "Direct link to Connectivity")

The `HelloClient` subscribes for two connectivity messages for the `HelloService`: The `HelloService` availability message and `HelloService` init response (dedicated for a specific client instance). The `HelloClient` sends an init request message:

* When it receives the `HelloService` availability message (if the HelloService wasn’t available when the HelloClient started).
* When it connects to a NATS server and subscribes to the required topics (if the HelloService was already available it will receive it and will be able to respond).

For this message the `HelloService` will respond with its current state - the `HelloService` init response message.

#### Use `HelloClient`[​](#use-helloclient "Direct link to use-helloclient")

`HelloClient` is an adapter of NATS (with protocol and network layer implementation), here provided by a `ApiGear::Nats::Client`. All you need to do is to pass the `ApiGear::Nats::Client` to your Interface Client Adapter, and request connecting to host when it is convenient for you.

```

    auto client = std::make_shared<ApiGear::Nats::Client>();
    auto testIoWorldHello = IoWorld::Nats::HelloClient::create(client);

    // Try out properties: subscribe for changes
    testIoWorldHello->_getPublisher().subscribeToLastChanged([](auto value){ std::cout << " Last " << std::endl; });

    // or ask for change, when objest is ready
    auto idSubProp = testIoWorldHello->_subscribeForIsReady(
        [testIoWorldHello](bool connected) 
        {
            if (!connected)
            {
                return;
            }
            IoWorld::Message someMessage("the new content");
            testIoWorldHello->setLast(someMessage);
        });
    
    // Check the signals with subscribing for its change. Signal must be emitted from server side.
    testIoWorldHello->_getPublisher().subscribeToJustSaid([](const IoWorld::Message& msg){ std::cout << " JustSaid " << std::endl; });
    
    // Play around executing your operations
    auto idSubOperation = testIoWorldHello->_subscribeForIsReady(
        [testIoWorldHello](bool connected) 
        {
            if (!connected)
            {
                return;
            }
            IoWorld::Message someMessage("Some new content for Say");
            auto method_result =  testIoWorldHello->say(someMessage, IoWorld::WhenEnum::Soon);
        });
    

    //connect
    client->connect("nats://localhost:4222");
```

### Nats Server Adapter[​](#nats-server-adapter "Direct link to Nats Server Adapter")

The files `📜helloservice.h` and `📜helloservice.cpp` contain the NATS service side adapter for the `Hello` interface - the `HelloService` class. It uses the general Nats service adapter `ApiGear::Nats::Service`.

`HelloService` object exposes the local object for remote usage with the Nats protocol. It handles all the network requests, and calls on your local object. The client connections and communication with them is handled transparently for you, no additional actions are needed.

#### Properties[​](#properties-1 "Direct link to Properties")

Each time a property of your the `Hello` interface implementation changes, a message is sent to all connected clients with information, which property changed to which value. It is true for both - local calls on the `Hello` object, by other local `Hello` users or when a change property request message is received by this `HelloService` (the `HelloService` applies the property on your local `Hello` object and then the `HelloService` is triggered).

#### Operations[​](#operations-1 "Direct link to Operations")

The operations invocation which was triggered from the clients through the network will be performed on your local `Hello` object. The result of the operation (if any) will be returned only to the client, from which the message was send, not all clients.

#### Signals[​](#signals-1 "Direct link to Signals")

All the signals emitted by your local `Hello` objects are forwarded as an NATS message to all connected clients.

#### Connectivity[​](#connectivity-1 "Direct link to Connectivity")

A `HelloService` subscribes for an init request message form a `HelloClient`. It responds for the init request message with its state, only to this client.<br />A `HelloService` sends a `HelloService` availability message as soon as it is ready (connected to an external NATS server and has all its topics subscribed). On this message all already connected clients will repeat the init request.

note

Have in mind that the `Hello` implementation is not thread safe by default.

#### Use `HelloService`[​](#use-helloservice "Direct link to use-helloservice")

`HelloService` is an adapter of Nats (with protocol and network layer implementation), here provided by a `ApiGear::Nats::Service` All you need to do is to pass the `ApiGear::Nats::Service` and a local Hello implementation to your HelloService Adapter, then request connecting to host whenever convenient for you.

```

    auto service = std::make_shared<ApiGear::Nats::Service>();

    // set up modules
    std::shared_ptr<IoWorld::IHello> testIoWorldHello = std::make_shared<IoWorld::Hello>();
    auto testIoWorldHelloService = IoWorld::Nats::HelloService::create(testIoWorldHello, service);

    // The client property change request will trigger other changes
    auto idSubProp = testIoWorldHello->_getPublisher().subscribeToLastChanged(
        [testIoWorldHello](auto value)
        {
            IoWorld::Message someMessage("ServerContent");
            testIoWorldHello->say(someMessage, IoWorld::WhenEnum::Never);
            auto lastMessage = testIoWorldHello->getLast();
            testIoWorldHello->_getPublisher().publishJustSaid(lastMessage);
        });

    service->connect("nats://localhost:4222");
```

### Nats Messages[​](#nats-messages "Direct link to Nats Messages")

In case you want construct messages for client or server side on your own, please check how topics are created and how does the payload look like, check this document [messages format](/assets/files/ApiGearNatsv0.1-f853bfcb02dde8ca7cd73c2aed926ed3.pdf).
