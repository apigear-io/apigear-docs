# Quick Start

This quick start shall guide you how to setup a small project and use the basic functionality of ApiGear.

## Setting up your account

To follow the guide you need to create an account with ApiGear using a username and email address. A default workspace is automatically created for you. You are currently the only member of the workspace.

You can own or be part of more than one workspace. When selecting a workspace you can create one or more projects. Each project contains a set of API modules which describe your software modules.

## Create your first project

For our first project we need to create an initial project and define a first API module. You can use an existing project or create a new project inside your workspace.



## Create your first API

Inside the new project you can create a new API module to capture your API design. Each module needs to have a name. After creating the module the module editor is available and you can enter your API definition.

Here is an example of a heater, with a temperature sensor. The sensor reports the current temperature and the user of the API is able to increase and decrease the temperature. The target temperature will report the temperature adjusted by the user.

```yml
objectapi: '1.0'
name: demo
version: '1.0'
interfaces:
  - name: Heater
    properties:
      - name: currentTemperature
        type: float
      - name: targetTemperature
        type: float
      - name: increase
        params:
          - name: degree
            type: int
      - name: decrease
        params:
          - name: degree
            type: int
```

Using this API description we are able to create code solutions for various target languages.

## Generate and use an SDK

To generate you first SDK head over to the SDK section of the UI and select one of the SDK templates. When clicking run a SDK from all modules inside your project is created and made available in the download section. You are automatically forwarded to the download section when the SDK is ready.

From there you can download your SDK. When you unpack the SDK locally you will find a README with instructions how to use it. Generic information for the different SDKs are available in our [SDK documentation](../reference).

## Simulate static data from your API

During development you often need to simulate external dependencies. These dependencies are captured in the form of an API. ApiGear is able to create an API simulation on the fly and allow users to use the simulation using an simulation key. The SDK are already prepared to support this behavior. 

To create a new API simulation head over the to the Simulation area of the UI and create a new simulation. The simulation is based on the current project API. The newly created simulation will display a simulation key which you need to copy and insert into you SDK. More information about the key insertion you will find in your SDK README document.

When selecting an individual module of the simulation you will see the current data stored behind the simulation. This will change while you interact with the simulation using our SDK clients.



