---
title: Python SDK Blueprint
description: Python is a programming language that lets you work quickly and integrate systems more effectively.
position: 406
category: Blueprints
version: 1.0
menuTitle: Python SDK
features:
  - Python Module
  - Python Interface
  - Blueprint feature switches
---

The Python template generates a python module based on the module name and exposes clean interfaces based on the module interface inside an API module. A core API which contain the single source of truth and a module code which is created as scaffolding code. For each interface a test file is also created.

The Python module allows to be extended and implemented based on the API core and inside the scaffolding files.

Following blueprint feature switches are supported:

- API - Only creates the interface files for you
- Scaffold - Creates a full project with reference implementation and build system support.

In the generated source code you will find a `README` which explain in great detail how to build and use the code.

# API

## Interfaces

An interface like this counter will be directly transformed to an abstract class.

```yaml
interfaces:
  - name: Counter
    properties:
      - name: count
        type: int
    operations:
      - name: increment
```

The class will then later be used to be implemented by the customer.

```py
class ICounter:
    @property
    def count(self):
        raise NotImplementedError

    def increment(self):
        raise NotImplementedError
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

A data structure is transformed to a python class. As these API structs shall be able to be used outside of the module the fields are public.

```py
class Message:
    def __init__(self):
        self.text : str = str()
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

```py
from enum import Enum

class Direction(Enum):
    Up = 0
    Down = 1
    Left = 2
    Right = 3

```
