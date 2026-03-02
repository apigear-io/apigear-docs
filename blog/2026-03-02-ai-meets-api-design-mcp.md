---
title: "AI Meets API Design: MCP-Powered SDK Generation"
description: "Connect ApiGear to your AI coding assistant via MCP and generate complete SDKs from API descriptions — right from your editor."
slug: ai-meets-api-design-mcp
tags: ["mcp", "ai", "sdk", "code-generation"]
authors: [WolfgangBremer]
---

What if you could describe an API in plain English and your AI assistant would design the interface, validate it, and generate a production-ready SDK — all without leaving your editor?

That's exactly what happens when you connect ApiGear to your AI coding assistant via MCP. No spec syntax to learn, no CLI commands to memorize. You describe what you need, and your assistant handles the rest — from API design to generated code.

<!--truncate-->

## MCP in 30 Seconds

[MCP](https://modelcontextprotocol.io/) (Model Context Protocol) is an open standard that lets AI assistants call external tools directly. Think of it as giving your AI hands to work with real developer tools. ApiGear ships an MCP server that exposes its full code generation pipeline — so any MCP-compatible assistant (Claude, Cursor, and others) can validate specs, pick templates, and generate SDKs on your behalf.

## From Plain English to a Working SDK

It starts with a simple request:

> "I need a counter API with a count property and increment/decrement operations."

Your AI assistant fetches the ApiGear module schema via MCP, understands the structure, and writes a valid API module for you:

```yaml
schema: apigear.module/1.0
name: demo
version: "1.0"

interfaces:
  - name: Counter
    properties:
      - name: count
        type: int
    operations:
      - name: increment
      - name: decrement
```

You didn't write that. You didn't need to know the spec format. The assistant looked up the schema, drafted the module, and validated it — all through ApiGear's MCP tools.

Now take it one step further:

> "Generate a Unreal Engine SDK into the `out/` folder."

The assistant selects the right template and generates a fully scaffolded project — interfaces, stubs, build files — without you typing a single command.

This is the full loop: natural language to validated API spec to generated SDK. You describe what you want at each step, and the assistant handles the rest. Need to add a new operation? Just say so. Want to switch from Unreal Engine to C++ or Python? Ask. The assistant re-validates and regenerates.

## Set It Up in One Minute

Add ApiGear as an MCP server in your AI tool. For Claude Code, it's a single command:

```bash
claude mcp add apigear -- apigear mcp
```

That's it. Your AI assistant now has access to ApiGear's full generation pipeline — spec validation, template browsing, and SDK generation — all through natural conversation. See the [MCP Server documentation](/docs/cli/mcp) for the full list of available tools and setup options for other clients.

## Try It Yourself

1. [Install ApiGear](/docs/cli/intro#installation)
2. [Register the MCP server](/docs/cli/mcp#setup) with your AI assistant
3. Ask your assistant to design an API from a plain English description — and generate an SDK

No spec syntax to memorize. No commands to look up. Just describe your API and let the assistant do the rest.
