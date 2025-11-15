---
allowed-tools: Bash(git *), Bash(gh *), Bash(brew install gh)
description: Create a pull request
---

## Context

- Current git status: !`git status`
- Current branch: !`git branch --show-current`
- Recent commits on current branch: !`git log main..HEAD --oneline`
- Recent commit diffs on current branch: !`git log main..HEAD -p`

## Your task

Create a pull request for the current branch against the main branch on GitHub.

**Important:**

1. Ensure all changes are committed before creating the pull request
2. Use a clear and descriptive title for the pull request
3. Write a detailed description of the changes made in the pull request
4. Use Korean for the title and description. But `<scope>` in the title must be in English because it would be package name or directory name

**Steps:**

- First, ensure all changes are committed.
  - If there are uncommitted changes, reject this task and ask user to commit first
- Second, check all of the current branch commit ids ahead to target branch.
- Third, gather information about the changes made in the current branch
- Then, use the GitHub CLI to create a pull request with an appropriate title and description
  - Use `gh` commands to create the pull request
  - If `gh` is not installed, install it using `brew install gh`
  - Use the `Pull Request Template Format` section below for the pull request title and description
  - Create the pull request against the `main` branch
    - Use `gh pr create --base main --title "<title>" --body "<description>"`
- Finally, provide the URL of the created pull request

**Pull Request Template Format:**

- Title: `(<scope>): <short summary>`
- Body: Use the format from `.github/PULL_REQUEST_TEMPLATE.md` file in the repository. Fill in the description section with a summary of changes, issues fixed, motivation, context, and any dependencies.
