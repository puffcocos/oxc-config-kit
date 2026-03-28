# oxc-formatter-config

[English](./README.md) | [한국어](./README.ko.md)

This package provides code formatting configuration using [oxfmt](https://oxc.rs/docs/guide/usage/formatter).

## Installation

```bash
pnpm add -D oxfmt @cocopalm/oxc-formatter-config
```

## How to use

### Setting up oxfmt.config.ts

Create an `oxfmt.config.ts` file in your project root directory.

```bash
touch oxfmt.config.ts
```

Import `@cocopalm/oxc-formatter-config` in your configuration file.

```ts
// oxfmt.config.ts

import config from '@cocopalm/oxc-formatter-config'

export default config
```

Add formatting scripts to your `package.json`.

```json
// package.json

{
  "scripts": {
    "format": "oxfmt .",
    "format:check": "oxfmt . --check"
  }
}
```

> **Note:** oxfmt loads `oxfmt.config.ts` via Node.js `import()`. On **Node.js 22**, TypeScript support is not enabled by default, so you need to add `--experimental-strip-types`:
>
> ```json
> {
>   "scripts": {
>     "format": "NODE_OPTIONS='--experimental-strip-types' oxfmt .",
>     "format:check": "NODE_OPTIONS='--experimental-strip-types' oxfmt . --check"
>   }
> }
> ```
>
> On **Node.js 23.6+**, TypeScript support is stable and no flag is needed.

### Config Override

If you want to override the default settings, you can extend the configuration as follows.

```ts
// oxfmt.config.ts

import { defineConfig } from 'oxfmt'
import config from '@cocopalm/oxc-formatter-config'

export default defineConfig({
  ...config,
  printWidth: 100,
  semi: true,
  singleQuote: true,
})
```


<br />

## Formatter Options

The default formatting options applied in this package are as follows:

| Option        | Value   | Description                                                  |
| ------------- | ------- | ------------------------------------------------------------ |
| printWidth    | 80      | Maximum line length                                          |
| tabWidth      | 2       | Number of spaces for indentation                             |
| useTabs       | false   | Use spaces instead of tabs                                   |
| semi          | false   | Omit semicolons at the end of statements                     |
| singleQuote   | true    | Use single quotes                                            |
| trailingComma | 'all'   | Add trailing commas wherever possible                        |
| arrowParens   | 'always'| Always wrap arrow function parameters in parentheses         |

<br />
