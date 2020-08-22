---
title: "Overview"
description: "The specification for ObjectAPI"
position: 201
category: "ObjectAPI"
version: 1.0
---

ObjectAPI is an interface specification to describe the boundaries of your software modules in an object format.

ObjectAPI sees the world as a set of interface modules, which together form an interface layer. Each module is encapsulated in one ObjectAPI document.

The specification describes the details how to write such a ObjectAPI document.

#### Version 0.1.0

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC 2119](http://www.ietf.org/rfc/rfc2119.txt).

The ObjectAPI Specification is copyrighted by ApiGear UG, all rights reserved.

## Introduction

The ObjectAPI specification is a project used to describe and document object oriented APIs across languages and technologies.

The ObjectAPI specification defines a set of files required to describe such an API.
These files can then be used to create utilities, such as documentation, integration and/or testing tools.

The ObjectAPI Specification is often used to describe the interface between software modules or inter-process communication (IPC) in distributed systems built using a object oriented programming API. The ObjectAPI recommends to split APIs into smaller modules with loose coupling.

The documents describe an API module and its interfaces and data structures.

## Revision History

### Version 0.1

Initial ObjectAPI specification

## Definitions

- A system: A system is a collection of modules, which describe a coherent set of APIs on the same layer.
- A module: A module describes a name spaced collection of API symbols, such as interfaces, structures, enumerations. There exists one module per file.
- An interface is a named interface description of an object with properties, operations and signals.
- A structure is a data type with fields describing the structure
- A enumeration is a enumerated integer or string value
