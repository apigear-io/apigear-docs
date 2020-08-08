---
title: Calculator API
description: A calculator tutorial using ApiGear
position: 304
category: Tutorials
version: 1.0
---

A calculator allows you to enter numbers and calculator a new number based on an operation. Our calculator will support add/subtract and multiply/divide operations as also a clear action. The calculator has a total value to show the current calculated value.

A typical frontend would show a field to display the current total value and a grid of numbers from 0 to 9 as also a grid for the operations '+', '-', '\*', '/' and the 'clear' action.

From inside a project we create a new API module called 'demo.calc' and create a new interface named 'Calculator'.

```yml
objectapi: "1.0"
name: demo.calc
version: 1.0

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

We add the first operation add to the calculator. It takes one parameter, the number to be added.

```yml
interfaces:
  - name: Calculator
    operations:
      - name: add
          params:
            - name: a
              type: int
```

Let's add the rest of the calculator operations.

```yml
objectapi: "1.0"
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

Additional to the operations we also add a clear action to reset the value to `0`.

When we apply a Python SDK generator the code will look like this:

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

A full implementation of this python calculator would then be

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

It is very easy now to add implementations also for other programming languages or even for a microservice using one of the many supported SDK blueprints.
