---
sidebar_position: 3
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

The simulation server will listen on port 5555. To change the port use the `--port` option. It will load the simulation scenario from the `demo.scenario.yaml` file. The simulation server will listen for API calls. Normally the API calls will come from a running API client. It is also possible to feed API calls using the `feed` command.

The following example shows how to feed API calls to the simulation server using a new line delimited json document (`NDJSON`).

```json
{ "method": "simu.state", "params": { "symbol": "demo.Counter" }}
{ "method": "simu.call", "params": { "symbol": "demo.Counter/increment", "data": { "step": 1 } }}
{ "method": "simu.call", "params": { "symbol": "demo.Counter/decrement", "data": { "step": 2 } }}
{ "method": "simu.state", "params": { "symbol": "demo.Counter", "data": { "count": 4 } }}
{ "method": "simu.state", "params": { "symbol": "demo.Counter" }}
```

To feed the API calls to the simulation server just run the following command.

```bash
apigear simulate feed demo.ndjson
```

This will send the API calls to the simulation server. The simulation server will print the API calls to the console.
