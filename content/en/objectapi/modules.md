---
title: "Modules"
description: "A temperature sensor tutorial using ApiGear and Raspberry Pi"
position: 204
category: "ObjectAPI"
version: 1.0
---

A module is a namespace for ObjectAPI symbols like interfaces, structures and enumerations. The module bundles these symbols together in one namespace.

A module is identified by its `name` and `version`. The module name should be typically lowercase and words separated by `.`, like a reverse URI notation `org.example`.

A module can have an additional `info` block to describe in more detailed the module information.

Typically a module consist of the `objectapi` version declaration, the module name and version, the list of interfaces, structures and signals.

The version number must be written as a string, otherwise it wil be converted to a numeric value (e.g. 1 for 1.0).

Only objectapi, name, version are mandatory. The other identifiers are optional.

```yml
objectapi: "1.0"
name: org.example
version: "1.0"
interfaces:
structs:
enums:
```
