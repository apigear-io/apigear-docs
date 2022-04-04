# WAMP Mapping

WAMP is a bidirectional websocket based protocol which works nicely with ObjectAPIs communication patterns. The mapping describes here uses WAMP as a client/service form.

WAMP is described in terms of call/response and publish/subscribe patterns. Where operations typically take the call/response part and state and signals take the publish/subscribe part.

<note>In general all calls uses parameter arrays in the order they appear in the API description. Only state related calls use key-value maps to support partial state updates.</note>

## Client Side Mapping

- **module**: Is a namespace and does not map directly.
- **interface**:
  - CALL: `${module}.${interface}._get` - return state of the interface
  - CALL: `${module}.${interface}._set` - sets the state of the interface
  - SUBSCRIBE: `${module}.${interface}` - subscribes to interface state changes
- **operation**:
  - CALL: `${module}.${interface}.${operation}` - invokes the operation
- **signal**
  - SUBSCRIBE: `${module}.${interface}.${signal}` - subscribes to signal events

Structures are mapped like the normal JSON mapping of ObjectAPI data types. Same applies to enumerations.

### Service Side Mapping

- **module**: Is a namespace and does not map directly.
- **interface**:
  - REGISTER: `${module}.${interface}._get` - to provide state of the interface
  - REGISTER: `${module}.${interface}._set` - to set the state of the interface
  - PUBLISH: `${module}.${interface}` - to notify clients about state changes
- **operation**:
  - REGISTER: `${module}.${interface}.${operation}` - to register interface operation
- **signal**
  - PUBLISH: `${module}.${interface}.${signal}` - to publish interface signal
