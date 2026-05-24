# @puffcoco/oxc-formatter-config

## 0.2.1

### Patch Changes

- 8e8728a: - Update `author` field in `package.json` from `puffcocos` to `wjdgus09`.
  - Update `repository.url` in `package.json` to `https://github.com/wjdgus09/oxc-config-kit`.

## 0.2.0

### Minor Changes

- 1842b59: ### Breaking Changes

  - `/common` entry has been renamed to `/base`. Update your imports accordingly:

    ```ts
    // Before
    import commonConfig from "@cocopalm/oxc-linter-config/common";

    // After
    import baseConfig from "@cocopalm/oxc-linter-config/base";
    ```

  ### New Features

  - Added `/react-compiler` entry for React Compiler users. Activates React Compiler rules from `eslint-plugin-react-hooks` via oxlint's JS plugin support:

    ```ts
    import baseConfig from "@cocopalm/oxc-linter-config/base";
    import reactConfig from "@cocopalm/oxc-linter-config/react";
    import reactCompilerConfig from "@cocopalm/oxc-linter-config/react-compiler";

    export default defineConfig({
      extends: [baseConfig, reactConfig, reactCompilerConfig],
    });
    ```

## 0.1.0

### Minor Changes

- 7140d59: Config oxlint.config.ts

## 0.0.25

### Patch Changes

- e909c53: Build formatter config with tsdown

## 0.0.24

### Patch Changes

- bcb8eb0: Update ts to js

## 0.0.23

### Patch Changes

- 4e5ed18: Use Oxfmt package

## 0.0.22

### Patch Changes

- 8158103: Update docs (ko/en)

## 0.0.21

### Patch Changes

- 38a384b: Update CI/CD nodejs version

## 0.0.20

### Patch Changes

- ce56246: Update provenance setting

## 0.0.19

### Patch Changes

- ebe1270: Fix Workflow

## 0.0.18

### Patch Changes

- b4fe7a1: Fix Workflow

## 0.0.17

### Patch Changes

- f064f17: Improve description

## 0.0.16

### Patch Changes

- 68f925a: update oxc-formatter-config document

## 0.0.15

### Patch Changes

- 9e72c44: @prettier/plugin-oxc 의존성 변경

## 0.0.14

### Patch Changes

- c4b0a78: support oxc-formatter-config

## 0.0.13

### Patch Changes

- 12766da: bump packages

## 0.0.12

### Patch Changes

- 167710f: Update jsx-a11y rule scope name

## 0.0.11

### Patch Changes

- 526c367: Add jsx-a11y rules

## 0.0.10

### Patch Changes

- f03f4f8: remove jsPlugins

## 0.0.9

### Patch Changes

- 1a85c6c: Fix js plugins rules

## 0.0.8

### Patch Changes

- a4636cd: Use jsPlugins preview feature

## 0.0.7

### Patch Changes

- 2b54617: Implement oxc linter rules

## 0.0.6

### Patch Changes

- 2571462: Update packages

## 0.0.5

### Patch Changes

- 6cfeb47: Fix workflow

## 0.0.4

### Patch Changes

- caacdfe: Update release workflow

## 0.0.3

### Patch Changes

- e5db6d2: package namespace 변경

## 0.0.3

### Patch Changes

- ca9e5bc: package publish scope 변경

## 0.0.2

### Patch Changes

- 46710c5: github packages 배포

## 0.0.1

### Patch Changes

- 5f4c4f0: 🚀 initial deployment
