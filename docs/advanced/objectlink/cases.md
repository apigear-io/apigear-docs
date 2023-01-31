---
sidebar_position: 2
---

# Use Cases

Object Link can be used to link the UI layer to the underlying service layer but also to link low-level things like a sensor to a high-level thing like a dashboard. Due to the combination of properties/operations and signals the protocol can be used to describe a wide range of use cases.

It can be used during development using JSON and later switch to a binary protocol for production for faster communication.

## Services

When designing embedded platforms, it is often necessary to provide a state full design. The state is inherent from the device (e.g. temperature, location, current radio station). These states are often used by multiple applications. The applications are often not aware of each other and the state is not synchronized. This leads to a lot of duplicated code and a lot of complexity.

The protocol allows to share state between applications. ANd the state is automatically synced across applications and platforms. The applications can be written in different languages and can be running on different platforms. The protocol is designed to be used with the [ObjectAPI](/docs/advanced/objectapi/intro) specification. This allows to define a common API surface for the applications.

Protocol Features Used:

- **Property**: read/write/notify
- **Operations**: request/response
- **Signals**: notify

## Sensors

A sensor can just use the property aspects of the protocol. The sensor can send property changes to the application. The application can then use the property changes to update the UI. For this the sensor does have to be linked to the remote object.

Protocol Features Used:

- **Property**: write

## Actuators

An actuator can just use the property aspects of the protocol. The application can send property changes to the actuator. The actuator can then use the property changes to update the state of the actuator. For this the actuator has to be linked to the remote object to receive changes.

Protocol Features Used:

- **Property**: notify

## Remote Procedure Calls

The protocol can be used to implement remote procedure calls. The protocol is designed to be used with the [ObjectAPI](/docs/advanced/objectapi/intro) specification. This allows to define a common API surface for the applications. The protocol can be used to implement a remote procedure call. The request is send to the service and the service replies with the result.

Additional the service can notify the client about events using the signal aspect of the protocol.

Protocol Features Used:

- **Operations**: request/response

## Highly Interactive Services

The protocol can be used to implement highly interactive services. For example for a whiteboard application the protocol can dynamically update the UI about the current location of the pen and it's state. Actions can be expressed as operations using the request/reply aspect of the protocol.
The signals can be used to send a constant stream of events to the client.

Protocol Features Used:

- **Property**: read/write/notify
- **Operations**: request/response
- **Signals**: notify
