# API Simulation

The simulation server allows API clients to simulate interfaces and (limited) behavior. This is very useful during testing, demonstration also development to simulate specific behavior. It decouples the interface implementation from the interface users.

A simulation can have static data, dynamic random data, run a series of actions or even be an active simulation.

- Static Data: Provides fixed data or default data back to the caller
- Dynamic Data: Provides fake data based on a data schema back to the caller
- Action Sequences: Run a sequence of actions which manipulates the data and return based on a operation call
- Active Playbook: Runs a playbook based on a timed behavior. The playbook can be started, restarted, stopped based on actions or automatically run in a loop.

_A template must support the simulation protocol to talk to a simulation server. Please contact the individual template documentation for more information._

Simulation scenarios can be written using a YAML schema or using a JavaScript file. The JavaScript file can be used to implement more complex scenarios.

Using our demo counter we can write a YAML based scenario like this.

```yaml
schema: apigear.scenario/1.0
name: "demo scenario"
version: "1.0"
interfaces:
  - name: demo.Counter:
    properties:
      count: 0
    operations:
      increment:
        actions:
          - $set { count: 10 }
      decrement:
        actions:
          - $set { count: -10 }
  demo.Echo:
    operation:
      say:
        actions:
          - $return { value: "Hello World" }
```

This is a simple scenario which imitate a `demo.Counter` and `demo.Echo` interface.

When this scenario is loaded into the simulation server a client can just call these simulation operations.
