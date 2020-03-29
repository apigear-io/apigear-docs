# IDL Specification

The grammar of APIGear is well defined and is based on the concept of modules as larger collections of service descriptions.

A module can have several interfaces, structs and/or enums/flags. Here a not complete unformal grammar.

```html

module <module> <version>

import <module> <version>

interface <Identifier> {
    <identifier>: <type>
    <operation>(<parameter>*): <type>
    signal <signal>(<parameter>*)
}

struct <Identifier> {
    <identifier>: <type>
}

enum <Identifier> {
    <name> = <value>,
}

flag <Identifier> {
    <name> = <value>,
}
```

A APIGear document always describes one module. It is convention that a apig document is named after the module. If the same module appears in different documents the behavior is not defined currently. Each document can contain one or more interfaces, structs, flags or enums. Each document can import other modules using the import statement.


## Module

A module is identified by its name. A module should be normally a URI where all parts are lowercase (e.g. `entertainment.tuner`). A module may import other modules with the primary purpose being to ensure that dependencies are declared inside the APIGear file.

```js

// org.example.apig
module org.example 1.0

import org.common 1.0
```

!!! note

    The parser will not validate if the module exists yet. It will just provide the reference to the module and will try to resolve the module on code-generation runtime.

## Interface


An interface is a collection of properties, operations and signals. Properties carry data, whereas the operations normally modify the data. Signals are used to notify the user of changes.

```js

interface WeatherStation {
    temperature: Float
    reset()
    signal error(message: String);
}
```

APIGear allows to extend interfaces using the ``extends`` keyword after the interface name.

!!! note

    It is in the responsibility of the author to ensure the order of interfaces are correct. E.g. the base interface should come before the depending interface. APIGear does not try to re-order interfaces based on dependency. The order they appear in the document is the order they are passed to the code generator.


```js
interface Station {
    reset()
    signal error(message: String)
}

interface WeatherStation extends Station {
    temperature: Float
}
```

!!! note

    For the sake of simplicity, as an API designer you should carefully evaluate if an extension is required. The typical way in APIGear to allow extensions is normally to write your own code-generator and use type annotations for kind of interfaces.

        @kind: Station
        interface WeatherStation {
            temperature: Float
        }

    The API reader does not need to know the internals of the API. The station behavior would be automatically attached by the custom generator.


## Struct


The struct resembles a data container. It consist of a set of fields where each field has a name and a data type. Data types can be primitive of complex types.

```js

struct Error {
    message: String
    code: Int
};
```

Structs can also be nested. A struct can be used everywhere where a type can be used.

```js

interface WeatherStation {
    temperature: Float
    lastError: Error
    reset()
    signal error(error: Error)
}
```

!!! note

    When you nest structs, ensure the used struct comes before the using structs and there are no circular dependencies. The order struct appear is the same order they are passed to the code generator.



## Enum/Flag

An enum and flag is an enumeration type. The value of each member is automatically assigned if missing and starts with 0.

```js

enum State {
    Null,       // implicit 0
    Loading,    // will be one
    Ready,      // will be two
    Error       // will be three
}
```

The value assignment for the enum type is sequential beginning from 0. To specify the exact value you can assign a value to the member. The value can also be written in hex form (e.f. 0xN).

```js

enum State {
    Null = 0,
    Loading = 0x1,
    Ready = 2,
    Error = 3
}
```

The flag type defines an enumeration type where different values are treated as a bit mask. The values are in the sequence of the 2^n.

```js

flag Cell {
    Null,   // starting value is one
    Box,    // value is two
    Wall,   // value is four
    Figure  // value is eight
}
```

## Types

Types are either local and can be referenced simply by their names, or they are from external modules. In the latter case they need to be referenced with the fully qualified name (``<module>.<symbol>``). A type can be an interface, struct, enum or flag. It is also possible to reference the inner members of the symbols with the fragment syntax (``<module>.<symbol>#<fragment>``).

A module consists of either one or more interfaces, structs and enums/flags. They can come in any number or combination. The interface is the only type which can contain properties, operations and signals. The struct is merely a container to transport structured data. An enum/flag allows the user to encode information used inside the struct or interface as data-type.

Below is an example of a APIGear file.

```js

module entertainment.tuner 1.0;

import common 1.0

# Service Tuner
interface Tuner {
    # property currentStation
    readonly currentStation: Station
    # operation nextStation
    nextStation()
    # operation previousStation
    previousStation()
    # operation updateCurrentStation
    updateCurrentStation(stationId: ID)

    primitiveArray: [Int]
    complexArray: [Station]
}

# enum State
enum State {
    # value State.Null
    Null=0,
    # value State.Loading
    Loading=1,
    # value State.Ready
    Ready=2,
    # value State.Error
    Error=3
}

# enum Waveband
enum Waveband {
    # value Waveband.FM
    FM=0,
    # value Waveband.AM
    AM=1
}

flag Features {
    Mono = 0x1,
    Stereo = 0x2,
}

# struct Station
struct Station {
    # member stationId
    stationId: ID
    # member name
    name: String
    # last time modified
    modified: common.TimeStamp
}
```


## Nested Types

A nested type is a complex type which nests another type. Array is a container type.

```
colors: [Color]
stations: [Station]
weather: [WeatherInfo]
```

A list is an array of the provided value type. A map specifies only the value type. The key-type should be generic (e.g. a string type) and can be freely chosen by the generator. This allows for example the generator to add an id to each structure and use it as a key in the map.

A model is a special type of a list. It should be able to stream (e.g. add/change/remove) the data and the changes should be reflected by a more advanced API. Also the data could in general grow infinitely and the generator should provide some form of pagination or window API. You should use a model if you expect the data it represents to grow in a way that it may influence the performance of your API.

## Annotations

Annotations allow the writer to add meta data to an interface document. It uses the `@` notation followed by valid YAML one line content.

```js
@singleton: true
@config: { port: 1234 }
interface Echo {
}
```

More information on annotations can be found in the annotations chapter.

## Comments

Comments use the JavaDoc convention of using an `@` sign as prefix with the keyword followed by the required parameters.

```
#
# @brief The last echo message
#
```

Currently only brief, description, see and deprecated are supported doc tags.

The QtCPP built-in generator generates valid Qt documentation out of these comments.


## Default Values

APIGear supports the assignment of default values to properties and struct fields. A default values is a text string
passed to the generator.

```js

interface Counter {
    count: Int = "0"
    lastMessage: Message
}

struct Message {
    text: String = "NO DATA";
}
```

You can use quotes `'` or double-quotes `"` as a marker for text. There is no type check on APIGear side. The text-content is directly passed to the generator.
