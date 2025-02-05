---
sidebar_position: 3
---

# API Simulation

API Simulation is a feature that allows you to simulate the behavior of an API. This is useful for testing, demonstration, and development. It decouples the interface implementation from the interface users. The simulation is based on [olink protocol](/docs/advanced/protocols/objectlink/intro), you need your application to use Object Link version of implementation to be able to receive the simulation data. Check your templates for `olink` feature for more information.
See [simulation documentation](/docs/advanced/simulation/intro) for more info.

:::note Beta

The **simulation** server is in beta and will gain new and improved functionality soon.

:::

## Quick API Simulation

API Simulation is a feature of the ApiGear platform. It allows to simulate the behavior of an API. The `apigear` command line tool can be used to simulate an API. The following example shows how to simulate the demo API.

API simulation is based on a simulation script. The following example shows how to create a simulation script for the [demo API](generate) used for code generation example. 

```js
// demo.script.js

const counter = $createActor("demo.Counter", { count: 0 });
counter.increment = function() {
    this.count++;
    return this;
}

counter.decrement = function() {
    this.count--;
    return this;
}
```

Now we can run the simulation server using the following command. This scenario does not include a main function to run on startup. It simulates the operations on interface and provides initial state for properties. For steps simulation see [scenario documentation](/docs/advanced/simulation/intro).

```bash
apigear sim run demo.script.js
```

 It will load the simulation scenario from the `demo.script.js` file. The simulation server will listen for API calls. The simulation server by default is "127.0.0.1:4333". To change the address use the `--addr` option. <br />
 The example simulates a server side and normally the API calls will come from a running API client. 
