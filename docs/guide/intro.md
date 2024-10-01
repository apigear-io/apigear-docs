---
sidebar_position: 2
---

# Getting Started

ObjectAPI and ApiGear tooling are open-source projects designed to enhance the current software integration process. ObjectAPI enables teams to create descriptions of their software interfaces and generate ready-to-use integration SDKs. These SDKs come pre-configured with support for monitoring, logging, tracing, and simulation of interface calls.

To begin, you'll need to download either the [ApiGear Studio](https://github.com/apigear-io/studio/releases/latest) or the [ApiGear CLI](https://github.com/apigear-io/cli/releases/latest).

## Creating Your First Project

APIs are organized within projects. A project is a folder containing an `apigear` subfolder, which houses the API description and other project-related documents.

To create your first project:

1. Click "New Project" in the project overview.
2. A dialog will open, prompting you to select a folder for your new project. It's recommended to create an empty folder beforehand or create one within this dialog.
3. Click "OK" to create the project. An `apigear` folder will be generated inside the selected folder.

You now have an empty project without any APIs. To add APIs to the project:

1. Click "New -> API Module" in the documents overview.
2. A dialog will open, asking you to name your new API.
3. Click "OK" to create the API. A new document will appear in the overview.

The view will change to the "API Modules" view, where you can see all your API modules and manage them. To edit an API, click the "Edit" icon, which will open the API editor (typically Visual Studio Code).

You can now edit and save the API Module. The structure and semantics of API modules are defined in the [ObjectAPI Specification](/docs/advanced/objectapi/intro).

## Installing Code Templates

To create your first SDK from API modules, you need to install Code Templates and create a configuration file called a solution.

In the "Templates" view, you'll see all templates available from the ApiGear cloud. Install templates by clicking the "Install" button. The templates will be installed in a local folder on your drive.

The name of a template will be used later when creating an SDK from the API modules.

## Creating a Solution

A solution links API modules with an SDK. It can contain several targets of code generation. For example, you can generate both a C++ SDK and a Python SDK from the same API modules. Templates also support different features, such as `http` or `olink` support. The supported features vary for each template.

:::tip
The [ObjectAPI Mapping](/docs/advanced/objectapi/mapping) document describes how different APIs are mapped to various transports and protocols.
:::

To create a solution:

1. Use the "New -> Solution" action.
2. Name your solution in the dialog that appears.
3. Click "OK" to create the solution. A new document will be shown, and the view will change to the "Solution" view.
4. To edit the solution, click the "Edit" icon. The solution will open in the editor.

Now you can add inputs to your solution. Inputs can be API modules in YAML or IDL format, as well as the template you installed earlier.

```yaml
targets:
  - name: "C++"
    inputs:
      - <name>.module.yaml
    output: "../output"
    template: <template-name>
```

Ensure you've added an output folder where the SDK will be generated. The output folder is relative to the solution document.

A solution can have multiple targets, and each target can have many modules. This structure allows you to create complex solutions in a single run.

## Code Generation

The code generator is driven by the solution, generating code based on its content. To run the solution:

1. Navigate to the "Solution" view.
2. Click "Run" next to one of the solutions.

A dialog will appear, showing the code generation progress. At the end, a brief summary will be displayed.

Your code will be generated in the specified output folder. To view the generated code, open the output folder in your preferred file explorer.

:::info
If an error occurs, the generation process will stop, and the error will be displayed.
:::

:::tip
We strongly recommend using a source code [version control](https://wikipedia.org/wiki/Version_control) system, such as [Git](https://git-scm.com/). Maintaining a clean workspace state simplifies the integration of API updates into existing code.
:::

<details>
  <summary>Recommended Update Strategy (click to expand)</summary>

#### Initial Setup

To set up your project for long-term API updates:

1. Generate the code into an _ini(tial)_ folder within your project.
2. Copy the _ini_ folder to a _sol(ution)_ folder.
3. Commit this state as the initial version to enable rollbacks if needed.

You can then replace the API stub implementation in the _sol_ folder with your business logic and update the test stubs to cover the actual API behavior.

#### Updating Existing APIs

When you've set up your project using the _ini_ and _sol_ folder structure (or a similar setup), you can easily apply updates to your API:

1. Generate the updated SDK into the _ini_ folder. A diff in your preferred source control tool should only show the auto-generated changes based on your API modifications.
2. Use a _compare and merge_ tool to review the differences between the updated _ini_ folder and your existing implementation in the _sol_ folder.
3. Apply only the interface changes without overwriting your business logic.

While this process may seem cumbersome at first, it's straightforward and easy to use in practice.

:::note
When using a version control system, you could generate the code directly in the final location. However, this approach may become challenging over time, depending on the project size and the number of manually added or modified files in the output folder.
:::
</details>
