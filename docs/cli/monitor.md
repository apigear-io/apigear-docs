# API Monitoring

The `monitor` command runs a server that receives and displays API events from your applications. Use it to debug API interactions, verify correct behavior, and understand API usage patterns.

## Commands[​](#commands "Direct link to Commands")

| Command        | Alias                | Description              |
| -------------- | -------------------- | ------------------------ |
| `monitor run`  | `mon r`, `mon start` | Start the monitor server |
| `monitor feed` | —                    | Feed events from a file  |

## Starting the Monitor[​](#starting-the-monitor "Direct link to Starting the Monitor")

### Basic Usage[​](#basic-usage "Direct link to Basic Usage")

```
apigear monitor run
```

This starts the monitor server on the default address `http://localhost:5555`.

### Options[​](#options "Direct link to Options")

| Flag          | Short | Description               | Default                 |
| ------------- | ----- | ------------------------- | ----------------------- |
| `--nats-url`  | `-n`  | NATS server URL           | `nats://localhost:4222` |
| `--verbose`   | `-v`  | Enable verbose logging    | `false`                 |
| `--device-id` | `-d`  | Filter by device ID       | `""` (all devices)      |
| `--pretty`    | `-p`  | Pretty print JSON output  | `false`                 |
| `--headers`   | `-H`  | Include headers in output | `false`                 |

### Examples[​](#examples "Direct link to Examples")

Pretty-print all events:

```
apigear monitor run --pretty
```

Monitor specific device:

```
apigear monitor run --device-id my-device-123
```

Verbose mode with headers:

```
apigear monitor run --verbose --headers
```

## Monitor Endpoint[​](#monitor-endpoint "Direct link to Monitor Endpoint")

Applications send events to the monitor via HTTP POST:

```
POST http://localhost:5555/monitor/{source}
Content-Type: application/json

{
  "type": "method",
  "interface": "demo.Counter",
  "method": "increment",
  "args": [],
  "timestamp": "2024-01-15T10:30:00Z"
}
```

The `{source}` path parameter identifies the event source (e.g., device ID, service name).

## Event Format[​](#event-format "Direct link to Event Format")

Monitor events follow this structure:

```
{
  "type": "property|method|signal",
  "interface": "module.Interface",
  "property": "propertyName",
  "method": "methodName",
  "signal": "signalName",
  "value": {},
  "args": [],
  "result": {},
  "timestamp": "2024-01-15T10:30:00Z"
}
```

### Property Events[​](#property-events "Direct link to Property Events")

```
{
  "type": "property",
  "interface": "demo.Counter",
  "property": "count",
  "value": 42
}
```

### Method Events[​](#method-events "Direct link to Method Events")

```
{
  "type": "method",
  "interface": "demo.Counter",
  "method": "increment",
  "args": [],
  "result": 43
}
```

### Signal Events[​](#signal-events "Direct link to Signal Events")

```
{
  "type": "signal",
  "interface": "demo.Counter",
  "signal": "countChanged",
  "args": [43]
}
```

## Feeding Test Data[​](#feeding-test-data "Direct link to Feeding Test Data")

Use `monitor feed` to replay events from files for testing.

### Supported Formats[​](#supported-formats "Direct link to Supported Formats")

| Format     | Extension | Description                     |
| ---------- | --------- | ------------------------------- |
| JSON       | `.json`   | Single event or array of events |
| NDJSON     | `.ndjson` | Newline-delimited JSON events   |
| JavaScript | `.js`     | Script that generates events    |
| CSV        | `.csv`    | Comma-separated event data      |

### Basic Usage[​](#basic-usage-1 "Direct link to Basic Usage")

```
apigear monitor feed events.ndjson
```

### Feed Options[​](#feed-options "Direct link to Feed Options")

| Flag         | Description              | Default                 |
| ------------ | ------------------------ | ----------------------- |
| `--url`      | Monitor server address   | `http://localhost:5555` |
| `--repeat`   | Times to repeat the file | `1`                     |
| `--interval` | Delay between events     | `100ms`                 |
| `--device`   | Device ID to use         | `"123"`                 |
| `--batch`    | Events per batch         | `1`                     |

### Examples[​](#examples-1 "Direct link to Examples")

Repeat events 10 times:

```
apigear monitor feed events.ndjson --repeat 10
```

Faster playback:

```
apigear monitor feed events.ndjson --interval 10ms
```

Batch events:

```
apigear monitor feed events.ndjson --batch 5
```

### NDJSON Format[​](#ndjson-format "Direct link to NDJSON Format")

```
{"type":"property","interface":"demo.Counter","property":"count","value":0}
{"type":"method","interface":"demo.Counter","method":"increment","args":[]}
{"type":"property","interface":"demo.Counter","property":"count","value":1}
{"type":"signal","interface":"demo.Counter","signal":"countChanged","args":[1]}
```

## SDK Integration[​](#sdk-integration "Direct link to SDK Integration")

Enable monitoring in generated SDKs by including the `monitor` feature:

```
# solution.yaml
targets:
  - name: cpp_sdk
    inputs:
      - demo.module.yaml
    output: ../generated
    template: apigear-io/template-cpp14
    features:
      - api
      - stubs
      - monitor  # Enable monitoring
```

The generated code wraps your implementation with monitoring hooks that send events to the monitor server.

### Configuring the Monitor URL[​](#configuring-the-monitor-url "Direct link to Configuring the Monitor URL")

In your application, configure the monitor endpoint:

```
// C++ example
auto monitor = ApiGear::Monitor::create("http://localhost:5555/monitor/my-app");
auto counter = Counter::create(monitor);
```

```
# Python example
monitor = apigear.Monitor("http://localhost:5555/monitor/my-app")
counter = Counter(monitor=monitor)
```

## Use Cases[​](#use-cases "Direct link to Use Cases")

### Development Debugging[​](#development-debugging "Direct link to Development Debugging")

Watch API calls during development:

```
# Terminal 1: Start monitor
apigear monitor run --pretty

# Terminal 2: Run your application
./my-app
```

### Integration Testing[​](#integration-testing "Direct link to Integration Testing")

Verify expected API behavior:

```
# Start monitor and capture output
apigear monitor run > api-events.log &

# Run test suite
./run-tests

# Analyze captured events
cat api-events.log | jq '.interface'
```

### Load Testing[​](#load-testing "Direct link to Load Testing")

Feed high-volume test data:

```
apigear monitor feed load-test.ndjson \
  --repeat 1000 \
  --interval 1ms \
  --batch 10
```

### Demo and Presentation[​](#demo-and-presentation "Direct link to Demo and Presentation")

Visualize API activity in Studio:

1. Start monitor: `apigear monitor run`
2. Open ApiGear Studio
3. Navigate to Monitor view
4. Run your application

## Combining with Simulation[​](#combining-with-simulation "Direct link to Combining with Simulation")

Run simulation and monitor together:

```
# Terminal 1: Start simulation server
apigear sim run scenario.js

# Terminal 2: Start monitor
apigear monitor run --pretty

# Terminal 3: Run client application
./my-client
```

## NATS Integration[​](#nats-integration "Direct link to NATS Integration")

For distributed systems, use NATS as a message broker:

```
# Start NATS server (if not running)
nats-server

# Start monitor with NATS
apigear monitor run --nats-url nats://localhost:4222
```

Events are published to NATS subjects based on interface names.

## Related Documentation[​](#related-documentation "Direct link to Related Documentation")

* [Monitoring APIs](/docs/monitor/intro.md) — Detailed monitoring documentation
* [API Simulation](/docs/cli/simulate.md) — Run scripted backends
* [ObjectLink REPL](/docs/cli/olink.md) — Interactive protocol testing
