---
sidebar_position: 2
---

# Quick Start

A template is a technology template to transform the ObjectAPI in any kind and amount of other text documents, e.g. source code. It consist of a set of rules and template documents.

The best way to create a new template template is to create an external template folder and link it up to an ApiGear Studio API project using an API module and a solution.

The goal of this tutorial is to create a template which generates a typescript interface from an API document. For this we use an demo API which like this:

```yaml
# demo.module.yaml
schema: "apigear.module/1.0"
name: demo
version: "0.1"

interfaces:
  - name: Counter
    properties:
      - name: count
        type: int
    operations:
      - name: increment
      - name: decrement
```

The API shall be transformed into a typescript interface which will finally be like this:

```ts
// demo.ts
interface Counter {
  count: int;
  increment(): void;
  decrement(): void;
}
```

## Creating a template

In this project we will create a `mytemplate` template inside a `myproject` together some apis to test the template.

```bash
mkdir myproject && cd myproject
mkdir mytemplate && cd mytemplate
```

First we create our toot project folder called `myproject` and inside out template folder called `mytemplate`. Insie the `mytemplate` folder we place a rules document (`rules.yaml`) and an templates folder for our template documents.

The folder structure will look like this.

```
myproject/
  mytemplate/
    rules.yaml
    templates/
```

The rules document defines which documents are written based on which API symbols, in our case we use the `module` scope, as we want to create one document per module. The source document is a `tpl` template document and the target document is a text document, where the target name can also be a template string.

```yaml
# rules.yaml
features:
  - name: default
    scopes:
      - match: module
        documents:
          - { source: module.ts.tpl, target: {{.Module.Name}}.ts }
```

The `module.ts.tpl` file inside the `template/templates` folder can be empty initially, we fill it up later.

Now our basic template project is ready, it's time to link it up with an ApiGear Studio API project.

```
myproject/
  mytemplate/
    rules.yaml
    templates/
      module.ts.tpl
```

## Create API Project

Open ApiGear Studio and add an API project to the `myproject` folder. This will create an `apigear` folder to the project.

From within ApiGear Studio create an API module named `demo` which will act as our test API.

Copy our demo API into the API document.

```yaml
# demo.module.yaml
schema: "apigear.module/1.0"
name: demo
version: "0.1"

interfaces:
  - name: Counter
    properties:
      - name: count
        type: int
    operations:
      - name: increment
      - name: decrement
```

The demo API now needs to be linked to the template rules document. This is done from within a solution document, which links API modules to templates.

Open ApiGear Studio and create a solution document also called `demo`, and the content should look like this.

```yaml
# demo.solution.yaml
schema: "apigear.solution/1.0"
name: demo
version: "0.1"

layers:
  - name: demo
    output: ../output
    inputs:
      - demo.module.yaml
    template: ../mytemplate
    features:
      - default
```

This will first parse all defined modules (demo) and apply the given template to the modules. The documents will then be written relative to the given output directory.

Your project should look like this now:

```
myproject/
  apigear/
    demo.module.yaml
    demo.solution.yaml
  template/
    rules.yaml
    templates/
      module.ts.tpl
```

When you now run the solution it will create an empty `output/demo.ts` document inside the project directory.

Now we have a basic setup ready.

```treeview
myproject/
  apigear/
    demo.module.yaml
    demo.solution.yaml
  template/
    rules.yaml
    templates/
      module.ts.tpl
  output/
    demo.ts
```


## Demo Goal

Remember we want to create an interface for each interface inside an API module. For our demo API the resulting typescript shall look like this:

```ts
// demo.ts
interface Counter {
  count: int;
  increment(): void;
  decrement(): void;
}
```

This defines a standalone typescript interface to be usable in your applications.

The rules document already takes care that for each API module one typescript document is created, based on the module name. Now we need to fill in the content of the typescript code.

## Typescript Template

Inside our `module.ts.liquid` template document each interface in the module shall be an typescript interface.
This can be accomplished with the for-loop from the liquidjs template engine.

```
{{ range .Module.Interfaces }}
interface {{ .Name }} {
}
{{ end }}
```

After updating the `module.ts.tpl` with the above content, we can run the solution. This will rewrite the target document with the content of the typescript template.

```ts
interface Counter {}
```

## Filling in the details

There are still the properties and operations missing from the source code. We can add them into the template using another for loop, which iterate over the properties and operations from the interface.

```
{{ range .Module.Interfaces }}
interface {{ .Name }} {
  {{ range .Properties }}
  {{ .Name }}: {{ tsType . }};
  {{ end }}
  {{ range .Operations }}
  {{ .Name }}(): {{ tsReturn .Return }};
  {{ end }}
}
{{ end }}
```

This will already add the properties and some simple operations to the source code. After running the solution we will see the update source code.

```ts
// demo.ts
interface Counter {
  count: int;
  increment(): void;
  decrement(): void;
}
```

So great. Are we finished? The mindful reader already figured out that the operation parameters are missing. To demonstrate this we will add steps parameters to the increment and decrement operations.

We first update our API demo module (`demo.module.yaml`) adding parameters to the operations like this:

```yaml
operations:
  - name: increment
    params:
      - name: step
        type: int
  - name: decrement
    params:
      - name: step
        type: int
```

If you would run the solution again you would no see a change as we currently not handle these parameters. We need to update the template document (`module.ts.liquid`) first to handle the parameters using the params filter.

```
{{ range .Operations }}
{{ .Name }}({{ params .Params }}): {{ tsReturn .Return }};
{{ end }}
```

Now running the solution again will update the typescript source code to the final result:

```ts
// demo.ts
interface Counter {
  count: int;
  increment(step: int): void;
  decrement(step: int): void;
}
```

This shows how easy it is to create an own template solution for a supported technology.

## Packaging

Template packages are git repositories, which can be published to a git server. The template package can be referenced from a solution document using the `git` scheme.

```bash
apigear template install <git-url>
```

Or if the template is registered with the registry, it can be installed using the name.

```bash
apigear template install <name>
```


## Next Steps

This simple demo shows the workflow of creating technology templates using ApiGear Studio.

ApiGear support several programming languages and technologies, such as Python, C++, TypeScript, Go and others and is able to create complex solutions for almost every application.

ApiGear comes with several advanced technology templates which provides solutions for the most common problems. In case the provides solutions do not fit your needs ApiGear is designed to allow quick adoptions of the underlying technology templates.
