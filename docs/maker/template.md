# Template Primer


The template language is based on Go Text Templates. The template language is described in the [Go Text Template documentation](https://golang.org/pkg/text/template/).

To use a template you need to define a template file with the extension `.tpl`. Inside the template file you can use the template language to generate text, which is then written to the target file.

## Basic Syntax

The template syntax writes the text as is to the target file. Actions inside the text allow to control the output. A action is a text inside `{{` and `}}`. The action can be a variable, a function or a control structure.


To access variables you can use the current scope `.`. All variables are title case. For example to access the name of the current module you can use the following template:

```go
{{ .Module.Name }}
```

## Loops

To iterate over a list you can use the `range` keyword. For example to iterate over all interfaces in the current module:

```go
{{ range .Module.Interfaces }}
    {{ .Name }}
{{ end }}
```

See how the current context changes inside the range loop.

A loop can also be empty and the `else` keyword can be used to define the empty case. For example to iterate over all interfaces in the current module:

```go
{{ range .Module.Interfaces }}
    {{ .Name }}
{{ else }}
    No interfaces found
{{ end }}
```

## Assignments

To define new variable you can assign a value to a variable. For example to assign the name of the current module to a variable:

```go
{{ $name := .Module.Name }}
```

:::tip
This allows you to define a set of variables at the beginning of the document and used them throughout. For example a class name for the current interface:

```go
{{ $class := Camel .Name }}
```
:::


## Conditionals

You can use an if-end or if-else-end construct to control the output. For example to only output the name of the current interface if it is not empty:

```go
{{ if .Name }}
    {{ .Name }}
{{ end }}
```

or to output a default value if the name is empty:

```go
{{ if .Name }}
    {{ .Name }}
{{ else }}
    {{ .Module.Name }}
{{ end }}
```

## White Space

The template language allows to control the white space. For example to remove the white space before the output:

```go
{{- if .Name }}
    {{ .Name }}
{{- end }}
```

or to remove the white space after the output:

```go
{{ if .Name -}}
    {{ .Name }}
{{ end }}
```

