---
sidebar_position: 5
---

# Golang SDK Template

The Go template generates a Golang module based on the module name and exposes clean interfaces based on the module interface. A core API which contain the single source of truth and a module code which is created as scaffolding code. For each interface a test file is also created.

The Go module allows to be extended and implemented based on the API core and the scaffolding files.

Following template feature switches are supported:

- API - Only creates the interface files for you
- Scaffold - Creates a full project with reference implementation and build system support.

In the generated source code you will find a `README` which explain in great detail how to build and use the code.

# API

## Interfaces

An interface like this counter will be directly transformed to an abstract C++ class.

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

```go
type Counter interface {
    GetCount() int
    SetCount(count int)
    Increment()
}
```

## Data Structures

A data structure like this message which contains one field, called text is transformed into a C++ class with public fields.

```yaml
structs:
  - name: Message
    fields:
      - name: text
        type: string
```

A data structure is transformed to a Go struct type. As these API structs shall be able to be used outside of the module the fields are public.

```go
type Message struct {
    Text string = ""
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

```go
type Direction int

const (
  Up = 1
  Down = 2
  Left = 3
  Right = 4
)
```
