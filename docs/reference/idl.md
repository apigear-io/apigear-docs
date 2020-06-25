# API Definition

ApiGear provides an object interface definition language which can be used to describe the high-level interface of an object or service. The IDL is modern and very flexible to be used in many different contexts.

The API is organized into modules. Each module is identified by its name and contains interfaces, structures and enums/flags. A simple module looks like this.

```yaml
objectapi: "1.0"
module: climate.weather
version: 1.0

interfaces:
  - name: WeatherStation
    properties:
      - { name: temperature, type: float }
    operations:
      - { name: reset }
    signals:
      - name: error
        params:
          - { name: message, type: string }
```

A API document always describes one module. Each document can contain one or more `interfaces`, `structs`, `enums` or `flags` definition.

The structure of an ObjectAPI module can be divided into several sections: header, info, interfaces, structs and enums declaration.

## Header definition

A module is identified by its name. A module should be normally a reverse URI where all parts are lowercase (e.g. `entertainment.tuner`). A module may import other modules with the primary purpose being to ensure that dependencies are declared inside the API module.

```yaml
objectapi: <version>
module: <name>
version: <version>
```

## Document information

The info section allows user to add information related to the current document.

```yaml
info:
  license: <license-identifier>
```

## Interface declarations

The interface definition is at the heart of the API description. The interface is a collection of properties, operations and signals. Properties carry data, whereas the operations normally modify the data. Signals are used to notify the user about changes.

```yaml
interfaces:
  - name: <name>
    properties:
      - name: <name>
        type: <type>
    operations:
      - name: <name>
        type: <type>
        params:
          - name: <name>
            type: <type>
    signals:
      - name: <name>
        params:
          - name: <name>
            type: <type>
```

## Data structure declarations

A data structure resembles a data container. It consist of a set of fields where each field has a name and data type.

The format for the struct is roughly this.

```yaml
structs:
  - name: <name>
    fields:
      - name: <name>
        type: <type>
```

And here is an example to declare a data structure

```yaml
structs:
  - name: Error
    fields:
      - { name: message, type: string }
      - { name: code, type: int }
```

To use a struct as a type in other parts of the API you need to use `$ref`. The parser will resolve the name to the real type. For example:

```yaml
interfaces:
  - name: Report
    properties:
      - { name: error, $ref: Error }
```

This will resolve Error as struct and bind it to the `error` property.

Data structures can also be nested. A struct can be used everywhere where a type can be used.

```yaml
interfaces:
  - name: WeatherStation
  - properties:
      - { name: temperature, type: float }
      - { name: lastError, $ref: Error }
  - operations:
      - { name: reset }
  - signals:
      - name: error
        params:
          - { name: error, $ref: Error }
```

## Enumeration declarations

An enum and flag is an enumeration type. The value of each member is automatically assigned if missing.

```yaml
enums:
  - name: <name>
    members:
      - name: <name>
        value: <value>
```

An example for a status enumeration could ook like this

```yaml
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

A more compact form would be

```yaml
enums:
  - name: Status
    members:
      - name: None
      - name: Loading
      - name: Ready
      - name: Error
```

The value assignment for the enum type is sequential beginning from 0. To specify the exact value you can assign a value to the member.

```yaml
enums:
  - name: Status
    members:
      - name: None
      - name: Loading
      - name: Ready
      - name: Error
```

Sometimes it is required to create a flag. For this you can add a flags tag. The flag type defines an enumeration type where different values are treated as a bit mask. The values are in the sequence of the power of two.

```yaml
flags:
  - name: Cell
    members:
      - name: Null
      - name: Box
      - name: Wall
      - name: Figure
```

## Primitive types

TBD

## Referencing types

Types are either local and can be referenced simply by their names, or they are from external modules. In the latter case they need to be referenced with the fully qualified name (`<module>.<symbol>`). A type can be an interface, struct, enum or flag.

## Example module

A module consists of either one or more interfaces, structs and enums/flags. They can come in any number or combination. The interface is the only type which can contain properties, operations and signals. The struct is merely a container to transport structured data. An enum/flag allows the user to encode information used inside the struct or interface as data-type.

Below is an example of an API module.

```yaml
objectapi: "1.0"
module: entertainment.tuner
version: 1.0

interfaces:
  - name: Tuner
    description: A tuner service to manages tuner stations
    properties:
      - name: currentStation
        $ref: Station
        description: current selected station
      - name: stationList
        type: array
        $ref: Station
        description: list of current available stations
    operations:
      - name: nextStation
        description: sets current station to next station from list
      - name: previousStation
        description: sets current station to previous station from list
      - name: updateCurrentStation
        description: update current station
        params:
          - name: stationId
          - type: id

structs:
  - name: Station
    fields:
      - name: stationId
        type: id
        description: station id
      - name: name
        type: string
        description: station name
      - name: modified
        type: string
        format: date-time
        description: station last time modified

enums:
  - name: State
    description: State for tuner interface
    members:
      - name: None
        description: tuner not initialized
      - name: Loading
        description: tuner is loading
      - name: Ready
        description: tuner is ready and operational
      - name: Error
        description: tuner received an error
  - name: Waveband
    members:
      - name: FM
        description: FM waveband
      - name: AM
        description: AM waveband

flags:
  - name: Features
    members:
      - name: Mono
        description: audio supports mono
      - name: Stereo
        description: audio support stereo
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
