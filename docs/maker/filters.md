# Filter Reference

## String Filters

String filters are used inside templates to transform text in different formats.

A typical usage would look like this

```liquid
{{ module.name | identifier }}
```

The list of the common string filters are listed here

- **identifier**: creates a snake-case string
  - `org.demo` => `org_demo`
- **constant**: create a constant case
  - `UpDirection` => `UP_DIRECTION`
- **path**: transforms into a lower case string with slashes between words,
  - `org.demo` => `org/demo`
- **upper**: transforms the string to upper case,
  - `hello world` => `HELLO WORLD`
- **lower**: transforms the string to lower case
  - `Hello World` => `hello world`
- **capital**: transform into a space separated string with each word capitalized
  - `hello world` => `Hello World`
- **param**: transform into a lower cased string with dashes between words
  - `Hello world` => `hello-world`
- **lowerFirst**: transforms the string with only the first character in lower case
  - `Hello world` => `hello world`
- **upperFirst**: transforms the string with the first character in upper cased
  - `localVar` => `LocalVar`
- **firstLower**: transforms the string with only the first character in lower case
  - `LocalVar` => `localVar`
- **last**: extracts the last word from a dot based string
  - `hello.world` => `world`
- **first**: extracts the first word from a dot based string
  - `hello.world` => `hello`
- **version**: extracts major, minor, build version from a version string
  - `1.2.3` => `{ major: 1, minor: 2, build: 3 }`

## Common Filters

All programming languages share a common set of filters which then are adapted to the specifics of the language.
These are `return`, `param`, `params` and the `default` filter.

For example for the C++ programming language you would use the `return` and `params` filter named `cpp14Return` and `cpp14Params` during operation declaration.

A typical usage could look like this

```liquid
{% for op in interface.operations %}
{{ op | cpp14Return }} {{ interface }}::{{ op }}({{ op | cpp14Params }});
{% endfor %}
```

These are the common filters for all languages

- **<lang>Return**: takes and typed element and returns the type declaration of the type

  ```liquid
  {{ operation  |cpp14return }}
  ```

- **<lang>Param**: takes a typed element and returns the function parameter declaration

  ```liquid
  {{ param | cpp14Param }}
  ```

- **<lang>Params**: takes an operation and return the lists of function parameters

  ```liquid
  {{ operation | cpp14Params }}
  ```

- **<lang>Default**: takes a typed element and returns default value

  ```liquid
  {{ property | cpp14Default }}
  ```

## C++14 Filters

- **cpp14Return**: takes a typed element and returns the type information. Typically used as return value in function calls.

  ```liquid
  {{ operation | cpp14Return }}
  ```

- **cpp14Param**: takes a typed element and creates an individual function parameter.

  ```liquid
  {% for param in operation.params %}
  {{ param | cpp14Param }}
  {% endfor %}
  ```

- **cpp14Params**: takes an operation and creates an list of function parameters

  ```liquid
  {{ operation | cpp14Params }}
  ```

* **cpp14Default**: takes a a typed element and returns the default value of the type.

  For an integer type this would be the value 0. For an enumeration this would be the first value.

  ```liquid
  {{ property | cpp14Default }}
  ```

## Python Filters

- **pyReturn**: takes a typed element and returns the type information. Typically used as return value in function calls.

  ```liquid
  {{ operation | pyReturn }}
  ```

- **pyParam**: takes a typed element and creates an individual function parameter.

  ```liquid
  {% for param in operation.params %}
  {{ param | pyParam }}
  {% endfor %}
  ```

- **pyParams**: takes an operation and creates an list of function parameters

  ```liquid
  {{ operation | pyParams }}
  ```

* **pyDefault**: takes a a typed element and returns the default value of the type.

  For an integer type this would be the value 0. For an enumeration this would be the first value.

  ```liquid
  {{ property | pyDefault }}
  ```

## Go Filters

- **goReturn**: takes a typed element and returns the type information. Typically used as return value in function calls.

  ```liquid
  {{ operation | goReturn }}
  ```

- **goParam**: takes a typed element and creates an individual function parameter.

  ```liquid
  {% for param in operation.params %}
  {{ param | goParam }}
  {% endfor %}
  ```

- **goParams**: takes an operation and creates an list of function parameters

  ```liquid
  {{ operation | goParams }}
  ```

* **goDefault**: takes a a typed element and returns the default value of the type.

  For an integer type this would be the value 0. For an enumeration this would be the first value.

  ```liquid
  {{ property | goDefault }}
  ```

## TypeScript Filters

- **tsReturn**: takes a typed element and returns the type information. Typically used as return value in function calls.

  ```liquid
  {{ operation | tsReturn }}
  ```

- **tsParam**: takes a typed element and creates an individual function parameter.

  ```liquid
  {% for param in operation.params %}
  {{ param | tsParam }}
  {% endfor %}
  ```

- **tsParams**: takes an operation and creates an list of function parameters

  ```liquid
  {{ operation | tsParams }}
  ```

* **tsDefault**: takes a a typed element and returns the default value of the type.

  For an integer type this would be the value 0. For an enumeration this would be the first value.

  ```liquid
  {{ property | tsDefault }}
  ```

## Qt C++ Filters

- **qtReturn**: takes a typed element and returns the type information. Typically used as return value in function calls.

  ```liquid
  {{ operation | qtReturn }}
  ```

- **qtParam**: takes a typed element and creates an individual function parameter.

  ```liquid
  {% for param in operation.params %}
  {{ param | qtParam }}
  {% endfor %}
  ```

- **qtParams**: takes an operation and creates an list of function parameters

  ```liquid
  {{ operation | qtParams }}
  ```

* **qtDefault**: takes a a typed element and returns the default value of the type.

  For an integer type this would be the value 0. For an enumeration this would be the first value.

  ```liquid
  {{ property | qtDefault }}
  ```
