---
title: "Enumerations and Flags"
description: "A temperature sensor tutorial using ApiGear and Raspberry Pi"
position: 207
category: "ObjectAPI"
version: 1.0
menuTitle: Enumerations
---

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
