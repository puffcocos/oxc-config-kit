# oxc-linter-config

> ⚠️ oxc linter는 현재 활발히 개발 진행중인 라이브러리입니다. 그로 인해 버전간의 주요 변경사항이 존재할 수 있습니다.

## Installation

```bash
pnpm add oxlint @cocopalm/oxc-linter-config
```

## How to use

```
packages/oxc-linter-config/
├── oxlint-common.json  # 모든 프로젝트에 공통 적용
├── oxlint-react.json   # React/Next.js 프로젝트용
└── oxlint-node.json    # Node.js 프로젝트용
```

### .oxlintrc.json 설정하기

프로젝트 루트 디렉토리에 `.oxlintrc.json` 을 생성합니다.

```bash
touch .oxlintrc.json
```

적용하고자 하는 린트 규칙을 `extends` 필드에 정의합니다.

```json
// .oxlintrc.json

{
  "extends": [
    "node_modules/@cocopalm/oxc-linter-config/oxlint-common.json",
    "node_modules/@cocopalm/oxc-linter-config/oxlint-react.json"
  ]
}
```

`package.json` 에 린트 스크립트를 추가해주세요.

```json
// package.json

{
  "scripts": {
    "lint": "oxlint .",
    "lint:fix": "oxlint . --fix"
  }
}
```

### rule overrides

린트 규칙을 오버라이드하고 싶다면 `overrides` 필드를 사용합니다.

```json
{
  "extends": [
    "node_modules/@cocopalm/oxc-linter-config/oxlint-common.json",
    "node_modules/@cocopalm/oxc-linter-config/oxlint-react.json"
  ],
  "overrides": [
    {
      "files": ["**/*.{ts,tsx}"],
      "rules": {
        "eslint/no-unused-vars": "off"
      }
    }
  ]
}
```

### Examples

1. **Common 규칙만 사용** (vanilla JS/TS 프로젝트)

   ```json
   {
     "extends": ["node_modules/@cocopalm/oxc-linter-config/oxlint-common.json"]
   }
   ```

2. **React 프로젝트**

   ```json
   {
     "extends": [
       "node_modules/@cocopalm/oxc-linter-config/oxlint-common.json",
       "node_modules/@cocopalm/oxc-linter-config/oxlint-react.json"
     ]
   }
   ```

3. **Node.js 프로젝트**
   ```json
   {
     "extends": [
       "node_modules/@cocopalm/oxc-linter-config/oxlint-common.json",
       "node_modules/@cocopalm/oxc-linter-config/oxlint-node.json"
     ]
   }
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
