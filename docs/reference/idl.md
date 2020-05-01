# API Definition

APIGear provides an Object interface definition language which can be used to describe the high-level interface of an object or service. The IDL is modern and very flexible to be used in many different contexts.

The API is organized into modules. Each module is identified by its name and contains interfaces, structures and enums/flags. A simple module looks like this.

```js
module climate.weather 1.0

interface WeatherStation {
  temperature: Float
  reset()
  signal error(message: String)
}
```

The grammar behind is described roughly when looking at the code below.

```js
module <module> <version>
import <module> <version>

interface <Identifier> {
    <type> <identifier>
    <type> <operation>(<parameter>*)
    signal <signal>(<parameter>*)
}

struct <Identifier> {
    <type> <identifier>;
}

enum <Identifier> {
    <name> = <value>,
}

flag <Identifier> {
    <name> = <value>,
}
```

A API document always describes one module. Each document can contain one or more `interface`, `struct`, `flag` or `enum` declarations. Each document can import other modules using the import statement.

## Declarations

### Module Declaration

A module is identified by its name. A module should be normally a reverse URI where all parts are lowercase (e.g. `entertainment.tuner`). A module may import other modules with the primary purpose being to ensure that dependencies are declared inside the API module.

```
# Example module
module org.example 1.0

import org.common 1.0
```

### Interface Declaration

The interface declaration is at the heart of the API description. The interface is a collection of properties, operations and signals. Properties carry data, whereas the operations normally modify the data. Signals are used to notify the user about changes.

An interface can be extended from another interface using the extends keyword after the interface name.

```
interface Station {
    reset()
    signal error(message: String)
}

interface WeatherStation extends Station {
    temperature: Float
}
```

!!! note
    
    For the sake of simplicity, as an API designer you should carefully evaluate if this is required. The typical way to allow extensions is normally to write your own code-generator and use type annotations.

        @extends: Station
        interface WeatherStation {
          temperature: Float
        }

    The API reader does not need to know the internals of the API. The station behavior would be automatically attached by the custom generator.

### Struct Declaration

The `struct` resembles a data container. It consist of a set of fields where each field has a data type and a name.

```js
struct Error {
  message: String
  code: Int
};
```

Structs can also be nested. A struct can be used everywhere where a type can be used.

```js
interface WeatherStation {
    real temperature;
    Error lastError;
    void reset();
    signal error(Error error);
}
```

### Enum/Flag Declaration

An enum and flag is an enumeration type. The value of each member is automatically assigned if missing.

```js
enum State {
    Null,
    Loading,
    Ready,
    Error
}
```

The value assignment for the enum type is sequential beginning from 0. To specify the exact value you can assign a value to the member.

```js
    Null = 0,
    Loading = 1,
    Ready = 2,
    Error = 3
}
```

The flag type defines an enumeration type where different values are treated as a bit mask. The values are in the sequence of the power of two.

```js
flag Cell {
    Null,
    Box,
    Wall,
    Figure
}
```


## Types

Types are either local and can be referenced simply by their names, or they are from external modules. In the latter case they need to be referenced with the fully qualified name (`<module>.<symbol>`). A type can be an interface, struct, enum or flag. It is also possible to reference the inner members of the symbols with the fragment syntax (`<module>.<symbol>#<fragment>`).

A module consists of either one or more interfaces, structs and enums/flags. They can come in any number or combination. The interface is the only type which can contain properties, operations and signals. The struct is merely a container to transport structured data. An enum/flag allows the user to encode information used inside the struct or interface as data-type.

Below is an example of a API module.

```js
module entertainment.tuner 1.0;

import common 1.0

// Service Tuner
interface Tuner {
    // current selected station
    currentStation: Station
    // sets current station to next station from list
    nextStation()
    // sets current station to previous station from list
    previousStation()
    // update current station
    updateCurrentStation(stationId: ID);
    // list of current available stations
    stationList: [Station]
}

// tuner state
enum State {
    // tuner not initialized
    Null=0,
    // tuner is loading
    Loading=1,
    // tuner is ready, operational
    Ready=2,
    // tuner received and error
    Error=3
}

// different tuner wavebands
enum Waveband {
    // FM waveband
    FM=0,
    // AM waveband
    AM=1
}

// tuner feature
flag Features {
    // audio supports mono
    Mono = 0x1,
    // audio supports stereo
    Stereo = 0x2,
}

// station data type
struct Station {
    // station id
    int stationId;
    // station name
    string name;
    // station last time modified
    common.TimeStamp modified;
}
```

## Nested Types

A nested type is a complex type which nests another type. These are container types, e.g. arrays.

```js
colors: [Color]
```

A list is an array of the provided value type. A map specifies only the value type. The key-type should be generic (e.g. a string type) and can be freely chosen by the generator. This allows for example the generator to add an id to each structure and use it as a key in the map.

A model is a special type of a list. It should be able to stream (e.g. add/change/remove) the data and the changes should be reflected by a more advanced API. Also the data could in general grow infinitely and the generator should provide some form of pagination or window API. You should use a model if you expect the data it represents to grow in a way that it may influence the performance of your API.

## Annotations

Annotations allow the writer to add meta data to an interface document. It uses the `@ `notation followed by valid YAML one line content.

```js
@singleton: true
@config: { port: 1234 }
interface Echo {
}
```

More information on annotations can be found in the annotations chapter.

## Comments

Comments use the JavaDoc convention of using an `@` sign as prefix with the keyword followed by the required parameters.

Currently only brief, description, see and deprecated are supported doc tags.

The QtCPP built-in generator generates valid Qt documentation out of these comments.

## Default Values
The API supports the assignment of default values to properties and struct fields. A default values is a text string passed to the generator.

```js
interface Counter {
    int count = "0";
    Message lastMessage;
}

struct Message {
    string text = "NO DATA";
}
```

You can use quotes ‘ or double-quotes “ as a marker for text. There is no type check on API side. The text-content is directly passed to the generator.