# API Modules

## Module Namespaces

A module is a namespace for ObjectAPI symbols like interfaces, structures and enumerations. The module bundles these symbols together in one namespace.

A module is identified by its `name` and `version`. The module name should be typically lowercase and words separated by `.`, like a reverse URI notation `org.example`.

A module can have an additional `info` block to describe in more detailed the module information.

Typically a module consist of the `apigear.interfaces` version declaration, the module name and version, the list of interfaces, structures and signals.

The version number must be written as a string, otherwise it wil be converted to a numeric value (e.g. 1 for 1.0).

Only ObjectAPI, name, version are mandatory. The other identifiers are optional.

```yml
schema: apigear.module/1.0
name: org.example
version: "1.0"
interfaces:
structs:
enums:
```

## Interfaces

An interface is the main instance to describe your software boundary using interface terms. The interface consist of state, operation and signals. The state is typically describe a a set of properties of the interface and operations modify the interface state. Signals notify the user of changes of the interface.

The interface itself is identified by its `name` inside a module.

```yml
schema: apigear.module/1.0
name: "org.example"
version: "1.0"

interfaces:
  - name: MyInterface
```

### Object state

Each property has a `name` and a `type` as also `description` and additional `meta` data.

```yml
# ...
interfaces:
  - name: MyInterface
    properties:
      - name: value
        type: int
```

### Operation

A operation defines the interaction with the interface. It is a collection of operations which can either manipulate the properties or return data.

Ideally you design your operations in a way that they can be divided into commands and queries. A command is an operation which does something on the interface and a query collects data from the interface and returns it to the user.

```yml
# ...
interfaces:
  - name: MyInterface
    operations:
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
        return:
          type: int
```

The arguments do parameterize the operation.

### Signals

A signal allows the interface to notify the outside world about events happening, e.g. triggered by others. A signal is like an operation, but never defines a type.

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

## Data Structures

A structure represents a data structure which can be used for communication. The structure consists of a `name` and a set of data fields. Each field again has a `name` and a `type` information.

```yml
# ...
structs:
  - name: Message
    fields:
      - name: msg
        type: string
```

A data structure does not contain any operations or signals. A data structure is typically used as a type for properties, operation parameters and others.

```yml
# ...
interfaces:
  - name: MessageSender
    properties:
      - name: lastMessage
        type: Message
    operations:
      - name: send
        params:
          - name: msg
            type: Message
```

Data structure can be identified just be identified its name.

Data structures can be nested by using the type name of the nested type. In some programming languages care needs to be taken by the order of declaration.

## Enumerations

Enumerations and Flags are value types, which allow a user to use a defined number of choices to identify a value.

```yml
enums:
  - name: Status
    members:
      - name: None
        value: 0
      - name: Loading
        value: 1
      - name: Ready
        value: 2
      - name: Error
        value: 3
```

The values are optional and when missing the value is counted incrementally from 0 on upwards.

```yml
enums:
  - name: Status
    members:
      - name: None
      - name: Loading
      - name: Ready
      - name: Error
```

An enumeration is also a symbol and can be used by its name to identify its type.

```yml
# ...
interfaces:
  - name: MyInterface
    properties:
      - name: status
        type: Status # references the Status enumeration
```
