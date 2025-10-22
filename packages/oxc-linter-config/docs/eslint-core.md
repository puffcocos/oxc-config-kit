## eslint core

[GitHub Issue](https://github.com/oxc-project/oxc/issues/479)

하기 규칙들은 oxc-linter-config 구성 당시 미구현 상태였습니다.  
구현이 마무리되면 적용 검토가 필요합니다.

### Not recommended rules

| Rule                                | Docs                                                                      |
| ----------------------------------- | ------------------------------------------------------------------------- |
| eslint/accessor-pairs               | [Docs](https://eslint.org/docs/latest/rules/accessor-pairs)               |
| eslint/camelcase                    | [Docs](https://eslint.org/docs/latest/rules/camelcase)                    |
| eslint/capitalized-comments         | [Docs](https://eslint.org/docs/latest/rules/capitalized-comments)         |
| eslint/complexity                   | [Docs](https://eslint.org/docs/latest/rules/complexity)                   |
| eslint/consistent-return            | [Docs](https://eslint.org/docs/latest/rules/consistent-return)            |
| eslint/consistent-this              | [Docs](https://eslint.org/docs/latest/rules/consistent-this)              |
| eslint/dot-notation                 | [Docs](https://eslint.org/docs/latest/rules/dot-notation)                 |
| eslint/func-name-matching           | [Docs](https://eslint.org/docs/latest/rules/func-name-matching)           |
| eslint/id-denylist                  | [Docs](https://eslint.org/docs/latest/rules/id-denylist)                  |
| eslint/id-match                     | [Docs](https://eslint.org/docs/latest/rules/id-match)                     |
| eslint/logical-assignment-operators | [Docs](https://eslint.org/docs/latest/rules/logical-assignment-operators) |
| eslint/max-statements               | [Docs](https://eslint.org/docs/latest/rules/max-statements)               |
| eslint/no-implicit-coercion         | [Docs](https://eslint.org/docs/latest/rules/no-implicit-coercion)         |
| eslint/no-implicit-globals          | [Docs](https://eslint.org/docs/latest/rules/no-implicit-globals)          |
| eslint/no-implied-eval              | [Docs](https://eslint.org/docs/latest/rules/no-implied-eval)              |
| eslint/no-inline-comments           | [Docs](https://eslint.org/docs/latest/rules/no-inline-comments)           |
| eslint/no-invalid-this              | [Docs](https://eslint.org/docs/latest/rules/no-invalid-this)              |
| eslint/no-loop-func                 | [Docs](https://eslint.org/docs/latest/rules/no-loop-func)                 |
| eslint/no-octal-escape              | [Docs](https://eslint.org/docs/latest/rules/no-octal-escape)              |
| eslint/no-promise-executor-return   | [Docs](https://eslint.org/docs/latest/rules/no-promise-executor-return)   |
| eslint/no-restricted-exports        | [Docs](https://eslint.org/docs/latest/rules/no-restricted-exports)        |
| eslint/no-restricted-properties     | [Docs](https://eslint.org/docs/latest/rules/no-restricted-properties)     |
| eslint/no-restricted-syntax         | [Docs](https://eslint.org/docs/latest/rules/no-restricted-syntax)         |
| eslint/no-sequences                 | [Docs](https://eslint.org/docs/latest/rules/no-sequences)                 |
| eslint/no-shadow                    | [Docs](https://eslint.org/docs/latest/rules/no-shadow)                    |
| eslint/no-underscore-dangle         | [Docs](https://eslint.org/docs/latest/rules/no-underscore-dangle)         |
| eslint/no-unmodified-loop-condition | [Docs](https://eslint.org/docs/latest/rules/no-unmodified-loop-condition) |
| eslint/no-unreachable-loop          | [Docs](https://eslint.org/docs/latest/rules/no-unreachable-loop)          |
| eslint/no-use-before-define         | [Docs](https://eslint.org/docs/latest/rules/no-use-before-define)         |
| eslint/no-useless-assignment        | [Docs](https://eslint.org/docs/latest/rules/no-useless-assignment)        |
| eslint/no-useless-return            | [Docs](https://eslint.org/docs/latest/rules/no-useless-return)            |
| eslint/object-shorthand             | [Docs](https://eslint.org/docs/latest/rules/object-shorthand)             |
| eslint/one-var                      | [Docs](https://eslint.org/docs/latest/rules/one-var)                      |
| eslint/prefer-arrow-callback        | [Docs](https://eslint.org/docs/latest/rules/prefer-arrow-callback)        |
| eslint/prefer-const                 | [Docs](https://eslint.org/docs/latest/rules/prefer-const)                 |
| eslint/prefer-named-capture-group   | [Docs](https://eslint.org/docs/latest/rules/prefer-named-capture-group)   |
| eslint/prefer-regex-literals        | [Docs](https://eslint.org/docs/latest/rules/prefer-regex-literals)        |
| eslint/require-atomic-updates       | [Docs](https://eslint.org/docs/latest/rules/require-atomic-updates)       |
| eslint/require-unicode-regexp       | [Docs](https://eslint.org/docs/latest/rules/require-unicode-regexp)       |
| eslint/strict                       | [Docs](https://eslint.org/docs/latest/rules/strict)                       |
