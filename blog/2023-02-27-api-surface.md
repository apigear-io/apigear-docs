---
title: "API surface for objects"
description: "Overview of a typical API surface for objects in an IDL."
slug: api-surface
tags: ["api", "idl"]
authors:
  - name: "Jürgen Ryannel"
    title: "Lead Programmer"
    image_url: https://avatars.githubusercontent.com/u/636357?v=4
---

An API surface is the public interface of an object which is exposed to users of the object. The API surface is defined by an IDL and defines the contract between the user and the implementer of an object. 

<!--truncate-->

The API surface for an object consists of the following parts:
- Properties: Properties are the state of an object. They can be read and written and notify users about changes. Properties can be of any type.
- Operations: Operations are functions that can be called on an object. They can be synchronous or asynchronous. Operations can receive parameters and return a value.
- Signals: Signals are events that can be emitted by an object. They can be received by users of the object.


```
interface name {
    `prop-name` : type                     // property
    `operation-name` ( params ): `type`       // operation
    signal `signal-name` ( params )        // signal
}
```

For example a heating system could have the following API surface:

```
interface HeatingSystem {
    temperature: float
    setTemperature(float temperature)
    signal maxTemperatureReached()
}
```

As users of an API you can use the API surface to understand how to use an object. You can also use the API surface to understand how to implement an object. The API surface is the contract between the user and the implementer of an object.

## Properties

Properties are the state of an object. They can be read and written and notify users about changes. Properties can be of any type.

```
interface HeatingSystem {
    temperature: float
}
```

In the example above the `temperature` property is of type `float`. The type can be any type that is supported by the IDL. The type can be a primitive type or a complex type. A primitive type can be one of the following:
- `int` : integer value
- `float` : floating point value
- `string` : string value
- `bool` : boolean value

Types can also be arrays. To define arrays of a type just append the `[]` to the type (for example `int[]`).

## Operations

Operations are functions that can be called on an object. They can be synchronous or asynchronous. Operations can receive parameters and return a value.

```
interface HeatingSystem {
    setTemperature(float temperature)
}
```

In the example above the `setTemperature` operation receives a parameter of type `float`. The operation does not return a value.

## Signals

Signals are events that can be emitted by an object. They can be received by users of the object.

```
interface HeatingSystem {
    signal maxTemperatureReached()
}
```

In the example above the `maxTemperatureReached` signal does not receive any parameters.

## Structures

Different than objects which can be interacted with, structures are just data structures that can be used to send complex information between objects. A structure is defined as follows:

```
struct Struct1 {}
```

A struct can have fields of any type.


## Enumerations

An enumeration is a set of named values. An enumeration is defined as follows:

```
enum Enum1 {
    value1
    value2
}
```

An enumeration can be used as a type for properties, operations and signals.

## Modules 

A module is a collection of objects, structures and enumerations. A module is defined as follows:

```
module name version

interface Name {}
```

The version of a module is a string that follows the [semver](https://semver.org/) format. The version of a module is optional. If no version is specified the version is `0.0.0`.


# Working with the API surface

When designing an API surface it is important to keep the following in mind:
