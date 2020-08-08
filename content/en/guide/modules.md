---
title: "Create a Module"
description: "A module in ApiGear is used to describe API inside a namespace"
position: 5
category: "Start"
version: 1.0
menuTitle: Modules
---

An API Module defines an ObjectAPI document inside a project to define an API surface for a defined use case. Typically there are several API modules inside a project. Inside a workspace the most important concept are Projects. Projects are a collection of API modules, documentation and other artifacts you want to keep together.

## What is an API Module

An API Module is an ObjectAPI document with a unique module name inside the project. An API module defines an API surface required by the developer to implement or available to API consumers. Each API Module is required to use a unique name inside a project. 

To create a new module:

- Open [ApiGear](https://app.apigear.io) and login.
- Select the workspace and project you want to add the module to
- Inside the project click "Create Module" and fill in the module form.
- A module name defines a namespace for your API and should only contain lowercase letters, numbers and the '.' (dot). For example `media.server`
- The module url will be `https://app.apigear/<workspace>/<project>/<module>/`.
- You will be automatically directed to the newly created module.
- Now you can start designing your API using the ObjectAPI specification
- You can change the name and other options in the module settings.

Next start [Design an API](design) using your newly created API Module.
