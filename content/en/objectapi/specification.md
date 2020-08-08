---
title: "Specification"
description: "A temperature sensor tutorial using ApiGear and Raspberry Pi"
position: 99
category: "ObjectAPI"
version: 1.0
---

### Format

The files describing the ObjectAPI in accordance to APIGear ObjectAPI specification are described either in JSON syntax and conform to the JSON standard.

While the the API is described in JSON other formats (YAML) can be used as input formats.

Unless otherwise noted all file names in this specification are case sensitive.

### File Structure

There exists a set of files where each file represents an API modules. Ideally the file name represent the module name. Other files can be added which add meta information to the API modules. They allow to inject additional information which is not relevant or available during API definitions.

- `*.oapi.yaml` | `*.oapi.yml` | `*.oapi.json` - ObjectAPI document
- `*.oapi.meta.yaml` | `*.oapi.meta.yml` | `*.oapi.meta.json` - ObjectAPI meta information injected into the relevant APIs.

So if a module is name `org.example` the ObjectAPI document should be called `org.example.oapi.yml`

### Data Types

In the ObjectAPI specification data types are used in many locations. Properties, Operations, Operation Parameters, Signal Parameters and Structures.

The fields are added at the same level to describe the data name and type.

```json
"properties": [
  "name: "count",
  "type": "int"
]
```

The general types available to ObjectAPI are:

- Primitives
- Containers
- Complex

### Primitives

Data types can be re-presented in different forms i different programming language. They all need to be convertible to JSON data types on request.

- `bool`
- `int`
- `float`
- `string`

## Container

Container are array of primitive or complex data types. Further nesting of containers are not supported. A data type is converted into a container by appending `[]` to the type.

- `bool[]`
- `int[]`
- `float[]`
- `string[]`

## Complex Types

A complex type is a symbol inside a module. This can be either an interface, struct or enum/flag symbol.

```json
"structs": [
  {
    "name": "Message",
  }
]
```

Inside the same module the type can be referenced using simple the name

- Message
- Message[]

Outside the module, the module itself needs to be imported and the type needs to be used with its fully qualified name

```json
"imports": [
  "org.example"
]
```

- `org.example.Message` - external complex type
- `org.example.Message[]` - Array of external complex type

## Rich Text Formatting

Throughout the specification `description` support the markdown syntax for CommonMark.
