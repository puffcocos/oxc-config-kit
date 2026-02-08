# oxc config kit

[English](./README.md) | [한국어](./README.ko.md)

[oxc](https://github.com/oxc-project/oxc) 툴체인을 위한 설정 패키지 모음입니다.

## Packages

- [`@cocopalm/oxc-linter-config`](./packages/oxc-linter-config) - oxc 플러그인 기반 `ESLint` 설정
- [`@cocopalm/oxc-formatter-config`](./packages/oxc-formatter-config) - oxc 플러그인 기반 `Prettier` 설정

## Development

```bash
# 의존성 설치
pnpm install

# changeset 생성
pnpm changeset

# 패키지 버전 업데이트
pnpm changeset:version

# 패키지 릴리스
pnpm changeset:release
```

## License

MIT License
