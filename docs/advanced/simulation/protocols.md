---
sidebar_position: 3
---

# Network Protocols

The simulation framework allows client to simulate interfaces using a simulation server. A client receives simulated responses or behavior based on a provided scenario document.

The simulation server can be called via HTTP or websocket using JSON-RPC. The different protocols and behavior will be explained below.

## Example

We will use always our counter example which looks like this:

```yaml
schema: apigear.module/1.0
name: demo
version: "1.0"

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

We can identify an operation using an URI like this `demo.Counter/increment` and a service like this `demo.Counter`.

As a convention, calling the service should always give back the current state, which is the sum of properties. Calling an operation should always return a valid value defined by the `return` type.

### HTTP Endpoint

The HTTP endpoint is the simples to use but is also limited in functionality. It only support direct responses on requests. Whereas the websockets protocols allow also playbook based active simulations.

You can start the simulation server using a pre-defined, manually entered or auto-deducted port. If you use the local server then the endpoint will be available at `http://localhost:${PORT}/simulation/`. The call must be a post request and the payload must be a JSON document in the form of:

```json
{
  "symbol": "${module}.${object}/${operation}",
  "data": "${params}"
}
```

Where the payload is based on the ObjectAPI endpoint notation. `${module}.${$interface}/${operation}`.

Using the [http](https://httpie.io/) tool we can write

```shell
http :3000 symbol=demo.Counter/increment data="{ step: 5 }"
```

It is also valid to call the endpoint without parameters, in this case some actions relying on the step parameter might fail if defined.

```shell
http :3000 symbol=demo.Counter/increment
```

To get the latest state you can call the object directly

```shell
http :3000 symbol=demo.Counter
```

The response will be the state

```json
{
  "count": 25
}
```

of the interface.

## JSON RPC over WebSockets

The second supported simulation protocol is the [JSON-RPC](https://www.jsonrpc.org/specification) over websocket protocol. The simulation is fully supported and supports also active simulations.

### Protocol Flow

The communication flow is typically initiated by the client by requesting the state of an object using the `simu.state` call.

The client can call operations on the simulation. A call can trigger other signals from the simulation as part of the scenario `actions`.

An simulation which contains a playbook can actively send signals to the client without an external trigger.

```
Client          		Simulation    		Description

simu.call ->                 				call an operation
simu.state ->                 			return property changes
            			<- simu.state     	notify property changes
            			<- simu.signal    	emit a signal
```

### Simulating Operations

To call an operation endpoint the format is

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "simu.call",
  "params": {
    "symbol": "demo.Echo/say",
    "data": {
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

## Interface State

To get the state of a service you need to call the service itself using the `simu.state` method.

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "simu.state",
  "params": {
    "symbol": "demo.Counter"
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

### Simulating Signals

The server might also call the client to notify the client about server side events, e.g. state changes or signal invoked by an action.

The state changes are announced through sending a JSON-RPC notification back to the client. A notification in JSON-RPC looks like a call, but it does not have an ID parameter and no response is send back from the client.

```json
{
  "jsonrpc": "2.0",
  "method": "simu.state",
  "params": {
    "symbol": "demo.Counter",
    "data": {
      "count": 10
    }
  }
}
```

The fields response are the changed fields in the state object and need to merged with the existing client side state. To get a full state you need to call the service.

The simulation will also send signals as noted in the ObjectAPI back to the client. For this a `simu.signal` RPC message is used.

```json
{
  "jsonrpc": "2.0",
  "method": "simu.signal",
  "params": {
    "symbol": "demo.Hello/shutdown",
    "data": {
      "timeout": 10
    }
  }
}
```
