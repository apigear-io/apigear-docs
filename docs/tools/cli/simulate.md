---
sidebar_position: 3
---

# API Simulation and Stimulation

API Simulation is when a script simulates the behavior of an ApiGear API. API Stimulation is when a script drives the implementation of an ApiGear API. Simulation is great for consumers of APIs, sich as user interfaces or CLIs to validate their implementation without having access to the finished API implementation and with greater flexibility. An API Stimulation is great when you implement and API and want to drive your implementation for validation.

## API Simulation

API Simulation is a feature that allows you to simulate the behavior of an API. This is useful for testing, demonstration, and development. It decouples the interface implementation from the interface users. The simulation is based on [olink protocol](/docs/advanced/protocols/objectlink/intro), you need your application to use Object Link version of implementation to be able to receive the simulation data. Check your templates for `olink` feature for more information.
See [simulation documentation](/docs/advanced/simulation/intro) for more info.

:::note Beta

The **simulation** server is in beta and will gain new and improved functionality soon.

:::

### Quick API Simulation

API Simulation is a feature of the ApiGear platform. It allows to simulate the behavior of an API. The `apigear` command line tool can be used to simulate an API. The following example shows how to simulate the demo API.

API simulation is based on a simulation script. The following example shows how to create a simulation script for the [demo API](generate) used for code generation example. 

```js
// demo.script.js

const counter = $createService("demo.Counter", { count: 0 });
counter.increment = function() {
    counter.count++;
    return counter;
}

counter.decrement = function() {
    counter.count--;
    return counter;
}

// use the "$" scope to access the bare methods
counter.$.onProperty("count", function(value) {
    console.log("count is", value)
})


function main() {
    console.log("main function is run automatically when script is loaded")
    counter.increment()
}
```

Now we can run the simulation server using the following command. This scenario does not include a main function to run on startup. It simulates the operations on interface and provides initial state for properties. For steps simulation see [scenario documentation](/docs/advanced/simulation/intro).

```bash
apigear sim run counter.js
```

 It will load the simulation scenario from the `counter.js` file. The simulation server will listen for API calls. The simulation server by default is "127.0.0.1:4333". To change the address use the `--addr` option. <br />
 The example simulates a server side and normally the API calls will come from a running API client. 

 ### Service API

 The service API is a proxy API, which means it is shaped after the data you place inside. 

 For example when you define a property using `demo.$.setProperty("count", 10)` the proxy will have a `count` property.

 ```
 demo = $createService("demo", { city: "Paris"})
 // access the bare API to set another property
 demo.$.setProperty("count", 10)
 demo.count = 11
 demo.count++
 console.log(demo.count)
 ```

 ### Bare Service API



 ```ts
 const demo = $createBareService(name, props)
 demo.setProperty(key, value)
 demo.getProperty(key)
 demo.onProperty(key, callback)

 demo.setMethod(name, callback)
 demo.getMethod(name): calback
 demo.callMethod(name, args)

 demo.emitSignal(name, args)
 demo.onSignal(name, callback)
 ```

The bare API is accesssible using the `$` scope in a regular service.

```ts
const demo = $createService(name, props)
// accessing the bare API
demo.$.setProperty(key, value)
```


### Ball Exampple

Base on this API

```ts
module demo

struct Vec2D {
    x: float,
    y: float
}

interface Ball {
    pos: Vec2D
    vel: Vec2D
    acc: Vec2D
    move()
}
```


We can create a simulation for this

```ts
const ball = $createService("demo.Ball", {
    pos: { x: 0, y: 0 },
    vel: { x: 1, y: 1 },
    acc: { x: 1, y: 1 },
});


ball.move = function() {
    var acc = ball.acc;
    var vel = ball.vel;
    var pos = ball.pos;
    var newPos = { x: pos.x + vel.x, y: pos.y + vel.y };
    var newVel = { x: vel.x + acc.x, y: vel.y + acc.y };
    ball.pos += newPos;
    ball.vel = newVel;
};

    
ball.$.onProperty("pos", function (value) {
    console.log("pos changed", JSON.stringify(value));
});

ball.$.onProperty("vel", function (value) {
    console.log("vel changed", JSON.stringify(value));
});

ball.$.onProperty("acc", function (value) {
    console.log("acc changed", JSON.stringify(value));
});

function main() {
    console.log("start");
    for (let i = 0; i < 10; i++) {
        ball.move()
    }
    console.log("finish", JSON.stringify(ball.$.getProperties()));
    $quit();
}
```

## API Stimulation

API Stimulation requires a connection to an external service using the ObjectLink protocol. For this we fist neeed to create a channel to stream the data and then on the stream create the client to interacte with the remote service.

```ts
const url = "ws://localhost:5555/ws"
// tries to connect to remote server
const channel = $createChannel(url)
// links to the demo.Ball service
const ball = channel.createClient("demo.Ball")
// calls the remote method "move"
ball.callMethod("move")

function main() {
    for (let i = 0; i < 10; i++) {
        ball.callMethod("move")
    }
}
```




 