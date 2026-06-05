# MQTT

caution

This is an experimental feature. It contains the smallest working set of functionalities to adapt the generated interface for use with the MQTT protocol. It doesn't include any security, the error handling is minimal and it is not production ready. Please also check issues on github for this template.

note

A [PAHO](https://eclipse.dev/paho/index.php?page=clients/python/index.php) library is used to implement MQTT in this library. It seems to have significant performance limitations for high load.

If you need to use MQTT in high load application consider using our qt template - currently seems to be working much better.

This feature does not only introduce MQTT protocol into your project, but also show that an existing protocol can be adapted for sharing your data in your ecosystem. When going through this document you may notice this implementation contains general client/server adapters in `📂hello-world/apigear/mqtt` and an interface specific part generated from templates for each interface in `📂hello-world/cpp_hello_world/modules/io_world/generated/mqtt`.

This feature provides a *client* and *service* adapter for your interfaces for the MQTT protocol. It allows you to connect different applications in the same or different technologies (check all of our [templates](/docs/sdk/intro.md)).

* Use an *Mqtt client* instead of your interface implementation to be able to receive data from remote service.
* Use an *Mqtt server adapter* to expose your interface implementation as a remote service.

tip

The MQTT broker is not provided with the template. To be able to run client and service you need to run a broker of your choice, which is accessible for both client and service.

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

 ┃ ┃ ┣ 📂mqtt

 ┃ ┃ ┃ ┣ 📜CMakeLists.txt

 ┃ ┃ ┃ ┣ 📜mqttclient.cpp

 ┃ ┃ ┃ ┣ 📜mqttclient.h

 ┃ ┃ ┃ ┣ 📜mqttservice.cpp

 ┃ ┃ ┃ ┣ 📜mqttservice.h

 ┃ ┃ ┃ ┣ ... (helper files)

 ┃ ┃ ...

 ┃ ┣ 📂examples

 ┃ ┣ 📂modules

 ┃ ┃ ┗ 📂io_world

 ┃ ┃ ┃ ┣ 📂generated

 ┃ ┃ ┃ ┃ ┣ 📂mqtt

 ┃ ┃ ┃ ┃ ┃ ┣ 📜CMakeLists.txt

 ┃ ┃ ┃ ┃ ┃ ┣ 📜helloclient.cpp

 ┃ ┃ ┃ ┃ ┃ ┣ 📜helloclient.h

 ┃ ┃ ┃ ┃ ┃ ┣ 📜helloservice.cpp

 ┃ ┃ ┃ ┃ ┃ ┗ 📜helloservice.h

 ...
```

### ApiGear MQTT - The Network Layer[​](#apigear-mqtt---the-network-layer "Direct link to ApiGear MQTT - The Network Layer")

When using the `mqtt` feature (or any of those: `olink`, `monitor` feature) you'll get an additional folder at the top most directory: the `📂hello-world/cpp_hello_world/apigear`. The `📂mqtt` subfolder contains objects that implement a network layer (based on [PAHO](https://eclipse.dev/paho/index.php?page=clients/python/index.php) library) for the MQTT protocol. Those are:

* `Client` - Adapts the MQTT client, to serve as an network endpoint for [interface client adapters](/template-cpp14/docs/features/mqtt.md#mqtt-client-adapter). Exposes:

  * methods that allow receiving data from remote service: subscribing for properties changes, signals emission and method response invocation;

  * methods that allow remote using the service: requesting property change or invoking a method.

    The client may serve many client interface adapters, even for the same interfaces (allows subscribing for same topic). In case many interface client adapters for same interface are connected: property changes and signals are provided to all the interface client adapters, but the invoke method response will be delivered only for the one that requested it.

* `ServiceAdapter` - Adapts the MQTT client to serve as an network endpoint for [interface service adapters](/template-cpp14/docs/features/mqtt.md#mqtt-server-adapter). Exposes:

  * methods that allow receiving requests from remote clients: subscribing for properties change requests, send method invocation;

  * methods that allow publishing property change, signal, functionality to handles sending a response for method invocation requests.

    This `ServiceAdapter` may be used for many interface service adapters, but it is not recommended to use more than one interface service adapter for same interface.

tip

Have in mind that MQTT might not be suitable for high-frequency messages especially with one mqtt client serving more than one object. Also the brokers have limits for messages number/size queued from one client. In case you are not getting all the messages consider changing those or splitting traffic between more clients (maybe some handle the properties, some handle the methods).

### MQTT Client Adapter[​](#mqtt-client-adapter "Direct link to MQTT Client Adapter")

Files `📜helloclient.h` and `📜helloclient.cpp` implement the remote client for the `Hello` interface - a `HelloClient` class.<br />The object is an `IHello` implementation.<br />It requires an instance of Apigear::Mqtt::Client to work. It uses the Client to subscribe (and unsubscribe) for topics that allow receiving properties, signals and invoke responses from service.

#### Properties[​](#properties "Direct link to Properties")

The property getters (here `getLast()` ) return immediately the locally stored,last received value from service.<br />The property setter (here `void setLast(const Message& last)` ) requests setting a value on service side, local value is not changed.<br />You can subscribe to a property change event (here `last` property ) through the publisher which you can get from the API with `_getPublisher()`. Or you can subscribe as an `IHelloSubscriber` and get all changes. See [publisher](/template-cpp14/docs/features/api.md#publisher) and [subscriber](/template-cpp14/docs/features/api.md#subscriber) for more info on subscribing. When the client receives information that server changed the property, a target property (here `last`) is updated locally and a notifies subscribers that property has changed.

note

The connected interface client adapter has its local properties in sync with a service. The messages with property changes are retained in MQTT broker, so all properties which are already set are provided.

#### Operations[​](#operations "Direct link to Operations")

The operations have an async version, which is called by the immediate version.

The async version sends an invoke operation request to a server.

So calling `myHelloClientInstance.say(myWhen)` implements execution of `sayAsync` and waits for the result (for non-void type of operations). Have in mind that this is a blocking operation.

#### Signals[​](#signals "Direct link to Signals")

You should not emit any signals from a client.

You can subscribe to any signals offered by your interface (here `justSaid)` signal), through the publisher. You can either select the signal you're interested in, or subscribe as an `IHelloSubscriber` to get all the signals and property change notifications.

When a `HelloClient` client receives the message from server that indicates the signal was emitted it notifies all the subscribers that requested this notification..

#### Use `HelloClient`[​](#use-helloclient "Direct link to use-helloclient")

`HelloClient` is an adapter of Mqtt (with protocol and network layer implementation), here provided by a `ApiGear::MQTT::Client`. All you need to do is to pass the `ApiGear::MQTT::Client` to your Interface Client Adapter, and request connecting to host when it is convenient for you.

```
// Create a client and make a connection

auto mqttclient = std::make_shared<ApiGear::MQTT::Client>("UniqueClientName");



// set up modules

auto ioWorldHello = std::make_unique<IoWorld::MQTT::HelloClient>(mqttclient);



// start mqtt connection

mqttclient.connectToHost("tcp://localhost:1883"); // Use the same port number as your broker is using. Typically, without any other settings it is "1883".



// use your ioWorldHello as it was Hello implementation

ioWorldHello->say(IoWorld::WhenEnum::Soon);

auto lastMessage = ioWorldHello->getLast();

IoWorld::Message someMessage("the new content");

ioWorldHello->setLast(someMessage);

testIoWorldHello->_getPublisher().subscribeToJustSaid([](auto args) { /*handle the signal*/});
```

### MQTT Server Adapter[​](#mqtt-server-adapter "Direct link to MQTT Server Adapter")

The files `📜helloservice.h` and `📜helloservice.cpp` contain the MQTT service side adapter for the `Hello` interface - the `HelloService` class. It uses the general MQTT service adapter `ApiGear::MQTT::Service`.

`HelloService` object exposes the local object for remote usage with the MQTT protocol. It handles all the network requests, and calls on your local object. The client connections and communication with them is handled transparently for you, no additional actions are needed.

#### Properties[​](#properties-1 "Direct link to Properties")

Each time a property of your the `Hello` interface implementation changes, a message is sent to all connected clients with information, which property changed to which value. It is true for both - local calls on the `Hello` object, by other local `Hello` users or when a change property request message is received by this `HelloService` (the `HelloService` applies the property on your local `Hello` object and then the `HelloService` is triggered).

#### Operations[​](#operations-1 "Direct link to Operations")

The operations invocation which was triggered from the clients through the network will be performed on your local `Hello` object. The result of the operation (if any) will be returned only to the client, from which the message was send, not all clients.

#### Signals[​](#signals-1 "Direct link to Signals")

All the signals emitted by your local `Hello` objects are forwarded as an MQTT message to all connected clients.

note

Have in mind that the `Hello` implementation is not thread safe by default.

#### Use `HelloService`[​](#use-helloservice "Direct link to use-helloservice")

`HelloService` is an adapter of Mqtt (with protocol and network layer implementation), here provided by a `ApiGear::MQTT::ServiceAdapter` All you need to do is to pass the `ApiGear::MQTT::ServiceAdapter` and a local Hello implementation to your HelloService Adapter, then request connecting to host whenever convenient for you.

```
auto mqttservice = std::make_shared<ApiGear::MQTT::Service>("ServiceUniqueNameInMqtt");

auto ioWorldHello = std::make_shared<IoWorld::Hello>();

IoWorld::MQTT::HelloService mqttHelloService(ioWorldHello, mqttservice);



// start mqtt connection

mqttservice->connectToHost("tcp://localhost:1883");



// use your ioWorldHello as it was Hello implementation, all property changes, and signals will be passed to connected MqttHello clients.

ioWorldHello->say(IoWorld::WhenEnum::Soon);

IoWorld::Message someMessage("the new content");

auto lastMessage = ioWorldHello->getLast();

ioWorldHello->setLast(someMessage); // after this call - if new property is different than current one - all clients will be informed about new value.

testIoWorldHello->_getPublisher().publishJustSaid(someMessage);
```

### MQTT Messages[​](#mqtt-messages "Direct link to MQTT Messages")

For the MQTT topic structure and payload format, see **[ApiGear over MQTT](/docs/protocols/mqtt/mapping.md)**.
