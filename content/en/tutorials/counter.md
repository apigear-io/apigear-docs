---
title: Counter API
description: A counter tutorial using ApiGear
position: 99
category: Tutorials
version: 1.0
---

The example we are looking at is a simple coffee counter. Our product will track the daily coffee consumption is a user. For this the user interface requires an API to the backend for count coffees.

From the frontend perspective we would have a button to increase the coffee count and a total score of the coffees we had a day. We assume the backend automatically resets the counter every night.

For this we design an API which provides the coffee count for that day as also an action to record a new coffee consumption. This API module will reside inside a workspace project.

As an API resides inside a project, we will create a project named "daily coffee" and provide a catchy brief description: "count the coffee the user consumes per day". When the project is created we a forwarded to the dashboard.

The dashboard provides an overview of the current projects and activities for the user.

A default API module is already created for us. We can delete this, as we do not need it for this project.

We will create now a new API module called `org.example`.

A project can have more than one API module. Configured code generators to create API SDKs are also attached to a project as also the API simulations, which are auto updated with the API changes.

Now we enter the API definition into the API editor field and save the content.

```yml
objectapi: "1.0"
name: org.example
version: "1.0"

interfaces:
  - name: Counter
    properties:
      - name: count
        type: int
    operations:
      - name: increment
      - name: decrement
```

The API consist of an interface located in the `org.example` module. The `Counter` interface itself consist of a property `count` of the type integer. The interface also exposes operations named `increment` and `decrement`. For more information on the API definition language see the [ObjectAPI guide](../objectapi).

We create a C++14 API for this tutorial. When open the SDK section we select the C++14 SDK and press run. After the we downloaded the created SDK we unzip the source code in our terminal and run the project. A detailed information how to run the project will be in the README file of your SDK.

## Using the API

The generate code will result into a C++ class with some abstract methods. The API has no functionality yet, and need to be provided by you. So pen the project in your favorite editor and add the implementation.

```cpp
// counter.h

void Counter::increment()
{
    count++;
}

void Counter::decrement()
{
    count--;
}
```

Now you can use the class in your main function.

```cpp
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

Which concrete API you will use depends on the code generators you configure. The are code-generators for many languages and technologies available.

We can now continue the design the API inside the API editor inside APIGear.

The editor allows us to save the API at any point and create a new version if required.

## Documentation

To make the API more descriptive we can some description.

The API language has full support for markdown based descriptions.

To write code examples just indent the code snippets

```yml
objectapi: "1.0"
name: org.example
version: "1.0"
description: A module to demonstrate an API

interfaces:
  - name: Counter
    description: An interface to increment and decrement a counter
    properties:
      - name: count
        type: int
        description: holds the current count value
    operations:
      - name: increment
        description: increments the count value
      - name: decrement
        description: decrements the count value
```

After saving the API module we can see in the documentation in the API portal. The documentation is automatically updated, based on the API module content.

Now we have successfully defined an API. The next step will be to use the API. First in a playground like environment, later in a real project.
