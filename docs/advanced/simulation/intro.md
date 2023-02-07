---
sidebar_position: 1
---

# Introduction

## What is a simulation?

A simulation is a virtual representation of a service. It can be used to test, demonstrate or develop applications without the need to have the actual service available.

## What is a simulation server?

A simulation server is a server which hosts one or more simulations in form fo scenarios. It can be used to test, demonstrate or develop applications without the need to have the actual service available.

## What is a simulation scenario?

A simulation scenario is a set of interfaces and their properties, operations, signals which can be loaded into a simulation server. A scenario can react to operations and can also be used to change properties or send signals.

A scenario allows also to define sequences of actions which can be triggered by an operation call or by name. The actions can change the property values of the service or send signals.

Simulation scenarios can be written using a YAML schema.

Based on our counter demo we can write a YAML based scenario like this.

```yaml
schema: apigear.scenario/1.0
name: "demo scenario"
version: "1.0"
interfaces:
  - name: demo.Counter:
    properties:
      count: 0
    operations:
      - name: increment:
        actions:
          - $set { count: 10 }
      - name: decrement:
        actions:
          - $set { count: -10 }
  - name: demo.Echo:
    operations:
      - name: say:
        actions:
          - $return { value: "Hello World" }
```

This is a simple scenario which imitate a `demo.Counter` and `demo.Echo` interface.

When this scenario is loaded into the simulation server a client can just call these simulation operations. This scenario does not include sequences.

## What is a simulation protocol?

A simulation protocol is a way to interact with a simulation server. It defines how to call operations, how to get the state of an interface and how to trigger sequences. The simulation server currently supports the ObjectLink protocol which is available in the [ObjectLink](/docs/advanced/objectlink/intro) section.

