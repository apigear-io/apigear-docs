# Getting Started

The main work in APIGear is to manage API modules, organized into projects. Each API module represents a collection of interfaces for your devices.

To get started you need to login to the APIGear service to create an initial project and an API module.

In this example we would like to develop a simple coffee counter API.

We could use this API later to create a user interface and interact with a coffee counter implementation. The applications can be broad.

Just to push your imagination. We could use the sam API to

- connect a HW button with raspberry PI and when pressed triggers the increment method.
- implement the interface and use MQTT as transport to expose the data to a web service
- connect a user interface running on an embedded system to connect to the API
- Expose the API locally using a web-server for home automation

In the center of all use cases is the API but in different forms.

But lets keep it simple. For the start we jsut want to play with the API to understand its behavior.

