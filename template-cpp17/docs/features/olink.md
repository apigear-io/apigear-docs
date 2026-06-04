# OLink

This feature provides a *client* and a *server* adapter for your interfaces for the [ObjectLink](/docs/protocols/objectlink/intro.md) protocol. It allows you to connect different applications using the same or different technologies (check all of our [templates](/docs/sdk/intro.md)).

Use an *OLink client* instead of your interface implementation to connect to a remote service, or to a the [ApiGear simulation](/template-cpp17/docs/features/olink.md#simulation). Use an *OLink server adapter* to expose your interface implementation as a remote service.

Below you'll find short introduction on `ApiGear ObjectLink` protocol. Before details on client and server, you'll also find piece of information on a network layer implementation for handling ObjectLink in `template-cpp`.

note

The `OLink client` and the `OLink server` objects are ready-to-use as they are, they don't' need any extra implementation. If you want quickly start working with them go to use sections of [client](/template-cpp17/docs/features/olink.md#olink-client-adapter), [server](/template-cpp17/docs/features/olink.md#olink-server-adapter).

### Apigear ObjectLink protocol and ObjectLink core library[​](#apigear-objectlink-protocol-and-objectlink-core-library "Direct link to Apigear ObjectLink protocol and ObjectLink core library")

The [ObjectLink](/docs/protocols/objectlink/intro.md) protocol is a lightweight websocket based protocol for Objects described with an interface. It allows connecting a client object with a server object, and perform remote operations like: remote property change request (client) or notifications on property changed (server), inform about signal emission (server) and allows requesting a remote method call (client) and delivering a response to the caller (server).

The Olink feature for your interface uses a library [ObjectLink core](https://github.com/apigear-io/objectlink-core-cpp), common for cpp based templates. The provided `CMakeLists` already contain all the dependencies, so you don't have to add it manually.

The library provides an abstraction layer for handling the protocol, independent of the actual network stack. It encodes and decodes the messages and delivers them to corresponding objects identified by a registry. The setup is minimal: instantiate the registry (for client and/or server) and pass them to network layer objects in [cpp apigear library](/template-cpp17/docs/features/olink.md#cpp-apigear---the-network-layer)

caution

In this library we use STL classes in public interfaces. We assume that this library is built from source (configuration provided by generated CMakeLists). Otherwise, it has to be ensured that your build configuration matches the library build configuration.

## File overview for module[​](#file-overview-for-module "Direct link to File overview for module")

With out example API

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

 ┃ ...

 ┣ 📂cpp_hello_world

 ┃ ┣ 📂apigear

 ┃ ┃ ┣ 📂mqtt

 ┃ ┃ ┣ 📂olink

 ┃ ┃ ┃ ┣ 📂private

 ┃ ┃ ┃ ┣ 📜CMakeLists.txt

 ┃ ┃ ┃ ┣ 📜olinkconnection.cpp

 ┃ ┃ ┃ ┣ 📜olinkconnection.h

 ┃ ┃ ┃ ┣ 📜olinkhost.cpp

 ┃ ┃ ┃ ┣ 📜olinkhost.h

 ┃ ┃ ┃ ┣ ... (helper files)

 ┃ ┃ ...

 ┃ ┣ 📂examples

 ┃ ┣ 📂modules

 ┃ ┃ ┗ 📂io_world

 ┃ ┃ ┃ ┣ 📂generated

 ┃ ┃ ┃ ┃ ┗ 📂olink

 ┃ ┃ ┃ ┃ ┃ ┣ 📜CMakeLists.txt

 ┃ ┃ ┃ ┃ ┃ ┣ 📜helloclient.cpp

 ┃ ┃ ┃ ┃ ┃ ┣ 📜helloclient.h

 ┃ ┃ ┃ ┃ ┃ ┣ 📜helloservice.cpp

 ┃ ┃ ┃ ┃ ┃ ┗ 📜helloservice.h

 ┃ ┣ 📜 Lifecycle for olink client-server implementation.md

 ...
```

note

You may notice an extra document: `📜Lifecycle for olink client-server implementation.md` which explains life cycle of main objects used when using an olink protocol, in a form of flow diagrams.

### cpp ApiGear - The Network Layer[​](#cpp-apigear---the-network-layer "Direct link to cpp ApiGear - The Network Layer")

When generating the olink feature (or monitor feature) you'll get an additional folder at the top most directory: the `📂hello-world/cpp_hello_world/apigear`. The `📂olink` subfolder contains objects that implement a network layer (based on [Poco](https://docs.pocoproject.org/current/Poco.Net.html) library) for the ObjectLink protocol. Those are:

* `OlinkClient` - the client, that serves your [interface client adapters](/template-cpp17/docs/features/olink.md#olink-client-adapter).

  The class is responsible for network connection for ObjectLink client side. It uses the ObjectLink core library for handling messages according to the ObjectLink protocol. Handles linking and unlinking with a remote service for the sink added by the user (the interface OlinkClient Adapters), with regard to the connection state. All the messages dedicated to your object will be delivered to the adapter and proper actions will be performed for the clients that use it, without any of your actions. Also the OlinkClient holds a message queue for messages during disconnected time.

* `OlinkHost` and a helper class `OlinkRemote` that you'll find in `📂private` subfolder

  The server, which hosts your services exposed to network through the [interface server adapters](/template-cpp17/docs/features/olink.md#olink-server-adapter). The class is responsible to set up the server and manage connections requested by clients. It uses ObjectLink core library for handling messages according to the ObjectLink protocol. All incoming messages will be translated to calls and routed to your local object.

### Olink Client Adapter[​](#olink-client-adapter "Direct link to Olink Client Adapter")

Files `📜helloclient.h` and `📜helloclient.cpp` contain the olink client version of the `Hello` interface - an `HelloClient` class. It implements two interfaces: `IHello` and a `IObjectSink`.

IObjectSink (click to expand)

```
class IObjectSink {

public:

    virtual std::string olinkObjectName() = 0;

    virtual void olinkOnSignal(const std::string& signalId, const nlohmann::json& args) = 0;

    virtual void olinkOnPropertyChanged(const std::string& propertyId, const nlohmann::json& value) = 0;

    virtual void olinkOnInit(const std::string& objectId, const nlohmann::json& props, IClientNode* node) = 0;

    virtual void olinkOnRelease() = 0;

};
```

The `IObjectSink` interface comes from [ObjectLink core](https://github.com/apigear-io/objectlink-core-cpp) and is necessary for handling incoming messages from the server side and is used by a `OLinkClient` ([cpp Apigear Olink lib](/template-cpp17/docs/features/olink.md#cpp-apigear---the-network-layer)). Apart from setting up and tear down of the `OLinkHello` object, you don't need to perform any additional actions, the object `OLinkHello` will communicate with the server transparently and you should use it as an `IHello` Object only.

#### Properties[​](#properties "Direct link to Properties")

The property getters (here `Message last()` ) return immediately the locally stored last received value from server.

The property setter (here `void setLast(const Message& last)` ) requests setting a value on server side, local value is not changed.

You can subscribe to a property changed (here `last` property ) through the publisher you can get from the `HelloClient` with `_getPublisher()`. Or you can subscribe (instead of the above) for as an IHelloSubscriber to receive all changes (and signals). When the client receives information that server changed the property, a target property (here `last`) is updated locally and a notifies subscribers that property has changed.

note

The connected client has its local properties initialized - on a successful linking client with server the client receives a message with current state of properties of the service on server side.

#### Operations[​](#operations "Direct link to Operations")

The operations have an additionally `async` version, which is called by the immediate version. The async version sends an invoke operation request to a server.

So calling `myOlinkHelloInstance.say(myWhen)` implements execution of `sayAsync` and waits for the result (for non-void type of operations). Have in mind that this is a blocking operation.

#### Signals[​](#signals "Direct link to Signals")

You should not emit any signals from a client.

You can connect to any signals offered by your interface (here `void justSaid(const Message& msg)` ), through the publisher. You can either select the signal you're interested in, or subscribe as an IHelloSubscriber to get all the signals and property change notifications.

When a `HelloClient` client receives the message from server that indicates the signal was emitted it emits a signal (here `justSaid`).

#### Use `HelloClient`[​](#use-helloclient "Direct link to use-helloclient")

As mentioned earlier you need a network layer, here provided by a `ApiGear::ObjectLink::OLinkClient` which also contains the protocol handling `ClientNode`. All you need to do is give it a global `ApiGear::ObjectLink::ClientRegistry`, request connecting to host when it is convenient for you and then add your `HelloClient`.

```
ApiGear::ObjectLink::ClientRegistry registry;

ApiGear::ObjectLink::OLinkClient client(registry);



// Create a global registry.

ApiGear::ObjectLink::ClientRegistry registry;

// Create a client and make a connection

ApiGear::PocoImpl::OlinkConnection client(registry);

// Create your client and request linking, which will try to connect with a server side for this object.

auto ioWorldHello = std::make_shared<IoWorld::olink::HelloClient>();



client.connectAndLinkObject(ioWorldHello);

client.connectToHost(Poco::URI("ws://localhost:8182"));



// You can try out properties

auto lastMessage = ioWorldHello->getLast();

// Executing the methods

ioWorldHello->say(lastMessage, IoWorld::WhenEnum::Soon);

IoWorld::Message someMessage("the new content");

ioWorldHello->setLast(someMessage);

// Or subscribe for signals.

ioWorldHello->_getPublisher().subscribeToJustSaid([](auto args) { /*handle the signal*/});



// remember to unlink your object if you won't use it anymore.

client.unlinkObjectSource(ioWorldHello->olinkObjectName());
```

caution

`ApiGear::ObjectLink::ClientRegistry` can have only one object with the same identifier. This means that, to have more than one `OlinkHello` objects you would need to put them in different registries. Each Object has an identifier which is created based on the Interface Name, this way client object can be matched with proper server object.

### Olink Server Adapter[​](#olink-server-adapter "Direct link to Olink Server Adapter")

Files `📜helloservice.h` and `📜helloservice.h` contain the olink server adapter for the `Hello` interface - the `HelloService` class.

It implements an `IObjectSource` interface (from [ObjectLink core](https://github.com/apigear-io/objectlink-core-cpp)), which wraps your `Hello` and exposes it for remote usage with the [ObjectLink](/docs/protocols/objectlink/intro.md) protocol. It handles all the network requests, and calls your local object.

When creating the `HelloService` you need to provide the local `IHello` service object, you want to expose to clients.

The `IObjectSource` interface:

IObjectSource (click to expand)

```
class  IObjectSource {

public:

    virtual std::string olinkObjectName() = 0;

    virtual nlohmann::json olinkInvoke(const std::string& methodId, const nlohmann::json& args) = 0;

    virtual void olinkSetProperty(const std::string& propertyId, const nlohmann::json& value) = 0;

    virtual void olinkLinked(const std::string& objectId, IRemoteNode* node) = 0;

    virtual void olinkUnlinked(const std::string& objectId) = 0;

    virtual nlohmann::json olinkCollectProperties() = 0;

};
```

After setting up the OlinkHost (cpp Apigear Olink lib) and registering your Interface registered, the client connections and communication with them is handled transparently for you, no additional actions are needed.

note

All the received messages from the clients are handled in a thread in which the connection resides, this means that your object may be used from different threads (local and each connection).

#### Properties[​](#properties-1 "Direct link to Properties")

Each time a property change signal (here `void lastChanged(const Message& last)` ) is emitted, a message is sent to all connected clients. The message contains the information, which property changed and the corresponding value. This may occur either when you change a property directly on your local `Hello` object, or when a change property request message is received by the `HelloService`, which applies the property on your local `Hello` object.

#### Operations[​](#operations-1 "Direct link to Operations")

The remote operations invocation from the clients via the network will be performed on your local `Hello` object. The result of the operation (if any) will be returned only to the caller, not all clients. Have in mind that your object may be called from more that one thread.

#### Signals[​](#signals-1 "Direct link to Signals")

All the signals emitted by your local `Hello` objects are forwarded to all connected clients with an olink messages.

#### Use `OLinkHelloAdapter`[​](#use-olinkhelloadapter "Direct link to use-olinkhelloadapter")

As mentioned earlier you need a network layer, here provided by a `ApiGear::ObjectLink::OLinkHost` which also contains the protocol handling `RemoteNodes`. The `ApiGear::ObjectLink::OLinkRemote` objects are created automatically per connection. All you need to do is give a global `ApiGear::ObjectLink::RemoteRegistry` with your `OLinkHelloAdapter` in it to `ApiGear::ObjectLink::OLinkHost`.

```
ApiGear::ObjectLink::RemoteRegistry registry;

auto logFunction = [](auto /*level*/, auto /*msg*/){ };

ApiGear::PocoImpl::OLinkHost testserver(registry,logFunction);



auto ioWorldHello = std::make_shared<IoWorld::Hello>();

auto ioWorldOlinkHelloService = std::make_shared<IoWorld::olink::HelloService>(ioWorldHello, registry);

registry.addSource(ioWorldOlinkHelloService);

auto portNumber = 8000;



// Start your server with your service added to registry.

testserver.listen(portNumber);





// use your ioWorldHello as it was Hello implementation, all property changes, and signals will be passed to connected OLink clients.

auto lastMessage = ioWorldHello->getLast();

ioWorldHello->say(lastMessage, IoWorld::WhenEnum::Soon);

IoWorld::Message someMessage("the new content");

ioWorldHello->setLast(someMessage); // after this call - if new property is different than current one - all clients will be informed about new value.

testIoWorldHello->_getPublisher().publishJustSaid(someMessage);



// remember to remove from registry if you won't use it anymore.

registry.removeSource(ioWorldOlinkHelloService->olinkObjectName());
```

## Simulation[​](#simulation "Direct link to Simulation")

The simulation can be used to test, demonstrate or develop applications without the need to have the actual service available. The simulation server is integrated into the [ApiGear studio](/docs/studio/intro.md) and the [CLI](/docs/cli/simulate.md).

For simulating you will use [simulation scenarios](/docs/scripting/backends/scenario.md) They allow to define sequences of actions. The actions can change the property values of the service or emit signals. The scenarios can be written using a YAML schema.

See more on [simulation](/docs/scripting/backends/intro.md).

### Prepare your application[​](#prepare-your-application "Direct link to Prepare your application")

Make sure you are using OlinkClient as your `Hello` object, an instance on [cpp side](/template-cpp17/docs/features/olink.md#olink-client-adapter)

You may try our example, it subscribes for signals and property changes, with a simple logging function. Create new folder under `examples` directory. Paste the below `main.cpp` and `CMakeLists.txt` files. Remember to add this directory to main `CMakeLists.txt` (or to extend test\_conan.bat/sh in case using conan).

main.cpp (click to expand)

```
#include <iostream>

#include "io_world/generated/olink/helloclient.h"

#include "apigear/olink/olinkconnection.h"

#include "apigear/tracer/tracer.h"

#include "apigear/olink/olinklogadapter.h"

#include "olink/clientregistry.h"

#include "olink/clientnode.h"

#include "apigear/olink/olinkconnection.h"

#include <iostream>





using namespace HelloWorldExample;



int main() {

    // Create a global registry.

    ApiGear::ObjectLink::ClientRegistry registry;

    // Create a client and make a connection

    ApiGear::PocoImpl::OlinkConnection client(registry);

    // Create your client and request linking, which will try to connect with a server side for this object.

    auto ioWorldHello = std::make_shared<IoWorld::olink::HelloClient>();



    client.connectAndLinkObject(ioWorldHello);

    client.connectToHost(Poco::URI("ws://localhost:8182"));



    // Or subscribe for signals.

    ioWorldHello->_getPublisher().subscribeToJustSaid([](auto& /*args*/) { std::cout << "Just said received" << std::endl; });

    ioWorldHello->_getPublisher().subscribeToLastChanged([](auto& /*args*/) { std::cout << "Last Changed" << std::endl; });





    bool keepRunning = true;

    std::string cmd;

    do {

        std::cout << "Enter command:" << std::endl;

        getline(std::cin, cmd);



        if (cmd == "quit") {

            keepRunning = false;

            client.disconnect();

        }

    } while (keepRunning);

    client.disconnectAndUnlink(ioWorldHello->olinkObjectName());



    return 0;

}
```

CMAkeLists.txt (click to expand)

```
cmake_minimum_required(VERSION 3.1)

project(OLinkClientSimuExample)



# append local binary directory for conan packages to be found

list(APPEND CMAKE_MODULE_PATH ${CMAKE_BINARY_DIR})



set(CMAKE_CXX_STANDARD 17)

set(CMAKE_CXX_STANDARD_REQUIRED ON)



set (SOURCES

    main.cpp

)

add_executable(OLinkClientSimuExample

    ${SOURCES}

)



# ensure maximum compiler support

if(NOT MSVC)

  target_compile_options(OLinkClientSimuExample PRIVATE -Wall -Wextra -Wpedantic -Werror -fvisibility=hidden)

else()

  target_compile_options(OLinkClientSimuExample PRIVATE /W4 /WX /wd4251)

  # disable the warning for getenv - needs better cross platform solution

  target_compile_definitions(OLinkClientSimuExample PRIVATE -D_CRT_SECURE_NO_WARNINGS)

endif()



find_package(io_world QUIET COMPONENTS io_world-core io_world-implementation io_world-monitor io_world-olink)

target_link_libraries(OLinkClientSimuExample

    io_world::io_world-core

    io_world::io_world-implementation

    io_world::io_world-monitor

    io_world::io_world-olink

)



install(TARGETS OLinkClientSimuExample

        RUNTIME DESTINATION bin COMPONENT Runtime)
```

note

Make sure to configure the client to use the correct IP and port configuration of your simulation server e.g. set `client.connectToHost(QUrl("ws://127.0.0.1:8182/ws"));` and make sure your apigear simulation also uses this port.

### Prepare the scenario[​](#prepare-the-scenario "Direct link to Prepare the scenario")

As a starting point you can check our simulation scenario:

Scenario(click to expand)

```
schema: apigear.scenario/1.0

name: "first scenario"

version: "1.0.0"

#initial properties and setting gunction response

interfaces:

  - name: io.world.Hello #( module io.world and interface Hello combination)

    properties:

      last: {content: "Initial"}

    operations:

      - name: say

        actions:

         - $return: { value: 88  }

# sequence of changing properties and emitting signals

sequences:

  - name: play with hello

    interval: 2000 # 2 seconds

    interface: io.world.Hello

    loops: 3 

    steps: # step is called every 2 secs according to interval

      - name: change property

        actions: 

          - $set: { last: {content: "First Change of Property"} }

      - name: emit signal

        actions: 

          - $signal: { justSaid: [ {content: "First Message"} ] }

      - name: change property AND emit signal

        actions:

          - $set: { last: {content: "Second Change of Property"} }

          - $signal: { justSaid: [ {content: "Other Signal"} ] }
```

Apart from the header with the scenario name and its version it consists of two parts:

* initialization

  for each interface (here, our ui.world.Hello line 6), we're setting initial values of properties(line 8) and the return value of function calls (line 12)

* sequence of events

  You can prepare more than one sequence. For each of them set interval between calling each action (line 16), set how many runs of that sequence you want to execute (line 18) and name the interface the action should be applied to (line 17). In each action you may change many properties, and emit signals.

### Run the simulation[​](#run-the-simulation "Direct link to Run the simulation")

Put your scenario file in the `📂hello-world/apigear` along with other `.yaml` files.

If you are using the studio, reload your project. Go to `settings` and make sure to set same the port as in your client app (here `8182`). Click the `play` button in the application in the `simulation` tab to start the simulation scenario, then start the client application.

Instead of the ApiGear Studio application can also use its console version, run your scenario with command:

```
apigear simulate run path-from-cli-to-scenario/helloworldtest.scenario.yaml --addr :8182
```

note

We tried some measurements for the OLink performance. You may want to check the [our tests here](https://github.com/apigear-io/performance-checks). We're not providing any data of throughput and latency, as the branch is still in between alpha phase.

In general we expect it to be fast as it has small overhead (which may be not sufficient for you).
