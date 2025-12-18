---
sidebar_position: 5
---

# Symbol Reference

When developing technology templates it is vital to understand what each symbol traversing has to offer on properties. ObjectAPI is structured based on the idea of modules, interfaces, structures and enumerations.

And an interface contains properties, operations and signals and structures contain fields and enumerations contain members.

```go
type System struct {
    Name string
    Modules []Module
}

type Module struct {
    Name string
    Interfaces []Interface
    Structures []Structure
    Enumerations []Enumeration
}

type Interface struct {
    Name string
    Properties []TypedElement
    Operations []Operation
    Signals []Signal
}

type TypedElement struct {
    Name string
    Type Type
}

type Operation struct {
    Name string
    Params []TypedElement
    Return Type
}

type Signal struct {
    Name string
    Params []TypedElement
}

type Structure struct {
    Name string
    Fields []TypedElement
}

type Enumeration struct {
    Name string
    Members []ValueElement
}

type ValueElement struct {
    Name string
    Value string
}
```

Each symbol you can iterate over is either element or an element with additional type information.

## Named Element

Named element is the base element for all symbols. It contains the following properties:

- **Name**: string
  - name of the element
- **Description**: string
  - test to describe the element
- **Meta**: object
  - free form data, evaluated by the technology template
- **Kind**: string
  - one of [module, interface, struct, enum, property, operation, signal]

## Typed Element

Typed element is a named element with additional properties for typing

- **Type** type information
  - one of [bool, int, float, string] or reference to interface, struct, enum
- **Array**: true if the type is an array
- **IsPrimitive**: primitive type
  - type is one of [bool, int, float, string]
- **IsSymbol**: is reference to type
  - type is one of struct, enum, interface
- **IsPrimitiveArray**: array with items of primitive type
- **IsSymbolArray**: array with item of reference to type
- **IsArray**: true if the type is an array

## Module

The module is an element with additional version and an information object. Additional it contains a list of interfaces, structures and enumerations

All information from the element plus

- **Version**: string
- **Info**: information object
- **Interfaces**: array of interface elements
- **Structs**: array of struct elements
- **Enums**: array of enum elements

### Information

The information object allows customers to provide additional information about the API.

- **Title**: string
- **Description**: string
- **TermsOfService**: string
- **Contact**: is an object consisting of **name**, **url** and **email**
- **License**: is an object containing of **name** and **url**

## Interface

The interface is an container element for properties, operations and signals.

All information from the element plus

- **Properties**: array of property elements
- **Operations**: array of operation elements
- **Signals**: array of signal elements

### Property

Property is a typed element.

All information from the typed element.

### Operation

Operation is a named element with an additional list of typed parameters. The return element defines the return type.

All information from the typed element plus

- **Params**: array of typed elements
- **Return**: type information

### Signal

Signal is a typed element and has the same signature as operation, besides the return type information is ignored.

All information from the typed element plus

- **Params**: array of typed elements

## Structure

Structure is an element and act as a container for fields.

All information from the element, plus

- **Fields**: array of typed elements

### Field

Field is a typed element.

All information from the typed element

## Enumeration

Enumeration is an element and act as a container for members.

All information from the element, plus

- **Members**: array of member

### Member

Member is a element with an additional value.

All information from the named element, plus

- **Value**: the value of the member
