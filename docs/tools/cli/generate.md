---
sidebar_position: 2
---

# Code Generation

The `apigear` command line tool can be used to generate code from an API definition with a `generate` command.
The API should be description in a module file(s). The generation is based on SDK templates which are available in a central registry or a local template provided with relative path. You can have the solution file in which you choose modules, technologies (templates) and features for them or you can use quick generation option, without the solution file providing all those information as arguments to a `generate` command.
You can define your modules in yaml or idl. See more details for [defining an API](/docs/objectapi/modules).


The following examples shows how to generate code for a demo API definition.

```go
// demo.idl
module demo 1.0

interface Counter {
    count: int
    increment()
    decrement()
}
```

## Quick Code Generation
For example to generate a C++ 14 SDK from the demo API definition just run the following command. You can check [available templates](template.md#list-available-templates) from command line tool.

```bash
apigear generate expert -i demo.idl -o tmp -t apigear-io/template-cpp14 -f olink
```

The `expert` mode is used to generate code from module files.<br />
The `-i` option specifies the input module files separated with comma.<br />
The `-o` option specifies the output directory.<br />
The `-t` option specifies the template to use. The `apigear-io/template-cpp14` template is used to generate C++ 14 code.<br />
The `-f` option can be used to provide features. Check each teamplate documentation to see available features. <br />

If the template does not point to a local directory the template will be downloaded from the template registry and installed in a local cache directory (if not already installed).<br />

By default the latest version of the template is used. To use a specific version of the template add the version to the template name using the `@<version>` syntax.

## Solution based Code Generation

To streamline the code generation you can create a configuration file called solution. The following example shows how to create a configuration file for the C++ 14 SDK.

```yaml
# solution.yaml
targets:
  - name: cpp14
    inputs:
      - demo.idl
    output: demo_project
    template: apigear-io/template-cpp14
```

The `targets` section defines a set of inputs, an output directory for each template.<br />
The `inputs` section defines the module files with API descriptions. List here all the files necessary for the generation. <br />
The `output` section defines the output directory for the layer.<br />
The `template` defines the template used for code generation. You can provide the template version adding `@<version>` to a template.<br />

To generate the code from the solution just run the following command.

```bash
apigear generate solution solution.yaml
```
