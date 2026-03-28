# oxc-linter-config

[English](./README.md) | [한국어](./README.ko.md)

이 패키지는 oxc-linter용 공통 린트 설정을 제공합니다.

## Installation

```bash
pnpm add -D oxlint @cocopalm/oxc-linter-config
```

## How to use

### oxlint.config.ts 설정하기

프로젝트 루트 디렉토리에 `oxlint.config.ts` 파일을 생성합니다.

```bash
touch oxlint.config.ts
```

`defineConfig`를 사용하여 config를 불러오고 조합합니다.

```ts
// oxlint.config.ts

import { defineConfig } from 'oxlint'
import commonConfig from '@cocopalm/oxc-linter-config/common'
import reactConfig from '@cocopalm/oxc-linter-config/react'

export default defineConfig({
  extends: [commonConfig, reactConfig],
})
```

`package.json`에 린트 스크립트를 추가해주세요.

```json
// package.json

{
  "scripts": {
    "lint": "oxlint .",
    "lint:fix": "oxlint . --fix"
  }
}
```

> **참고:** oxlint는 `oxlint.config.ts`를 Node.js `import()`로 로드합니다. **Node.js 22**에서는 TypeScript 지원이 기본으로 활성화되어 있지 않으므로 `--experimental-strip-types` 플래그가 필요합니다:
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
> **Node.js 23.6+** 에서는 TypeScript 지원이 stable로 승격되어 플래그 없이도 동작합니다.

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

1. **Common 규칙만 사용** (vanilla JS/TS 프로젝트)

   ```ts
   import { defineConfig } from 'oxlint'
   import commonConfig from '@cocopalm/oxc-linter-config/common'

   export default defineConfig({
     extends: [commonConfig],
   })
   ```

2. **React 프로젝트**

   ```ts
   import { defineConfig } from 'oxlint'
   import commonConfig from '@cocopalm/oxc-linter-config/common'
   import reactConfig from '@cocopalm/oxc-linter-config/react'

   export default defineConfig({
     extends: [commonConfig, reactConfig],
   })
   ```

3. **Node.js 프로젝트**

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

각 설정 파일에 적용된 모든 린트 규칙과 각 규칙을 추가한 이유에 대해 알고 싶다면 다음 문서를 참고해주세요.

👉 [Linter Rules 설명서](./docs/linter-rules.md)

<br />

## Description

기존에 널리 사용중인 eslint-plugin을 oxc-linter에서 사용할 수 있도록 포팅하는 작업이 진행중입니다.
진행상황을 확인하고 싶다면 다음 이슈를 참고해주세요.

👉 [github issue](https://github.com/oxc-project/oxc/issues/481)

<br />

## Caveat

1. v1 기준으로 다음 eslint-plugin들의 **`not recommended`** 규칙들은 미구현 상태로 인해서 현재 적용되어있지 않습니다.

- [eslint-core](./docs/eslint-core.md)
- [eslint-react](./docs/eslint-react.md)

2. `react compiler` 관련 규칙들은 아직 oxc linter react plugin에서 지원하지 않기 때문에 적용되어있지 않습니다.

- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
