# API Patterns

Writing good APIs is an art. There are common rules and style guide how to create an easy to consume API. We would like to present a collection of rules and styles for writing APIs.

## Use IDs to remove coupling

To ensure API modules are not tight coupled use IDs to identify a resource in two different modules.

```
module car.main 1.0

interface Car {
    id: ID
    wheels: [ID]
}
```

And in another module

```
module car.chassis 1.0

interface Wheel {
    car: ID
}
```

So the wheel is aware at which car it belongs using an ID, as also the car is aware about the exact wheel identify. 

## Use structures to transport data and interface to transport behavior.


