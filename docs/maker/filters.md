---
sidebar_position: 4
---

# Filter Reference

## Template Filters

String filters are used inside templates to transform text in different formats.

A typical usage would use the filter name followed by a string reference to the value to be transformed. For example:

```
{{ snake .Module.Name }}
```

Where `.` is the current context and `.Module` is the module object from the current context and `.Name` is the name property of the module object. The context can change for example inside a range loop.

```
{{ range .Module.Interfaces }}
  {{ snake .Name }}
{{ end }}
```

Where the current context if the interface object inside the range loop.


## String Filter

The list of the common string filters are listed here

### **snake**, **Snake**, **SNAKE**

Converts a string to snake case - (lower, title, upper) case with underscores

```
  {{snake "org.demo"}} => org_demo
  {{Snake "org.demo"}} => Org_Demo
  {{SNAKE "org.demo"}} => ORG_DEMO
```

### **camel**, **Camel**, **CAMEL**

Converts a string to camel case - (lower, title, upper) case with first letter lower case

```
{{camel "org.demo"}} => orgDemo
{{Camel "org.demo"}} => OrgDemo
{{CAMEL "org.demo"}} => ORGDEMO
```

### **dot**, **Dot**, **DOT**

Converts a string to dot case - (lower, title, upper) case with dots

```
{{dot "org.demo"}} => org.demo
{{Dot "org.demo"}} => Org.Demo
{{DOT "org.demo"}} => ORG.DEMO
```

### **kebap**, **Kebap**, **KEBAP**

Converts a string to kebap case - (lower, title, upper) case with dashes

```
{{kebap "org.demo"}} => org-demo
{{Kebap "org.demo"}} => Org-Demo
{{KEBAP "org.demo"}} => ORG-DEMO
```

### **path**, **Path**, **PATH**

Converts a string to path case - (lower, title, upper) case with slashes
  
```
{{path "org.demo"}} => org/demo
{{Path "org.demo"}} => Org/Demo
{{PATH "org.demo"}} => ORG/DEMO
```

### **lower**

Converts a string to lower case

```
{{lower "org.demo"}} => org.demo
```

### *upper**

Converts a string to upper case

```
{{upper "org.demo"}} => ORG.DEMO
```

###  **upperFirst**

Converts the first letter of a string to upper case

```
{{upper1 "org.demo"}} => Org.demo
```

###  **lowerFirst**

Converts the first letter of a string to lower case

```
{{lower1 "org.demo"}} => org.demo
```

###  **first**, **First**, **FIRST**

Returns the first character of a string as lower, unchanged, upper case

```
{{first "org.demo"}} => o
{{First "org.demo"}} => o
{{FIRST "org.demo"}} => O
```


### **join**

joins a list of strings with a separator

```
{{join .Module.Interfaces ", "}} => org.demo.Interface1, org.demo.Interface2
```

### **trimPrefix**

Trims a prefix from a string

```
{{trimPrefix "org.demo" "org."}} => demo
```

### **trimSuffix**

Trims a suffix from a string
```
{{trimSuffix "org.demo" ".demo"}} => org
```

###  **replace**

Replaces a string with another string

```
{{replace "org.demo" "org" "com"}} => com.demo
```

### **int2word**, **Int2Word**, **INT2WORD**

Converts an integer to words (lower, title and upper case)

```
{{int2word 1}} => one
{{Int2Word 1}} => One
{{INT2WORD 1}} => ONE
```
###  **plural**

pluralizes a string

```
{{plural "org.demo"}} => org.demos
```
### **nl**

prints a new line

```
{{nl}}
```

### **version**

extracts major, minor, build version from a version string

```
{{$v := version "1.2.3"}}
{{$v}} => 1.2.3
{{$v.Major}} => 1
{{$v.Minor}} => 2
{{$v.Build}} => 3
```

## Language Filters

All programming languages share a common set of filters which then are adapted to the specifics of the language.
These are `return`, `param`, `params`, `vars`, `names` and the `default` filter.

For example for the C++ programming language you would use the `return` and `params` filter named `cpp14Return` and `cpp14Params` during operation declaration.

A typical usage could look like this:

```
{{ range .Operations }}
  {{ cppReturn "" .Return }} {{ camel .Name }}({{ cppParams "" .Params }});
{{ end }}
```

Here the `cppReturn` and `cppParams` are the language specific filters for the C++ programming language. The `""` is the a prefix applied to the return type and the parameters. This is used to add a namespace to the return type and the parameters. All language specific filters have the same signature.

:::tip
We might offer a "2" version of a language filter in the future (e.g. `cppReturn` and `cppReturn2`) where the second version will support the prefix syntax.
:::

These are the common filters for all languages

### **{lang}Return**

Takes and typed element and returns the type declaration of the type

  ```
  {{ range .Module.Interfaces }}
  {{ range .Operations }}
    {{ cppReturn "" .Return }} {{ camel .Name }}({{ cppParams "" .Params }});
  {{ end }}
  {{ end }}
  ```
  

### **{lang}Param**

Takes a typed element and returns the function parameter declaration

  ```
  {{ range .Module.Interfaces }}
  {{ range .Operations }}
    {{ cppReturn "" .Return }} {{ camel .Name }}(
      {{ range $i, $p := .Params }}
        {{ if $i }}, {{ end }}
      {{ cppParam "" $p }}
      {{ end }});
  {{ end }}
  {{ end }}
  ```

### **{lang}Params**

Takes an operation and return the lists of function parameters

```
{{ range .Module.Interfaces }}
{{ range .Operations }}
  {{ cppReturn "" .Return }} {{ camel .Name }}({{ cppParams "" .Params }});
{{ end }}
{{ end }}
```

### **{lang}Default**

Takes a typed element and returns default value

```
{{ range .Module.Interfaces }}
{{ $class := .Name }}
{{ range .Operations }}
  {{ cppReturn "" .Return }} {{$class}}::{{ camel .Name }}({{ cppParams "" .Params }}) {
    return {{ cppDefault "" .Return }};
  }
{{ end }}
{{ end }}
```

### **{lang}}Vars**

Takes a list of types and creates variable names for them

```
{{ cppVars "" .Properties }}
```

### **{lang}Var**

Takes a typed element and creates a variable name for it

```
{{ cppVar "" .Property }}
```

### **{lang}Type**

Takes a typed element and returns the type declaration of the type

```
{{ cppType "" .Property }}
```

## C++14 Filters

- **cppReturn**: takes a typed element and returns the type declaration of the type
- **cppParam**: takes a typed element and returns the function parameter declaration
- **cppParams**: takes an operation and return the lists of function parameters
- **cppDefault**: takes a typed element and returns default value
- **cppVars**: takes a list of types and creates variable names for them
- **cppVar**: takes a typed element and creates a variable name for it
- **cppType**: takes a typed element and returns the type declaration of the type
- **cppConstType**: takes a typed element and returns the type declaration of the type with const qualifier
- **cppNs**: takes a symbol and returns the namespace declaration
- **cppNsOpen**: takes a symbol and returns the namespace opening
- **cppNsClose**: takes a symbol and returns the namespace closing
- **cppGpl**: takes a symbol and returns the GPL license header

## Go Filters

- **goReturn**: takes a typed element and returns the type declaration of the type
- **goParam**: takes a typed element and returns the function parameter declaration
- **goParams**: takes an operation and return the lists of function parameters
- **goDefault**: takes a typed element and returns default value
- **goVars**: takes a list of types and creates variable names for them
- **goVar**: takes a typed element and creates a variable name for it
- **goType**: takes a typed element and returns the type declaration of the type

## TypeScript Filters

- **tsReturn**: takes a typed element and returns the type declaration of the type
- **tsParam**: takes a typed element and returns the function parameter declaration
- **tsParams**: takes an operation and return the lists of function parameters
- **tsDefault**: takes a typed element and returns default value
- **tsVars**: takes a list of types and creates variable names for them
- **tsVar**: takes a typed element and creates a variable name for it
- **tsType**: takes a typed element and returns the type declaration of the type

## QtC++ Filters

- **qtReturn**: takes a typed element and returns the type declaration of the type
- **qtParam**: takes a typed element and returns the function parameter declaration
- **qtParams**: takes an operation and return the lists of function parameters
- **qtDefault**: takes a typed element and returns default value
- **qtVars**: takes a list of types and creates variable names for them
- **qtVar**: takes a typed element and creates a variable name for it
- **qtType**: takes a typed element and returns the type declaration of the type

## Python Filters

- **pyReturn**: takes a typed element and returns the type declaration of the type
- **pyParam**: takes a typed element and returns the function parameter declaration
- **pyParams**: takes an operation and return the lists of function parameters
- **pyDefault**: takes a typed element and returns default value
- **pyVars**: takes a list of types and creates variable names for them
- **pyVar**: takes a typed element and creates a variable name for it
- **pyType**: takes a typed element and returns the type declaration of the type


## Unreal Engine Filters

- **ueReturn**: takes a typed element and returns the type declaration of the type
- **ueParam**: takes a typed element and returns the function parameter declaration
- **ueParams**: takes an operation and return the lists of function parameters
- **ueDefault**: takes a typed element and returns default value
- **ueVars**: takes a list of types and creates variable names for them
- **ueVar**: takes a typed element and creates a variable name for it
- **ueType**: takes a typed element and returns the type declaration of the type
- **ueConstType**: takes a typed element and returns the type declaration of the type with const qualifier