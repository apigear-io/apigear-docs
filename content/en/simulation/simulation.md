---
title: Simulation
description: Simulation allows interfaces to be simulated statically but also dynamically
position: 501
category: Simulation
version: 1.0
menuTitle: Simulation
---

The simulation server allows API clients to use a interface also if it is not yet implemented, just based on an interface definition and an attached scenario document. It decouples the interface implementation from the interface users. 

A simulation can have static data, dynamic random data, run a series of actions or even be an active simulation.

* Static Data: Provides fixed data or default data back to the caller
* Dynamic Data: Provides fake data based on a data schema back to the caller
* Action Sequences: Run a sequence of actions which manipulates the data and return based on a operation call
* Active Playbook: Runs a playbook based on a timed behavior. The playbook can be started, restarted, stopped based on actions or automatically run in a loop.

*A Blueprint must support the simulation protocol to talk to a simulation server. Please contact the individual blueprint documentation for more information.*


Using our demo counter we can write a scenario like this.

```yaml
schema: apigear.scenario/1.0
name: "demo scenario"
version: "1.0"
interfaces:
  demo.Counter:
    properties:
      count: { value: 0 } # static fixed definition of the state
    operations:
      increment:
        actions:
          - add: { $state.count, $params.step} # adds step to count on every call
      decrement:
        actions:
          - sub: { $state.count, $params.step} # subs step to count on every call
  demo.Echo:
    operation:
      say:
        return { value: "$params.message" } # returns the incoming message param back as result
```

This is a simple scenario which imitate a `demo.Counter` and `demo.Echo` interface.

When this scenario is loaded into the simulation server a client can just call these simulation operations.


        
