---
sidebar_position: 6
---

# Generator Based Simulation

Besides writing simulation scenarios by hand, you can also use the generator to create simulation files based on your API definitions. This is particularly useful for larger APIs or when you want to quickly set up a simulation environment.

## How It Works

The generator analyzes your API definitions and automatically creates stubbed simulation scenarios. These scenarios include basic implementations of the interfaces defined in your API, allowing you to quickly test and simulate the behavior of your services without having to write all the code manually.

## Benefits

- **Speed**: Quickly generate a comprehensive set of simulation scenarios without having to write them manually.
- **Coverage**: Ensure that all aspects of your API are covered by the generated simulations.
- **Consistency**: Maintain a consistent approach to simulation across your API definitions.

## Getting Started

To use the generator, you need to add a new target to your solution file. This target will specify the API definitions you want to generate simulations for.

Here is an example of how to add a target for simulation generation:

```yaml
# my.solution.yaml
schema: apigear.solution/1.0
targets:
  - name: My Simulation
    output: sim
    inputs:
      - counter.yaml # or counter.idl
    template: apigear-io/template-simulation/

```bash
apigear generate solution my.solution.yaml
```

This will create a new directory (`sim`) containing all the generated simulation files. You can then customize these files as needed to fit your specific requirements.

To run the generated simulations, you can use the same commands as for manually written scenarios:

```bash
apigear simulation run sim/counter.sim.js
```

This will start the simulation server and load the generated simulation scenario and run the main function defined in the simulation file.


## Visual Code Editor Support

With the simulation files we also generate js types for the interfaces, structs and enums. This allows you to use the Visual Code Editor to edit the simulation files with type checking and autocompletion support. This should help you to write and maintain your simulation scenarios more easily. If you are interested please check out the generated `api` directory in the simulation output. It contains the type definitions for your API.

