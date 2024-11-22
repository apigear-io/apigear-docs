---
sidebar_position: 8
---

# Performance

ObjectLink protocol is designed to be fast, readable and efficient. It is based on a JSON protocol in it's simplest form but also can be used using the MsgPack or CBOR binary protocols. The protocol is designed to be used over WebSockets or other bidirectional communication channels.

## Testing

The protocol requires an init message to be send first to subscribe to the remote objects. After this the protocol is fully bidirectional. The messages can be divided in general into three areas:

- Protocol messages
    - admin messages, which are send to keep the connection alive (e.g. link/unlink, ping/pong)
    - signal messages, which are server side events send to all linked clients
    - property messages, which are distributed properties where a change on the client side is send to the server and then to all linked clients.
    - operation messages, which are client side operations which are send to the server and the result is send back to the client.

- Connected Clients

    Number of connected clients. It will be interested to see how the protocol behaves when more clients are connected to the same server.

- Message Size
    
    The size of the messages is also important. The protocol is designed to be used with JSON, MsgPack and CBOR. It will be interesting to see how the protocol behaves with different message sizes.

- Technology

    The protocol is designed to work with different technologies on both ends. Having a mix of client/server technologies will be interesting to see which combination is the fastest.

- Single/Multi Process Server

    The protocol is designed to work with single and multi process servers. It will be interesting to see how the protocol behaves with different server implementations.

A test should be designed to test the performance of the protocol.

## Designing the test

We need to benchmark the different areas of the protocol, such as message types (signals, properties, operations), message size, number of connected clients and technology combinations and single/multi process environments.

* All tests start after a link message has been send. And they end when an unlink message is send.
* All tests should record the time it takes to send and receive the initial init message.
* All tests should be repeated N-times to get a good average.
* All test should be run on the same machine to get a good comparison.
* The sum sequence of integer values is calculated using the following formula: `sum = (N * (N + 1)) / 2`, where N is the number of messages. In the case of send/reply messages the latency is duration divided by 2.
* The test output should be in a CSV format, based on the following template:

    ```csv
    Test Case, Serialization, Message Size, Clients, Client Technology, Total Time
    ```


### Test Cases

**Signal**

To test signals we can send N signals from the server to the client. Each signal should have an increasing integer number and as a result the numbers are added up and the end result is compared to the expected result.

**Property Changes**

For properties we can send N property changes from the server to the client. Each property change should have an increasing integer number and as a result the numbers are added up and the end result is compared to the expected result.

**Property Propagation**

The other property test should be to set the property on the client and then wait until it propagated back on the client and then send set the next property value.

**Operation RPC**

The operation test should be to send N operation calls from the client to the server and then wait until the result is received. The operation implementation should just return the same value as the input. The results are added up and the end result is compared to the expected result.

### Test Runs

* The tests shall be run with 1, 10 and 100 clients. 
* The tests shall be run with JSON, MsgPack and CBOR serializers. 
* The tests shall be run with single (docker container) and multi process servers (please note down the PC configuration).
* The tests shall be run with different message sizes (1 int, 1 int 100 bytes, 1 int and 1kB, 1 int and 100kb, 1 int and 1Mb).
* The tests shall be run with different operation implementations (return the same value, return the same value + 1, return the same value + 1 and 100 bytes, return the same value + 1 and 1kB, return the same value + 1 and 100kb, return the same value + 1 and 1Mb).
* The tests shall run with different technologies (UE, C++, QtC++, Python, Go, NodeJS/TypeScript)

### Test Results

The results should be stored in a Google Sheet. The results should be stored in a table with the following columns:

- Test Case
- Serialization
- Message Size
- Number of Clients
- Client Technology
- Total Time
Additional:
- Server Technology
- Client Environment
- Server Environment
- Number of Runs
- Average Time
- Min Time
- Max Time
- Average Throughput







