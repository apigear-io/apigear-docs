---
sidebar_position: 3
---

# JavaScript API

Most examples in the API documentation are based on an API definition for a counter example.

```ts
module demo

interface Counter {
    count: int
    increment()
    reset()
    signal resetted()
}
```

The examples demonstrate how to interact with the simulation server using the JavaScript API and a client based on the provided API definition.


## World

The world is the central instance. The simulation server can run many worlds at the same time. The world has an ID (e.g. simulation id) and can be accessed using the `$world` object.

If no ID is given `demo` is used as the default ID.

```js
// returns the world id
const worldId = $world.id;
```

### $world

The world is a global object of the simulation. It is used to create actors and and can run world functions.

```js
// creates an actor with the given name and state
const counter = $world.createActor("counter", { count: 0 });

// returns the actor with the given name
const sameCounter = $world.getActor("counter");

// returns the list of actor names in the simulation
const actors = $world.listActors();
console.log(actors); // [ 'counter' ]

// returns the number of actors in the simulation
const actorCount = $world.actorCount();
console.log(actorCount); // 1

// deletes the actor from the simulation
$world.deleteActor("counter");

```

### $world.createActor

```ts
$world.createActor(name:string, state: {})
```

Creates an actor with the given name and state and returns the actor. If an actor with the given name already exists, it is returned.

### $world.getActor

```ts
$world.getActor(name:string)
```

Returns the actor with the given name. If no actor with the given name exists, it will be created.

### $world.listActors

```ts
$world.listActors()
```

Returns the list of actor names in the simulation.

### $world.actorCount

```ts
$world.actorCount()
```

Returns the number of actors in the simulation.

### $world.deleteActor

```ts
$world.deleteActor(name:string)
```

Deletes the actor with the given name from the simulation.

## Actor

An actor is a virtual entity that can be created and destroyed and it has state and behavior as well notifies the world of changes. Actors are accessed through a protocol adapter that is implemented by the simulation server.

Actors can be created using the `$world.createActor` method.

Actos support properties, to be accessed using the `getProperty` and `setProperty` methods and to be notified of changes using the `onProperty` method. To return all properties of an actor use the `getState` method. To be notified of all property changes use the `onState` method.

The following example creates an actor with the given name and state and returns the actor. If an actor with the given name already exists, it is returned.

```js
// creates an actor with the given name and state
const counter = $world.createActor("counter", { count: 0 });

counter.setProperty("count", 10);
console.log(counter.getProperty("count")); // 10

counter.onProperty("count", function (value) {
    console.log("count changed", value);
});
counter.setProperty("count", value + 1);
// prints "count changed 11"
```

### Properties

#### Actor.setProperty

```js
Actor.setProperty(name: string, value: any)
```

Set the value of a property on the actor.

#### Actor.getProperty

```js
Actor.getProperty(name: string): any
```

Get the value of a property on the actor.

#### Actor.onProperty

```js
Actor.onProperty(name: string, callback: (value: any) => void)
```

Register a callback to be called when the value of a property changes.

Unregister the callback by calling the returned unsubscribe function.

```js
const counter = $world.create("counter");
const unsubscribe = counter.onProperty("count", function (value) {
    console.log("count changed", value);
});
counter.setProperty("count", value + 1);
// prints "count changed 11"

unsubscribe();
```

#### Actor.properties

```js
Actor.properties(): string[]
```

#### Actor.setState

```ts
Actor.setState(state: {})
```

Set the value of a state on the actor.

#### Actor.getState

```ts
Actor.getState(): {}
```

Get the value of a state on the actor.


### Methods

#### Actor.setMethod

```ts
Actor.setMethod(name: string, fn: (...args): any)
```

Set method on the actor.

#### Actor.getMethod

```ts
Actor.getMethod(name: string): (...args) => any
```

Get method on the actor.

#### Actor.hasMethod

```ts
Actor.hasMethod(name: string): boolean
```

Check if the actor has a method.

#### Actor.callMethod

```ts
Actor.callMethod(name: string, ...args): any
```

Call a method on the actor.

#### Actor.methods

```ts   
Actor.methods(): string[]
```

Get all methods names on the actor.


#### Actor.onMethod

```ts
Actor.onMethod(name: string, callback: (...args) => void)
```

Register a callback to be called when a method is called.

Unregister the callback by calling the returned unsubscribe function.

```js
const counter = $world.create("counter");
const unsubscribe = counter.onMethod("increment", function (args) {
    console.log("increment called", args);
});
counter.callMethod("increment", 1);
// prints "increment called 1"
unsubscribe(); // unregister the callback
```


### Signals

#### Actor.onSignal

```ts
Actor.onSignal(name: string, callback: (...args) => void)
```

Register a callback to be called when a signal is emitted.

Unregister the callback by calling the returned unsubscribe function.

```js
const counter = $world.create("counter");
const unsubscribe = counter.onSignal("incremented", function (args) {
    console.log("incremented signal", args);
});
counter.emitSignal("incremented", 1);
// prints "incremented signal 1"
unsubscribe(); // unregister the callback
```

#### Actor.emitSignal

```ts   
Actor.emitSignal(name: string, ...args)
```

Emit a signal on the actor.
