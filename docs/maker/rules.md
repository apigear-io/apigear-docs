# Rules Document

The rules document defines the context for each document to be transformed.

## Features

Features are an isolated part of the code generator. When running the code generator features can be enabled and disable.

A feature is declared by name inside the features root tag.

```yaml
features:
  feature1: {}
  feature2: {}
```

A feature can contain a prefix target path as also a scope for documents.

```yaml
features:
  feature1:
    path: {{module.name}}/
    module: {}
```

Typical features are `api`, `scaffold` but also protocols like `http`, `wamp`.

A feature can have these properties:

- `when`: defines feature flag when documents are enabled.
- `path`: defines a prefix output path
- `system`, `module`, `interface`, `struct`, `enum`: defines the scopes

## Scopes

A scope defined the context for the template for language for the defined documents. The context defines the available objects available inside the template language. For example a module scope will always have defined `features`, `system` and `module` in the template document.

An interface scope iterates over all interfaces in all modules and has defined `features`, `system` and `module` and the current `interface`.

- `system`: once
  - `context = { features, system }`
- `module`
  - `context = { features, system, module }`
- `interface`
  - `context = { features, system, module, interface }`
- `struct`
  - `context = { features, system, module, struct }`
- `enum`
  - `context = { features, system, module, enum }`

## Documents

A document defines the source template and the target where to write the document.

The document define the source, target and some additional flags for writing.

- `source`: source path inside the templates directory.
- `target`: target template string inside the output directory.
- `overwrite`: if true, the document will be overwritten when re-generated, which is the default.
- `raw`: if true, document will be just copied and not treated as template. Raw if off by default.
-
