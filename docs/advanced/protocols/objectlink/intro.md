---
sidebar_position: 1
---

# Introduction

ObjectLink is an IPC protocol based on the idea to link a local object to a remote object a network connection. Object link allows users to communicate state full objects over a network connection. The protocol is designed to be used with the [ObjectAPI](/docs/objectapi/intro) specification.

The design is based on several main concepts:

- Properties are reactive and synchronized between the local and remote object
- Operations allows a request/response communication between the local and remote object
- Signals are used to notify the local object about events on the remote object
- Modules are used to group objects and to define a namespace
- The local and remove object a represented by an easy to use object API surface
- The object API surface can be defined by an ObjectAPI document

## JSON Notation

Throughout the protocol description, the JSON notation is used. All data types must be valid JSON data types.

For transport several protocols are supported, see list below:

- [JSON](https://www.json.org/json-en.html)
- [MsgPack](https://msgpack.org/index.html)
- [CBOR](https://cbor.io/)

The client and server needs to know their transport and encoding in advance. There is no protocol negotiation designed. This allows us to keep the protocol simple.

## Message Types

- [Lifecycle](./lifecycle)
  - `--> LINK` - link the local object with a remote object
  - `<-- INIT` - initialized the local object with properties from the remote object
  - `--> UNLINK` - unlinks a local object from a remote object
- [Properties](./properties)
  - `--> SET_PROPERTY` - send a property change to a remote object
  - `<-- PROPERTY_CHANGE` - sends property changes to all linked client objects
- [Methods](./methods)
  - `--> INVOKE` - invoke a method on a remote object
  - `<-- INVOKE_REPLY` - reply of an remote invokation
- [Signals](./signals)
  - `<-- SIGNAL` - send remote events back to all linked client objects
- [Errors](./errors)
  - `<-- ERROR` - send an error back to the client with the msg type of the original message

## Message Formats

| Direction | Message           | Value | Format                                 |
| --------- | ----------------- | ----- | -------------------------------------- |
| `->`      | `LINK`            | 10    | [ MsgType, ObjectId ]                  |
| `<-`      | `INIT`            | 11    | [ MsgType, ObjectId, Dict ]            |
| `->`      | `UNLINK`          | 12    | [ MsgType, ObjectId ]                  |
| `->`      | `SET_PROPERTY`    | 20    | [ MsgType, PropertyId, Value ]         |
| `<-`      | `PROPERTY_CHANGE` | 21    | [ MsgType, ObjectId, Value ]           |
| `->`      | `INVOKE`          | 30    | [ MsgType, RequestID, MethodId, Args ] |
| `<-`      | `INVOKE_REPLY`    | 31    | [ MsgType, RequestID, Value ]          |
| `<-`      | `SIGNAL`          | 40    | [ MsgType, SignalId, Args ]            |
| `<-`      | `ERROR`           | 50    | [ MsgType, MsgType, RequestID, Error ] |

- `MsgType`: integer value of message type
- `ObjectId`: a string identifying the resource as module and object name (e.g. `"demo.Calc"`)
- `Dict`: A JSON dictionary, e.g. `{ "count": 0}`
- `Args`: A JSON array, e.g. `[ 1, 2 ]`
- `PropertyId`: A ObjectID with a property path (e.g. `"demo.Calc/count"`)
- `Value`: Any valid JSON value including JSON arrays or objects
- `MethodId`: A ObjectID with a method path (e.g. `"demo.Calc/increment"`)
- `RequestId`: A unique integer value identifying the request during the connection. Typically a value incremented by one on each request and starting by 1 and then reset to 1 by max value.
- `SignalId`: A ObjectID with a signal path (e.g. `"demo.Calc/shutdown"`)
- `Error`: A string describing the error
