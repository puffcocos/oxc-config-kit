# oxc-formatter-config

[English](./README.md) | [한국어](./README.ko.md)

이 패키지는 [oxfmt](https://oxc.rs/docs/guide/usage/formatter)를 사용한 코드 포맷팅 설정을 제공합니다.

## Installation

```bash
pnpm add -D oxfmt @cocopalm/oxc-formatter-config
```

## How to use

### oxfmt.config.ts 설정하기

프로젝트 루트 디렉토리에 `oxfmt.config.ts` 파일을 생성합니다.

```bash
touch oxfmt.config.ts
```

설정 파일에서 `@cocopalm/oxc-formatter-config`를 불러옵니다.

```ts
// oxfmt.config.ts

import config from '@cocopalm/oxc-formatter-config'

export default config
```

`package.json`에 포맷팅 스크립트를 추가해주세요.

```json
// package.json

{
  "scripts": {
    "format": "oxfmt .",
    "format:check": "oxfmt . --check"
  }
}
```

> **참고:** oxfmt는 `oxfmt.config.ts`를 Node.js `import()`로 로드합니다. **Node.js 22**에서는 TypeScript 지원이 기본으로 활성화되어 있지 않으므로 `--experimental-strip-types` 플래그가 필요합니다:
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
> **Node.js 23.6+** 에서는 TypeScript 지원이 stable로 승격되어 플래그 없이도 동작합니다.

### Config Override

기본 설정을 오버라이드하고 싶다면 다음과 같이 설정을 확장할 수 있습니다.

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

이 패키지에 적용된 기본 포맷팅 옵션은 다음과 같습니다:

| 옵션          | 값       | 설명                                          |
| ------------- | -------- | --------------------------------------------- |
| printWidth    | 80       | 한 줄의 최대 길이                             |
| tabWidth      | 2        | 들여쓰기 공백 수                              |
| useTabs       | false    | 탭 대신 공백 사용                             |
| semi          | false    | 문장 끝 세미콜론 제거                         |
| singleQuote   | true     | 작은따옴표 사용                               |
| trailingComma | 'all'    | 가능한 모든 곳에 trailing comma 추가          |
| arrowParens   | 'always' | 화살표 함수 매개변수에 항상 괄호 사용         |

<br />
