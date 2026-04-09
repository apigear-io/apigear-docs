# Error Messages

Error can be raised in several places. The error message is always send back to the client with the message type of the original message. The error message is a JSON array with the following format:

```
[ ERROR, MsgType, RequestID, ErrorCode ]
```

* `MsgType`: integer value of message type
* `RequestID`: the request id of the original message
* `ErrorCode`: a JSON string value with the error code

## Error Codes[​](#error-codes "Direct link to Error Codes")

Error codes are string messages starting with `olink.error.` followed by a short description of the error. The following error codes are defined:

* `olink.error.invalid_message`: the message is not a valid JSON array
* `olink.error.invalid_message_type`: the message type is not a valid integer
* `olink.error.no_such_module`: the module does not exist
* `olink.error.no_such_object`: the object does not exist
* `olink.error.no_such_property`: the property does not exist
* `olink.error.no_such_operation`: the operation does not exist

tip

Currently it is not possible to add details to the error message. This will be added in a future version.

## Invalid Message[​](#invalid-message "Direct link to Invalid Message")

The error message is send if the client sends an invalid message.

```
[ ERROR, 0, 0, "olink.error.invalid_message" ]
```

## Invalid Message Type[​](#invalid-message-type "Direct link to Invalid Message Type")

The error message is send if the client sends an invalid message type.

```
[ ERROR, 0, 0, "olink.error.invalid_message_type" ]
```

## No Such Module[​](#no-such-module "Direct link to No Such Module")

The error message is send if the client tries to link to a non existing module.

```
[ ERROR, LINK, 0, "olink.error.no_such.module" ]
```

This error can also be send during an unlink operation if the module is not linked.

```
[ ERROR, UNLINK, 0, "olink.error.no_such.module" ]
```

## No Such Object[​](#no-such-object "Direct link to No Such Object")

The error message is send if the client tries to link to a non existing object.

```
[ ERROR, LINK, 0, "olink.error.no_such.object" ]
```

This error can also be raised during an unlink operation if the object does not exists.

```
[ ERROR, UNLINK, 0, "olink.error.no_such.object" ]
```

## No Such Property[​](#no-such-property "Direct link to No Such Property")

The error message is send if the client tries to set a property on a non existing property.

```
[ ERROR, SET_PROPERTY, 0, "olink.error.no_such.property" ]
```

## No Such Operation[​](#no-such-operation "Direct link to No Such Operation")

The error message is send if the client tries to invoke a non existing operation.

```
[ ERROR, INVOKE, 0, "olink.error.no_such.operation" ]
```
