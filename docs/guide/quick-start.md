# Quick Start

This Quick-Start guide demonstrates how to progress from an API definition to a functional example in just a few steps. It provides a streamlined introduction to using ApiGear for your project.

This quick start guide focuses on enabling basic features: the `api` interface generation and a simple `stub` implementation.

## 1. Install the Code Generator[​](#1-install-the-code-generator "Direct link to 1. Install the Code Generator")

ApiGear provides two powerful tools: a Studio and a Command Line Interface (CLI). The Studio is a graphical tool for creating, editing API modules and projects, while the CLI is a command-line tool for generating code from API modules. Both offer comprehensive functionality, including SDK template management, API project creation, code generation, API monitoring, and API simulation.

[Download Studio](https://github.com/apigear-io/studio/releases/latest)

[Download CLI](https://github.com/apigear-io/cli/releases/latest)

### Install ApiGear Studio[​](#install-apigear-studio "Direct link to Install ApiGear Studio")

ApiGear Studio is available for macOS, Windows, and Linux. You can download it from the [ApiGear Studio GitHub releases page](https://github.com/apigear-io/studio/releases/latest).

For more detailed information on ApiGear Studio, refer to the dedicated [studio documentation](/docs/studio/intro.md).

### Install ApiGear CLI[​](#install-apigear-cli "Direct link to Install ApiGear CLI")

The ApiGear CLI is a versatile command-line tool for generating code from API modules. It's available for macOS, Windows, and Linux. Download the latest version from the [ApiGear CLI GitHub releases page](https://github.com/apigear-io/cli/releases/latest).

The CLI offers all the features available in the Studio.

For more detailed information on the ApiGear CLI, consult the dedicated [CLI documentation](/docs/cli/intro.md).

## 2. Obtain the Template[​](#2-obtain-the-template "Direct link to 2. Obtain the Template")

There are several methods to obtain the template: installation via the Studio, installation via the CLI, or cloning/downloading from GitHub.

This step is optional

The ApiGear Studio and the CLI detect the specified template in the [solution document](#solution-file) and install it automatically.

Optional steps (click to expand)

### Installation via CLI[​](#installation-via-cli "Direct link to Installation via CLI")

When using the CLI, only the highlighted line needs to be executed. You can verify the successful installation using the `template cache` command.

* Unreal Engine
* C++14
* Qt6
* Python

```
$ apigear template install apigear-io/template-unreal@v3.2.2
$ apigear template cache
list of templates from the local cache

source                            | url                                               | installed | latest
apigear-io/template-unreal@v3.2.2 | https://github.com/apigear-io/template-unreal.git | <sha1>    | v3.2.2
...
```

```
$ apigear template install apigear-io/template-cpp14@v3.6.0
$ apigear template cache
list of templates from the local cache

source                            | url                                               | installed | latest
apigear-io/template-cpp14@v3.6.0  | https://github.com/apigear-io/template-cpp14.git  | <sha1>    | v3.6.0
...
```

```
$ apigear template install apigear-io/template-qtcpp@v0.4.0
$ apigear template cache
list of templates from the local cache

source                            | url                                               | installed | latest
apigear-io/template-qtcpp@v0.4.0  | https://github.com/apigear-io/template-qtcpp.git  | <sha1>    | v0.4.0
...
```

```
$ apigear template install apigear-io/template-python@v1.0.0
$ apigear template cache
list of templates from the local cache

source                            | url                                               | installed | latest
apigear-io/template-python@v1.0.0 | https://github.com/apigear-io/template-python.git | <sha1>    | v1.0.0
...
```

### Installation via Studio[​](#installation-via-studio "Direct link to Installation via Studio")

Installing the template through the Studio is straightforward:

* Unreal Engine
* C++14
* Qt6
* Python

1. Open an existing project or create a new one
2. Navigate to the `Templates` tab
3. Click `Install` on the `apigear-io/template-unreal` entry

1) Open an existing project or create a new one
2) Navigate to the `Templates` tab
3) Click `Install` on the `apigear-io/template-cpp14` entry

1. Open an existing project or create a new one
2. Navigate to the `Templates` tab
3. Click `Install` on the `apigear-io/template-qtcpp` entry

1) Open an existing project or create a new one
2) Navigate to the `Templates` tab
3) Click `Install` on the `apigear-io/template-python` entry

![Installing the template](/img/apigear-studio-install-unreal-template.png)

Figure: Installing the template

### Cloning from GitHub[​](#cloning-from-github "Direct link to Cloning from GitHub")

If you need to inspect or modify the template's source code, cloning or downloading the repository is recommended. The repository doesn't need to be part of your project and can be stored anywhere on your computer.

* Unreal Engine
* C++14
* Qt6
* Python

```
$ git clone https://github.com/apigear-io/template-unreal.git
```

```
$ git clone https://github.com/apigear-io/template-cpp14.git
```

```
$ git clone https://github.com/apigear-io/template-qtcpp.git
```

```
$ git clone https://github.com/apigear-io/template-python.git
```

You can then configure the solution file to use your template by providing the relative path from the solution file to the template directory.

## 3. Set Up the Project[​](#3-set-up-the-project "Direct link to 3. Set Up the Project")

A typical project requires two files: a solution file specifying the APIs and the template to use, and at least one API module file. Ideally, both should be placed in a folder named `apigear`, adjacent to each other.

Alternatively, you can use the Studio to create a new project and modify the two example files provided.

### Solution File[​](#solution-file "Direct link to Solution File")

Create a [solution](/docs/guide/quick-start.md#solution-file) file. The example below specifies:

* Module files in *line 8*, here the `helloworld.module.yaml` module with the `Hello` API
* The output directory for generated files in *line 9*
* The template used to generate the code in *line 10* (this can also be a path to a local copy of the template)
* The enabled features of the template in *line 13*, here the `stubs` feature, which provides a simple implementation of interfaces.

- Unreal Engine
- C++14
- Qt6
- Python

helloworld.solution.yaml

```
schema: "apigear.solution/1.0"
name: hello_world_example
version: "0.1.0"

targets:
  - name: ue_docs
    inputs:
      - helloworld.module.yaml
    output: ../ue_docs
    template: apigear-io/template-unreal@v3.2.2
    force: true
    features:
      - stubs
```

helloworld.solution.yaml

```
schema: "apigear.solution/1.0"
name: hello_world_example
version: "0.1.0"

targets:
  - name: cpp_hello_world
    inputs:
      - helloworld.module.yaml
    output: ../cpp_hello_world
    template: apigear-io/template-cpp14@v3.6.0
    force: true
    features:
      - stubs
```

helloworld.solution.yaml

```
schema: "apigear.solution/1.0"
name: hello_world_example
version: "0.1.0"

targets:
  - name: qt_hello_world
    inputs:
      - helloworld.module.yaml
    output: ../qt_hello_world
    template: apigear-io/template-qtcpp@v0.4.0
    force: true
    features:
      - stubs
```

helloworld.solution.yaml

```
schema: "apigear.solution/1.0"
name: hello_world_example
version: "0.1.0"

targets:
  - name: hello_world
    inputs:
      - helloworld.module.yaml
    output: ../py_hello_world
    template: apigear-io/template-python@v1.0.0
    force: true
    features:
      - stubs
```

Targets

You can extend this solution file with additional targets, each for a different technology with a different template. The `module.yaml` file is technology-independent and can be used with any template.

Template Version

We highly recommend specifying the exact version of the template. Otherwise, a newer version will be automatically downloaded and used for code generation. This can lead to unexpected behavior if file structures or code changes in the template.

note

Set the `force` parameter to `true` if you want to always override all generated files. When set to `false`, some files, such as implementations (stub feature), won't be updated. API files are always updated regardless of this setting.

### API Module File[​](#api-module-file "Direct link to API Module File")

Use your preferred text editor to create the `helloworld.module.yaml` file with the following example content:

helloworld.module.yaml

```
schema: apigear.module/1.0
name: io.world
version: "1.0.0"

interfaces:
  - name: Hello
    properties:
      - { name: last, type: Message }
    operations:
      - name: say
        params:
          - { name: msg, type: Message }
          - { name: when, type: When }
        return:
          type: int
    signals:
      - name: justSaid
        params:
          - { name: msg, type: Message }
enums:
  - name: When
    members:
      - { name: Now, value: 0 }
      - { name: Soon, value: 1 }
      - { name: Never, value: 2 }
structs:
  - name: Message
    fields:
      - { name: content, type: string }
```

## 4. Generate Code[​](#4-generate-code "Direct link to 4. Generate Code")

### Generate via CLI[​](#generate-via-cli "Direct link to Generate via CLI")

The following snippet demonstrates how to run the CLI and provides an example output:

```
$ apigear generate solution apigear/helloworld.solution.yaml
10:52:20 INF generated 21 files in 30ms. (20 write, 0 skip, 1 copy) topic=gen
```

* The `generate` command instructs the CLI to generate code
* The `solution` parameter specifies that we want to process a solution file

### Generate via Studio[​](#generate-via-studio "Direct link to Generate via Studio")

1. Open the project
2. Navigate to the `Solutions` tab
3. Click `Run` on the `helloworld.solution.yaml` entry

![Generating code](/img/apigear-studio-generate-code.png)

Figure: Generating code

## 5. Use the Generated SDK[​](#5-use-the-generated-sdk "Direct link to 5. Use the Generated SDK")

The application structure and usage will vary depending on the technology template you've chosen. Please use the following links to navigate to the appropriate section for your selected technology:

* Unreal Engine
* C++14
* Qt6
* Python

[How to use the generated Unreal Engine plugin code](/template-unreal/docs/quickstart.md?current-template=template-unreal#5-how-to-use-the-plugin)

[How to use the generated C++14 code](/template-cpp14/docs/quickstart.md?current-template=template-cpp14#5-use-the-generated-cpp-project)

[How to use the generated Qt6 code](/template-qt6/docs/quickstart.md?current-template=template-qtcpp#5-use-the-generated-qt-project)

[How to use the generated Python code](/template-python/docs/quickstart.md?current-template=template-python#5-use-the-generated-python-project)
