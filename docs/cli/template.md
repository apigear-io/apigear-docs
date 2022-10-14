# SDK Templates

The CLI allows you to fully manage the SDK templates. You can install, update and remove templates. The templates are stored in a local folder on your drive. The default location is `~/.apigear/templates`. You can change the location using the `APIGEAR_TEMPLATES` environment variable.

## Search Templates

You can search for templates using the `apigear template search` command. The command will search for templates in the cloud and print the result.

```bash
apigear template search <name>
```

The `name` argument is optional. If you specify a name the command will search for templates with a matching name. If you omit the name the command will search for all templates.

## Install a Template

To install a template you need to know the name of the template. The name is the same as the name of the template in the [ApiGear Registry](https://github.com/apigear-io/registry). You can find the name in the template details page.

```bash
apigear template install <name>
```

The `name` argument is the name of the template. The command will install the template in the local template folder. The default location is `~/.apigear/templates`. You can change the location using the `APIGEAR_TEMPLATES` environment variable.

# Template Info

You can get information about a template using the `apigear template info` command. The command will print the details of the template.

```bash
apigear template info <name>
```

The information includes the name, version, description and features of the template.

# Update a Template

To update a template you need to know the name of the template. The name is the same as the name of the template in the ApiGear Registry. You can find the name in the template details page.

```bash
apigear template update <name>
```

The update will update to the latest version by default but it's also possible to specify a version.

## Remove a Template

You can remove a template by name. The name can be found using the `list` command.

```bash
apigear template remove <name>
```

## List Installed Templates

You can list all installed templates using the `apigear template list` command. The command will print the name and version of all installed templates.

```bash
apigear template list
```
