---
sidebar_position: 4
---

# Update Strategy

When working with generated code over time, having a clear strategy for handling API updates helps maintain a clean codebase and simplifies integration of changes.

:::tip
We strongly recommend using a source code [version control](https://wikipedia.org/wiki/Version_control) system, such as [Git](https://git-scm.com/). Maintaining a clean workspace state simplifies the integration of API updates into existing code.
:::

## Initial Setup

To set up your project for long-term API updates:

1. Generate the code into an _initial_ folder within your project
2. Copy the _initial_ folder to a _solution_ folder
3. Commit this state as the initial version to enable rollbacks if needed

You can then replace the API stub implementation in the _solution_ folder with your business logic and update the test stubs to cover the actual API behavior.

## Updating Existing APIs

When you've set up your project using the _initial_ and _solution_ folder structure (or a similar setup), you can easily apply updates to your API:

1. Generate the updated SDK into the _initial_ folder. A diff in your preferred source control tool should only show the auto-generated changes based on your API modifications.
2. Use a _compare and merge_ tool to review the differences between the updated _initial_ folder and your existing implementation in the _solution_ folder.
3. Apply only the interface changes without overwriting your business logic.

While this process may seem cumbersome at first, it's straightforward and easy to use in practice.

:::note
When using a version control system, you could generate the code directly in the final location. However, this approach may become challenging over time, depending on the project size and the number of manually added or modified files in the output folder.
:::

## Alternative: Force Mode

If you prefer a simpler workflow and don't need to preserve manual changes in generated files, you can use the `force: true` setting in your solution file:

```yaml
targets:
  - name: my_target
    inputs:
      - myapi.module.yaml
    output: ../output
    template: apigear-io/template-cpp14
    force: true  # Always overwrite generated files
    features:
      - stubs
```

With `force: true`, all generated files are overwritten on each generation. This works well when:
- You keep business logic separate from generated code
- You use the generated code as a starting point and maintain it manually afterward
- You're in early development and API changes are frequent

:::warning
When `force` is set to `false`, some files (such as stub implementations) won't be updated to preserve your changes. API interface files are always updated regardless of this setting.
:::
