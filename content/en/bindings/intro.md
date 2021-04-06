---
title: Protocol Bindings Blueprints
description: Different Protocol Bindings
position: 801
category: Bindings
version: 1.0
menuTitle: Bindings
---

<mermaid>
sequenceDiagram
  Client->>Service: GET /counter$id
  Client->>Client: increment
  Client->>Service: PUT /counter$id
</mermaid>
