# oxc-formatter-config

[English](./README.md) | [한국어](./README.ko.md)

This package provides code formatting configuration using Prettier and the oxc plugin (`@prettier/plugin-oxc`).

## Installation

```bash
pnpm add -D prettier @prettier/plugin-oxc @cocopalm/oxc-formatter-config
```

## How to use

### Setting up .prettierrc.mjs

Create a `.prettierrc.mjs` file in your project root directory.

```bash
touch .prettierrc.mjs
```

Import `@cocopalm/oxc-formatter-config` in your configuration file.

```js
// .prettierrc.mjs

import config from '@cocopalm/oxc-formatter-config'

export default config
```

Add formatting scripts to your `package.json`.

```json
// package.json

{
  "scripts": {
    "format": "prettier . --write",
    "format:check": "prettier . --check"
  }
}
```

### Config Override

If you want to override the default settings, you can extend the configuration as follows.

```js
// .prettierrc.mjs

import baseConfig from '@cocopalm/oxc-formatter-config'

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  ...baseConfig,
  // Add your custom overrides here.
  printWidth: 100,
  semi: true,
}

export default config
```


<br />

## Formatter Options

The default formatting options applied in this package are as follows:

| Option          | Value    | Description                            |
| --------------- | -------- | -------------------------------------- |
| printWidth      | 80       | Maximum line length                    |
| tabWidth        | 2        | Number of spaces for indentation       |
| useTabs         | false    | Use spaces instead of tabs             |
| semi            | false    | Omit semicolons at the end of statements |
| singleQuote     | true     | Use single quotes                      |
| trailingComma   | 'all'    | Add trailing commas wherever possible  |
| arrowParens     | 'always' | Always wrap arrow function parameters in parentheses |
| plugins         | [@prettier/plugin-oxc] | Use OXC plugin |

<br />
