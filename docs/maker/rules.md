---
sidebar_position: 6
---

# Rules Document

The rules document defines the context for each document to be transformed.

## Features

Features are an isolated part of the code generator. When running the code generator features can be enabled and disable.

A feature is declared by name inside the features root tag.

```yaml
features:
  - name: feature1
  - name: feature2
```

A feature can contain a prefix target path as also a scope for documents.

```yaml
features:
  - name: feature1
    prefix: {{module.name}}/
```

Typical features are `api`, `scaffold` but also protocols like `http`, `wamp`.

A feature can have these properties:

- `needs`: defines feature flag which other features need to be enabled
- `prefix`: defines a prefix output path
- `scope`: defines a scope for documents with a match expression (e.g. `system`, `module`, `interface`, `struct`, `enum`)

### Feature dependencies

Needs allows to define a dependency between features. For example the `scaffold` feature needs the `api` feature to be enabled.

```yaml
features:
  - name: api
  - name: scaffold
    needs:
      - api
```


## Scopes

A scope defined the context for the template for language for the defined documents. The context defines the available objects available inside the template language. For example a module scope will always have defined `features`, `system` and `module` in the template document.

```yaml
features:
  - name: feature1
    scopes:
      - match: system
        documents:
          - { source: system.go, target: system.go }
      - match: module
        documents:
          - { source: module.go, target: module.go }
      - match: interface
        documents:
          - { source: interface.go, target: interface.go }
      - match: struct
        documents:
          - { source: struct.go, target: struct.go }
      - match: enum
        documents:
          - { source: enum.go, target: enum.go }
```

A scope with the match `interface` iterates over all interfaces in all modules and has defined a context with `features`, `system` and `module` and the current `interface` in it.

### Match logic

- match: `system`
  - called once for the system
  - context => `{ features, system }`
- match: `module`
  - called for each module
  - context => `{ features, system, module }`
- match: `interface`
  - called once per interface in all modules
  - context => `{ features, system, module, interface }`
- match: `struct`
  - called once per struct in all modules
  - context => `{ features, system, module, struct }`
- match: `enum`
  - called once per enum in all modules
  - context => `{ features, system, module, enum }`

## Documents

A document defines the source template and the target where to write the document.

The document define the source, target and some additional flags for writing.

- `source`: source path inside the templates directory.
- `target`: target template string inside the output directory.
- `force`: if true, the document will be forced to be overwritten when re-generated.
- `raw`: if true, document will be just copied and not treated as template. Raw if off by default.
