# APIGear for Designers

When designing a user interfaces or communication interface in general you want to explore the API and use fake data to test your designs.

For the user interface market there are many tools available to help you in creating a better user experience. But often you also need fake data to inject into your user interface. This is the role of the play server.

The play console on the other hand allows you to interact with the play server using the API we defined earlier. On top of this it allows also to define use case szenarios to ensure certain requirements on your APIs are fullfilled. This shall all help to focus on your production not to worry about the data.

## Using the play server

The play server allows you to try out an API while designing the API.

This mode is not only important during prototyping phase but also to ensure the API supports all use cases envisioned for the API.

The play server is automatically updated when an API module is updated. The play service is a dynamic HTTP service and can be accessed from the play console using javascript or on your desktop or device using a play client.

After editing the module, witch over to the play view. It shows you the basic information of the play server and which modules and version is provides. Also it opens a play console to enter the play API commands.


```javascript
counter = Counter()
counter.increment()
```

```gherkin
Szenario: Enter the play mode
Given: A project is open and a valid API module exists
When user clicks the play view
Then the play view is open and shows the link and status of the play server
    And the play console is open where the user can enter the API commands

```

On the right side you see the state of the interface and how it changes over time.

The user is able to provide simple behavior e.g using a static set of data or simple commands.

The behavior can be dyanmically entered in the play console or predefiend by a szenario.

To use the behavior dynamically just enter it in the console.

```
counter = Counter()
counter.$behavior('increment', 'ADD count 1')
```

For a szenario you have to create a new szenario with a name (for example 'szenario 1') and specify the behavior in the szenario editor.


```
increment: 'ADD count 1'
```

Now you can use the szenario inside the console by loading it.

```
load "szenario 1"
```


```gherkin
Szenario: Create a new API szenario
Given: A valid module exits
    And user is in the play view
When user clicks new szenario
    And enters the szenario name "Szenario 1"
Then the Szenarion editor opens
    And the user can add mock data or behavior
When the user saves the szenarion he is back in the play view
    And a new szenarion appears in the szenarion list
When the user enters the play console
    And loads the szenarion
Then the mock server behaves according to the szenario
```

# Desktop client

To get access to the desktop client you need to generate the play client based one the current project API. There are clients for several programming languages as also a stanadlone client, which can be operated by command line.

Use the client action to generate your API client with your desruied language and download it onto your desktop.

For the CLI client your can do the following:

```
$ coffee.play --help

$ coffee.play state
> state = { count: 0 }

$ coffee.play action increment
> state = { count: 1 }
```


The client is named after the project you are in, but the name can also be modified in the settings.

The other play clients are libraries and need to be integrated into your project according to their documentation.

The `apigear` command line tool is able to update the client without the need to enter the website.

```
apigear play update coffee --mode cli,python
```

This will download a new cli client as also the new python api to be integrated into your project.
