---
sidebar_position: 2
---

# Counter API Demo

The example we are looking at is a simple coffee counter. Our product will track the daily coffee consumption of a user. For this the user interface requires an API to the backend to count coffees.

From the frontend perspective we have a button to increase the coffee count and a total score of the coffees we had a day. We assume the backend automatically resets the counter every night.

For this we design an API which provides the coffee count for that day as well as an action to record a new coffee consumption. This API module will reside inside a team project.

As an API module resides inside a project, we will create a project named "_daily coffee_" and provide a catchy brief description: "_count the coffee the user consumes per day_". When the project is created we are forwarded to the project page.

A default API module is already created for us. We can delete this, as we do not need it for this project.

We create a new API module called `demo.daily` now.

A project can have more than one API module. Configured code generators to create API SDKs are also attached to a project and the API simulations, which are auto updated with the API changes.

Now we enter the API definition into the API editor field and save the content.

```yml
schema: apigear.module/1.0
name: demo.daily
version: "1.0"

interfaces:
  - name: Counter
    properties:
      - name: count
        type: int
    operations:
      - name: increment
```

The API consists of an interface located in the `demo.daily` module. The `Counter` interface itself consist of a property `count` of the type integer. The interface also exposes an operation named `increment`. For more information on the API definition language see the [ObjectAPI guide](/docs/objectapi/intro).

We create a C++14 API for this tutorial. When we open the SDK section, we select the C++14 SDK and press run. After we downloaded the created SDK, we unzip the source code in our terminal and run the project. Detailed information how to run the project will be in the README file of your SDK.

## Using the API

The generated code will result in a C++ class with some abstract methods. The API has no functionality yet, and needs to be provided by you. So open the project in your favorite editor and add the implementation.

```cpp
// counter.h

void Counter::increment()
{
   // add implementation here
    count++;
}
```

Now, you can use the class in your main function.

```cpp
// main.cpp
#include <iostream>
using namespace std;

#include "counter.h"

int main(int argc, char**argv) {
    Counter counter;
    cout << counter.count();
    counter.increment();
    cout << counter.count();
}
```

Which concrete API you will use depends on the code generators you configure. There are code-generators for many languages and technologies available.

We can now continue to design the API inside the APIGear's API editor.

The editor allows us to save the API at any point and to create a new version if required.

## Documentation

To make the API more descriptive we can add some description.

The API language has full support for markdown based descriptions.

To write code examples just indent the code snippets

```yml
schema: apigear.module/1.0
name: demo.daily
version: "1.0"
description: A module to demonstrate an API

interfaces:
  - name: Counter
    description: An interface to increment a coffee counter
    properties:
      - name: count
        type: int
        description: holds the current count value
    operations:
      - name: increment
        description: increments the count value
```

After saving the API module, we can see the documentation in the API portal. It is automatically updated, based on the API module content.

Now, we have successfully defined an API. The next step will be to use the API. First in a playground like environment, later in a real project.
