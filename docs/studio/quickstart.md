---
sidebar_position: 2
---

# Quick Start

This guide walks you through the main workflows in ApiGear Studio, from creating your first project to generating code and monitoring APIs.

## Welcome Screen

When you launch ApiGear Studio, you'll see the Welcome screen with three main options:

- **Create New Project** — Start a fresh project in a new folder
- **Open Existing Project** — Browse to an existing ApiGear project folder
- **Recent Projects** — Quick access to recently opened projects

Select a folder for your project. Studio will create an `apigear` subfolder to store your API definitions and solution files.

## Project Workspace

Once a project is open, you'll see the main workspace with a navigation sidebar on the left. The sidebar provides access to all major features:

| Icon | View | Description |
|------|------|-------------|
| 📊 | **Dashboard** | Overview of all project documents |
| 📦 | **Modules** | API module definitions |
| ⚙️ | **Solutions** | Code generation configurations |
| ▶️ | **Simulation** | Scripted backend scenarios |
| 📋 | **Simulation Events** | Detailed simulation event log |
| 📡 | **Monitor** | Real-time API event monitoring |
| 📝 | **Logs** | Application event history |
| 🧩 | **Templates** | SDK template management |
| ⚙️ | **Settings** | Application configuration |

## Creating Documents

Click the **New Document** button in the header to create:

- **Module** — An API definition file (`.module.yaml`)
- **Solution** — A code generation configuration (`.solution.yaml`)
- **Scenario** — A simulation script (`.scenario.yaml`)

Enter a name and the document will be created in your project's `apigear` folder.

## Working with Modules

The **Modules** view shows all API module files in your project.

For each module, you can:
- **Open** — Click the edit icon to open in your code editor
- **Validate** — Click the check icon to verify the module syntax
- **Copy Path** — Copy the file path via the menu (⋮)

Modules define your API surface using the ObjectAPI format with interfaces, properties, methods, signals, structs, and enums.

## Code Generation

The **Solutions** view manages your code generation configurations.

### Running Generation

1. Create a solution file that links modules to a template
2. Click the **Run** button (▶️) next to the solution
3. Watch the generation progress in the event drawer
4. Generated code appears in the configured output folder

### Auto-Run Mode

Enable **Auto Run** on a solution to automatically regenerate code when the solution file changes:

1. Click the menu (⋮) on a solution
2. Select **Auto Run**
3. The solution will regenerate whenever you save changes
4. Click **Stop** to disable auto-run

## Managing Templates

The **Templates** view has two tabs:

### Installed Tab
Shows templates in your local cache:
- View template information
- Remove templates you no longer need

### Available Tab
Browse templates from the ApiGear registry:
- Click **Refresh** to update the template list
- Click **Install** on a template to download it
- Select a specific version if needed

Templates are downloaded to your local cache and referenced by name in solution files.

## Running Simulations

The **Simulation** view manages scripted backend scenarios.

### Starting a Simulation

1. Create a scenario file with simulation logic
2. Click the **Play** button (▶️) next to the scenario
3. The simulation server starts and executes your script
4. View events in the side drawer or navigate to **Simulation Events**

### Simulation Events

The **Simulation Events** view shows a detailed log of all simulation activity:
- Property changes
- Method calls
- Signal emissions
- Timing information

## Real-Time Monitoring

The **Monitor** view displays live API events from connected applications.

Events flow in real-time as your applications make API calls. The monitor shows:
- Event type (property, method, signal)
- Interface and member names
- Parameters and values
- Timestamps

Use monitoring to debug API interactions and verify correct behavior.

## Application Logs

The **Logs** view shows application-level events and history:
- Code generation results
- Simulation start/stop events
- Validation results
- Error messages

## Settings

The **Settings** view configures Studio behavior:

### Connection Tab
- **Server Port** — Port for simulation and monitoring servers
- Shows the addresses for Monitor and Simulation connections

### Application Tab
- **Update Channel** — Choose stable or beta updates
- **Editor Command** — Configure your preferred code editor

## Header Actions

The header bar provides quick access to common actions:

- **New Document** — Create modules, solutions, or scenarios
- **Switch Project** — Return to the welcome screen
- **Open Folder** — Open the project folder in your file explorer
- **Reload** — Refresh the project from disk
- **Help** — Open the documentation

## Typical Workflow

1. **Create a project** — Start with a new or existing folder
2. **Define your API** — Create modules describing your interfaces
3. **Install templates** — Get the SDK templates you need
4. **Configure generation** — Create a solution linking modules to templates
5. **Generate code** — Run the solution to produce SDK code
6. **Test with simulation** — Create scenarios to mock your service
7. **Monitor in production** — Watch real-time API events

Each step builds on the previous, taking you from API design to production-ready code.
