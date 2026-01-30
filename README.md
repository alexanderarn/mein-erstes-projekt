# Mein erstes Projekt

## Workflow (Git + Codex + GitHub Pages)

### Grundprinzip
- `main` ist immer deploybar und live (GitHub Pages).
- Arbeit passiert in Feature-Branches.
- Codex darf umsetzen, ich reviewe per `git diff`, dann Merge.

### Feature-Workflow
```bash
# Start
git checkout main
git pull
git checkout -b feat/<topic>

# Checkpoint (vor Codex)
git add -A
git commit -m "checkpoint: before codex"

# Codex arbeitet (z.B. in VS Code)
DONE :D

# Review
git status
git diff

# Commit
git add -A
git commit -m "feat: <short description>"

# Push
git push -u origin feat/<topic>
