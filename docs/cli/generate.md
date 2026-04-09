# Code Generation

The `generate` command creates SDKs from ObjectAPI definitions using templates. It supports solution-based generation for project workflows and expert mode for fine-grained control.

## Commands[​](#commands "Direct link to Commands")

| Command             | Alias            | Description                    |
| ------------------- | ---------------- | ------------------------------ |
| `generate solution` | `gen sol`, `g s` | Generate from a solution file  |
| `generate expert`   | `gen x`          | Generate with explicit options |

## Solution-Based Generation[​](#solution-based-generation "Direct link to Solution-Based Generation")

The recommended approach uses a solution file that defines inputs, outputs, templates, and features.

### Basic Usage[​](#basic-usage "Direct link to Basic Usage")

```
apigear generate solution apigear/demo.solution.yaml
```

### Solution File Format[​](#solution-file-format "Direct link to Solution File Format")

```
schema: "apigear.solution/1.0"
name: my_project
version: "1.0.0"

targets:
  - name: cpp_sdk
    inputs:
      - myapi.module.yaml
    output: ../generated/cpp
    template: apigear-io/template-cpp14@v3.6.0
    force: true
    features:
      - api
      - stubs
      - olink
```

### Solution Options[​](#solution-options "Direct link to Solution Options")

| Field      | Description                                  |
| ---------- | -------------------------------------------- |
| `name`     | Target identifier                            |
| `inputs`   | List of module files (YAML or IDL)           |
| `output`   | Output directory (relative to solution file) |
| `template` | Template name with optional version          |
| `force`    | Overwrite existing files (default: false)    |
| `features` | List of template features to enable          |

### Watch Mode[​](#watch-mode "Direct link to Watch Mode")

Automatically regenerate when the solution file changes:

```
apigear generate solution demo.solution.yaml --watch
```

### Force Overwrite[​](#force-overwrite "Direct link to Force Overwrite")

Override the solution's `force` setting:

```
apigear generate solution demo.solution.yaml --force
```

## Expert Mode[​](#expert-mode "Direct link to Expert Mode")

For quick generation without a solution file, use expert mode with explicit options.

### Basic Usage[​](#basic-usage-1 "Direct link to Basic Usage")

```
apigear generate expert -i demo.module.yaml -o output -t apigear-io/template-cpp14
```

### Expert Options[​](#expert-options "Direct link to Expert Options")

| Flag         | Short | Description                   | Default       |
| ------------ | ----- | ----------------------------- | ------------- |
| `--input`    | `-i`  | Input module files (required) | `["apigear"]` |
| `--output`   | `-o`  | Output directory (required)   | `"out"`       |
| `--template` | `-t`  | Template to use (required)    | `"tpl"`       |
| `--features` | `-f`  | Features to enable            | `["all"]`     |
| `--force`    | —     | Overwrite existing files      | `false`       |
| `--watch`    | —     | Watch for changes             | `false`       |

### Multiple Inputs[​](#multiple-inputs "Direct link to Multiple Inputs")

```
apigear generate expert \
  -i api/user.module.yaml \
  -i api/inventory.module.yaml \
  -o generated \
  -t apigear-io/template-cpp14
```

### Enabling Features[​](#enabling-features "Direct link to Enabling Features")

```
apigear generate expert \
  -i demo.module.yaml \
  -o output \
  -t apigear-io/template-cpp14 \
  -f api \
  -f stubs \
  -f olink
```

### Using Local Templates[​](#using-local-templates "Direct link to Using Local Templates")

Point to a local template directory:

```
apigear generate expert \
  -i demo.module.yaml \
  -o output \
  -t ./my-custom-template
```

## Template Versioning[​](#template-versioning "Direct link to Template Versioning")

### Latest Version[​](#latest-version "Direct link to Latest Version")

Without a version specifier, the latest version is used:

```
apigear generate expert -t apigear-io/template-cpp14 ...
```

### Specific Version[​](#specific-version "Direct link to Specific Version")

Pin to a specific version using `@version`:

```
apigear generate expert -t apigear-io/template-cpp14@v3.6.0 ...
```

```
# In solution file
template: apigear-io/template-cpp14@v3.6.0
```

tip

Always specify versions in production to ensure reproducible builds.

## Multiple Targets[​](#multiple-targets "Direct link to Multiple Targets")

A solution can generate multiple SDKs from the same API:

```
targets:
  - name: cpp_sdk
    inputs:
      - myapi.module.yaml
    output: ../generated/cpp
    template: apigear-io/template-cpp14@v3.6.0
    features:
      - api
      - stubs

  - name: python_sdk
    inputs:
      - myapi.module.yaml
    output: ../generated/python
    template: apigear-io/template-python@v1.0.0
    features:
      - api
      - stubs

  - name: unreal_sdk
    inputs:
      - myapi.module.yaml
    output: ../generated/unreal
    template: apigear-io/template-unreal@v3.2.2
    features:
      - api
      - stubs
```

## Common Features[​](#common-features "Direct link to Common Features")

Most templates support these features:

| Feature    | Description                         |
| ---------- | ----------------------------------- |
| `api`      | Generate interface definitions      |
| `stubs`    | Generate implementation stubs       |
| `scaffold` | Generate complete project structure |
| `olink`    | Enable ObjectLink protocol support  |
| `mqtt`     | Enable MQTT protocol support        |
| `monitor`  | Enable API monitoring               |

Check individual template documentation for available features.

## Input Formats[​](#input-formats "Direct link to Input Formats")

### YAML Format[​](#yaml-format "Direct link to YAML Format")

```
# demo.module.yaml
schema: apigear.module/1.0
name: demo
version: "1.0.0"

interfaces:
  - name: Counter
    properties:
      - name: count
        type: int
    operations:
      - name: increment
      - name: decrement
```

### IDL Format[​](#idl-format "Direct link to IDL Format")

```
// demo.idl
module demo 1.0

interface Counter {
    count: int
    increment()
    decrement()
}
```

Both formats can be used interchangeably in inputs.

## Output Structure[​](#output-structure "Direct link to Output Structure")

Generated output follows the template's structure. A typical C++ output:

```
generated/
├── CMakeLists.txt
├── demo/
│   ├── api/
│   │   ├── counter.h
│   │   └── counter.cpp
│   ├── implementation/
│   │   ├── counter.h
│   │   └── counter.cpp
│   └── olink/
│       ├── counter_service.h
│       └── counter_client.h
└── README.md
```

## CI/CD Usage[​](#cicd-usage "Direct link to CI/CD Usage")

```
# Install specific template version
apigear template install apigear-io/template-cpp14@v3.6.0

# Generate with pinned versions
apigear generate solution apigear/solution.yaml

# Check exit code
if [ $? -ne 0 ]; then
  echo "Generation failed"
  exit 1
fi
```

## Troubleshooting[​](#troubleshooting "Direct link to Troubleshooting")

### Template Not Found[​](#template-not-found "Direct link to Template Not Found")

```
Error: template not found: apigear-io/template-cpp14
```

Install the template first:

```
apigear template install apigear-io/template-cpp14
```

### Invalid Module[​](#invalid-module "Direct link to Invalid Module")

```
Error: invalid module: demo.module.yaml
```

Validate the module:

```
apigear spec check demo.module.yaml
```

### Output Directory Exists[​](#output-directory-exists "Direct link to Output Directory Exists")

By default, existing files are not overwritten. Use `--force` or set `force: true` in the solution.
