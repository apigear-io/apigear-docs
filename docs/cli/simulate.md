---
sidebar_position: 4
---

# API Simulation

API Simulation is a feature that allows you to simulate the behavior of an API. This is useful for testing, demonstration, and development. It decouples the interface implementation from the interface users.

## Quick API Simulation

API Simulation is a feature of the ApiGear platform. It allows to simulate the behavior of an API. The `apigear` command line tool can be used to simulate an API. The following example shows how to simulate the demo API.

API simulation is based on a simulation scenario. The following example shows how to create a simulation scenario for the demo API.

```yaml
# demo.scenario.yaml
interfaces:
  - name: demo.Counter
    props:
      count: 0
    operations:
      - name: increment
        actions:
          - $set: { count: 1 }
      - name: decrement
        actions:
          - $set: { count: 0 }
```

Now we can run the simulation server using the following command.

```bash
apigear simulate run demo.scenario.yaml
```

The simulation server will listen on port 5554. To change the port use the `--port` option. It will load the simulation scenario from the `demo.scenario.yaml` file. The simulation server will listen for API calls. Normally the API calls will come from a running API client. It is also possible to feed API calls using the `feed` command.

The following example shows how to feed API calls to the simulation server using a new line delimited json document (`NDJSON`). The format is described in the ObjectLink specification.

```json
["link", "demo.Counter"]
["set", "demo.Counter/count", 10]
["set", "demo.Counter/count", 11]
["set", "demo.Counter/count", 12]
["invoke", 1, "demo.Counter/increment", []]
["invoke", 2, "demo.Counter/increment", []]
["invoke", 3, "demo.Counter/decrement", []]
["unlink", "demo.Counter"]
```

To feed the API calls to the simulation server just run the following command.

```bash
apigear simulate feed demo.ndjson
```

This will send the API calls to the simulation server. The simulation server will print the API calls to the console.
