---
title: "Interfaces"
description: "A temperature sensor tutorial using ApiGear and Raspberry Pi"
position: 5
category: "ObjectAPI"
version: 1.0
---

An interface is the main instance to describe your software boundary using object terms. The interface consist of properties, operations and signals. Properties typically describe the state of the object and operation modify these properties. Signals notify the user of changes of the object.

The interface itself is identified by its `name` inside a module.

```yml
objectapi: 1.0
name: org.example
version 1.0

interfaces:
  - name: MyInterface
```

## Properties

Each property has a `name` and a `type` as also `description` and additional `meta` data.

```yml
# ...
interfaces:
  - name: MyInterface
    properties:
      - name: value
        type: int
```

## Operations

A operation defines the interaction with the interface. It is a collection of operations which can either manipulate the properties or return data.

Ideally you design your operations in a way that they can be divided into commands and queries. A command is an operation which does something on the object and a query collects data from the object and returns it to the user.

```yml
# ...
interfaces:
  - name: MyInterface
    operation:
      - name: command
        description: A command does not have a return type
      - name: query
        type: string
        description: A query returns data
```

Operation can have parameter arguments

```yml
# ...
interfaces:
  - name: MyInterface
    operations:
      - name: command
        params:
          - name: step
            type: int
```

The arguments do parameterize the operation.

## Signals

A signal allows the object to notify the outside world about events happening, e.g. triggered by others. A signal is like an operation, but never defines a type.

```yml
# ...
interfaces:
  - name: MyInterface
    signals:
      - name: error
        params:
          - name: code
            type: int
```
