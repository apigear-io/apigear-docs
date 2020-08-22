---
title: "Basics"
description: "A temperature sensor tutorial using ApiGear and Raspberry Pi"
position: 203
category: "ObjectAPI"
version: 1.0
---

ObjectAPI is defined in terms of modules inside a layer. Each module is captured inside a ObjectAPI module document. ObjectAPI is a YAML based specification with a linked schema document for validation.

## Format

The files describing the ObjectAPI in accordance to APIGear ObjectAPI specification are described in JSON syntax and must conform to the JSON standard.

While the the API is described in JSON, other formats (YAML) can be used as input formats.

Unless otherwise noted all file names in this specification are case sensitive.

## File Structure

There exists a set of files where each file represents an API module. Ideally, the file name matches the module name. Other files can be added which contain meta information for the API modules. They allow to inject additional information which is not relevant or available during API definitions.

- `*.oapi.yaml` | `*.oapi.yml` | `*.oapi.json` - ObjectAPI document
- `*.oapi.meta.yaml` | `*.oapi.meta.yml` | `*.oapi.meta.json` - ObjectAPI meta information injected into the relevant APIs.

So if a module is name `org.example` the ObjectAPI document should be called `org.example.oapi.yml`

## Data Types

In the ObjectAPI specification data types are used in many locations. Properties, Operations, Operation Parameters, Signal Parameters or Structures.

Data fields are added at the same level to describe the data name and type. For example for properties, these are:

```yaml
properties:
  - name: count
    type: int
```

The general types available to ObjectAPI are:

- Primitives (`bool`, `int`, `float`, `string`)
- Containers (`arrays`)
- Complex (`structures`, `enumerations`)

## Primitives

Data types can be re-presented in different forms in different programming languages. They all need to be convertible to JSON data types on request.

- `bool`
- `int`
- `float`
- `string`

## Arrays

An array is an index based list of primitive or complex data types. Further nesting of containers are not supported but can be achieved using structs as array items. A data type is converted into a container by setting the type to array and specifying the containing type in the items key.

For example an integer array can be noted like this:

```yaml
properties:
  - name: names
    type: array
    items: string
```

If an array does contain a symbol as containing type, then the symbol name can be used in the items key.

```yaml
properties:
  - name: messages
    type: array
    items: { ref: Message }
```

Primitive types are always lowercase and symbols are always uppercase. The cases might change in the target language.

## Complex Types

A symbol is a named element inside a module. This can be either an interface, struct or enum/flag symbol.

```yaml
structs:
  - name: Message
```

Inside the same module the type can be referenced by the name of the symbol using a `ref`. This holds true for all symbols.

```yaml
properties:
  - name: msg1
    type: { ref: Message }
  - name: msg2
    type: array
    items: struct
    symbol: { ref: Message }
```

Outside the module, the module itself needs to be imported and the type needs to be used with its fully qualified name

```yaml
imports:
  - org.example

interfaces:
  - name: Interface1
    properties:
      - name: msg1
        type: { ref: org.example.Message }
```

- `org.example.Message` - external symbol

Note: Not every language profile does support importing.

## Rich Text Formatting

Throughout the specification `description` support the markdown syntax.
