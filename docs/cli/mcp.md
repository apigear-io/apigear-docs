# MCP Server

The `apigear mcp` command starts a [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) server that exposes ApiGear CLI functionality as tools for AI assistants. This allows tools like Claude Code, Cursor, and other MCP-compatible clients to generate SDKs, manage templates, and validate specifications through natural language.

## Setup[​](#setup "Direct link to Setup")

### Claude Code[​](#claude-code "Direct link to Claude Code")

Register the MCP server with Claude Code:

```
claude mcp add apigear -- apigear mcp
```

### Other MCP Clients[​](#other-mcp-clients "Direct link to Other MCP Clients")

Add the following to your MCP client configuration:

```
{

  "mcpServers": {

    "apigear": {

      "command": "apigear",

      "args": ["mcp"]

    }

  }

}
```

## Available Tools[​](#available-tools "Direct link to Available Tools")

The MCP server exposes 7 tools organized by category. Each tool declares an **annotation** so MCP clients know whether to prompt for confirmation:

| Annotation  | Meaning                                                              |
| ----------- | -------------------------------------------------------------------- |
| read-only   | Only reads data, makes no changes — safe to run without confirmation |
| destructive | Writes files to disk, may overwrite existing content                 |
| idempotent  | Can be called repeatedly with the same result                        |

### Specification[​](#specification "Direct link to Specification")

| Tool                  | Annotation | Description                                                                     |
| --------------------- | ---------- | ------------------------------------------------------------------------------- |
| `specificationCheck`  | read-only  | Load and validate API specification files (module, solution, rules)             |
| `specificationSchema` | read-only  | Show the schema for module, solution, or rules documents in YAML or JSON format |

**specificationCheck Parameters**

| Parameter | Required | Description                |
| --------- | -------- | -------------------------- |
| `file`    | Yes      | Path to specification file |

**specificationSchema Parameters**

| Parameter | Required | Description                                   |
| --------- | -------- | --------------------------------------------- |
| `type`    | Yes      | Document type (`module`, `solution`, `rules`) |
| `format`  | Yes      | Output format (`yaml`, `json`)                |

**Example prompts:**

> "Check if my `demo.module.yaml` is valid."
>
> "Show me the module schema in YAML format."

### Generation[​](#generation "Direct link to Generation")

| Tool               | Annotation  | Description                                             |
| ------------------ | ----------- | ------------------------------------------------------- |
| `generateSolution` | destructive | Generate SDK based on a solution document               |
| `generateExpert`   | destructive | Generate code using expert mode with individual options |

**generateSolution Parameters**

| Parameter  | Required | Description                        |
| ---------- | -------- | ---------------------------------- |
| `solution` | Yes      | Path to solution file              |
| `force`    | No       | Force overwrite (`true`/`false`)   |
| `watch`    | No       | Watch for changes (`true`/`false`) |

**generateExpert Parameters**

| Parameter  | Required | Description                                             |
| ---------- | -------- | ------------------------------------------------------- |
| `input`    | Yes      | Input module files (comma-separated)                    |
| `output`   | Yes      | Output directory                                        |
| `template` | Yes      | Template directory                                      |
| `features` | No       | Features to enable (comma-separated, defaults to `all`) |
| `force`    | No       | Force overwrite (`true`/`false`)                        |
| `watch`    | No       | Watch for changes (`true`/`false`)                      |

**Example prompts:**

> "Generate code from `apigear/demo.solution.yaml`."
>
> "Generate a C++14 SDK from `demo.module.yaml` using `apigear-io/template-cpp14`, output to `generated/cpp`, enable the `api` and `stubs` features."

### Template[​](#template "Direct link to Template")

| Tool             | Annotation | Description                                      |
| ---------------- | ---------- | ------------------------------------------------ |
| `templateList`   | read-only  | List available templates from the registry       |
| `templateUpdate` | idempotent | Update the template registry from remote sources |

Both template tools take no parameters.

**Example prompts:**

> "Show me all available ApiGear templates."
>
> "Update the template registry."

### Utility[​](#utility "Direct link to Utility")

| Tool      | Annotation | Description                     |
| --------- | ---------- | ------------------------------- |
| `version` | read-only  | Display CLI version information |

The `version` tool takes no parameters.

**Example prompt:**

> "What version of ApiGear CLI is installed?"

## Related Documentation[​](#related-documentation "Direct link to Related Documentation")

* [AI Meets API Design: MCP-Powered SDK Generation](/blog/ai-meets-api-design-mcp.md) — blog walkthrough: connect ApiGear to your AI assistant step by step
* [Code Generation](/docs/cli/generate.md) — Generate SDKs from API definitions
* [SDK Templates](/docs/cli/template.md) — Manage SDK templates
* [Introduction](/docs/cli/intro.md) — CLI overview and installation
