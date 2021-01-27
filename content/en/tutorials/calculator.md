---
title: Calculator API
description: A calculator tutorial using ApiGear
position: 303
category: Tutorials
version: 1.0
---

A calculator allows you to enter numbers and calculate a new value based on different operations. Our calculator will support `add`, `subtract`, `multiply` and `divide` operations as well as a `clear` action. The calculator always has a total value to show the current calculated value.

A typical frontend would show a field to display the current total value and a grid of numbers from 0 to 9 as well as a grid for the operations `+`, `-`, `*`, `/` and the `clear` action.

<alert>In addition to the explanation below we also created some real modules for different languages and example applications. Please check out our [demos over at github](https://github.com/apigear-io/objectapi-demos/tree/master/calc) </alert>

## Defining an API Module

From inside a project we create a new API module called `demo.calc` using the `Create Module` action and create a new interface named 'Calculator'.

```yml
schema: apigear.module/1.0
name: demo.calc
version: "1.0"

interfaces:
  - name: Calculator
```

A typical calculator always displays the current value calculated. We will add this as a property to the interface.

```yml
interfaces:
  - name: Calculator
    properties:
      - name: value
        type: int
```

We expect the value is always updated when a number was entered and a new operation is entered.

We add the first operation `add` to the calculator. It takes one parameter and the number to be added.

```yml
interfaces:
  - name: Calculator
    operations:
      - name: add
          params:
            - name: a
              type: int
```

Let's add the rest of the calculator operations and the clear action.

```yml
schema: apigear.module/1.0
name: demo.calc
version: "1.0"

interfaces:
  - name: Calculator
    properties:
      - name: value
        type: int
    operations:
      - name: add
        params:
          - name: a
            type: int
      - name: subtract
        params:
          - name: a
            type: int
      - name: multiply
        params:
          - name: a
            type: int
      - name: divide
        params:
          - name: a
            type: int
      - name: clear
```

We added all missing calculator operations. The clear action will reset the calculator value to `0`.

## Python Interface

For our implementation we configure a Python SDK as runner and generate our calculator SDK. The abstract calculator interface will look like this:

```python
# demo_calc.py

class AbstractCalculator(object):
  def __init__(self):
    self.value = 0

  def add(a: int):
    raise NotImplementedError

  def subtract(a: int):
    raise NotImplementedError

  def multiply(a: int):
    raise NotImplementedError

  def divide(a: int):
    raise NotImplementedError

  def clear(a: int):
    raise NotImplementedError
```

## Sample Implementation

To implement the interface we derive from the abstract calculator and implement the missing operations. A simple implementation could look like this.

```python

# import our generated interfaces
import org_daily

class Calculator(demo_calc.AbstractCalculator):
  def add(a: int):
    self.value += a

  def subtract(a: int):
    self.value -= a

  def multiply(a: int):
    self.value *= a

  def divide(a: int):
    self.value /= a

  def clear(a: int):
    self.value = 0
```

## API Updates

The next time we change the API module we need to update the abstract interface and ensure all changed operations are implemented.

It is very easy now to add implementations also for other programming languages or even for a micro service using one of the many supported SDK blueprints.
