---
sidebar_position: 4
---

# Simulation with Studio

The simulation server is integrated into ApiGear studio. A simulation of a service is defined using a scenario document. The scenario document can be created using the `New -> New Scenario` toolbar button.

The scenario can then be edited using an external YAML editor, e.g. Visual Studio Code using our VSCode extension ('apigear').

:::note
A visual editing of simulation scenarios is on the road-map and will be available as part of our cloud offering.
:::

After the scenario is defined the simulation can be started with the `Start` button on the scenario document. Currently only one scenario at a time can be active.

To stop the scenario, click the `Stop` button next to the scenario document.

## Connection

To connect to the ApiGear Studio simulation server you need to know the connection address, which can be queries from the settings panel.

The connection address in the form of `ws://127.0.0.1/5554/ws` or parts of it needs to be made available to your API SDK. Please consult the dedicated SDK readme about the correct procedure.

## Monitoring

There is no dedicated view for monitoring the simulation calls. These calls can be monitored using the API monitor as part of the API calls.
