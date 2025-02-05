---
sidebar_position: 5
---

# Simulation Protocol

The simulation framework allows client to simulate interfaces using a simulation server. A client receives simulated responses or behavior based on a provided scenario document. 

The simulation server can be called using the ObjectLink protocol.

## Example

In the following we will use always our counter example which looks like this:

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

## ObjectLink Protocol for Simulation

The simulation server can be called using the ObjectLink protocol over WebSockets. The protocol is described in the [ObjectLink specification](/docs/advanced/protocols/objectlink/intro).

An incoming object link message is wired to a scenario document. Each scenario document can contain multiple interfaces. The interface name is used to identify the interface to be simulated. The operation name is used to identify the operation to be simulated. In case no scenario document is provided, the simulation server will use a default scenario document.


## Feeding the Simulation Server

The simulation server can be fed with a a set of JSON messages arranged in a new-line separated JSON file. The file can be provided using the `--feed` command line option of the CLI. The file can be used to feed the simulation server with a set of messages. The messages are sent to the simulation server in the order they are provided in the file. The file can be used to feed the simulation server with a set of messages. The messages are sent to the simulation server in the order they are provided in the file.

Feeding a simulation server is a great way to validate your simulation scenario or even your object-link service.


