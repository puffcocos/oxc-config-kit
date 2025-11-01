# oxc-linter-config

> ⚠️ oxc linter는 현재 활발히 개발 진행중인 라이브러리입니다. 그로 인해 버전간의 주요 변경사항이 존재할 수 있습니다.

## Installation

```bash
pnpm add @cocopalm/oxc-linter-config
```

## How to use

프로젝트 루트 디렉토리에 `.oxlintrc.json` 을 생성합니다.

```bash
touch .oxlintrc.json
```

적용하고자 하는 린트 규칙을 `extends` 필드에 정의해주세요.

- `oxlint-common.json`
  - `javascript`, `typescript`, `import` 와 같은 공용 린트 플러그인입니다.
- `oxlint-react.json`
  - `Next.js` 기반 프론트엔드 서비스의 린트 플러그인입니다.
- `oxlint-node.json`
  - `node.js` 기반 백엔드 서비스의 린트 플러그인입니다.

### 👀 Example

```json
{
  "extends": [
    "node_modules/@cocopalm/oxc-linter-config/oxlint-common.json",
    "node_modules/@cocopalm/oxc-linter-config/oxlint-react.json"
  ]
}
```

규칙을 오버라이드하고 싶다면 `overrides` 필드를 사용해주세요.

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

<br />

## Description

기존에 널리 사용중인 eslint-plugin을 oxc-linter에서 사용할 수 있도록 포팅하는 작업이 진행중입니다.  
진행상황을 확인하고 싶다면 다음 이슈를 참고해주세요.

👉 [github issue](https://github.com/oxc-project/oxc/issues/481)

### Caveat

v1 기준으로 다음 eslint-plugin들의 **`not recommended`** 규칙들은 미구현 상태로 인해서 현재 적용되어있지 않습니다.

- [eslint-core](./docs/eslint-core.md)
- [eslint-react](./docs/eslint-react.md)
