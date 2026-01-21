---
sidebar_position: 4
---


# Inspect

ApiGear provides comprehensive tools to inspect recorded ObjectLink message streams. These tools enable users to analyze stream contents, understand message flows, and debug issues in distributed systems.

## View Recording State

```bash
apigear streams state --session <session_id>
```

Displays the current state of a specific recording session, including:
- Number of messages recorded
- Recording duration
- Any errors encountered during the recording process

## Monitor Real-time Logs

```bash
apigear streams tail
```

View real-time logs of the recording process. This command is particularly useful for:
- Monitoring ongoing recordings
- Diagnosing issues as they occur
- Observing message flow patterns in real-time

## List All Recordings

```bash
apigear streams ls
```

Lists all recorded streams with comprehensive details:
- Device IDs
- Session IDs
- Recording timestamps
- Message counts

This helps you manage and identify available recordings for further analysis or playback.

## Remove Recordings

### Remove by Device ID

```bash
apigear streams rm --device <device_id>
```

### Remove All Recordings

```bash
apigear streams rm --purge-all
```

:::warning Permanent Deletion

Be cautious when using these commands, as they will permanently delete recordings. This action cannot be undone.

:::

## Show Recording Details

```bash
apigear streams show --session <session_id>
```

Provides comprehensive information about a specific recording session:
- Session metadata
- Detailed message counts
- Recording timestamps
- Message type distribution

This command is invaluable for in-depth analysis of individual recording sessions.

## Generate Test Data

```bash
apigear streams generate --template <file_path> --count <number_of_messages> --output <file_path>
```

Generates synthetic ObjectLink message streams based on a provided template. This functionality enables you to create realistic test data for simulation and testing purposes.

### Template Structure

Template files define the structure and content of generated messages. Templates support [Faker](https://github.com/go-faker/faker) data to create realistic test scenarios.

### Example Template

```json
{
  "id": "{{uuid}}",
  "sequence": {{seq}},
  "customer": {
    "name": "{{faker "person.name"}}",
    "email": "{{faker "person.email"}}",
    "phone": "{{faker "person.phone"}}"
  },
  "order_total": {{printf "%.2f" (randFloat 42 999)}},
  "items": [
    {
      "sku": "{{faker "company.bs"}}-{{randInt 1000 9999}}",
      "quantity": {{randInt 1 5}},
      "unit_price": {{printf "%.2f" (randFloat 10 120)}}
    },
    {
      "sku": "{{faker "company.bs"}}-{{randInt 1000 9999}}",
      "quantity": {{randInt 1 5}},
      "unit_price": {{printf "%.2f" (randFloat 10 120)}}
    }
  ],
  "status": "{{faker "company.buzzword"}}",
  "created_at": "{{timestamp}}"
}
```

This template generates realistic order messages with:
- Unique IDs and sequence numbers
- Customer details using faker data
- Randomized order totals and item quantities
- Realistic product SKUs and timestamps

## Publish Test Data

After generating test data, you can publish it directly to a stream using:

```bash
apigear streams publish --file <file_path> --device <device_id>
```

This command reads the generated test data from the specified file and publishes it to the stream associated with the given device ID.

### Use Cases

- Simulate realistic message flows for testing
- Debug system behavior with controlled data sets
- Load testing with predictable message patterns
- Integration testing with synthetic data

:::note Direct Publishing

This command bypasses the monitoring endpoint and publishes directly to the NATS subject used for recording. This approach enables faster test data injection without going through the full ObjectLink protocol stack.

:::