---
sidebar_position: 6
---

# ObjectAPI IDL

The ObjectAPI IDL can be used in parallel to the ObjectAPI JSON Schema. In fact the IDL is transformed to the JSON schema and then processed by the same tools.

Vice versa the JSON schema can be transformed to the IDL.

The IDL does more look like an actual developer language. It is more verbose and more powerful. It allows to define more complex types and to define more complex APIs.

```go
module demo 1.0

// Counter is a simple counter object
interface Counter {
    // count is the current counter value
    count: int
    // increment the count property by step
    increment(int step)
    // decrement the count property by step
    decrement(int step)
}
```

## Interfaces

An interface defines a set of properties, operations and signals.

```go
interface name {
    `prop-name` : type                     // property
    `method-name` ( params ): `type`       // operation
    signal `signal-name` ( params )        // signal
}
```

A type can be either a primitive type or a complex type. A complex type can be a structure, enumeration or another interface.

A primitive type can be one of the following:

- `int` : integer value
- `float` : floating point value
- `string` : string value
- `bool` : boolean value

A complex type can be one of the following:

- name of an interface
- name of an enumeration
- name of a structure

:::tip
Currently we do not support sub-types (e.g. int32, int64, ...). We will add this in the future.
:::

To define arrays of a type just append the `[]` to the type.

```go
struct Struct1 {}

interface Demo {
    propString: string
    propStringArray: string[]
    propStruct: Struct1
}
```

:::tip
Currently we do not support importing other modules. This is planned for a future version.
:::

## Structures

A data structure is a message which can be used to send complex information between objects. A structure is defined as follows:

```go
struct name {
    field-name : type
}
```

## Enumerations

An enumeration is a set of named values. An enumeration is defined as follows:

```go
enum Enum1 {
    Value1 = 0
    Value2 = 1
    Value3 = 2
}
```

A value can also be a hex number in the format of `0x2`. If there is no value specified the next value is used.

## Example

Here is a complete example:

```go
module demo 1.0

interface Radio {
    // frequency is the current frequency in MHz
    frequency: float
    // stations is a list of stations
    stations: Station[]
    // if enabled automatically tunes to the next station
    autoTune: bool
    // scan for stations
    scan()
    // tune to a specific frequency
    tuneFrequency(float frequency)
    // tune to a specific station
    tuneStation(stationId: int)
    // signal emitted when a new station is found
    signal stationFound(stationId: int)
}

struct Station {
    // id is the station id
    id: int
    // name of the station
    name: string
    // short name of the station
    shortName: string
    // frequency in MHz
    frequency: float
    // artwork url
    artwork: string
    // category of the content
    category: Category
}

enum Category {
    News = 0
    Music = 1
    Talk = 2
}
```

Our ApiGear tooling can create code in different languages. For example in C++ this would look like (simplified):

```cpp
class Radio {
public:
    // scan for stations
    void scan();
    // tune to a specific frequency
    void tuneFrequency(float frequency);
    // tune to a specific station
    void tuneStation(int stationId);
    // signal emitted when a new station is found
    void onStationFound(function<void(int stationId)> callback);
public:
    // frequency is the current frequency in MHz
    float frequency;
    // stations is a list of stations
    std::vector<Station> stations;
    // if enabled automatically tunes to the next station
    bool autoTune;
};

struct Station {
    // id is the station id
    int id;
    // name of the station
    std::string name;
    // short name of the station
    std::string shortName;
    // frequency in MHz
    float frequency;
    // artwork url
    std::string artwork;
    // category of the content
    Category category;
};
```
