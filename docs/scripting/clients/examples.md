---
sidebar_position: 2
---

# Examples

This section contains examples for scripted clients that connect to remote services.

## Counter Client

A simple client that connects to a remote counter service and calls the increment method:

```javascript
// counter_client.js
const channel = $createChannel();
const client = channel.createClient("counter");

// Monitor property changes from the remote service
client.onProperty("count", function (value) {
  console.log("client: count changed to", value);
});

function main() {
  console.log("Counter client started");

  // Call the remote increment method multiple times
  for (let i = 0; i < 5; i++) {
    console.log(`Calling increment (${i + 1}/5)`);
    client.callMethod("increment");
  }

  console.log("All increment calls sent");
}
```

Run the client (requires a running counter service):

```bash
apigear sim run counter_client.js --no-serve
```

## Vehicle Client

A more complex example connecting to multiple remote services:

```javascript
// vehicle_client.js
const channel = $createChannel();
const commands = channel.createClient("vehicle.Commands");
const state = channel.createClient("vehicle.State");
const indicators = channel.createClient("vehicle.Indicators");

// Monitor state changes
state.onProperty("speed", function(speed) {
    console.log(`Client - Speed: ${speed} km/h`);
});

state.onProperty("fuelLevelWarning", function(warning) {
    if (warning) {
        console.log("Client - Low fuel warning!");
    }
});

indicators.onProperty("checkEngine", function(value) {
    console.log(`Client - Check engine: ${value}`);
});

function main() {
    console.log("Vehicle client starting...");

    // Turn on vehicle systems
    commands.callMethod("turnOn");

    // Wait a bit then turn off
    setTimeout(function() {
        console.log("Turning off vehicle systems...");
        commands.callMethod("turnOff");
    }, 3000);
}
```

## Client API Reference

### Creating a Channel

```javascript
const channel = $createChannel();  // Uses default ws://localhost:4333/ws
const channel = $createChannel("ws://custom-host:5555/ws");
```

### Creating a Client

```javascript
const client = channel.createClient("service.name");
```

### Calling Methods

```javascript
client.callMethod("methodName");
client.callMethod("methodName", arg1, arg2);
```

### Monitoring Properties

```javascript
client.onProperty("propertyName", function(value) {
    console.log("Property changed:", value);
});
```

### Listening for Signals

```javascript
client.onSignal("signalName", function(args) {
    console.log("Signal received:", args);
});
```
