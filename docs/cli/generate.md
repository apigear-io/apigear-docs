---
sidebar_position: 2
---

# Code Generation

The `generate` command is used to generate code from a API description. The generation is based on SDK templates which are available from a central registry.

## Quick Code Generation

The `apigear` command line tool can be used to generate code from an API definition. The following example shows how to generate code from the a demo API definition.

```go
// demo.idl
module demo 1.0

interface Counter {
    count: int
    increment()
    decrement()
}
```

For example to generate a C++ 14 SDK from the demo API definition just run the following command.

```bash
apigear generate expert -i demo.idl -o tmp -t template-cpp14
```

The `expert` mode is used to generate code from an IDL file. The `-i` option specifies the input file. The `-o` option specifies the output directory. The `-t` option specifies the template to use. The `template-cpp14` template is used to generate C++ 14 code.

If the template does not point to a local directory the template will be downloaded from the template registry and installed in a local cache directory.

By default the latest version of the template is used. To use a specific version of the template add the version to the template name using the `@<version>` syntax.

## Solution based Code Generation

To streamline the code generation you can create a configuration file called solution. The following example shows how to create a configuration file for the C++ 14 SDK.

```yaml
# solution.yaml
layers:
  - name: cpp14
    inputs:
      - demo.idl
    output: tmp
    template: template-cpp14
```

The `layers` section defines the layers of the solution. Each layer defines a set of inputs, an output directory and a template. The `inputs` section defines the input files for the layer. The `output` section defines the output directory for the layer. The `template` section defines the template to use for the layer.

To generate the code from the solution just run the following command.

```bash
apigear generate solution solution.yaml
```
