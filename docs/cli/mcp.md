---
sidebar_position: 3
title: MCP Server – Integrate ApiGear CLI with AI Assistants
sidebar_label: MCP Server
description: Use the ApiGear MCP server to expose SDK generation, template management, and spec validation as tools for Claude Code, Cursor, and other AI assistants.
keywords: [mcp, model context protocol, ai assistant, claude code, cursor, sdk generation, code generation, apigear cli]
---

# MCP Server

The `apigear mcp` command starts a [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) server that exposes ApiGear CLI functionality as tools for AI assistants. This allows tools like Claude Code, Cursor, and other MCP-compatible clients to generate SDKs, manage templates, and validate specifications through natural language.

## Setup

### Claude Code

Register the MCP server with Claude Code:

```bash
claude mcp add apigear -- apigear mcp
```

### Other MCP Clients

Add the following to your MCP client configuration:

```json
{
  "mcpServers": {
    "apigear": {
      "command": "apigear",
      "args": ["mcp"]
    }
  }
}
```

## Available Tools

The MCP server exposes 7 tools organized by category. Each tool declares an **annotation** so MCP clients know whether to prompt for confirmation:

| Annotation | Meaning |
|------------|---------|
| read-only | Only reads data, makes no changes — safe to run without confirmation |
| destructive | Writes files to disk, may overwrite existing content |
| idempotent | Can be called repeatedly with the same result |

### Specification

| Tool | Annotation | Description |
|------|------------|-------------|
| `specificationCheck` | read-only | Load and validate API specification files (module, solution, rules) |
| `specificationSchema` | read-only | Show the schema for module, solution, or rules documents in YAML or JSON format |

**specificationCheck Parameters**

| Parameter | Required | Description |
|-----------|----------|-------------|
| `file` | Yes | Path to specification file |

**specificationSchema Parameters**

| Parameter | Required | Description |
|-----------|----------|-------------|
| `type` | Yes | Document type (`module`, `solution`, `rules`) |
| `format` | Yes | Output format (`yaml`, `json`) |

**Example prompts:**
> "Check if my `demo.module.yaml` is valid."
>
> "Show me the module schema in YAML format."

### Generation

| Tool | Annotation | Description |
|------|------------|-------------|
| `generateSolution` | destructive | Generate SDK based on a solution document |
| `generateExpert` | destructive | Generate code using expert mode with individual options |

**generateSolution Parameters**

| Parameter | Required | Description |
|-----------|----------|-------------|
| `solution` | Yes | Path to solution file |
| `force` | No | Force overwrite (`true`/`false`) |
| `watch` | No | Watch for changes (`true`/`false`) |

**generateExpert Parameters**

| Parameter | Required | Description |
|-----------|----------|-------------|
| `input` | Yes | Input module files (comma-separated) |
| `output` | Yes | Output directory |
| `template` | Yes | Template directory |
| `features` | No | Features to enable (comma-separated, defaults to `all`) |
| `force` | No | Force overwrite (`true`/`false`) |
| `watch` | No | Watch for changes (`true`/`false`) |

**Example prompts:**
> "Generate code from `apigear/demo.solution.yaml`."
>
> "Generate a C++14 SDK from `demo.module.yaml` using `apigear-io/template-cpp14`, output to `generated/cpp`, enable the `api` and `stubs` features."

### Template

| Tool | Annotation | Description |
|------|------------|-------------|
| `templateList` | read-only | List available templates from the registry |
| `templateUpdate` | idempotent | Update the template registry from remote sources |

Both template tools take no parameters.

**Example prompts:**
> "Show me all available ApiGear templates."
>
> "Update the template registry."

### Utility

| Tool | Annotation | Description |
|------|------------|-------------|
| `version` | read-only | Display CLI version information |

The `version` tool takes no parameters.

**Example prompt:**
> "What version of ApiGear CLI is installed?"

## Related Documentation

- [Code Generation](generate) — Generate SDKs from API definitions
- [SDK Templates](template) — Manage SDK templates
- [Introduction](intro) — CLI overview and installation
