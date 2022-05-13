---
title: Blueprint Tutorial
description: Tutorial to create a custom blueprint
position: 702
category: Maker
version: 1.0
menuTitle: Tutorial
---


A blueprint is a technology template to transform the ObjectAPI in any kind and amount of other text documents, e.g. source code. It consist of a set of rules and template documents.

The best way to create a new blueprint template is to create an external blueprint folder and link it up to an ApiGear Studio API project using an API module and a solution.

The goal of this tutorial is to create a blueprint which generates a typescript interface from an API document. For this we use an demo API which like this:

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
    count: int
    increment(): void
    decrement(): void
}
```

## Creating a blueprint

First we create a new blueprint by creating a folder and placing a rules document at the root folder and an empty template document inside a templates folder.

The folder structure will look like this.

```
myproject/
  rules.yaml
  templates/
    module.ts.liquid
```


The rules document defines which documents are written based on which API symbols, in our case the `module` symbol, as we want to create one typescript document per module. The source document is a liquid template document and the target document is a text document, where the target name can also be a template string.

```yaml
# rules.yaml
features:
  default:
    module:
      documents:
        - source: module.ts.liquid
          target: "{{ module.name | lower }}.ts"
```

The `module.ts.liquid` file inside the template folder can be empty initially, we fill it up later.

Now our basic blueprint project is ready, it's time to link it up with an ApiGear Studio API project.

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

The demo API now needs to be linked to the blueprint rules document. This is done from within a solution document, which links API modules to blueprints.

Open ApiGear Studio and create a solution document also called `demo`, and the content should look like this.

```yaml
# demo.solution.yaml
schema: "apigear.solution/1.0"
name: demo
version: "0.1"

layers:
  - name: demo
    output: ../ouput
    modules:
      - demo.module.yaml
    blueprint:
      package: ""
      rules: ../rules.yaml
      features:
        - all
```

This will first parse all defined modules (demo) and apply the given blueprint to the modules. The documents will then be written relative to the given output directory.

Your project should look like this now:

```
myproject/
  apigear/
    demo.module.yaml
    demo.solution.yaml
  rules.yaml
  templates/
    module.ts.liquid
```

When you now run the solution it will create an empty `output/demo.ts` document inside the project directory.

Now we have a basic setup ready.


## Demo Goal

Remember we want to create an interface for each interface inside an API module. For our demo API the resulting typescript shall look like this:

```ts
// demo.ts
interface Counter {
    count: int
    increment(): void
    decrement(): void
}
```

This defines a standalone typescript interface to be usable in your applications.

The rules document already takes care that for each API module one typescript document is created, based on the module name. Now we need to fill in the content of the typescript code.

## Typescript Template

Inside our `module.ts.liquid` template document each interface in the module shall be an typescript interface. 
This can be accomplished with the for-loop from the liquidjs template engine.

```liquid
{% for interface in module.interfaces %}
interface {{ interface.name }} {

}
{% endfor %}
```

After updating the `module.ts.liquid` with the above content, we can run the solution. This will rewrite the target document with the content of the typescript template.

```ts
interface Counter {

}
```

## Filling in the details

There are still the properties and operations missing from the source code. We can add them into the template using another for loop, which iterate over the properties and operations from the interface.

```liquid
{% for interface in module.interfaces %}
interface {{ interface.name }} {
{% for property in interface.properties %}
  {{ property.name }}: {{ property | tsReturn }}
{% endfor %}
{% for operation in interface.operations %}
  {{ operation.name }}() {{ operation | tsReturn }}
{% endfor %}
}
{% endfor %}
```

This will already add the properties and some simple operations to the source code. After running the solution we will see the update source code.

```ts
// demo.ts
interface Counter {
    count: int
    increment(): void
    decrement(): void
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

```liquid
{% for operation in interface.operations %}
  {{ operation.name }}({{ operation | tsParams }}) {{ operation | tsReturn }}
{% endfor %}
```

Now running the solution again will update the typescript source code to the final result:

```ts
// demo.ts
interface Counter {
    count: int
    increment(step: int): void
    decrement(step: int): void
}
```

This shows how easy it is to create an own template solution for a supported technology.

## Packaging

It is also possible to create a blueprint package for distribution. For this we use [npm](https://docs.npmjs.com/cli/v7/commands/npm) to create a package. 

To create a package run `npm init --yes`, this will create a `package.json` document in the current directory. 

The package document needs to know which files to package, for this we add a files section to the document.

```json
  "files": [
    "/templates",
    "/rules.yaml",
    "/README.md",
    "/LICENSE.txt"
  ],
```

Now you can run `npm pack` to create an NPM package which then can be distributed.

This package can then be shared with other users. Inside ApiGear Studio you can install a blueprint package using the upload button. 

In the future it will be possible to upload a blueprint package to our central registry and be available to all users.

## Next Steps

This simple demo shows the workflow of creating technology blueprints using ApiGear Studio. 

ApiGear support several programming languages and technologies, such as Python, C++, TypeScript, Go and others and is able to create complex solutions for almost every application.

ApiGear comes with several advanced technology blueprints which provides solutions for the most common problems. IN case the provides solutions do not fit your needs ApiGear is designed to allow quick adoptions of the underlying technology blueprints.
