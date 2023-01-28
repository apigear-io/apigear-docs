---
sidebar_position: 1
---

# Custom Templates

ApiGear offers a large set of pre-made technology templates covering the major programming languages and technologies.
But often a project requires some adaptations to the templates or require support for a different technology which is not yet covered.

ApiGear was designed to allow customers easily to adapt the existing templates for the specifics of each customer project.

Customers can provide their own technology templates, either as open source or proprietary templates.

The process to adapt an existing template or to create a fresh new template is not really difficult and will be covered here.

## Maker

A user which creates templates is called a maker. Normally is is possible to contribute to existing templates to enhance in an open discussion the quality for everyone. But often there is also a desire to solve a new problem or to create a project specific adaptation. In these cases it makes sense to fork a template or to create a new template.

templates allows you to solve all kind of API structured problems in a very easy way.

## Creating a template

A template is a folder with a common structure consisting of a rules document, which controls the code generation process and the templates folder. The templates will be listed inside a rules document. Later a solution document will link the template with API modules for code generation.

Below is roughly the process to create and develop a template

- Create a template folder with rules document and templates folder
- Create an ApiGear Studio API project with a demo API
- Add a solution to the API project to link API modules with the template
- Edit the template and re-generate the output

The templates are written using the [go-template](https://pkg.go.dev/text/template) template language and each template should end with `.tpl`. ApiGear extends the template language by custom programming language specific filters to ease many complex tasks. 

The Go-Template is used in several projects and is well documented. The ApiGear extensions are documented in the [Filters](./filters.md) section.


## Your first template

A typical template folder structure looks like this

```
first/
    rules.yaml
    templates/welcome.txt.tpl
```

The rules document is a YAML document and lists all template file and how they shall be written inside the output folder. A simple rules document could look like this:

```yaml
features:
  - name: default
    scopes:
      - match: system
        documents:
          - source: welcome.txt.tpl
            target: welcome.txt
```

The first level (here `default`) defines a feature. This can be enabled or disabled using the feature settings for the code generator.
The next level (here `system`) defines to which symbol is shall be applied. A symbol is a defined location inside the API description.

Inside an API there exists the following symbols:

- `system`: will be applied once for the root level system
- `module`: will be applied for each module in the system
- `interface`: will be is applied for each interface inside the module
- `struct`: will be is applied for each struct inside the module
- `enum`: will be is applied for each enum inside the module

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
  - name: default
    scopes:
      - match: system
        documents:
          - source: system.md.tpl
            target: system.md
      - match: module
        documents:
          - source: module.md.tpl
            target: {{.Module.Name}}.md
      - match: interface:
        documents:
          - source: interface.md.tpl
            target: {{.Interface.Name}}.md
      - match: struct
        documents:
          - source: struct.md.tpl
            target: {{.Struct.Name}}.md
      - match: enum
        documents:
          - source: enum.md.tpl
            target: {{.Enum.Name}}.md
  - name: summary
    scopes:
      - match: system
        documents:
          - source: summary.md.tpl
            target: summary.md
```

The <code v-pre>{{ }}</code> are a template expression. For example <code v-pre>{{.Module.Name}}</code> will be replaced with the content of module name. This allows you to write exactly these document names you require.

Additional to the template tags, the template engine also support filters. A filter is a function which takes a object and return a string. For example <code v-pre>{{ lower .Module.Name }}</code> or <code v-pre>{{ .Module.Name | lower }}</code> will lower case the module name. There are more filters in the in our filters documentation.
