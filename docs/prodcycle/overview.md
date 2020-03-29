# Product Lifecycle

## Design

During the design phase interfaces must be designed to support early prototypes. Often these prototypes are user interface driven. A small team tries out technologies and tries to shape the user experience of the product.

In this phase it is important to be flexible and to provide a good set of dummy data to let the product shine.

We support this phase by providing an API design view with additional play server to play with data. The user is able to download a sample client to integrate it into their protoype. The data server is hosted on our infrastructure by default. A client will also be able to download our embedded server to serve dummy data locally, e.g. for events, where network is not available.

## Realise

During the realisation phase where the teams work on the software it is important for the teams to understand which data is send over the interface to understand and to have a conistent documentation how to use the API. When triaging defects it is good to be able to integrate the API requests and responses into the tests.

On the other hand it is also useful to inject commands into an API to triogger a certain behavior. Or to have a consisten mock server to allow the developers to test certain scenarios.

For this we will provide an API design view with a dedicated mock server which can be used standalone. A API logger as a desktop tool allows the user to see in realtime the API traffic.

To enabel the test API libraries are available to inspect API behavior or to define a golden master from a reference API traffic.


## Service

