# Project Management

The `project` command allows you to manage your projects. Projects are a collection of APIs stored in module files and solution file with desired generation configuration.
You can create, list, add files for your projects.

## Create a new project

To create a project use the `create` command.

```bash
apigear project create -d <project-name>
```
you can prefix a project name with a path in which you'd like your project to be created.

This command creates a folder with the apigear files in it:
- `module` an example file type with the example interface description
- `solution` a solution file used for generation configuration
- `simulation` with example simulation for the example interface

## Project info

Gives basic project information along with list of files in this project.

```bash
apigear project info <project>
```

## Show recent projects

Lists all the recently used projects

```bash
apigear project recent
```
## Edit project

Use the `edit` command to open all your project files in your default editor.

```bash
apigear project edit <project-name>
```

## Open project in studio

To open project in studio use the `open` command.

```bash
apigear project open <project-name>
```

## Project configuration

The `project` command stores the project configuration in the `<project>/.apigear` file. The configuration file contains the following information.

```json
# .apigear
{
    "folder": "apigear",
}
```

The `folder` property specifies the folder where the project configuration is stored. The default value is `apigear`.

## Add a File

The `add` command allows you to create documents in the project

```bash
apigear project <document-type> <document-name>
```

The document will be created in the `apigear` folder of the current project. The `document-type` can be one of the following values: `module`, `solution` or `scenario`.
To choose a project directory (by default it uses current directory) us `-p your-path-to-project` argument.

## Pack a Project

The `pack` command allows you to pack a project. It will create an archive  file containing all project documents.

```bash
apigear project pack -d <project-name>
```

## Share a Project

The `share` command allows you to share a project. It will create an archive file containing all project documents and upload it to the ApiGear platform.

```bash
apigear project share <project-name>
```

:::note
This feature is currently not available and will be added in a future.
:::

## Import a Project

The `import` command allows you to import a project form a github repository.

```bash
apigear project import <source> -t <project-name>
```
