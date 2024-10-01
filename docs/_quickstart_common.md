import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Button from '@site/src/components/Button';
import Figure from '@site/src/components/figure'

## 1. Install the Code Generator

ApiGear provides two powerful tools: a Studio and a Command Line Interface (CLI). The Studio is a graphical tool for creating, editing API modules and projects, while the CLI is a command-line tool for generating code from API modules. Both offer comprehensive functionality, including SDK template management, API project creation, code generation, API monitoring, and API simulation.

<div class="container">
  <div class="row">
    <div class="col col--6">
  <Button message="Download Studio" link="https://github.com/apigear-io/studio/releases/latest" />
    </div>
    <div class="col col--6">
  <Button message="Download CLI" link="https://github.com/apigear-io/cli/releases/latest" />
    </div>
  </div>
</div>

### Install ApiGear Studio

ApiGear Studio is available for macOS, Windows, and Linux. You can download it from the [ApiGear Studio GitHub releases page](https://github.com/apigear-io/studio/releases/latest).

For more detailed information on ApiGear Studio, refer to the dedicated [studio documentation](/docs/tools/studio/intro).

### Install ApiGear CLI

The ApiGear CLI is a versatile command-line tool for generating code from API modules. It's available for macOS, Windows, and Linux. Download the latest version from the [ApiGear CLI GitHub releases page](https://github.com/apigear-io/cli/releases/latest).

The CLI offers all the features available in the Studio.

For more detailed information on the ApiGear CLI, consult the dedicated [CLI documentation](/docs/tools/cli/intro).

## 2. Obtain the Template

There are several methods to obtain the template: installation via the Studio, installation via the CLI, or cloning/downloading from GitHub.

:::tip This step is optional
The ApiGear Studio and the CLI detect the specified template in the [solution document](#solution-file) and install it automatically.
:::

<details>
  <summary>Optional steps (click to expand)</summary>
### Installation via CLI

When using the CLI, only the highlighted line needs to be executed. You can verify the successful installation using the `template cache` command.

<Tabs groupId="current-template" queryString>
  <TabItem value="template-unreal" label="Unreal Engine">
```bash
# highlight-next-line
$ apigear template install apigear-io/template-unreal@v3.2.2
$ apigear template cache
list of templates from the local cache

source                            | url                                               | installed | latest
apigear-io/template-unreal@v3.2.2 | https://github.com/apigear-io/template-unreal.git | <sha1>    | v3.2.2
...
```
  </TabItem>
  <TabItem value="template-cpp14" label="C++14">
```bash
# highlight-next-line
$ apigear template install apigear-io/template-cpp14@v3.6.0
$ apigear template cache
list of templates from the local cache

source                            | url                                               | installed | latest
apigear-io/template-cpp14@v3.6.0  | https://github.com/apigear-io/template-cpp14.git  | <sha1>    | v3.6.0
...
```
  </TabItem>
  <TabItem value="template-qtcpp" label="Qt6">
```bash
# highlight-next-line
$ apigear template install apigear-io/template-qtcpp@v0.4.0
$ apigear template cache
list of templates from the local cache

source                            | url                                               | installed | latest
apigear-io/template-qtcpp@v0.4.0  | https://github.com/apigear-io/template-qtcpp.git  | <sha1>    | v0.4.0
...
```
  </TabItem>
  <TabItem value="template-python" label="Python">
```bash
# highlight-next-line
$ apigear template install apigear-io/template-python@v1.0.0
$ apigear template cache
list of templates from the local cache

source                            | url                                               | installed | latest
apigear-io/template-python@v1.0.0 | https://github.com/apigear-io/template-python.git | <sha1>    | v1.0.0
...
```
  </TabItem>
</Tabs>

### Installation via Studio

Installing the template through the Studio is straightforward:

<Tabs groupId="current-template" queryString>
  <TabItem value="template-unreal" label="Unreal Engine">
1. Open an existing project or create a new one
2. Navigate to the `Templates` tab
3. Click `Install` on the `apigear-io/template-unreal` entry
  </TabItem>
  <TabItem value="template-cpp14" label="C++14">
1. Open an existing project or create a new one
2. Navigate to the `Templates` tab
3. Click `Install` on the `apigear-io/template-cpp14` entry
  </TabItem>
  <TabItem value="template-qtcpp" label="Qt6">
1. Open an existing project or create a new one
2. Navigate to the `Templates` tab
3. Click `Install` on the `apigear-io/template-qtcpp` entry
  </TabItem>
  <TabItem value="template-python" label="Python">
1. Open an existing project or create a new one
2. Navigate to the `Templates` tab
3. Click `Install` on the `apigear-io/template-python` entry
  </TabItem>
</Tabs>

<Figure caption="Installing the template" src="/img/apigear-studio-install-unreal-template.png" />

### Cloning from GitHub

If you need to inspect or modify the template's source code, cloning or downloading the repository is recommended. The repository doesn't need to be part of your project and can be stored anywhere on your computer.

<Tabs groupId="current-template" queryString>
  <TabItem value="template-unreal" label="Unreal Engine">
  ```bash
  $ git clone https://github.com/apigear-io/template-unreal.git
  ```
  </TabItem>
  <TabItem value="template-cpp14" label="C++14">
  ```bash
  $ git clone https://github.com/apigear-io/template-cpp14.git
  ```
  </TabItem>
  <TabItem value="template-qtcpp" label="Qt6">
  ```bash
  $ git clone https://github.com/apigear-io/template-qtcpp.git
  ```
  </TabItem>
  <TabItem value="template-python" label="Python">
  ```bash
  $ git clone https://github.com/apigear-io/template-python.git
  ```
  </TabItem>
</Tabs>

You can then configure the solution file to use your template by providing the relative path from the solution file to the template directory.

</details>

## 3. Set Up the Project

A typical project requires two files: a solution file specifying the APIs and the template to use, and at least one API module file. Ideally, both should be placed in a folder named `apigear`, adjacent to each other.

Alternatively, you can use the Studio to create a new project and modify the two example files provided.

### Solution File

Create a [solution](/docs/guide/intro#creating-a-solution) file.
The example below specifies:

- Module files in _line 8_, here the `helloworld.module.yaml` module with the `Hello` API
- The output directory for generated files in _line 9_
- The template used to generate the code in _line 10_ (this can also be a path to a local copy of the template)
- The enabled features of the template in _line 13_, here the `stubs` feature, which provides a simple implementation of interfaces.

<Tabs groupId="current-template" queryString>
  <TabItem value="template-unreal" label="Unreal Engine">

```yaml title="helloworld.solution.yaml" showLineNumbers
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
  </TabItem>
  <TabItem value="template-cpp14" label="C++14">

```yaml title="helloworld.solution.yaml" showLineNumbers
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
  </TabItem>
  <TabItem value="template-qtcpp" label="Qt6">

```yaml title="helloworld.solution.yaml" showLineNumbers
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
  </TabItem>
  <TabItem value="template-python" label="Python">

```yaml title="helloworld.solution.yaml" showLineNumbers
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
  </TabItem>
</Tabs>

:::tip Targets
You can extend this solution file with additional targets, each for a different technology with a different template. The `module.yaml` file is technology-independent and can be used with any template.
:::

:::tip Template Version
We highly recommend specifying the exact version of the template. Otherwise, a newer version will be automatically downloaded and used for code generation. This can lead to unexpected behavior if file structures or code changes in the template.
:::

:::note
Set the `force` parameter to `true` if you want to always override all generated files. When set to `false`, some files, such as implementations (stub feature), won't be updated. API files are always updated regardless of this setting.
:::

### API Module File

Use your preferred text editor to create the `helloworld.module.yaml` file with the following example content:

```yaml title="helloworld.module.yaml" showLineNumbers
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

## 4. Generate Code

### Generate via CLI

The following snippet demonstrates how to run the CLI and provides an example output:

```bash
$ apigear generate solution apigear/helloworld.solution.yaml
10:52:20 INF generated 21 files in 30ms. (20 write, 0 skip, 1 copy) topic=gen
```

- The `generate` command instructs the CLI to generate code
- The `solution` parameter specifies that we want to process a solution file

### Generate via Studio

1. Open the project
2. Navigate to the `Solutions` tab
3. Click `Run` on the `helloworld.solution.yaml` entry

<Figure caption="Generating code" src="/img/apigear-studio-generate-code.png" />