---
sidebar_position: 2
---

# Network Protocols

The API Monitor protocol is a simple HTTP post call to a dedicated http server instance embedded in the ApiGear Studio.

The protocol is resembled after the simulation protocol.

The message is typically a JSON message send to an HTTP endpoint depending if an operation call, state change or a signal is reported.

_Note: An extended version of the monitoring protocol is planned to provide detailed API analytics information our upcoming cloud API analytics solution for devices._

## HTTP Tracing

The http tracing endpoint can be looked up under ApiGear Studio settings page.

All HTTP traces work in batch mode. You need to send an array of traces to the server. The oldest trace should be the first element in the array. This should normally be the order you recieve the traces from a FIFO queue.

In case no ID was transferred we generate a running ID based on the current timestamp.

### Tracing operation calls

For an method call the message looks like this:

An API call occurs when the client calls an method. The uri is the module name, joined with the interface name. A URI fragment (`#`) is added for the interface methods.

```json
{
  "type": "call",
  "symbol": "${module}.${interface}/${method}",
  "data": "${params}"
}
```

### Tracing property changes

A state change can be an partial update or a full update of all interface properties. The state is always an JSON object.

```json
{
  "type": "state",
  "symbol": "${module}.${interface}",
  "data": "${state}"
}
```

### Reporting a signal notification

For an interface signal the message looks like this

```json
{
  "type": "signal",
  "symbol": "${module}.${interface}/${signal}",
  "data": "${params}"
}
```

## Websocket Tracing

Tracing over web sockets uses the JSON-RPC protocol. The protocol is mostly the same as the http protocol.

The JSON RPC method is called `trace` and uses the same endpoint as the simulation server for ApiGear Studio.
Where in the HTTP trace protocol the source as part of the endpoint, in the websocket protocol it is part of the message.

Otherwise all parameters, especially also the `type` are the same.

The websocket tracing endpoint can be looked up under ApiGear Studio settings page.

```json
{
  "jsonrpc": "2.0",
  "method": "trace",
  "params": {
    "id": "1000230240",
    "source": "local-device",
    "type": "call",
    "symbol": "count.Counter/increment",
    "data": {}
  }
}
```
