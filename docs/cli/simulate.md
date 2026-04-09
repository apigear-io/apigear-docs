# Scripting Support

The CLI provides JavaScript-based scripting for both simulating services (scripted backends) and driving services (scripted clients). This enables testing, prototyping, and validation without compiled code.

## Commands[​](#commands "Direct link to Commands")

| Command         | Alias    | Description                    |
| --------------- | -------- | ------------------------------ |
| `simulate run`  | `sim r`  | Run a scripted backend         |
| `simulate feed` | `sim f`  | Feed simulation data from file |
| `stimulate run` | `stim r` | Run a scripted client          |

## Scripted Backends (Simulation)[​](#scripted-backends-simulation "Direct link to Scripted Backends (Simulation)")

Simulate your service to test client code before the real backend exists.

### Basic Usage[​](#basic-usage "Direct link to Basic Usage")

```
apigear sim run scenario.js
```

### Options[​](#options "Direct link to Options")

| Flag            | Description                | Default                 |
| --------------- | -------------------------- | ----------------------- |
| `--fn`          | Function to run on startup | `main`                  |
| `--watch`       | Watch script for changes   | `false`                 |
| `--nats-server` | NATS server URL            | `nats://localhost:4222` |

### Watch Mode[​](#watch-mode "Direct link to Watch Mode")

Automatically reload when the script changes:

```
apigear sim run scenario.js --watch
```

### Example Script[​](#example-script "Direct link to Example Script")

```
// counter.js
const counter = $createService("demo.Counter", { count: 0 });

counter.increment = function() {
    counter.count++;
    return counter.count;
}

counter.decrement = function() {
    counter.count--;
    return counter.count;
}

// React to property changes
counter.$.onProperty("count", function(value) {
    console.log("count changed to", value);
});

function main() {
    console.log("Counter service started");
    console.log("Initial count:", counter.count);
}
```

Run it:

```
apigear sim run counter.js
```

The server listens on `ws://localhost:4333/ws` by default.

## Scripted Clients (Stimulation)[​](#scripted-clients-stimulation "Direct link to Scripted Clients (Stimulation)")

Drive your running service with scripted API calls.

### Basic Usage[​](#basic-usage-1 "Direct link to Basic Usage")

```
apigear stim run client.js
```

### Options[​](#options-1 "Direct link to Options")

| Flag      | Description                | Default |
| --------- | -------------------------- | ------- |
| `--fn`    | Function to run on startup | `main`  |
| `--watch` | Watch script for changes   | `false` |

### Example Script[​](#example-script-1 "Direct link to Example Script")

```
// client.js
const channel = $createChannel("ws://localhost:4333/ws");
const counter = channel.createClient("demo.Counter");

// Monitor property changes
counter.onProperty("count", function(value) {
    console.log("count is now:", value);
});

function main() {
    console.log("Client started");

    // Call remote methods
    for (let i = 0; i < 5; i++) {
        counter.callMethod("increment");
    }

    console.log("Done");
}
```

Run it:

```
apigear stim run client.js
```

## Service API[​](#service-api "Direct link to Service API")

Create simulated services with the `$createService` function.

### Creating a Service[​](#creating-a-service "Direct link to Creating a Service")

```
const service = $createService("module.Interface", {
    // Initial property values
    propertyName: initialValue
});
```

### Properties[​](#properties "Direct link to Properties")

```
// Set property
service.count = 10;

// Get property
console.log(service.count);

// Using bare API
service.$.setProperty("count", 10);
service.$.getProperty("count");

// React to changes
service.$.onProperty("count", function(value) {
    console.log("count changed:", value);
});
```

### Methods[​](#methods "Direct link to Methods")

```
// Define method implementation
service.increment = function() {
    service.count++;
    return service.count;
};

// Using bare API
service.$.setMethod("increment", function() {
    return service.count++;
});
```

### Signals[​](#signals "Direct link to Signals")

```
// Emit signal
service.$.emitSignal("countChanged", [service.count]);

// Listen for signals
service.$.onSignal("countChanged", function(args) {
    console.log("Signal received:", args);
});
```

## Client API[​](#client-api "Direct link to Client API")

Connect to remote services with the `$createChannel` function.

### Creating a Channel[​](#creating-a-channel "Direct link to Creating a Channel")

```
// Default address
const channel = $createChannel();

// Custom address
const channel = $createChannel("ws://localhost:5555/ws");
```

### Creating a Client[​](#creating-a-client "Direct link to Creating a Client")

```
const client = channel.createClient("module.Interface");
```

### Calling Methods[​](#calling-methods "Direct link to Calling Methods")

```
client.callMethod("methodName");
client.callMethod("methodName", arg1, arg2);
```

### Monitoring Properties[​](#monitoring-properties "Direct link to Monitoring Properties")

```
client.onProperty("propertyName", function(value) {
    console.log("Property changed:", value);
});
```

### Listening for Signals[​](#listening-for-signals "Direct link to Listening for Signals")

```
client.onSignal("signalName", function(args) {
    console.log("Signal received:", args);
});
```

## Global Functions[​](#global-functions "Direct link to Global Functions")

Available in all scripts:

| Function                          | Description                       |
| --------------------------------- | --------------------------------- |
| `$createService(name, props)`     | Create a simulated service        |
| `$createBareService(name, props)` | Create service with bare API only |
| `$createChannel(url?)`            | Create client channel             |
| `$quit()`                         | Exit the script                   |
| `console.log(...)`                | Print to console                  |
| `setTimeout(fn, ms)`              | Delayed execution                 |
| `setInterval(fn, ms)`             | Repeated execution                |

## Feeding Data[​](#feeding-data "Direct link to Feeding Data")

Feed pre-recorded data to simulation:

```
apigear sim feed events.ndjson
```

### Feed Options[​](#feed-options "Direct link to Feed Options")

| Flag       | Description            | Default                  |
| ---------- | ---------------------- | ------------------------ |
| `--addr`   | Server address         | `ws://127.0.0.1:4333/ws` |
| `--repeat` | Times to repeat        | `1`                      |
| `--sleep`  | Delay between messages | `100ms`                  |
| `--batch`  | Messages per batch     | `1`                      |

### NDJSON Format[​](#ndjson-format "Direct link to NDJSON Format")

```
{"type":"property","interface":"demo.Counter","property":"count","value":0}
{"type":"method","interface":"demo.Counter","method":"increment"}
{"type":"signal","interface":"demo.Counter","signal":"countChanged","args":[1]}
```

## Complex Example[​](#complex-example "Direct link to Complex Example")

A physics simulation with position, velocity, and acceleration:

```
// ball.js
const ball = $createService("demo.Ball", {
    pos: { x: 0, y: 0 },
    vel: { x: 1, y: 1 },
    acc: { x: 0.1, y: 0.1 }
});

ball.move = function() {
    // Update velocity
    ball.vel = {
        x: ball.vel.x + ball.acc.x,
        y: ball.vel.y + ball.acc.y
    };

    // Update position
    ball.pos = {
        x: ball.pos.x + ball.vel.x,
        y: ball.pos.y + ball.vel.y
    };

    return ball.pos;
};

ball.reset = function() {
    ball.pos = { x: 0, y: 0 };
    ball.vel = { x: 1, y: 1 };
};

ball.$.onProperty("pos", function(value) {
    console.log("Position:", JSON.stringify(value));
});

function main() {
    console.log("Ball simulation started");

    // Run 10 steps
    for (let i = 0; i < 10; i++) {
        ball.move();
    }

    console.log("Final state:", JSON.stringify(ball.$.getProperties()));
    $quit();
}
```

## Use Cases[​](#use-cases "Direct link to Use Cases")

### Client Development[​](#client-development "Direct link to Client Development")

Test UI code against a simulated backend:

```
# Start simulation
apigear sim run backend.js

# Run your client application
./my-client-app
```

### Load Testing[​](#load-testing "Direct link to Load Testing")

Drive your service with repeated calls:

```
apigear stim run load-test.js
```

```
// load-test.js
const channel = $createChannel();
const service = channel.createClient("demo.Service");

function main() {
    for (let i = 0; i < 1000; i++) {
        service.callMethod("process", { id: i });
    }
}
```

### Integration Testing[​](#integration-testing "Direct link to Integration Testing")

Verify service behavior:

```
apigear sim run mock-service.js &
apigear stim run test-client.js
```

## Related Documentation[​](#related-documentation "Direct link to Related Documentation")

* [Scripted Backends](/docs/scripting/backends/intro.md) — Detailed backend scripting
* [Scripted Clients](/docs/scripting/clients/intro.md) — Detailed client scripting
* [ObjectLink Protocol](/docs/protocols/objectlink/intro.md) — Communication protocol
