# Data Structures

A structure represents a data structure which can be used for communication. The structure consist of a `name` and a set of data fields. Each field again has a `name` and a `type` information.

```yml
# ...
structures:
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
