# Create your first API

The example we are looking at is a simple coffee counter. We will count how many coffee a user consumes per day.

From the frontend perspective we would have a button to increase the coffee count and a total score of the coffees we had a day. We assume the backend automatically resets the counter every night.

For this we design an API which provides the coffee count for that day as also an action to record a new coffee consumption. This API will reside inside a project.

To create an API we first need to have a project. Create a new project named "coffee a day" and provide a catchy brief description: "count the coffee the user consumes per day". When the project is created we land atr the project overview pasge.

A default API module was already created for us. We can delete this, as we do not need it for this project.

After we created a project we have to create a new API module. The module identifier is typically the module name, so for us this will be: `coffee`.

!!! info

    A project can have more than one API module. A project also defines the number of available API code generators. Also we will see later a API playground server does always reflect all the project APIs.

Now we enter the design description into the editor field and save the content.

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
