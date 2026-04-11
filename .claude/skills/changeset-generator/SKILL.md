---
name: changeset-generator
description: Automatically generates a changeset file by analyzing git commits and changed files since branching from main. Replaces the manual `pnpm changeset add` step — detects which packages were modified, determines the appropriate bump type, and writes a user-friendly changeset description with code examples. TRIGGER when: user asks to create a changeset, generate release notes for a PR, prepare version bump, or runs /changeset-generator. DO NOT TRIGGER when: user is just committing code, reviewing PRs, or asking about changelog history.
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
3. **Asks how to group**: When multiple packages are changed, asks the user whether to bundle them into a single changeset or create separate changeset files per package
4. **Writes user-friendly description**: Transforms commit messages into a flat list of plain-sentence bullets (one per change) that render cleanly after the changelog's `- <commit-hash>:` prefix
5. **Creates the changeset file(s)**: Writes to `.changeset/<slug>.md` and shows it for review before committing

## How to Use

```
/changeset-generator
```

Analyzes all commits since branching from `main` and generates the changeset file.

## Changeset File Format

**IMPORTANT:** `pnpm changeset version` wraps every changeset body line as `- <commit-hash>: <content>` in the generated `CHANGELOG.md`. This means markdown headings (`###`), blank lines, and multi-paragraph content inside a changeset body will render as a broken list item. Keep the body as a flat list of plain sentences — one bullet per change — and do NOT use headings or section labels.

Good format (renders cleanly under `- abc1234: ...`):

````md
---
"@scope/package-a": minor
"@scope/package-b": patch
---

- Rename `@scope/package-a/old-name` export to `@scope/package-a/new-name`. Update imports to use the new path.
- Add new helper `formatFoo()` in `@scope/package-b` for formatting foo values.
- Fix crash in `@scope/package-a` when config is undefined.
````

Guidelines for each bullet:

- Write one self-contained sentence per change. If context is needed, add it inline — do not split across lines or paragraphs.
- Lead with the action verb (Add / Fix / Rename / Remove / Update).
- Mention affected exports, APIs, or files inline using backticks so the changelog is searchable.
- For breaking changes, state the before → after inline (e.g., "Rename `X` to `Y`") rather than using a separate heading.
- Do not use `###`, `**bold labels**`, blockquotes, or fenced code blocks inside the body — they will break the wrapped list item.

## Example

**User**: `/changeset-generator`

**Assistant**:
1. Runs `git diff main...HEAD --name-only` → finds changes in `packages/ui/` and `packages/utils/`
2. Reads commits → detects a renamed export in `@acme/ui` (breaking) + new helper added in `@acme/utils` (feature)
3. Infers bump types → `@acme/ui: minor`, `@acme/utils: minor`
4. Asks: "2 packages changed. Bundle into one changeset or create separate files per package?"
5. User: "Bundle them"
6. Generates `.changeset/fuzzy-lions-dance.md` and shows it for review
7. After approval, commits with `(changeset): 🦋 ...`

## Tips

- Run from the repo root after all code changes are committed
- Review the generated file before committing — bump type and description may need adjustment
- In monorepos, multiple packages can be included in one changeset file, each with a different bump type (e.g., `package-a: minor`, `package-b: patch`)
```
