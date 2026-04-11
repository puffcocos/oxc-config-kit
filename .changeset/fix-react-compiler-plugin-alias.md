---
"@cocopalm/oxc-linter-config": patch
---

- Fix `@cocopalm/oxc-linter-config/react-compiler` failing to load with "Plugin name 'react-hooks' is reserved" error by registering `eslint-plugin-react-hooks` under the `react-hooks-js` alias to avoid colliding with oxlint's native `react-hooks` plugin.
- Rename all `react-hooks/*` rule keys under the `react-compiler` config to `react-hooks-js/*` to match the new plugin alias.
