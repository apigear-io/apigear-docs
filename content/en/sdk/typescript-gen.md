---
title: TypeScript SDK Blueprint
description: TypeScript extends JavaScript by adding types.
position: 405
category: Blueprints
version: 1.0
menuTitle: TypeScript SDK
features:
  - TypeScript Module
  - TypeScript Interface
  - Blueprint feature switches
---

The TypeScript template generates a ES6 module based on the module path and exposes clean interfaces based on the module interface. A core API which contain the single source of truth and a module code which is created as scaffolding code. For each interface a test file is also created.

The TypeScript module allows to be extended and implemented based on the API core and the scaffolding files.

Following blueprint feature switches are supported:

- API - Only creates the interface files for you
- Scaffold - Creates a full project with reference implementation and build system support.

In the generated source code you will find a `README` which explain in great detail how to build and use the code.

# API

## Interfaces

An interface like this counter will be directly transformed to an TypeScript interface

```yaml
interfaces:
  - name: Counter
    properties:
      - name: count
        type: int
    operations:
      - name: increment
```

The interface will then later be used to be implemented by the customer. A reference implementation is created by the scaffold feature.

```js
export interface ICounter {
  count: number

  increment(): void
}
```

## Data Structures

A data structure like this message which contains one field, called text is transformed into a class with public fields.

```yaml
structs:
  - name: Message
    fields:
      - name: text
        type: string
```

A data structure is transformed to a class with public fields.

```js
export class Message {
  text: string;
}
```

## Enumerations

A enumeration will be transformed to a set of constants.

```yaml
enums:
  - name: Direction
    members:
      - name: Up
      - name: Down
      - name: Left
      - name: Right
```

This is transformed to

```js
export enum Direction {
  Up = 0,
  Down = 1,
  Left = 2,
  Right = 3,
}
```
