oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g react-native-assistant
$ rna COMMAND
running command...
$ rna (--version)
react-native-assistant/0.0.0 darwin-arm64 node-v16.15.1
$ rna --help [COMMAND]
USAGE
  $ rna COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`rna hello PERSON`](#rna-hello-person)
* [`rna hello world`](#rna-hello-world)
* [`rna help [COMMAND]`](#rna-help-command)
* [`rna plugins`](#rna-plugins)
* [`rna plugins:install PLUGIN...`](#rna-pluginsinstall-plugin)
* [`rna plugins:inspect PLUGIN...`](#rna-pluginsinspect-plugin)
* [`rna plugins:install PLUGIN...`](#rna-pluginsinstall-plugin-1)
* [`rna plugins:link PLUGIN`](#rna-pluginslink-plugin)
* [`rna plugins:uninstall PLUGIN...`](#rna-pluginsuninstall-plugin)
* [`rna plugins:uninstall PLUGIN...`](#rna-pluginsuninstall-plugin-1)
* [`rna plugins:uninstall PLUGIN...`](#rna-pluginsuninstall-plugin-2)
* [`rna plugins update`](#rna-plugins-update)

## `rna hello PERSON`

Say hello

```
USAGE
  $ rna hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/swalahamani/react-native-assistant/blob/v0.0.0/dist/commands/hello/index.ts)_

## `rna hello world`

Say hello world

```
USAGE
  $ rna hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `rna help [COMMAND]`

Display help for rna.

```
USAGE
  $ rna help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for rna.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `rna plugins`

List installed plugins.

```
USAGE
  $ rna plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ rna plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `rna plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ rna plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ rna plugins add

EXAMPLES
  $ rna plugins:install myplugin 

  $ rna plugins:install https://github.com/someuser/someplugin

  $ rna plugins:install someuser/someplugin
```

## `rna plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ rna plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ rna plugins:inspect myplugin
```

## `rna plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ rna plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ rna plugins add

EXAMPLES
  $ rna plugins:install myplugin 

  $ rna plugins:install https://github.com/someuser/someplugin

  $ rna plugins:install someuser/someplugin
```

## `rna plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ rna plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ rna plugins:link myplugin
```

## `rna plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ rna plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ rna plugins unlink
  $ rna plugins remove
```

## `rna plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ rna plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ rna plugins unlink
  $ rna plugins remove
```

## `rna plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ rna plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ rna plugins unlink
  $ rna plugins remove
```

## `rna plugins update`

Update installed plugins.

```
USAGE
  $ rna plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
