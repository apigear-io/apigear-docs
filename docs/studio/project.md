---
sidebar_position: 3
---

# Project Management

ApiGear Studio organizes your work into projects. A project is a folder containing an `apigear` subfolder where all API definitions, solutions, and scenarios are stored.

## Welcome Screen

When you launch Studio, the Welcome screen provides three ways to get started:

### Create New Project

Start a fresh API project:

1. Click **Create Project**
2. Select or create a folder for your project
3. Studio creates an `apigear` subfolder for your documents
4. The project opens in the workspace

The folder you select becomes your project root. All generated code paths in solutions are relative to this location.

### Open Existing Project

Open a project you've worked on before:

1. Click **Open Project**
2. Browse to your project folder (the one containing the `apigear` subfolder)
3. Studio loads all documents from the `apigear` folder

### Recent Projects

Quick access to projects you've recently opened:

- Click any project path to open it immediately
- Click **Delete** to remove a project from the recent list (this doesn't delete the actual files)

## Project Structure

A typical ApiGear project has this structure:

```
my-project/
├── apigear/
│   ├── myapi.module.yaml      # API definitions
│   ├── myapi.solution.yaml    # Generation config
│   └── myapi.scenario.yaml    # Simulation scripts
├── generated-cpp/             # Generated SDK (example)
└── generated-python/          # Generated SDK (example)
```

The `apigear` folder contains:

| File Type | Extension | Purpose |
|-----------|-----------|---------|
| Module | `.module.yaml` | API interface definitions |
| Solution | `.solution.yaml` | Code generation configuration |
| Scenario | `.scenario.yaml` | Simulation scripts |

## Dashboard View

Once a project is open, the Dashboard shows all documents at a glance:

- **Document list** — All modules, solutions, and scenarios in your project
- **Check All** — Validate all documents with one click
- **Document icons** — Visual indication of document type

Each document entry shows:
- Document name and type icon
- Open button to edit in your code editor
- Validation status
- Action menu with additional options

## Header Actions

The header bar provides quick project actions:

| Button | Action |
|--------|--------|
| **New Document** | Create a module, solution, or scenario |
| **Switch Project** | Return to the Welcome screen |
| **Open Folder** | Open project folder in file explorer |
| **Reload** | Refresh documents from disk |
| **Help** | Open documentation |

### Creating Documents

Click **New Document** to create:

1. **Module** — An API definition file
   - Define interfaces with properties, methods, and signals
   - Define data structures and enumerations
   - Use ObjectAPI YAML format

2. **Solution** — A code generation configuration
   - Link modules to SDK templates
   - Configure output paths
   - Enable template features

3. **Scenario** — A simulation script
   - JavaScript code for mock service behavior
   - Define property values and method responses
   - Script complex interaction sequences

## Navigation Sidebar

The sidebar provides access to specialized views:

| View | Purpose |
|------|---------|
| **Dashboard** | Overview of all project documents |
| **Modules** | Filter to show only API modules |
| **Solutions** | Manage code generation with run controls |
| **Simulation** | Run and manage simulation scenarios |
| **Monitor** | View real-time API events |
| **Templates** | Install and manage SDK templates |
| **Logs** | Application event history |
| **Settings** | Configure Studio behavior |

## Working with Multiple Projects

Studio works with one project at a time. To switch projects:

1. Click **Switch Project** in the header
2. You'll return to the Welcome screen
3. Select a different project to open

Your recent projects list makes it easy to jump between projects you're actively developing.

## Project Best Practices

### Organize by Domain

For larger systems, create separate modules for different domains:

```
apigear/
├── user.module.yaml        # User management APIs
├── inventory.module.yaml   # Inventory APIs
├── orders.module.yaml      # Order processing APIs
└── app.solution.yaml       # Single solution for all modules
```

### Version Control

Keep your `apigear` folder in version control:

- Track API changes over time
- Collaborate with team members
- Review API changes in pull requests

Generated code can be committed or gitignored depending on your workflow.

### Separate Solutions

Create different solutions for different targets:

```
apigear/
├── api.module.yaml
├── cpp.solution.yaml       # C++ SDK generation
├── python.solution.yaml    # Python SDK generation
└── unreal.solution.yaml    # Unreal Engine generation
```

This lets you generate SDKs for multiple platforms from the same API definitions.
