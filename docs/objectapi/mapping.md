# Protocol Mappings

ObjectAPI describes object communication patterns based on simple to use protocols. These communication patterns can be mapped to other communication patterns.


## API Types

There exists currently several API types, like REST, Message Based or RPC. ObjectAPI supports a mixture of these.

### REST based APIs

REST API is about browsing data but the underlying nature of the protocol is HTTP. HTTP is a request/response protocol and as such is architecture wise next to RPC. REST itself defines an architectural style on top of HTTP.

For example to increment a value this logic would be in REST like this.

<mermaid>
sequenceDiagram
  client->>service: get /counter/$id
  client->>client: increment
  client-->service: put /counter/$id
</mermaid>

We first fetch the counter state, than increment the count value and push back the result. The logic is on the client side and the service mostly manages data.

A typical API would look like this:

```js
const client = new HttpClient();
const data = await client.get("/counter/$id");
data.count += 1;
await client.put("/counter/$id");
```

Often these kind of APIs makes it hard in complex logic driven services to validate operations and data.

### Message based APIs

Message based APIs are typically realized using a message broker. The broker is responsible to ensure all messages are delivered to the subscribed or registered peers.

<mermaid>
sequenceDiagram
  client->>broker: subscribe '/counter/$id'
  client->>broker: publish 'counter/$id/increment'
  broker->>client: publish '/counter/$id/'
</mermaid>

First we would subscribe to and interface state changes. Then we would publish the increment signal and wait for changes on the interface state. The changes are announces by the service via the broker.

A typical message based client would look like this:

```js
const client = new MessageClient();
client.subscribe("/counter/$id");
client.on("/counter/$id", (v) => {
  console.log(v);
});
client.publish("/counter/$id/increment");
```

### Object based APIs

Object based APIs focus on the developer API and take care of the internal mapping to the different protocol types. Interface properties will be typically automatically synced and signals will allow service side notifications to the clients.

<mermaid>
sequenceDiagram
  client->>service: increment
  service->>service: increment
  service->>client: sync state
</mermaid>

The API for this would look like this.

```js
const client = new CounterClient();
client.on((s) => {
  console.log(s.count);
});
await client.increment();
```

First we register a callback when the interface state changes. Then we call the operation, as we defined an object API the API feels and works as developers would expect this.

This makes it much nicer and easier to use the API inside your application. The
The API patterns is also extended to the service side, where service calls end into an API which looks very mich like the defined ObjectAPI.
