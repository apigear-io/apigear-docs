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

### $quit

```ts
$quit()
```

Cleanly shuts down the simulation engine. This function:
- Disconnects all active channels
- Closes the simulation engine
- Exits the simulation script

This is useful for gracefully terminating long-running simulations or when specific conditions are met.

```js
// Example: Stop simulation after a condition
if (temperature > 100) {
    console.log("Overheating detected, stopping simulation");
    $quit();
}
```

## Service

A service is a virtual entity that can be created and destroyed and it has state and behavior as well notifies changes. services are accessed through a protocol adapter that is implemented by the simulation server.

Services can be created using the `$createService` method.

Services support properties through a natural JavaScript API using proxies. Properties can be accessed and modified directly, and changes can be monitored using the `.on()` method.

The following example creates a service with the given name and state and returns the service. If a service with the given name already exists, it is returned.

```js
// creates a service with the given name and state
const counter = $createService("counter", { count: 0 });

// Direct property access and modification
counter.count = 10;
console.log(counter.count); // 10

// Monitor property changes
counter.on("count", function (value) {
    console.log("count changed", value);
});
counter.count = 11;
// prints "count changed 11"

// Access the raw service object when needed
console.log(counter.$.getProperties()); // { count: 11 }
```

### Properties

#### Direct Property Access

Services use JavaScript proxies to provide natural property access:

```js
// Get property value
const value = service.propertyName;

// Set property value
service.propertyName = newValue;
```

#### service.on

```js
service.on(name: string, callback: (value: any) => void)
```

Register a callback to be called when a property changes or a signal is emitted.

Unregister the callback by calling the returned unsubscribe function.

```js
const counter = $createService("counter", { count: 10 });
const unsubscribe = counter.on("count", function (value) {
    console.log("count changed", value);
});
counter.count = 11;
// prints "count changed 11"

unsubscribe();
```

#### Raw Service Access

When you need access to the underlying service object, use the `$` property:

```js
// Access raw service methods
service.$.getProperties()  // Returns all properties as an object
service.$.setProperties({ prop1: value1, prop2: value2 })  // Set multiple properties
service.$.hasProperty(name)  // Check if property exists
service.$.getProperty(name)  // Get property value (alternative to direct access)
service.$.setProperty(name, value)  // Set property value (alternative to direct access)
```


### Methods

#### Natural Method Definition

Methods are defined by assigning functions to service properties. The function automatically receives the service proxy as `this`:

```js
const counter = $createService("counter", { count: 0 });

// Define a method with automatic 'this' binding
counter.increment = function() {
    this.count++;  // 'this' refers to the service proxy
    this.emit('incremented', this.count);  // Can emit signals
};

// Call the method
counter.increment();
```

#### Raw Method Access

When needed, you can access methods through the raw service object:

```js
// Check if method exists
service.$.hasMethod("methodName")  // Returns boolean

// Get method reference
service.$.getMethod("methodName")  // Returns the function

// Call method through raw API
service.$.callMethod("methodName", arg1, arg2)  // Calls with arguments
```


### Signals

#### service.emit

```js
service.emit(name: string, ...args)
```

Emit a signal on the service.

```js
const counter = $createService("counter", { count: 0 });

// Define a method that emits a signal
counter.reset = function() {
    this.count = 0;
    this.emit('resetted');  // Emit signal with no arguments
    this.emit('stateChanged', this.count);  // Emit with arguments
};
```

#### Listening to Signals

Use the same `on` method to listen for both property changes and signals:

```js
const counter = $createService("counter", { count: 0 });

// Listen to custom signals
const unsubscribe = counter.on("resetted", function () {
    console.log("Counter was reset");
});

counter.on("stateChanged", function (newValue) {
    console.log("State changed to:", newValue);
});

// Trigger the signals
counter.reset();
// prints "Counter was reset"
// prints "State changed to: 0"

unsubscribe(); // unregister the callback
```

#### Raw Signal Access

For direct signal manipulation through the raw API:

```js
service.$.onSignal(name, callback)  // Register signal listener
service.$.emitSignal(name, ...args)  // Emit signal
```

## Async Operations

The simulation environment provides basic async support through:

### setTimeout

```js
setTimeout(callback, delay)
```

Schedules a function to be called after a specified delay (in milliseconds).

```js
// Example: Delayed state change
setTimeout(function() {
    heater.temperature = 25;
    console.log("Temperature updated after delay");
}, 1000);  // Execute after 1 second

// Example: Sequential operations in vehicle example
const interval = setInterval(function() {
    indicators[indicator] = true;
    console.log(`Turned on ${indicator}`);
}, 200);
```

Note: The simulation environment currently supports `setTimeout` and `setInterval` but not `setImmediate`, `clearTimeout`, or `clearInterval`.

## Console Output

Standard console methods are available for debugging and output:

```js
console.log("Info message");
console.warn("Warning message");
console.error("Error message");
```

All console output is integrated with the simulation server's logging system.
