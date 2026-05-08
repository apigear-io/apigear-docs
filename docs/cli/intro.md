# Introduction

The `apigear` command-line interface (CLI) is the primary tool for working with the ApiGear platform. It provides complete functionality for API-driven development, from code generation to runtime monitoring and simulation.

## Key Features[​](#key-features "Direct link to Key Features")

### Code Generation[​](#code-generation "Direct link to Code Generation")

Generate production-ready SDKs from ObjectAPI definitions using templates for C++, Qt, Unreal Engine, Python, and more.

### Project Management[​](#project-management "Direct link to Project Management")

Create, organize, and manage API projects with modules, solutions, and scenarios.

### Template Management[​](#template-management "Direct link to Template Management")

Browse, install, and manage SDK templates from the ApiGear registry or create custom templates.

### API Simulation[​](#api-simulation "Direct link to API Simulation")

Run scripted backends that simulate your services for client development and testing.

### API Stimulation[​](#api-stimulation "Direct link to API Stimulation")

Drive your service implementations with scripted client calls for validation and load testing.

### API Monitoring[​](#api-monitoring "Direct link to API Monitoring")

Monitor real-time API traffic from your applications for debugging and validation.

## Installation[​](#installation "Direct link to Installation")

Download the latest release for your platform from the [GitHub releases page](https://github.com/apigear-io/cli/releases).

### macOS[​](#macos "Direct link to macOS")

```
# Download and extract

curl -L https://github.com/apigear-io/cli/releases/latest/download/apigear-darwin-amd64.tar.gz | tar xz



# Move to PATH

sudo mv apigear /usr/local/bin/
```

### Linux[​](#linux "Direct link to Linux")

```
# Download and extract

curl -L https://github.com/apigear-io/cli/releases/latest/download/apigear-linux-amd64.tar.gz | tar xz



# Move to PATH

sudo mv apigear /usr/local/bin/
```

### Windows[​](#windows "Direct link to Windows")

Download the `.exe` file from the releases page and add it to your PATH.

## Quick Start[​](#quick-start "Direct link to Quick Start")

```
# Check installation

apigear version



# Create a new project

apigear project create -d my-api-project



# Generate code from a solution

apigear generate solution apigear/demo.solution.yaml



# Start simulation server

apigear sim run apigear/demo.scenario.js



# Monitor API traffic

apigear monitor run
```

## Command Overview[​](#command-overview "Direct link to Command Overview")

| Command     | Alias      | Description                        |
| ----------- | ---------- | ---------------------------------- |
| `generate`  | `gen`, `g` | Generate SDKs from API definitions |
| `project`   | `prj`      | Manage API projects                |
| `template`  | `tpl`, `t` | Manage SDK templates               |
| `simulate`  | `sim`, `s` | Run scripted backend simulations   |
| `stimulate` | `stim`     | Run scripted client stimulations   |
| `monitor`   | `mon`, `m` | Monitor API traffic                |
| `olink`     | `ol`       | Interactive ObjectLink REPL        |
| `mcp`       | —          | Start MCP server for AI assistants |
| `spec`      | —          | Validate API specifications        |
| `config`    | `cfg`, `c` | Manage configuration               |
| `serve`     | —          | Start combined server              |
| `update`    | —          | Update CLI to latest version       |
| `version`   | —          | Display version information        |

## Updating[​](#updating "Direct link to Updating")

The CLI can update itself to the latest version:

```
apigear update
```

Use `--force` to skip confirmation:

```
apigear update --force
```

## Configuration[​](#configuration "Direct link to Configuration")

View current configuration:

```
apigear config info
```

Display all configuration values:

```
apigear config get
```

Export environment variables:

```
apigear config env
```

### Configuration Locations[​](#configuration-locations "Direct link to Configuration Locations")

| Platform | Path                                     |
| -------- | ---------------------------------------- |
| macOS    | `~/Library/Application Support/apigear/` |
| Linux    | `~/.config/apigear/`                     |
| Windows  | `%APPDATA%\apigear\`                     |

### Environment Variables[​](#environment-variables "Direct link to Environment Variables")

| Variable            | Description                      |
| ------------------- | -------------------------------- |
| `APIGEAR_TEMPLATES` | Override template cache location |
| `APIGEAR_REGISTRY`  | Override template registry URL   |

## Server Ports[​](#server-ports "Direct link to Server Ports")

Default ports used by CLI servers:

| Service    | Default Port | Purpose                         |
| ---------- | ------------ | ------------------------------- |
| Simulation | 4333         | WebSocket server for ObjectLink |
| Monitor    | 5555         | HTTP server for API events      |
| NATS       | 4222         | Message broker (optional)       |

## Document Validation[​](#document-validation "Direct link to Document Validation")

Validate any ApiGear document:

```
apigear spec check myapi.module.yaml
```

View schema for document types:

```
apigear spec schema --type module

apigear spec schema --type solution

apigear spec schema --type rules
```

## Experimental Features[​](#experimental-features "Direct link to Experimental Features")

Access experimental commands with the `x` command:

```
# Convert between formats

apigear x json2yaml file.json

apigear x yaml2json file.yaml

apigear x yaml2idl api.module.yaml

apigear x idl2yaml api.idl



# WebSocket testing

apigear x wsecho --address :8080

apigear x wscat --url ws://localhost:8080
```

## CI/CD Integration[​](#cicd-integration "Direct link to CI/CD Integration")

The CLI is designed for automation:

```
# Non-interactive update

apigear update --force



# Generate with specific template version

apigear generate solution solution.yaml



# Watch mode for development

apigear generate solution solution.yaml --watch
```

## Getting Help[​](#getting-help "Direct link to Getting Help")

Get help for any command:

```
apigear --help

apigear generate --help

apigear template install --help
```

## Related Documentation[​](#related-documentation "Direct link to Related Documentation")

* [Code Generation](/docs/cli/generate.md) — Generate SDKs from API definitions
* [Project Management](/docs/cli/project.md) — Create and manage projects
* [SDK Templates](/docs/cli/template.md) — Manage SDK templates
* [API Simulation](/docs/cli/simulate.md) — Run scripted backends
* [API Monitoring](/docs/cli/monitor.md) — Monitor API traffic
* [ObjectLink REPL](/docs/cli/olink.md) — Interactive protocol testing
* [MCP Server](/docs/cli/mcp.md) — AI assistant integration via Model Context Protocol
