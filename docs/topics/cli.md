# CLI Tool (EE)

The `apigear` CLI tool allows users to run API code generation from the command line.

!!!note

    You need to have a valid Enterprise License to get access to the `apigear` code generation platform and the templates.

## Installing

    pip install apigear

## Using

APIGear read a set of source API documents and uses the rules document to create output files.

```txt
Usage: apigear [OPTIONS] [SOURCE]...

Options:
  --rules PATH
  --target DIRECTORY
  --reload / --no-reload      Auto reload script on changes
  --scaffold / --no-scaffold  Add extrac scaffolding code
  --watch DIRECTORY
  --feature TEXT
  --run TEXT                  run script after generation inside the target
                              dir

  --pause / --no-pause        requires enter to re-run.
  --force / --no-force        forces overwriting of files
  --help                      Show this message and exit.
```