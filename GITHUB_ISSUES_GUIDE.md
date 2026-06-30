# GitHub Issues AI Workflow Guide

This guide defines the required workflow for AI Dev Agents to manage and track work via GitHub Issues and Milestones for this project.

**To all AI Dev Agents:** You MUST read and follow these instructions when performing tasks. Discipline in tracking work ensures the project remains organized and transparent.

---

## 1. Core Principles

- **Traceability:** Every code change, feature, or bug fix MUST be associated with a GitHub Issue.
- **Transparency:** The status of ongoing work must always be reflected in the repository's issues and comments.
- **Milestone Alignment:** Issues should be grouped into milestones to track progress towards larger goals.

## 2. Tools to Use

You have access to the `github-mcp-server` via MCP. Use its tools to interact with GitHub:
- `create_issue` / `issue_write`: Create new issues for new tasks.
- `issue_read` / `list_issues`: Check existing issues before creating duplicates.
- `add_issue_comment`: Update progress on long-running tasks.
- `create_pull_request`: (If applicable) Link to the issue.

## 3. Workflow Steps

### Step 1: Before Starting Work (Planning)
1. **Search for Existing Issues:** Use `search_issues` or `list_issues` to check if an issue already exists for the requested task.
2. **Create if Missing:** If no issue exists, create one using `issue_write`.
   - **Title format:** `[Feature]/[Bug]/[Task]: Brief description`
   - **Body format:**
     ```markdown
     ## Goal
     Brief description of the request.
     
     ## Checklist
     - [ ] Step 1
     - [ ] Step 2
     ```
3. **Assign Labels:** Only use **standard GitHub labels** (e.g., `bug`, `enhancement`, `documentation`, `duplicate`, `question`, `wontfix`). **Do not** invent custom labels (e.g., "error" or "task") because the GitHub API request will fail if the label does not already exist in the repository.
4. **Assign Milestones:** If the task belongs to an active milestone (check via `list_issues` or project milestones), ensure it is associated with that milestone (if the API supports it) or noted in the issue body.
5. **Acknowledge:** Add a comment (`add_issue_comment`) stating: *"AI Agent starting work on this issue."*

### Step 2: During Execution
- If the task is complex or takes multiple turns, periodically add comments to the issue with progress updates or implementation plans.
- If scope changes, update the issue body's checklist to reflect new requirements.

### Step 3: Completing Work
- **Commit Messages:** When modifying code, ensure your commit messages (if making commits) reference the issue number (e.g., `Fixes #123` or `Closes #123`).
- **Close the Issue:** Once the work is verified and complete, add a final comment summarizing the changes and close the issue using `issue_write` (by setting the state to `closed`).
- **Milestone Check:** Verify if closing the issue completes the current milestone.

---

## 4. Best Practices
- Do not create vague issues (e.g., "Fix stuff"). Be specific.
- Keep checklists updated so human collaborators can see exactly what is done and what is pending.
- If you encounter a roadblock or need human clarification, add a comment to the issue detailing the blocker and stop to ask the user.
