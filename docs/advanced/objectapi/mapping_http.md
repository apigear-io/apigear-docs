---
sidebar_position: 8
---

# HTTP Mapping

ObjectAPI binds to HTTP using an RPC model. We find that describiung an API using an RPC model is much simpler for users than thinking about REST resources.

ObjectAPI consist of modules, interfaces and properties, operations and signals.

Due to the nature of HTTP being a uni-directional protocol,we can not simply model the bid-directional nature of an object communication over to HTTP. Especially the property updates and signals are difficult to map to HTTP actions.

## ObjectAPI Mapping

- **module**: Is a namespace and does not map directly.
- **interface**: `/${module}/${interface}`
  - **GET** fetches the state of the interface
  - **POST** sets the interface state
  - **PATCH** partial update of the interface state
- **operation**: `/${module}/${interface}/${operation}`
  - **POST** invokes the operation and returns the response

Structure are mapped like the normal JSON mapping of ObjectAPI data types. Same applies to enumerations.
