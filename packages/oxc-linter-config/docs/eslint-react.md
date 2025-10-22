## eslint react

[GitHub Issue](https://github.com/oxc-project/oxc/issues/1022)

하기 규칙들은 oxc-linter-config 구성 당시 미구현 상태였습니다.  
구현이 마무리되면 적용 검토가 필요합니다.

### Not recommended rules

| Rule                                       | Documentation                                                                                                            |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| react/boolean-prop-naming                  | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/boolean-prop-naming.md)                  |
| react/default-props-match-prop-types       | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/default-props-match-prop-types.md)       |
| react/destructuring-assignment             | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/destructuring-assignment.md)             |
| react/forbid-component-props               | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-component-props.md)               |
| react/forbid-foreign-prop-types            | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-foreign-prop-types.md)            |
| react/forbid-prop-types                    | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-prop-types.md)                    |
| react/function-component-definition        | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/function-component-definition.md)        |
| react/hook-use-state                       | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/hook-use-state.md)                       |
| react/jsx-child-element-spacing            | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-child-element-spacing.md)            |
| react/jsx-closing-bracket-location         | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-closing-bracket-location.md)         |
| react/jsx-closing-tag-location             | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-closing-tag-location.md)             |
| react/jsx-curly-newline                    | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-newline.md)                    |
| react/jsx-first-prop-new-line              | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-first-prop-new-line.md)              |
| react/jsx-max-depth                        | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-max-depth.md)                        |
| react/jsx-max-props-per-line               | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-max-props-per-line.md)               |
| react/jsx-newline                          | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-newline.md)                          |
| react/jsx-no-bind                          | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-bind.md)                          |
| react/jsx-no-constructed-context-values    | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-constructed-context-values.md)    |
| react/jsx-no-leaked-render                 | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-leaked-render.md)                 |
| react/jsx-no-literals                      | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-literals.md)                      |
| react/jsx-one-expression-per-line          | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-one-expression-per-line.md)          |
| react/jsx-props-no-spreading               | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-props-no-spreading.md)               |
| react/jsx-sort-props                       | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-sort-props.md)                       |
| react/jsx-tag-spacing                      | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-tag-spacing.md)                      |
| react/jsx-wrap-multilines                  | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-wrap-multilines.md)                  |
| react/no-invalid-html-attribute            | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-invalid-html-attribute.md)            |
| react/no-access-state-in-setstate          | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-access-state-in-setstate.md)          |
| react/no-adjacent-inline-elements          | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-adjacent-inline-elements.md)          |
| react/no-arrow-function-lifecycle          | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-arrow-function-lifecycle.md)          |
| react/no-did-mount-set-state               | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-did-mount-set-state.md)               |
| react/no-did-update-set-state              | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-did-update-set-state.md)              |
| react/no-multi-comp                        | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-multi-comp.md)                        |
| react/no-redundant-should-component-update | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-redundant-should-component-update.md) |
| react/no-this-in-sfc                       | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-this-in-sfc.md)                       |
| react/no-typos                             | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-typos.md)                             |
| react/no-unsafe                            | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unsafe.md)                            |
| react/no-unstable-nested-components        | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unstable-nested-components.md)        |
| react/no-unused-class-component-methods    | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unused-class-component-methods.md)    |
| react/no-unused-prop-types                 | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unused-prop-types.md)                 |
| react/no-unused-state                      | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unused-state.md)                      |
| react/no-object-type-as-default-prop       | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-object-type-as-default-prop.md)       |
| react/no-will-update-set-state             | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-will-update-set-state.md)             |
| react/prefer-exact-props                   | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-exact-props.md)                   |
| react/prefer-read-only-props               | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-read-only-props.md)               |
| react/prefer-stateless-function            | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-stateless-function.md)            |
| react/require-default-props                | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-default-props.md)                |
| react/require-optimization                 | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-optimization.md)                 |
| react/sort-comp                            | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/sort-comp.md)                            |
| react/sort-default-props                   | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/sort-default-props.md)                   |
| react/sort-prop-types                      | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/sort-prop-types.md)                      |
| react/state-in-constructor                 | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/state-in-constructor.md)                 |
| react/static-property-placement            | [Docs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/static-property-placement.md)            |
| react/hooks                                |                                                                                                                          |
| react/capitalized-calls                    |                                                                                                                          |
| react/void-use-memo                        |                                                                                                                          |
| react/memoized-effect-dependencies         |                                                                                                                          |
| react/no-deriving-state-in-effects         |                                                                                                                          |
| react/invariant                            |                                                                                                                          |
| react/todo                                 |                                                                                                                          |
| react/syntax                               |                                                                                                                          |
| react/rule-suppression                     |                                                                                                                          |
| react/automatic-effect-dependencies        |                                                                                                                          |
| react/fire                                 |                                                                                                                          |
| react/fbt                                  |                                                                                                                          |
