---
sidebar_position: 1
---

# Introduction

The `apigear` command-line interface (CLI) is the primary tool for working with the ApiGear platform. It provides complete functionality for API-driven development, from code generation to runtime monitoring and simulation.

## Key Features

### Code Generation
Generate production-ready SDKs from ObjectAPI definitions using templates for C++, Qt, Unreal Engine, Python, and more.

### Project Management
Create, organize, and manage API projects with modules, solutions, and scenarios.

### Template Management
Browse, install, and manage SDK templates from the ApiGear registry or create custom templates.

### API Simulation
Run scripted backends that simulate your services for client development and testing.

### API Stimulation
Drive your service implementations with scripted client calls for validation and load testing.

### API Monitoring
Monitor real-time API traffic from your applications for debugging and validation.

## Installation

Download the latest release for your platform from the [GitHub releases page](https://github.com/apigear-io/cli/releases).

### macOS

```bash
# Download and extract
curl -L https://github.com/apigear-io/cli/releases/latest/download/apigear-darwin-amd64.tar.gz | tar xz

# Move to PATH
sudo mv apigear /usr/local/bin/
```

### Linux

```bash
# Download and extract
curl -L https://github.com/apigear-io/cli/releases/latest/download/apigear-linux-amd64.tar.gz | tar xz

# Move to PATH
sudo mv apigear /usr/local/bin/
```

### Windows

Download the `.exe` file from the releases page and add it to your PATH.

## Quick Start

```bash
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

## Command Overview

| Command | Alias | Description |
|---------|-------|-------------|
| `generate` | `gen`, `g` | Generate SDKs from API definitions |
| `project` | `prj` | Manage API projects |
| `template` | `tpl`, `t` | Manage SDK templates |
| `simulate` | `sim`, `s` | Run scripted backend simulations |
| `stimulate` | `stim` | Run scripted client stimulations |
| `monitor` | `mon`, `m` | Monitor API traffic |
| `olink` | `ol` | Interactive ObjectLink REPL |
| `spec` | — | Validate API specifications |
| `config` | `cfg`, `c` | Manage configuration |
| `serve` | — | Start combined server |
| `update` | — | Update CLI to latest version |
| `version` | — | Display version information |

## Updating

The CLI can update itself to the latest version:

```bash
apigear update
```

Use `--force` to skip confirmation:

```bash
apigear update --force
```

## Configuration

View current configuration:

```bash
apigear config info
```

Display all configuration values:

```bash
apigear config get
```

Export environment variables:

```bash
apigear config env
```

### Configuration Locations

| Platform | Path |
|----------|------|
| macOS | `~/Library/Application Support/apigear/` |
| Linux | `~/.config/apigear/` |
| Windows | `%APPDATA%\apigear\` |

### Environment Variables

| Variable | Description |
|----------|-------------|
| `APIGEAR_TEMPLATES` | Override template cache location |
| `APIGEAR_REGISTRY` | Override template registry URL |

## Server Ports

Default ports used by CLI servers:

| Service | Default Port | Purpose |
|---------|--------------|---------|
| Simulation | 4333 | WebSocket server for ObjectLink |
| Monitor | 5555 | HTTP server for API events |
| NATS | 4222 | Message broker (optional) |

## Document Validation

Validate any ApiGear document:

```bash
apigear spec check myapi.module.yaml
```

View schema for document types:

```bash
apigear spec schema --type module
apigear spec schema --type solution
apigear spec schema --type rules
```

## Experimental Features

Access experimental commands with the `x` command:

```bash
# Convert between formats
apigear x json2yaml file.json
apigear x yaml2json file.yaml
apigear x yaml2idl api.module.yaml
apigear x idl2yaml api.idl

# WebSocket testing
apigear x wsecho --address :8080
apigear x wscat --url ws://localhost:8080
```

## CI/CD Integration

The CLI is designed for automation:

```bash
# Non-interactive update
apigear update --force

# Generate with specific template version
apigear generate solution solution.yaml

# Watch mode for development
apigear generate solution solution.yaml --watch
```

## Getting Help

Get help for any command:

```bash
apigear --help
apigear generate --help
apigear template install --help
```

## Related Documentation

- [Code Generation](generate) — Generate SDKs from API definitions
- [Project Management](project) — Create and manage projects
- [SDK Templates](template) — Manage SDK templates
- [API Simulation](simulate) — Run scripted backends
- [API Monitoring](monitor) — Monitor API traffic
- [ObjectLink REPL](olink) — Interactive protocol testing
