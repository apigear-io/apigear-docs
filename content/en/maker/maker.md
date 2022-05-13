---
title: Custom Blueprints
description: Create custom blueprints
position: 701
category: Maker
version: 1.0
menuTitle: Custom Blueprints
---

ApiGear offers a large set of pre-made technology blueprints covering the major programming languages and technologies. 
But often a project requires some adaptations to the blueprints or require support for a different technology which is not yet covered.

ApiGear was designed to allow customers easily to adapt the existing blueprints for the specifics of each customer project.

Customers can provide their own technology blueprints, either as open source or proprietary blueprints.

The process to adapt an existing blueprint or to create a fresh new blueprint is not really difficult and will be covered here.

## Maker

A user which creates blueprints is called a maker. Normally is is possible to contribute to existing blueprints to enhance in an open discussion the quality for everyone. But often there is also a desire to solve a new problem or to create a project specific adaptation. In these cases it makes sense to fork a blueprint or to create a new blueprint.

Blueprints allows you to solve all kind of API structured problems in a very easy way.

## Creating a blueprint

A blueprint is a folder with a common structure consisting of a rules document, which controls the code generation process and the templates folder. The templates will be listed inside a rules document. Later a solution document will link the blueprint with API modules for code generation.

Below is roughly the process to create and develop a blueprint

* Create a blueprint folder with rules document and templates folder
*  Create an ApiGear Studio API project with a demo API
*  Add a solution to the API project to link API modules with the blueprint
*  Edit the blueprint and re-generate the output

The templates are written using the [liquidjs](https://liquidjs.com/) template language and each template should end with `.liquid`. ApiGear extends the template language by custom programming language specific filters to ease many complex tasks. To read more about LiquidJS visit their [tags](https://liquidjs.com/tags/overview.html) and [filter](https://liquidjs.com/filters/overview.html) documentation.

*Note: Visual Studio Code marketplace provides an extension to support the `.liquid` files, you can find it [here](https://marketplace.visualstudio.com/items?itemName=sissel.shopify-liquid).*

## Your first blueprint

A typical blueprint folder structure looks like this

```
first/
    rules.yaml
    templates/welcome.txt.liquid
```

The rules document is a YAML document and lists all template file and how they shall be written inside the output folder. A simple rules document could look like this:

```yaml
features:
  default:
    system:
      documents:
        - source: welcome.txt.liquid
          target: welcome.txt
```


The first level (here `default`) defines a feature. This can be enabled or disabled using the feature settings for the code generator. 
The next level (here `system`) defines to which symbol is shall be applied. A symbol is a defined location inside the API description. 

Inside an API there exists the following symbols:

* `system`: will be applied once for the root level system
* `module`: will be applied for each module in the system
* `interface`: will be is applied for each interface inside the module
* `struct`: will be is applied for each struct inside the module
* `enum`: will be is applied for each enum inside the module

For each of these symbols inside the API description the target documents are written based on the source template.

You could think of the underlying logic of a rules document like this (using a python pseudo-code):

```py
system = ...
write_system_documents()
for module in system.modules:
    write_module_documents()
    for interface in module.interfaces:
        write_interface_documents()
    for struct in module.structs:
        write_struct_documents()
    for enum in module.enums:
        write_enum_documents()
```

Here is a more elaborate example of a rules document:

```yaml
# rules.yaml
features:
  default:
    system:
      documents:
        - source: system.md.liquid
          target: system.md
    module:
      documents:
        - source: module.md.liquid
          target: {{module.name}}.md
    interface:
      documents:
        - source: interface.md.liquid
          target: {{interface.name}}.md
    struct:
      documents:
        - source: struct.md.liquid
          target: {{struct.name}}.md
    enum:
      documents:
        - source: enum.md.liquid
          target: {{enum.name}}.md
  summary:
    system:
      documents:
        - source: summary.md.liquid
          target: summary.md
```

The `{{}}` are a template expression. For example `{{module.name}}` will be replaced with the content of `module.name`. This allows you to write exactly these document names you require.

Additional to the template tags, the template engine also support filters. A filter is a function which takes a object and return a string. For example `{{ module.name | lower }}` will lower case the module name. There are more filters in the [template engine documentation](https://liquidjs.com/filters/overview.html) and ApiGear also adds many different code specific filters to the engine.

