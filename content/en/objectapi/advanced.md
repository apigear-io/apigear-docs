---
title: "Advanced"
description: "A temperature sensor tutorial using ApiGear and Raspberry Pi"
position: 208
category: "ObjectAPI"
version: 1.0
---

Advanced ObjectAPI concepts


## Document information

The info section allows user to add information related to the current document.

```yaml
info:
  license: <license-identifier>
```

## Meta information

Sometimes it is required to add additional information, which is not part of the ObjectAPI specification. For this the meta tag can be used.

```yaml
interfaces:
  - name: Tuner
    meta:
      singleton: true
      config: { port: 1024 }
```

As the information is not part of the specification the applied code generator must have an understanding of the data. For example a C++ code generator could create a singleton type from the interface declaration.

## Compact Writing
 YAML allows a compact format for single line information. This allows us to shorten API definitions considerable. For example this API
```yaml
structs:
  - name: Error
    fields:
      - name: message, 
        type: string
      - name: code
        type: int
```

Can be written in a short format like this:

```yaml
structs:
  - name: Error
    fields:
      - { name: message, type: string }
      - { name: code, type: int }
```