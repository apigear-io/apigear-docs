# Project Management

The `project` command allows you to manage your projects. Projects are a collection of APIs and SDKs. You can create, list, delete and switch between projects.

## Create a new project

To create a project use the `new` command.

```bash
apigear project new <project-name>
```

## List recent projects

To list all projects use the `list` command.

```bash
apigear project list
```

It will show the recently used projects first.

## Delete a project

To delete a project use the `delete` command.

```bash
apigear project delete <project-name>
```

## Switch between projects

To switch between projects use the `switch` command.

```bash
apigear project switch <project-name>
```

It will switch the current project to the specified project.

## Project configuration

The `project` command stores the project configuration in the `<project>/.apigear` file. The configuration file contains the following information.

```json
# .apigear
{
    "folder": "apigear",
}
```

The `folder` property specifies the folder where the project configuration is stored. The default value is `apigear`.

## Create documents in the project folder

The `create` command allows you to create documents in the project folder. The following documents can be created: API Modules, API Solutions and API Scenarios.

```bash
apigear create <document-type> <document-name>
```

The document will be created in the `apigear` folder of the current project. The `document-type` can be one of the following values: `module`, `solution` or `scenario`.

## Pack a Project

The `pack` command allows you to pack a project. It will create a zip file containing all project documents.

```bash
apigear project pack <project-name>
```

## Share a Project

The `share` command allows you to share a project. It will create a zip file containing all project documents and upload it to the ApiGear platform.

```bash
apigear project share <project-name>
```

:::tip
This feature is currently not available and will be added in a future release.
:::

## Import a Project

The `import` command allows you to import a project. It will download a zip file containing all project documents from the ApiGear platform and unpack it.

```bash
apigear project import <project-name>
```

:::tip
This feature is currently not available and will be added in a future release.
:::
