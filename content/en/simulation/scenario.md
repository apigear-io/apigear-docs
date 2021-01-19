---
title: Scenario
description: A scenario is a document describing simulation behavior
position: 502
category: Simulation
version: 1.0
menuTitle: Scenarios
---

A scenario is a document describing the data and behavior of a service for the simulation protocol.

It can provide simulation to one or more services and their operation endpoints. The format of a scenario is described here.



```yaml
scenario: "1.0"
name: "count scenario"
version: "1.0"
services:
  demo.Counter:
    state:
      count: { value: 0 }
    operations:
      increment:
        actions:
          - add: [ $state.count, $params.step ]
        return:
          value: 5
      decrement:
        actions:
          - add: [ $state.count, $params.step ]
          - add: [ $state.count ]
        return:
          schema:
            type: integer
            maximum: 1000
            minimum: 0
    playbook:
      interval: 2000
      loop: true
      steps:
        - name: increment
          sequence:  # modified state
            - set: [ $state.count,  1 ]
            - notify: [ shutdown, 10]
        - name: increment
          sequence:
          - add: [ $state.count,  1 ]
          - notify: [ shutdown, 9]
        - name: increment
          sequence:
            - add: [ $state.count,  1 ]
            - notify: [ shutdown, 8]
        - name: clear
          sequence:
            - set: [ $state.count, 0]
            - notify: [ shutdown, 7]
```

## Variables

In actions you can reference the state and an operation parameters using the `$state` and the `$params` prefix. You can use them to read the value of the variable or to write to the variable.

## Action

At several places the scenario uses action sequences. A sequence is a list of actions each action is an object with a key of the action command and a array value as the action arguments.

```yaml
- command: [ argument list ]
```

In actions 
Typical actions are
* `set` sets a value `- set: [$state.count, 5 ]` - similar the `state.count = 5`
* `notify` emits a signal from the simulation: `- notify: [ shutdown, { timeout: 5 }]` similar to `notify('shutdown', { timeout: 5} )`

other actions are `add`, `sub`, `mult`, `div`. There are more to come.

## Playbooks

A playbook is a time based execution of actions. A playbook has a name and can be triggered from an action or can run automatically on simulation start.

```yaml
playbooks:
  - name: increment counter
    interval: 2000 # 2 seconds  
    loop: true
    steps:
      - name: increment
        sequence:  # modify state
        - set: [ $state.count,  1 ]
        - notify: [ shutdown, 10]
      - name: clear
        sequence:
        - set: [ $state.count, 0]
        - notify: [ shutdown, 7]    
```

The interval defined the tick and on each tick a step is running. If loops is true then the playbook will start again after finished.

## Schema Data

When a state or return statement  defines a value it can be defined as static value using the `value` notation or it can also be mocked using a `schema` notation.

For example to create a random count value you can between 0 and 100 you can create a schema.

```yaml
scenario: "1.0"
name: "count scenario"
version: "1.0"
services:
  demo.Counter:
    state:
      count: 
        schema:
            type: integer
            minimum: 0
            maximum: 100
```

Now on every call to retrieve the service state it will return a number between 0 and 100.


