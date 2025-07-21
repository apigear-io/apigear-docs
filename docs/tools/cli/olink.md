---
sidebar_position: 5
---

# ObjectLink REPL

The `apigear olink` command starts an interactive REPL (Read-Eval-Print Loop) for testing the ObjectLink protocol. It provides a command-line interface to connect to ObjectLink servers, link to remote objects, invoke methods, set properties, and observe signals.

## Overview

ObjectLink is an IPC protocol that enables linking local objects to remote objects over network connections. The REPL allows developers to interactively test and debug ObjectLink implementations by providing direct access to the protocol's core operations.

## Usage

Start the ObjectLink REPL:

```bash
apigear olink
```

or using the alias:

```bash
apigear ol
```

## REPL Commands

Once the REPL is started, you can use various commands to interact with ObjectLink servers. All commands support aliases for faster typing.

### Connection Management

**Connect to a server:**
```
> connect
```
Connects to the default WebSocket server at `ws://localhost:5555/ws`.

```
> connect ws://localhost:8080/ws
```
Connects to a custom WebSocket server.

**Disconnect:**
```
> disconnect
```
Disconnects from the current server.

### Object Operations

**Link to a remote object:**
```
> link demo.Counter
```
Links to the `demo.Counter` object on the remote server.

**Get object properties:**
```
> get demo.Counter
```
Retrieves all properties of the linked object.

**Set a property:**
```
> set demo.Counter/count 10
```
Sets the `count` property of `demo.Counter` to `10`.

**Invoke a method:**
```
> invoke demo.Counter/increment
```
Calls the `increment` method without arguments.

```
> invoke demo.Calculator/add 3 7
```
Calls the `add` method with arguments `[3, 7]`.

**Unlink from an object:**
```
> unlink demo.Counter
```
Unlinks from the `demo.Counter` object.

### Utility Commands

**Show connection status:**
```
> info
```
Displays current connection and object registry status.

**Get help:**
```
> help
```
Shows all available commands.

```
> help connect
```
Shows detailed help for the `connect` command.

**Exit the REPL:**
```
> quit
```
Exits the ObjectLink REPL.

## Example Session

Here's a complete example session demonstrating typical ObjectLink REPL usage:

```
$ apigear olink
ObjectLink REPL started. Type 'help' for available commands.

> connect
Connected to ws://localhost:5555/ws

> link demo.Counter
Linked to demo.Counter

> get demo.Counter
demo.Counter: {"count": 0}

> invoke demo.Counter/increment
Method invoked successfully

> get demo.Counter
demo.Counter: {"count": 1}

> set demo.Counter/count 5
Property set successfully

> invoke demo.Counter/increment
Method invoked successfully

> get demo.Counter
demo.Counter: {"count": 6}

> unlink demo.Counter
Unlinked from demo.Counter

> quit
Goodbye!
```

## Command Aliases

Most commands have short aliases for convenience:
- `c` = `connect`
- `d` = `disconnect`
- `s` = `serve`
- `l` = `link`
- `u` = `unlink`
- `g` = `get`
- `i` = `invoke`
- `h` = `help`
- `q` = `quit`

## Protocol Features

The ObjectLink REPL supports all core ObjectLink protocol features:

- **Properties**: Reactive and synchronized between local and remote objects
- **Operations**: Request/response communication for method calls
- **Signals**: Event notifications from remote objects to local clients
- **Modules**: Namespace organization for objects
- **Lifecycle Management**: Link/unlink operations for object relationships

## Use Cases

The ObjectLink REPL is particularly useful for:

- **Development**: Testing ObjectLink implementations during development
- **Debugging**: Diagnosing issues with ObjectLink communication
- **Learning**: Understanding ObjectLink protocol behavior
- **Integration Testing**: Verifying client-server interactions

## Related Documentation

- [ObjectLink Protocol](/docs/advanced/protocols/objectlink/intro) - Complete protocol specification
- [API Generation](/docs/tools/cli/generate) - Generate ObjectLink-enabled SDKs
- [API Monitoring](/docs/tools/cli/monitor) - Monitor ObjectLink traffic