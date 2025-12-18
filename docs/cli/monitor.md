---
sidebar_position: 4
---

# API Monitoring

The `monitor` command runs a server that receives and displays API events from your applications. Use it to debug API interactions, verify correct behavior, and understand API usage patterns.

## Commands

| Command | Alias | Description |
|---------|-------|-------------|
| `monitor run` | `mon r`, `mon start` | Start the monitor server |
| `monitor feed` | — | Feed events from a file |

## Starting the Monitor

### Basic Usage

```bash
apigear monitor run
```

This starts the monitor server on the default address `http://localhost:5555`.

### Options

| Flag | Short | Description | Default |
|------|-------|-------------|---------|
| `--nats-url` | `-n` | NATS server URL | `nats://localhost:4222` |
| `--verbose` | `-v` | Enable verbose logging | `false` |
| `--device-id` | `-d` | Filter by device ID | `""` (all devices) |
| `--pretty` | `-p` | Pretty print JSON output | `false` |
| `--headers` | `-H` | Include headers in output | `false` |

### Examples

Pretty-print all events:

```bash
apigear monitor run --pretty
```

Monitor specific device:

```bash
apigear monitor run --device-id my-device-123
```

Verbose mode with headers:

```bash
apigear monitor run --verbose --headers
```

## Monitor Endpoint

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

## Event Format

Monitor events follow this structure:

```json
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

### Property Events

```json
{
  "type": "property",
  "interface": "demo.Counter",
  "property": "count",
  "value": 42
}
```

### Method Events

```json
{
  "type": "method",
  "interface": "demo.Counter",
  "method": "increment",
  "args": [],
  "result": 43
}
```

### Signal Events

```json
{
  "type": "signal",
  "interface": "demo.Counter",
  "signal": "countChanged",
  "args": [43]
}
```

## Feeding Test Data

Use `monitor feed` to replay events from files for testing.

### Supported Formats

| Format | Extension | Description |
|--------|-----------|-------------|
| JSON | `.json` | Single event or array of events |
| NDJSON | `.ndjson` | Newline-delimited JSON events |
| JavaScript | `.js` | Script that generates events |
| CSV | `.csv` | Comma-separated event data |

### Basic Usage

```bash
apigear monitor feed events.ndjson
```

### Feed Options

| Flag | Description | Default |
|------|-------------|---------|
| `--url` | Monitor server address | `http://localhost:5555` |
| `--repeat` | Times to repeat the file | `1` |
| `--interval` | Delay between events | `100ms` |
| `--device` | Device ID to use | `"123"` |
| `--batch` | Events per batch | `1` |

### Examples

Repeat events 10 times:

```bash
apigear monitor feed events.ndjson --repeat 10
```

Faster playback:

```bash
apigear monitor feed events.ndjson --interval 10ms
```

Batch events:

```bash
apigear monitor feed events.ndjson --batch 5
```

### NDJSON Format

```json
{"type":"property","interface":"demo.Counter","property":"count","value":0}
{"type":"method","interface":"demo.Counter","method":"increment","args":[]}
{"type":"property","interface":"demo.Counter","property":"count","value":1}
{"type":"signal","interface":"demo.Counter","signal":"countChanged","args":[1]}
```

## SDK Integration

Enable monitoring in generated SDKs by including the `monitor` feature:

```yaml
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

### Configuring the Monitor URL

In your application, configure the monitor endpoint:

```cpp
// C++ example
auto monitor = ApiGear::Monitor::create("http://localhost:5555/monitor/my-app");
auto counter = Counter::create(monitor);
```

```python
# Python example
monitor = apigear.Monitor("http://localhost:5555/monitor/my-app")
counter = Counter(monitor=monitor)
```

## Use Cases

### Development Debugging

Watch API calls during development:

```bash
# Terminal 1: Start monitor
apigear monitor run --pretty

# Terminal 2: Run your application
./my-app
```

### Integration Testing

Verify expected API behavior:

```bash
# Start monitor and capture output
apigear monitor run > api-events.log &

# Run test suite
./run-tests

# Analyze captured events
cat api-events.log | jq '.interface'
```

### Load Testing

Feed high-volume test data:

```bash
apigear monitor feed load-test.ndjson \
  --repeat 1000 \
  --interval 1ms \
  --batch 10
```

### Demo and Presentation

Visualize API activity in Studio:

1. Start monitor: `apigear monitor run`
2. Open ApiGear Studio
3. Navigate to Monitor view
4. Run your application

## Combining with Simulation

Run simulation and monitor together:

```bash
# Terminal 1: Start simulation server
apigear sim run scenario.js

# Terminal 2: Start monitor
apigear monitor run --pretty

# Terminal 3: Run client application
./my-client
```

## NATS Integration

For distributed systems, use NATS as a message broker:

```bash
# Start NATS server (if not running)
nats-server

# Start monitor with NATS
apigear monitor run --nats-url nats://localhost:4222
```

Events are published to NATS subjects based on interface names.

## Related Documentation

- [Monitoring APIs](/docs/monitor/intro) — Detailed monitoring documentation
- [API Simulation](simulate) — Run scripted backends
- [ObjectLink REPL](olink) — Interactive protocol testing
