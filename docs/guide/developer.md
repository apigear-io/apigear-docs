# APIGear for Developers

!!! info

    Display build-measure-learn capabilities


API Gears for Developers. APIGears offer tremendous benefits for developer by providing the right tools to observe interface communication or simulate an interface backend using professional tools.

To use the developer features, you need to download the APIGearBench. This is a desktop tool for windows, mac and linux which allows you to see the API logs and be able to instrument the mock server.

To use the bench you need to build your API with the tracing enabled. Go to our coffee counter project and select a generator with your preferred programming language. When configuring the generator make sure you select the *tracing enabled* option.

This option will insert extra trace code into the API. This trace code can be disabled on runtime or if you use a compiled language being compiled out at compile time.

The traces will go to a running bench instance and show them in the log view.

## APIGear Trace View

The log view allows you to filter the log for a particular module or just look at an API instance to see the current state. You will see live when the state will change due to API calls.

You are also able to export logs for further sharing or upload them using a time range to a data storage for using in bug tracking.

If you need more analytics capabilities you would need to enable the cloud logging features there you have the full analytics capacity.

## APIGear Mock View

The mock view allows you to mock your api with sensible useful data or with simple behavior. To be able to use the mock viewer we firs tneed to configure the used API. For this we connect the bench with our account and download the correct version of the API we want to mock. Then we can add data szenarios and/or behavior.

The mock server allows us to implement a particular interface and to return mock data. To impement an interface select an interface and press the edit button. An editor appears from where you can enter the behavior.

You can try the new mocked API using the API Explorer.

## APIGear API Explorer

The api explorer allows you to navigate the API and invoke calls on the API and view its state.

You can filter the visible calls and enter the parameters for an call. If the mock view is connected to the API a call invoked will land on the mock view.


To change the API login into APIGear and modify the API. And then sync the new API back to the bench. You are also able to edit the API inside the bench and then sync it to the APIGear server.









