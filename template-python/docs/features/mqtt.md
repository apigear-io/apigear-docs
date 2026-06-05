# MQTT

caution

**Experimental — API may change in 1.x; not recommended for production.**

This feature is the smallest working adapter that maps a generated interface onto the MQTT protocol. The following gaps are known and intentional in the current release:

* **No TLS.** The shared client connects in plain TCP. Bring your own `TLSContext` if you need encryption.
* **No auth or ACL guidance.** No username/password helper, no broker ACL examples, no credential storage pattern.
* **Minimal error handling.** Network and protocol errors are mostly logged; there is no retry queue, no dead-letter handling, no caller-visible error type.
* **No reconnect or backoff strategy documented.** The Paho client's network loop is started, but reconnect/backoff/clean-session behavior is not configured for you.
* **No QoS strategy guidance.** All publishes and subscribes use a fixed QoS of 2. There is no per-topic tuning and no documentation on when to drop to 1 or 0.

Track maturation and file specific issues in the [template-python issue tracker](https://github.com/apigear-io/template-python/issues).

note

Open design questions in the protocol layer are flagged inline in `apigear/mqtt/base.py` (look for `TODO` comments around the `clean_start` flag and the on-connect resubscribe path). They are surfaced here rather than hidden so that downstream users can weigh in before the API solidifies.

To know which files to inspect when filing an issue or reading the code: the protocol-layer client/service implementation lives in `apigear/mqtt/` (shared across all interfaces), and the per-interface client/server adapters live in `{module}/mqtt/sinks.py` and `{module}/mqtt/sources.py`.

This feature purpose is not only to help you introduce MQTT protocol into your project, but also show that an existing protocol can be adapted for sharing your data in your ecosystem. When going through this document you may notice this implementation contains general client/server adapters in 📂hello-world/apigear/mqtt and an interface specific part generated from templates for each interface in 📂hello-world/py\_hello\_world/io\_world/mqtt.<br /><br />This feature provides a *client* and a *server* adapter for your interfaces for the MQTT protocol. It allows you to connect different applications in the same or different technologies (check all of our [templates](/docs/sdk/intro.md)).<br />Use an *Mqtt client* instead of your interface implementation to be able to receive data from remote service.<br />Use an *Mqtt server adapter* to expose your interface implementation as a remote service.<br />

tip

The MQTT broker is not provided with implementation. To be able to run client and service you need to run a broker of your choice.

### Before Start[​](#before-start "Direct link to Before Start")

The mqtt library needs to be installed separately, make sure you have installed all the libraries listed in requirements

```
`pip install --upgrade -r requirements.txt`
```

## File overview for module[​](#file-overview-for-module "Direct link to File overview for module")

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

 ┃ ...

 ┣ 📂py_hello_world

 ┃ ┣ 📂apigear

 ┃ ┃ ┣ 📂mqtt

 ┃ ┃ ┃ ┣ 📜base.py

 ┃ ┃ ┃ ┣ 📜client.py

 ┃ ┃ ┃ ┣ 📜service.py

 ┃ ┃ ┃ ┗ 📜__init__.py

 ┃ ┃ ┃ 

 ┃ ┣ 📂examples

 ┃ ┣ 📂io_world

 ┃ ┃ ┣ 📂api

 ┃ ┃ ┣ 📂impl

 ┃ ┃ ┣ 📂mqtt

 ┃ ┃ ┃ ┣ 📜sinks.py

 ┃ ┃ ┃ ┣ 📜sources.py

 ┃ ┃ ┃ ┗ 📜__init__.py

 ...
```

### Python apigear - The Network Layer[​](#python-apigear---the-network-layer "Direct link to Python apigear - The Network Layer")

When generating the mqtt feature (or any of those: olink monitor feature) you'll get an additional folder it the top most directory: the 📂hello-world/📂apigear. The 📂mqtt subfolder contains objects that implement a network layer (based on [Paho Mqtt library](https://pypi.org/project/paho-mqtt/)) for the MQTT protocol. Those are:

* Client - Adapts the MQTT client, to serve as an network endpoint for [interface client adapters](/template-python/docs/features/mqtt.md#mqtt-client-adapter). Exposes:

  <!-- -->

  * methods that allow receiving data for remote service: subscribing for properties changes, signals emission and method response invocation;
  * methods that allow remote using the service: requesting property change or invoking a method.
    <br />
    The client may serve many client interface adapters, even for the same interfaces (allows subscribing for same topic). In case many interface client adapters for same interface are connected: property changes and signals are provided to all interface client adapters, but the invoke method response will be delivered only for the one that requested it.

* Service - Adapts the MQTT client to serve as an network endpoint for [interface service adapters](/template-python/docs/features/mqtt.md#mqtt-server-adapter). Exposes:

  <!-- -->

  * methods that allow receiving requests from remote clients: subscribing for properties change requests, send method invocation;
  * methods that allow publishing property change, signal, functionality to handles sending a response for method invocation requests.
    <br />
    This Service may be used for many, interface service adapters, but it is not recommended to use more than one interface service adapter for the same interfaces.

tip

Have in mind that MQTT might not be suitable for high-frequency messages especially with one mqtt client serving more than one object. Also the brokers have limits for messages number/size queued from one client. In case you are not getting all the messages consider changing those or splitting traffic between more clients (maybe some handle the properties, some handle the methods).

### MQTT Client Adapter[​](#mqtt-client-adapter "Direct link to MQTT Client Adapter")

File `📜sinks.py` contains the remote client for the `Hello` interface - a `HelloClientAdapter` class.<br />The object is an `IHello` implementation.<br />It requires an instance of Apigear::Mqtt::Client to work. It uses the Client to subscribe (and unsubscribe) for topics that allow receiving properties, signals and invoke responses from service.

#### Properties[​](#properties "Direct link to Properties")

The property getters (here getter `get_last`) return immediately the locally stored last received value from server.<br />The property setter (here setter `set_last` ) requests setting a value on server side, local value is not changed.<br />You can add handler for a property changed event (here `on_last_changed(Message)` ) When the client receives information that server changed the property, a target property (here `last`) is updated locally and all handlers added for the event are fired (in addition order) with the new value of property.

note

The connected interface client adapter has its local properties in sync with a service. The properties messages are retained in mqtt broker, so all already set properties are provided.

#### Operations[​](#operations "Direct link to Operations")

The operations are async, and they return a coroutine awaited with a timeout of 500 seconds.<br />The async method sends an invoke operation request to a service and waits for the response.<br />Have in mind that this is a blocking operation.

#### Signals[​](#signals "Direct link to Signals")

You should not emit any signals from a client. You can add a handler to any signals offered by your interface (here `void just_said(Message)` ) When a HelloClientAdapter client receives the message from server that indicates the signal was emitted it executes all added handlers to a `on_just_said` event hook.

#### Use `HelloClientAdapter`[​](#use-helloclientadapter "Direct link to use-helloclientadapter")

HelloClientAdapter is an adapter of you interface to the Mqtt Client (with protocol and network layer implementation), here provided by a `apigear.mqtt.Client`. All you need to do is to pass the `apigear.mqtt.Client` to your Interface Client Adapter, and request connecting to host when it is convenient for you. You can find the example code for the your `Hello` MQTT client below. Remember to run a MQTT broker of your choice.

```
import os

import sys

# add context - your relative path from this example to py_hello_world dir e.g. like this

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../')))



import apigear.mqtt

import logging

import io_world.mqtt

import io_world.api



async def main():

    # create a mqtt adapter for client side

    client = apigear.mqtt.Client("UniqueClientNameForMqttHelloExample")



    # create mqtt interface adapters for client side

    mqtt_hello = io_world.mqtt.HelloClientAdapter(client)

    await client.connect("localhost", 1883)



    # Subscribe for property changes

    def handleProperty(value):

        print("received property change");

        print(value);

    mqtt_hello.on_last_changed += handleProperty

    # or ask for change.

    local_last = io_world.api.Message();

    local_last.content = "New message"

    mqtt_hello.set_last(local_last);

    

    # Check the signals with subscribing for its change

    def handleSignal(value):

        print("received signal");

        print(value);

    mqtt_hello.on_just_said += handleSignal

    

    # Play around executing your operations

    message_to_say = io_world.api.Message()

    message_to_say.content = "Message to say"

    result = mqtt_hello.say(message_to_say, io_world.api.When.NOW)

    await result

    print("method result")

    print(result)    

    

    input("Press Enter to close")



    client.disconnect()



if __name__ == '__main__':

    loop = asyncio.new_event_loop()

    asyncio.set_event_loop(loop)

    loop.run_until_complete(main())
```

### MQTT Server Adapter[​](#mqtt-server-adapter "Direct link to MQTT Server Adapter")

File `📜sources.py` contains the mqtt server side adapter for the `Hello` interface - the `HelloServiceAdapter` object.<br />When creating the `HelloServiceAdapter` you need to provide the `apigear.mqtt.Service` and the local implementation of `IHello`, local service.<br />`HelloServiceAdapter` object exposes the local object for remote usage with the MQTT protocol. It handles all the network requests, and calls your local object. The mqtt client connection and communication is handled transparently, no additional actions are needed.

#### Properties[​](#properties-1 "Direct link to Properties")

The MQTT service adapters add handlers for all the properties changes to the local implementation. On property change the generated implementation executes all added handlers. In this example on each `last` property change the handler for `on_last_changed(Message)`, sends a message with a topic specific for this property in this interface and with value in the payload. This happens either when you change a property directly on your local `Hello` object, or when a change property request message is received by the `HelloServiceAdapter`, which applies the property on your local `Hello` object.

#### Operations[​](#operations-1 "Direct link to Operations")

The operations invocation which came from the clients through the network will be performed on your local `Hello` object. The result of the operation (if any) will be returned only to a client, from which the message was send, not all clients.

#### Signals[​](#signals-1 "Direct link to Signals")

The MQTT service adapters add handlers for all the signals to the local implementation which send MQTT messages with information about signal emission with their arguments. On signal emission the generated implementation executes all handlers added for this signal. All the signals emitted by your local `Hello` objects are forwarded to all connected clients.

#### Use `HelloServiceAdapter`[​](#use-helloserviceadapter "Direct link to use-helloserviceadapter")

`HelloServiceAdapter` an adapter of your interface to the specific, object server side, version of Mqtt Client (with protcol and network layer implementation), here provided by a `ApiGear::Mqtt::ServiceAdapter` All you need to do is to pass this ServiceAdapter to your Interface Service Adapter, and request connecting to host when it is convenient for you. You can find the example code for the your `Hello` MQTT service below. Remember to run a MQTT broker of your choice.

```
import os

import sys

# add context - your relative path from this example to py_hello_world dir e.g. like this

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../')))



import apigear.mqtt

import io_world.impl

import io_world.mqtt

import io_world.api



async def main():

    service = apigear.mqtt.Service("uniqueServiceIdForHelloService")

    source_io_world_hello = io_world.impl.Hello()

    serviceAdapter_io_world_hello = io_world.mqtt.HelloServiceAdapter(source_io_world_hello, service)



    await service.connect("localhost", 1883)

    

    # Set property, the change will be sent to all clients, and local handlers if any.

    local_last = io_world.api.Message();

    local_last = "New message from server"

    source_io_world_hello.set_last(local_last);



    # Emit the signal, it will be sent to all clients

    signal_message = io_world.api.Message()

    signal_message = "New message from server"

    source_io_world_hello._just_said(signal_message)

    

    input("Press Enter to close")

    service.disconnect()



if __name__ == '__main__':

    loop = asyncio.new_event_loop()

    asyncio.set_event_loop(loop)

    loop.run_until_complete(main())
```

note

The implemented Mqtt Client (used both in apigear.mqtt.Client and apigear.mqtt.Service ) uses a thread to process network traffic. This mean, if you're having an asynchronous application, that reacting on the events inside you handlers (for all: properties, signals, operation results) may require using `loop.call_soon_threadsafe(callback, *args)` to handle the output in your main event loop.

### MQTT Messages[​](#mqtt-messages "Direct link to MQTT Messages")

For the MQTT topic structure and payload format, see **[ApiGear over MQTT](/docs/protocols/mqtt/mapping.md)**.
