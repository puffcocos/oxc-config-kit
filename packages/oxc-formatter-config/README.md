# oxc-formatter-config

> Prettier with OXC plugin을 사용한 코드 포맷팅 설정

## Installation

```bash
pnpm add -D prettier @prettier/plugin-oxc @cocopalm/oxc-formatter-config
```

## How to use

이 패키지는 Prettier의 OXC 플러그인(`@prettier/plugin-oxc`)을 사용하여 코드를 포맷팅합니다.

### .prettierrc.mjs 설정하기

프로젝트 루트 디렉토리에 `.prettierrc.mjs` 파일을 생성합니다.

```bash
touch .prettierrc.mjs
```

설정 파일에서 `@cocopalm/oxc-formatter-config`를 불러옵니다.

```js
// .prettierrc.mjs

import config from '@cocopalm/oxc-formatter-config'

export default config
```

`package.json` 에 포맷팅 스크립트를 추가해주세요.

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

기본 설정을 오버라이드하고 싶다면 다음과 같이 설정을 확장할 수 있습니다.

```js
// .prettierrc.mjs

import baseConfig from '@cocopalm/oxc-formatter-config'

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  ...baseConfig,
  // 여기에 오버라이딩 설정을 작성할 수 있습니다.
  printWidth: 100,
  semi: true,
}

export default config
```


<br />

## Formatter Options

이 패키지에 적용된 기본 포맷팅 옵션은 다음과 같습니다:

| 옵션            | 값       | 설명                                   |
| --------------- | -------- | -------------------------------------- |
| printWidth      | 80       | 한 줄의 최대 길이                      |
| tabWidth        | 2        | 들여쓰기 공백 수                       |
| useTabs         | false    | 탭 대신 공백 사용                      |
| semi            | false    | 문장 끝 세미콜론 제거                  |
| singleQuote     | true     | 작은따옴표 사용                        |
| trailingComma   | 'all'    | 가능한 모든 곳에 trailing comma 추가   |
| arrowParens     | 'always' | 화살표 함수 매개변수에 항상 괄호 사용  |
| plugins         | [@prettier/plugin-oxc] | OXC 플러그인 사용 |

<br />
