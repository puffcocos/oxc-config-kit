# oxc-linter-config

[English](./README.md) | [한국어](./README.ko.md)

This package provides shared lint configurations for oxc-linter.

## Installation

```bash
pnpm add -D oxlint @cocopalm/oxc-linter-config
```

## How to use

### Setting up oxlint.config.ts

Create an `oxlint.config.ts` file in your project root directory.

```bash
touch oxlint.config.ts
```

Import the configs and combine them using `defineConfig`.

```ts
// oxlint.config.ts

import { defineConfig } from 'oxlint'
import commonConfig from '@cocopalm/oxc-linter-config/common'
import reactConfig from '@cocopalm/oxc-linter-config/react'

export default defineConfig({
  extends: [commonConfig, reactConfig],
})
```

Add lint scripts to your `package.json`.

```json
// package.json

{
  "scripts": {
    "lint": "oxlint .",
    "lint:fix": "oxlint . --fix"
  }
}
```

> **Note:** oxlint loads `oxlint.config.ts` via Node.js `import()`. On **Node.js 22**, TypeScript support is not enabled by default, so you need to add `--experimental-strip-types`:
>
> ```json
> {
>   "scripts": {
>     "lint": "NODE_OPTIONS='--experimental-strip-types' oxlint .",
>     "lint:fix": "NODE_OPTIONS='--experimental-strip-types' oxlint . --fix"
>   }
> }
> ```
>
> On **Node.js 23.6+**, TypeScript support is stable and no flag is needed.

### Rule Overrides

```ts
// oxlint.config.ts

import { defineConfig } from 'oxlint'
import commonConfig from '@cocopalm/oxc-linter-config/common'
import reactConfig from '@cocopalm/oxc-linter-config/react'

export default defineConfig({
  extends: [commonConfig, reactConfig],
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      rules: {
        'eslint/no-unused-vars': 'off',
      },
    },
  ],
})
```

### Examples

1. **Common rules only** (vanilla JS/TS projects)

   ```ts
   import { defineConfig } from 'oxlint'
   import commonConfig from '@cocopalm/oxc-linter-config/common'

   export default defineConfig({
     extends: [commonConfig],
   })
   ```

2. **React projects**

   ```ts
   import { defineConfig } from 'oxlint'
   import commonConfig from '@cocopalm/oxc-linter-config/common'
   import reactConfig from '@cocopalm/oxc-linter-config/react'

   export default defineConfig({
     extends: [commonConfig, reactConfig],
   })
   ```

3. **Node.js projects**

   ```ts
   import { defineConfig } from 'oxlint'
   import commonConfig from '@cocopalm/oxc-linter-config/common'
   import nodeConfig from '@cocopalm/oxc-linter-config/node'

   export default defineConfig({
     extends: [commonConfig, nodeConfig],
   })
   ```

<br />

## Lint Rules

To learn about all lint rules applied in each configuration file and the reasoning behind them, please refer to the following document.

👉 [Linter Rules Reference](./docs/linter-rules.md)

<br />

## Description

Work is in progress to port widely used eslint-plugins for use with oxc-linter.
To check the progress, please refer to the following issue.

👉 [github issue](https://github.com/oxc-project/oxc/issues/481)

<br />

## Caveat

1. As of v1, the **`not recommended`** rules from the following eslint-plugins are not yet applied due to being unimplemented.

- [eslint-core](./docs/eslint-core.md)
- [eslint-react](./docs/eslint-react.md)

2. `react compiler` related rules are not applied because the oxc linter react plugin does not yet support them.

- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
