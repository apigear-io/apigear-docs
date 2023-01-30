---
sidebar_position: 2
---

# First Steps

ObjectAPI and the ApiGear tooling are an open source project to improve the current way of integrating software.
ObjectAPI allows teams to create a description of their software interfaces and generate a ready to use integration SDK.
The SDK comes already pre-configured with support for monitoring, logging, and tracing and simulation of interface calls.

To get started you first need to download the ApiGear Studio.

## Using the Studio

When you run the Studio for the first time you need to accept our TOS once. This is a requirement to get the Studio working.

## First Project

APIs are collected inside a project. A project is a folder with an `apigear` folder inside. The folder contains the API description and other documents to help you with the project.

To create the first project you click `New Project` project overview. A dialog does open to select a folder for your new project. Ideally you create an empty folder before or you create one in this dialog. When you click `OK` the project will be created and an `apigear` folder will be created inside the selected folder.

Now you have an empty project without any APIs. You can add APIs to the project by clicking `New -> API Module` documents overview. The dialog will open to name your new API. When clicking `OK` the API will be created and a new document will be shown n the overview.

The view has now changed to the `Api Modules` view. Here you see all your API modules and actions to manage them. To edit and API you can click the `Edit` icon. It will open the API editor, which is normally Visual Studio Code.

You can now edit and save the API Module. API modules structure and meaning is defined in the [ObjectAPI Specification](/docs/advanced/objectapi/).

## Install Code Templates

To create your first SDK from API modules we need to have Code Templates installed and a configuration file, called solution.

In the `Templates` view you see all templates available from the ApiGear cloud. You can install templates by clicking the `Install` button. The templates are installed in a local folder on you drive.

The name of a template will be used later for creating a SDK from the API modules.

## Create a Solution

A solution binds API modules with an SDK. It can contain several layers of code generation. For example you can generate a C++ SDK from the API modules, as also a Python SDK. All templates have also different features for example `http` or `olink` support. Which features are supported is different for each template.

:::tip
In the [ObjectAPI Mapping](/docs/advanced/objectapi/mapping) is a description how different APIs are mapped to different transports and protocols.
:::

A solution is a document and can be created using the `New -> Solution` action. The dialog allows you to name the solution. When clicking `OK` the solution will be created and a new document will be shown. Also the view has changed to the "Solution" view.

To edit the solution click the `Edit` icon. The solution will be opened in the editor.

Now you can add our inputs to the solution. Inputs can be API modules in the form of the YAML of IDL format. As also the template we installed earlier.

```
layers:
  - name: "C++"
    inputs:
      - <name>.module.yaml
    output: "../output"
    template: <template-name>
```

Make sure you also have added an output folder where the SDK will be generated. The output folder is relative to the solution document.

A solution can have several layers and each layer can have many modules. This is how you can create even complex solutions with one run.

## Code generation

The code generator is driven by the solution. It will generate the code based on the solution content.
To run the solution we need to be in the "Solution" view and click `Run` next to one of the solutions.

A dialog will appear and you see the code generation progress. At the end a short summary will be printed.

You code is now generated in the output folder. In case you want to see the generated code you can open the output folder in your favorite file explorer.

:::tip
In case an error appears the generation will be stopped and the error will be displayed.
:::
