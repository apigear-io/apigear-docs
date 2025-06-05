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



### $createService

```ts
$createService(name:string, properties: {})
```

Creates a service with the given name and properties and returns the service object. If an service with the given name already exists, it is returned.

### $getService

```ts
$getService(name:string)
```

Returns the service with the given name. If no service with the given name exists, it will be created.

### $listServices

```ts
$listServices()
```

Returns the list of service names in the simulation.

### $destroyService

```ts
$destroyService(name:string)
```

Deletes the service with the given name from the simulation.

## Service

A service is a virtual entity that can be created and destroyed and it has state and behavior as well notifies changes. services are accessed through a protocol adapter that is implemented by the simulation server.

services can be created using the `$createservice` method.

Services support properties, to be accessed using the `.$.getProperty` and `.$.setProperty` methods and to be notified of changes using the `.$.onProperty` method. To return all properties of an service use the `.$.getProperties` method. 

The following example creates an service with the given name and state and returns the service. If an service with the given name already exists, it is returned.

```js
// creates an service with the given name and state
const counter = $createService("counter", { count: 0 });

counter.$.setProperty("count", 10);
console.log(counter.getProperty("count")); // 10

counter.$.onProperty("count", function (value) {
    console.log("count changed", value);
});
counter.$.setProperty("count", value + 1);
// prints "count changed 11"
```

### Properties

#### service.$.setProperty

```js
service.$.setProperty(name: string, value: any)
```

Set the value of a property on the service.

#### service.$.getProperty

```js
service.$.getProperty(name: string): any
```

Get the value of a property on the service.

#### service.$.onProperty

```js
service.$.onProperty(name: string, callback: (value: any) => void)
```

Register a callback to be called when the value of a property changes.

Unregister the callback by calling the returned unsubscribe function.

```js
const counter = $createService("counter");
const unsubscribe = counter.$.onProperty("count", function (value) {
    console.log("count changed", value);
});
counter.$.setProperty("count", value + 1);
// prints "count changed 11"

unsubscribe();
```

#### service.$.getProperties

```js
service.$.getProperties(): string[]
```

#### service.$.setProperties

```ts
service.$.setProperties(properties: {})
```

Set the properties on the service.

#### service.$.getProperties

```ts
service.$.getProperties(): {}
```

Get the properties on the service.


### Methods

#### service.$.onMethod

```ts
service.$.onMethod(name: string, fn: (...args): any)
```

Set method on the service.

#### service.$.getMethod

```ts
service.$.getMethod(name: string): (...args) => any
```

Get method on the service.

#### service.$.hasMethod

```ts
service.$.hasMethod(name: string): boolean
```

Check if the service has a method.

#### service.$.callMethod

```ts
service.$.callMethod(name: string, ...args): any
```

Call a method on the service.


### Signals

#### service.$.onSignal

```ts
service.$.onSignal(name: string, callback: (...args) => void)
```

Register a callback to be called when a signal is emitted.

Unregister the callback by calling the returned unsubscribe function.

```js
const counter = createService("counter");
const unsubscribe = counter.$.onSignal("incremented", function (args) {
    console.log("incremented signal", args);
});
counter.$.emitSignal("incremented", 1);
// prints "incremented signal 1"
unsubscribe(); // unregister the callback
```

#### service.$.emitSignal

```ts   
service.$.emitSignal(name: string, ...args)
```

Emit a signal on the service.
