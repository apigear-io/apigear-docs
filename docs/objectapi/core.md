---
sidebar_position: 2
---

# API Foundation

ObjectAPI is defined in terms of modules inside a system. Each module is described as an ObjectAPI document.

ObjectAPI is a YAML based specification to describe objects as interfaces.

## Format

ObjectAPI is described as an open specification format using JSON Schema. Every ObjectAPI document must conform to this JSON schema definition.

:::tip
While the the API is described in JSON, other formats like YAML can be used as input formats and are automatically converted to JSON by the ObjectAPI tooling.
:::

Unless otherwise noted all file names in this specification are case sensitive.

## Managing Documents

The ObjectAPI documents are simple files on the file system. Several files can be processed together and form a system. It is convention that the file name matches the module name.

- `*.module.yaml` | `*.module.json` - ObjectAPI document

Other files can be added which contain meta information for the API modules. They allow to inject additional information which is not relevant or available during API definitions.

- `*.module.meta.yaml` | `*.module.meta.json` - ObjectAPI meta information injected into the relevant APIs.

So if a module is name `org.example` the ObjectAPI document should be called `org.example.module.yaml`

:::tip
Outside of the ObjectAPI specification a solution document format is described which binds several modules together and links them to a code template for code generation.
:::

## Data Types

In the ObjectAPI specification data types are used in many locations. State, Method return types and parameters, signal parameters or structures.

Data fields are added at the same level to describe the data name and type. For example for the interface properties, these are:

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

- `bool` - A simple boolean value (true or false)
- `int` - A signed integer value
- `float` - A floating point value
- `string` - A string value

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
    items: Message
```

Primitive types are always start with a lower case character and symbols always with an upper case character.

:::tip
The code templates will change the casing based on the target language preferences.
:::

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
    type: Message
  - name: msg2
    type: array
    items: struct
    symbol: Message
```

Outside the module, the module itself needs to be imported and the type needs to be used with its fully qualified name

```yaml
imports:
  - org.example

interfaces:
  - name: Interface1
    properties:
      - name: msg1
        type: org.example.Message
```

- `org.example.Message` - external symbol

Note: Not every language profile does support importing.

## Rich Text Formatting

Throughout the specification `description` support the markdown syntax.
