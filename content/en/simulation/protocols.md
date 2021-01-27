---
title: Simulation Protocols
description: Different protocols used for simulating APIs
position: 503
category: Simulation
version: 1.0
menuTitle: Protocols
---

The simulation framework allows client to call a simulation server to receive fake responses or behavior based on a provided scenario document. 

TODO: see simulation

The simulation server can be called via HTTP or websocket using JSON-RPC or using a WAMP router. The different protocols and behavior will be explained below.

# Example

We will use always our counter example which looks like this:

```yaml
objectapi: "1.0"
name: 'demo'
version: '1.0'

interfaces:
  - name: Counter
    properties:
      - name: count
        type: int
    operations:
      - name: increment
        params:
          - name: step
            type: int
      - name: decrement
        params:
          - name: step
            type: int
  - name: Echo
    operations:
      - name: say
        params:
          - name: message
            type: string
        return:
          - type: string
```

We can identify an operation using an URI like this `demo.Counter.increment` and a service like this `demo.Counter`.

As a convention, calling the service should always give back the current state, which is the sum of properties. Calling an operation should always return a valid value defined by the `return` type.


# HTTP Endpoint (experimental)

The HTTP endpoint is the simples to use but is also limited in functionality. It only support direct responses on requests. Whereas the websockets protocols allow also playbook based active simulations.

You can start the simulation server using a pre-defined, manually entered or auto-deducted port. If you use the local server then the endpoint will be available at `http://localhost:${PORT}/simu/`. THe call must be a post request and the payload must be a JSON document in the form of:

```json
{
  "service": "${service}",
  "operation": "${operation}",
  "params": "${params}",
}
```

Where the payload is based on the objectAPI endpoint notation. `${module}.${$interface}.${operation}`.

Where `${module}.${interface}` forms a service identifier.

Using the [http](https://httpie.io/) tool we can write

```shell
http :3000 service=demo.Counter operation=increment params="{ step: 5 }"
```

It is also valid to call the endpoint without parameters, in this case some actions relying on the step parameter might fail if defined.

```shell
http :3000 service=demo.Counter operation=increment
```

To get the latest state you can call

```shell
http :3000 service=demo.Counter
```

The response will be the state

```json
{
  "count": 25
}
```

of the interface.

# JSON_RPC over WebSocket

The second supported simulation protocol is the [JSON-RPC](https://www.jsonrpc.org/specification) over websocket protocol. The simulation is fully supported and supports also active simulations.

## Simulate Operations

To call an operation endpoint the format is

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "simu.call",
  "params": {
    "service": "demo.Echo",
    "operation": "say",
    "params": {
      "message": "hello"
    }
  }
}
```

The response will be either an error or the return value of the operation as a JSON-RPC result response.

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": 
    "hello"
  },
}
```

# Service State
To get the state of a service you need to call the service itself using the `simu.state` method.

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "simu.state",
  "params": {
    "service": "demo.Counter",
  }
}
```

The response will be current the state of the service.

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": 
    "count": 20
  },
}
```

## Simulation Signals

The server might also call the client to notify the client about server side events, e.g. state changes or signal invoked by an action.

The state changes are announced through sending a JSON-RPC notification back to the client. A notification in JSON-RPC looks like a call, but it does not have an ID parameter and no response is send back from the client.

```json
{
  "jsonrpc": "2.0",
  "method": "simu.state",
  "params": {
    "service": "demo.Counter",
    "params": {
      "count": 10
    } 
  }
}
```

The fields response are the changed fields in the state object and need to merged with the existing client side state. To get a full state you need to call the service.


The simulation will also send signals as noted in the ObjectAPI back to the client. For this a `simu.notify` RPC message is used.

```json
{
  "jsonrpc": "2.0",
  "method": "simu.notify",
  "params": {
    "service": "demo.Hello",
    "signal": "shutdown",
    "params": {
      "timeout": 10
    } 
  }
}
```



