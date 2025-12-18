---
sidebar_position: 2
---

# SDK Templates

The CLI allows you to fully manage the SDK templates. You can install, update and remove templates. The templates are stored in a local folder on your drive. The default location is `~/.apigear/templates`. You can change the location using the `APIGEAR_TEMPLATES` environment variable.

## List Available Templates

You can list all templates available in apigear registry using the `apigear template list`. Those will be installed in your local cache if used with `generate` command (both quick generation or in a solution file).

```bash
$ apigear template list
template                   | git-url
apigear-io/template-cpp14  | https://github.com/apigear-io/template-cpp14.git
apigear-io/template-go     | https://github.com/apigear-io/template-go.git
apigear-io/template-python | https://github.com/apigear-io/template-python.git
apigear-io/template-qt5    | https://github.com/apigear-io/template-qt5.git
apigear-io/template-qtcpp  | https://github.com/apigear-io/template-qtcpp.git
apigear-io/template-unreal | https://github.com/apigear-io/template-unreal.git
```
## Check Installed Templates

Use template command with a `cache` parameter to get list of all installed templates with their versions.

```bash
$ apigear template cache
list of templates from the local cache

source                            | url                                               | installed                                | latest
apigear-io/template-cpp14@v3.4.0  | https://github.com/apigear-io/template-cpp14.git  | a47fb50405215c520cf40527e1057cd4cc6d5e0e | v3.4.0
apigear-io/template-cpp14@v3.6.0  | https://github.com/apigear-io/template-cpp14.git  | 9f262863ddd60858c7db02ff6829a709d88ce1e5 | v3.6.0
apigear-io/template-unreal@v3.2.2 | https://github.com/apigear-io/template-unreal.git | da8164860de23b703335f1b96583c5c78609cbe5 | v3.2.2
```

## Install a Template

To install a template you need to know the name of the template. The name is the same as the name of the template in the [ApiGear Registry](https://github.com/apigear-io/registry). You can find the name in the template details page or just list all available templates.

```bash
apigear template install <name>
```

The `name` argument is the name of the template. The command will install the template in the local template folder. The default location is `~/.apigear/templates`. You can change the location using the `APIGEAR_TEMPLATES` environment variable.
By default the newest available version of template is isntalled, to specify exact version use `@version` right after the `name`.

# Template Info

You can get information about a template using the `apigear template info` command. The command will print the details of the template.

```bash
$ apigear template info apigear-io/template-cpp14
Name:           apigear-io/template-cpp14
URL:            https://github.com/apigear-io/template-cpp14.git
Version:
Latest:         v3.6.0
Versions:       v3.6.0, v3.5.2, v3.5.1, v3.5.0, v3.4.0, v3.3.0, v3.2.0, v3.1.1, v3.1.0, v3.0.0, v2.1.1, v2.1.0-0, v2.1.0
```

The information includes the name, version, url of the template.

# Update a Template

To update a template you need to know the name of the template. The name is the same as the name of the template in the ApiGear Registry. You can find the name in the template details page.

```bash
apigear template update <name>
```

The update will update to the latest version by default but it's also possible to specify a version.

## Remove a Template

You can remove a template by name. The name can be found using the `cache` command.

```bash
apigear template remove <name>
```

or you can remove all installed templates with 

```bash
apigear template clean
```
