# Protocol

ObjectLink is a protocol to link a remote object to a local object using a websocket based IPC.

The communication protocol allows objects to communicate with each other. A object is a collection of properties, methods and signals and are described using the ApiGear ObjectAPI.

In general a local object will communicate with a remote object and properties will be synced, methods can be called and remote signals can be received. 

The main use case is to extend the local objects with remote capabilities on differtent platforms across different technologies. 


## JSON Notation

Throughout the protocol description, the JSON notation is used. All data types must be valid JSON data types.

For transport binary protocols are supported, see list below:

- [JSON](https://www.json.org/json-en.html)
- [MsgPack](https://msgpack.org/index.html)
- [CBOR](https://cbor.io/)

The client and server needs to know their transport and encoding in advance. There is no negotiation in place to keepe the protocol simple.

## Message Types

* [Lifecycle](lifecycle)
	* `--> LINK` - link the local object with a remote object
	* `<-- INIT` - initialized the local object with properties from the remote object
	* `--> UNLINK` - unlinks a local object from a remote object
* [Properties](properties)
    * `--> SET_PROPERTY`  - send a property change to a remote object
	* `<-- PROPERTY_CHANGE` - sends property changes to all linked client objects
* [Methods](methods)
	* `--> INVOKE` - invoke a method on a remote object
	* `<-- INVOKE_REPLY` - reply of an remote invokation
* [Signals](signals)
	* `<-- SIGNAL` - send remote events back to all linked client objects


## Message Formats

| Direction | Message           | Value | Format                                  |
|-----------|-------------------|-------|-----------------------------------------|
| `->`      | `LINK`            | 10    | [ MsgType, ObjectId ]                   |
| `<-`      | `INIT`            | 11    | [ MsgType, ObjectId, Dict ]             |
| `->`      | `UNLINK`          | 12    | [ MsgType, ObjectId ]                   |
| `->`      | `SET_PROPERTY`    | 20    | [ MsgType, PropertyId, Value ]          |
| `<-`      | `PROPERTY_CHANGE` | 21    | [ MsgType, ObjectId, Value ]            |
| `->`      | `INVOKE`			| 30    | [ MsgType, RequestID, MethodId, Args ]  |
| `<-`      | `INVOKE_REPLY`    | 31    | [ MsgType, RequestID, Value ]           |
| `<-`      | `SIGNAL`          | 40    | [ MsgType, SignalId, Args ]             |

* `MsgType`: integer value of message type
* `ObjectId`: a string identifying the resource as module and object name (e.g. `"demo.Calc"`)
* `Dict`: A JSON dictionary, e.g. `{ "count": 0}`
* `Args`: A JSON array, e.g. `[ 1, 2 ]`
* `PropertyId`: A ObjectID with a property path (e.g. `"demo.Calc/count"`)
* `Value`: Any valid JSON value including JSON arrays or objects
* `MethodId`: A ObjectID with a method path (e.g. `"demo.Calc/increment"`)
* `RequestId`: A unique integer value identifying the request during the connection. Typically a value incremented by one on each request and starting by 1 and then reset to 1 by max value.
* `SignalId`: A ObjectID with a signal path (e.g. `"demo.Calc/shutdown"`)
