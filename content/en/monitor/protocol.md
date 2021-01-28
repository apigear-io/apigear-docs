---
title: Monitoring Protocol
description: Communicate with the API monitor server
position: 602
category: Monitor
version: 1.0
menuTitle: Protocol
---

The API Monitor protocol is a simple HTTP post call to a dedicated http server instance embedded in the ApiGear Studio.

The protocol is resembled after the simulation protocol.

The message is typically a JSON message send to an HTTP endpoint depending if an operation call, state change or a signal is reported.

*Note: An extended version of the monitoring protocol is planned to provide detailed API analytics information our upcoming cloud API analytics solution for devices.*


## Tracing operation calls

For an method call the message looks like this:

An API call occurs when the client calls an method. The uri is the module name, joined with the interface name. A URI fragment (`#`) is added for the interface methods.

```json
{
    "type": "call",
    "symbol": "${module}/${interface}#${method}",
    "params": "${params}",
}
```

## Tracing property changes

A state change can be an partial update or a full update of all interface properties. The state is always an JSON object.

```json
{
    "type": "state",
    "symbol": "${module}/${interface}",
    "state": "${state}",
}
```


## Reporting a signal notification

For an interface signal the message looks like this

```json
{
    "type": "signal",
    "symbol": "${module}/${interface}#{signal}",
    "params": "${params}",
}
```


