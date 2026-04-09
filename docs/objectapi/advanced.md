# Advanced Concepts

Advanced ObjectAPI concepts.

## Document information[​](#document-information "Direct link to Document information")

The info section allows user to add information related to the current document.

```
info:
  license: <license-identifier>
```

## Meta information[​](#meta-information "Direct link to Meta information")

Sometimes it is required to add additional information, which is not part of the ObjectAPI specification. For this the meta tag can be used.

```
interfaces:
  - name: Tuner
    meta:
      singleton: true
      config: { port: 1024 }
```

As the information is not part of the specification the applied code generator must have an understanding of the data. For example a C++ code generator could create a singleton type from the interface declaration.

## Compact Writing[​](#compact-writing "Direct link to Compact Writing")

YAML allows a compact format for single line information. This allows us to shorten API definitions considerable. For example this API

```
structs:
  - name: Error
    fields:
      - name: message
        type: string
      - name: code
        type: int
```

Can be written in a short format like this:

```
structs:
  - name: Error
    fields:
      - { name: message, type: string }
      - { name: code, type: int }
```
