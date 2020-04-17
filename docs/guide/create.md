# Create your first API

The example we are looking at is a simple coffee counter. Our product will track the daily coffee consumption is a user. For this the user interface requires an API to the backend for count coffees.

From the frontend perspective we would have a button to increase the coffee count and a total score of the coffees we had a day. We assume the backend automatically resets the counter every night.

For this we design an API which provides the coffee count for that day as also an action to record a new coffee consumption. This API module will reside inside a workspace project.

As an API resides inside a project, we will create a project named "daily coffee" and provide a catchy brief description: "count the coffee the user consumes per day". When the project is created we a forwarded to the dashboard.

The dashboard provides an overview of the current projects and activities for the user.

A default API module is already created for us. We can delete this, as we do not need it for this project.

We will create now a new API module called `coffee`.

!!! info

    A project can have more than one API module. Configured code generators to create API SDKs are also attached to a project as also the API simulations, which are auto updated with the API changes.

Now we enter the API definition into the API editor field and save the content.

```
module coffee 1.0

interface Counter {
    count: Int
    increment()
}
```

The API consist of an interface located in the `coffeee.counter` module. The `Counter` interface itself consist of a property `count` of the type integer. The interface also exposes one action named `increment`. For more information on the API definition language see here (TBD).

## Code Generation

After we save the API we can start generating our source code.

For this we need to configure a code generator. There are many code geenrators available on the system. Each generator can be configured with different features to run the code genertion step.

We open the CodeGen tab and create a new runner. The runner is a configured code generator. Initially we select the JavaScript code generator and give the runner a name, e.g. JavaScript. After saving the runner we are able to use the code generator for our project.

Just press the play button and the code will automatically generated and packed into a ZIP for for download. The generated code can have the license header you find most useful.

TODO: Allow users to select a license header for code geenration in the runner config

## Using the API

The generate code will result into a JS class with some abstract methods. The API has no functionality yet, and need to be provided by you.

Using the API in JavaScript would look like this

```javascript
// JavaScript
counter = Counter();
console.log(counter.count); // => 0
counter.increment();
console.log(counter.count); // => 1
```

Or if you would have used a C++ code generator.

```c++
#include <iostream>
using namespace std;

#include "coffee.h"

int main(int argc, char**argv) {
    Counter counter
    cout << counter.count();
    counter.increment();
    cout << counter.count();
}
```

!!! note

    Which concrete API you will use depends on the code generators you configure. The are code-generators for many languages and technolgies available.

We can now continue the design the API inside the API designer view of APIGear.

The view allows us to save the API at any point and create a new version if required.

## Documentation

To make the API more descriptive we add some documentation.

!!! info

    The API language has full support for Java style documentation annotations useing '@'. The following tags are supported: '@param', '@deprecated', '@return', '@see', '@link'.

    To write code examples just indent the code snippets

```
# a coffee API to count our coffee consumption
# over a day
module coffee 1.0

# Counts the coffee we consume per day
interface Counter {
    # holds the current count value
    count: Int
    # triggers an increase of our coffee consumption
    increment()
}
```

After saving the API module we can see in the documentation in the documentation view. The documentation is automatically updated, based on the API module content.

Now we have successfully defined an API. The next step will be to use the API. First in a playground like environment, later in a real project.
