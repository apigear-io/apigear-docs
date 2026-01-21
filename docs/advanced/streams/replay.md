---
sidebar_position: 3
---

# Replay

:::note Prerequisites

The `apigear serve` command must be running to use the replay functionality, as it provides the necessary ObjectLink service for replaying recorded streams.

:::

To replay recorded ObjectLink message streams, you need to have a recorded stream available. You can create recordings using the [Record](record.md) functionality.

## Replay by Device ID

Once you have a recorded stream, you can replay the latest session for a specific device:

```bash
apigear streams play --device <device_id>
```

This command replays the most recent recording session for the specified device ID.

## Replay by Session ID

If you want to replay a specific session, use the session ID instead:

```bash
apigear streams play --session <session_id>
```

This provides precise control over which recording session to replay.

## How Replay Works

During replay, the ApiGear service simulates the original message flow by sending the recorded ObjectLink messages in the same sequence they were originally captured. This allows you to:

- Test client applications against known message sequences
- Debug issues by reproducing exact scenarios
- Validate system behavior with real-world data patterns


