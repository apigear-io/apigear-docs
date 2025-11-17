---
sidebar_position: 4
---


# Inspect

ApiGear provides tools to inspect recorded ObjectLink message streams. This allows users to analyze the contents of the streams, understand message flows, and debug issues in distributed systems.

## Recording State

```bash
apigear streams state --session <session_id>
```

This command displays the current state of a specific recording session, including details such as the number of messages recorded, duration, and any errors encountered during the recording process.

## Tail Logs

```bash
apigear streams tail
```

This command allows users to view real-time logs of the recording process. It is useful for monitoring ongoing recordings and diagnosing issues as they occur.

## List Recordings

```bash
apigear streams ls
```

This command lists all recorded streams, providing details such as device ids, session ids, timestamps, and the number of messages recorded. It helps users manage and identify available recordings for further analysis or playback.

## Remove Recordings

```bash
apigear streams rm --device <device_id>
```

:::note

   Be cautious when using this command, as it will permanently delete the specified recording associated with the given device id.

   To remove all recordings, you can use:

   ```bash
   apigear streams rm --purge-all
   ```
:::


## Show Recording Details

```bash
apigear streams show --session <session_id>
```

This command provides detailed information about a specific recording session, including metadata, message counts, and timestamps. It is useful for in-depth analysis of individual recordings.

## Generate Test Data

```bash
apigear streams generate --template <file_path> --count <number_of_messages> --output <file_path>
```

This command generates synthetic ObjectLink message streams based on a provided template. It allows users to create test data for simulation and testing purposes.

The template file should define the structure and content of the messages to be generated. The generated messages will be saved to the specified output file. The templates can use faker (https://github.com/go-faker/faker) data to create realistic test scenarios.

```go
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

The above template generates order messages with unique ids, customer details, order totals, and item lists using faker data.

## Publish Test Data

After generating test data, you can publish it directly to a stream (NATS subject) using the following command:

```bash
apigear streams publish --file <file_path> --device <device_id>
```

This command reads the generated test data from the specified file and publishes it to the stream associated with the given device id. This is useful for simulating message flows in a controlled manner for testing and debugging purposes.


:::note

   This commands does not use the monitoring endpoint to send the messages, it directly publishes them to the NATS subject used for recording. This allows for faster injection of test data without going through the full ObjectLink protocol stack.
:::