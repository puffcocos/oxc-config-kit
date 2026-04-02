---
"@cocopalm/oxc-linter-config": minor
---

### Breaking Changes

- `/common` entry has been renamed to `/base`. Update your imports accordingly:

  ```ts
  // Before
  import commonConfig from '@cocopalm/oxc-linter-config/common'

  // After
  import baseConfig from '@cocopalm/oxc-linter-config/base'
  ```

### New Features

- Added `/react-compiler` entry for React Compiler users. Activates React Compiler rules from `eslint-plugin-react-hooks` via oxlint's JS plugin support:

  ```ts
  import baseConfig from '@cocopalm/oxc-linter-config/base'
  import reactConfig from '@cocopalm/oxc-linter-config/react'
  import reactCompilerConfig from '@cocopalm/oxc-linter-config/react-compiler'

  export default defineConfig({
    extends: [baseConfig, reactConfig, reactCompilerConfig],
  })
  ```
