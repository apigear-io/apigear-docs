# Error Messages

Error can be raised in several places. The error message is always send back to the client with the message type of the original message. The error message is a JSON array with the following format:

```json
[ ERROR, MsgType, RequestID, Error ]
```

- `MsgType`: integer value of message type
- `RequestID`: the request id of the original message
- `Error`: a JSON string with the error message

## No Such Object

The error message is send if the client tries to link to a non existing object.

```json
[ ERROR, LINK, 0, "No such object" ]
```

This error can also be raised during an unlink operation if the object does not exists.

```json
[ ERROR, UNLINK, 0, "No such object" ]
```

## No Such Property

The error message is send if the client tries to set a property on a non existing property.

```json
[ ERROR, SET_PROPERTY, 0, "No such property" ]
```

## No Such Method

The error message is send if the client tries to invoke a non existing method.

```json
[ ERROR, INVOKE, 0, "No such method" ]
```

## No Such Module

The error message is send if the client tries to link to a non existing module.

```json
[ ERROR, LINK, 0, "No such module" ]
```

This error can also be send during an unlink operation if the module is not linked.

```json
[ ERROR, UNLINK, 0, "No such module" ]
```

## Invalid Message

The error message is send if the client sends an invalid message.

```json
[ ERROR, 0, 0, "Invalid message" ]
```

## Invalid Message Type

The error message is send if the client sends an invalid message type.

```json
[ ERROR, 0, 0, "Invalid message type" ]
```
