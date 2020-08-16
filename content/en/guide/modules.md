---
title: "Modules"
description: "A module in ApiGear is used to describe API inside a namespace"
position: 5
category: "Start"
version: 1.0
menuTitle: Modules
---

An API Module defines an ObjectAPI document inside a project to define an API surface for a defined use case. Typically, there are several API modules inside a project.

## What is an API Module

An API Module is an ObjectAPI document with a unique module name inside the project. An API module defines an API surface required by the developer to implement or available to API consumers. Each API Module is required to use a unique name inside a project.

## Define a new module

- Open [ApiGear](https://app.apigear.io) and login.
- Select a project inside a team space to add the module
- Inside the project click **_Create Module_** and fill in the module form.
- A module name defines a namespace for your API and should only contain lowercase letters, numbers and the '.' (dot). For example `media.server`
- The module url will be `https://app.apigear/<team>/<project>/<module>/`.
- You will be redirected automatically to the newly created module.
- Now, you can start designing your API using the [ObjectAPI specification](https://objectapi.org)
- You can change the name and other options in the module settings.

Next start [your API design](design) using your newly created API Module.
