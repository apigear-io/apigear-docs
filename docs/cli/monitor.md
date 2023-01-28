---
sidebar_position: 3
---

# API Monitoring

API Monitoring is a feature that allows you to monitor the behavior of an API. This is useful for testing, demonstration, and development. It decouples the interface implementation from the interface users.

## Quick API Monitoring

API Monitoring is a feature of the ApiGear platform. It allows to monitor the traffic of an API. The `apigear` command line tool can be used to monitor an API. The following example shows how to monitor the demo API.

```bash
apigear monitor run
```

This will start the API monitoring server. The server will listen on port 5555. To change the port use the `--port` option.

The monitoring server will listen for API calls. Normally the API events will come from a running API client. It is also possible to feed API events using the `feed` command.

The following example shows how to feed API event to the monitor using a new line delimited json document (`NDJSON`).

```json
// demo.ndjson
{ "id": "1", "kind": "call", "symbol": "demo.Counter/increment" }
{ "id": "2", "kind": "state", "symbol": "demo.Counter", "props": { "count": 99 } } }
```

```bash
apigear monitor feed demo.ndjson
```

This will send the API calls to the monitoring server. The monitoring server will print the API calls to the console.

:::tip

Currently the monitoring server does not store the API calls. This will be added in a future release with a playback feature.

:::
