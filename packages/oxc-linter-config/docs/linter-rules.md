# Linter Rules 설명서

이 문서는 `@cocopalm/oxc-linter-config` 패키지에 구성된 모든 lint 규칙과 각 규칙을 추가한 이유를 설명합니다.

## 목차

- [Common Rules (공통 규칙)](#common-rules-공통-규칙)
  - [ESLint Rules](#eslint-rules)
  - [Import Rules](#import-rules)
  - [Promise Rules](#promise-rules)
  - [TypeScript Rules](#typescript-rules)
- [React Rules](#react-rules)
- [Node Rules](#node-rules)

---

## 규칙 철학

이 lint 설정의 핵심 철학은 다음과 같습니다:

1. **일관성**: 코드 스타일을 통일하여 팀 협업을 원활하게 합니다.
2. **안전성**: 런타임 에러와 버그를 사전에 방지합니다.
3. **현대적**: 최신 JavaScript/TypeScript 기능을 적극 활용합니다.
4. **성능**: 번들 크기 최적화와 트리 쉐이킹을 고려합니다.
5. **접근성**: React 프로젝트에서 웹 접근성을 준수합니다.

---

## 🔥 Common Rules (공통 규칙)

`oxlint-common.json`에 정의된 규칙들로, 모든 프로젝트에 공통적으로 적용됩니다.

### 📌 ESLint Rules

#### `eslint/no-unused-vars`

```json
["error", { "argsIgnorePattern": "^_+$", "ignoreRestSiblings": true }]
```

**이유**: 사용하지 않는 변수는 코드의 복잡성을 증가시키고 유지보수를 어렵게 만듭니다. `_`로 시작하는 인자는 의도적으로 사용하지 않는 것으로 간주하여 허용합니다. rest 연산자(`...`)로 분리된 속성도 허용합니다.

#### `eslint/no-useless-catch`

```json
"warn"
```

**이유**: 단순히 에러를 다시 던지기만 하는 catch 블록은 불필요한 코드입니다. 경고 수준으로 설정하여 리팩토링을 권장합니다.

#### `eslint/valid-typeof`

```json
["error", { "requireStringLiterals": true }]
```

**이유**: `typeof` 연산자의 결과를 비교할 때 문자열 리터럴만 허용하여 오타로 인한 버그를 방지합니다.

#### `eslint/array-callback-return`

```json
["error", { "allowImplicit": true, "checkForEach": true }]
```

**이유**: `map`, `filter`, `reduce` 등의 배열 메서드에서 반환값이 없으면 의도하지 않은 동작이 발생할 수 있습니다. `forEach`까지 체크하여 명시적인 반환을 강제합니다.

#### `eslint/block-scoped-var`

```json
"warn"
```

**이유**: 블록 스코프 밖에서 변수를 사용하는 것을 방지하여 호이스팅으로 인한 혼란을 줄입니다.

#### `eslint/curly`

```json
["error", "all"]
```

**이유**: 모든 제어문에 중괄호를 사용하도록 강제하여 코드의 가독성을 높이고, 실수로 인한 버그를 방지합니다.

#### `eslint/default-case-last`

```json
"error"
```

**이유**: `switch` 문에서 `default` 케이스는 항상 마지막에 위치해야 가독성이 좋습니다.

#### `eslint/eqeqeq`

```json
["error", "always", { "null": "ignore" }]
```

**이유**: 엄격한 동등 비교(`===`, `!==`)를 사용하여 타입 강제 변환으로 인한 예기치 않은 동작을 방지합니다. `null` 체크는 예외로 허용합니다.

#### `eslint/func-style`

```json
["error", "declaration", { "allowArrowFunctions": true }]
```

**이유**: 함수 선언문을 기본으로 사용하되, 화살표 함수도 허용하여 일관성 있는 코드 스타일을 유지합니다. 함수 선언문은 호이스팅되어 사용 편의성이 높습니다.

#### `eslint/max-depth`

```json
["warn", { "max": 4 }]
```

**이유**: 중첩 깊이가 4를 초과하면 코드의 복잡도가 높아지고 이해하기 어려워집니다. 리팩토링을 권장합니다.

#### `eslint/no-console`

```json
["error", { "allow": ["info", "warn", "error"] }]
```

**이유**: 디버깅용 `console.log`가 프로덕션 코드에 남는 것을 방지합니다. 로깅 목적의 `info`, `warn`, `error`는 허용합니다.

#### `eslint/no-duplicate-imports`

```json
["error", { "allowSeparateTypeImports": true }]
```

**이유**: 같은 모듈에서 여러 번 import하는 것을 방지하여 코드를 간결하게 유지합니다. TypeScript의 타입 import는 별도로 허용합니다.

#### `eslint/no-plusplus`

```json
"error"
```

**이유**: `++`, `--` 연산자는 세미콜론 자동 삽입과 관련된 버그를 유발할 수 있습니다. `+= 1`, `-= 1`을 사용하도록 강제합니다.

#### `eslint/no-var`

```json
"error"
```

**이유**: `var`는 함수 스코프를 가지므로 예기치 않은 동작을 유발할 수 있습니다. `let`과 `const`를 사용하도록 강제합니다.

#### `eslint/prefer-rest-params`

```json
"error"
```

**이유**: `arguments` 객체 대신 rest 파라미터를 사용하여 가독성과 타입 안정성을 높입니다.

#### `eslint/prefer-spread`

```json
"error"
```

**이유**: `apply` 대신 spread 연산자를 사용하여 코드를 더 명확하고 간결하게 만듭니다.

#### `eslint/prefer-template`

```json
"error"
```

**이유**: 문자열 연결 시 `+` 연산자 대신 템플릿 리터럴을 사용하여 가독성을 향상시킵니다.

#### `eslint/require-await`

```json
"error"
```

**이유**: `async` 함수 내부에서 `await`를 사용하지 않으면 불필요한 Promise 래핑이 발생합니다.

### 📌 Import Rules

#### `import/named`

```json
"off"
```

**이유**: TypeScript 컴파일러가 이미 체크하므로 중복 검사를 비활성화합니다.

#### `import/default`

```json
"off"
```

**이유**: TypeScript 컴파일러가 이미 체크하므로 중복 검사를 비활성화합니다.

#### `import/namespace`

```json
"off"
```

**이유**: TypeScript 컴파일러가 이미 체크하므로 중복 검사를 비활성화합니다.

#### `import/no-namespace`

```json
"error"
```

**이유**: namespace import(`import * as`)는 트리 쉐이킹을 방해하고 번들 크기를 증가시킵니다. 명시적인 named import를 권장합니다.

#### `import/no-self-import`

```json
"error"
```

**이유**: 파일이 자기 자신을 import하는 것은 순환 참조로 이어질 수 있으며, 거의 항상 실수입니다.

#### `import/first`

```json
"error"
```

**이유**: 모든 import 문을 파일 상단에 배치하여 의존성을 명확하게 파악할 수 있도록 합니다.

#### `import/no-unassigned-import`

```json
["error", { "allow": ["**/*.css", "**/*.scss"] }]
```

**이유**: 부수 효과만을 위한 import는 코드의 의도를 불명확하게 만듭니다. CSS/SCSS 파일은 예외로 허용합니다.

### 📌 Promise Rules

#### `promise/catch-or-return`

```json
["error", { "allowFinally": true }]
```

**이유**: Promise 체인은 반드시 `catch`나 `return`으로 처리되어야 에러가 누락되지 않습니다. `finally`도 허용합니다.

#### `promise/prefer-await-to-callbacks`

```json
"error"
```

**이유**: 콜백 패턴보다 async/await이 더 읽기 쉽고 에러 처리가 명확합니다.

#### `promise/prefer-await-to-then`

```json
"error"
```

**이유**: `.then()` 체이닝보다 async/await이 더 직관적이고 동기 코드처럼 읽힙니다.

#### `promise/no-multiple-resolved`

```json
"error"
```

**이유**: Promise에서 `resolve`나 `reject`를 여러 번 호출하는 것은 의도하지 않은 동작을 유발합니다.

#### `promise/spec-only`

```json
"warn"
```

**이유**: Promise 명세에 정의되지 않은 메서드 사용을 경고하여 호환성을 유지합니다.

### 📌 TypeScript Rules

TypeScript 파일(`*.ts`, `*.tsx`)에만 적용되는 규칙들입니다.

#### `typescript/no-unused-vars`

```json
["error", { "argsIgnorePattern": "^_+$", "ignoreRestSiblings": true }]
```

**이유**: JavaScript의 `no-unused-vars`를 비활성화하고 TypeScript용 규칙을 사용합니다. TypeScript의 특성을 더 잘 이해합니다.

#### `typescript/array-type`

```json
["error", { "default": "array" }]
```

**이유**: 배열 타입 표기를 `Type[]` 형식으로 통일하여 일관성을 유지합니다. (`Array<Type>`보다 간결함)

#### `typescript/consistent-indexed-object-style`

```json
["error", "record"]
```

**이유**: 인덱스 시그니처 대신 `Record<K, V>` 타입을 사용하여 의도를 명확하게 표현합니다.

#### `typescript/consistent-type-definitions`

```json
["error", "interface"]
```

**이유**: 객체 타입 정의 시 `type`보다 `interface`를 우선 사용하도록 강제합니다. `interface`는 확장이 쉽고 성능상 이점이 있습니다.

#### `typescript/consistent-type-imports`

```json
["error", { "prefer": "type-imports", "fixStyle": "separate-type-imports" }]
```

**이유**: 타입 전용 import를 명시적으로 분리하여 번들 크기를 줄이고 의도를 명확하게 합니다.

#### `typescript/no-import-type-side-effects`

```json
"error"
```

**이유**: `import type`을 사용할 때 부수 효과가 없도록 보장하여 타입 전용 import의 순수성을 유지합니다.

#### `typescript-eslint/prefer-enum-initializers`

```json
"error"
```

**이유**: enum의 모든 멤버에 명시적으로 값을 할당하여 의도하지 않은 값 할당을 방지합니다.

#### `typescript/prefer-function-type`

```json
"error"
```

**이유**: 단일 호출 시그니처를 가진 interface는 함수 타입으로 표현하는 것이 더 간결합니다.

#### `typescript/prefer-literal-enum-member`

```json
"error"
```

**이유**: enum 멤버의 값은 리터럴만 허용하여 예측 가능하고 안전한 enum을 만듭니다.

---

## 🔥 FE Rules

`oxlint-react.json`에 정의된 React 프로젝트 전용 규칙들입니다.

### 📌 React Rules

- `react`: React 관련 규칙
- `nextjs`: Next.js 관련 규칙
- `jsx-a11y`: 접근성(a11y) 관련 규칙

#### `react/button-has-type`

```json
"warn"
```

**이유**: `<button>` 요소는 명시적으로 `type` 속성을 지정해야 합니다. 기본값이 `submit`이므로 의도하지 않은 폼 제출이 발생할 수 있습니다.

#### `react/forward-ref-uses-ref`

```json
"error"
```

**이유**: `forwardRef`로 래핑된 컴포넌트는 실제로 ref를 사용해야 합니다. 사용하지 않으면 불필요한 래핑입니다.

#### `react/jsx-boolean-value`

```json
["warn", "never", { "assumeUndefinedIsFalse": true }]
```

**이유**: boolean props에 명시적으로 `={true}`를 작성하는 것을 지양합니다. `<Component isActive />`가 더 간결합니다.

#### `react/jsx-handler-names`

```json
[
  "warn",
  {
    "eventHandlerPrefix": "handle",
    "eventHandlerPropPrefix": "on"
  }
]
```

**이유**: 이벤트 핸들러 함수는 `handle`로, props는 `on`으로 시작하도록 권장하여 일관성을 유지합니다.

- 함수: `handleClick`, `handleChange`
- Props: `onClick`, `onChange`

#### `react/jsx-no-useless-fragment`

```json
["warn", { "allowExpressions": true }]
```

**이유**: 불필요한 Fragment(`<>...</>`)를 제거하여 코드를 간결하게 유지합니다. 표현식은 허용합니다.

#### `react/jsx-pascal-case`

```json
"error"
```

**이유**: React 컴포넌트는 PascalCase를 사용하여 HTML 요소와 구분합니다.

#### `react/no-namespace`

```json
"error"
```

**이유**: JSX에서 namespace(예: `<Namespace.Component>`)를 사용하지 않도록 합니다. React에서는 지원하지 않습니다.

#### `react/self-closing-comp`

```json
[
  "error",
  {
    "component": true,
    "html": true
  }
]
```

**이유**: 자식이 없는 컴포넌트와 HTML 요소는 자체 닫기 태그(`<Component />`)를 사용하여 코드를 간결하게 만듭니다.

#### `react/style-prop-object`

```json
"error"
```

**이유**: `style` prop은 반드시 객체여야 합니다. 문자열을 허용하면 XSS 취약점이 발생할 수 있습니다.

#### `react/void-dom-elements-no-children`

```json
"error"
```

**이유**: `<img>`, `<br>`, `<input>` 등의 void 요소는 자식을 가질 수 없습니다. 이를 방지하여 HTML 표준을 준수합니다.

### 📌 JSX A11y Rules (접근성)

접근성(Accessibility)은 모든 사용자가 웹 애플리케이션을 사용할 수 있도록 보장하는 중요한 요소입니다.

#### `jsx-a11y/click-events-have-key-events`

```json
"off"
```

**이유**: 클릭 이벤트에 대응하는 키보드 이벤트를 강제하는 규칙입니다. 현재는 off로 설정되어 있지만, 접근성을 위해 프로젝트에 따라 활성화를 고려할 수 있습니다.

#### `jsx-a11y/img-redundant-alt`

```json
"warn"
```

**이유**: 이미지의 `alt` 텍스트에 "image", "photo", "picture" 등의 중복된 단어를 사용하는 것을 경고합니다. 스크린 리더가 이미 이미지임을 알려주므로 불필요합니다.

#### `jsx-a11y/media-has-caption`

```json
"off"
```

**이유**: 비디오나 오디오 요소에 자막을 요구하는 규칙입니다. 현재는 off로 설정되어 있지만, 접근성을 위해 프로젝트에 따라 활성화를 고려할 수 있습니다.

#### `jsx-a11y/mouse-events-have-key-events`

```json
"off"
```

**이유**: 마우스 이벤트에 대응하는 키보드 이벤트를 강제하는 규칙입니다. 현재는 off로 설정되어 있지만, 접근성을 위해 프로젝트에 따라 활성화를 고려할 수 있습니다.

#### `jsx-a11y/no-noninteractive-tabindex`

```json
"warn"
```

**이유**: 상호작용하지 않는 요소(div, span 등)에 `tabIndex`를 설정하는 것을 경고합니다. 키보드 네비게이션의 혼란을 방지합니다.

#### `jsx-a11y/no-redundant-roles`

```json
"warn"
```

**이유**: HTML 요소의 기본 역할과 동일한 `role` 속성을 중복으로 지정하는 것을 경고합니다. 예: `<button role="button">`

#### `jsx-a11y/role-has-required-aria-props`

```json
"warn"
```

**이유**: 특정 ARIA `role`을 사용할 때 필수적인 ARIA 속성이 누락되지 않도록 경고합니다. 스크린 리더가 올바르게 동작하도록 보장합니다.

#### `jsx-a11y/role-supports-aria-props`

```json
"warn"
```

**이유**: 특정 `role`에서 지원하지 않는 ARIA 속성을 사용하는 것을 경고합니다. 유효하지 않은 ARIA 조합을 방지합니다.

#### `jsx-a11y/tabindex-no-positive`

```json
"warn"
```

**이유**: 양수 `tabIndex` 값 사용을 경고합니다. 양수 값은 키보드 네비게이션 순서를 예측하기 어렵게 만들므로 `0` 또는 `-1`만 사용하도록 권장합니다.

#### `jsx-a11y/prefer-tag-over-role`

```json
"warn"
```

**이유**: ARIA `role`을 사용하는 대신 의미론적인 HTML 태그를 우선 사용하도록 권장합니다. 예: `<div role="button">` 대신 `<button>` 사용

---

## 🔥 Node Rules

`oxlint-node.json`에 정의된 Node.js 프로젝트 전용 규칙들입니다.

### 플러그인

- `node`: Node.js 관련 규칙

현재 이 설정 파일에는 추가적인 규칙이 정의되어 있지 않으며, 플러그인만 활성화되어 있습니다. Node.js 플러그인의 기본 권장 규칙들이 적용됩니다.
