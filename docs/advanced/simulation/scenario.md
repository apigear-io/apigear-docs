---
sidebar_position: 2
---

# Scenario Documents

A scenario is a document describing the data and behavior of one or more services for the simulation server. The simulation server is embedded into the ApiGear Studio tool. The simulation server can be used using the simulation protocol over HTTP or WebSockets. Support for the simulation protocol does come with most of ApiGear template Templates.

It can provide simulation to one or more services and their operation endpoints. The format of a scenario is described here.

```yaml
schema: apigear.scenario/1.0
name: "count scenario"
version: "1.0"
interfaces:
  - name: demo.Counter
    properties:
      count: 0
    operations:
      - name: increment
        actions:
          - $set: { count: 1 }
      - name: decrement
        actions:
          - $set: { count: 0 }
```

## Action

At several places the scenario uses action sequences. A sequence is a list of actions each action is an object with a key of the action command and a array value as the action arguments.

```yaml
- $cmd: { cmd-options }
```

When an action modifies a property, the property change signal is emitted automatically.

Typical actions are

- `$set` - sets a value 
  - `- $set: { count: 1 }` 
  - similar to `set('count', 1)`
- `$signal` - emits a signal from the simulation
  - `- $signal: { shutdown: { timeout: 5 } }` 
  - similar to `emit signal('shutdown', { timeout: 5} )`
- `$return` - returns a result from an operation: 
  - `- $return: { count: 1 }` 
  - similar to `return { count: 1 }`

## Sequences

A sequence is a list of actions, organized into steps. Each step is executed in order. Actions of a step are also executed in order. A sequence can be looped or stepped through using an interval.


```yaml

```yaml
sequence:
  - name: increment counter
    interval: 2000 # 2 seconds
    loop: true # start over when at end
    steps: # step is called every 2 secs according to interval
      - name: increment
        actions: # list of actions
          - $set: { count: 1 }
          - $signal: { shutdown: [ 5 ] }
      - name: clear
        actions:
          - $set: { count: 0 }
          - $signal: { shutdown: [ 5 ] } }
```

The interval defined the tick and on each tick a step is running. If loops is true then the playbook will start again after finished.

