---
name: changeset-generator
description: Automatically generates a changeset file by analyzing git commits and changed files since branching from main. Replaces the manual `pnpm changeset add` step — detects which packages were modified, determines the appropriate bump type, and writes a user-friendly changeset description with code examples.
---

# Changeset Generator

This skill replaces `pnpm changeset add` by automatically analyzing git changes and generating a properly formatted `.changeset/*.md` file ready to commit.

## When to Use This Skill

- After finishing a feature or fix, before opening a PR
- When you want to skip the interactive `pnpm changeset add` prompt
- When you want a well-written, user-facing changeset description generated automatically

## What This Skill Does

1. **Detects changed packages**: Runs `git diff main...HEAD --name-only` to find which packages under `packages/` were modified
2. **Determines bump type** per package:
   - Breaking changes (renamed exports, removed APIs) → `minor` for `0.x` projects, `major` for `1.x+`
   - New features, new entry points → `minor`
   - Bug fixes, dependency bumps → `patch`
   - Docs/CI/refactor with no API impact → excluded by default
3. **Writes user-friendly description**: Transforms commit messages into clear release notes with code examples for breaking changes or new APIs
4. **Creates the changeset file**: Writes to `.changeset/<slug>.md` and shows it for review before committing

## How to Use

```
/changeset-generator
```

Analyzes all commits since branching from `main` and generates the changeset file.

## Changeset File Format

````md
---
"@scope/package-a": minor
"@scope/package-b": patch
---

### Breaking Changes

- Description with before/after code examples

  ```ts
  // Before
  import foo from "@scope/package-a/old-name";

  // After
  import foo from "@scope/package-a/new-name";
  ```
````

### New Features

- Description with usage example

### Bug Fixes

- Description

```

## Example

**User**: `/changeset-generator`

**Assistant**:
1. Runs `git diff main...HEAD --name-only` → finds changes in `packages/ui/` and `packages/utils/`
2. Reads commits → detects a renamed export in `@acme/ui` (breaking) + new helper added in `@acme/utils` (feature)
3. Infers bump types → `@acme/ui: minor`, `@acme/utils: minor`
4. Generates `.changeset/fuzzy-lions-dance.md` and shows it for review
5. After approval, commits with `(changeset): 🦋 ...`

## Tips

- Run from the repo root after all code changes are committed
- Review the generated file before committing — bump type and description may need adjustment
- For monorepos, each changed package gets its own bump type entry
```
