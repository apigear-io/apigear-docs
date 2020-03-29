# APIGear for Service

When a device is in service mode it means it is deployed to a customer of the device OEM. The device is deployed with the APIGear API embedded as also a APIGear agent to collect and forward the telemetry data.

!!! warning

    As with any other service which exposes data to a web service this must be according to the data protection laws and adhere to the common security standards.

The device collects API traffic and sends it internally secure to the APIGear agent. There the data is filtered and compressed before send to the analytics server. Additional meta information lieke time stamp, device id, analytics id are also added when configured.

The agent allows to white and blacklist APIs on module or interface level. This shall help to only submit the necessary data. Changing the configuration is done by editing a configuration document. The agent will restart automatically and apply the new configuration.

## Enabling API Trafik

To use the API analytics feature you first have to enable the traces in the generated code, see the individual documentation of the genertors how todo this. Addtional the APIGear proxy must be installed on the device and configured.

On the APIGear server you can create a new analytics instance using a given name and configure the access restrictions. The analytics instance is linked with tour API Project and has all API information available to better understand the incoming traffik.

```gherkin
Szenario: Create a new analytics instance
Given a user has logged in
    And a valid API project exists
When the user clicks new API analytics
Then user enters a instance name
    And links the instance with a API project
When the user saves the analytics instance
Then the analytics view is presented
    And the user is able to register devices
    And the analytics ID is available
When the user registers a device
Then the user is able to enter device meta information
    And a device ID is generated
When the user saves the device the analytics view is shown again
```

To register an individual device you must register the device with the analytics instance. You can register devices with additional meta information, e.g. for customer information or device address, or an your internal identifification number.

When registering a device a device ID is generated which must be part of the device configuration. Additional a analytics ID is generated which also must be part of the configuration.

When the device sends its data to the APIGear agent the data will be forwarded to the analytics server and appear in your console using the analytics id and device id.


## Using the API Analytics

API analytics does nit only provide you valuable insights while your device is deployed, but also already during field tests or during development. It shows all API traffik for all devices and allows you easily during testing and development to get a clear understand how the API was used.

After the device is deployed, the API anaytics provide you with a clear understanding how the API is used at your customer side. Using this analytics data you can create new reports or insights into the device usage, e.g. for pay-per-use models, predictive-maintenance or sales and marketing information. Different than random metrics the API information provides a detailed structured insight into the device usage across the API. The insight is enhanced as the data is linked back to the original API defintion and provides a clear semantic.



