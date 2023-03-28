---
sidebar_position: 3
---

# Actions Reference

A action is a command to the simulation to change a value or to communicate a change. 

An action is an object with a key of the action command and a object value as the action arguments.

```yaml
$command: { options }
```

## `$set`

The `$set` action sets a value of a property. The default case it sets the value of the default interface. The value can be a primitive or a object.

```yaml
# set the property `count` to `0`
$set: { count: 0 } 
```

Or using an object

```yaml
# set the property `position` to `{ x: 10, y: 20 }`
$set: { position: { x: 10, y: 20 } }  
```

The set command will change the property value and also emit a property change signal. The change signal is emitted automatically when a property is changed using the `$set` action.

## `$update`

The `$update` action updates a partial value of a property. The default case it updates the value of the default interface. The value can be a primitive or a object. Different from `$set` the value is merged with the existing value.

This is useful when the value is an object and only a part of the object needs to be changed.

```yaml
# set the property `position` to `{ x: 10, y: 20 }`
- $set { position: { x: 10, y: 20 } }
# partially update the property `position` property to `{ x: 30, y: 20 }`
- $update { position: { x: 30 } }  
```

## `$signal`

The `$signal` action emits a signal from the simulation. The default case it emits the signal from the default interface. The value is an array of arguments, which are the arguments of the signal, as defined in the API.

For example a signal `shutdown` with an argument `timeout` can be emitted like this:

```yaml
# emit the signal `shutdown` with the argument `timeout` set to `5`
$signal: { shutdown: [ 5 ] }  x
```


:::note
To directly emit a signal from the client it is possible to use invoke operation, but with a `$signal.` prefix of the signal name. For example to emit the `shutdown` signal from the client it can be done like this:

```go
client.invoke("$signal.shutdown", [ 5 ])
```
This will send the invoke message to the simulation and the simulation will emit the signal. There is no return value from the invoke operation.
:::

## `$return`

The `$return` action returns a result from an operation. The default case it returns the result from the default interface. The value to return is given in the result key of the action object.

For example a result `1` from an operation it can be returned like this:

```yaml
# returns the result `1` from the operation
$return: { result: 1 }  
```
To return an object as result, use the `result` key:

:::note
If several return commands are used in a step, only the last one is returned.
:::

```yaml
# will return the result `{ x: 10, y: 20 }` from the operation
$return: { result: { x: 10, y: 20 } }  
```

The receiving client must know the type of the result to be able to parse it.


## `$change`

The `$change` action emits a property change signal from the simulation. The default case it emits the signal from the default interface. The value is property name and the new value.

```yaml
# emits the property change signal `count` with value `1`
$change: { count: 1 }  
```

The change command will not change the property. It is used to simulate a property change from the outside. The change signal is emitted automatically when a property is changed using the `$set` action.

It is also possible to change several properties at once:

```yaml
# emits the property change signal `count` and 'position' with their values
$change: { count: 1, position: { x: 10, y: 20 } }  
```

## `$call`

The `$call` action calls an operation from the simulation. The default case it calls the operation from the default interface. The value is the operation name and the arguments.

```yaml
# calls the operation `increment` with the argument `1` inside the simulation
$call: { increment: [ 1 ] }  
```

:::note
You need to make sure you do not recurse into an infinite loop, by calling an operation that calls the same operation again.
:::


You can also call several operations at once. We can currently not guarantee the order of operations. The last operation result is returned. If an error occurs, the error is returned and no result.

```yaml
# will call the operation `increment` with the argument `1` 
# and then call the operation `decrement` with the argument `1`
$call: { increment: [ 1 ], decrement: [ 1 ] } 
```

