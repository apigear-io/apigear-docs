---
title: Symbol Reference
description: Blueprint symbol reference
position: 704
category: Maker
version: 1.0
menuTitle: Symbols
---

When developing technology blueprints it is vital to understand what each symbol traversing has to offer on properties. ObjectAPI is structured based on the idea of modules, interfaces, structures and enumerations.

And an interface contains properties, operations and signals and structures contain fields and enumerations contain members.

```
module: Element
  interface: Element
    property: Typed Element
    operation: Typed Element
      param: Typed Element
    signal: Typed Element
      param: Typed Element
  struct: Element
    field: Typed Element
  enumeration: Element
    member: Element
```

Each symbol you can iterate over is either element or an element with additional type information.

## Element

* **name**: string
  * name of the element
* **description**: string
  * test to describe the element
* **meta**: object
  * free form data, evaluated by the technology blueprint
* **kind**: string 
  * one of [module, interface, struct, enum, property, operation, signal] 

## Typed Element

An element with additional properties for typing

* **type** type information
  * one of [void, bool, int, float, string, id, array] or reference to interface, struct, enum
* **items**: array type information
  * one of [void, bool, int, float, string, id] or reference to struct, enum
* **isPrimitive**: primitive type
  * type is one of [bool, int, float, string, id]
* **isComplex**: is reference to type
  * type is one of struct, enum, interface
* **isPrimitiveArray**: array with items of primitive type
* **isComplexArray**: array with item of reference to type
* **isArray**: type is array

## Module

The module is an element with additional version and an information object. Additional it contains a list of interfaces, structures and enumerations

All information from the element plus

* **version**: string
* **info**: information object
* **interfaces**: array of interface elements
* **structs**: array of struct elements
* **enums**: array of enum elements

### Information

The information object allows customers to provide additional information about the API.

* **title**: string
* **description**: string
* **termsOfService**: string
* **contact**: is an object consisting of **name**, **url** and **email**
* **license**: is an object containing of **name** and **url**

## Interface

The interface is an container element for properties, operations and signals.

All information from the element plus

* **properties**: array of property elements
* **operations**: array of operation elements
* **signals**: array of signal elements

### Property

Property is a typed element.

All information from the typed element.

### Operation

Operation is a typed element with an additional list of parameters. The type information defines the return type of the operation.

All information from the typed element plus

* **params**: array of typed elements

### Signal

Signal is a typed element and has the same signature as operation, besides the return type information is ignored.

All information from the typed element plus

* **params**: array of typed elements

## Structure

Structure is an element and act as a container for fields.

All information from the element, plus

* **fields**: array of field

### Field

Field is a typed element.

All information from the typed element

## Enumeration

Enumeration is an element and act as a container for members.

All information from the element, plus

* **members**: array of member

### Member

Member is a element with an additional value.

All information from the element, plus

* **value**: the value of the member